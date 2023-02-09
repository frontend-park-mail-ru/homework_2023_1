'use strict';

QUnit.module('Тестируем функцию euclid', function () {
    QUnit.test('На входе всего одно число', function (assert) {
        assert.strictEqual(euclid(1), 1, 'euclid(1) === 1');
        assert.strictEqual(euclid(2), 2, 'euclid(2) === 2');
        assert.strictEqual(euclid(7), 7, 'euclid(7) === 7');
        assert.strictEqual(euclid(6006), 6006, 'euclid(6006) === 6006');
    });

    QUnit.test('На входе два числа', function (assert) {
        assert.strictEqual(euclid(1, 1), 1, 'euclid(1, 1) === 1');
        assert.strictEqual(euclid(2, 4), 2, 'euclid(2, 4) === 2');
        assert.strictEqual(euclid(7, 8), 1, 'euclid(7, 8) === 1');
        assert.strictEqual(euclid(60, 90), 30, 'euclid(60, 90) === 30');
    });

    QUnit.test('Функция должна правильно находить НОД трёх натуральных чисел', function (assert) {
        assert.strictEqual(euclid(1, 1, 1), 1, 'euclid(1, 1, 1) === 1');
        assert.strictEqual(euclid(2, 2, 2), 2, 'euclid(2, 2, 2) === 2');
        assert.strictEqual(euclid(13, 13, 26), 13, 'euclid(13, 13, 26) === 13');
        assert.strictEqual(euclid(3, 7, 1), 1, 'euclid(3, 7, 1) === 1');
        assert.strictEqual(euclid(7, 7, 13), 1, 'euclid(7, 7, 13) === 1');
        assert.strictEqual(euclid(2, 14, 16), 2, 'euclid(2, 14, 16) === 2');
        assert.strictEqual(euclid(7, 14, 21), 7, 'euclid(7, 14, 21) === 7');
        assert.strictEqual(euclid(6006, 3738735, 51051), 3003, 'euclid(6006, 3738735, 51051) === 3003');
    });

    QUnit.test('Функция должна правильно работать с любым количеством аргументов', function (assert) {
        assert.strictEqual(euclid(1, 1, 1, 1, 1, 1, 1), 1);

        const n = 17;
        assert.strictEqual(euclid(3 * n, 2 * n, 4 * n, 7 * n, n, 21 * n), n);
        const temp = [80325, 55275, 8746650, 3000000, 45672375, 225, 54675];
        assert.strictEqual(euclid(...[...temp, ...temp, ...temp, ...temp, ...temp]), euclid(...temp));
    });

    QUnit.test('Функция должна правильно обрабатывать некорректные аргументы', function (assert) {
        assert.throws(function () {
                euclid()
            }, Error("Function requires at least one input parameter."),
            'euclid() throws Error("Function requires at least one input parameter.")');

        assert.throws(function () {
                euclid(1, 2, 3.3)
            }, Error("Bad input parameters."),
            'euclid(1, 2, 3.3) throws Error("Bad input parameters.")');

        assert.throws(function () {
                euclid(1, 'a', 1)
            }, Error("Bad input parameters."),
            'euclid(1, \'a\', 1) throws Error("Bad input parameters.")');

        assert.throws(function () {
                euclid(-100)
            }, Error("Bad input parameters."),
            'euclid(-100) throws Error("Bad input parameters.")');
    });
});
