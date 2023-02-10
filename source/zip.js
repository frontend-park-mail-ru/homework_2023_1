'use strict';

/**
 * Zip fields of given objects in one object.
 * @param {...object} objects - An iterable containing a list of objects.
 * @returns {object} A new object whose properties are given by the objects
 * @author Taktashova Daria <taktashovadasha@yandex.ru>
 */
const zip = (...objects) => Object.assign({}, ...objects.reverse());
