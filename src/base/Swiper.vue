<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide,key) in swiperSlides" :key="key">
       <img :src="slide" alt=""/>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>
<script>
    export default {
      name: 'carousel',
      props:['swiperSlides'],
      data() {
        return {
          swiperOption: {
            initialSlide: 0,
            loop: true,
            speed: 400,
            autoplay: {
              delay: 3000,
              disableOnInteraction: false
            },
            // grabCursor: true,
            setWrapperSize: true,
            autoHeight: true,
            uniqueNavElements: true,
            preventInteractionOnTransition: false,
            allowSilderPrev: true,
            allowSilderNext: true,
            //   scrollbar:'.swiper-scrollbar',//滚动条
            mousewheelControl: true,
            observer: true,
            observeParents: true,
            debugger: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true //允许点击小圆点跳转
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev"
            },
            onTransitionStart(swiper) {
              console.log(swiper);
            }
          }
        }
      }
    }
</script>
<style scoped>
  img{width: 100%}
</style>
