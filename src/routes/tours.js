import  express  from   'express';
const Router = express.Router();
import tourControler from '../app/controllers/TourController.js'

Router.get('/create_page',tourControler.getCreatePage);
Router.post('/create_new_tour',tourControler.createNewTour);
Router.post('/delete_tour',tourControler.deleteTour)
Router.get('/detail_tour/:id',tourControler.getDetailPage);
Router.get('/edit_tour/:id',tourControler.getEditPage);
Router.post('/edit_tour_complete',tourControler.editTour);

export default Router;