'use strict';

/**
 * Алгоритм нахождения НОД для 2ух чисел
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 * @returns {number} НОД двух чисел
 */
const gcd = (a, b) => {
    let tmp;
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
    var result = numbers.reduce(function(result, current) {
        return gcd(result, current)
    }, numbers[0]);
    
    return result;
}

console.log(euclid(5, 10, 15, 100))