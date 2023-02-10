'use strict';

/**
 *accepts objects (any number) as input, and return a single object containing all fields from all objects.
 * @param {Object[]} objects - Objects for zip.
 * @returns {Object} object that contains the fields of all objects
 */
const zip = (...objects) => {
  return objects.reduceRight((result, obj, index) => {
    if (Object.prototype.toString.call(obj) !== "[object Object]") throw new Error(`Argument №${index} is not object`)
    Object.keys(obj).forEach((key) => {result[key] = obj[key]}) 
    return result
  }, {})
}

