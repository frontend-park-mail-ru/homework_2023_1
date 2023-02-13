'use strict';

/**
 * Функция, получающая путь к вложенному свойству объекта и устанавливающая значение в это свойство
 *
 * @param {Object} obj
 * @param {string} property
 * @param {any} new_val
 *
 * @returns {Object}
 */
const set = (obj, property, new_val) => {
    if (Object.prototype.toString.call(obj) !== '[object Object]') {
        throw new Error('first argument must be an object');
    }

    if (Object.prototype.toString.call(property) !== '[object String]') {
        throw new Error('second argument must be a string');
    }

    const arr = property.split('.');
    arr.shift();
    const length = arr.length;

    let current = obj;

    arr.forEach((val, ind) => {
        if (ind === length - 1) {
            current[val] = new_val;
        } else {
            if (!current[val]) {
                current[val] = {};
            }
            current = current[val];
        }
    });

    return obj;
};
