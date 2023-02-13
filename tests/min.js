'use strict';

QUnit.module('Тестируем функцию min', function () {
	QUnit.test('Возвращает минимальное из трёх положительных чисел', function (assert) {
		assert.strictEqual(min([ 1, 2, 3 ]), 1, 'min([1, 2, 3]) === 1');
		assert.strictEqual(min([ 3, 2, 1 ]), 1, 'min([3, 2, 1]) === 1');
	});

	QUnit.test('Возвращает минимальное из трёх отрицательных чисел', function (assert) {
		assert.strictEqual(min([ -1, -2, -3 ]), -3, 'min([-1, -2, -3]) === -3');
		assert.strictEqual(min([ -3, -2, -1 ]), -3, 'min([-3, -2, -1]) === -3');
	});

	QUnit.test('Возвращает минимальное из трёх чисел разных знаков', function (assert) {
		assert.strictEqual(min([ -1, 0, 1 ]), -1, 'min([-1, 0, 1]) === -1');
		assert.strictEqual(min([ 1, 0, -1 ]), -1, 'min([1, 0, -1]) === -1');
	});

	QUnit.test('Работает правильно с одинаковыми числами', function (assert) {
		assert.strictEqual(min([ 0, 0, 0 ]), 0, 'min([0, 0, 0]) === 0');
		assert.strictEqual(min([ 42, 42, 42 ]), 42, 'min([42, 42, 42]) === 42');
	});

	QUnit.test('Работает правильно со специальными константами', function (assert) {
		assert.strictEqual(min([ Infinity, 100000, 0 ]), 0);
		assert.strictEqual(min([ 0, -1000, -Infinity ]), -Infinity);
	});
});
