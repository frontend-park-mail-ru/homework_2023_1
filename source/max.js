'use strict';

const max = numbers => Math.max(...numbers);

function get(obj, attr) {
    if (attr == '.') {
        return obj
    }
    try {
        // numbers must be in [] since they can be used as array indices
        return eval('obj' + attr.replaceAll(/\.(\d+)/g, '[$1]'))
    } catch (e) {
        if (e.name != 'TypeError') {
            throw e
        }
    }
    return undefined
}