'use strict';

/**
 * Перевод чисел из римской записи и обратно
 * @param {(string|number)} input - Число/строка с арабской записью числа или строка, содержащая римскую запись числа
 * @returns {(string|number)} - Результат преобразования (число, если арабская запись, строка - если римская)
 */
function roman(input) {
    if (Number.isNaN(input) || input === null ||
        input === undefined || typeof input === 'object') {
        return NaN;
    }

    function fromRoman(str) {
        const arabic = {
            I: 1, V: 5, X: 10,
            L: 50, C: 100, D: 500, M: 1000
        };

        const processed_input = str.toUpperCase().split('');

        if (!processed_input.every((elem) => Object.keys(arabic).includes(elem))) {
            return NaN;
        }

        return processed_input.reduce((res, cur, ind, arr) => {
            let currentArabic = arabic[cur];

            if (ind + 1 < arr.length && arabic[arr[ind + 1]] > currentArabic) {
                return res - currentArabic;
            }

            return res + currentArabic;
        }, 0);
    }

    function toRoman(number) {
        const MAX_ROMAN = 3999

        if (number > MAX_ROMAN || number < 1)
            return NaN;

        const roman = {
            1000: 'M', 100: 'C', 10: 'X',  1: 'I'
        };

        const roman_five_multiples = {
            100: 'D', 10: 'L', 1: 'V'
        };

        return Object.keys(roman).reverse().reduce((res, cur, ind, arr) => {
            let digit = Math.floor(number / cur);

            number %= cur;

            if (digit == 4) {
                return res + roman[cur] + roman_five_multiples[cur];
            }

            if (digit == 9) {
                return res + roman[cur] + roman[arr[ind - 1]];
            }

            if (digit >= 5) {
                return res + roman_five_multiples[cur] + roman[cur].repeat(digit % 5);
            }

            if (digit > 0) {
                return res + roman[cur].repeat(digit);
            }

            return res;
        }, '');
    }

    const number_input = parseInt(input);

    if (Number.isNaN(number_input)) {
        return fromRoman(input);
    }

    return toRoman(number_input);
}
