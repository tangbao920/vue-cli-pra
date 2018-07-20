<template>
    <div>计数器：<button @click="minus">-</button><br/>
      计数器：<button @click="add">+</button><br/>
      当前：{{this.$store.state.count}}
    </div>
</template>
<script>
    import * as Types from '../store/mutations-types';
    export default {
        data() {
            return {}
        },
        created() {
        },
        methods: {
           add(){
             //第一个参数是调用的方法名
             //第二个参数是载荷payload,给方法传递的参数
             this.$store.commit(Types.INCREAMENT);//提价add 的mutation
           },
          minus(){
             this.$store.commit(Types.DECREMENT);
          }
        },
        computed: {},
        components: {}
    }
</script>
<style scoped></style>
