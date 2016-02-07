var log4js = require("log4js");
var logger = log4js.getLogger('console');

logger.setLevel('INFO');
logger.info("Application started");


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

var second={
    "foo":{
        "bar":"baz1",
        "biz":"foo"
    },
    "fiz":{
        "foo":"baz"
    },
    "bar":"baz",
    "baz":[
        "foo1"
    ]
};

logger.info(first);
logger.info(second);

var diff = require("./libs/diff");

logger.info(diff.diff(first, second));