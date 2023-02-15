'use strict';

/**
 * RLE compression
 * @param {string} str - string you want to compress
 *
 * @returns {string} - compressed string
 * @author Nigmatullin Alik <NigAlik020503@yandex.ru>
 */
const rle = (str) => {
    if (typeof str !== "string" && !(str instanceof String)) {
        throw new TypeError('Error');
    }
    if (!str.split('').every((sym) => isNaN(sym))) {
        throw new Error('string contains numbers');
    }
    let count = 1, tmp = 1;
    const countToString = (count) => count !== 1 ? count : '';
    return str.split('').reduce((result, next) => {
        if (next === result[result.length - 1]) {
            count++;
            return result;
        } else {
            tmp = count;
            count = 1;
            return result + countToString(tmp) + next;
        }
    }, '') + countToString(count);
};
