var shot = require('shot');
var test = require('tape');
var IndexFrontEnd = require('../frontend/index2.js');
var JsFrontEd = require('../frontend/js.js');
var CssFrontEd = require('../frontend/css.js');
test('GET /: should return datalist html', function(t) {
    shot.inject(IndexFrontEnd, { method: 'GET', url: '/' }, function(res) {
        var indexOf = res.payload.indexOf('datalist');
        t.notEqual(indexOf, -1, 'got datalist somewhere in the html');
        t.equal(res.statusCode, 200, 'index file is exist ');
        t.end();
    });
});
test('GET /: should return javascript file', function(t) {
    shot.inject(JsFrontEd, { method: 'GET', url: '/' }, function(res) {
        var indexOf = res.payload.indexOf('function r()');
        t.notEqual(indexOf, -1, 'got functoin r somewhere in the js script');
        t.equal(res.statusCode, 200, 'javascript file is exist');
        t.end();
    });
});
test('GET /: should return css file', function(t) {
    shot.inject(CssFrontEd, { method: 'GET', url: '/' }, function(res) {
        var indexOf = res.payload.indexOf('label');
        t.notEqual(indexOf, -1, 'got label css somewhere in the css file');
        t.equal(res.statusCode, 200, 'style css file is exist');
        t.end();
    });
});
