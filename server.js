var http = require('http');
var router = require('./router.js');
var fs =require('fs');
var words = fs.readFileSync('./words.txt', 'utf8');
words = words.match(/[^\r\n]+/g);
http.createServer(function(req, res) {
    var path = req.method + ' ' + req.url;
    try {
        router[path](req, res,words);
    } catch (err) {
        console.log('path', path);
        console.log('err', err);
        res.end('Not found');
    }
}).listen(process.env.PORT || 8080, function() {
    console.log('Listening on 8080');
});
