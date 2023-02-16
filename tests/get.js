'use strict';

QUnit.module('Тестируем функцию get', function () {
	QUnit.test('get работает правильно c объектами с существующими свойствами', function (assert) {
		const object = {
			foo: 'bar',
			deep: {
				hested: {
					field: 'baz'
				}
			}
		};

		assert.strictEqual(get(object, '.foo'), object.foo);
		assert.strictEqual(get(object, '.deep.hested.field'), object.deep.hested.field);

		assert.deepEqual(get(object, '.deep.hested'), object.deep.hested);
		assert.deepEqual(get(object, '.deep'), object.deep);
		assert.deepEqual(get(object, '.'), object);
	});

	QUnit.test('get работает правильно c массивами', function (assert) {
		const object = {
			foo: 'bar',
			baz: [ 1, 2, 3 ],
			deep: [
				{foobar: '42'}
			]
		};

		assert.strictEqual(get(object, '.foo.0'), object.foo[ 0 ]);
		assert.strictEqual(get(object, '.foo.length'), object.foo.length);
		assert.strictEqual(get(object, '.baz.0'), object.baz[ 0 ]);
		assert.strictEqual(get(object, '.baz.length'), object.baz.length);
		assert.strictEqual(get(object, '.deep.0.foobar'), object.deep[ 0 ].foobar);
	});

	QUnit.test('get работает правильно c объектами без свойств', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};

		assert.strictEqual(get(object, '.foobar'), undefined);
		assert.strictEqual(get(object, '.foo.baz'), undefined);
		assert.strictEqual(get(object, '.baz.0'), undefined);
		assert.strictEqual(get(object, '.baz.length'), undefined);
		assert.strictEqual(get(object, '.0.1.2'), undefined);
	});

	QUnit.test('get вызывает исключение, если строка атрибутов не начинается с точки', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};

		assert.throws(
			function() {
				get(object, 'nopoint');
			},
			new Error('attrs must start with "."')
		);
	});

	QUnit.test('get вызывает иключение для невалидного типа attrs', function (assert) {
		const object = {
			foo: {
				bar: 42
			}
		};
		const invalidAttrs = [
			1337,
			undefined,
			null,
			{ foo: 'hello' },
			true
		];

		invalidAttrs.forEach(
			invalidAttr => {
				assert.throws(
					function() {
						get(object, invalidAttr);
					},
					new TypeError('attrs should be string')
				);
			}
		);
	});

	QUnit.test('get вызывает иключение для невалидного типа object', function (assert) {
		const invalidObjects = [
			1337,
			undefined,
			null,
			true,
			"helloworld",
			new Boolean(),
			new String()
		];

		invalidObjects.forEach(
			invalidObject => {
				assert.throws(
					function() {
						get(invalidObject, '.attribute');
					},
					new TypeError('typeof object (param) should be "object"')
				);
			}
		);
	});

	QUnit.test('get нормально работает с attrs, равными new String()', function (assert) {
		const object = {
			lol: 42
		};
		assert.strictEqual(get(object, new String('.lol')), 42);
	});
});
