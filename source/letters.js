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
    let result_array = new Array();
    let seen = new Set();

    for (let letter of line) {
        if (!seen.has(letter)) {
            seen.add(letter);
            result_array.push(letter);
            continue;
        }

        if (flag === true) {
            continue;
        }
        delete result_array[result_array.indexOf(letter)];
        if (flag === false) result_array.push(letter);

    }

    return result_array.join("");
};
