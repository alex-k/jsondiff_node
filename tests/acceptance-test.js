var assert = require('assert');
var module = require('../libs/diff');

describe('jsondiff', function () {
    describe('acceptance test', function () {
        it('should pass on test data', function () {
            var first = {
                "foo": {
                    "bar": "baz",
                    "biz": "foo"
                },
                "fiz": {
                    "foo": "baz"
                },
                "bar": "baz",
                "baz": [
                    "foo",
                    "bar"
                ]
            };
            var second = {
                "foo": {
                    "bar": "baz1",
                    "biz": "foo"
                },
                "fiz": {
                    "foo": "baz"
                },
                "bar": "baz",
                "baz": [
                    "foo1"
                ]
            };

            var expected = {
                "foo": {
                    "bar": "baz1"
                },
                "baz": [
                    "foo1"
                ]
            };

            assert.equal(JSON.stringify(expected), JSON.stringify(module.diff(first, second)));
        });
    });
});
