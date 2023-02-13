'use strict';

/**
 * Apply string of attributes to object
 * @param {Object} object
 * @param {string} attrs - string of attributes of the form '.attr1.attr2.attrN'. Any attr can be numeric too
 * @returns {*} - object that can be interpreted as obj['attr1']['attr2']['attrN']
 */
const get = (object, attrs) => {
    if (!attrs.startsWith('.')) {
        throw new Error("attrs must start with '.'")
    }
    if (attrs === '.') {
        return object
    }
    return attrs.slice(1)
                .split('.')
                .reduce((obj, attr) => obj === undefined ? undefined : obj[attr], object);
}
