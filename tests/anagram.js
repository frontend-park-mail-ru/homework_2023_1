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

	QUnit.test('Функция работает правильно (разные регистры)', function (assert) {
		const input = ["Aaa", "Kkk", "Kk", "TKO", "aaa", "aaaB", "abc", "TOK", "acb", "cba", "bca", "bac"];

		const output = [
			[ 'aaa', 'Aaa' ],
			[ 'abc', 'acb', 'bac', 'bca', 'cba' ],
			[ 'TKO', 'TOK' ]   
		]

		assert.deepEqual(anagram_sort(input), output);
		assert.deepEqual(anagram_map(input), output);
	});
});