# wrap-middleware [![Build Status](https://travis-ci.org/floatdrop/wrap-middleware.svg?branch=master)](https://travis-ci.org/floatdrop/wrap-middleware)

Wraps middleware and provide way to attach code before and after it.

## Install

```
$ npm install --save wrap-middleware
```


## Usage

```js
var wrapMiddleware = require('wrap-middleware');
var myMw = function (req, res, next) { next(); };

wrapMiddleware(myMw)
	.before(function (req, res, next) {
		// Called before
	})
	.after(function (req, res, next) {
		// Called after
	});
//=> wrapped middleware
```


## API

### wrapMiddleware(middleware)

#### middleware

*Required*  
Type: `Function`

Middleware, that should be wrapped.

#### .before(cb)

Attaches `cb`, that will be called _before_ wrapped middleware.

#### .after(cb)

Attaches `cb`, that will be called _after_ wrapped middleware.

## License

MIT © [Vsevolod Strukchinsky](http://github.yandex-team.ru/floatdrop)
