'use strict';

const OBJECT_FOR_TEST  = {
  count: 0,
  cost: '120$'
};

QUnit.module('Тестируем функцию zip', function () {

 QUnit.test('Функция правильно реагирует на аргументы, не являющиеся объектами', function (assert) {
    assert.throws(zip.bind(null, 123), new Error("Argument №0 is not object"));
    assert.throws(zip.bind(null, {}, "test", {}), new Error("Argument №1 is not object"));
    assert.throws(zip.bind(null, {test: "test"}, {}, null), new Error("Argument №2 is not object"));
    assert.throws(zip.bind(null, {}, undefined), new Error("Argument №1 is not object"));    
    assert.throws(zip.bind(null, new Boolean(true), {}, {test: "test"}), new Error("Argument №0 is not object"));
    assert.throws(zip.bind(null, {}, new String("test")), new Error("Argument №1 is not object"));
    assert.throws(zip.bind(null, {}, [1, 2, 3, 4]), new Error("Argument №1 is not object"));
    assert.throws(zip.bind(null, []), new Error("Argument №0 is not object"));
    assert.throws(zip.bind(null, {test: 'test'}, {}, [0, -10]), new Error("Argument №2 is not object"));
  });

	QUnit.test('Функция работает с единственным объектом', function (assert) {
		assert.deepEqual(zip({}), {});
		assert.deepEqual(zip({answer: 42}), {answer: 42});
		assert.deepEqual(zip({name: 'Georg'}), {name: 'Georg'});
		assert.deepEqual(zip(OBJECT_FOR_TEST), OBJECT_FOR_TEST);
    assert.deepEqual(zip({nickname: "Test", name: "Kirill"}), {nickname: "Test", name: "Kirill"});
	});

	QUnit.test('Функция работает с объектами среди которых есть объекты без свойств', function (assert) {
		assert.deepEqual(zip({}, {}), {});
		assert.deepEqual(zip({answer: 42}, {}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {answer: 42}), {answer: 42});
		assert.deepEqual(zip({}, {}, {}, {name: 'Georg'}), {name: 'Georg'});
		assert.deepEqual(zip({}, {}, {}, OBJECT_FOR_TEST, {}, {}), OBJECT_FOR_TEST);
    assert.deepEqual(zip({}, {}, {name: "Test"}, {}, {nickname: "Test"}), {name: "Test", nickname: "Test"});
	});
  
	QUnit.test('Функция работает с объектами со свойствами с разными именами', function (assert) {
		assert.deepEqual(zip({count: 0}, {cost: '120$'}), OBJECT_FOR_TEST);

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
    assert.deepEqual(zip({value1: 1, value2: 2}, {prop1: true, prop2: false}), {value1: 1, value2: 2, prop1: true, prop2: false,})
	});

	QUnit.test('Функция правильно работает со свойствами, которые встречаются в нескольких объектах', function (assert) {
		assert.deepEqual(zip({answer: 42}, {answer: false}), {answer: 42}, 'Значение должно браться из первого встретившегося поля');
		assert.deepEqual(zip({age: 5}, {}, {age: 4}, {age: 72}), {age: 5});

		const obj = {
			name: 'age',
			value: 42
		};
		assert.deepEqual(zip({name: 'age'}, {value: 42}, {name: 'cost'}, {value: -6}), obj);
    assert.deepEqual(zip({value: true}, {value: false}, {value: 12}), {value: true});
	});
});

