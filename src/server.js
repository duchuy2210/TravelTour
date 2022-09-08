const path = require('path');
/* const express = require('express') */
import express from 'express';
import viewEngine from './configs/viewEngine';

require('dotenv').config()//use dotenv 

const app = express()
const port = process.env.PORT || 3000 //lấy port ở biến môi trường ,||3000 là backup cho lỗi khi kh lấy được port ở env

//function config view engine
viewEngine(app)
/* app.use(express.static(path.join(__dirname, 'public'))); *///cho phép các file được lưu trữ trong file public sẽ ở chế độ public và có thể xem được ở phía client
app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})