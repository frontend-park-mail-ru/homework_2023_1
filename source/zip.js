'use strict';

/**
 * @function zip - принимает на вход несколько объектов (любое количество), и возвращает единственный объект, содержащий все поля из всех объектов.
 * @param {Object} objects - объекты которые следует обьединить.
 * @returns {Object} uni_object возращает обьединенный объект
 */

const zip = (...objects) => {
    const uni_object = {};

    objects.forEach((object) => {
        if (
            object !== Object(object) ||
            Object.getPrototypeOf(object) !== Object.getPrototypeOf({})
        ) {
            throw new TypeError('Не объект или null', 'planify.js');
        }
        const obj_field = Object.entries(object);
        obj_field.forEach(([key,value]) => {
            if (!(key in uni_object)) {
                uni_object[key] = value;
            }
        })
    }
    )
    return uni_object;
}