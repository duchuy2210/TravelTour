import pool from "../../configs/connectDB.js";
class apiController{

    async getAllTours(req,res,next){
        const [rows, fields] = await pool.execute('SELECT * FROM `users`');
        res.status(200).json(rows)
    }

    async createNewTour(req,res,next){
        const {tourname, time, cost, route} = req.body;//khi dùng kiểu này thì phải khai báo trong mảng giống name khi post lên
        
        //validate
        if(!tourname || !time || !cost || !route){
            return res.status(200).json({
                message : "Đéo có thông tin"
            })
        }

        await pool.execute('INSERT INTO users(tourname,time,cost,route) VALUES (?,?,?,?)',[tourname , time, cost, route]);
        
        return res.status(200).json({
            message : "oke"
        })
    }

    async editTour(req,res,next){
        const {tourname, time, cost, route,id} = req.body;//khi dùng kiểu này thì phải khai báo trong mảng giống name khi post lên
        
        //validate
        if(!tourname || !time || !cost || !route || !id){
            return res.status(200).json({
                message : "Đéo có thông tin"
            })
        }

        await pool.execute('UPDATE `users` SET `tourName` = ? ,`time` = ?, `cost` = ? ,`route` = ? WHERE id = ?',[tourname,time,cost,route,id]);

        return res.status(200).json({
            message : "oke"
        })
    }

    async deleteTour(req,res,next){
        await pool.execute('DELETE FROM `users` where id = ?',[req.params.id])
        
        return res.status(200).json({
            message : "oke"
        })
    }

}
export default new apiController