# etc-keyboard [![Build Status](https://travis-ci.org/kevva/etc-keyboard.svg?branch=master)](https://travis-ci.org/kevva/etc-keyboard)

> Detect keyboard layout on Linux


## Install

```
$ npm install --save etc-keyboard
```


## Usage

```js
var etcKeyboard = require('etc-keyboard');

etcKeyboard(function (err, layout) {
	console.log(layout);
	//=> 'us'
});
```


## CLI

```
$ npm install --global etc-keyboard
```

```
$ etc-keyboard --help

  Usage
    $ etc-keyboard
    us
```


## License

MIT © [Kevin Martensson](http://github.com/kevva)
