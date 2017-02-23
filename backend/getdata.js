var utils = require('./utils.js');
var array = [];
module.exports = function(req, res,words) {
    utils.parseBody(req, function(err, body) {
        array = words.filter(isEqual(body))
        array.sort(function(a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        array = array.slice(0, 5);
        res.end(JSON.stringify(array));
    });
};

function isEqual(element) {
    return function(value) {
        if (value.search(element) > -1) {
            if (value.search(element) == 0) {
                return element
            }
        }
    };
}
