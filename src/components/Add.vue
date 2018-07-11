<template>
    <div>
       <MHeader>添加</MHeader>
       <div class="content">
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
             <label for="bookCover">封面</label>
             <input type="text" v-model="book.bookCover" id="bookCover"/>
           </li>
           <li>
             <button @click="add">添加</button>
           </li>
         </ul>
       </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import {addBook} from '../api';
    export default {
        data() {
            return {
              book:{}
            }
        },
        methods: {
          async add(){
              await addBook(this.book);
              this.$router.push('/list');
           }
        },
        computed: {},
        components: {
           MHeader
        }
    }
</script>
<style scoped lang="less">
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
</style>
