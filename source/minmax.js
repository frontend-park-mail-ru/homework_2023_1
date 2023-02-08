'use strict';

const massiveFromString = str => str.split(' ').map(c => parseFloat(c)).filter(c => !isNaN(c));

const minmax = str => {
    return massiveFromString(str).length > 0 ?
        [Math.min(...massiveFromString(str)), Math.max(...massiveFromString(str))] :
        [ undefined, undefined ];
}
