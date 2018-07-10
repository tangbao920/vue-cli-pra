<template>
    <div>
       <MHeader>
         <slot>列表页</slot>
       </MHeader>
       <div class="content">
          <ul>
             <li v-for="(book,key) in books">
                <img :src="book.bookCover" alt=""/>
                <div>
                   <h4>{{book.bookName}}</h4>
                   <p>{{book.bookInfo}}</p>
                   <b>{{book.bookPrice}}</b>
                   <button @click="remove(book.bookId)">删除</button>
                </div>
             </li>
          </ul>
       </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    import {getBooks,removeBook} from '../api';
    export default {
        data() {
            return {
               books:[]
            }
        },
        created(){
           this.getData();
        },
        methods: {
           async getData(){
               this.books=await getBooks();
             },
           async remove(id){
               await removeBook(id);
               //前端数据的刷新
               /*this.getData();*/
               this.books=this.books.filter((item)=>item.bookId!==id);
           }
          },
        computed: {},
        components: {MHeader}
    }
</script>
<style scoped>
  .content ul{padding:10px;}
  .content ul li{
    display: flex;
    padding:10px 0px;
     border-bottom:1px solid #f1f1f1;
  }
  .content ul li img{
     width:130px;
     height:150px;
  }
  .content h4{
     font-size:20px;
     line-height:35px;
  }
  .content p{
     color:#2a2a2a;
     line-height:25px;
  }
  .content b{
    color:red;
  }
  .content button{
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
    margin-left:150px;
    background:#F37B1D;
  }
</style>
