const babelPluginTransformVueTemplate = require("./lib/indes");

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [[babelPluginTransformVueTemplate]],
  };
};
