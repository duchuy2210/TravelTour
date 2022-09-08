//Đường dẫn trung gian tới các path 
import siteRoute from './site'

function routes(app){
    app.use('/',siteRoute);
}

module.exports = routes;
