'use strict';

QUnit.module('Тестируем функцию rle', function () {
	QUnit.test('rle работает правильно', function (assert) {
		assert.strictEqual(rle('AAAB'), 'A3B');
		assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
		assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'), 'AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
	});
	QUnit.test('Функция работает с невалидными данными и выбрасывает ошибку', function (assert) {
		assert.throws(()=>rle(null), TypeError('TypeError'));
		assert.throws(()=>rle(undefined), TypeError('TypeError'));
		assert.throws(()=>rle(5, 122, 342), TypeError('TypeError'));
		assert.throws(()=>rle(342), TypeError('TypeError'));
		assert.throws(()=>rle({'12':456}), TypeError('TypeError'));
		assert.throws(()=>rle(['12', '456']), TypeError('TypeError'));
		assert.throws(()=>rle(new Number(123)), TypeError('TypeError'));
		assert.throws(()=>rle(), TypeError('TypeError'));
		assert.throws(()=>rle(function () {}), TypeError('TypeError'));
		assert.throws(()=>rle('1111AAA###'), Error('string contains numbers'));
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
	QUnit.test('Функция работает с new String', function (assert) {
		assert.strictEqual(rle(new String('AAABBBCCC')), 'A3B3C3', "rle(new String('AAABBBCCC')) === 'A3B3C3'");
		assert.strictEqual(rle(new String()), '', "rle(new String(new String())) === ''");
	});
});
