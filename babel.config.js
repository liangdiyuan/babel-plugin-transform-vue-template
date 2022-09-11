const babelPluginTransformVueTemplate = require("./lib/index");

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        babelPluginTransformVueTemplate,
        {
          flagStr: "h", // 标记编译魔法注释，全量编译不开启时，在代码中添加该魔法注释，将编译代码
          compileAll: false, // 是否开启全量编译
          ignoreFlagStr: "ignore", // 忽略编译魔法注释，全量编译开启时，在代码中添加该魔法注释，将忽略编译代码
          vueTemplateCompilerOpts: { // vue-template-compile 配置
            whitespace: "condense",
            pad: "line",
          },
          vueTemplateEs2015CompilerOpts: { // vue-template-es2015-compiler 配置
            modules: false,
            stripWith: true,
            stripWithFunctional: false,
          },
        },
      ],
    ],
  };
};
