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
    if (typeof line !== "string") {
        throw new Error('The first parameter is not a string!');;
    }
    if (typeof flag !== "boolean" && typeof flag !== "undefined") {
        throw new Error('The second parameter is not a boolean!');;
    }

    line = [...line];
    let result = '';
    if (flag === true || flag === false) {
        if (flag === false) line = line.reverse();
        let set = new Set();
        line.forEach((item) => {
            if (!set.has(item)) {
                set.add(item);
                result += item;
            }
        });
        if (flag === false) result = [...result].reverse().join("");
    } else {
        let obj = new Object(null);
        [...line].forEach((item) => {
            if (!obj[item]) {
                obj[item] = 1;
            } else {
                obj[item] += 1;
            }
        });
        
        [...line].forEach((item) => {
            if (obj[item] == 1) result += item;
        });
    }
    return result;
};
