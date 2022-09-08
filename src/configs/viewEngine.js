//cấu hình view engine ejs
import  express  from "express";

const configViewEngine = (app)=>{
    app.set('view engine','ejs');//cấu hình view engine ejs
    app.set('views','./src/views');//tìm file ejs ở file nào
}
module.exports = configViewEngine;