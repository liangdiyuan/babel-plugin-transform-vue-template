# babel-plugin-transform-vue-inline-template-next

#### 介绍

转换内联 vue template 模板 Babel 插件，外部依赖 vue-template-compiler、vue-template-es2015-compiler，使用时必须根据不同的 vue 版本安装对应的 vue-template-compiler、vue-template-es2015-compiler。

#### 安装教程

```bash
1.  npm install -D babel-plugin-transform-vue-inline-template-next
```

#### 1.4 版本更新，添加自定义 vue-template-compile、vue-template-es2015-compiler 配置项

vueTemplateCompilerOpts、 vueTemplateEs2015CompilerOpts，与 vue-template-compile、vue-template-es2015-compiler 配置一样，默认配置也一样。

#### 使用说明

babel 配置

```js
{
     plugins: [
      ['babel-plugin-transform-vue-inline-template-next', {
          flagStr: "h", // 标记编译魔法注释，全量编译不开启时，在代码中添加该魔法注释，将编译代码
          compileAll: false, // 是否开启全量编译
          ignoreFlagStr: "ignore", // 忽略编译魔法注释，全量编译开启时，在代码中添加该魔法注释，将忽略编译代码
          vueTemplateCompilerOpts: {  // vue-template-compile 配置
            whitespace: "condense",
            pad: "line",
          },
          vueTemplateEs2015CompilerOpts: { // vue-template-es2015-compiler 配置
            modules: false,
            stripWith: true,
            stripWithFunctional: false,
          },
        }
      ]
    ],
}
```

在 vue 的内联模板 template 上方加上魔法注释 /* h */，打包时便会识别到编译成 render 函数。

代码示例

```js
new Vue({
  el: "#app",
  data: function () {
    return {
      test2: 18,
      test: "test",
    };
  },
  /* h */
  template: `
    <div v-show="test2 > 1" @click="testFn" :test="test2">{{test}}</div>
  `,
  methods: {
    testFn() {
      console.log(this.test2);
      this.test2--;
    },
  },
});

// or

var test = {
  el: "#app",
  data: function () {
    return {
      test2: 18,
      test: "test",
    };
  },
  /* h */
  template: `
    <div v-show="test2 > 1" @click="testFn" :test="test2">{{test}}</div>
  `,
  methods: {
    testFn() {
      console.log(this.test2);
      this.test2--;
    },
  },
};
```

编译后的代码

```js
new Vue({
  el: "#app",
  data: function data() {
    return {
      test2: 18,
      test: "test",
    };
  },
  render: function _render1() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.test2 > 1,
            expression: "test2 > 1",
          },
        ],
        attrs: {
          test: _vm.test2,
        },
        on: {
          click: _vm.testFn,
        },
      },
      [_vm._v(_vm._s(_vm.test))]
    );
  },
  methods: {
    testFn: function testFn() {
      console.log(this.test2);
      this.test2--;
    },
  },
});

// or

var test = {
  el: "#app",
  data: function () {
    return {
      test2: 18,
      test: "test",
    };
  },
  render: function _render1() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.test2 > 1,
            expression: "test2 > 1",
          },
        ],
        attrs: {
          test: _vm.test2,
        },
        on: {
          click: _vm.testFn,
        },
      },
      [_vm._v(_vm._s(_vm.test))]
    );
  },
  methods: {
    testFn() {
      console.log(this.test2);
      this.test2--;
    },
  },
};
```

自定义魔法注释

```js
// flagStr 标记编译，ignoreFlagStr标记忽略编译，只有开启全量编译ignoreFlagStr才有效
{
  plugins: [['babel-plugin-transform-vue-inline-template-next', {
      flagStr: "custom h"， 
      ignoreFlagStr: "custom ignore1"
    }
  ]],
}
```

全量编译会忽略 flagStr 魔法注释，所有的 vue 内联都会编译

```js
// compileAll
{
  plugins: [['babel-plugin-transform-vue-inline-template-next',
   {compileAll: true}
  ]],
}
```

可以用过魔法注释/* ignore1 */忽略编译

```js
new Vue({
  el: "#app",
  data: function () {
    return {
      test2: 18,
      test: "test",
    };
  },
  /* ignore1 */
  template: `
    <div v-show="test2 > 1" @click="testFn" :test="test2">{{test}}</div>
  `,
  methods: {
    testFn() {
      console.log(this.test2);
      this.test2--;
    },
  },
});
```
