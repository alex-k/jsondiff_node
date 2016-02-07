module.exports = {
    diff: diff
}


function diff(first, second) {
    var ret = {}

    for (var k in second) {
        var newVal = second[k];
        if (!first.hasOwnProperty(k)) {
            ret[k] = newVal;
            continue;
        }

        var oldVal=first[k];

        if (typeof oldVal == 'object'
            && typeof  newVal == 'object') {

            var recursiveDiff = diff(oldVal,newVal);

            ret[k] = recursiveDiff;

        } else {
            if (oldVal != newVal) {
                ret[k] = newVal;
                continue;
            }
        }
    }

    return ret;
}

