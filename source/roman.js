'use strict';

function roman(input) {
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

        const roman_main = {
            1000: 'M', 100: 'C', 10: 'X',  1: 'I'
        };

        const roman_sub = {
            100: 'D', 10: 'L', 1: 'V'
        };

        if (number > MAX_ROMAN || number < 1)
            return NaN;

        return Object.keys(roman_main).reverse().reduce((res, cur, ind, arr) => {
            let digit = Math.floor(number / cur);

            number %= cur;
            
            if (digit == 4) {
                return res + roman_main[cur] + roman_sub[cur];
            }

            if (digit == 9) {
                return res + roman_main[cur] + roman_main[arr[ind - 1]];
            }

            if (digit >= 5) {
                return res + roman_sub[cur] + roman_main[cur].repeat(digit % 5);
            }

            if (digit > 0) {
                return res + roman_main[cur].repeat(digit);
            }

            return res;
        }, '');
    }

    const number_input = parseInt(input);

    if (isNaN(number_input)) {
        return fromRoman(input);
    }

    return toRoman(number_input);
}
