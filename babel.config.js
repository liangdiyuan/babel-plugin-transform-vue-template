const babelPluginTransformVueTemplate = require("./lib/index");

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [[babelPluginTransformVueTemplate, {compileAll: true, ignoreFlagStr: "custom ignore1"}]],
  };
};
