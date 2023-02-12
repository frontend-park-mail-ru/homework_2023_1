'use strict';

/**
 * @description Функция для поиска минимального числа в массиве чисел
 * @param {Array} numbers - массив чисел
 * @returns {number} Минимальное число
*/
const min = numbers => Math.min(...numbers);

/**
 * @description Функция для поиска максимального числа в массиве чисел
 * @param {Array} numbers - массив чисел
 * @returns {number} Максимальное число
*/
const max = numbers => Math.max(...numbers);

/**
 * @description Функция для поиска минимального и максимального чисел в строке
 * @param {string} str - строка с числа, разделёнными пробелами
 * @returns {Array} Массив, содержащий минимальное и максимальное числа
*/
const minmax = (str) => {
    const numbers = str.split(' ').filter(Boolean).map(Number).filter((value) => !Number.isNaN(value))
    return numbers.length ? [min(numbers), max(numbers)] : [undefined, undefined]
};
