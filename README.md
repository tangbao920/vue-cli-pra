## 项目用到less
npm install less less-loader axios vuex bootstrap --save-dev

- mock 模拟数据
- api代表所有的接口
- base 基础组件
-components 页面组件

## 热门图书的功能
- 先写服务端，确保数据能正常返回
- 增加api方法，实现调取数据的功能
- 在哪个组件中应用这个api，如果是一个基础组件需要用这些数据，那么就在使用这个组件的父级中调用这个方法，并将获取的数据传递给这个基础组件。
- 如果是需要在项目中复用的功能，可以抽离出来做成基础组件。
- 写一个基础组件

  - 创建一个.vue文件
  - 在需要使用这个组件的父级中引用这个组件，import进来
  - 在组件中注册
  - 以标签的形式引入

## 页面加载的loading效果
- 制作loading的组件，实现复用
- 引入，注册，使用。用v-if来控制Loading的出现和消失。页面数据加载完毕后，loading消失。

## 缓存页面的数据--路由元信息
- 配置路由参数时，加一个参数meta:{keepAlive:true}
- 在页面中，通过$route.meta.keepAlive来获取，默认是false。对于需要缓存的页面，<router-view>需要嵌套在<keep-alive>中。

## 路由动画
- 在标签上嵌套<transition name="fadeIn">，然后再css里写动画效果

## 加载更多
- 默认每次加载5条信息，前端告诉后台现在从第几条开始
- 写好服务端server.js的方法
- 前端的scroll事件，scrollTop+clientHeight+20>scrollHeight时，就去新获取数据。

## 图片懒加载
- 使用插件vue-lazyload github上有

## coding split 代码分割
- 组件路径不要写死，写函数异步执行。component:()=>import('组件的绝对路径')

## 代码打包上线
- npm run build 打包
- 打包完毕后，代码会打包在dist文件夹。最后只上线一个文件夹，mock。把dist文件夹内打包的内容移动到mock内，
- 上传到服务器。如果后台是node，可以起一个node服务。node server.js

## mode history
- 设置路由参数 mode:'history'
  - 可以让地址去掉#，既好看，又利于seo
  - 后台需要配置，当直接访问例如：localhost:3000/list时，应该返回一个首页index.html，然后根据路由去匹配响应的页面。

## 每个路由配置不同的title
- 配置路由参数，meta:{title:'首页'}
- 配置全局的钩子，在main.js中
  - /**
     * from:从哪来
     * to：到哪去
     * next:继续
     */
    router.beforeEach(function (to,from,next) {
       //在进入路由之前，每一次都会执行此方法，全局钩子。
          //如果这里什么都不写的话，页面就会什么都不显示。
         // 这里放置公有逻辑
          document.title=to.meta.title;
          //拦截的功能
          if(to.path==='/list'){
             next({path:'/add'});
          }
          else{
             next();
          }
    });

## vuex
- 平级组件交互，找共同的父级解决，跨组件交互，eventBus混乱
- vuex 主要借鉴了flux redux,vuex只能在vue中使用
- vuex适用于大型项目，主要是状态管理，将数据统一管理。

