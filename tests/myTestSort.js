'use strict';

QUnit.module('Тестируем функцию sort', function () {
    QUnit.test('Функция работает с пустой строкой', function (assert) {
        assert.strictEqual(sort(''), '', 'OK');
    });

    QUnit.test('Функция обрабатывает неверные типы', function (assert) {
        assert.throws(function() {
            sort(1);
        }, TypeError, 'OK');

        assert.throws(function() {
            sort(1.5);
        }, TypeError, 'OK');

        assert.throws(function() {
            sort(['a', 'bc', 'def']);
        }, TypeError, 'OK');

        assert.throws(function() {
           sort(null);
        }, TypeError, 'OK');

        assert.throws(function() {
            sort();
        }, TypeError, 'OK');
    });
});

