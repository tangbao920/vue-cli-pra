import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
/*import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Add from '../components/Add.vue';
import Collect from '../components/Collect.vue';
import Detail from '../components/Detail.vue';*/
/*动态路由，只加载这个页面需要的js*/
export default new Router({
  mode:'history',
  routes: [
    {
      path: '/home',
      component:()=>import('../components/Home.vue'),
      //配置每个页面的title参数
      meta:{keepAlive:true,title:'首页'} //路由元参数，默认是false,表示不需要缓存，在页面中通过$route.meta.keepAlive获取
    },
    {
      path: '/list',
      component:()=>import('../components/List.vue'),
      meta:{title:'列表'}
    },
    {
      path: '/add',
      component:()=>import('../components/Add.vue'),
      meta:{title:'添加'}
    },
    {
      // /detail/1 路径参数，后面的:bid代表参数必须有但是值是活的，可以随机。
      path: '/detail/:bid',
      component:()=>import('../components/Detail.vue'),
      name:'detail',
      meta:{title:'详情'}
    },
    {
      path:'/collect',
      component:()=>import('../components/Collect.vue'),
      meta:{title:'收藏'}
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
