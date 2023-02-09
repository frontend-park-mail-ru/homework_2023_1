'use strict';

/**
 * Функция RLE сжатия
 * @param str любая строка, например ABBB
 * @returns {string} сжатая строка с помощью RLE, например AB3
 */
const rle = function (str) {
  if (str == null || typeof str != 'string') {
    throw new Error("wrong input");
  }
  if(/\d/.test(str)){
    throw new Error("there are numbers in the string");
  }
  return str.replace(/(.)\1+/g, function (internalStr, symbol) {
    return symbol + internalStr.length;
  });
};
