# babel-plugin-transform-vue-template

#### 介绍
转换内联vue template 模板 Babel 插件，外部依赖vue-template-compiler、vue-template-es2015-compiler，使用时必须根据不同的vue版本安装对应的vue-template-compiler、vue-template-es2015-compiler。


#### 安装教程

```
1.  npm install -D @babel/transform-vue-inline-template
```

#### 使用说明

babel 配置
```
{
     plugins: [[babelPluginTransformVueTemplate]],
}
```

在vue的内联模板template上方加上魔法注释 /* h */，打包时便会识别到编译成render函数。


代码示例
```
new Vue({
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
});
```
自定义魔法注释
```
{
  plugins: [[babelPluginTransformVueTemplate, {flagStr: "自定义魔法注释"}]],
}
```
