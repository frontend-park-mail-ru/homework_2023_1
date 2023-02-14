'use strict';

/**
 * Получение массива чисел из строки
 * @param {string} str - строка с числами
 * @return {Array} - массив всех чисел из строки
 */
const massiveFromString = str => str.split(' ').map(c => parseFloat(c)).filter(c => !isNaN(c));

/**
 * Получение минимального и максимального чисел из строки
 * @param {string} str - строка с числами
 * @return {Array} - массив, содержащий минимальное и максимальное число из строки
 */
const minmax = (str) => {
        if (typeof str !== 'string' && !(str instanceof String)) {
                throw new TypeError('str is not a string');
        }
        const arr = massiveFromString(str);
        return arr.length <= 0 ? [ undefined, undefined ] : [Math.min(...arr), Math.max(...arr)];
}
