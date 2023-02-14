'use strict';

QUnit.module('Тестируем функцию inverse', function () {
	QUnit.test('Функция работает с пустым массивом', function (assert) {
		assert.deepEqual(inverse([]), []);
	});

	QUnit.test('Функция работает с массивом длины один', function (assert) {
		assert.deepEqual(inverse([ 1 ]), [ 1 ]);
		assert.deepEqual(inverse([ 'a' ]), [ 'a' ]);
		assert.deepEqual(inverse([ null ]), [ null ]);
		assert.deepEqual(inverse([ false ]), [ false ]);
	});

	QUnit.test('Функция работает, если в неё передан только массив', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ]), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 'a', 'b', 'c', 'd', 'e' ]), [ 'e', 'd', 'c', 'b', 'a' ]);
		assert.deepEqual(inverse([ null, false, 0, Infinity, '' ]), [ '', Infinity, 0, false, null ]);
	});

	QUnit.test('Функция не переставляет первые элементы массива', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 0), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 1), [ 1, 5, 4, 3, 2 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 2), [ 1, 2, 5, 4, 3 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 15), [ 1, 2, 3, 4, 5 ]);
	});

	QUnit.test('Функция не переставляет последние элементы массива', function (assert) {
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], 0), [ 5, 4, 3, 2, 1 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -1), [ 4, 3, 2, 1, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -2), [ 3, 2, 1, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -5), [ 1, 2, 3, 4, 5 ]);
		assert.deepEqual(inverse([ 1, 2, 3, 4, 5 ], -15), [ 1, 2, 3, 4, 5 ]);
	});

	QUnit.test('Функция работает с массивом из одинаковых элементов', function (assert) {
		assert.deepEqual(inverse([ 1, 1, 1, 1, 1 ]), [ 1, 1, 1, 1, 1 ]);
		assert.deepEqual(inverse([ 'a', 'a', 'a', 'a', 'a' ]), [ 'a', 'a', 'a', 'a', 'a' ]);
		assert.deepEqual(inverse([ null, null, null, null, null ]), [ null, null, null, null, null ]);
		assert.deepEqual(inverse([ false, false, false, false, false ]), [ false, false, false, false, false ]);
	});

	QUnit.test('Функция работает с массивом из одинаковых элементов и смещением', function (assert) {
		assert.deepEqual(inverse([ 1, 1, 1, 1, 1 ], 1), [ 1, 1, 1, 1, 1 ]);
		assert.deepEqual(inverse([ 'a', 'a', 'a', 'a', 'a' ], 1), [ 'a', 'a', 'a', 'a', 'a' ]);
		assert.deepEqual(inverse([ null, null, null, null, null ], 1), [ null, null, null, null, null ]);
		assert.deepEqual(inverse([ false, false, false, false, false ], 1), [ false, false, false, false, false ]);
	});

	QUnit.test('Функция работает с массивом из разных элементов', function (assert) {
		assert.deepEqual(inverse([ 1, 'a', null, false ]), [ false, null, 'a', 1 ]);
		assert.deepEqual(inverse([ 1, 'a', null, false, 0, Infinity, '' ]), [ '', Infinity, 0, false, null, 'a', 1 ]);
	});

	QUnit.test('Функция работает с пустым массивом', function (assert) {
		assert.deepEqual(inverse([]), []);
	});

	QUnit.test('Функция работает с пустым массивом и смещением', function (assert) {
		assert.deepEqual(inverse([], 1), []);
		assert.deepEqual(inverse([], 2), []);
		assert.deepEqual(inverse([], 3), []);
	});

	QUnit.test('Функция на ошибочные входные данные', function (assert) {
		assert.throws(function () {
			inverse();
		}, 'Функция должна принимать аргументы');
		assert.throws(function () {
			inverse(1);
		}, 'Функция не принимает число');
		assert.throws(function () {
			inverse('1');
		}, 'Функция не принимает строку');
		assert.throws(function () {
			inverse(null);
		}, 'Функция не принимает null');
		assert.throws(function () {
			inverse(undefined);
		}, 'Функция не принимает undefined');
		assert.throws(function () {
			inverse({});
		}, 'Функция не принимает объект');
		assert.throws(function () {
			inverse([ 1, 2, 3, 4, 5 ], '1');
		}, 'Функция не принимает строку в качестве смещения');
		assert.throws(function () {
			inverse([ 1, 2, 3, 4, 5 ], null);
		}, 'Функция не принимает null в качестве смещения');
		assert.throws(function () {
			inverse([ 1, 2, 3, 4, 5 ], {});
		}, 'Функция не принимает объект в качестве смещения');
		assert.throws(function () {
			inverse([ 1, 2, 3, 4, 5 ], []);
		}, 'Функция не принимает пустой массив в качестве смещения');
	});
});
