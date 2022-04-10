// const babelPluginTransformVueTemplate = require("./lib/index");

module.exports = function (api) {
  api.cache(true);
  return {
    plugins: [['babel-plugin-transform-vue-inline-template-next']],
  };
};
