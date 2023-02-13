'use strict';

QUnit.module('Тестируем функцию plainify', function () {
	QUnit.test('plainify работает правильно', function (assert) {
		assert.deepEqual(plainify({foo: 'bar', baz: 42}), {'foo': 'bar', 'baz': 42});

		const nested1 = {
			deep: {
				foo: 'bar',
				baz: 42
			}
		};

		const plain1 = {
			'deep.foo': 'bar',
			'deep.baz': 42
		};

		assert.deepEqual(plainify(nested1), plain1);

		const nested2 = {
			deep: {
				foobar: 0,
				nested: {
					object: {
						fields: {
							foo: 42,
							bar: 42,
							baz: 42
						}
					}
				}
			}
		};

		const plain2 = {
			'deep.foobar': 0,
			'deep.nested.object.fields.foo': 42,
			'deep.nested.object.fields.bar': 42,
			'deep.nested.object.fields.baz': 42
		};

		assert.deepEqual(plainify(nested2), plain2);
	});

	QUnit.test('plainify работает правильно с пустыми объектами', function (assert) {
		let nested = {}
		let plain = {}

		assert.deepEqual(plainify(nested), plain);
	});

	QUnit.test('plainify работает правильно с вложенными обьектами-функциями', function (assert) {
		function functionalObject(mode) {
			return mode;
		}

		assert.deepEqual(plainify({foo: 'bar', baz: 42, wer: functionalObject(2)}), {'foo': 'bar', 'baz': 42, 'wer': functionalObject(2)});

		const nested1 = {
			deep: {
				foo: 'bar',
				baz: 42,
				wer: functionalObject(2)
			},
		};

		const plain1 = {
			'deep.foo': 'bar',
			'deep.baz': 42,
			'deep.wer': functionalObject(2)
		};

		assert.deepEqual(plainify(nested1), plain1);

		const nested2 = {
			deep: {
				foobar: 0,
				nested: {
					object: {
						fields: {
							foo: 42,
							bar: 42,
							baz: 42
						}
					},
					wer: functionalObject(2)
				}
			}
		};

		const plain2 = {
			'deep.foobar': 0,
			'deep.nested.object.fields.foo': 42,
			'deep.nested.object.fields.bar': 42,
			'deep.nested.object.fields.baz': 42,
			'deep.nested.wer': functionalObject(2)
		};

		assert.deepEqual(plainify(nested2), plain2);
	});

});
