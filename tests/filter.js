'use strict';

QUnit.module('Проверка работы функции filter', function () {
	QUnit.test('filter экранирует символы в обычном тексте', function (assert) {
		const input = '- "42!", сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной & всего такого...';

		const output = filter(input, [ 'strong', 'em' ]);

		const expected = '- &quot;42!&quot;, сказала Машина. Это и был главный ответ на Вопрос жизни, вселенной &amp; всего такого...';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter не экранирует валидные html-тэги', function (assert) {
		const input = '<strong>Hello, <em>World!</em></strong> 1 + 2 < 4!';

		const output = filter(input, [ 'strong', 'em' ]);

		const expected = '<strong>Hello, <em>World!</em></strong> 1 + 2 &lt; 4!';

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter экранирует XSS', function (assert) {
		assert.strictEqual(filter(`<script>alert('1');</script>`, [ 'strong', 'em' ]), '&lt;script&gt;alert(&#39;1&#39;);&lt;/script&gt;');
		assert.strictEqual(filter(`<img src="bad" onerror="alert('1');">`, [ 'strong', 'em' ]), '&lt;img src=&quot;bad&quot; onerror=&quot;alert(&#39;1&#39;);&quot;&gt;');
	});

	QUnit.test('filter проверяет несколько вложенных тегов', function (assert) {
		const input = `<ul> <li> <a>alert('1');</a> </li> </ul>`;

		const output = filter(input, ['ul', 'a']);

		const expected = `<ul> &lt;li&gt; <a>alert(&#39;1&#39;);</a> &lt;/li&gt; </ul>`;

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter проверяет теги, которые имеют вложенные атрибуты', function (assert) {
		const input = `<a class="navbar-brand" href="#">Technochan </a> <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse"> <span class="navbar-toggler-icon"></span> </button>`;
		const output = filter(input, ['a', 'button']);

		const expected = `<a class=&quot;navbar-brand&quot; href=&quot;#&quot;>Technochan </a> <button class=&quot;navbar-toggler&quot; data-bs-toggle=&quot;collapse&quot; data-bs-target=&quot;#navbarCollapse&quot;> &lt;span class=&quot;navbar-toggler-icon&quot;&gt;&lt;/span&gt; </button>`;

		assert.strictEqual(output, expected);
	});

	QUnit.test('filter проверяет один тег без пробелов', function (assert) {
		const input1 = `<div></div>`;
		const output1 = filter(input1);
		const expected1 = `&lt;div&gt;&lt;/div&gt;`;

		assert.strictEqual(output1, expected1);

		const input2 = `<div></div>`;
		const output2 = filter(input2, ['div']);
		const expected2 = `<div></div>`;

		assert.strictEqual(output2, expected2);
	});

	QUnit.test('filter: ситуация, когда тег содержит аттрибут, имя которого совпадает с тегом', function (assert) {
		const input1 = `<button type = button> click() </button>`;
		const output1 = filter(input1);
		const expected1 = `&lt;button type = button&gt; click() &lt;/button&gt;`;

		assert.strictEqual(output1, expected1);

		const input2 = `<button type=button> click() </button>`;
		const output2 = filter(input2, ['button']);
		const expected2 = `<button type=button> click() </button>`;

		assert.strictEqual(output2, expected2);
	});
});
