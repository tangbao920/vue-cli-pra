import axios from 'axios';
axios.defaults.baseURL="http://localhost:3001";//设置默认的请求路径
//获取轮播图数据,返回一个promise对象
export let getSliders=()=>{
   //向后端发送请求
   return axios.get('/sliders')
};

