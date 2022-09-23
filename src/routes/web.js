//Đường dẫn trung gian tới các path 
import siteRoute from './site.js';
import tourRoute from './tours.js';
import apiRoute from './api.js';

function routes(app){
    app.use('/',siteRoute);
    app.use('/tours',tourRoute);
    app.use('/api/v1',apiRoute);
}

export default routes;

