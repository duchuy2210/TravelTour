import { render } from "ejs";
import pool from "../../configs/connectDB.js";

class tourController{
     //[GET] /detail_tour/:tourId
    async getDetailPage(req,res,next){
        let id = req.params.id;
        const [tour] = await pool.execute('SELECT * FROM `users` where id = ?',[id])//câu query với db
        res.json(tour)//lấy phần tử 0 vì câu query sẽ trả ra 2 phần tử trong mảng rows và fields
    }
    
    //[GET] /create/
    getCreatePage(req,res,next){
        res.render('createPage');
    }

    //[POST]    /create_new_page/
    async createNewTour(req,res,next){
        const {tourname, time, cost, route} = req.body;//khi dùng kiểu này thì phải khai báo trong mảng giống name khi post lên
        await pool.execute('INSERT INTO users(tourname,time,cost,route) VALUES (?,?,?,?)',[tourname , time, cost, route]);
        res.redirect('/');
    }
    //[POST] /tours//delete_tour
    async deleteTour(req, res, next) {
        await pool.execute('DELETE FROM `users` where id = ?',[req.body.tourId])
        res.redirect('/');
    }
    //[GET] /tours//edit_tour/:id
    async getEditPage(req,res,next){
        const id = req.params.id;
        const [tour] = await pool.execute('SELECT * FROM `users` where id = ?',[id])
        res.render('editPage',{tour:tour[0]});
    }
    //[POST] /tours/edit_tour_complete
    async editTour(req, res, next){
        const {tourname, time, cost, route, id} = req.body;
        await pool.execute('UPDATE `users` SET `tourName` = ? ,`time` = ?, `cost` = ? ,`route` = ? WHERE id = ?',[tourname,time,cost,route,id]);
        res.redirect('/')
    }
}
export default new tourController;