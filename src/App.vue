<template>
  <div id="app">
    <!--是否页面缓存，获取路由元信息，默认是false-->
    <transition name="fadeIn">
    <keep-alive>
       <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    </transition>
    <!--正常的不需要页面缓存的走下面-->
    <transition name="fadeIn">
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
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
  .fadeIn-enter{
     opacity:0;
  }
  .fadeIn-enter-active{
     transition:all 0.3s linear;
  }
  .fadeIn-leave-active{
     transition:all 0.3s linear;
     opacity:0;
  }
</style>
