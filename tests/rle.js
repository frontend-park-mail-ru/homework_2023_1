'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('Функция работает с невалидными данными и выбрасывает ошибку', function (assert) {
		assert.throws(()=>rle(null), TypeError('Error'));
		assert.throws(()=>rle(undefined), TypeError('Error'));
		assert.throws(()=>rle(5), TypeError('Error'));
		assert.throws(()=>rle({'12':456}), TypeError('Error'));
		assert.throws(()=>rle(['12', '456']), TypeError('Error'));
		assert.throws(()=>rle(new Number(123)), TypeError('Error'));
		assert.throws(()=>rle('1111AAA###'), TypeError('Error'));
	});
	QUnit.test('Функция работает с пустой строкой', function (assert) {
		assert.strictEqual(rle(''), '', "rle('') === ''");
	});
	QUnit.test('Функция работает с пустой строкой', function (assert) {
		assert.strictEqual(rle(''), '', "rle('') === ''");
	});
	QUnit.test('Функция работает со строкой из одного символа', function (assert) {
		assert.strictEqual(rle('A'), 'A', "rle('A') === 'A'");
	});
	QUnit.test('Функция работает со строкой из повторяющихся символов', function (assert) {
		assert.strictEqual(rle('AAAAAAAAAAA'), 'A11', "rle('AAaAAAAAAAA') === 'A11'");
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
	QUnit.test('Функция работает с new String', function (assert) {
		assert.strictEqual(rle(new String('AAABBBCCC')), 'A3B3C3', "rle(new String('AAABBBCCC')) === 'A3B3C3'");
		assert.strictEqual(rle(new String()), '', "rle(new String(new String())) === ''");
	});
});
