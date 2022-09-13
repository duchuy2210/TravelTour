import  express  from   'express';
const Router = express.Router();
import tourControler from '../app/controllers/TourController.js'

Router.get('/create_page',tourControler.getCreatePage);
Router.post('/create_new_tour',tourControler.createNewTour);
Router.get('/detail_tour/:id',tourControler.getDetailPage);

export default Router;