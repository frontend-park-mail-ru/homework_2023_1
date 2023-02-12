'use strict';

const massiveFromString = str => str.split(' ').map(c => parseFloat(c)).filter(c => !isNaN(c));

const minmax = str => str === null || str === undefined || massiveFromString(str).length <= 0 ?
        [ undefined, undefined ] :
        [Math.min(...massiveFromString(str)), Math.max(...massiveFromString(str))];
        