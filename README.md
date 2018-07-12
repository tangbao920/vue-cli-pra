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


