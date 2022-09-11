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
          const {
            flagStr = "h",
            compileAll = false,
            ignoreFlagStr = "ignore",
            vueTemplateCompilerOpts = {},
            vueTemplateEs2015CompilerOpts = {},
          } = state.opts;
          const codeFlag = value.trim();
          const flag_1 = type === "CommentBlock" && codeFlag === flagStr;
          const flag_2 = compileAll && codeFlag !== ignoreFlagStr;
          const isFlag = flag_1 || flag_2;

          if (!isFlag) return;

          // 获取模板字符串的值
          let { raw } = quasis[0].value;
          const compiled = vueCompiler.compile(raw, vueTemplateCompilerOpts);

          // 解析错误，抛出错误
          if (compiled.errors.length > 0) {
            throw path.buildCodeFrameError(compiled.errors[0]);
          }

          // 生成 render 函数
          const render = toFunction(
            "render",
            compiled.render,
            vueTemplateEs2015CompilerOpts
          );
          path.replaceWithSourceString(render);
          parentPath.node.key.name = "render";
          leadingComments.pop(); // 删除魔法注释

          // 是否有静态子节点
          if (compiled.staticRenderFns.length > 0) {
            // 生成 staticRender 函数
            const staticRenderFns = `[${compiled.staticRenderFns
              .map((fn) =>
                toFunction("staticRender", fn, vueTemplateEs2015CompilerOpts)
              )
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
 * @param {String} name
 * @param {String} code
 * @param {Object} opts
 */
function toFunction(name = "_", code, opts) {
  return vueTranspile(
    `function _${name}${fnId++}(${
      opts.stripWithFunctional ? "_h,_vm" : ""
    }){${code}}`,
    opts
  );
}
