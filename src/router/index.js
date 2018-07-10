import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Add from '../components/Add.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';
export default new Router({
  routes: [
    {
      path: '/home',
      component:Home
    },
    {
      path: '/list',
      component:List
    },
    {
      path: '/add',
      component:Add
    },
    {
      // /detail/1 路径参数，后面的:bid代表参数必须有但是值是活的，可以随机。
      path: '/detail/:bid',
      component:Detail,
      name:'detail'
    },
    {
      path:'/collect',
      component:Collect
    },
    {
      path:'/',  //没有路径的时候，跳转到home
      redirect:'/home'
    },
    {
      path:'*',//匹配不到的时候，可以跳转到404。这里简单跳转到home
      redirect:'/home'
    }
  ]
})
