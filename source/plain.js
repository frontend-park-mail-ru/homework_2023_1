'use strict';

/** 
 * Flatten given array
 * @param {Array} arr - original array
 * @returns {Array} flattened arr
*/
const plain = (arr) => {
    if (!Array.isArray(arr)) {
        throw new TypeError('arr must be an array!');
    }

    const copy = arr.slice();
    const reversedResult = [];

    while (copy.length) {
        const popped = copy.pop();

        if (Array.isArray(popped)) {
            copy.push(...popped);
        } else {
            reversedResult.push(popped);
        }
    }

    return reversedResult.reverse();
}
