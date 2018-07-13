// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
/*导入轮播图插件*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css';//引入swiper插件的css
/*使用这个插件*/
Vue.use(VueAwesomeSwiper, /* { default global options } */)
/*全局钩子，路由的钩子*/
/**
 * from:从哪来
 * to：到哪去
 * next:继续
 */
router.beforeEach(function (to,from,next) {
   //如果这里什么都不写的话，页面就会什么都不显示。这里放置公有逻辑
   document.title=to.meta.title;
   if(to.path==='/list'){
      next({path:'/add'});
   }else{
      next();
   }
});
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
