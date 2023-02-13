'use strict';

QUnit.module('Тестируем функцию zip', function () {
	QUnit.test('Функция работает с невалидными данными и выбрасывает ошибку ', function (assert) {
		assert.throws(()=>zip(null), Error('Type Error'))
		assert.throws(()=>zip(undefined),  Error('Type Error'))
		assert.throws(()=>zip({name: 42}, null),  Error('Type Error'))
	});

	QUnit.test('Функция работает со строками, функциями и boolean и возвращает первоначальное значение', function (assert) {
		assert.deepEqual(zip(new Boolean()), new Boolean())
		assert.deepEqual(zip(new String("123")), new String("123"))
		function what() {
			return 'really?';
		}
		assert.deepEqual(zip(what), what)
	});

	QUnit.test('Функция работает с пустыми и неопределёнными значениями в полях объекта', function (assert) {
		assert.deepEqual(zip({name: null}), {name: null});
		assert.deepEqual(zip({name: undefined}), {name: undefined});
	});

	QUnit.test('Функция работает с единственным объектом', function (assert) {
		assert.deepEqual(zip({}), {});
		assert.deepEqual(zip({answer: 42}), {answer: 42});
		assert.deepEqual(zip({name: 'Georg'}), {name: 'Georg'});
		const obj = {
			count: 0,
			cost: '120$'
		};
		assert.deepEqual(zip(obj), obj);
	});

	QUnit.test('Функция работает с объектами среди которых есть объекты без свойств', function (assert) {
		assert.deepEqual(zip({}, {}), {});
		assert.deepEqual(zip({answer: 42}, {}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {}, {}, {name: 'Georg'}), {name: 'Georg'});

		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({}, {}, {}, obj, {}, {}), obj);
	});

	QUnit.test('Функция работает с объектами со свойствами с разными именами', function (assert) {
		const obj = {
			count: 0,
			cost: '120$'
		};

		assert.deepEqual(zip({count: 0}, {cost: '120$'}), obj);

		const obj2 = {
			a: 1,
			b: 2,
			c: null,
			d: 4,
			e: 5
		};
		assert.deepEqual(zip({a: 1}, {b: 2}, {c: null}, {d: 4}, {e: 5}), obj2);

		const obj3 = {
			name: 'age',
			value: 42
		};

		const obj4 = {
			prop: false,
			attr: null
		};

		const obj5 = {
			name: 'age',
			value: 42,
			prop: false,
			attr: null
		};

		assert.deepEqual(zip(obj3, obj4), obj5);
	});

	QUnit.test('Функция правильно работает со свойствами, которые встречаются в нескольких объектах', function (assert) {
		assert.deepEqual(zip({answer: 42}, {answer: false}), {answer: 42}, 'Значение должно браться из первого встретившегося поля');
		assert.deepEqual(zip({age: 5}, {}, {age: 4}, {age: 72}), {age: 5});

		const obj1 = {
			name: 'age',
			value: 42
		};

		assert.deepEqual(zip({name: 'age'}, {value: 42}, {name: 'cost'}, {value: -6}), obj1);

		const obj2 = {
			name: null,
			value: 42
		};

		assert.deepEqual(zip({name: null}, {value: 42}, {name: 'cost'}, {value: 90}), obj2);

		const obj3 = {
			name : 'Alice',
			age : 18,
		}

		const obj4 = {
			name : 'Kristina',
			age : 19,
			height : 172,
			room : 725
		}

		const obj5 = {
			name : 'Alice',
			age : 18,
			height : 172,
			room : 725
		}

		assert.deepEqual(zip(obj3, obj4), obj5);

		const obj6 = {
			name : 'Alice',
			age : 18,
			height : 160,
			room : 724
		}

		assert.deepEqual(zip(obj3, obj4, obj6), obj5);
	});

	QUnit.test('Функция правильно работает со свойствами, которые являются вложенными объектами', function (assert) {
		const obj = {
			name : 'Alice'
		}

		const obj2 = {
			name: obj
		}
		assert.deepEqual(zip(obj, obj2), obj);

	});
});
