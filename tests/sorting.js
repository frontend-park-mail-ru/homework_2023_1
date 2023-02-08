'use strict';

QUnit.module('Тестируем функцию sorting', function () {
	QUnit.test('sorting не меняет пустой массив', function (assert) {
		const initial = [];
		const actual = sorting(initial, []);

		const expected = [];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting не изменяет массив, если не передано никаких полей для сортировки', function (assert) {
		const initial = [
			{prop1: 1},
			{prop1: 2},
			{prop1: 3},
			{prop1: 4}
		];
		const actual = sorting(initial, []);

		const expected = [
			{prop1: 1},
			{prop1: 2},
			{prop1: 3},
			{prop1: 4}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по численному свойству', function (assert) {
		const initial = [
			{prop1: 30},
			{prop1: 1000},
			{prop1: 4},
			{prop1: 200}
		];
		const actual = sorting(initial, [ 'prop1' ]);

		const expected = [
			{prop1: 4},
			{prop1: 30},
			{prop1: 200},
			{prop1: 1000}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует массив по строковому свойству', function (assert) {
		const initial = [
			{prop1: '30'},
			{prop1: '1000'},
			{prop1: '4'},
			{prop1: '200'}
		];
		const actual = sorting(initial, [ 'prop1' ]);

		const expected = [
			{prop1: '1000'},
			{prop1: '200'},
			{prop1: '30'},
			{prop1: '4'}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting реализует устойчивую сортировку', function (assert) {
		const initial = [
			{prop1: 3, id: 1},
			{prop1: 3, id: 2},
			{prop1: 1, id: 1},
			{prop1: 1, id: 2},
			{prop1: 4, id: 1},
			{prop1: 4, id: 2},
			{prop1: 2, id: 1},
			{prop1: 2, id: 2}
		];
		const actual = sorting(initial, [ 'prop1' ]);

		const expected = [
			{prop1: 1, id: 1},
			{prop1: 1, id: 2},
			{prop1: 2, id: 1},
			{prop1: 2, id: 2},
			{prop1: 3, id: 1},
			{prop1: 3, id: 2},
			{prop1: 4, id: 1},
			{prop1: 4, id: 2}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует по нескольким полям', function (assert) {
		const initial = [
			{prop1: 3, id: '1'},
			{prop1: 3, id: '2'},
			{prop1: 1, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 4, id: '1'},
			{prop1: 4, id: '2'},
			{prop1: 2, id: '1'},
			{prop1: 2, id: '2'}
		];
		const actual = sorting(initial, [ 'id', 'prop1' ]);

		const expected = [
			{prop1: 1, id: '1'},
			{prop1: 2, id: '1'},
			{prop1: 3, id: '1'},
			{prop1: 4, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 2, id: '2'},
			{prop1: 3, id: '2'},
			{prop1: 4, id: '2'}
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting сортирует при отстутсвие значений в полях', function (assert) {
		const initial = [
			{prop1: 3, id: '1', name: "Daniil"},
			{prop1: 3, id: '2', name: null},
			{prop1: 1, id: '1', name: null},
			{prop1: 1, id: '2', name: null},
			{prop1: 4, id: '1', name: "Alexa"},
			{prop1: 4, id: '2', name: null},
			{prop1: 2, id: '1', name: "Roma"},
			{prop1: 2, id: '2', name: null}
		];
		const actual = sorting(initial, [ 'id', 'prop1', 'name' ]);

		const expected = [
			{ prop1: 1, id: '1', name: null },
			{ prop1: 2, id: '1', name: 'Roma' },
			{ prop1: 3, id: '1', name: 'Daniil' },
			{ prop1: 4, id: '1', name: 'Alexa' },
			{ prop1: 1, id: '2', name: null },
			{ prop1: 2, id: '2', name: null },
			{ prop1: 3, id: '2', name: null },
			{ prop1: 4, id: '2', name: null }
		];

		assert.deepEqual(actual, expected);
	});

	QUnit.test('sorting возвращает исходный массив при отсутствии полей для сортировки в массиве свойств', function (assert) {
		const initial = [
			{prop1: 3, id: '1', name: "Daniil"},
			{prop1: 3, id: '2'},
			{prop1: 1, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 4, id: '1', name: "Alexa"},
			{prop1: 4, id: '2', name: null},
			{prop1: 2, id: '1', name: "Roma"},
			{prop1: 2, id: '2'}
		];

		const actual = sorting(initial, [ 'opa', 'popa', 'lupa' ]);

		const expected = [
			{prop1: 3, id: '1', name: "Daniil"},
			{prop1: 3, id: '2'},
			{prop1: 1, id: '1'},
			{prop1: 1, id: '2'},
			{prop1: 4, id: '1', name: "Alexa"},
			{prop1: 4, id: '2', name: null},
			{prop1: 2, id: '1', name: "Roma"},
			{prop1: 2, id: '2'}
		]

		assert.deepEqual(actual, expected);
	});
});
