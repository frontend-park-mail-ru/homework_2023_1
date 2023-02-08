'use strict';

const letters = (string, flag) => {
    let result = "";
    let seen = new Set();
    [...(flag) ? string : string.split("").reverse().join("")].forEach(letter => {
        if (!seen.has(letter)) {
            result = (flag) ? (result + letter) : (letter + result);
            seen.add(letter);
        } else if (result.includes(letter) && typeof flag === "undefined") {
            result = result.replace(letter, '');
        }
    });
    return result;
};
