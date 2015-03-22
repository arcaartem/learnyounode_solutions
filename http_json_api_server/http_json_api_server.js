var http = require('http');
var url = require('url');
var moment = require('moment');

var server = http.createServer(function(req, res){

    var parsed = url.parse(req.url, true);
    var path = parsed.pathname;
    var result = {};

    var now = moment(parsed.query['iso']);
    if (path === '/api/parsetime') {
        result = {
            'hour': now.hour(),
            'minute': now.minute(),
            'second': now.second()
        };
    } else if (path === '/api/unixtime') {
        result = {
            'unixtime': now.valueOf()
        };
    } else {
        res.writeHead(400);
        res.end();
        return;
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
});

server.listen(Number(process.argv[2]));
