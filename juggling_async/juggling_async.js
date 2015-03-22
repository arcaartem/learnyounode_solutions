var http = require('http');
var bl   = require('bl');

var responses = {
    counter: 0,
    data: []
};

var print_if_complete = function() {
    if (responses.counter < 3)
        return;

    for (var i = 0; i < 3; i++)
        console.log(responses.data[i]);
};

function get_url(index) {
    http.get(process.argv[2+index], function(response){
        response.pipe(bl(function (err, data){
            if (err)
                return console.error(err);

            responses.data[index] = data.toString();
            responses.counter++;
            print_if_complete();
        }));
    });
}

for (var i = 0; i < 3; i++)
    get_url(i);


