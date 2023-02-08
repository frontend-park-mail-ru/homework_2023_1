'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно (обычный тест)', function (assert) {
		const input = [
			'кот', 'пила', 'барокко',
			'стоп', 'ток', 'кошка',
			'липа', 'коробка', 'пост'
		];

		const output = [
			[ 'барокко', 'коробка' ],
			[ 'кот', 'ток' ],
			[ 'липа', 'пила' ],
			[ 'пост', 'стоп' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно (пустой массив)', function (assert) {
		const input = [];
		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно (одна группа анаграмм)', function (assert) {
		const input = ['марш', 'шарм', 'шрам'];
		const output = [['марш', 'шарм', 'шрам']];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно (нет групп)', function (assert) {
		const input = ['антилопа', 'портфель', 'монстр'];
		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно (разный регистр)', function (assert) {
		const input = ['маРш', 'шарМ', 'шраМ'];
		const output = [['шарМ', 'шраМ']];

		assert.deepEqual(anagram(input), output);
	});
});
