'use strict';

/**
 * Функция, которая рисует ASCII-шахматрую доску размером 
 * N*N символов из звёздочек (в левом верхнем углу всегда стоит звёздочка)
 * @function
 * @param {number | string} n - целое число, размерность шахматной доски.
 * @returns {string | null} строка, представляющая собой шахматную доску 
 * (ряды доски разделяются в строке с помощью '\n').
 */
const chess = function (n) {
    const num = Number(n);
    if (!Number.isInteger(num) || num <= 1) {
        return null;
    }
    const blackRow = "\n".padStart(num + 1, "* ");
    const whiteRow = "\n".padStart(num + 1, " *");
    const doubleRow =  blackRow + whiteRow;
    const result = "".padStart(num * num + num, doubleRow);
    return result;
};
