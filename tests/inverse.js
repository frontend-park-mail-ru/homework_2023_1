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

	QUnit.test('Тесты на одинаковые элементы массива', function (assert) {
		assert.deepEqual(inverse([ 1, 1, 1], 1), [ 1, 1, 1]);
		assert.deepEqual(inverse([ 'a', 'a', 'a'], -1), [ 'a', 'a', 'a']);
		assert.deepEqual(inverse([ false, false, false, false, false], ), [ false, false, false, false, false]);
	});

	QUnit.test('Тесты на вложенные массивы', function (assert) {
		assert.deepEqual(inverse([ [ 1, 2 ], [ 2, 1 ], [ 1, 1 ], [ 2, 2 ] ], -1), [ [ 1, 1 ], [ 2, 1 ], [ 1, 2 ], [ 2, 2 ] ]);
		assert.deepEqual(inverse([ [ [ 1 ] ] ], 3), [ [ [ 1 ] ] ]);
		assert.deepEqual(inverse([ [ 1, 3 ], [ 2 ] ], 0), [ [ 2 ], [ 1, 3 ] ]);
	});

	QUnit.test('Тесты на массивы со специальными константами', function (assert) {
		assert.deepEqual(inverse([ NaN, 0, NaN,], -1), [ 0, NaN, NaN,]);
		assert.deepEqual(inverse([ NaN ]), [ NaN ]);
		assert.deepEqual(inverse([ Infinity, -Infinity ]), [ -Infinity, Infinity ]);
	});

	QUnit.test('тесты с ошибочными входными данными', function (assert) {
		assert.throws(function () {
			inverse(123, 0);
		}, TypeError, "The first parameter is not array");
		assert.throws(function () {
			inverse('this is eror', 0);
		}, TypeError, "The first parameter is not array");
		assert.throws(function () {
			inverse(NaN, 0);4
		}, TypeError, "The first parameter is not array");
		assert.throws(function () {
			inverse(12.4, 0);
		}, TypeError, "The first parameter is not array");
		assert.throws(function () {
			inverse([1, 2, 3], 1.4);
		}, Error, "The second parameter is not integer");
		assert.throws(function () {
			inverse([1, 2, 3], -10.44);
		}, TypeError,  "The second parameter is not integer");
	});
});
