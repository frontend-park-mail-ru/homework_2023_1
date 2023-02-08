'use strict';

QUnit.module('Тестируем функцию rle', function () {
  QUnit.test('rle отрабатывает верно на строке с одной заменой в начале', function (assert) {
    assert.strictEqual(rle('AAAB'), 'A3B', 'rle(AAAB) === A3B');
  });

  QUnit.test('rle отрабатывает верно на строке с одной заменой в конце', function (assert) {
    assert.strictEqual(rle('ABBB'), 'AB3', 'rle(ABBB) === AB3');
  });

  QUnit.test('rle отрабатывает верно на строке с множественной заменой', function (assert) {
    assert.strictEqual(rle('BCCDDDAXXXX'), 'BC2D3AX4');
    assert.strictEqual(rle('AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD'),
      'AV3B3V2XDHJF4D6HA4J3D2SLS3D4',
      'rle(AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD) === AV3B3V2XDHJF4D6HA4J3D2SLS3D4');
  });

  QUnit.test('rle отрабатывает верно на строке состоящей из цифр', function (assert) {
    assert.strictEqual(rle('33334'), '344', 'rle(33334) === 344');
  });

  QUnit.test('rle отрабатывает верно на строке состоящей из одного символа', function (assert) {
    assert.strictEqual(rle('a'), 'a', 'rle(a) === a');
  });

  QUnit.test('rle отрабатывает верно на строке состоящей из повторений одного символа', function (assert) {
    assert.strictEqual(rle('aaaaaa'), 'a6', 'rle(aaaaaa) === a6');
  });

  QUnit.test('rle отрабатывает верно на пустой строке', function (assert) {
    assert.strictEqual(rle(''), '', 'rle() === ');
  });

  QUnit.test('rle отрабатывает верно без аргументов', function (assert) {
    assert.strictEqual(rle(), null, 'rle() === null');
  });

  QUnit.test('rle отрабатывает верно на неправильных аргументах', function (assert) {
    assert.strictEqual(rle(123), null, 'rle(123) === null');
  });
});
