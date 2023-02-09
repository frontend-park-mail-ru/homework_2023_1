'use strict';

/**
 * 
 * @param {Object[]} objects - objects array for zip.
 * @returns {Object}
 */

const zip = (...objects) => {
  return objects.reduceRight((result, obj, index) => {
    if ((obj === null) || (typeof obj !== 'object')) throw new Error(`Argument №${index} is not object`)
    Object.keys(obj).forEach((key) => {result[key] = obj[key]}) 
    return result
  }, {})
}

