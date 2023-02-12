'use strict';

QUnit.module('Тестируем функцию plain', function () {

	// Позитивные тесты

	QUnit.test('Работает с единственным элементом', function (assert) {
		assert.deepEqual(plain([]), [], 'Работает с пустым массивом');
		assert.deepEqual(plain([ 42 ]), [ 42 ], 'Работает с массивом из одного элемента');
		assert.deepEqual(plain([ 1, 2, 3, 4 ]), [ 1, 2, 3, 4 ], 'Сохраняет порядок элементов');
	});

	QUnit.test('Работает с единственным массивом', function (assert) {
		assert.deepEqual(plain([ [] ]), []);
		assert.deepEqual(plain([ [ 42 ] ]), [ 42 ]);
		assert.deepEqual(plain([ [ 1, 2, 3, 4 ] ]), [ 1, 2, 3, 4 ]);
	});

	QUnit.test('Работает со смешанными значениями', function (assert) {
		assert.deepEqual(plain([ [], 42 ]), [ 42 ]);
		assert.deepEqual(plain([ [ 42 ], 0 ]), [ 42, 0 ]);
		assert.deepEqual(plain([ [ 1, 2, 3, 4 ], 5, 6, 7, 8 ]), [ 1, 2, 3, 4, 5, 6, 7, 8 ]);
	});

	QUnit.test('Работает с несколькими массивами', function (assert) {
		assert.deepEqual(plain([ [], [] ]), [], 'Работает с пустыми массивами');
		assert.deepEqual(plain([ [ 42 ], [ 42 ] ]), [ 42, 42 ]);
		assert.deepEqual(plain([ [ 42, 42 ], [ 42 ] ]), [ 42, 42, 42 ]);
		assert.deepEqual(plain([ [ 1 ], [ 2 ], [ 3 ], [ 4, 5, 6 ] ]), [ 1, 2, 3, 4, 5, 6 ]);
	});

	QUnit.test('Работает с вложенными массивами', function (assert) {
		assert.deepEqual(plain([ [], [ [], [], [] ] ]), [], 'Работает с пустыми массивами');
		assert.deepEqual(plain([ [ 42 ], [ [ 42 ], [], [ 42 ] ], [ 42 ] ]), [ 42, 42, 42, 42 ]);
		assert.deepEqual(plain([ [ 42, 42 ], [ 42, [ 42, [ 42, 42 ], 42 ] ] ]), [ 42, 42, 42, 42, 42, 42, 42 ]);
		assert.deepEqual(plain([ [ 1 ], [ 2 ], [ 3 ], [ 4, 5, [ 6, 7, 8, [ 9 ] ], 10 ], 11 ]), [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]);
	});

	QUnit.test('Работает с элементами разных типов', function (assert) {
		assert.deepEqual(plain([ [ 'abcde' ], [ [ 'f' ], [ null, false ], [ NaN, NaN ], NaN ], -Infinity ]), [ 'abcde', 'f', null, false, NaN, NaN, NaN, -Infinity ]);
	});

	QUnit.test('Работает с многократным вложением элемента', function (assert) {
		assert.deepEqual(plain([ [[[[14]]]], [[[[[11, 1]]]]] ]), [ 14, 11, 1 ]);
	});

	QUnit.test('Работает с объектами', function (assert) {
		const obj1 = { dummy: true, willWork: 'YES' };
		const obj2 = { dummy: 'maybe', willWork: 'YES' };
		assert.deepEqual(plain([ [[[obj1]], obj2] ]), [obj1, obj2]);
	});

	// Негативные тесты

	QUnit.test('Кидает исключение, если тип аргумента не Array', function (assert) {
		assert.throws(() => plain({ dummy: true, willWork: 'NO' }), 'Кидает исключение, если был подан объект');
		assert.throws(() => plain(NaN), new TypeError('arr must be an array!'), 'Кидает исключение, если был подан NaN');
		assert.throws(() => plain(15), new TypeError('arr must be an array!'), 'Кидает исключение, если был подан тип Number');
		assert.throws(() => plain("Hi"), new TypeError('arr must be an array!'), 'Кидает исключение, если была подана строка');
	});

	QUnit.test('Кидает исключение, если на вход подано undefined или null', function (assert) {
		assert.throws(() => plain(undefined), 'Кидает исключение, если была подан undefined');
		assert.throws(() => plain(null), 'Кидает исключение, если была подан null');
	});
});
