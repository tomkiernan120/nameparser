(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nameparser"] = factory();
	else
		root["nameparser"] = factory();
})(this, function() {
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const nameparser = function( string, options, settings ) {\r\n  return nameparser.init(  string, options, settings  );\r\n};\r\n\r\nnameparser.init = __webpack_require__(/*! ./utils/init */ \"./src/utils/init.js\");\r\nnameparser.checkString = __webpack_require__(/*! ./utils/checkstring */ \"./src/utils/checkstring.js\");\r\nnameparser.tokenizer = __webpack_require__(/*! ./utils/tokenizer */ \"./src/utils/tokenizer.js\");\r\nnameparser.parser = __webpack_require__(/*! ./utils/parser */ \"./src/utils/parser.js\");\r\n\r\nmodule.exports = nameparser;\r\n\n\n//# sourceURL=webpack://nameparser/./src/index.js?");

/***/ }),

/***/ "./src/lists/suffixes.js":
/*!*******************************!*\
  !*** ./src/lists/suffixes.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = {\r\n      \"bt\": \"Baronet\",\r\n      \"bart\": \"Baronet\",\r\n      \"esq\": \"Esquire\",\r\n      \"VC\": \"Victoria Cross\",\r\n      \"gc\": \"Knight of the Order of the Garter\",\r\n      \"lg\": \"Lady of the Order of the Garter\",\r\n      \"kt\": \"Knight of the Order of the Thistle\",\r\n      \"lt\": \"Lady of the Order of the Thistle\",\r\n      \"kp\": \"Knight of the Order of Saint Patrick\",\r\n      \"gcb\": \"Knight/Dame Grand Cross of the Order of the Bath\",\r\n      \"om\": \"Order of Merit\",\r\n      \"gcsi\": \"Knight Grand Commander of the Order of the Star of India\",\r\n    };\r\n\n\n//# sourceURL=webpack://nameparser/./src/lists/suffixes.js?");

/***/ }),

/***/ "./src/lists/titles.js":
/*!*****************************!*\
  !*** ./src/lists/titles.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = [\r\n  'Mr',\r\n  'Ms',\r\n  'Miss',\r\n  'Mrs',\r\n  'Mx',\r\n  'Master',\r\n  'Sir',\r\n  'Madam',\r\n  'Dame',\r\n  'Lord',\r\n  'Lady',\r\n  'Dr',\r\n  'Prof',\r\n  'Br',\r\n  'Sr',\r\n  'Fr',\r\n  'Rev',\r\n  'Pr',\r\n  'Elder'\r\n];\r\n\n\n//# sourceURL=webpack://nameparser/./src/lists/titles.js?");

/***/ }),

/***/ "./src/utils/checkstring.js":
/*!**********************************!*\
  !*** ./src/utils/checkstring.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function( variable ) {\r\n  if( typeof variable !== 'string' ){\r\n    throw Error( `You cannot use typeof ${typeof variable} as String` );\r\n  }\r\n};\r\n\n\n//# sourceURL=webpack://nameparser/./src/utils/checkstring.js?");

/***/ }),

/***/ "./src/utils/init.js":
/*!***************************!*\
  !*** ./src/utils/init.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function init( string, options, settings ) {\r\n  this.checkString( string );\r\n  \r\n  this.defaults = {\r\n    original: string,\r\n    tokens: [],\r\n  };\r\n  \r\n    \r\n  this.tokenizer();\r\n  this.parser();\r\n  \r\n  return this.defaults;\r\n};\r\n\n\n//# sourceURL=webpack://nameparser/./src/utils/init.js?");

/***/ }),

/***/ "./src/utils/parser.js":
/*!*****************************!*\
  !*** ./src/utils/parser.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const titles = __webpack_require__(/*! ../lists/titles */ \"./src/lists/titles.js\");\r\nconst suffixes = __webpack_require__(/*! ../lists/suffixes */ \"./src/lists/suffixes.js\");\r\n\r\nmodule.exports = function() {\r\n  \r\n  this.defaults.parsedData = { nodes: [], length: 0 };\r\n  \r\n  this.defaults.parsedData.length = this.defaults.tokens.length;\r\n  \r\n  let title = false;\r\n  \r\n  for( var i = 0; i < this.defaults.tokens.length; i++ ) {\r\n    const item = this.defaults.tokens[ i ];\r\n    \r\n    let thisParsedItem = { value: item.value, type: \"Most likely a middlename\" };\r\n      \r\n    if( titles.indexOf( item.value ) > -1 ) {\r\n      title = true\r\n      thisParsedItem.type =  \"Title\";\r\n    }\r\n    \r\n    if( (title && i === 1) || ( !title && i === 0 ) ) {\r\n      thisParsedItem.type =  \"Most likely the firstname\";\r\n    }\r\n\r\n    if( i === (this.defaults.tokens.length - 1) && suffixes.indexOf( item.value ) <= 0 ) {\r\n      thisParsedItem.type =  \"Most likely the lastname\";\r\n    }\r\n    else if( suffixes.indexOf( item.value ) > -1 ) {\r\n      // do something here.\r\n    }\r\n    \r\n    this.defaults.parsedData.nodes[ i ] = thisParsedItem;\r\n  }\r\n  \r\n  \r\n};\r\n\n\n//# sourceURL=webpack://nameparser/./src/utils/parser.js?");

/***/ }),

/***/ "./src/utils/tokenizer.js":
/*!********************************!*\
  !*** ./src/utils/tokenizer.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function() {\r\n  let string = this.defaults.original;\r\n  \r\n  var current = 0;\r\n  var tokens = [];\r\n\r\n  while (current < string.length) {\r\n    var char = string[current];\r\n    \r\n    var WORD_CHARACTER = /\\w/;\r\n    var WHITE_SPACE = /\\s/;\r\n    var PUNCTUATION = /[^\\s\\w]/;\r\n    var NUMBER = /[0-9]/;\r\n    \r\n    \r\n    if( WHITE_SPACE.test( char ) ) {\r\n      current++;\r\n      continue;\r\n    }\r\n    \r\n    if( PUNCTUATION.test( char ) ) {\r\n      this.defaults.tokens.push({ type: 'punctuation', value: char });\r\n      current++;\r\n      continue;\r\n    }\r\n    \r\n    if( NUMBER.test( char ) && char !== undefined ) {\r\n      var val = '';\r\n      \r\n      while( NUMBER.test( char ) && char !== undefined ) {\r\n        val += char;\r\n        char = string[++current];\r\n      }\r\n      \r\n      this.defaults.tokens.push({ type: 'number', value: val });\r\n    }\r\n    \r\n    if( WORD_CHARACTER.test( char ) && char !== undefined ) {\r\n      let val = '';\r\n      \r\n      while( WORD_CHARACTER.test( char ) && char !== undefined ) {\r\n        val += char;\r\n        char = string[++current];\r\n      }\r\n      \r\n      this.defaults.tokens.push({ type: 'string', value: val });\r\n      continue;\r\n    }\r\n    \r\n    current++;\r\n  }\r\n\r\n  return this;\r\n};\r\n\n\n//# sourceURL=webpack://nameparser/./src/utils/tokenizer.js?");

/***/ })

/******/ });
});