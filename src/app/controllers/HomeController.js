import connection from "../../configs/connectDB.js";
class homeConttroller {
    getHomePage(req, res, next) { 
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
                return res.render('homePage',{dataUser: JSON.stringify(data)})
            }); */
    }
    duchuy(req, res, next) {
        res.render('homePage.ejs')
    }
}

export default new homeConttroller ;