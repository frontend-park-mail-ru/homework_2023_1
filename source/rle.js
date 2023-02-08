'use strict';

const rle = function (str) {
  return str.replace(/(.)\1+/g, function (internalStr, symbol) { return symbol + internalStr.length; });
};
