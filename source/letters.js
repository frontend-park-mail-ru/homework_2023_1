'use strict';

/**
 * @param {string} str - string for deleting repeating letters
 * @param {boolean} flag
 * @description deletes repeating symbols from string
 * if flag == true  -  keeps only First instance of repeating letter
 * if flag == false -  keeps only Last instance of repeating letter
 * if flag == undefined - deletes All instances of repeating letter
 * @returns {string} Returns string without repeating letters (depends on flag)
 * @example
 * // returns "a_b1"
 * letters("a_aas1b", true);
 * @example
 * // returns "_a1b"
 * letters("a_aabb", false);
 * @example
 * // returns "_"
 * letters("a_aabb");
 */

function letters (str, flag) {
    if (typeof str !== 'string' && !(str instanceof String)) {
        throw new TypeError('Expected string as first argument')
    }
    if (typeof flag !== 'boolean' && typeof flag !== 'undefined' ) {
        throw new TypeError('Expected boolean or nothing as second argument')
    }
    if (flag === undefined) {
        let letters = {};
        [...str].map((element) => {
            if (letters.hasOwnProperty(element)) {
                letters[element]++;
            } else letters[element] = 1;
        });
        return [...str].filter((element) => {
            return letters[element] === 1;
        }).join('')
    } else {
        return (flag ? [...new Set(str)] : [...new Set([...str].reverse())].reverse()).join('');
    }
}
