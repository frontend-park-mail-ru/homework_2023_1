'use strict';

const rle = function (str) {
  if (str == null || typeof str != 'string'){
    return null;
  }
  return str.replace(/(.)\1+/g, function (internalStr, symbol) { return symbol + internalStr.length; });
};
