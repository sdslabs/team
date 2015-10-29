'use strict';
var assert = require('assert');
var fs = require('fs');
var path = require('path');

var SIZE_LIMIT = 250 * 1024;    // 250 KB

it('should have image sizes less than 250KB', function () {
    var files = fs.readdirSync('pics');
    files.forEach(function (file) {
        var user = path.basename(file, path.extname(file));
        var stats = fs.statSync(path.join('pics', file));
        assert.ok(stats.size < SIZE_LIMIT, user + ' has file size > 250KB.');
    });
});
