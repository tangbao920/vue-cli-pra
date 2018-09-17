import axios from 'axios';
axios.defaults.baseURL="http://localhost:3001";//设置默认的请求路径，上线后这里也不需要了。
//获取轮播图数据,返回一个promise对象
//拦截器
axios.interceptors.response.use((res)=>{
   return res.data;//在这里统一拦截结果，把结果处理成res.data
  //这里就是为了简便操作，把结果处理成data返回。在组件方法里调用的时候，不需要再{data:变量}这样解构赋值来处理一下了，会简便一点。怎么都行。
});
export let getSliders=()=>{
   //向后端发送请求
   return axios.get('/sliders')
};
//获取热门图书
export let getHotBooks=()=>{
  return axios.get('/hot');
};
//获取全部图书
export let getBooks=()=>{return axios.get('/book')};
//删除某一本图书
export let removeBook=(id)=>{
   return axios.delete(`/book?id=${id}`);
};
//获取某一个本书
export let getBookById=(id)=>{
   return axios.get(`/book?id=${id}`);
};
//编辑书的信息
/**
 * @param id
 * @param data
 * @returns {AxiosPromise<T>}
 */
export let updateBook=(id,data)=>{
  return axios.put(`/book?id=${id}`,data);
};
export let addBook=(data)=>{
  return axios.post('/book',data);
};
export let getAll=()=>{
  return axios.all([getSliders(),getHotBooks()]);
};
//根据偏移量返回对应的数据
export let pagination=(offset)=>{
   return axios.get(`/page?offset=${offset}`);
};

