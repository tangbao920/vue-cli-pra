<template>
    <div>
        <!--父亲给子组件传值 -->
        <!--传值，根据传递的值，来确定组件中的某些内容怎么显示-->
        <MHeader :back="true">首页</MHeader>
        <!--轮播图渲染到页面-->
        <div class="content">
            <Swiper :swiperSlides="sliders"></Swiper>
            <div class="container">
              <h3>热门图书</h3>
              <ul>
                <li v-for="(hot,index) in hotBook">
                  <img :src="hot.bookCover" alt=""/>
                  <b>{{hot.bookName}}</b>
                </li>
              </ul>
            </div>
        </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    /*引入轮播图组件 */
    import Swiper from '../base/Swiper.vue';
    import {getSliders,getHotBooks} from "../api";//api下的index.js，默认不用写全
    export default {
        created(){
          //不要再created中写太多逻辑，要写在methods中
          this.getSwiper();
          this.getHot();
        },
        data() {
            return {
              sliders:[],
              hotBook:[]
            }
        },
        methods: {
           //获取轮播图
          async getSwiper(){
            //接口中对数据进行了处理
            this.sliders= await getSliders();//页面加载完成发送请求
           },
          async getHot(){
            this.hotBook=await getHotBooks();
          }
        },
        computed: {},
        components: {
          MHeader,
          Swiper
        }
    }
</script>
<style scoped lang="less">
  h3{color: #999;padding: 5px 0}
  .container{
    width: 90%;
    margin: 0 auto;
    ul {
      display: flex;
      flex-wrap: wrap; /*默认不换行*/
      padding-bottom: 10px;
      li {
        width: 50%;
        text-align: center;
        margin: 5px 0;
        img{width: 100%}
      }
    }
  }
</style>
