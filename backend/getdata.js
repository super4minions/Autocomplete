var https = require('http');
var utils = require('./utils.js');
var fs = require('fs');
var words=fs.readFileSync('../words.txt', 'utf8');
words = words.match(/[^\r\n]+/g);
var c=0;

module.exports = function(req, res) {
    utils.parseBody(req, function(err, body) {


console.log(words.indexOf(Object.keys(body)[0]))

        res.end(JSON.stringify(body));
    });
};

