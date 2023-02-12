'use strict';

/**
 * Напишите функцию plain, которая будет принимать на вход массив массивов и создавать из них один общий массив. Массивы могут быть любой вложенности
 * @function
 * @param {Array} arr - Массив массивов
 * @param {Array} ans - Общий массив
 *
 * @return {Array}
 *
 */

const plain = arr => {
    if (!Array.isArray(arr)) {
        throw new Error('Incorrect data');
    }

    const ans = [];

    while (arr.length) {
        const elem = arr.shift();

        if (Array.isArray(elem)) {
            arr.unshift(...elem);
        } else {
            ans.push(elem);
        }
    };

    return ans;
};
