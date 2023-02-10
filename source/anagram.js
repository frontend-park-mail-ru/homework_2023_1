'use strict';

function deleteSingleWord(groups) {
    return groups.filter(group => group.length != 1);
}

/**
 * Функция поиска анаграмм 
 * @param {Array} words массив строк
 * @returns {Array} массив подмассивов строк, в котором каждый подмассив содержит анаграммы
 * @example 
 * // returns [['марш', 'шарм', 'шрам']]
 * anagram(['марш', 'шарм', 'шрам'])
 * @example 
 * // returns [[ 'барокко', 'коробка' ], [ 'кот', 'ток' ], [ 'липа', 'пила' ], [ 'пост', 'стоп' ]]
 * anagram(['кот', 'пила', 'барокко', 'стоп', 'ток', 'кошка', 'липа', 'коробка', 'пост']) 
 */
const anagram = words => {
    if (!(words instanceof Array)) {
        throw new TypeError('Expected array as argument');
    }

    let result = {};
    words.sort();

    words.forEach(word => {
        if (typeof word !== 'string') {
            throw new TypeError('Expected string as element of array');
        }

        let cleaned = word.split('').sort().join('');

        if (result[cleaned]) {
            result[cleaned].push(word);
        } else {
            result[cleaned] = [word]
        }
    });

    return deleteSingleWord(Object.values(result));
}
