<template>
    <div>
        <!--父亲给子组件传值 -->
        <!--传值，根据传递的值，来确定组件中的某些内容怎么显示-->
        <MHeader :back="true">首页</MHeader>
        <!--轮播图渲染到页面-->
        <div class="content">
            <Swiper :swiperSlides="sliders"></Swiper>
        </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    /*引入轮播图组件 */
    import Swiper from '../base/Swiper.vue';
    import {getSliders} from "../api";//api下的index.js，默认不用写全
    export default {
       async created(){
          let {data:sliders}= await getSliders();//页面加载完成发送请求
          this.sliders=sliders;
        },
        data() {
            return {sliders:[]}
        },
        methods: {},
        computed: {},
        components: {
          MHeader,
          Swiper
        }
    }
</script>
<style scoped></style>
