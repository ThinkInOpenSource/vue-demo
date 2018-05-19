# vue-demo
vue-demo 实践

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
