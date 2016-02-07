var assert = require('assert');
var module = require('../libs/diff');

describe('jsondiff', function () {
    describe('#diff()', function () {
        describe('flat objects', function () {
            it('should handle unexisted properties', function () {
                var first = {a: 1, b: 2};
                var second = {b: 2, c: 3};

                assert.equal(JSON.stringify({"c": 3}), JSON.stringify(module.diff(first, second)));
            });
            it('should handle changed properties', function () {
                var first = {a: 1, b: 2};
                var second = {a: 1, b: 3};

                assert.equal(JSON.stringify({"b": 3}), JSON.stringify(module.diff(first, second)));
            });
        });
    });
});