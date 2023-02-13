'use strict';

/**
 * Функция RLE сжатия
 * @param str любая строка, например ABBB
 * @returns {string} сжатая строка с помощью RLE, например AB3
 * @throws Выкидывает ошибку, если аргумент null, не строка или в строке есть цифры
 */
const rle = (str) => {
  if (str == null) {
    throw new Error('input is null');
  }
  if (typeof str !== 'string' && !str instanceof String) {
    throw new TypeError('wrong input');
  }
  if (/\d/.test(str)) {
    throw new Error('there are numbers in the string');
  }
  return str.replace(/(.)\1+/g, function (internalStr, symbol) {
    return symbol + internalStr.length;
  });
};
