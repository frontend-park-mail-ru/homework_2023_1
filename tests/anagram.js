'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно', function (assert) {
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
		const input = [ 
			'марш', 'шарм', 'шрам' 
		];
		const output = [
			[ 'марш', 'шарм', 'шрам' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно (нет групп)', function (assert) {
		const input = [
			'антилопа', 'портфель', 'монстр'
		];
		const output = [];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно (разный регистр)', function (assert) {
		const input = [
			'маРш', 'шарМ', 'шраМ'
		];
		const output = [
			[ 'шарМ', 'шраМ' ]
		];

		assert.deepEqual(anagram(input), output);
	});

	QUnit.test('Функция работает правильно (неверный аргумент - строка вместо массива)', function (assert) {
		const input = 'маРш';

		assert.throws(
			() => anagram(input), 
			TypeError('Expected array as argument'), 
			"anagram('маРш') === TypeError('Expected array as argument')"
		);
	});

	QUnit.test('Функция работает правильно (неверный аргумент - массив чисел вместо массива строк)', function (assert) {
		const input = [1, 2, 3];
		
		assert.throws(
			() => anagram(input),
			TypeError('Expected string as element of array'),
			"anagram('маРш') === TypeError('Expected string as element of array')"
		);
	});

	QUnit.test('Функция работает правильно (неверный аргумент - NaN)', function (assert) {
		const input = [1, 2, 3];
		
		assert.throws(
			() => anagram(NaN),
			TypeError('Expected array as argument'), 
			"anagram(NaN) === TypeError('Expected array as argument')"
		);
	});

	QUnit.test('Функция работает правильно (неверный аргумент - undefined)', function (assert) {
		const input = [1, 2, 3];
		
		assert.throws(
			() => anagram(undefined),
			TypeError('Expected array as argument'), 
			"anagram(undefined) === TypeError('Expected array as argument')"
		);
	});

	QUnit.test('Функция работает правильно (неверный аргумент - null)', function (assert) {
		const input = [1, 2, 3];
		
		assert.throws(
			() => anagram(null),
			TypeError('Expected array as argument'), 
			"anagram(null) === TypeError('Expected array as argument')"
		);
	});
});
