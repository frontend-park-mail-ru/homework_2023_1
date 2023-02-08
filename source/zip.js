'use strict';

const zip = (...objects) => {
  return Object.assign({}, ...objects.reverse())
}

