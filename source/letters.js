"use strict";

function letters (string, flag = true) {
    return string.split('').filter((element, idx, array) => {
        return (flag) ? array.indexOf(element) === idx
                      : array.lastIndexOf(element) === idx
    }).join('')
}

console.log(letters("aaabbo1bbaa2", true));