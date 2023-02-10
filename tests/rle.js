'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('Функция работает с пустой строкой', function (assert) {
		assert.strictEqual(rle(''), '', "rle('') === ''");
	});
	QUnit.test('Функция работает со строкой из одного символа', function (assert) {
		assert.strictEqual(rle('A'), 'A', "rle('A') === 'A'");
	});
	QUnit.test('Функция работает со строкой из повторяющихся символов', function (assert) {
		assert.strictEqual(rle('AAAAAAAAAA'), 'A10', "rle('AAAAAAAAAA') === 'A10'");
	});
	QUnit.test('Функция работает со строкой, в конце которой один последний символ', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B', "rle('AAAB') === 'A3B'");
	});
	QUnit.test('Функция работает со строкой, в конце которой повторяющиеся символы', function (assert) {
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4', "rle('BCCDDDAXXXX') === 'BC2D3AX4'");
	});
	QUnit.test('Функция работает с длинной строкой', function (assert) {
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4',
			"rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD') === 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4'");
	});
});


