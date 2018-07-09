<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,key) in swiperSlides" :key="key">
     I am Slide{{slide}}
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
    export default {
      name: 'carousel',
      data() {
        return {
          swiperOption: {
            autoplay: 3500,
            setWrapperSize :true,
            pagination : '.swiper-pagination',
            observeParents:true,
          },
          swiperSlides:[1,2,3,4,5]
        }
      }
    }
</script>
<style scoped>
  img{width: 100%}
</style>
