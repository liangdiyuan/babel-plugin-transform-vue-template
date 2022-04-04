const babelPluginTransformVueTemplate = require("./src/indes");

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [[babelPluginTransformVueTemplate]],
  };
};
