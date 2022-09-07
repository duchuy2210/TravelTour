const http = require('http');
const port = 3000;

const server = http.createServer(function(req, res, next) {
    console.log('run request')
    res.setHeader('Content-Type', 'text/html');
    res.write('aaaaaaaaa');
    res.end();
});

server.listen(port,'localhost',() => {
    console.log('listen on port ' + port);
});