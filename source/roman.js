'use strict';

const romanArabicBind = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
const arabicNums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
const romanNums =  ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'];

/**
 * Переводит римские числа в десятичные и наоборот
 * @param {string|number} input - Римское число (строка) или десятичное (строка|число)
 * @returns {string|number} Полученное число: римское строкой, десятичное числом
*/
const roman = input => {
    if (input === '') return 0;

    if (isValidRomanNum(input)) return romanToArabic(input);
    if (isValidArabicToRomanNum(input)) return arabicToRoman(input);

    throw Error('Arabic (positive integer only) or Roman number expected');
}

/**
 * Проверяет строку на валидное римское число
 * @param {string} str - Предполагаемое римское число
 * @returns {bool} Является ли строка валидным римским числом
*/
const isValidRomanNum = str => {
    if (typeof str !== 'string') return false;

    const validRomanNum = /^[ivxlcdm]*$/i;
    return validRomanNum.test(str);
}

/**
 * Проверяет строку или число на валидное арабское (десятичное) число,
 * которое возможно перевести в римское, т.е. целое неотрицательное
 * @param {string|number} num - Предполагаемое десятичное число
 * @returns {bool} Является ли строка валидным десятичным числом
*/
const isValidArabicToRomanNum = num => {
    if (typeof num === 'string') num = Number(num);

    if (!Number.isInteger(num) || num < 0) return false;
    return true;
}

/**
 * Переводит римские числа в десятичные
 * @param {string} romanNum - Римское число
 * @returns {number} Полученное арабское число
*/
const romanToArabic = romanNum => {
    const inputLen = romanNum.length;
    if (inputLen === 0) return 0;

    romanNum = romanNum.toUpperCase();

    // Вынесено наружу для кейса inputLen == 1
    let pos = inputLen - 1;
    let res = romanArabicBind[romanNum[pos]];

    while (pos > 0) {
        const curr = romanArabicBind[romanNum[pos]];
        const prev = romanArabicBind[romanNum[pos - 1]];

        res += (prev >= curr ? prev : -prev);  // Обработка подстрок наподобие "IX" (10 - 1)

        --pos;
    }
    return res;
}

/**
 * Переводит арабские (десятичные) числа в римские
 * @param {number} arabicNum - Десятичное число
 * @returns {string} Полученное римское число
*/
const arabicToRoman = arabicNum => {
    let res = '';

    for (let pos = romanNums.length - 1; arabicNum > 0; --pos) {
        while (arabicNum >= arabicNums[pos]) {
            res += romanNums[pos];
            arabicNum -= arabicNums[pos];
        }
    }
    return res;
}
