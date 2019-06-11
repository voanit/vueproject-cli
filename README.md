# Webpack4+Vue2+ElementUI2项目搭建
1、第一步：使用npm全局安装webpack和vue-cli（如果安装速度慢，可以使用cnpm淘宝镜像安装,直接百度就有）
```bash
$ npm install webpack vue-cli -g
```
2、第二步：使用vue init命令创建模板文件（如果这时报错vue不是指定命令，请看后文报错总结） 
vue init 你用的模板工具 项目名称 (这里采用webpack作为模板工具)
```bash
$ vue init webpack sharismSpace-personel
```

这样，我们就创建好了一个vue+webpack项目

3、第三步：安装element-ui
```bash
$ cnpm install -S element-ui 
```
4、第四步：使用babel-plugin-component来实现element-ui模块按需加载
```bash
$ cnpm install babel-plugin-component -D
```
5、第五步：然后，在 .babelrc的plugins中添加element-ui组件配置：
 
```bash
{
  "presets": [
    ["env", {
      "modules": false,
      "targets": {
        "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
      }
    }],
    "stage-2"
  ],
  "plugins": ["transform-vue-jsx", "transform-runtime",
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]]
}
```
经过以上配置之后，我们就可以按照自己需求来引用element-ui的组件了（具体配置项选项请参考element-ui官方文档：http://element-cn.eleme.io/#/zh-CN/component/quickstart） 

6、第六步：做个简单的demo界面

main.js
```bash
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
 
import {Row,Col,Button,Notification,Message} from 'element-ui'  //按需引用element-ui组件
//将element组件内容挂载到Vue上
Vue.use(Row);
Vue.use(Col);
Vue.use(Button);
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

import App from './App'
import router from './router/index.js'
 
Vue.config.productionTip = false
 
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
```
App.vue
```bash
<template>
  <div id="app">
    <img src="./assets/logo.png">
     <!-- 使用col和button组件 -->
    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <router-view/>
  </div>
</template>
 
<script>
export default {
  name: 'App',
  mounted(){
   //使用Message组件
    this.$message({
      type:'success',
      message:'element-ui安装成功'
    });
   //使用Message组件
    this.$notify({
      title: '成功',
      message: 'element-ui安装成功',
      type: 'success'
    });
  }
}
</script>
 
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
```
7、第七步：npm run dev

8、第八步：npm run build



 
