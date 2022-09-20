import  express  from   'express';
const Router = express.Router();
import apiController from '../app/controllers/ApiController.js'

Router.get('/tours',apiController.getAllTours);
Router.post('/create',apiController.createNewTour);
Router.put('/edit',apiController.editTour);
Router.delete('/delete/:id',apiController.deleteTour);

export default Router;