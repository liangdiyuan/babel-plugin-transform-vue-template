# babel-plugin-transform-vue-inline-template-next

#### 介绍
转换内联vue template 模板 Babel 插件，外部依赖vue-template-compiler，使用时必须根据不同的vue版本安装对应的vue-template-compiler。


#### 安装教程

```
1.  npm install -D babel-plugin-transform-vue-inline-template-next
```

#### 使用说明

babel 配置
```
{
     plugins: [['babel-plugin-transform-vue-inline-template-next']],
}
```

在vue的内联模板template上方加上魔法注释 /* h */，打包时便会识别到编译成render函数。


代码示例
```
new Vue({
  el: "#app",
  data: function () {
    return {
      test2: 18,
      test: "test"
    };
  },
  /* h */
  template: `
    <div v-show="test2 > 1" @click="testFn" :test="test2">{{test}}</div>
  `,
  methods:{
    testFn(){
      console.log(this.test2)
      this.test2--;
    }
  }
});

// or

var test = {
  el: "#app",
  data: function () {
    return {
      test2: 18,
      test: "test"
    };
  },
  /* h */
  template: `
    <div v-show="test2 > 1" @click="testFn" :test="test2">{{test}}</div>
  `,
  methods:{
    testFn(){
      console.log(this.test2)
      this.test2--;
    }
  }
}
```
编译后的代码
```
new Vue({
  el: "#app",
  data: function data() {
    return {
      test2: 18,
      test: "test"
    };
  },
  render: function _render1() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.test2 > 1,
        expression: "test2 > 1"
      }],
      attrs: {
        "test": _vm.test2
      },
      on: {
        "click": _vm.testFn
      }
    }, [_vm._v(_vm._s(_vm.test))]);
  },
  methods: {
    testFn: function testFn() {
      console.log(this.test2);
      this.test2--;
    }
  }
});


// or

var test = {
  el: "#app",
  data: function () {
    return {
      test2: 18,
      test: "test"
    };
  },
  render: function _render1() {
    var _vm = this;

    var _h = _vm.$createElement;

    var _c = _vm._self._c || _h;

    return _c('div', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: _vm.test2 > 1,
        expression: "test2 > 1"
      }],
      attrs: {
        "test": _vm.test2
      },
      on: {
        "click": _vm.testFn
      }
    }, [_vm._v(_vm._s(_vm.test))]);
  },
  methods:{
    testFn(){
      console.log(this.test2)
      this.test2--;
    }
  }
}

```

自定义魔法注释
```
// flagStr 标记编译，ignoreFlagStr标记忽略编译，只有开启全量编译ignoreFlagStr才有效
{
  plugins: [['babel-plugin-transform-vue-inline-template-next', {flagStr: "自定义魔法注释"， ignoreFlagStr: "custom ignore1"}]],
}
```


全量编译会忽略flagStr魔法注释，所有的vue内联都会编译

```
// compileAll 
{
  plugins: [['babel-plugin-transform-vue-inline-template-next', {compileAll: true}]],
}
```

可以用过魔法注释/* ignore1 */忽略编译

```
new Vue({
  el: "#app",
  data: function () {
    return {
      test2: 18,
      test: "test"
    };
  },
  /* ignore1 */
  template: `
    <div v-show="test2 > 1" @click="testFn" :test="test2">{{test}}</div>
  `,
  methods:{
    testFn(){
      console.log(this.test2)
      this.test2--;
    }
  }
});
```
