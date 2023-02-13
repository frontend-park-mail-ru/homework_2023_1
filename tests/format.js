'use strict';

QUnit.module('Тестируем функцию format', function () {
	QUnit.test('format работает правильно c одной колонкой и положительными числами', function (assert) {
		const input = [ 0, 1, 2, 10, 100, 1000, 10000 ];

		const expected =
			'    0\n' +
			'    1\n' +
			'    2\n' +
			'   10\n' +
			'  100\n' +
			' 1000\n' +
			'10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c одной колонкой и числами разного знака', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected =
			'     0\n' +
			'     1\n' +
			'     2\n' +
			'    10\n' +
			'   100\n' +
			'  -100\n' +
			'  1000\n' +
			' 10000\n' +
			'-10000';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format работает правильно c несколькими колонками', function (assert) {
		const input = [ 0, 1, 2, 10, 100, -100, 1000, 10000, -10000 ];

		const expected2 =
			'     0     1\n' +
			'     2    10\n' +
			'   100  -100\n' +
			'  1000 10000\n' +
			'-10000';

		const expected3 =
			'   0     1      2\n' +
			'  10   100   -100\n' +
			'1000 10000 -10000';

		assert.strictEqual(format(input, 2), expected2);
		assert.strictEqual(format(input, 3), expected3);
	});

	QUnit.test('format работает правильно при случайном расположении чисел с наибольшим количеством разрядов', function (assert) {
		const input = [ 123123, 21, 0, 123, 4, 55555555555, 12121, 4, 0, 0, 0, 0, 0, 1111111111 ];

		const expected1 = 
			"     123123\n" +
			"         21\n" +
			"          0\n" +
			"        123\n" +
			"          4\n" +
			"55555555555\n" +
			"      12121\n" +
			"          4\n" +
			"          0\n" +
			"          0\n" +
			"          0\n" +
			"          0\n" +
			"          0\n" +
			" 1111111111"



		const expected2 =
			"123123          21     0 123\n" +
			"     4 55555555555 12121   4\n" +
			"     0           0     0   0\n" +
			"     0  1111111111" 

		assert.strictEqual(format(input, 1), expected1);
		assert.strictEqual(format(input, 4), expected2);
	});


	QUnit.test('format работает правильно при числе колонок большем, чем количество чисел', function (assert) {
		const input = [ 0, 1, 2, 10, 100 ];

		const expected1 = 
			"0 1 2 10 100"

		assert.strictEqual(format(input, 10), expected1);
	});

	QUnit.test('format работает правильно пустом массиве', function (assert) {
		const input = [];

		const expected1 = ""

		assert.strictEqual(format(input, 10), expected1);
	});

	QUnit.test('format выдает ошибку при неверном типе входных данных', function (assert) {
		const input1 = "Im wrong input, hello";
		const input2 = [1, 2, 3];
		const input3 = [false, true]

		const expected1 = TypeError(
			`Wrong type of first argument.
			Expected "Array<Number>", got "string"`
			);

		const expected2 = TypeError(
			`Wrong type of second argument.
			Expected "number", got "string"`
			);

		const expected3 = TypeError(
			`Wrong type of array values. Expected "Number", got "boolean"`
			);

		const expected4 = TypeError(
			`Wrong value of second argument. 'columnsNumber' must be > 0`
			);

		assert.throws(function() {
							format(input1, 12)
					  },
					  expected1);

		assert.throws(function() {
							format(input2, "string")
					  },
					  expected2);

		assert.throws(function() {
							format(input3, 12)
					  },
					  expected3);

		assert.throws(function() {
							format(input2, -4)
					  },
					  expected4);
	});
});
