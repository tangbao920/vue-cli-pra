<template>
    <div>
       <MHeader>
         <slot>列表页</slot>
       </MHeader>
       <div class="content" ref="scroll" @scroll="loadMore">
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
       <!--  <button @click="more">加载更多</button>-->
       </div>
    </div>
</template>
<script>
    import MHeader from '../base/MHeader.vue';
    /*import {getBooks,removeBook} from '../api';方法升级了，要使用分页*/
    import{pagination,removeBook} from "../api";
    export default {
        data() {
            return {
               books:[],
               offset:0,//偏移量
               hasMore:true,//是否有更多
               isLoading:false //是否正在加载
            }
        },
        created(){
           this.getData();
        },
        mounted(){
          let scroll = this.$refs.scroll; //获取到要拖拽的元素
          let top = scroll.offsetTop;
          let distance = 0;
          let isMove = false;
          scroll.addEventListener('touchstart',(e)=> {
            // 滚动条在最顶端时 并且当前盒子在顶端时候 才继续走
            if(scroll.scrollTop !=0 || scroll.offsetTop != top) return
            let start = e.touches[0].pageY; //手指点击的开始
            let move = (e)=>{
              isMove = true;
              let current = e.touches[0].pageY;
              distance = current - start; //求的拉动的距离 负的就不要了
              if(distance>0){ // 如果大于50了 认为就是50像素
                if(distance<=50){
                  scroll.style.top = distance + top +'px';
                }else{
                  distance = 50;
                  scroll.style.top = top+50+'px';
                }
              }else{
                // 如果不在考虑范围内 移除掉move和end事件
                scroll.removeEventListener('touchmove',move);
                scroll.removeEventListener('touchend',end);
              }
            };
            let end = (e)=>{
              if(!isMove)return;
              isMove = false;
              clearInterval(this.timer1);
              this.timer1 = setInterval(()=>{ // 一共distance 每次-1
                if(distance<=0){
                  clearInterval(this.timer1);
                  distance = 0;
                  scroll.style.top = top+'px';
                  scroll.removeEventListener('touchmove',move);
                  scroll.removeEventListener('touchend',end);
                  this.books = []; // 先清空数据
                  this.offset = 0;
                  this.hasMore = true;
                  this.getData();
                  return
                }
                distance -=1;
                scroll.style.top =top + distance+'px';
              },1);
            };
            scroll.addEventListener('touchmove',move);
            scroll.addEventListener('touchend',end);
          },false);
        },
        methods: {
/*           async getData(){
               this.books=await getBooks();
             },方法升级*/
          async remove(id) {
            await removeBook(id);
            //前端数据的刷新
            /*this.getData();*/
            this.books = this.books.filter((item) => item.bookId !== id);
          },
          async getData() {
            if (this.hasMore && !this.isLoading) {//有更多并且没有在加载的时候获取数据
              this.isLoading = true;
              let {hasMore, books} = await pagination(this.offset);
              this.books = [...this.books, ...books];//新书+老书
              this.hasMore = hasMore;
              this.isLoading = false;
              this.offset = this.books.length;//维护偏移量
            }
          },
          more() {
            this.getData();
          },
          loadMore() {
            //为了尽量减少scroll事件，先进来开一个定时器。下次触发时将上一次定时器清除掉。
            //将timer保存在当前实例上
           clearTimeout(this.timer);//防抖 节流
           this.timer=setTimeout(()=>{
              let{scrollTop,clientHeight,scrollHeight}=this.$refs.scroll;
              if(scrollTop+clientHeight+20>scrollHeight){
                 this.getData();
              }
            },60);
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
