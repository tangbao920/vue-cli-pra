<template>
    <div>
        <!--父亲给子组件传值 -->
        <!--传值，根据传递的值，来确定组件中的某些内容怎么显示-->
        <MHeader :back="true">首页</MHeader>
        <!--轮播图渲染到页面-->
        <div class="content">
            <Swiper></Swiper>
        </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    /*引入轮播图组件 */
    import Swiper from '../base/Swiper.vue';
    export default {
        data() {
            return {}
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
