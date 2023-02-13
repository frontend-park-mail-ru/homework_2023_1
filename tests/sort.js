'use strict';

QUnit.module('Тестируем функцию sort', function () {
	QUnit.test('Функция делает первую букву слова прописной', function (assert) {
		assert.strictEqual(sort('яяя'), 'Яяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('Бббббб'), 'Бббббб');
		assert.strictEqual(sort('zzzzzz'), 'Zzzzzz', 'Работает с английским алфавитом');
		assert.strictEqual(sort('rrrrrrrr'), 'Rrrrrrrr');
	});

	QUnit.test('Функция делает все буквы, кроме первой, строчными', function (assert) {
		assert.strictEqual(sort('ЯЯЯЯ'), 'Яяяя', 'Работает с русским алфавитом');
		assert.strictEqual(sort('zZzZZzzZZZ'), 'Zzzzzzzzzz', 'Работает с английским алфавитом');
	});

	QUnit.test('Функция работает с предложениями', function (assert) {
		assert.strictEqual(sort('ЯЯЯ яяя яяя яяя'), 'Яяя Яяя Яяя Яяя');
		assert.strictEqual(sort('яяя яяяяя ЯЯЯЯ ЯяяяЯЯЯяя'), 'Яяя Яяяя Яяяяя Яяяяяяяяя');
	});

	QUnit.test('Функция сортирует буквы в отдельных словах по алфавиту', function (assert) {
		assert.strictEqual(sort('fedcba'), 'Abcdef', 'Работает с английским алфавитом');
		assert.strictEqual(sort('zyxwvu'), 'Uvwxyz');
		assert.strictEqual(sort('жёедгвба'), 'Абвгдеёж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('вбава'), 'Аабвв');
	});

	QUnit.test('Функция сортирует слова в предложении по алфавиту', function (assert) {
		assert.strictEqual(sort('f e d c b a'), 'A B C D E F', 'Работает с английским алфавитом');
		assert.strictEqual(sort('z y x w v u'), 'U V W X Y Z');
		assert.strictEqual(sort('ж ё е д г в б а'), 'А Б В Г Д Е Ё Ж', 'Работает с русским алфавитом');
		assert.strictEqual(sort('в б а в а'), 'А А Б В В');
	});

	QUnit.test('Функция сортирует многобуквенные слова правильно', function (assert) {
		assert.strictEqual(sort('мама мыла раму'), 'Аамм Алмы Амру');
		assert.strictEqual(sort('космический корабль летит на марс'), 'Абклорь Амрс Ан Еиийккмоссч Еилтт');
		assert.strictEqual(sort('i love frontend'), 'Defnnort Elov I');
		assert.strictEqual(sort('hello world'), 'Dlorw Ehllo');
	});

	QUnit.test('Функция сортирует многобуквенные слова правильно и ставит нужный регистр', function (assert) {
		assert.strictEqual(sort("When the snow begins to melt aNd streamlets CAn bE seen everyWHere in the sTrEets," +
								" the air beComEs fresh and it is filled with Aroma of fLOwers"), ",eersstt Aamor Acn Adn Adn " +
						   "Aeelmrsstt Air Bceemos Be Begins Defill Eeeehrrvwy Eens Efhrs Eflorsw Ehnw Eht Eht Eht Elmt Fo Hitw In Is It Nosw Ot",
						   'Работает с английским алфавитом');
		assert.strictEqual(sort('DEFORESTATION COulD CAuSE ONe fourtH oF ALl sPECIES'), 'Acesu Adeefinoorstt All Cdlou Ceeipss Eno Fhortu Fo');
		assert.strictEqual(sort("В европейской части России находятся старинные русские города Ярославль, Кострома, " + 
								"Владимир, Углич, Ростов Великий, Суздаль. Они очень инТЕресны своей историей и КУЛЬТурой"),
						   ",авдиилмр ,авллорсья ,акмоорст ,веиийкл ,гилуч .адзлсуь Агдоор Адностхяя Аеиннрсты Аистч В Вееййкоопрс Вейос Воорст " + 
						   "Ееиннрсты Еиийорст Еикрссу Еночь И Ииорсс Ино Йклортууь", 'Работает с русским алфавитом');
		assert.strictEqual(sort('В нашЕЙ СТране слЫШали ТОЛЬКО о мОСкве'), 'Аейнш Аенрст Аиллсшы В Векмос Клооть О');
	});

	QUnit.test('Функция правильно обрабатывает слова, убирая избыточные пробелы', function (assert) {
		assert.strictEqual(sort('  Я учусь в технопарке  '), 'Аеекнопртх В Суучь Я');
		assert.strictEqual(sort(' Frontend   iS   a coOl     subject  '), 'A Bcejstu Cloo Defnnort Is');
	});
});
