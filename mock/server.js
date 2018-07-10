let http=require('http');
let fs=require('fs');
let url=require('url');
//获取轮播图接口
let sliders=require('./sliders')
//用来读取数据的
function read(cb){
  fs.readFile('./book.json', 'utf8', function (err, data) {
    if (err || data.length == 0) {
      cb([]);//如果有错误或者文件内容为空，就是空数组
    }
    else{
      cb(JSON.parse(data));//将读出来的内容转化为对象
    }
  });
}
function write(data,cb){//写入内容
   fs.writeFile('./book.json',JSON.stringify(data),cb)
}
http.createServer((req,res)=>{
  //设置跨域访问
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
  res.setHeader("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.setHeader("X-Powered-By",' 3.2.1')
  if (req.method == 'OPTIONS') {
    return res.end();
    /*让options请求快速返回*/
  }
  let {pathname, query} = url.parse(req.url,true);
  if (pathname === '/sliders') {
    res.setHeader('Content-Type', 'application-json;charset=utf8');
    return res.end(JSON.stringify(sliders));
  }
  if(pathname=='/hot'){//一个路径对应一个接口
     read(function (books) {
       //console.log(books);
       res.setHeader('Content-Type', 'application-json;charset=utf8');
       res.end(JSON.stringify(books));
     });
     return;//注意return
  }
  if(pathname==='/book'){
     let id=parseInt(query.id);//取出的是字符串
     switch (req.method){
       case 'GET':
         if(id){//查询一个
           let book=books.find(item=>{
              return item.bookId===id;
           });
         }else{//获取所有的图书
           read(function (books) {
             res.setHeader('Content-Type', 'application-json;charset=utf8');
             res.end(JSON.stringify(books));
           });
         }
         break;
       case 'POST':
         break;
       case 'PUT':
         break;
       case 'DELETE':
         read(function (books) {
            books=books.filter((item)=>{return item.bookId!==id;});
           //将books写回去
            write(books,function () {
               res.end(JSON.stringify({}));//删除返回空对象
            });
         });
         break;
     }
     return;
  }
}).listen(3001);
