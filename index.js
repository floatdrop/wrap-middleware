'use strict';

function nop(res, req, next) { next(); };

module.exports = function (middleware) {
	if (typeof middleware !== 'function') {
		throw new TypeError('Expected a function');
	}

	var before = nop;
	var after = nop;

	var result = function (req, res, next) {
		before(req, res, function (err) {
			if (err) { return next(err); }
			middleware(req, res, function (err) {
				if (err) { return next(err); }
				after(req, res, next);
			});
		});
	};

	result.before = function (cb) {
		before = cb;
		return result;
	};

	result.after = function (cb) {
		after = cb;
		return result;
	};

	return result;
};
