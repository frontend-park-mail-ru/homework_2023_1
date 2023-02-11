'use strict';

/** 
 * Flatten given array
 * 
 * @param {Array} arr - original array
 * @returns {Array} flattened arr
*/
const plain = arr => {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr must be an array!');
    }

    return arr.flat(Infinity);
}
