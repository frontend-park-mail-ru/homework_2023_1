'use strict';

QUnit.module('Тестируем функцию addLayer', function () {
	QUnit.test('Слои дерева шириной 3', function (assert) {
		assert.strictEqual(addLayer('*', 0, 3), ' * \n');
		assert.strictEqual(addLayer('*', 1, 3), '***\n');
		assert.strictEqual(addLayer('|', 0, 3), ' | \n');
	});

	QUnit.test('Слои дерева шириной 5', function (assert) {
		assert.strictEqual(addLayer('*', 0, 5), '  *  \n');
		assert.strictEqual(addLayer('*', 1, 5), ' *** \n');
		assert.strictEqual(addLayer('*', 2, 5), '*****\n');
		assert.strictEqual(addLayer('|', 0, 5), '  |  \n');
	});

	QUnit.test('Слои дерева шириной 999', function (assert) {
		assert.strictEqual(addLayer('*', 0, 999).length, 1000);
		assert.strictEqual(addLayer('*', 1, 999).length, 1000);
		assert.strictEqual(addLayer('*', 2, 999).length, 1000);
		assert.strictEqual(addLayer('|', 0, 999).length, 1000);
		assert.strictEqual(addLayer('*', 0, 999).trim(), '*');
		assert.strictEqual(addLayer('*', 1, 999).trim(), '***');
		assert.strictEqual(addLayer('*', 500, 999), '*'.repeat(1001) + '\n');

		const trunk_expected = ' '.repeat(500) + '|' + ' '.repeat(500) + '\n';
		assert.strictEqual(addLayer('|', 0, 1001), trunk_expected); 
	});
});

QUnit.module('Тестируем функцию tree', function () {
	QUnit.test('Ёлочек нечисловой высоты не бывает', function (assert) {
		assert.strictEqual(tree(undefined), null);
		assert.strictEqual(tree(), null);
		assert.strictEqual(tree(null), null);
		assert.strictEqual(tree({}), null);
		assert.strictEqual(tree([]), null);
		assert.strictEqual(tree(''), null);
	});

	QUnit.test('Ёлочек высотой ниже трёх не бывает', function (assert) {
		assert.strictEqual(tree(0), null);
		assert.strictEqual(tree(1), null);
		assert.strictEqual(tree(2), null);
		assert.strictEqual(tree('0'), null);
		assert.strictEqual(tree('1'), null);
		assert.strictEqual(tree('2'), null);
	});

	QUnit.test('Ёлочка высотой 3', function (assert) {
		const expected =
			' * \n' +
			'***\n' +
			' | \n';
		assert.strictEqual(tree(3), expected);
		assert.strictEqual(tree('3'), expected);
	});

	QUnit.test('Ёлочка высотой 4', function (assert) {
		const expected =
			'  *  \n' +
			' *** \n' +
			'*****\n' +
			'  |  \n';
		assert.strictEqual(tree(4), expected);
		assert.strictEqual(tree('4'), expected);
	});

	QUnit.test('Ёлочка высотой 5', function (assert) {
		const expected =
			'   *   \n' +
			'  ***  \n' +
			' ***** \n' +
			'*******\n' +
			'   |   \n';
		assert.strictEqual(tree(5), expected);
		assert.strictEqual(tree('5'), expected);
	});

	QUnit.test('Ёлочка высотой 6', function (assert) {
		const expected =
			'    *    \n' +
			'   ***   \n' +
			'  *****  \n' +
			' ******* \n' +
			'*********\n' +
			'    |    \n';
		assert.strictEqual(tree(6), expected);
		assert.strictEqual(tree('6'), expected);
	});

	QUnit.test('Ёлочка высотой 7', function (assert) {
		const expected =
			'     *     \n' +
			'    ***    \n' +
			'   *****   \n' +
			'  *******  \n' +
			' ********* \n' +
			'***********\n' +
			'     |     \n';
		assert.strictEqual(tree(7), expected);
		assert.strictEqual(tree('7'), expected);
	});

	QUnit.test('Ёлочка высотой 8', function (assert) {
		const expected =
			'      *      \n' +
			'     ***     \n' +
			'    *****    \n' +
			'   *******   \n' +
			'  *********  \n' +
			' *********** \n' +
			'*************\n' +
			'      |      \n';
		assert.strictEqual(tree(8), expected);
		assert.strictEqual(tree('8'), expected);
	});

	QUnit.test('Ёлочка высотой 10', function (assert) {
		const expected =
			'        *        \n' +
			'       ***       \n' +
			'      *****      \n' +
			'     *******     \n' +
			'    *********    \n' +
			'   ***********   \n' +
			'  *************  \n' +
			' *************** \n' +
			'*****************\n' +
			'        |        \n';
		assert.strictEqual(tree(10), expected);
		assert.strictEqual(tree('10'), expected);
	});

	QUnit.test('Ёлочка высотой 100', function (assert) {
		const expected_1 = ' '.repeat(98) + '*' + ' '.repeat(98);
		const expected_2 = ' '.repeat(97) + '***' + ' '.repeat(97);
		const expected_99 = '*'.repeat(197);
		const expected_100 = ' '.repeat(98) + '|' + ' '.repeat(98);
		const generated = tree(100);
		const layers = generated.split('\n');

		assert.strictEqual(layers.length, 101);
		assert.strictEqual(layers[0], expected_1);
		assert.strictEqual(layers[1], expected_2);
		assert.strictEqual(layers[98], expected_99);
		assert.strictEqual(layers[99], expected_100);
	});
});
