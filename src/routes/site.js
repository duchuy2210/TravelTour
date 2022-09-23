import  express  from   'express';
import homeConttroller from '../app/controllers/HomeController.js'
import multer from 'multer';
import appRoot from 'app-root-path';
import path from 'path';
const Router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, appRoot + "/src/public/image/");
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const imageFilter = function(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }
    cb(null, true);
};

let upload = multer({ storage: storage, fileFilter: imageFilter });
let upload1 = multer({ storage: storage, fileFilter: imageFilter }).array('multiple-files', 3);

Router.get('/',homeConttroller.getHomePage);
Router.get('/uploadFile',homeConttroller.getUploadFilePage)
Router.post('/upload-single-file',upload.single('single-file'),homeConttroller.handleUploadSingleFile);//middleware

Router.post('/upload-multiple-file',(req, res, next) => {
    upload1(req, res, err => {
        if (err instanceof multer.MulterError && err.code === "LIMIT_UNEXPECTED_FILE") {
            // handle multer file limit error here
            res.send(`Quá giới hạn file ảnh<hr/><a href="/uploadFile">Tải ảnh lại</a>`)
        } else if (err) {
            res.send(err)
        }
        else {
            // make sure to call next() if all was well
            next();
        }
    });
},homeConttroller.handleUploadMultipleFiles);//middleware


export default Router;