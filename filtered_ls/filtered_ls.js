var fs = require('fs');
var path = require('path');

var dir = process.argv[2];
var ext = process.argv[3];

fs.readdir(dir, function(err, list) {

    if (err)
        throw err;

    list.forEach( function(entry) {

        if (path.extname(entry) === ("." + ext))
            console.log(entry);

    });

});
