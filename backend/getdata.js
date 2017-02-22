var https = require('http');
var utils = require('./utils.js');
var fs = require('fs');
var words = fs.readFileSync('../words.txt', 'utf8');
words = words.match(/[^\r\n]+/g);
var array = [];
module.exports = function(req, res) {
    utils.parseBody(req, function(err, body) {
        var word = Object.keys(body)[0];
        array = words.filter(isBigEnough(word))
        array.sort(function(a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        });
        console.log(array)
        res.end(JSON.stringify(array));
    });
};

function isBigEnough(element) {
    return function(value) {
        if (value.search(element) > -1) {
            if (value.search(element) == 0) {
                return element
            }
        }
    };
}
