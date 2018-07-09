<template>
    <div class="footer">
      <router-link to="/home"><i class="iconfont icon-home"></i><span>首页</span></router-link>
      <router-link to="/list"><i class="iconfont icon-liebiao"></i><span>列表</span></router-link>
      <router-link to="/collect"><i class="iconfont icon-shoucang"></i><span>收藏</span></router-link>
      <router-link to="/add"><i class="iconfont icon-add"></i><span>添加</span></router-link>
    </div>
</template>
<!--router-link-exact-active：确切激活的
router-link-active：激活的
存在二级路由的，router-link-active 只匹配到一级就可以，router-link-exact-active 需要完全匹配到。-->
<style scoped lang="less">
   .footer{
     position: fixed;
     left:0;
     bottom:0;
     width: 100%;
     height:50px;
     display: flex;
     border-top:1px solid #ccc;
     a{
        display: flex;
        color:yellowgreen;
        flex-direction:column; //row 或者是column
        flex: 1;//每份占1
        align-items:center;//横向居中  justify-content:center;垂直居中
        position:relative;
        top:6px;
     }
     a.router-link-active{
        color:red;
     }
   }
</style>
