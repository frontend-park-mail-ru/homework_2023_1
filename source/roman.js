'use strict';

const romanArabicBind = {I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000};
const arabicNums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const romanNums =  ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

/**
 * Переводит римские числа в десятичные и наоборот
 * @param {string|number} input - Римское число (строка) или десятичное (строка|число)
 * @returns {string|number} Полученное число: римское строкой, десятичное числом
*/
const roman = (input) => {
    if (input === '') return 0;

    if (isValidRomanNum(input)) return romanToArabic(input);
    if (isValidArabicToRomanNum(input)) return arabicToRoman(input);

    throw Error('Arabic (positive integer only) or Roman number expected');
}

const isValidRomanNum = (str) => {
    if (typeof str !== 'string') return false;

    const validRomanNum = /^[ivxlcdm]*$/i;
    return validRomanNum.test(str);
}

const isValidArabicToRomanNum = (num) => {
    if (typeof num === 'string') num = Number(num);

    if (!Number.isInteger(num) || num < 0) return false;
    return true;
}

const romanToArabic = (romanNum) => {
    const reversedNum = romanNum.toUpperCase().split("");

    const firstNum = romanArabicBind[reversedNum.at(-1)];

    let prevSymb = reversedNum.at(-1);
    return reversedNum.slice(0, -1).reduceRight(
        (subSum, currSymb) => {
            const curr = romanArabicBind[currSymb];
            const prev = romanArabicBind[prevSymb];
            prevSymb = currSymb;

            subSum += (curr >= prev ? curr : -curr);

            return subSum;
        }, firstNum);
}

const arabicToRoman = (arabicNum) => {
    return arabicNums.reduceRight(
        (subRes, curr, ind) => {
            while (arabicNum >= curr) {
                subRes += romanNums[ind];
                arabicNum -= curr;
            }
            return subRes;
        }, '');
}
