var log4js = require("log4js");
var logger = log4js.getLogger('console');

logger.setLevel('INFO');
logger.info("Application started");


var first = {a: 1, b: 2, e: {a: 1}};
var second = {b: 2, c: 3, e: {a: 2}};

logger.info(first);
logger.info(second);

var diff = require("./libs/diff");

logger.info(diff.diff(first, second));