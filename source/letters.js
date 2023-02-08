"use strict";

function letters (string, flag) {
    return string.split('').filter((element, idx, array) => {
        if (flag === undefined) {
            return array.lastIndexOf(element) === array.indexOf(element)
        } else return  (flag) ? array.indexOf(element) === idx
                              : array.lastIndexOf(element) === idx
    }).join('')
}
