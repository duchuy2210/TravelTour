import { render } from "ejs";
import pool from "../../configs/connectDB.js";
import multer from "multer";
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

    getUploadFilePage(req,res,next){
        res.render('uploadFile');  
    }

    handleUploadSingleFile(req,res,next){
        // 'profile_pic' is the name of our file input field in the HTML form
        //let upload = multer.single('single-file');
        //console.log(req.file)
            // req.file contains information of uploaded file
            // req.body contains information of text fields, if there were any
            if (req.fileValidationError) {
                return res.send(req.fileValidationError);
            }
            else if (!req.file) {
                return res.send('Please select an image to upload');
            }
    
            // Display uploaded image for user validation
            res.send(`You have uploaded this image: <hr/><img src="/image/${req.file.filename}" width="500"><hr /><a href="/uploadFile">Upload another image</a>`);
    }
}   
export default new homeConttroller ;