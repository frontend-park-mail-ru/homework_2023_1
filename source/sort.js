'use strict';

function sort(str) {
    let arrayOfStrings = str.split(' ');

    arrayOfStrings.forEach((word, i) => {
        word = word.split('').sort((a, b) => {
            return a.localeCompare(b, 'ru', 'en');
        }).join('').toLowerCase();
        word = word[0].toUpperCase() + word.slice(1);
        console.log(word);
        arrayOfStrings[i] = word;
    });

    arrayOfStrings.sort((a, b) => {
        return a.localeCompare(b, 'ru', 'en');
    });
    
    return arrayOfStrings.join(' ');
}
