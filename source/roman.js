'use strict';

const romanArabicBind = new Map([['I', 1], ['V', 5], ['X', 10], ['L', 50],
                                 ['C', 100], ['D', 500], ['M', 1000]]);

const arabicDict = [1,   4,    5,   9,    10,  40,   50,  90,   100, 400,  500, 900,  1000];
const romanDict =  ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];


const roman = input => {
    if (input === '') return 0;

    if (isValidRomanNum(input)) return romanToArabic(input);
    if (isValidArabicToRomanNum(input)) return arabicToRoman(input);

    throw Error('Arabic (uint only) or Roman number expected (positive)');
}

const isValidRomanNum = str => {
    if (typeof str !== 'string') return false;

    str = str.toUpperCase();

    for (let i = 0; i < str.length; ++i) {
        if (!romanArabicBind.has(str[i])) return false;
    }
    return true;
}

const isValidArabicToRomanNum = num => {
    if (typeof num === 'string') num = Number(num);

    if (typeof num === 'number') {
        if (!Number.isInteger(num) || num < 0) return false;
        return true;
    }
    return false;
}

const romanToArabic = romanNum => {
    const inputLen = romanNum.length;
    if (inputLen == 0) return 0;

    romanNum = romanNum.toUpperCase();

    // Вынесено наружу для кейса inputLen == 1
    let pos = inputLen - 1;
    let res = romanArabicBind.get(romanNum[pos]);

    while (pos > 0) {
        const curr = romanArabicBind.get(romanNum[pos]);
        const prev = romanArabicBind.get(romanNum[pos - 1]);

        res += (prev >= curr ? prev : -prev);  // Обработка подстрок наподобие "IX" == 10 - 1

        --pos;
    }
    return res;
}

const arabicToRoman = arabicNum => {
    let res = '';

    for (let pos = romanDict.length - 1; arabicNum > 0; --pos) {
        while (arabicNum >= arabicDict[pos]) {
            res += romanDict[pos];
            arabicNum -= arabicDict[pos];
        }
    }
    return res;
}
