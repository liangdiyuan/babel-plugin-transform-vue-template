new Vue({
  el: "#app",
  data: function () {
    return {
      age: 18,
    };
  },
  /* custom ignore1 */
  template: `
    <div @click="testFn" :test="test2">{{test}}</div>
  `,
  tes: {},
});


var a = {
    /* ignore */
    template: `
      <div @click="testFn" :test="test2">{{test}}</div>
    `
}

var c = {
  /* custom ignore1 */
  template: `
    <div @click="testFn" :test="test2">{{test}}</div>
  `
}


// ignore
var e = {
  template: `
    <div @click="testFn" :test="test2">{{test}}</div>
  `
}

var d = {
  template: ``
}

var template = `
<div @click="testFn" :test="test2">{{test}}</div>
`

var b = {
  template: template
};


