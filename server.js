var connect = require('connect')
    , http = require('http')
    , app
    ;

app = connect()
    .use(connect.static('app'))
    .use('/js/lib/', connect.static('node_modules/requirejs/'))
    .use('/node_modules', connect.static('node_modules'))
;

var PORT = process.env.PORT || 3000;

http.createServer(app).listen(PORT, function () {
    console.log('Running on http://localhost:' + PORT);
});