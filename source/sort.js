'use strict';

/**
 * 
 * Сортирует буквы в словах по алфавиту, получившиеся слова в предложении — тоже.
 * Первую букву каждого слова она сделает прописной, остальные — строчными.
 * 
 * @param {string} str - входная строка (текст)
 * @return {string} Отсортированная строка.
 */

const sort = str => {
    if (typeof str !== 'string') {
        return 'invalid input';
    } 

    if (str.length === 0) {
        return str;
    }

    str = str.replace(/ +/g, ' ').trim();
    let arrayOfStrings = str.split(' ');

    arrayOfStrings.forEach((word, i) => {
        word = word.split('').sort((a, b) => {
            return a.localeCompare(b, 'ru', 'en');
        }).join('').toLowerCase();
        word = word[0].toUpperCase() + word.slice(1);
        arrayOfStrings[i] = word;
    });

    arrayOfStrings.sort((a, b) => {
        return a.localeCompare(b, 'ru', 'en');
    });
    
    return arrayOfStrings.join(' ');
}
