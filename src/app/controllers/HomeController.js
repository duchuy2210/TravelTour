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
            res.render('homePage.ejs',{dataUser:rows})
        }

    }
    
    
    
export default new homeConttroller ;