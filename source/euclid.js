'use strict';

/**
 * Алгоритм нахождения НОД для 2ух чисел
 * @param {number} a - Первое число
 * @param {number} b - Второе число
 * @returns {number} НОД двух чисел
 */
const gcd = (a, b) => {
    var tmp;
    while ((a % b) > 0)  {
      tmp = a % b;
      a = b;
      b = tmp;
    }
    return b;
  }

/**
 * Алгоритм нахождения НОД для последовательности чисел любой длины
 * @param {...object} numbers - Последовательность входящих чисел
 * @returns {number} НОД данной последовательности чисел
 */
const euclid = (...numbers) => {
    while (numbers.length > 1) {
        numbers.push(gcd(numbers.pop(), numbers.pop()));
    }
    return numbers[0];
}
