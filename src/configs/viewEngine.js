//cấu hình view engine ejs
import  express  from "express";
import  path from "path";

const configViewEngine = (app)=>{
    /* app.use(express.static(path.join(__dirname, 'public'))); */
    app.use(express.static('./src/public'));//cho phép các file được lưu trữ trong file public sẽ ở chế độ public và có thể xem được ở phía client
    app.set('view engine','ejs');//cấu hình view engine ejs
    app.set('views','./src/views');//tìm file ejs ở file nào
}
module.exports = configViewEngine;