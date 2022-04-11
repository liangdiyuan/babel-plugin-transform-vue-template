new Vue({
  el: "#app",
  data: function () {
    return {
      age: 18
    };
  },

  /* custom ignore1 */
  template: `
    <div @click="testFn" :test="test2">{{test}}</div>
  `,
  tes: {}
});
var a = {
  render: function _render0() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      attrs: {
        "test": _vm.test2
      },
      on: {
        "click": _vm.testFn
      }
    }, [_vm._v(_vm._s(_vm.test))]);
  }
};
var c = {
  /* custom ignore1 */
  template: `
    <div @click="testFn" :test="test2">{{test}}</div>
  `
}; // ignore

var e = {
  render: function _render1() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      attrs: {
        "test": _vm.test2
      },
      on: {
        "click": _vm.testFn
      }
    }, [_vm._v(_vm._s(_vm.test))]);
  }
};
var d = {
  render: function _render2() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div");
  }
};
var template = `
<div @click="testFn" :test="test2">{{test}}</div>
`;
var b = {
  template: template
};
