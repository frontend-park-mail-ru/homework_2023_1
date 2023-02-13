'use strict';

QUnit.module('Тестируем функцию rle: success', function () {
  QUnit.test('rle с одной заменой в начале', function (assert) {
    assert.strictEqual(rle('AAAB'), 'A3B', 'rle(AAAB) === A3B');
  });

  QUnit.test('rle  с одной заменой в конце', function (assert) {
    assert.strictEqual(rle('ABBB'), 'AB3', 'rle(ABBB) === AB3');
  });

  QUnit.test('rle с множественной заменой', function (assert) {
    assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
    assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'),
      'AV3B3V2XDHJF4D6HA4J3D2SLS3D4',
      'rle(AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD) === AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
  });

  QUnit.test('rle на строке состоящей из одного символа', function (assert) {
    assert.strictEqual(rle('a'), 'a', 'rle(a) === a');
  });

  QUnit.test('rle на строке состоящей из повторений одного символа', function (assert) {
    assert.strictEqual(rle('aaaaaa'), 'a6', 'rle(aaaaaa) === a6');
  });

  QUnit.test('rle на пустой строке', function (assert) {
    assert.strictEqual(rle(''), '', 'rle() === ');
  });
});

QUnit.module('Тестируем функцию rle: bad input', function () {

  QUnit.test('rle на строке состоящей из цифр', function (assert) {
    assert.throws(function () {
      rle('33334')
    }, Error("there are numbers in the string"), 'rle(33334) === Error("there are numbers in the string")');
  });

  QUnit.test('rle без аргументов', function (assert) {
    assert.throws(function () {
      rle()
    }, Error("wrong input"), 'rle() === Error("wrong input")');
  });
});
