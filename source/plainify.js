'use strict';

/**
 * Получает на вход обычный объект в вложенными свойствами, а возвращает plain-объект
 * @function iterate - 
 * @param {obj} - объект со вложенными свойствами
 * @param {obj_plain} - пустой объект предназначенный для содержания  plain-объекта
 * @param {path} - свойства объекта
 * @function plainify
 * @param {object} - объект со вложенными свойствами
 * @returns {obj_plain} возращает объект без вложенных свойств или пустой при ошибке
 */

let iterate = (obj, obj_plain, path = "") => {
    for (const key in obj) {
        if (typeof obj[key] === 'object') {
            iterate(obj[key], obj_plain, path + key + '.');
        } else {
            obj_plain[path + key] = obj[key];
        }
    }
}

let plainify = (object) => {
    if (object === null || Object.getPrototypeOf(object) !== Object.getPrototypeOf({})) {
        throw new TypeError('Не объект или пустой объект', 'planify.js', 30)
    };

    const obj_plain = {};

    iterate(object, obj_plain);

    return obj_plain;
}