'use strict';
var fs = require('fs');

module.exports = function (cb) {
	var ret;

	if (process.platform !== 'linux') {
		throw new Error('Only Linux systems are supported');
	}

	fs.readFile('/etc/default/keyboard', function (err, data) {
		if (err) {
			cb(err);
			return;
		}

		ret = /^\s*XKBLAYOUT="(.+)"\s*$/gm.exec(data);
		ret = ret && ret.length ? ret[1] : null;

		cb(null, ret);
	});
};
