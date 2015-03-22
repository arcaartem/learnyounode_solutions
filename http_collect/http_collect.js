var http = require('http');
var bl = require('bl');

var url = process.argv[2];

http.get(url, function callback(response){
    response.pipe(bl(function (err, data){
        if (err)
            console.error(err);

        var received = data.toString();
        console.log(received.length);
        console.log(received);
    }));
});
