var assert = require('assert');
var module = require('../libs/diff');

describe('jsondiff', function () {
    describe('#diff()', function () {
        describe('flat objects', function () {
            it('should handle unexisted properties', function () {
                var first = {a: 1, b: 2};
                var second = {b: 2, c: 3};

                assert.equal(JSON.stringify({c: 3}), JSON.stringify(module.diff(first, second)));
            });
            it('should handle changed properties', function () {
                var first = {a: 1, b: 2};
                var second = {a: 1, b: 3};

                assert.equal(JSON.stringify({b: 3}), JSON.stringify(module.diff(first, second)));
            });

            it('should handle arrays', function () {
                var first = ["a", "b"];
                var second = ["b", "c"];

                assert.equal(JSON.stringify(["c"]), JSON.stringify(module.diff(first, second)));
            });


        });
        describe('nested objects', function () {

            it('should handle comparsions of two objects', function () {
                var first = {e: {a: 1}};
                var second = {e: {a: 2}};

                assert.equal(JSON.stringify({e: {a: 2}}), JSON.stringify(module.diff(first, second)));
            });

            it('should handle comparsion object against primitive', function () {
                var first = {a: 1, b: 2};
                var second = {a: 1, b: {c: 3}};

                assert.equal(JSON.stringify({b: {c: 3}}), JSON.stringify(module.diff(first, second)));
            });

            it('should handle empty results of recursive comparsion', function () {
                var first = {a: 1, b: {c: 3}};
                var second = {a: 1, b: {c: 3}};

                assert.equal(JSON.stringify({}), JSON.stringify(module.diff(first, second)));
            });

        });


    });

});
