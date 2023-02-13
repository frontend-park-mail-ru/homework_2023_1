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
const minmax = str => str === null || str === undefined || massiveFromString(str).length <= 0 ?
        [ undefined, undefined ] :
        [Math.min(...massiveFromString(str)), Math.max(...massiveFromString(str))];
        