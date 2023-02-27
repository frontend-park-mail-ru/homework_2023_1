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

	QUnit.test('format работает с пустым массивом', function (assert) {
		const input = [];

		const expected = '';

		assert.strictEqual(format(input, 1), expected);
	});

	QUnit.test('format обрабатывает неверные типы данных', function (assert) {
		const input1 = ["asdas", "ads", "vsdfsv", "dsac"];

		assert.throws(function() {
			format(input1, 1);
		}, TypeError);

		const input2 = [1, 2, 6, "dvsdv", false];

		assert.throws(function() {
			format(input2, 1);
		}, TypeError);

		const input3 = [1, 2, 3, 4, 10, 100];

		assert.throws(function() {
			format(input3, -2);
		}, Error);

		assert.throws(function() {
			format(input3, "aaa");
		}, TypeError);
	});
});
