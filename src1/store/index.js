import Vue from 'vue';
import Vuex from 'vuex';
import logger from 'vuex/dist/logger';
Vue.use(Vuex);
const state={count:0};
import mutations from './mutations';
export default new Vuex.Store({
  //管理数据的容器，并且是唯一的
  state:state,
  mutations:mutations,
  plugins:[logger],//插件，可以输出日志
  strict:true  //只能通过mutation来更改状态，mutation不支持异步
});
