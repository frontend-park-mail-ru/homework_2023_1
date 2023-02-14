'use strict';

QUnit.module('Тестируем функцию minmax', function () {
	QUnit.test('minmax работает правильно на строках без чисел', function (assert) {
		assert.deepEqual(minmax(''), [ undefined, undefined ], 'Особый случай, когда в строке нет чисел');
		assert.deepEqual(minmax('мама мыла раму'), [ undefined, undefined ]);
	});

	QUnit.test('minmax работает правильно при null и undefined', function (assert) {
		assert.throws( () => { minmax(undefined); } );
		assert.throws( () => { minmax(null); } );
	});

	QUnit.test('minmax работает правильно при других типах', function (assert) {
		assert.throws( () => { minmax(123); } );
		assert.throws( () => { minmax(false); } );
	});

	QUnit.test('minmax работает правильно при null и undefined в строке', function (assert) {
		assert.deepEqual(minmax('undefined'), [ undefined, undefined ]);
		assert.deepEqual(minmax('null'), [ undefined, undefined ]);
	});

	QUnit.test('minmax правильно парсит отдельные числа', function (assert) {
		assert.deepEqual(minmax('0'), [ 0, 0 ]);
		assert.deepEqual(minmax('1'), [ 1, 1 ]);
		assert.deepEqual(minmax('Infinity'), [ Infinity, Infinity ]);
		assert.deepEqual(minmax('-Infinity'), [ -Infinity, -Infinity ]);
		assert.deepEqual(minmax('42'), [ 42, 42 ]);
		assert.deepEqual(minmax('.0'), [ .0, .0 ]);
		assert.deepEqual(minmax('1.1'), [ 1.1, 1.1 ]);
		assert.deepEqual(minmax('.01'), [ .01, .01 ]);
		assert.deepEqual(minmax('1.01'), [ 1.01, 1.01 ]);
		assert.deepEqual(minmax('1e5'), [ 1e5, 1e5 ]);
		assert.deepEqual(minmax('-1e-5'), [ -1e-5, -1e-5 ]);
		assert.deepEqual(minmax('-.1e-5'), [ -.1e-5, -.1e-5 ]);
	});

	QUnit.test('minmax правильно парсит несколько чисел', function (assert) {
		assert.deepEqual(minmax('0 0 0 0'), [ 0, 0 ]);
		assert.deepEqual(minmax('1 1 1 1'), [ 1, 1 ]);
		assert.deepEqual(minmax('1 2 3 4'), [ 1, 4 ]);
		assert.deepEqual(minmax('-Infinity -1 0 1 Infinity'), [ -Infinity, Infinity ]);
		assert.deepEqual(minmax('-.01 0 .01'), [ -.01, .01 ]);
	});

	QUnit.test('minmax игнорирует обычный текст', function (assert) {
		assert.deepEqual(minmax('1, -5.8 или 10, хотя 34 + -5.3 и 73'), [ -5.8, 73 ]);
	});

	QUnit.test('minmax правильно парсит Infinity с числами и игнорирует обычный текст', function (assert) {
		assert.deepEqual(minmax('1, -5.8 или 10, Infinity хотя 34 + -5.3 и 73'), [ -5.8, Infinity ]);
	});

	QUnit.test('minmax игнорирует обычный текст, слипшийся справа от числа или Infinity', function (assert) {
		assert.deepEqual(minmax('1, -5.8gb или 10, Infinity хотя 34 + -5.3 и 73'), [ -5.8, Infinity ]);
	});
});
