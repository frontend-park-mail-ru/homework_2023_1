//First version
// 'use strict';
// const rle = function (str) {
//     let res = '';
//     let count = 1;
//     for (let i = 1; i < str.length; ++i) {
//         if (str[i] === str[i-1]) {
//             count++;
//         }
//         else {
//             (count !== 1) ? res += str[i-1] + count : res += str[i-1]
//             count = 1;
//         }
//     }
//     return (count !== 1) ? res + str[str.length-1] + count : res + str[str.length-1]
// }

// Last version
'use strict';
const rle = str => str.replace(/(.)\1*/g,
    function (substr, sym) { return sym + (substr.length > 1 ? substr.length : ''); });
