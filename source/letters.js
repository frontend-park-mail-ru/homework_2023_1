"use strict";

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
    return str.split('').filter((element, idx, array) => {
        if (flag === undefined) {
            return array.lastIndexOf(element) === array.indexOf(element)
        } else return  (flag) ? array.indexOf(element) === idx
                              : array.lastIndexOf(element) === idx
    }).join('')
}
