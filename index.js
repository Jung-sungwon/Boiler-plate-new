//import express from 'express';
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const User = require('./models/Users.js');

const app = express();
const port = 8080;

const config = require('./config/key');


//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
//application/json
app.use(bodyParser.json());


mongoose.connect(config.mongoURI,{
    //useNewUrlParser: true, useUnifiedTopology:true, useCreateIndex:true, useFindAndModify:false
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err));


app.get('/',(req,res,next) => {
    res.send('안녕 세상아?')
})

app.post('/register',(req,res) => {
  //회원가입할때 필요한 정보들을 client에서 가져오면 그것을 데이터베이스에 넣어준다.
  
  const user = new User(req.body); //client에서 주는 json형식의 정보들을 받을수 있음 바디파서 익스텐션덕에 가능.
  user.save((err,userInfo) => {// 몽고디비 메소드인데 정보들을 저장함.
    if(err) return res.json({success: false, err});
    return res.status(200).json({
      success:true
    })
  }); 
  
});

app.listen(8080,() => console.log(`${port}번 포트에서 서버가 실행중 입니다.`));

