const babelPluginTransformVueTemplate = require("babel-plugin-transform-vue-inline-template-next");

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [[babelPluginTransformVueTemplate]],
  };
};
