# vue-demo
vue-demo 实践

- [Vue官方文档](https://cn.vuejs.org/v2/guide/)
- [Vuex官方文档](https://vuex.vuejs.org/zh-cn/intro.html) - [vuex入门文](https://segmentfault.com/a/1190000009404727)
- [element-ui](http://element-cn.eleme.io/#/zh-CN)

#### 使用webpack构建vue项目

```
vue init webpack vue-name
cd vue-name
npm install
npm run dev
```

#### 使用less

安装less依赖
```
npm install less less-loader --save
```
xx.vue组件中使用less
```
<style scoped lang="less">
h1, h2 {
  font-weight: normal;
}
a {
  color: #42b983;
}
</style>
```
