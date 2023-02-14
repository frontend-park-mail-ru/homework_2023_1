'use strict';
/**
 * Inverse array except for elements that are defined by param stop
 * @function inverse 
 * @param {Array} array - array of elements
 * @param {*} pos - position of element from which the array will be reversed
 * @returns {Array}
 */
const inverse = (array, pos = 0) => {
    if (!Array.isArray(array)) {
        throw new TypeError('First argument must be an array');
    }

    if (!Number.isInteger(pos)) {
        throw new TypeError('Second argument must be an integer');
    }
    
    const newArray = [...array];
    
    if (pos < 0) {
        for (let i = 0; i <= array.length + pos - 1; i++) {
            newArray[i] = array[array.length + pos - i - 1];
        }
    } else {
        for (let i = array.length - 1; i >= pos; i--) {
            newArray[i] = array[array.length + pos - i - 1];
        }
    }
    return newArray;
}
