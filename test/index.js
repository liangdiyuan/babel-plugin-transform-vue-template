new Vue({
  el: "#app",
  data: function () {
    return {
      age: 18,
    };
  },
   /** h--- */
  /* h */
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
  `,
  tes: {},
});

var a = {
    /* h */
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
}


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
}

var d = {
   /* h */
  template: ``
}

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
`

var b = {
  /* h */
  /* redevn */
  template: template
};


[
  function _staticRender1(_h, _vm) {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("section", [_c("p", [_vm._v("Static component, probably")])]);
  },
  function _staticRender2(_h, _vm) {
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c("section", [
      _c("p", [_vm._v("Static component, probably again")]),
    ]);
  },
]
