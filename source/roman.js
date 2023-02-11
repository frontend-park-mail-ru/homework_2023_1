'use strict';

const ROMAN_ARAB = {
    'M': 1000,
    'CM': 900,
    'D': 500,
    'CD': 400,
    'C': 100,
    'XC': 90,
    'L': 50,
    'XL': 40,
    'X': 10,
    'IX': 9,
    'V': 5,
    'IV': 4,
    'I': 1,
}
const romanSymbols = /^[MDCLXVI]*$/i;

/**
 * Сhecks if a number is roman.
 * @param {string} input - incoming character sequence.
 * @returns {boolean} whether the input character sequence is an roman number.
 */
const isRoman = (input) => {
    if (typeof input === 'string' || input instanceof String) {
        return romanSymbols.test(input);
    }
    
    return false;
}

/**
 * Сhecks if a number is arabic.
 * @param {string} input - incoming character sequence.
 * @returns {boolean} whether the input character sequence is an arabic number.
 */
const isArab = (input) => Number.isInteger(Number(input));

/**
 * Сonvert arabic to roman numbers.
 * @param {number} num - arabic number.
 * @returns {string} result - roman number.
 */
const toRoman = (num) =>
    Object.keys(ROMAN_ARAB).reduce(([roman, arab] = result, currentItem) => {
        const i = Math.floor(arab / ROMAN_ARAB[currentItem])
        arab -= i * ROMAN_ARAB[currentItem];
        
        return [roman + currentItem.repeat(i), arab]
    }, ['', num])[0];


/**
 * Сonvert roman to arabic numbers.
 * @param {string} str - roman number.
 * @returns {number} result - arabic number.
 */
const toArab = (str) => {
    const romanNum = str.toUpperCase().split('');

    return romanNum.reduce((result, currentItem, i, arr) => {
        if (ROMAN_ARAB[currentItem] < ROMAN_ARAB[arr[i + 1]]) {
            return result - ROMAN_ARAB[currentItem];
        }
        return result + ROMAN_ARAB[currentItem];
    }, 0);
}

/**
 * Сonverts numbers from arabic to roman and vice versa.
 * @param {string} input - incoming character sequence.
 * @returns {(number| string)} resulting number (roman or arabic).
 */
const roman = (input) => {
    if (isArab(input) && input > 0) {
        return toRoman(input);
    }
    if (isRoman(input)) {
        return toArab(input);
    }

    throw TypeError('Incorrect input!');
}
