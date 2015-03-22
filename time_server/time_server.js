var net = require('net');
var moment = require('moment');

function now() {
    var date = moment();
    return date.format('YYYY-MM-DD HH:mm');
}

var server = net.createServer(function(socket){
    socket.write(now());
    socket.end();
});

server.listen(Number(process.argv[2]));
