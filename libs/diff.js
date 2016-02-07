module.exports = {
    diff: diff
}


function diff(first, second) {
    var ret = {}

    console.log(second);
    console.log(Array.isArray(second));
    console.log(typeof second);

    if (Array.isArray(second)) {
        if (!Array.isArray(first)) {
            return second;
        } else {
            return second.filter((i) =>  first.indexOf(i) < 0);
        }
    }

    for (var k in second) {
        var newVal = second[k];
        if (!first.hasOwnProperty(k)) {
            ret[k] = newVal;
            continue;
        }

        var oldVal = first[k];

        if (typeof oldVal == 'object'
            && typeof  newVal == 'object') {

            var recursiveDiff = diff(oldVal, newVal);
            if (Object.keys(recursiveDiff).length) {
                ret[k] = recursiveDiff;
            }

        } else {
            if (oldVal != newVal) {
                ret[k] = newVal;
                continue;
            }
        }
    }

    return ret;
}

