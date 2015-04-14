/* global it */

'use strict';

var assert = require('assert');
var wrapMiddleware = require('./');

it('should return function', function () {
	assert.equal(typeof wrapMiddleware(function () {}), 'function');
});

it('should call before cb', function (done) {
	wrapMiddleware(function (req, res, next) {
		next();
	}).before(function () {
		done();
	})();
});

it('should call after cb', function (done) {
	wrapMiddleware(function (req, res, next) {
		next();
	}).after(function () {
		done();
	})();
});
