'use strict';

/**
 * Функция, удаляющая повторяющиеся 
 * буквы по правилу, зависящему от входного параметра.
 * @param {line} line - Исходная строка
 * @param {?boolean} flag - Булевое значение, определяющее поведение
 * @description Если flag не передан, то удаляются все повторяющиеся символы, 
 * если flag равен true - остается первый из повторяющихся символов, 
 * eсли flag равен false - остается последний из повторяющихся символов.
 * @returns {line} Измененная строка без повторяющихся букв
 */
const letters = (line, flag) => {
    return [...line].filter((item, idx, arr) => {
        if (flag === true) {
            return arr.indexOf(item) == idx;
        } else if (flag === false) {
            return arr.lastIndexOf(item) == idx;
        } else {
            return arr.indexOf(item) == arr.lastIndexOf(item);
        }
        }).join("");
};
