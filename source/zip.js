'use strict';

/**
 * @function zip - принимает на вход несколько объектов (любое количество), и возвращает единственный объект, содержащий все поля из всех объектов.
 * @param {Object} objects - объекты которые следует обьединить.
 * @returns {Object}
 */

const zip = (...objects) => {
    if (objects.length === 0) {
        throw new TypeError('Не было переданно обьектов для объединения');
    }

    const UniObject = {};

    objects.forEach((object) => {
        if (
            object !== Object(object) ||
            Object.getPrototypeOf(object) !== Object.getPrototypeOf({})
        ) {
            throw new TypeError('Не объект или null');
        }
        const ObjField = Object.entries(object);
        ObjField.forEach(([key,value]) => {
            if (!(key in UniObject)) {
                UniObject[key] = value;
            }
        });
    });
    return UniObject;
};
