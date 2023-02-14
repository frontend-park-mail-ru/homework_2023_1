'use strict';

/**
 * @description Функция для поиска максимального числа в массиве чисел
 * @param {Array.<number>} numbers - массив чисел
 * @returns {number} Максимальное число
*/
const max = (numbers) => Math.max(...numbers);

/**
 * @description Функция для поиска минимального числа в массиве чисел
 * @param {Array.<number>} numbers - массив чисел
 * @returns {number} Минимальное число
*/
const min = (numbers) => Math.min(...numbers);

/**
 * @description Функция для поиска минимального и максимального чисел в строке
 * @param {string} str - строка с числами, разделёнными пробелами
 * @returns {Array.<number>} Кортеж, содержащий 2 значения: минимальное и максимальное числа
*/
const minmax = (str) => {
  if (typeof str !== 'string' && !(str instanceof String)) {
    throw new TypeError('Неверный аргумент: ожидалась строка!');
  }

  const numbers = str.split(' ').filter(Boolean).map(Number).filter((value) => !Number.isNaN(value));
  return numbers.length ? [ min(numbers), max(numbers) ] : [ undefined, undefined ];
};
