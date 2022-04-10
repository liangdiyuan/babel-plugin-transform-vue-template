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


