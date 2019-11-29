(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const nameparser = function( string, options, settings ) {\r\n  return nameparser.init(  string, options, settings  );\r\n};\r\n\r\nnameparser.init = __webpack_require__(/*! ./utils/init */ \"./src/utils/init.js\");;\r\nnameparser.checkString = __webpack_require__(/*! ./utils/checkstring */ \"./src/utils/checkstring.js\");\r\nnameparser.tokenizer = __webpack_require__(/*! ./utils/tokenizer */ \"./src/utils/tokenizer.js\");\r\nnameparser.tokenizer = __webpack_require__(/*! ./utils/parser */ \"./src/utils/parser.js\");\r\n\r\nroot.nameparser = nameparser;\r\n\r\nmodule.exports = nameparser\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/utils/checkstring.js":
/*!**********************************!*\
  !*** ./src/utils/checkstring.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function( variable ) {\r\n  if( typeof variable !== 'string' ){\r\n    throw Error( `You cannot use typeof ${typeof variable} as String` );\r\n  };\r\n};\r\n\n\n//# sourceURL=webpack:///./src/utils/checkstring.js?");

/***/ }),

/***/ "./src/utils/init.js":
/*!***************************!*\
  !*** ./src/utils/init.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function init( string, options, settings ) {\r\n  this.checkString( string );\r\n  \r\n  this.defaults = {\r\n    original: string,\r\n    tokens: [],\r\n  };\r\n    \r\n  this.tokenizer();\r\n  \r\n  return this.defaults;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/utils/init.js?");

/***/ }),

/***/ "./src/utils/parser.js":
/*!*****************************!*\
  !*** ./src/utils/parser.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(module) {module.functions = function() {\r\n  \r\n  \r\n  \r\n};\r\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./src/utils/parser.js?");

/***/ }),

/***/ "./src/utils/tokenizer.js":
/*!********************************!*\
  !*** ./src/utils/tokenizer.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\r\n  let string = this.defaults.original;\r\n  \r\n  var current = 0;\r\n  var tokens = [];\r\n\r\n  while (current < string.length) {\r\n    var char = string[current];\r\n    \r\n    var WORD_CHARACTER = /\\w/;\r\n    var WHITE_SPACE = /\\s/;\r\n    var PUNCTUATION = /[^\\s\\w]/;\r\n    var NUMBER = /[0-9]/;\r\n    \r\n    \r\n    if( WHITE_SPACE.test( char ) ) {\r\n      current++;\r\n      continue;\r\n    }\r\n    \r\n    if( PUNCTUATION.test( char ) ) {\r\n      this.defaults.tokens.push({ type: 'punctuation', value: char });\r\n      current++;\r\n      continue;\r\n    }\r\n    \r\n    if( NUMBER.test( char ) && char !== undefined ) {\r\n      var val = '';\r\n      \r\n      while( NUMBER.test( char ) && char !== undefined ) {\r\n        val += char;\r\n        char = string[++current];\r\n      }\r\n      \r\n      this.defaults.tokens.push({ type: 'number', value: val });\r\n    }\r\n    \r\n    if( WORD_CHARACTER.test( char ) && char !== undefined ) {\r\n      var val = '';\r\n      \r\n      while( WORD_CHARACTER.test( char ) && char !== undefined ) {\r\n        val += char;\r\n        char = string[++current];\r\n      }\r\n      \r\n      this.defaults.tokens.push({ type: 'string', value: val });\r\n      continue;\r\n    }\r\n    \r\n    current++;\r\n  }\r\n\r\n  return this.defaults.tokens;\r\n};\r\n\n\n//# sourceURL=webpack:///./src/utils/tokenizer.js?");

/***/ })

/******/ });
});