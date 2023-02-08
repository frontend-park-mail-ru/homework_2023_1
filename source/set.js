'use strict'

/**
 * @param {Object} obj
 * @param {string} property
 * @param {any} new_val
 * 
 * @returns {Object}
 */
function set(obj, property, new_val) {
    let arr = property.split('.')
    arr.shift()
    let length = arr.length

    let current = obj

    for (let i = 0; i < length - 1; i++) {
        let val = arr[i]

        if (!current[val]) {
            current[val] = {}
        }
        current = current[val]
    }

    current[arr[length - 1]] = new_val

    return obj
}
