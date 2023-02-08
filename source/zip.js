'use strict';

function zip(...objects) {
	let result = {};
	for (let obj of objects) {
	  for (let key in obj) {
		if (!result.hasOwnProperty(key)) {
		  result[key] = obj[key];
		}
	  }
	}
	return result;
  }