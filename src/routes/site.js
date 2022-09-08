import  express  from   'express';
import homeConttroller from '../app/controllers/HomeController'
const Router = express.Router();

Router.get('/',homeConttroller.show);
Router.get('/duchuy',homeConttroller.duchuy);

module.exports = Router;