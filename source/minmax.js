'use strict';

const min = numbers => Math.min(...numbers);
const max = numbers => Math.max(...numbers);

const minmax = (str) => {
  let numbers = str.split(' ').filter(Boolean).map(Number).filter((value) => !Number.isNaN(value));
  return (numbers.length) ? [min(numbers), max(numbers)] : [undefined, undefined];
};
