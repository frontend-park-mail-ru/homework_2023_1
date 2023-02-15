'use strict';

QUnit.module('Тестируем функцию chess', function () {
	QUnit.test('Размер доски - object', function (assert) {
		assert.strictEqual(chess({"n": 10}), null);
	});

	QUnit.test('Размер доски - NaN', function (assert) {
		assert.strictEqual(chess(NaN), null);
	});

	QUnit.test('Размер доски - null', function (assert) {
		assert.strictEqual(chess(null), null);
	});

	QUnit.test('Размер доски - undefined', function (assert) {
		assert.strictEqual(chess(undefined), null);
	});

	QUnit.test('Размер доски - Infinity', function (assert) {
		assert.strictEqual(chess(Infinity), null);
	});

	QUnit.test('Размер доски - вещественное число', function (assert) {
		assert.strictEqual(chess(5.7), null);
	});

	QUnit.test('Размер доски - строка, непреобразуемая в число', function (assert) {
		assert.strictEqual(chess('error'), null);
	});

	QUnit.test('Шахматной доски -1 на -1 не бывает', function (assert) {
		assert.strictEqual(chess(-1), null);
		assert.strictEqual(chess('-1'), null);
	});

	QUnit.test('Шахматной доски 0 на 0 не бывает', function (assert) {
		assert.strictEqual(chess(0), null);
		assert.strictEqual(chess('0'), null);
	});
	
	QUnit.test('Шахматной доски 1 на 1 не бывает', function (assert) {
		assert.strictEqual(chess(1), null);
		assert.strictEqual(chess('1'), null);
	});

	QUnit.test('Шахматная доска 2 на 2', function (assert) {
		const expected =
			'* \n' +
			' *\n';
		assert.strictEqual(chess(2), expected);
		assert.strictEqual(chess('2'), expected);
	});

	QUnit.test('Шахматная доска 3 на 3', function (assert) {
		const expected =
			'* *\n' +
			' * \n' +
			'* *\n';
		assert.strictEqual(chess(3), expected);
		assert.strictEqual(chess('3'), expected);
	});

	QUnit.test('Шахматная доска 8 на 8', function (assert) {
		const expected =
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n' +
			'* * * * \n' +
			' * * * *\n';
		assert.strictEqual(chess(8), expected);
		assert.strictEqual(chess('8'), expected);
	});

});
