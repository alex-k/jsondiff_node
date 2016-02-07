module.exports = {
    diff: diff
}


function diff(first, second) {
    var ret = {}

    for (k in second) {
        if (!first.hasOwnProperty(k)) {
            ret[k] = second[k];
            continue;
        }
    }

    return ret;
}

