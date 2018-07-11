<template>
    <div class="detail">
      <MHeader :back="true">详情页</MHeader>
      <ul>
         <li>
            <label for="bookName">书名</label>
            <input type="text" v-model="book.bookName" id="bookName"/>
         </li>
         <li>
            <label for="bookInfo">简介</label>
            <input type="text" v-model="book.bookInfo" id="bookInfo"/>
         </li>
        <li>
          <label for="bookPrice">价格</label>
          <input type="text" v-model="book.bookPrice" id="bookPrice"/>
        </li>
        <li>
           <button @click="update">确认修改</button>
        </li>
      </ul>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import {getBookById,updateBook} from '../api';
    export default {
        data() {
            return {
               book:{}
            }
        },
        watch:{
           //只有路径变化，就重新获取数据
           $route(){
             this.getBook();
           }
        },
        created(){
          //页面加载，需要根据id，发送请求
          //页面加载的时候请求数据，这样就有一个问题，参数改变的时候，不会重新渲染页面，这样数据就不会变化。因此可以
          //用watch来监视参数，改变的时候，就去请求数据。
          this.getBook();
        },
        methods: {
           async update(){
             await updateBook(this.bid,this.book);
             this.$router.push('/list');//修改完成后，页面跳转到列表页
           },
           async getBook(){
             this.book=await getBookById(this.bid);
             //如果是个空对象，需要跳转回列表页
             if(Object.keys(this.book).length==0){
                this.$router.push('/list');//如果返回空对象，说明数据不存在，跳转回列表页
             }
           }
        },
        computed: {
           bid(){
              return this.$route.params.bid;//通过$route.params获取传递过来的参数
           }
        },
        components: {
           MHeader
        }
    }
</script>
<style scoped lang="less">
  .detail{
    position: absolute;
    top:0px;
    left:0px;
    bottom:0px;
    right:0px;
    background: #fff;
    z-index:100;
  }
  button{
    display: block;
    padding: 0 10px;
    height: 36px;
    line-height: 36px;
    border: none;
    border-radius: 3px;
    background-color: #0074d9;
    color: #fff;
    opacity: .9;
    filter: alpha(opacity=90);
    text-align: center;
    text-decoration: none;
    white-space: nowrap;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    overflow: visible;
    cursor: pointer;
    vertical-align: top;
    padding: 1px 15px;
    line-height: 30px;
    font-size:13px;
    margin:20px auto;

  }
  ul{
    margin:50px 20px 0px 20px;
    li{
       label{
          display:block;
          font-size:25px;
       }
       input{
           padding: 0% 8px;
           width: 100%;
           font-size: 14px;
           height: 36px;
           line-height: 36px;
           border: 1px solid #D9D9D9;
           border-radius: 3px;
           background-color: #fff;
           outline: 0;
           box-sizing: border-box!important;
           vertical-align: top;
           margin:10px auto;
       }
    }
  }
</style>
