'use strict';

var test = require('tape');
var shot = require('shot');
var mainHandler = require('../main.js');

test('GET /: should get main file', function(t) {
  shot.inject(mainHandler, { method: 'POST', url: '/getdata', payload: 'a' }, function(res) {
    t.deepEqual(res.payload,'["a","aa","aal","aalii","aam"]','right res');
    t.end();
  });
});

test('GET /notFound: should return not found ', function(t) {
  shot.inject(mainHandler, { method: 'GET', url: '/notFound'}, function(res) {
    t.equal(res.payload,'Not found','BOOM!');
    t.end();
  });
});