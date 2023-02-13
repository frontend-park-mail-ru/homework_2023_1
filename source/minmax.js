'use strict';

const isNullOrUndefined = value => {
  return value === null || value === undefined;
}

/**
 * @description Функция для поиска максимального числа в массиве чисел
 * @param {Array} numbers - массив чисел
 * @returns {number} Максимальное число
*/
const max = numbers => {
  let max = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }

  return max;
};

/**
 * @description Функция для поиска минимального числа в массиве чисел
 * @param {Array} numbers - массив чисел
 * @returns {number} Минимальное число
*/
const min = numbers => {
  let min = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }

  return min;
};

/**
 * @description Функция для поиска минимального и максимального чисел в строке
 * @param {string} str - строка с числами, разделёнными пробелами
 * @returns {Array} Кортеж, содержащий 2 значения: минимальное и максимальное числа
*/
const minmax = str => {
  if (isNullOrUndefined(str)) {
    throw new Error('Неверный аргумент: ожидалась строка!');
  }

  const numbers = str.split(' ').filter(Boolean).map(Number).filter((value) => !Number.isNaN(value));
  return numbers.length ? [min(numbers), max(numbers)] : [undefined, undefined];
};
