//Đường dẫn trung gian tới các path 
import siteRoute from './site.js'

function routes(app){
    app.use('/',siteRoute);
}

export default routes;

