'use strict';

/**
 * RLE compression
 * @param {string} str - string you want to compress
 *
 * @returns {string} - compressed string
 * @author Nigmatullin Alik <NigAlik020503@yandex.ru>
 */
const rle = (s) => {
    if (s === null || s === undefined || Object.getPrototypeOf(s) !== String.prototype) {
        throw new Error('Type Error')
    }
    let cnt = 1, tmp = 1
    const cntToString = cnt => cnt !== 1 ? cnt : ''
    const func = (res, next) =>
        next === res[res.length - 1] ? (++cnt, res) : (tmp = cnt, cnt = 1, res + cntToString(tmp) + next)
    return s.split('').reduce(func, '') + cntToString(cnt)
}
