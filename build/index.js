new Vue({
  el: "#app",
  data: function () {
    return {
      age: 18
    };
  },

  /** h--- */
  render: function _render0() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('main', [_c('section', [_c('h1', [_vm._v("Todo List")]), _vm._l(_vm.items, function (item) {
      return _c('ul', [!item.done ? _c('li', [_vm._v(_vm._s(item.label))]) : _vm._e()]);
    })], 2), _c('section', [_c('test-component')], 1), _vm._m(0), _vm._m(1)]);
  },
  staticRenderFns: [function _staticRender1() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('section', [_c('p', [_vm._v("Static component, probably")])]);
  }, function _staticRender2() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('section', [_c('p', [_vm._v("Static component, probably again")])]);
  }],
  tes: {}
});
var a = {
  render: function _render3() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('main', [_c('section', [_c('h1', [_vm._v("Todo List")]), _vm._l(_vm.items, function (item) {
      return _c('ul', [!item.done ? _c('li', [_vm._v(_vm._s(item.label))]) : _vm._e()]);
    })], 2), _c('section', [_c('test-component')], 1), _vm._m(0), _vm._m(1)]);
  },
  staticRenderFns: [function _staticRender4() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('section', [_c('p', [_vm._v("Static component, probably")])]);
  }, function _staticRender5() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('section', [_c('p', [_vm._v("Static component, probably again")])]);
  }]
};
var c = {
  template: `
  <main>
    <section>
      <h1>Todo List</h1>
      <ul v-for="item in items">
        <li v-if="!item.done">{{ item.label }}</li>
      </ul>
    </section>
    <section>
      <test-component></test-component>
    </section>
    <section>
      <p>Static component, probably</p>
    </section>
    <section>
      <p>Static component, probably again</p>
    </section>
</main>
`
};
var d = {
  render: function _render6() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c("div");
  }
};
/* h */

var template = `
<main>
  <section>
    <h1>Todo List</h1>
    <ul v-for="item in items">
      <li v-if="!item.done">{{ item.label }}</li>
    </ul>
  </section>
  <section>
    <test-component></test-component>
  </section>
  <section>
    <p>Static component, probably</p>
  </section>
  <section>
    <p>Static component, probably again</p>
  </section>
</main>
`;
var b = {
  /* h */

  /* redevn */
  template: template
};
