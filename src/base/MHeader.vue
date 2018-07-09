<template>
    <div class="header">
       <!--插排显示组件模板里的值 -->
       <slot></slot>
       <!--根据父亲传递过来的值，来确定返回按钮是否显示-->
       <!--组件可以接收父亲传递过来的值，来定义组件的显示和行为-->
       <i class="iconfont icon-fanhui" v-if="back" @click="goBack"></i>
    </div>
</template>
<script>
  export default {
    /*接收父亲传递过来的值，并且进行验证。只能传递布尔值，默认值为false不显示*/
    props:{
       back:{
          type:Boolean,
          default:false
       }
    },
    data() {
       return {}
    },
    methods: {
       goBack(){
          this.$router.go(-1);//返回到上一级页面
       }
    },
    computed: {},
    components: {}
  }
</script>
<style scoped lang="less">
    .header{
       position: fixed;
       top:0;
       left:0;
       background:#afd9ae;
       height:40px;
       width:100%;
       text-align: center;
       line-height:40px;
       font-weight: bold;
       i{
          position:absolute;
          left:10px;
          font-size:20px;
       }
    }
</style>
