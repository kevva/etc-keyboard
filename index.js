'use strict';
const fs = require('fs');
const pify = require('pify');

module.exports = () => {
	if (process.platform !== 'linux') {
		throw new Error('Only Linux systems are supported');
	}

	return pify(fs.readFile)('/etc/default/keyboard').then(data => {
		const ret = /^\s*XKBLAYOUT="(.+)"\s*$/gm.exec(data);
		return (ret && ret.length) ? ret[1] : null;
	});
};
