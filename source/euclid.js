'use strict';

/**
 * Алгоритм нахождения НОД для 2ух чисел
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 * @returns {number} НОД двух чисел
 */
const gcd = (a, b) => {
    while ((a % b) > 0)  {
        [a, b] = [b, a % b];
    }
    return b;
  }

/**
 * Алгоритм нахождения НОД для последовательности чисел любой длины
 * @param {...object} numbers - Последовательность входящих чисел
 * @returns {number} НОД данной последовательности чисел
 */
const euclid = (...numbers) => {
    let valid_input = numbers.every(element => {
        return typeof element === 'number';
    });

    if (!valid_input) {
        throw new Error('Array should only contain numbers!');
    }


    let result = numbers.reduce(function(result, current) {
        return gcd(result, current)
    }, numbers[0]);
    
    return result;
}
