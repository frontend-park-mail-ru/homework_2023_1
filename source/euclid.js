'use strict';

/**
 * Функция нахождения наибольшего общего делителя двух чисел.
 * @param {number} value1
 * @param {number} value2
 * @returns {number} наибольший общий делитель двух чисел
 */

const gcd = (value1, value2) => {
    while (value1 && value2) {
        if (value1 > value2) {
            value1 %= value2;
        } else {
            value2 %= value1;
        }
    }
    return value1 + value2;
}

/**
 * Функция нахождения наибольшего общего делителя для одного и более чисел.
 * @param {...number} args натуральные числа, для которых находится наибольший общий делитель
 * @returns {number} наибольший общий делитель
 * @throws {Error} количество аргументов должно быть больше 0 и это должны быть натуральные числа.
 */

const euclid = (...args) => {
    if (!args.length) {
        throw new Error("Function requires at least one input parameter.");
    }

    if (!args.every(arg => Number.isInteger(arg) && arg > 0)) {
        throw new Error("Bad input parameters.");
    }

    return args.reduce((accumulator, currentValue) => gcd(accumulator, currentValue), 0);
};
