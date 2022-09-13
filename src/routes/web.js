//Đường dẫn trung gian tới các path 
import siteRoute from './site.js'
import tourRoute from './tours.js'

function routes(app){
    app.use('/',siteRoute);
    app.use('/tours',tourRoute);
}

export default routes;

