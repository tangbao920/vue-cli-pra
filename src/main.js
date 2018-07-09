// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
/*导入轮播图插件*/
import VueAwesomeSwiper from 'vue-awesome-swiper'
/*使用这个插件*/
Vue.use(VueAwesomeSwiper);
import 'swiper/dist/css/swiper.css';//引入swiper插件的css
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
