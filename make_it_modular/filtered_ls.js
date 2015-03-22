var fs = require('fs');
var path = require('path');

function filtered_ls(dir, ext, callback) {
    fs.readdir(dir, function(err, list) {
        if (err)
            return callback(err);

        var result = [];
        list.forEach( function(entry) {
            if (path.extname(entry) === ("." + ext))
                result.push(entry);
        });

        callback(null, result);
    });
}

module.exports = filtered_ls;

