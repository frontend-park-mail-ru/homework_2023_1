'use strict';

QUnit.module('Тестируем функцию letters', function () {
	QUnit.test('Оставляет без изменений строки, где все символы уникальны', function (assert) {
		assert.strictEqual(letters('1234'), '1234');
		assert.strictEqual(letters('abcd'), 'abcd');
		assert.strictEqual(letters('олдж фыва'), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t '), ',.;=\n\t ');

		assert.strictEqual(letters('1234', true), '1234');
		assert.strictEqual(letters('abcd', true), 'abcd');
		assert.strictEqual(letters('олдж фыва', true), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', true), ',.;=\n\t ');

		assert.strictEqual(letters('1234', false), '1234');
		assert.strictEqual(letters('abcd', false), 'abcd');
		assert.strictEqual(letters('олдж фыва', false), 'олдж фыва');
		assert.strictEqual(letters(',.;=\n\t ', false), ',.;=\n\t ');
	});

	QUnit.test('Удаляет идущие подряд буквы', function (assert) {
		assert.strictEqual(letters('111'), '');
		assert.strictEqual(letters('www'), '');
		assert.strictEqual(letters('...'), '');
		assert.strictEqual(letters('   '), '');
	});

	QUnit.test('Оставляет первую букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', true), '12');
		assert.strictEqual(letters('wWw', true), 'wW');
		assert.strictEqual(letters('.-.', true), '.-');
		assert.strictEqual(letters(' 0 ', true), ' 0');
	});

	QUnit.test('Оставляет последнюю букву, остальные удаляет', function (assert) {
		assert.strictEqual(letters('121', false), '21');
		assert.strictEqual(letters('wWw', false), 'Ww');
		assert.strictEqual(letters('.-.', false), '-.');
		assert.strictEqual(letters(' 0 ', false), '0 ');
	});

	QUnit.test('Удаляет повторяющиеся буквы в разных словах', function (assert) {
		assert.strictEqual(letters('привет, мир'), 'пвет, м');
		assert.strictEqual(letters('hello, world'), 'he, wrd');
		assert.strictEqual(letters('мама мыла раму'), 'ылру');
		assert.strictEqual(letters('"Кукареку!", сказал Петух'), 'Кр!,сзлПтх');

		assert.strictEqual(letters('мама мыла раму', true), 'ма ылру');
		assert.strictEqual(letters('от топота копыт', true), 'от пакы');
		assert.strictEqual(letters('hello world', true), 'helo wrd');

		assert.strictEqual(letters('мама мыла раму', false), 'ыл раму');
		assert.strictEqual(letters('от топота копыт', false), 'а копыт');
		assert.strictEqual(letters('hello world', false), 'he world');
	});

	QUnit.test('Дополнительно: удаляет все пробелы', function (assert) {
		assert.strictEqual(letters('irys    d'), 'irysd', "letters('irys    d') === 'irysd'");
	});

	QUnit.test('Дополнительно: удаляет дублирование букв в предложении заикающегося', function (assert) {
		assert.strictEqual(letters('Хээй пппприветт', true), 'Хэй привет', "letters('Хээй пппприветт') === 'Хэй привет'");
	});

	QUnit.test('Дополнительно: подается пустая строка', function (assert) {
		assert.strictEqual(letters(''), '', "letters('') === ''");
	});

	QUnit.test('Дополнительно: удаляет дублирование специальных символов', function (assert) {
		assert.strictEqual(letters('ыћ÷°љ∆…®њ©ыћ÷°љ∆…', true), 'ыћ÷°љ∆…®њ©', "letters('ыћ÷°љ∆…®њ©ыћ÷°љ∆…') === 'ыћ÷°љ∆…®њ©'");
		assert.strictEqual(letters('ыћ÷°љ∆…®њ©ыћ÷°љ∆…', false), '®њ©ыћ÷°љ∆…', "letters('ыћ÷°љ∆…®њ©ыћ÷°љ∆…') === '®њ©ыћ÷°љ∆…'");
		assert.strictEqual(letters('ыћ÷°љ∆…®њ©ыћ÷°љ∆…'), '®њ©', "letters('ыћ÷°љ∆…®њ©ыћ÷°љ∆…') === '®њ©'");
	});

});
