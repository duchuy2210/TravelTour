import { render } from "ejs";
import pool from "../../configs/connectDB.js";
class homeConttroller {
    async getHomePage(req, res, next) { 
        /* let data = [];
        connection.query(
            'SELECT * FROM `users`',
            function(err, results, fields) {
                results.map((row)=>{
                    data.push({
                        id: row.id,
                        tourName : row.tourName,
                        time : row.time,
                        cost : row.cost,
                        route : row.route
                    })
                })
            console.log(data);
            return res.render('homePage',{dataUser: data})
        }); */
            //dùng theo kiểu async
            const [rows, fields] = await pool.execute('SELECT * FROM `users`');
            console.log(rows)
            res.render('homePage.ejs',{dataUser:rows})
        }

        //[GET] /detail_tour/:tourId
        async getDetailPage(req,res,next){
            let id = req.params.id;
            const [tour] = await pool.execute('SELECT * FROM `users` where id = ?',[id])//câu query với db
            res.json(tour)//lấy phần tử 0 vì câu query sẽ trả ra 2 phần tử trong mảng rows và fields
        }
    }

    
    
    
export default new homeConttroller ;