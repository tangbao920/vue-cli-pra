import Vue from 'vue';
import App from './App.vue';
import store from './store';
//计数器
new Vue({
  el:'#app',
  ...App,
  store  //将容器和vue实例关联起来。这样所有组件都会有一个属性，this.$store
});
