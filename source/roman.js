'use strict';

const MAX_ROMAN = 3999;
const MIN_ROMAN = 1;

const ROMAN = {
    1000: 'M', 100: 'C', 10: 'X',  1: 'I'
};

const ROMAN_FIVE_MULTIPLES = {
    100: 'D', 10: 'L', 1: 'V'
};

const ARABIC = {
    I: 1, V: 5, X: 10,
    L: 50, C: 100, D: 500, M: 1000
};

/**
 * Перевод чисел из римской записи в арабскую и обратно
 * @param {(string|number)} input - Число/строка с арабской записью числа или строка, содержащая римскую запись числа
 * @returns {(string|number)} - Результат преобразования (число, если арабская запись, строка - если римская)
 */
const roman = (input) => {
    if (Number.isNaN(input) || input === null ||
        input === undefined || typeof input === 'object') {
        return NaN;
    }

    const numberInput = parseInt(input);

    if (Number.isNaN(numberInput)) {
        return fromRoman(input);
    }

    return toRoman(numberInput);
};

/**
 * Перевод чисел из римской записи в арабскую
 * @param {string} str - Строка, содержащая римскую запись числа
 * @returns {number} - Результат преобразования в арабскую запись
 */
const fromRoman = (str) => {
    const processedInput = str.toUpperCase().split('');

    if (!processedInput.every(elem => Object.keys(ARABIC).includes(elem))) {
        return NaN;
    }

    return processedInput.reduce((res, cur, ind, arr) => {
        const currentArabic = ARABIC[cur];

        if (ind + 1 < arr.length && ARABIC[arr[ind + 1]] > currentArabic) {
            return res - currentArabic;
        }

        return res + currentArabic;
    }, 0);
};

/**
 * Перевод чисел из арабской записи в римскую
 * @param {number} number - Арабская запись числа
 * @returns {string} - Результат преобразования в римскую запись
 */
const toRoman = (number) => {
    if (number > MAX_ROMAN || number < MIN_ROMAN) {
        return NaN;
    }

    return Object.keys(ROMAN).reverse().reduce((res, cur, ind, arr) => {
        const digit = Math.floor(number / cur);

        number %= cur;

        if (digit === 4) {
            return res + ROMAN[cur] + ROMAN_FIVE_MULTIPLES[cur];
        }

        if (digit === 9) {
            return res + ROMAN[cur] + ROMAN[arr[ind - 1]];
        }

        if (digit >= 5) {
            return res + ROMAN_FIVE_MULTIPLES[cur] + ROMAN[cur].repeat(digit % 5);
        }

        if (digit > 0) {
            return res + ROMAN[cur].repeat(digit);
        }

        return res;
    }, '');
};
