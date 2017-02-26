'use strict';

var fs = require('fs');
var router = require('./router.js');

var words = fs.readFileSync('./words.txt', 'utf8');
words = words.match(/[^\r\n]+/g);

module.exports = function(req, res) {
  var path = req.method + ' ' + req.url;
  try {
    router[path](req, res, words);
  } catch (err) {
    console.log('path', path);
    console.log('err', err);
    res.end('Not found');
  }
};
