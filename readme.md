# etc-keyboard [![Build Status](https://travis-ci.org/kevva/etc-keyboard.svg?branch=master)](https://travis-ci.org/kevva/etc-keyboard)

> Detect keyboard layout on Linux


## Install

```
$ npm install --save etc-keyboard
```


## Usage

```js
const etcKeyboard = require('etc-keyboard');

etcKeyboard().then(layout => {
	console.log(layout);
	//=> 'us'
});
```


## Related

* [etc-keyboard-cli](https://github.com/kevva/etc-keyboard-cli) - CLI for this module.


## License

MIT © [Kevin Martensson](http://github.com/kevva)
