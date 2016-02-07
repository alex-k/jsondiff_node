var assert = require('assert');
var module = require('../libs/diff');

describe('jsondiff', function() {
    describe('#diff()', function() {
        it('should handle diff on one-dimension arrays', function() {
            var first = {a:1, b:2};
            var second = {b:2, c:3};

            assert.equal({"c":3}, module.diff(first,second));
        });
    });
});