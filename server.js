// const http = require('http'),
//         fs = require("fs");
// const server = http.createServer((req,res) => {
//     fs.readFile("index.html","utf-8",(err,data)=>{
//         if(err){
//             res.end('not found')
//         }else{
//             res.setHeader("Content-Type","text-html");
//             res.end(data)
//         }

//     })
// })
// server.listen(5000,()=>{
//     console.log('start at 5000');
    
// })

//引入express 
const express = require('express');
 //引入中间件，解决history模式
//  const history = require('connect-history-api-fallback'); 
 //监听的端口 
 const port = 9999; 
 const app = express();
  //使用中间件 
//   app.use(history());
   //设置静态文件路径
    app.use(express.static('.')); 
    //监听端口 
    module.exports = app.listen(port, function (err) {
         if (err) { 
                 console.log(err)
                  return
         } else {
                 console.log('Listening at http://localhost:' + port + '\n')     
                 }
     })
