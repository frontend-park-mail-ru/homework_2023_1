'use strict';

/**
 * Функция, которая рисует ASCII-шахматрую доску размером 
 * N*N символов из звёздочек (в левом верхнем углу всегда стоит звёздочка)
 * @function
 * @param {number | string} n - размерность шахматной доски.
 * @returns {string | null} строка, представляющая собой шахматную доску 
 * (ряды доски разделяются в строке с помощью '\n').
 */
const chess = function (n) {
    let num = Number(n);
    if (isNaN(num) || num <= 1) {
        return null;
    }
    const blackRow = "".padStart(num, "* ") + "\n";
    const whiteRow = "".padStart(num, " *") + "\n";
    const doubleRow =  blackRow + whiteRow;
    const result = "".padStart(num * num + num, doubleRow);
    return result;
};
