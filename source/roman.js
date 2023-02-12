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
    if (isValidRomanNum(input)) { 
        return romanToArabic(input);
    }
    if (isValidArabicToRomanNum(input)) {
        return arabicToRoman(input);
    }

    throw Error('Arabic (positive integer only) or Roman number expected');
}

/**
 * Проверяет строку на валидное римское число
 * @param {string} str - Предполагаемое римское число
 * @returns {bool} Является ли строка валидным римским числом
*/
const isValidRomanNum = (str) => {
    if (typeof str !== 'string') {
        return false;
    }

    const validRomanNum = /^[ivxlcdm]+$/i;
    return validRomanNum.test(str);
}

/**
 * Проверяет строку или число на валидное арабское (десятичное) число,
 * которое возможно перевести в римское, т.е. целое неотрицательное
 * @param {string|number} num - Предполагаемое десятичное число
 * @returns {bool} Является ли строка валидным десятичным числом
*/
const isValidArabicToRomanNum = (num) => {
    if (typeof num === 'string') {
        num = Number(num);
    }

    return (Number.isInteger(num) && num > 0);
}

/**
 * Переводит римские числа в десятичные
 * @param {string} romanNum - Римское число
 * @returns {number} Полученное арабское число
*/
const romanToArabic = (romanNum) => {
    romanNum = romanNum.toUpperCase().split("");

    const firstNum = romanArabicBind[romanNum.at(-1)];

    let prevSymb = romanNum.at(-1);
    return romanNum.slice(0, -1).reduceRight(
        (subArabic, currSymb) => {
            const curr = romanArabicBind[currSymb];
            const prev = romanArabicBind[prevSymb];
            prevSymb = currSymb;

            subArabic += (curr >= prev ? curr : -curr);

            return subArabic;
        }, firstNum);
}

/**
 * Переводит арабские (десятичные) числа в римские
 * @param {string|number} arabicNum - Десятичное число
 * @returns {string} Полученное римское число
*/
const arabicToRoman = (arabicNum) => {
    return arabicNums.reduceRight(
        (subRoman, curr, ind) => {
            while (arabicNum >= curr) {
                subRoman += romanNums[ind];
                arabicNum -= curr;
            }
            return subRoman;
        }, '');
}
