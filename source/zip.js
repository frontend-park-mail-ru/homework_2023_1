'use strict';

/**
 * Zip fields of given objects in one object.
 * @param {...object} objects - An iterable containing a list of objects.
 * @returns {object} A new object whose properties are given by the objects
 * @author Taktashova Daria <taktashovadasha@yandex.ru>
 */
const zip = (...objects) => {
    if (!objects || !objects.every(elem => elem !== null && elem !== undefined)) {
        throw new Error('Type Error')
    }       
    if (objects.every(elem => Object.getPrototypeOf(elem) === Object.prototype)) {
        return objects.reduceRight((acc, cur) => ({ ...acc, ...cur}), {});
    }
    return objects[0]
}
