'use strict';

/**
 * Zip fields of given objects in one object.
 * @param {...object} objects - An iterable containing a list of objects.
 * @returns {object} A new object whose properties are given by the objects
 * @author Taktashova Daria <taktashovadasha@yandex.ru>
 */
const zip = (...objects) => {
    if (objects !== null && objects !== undefined && objects.every(elem => elem !== null && elem !== undefined)) {
        return objects.reduceRight((acc, cur) => ({ ...acc, ...cur}), {});
    }
    throw new TypeError('One of elements is null or undefined')
}
