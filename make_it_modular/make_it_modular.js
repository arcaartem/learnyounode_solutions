var filtered_ls = require('./filtered_ls');

var dir = process.argv[2];
var ext = process.argv[3];

filtered_ls(dir, ext, function(err, data) {
    if (err)
        throw err;

    data.forEach(function(entry) {
        console.log(entry);
    });
});
