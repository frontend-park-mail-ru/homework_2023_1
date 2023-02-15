'use strict';

/*
* sorting the words in a string and
* converting the first letter of each word to uppercase,
* the rest to lowercase
*
* @function sort
* @param {string} str - input string
*
* @returns {string}
*
* @author Verin Dmitriy <dima.verin.2002@mail.ru>
*/

const sort = str => {
    if (typeof str !== 'string') {
        throw new TypeError('The input parameter isn`t a string');
    } else if (str === '') {
        return '';
    }

    // split the string into separate words
    const words = str.split(' ');

    // add an object for string comparison
    const collator = new Intl.Collator();

    words.forEach((word, index) =>{

        // split the word into separate letters, lowercase and sort letters
        const letters = word.toLowerCase().split('').sort((a, b) => {
            return collator.compare(a, b);
        });
        letters[0] = letters[0].toUpperCase();
        words[index] = letters.join('');
    });

    return words.sort((a, b) => collator.compare(a, b)).join(' ');
}

