import * as Types from '../store/mutations-types';
//方法名很多的时候，容易写错，使用宏，可以统一管理，有智能提示。
const mutations={
  [Types.INCREAMENT](state){//state是自动放入的，默认指的就是当前的state
    state.count+=1;
  },
  [Types.DECREMENT](state){
    state.count-=1;
  }
};
export default mutations;
//宏 快捷键

