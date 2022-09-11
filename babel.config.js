const babelPluginTransformVueTemplate = require("./lib/index");

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [
      [
        babelPluginTransformVueTemplate,
        {
          flagStr: "h",
          compileAll: false,
          ignoreFlagStr: "ignore",
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
