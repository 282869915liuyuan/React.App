let express = require('express');
let app = express();
app.listen(3000);

let ad = require('./home/ad');
//广告的接口
app.get('/api/ad', (req,res)=>{
    res.send(ad);
});
let list= require('./home/list');
//广告的接口
app.get('/api/list/:city/:page', (req,res)=>{
    res.send(list);
});
//fetch(url,{
//  Accept:"application/json"
// }).then(res=>res.json()).then(data=>{
//  console.log(data)
// })
//商户详情
let info=require('./detail/info');
app.get('/api/detail/info/:id',(req,res)=>{
    res.send(info)
});
//评jia
let comment=require('./detail/comment');
app.get('/api/detail/comment/:id/:page',(req,res)=>{
    res.send(comment)
});
