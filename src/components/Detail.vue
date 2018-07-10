<template>
    <div class="detail">
      {{bid}}
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        methods: {},
        computed: {
           bid(){
              return this.$route.params.bid;
           }
        },
        components: {}
    }
</script>
<style scoped>
  .detail{
    position: absolute;
    top:0px;
    left:0px;
    bottom:0px;
    right:0px;
    background: #fff;
    z-index:100;
  }
</style>
