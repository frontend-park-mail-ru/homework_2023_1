'use strict';

const ROMAN = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
const ARAB = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

const isRoman = input => {
    if (typeof input === 'string' || input instanceof String) {
        const romanSymbols = /^[MDCLXVI]*$/;
        return romanSymbols.test(input.toUpperCase());
    }
    
    return false;
}

const isArab = input => Number.isInteger(Number(input));

const toRoman = num => {
    let result = '';
    let i = 0;

    while (num > 0) {
        if (num >= ARAB[i]) {
            num -= ARAB[i];
            result += ROMAN[i];
        } else {
            i++;
        }
    }

    return result;
}

const toArab = str => {
    let result = 0;
    const romanNum = str.toUpperCase();
    let pos = 0;
    let i = 0;

    while (pos < romanNum.length && i < ROMAN.length) {
        if (romanNum.substring(pos, pos + ROMAN[i].length) === ROMAN[i]) {
            pos += ROMAN[i].length;
            result += ARAB[i];
        } else {
            i++;
        }
    }

    return result;
}

const roman = input => {
    if (isArab(input) && input > 0) {
        return toRoman(input);
    } else if (isRoman(input)) {
        return toArab(input);
    }

    throw TypeError('Incorrect input!');
}
