<template>
    <div>
       <MHeader>
         <slot>列表页</slot>
       </MHeader>
       <div class="content">
          <ul>
            <!--循环组件要使用key-->
            <!--使用params传参必须给路由加个name-->
            <!--:to="{name:'detail',params:{bid:book.bookId}}"--><!--和:to="{path:'/detail/book.bookId'}-->
            <!--当传递的值是个字符串的时候，可以直接to=""或是:to="{path:''}",如果需要传递变量的话，需要使用params-->
            <!--tag属性的值表示router-link在页面渲染成什么元素，默认是a-->
             <router-link v-for="(book,key) in books" :to="{name:'detail',params:{bid:book.bookId}}" tag="li">
                <img :src="book.bookCover" alt=""/>
                <div>
                   <h4>{{book.bookName}}</h4>
                   <p>{{book.bookInfo}}</p>
                   <b>{{book.bookPrice}}</b>
                   <button @click.stop="remove(book.bookId)">删除</button>
                   <!--阻止时间冒泡行为，防止点击按钮导致跳转-->
                </div>
             </router-link>
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
