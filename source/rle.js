//First version
// 'use strict';
// const rle = function (str) {
//     if (str === '') return '';
//     let res = '';
//     let count = 1;
//     for (let i = 1; i < str.length; ++i) {
//         (str[i] === str[i-1]) ?
//             count++ :
//             ((count !== 1) ?
//                 res += str[i-1] + count :
//                 res += str[i-1],
//                 count = 1)
//     }
//     return (count !== 1) ? res + str.at(-1) + count : res + str.at(-1)
// }

// Last version
'use strict';

/**
 * RLE compression
 * @param {string} str - string you want to compress
 *
 * @returns {string} - compressed string
 * @author Nigmatullin Alik <NigAlik020503@yandex.ru>
 */
const rle = str => str.replace(/(.)\1*/g,
    function (substr, sym) { return sym + (substr.length > 1 ? substr.length : ''); });
