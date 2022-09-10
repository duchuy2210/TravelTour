//cấu hình view engine ejs
import  express  from "express";
import path from "path";
import { fileURLToPath } from 'url';
import expressLayouts from 'express-ejs-layouts'

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const configViewEngine = (app)=>{
    app.use(express.static('./src/public'));//cho phép các file được lưu trữ trong file public sẽ ở chế độ public và có thể xem được ở phía client
    app.set('view engine','ejs');//cấu hình view engine ejs
    app.set('views','./src/resources/views');//tìm file ejs ở file nào
    app.use(expressLayouts);
    app.set('layout',path.join(__dirname,'..\\resources\\views\\layouts\\home.ejs'));
}
export default configViewEngine;