'use strict';

const max = numbers => Math.max(...numbers);

/**
 * Apply string of attributes to object
 * @param {Object} obj - object
 * @param {string} attrs - string of attributes of the form '.attr1.attr2.attrN'. Any attr can be numeric too
 * @returns {Object} - object that can be interpreted as obj['attr1']['attr2']['attrN']
 */
function get(obj, attrs) {
    if (attrs == '.') {
        return obj
    }
    try {
        return eval('obj' + attrs.replaceAll(/\.(\w+)/g, "['$1']"))
    } catch (e) {
        if (e.name != 'TypeError') {
            throw e
        }
    }
    return undefined
}