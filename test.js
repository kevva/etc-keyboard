import test from 'ava';
import m from './';

test.cb('detect keyboard layout', t => {
	t.plan(2);

	m((err, keyboard) => {
		t.notOk(err);
		t.ok(keyboard);
		t.end();
	});
});
