'use strict';

/**
 * Функция RLE сжатия
 * @param str любая строка, например ABBB
 * @returns {string|null} сжатая строка с помощью RLE, например AB3
 */
const rle = function (str) {
  if (str == null || typeof str != 'string') {
    return null;
  }
  return str.replace(/(.)\1+/g, function (internalStr, symbol) {
    return symbol + internalStr.length;
  });
};
