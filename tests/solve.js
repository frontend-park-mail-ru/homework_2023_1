'use strict';

QUnit.module('Тестируем функцию solve', function () {
	QUnit.test('solve работает правильно ', function (assert) {
		assert.strictEqual(solve('x + 1', 1), 2);
		assert.strictEqual(solve('2 + x - 1', 5), 6);
		assert.strictEqual(solve('2 * x - 1', 5), 9);
		assert.strictEqual(solve('2 * ( x - 1 )', 5), 8);
		assert.strictEqual(solve('(5 - x) * (x + 5)', 3), 16);
		assert.strictEqual(solve('((5 - x) * (x + 5)) * x * x', 3), 144);
	});

	QUnit.test('solve обрабатывает операторы в правильном порядке', function(assert) {
		assert.strictEqual(solve("1 + x * 2 ^ 3 * x + 4", 2), 37);
		assert.strictEqual(solve("x ^ (4 + x) * 3", 2), 192);
	});

	QUnit.test('solve принимает отрицательные значения x', function (assert) {
		assert.strictEqual(solve('2 + x - 1', -5), -4);
		assert.strictEqual(solve('(5 - x) * (x + 5)', -3), 16);
	});

	QUnit.test('solve проверяет скобок', function (assert) {
		assert.throws(() => solve('x + (2 - 3', 1), Error('parantheses not closed'));
		assert.throws(() => solve('x + )2 - 3', 1), Error('closing parentheses does not have a corresponing pair'));
	});
});
