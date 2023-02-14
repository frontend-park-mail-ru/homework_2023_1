'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Тест anagramMap: функция работает правильно с оригинальным примером', function (assert) {
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

		assert.deepEqual(anagramMap(input), output);
	});

	QUnit.test('Тест anagramMap: функция работает правильно с разными регистрами', function (assert) {
		const input = ['Aaa', 'Kkk', 'Kk', 'TKO', 'aaa', 'aaaB', 'abc', 'TOK', 'acb', 'cba', 'bca', 'bac'];

		const output = [
			[ 'aaa', 'Aaa' ],
			[ 'abc', 'acb', 'bac', 'bca', 'cba' ],
			[ 'TKO', 'TOK' ]   
		]

		assert.deepEqual(anagramMap(input), output);
	});

	QUnit.test('Тест anagramMap: функция работает правильно при отсутствие анаграмм', function (assert) {
		const inputNoAnagrams = ['hello', 'world', 'what', 'is', 'your', 'name'];
		const outputNoAnagrams = []
		assert.deepEqual(anagramMap(inputNoAnagrams), outputNoAnagrams);
	});

	QUnit.test('Тест anagramMap: функция работает правильно при единственной группе анаграмм', function (assert) {
		const inputAllAnagrams = ['Hello', 'Elloh', 'Llohe', 'Lohel', 'Ohell'];
		const outputAllAnagrams = [
			['Elloh', 'Hello', 'Llohe', 'Lohel', 'Ohell']
		]
		assert.deepEqual(anagramMap(inputAllAnagrams), outputAllAnagrams);
	});

	QUnit.test('Тест anagramMap: функция работает правильно при неверном аргументе (передан undefined)', function (assert) {
		const input = undefined;

		assert.throws(
			() => anagramMap(input), 
			TypeError('Expected Array of strings')
		)
	});

	QUnit.test('Тест anagramMap: функция работает правильно при неверном аргументе (передан массив не строк)', function (assert) {
		const input = ['hello', 'world', 586];

		assert.throws(
			() => anagramMap(input), 
			TypeError('Expected Array of strings')
		)
	});
	
});
