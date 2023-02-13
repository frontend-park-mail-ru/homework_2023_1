'use strict';

/**
 * Zip fields of given objects in one object.
 * @param {...object} objects - An iterable containing a list of objects.
 * @returns {object} A new object whose properties are given by the objects
 * @author Taktashova Daria <taktashovadasha@yandex.ru>
 */
const zip = (...objects) => {
    if (objects != null && objects.every(elem => elem != null)) {
        return objects.reduceRight((acc, cur) => ({ ...acc, ...cur}), {});
    }
    throw new Error('One of elements is null or undefined')
}
