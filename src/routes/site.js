import  express  from   'express';
import homeConttroller from '../app/controllers/HomeController.js'
const Router = express.Router();

Router.get('/',homeConttroller.getHomePage);
Router.get('/duchuy',homeConttroller.duchuy);

export default Router;