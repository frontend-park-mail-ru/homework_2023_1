'use strict';

/**
 * Эта функция проверяет, является ли переданный
 * параметр прототипом Object.
 *
 * @param {any} value – Любая переменная.
 * @returns {boolean} – Результат сравнения типов.
 */
const isObject = (value) => {
    return value.toString() === '[object Object]';
}

/**
 * Возвращает единственный объект, содержащий все поля из объектов-параметров,
 * объекты сами состоят из примитивных типов. Если ключи в разных объектах
 * дублируются, то в результирующий объект будет записано значение
 * первого попавшегося ключа.
 *
 * @param  {Object[]} objects – Массив объектов.
 * @returns {Object} – Результат слияния всех объектов.
 * @throws {Error} – Если функция была вызвана без аргументов.
 * @throws {TypeError} – Если не все аргументы функции являются объектами.
 */
const zip = (...objects) => {
    if (!objects.length) {
        throw new Error('Function was called without arguments');
    }
	let result = {};

    objects.forEach(obj => {
        Object.keys(obj).forEach((key) => {
            if (!isObject(obj)) {
                throw new TypeError('Each argument of this function must be instance of Object');
            }
            if (!result.hasOwnProperty(key)) {
                result[key] = obj[key];
            }
        })
    })
    return result;
}
