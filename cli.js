#!/usr/bin/env node
'use strict';
var meow = require('meow');
var etcKeyboard = require('./');

meow({
	help: [
		'Usage',
		'  $ etc-keyboard',
		'  us'
	]
});

etcKeyboard(function (err, layout) {
	if (err) {
		console.error(err.message);
		process.exit(1);
	}

	console.log(layout);
});
