import path from 'path';
/* const express = require('express') */
import express from 'express';
import viewEngine from './configs/viewEngine.js';
import Routes from './routes/web.js'
import dotenv from 'dotenv';
import multer from 'multer';

dotenv.config()//use dotenv 

const app = express()
const port = process.env.PORT || 3000 //lấy port ở biến môi trường ,||3000 là backup cho lỗi khi kh lấy được port ở env

//function config view engine
viewEngine(app)
/* app.use(express.static(path.join(__dirname, 'public'))); *///cho phép các file được lưu trữ trong file public sẽ ở chế độ public và có thể xem được ở phía client


//sử dụng middleware để xử lý ở post, req.body,express đã tích hợp sẵn body parser ở trong phiên bản mới
//config này hỗ trọ gửi data từ phía client lên server và lấy data
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//Khởi tạo các Route
Routes(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})