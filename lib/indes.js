const vueCompiler = require("vue-template-compiler");
const vueTranspile = require("vue-template-es2015-compiler");

module.exports = function babelPluginTransformVueTemplate({
  parseSync,
  types: t,
}) {
  return {
    visitor: {
      TemplateLiteral: {
        enter(path, state) {
          const { parentPath } = path;
          const isFit =
            t.isObjectProperty(parentPath) &&
            t.isIdentifier(parentPath.node.key, { name: "template" });
          if (!isFit) return;
          const { leadingComments = [] } = parentPath.node;
          const { quasis } = path.node;
          const { type, value = "" } = leadingComments.slice(-1)[0] || {};
          const { flagStr = "h", stripWithFunctional = false } = state.opts;
          const isFlag = type === "CommentBlock" && value.trim() === flagStr;
          if (!isFlag) return;

          // 获取模板字符串的值
          let { raw } = quasis[0].value;
          const compiled = vueCompiler.compile(raw, {
            preserveWhitespace: false,
          });

          // 解析错误，抛出错误
          if (compiled.errors.length > 0) {
            throw path.buildCodeFrameError(compiled.errors[0]);
          }

          // 生成 render 函数
          const render = toFunction(
            "render",
            compiled.render,
            stripWithFunctional
          );
          path.replaceWithSourceString(render);
          parentPath.node.key.name = "render";
          leadingComments.pop(); // 删除魔法注释

          // 是否有静态子节点
          if (compiled.staticRenderFns.length > 0) {
            // 生成 staticRender 函数
            const staticRenderFns = `[${compiled.staticRenderFns
              .map((fn) => toFunction("staticRender", fn, stripWithFunctional))
              .join(",")}]`;

            // 转成AST树
            const staticRenderFnsAST = parseSync(staticRenderFns);
            const staticRenderFnsVal =
              staticRenderFnsAST.program.body[0].expression;
            const staticRenderFnsKey = t.identifier("staticRenderFns");
            // 插入节点
            parentPath.insertAfter(
              t.objectProperty(staticRenderFnsKey, staticRenderFnsVal)
            );
          }
        },
      },
    },
  };
};

let fnId = 0;
/**
 * stolen from https://github.com/vuejs/vue-loader/blob/52658f0891ed0bf173189eb6b5e3a26d102db81d/lib/template-compiler/index.js#L97
 *
 * @param {string} name
 * @param {string} code
 * @param {boolean} stripWithFunctional
 */
function toFunction(name = "_", code, stripWithFunctional) {
  return vueTranspile(
    `function _${name}${fnId++}(${
      stripWithFunctional ? "_h,_vm" : ""
    }){${code}}`
  );
}
