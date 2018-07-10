<template>
  <div id="app">
    <router-view></router-view>
    <Tab></Tab>
  </div>
</template>

<script>
//组件使用步骤：1、声明模板 2、引入（在一个页面上的话，则不需要）3、在父级中注册 4、在父级中使用
import Tab from './base/Tab.vue';
export default {
  name: 'App',
  components:{
     Tab
  }
}
</script>
<!--这里的style里的样式是公共的-->
<style>
  *{margin: 0;padding: 0}
  ul,li{list-style: none}
  a{text-decoration: none}
  input,button{-webkit-appearance:none;}
  .content{position: fixed;width: 100%;top: 40px;bottom: 50px;overflow: auto}
</style>
