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