'use strict';
var test = require('test');
var etcKeyboard = require('./');

test('detect keyboard layout', function (t) {
	t.plan(2);

	etcKeyboard(function (err, keyboard) {
		t.assert(!err, err);
		t.assert(keyboard);
	});
});
