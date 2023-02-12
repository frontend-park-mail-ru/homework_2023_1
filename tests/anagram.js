'use strict';

QUnit.module('Тестируем функцию anagram', function () {
	QUnit.test('Функция работает правильно с оригинальным примером', function (assert) {
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

		assert.deepEqual(anagram_sort(input), output);
		assert.deepEqual(anagram_map(input), output);
	});

	QUnit.test('Функция работает правильно с разными регистрами', function (assert) {
		const input = ["Aaa", "Kkk", "Kk", "TKO", "aaa", "aaaB", "abc", "TOK", "acb", "cba", "bca", "bac"];

		const output = [
			[ 'aaa', 'Aaa' ],
			[ 'abc', 'acb', 'bac', 'bca', 'cba' ],
			[ 'TKO', 'TOK' ]   
		]

		assert.deepEqual(anagram_sort(input), output);
		assert.deepEqual(anagram_map(input), output);
	});

	QUnit.test('Функция работает правильно при отсутствие анаграмм и единственной группе анаграмм', function (assert) {
		const input_no_anagrams = ["hello", "world", "what", "is", "your", "name"];
		const input_all_anagrams = ["Hello", "Elloh", "Llohe", "Lohel", "Ohell"];

		const output_no_anagrams = []
		const output_all_anagrams = [
			["Elloh", "Hello", "Llohe", "Lohel", "Ohell"]
		]

		assert.deepEqual(anagram_sort(input_no_anagrams), output_no_anagrams);
		assert.deepEqual(anagram_map(input_all_anagrams), output_all_anagrams);

		assert.deepEqual(anagram_sort(input_no_anagrams), output_no_anagrams);
		assert.deepEqual(anagram_map(input_all_anagrams), output_all_anagrams);
	});
});