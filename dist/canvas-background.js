module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * @constant defaultOptions
	 * @type {{type: string, encoderOptions: number}}
	 */
	var defaultOptions = { type: 'image/png', encoderOptions: 0.92 };

	/**
	 * @see http://www.mikechambers.com/blog/2011/01/31/setting-the-background-color-when-generating-images-from-canvas-todataurl/
	 * @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
	 *
	 * @param {HTMLElement} canvas
	 * @param {String} backgroundColour
	 * @param {String} type
	 * @param {Number} encoderOptions
	 * @return {String}
	 */

	exports.default = function (canvas, backgroundColour) {
	    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultOptions,
	        type = _ref.type,
	        encoderOptions = _ref.encoderOptions;

	    var context = canvas.getContext('2d');

	    if (!context) {
	        return '';
	    }

	    var width = canvas.width;
	    var height = canvas.height;

	    var data = context.getImageData(0, 0, width, height);
	    var compositeOperation = context.globalCompositeOperation;

	    if (backgroundColour) {

	        context.globalCompositeOperation = 'destination-over';
	        context.fillStyle = backgroundColour;
	        context.fillRect(0, 0, width, height);
	    }

	    var imageData = canvas.toDataURL(type, encoderOptions);

	    if (backgroundColour) {
	        context.clearRect(0, 0, width, height);
	        context.putImageData(data, 0, 0);
	        context.globalCompositeOperation = compositeOperation;
	    }

	    return imageData;
	};

/***/ }
/******/ ]);