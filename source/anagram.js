'use strict';

/**
 * Фунция, которая удаляет из массива подмасивы, длина которых равна 1
 * @param {Array.<Array.<string>>} массив подмассивов строк
 * @returns {Array.<Array.<string>>} массив подмассивов строк, в которых нет подмассивов длины 1
 * @example 
 * // returns [[ 'барокко', 'коробка' ], [ 'кот', 'ток' ], [ 'липа', 'пила' ], [ 'пост', 'стоп' ]]
 * deleteSingleWord([[ 'барокко', 'коробка' ], [ 'кот', 'ток' ], [ 'липа', 'пила' ], [ 'пост', 'стоп' ], [ 'кошка' ]])
 * @example 
 * // returns []
 * deleteSingleWord([['ложка'], ['картофель']])
 */
function deleteSingleWord(groups) {
    return groups.filter(group => group.length !== 1);
}

/**
 * Функция поиска анаграмм 
 * @param {Array.<string>} words массив строк
 * @returns {Array.<Array.<string>>} массив подмассивов строк, в котором каждый подмассив содержит анаграммы
 * @example 
 * // returns [[ 'марш', 'шарм', 'шрам' ]]
 * anagram([ 'марш', 'шарм', 'шрам' ])
 * @example 
 * // returns [[ 'барокко', 'коробка' ], [ 'кот', 'ток' ], [ 'липа', 'пила' ], [ 'пост', 'стоп' ]]
 * anagram([ 'кот', 'пила', 'барокко', 'стоп', 'ток', 'кошка', 'липа', 'коробка', 'пост' ]) 
 */
const anagram = (words) => {
    if (!Array.isArray(words)) {
        throw new TypeError('Expected array as argument');
    }

    words.forEach((word) => {
        if (typeof word !== 'string' && !(word instanceof String)) {
            throw new TypeError('Expected string as element of array');
        }
    });

    words.sort((a, b) => a.localeCompare(b, 'ru', {sensitivity: 'base'}));

    const result  = words.reduce((result, word) => {
        const cleaned = word.split('').sort().join('');
        result[cleaned] ??= [];
        result[cleaned].push(word);

        return result;
    }, {});

    return deleteSingleWord(Object.values(result));
}
