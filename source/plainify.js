'use strict';

/**
 * Получает на вход обычный объект в вложенными свойствами, а возвращает plain-объект
 * @function iterate - 
 * @param {Object} obj - объект со вложенными свойствами
 * @param {Object} obj_plain - пустой объект предназначенный для содержания  plain-объекта
 * @param {Object} path - свойства объекта
 * @function plainify
 * @param {Object} object - объект со вложенными свойствами
 * @returns {Object} obj_plain возращает объект без вложенных свойств или пустой при ошибке
 */

const iterate = (obj, obj_plain, path = "") => {
    const array_field = Object.entries(obj);
    
    array_field.forEach( ([key,value]) => {
        if (typeof value === 'object') {
            iterate(value, obj_plain, path + key + '.');
        } else {
            obj_plain[path + key] = value;
        }
    })
};

const plainify = (object) => {
    if (object === null || Object.getPrototypeOf(object) !== Object.getPrototypeOf({})) {
        throw new TypeError('Не объект или null', 'planify.js', 30);
    };

    const obj_plain = new Object(null);

    iterate(object, obj_plain);

    return obj_plain;
};
