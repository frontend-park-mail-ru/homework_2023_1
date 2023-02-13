'use strict';

QUnit.module('Тестируем функцию inverse с использованием собственных тестов', function () {
	QUnit.test('Функция работает с пустым массивом и данным вторым аргументом', function (assert) {
		assert.deepEqual(inverse([], 2), []);
        assert.deepEqual(inverse([], -5), []);
	});

	QUnit.test('Функция работает с массивом длины один и значением второго аргумента больше длины массива', function (assert) {
		assert.deepEqual(inverse([ 'a' ], 10), [ 'a' ]);
		assert.deepEqual(inverse([ 'a' ], -25), [ 'a' ]);
	});

    QUnit.test('Функция работает с массивом одинаковых значений', function (assert) {
		assert.deepEqual(inverse([ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a' ]), [ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a' ]);
        assert.deepEqual(inverse([ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a' ], 4), [ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a' ]);
        assert.deepEqual(inverse([ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a' ], -3), [ 'a', 'a', 'a', 'a', 'a', 'a', 'a', 'a' ]);
	});

    QUnit.test('Функция работает с массивом значений разных типов', function (assert) {
        assert.deepEqual(inverse([ 'a', 'a', 1, 'a', 'a', null, 'a', 'a' ]), [ 'a', 'a', null, 'a', 'a', 1, 'a', 'a' ]);
        assert.deepEqual(inverse([ 'a', 'a', 1, 'a', 'a', ['q', 't'], 'a', 'a' ], 2), [ 'a', 'a', 'a', 'a', ['q', 't'], 'a', 'a', 1 ]);
        assert.deepEqual(inverse([ 'a', 'a', {d : 3}, 'a', 'a', null, 'a', 'a' ], -1), [ 'a', null, 'a', 'a', {d : 3}, 'a', 'a', 'a']);
	});


});
