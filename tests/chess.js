'use strict';

QUnit.module('Тестируем функцию chess', function () {
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

	QUnit.test('Входные данные: строка, не преобразуемая в число', function (assert) {
		assert.throws(
			function (){
				chess('abc');
			},
			Error('Invalid argument: integer number expected.'));
	});

	QUnit.test('Входные данные: число с плавающей точкой', function (assert) {
		assert.throws(
			function (){
				chess(2.5);
			},
			Error('Invalid argument: integer number expected.'));

		assert.throws(
			function (){
				chess('2.5');
			},
			Error('Invalid argument: integer number expected.'));
	});

	QUnit.test('Входные данные: Infinity', function (assert) {
		assert.throws(
			function (){
				chess(Infinity);
			},
			Error('Invalid argument: integer number expected.'));
	});
});
