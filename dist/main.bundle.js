/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "/* @import './node_modules/normalize.css/normalize.css'; */\n* {\n  font-family: 'Mochiy Pop P One', sans-serif; }\n\nbody, html {\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n  overscroll-behavior: none;\n  background-color: lightblue; }\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  height: 15vh;\n  align-items: center; }\n\nh1 {\n  height: fit-content;\n  margin: 0 0 0 1rem; }\n\ninput[type=radio],\ninput.radio {\n  clear: none;\n  margin: 2px 0 0 2px; }\n\ninput {\n  height: 3vh;\n  width: 10vw;\n  border-radius: 3px; }\n\n.home-btn,\n.favorited-recipes-btn,\n.see-all-recipes {\n  height: 5vh;\n  width: 10vw;\n  border-radius: 3px;\n  margin: 0 1rem 0 0; }\n\n.suggested-recipe-view {\n  display: flex;\n  width: 50vw;\n  height: 50vh;\n  align-items: center;\n  margin: 10%;\n  justify-content: space-between; }\n\n.suggested-recipe-image {\n  height: 60vh; }\n\n.favorite-button {\n  align-self: flex-end;\n  height: 5vh;\n  width: 10vw;\n  border-radius: 3px; }\n\n.recipe-results {\n  display: flex; }\n\n.try-this-recipe-btn {\n  border-radius: 50%;\n  height: 20vh;\n  width: 10vw;\n  position: relative;\n  bottom: 3vh;\n  right: 2vw;\n  align-self: flex-start; }\n\n.result-card {\n  margin: 5vh 13vh 0; }\n\nh2 {\n  margin: 0; }\n\n.recipe-information-view {\n  margin: 1rem;\n  display: flex;\n  flex-direction: column; }\n\n.current-recipe-image {\n  width: 50em; }\n\nh3 {\n  margin: 0;\n  width: fit-content; }\n\nol {\n  width: 47em; }\n\n.total-cost {\n  align-self: flex-end; }\n\n.fav-recipe-card {\n  margin: 5vh;\n  display: flex;\n  flex-direction: column;\n  height: 15vh; }\n\n.recipe-information-btn {\n  width: 10vw;\n  height: 5vh; }\n\n.fav-card-title {\n  height: 6vh; }\n\n.box-content {\n  display: flex;\n  justify-content: space-between;\n  height: 8vh;\n  align-items: center; }\n\n.change-button-color {\n  background-color: red; }\n\n/* dropdown CSS  */\n.dropbtn {\n  background-color: #3498DB;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer; }\n\n.dropbtn:hover, .dropbtn:focus {\n  background-color: #2980B9; }\n\n.dropdown {\n  position: relative;\n  display: inline-block; }\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);\n  z-index: 1; }\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block; }\n\n.dropdown a:hover {\n  background-color: #ddd; }\n\n.show {\n  display: block; }\n\n/* dropDown CSS Ends  */\n.hidden {\n  display: none; }\n", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA,0DAAA;AAEA;EACE,2CAA2C,EAAA;;AAG7C;EACE,SAAS;EACT,aAAa;EACb,YAAY;EACZ,yBAAyB;EACzB,2BAA2B,EAAA;;AAG7B;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;EACZ,mBAAmB,EAAA;;AAGrB;EACE,mBAAmB;EACnB,kBAAkB,EAAA;;AAOpB;;EAEE,WAAW;EACX,mBAAmB,EAAA;;AAGrB;EACE,WAAW;EACX,WAAW;EACX,kBAAkB,EAAA;;AAGpB;;;EAGE,WAAW;EACX,WAAW;EACX,kBAAkB;EAClB,kBAAkB,EAAA;;AAGpB;EACE,aAAa;EACb,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,8BAA8B,EAAA;;AAGhC;EACE,YAAY,EAAA;;AAGd;EACE,oBAAoB;EACpB,WAAW;EACX,WAAW;EACX,kBAAkB,EAAA;;AAGpB;EACE,aAAa,EAAA;;AAGf;EACE,kBAAkB;EAClB,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,UAAU;EACV,sBAAsB,EAAA;;AAGxB;EACE,kBAAkB,EAAA;;AAIpB;EACE,SAAS,EAAA;;AAGX;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB,EAAA;;AAGxB;EACE,WAAW,EAAA;;AAGb;EACE,SAAS;EACT,kBAAkB,EAAA;;AAGpB;EACE,WAAW,EAAA;;AAGb;EACE,oBAAoB,EAAA;;AAGtB;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,YAAY,EAAA;;AAGd;EACE,WAAW;EACX,WAAW,EAAA;;AAGb;EACE,WAAW,EAAA;;AAGb;EACE,aAAa;EACb,8BAA8B;EAC9B,WAAW;EACX,mBAAmB,EAAA;;AAGrB;EACE,qBAAqB,EAAA;;AAGvB,kBAAA;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,aAAa;EACb,eAAe;EACf,YAAY;EACZ,eAAe,EAAA;;AAGjB;EACE,yBAAyB,EAAA;;AAG3B;EACE,kBAAkB;EAClB,qBAAqB,EAAA;;AAGvB;EACE,aAAa;EACb,kBAAkB;EAClB,yBAAyB;EACzB,gBAAgB;EAChB,cAAc;EACd,+CAA4C;EAC5C,UAAU,EAAA;;AAGZ;EACE,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,cAAc,EAAA;;AAGhB;EACE,sBAAsB,EAAA;;AAGxB;EACE,cAAc,EAAA;;AAGhB,uBAAA;AAEA;EACE,aAAa,EAAA","sourcesContent":["/* @import './node_modules/normalize.css/normalize.css'; */\n\n* {\n  font-family: 'Mochiy Pop P One', sans-serif;\n}\n\nbody, html {\n  margin: 0;\n  height: 100vh;\n  width: 100vw;\n  overscroll-behavior: none;\n  background-color: lightblue;\n}\n\nheader {\n  display: flex;\n  justify-content: space-between;\n  height: 15vh;\n  align-items: center;\n} \n\nh1 {\n  height: fit-content;\n  margin: 0 0 0 1rem;\n}\n\ninput[type=text] {\n\n}\n\ninput[type=radio],\ninput.radio {\n  clear: none;\n  margin: 2px 0 0 2px;\n}\n\ninput {\n  height: 3vh;\n  width: 10vw;\n  border-radius: 3px;\n}\n\n.home-btn, \n.favorited-recipes-btn,\n.see-all-recipes {\n  height: 5vh;\n  width: 10vw;\n  border-radius: 3px;\n  margin: 0 1rem 0 0;\n}\n\n.suggested-recipe-view {\n  display: flex;\n  width: 50vw;\n  height: 50vh;\n  align-items: center;\n  margin: 10%;\n  justify-content: space-between;\n}\n\n.suggested-recipe-image {\n  height: 60vh;\n}\n\n.favorite-button {\n  align-self: flex-end;\n  height: 5vh;\n  width: 10vw;\n  border-radius: 3px;\n}\n\n.recipe-results {\n  display: flex;\n}\n\n.try-this-recipe-btn {\n  border-radius: 50%;\n  height: 20vh;\n  width: 10vw;\n  position: relative;\n  bottom: 3vh;\n  right: 2vw;\n  align-self: flex-start;\n}\n\n.result-card {\n  margin: 5vh 13vh 0;\n  \n}\n\nh2 {\n  margin: 0;\n}\n\n.recipe-information-view {\n  margin: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.current-recipe-image {\n  width: 50em;\n}\n\nh3 {\n  margin: 0;\n  width: fit-content;\n}\n\nol {\n  width: 47em;\n}\n\n.total-cost {\n  align-self: flex-end;\n}\n\n.fav-recipe-card {\n  margin: 5vh;\n  display: flex;\n  flex-direction: column;\n  height: 15vh;\n}\n\n.recipe-information-btn {\n  width: 10vw;\n  height: 5vh;\n}\n\n.fav-card-title {\n  height: 6vh;\n}\n\n.box-content {\n  display: flex;\n  justify-content: space-between;\n  height: 8vh;\n  align-items: center;\n}\n\n.change-button-color {\n  background-color: red;\n}\n\n/* dropdown CSS  */\n.dropbtn {\n  background-color: #3498DB;\n  color: white;\n  padding: 16px;\n  font-size: 16px;\n  border: none;\n  cursor: pointer;\n}\n\n.dropbtn:hover, .dropbtn:focus {\n  background-color: #2980B9;\n}\n\n.dropdown {\n  position: relative;\n  display: inline-block;\n}\n\n.dropdown-content {\n  display: none;\n  position: absolute;\n  background-color: #f1f1f1;\n  min-width: 160px;\n  overflow: auto;\n  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);\n  z-index: 1;\n}\n\n.dropdown-content a {\n  color: black;\n  padding: 12px 16px;\n  text-decoration: none;\n  display: block;\n}\n\n.dropdown a:hover {\n  background-color: #ddd;\n}\n\n.show {\n  display: block;\n}\n\n/* dropDown CSS Ends  */\n\n.hidden {\n  display: none;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: fetchApiData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchApiData", function() { return fetchApiData; });
const fetchApiData = (type) => {
  return fetch(`https://what-s-cookin-starter-kit.herokuapp.com/api/v1/${type}`)
    .then((response) => 
    response.json())
    .catch(error => console.log('fetch error', error))
};

/***/ }),

/***/ "./src/classes/Recipe.js":
/*!*******************************!*\
  !*** ./src/classes/Recipe.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const { ingredientsData } = __webpack_require__(/*! ../data/ingredients */ "./src/data/ingredients.js");

class Recipe {
  constructor(recipeData) {
    this.id = recipeData.id;
    this.image = recipeData.image;
    this.ingredients = recipeData.ingredients;
    this.instructions = recipeData.instructions;
    this.name = recipeData.name;
    this.tags = recipeData.tags;
  }

  findRecipeIngredientInfo() {
    const recipeIngredients = this.ingredients.map(recipeIngredient => {
      const ingredientNames = ingredientsData.find(ingredientItem => ingredientItem.id === recipeIngredient.id);
      return ingredientNames.name;
    });
    return recipeIngredients;
  }

  getRecipeInstructions() {
    const instructionByOrder = this.instructions.map((elem) => {
     return elem.instruction
  })
  return instructionByOrder
}
  
  calculateRecipeCost() {
    let totalCost;
       const total = this.ingredients.reduce((acc, recipeIngredient) => {
         let foundID = ingredientsData.find(elem => {return elem.id === recipeIngredient.id});
         totalCost = (recipeIngredient.quantity.amount * foundID.estimatedCostInCents) / 100;
         acc += totalCost;
        return acc;
   }, 0);
    return total.toFixed(2);
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Recipe);

/***/ }),

/***/ "./src/classes/RecipeBox.js":
/*!**********************************!*\
  !*** ./src/classes/RecipeBox.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const { recipeData } = __webpack_require__(/*! ../data/recipes */ "./src/data/recipes.js");
const { ingredientsData } = __webpack_require__(/*! ../data/ingredients */ "./src/data/ingredients.js");

class RecipeBox {
  constructor(recipesCollection) {
    this.recipesCollection = recipesCollection;
    this.matchingRecipesTags = [];
    this.matchingRecipes = [];
    this.recipeMatch = [];
  }
  storeByTag(theUserInput) {
    this.recipesCollection.forEach((recipe) => {
      if(recipe.tags.includes(theUserInput) && !this.matchingRecipesTags.includes(recipe)) {
        this.matchingRecipesTags.push(recipe)
      }
    })
    return this.matchingRecipesTags;
  }
  
  findRecipeName(theUserInput) {
    this.recipesCollection.forEach((recipe) => {
      let lowerCasedName = recipe.name.toLowerCase();
      if(lowerCasedName.includes(theUserInput) && !this.matchingRecipes.includes(recipe)) {
        this.matchingRecipes.push(recipe)
      }
    })
    return this.matchingRecipes;
  }

  findIngredientById(theUserInput) {
    let matchingIngredientId = null;
    ingredientsData.forEach((ingredient) => {
      if(ingredient.name === theUserInput) {
        matchingIngredientId = ingredient.id
      }
    })
    this.recipesCollection.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if(ingredient.id === matchingIngredientId) {
          this.recipeMatch.push(recipe)
        }
      })
    })
    return this.recipeMatch;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (RecipeBox);
 

//Should be able to take in recipe data
//we're passing in recipeData array as the parameter
  //create new instance of recipe box will house the entire recipes array of object
  //create 3 new instances of recipe to pass as one recipeBox array to test 
  //goal: return recipeData 
  //example: const recipe1 = new Recipe(id, image, ingredients, instructions, name, tags)
  // const recipe2 = new Recipe(id, image, ingredients, instructions, name, tags)
  //const recipe3 = new Recipe(id, image, ingredients, instructions, name, tags)
  //const recipeBox = new RecipeBox(recipe1, recipe2, recipe3)
  
//Should be able to store recipes by one or more tag/name
  //given the tag 
  //iterate through the recipeData for tags array
  //iterate through the tags array 
  //if tag is included in array
  //push recipe into new array 
  //return an that new array of recipes that include the tag 
  //If tag.includes 'string name of tag' 
  //Then return the whole object in new array 
//Should be able to filter recipes based on name 
  
//should be able to filter recipes based on ingredients 
//have a user input, filter through ingredientsData for ingredientsData.name
//return the ingredientsData.id 
//compare ingredientsData.id to recipesData.ingredients.id
//if they match then push recipe into matchingIngredientsArray

/***/ }),

/***/ "./src/classes/User.js":
/*!*****************************!*\
  !*** ./src/classes/User.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// const { recipeData } = require("../data/recipes");
const { ingredientsData } = __webpack_require__(/*! ../data/ingredients */ "./src/data/ingredients.js");
// import Recipe from '../src/classes/Recipe';


class User {
  constructor(human) {
    this.name = human.name;
    this.id = human.id;
    this.pantry = human.pantry;
    this.favoriteRecipes = [];
    this.recipesToCook = [];
    this.recipeMatch = [];
    this.matchingRecipes = [];
    this.matchingRecipesTags = [];
  }

  
  addFavoriteRecipe(recipe) {
    if(!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe)
    }
  }
  removeFavoriteRecipe(recipe) {
    if(this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.splice(recipe, 1)
    }
  }
  addRecipeToCook(recipe) {
    if(!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe)
    }
  }
  removeRecipeToCook(recipe) {
    if(this.recipesToCook.includes(recipe)) {
      this.recipesToCook.splice(recipe, 1)
    }
  }
  filterFavoritesByName(userInput) {
    let lowerCasedUserInput = userInput.toLowerCase();
    this.favoriteRecipes.forEach((recipe) => {
      let lowerCasedName = recipe.name.toLowerCase();
      if(lowerCasedName.includes(lowerCasedUserInput)) {
        this.matchingRecipes.push(recipe)
      }
    })
    return this.matchingRecipes;
  }

  filterFavoritesByIngredient(userInput) {
    let matchingIngredientId = null;
    ingredientsData.forEach((ingredient) => {
      if(ingredient.name === userInput) {
        matchingIngredintId = ingredient.id
      }
    })
    this.favoriteRecipes.forEach((recipe) => {
      recipe.ingredients.forEach((ingredient) => {
        if(ingredient.id === matchingIngredientId) {
          this.recipeMatch.push(recipe)
        }
      })
    })
    return this.recipeMatch;
  }

  filterFavoritesByTag(userInput) {
    this.favoriteRecipes.forEach((recipe) => {
      if(recipe.tags.includes(userInput)) {
        this.matchingRecipesTags.push(recipe)
      }
    })
    return this.matchingRecipesTags;
  }
};


/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/data/ingredients.js":
/*!*********************************!*\
  !*** ./src/data/ingredients.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

const ingredientsData = [
    {
      "id": 20081,
      "name": "wheat flour",
      "estimatedCostInCents": 142
    },
    {
      "id": 18372,
      "name": "bicarbonate of soda",
      "estimatedCostInCents": 582
    },
    {
      "id": 1123,
      "name": "eggs",
      "estimatedCostInCents": 472
    },
    {
      "id": 19335,
      "name": "sucrose",
      "estimatedCostInCents": 902
    },
    {
      "id": 19206,
      "name": "instant vanilla pudding",
      "estimatedCostInCents": 660
    },
    {
      "id": 19334,
      "name": "brown sugar",
      "estimatedCostInCents": 559
    },
    {
      "id": 2047,
      "name": "salt",
      "estimatedCostInCents": 280
    },
    {
      "id": 1012047,
      "name": "fine sea salt",
      "estimatedCostInCents": 528
    },
    {
      "id": 10019903,
      "name": "semi sweet chips",
      "estimatedCostInCents": 253
    },
    {
      "id": 1145,
      "name": "unsalted butter",
      "estimatedCostInCents": 617
    },
    {
      "id": 2050,
      "name": "vanilla",
      "estimatedCostInCents": 926
    },
    {
      "id": 1009016,
      "name": "apple cider",
      "estimatedCostInCents": 468
    },
    {
      "id": 9003,
      "name": "apple",
      "estimatedCostInCents": 207
    },
    {
      "id": 20027,
      "name": "corn starch",
      "estimatedCostInCents": 236
    },
    {
      "id": 1002046,
      "name": "dijon style mustard",
      "estimatedCostInCents": 619
    },
    {
      "id": 11215,
      "name": "whole garlic clove",
      "estimatedCostInCents": 220
    },
    {
      "id": 1012046,
      "name": "whole grain dijon mustard",
      "estimatedCostInCents": 867
    },
    {
      "id": 19911,
      "name": "maple",
      "estimatedCostInCents": 349
    },
    {
      "id": 16112,
      "name": "miso",
      "estimatedCostInCents": 978
    },
    {
      "id": 10010062,
      "name": "pork chop",
      "estimatedCostInCents": 834
    },
    {
      "id": 1102047,
      "name": "s&p",
      "estimatedCostInCents": 524
    },
    {
      "id": 16124,
      "name": "soy sauce",
      "estimatedCostInCents": 486
    },
    {
      "id": 1016168,
      "name": "sriracha sauce",
      "estimatedCostInCents": 576
    },
    {
      "id": 1002030,
      "name": "black pepper",
      "estimatedCostInCents": 441
    },
    {
      "id": 1001,
      "name": "butter",
      "estimatedCostInCents": 618
    },
    {
      "id": 4582,
      "name": "oil",
      "estimatedCostInCents": 807
    },
    {
      "id": 2031,
      "name": "red pepper powder",
      "estimatedCostInCents": 583
    },
    {
      "id": 5100,
      "name": "chicken wing",
      "estimatedCostInCents": 593
    },
    {
      "id": 2009,
      "name": "red chili powder",
      "estimatedCostInCents": 499
    },
    {
      "id": 1022020,
      "name": "garlic powder",
      "estimatedCostInCents": 344
    },
    {
      "id": 6168,
      "name": "tabasco sauce",
      "estimatedCostInCents": 859
    },
    {
      "id": 9176,
      "name": "mangoes",
      "estimatedCostInCents": 425
    },
    {
      "id": 2026,
      "name": "onion powder",
      "estimatedCostInCents": 597
    },
    {
      "id": 1042047,
      "name": "seasoned salt",
      "estimatedCostInCents": 334
    },
    {
      "id": 18371,
      "name": "baking powder",
      "estimatedCostInCents": 346
    },
    {
      "id": 9040,
      "name": "ripe banana",
      "estimatedCostInCents": 331
    },
    {
      "id": 20011,
      "name": "buck wheat flour",
      "estimatedCostInCents": 865
    },
    {
      "id": 1230,
      "name": "buttermilk",
      "estimatedCostInCents": 773
    },
    {
      "id": 19296,
      "name": "runny honey",
      "estimatedCostInCents": 742
    },
    {
      "id": 16098,
      "name": "peanut butter",
      "estimatedCostInCents": 490
    },
    {
      "id": 2048,
      "name": "apple cider vinegar",
      "estimatedCostInCents": 532
    },
    {
      "id": 20090,
      "name": "brown rice flour",
      "estimatedCostInCents": 667
    },
    {
      "id": 93784,
      "name": "brown rice syrup",
      "estimatedCostInCents": 126
    },
    {
      "id": 1124,
      "name": "egg albumen",
      "estimatedCostInCents": 304
    },
    {
      "id": 93625,
      "name": "evaporated cane juice",
      "estimatedCostInCents": 118
    },
    {
      "id": 12220,
      "name": "flax meal",
      "estimatedCostInCents": 296
    },
    {
      "id": 10118375,
      "name": "instant yeast",
      "estimatedCostInCents": 383
    },
    {
      "id": 19304,
      "name": "unsulfured molasses",
      "estimatedCostInCents": 925
    },
    {
      "id": 11413,
      "name": "Potato Starch Flour",
      "estimatedCostInCents": 895
    },
    {
      "id": 93696,
      "name": "tapioca starch",
      "estimatedCostInCents": 656
    },
    {
      "id": 93760,
      "name": "Whole Grain Teff Flour",
      "estimatedCostInCents": 539
    },
    {
      "id": 14412,
      "name": "ice water",
      "estimatedCostInCents": 625
    },
    {
      "id": 93626,
      "name": "xanthan gum",
      "estimatedCostInCents": 625
    },
    {
      "id": 19350,
      "name": "corn syrup",
      "estimatedCostInCents": 441
    },
    {
      "id": 9099,
      "name": "fruit cocktail",
      "estimatedCostInCents": 953
    },
    {
      "id": 12061,
      "name": "whole almonds",
      "estimatedCostInCents": 1029
    },
    {
      "id": 12104,
      "name": "coconut",
      "estimatedCostInCents": 918
    },
    {
      "id": 12115,
      "name": "coconut cream",
      "estimatedCostInCents": 304
    },
    {
      "id": 4047,
      "name": "coconut oil",
      "estimatedCostInCents": 152
    },
    {
      "id": 10019071,
      "name": "dark chocolate morsels",
      "estimatedCostInCents": 632
    },
    {
      "id": 8212,
      "name": "granola cereal",
      "estimatedCostInCents": 381
    },
    {
      "id": 8121,
      "name": "oatmeal",
      "estimatedCostInCents": 659
    },
    {
      "id": 12142,
      "name": "pecan",
      "estimatedCostInCents": 314
    },
    {
      "id": 93740,
      "name": "blanched almond flour",
      "estimatedCostInCents": 986
    },
    {
      "id": 1125,
      "name": "egg yolks",
      "estimatedCostInCents": 889
    },
    {
      "id": 12023,
      "name": "sesame seeds",
      "estimatedCostInCents": 886
    },
    {
      "id": 1015062,
      "name": "chicken tenders",
      "estimatedCostInCents": 657
    },
    {
      "id": 10011109,
      "name": "slaw mix",
      "estimatedCostInCents": 681
    },
    {
      "id": 10116098,
      "name": "creamy peanut butter",
      "estimatedCostInCents": 152
    },
    {
      "id": 2064,
      "name": "mint",
      "estimatedCostInCents": 575
    },
    {
      "id": 2021,
      "name": "powdered ginger",
      "estimatedCostInCents": 783
    },
    {
      "id": 9160,
      "name": "juice of lime",
      "estimatedCostInCents": 477
    },
    {
      "id": 9266,
      "name": "pineapple",
      "estimatedCostInCents": 834
    },
    {
      "id": 11135,
      "name": "cauliflower",
      "estimatedCostInCents": 486
    },
    {
      "id": 6172,
      "name": "chicken stock",
      "estimatedCostInCents": 454
    },
    {
      "id": 93632,
      "name": "ghee",
      "estimatedCostInCents": 370
    },
    {
      "id": 12120,
      "name": "hazelnut",
      "estimatedCostInCents": 812
    },
    {
      "id": 93690,
      "name": "nutritional yeast flakes",
      "estimatedCostInCents": 969
    },
    {
      "id": 11282,
      "name": "onions",
      "estimatedCostInCents": 439
    },
    {
      "id": 10010123,
      "name": "proscuitto",
      "estimatedCostInCents": 217
    },
    {
      "id": 11096,
      "name": "rapini",
      "estimatedCostInCents": 846
    },
    {
      "id": 6150,
      "name": "bar b que sauce",
      "estimatedCostInCents": 966
    },
    {
      "id": 6194,
      "name": "chicken broth",
      "estimatedCostInCents": 983
    },
    {
      "id": 93627,
      "name": "liquid smoke",
      "estimatedCostInCents": 412
    },
    {
      "id": 2028,
      "name": "paprika",
      "estimatedCostInCents": 302
    },
    {
      "id": 10072,
      "name": "pork shoulder",
      "estimatedCostInCents": 969
    },
    {
      "id": 6971,
      "name": "worcestershire",
      "estimatedCostInCents": 57
    },
    {
      "id": 93607,
      "name": "almondmilk",
      "estimatedCostInCents": 787
    },
    {
      "id": 18942,
      "name": "graham cracker crust",
      "estimatedCostInCents": 655
    },
    {
      "id": 1012010,
      "name": "ground cinnamon",
      "estimatedCostInCents": 742
    },
    {
      "id": 2025,
      "name": "nutmeg powder",
      "estimatedCostInCents": 480
    },
    {
      "id": 43274,
      "name": "low fat cream cheese",
      "estimatedCostInCents": 1048
    },
    {
      "id": 8120,
      "name": "whole grain rolled oats",
      "estimatedCostInCents": 98
    },
    {
      "id": 11424,
      "name": "canned pumpkin",
      "estimatedCostInCents": 852
    },
    {
      "id": 9016,
      "name": "apple juice",
      "estimatedCostInCents": 710
    },
    {
      "id": 18047,
      "name": "raisin bread",
      "estimatedCostInCents": 222
    },
    {
      "id": 1089003,
      "name": "grannysmith apple",
      "estimatedCostInCents": 459
    },
    {
      "id": 1077,
      "name": "full-fat milk",
      "estimatedCostInCents": 276
    },
    {
      "id": 11297,
      "name": "flat leaf parsley leaves",
      "estimatedCostInCents": 1030
    },
    {
      "id": 1032009,
      "name": "dried red chili",
      "estimatedCostInCents": 1015
    },
    {
      "id": 15152,
      "name": "jumbo shrimp",
      "estimatedCostInCents": 804
    },
    {
      "id": 11294,
      "name": "vidalia onion",
      "estimatedCostInCents": 595
    },
    {
      "id": 11007,
      "name": "artichokes",
      "estimatedCostInCents": 203
    },
    {
      "id": 9150,
      "name": "lemon",
      "estimatedCostInCents": 766
    },
    {
      "id": 9156,
      "name": "lemon peel",
      "estimatedCostInCents": 630
    },
    {
      "id": 18069,
      "name": "gluten-free white sandwich bread",
      "estimatedCostInCents": 863
    },
    {
      "id": 1033,
      "name": "parmesan cheese",
      "estimatedCostInCents": 398
    },
    {
      "id": 2027,
      "name": "oregano",
      "estimatedCostInCents": 835
    },
    {
      "id": 1034053,
      "name": "extra virgin olive oil",
      "estimatedCostInCents": 305
    },
    {
      "id": 2004,
      "name": "bay leaves",
      "estimatedCostInCents": 785
    },
    {
      "id": 19336,
      "name": "powdered sugar",
      "estimatedCostInCents": 603
    },
    {
      "id": 11143,
      "name": "celery",
      "estimatedCostInCents": 840
    },
    {
      "id": 1129,
      "name": "hardcooked eggs",
      "estimatedCostInCents": 882
    },
    {
      "id": 4641,
      "name": "reduced fat mayo",
      "estimatedCostInCents": 697
    },
    {
      "id": 1011256,
      "name": "skim greek yogurt",
      "estimatedCostInCents": 263
    },
    {
      "id": 11944,
      "name": "hotdog relish",
      "estimatedCostInCents": 391
    },
    {
      "id": 10011282,
      "name": "red onion",
      "estimatedCostInCents": 638
    },
    {
      "id": 11353,
      "name": "idaho potato",
      "estimatedCostInCents": 742
    },
    {
      "id": 10211821,
      "name": "bell pepper",
      "estimatedCostInCents": 741
    },
    {
      "id": 10020048,
      "name": "brown minute rice",
      "estimatedCostInCents": 386
    },
    {
      "id": 93651,
      "name": "italian cheese blend",
      "estimatedCostInCents": 233
    },
    {
      "id": 7927,
      "name": "sweet italian turkey sausage",
      "estimatedCostInCents": 216
    },
    {
      "id": 11549,
      "name": "canned tomato sauce",
      "estimatedCostInCents": 622
    },
    {
      "id": 10120129,
      "name": "bread flour",
      "estimatedCostInCents": 114
    },
    {
      "id": 1053,
      "name": "cream",
      "estimatedCostInCents": 645
    },
    {
      "id": 4053,
      "name": "pure olive oil",
      "estimatedCostInCents": 705
    },
    {
      "id": 19912,
      "name": "agave syrup",
      "estimatedCostInCents": 642
    },
    {
      "id": 10020080,
      "name": "pastry flour",
      "estimatedCostInCents": 497
    },
    {
      "id": 10019334,
      "name": "dark brown sugar",
      "estimatedCostInCents": 501
    },
    {
      "id": 93814,
      "name": "lightly sweetened whipped cream",
      "estimatedCostInCents": 88
    },
    {
      "id": 11206,
      "name": "cucumber",
      "estimatedCostInCents": 262
    },
    {
      "id": 20035,
      "name": "quinoa",
      "estimatedCostInCents": 514
    },
    {
      "id": 11529,
      "name": "heirloom tomatoes",
      "estimatedCostInCents": 321
    },
    {
      "id": 14242,
      "name": "cranberry juice cocktail",
      "estimatedCostInCents": 335
    },
    {
      "id": 14130,
      "name": "cream soda",
      "estimatedCostInCents": 585
    },
    {
      "id": 19177,
      "name": "gelatine",
      "estimatedCostInCents": 1011
    },
    {
      "id": 93645,
      "name": "halloween sprinkles",
      "estimatedCostInCents": 293
    },
    {
      "id": 14051,
      "name": "grey goose vodka",
      "estimatedCostInCents": 373
    },
    {
      "id": 1054,
      "name": "whipped cream",
      "estimatedCostInCents": 689
    },
    {
      "id": 93828,
      "name": "marinated artichoke hearts",
      "estimatedCostInCents": 982
    },
    {
      "id": 11266,
      "name": "crimini mushrooms",
      "estimatedCostInCents": 150
    },
    {
      "id": 1017,
      "name": "cream cheese",
      "estimatedCostInCents": 955
    },
    {
      "id": 1019,
      "name": "feta",
      "estimatedCostInCents": 1003
    },
    {
      "id": 1022027,
      "name": "mixed italian herbs",
      "estimatedCostInCents": 253
    },
    {
      "id": 1082047,
      "name": "kosher salt",
      "estimatedCostInCents": 972
    },
    {
      "id": 10011457,
      "name": "spinach",
      "estimatedCostInCents": 336
    },
    {
      "id": 2044,
      "name": "basil",
      "estimatedCostInCents": 203
    },
    {
      "id": 7036,
      "name": "italian sausage links",
      "estimatedCostInCents": 1010
    },
    {
      "id": 10111549,
      "name": "marinara sauce",
      "estimatedCostInCents": 171
    },
    {
      "id": 1038,
      "name": "pecorino romano cheese",
      "estimatedCostInCents": 50
    },
    {
      "id": 11304,
      "name": "peas",
      "estimatedCostInCents": 768
    },
    {
      "id": 11677,
      "name": "shallots",
      "estimatedCostInCents": 696
    },
    {
      "id": 11020420,
      "name": "pasta shells",
      "estimatedCostInCents": 862
    },
    {
      "id": 1001026,
      "name": "shredded mozzarella",
      "estimatedCostInCents": 184
    },
    {
      "id": 93630,
      "name": "skim milk ricotta cheese",
      "estimatedCostInCents": 395
    },
    {
      "id": 14106,
      "name": "white wine",
      "estimatedCostInCents": 675
    },
    {
      "id": 11463,
      "name": "frozen spinach",
      "estimatedCostInCents": 830
    },
    {
      "id": 1025,
      "name": "pepperjack",
      "estimatedCostInCents": 212
    },
    {
      "id": 10014623,
      "name": "blackberry juice",
      "estimatedCostInCents": 256
    },
    {
      "id": 9302,
      "name": "raspberry",
      "estimatedCostInCents": 247
    },
    {
      "id": 9354,
      "name": "pineapple with juice",
      "estimatedCostInCents": 926
    },
    {
      "id": 9070,
      "name": "sweet cherries",
      "estimatedCostInCents": 184
    },
    {
      "id": 14181,
      "name": "chocolate syrup",
      "estimatedCostInCents": 530
    },
    {
      "id": 10018617,
      "name": "graham cracker crumbs",
      "estimatedCostInCents": 205
    },
    {
      "id": 12135,
      "name": "nuts",
      "estimatedCostInCents": 978
    },
    {
      "id": 9037,
      "name": "haas avocados",
      "estimatedCostInCents": 275
    },
    {
      "id": 16057,
      "name": "garbanzos",
      "estimatedCostInCents": 85
    },
    {
      "id": 2045,
      "name": "dillweed",
      "estimatedCostInCents": 162
    },
    {
      "id": 1256,
      "name": "greek yogurt",
      "estimatedCostInCents": 231
    },
    {
      "id": 9152,
      "name": "lemon juice",
      "estimatedCostInCents": 274
    },
    {
      "id": 11291,
      "name": "spring onions",
      "estimatedCostInCents": 55
    },
    {
      "id": 9236,
      "name": "peaches",
      "estimatedCostInCents": 109
    },
    {
      "id": 19095,
      "name": "icecream",
      "estimatedCostInCents": 447
    },
    {
      "id": 10862,
      "name": "cooked bacon strips",
      "estimatedCostInCents": 868
    },
    {
      "id": 5114,
      "name": "roasted chicken",
      "estimatedCostInCents": 708
    },
    {
      "id": 11333,
      "name": "green peppers",
      "estimatedCostInCents": 303
    },
    {
      "id": 1026,
      "name": "fresh mozzarella",
      "estimatedCostInCents": 290
    },
    {
      "id": 10211529,
      "name": "italian tomato",
      "estimatedCostInCents": 978
    },
    {
      "id": 1011009,
      "name": "white cheddar",
      "estimatedCostInCents": 709
    },
    {
      "estimatedCostInCents": 205
    },
    {
      "id": 98998,
      "name": "balsamic glaze",
      "estimatedCostInCents": 759
    },
    {
      "id": 8030,
      "name": "fruit loops",
      "estimatedCostInCents": 191
    },
    {
      "id": 19116,
      "name": "marshmallow",
      "estimatedCostInCents": 425
    },
    {
      "id": 16158,
      "name": "hummus",
      "estimatedCostInCents": 491
    },
    {
      "id": 2046,
      "name": "prepared yellow mustard",
      "estimatedCostInCents": 300
    },
    {
      "id": 1214,
      "name": "evaporated milk",
      "estimatedCostInCents": 95
    },
    {
      "id": 9214,
      "name": "orange juice concentrate",
      "estimatedCostInCents": 379
    },
    {
      "id": 9216,
      "name": "orange peel",
      "estimatedCostInCents": 882
    },
    {
      "id": 10123,
      "name": "bacon slices",
      "estimatedCostInCents": 817
    },
    {
      "id": 11052,
      "name": "string beans",
      "estimatedCostInCents": 502
    },
    {
      "id": 11959,
      "name": "baby arugula leaves",
      "estimatedCostInCents": 207
    },
    {
      "id": 1004,
      "name": "blue cheese",
      "estimatedCostInCents": 646
    },
    {
      "id": 9252,
      "name": "pear",
      "estimatedCostInCents": 467
    },
    {
      "id": 43408,
      "name": "pear juice",
      "estimatedCostInCents": 163
    },
    {
      "id": 2049,
      "name": "fresh thyme leaves",
      "estimatedCostInCents": 681
    },
    {
      "id": 12155,
      "name": "walnut halves",
      "estimatedCostInCents": 895
    },
    {
      "id": 10011693,
      "name": "canned tomato",
      "estimatedCostInCents": 171
    },
    {
      "id": 11124,
      "name": "carrots",
      "estimatedCostInCents": 136
    },
    {
      "id": 2012,
      "name": "coriander",
      "estimatedCostInCents": 52
    },
    {
      "id": 1002014,
      "name": "comino",
      "estimatedCostInCents": 547
    },
    {
      "id": 11913,
      "name": "frozen corn",
      "estimatedCostInCents": 558
    },
    {
      "id": 11477,
      "name": "zucchini squash",
      "estimatedCostInCents": 742
    },
    {
      "id": 10220445,
      "name": "steamed rice",
      "estimatedCostInCents": 1040
    },
    {
      "id": 2003,
      "name": "ground basil",
      "estimatedCostInCents": 198
    },
    {
      "id": 16018,
      "name": "canned black beans",
      "estimatedCostInCents": 356
    },
    {
      "id": 99223,
      "name": "canned chipotle chilies in adobo",
      "estimatedCostInCents": 299
    },
    {
      "id": 11165,
      "name": "cilantro",
      "estimatedCostInCents": 159
    },
    {
      "id": 10218364,
      "name": "flour tortilla",
      "estimatedCostInCents": 653
    },
    {
      "id": 10611282,
      "name": "white onions",
      "estimatedCostInCents": 449
    },
    {
      "id": 11457,
      "name": "baby spinach leaves",
      "estimatedCostInCents": 668
    },
    {
      "id": 11268,
      "name": "dried shiitake mushroom",
      "estimatedCostInCents": 806
    },
    {
      "id": 10020005,
      "name": "farro",
      "estimatedCostInCents": 286
    },
    {
      "id": 10511282,
      "name": "yellow onion",
      "estimatedCostInCents": 241
    },
    {
      "id": 2069,
      "name": "balsamic vinegar",
      "estimatedCostInCents": 118
    },
    {
      "id": 11250,
      "name": "boston bibb lettuce",
      "estimatedCostInCents": 61
    },
    {
      "id": 11156,
      "name": "fresh chive",
      "estimatedCostInCents": 728
    },
    {
      "id": 4025,
      "name": "mayonnaise",
      "estimatedCostInCents": 630
    },
    {
      "id": 11119,
      "name": "napa cabbage",
      "estimatedCostInCents": 1009
    },
    {
      "id": 11112,
      "name": "red cabbage",
      "estimatedCostInCents": 659
    },
    {
      "id": 98962,
      "name": "sweet chili sauce",
      "estimatedCostInCents": 1001
    },
    {
      "id": 2042,
      "name": "dried thyme",
      "estimatedCostInCents": 307
    },
    {
      "id": 1002020,
      "name": "granulated garlic",
      "estimatedCostInCents": 228
    },
    {
      "id": 10023572,
      "name": "ground chuck",
      "estimatedCostInCents": 600
    },
    {
      "id": 10011250,
      "name": "butterhead lettuce leaves",
      "estimatedCostInCents": 341
    },
    {
      "id": 5064,
      "name": "baked chicken breast",
      "estimatedCostInCents": 1020
    },
    {
      "id": 2015,
      "name": "curry seasoning",
      "estimatedCostInCents": 312
    },
    {
      "id": 1009159,
      "name": "lime peel",
      "estimatedCostInCents": 435
    },
    {
      "id": 98991,
      "name": "mint chutney",
      "estimatedCostInCents": 927
    },
    {
      "id": 9316,
      "name": "strawberry",
      "estimatedCostInCents": 292
    },
    {
      "id": 11090,
      "name": "broccoli crowns",
      "estimatedCostInCents": 256
    },
    {
      "id": 10011821,
      "name": "sweet orange pepper",
      "estimatedCostInCents": 968
    },
    {
      "id": 10218,
      "name": "pork tenderloin",
      "estimatedCostInCents": 845
    },
    {
      "id": 19157,
      "name": "mini m&m",
      "estimatedCostInCents": 552
    },
    {
      "id": 98871,
      "name": "hawaiian sweet rolls",
      "estimatedCostInCents": 535
    },
    {
      "id": 1055062,
      "name": "boneless skinless chicken breasts",
      "estimatedCostInCents": 897
    },
    {
      "id": 10019151,
      "name": "reese pieces",
      "estimatedCostInCents": 721
    },
    {
      "id": 1041009,
      "name": "cheese",
      "estimatedCostInCents": 850
    },
    {
      "id": 10018413,
      "name": "flatbread",
      "estimatedCostInCents": 326
    },
    {
      "id": 10111529,
      "name": "grape tomato",
      "estimatedCostInCents": 168
    },
    {
      "id": 9019,
      "name": "unsweetened apple sauce",
      "estimatedCostInCents": 154
    },
    {
      "id": 18079,
      "name": "dry breadcrumbs",
      "estimatedCostInCents": 167
    },
    {
      "id": 16069,
      "name": "legumes",
      "estimatedCostInCents": 903
    },
    {
      "id": 9079,
      "name": "dried cranberries",
      "estimatedCostInCents": 921
    },
    {
      "id": 11935,
      "name": "catsup",
      "estimatedCostInCents": 666
    },
    {
      "id": 12151,
      "name": "pistachio",
      "estimatedCostInCents": 813
    },
    {
      "id": 11821,
      "name": "red sweet peppers",
      "estimatedCostInCents": 1027
    },
    {
      "id": 6615,
      "name": "vegetable stock",
      "estimatedCostInCents": 613
    }
  ];

  // export default ingredientsData;
  module.exports = {
    ingredientsData 
  }



/***/ }),

/***/ "./src/data/recipes.js":
/*!*****************************!*\
  !*** ./src/data/recipes.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const recipeData = [
    {
      "id": 595736,
      "image": "https://spoonacular.com/recipeImages/595736-556x370.jpg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1.5,
            "unit": "c"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 19206,
          "quantity": {
            "amount": 3,
            "unit": "Tbsp"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1012047,
          "quantity": {
            "amount": 24,
            "unit": "servings"
          }
        },
        {
          "id": 10019903,
          "quantity": {
            "amount": 2,
            "unit": "c"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 0.5,
            "unit": "c"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, whisk together the dry ingredients (flour, pudding mix, soda and salt). Set aside.In a large mixing bowl of a stand mixer, cream butter for 30 seconds. Gradually add granulated sugar and brown sugar and cream until light and fluffy.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla and mix until combined.",
          "number": 2
        },
        {
          "instruction": "Add dry ingredients and mix on low just until incorporated. Stir in chocolate chips.Scoop the dough into 1,5 tablespoon size balls and place on a plate or sheet. Cover with saran wrap and chill at least 2 hours or overnight.When ready to bake, preheat oven to 350 degrees.",
          "number": 3
        },
        {
          "instruction": "Place the cookie dough balls into ungreased muffin pan. Sprinkle with sea salt.",
          "number": 4
        },
        {
          "instruction": "Bake for 9 to 10 minutes, or until you see the edges start to brown.",
          "number": 5
        },
        {
          "instruction": "Remove the pan from the oven and let sit for 10 minutes before removing onto a cooling rack.Top with ice cream and a drizzle of chocolate sauce.",
          "number": 6
        }
      ],
      "name": "Loaded Chocolate Chip Pudding Cookie Cups",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 678353,
      "image": "https://spoonacular.com/recipeImages/678353-556x370.jpg",
      "ingredients": [
        {
          "id": 1009016,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 9003,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 20027,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1002046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 1,
            "unit": "clove"
          }
        },
        {
          "id": 1012046,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 19911,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 16112,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 10010062,
          "quantity": {
            "amount": 24,
            "unit": "ounce"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 16124,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1016168,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Season the pork chops with salt and pepper and grill or pan fry over medium high heat until cooked, about 3-5 minutes per side. (If grilling, baste the chops in the maple dijon apple cider sauce as you grill.)Meanwhile, mix the remaining ingredients except the apple slices, bring to a simmer and cook until the sauce thickens, about 2-5 minutes.Grill or saute the apple slices until just tender but still crisp.Toss the pork chops and apple slices in the maple dijon apple cider sauce and enjoy!",
          "number": 1
        }
      ],
      "name": "Maple Dijon Apple Cider Grilled Pork Chops",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 412309,
      "image": "https://spoonacular.com/recipeImages/412309-556x370.jpeg",
      "ingredients": [
        {
          "id": 1002030,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 8,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 4582,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 2031,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 5100,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "id": 2009,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 1022020,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 6168,
          "quantity": {
            "amount": 8,
            "unit": "cups"
          }
        },
        {
          "id": 9176,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2026,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        },
        {
          "id": 1042047,
          "quantity": {
            "amount": 1.5,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1042047,
          "quantity": {
            "amount": 4,
            "unit": "teaspoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Mix the hot sauce, butter, mango habanero sauce, brown sugar, chili powder, garlic powder, onion powder, black pepper, cayenne pepper and seasoning salt in a bowl. Stir vigorously until completely combined.",
          "number": 1
        }
      ],
      "name": "Dirty Steve's Original Wing Sauce",
      "tags": [
        "sauce"
      ]
    },
    {
      "id": 741603,
      "image": "https://spoonacular.com/recipeImages/741603-556x370.jpeg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 18371,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 9040,
          "quantity": {
            "amount": 12,
            "unit": "servings"
          }
        },
        {
          "id": 20011,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 6,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1230,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 19296,
          "quantity": {
            "amount": 12,
            "unit": "servings"
          }
        },
        {
          "id": 16098,
          "quantity": {
            "amount": 12,
            "unit": "servings"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Watch how to make this recipe.",
          "number": 1
        },
        {
          "instruction": "In a large bowl, whisk together buttermilk, eggs, baking powder, sugar, salt and butter.",
          "number": 2
        },
        {
          "instruction": "In another large bowl mix together all-purpose flour and buckwheat flour.",
          "number": 3
        },
        {
          "instruction": "Slowly add flour into the wet ingredients mixing with a whisk.",
          "number": 4
        },
        {
          "instruction": "Mix until there are no lumps and the batter is smooth and velvety.",
          "number": 5
        },
        {
          "instruction": "In a large cast iron skillet or flat grill pan over medium-high heat, melt a tablespoon of butter. Ladle pancake batter onto skillet to desired size. Using the ladle, form pancake into circular shape. Cook on each side for 2 to 3 minutes or until golden brown. Set pancakes aside and keep warm. Repeat with remaining ingredients.",
          "number": 6
        },
        {
          "instruction": "Once completed, spread peanut butter on a pancake, layer it with sliced bananas and drizzle it with honey. Top the pancake with another pancake to form a sandwich. Repeat with remaining pancakes and serve with extra honey.",
          "number": 7
        }
      ],
      "name": "Elvis Pancakes",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 562334,
      "image": "https://spoonacular.com/recipeImages/562334-556x370.jpg",
      "ingredients": [
        {
          "id": 2048,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 18371,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "teaspoon"
          }
        },
        {
          "id": 20090,
          "quantity": {
            "amount": 1.125,
            "unit": "cup"
          }
        },
        {
          "id": 93784,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 4582,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1124,
          "quantity": {
            "amount": 3,
            "unit": "large"
          }
        },
        {
          "id": 93625,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 12220,
          "quantity": {
            "amount": 2,
            "unit": "Tablespoons"
          }
        },
        {
          "id": 10118375,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 19304,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 11413,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.75,
            "unit": "teaspoon"
          }
        },
        {
          "id": 93696,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "id": 93760,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 14412,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 93626,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Grease or spray oil a 9×5 inch loaf pan.Preheat oven to 170 – 200°F (lowest possible).",
          "number": 1
        },
        {
          "instruction": "Mix warm water with brown rice syrup, molasses, and yeast in a cup larger than 8 oz., as it may bubble over; set aside until foamy on the top, no more than 5 minutes.In the bowl of your mixer, beat the eggs at high speed in a large mixing bowl until large bubbles form, about 20 seconds.",
          "number": 2
        },
        {
          "instruction": "Whisk together the dry ingredients; set aside.",
          "number": 3
        },
        {
          "instruction": "Add the oil, vinegar and yeast mixture to the egg whites and blend on low for a few seconds.",
          "number": 4
        },
        {
          "instruction": "Add dry ingredients all at once and mix on low speed until all dry ingredients are moistened. Then beat on high for 1 minute.",
          "number": 5
        },
        {
          "instruction": "Add dough batter to prepared pan and distribute and smooth the top using a rubber spatula. You'll want to meet all sides of the pan. If you miss the corners that will still be okay. It will fill in upon rising. To even out top, drop a few drops of filtered water on top, and spread evenly with a rubber spatula, or dip spatula in water several times.",
          "number": 6
        },
        {
          "instruction": "Place the bread pan in the oven. Turn oven off. Allow the dough to rise until the center is about 1/2” over the top of the pan, about 22 minutes. It will rise more while the oven is heating and during baking.",
          "number": 7
        },
        {
          "instruction": "Remove pan from oven and preheat oven to 375°F.",
          "number": 8
        },
        {
          "instruction": "Place the pan on the center of the rack in the center of the oven and bake for about 45 minutes or more.",
          "number": 9
        },
        {
          "instruction": "Remove the loaf from the oven and immediately remove it from the pan (careful it will be hot), and set the loaf on a cooling rack to cool. If you do not remove it right away the steam will make the crust soggy.Slice off the two ends to allow the steam to escape, or it will begin to sink in on the sides and bottom.Once cooled, it will shrink a little bit. Slice it with an electric slicer, electric knife or serrated knife. You'll get about 13-16, depending upon how thick you slice it.",
          "number": 10
        }
      ],
      "name": "Mock Udi’s Gluten Free Whole Grain Bread",
      "tags": []
    },
    {
      "id": 507921,
      "image": "https://spoonacular.com/recipeImages/507921-556x370.jpg",
      "ingredients": [
        {
          "id": 18371,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19350,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 1124,
          "quantity": {
            "amount": 2,
            "unit": "large"
          }
        },
        {
          "id": 20081,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 9099,
          "quantity": {
            "amount": 15,
            "unit": "oz"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 14412,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "To make the Cupcakes: Preheat oven to 350 degrees. Line 12 cupcake tins with paper holders.",
          "number": 1
        },
        {
          "instruction": "Whisk together dry Fruit Cocktail Cupcakes ingredients.",
          "number": 2
        },
        {
          "instruction": "Add in wet Fruit Cocktail Cupcakes ingredients and stir with a rubber spatula until thoroughly combined. Fill cupcake tins evenly, and bake for 20 minutes or until thin knife inserted in center comes out clean.",
          "number": 3
        }
      ],
      "name": "Ambrosia Cupcakes",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 721146,
      "image": "https://spoonacular.com/recipeImages/721146-556x370.jpg",
      "ingredients": [
        {
          "id": 12061,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 6,
            "unit": "tablespoons"
          }
        },
        {
          "id": 12104,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 12115,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 4047,
          "quantity": {
            "amount": 6,
            "unit": "tablespoons"
          }
        },
        {
          "id": 10019071,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 8212,
          "quantity": {
            "amount": 1,
            "unit": "Handful"
          }
        },
        {
          "id": 19911,
          "quantity": {
            "amount": 5,
            "unit": "tablespoons"
          }
        },
        {
          "id": 8121,
          "quantity": {
            "amount": 3,
            "unit": "cups"
          }
        },
        {
          "id": 12142,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat the oven to 325 degrees F.Coarsely chop the almonds and pecans.",
          "number": 1
        },
        {
          "instruction": "Combine the oats, almonds, pecans, and salt in a bowl. Toss to combine.In a medium-sized bowl, combine the coconut oil (measure exactly when it's melted and not in the hardened state), and 1/2 cup chocolate chips.Microwave in bursts of 15 seconds stirring in between each burst for 15 seconds until completely melted.Stir in the brown sugar (measured lightly packed), honey or maple syrup, and vanilla extract.",
          "number": 2
        },
        {
          "instruction": "Pour the chocolate wet mixture into the oat and nut mixture and stir until well combined.",
          "number": 3
        },
        {
          "instruction": "Spread the granola evenly onto a parchment lined baking sheet.",
          "number": 4
        },
        {
          "instruction": "Bake for 20-30 minutes (depending on the heat of your oven) making sure to flip and stir the granola around every 6-8 minutes.",
          "number": 5
        },
        {
          "instruction": "Remove and allow the granola to harden and set up. (It may be soft and not very \"granola-like\", but it hardens as it dries out so be careful to not over-cook it). Mine generally takes about 21 minutes to be fully baked.Allow the granola to sit at room temperature for a few hours to harden and set up.Once the granola is hardened, stir in the remaining 1/2 cup chocolate chips and the toasted flaked coconut.To make a yogurt bowl: fill a bowl with the coconut cream yogurt, add a swirl of nut butter, add some fruit such as a banana, add the granola, and finish with chia seeds. Enjoy immediately.",
          "number": 6
        }
      ],
      "name": "Creamy Coconut Yogurt Bowl with Chocolate Granola (Video)",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 541288,
      "image": "https://spoonacular.com/recipeImages/541288-556x370.jpg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 160,
            "unit": "g"
          }
        },
        {
          "id": 93740,
          "quantity": {
            "amount": 40,
            "unit": "g"
          }
        },
        {
          "id": 1125,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 12023,
          "quantity": {
            "amount": 40,
            "unit": "g"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 80,
            "unit": "g"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 1,
            "unit": "stick"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Cut the butter into small cubes and keep them refrigerated until ready to use (I cut on parchment paper and wrap up the butter for easy transfer.).In the food processor, combine the flour, almond meal, sugar, and salt. If you don’t have a food processor, you can simply use a bowl to mix all the ingredients.If you want your sesame seeds to be fine texture, add them now. If you prefer to keep the original shape of sesame seeds, add them with egg yolk later on.Take out the butter from the refrigerator and mix together. If you use a regular bowl to mix, use a dough/pastry blender to combine the butter into the dry ingredients.Lastly add egg yolk.If the food processor is small (like mine) and it doesn’t look like it’s mixed completely, take it out and mix well with a silicone spatula.Form the dough into a ball and cut in half.",
          "number": 1
        },
        {
          "instruction": "Roll it to a log approximately 2” across. For me it’s easier to work when the dough is wrapped in plastic wrap. While rolling, unwrap some parts of plastic wrap then roll again. Form a nice shape. I wasn't paying attention so my log is flat on one side (see step 11)!Wrap the logs tightly in plastic wrap and refrigerate until firm, about 1 hour.Preheat the oven to 350° F (175° C).",
          "number": 2
        },
        {
          "instruction": "Remove the dough from plastic wrap and cut into discs about ¼ inch thick (if you prefer thicker cookies, cut into discs about ½ inch and you get 20 cookies total).",
          "number": 3
        },
        {
          "instruction": "Place them on two baking sheets lined with parchment paper.",
          "number": 4
        },
        {
          "instruction": "Bake for about 15 minutes, or until lightly browned around the edges.",
          "number": 5
        },
        {
          "instruction": "Remove from the oven and allow to cool on the baking sheet for about 10 minutes. Then transfer to a wire rack to cool completely. Store cookies in an airtight container. Cookies will last for a day or two.",
          "number": 6
        }
      ],
      "name": "Sesame Cookies",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 779583,
      "image": "https://spoonacular.com/recipeImages/779583-556x370.jpg",
      "ingredients": [
        {
          "id": 19334,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 3,
            "unit": "tablespoons"
          }
        },
        {
          "id": 4582,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 4582,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1015062,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "id": 10011109,
          "quantity": {
            "amount": 4,
            "unit": "cups"
          }
        },
        {
          "id": 10116098,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 2064,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 2021,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 9160,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 9266,
          "quantity": {
            "amount": 1.25,
            "unit": "cups"
          }
        },
        {
          "id": 16124,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1016168,
          "quantity": {
            "amount": 0.5,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1016168,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Prepare the chicken: In a large bowl, whisk together the brown sugar, ginger, oil, soy sauce, Sriracha and peanut butter.",
          "number": 1
        },
        {
          "instruction": "Add the chicken and toss to coat.",
          "number": 2
        },
        {
          "instruction": "Let marinate at room temperature for 15 minutes or cover and refrigerate for up to 6 hours. Preheat the oven broiler with a rack set 4-inches from the heat source. Line an 18x13-inch rimmed sheet pan with foil and spray with nonstick spray.",
          "number": 3
        },
        {
          "instruction": "Remove the chicken from the marinade, discarding excess marinade, and place on prepared pan, covering two-thirds of the pan and spacing evenly. Broil for 6 minutes.",
          "number": 4
        },
        {
          "instruction": "Remove the pan from the oven and spread pineapple on the remaining space on the pan. Sprinkle the pineapple with 1 tablespoon brown sugar. Broil for 3 to 5 minutes or until chicken is browned and no longer pink inside.",
          "number": 5
        },
        {
          "instruction": "Transfer the chicken to serving plates.",
          "number": 6
        },
        {
          "instruction": "Place the coleslaw mix in a medium bowl.",
          "number": 7
        },
        {
          "instruction": "Add the broiled pineapple, lime juice, oil, soy sauce and Sriracha; toss to coat. Divide among the plates with the chicken and sprinkle the slaw with mint or basil.",
          "number": 8
        }
      ],
      "name": "Thai Chicken Tenders with Broiled Pineapple Slaw",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 550940,
      "image": "https://spoonacular.com/recipeImages/550940-556x370.jpg",
      "ingredients": [
        {
          "id": 11135,
          "quantity": {
            "amount": 1,
            "unit": "large head"
          }
        },
        {
          "id": 6172,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1002046,
          "quantity": {
            "amount": 1,
            "unit": "tbsp"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 8,
            "unit": ""
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "cloves"
          }
        },
        {
          "id": 93632,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 12120,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 93690,
          "quantity": {
            "amount": 2,
            "unit": "tbsp"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 1,
            "unit": "small"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 10010123,
          "quantity": {
            "amount": 5,
            "unit": "slices"
          }
        },
        {
          "id": 11096,
          "quantity": {
            "amount": 200,
            "unit": "g"
          }
        },
        {
          "id": 1012047,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat the oven to 375FCook and peel the hard boiled eggs according to your favourite method.",
          "number": 1
        },
        {
          "instruction": "Add onion, garlic, salt and pepper to a medium saucepan. Cook over medium heat for one or two minutes, until fragrant and slightly softened.Throw the cauliflower florets in and continue cooking for a minute or two.",
          "number": 2
        },
        {
          "instruction": "Add chicken stock, cover and bring to the boil; lower heat and continue cooking until the cauliflower is tender, about 5-7 minutes.Ladle the cauliflower mixture into your blender; add ghee, Dijon mustard and nutritional yeast and process on high speed until super smooth and silky in consistency. Set aside. Steam the rapini for 30 seconds to a minute, until slightly softened and bright green. In a small skillet, dry roast the hazelnuts over medium heat until they become fragrant and take a nice golden coloration. Slice the hard boiled eggs and add them to a large mixing bowl, followed by “Bechamel” sauce, rapini and three quarters of the hazelnuts.",
          "number": 3
        },
        {
          "instruction": "Mix very delicately until well combined and transfer to an oven safe dish. Tear the prosciutto into smaller pieces and arrange them on top of the dish. Sprinkle with the rest of the hazelnuts. Cover with foil and place in the oven for 20 minutes; after that time, remove the foil and set the oven to broil for a 2-3 minutes or until the prosciutto becomes nice and crispy and takes a nice golden coloration. You could also make this ahead of time and place it in the fridge after you have covered it with foil (although you might want to let it cool a bit beforehand). In this case, you’ll want to increase oven time to about 45 minutes, at 375F. This also reheats extremely well in the microwave and will easily keep for 4-5 days in the refrigerator.",
          "number": 4
        }
      ],
      "name": "Egg and Rapini Casserole",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 583502,
      "image": "https://spoonacular.com/recipeImages/583502-556x370.jpg",
      "ingredients": [
        {
          "id": 6150,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 2,
            "unit": "tbsp"
          }
        },
        {
          "id": 6194,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 3,
            "unit": "large"
          }
        },
        {
          "id": 93627,
          "quantity": {
            "amount": 3,
            "unit": "tbsp"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 2028,
          "quantity": {
            "amount": 8,
            "unit": "servings"
          }
        },
        {
          "id": 10072,
          "quantity": {
            "amount": 6,
            "unit": "lbs"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 8,
            "unit": "servings"
          }
        },
        {
          "id": 6971,
          "quantity": {
            "amount": 2,
            "unit": "tbsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Combine 1 cup chicken broth, 1 cup BBQ sauce, 3 tbsp liquid smoke, 2 tbsp Worcestershire sauce, 3 pressed garlic cloves, 2 tbsp brown sugar and stir to combine.Generously sprinkle the pork roast with salt, pepper and paprika.Rub the seasoning into the pork shoulder.Chop 1 large onion and place it into the bottom of the slow cooker.",
          "number": 1
        },
        {
          "instruction": "Place the pork roast over the onion and pour the marinade over the pork.Cover and set on low for 8 hours.",
          "number": 2
        },
        {
          "instruction": "Let it cool down so you don't burn your fingers while shredding.",
          "number": 3
        },
        {
          "instruction": "Remove the meat to a large bowl and shred. This meat is fall-apart tender! The marinade enhances the natural flavors of the pork. When you're done shredding the pork, pour as much of the remaining sauce over the pork as you like.",
          "number": 4
        },
        {
          "instruction": "Serve with more Baby Rays BBQ Sauce... and pickles",
          "number": 5
        }
      ],
      "name": "Pulled Pork",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 543687,
      "image": "https://spoonacular.com/recipeImages/543687-556x370.jpg",
      "ingredients": [
        {
          "id": 93607,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 9040,
          "quantity": {
            "amount": 1,
            "unit": "small"
          }
        },
        {
          "id": 18942,
          "quantity": {
            "amount": 1,
            "unit": "Tbsp"
          }
        },
        {
          "id": 1012010,
          "quantity": {
            "amount": 0.25,
            "unit": "tsp"
          }
        },
        {
          "id": 2021,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 2025,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 43274,
          "quantity": {
            "amount": 1,
            "unit": "oz"
          }
        },
        {
          "id": 8120,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 11424,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Add all ingredients to a blender (except graham crackers if using). Cover and blend until well pureed then serve topped with crushed graham crackers if desired.*The banana is mostly what gives this smoothie it's sweetness, so I recommend using one that is speckled (not mushy though).Recipe Source: Cooking Classy",
          "number": 1
        }
      ],
      "name": "Pumpkin Cheesecake Breakfast Smoothie",
      "tags": [
        "morning meal",
        "brunch",
        "breakfast"
      ]
    },
    {
      "id": 516904,
      "image": "https://spoonacular.com/recipeImages/516904-556x370.jpg",
      "ingredients": [
        {
          "id": 9016,
          "quantity": {
            "amount": 3,
            "unit": "Tablespoons"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 1,
            "unit": "Tablespoon"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "Tablespoons"
          }
        },
        {
          "id": 18047,
          "quantity": {
            "amount": 16,
            "unit": "ounce"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 10,
            "unit": "large"
          }
        },
        {
          "id": 1089003,
          "quantity": {
            "amount": 5,
            "unit": "medium"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 2,
            "unit": "Tablespoons"
          }
        },
        {
          "id": 1012010,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 3,
            "unit": "cups"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Prepare apple filling: Melt butter over medium heat in 12- inch skillet.",
          "number": 1
        },
        {
          "instruction": "Add apples and sugar; cook 20 minutes, stirring occasionally. Stir in apple juice; cook 1 more minute.",
          "number": 2
        },
        {
          "instruction": "Grease 13 x 9-inch baking dish. Arrange 1/2 of bread slices, overlapping slightly.",
          "number": 3
        },
        {
          "instruction": "In a medium bowl, whisk milk, salt, cinnamon and eggs.",
          "number": 4
        },
        {
          "instruction": "Pour 1/2 of egg mixture over bread. Set aside 1/4 of apple filling; cover and refrigerate to spoon on after baking.",
          "number": 5
        },
        {
          "instruction": "Spread remaining apple filling over bread in an even layer. Arrange remaining bread slices over apple layer.",
          "number": 6
        },
        {
          "instruction": "Pour remaining egg mixture over top bread layer. Press bread down with spatula so it absorbs the maximum amount of egg mixture. Dot bread with butter and sprinkle with sugar. Cover and refrigerate overnight.",
          "number": 7
        },
        {
          "instruction": "To bake: Preheat oven to 325°F. Uncover dish and bake 50 to 55 minutes or until knife inserted in center comes out clean. Reheat remaining apple mixture in microwave. Spoon over top to serve.",
          "number": 8
        }
      ],
      "name": "Cinnamon Raisin Overnight French Toast w/ Apple Filling",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 988243,
      "image": "https://spoonacular.com/recipeImages/988243-556x370.jpg",
      "ingredients": [
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 4,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11297,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 6,
            "unit": "cloves"
          }
        },
        {
          "id": 1032009,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 15152,
          "quantity": {
            "amount": 2,
            "unit": "pounds"
          }
        },
        {
          "id": 11294,
          "quantity": {
            "amount": 0.25,
            "unit": "medium"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Melt butter to a large skillet over medium heat. As the butter melts, it will begin to foam as it transitions from a bright, lemon-yellow color to golden and then finally to a nutty-brown color. As the butter just begins to turn nutty-brown from golden, reduce your heat to medium-low and carefully toss in your garlic and onion. Cook until the onion just begins to become tender and then add in your shrimp. Stirring frequently, cook until the shrimp turn pink and lose their translucence.",
          "number": 1
        },
        {
          "instruction": "Stir in salt, black pepper, red pepper flakes and fresh parsley. Toss shrimp to make sure all are well-coated.",
          "number": 2
        },
        {
          "instruction": "Remove from heat and serve.",
          "number": 3
        }
      ],
      "name": "Brown Butter Garlic Shrimp",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 724018,
      "image": "https://spoonacular.com/recipeImages/724018-556x370.jpg",
      "ingredients": [
        {
          "id": 11007,
          "quantity": {
            "amount": 2,
            "unit": "large"
          }
        },
        {
          "id": 9150,
          "quantity": {
            "amount": 4,
            "unit": "slices"
          }
        },
        {
          "id": 9156,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 18069,
          "quantity": {
            "amount": 6,
            "unit": "slices"
          }
        },
        {
          "id": 1033,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 11297,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 6,
            "unit": "cloves"
          }
        },
        {
          "id": 2027,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1034053,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.125,
            "unit": "teaspoon"
          }
        },
        {
          "id": 2004,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 9150,
          "quantity": {
            "amount": 2,
            "unit": "slices"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "cloves"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Cut off the crust from 6 slices of bread. Chop the centers and put into a food processor. Pulse until you have coarse breadcrumbs. You should have about 3 cups.",
          "number": 1
        },
        {
          "instruction": "Make the stuffing: In a large bowl, stir together the breadcrumbs, lemon zest, Parmesan cheese, minced garlic, chopped parsley, minced oregano, 1/2 cup olive oil, and black pepper. Set aside.",
          "number": 2
        }
      ],
      "name": "Baked Stuffed Artichokes",
      "tags": [
        "side dish",
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 623855,
      "image": "https://spoonacular.com/recipeImages/623855-556x370.jpg",
      "ingredients": [
        {
          "id": 18372,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 10116098,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        },
        {
          "id": 10116098,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 20081,
          "quantity": {
            "amount": 1.25,
            "unit": "cup"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 19336,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 10019903,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "Tbsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat oven to 350FLine a baking sheet with parchment, set aside.In bowl of stand mixer cream butter and peanut butter together until smooth.",
          "number": 1
        },
        {
          "instruction": "Add both sugars and beat for 2 minutes.",
          "number": 2
        },
        {
          "instruction": "Add in egg, vanilla, baking soda and salt.",
          "number": 3
        },
        {
          "instruction": "Mix until combined.Turn mixer to low and add in flour.Portion out dough by in tablespoon amounts.",
          "number": 4
        },
        {
          "instruction": "Roll into a ball and then flatten to approximately  inch thick.",
          "number": 5
        },
        {
          "instruction": "Place on baking sheet about 2 inches apart.",
          "number": 6
        },
        {
          "instruction": "Bake for 8-9 minutes until golden at he edges.",
          "number": 7
        },
        {
          "instruction": "Remove from oven and transfer cookies to a wire rack to cool completely.In microwave safe bowl combine chocolate chips, peanut butter and butter.",
          "number": 8
        },
        {
          "instruction": "Heat on high for 1 minute and then stir until smooth.",
          "number": 9
        },
        {
          "instruction": "Place powdered sugar in bowl.Dip each cookie in chocolate and using a fork remove cookie, tapping off excess chocolate. You don't need a lot of chocolate coating on the cookies.Immediately dip the cookie into the powdered sugar and toss to coat completely.",
          "number": 10
        },
        {
          "instruction": "Place back on cooling rack to until chocolate is set. Repeat for all cookies.",
          "number": 11
        }
      ],
      "name": "Puppy Chow Cookies",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 793584,
      "image": "https://spoonacular.com/recipeImages/793584-556x370.jpg",
      "ingredients": [
        {
          "id": 11143,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 1002046,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1129,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 4641,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1011256,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2026,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 11297,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 11944,
          "quantity": {
            "amount": 3,
            "unit": "tablespoons"
          }
        },
        {
          "id": 10011282,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11353,
          "quantity": {
            "amount": 2,
            "unit": "pounds"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.75,
            "unit": "teaspoons"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Place potatoes in a large saucepan and add water to cover by 1 inch. Bring to boil over medium-high heat.",
          "number": 1
        },
        {
          "instruction": "Add 1-tablespoon salt, reduce heat to medium, and simmer. Stir a few times, until potatoes re-fork tender, about 8 minutes.",
          "number": 2
        },
        {
          "instruction": "Drain potatoes and transfer to a large bowl.In a medium sized bowl whisk together yogurt, mayonnaise, mustard, salt, pepper and onion powder.",
          "number": 3
        },
        {
          "instruction": "Add to potatoes and gently stir to combine.",
          "number": 4
        },
        {
          "instruction": "Add celery, pickles, red onions, parsley and chopped eggs to potato mixture, stir to combine.",
          "number": 5
        },
        {
          "instruction": "Add more salt and pepper to taste.Cover and refrigerate until chilled, about 1 hour before serving. Potato salad can be made up to one day ahead.",
          "number": 6
        }
      ],
      "name": "Easy Creamy Potato Salad with Yogurt",
      "tags": [
        "salad"
      ]
    },
    {
      "id": 607805,
      "image": "https://spoonacular.com/recipeImages/607805-556x370.jpg",
      "ingredients": [
        {
          "id": 10211821,
          "quantity": {
            "amount": 3,
            "unit": "large"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "cloves"
          }
        },
        {
          "id": 10020048,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 93651,
          "quantity": {
            "amount": 1,
            "unit": "cups"
          }
        },
        {
          "id": 7927,
          "quantity": {
            "amount": 0.5,
            "unit": "lb"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 1,
            "unit": "small"
          }
        },
        {
          "id": 2027,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 1033,
          "quantity": {
            "amount": 2,
            "unit": "Tbsp"
          }
        },
        {
          "id": 11549,
          "quantity": {
            "amount": 14,
            "unit": "oz"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Cut tops off peppers; remove and discard seeds.",
          "number": 1
        },
        {
          "instruction": "Chop tops; place in medium bowl.",
          "number": 2
        },
        {
          "instruction": "Add sausage, onions, rice, Parmesan, garlic, oregano, 1-1/2 cups pizza sauce and 1-1/4 cups shredded cheese; mix lightly.  Spoon into pepper shells.",
          "number": 3
        },
        {
          "instruction": "Stand peppers in slow cooker; top with remaining sauce and shredded cheese.  Cover with lid.",
          "number": 4
        },
        {
          "instruction": "Cook on LOW 6 to 8 hours (or on HIGH 2-1/2 to 3-1/2 hours).",
          "number": 5
        }
      ],
      "name": "Slow-Cooker Italian-Stuffed Peppers",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 763858,
      "image": "https://spoonacular.com/recipeImages/763858-556x370.jpg",
      "ingredients": [
        {
          "id": 10120129,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 20081,
          "quantity": {
            "amount": 3.5,
            "unit": "cups"
          }
        },
        {
          "id": 1053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 19296,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        },
        {
          "id": 10118375,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 10118375,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 16,
            "unit": "servings"
          }
        },
        {
          "id": 8120,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 8120,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1012047,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 14412,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Whisk flours together with  teaspoon instant yeast in a large mixing bowl with a tight-fitting lid (like this one), and then stir in the oats. Stir the water and milk together, then pour the liquids into the dry ingredients, stirring to create a loose, shaggy dough. Cover the mixing bowl tightly, and allow the dough to rest at room temperature at least eight and up to twelve hours.Dump the dough into the basin of a stand mixer (like this one), and then beat in the butter, honey, salt, and the remaining 2 tablespoons yeast. Continue beating all the ingredients together until they form a smooth dough, and then turn it out on a well-floured surface. Knead by hand for ten to fifteen minutes, incorporating about 1 cups additional flour, until the dough becomes smooth and elastic.Oil a large mixing bowl, and transfer the dough to the bowl. Cover tightly, and allow the dough to rise until doubled in volume.",
          "number": 1
        },
        {
          "instruction": "Transfer the dough to a well-floured surface, and split into two portions of approximately equal weight. Butter and flour two 4-inch by 8-inch loaf pans.Working one at a time, roll each lump of dough out into a large rectangle, about 8 by 16 inches. Working from the short end, roll the dough into a loaf, pinching the seam at the bottom of the loaf tightly to seal it.",
          "number": 2
        },
        {
          "instruction": "Place the dough, seam-side down, in a prepared loaf pan. Cover lightly with a kitchen towel, and allow it to rise until doubled in size, about two hours.While the dough rises, heat the oven to 400 F.Using a pastry brush, gently brush the top of the dough with cream, and then scatter one tablespoon rolled oats over each loaf.",
          "number": 3
        },
        {
          "instruction": "Transfer the loaves to the oven, and bake 5 minutes at 400 F. Then reduce the temperature to 350 F and continue baking until the crust is a dark brown and the bread reaches an internal temperature of 200 F about 45 minutes.",
          "number": 4
        },
        {
          "instruction": "Remove from the oven and allow the loaves to cool in their pans for five minutes, then turn out onto a wire rack, allowing the bread to cool completely before slicing.",
          "number": 5
        }
      ],
      "name": "Whole Wheat Milk and Honey Sandwich Bread",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 618332,
      "image": "https://spoonacular.com/recipeImages/618332-556x370.jpg",
      "ingredients": [
        {
          "id": 19912,
          "quantity": {
            "amount": 168,
            "unit": "g"
          }
        },
        {
          "id": 18371,
          "quantity": {
            "amount": 2,
            "unit": "g"
          }
        },
        {
          "id": 20027,
          "quantity": {
            "amount": 1,
            "unit": "g"
          }
        },
        {
          "id": 10019071,
          "quantity": {
            "amount": 42,
            "unit": "g"
          }
        },
        {
          "id": 1012010,
          "quantity": {
            "amount": 3,
            "unit": "g"
          }
        },
        {
          "id": 11424,
          "quantity": {
            "amount": 183,
            "unit": "g"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "g"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 28,
            "unit": "g"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 5,
            "unit": "mL"
          }
        },
        {
          "id": 10020080,
          "quantity": {
            "amount": 120,
            "unit": "g"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a medium bowl, whisk together the flour, baking powder, cornstarch, cinnamon, and salt. In a separate bowl, whisk together the butter, pumpkin, and vanilla. Stir in the agave.",
          "number": 1
        },
        {
          "instruction": "Add the flour mixture, stirring just until incorporated. Fold in 2 tablespoons of chocolate chips. Chill the cookie dough for at least 30 minutes. (If chilling longer than 1 hour, cover the top of the bowl with foil.)Preheat the oven to 325F, and line a baking sheet with parchment paper or a silicone baking mat. Drop the cookie dough into 12 rounded scoops onto the prepared baking sheet. Flatten slightly, and press the remaining chocolate chips into the tops of the cookie dough.",
          "number": 2
        },
        {
          "instruction": "Bake at 325F for 15-17 minutes. Cool on the baking sheet for at least 10 minutes before turning out onto a wire rack.",
          "number": 3
        }
      ],
      "name": "The Ultimate Healthy Soft & Chewy Pumpkin Chocolate Chip Cookies",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 231951,
      "image": "https://spoonacular.com/recipeImages/231951-556x370.jpg",
      "ingredients": [
        {
          "id": 20027,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 10019334,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 1053,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 93814,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Whisk together brown sugar, cornstarch, and 1/4 teaspoon salt in a heavy medium saucepan, then whisk in milk and cream. Bring to a boil over medium heat, whisking frequently, then boil, whisking, 1 minute.",
          "number": 1
        },
        {
          "instruction": "Remove from heat and whisk in butter and vanilla.",
          "number": 2
        },
        {
          "instruction": "Pour into a bowl, then cover surface with buttered wax paper and chill until cold, at least 1 1/2 hours.",
          "number": 3
        }
      ],
      "name": "Butterscotch Pudding",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 880108,
      "image": "https://spoonacular.com/recipeImages/880108-556x370.jpg",
      "ingredients": [
        {
          "id": 11206,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 11297,
          "quantity": {
            "amount": 1,
            "unit": "bunch"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 4,
            "unit": "cloves"
          }
        },
        {
          "id": 9150,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 20035,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 11529,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Rinse the quinoa under cool running water.",
          "number": 1
        },
        {
          "instruction": "Place the rinsed quinoa in a pot with 1.75 cups of water. Put a lid on top, bring it to a boil, then reduce the heat to low and let simmer for 15 minutes. After 15 minutes, turn off the heat. Allow the quinoa to cool before making the salad or else the heat will wilt the parsley and vegetables. To cool it faster, spread it out on a baking sheet and place in the refrigerator for 30 minutes.While the quinoa is cooling, prepare the rest of the salad.",
          "number": 2
        },
        {
          "instruction": "Cut the tomato and cucumber into a small dice. Rinse the parsley well to remove sand and grit, then chop well.",
          "number": 3
        },
        {
          "instruction": "Add the cucumber, tomato, and parsley to a bowl.To make the dressing, squeeze the juice from the lemon into a bowl (about  cup). Mince the garlic and add to the lemon juice along with the olive oil and salt.Once the quinoa is cooled, combine it with the chopped vegetables and the lemon dressing. Stir well and then serve!",
          "number": 4
        }
      ],
      "name": "quinoa tabbouleh",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 602311,
      "image": "https://spoonacular.com/recipeImages/602311-556x370.jpg",
      "ingredients": [
        {
          "id": 14242,
          "quantity": {
            "amount": 0.6666666666666666,
            "unit": "cup"
          }
        },
        {
          "id": 14130,
          "quantity": {
            "amount": 0.6666666666666666,
            "unit": "cup"
          }
        },
        {
          "id": 19177,
          "quantity": {
            "amount": 2,
            "unit": "envelopes"
          }
        },
        {
          "id": 1053,
          "quantity": {
            "amount": 1,
            "unit": "tbsp"
          }
        },
        {
          "id": 93645,
          "quantity": {
            "amount": 30,
            "unit": "servings"
          }
        },
        {
          "id": 14051,
          "quantity": {
            "amount": 0.6666666666666666,
            "unit": "cup"
          }
        },
        {
          "id": 1054,
          "quantity": {
            "amount": 30,
            "unit": "servings"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Lightly spray the mold with non-stick spray and wipe excess off with a paper towel. Don’t overdo it or the residue will affect the taste of the jello.",
          "number": 1
        },
        {
          "instruction": "Pour the soda, juice, and cream into a medium saucepan and sprinkle the gelatin on top. Allow the gelatin to soak for 2-3 minutes, then begin to heat on low, stirring constantly until gelatin is fully dissolved (about 5 minutes).",
          "number": 2
        },
        {
          "instruction": "Remove saucepan from heat and add vodka and food coloring.",
          "number": 3
        },
        {
          "instruction": "Pour into molds and chill for several hours, or until set.",
          "number": 4
        },
        {
          "instruction": "Remove from mold, top with whipped cream, and enjoy responsibly!*The original recipe suggests 2-3 envelopes, depending on how long your jello shots will be left out (more gelatin for more time). I opted for 3 because we were traveling an hour to get to the party, but I found them to be a little too firm , so I suggest you stick with 2 and plan accordingly for the best results!",
          "number": 5
        }
      ],
      "name": "Birthday Cake Jello Shots",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 670408,
      "image": "https://spoonacular.com/recipeImages/670408-556x370.jpg",
      "ingredients": [
        {
          "id": 93828,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 11266,
          "quantity": {
            "amount": 16,
            "unit": "ounces"
          }
        },
        {
          "id": 1017,
          "quantity": {
            "amount": 4,
            "unit": "ounces"
          }
        },
        {
          "id": 1019,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 1022020,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1022027,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1082047,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1082047,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1033,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1032009,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 10011457,
          "quantity": {
            "amount": 8,
            "unit": "ounces"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat oven to 350 degrees F. First, remove the mushroom stems by pushing each one toward you, then away from you. It will pop right out. (Save them to add to another recipe.) Swish and rub the mushroom tops in a large bowl of cold water to get them clean. Then, lay them open side down on a kitchen towel to dry.While the mushrooms dry, mix together the cream cheese, spinach, artichoke hearts, parmesan, garlic powder, 1/2 tsp. kosher salt, and red pepper flakes.In a small bowl, stir together olive oil, 1/4 tsp. salt, and Italian seasoning. Use a basting brush or your fingers to lightly rub the outside of the mushrooms with the oil mixture.",
          "number": 1
        },
        {
          "instruction": "Place the mushrooms open side up on a baking sheet. Use a small disher or spoon to place a heaping scoop of dip mixture into each mushroom, pressing it down to make sure it fills the opening. Press a small amount of feta cheese on top of each stuffed mushroom.",
          "number": 2
        },
        {
          "instruction": "Bake in preheated oven for 20-25 minutes until filling is hot and bubbly and feta is starting to brown. Mushrooms will drain some brown liquid during cooking, so drain on paper towels before serving if you don't want that liquid on your serving plate. These taste just as good even after they have cooled down!",
          "number": 3
        }
      ],
      "name": "Artichoke Spinach Dip Stuffed Mushrooms",
      "tags": [
        "condiment",
        "dip",
        "spread"
      ]
    },
    {
      "id": 325208,
      "image": "https://spoonacular.com/recipeImages/325208-556x370.jpeg",
      "ingredients": [
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 2044,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "cloves"
          }
        },
        {
          "id": 1053,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 7036,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "id": 1082047,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 10111549,
          "quantity": {
            "amount": 26,
            "unit": "ounce"
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1038,
          "quantity": {
            "amount": 3,
            "unit": "cups"
          }
        },
        {
          "id": 11304,
          "quantity": {
            "amount": 4,
            "unit": "ounces"
          }
        },
        {
          "id": 11677,
          "quantity": {
            "amount": 2,
            "unit": "small"
          }
        },
        {
          "id": 11020420,
          "quantity": {
            "amount": 12,
            "unit": ""
          }
        },
        {
          "id": 1001026,
          "quantity": {
            "amount": 8,
            "unit": "ounces"
          }
        },
        {
          "id": 93630,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 14106,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Watch how to make this recipe.",
          "number": 1
        },
        {
          "instruction": "Place an oven rack in the center of the oven. Preheat the oven to 350 degrees F. Spray a 9-by-13-by-2-inch glass baking dish with vegetable oil cooking spray. Set aside.",
          "number": 2
        },
        {
          "instruction": "For the fonduta sauce: In a medium heavy-bottomed saucepan, bring the milk and cream to a simmer over medium heat. Reduce the heat to low.",
          "number": 3
        },
        {
          "instruction": "Add the Pecorino Romano and whisk until the cheese is melted and the sauce is smooth.",
          "number": 4
        },
        {
          "instruction": "Remove the pan from the heat and stir in the basil. Set aside.",
          "number": 5
        },
        {
          "instruction": "In a large skillet, heat 2 tablespoons of olive oil over medium-high heat.",
          "number": 6
        },
        {
          "instruction": "Add the sausage, shallots, garlic, 1/4 teaspoon salt, and 1/4 teaspoon pepper. Cook until the sausage is cooked through and the vegetables have softened, 8 to 10 minutes. Using a wooden spoon, break the sausage into 1/2-inch pieces. Increase the heat to high.",
          "number": 7
        },
        {
          "instruction": "Add the wine and scrape up the brown bits that cling to the bottom of the pan with a wooden spoon. Cook until the wine has evaporated, about 2 minutes.",
          "number": 8
        },
        {
          "instruction": "Remove the pan from the heat and set aside to cool slightly.",
          "number": 9
        },
        {
          "instruction": "Add the peas, ricotta, and 1 cup of the fonduta sauce. Season with remaining 1/2 teaspoon kosher salt and 1/4 teaspoon pepper.",
          "number": 10
        },
        {
          "instruction": "Bring a large pot of salted water to a boil over high heat.",
          "number": 11
        },
        {
          "instruction": "Add the pasta and cook until just tender, 7 to 8 minutes.",
          "number": 12
        },
        {
          "instruction": "Drain and set aside.",
          "number": 13
        },
        {
          "instruction": "Spread half of the marinara sauce over the bottom of the prepared baking dish. Using a small spoon, fill the manicotti shells with the sausage filling and arrange in a single layer in the baking dish.",
          "number": 14
        },
        {
          "instruction": "Pour the remaining marinara sauce on top of the filled shells. Spoon the remaining fonduta sauce on top and sprinkle with the mozzarella.",
          "number": 15
        },
        {
          "instruction": "Drizzle with olive oil and bake until bubbly and golden brown, 30 to 35 minutes.",
          "number": 16
        }
      ],
      "name": "Baked Manicotti with Sausage and Peas",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 542778,
      "image": "https://spoonacular.com/recipeImages/542778-556x370.jpg",
      "ingredients": [
        {
          "id": 1123,
          "quantity": {
            "amount": 2,
            "unit": "medium size"
          }
        },
        {
          "id": 11463,
          "quantity": {
            "amount": 10,
            "unit": "ounces"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 3,
            "unit": ""
          }
        },
        {
          "id": 93651,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 93828,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1011256,
          "quantity": {
            "amount": 6,
            "unit": "ounces"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1025,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 20035,
          "quantity": {
            "amount": 3,
            "unit": "cups"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 5,
            "unit": "servings"
          }
        },
        {
          "id": 11677,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat the oven to 375°F then prepare a large casserole dish (I used a 1 quart dish) by greasing with Earth Balance, butter or non-stick cooking spray.Warm the olive oil over medium heat in a sauté pan and cook the shallot and garlic for a few minutes, until fragrant.Using a strainer and a paper towel, press the excess water out from the defrosted spinach then add it to the pan.",
          "number": 1
        },
        {
          "instruction": "Add the chopped artichoke hearts (I discarded any tough parts) and a pinch of salt & pepper to the pan and cook for five minutes.Meanwhile, combine the eggs, yogurt and cheese in a large bowl and whisk together until well-combined.",
          "number": 2
        },
        {
          "instruction": "Remove the spinach artichoke mixture from the heat and allow to cool for a few minutes before adding to the bowl with the eggs and cheese.Lastly, add the cooked quinoa and stir until everything is mixed together well.",
          "number": 3
        },
        {
          "instruction": "Place the mixture into the casserole dish, smoothing the top with the back of a spoon. Sprinkle a few tablespoons of cheese on top and cook for 30-35 minutes, until top is light golden brown.",
          "number": 4
        },
        {
          "instruction": "Serve warm and enjoy!",
          "number": 5
        }
      ],
      "name": "Spinach Artichoke Quinoa Casserole",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 698701,
      "image": "https://spoonacular.com/recipeImages/698701-556x370.jpg",
      "ingredients": [
        {
          "id": 10014623,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 10014623,
          "quantity": {
            "amount": 6,
            "unit": "teaspoons"
          }
        },
        {
          "id": 1124,
          "quantity": {
            "amount": 4,
            "unit": "large"
          }
        },
        {
          "id": 9302,
          "quantity": {
            "amount": 3,
            "unit": "cups"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 6,
            "unit": "teaspoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "To prepare berry layer: Preheat oven to 375F. Coat six 8-ounce souffl cups with cooking spray.",
          "number": 1
        },
        {
          "instruction": "Add 1 teaspoon sugar to each cup and swirl to coat the inside. Distribute raspberries in the bottom of the cups and sprinkle each with 1 teaspoon crme de cassis (or eau-de-vie, juice or nectar).To prepare souffls: Stir raspberries in a saucepan over low heat until they are juicy (for fresh) or thawed (for frozen).",
          "number": 2
        },
        {
          "instruction": "Transfer to a fine sieve set over a bowl. With a spoon, press the berries through the sieve, being careful to extract all the pulp. Discard the seeds.Return the puree to the saucepan. Bring to a simmer and stir over medium heat until very thick and reduced to 1/4 cup, about 10 minutes. (Reduce the heat as the mixture thickens.) Stir in 1 tablespoon crme de cassis (or eau-de-vie, juice or nectar) and set aside to cool slightly.Beat egg whites and salt in a mixing bowl with an electric mixer on high speed until soft peaks form. Continuing to beat, gradually add sugar and beat until stiff peaks form. With a rubber spatula, fold about a fourth of the beaten whites into the reserved raspberry puree to lighten its texture, then pour the mixture over the remaining whites. Gently fold the puree and whites together until evenly blended. Spoon the souffl mixture into the cups, spreading to the edges of the cups.Set the cups on a baking sheet and bake for 10 minutes, or until lightly browned on the top. Dust with confectioners sugar and serve immediately.",
          "number": 3
        }
      ],
      "name": "Double Raspberry Soufflés",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 515021,
      "image": "https://spoonacular.com/recipeImages/515021-556x370.jpg",
      "ingredients": [
        {
          "id": 9040,
          "quantity": {
            "amount": 4,
            "unit": ""
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 1.25,
            "unit": "sticks"
          }
        },
        {
          "id": 9354,
          "quantity": {
            "amount": 1,
            "unit": "large can"
          }
        },
        {
          "id": 9070,
          "quantity": {
            "amount": 15,
            "unit": "servings"
          }
        },
        {
          "id": 14181,
          "quantity": {
            "amount": 15,
            "unit": "servings"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 10018617,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1053,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 12135,
          "quantity": {
            "amount": 15,
            "unit": "servings"
          }
        },
        {
          "id": 19336,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Grease a 9×13 pan.",
          "number": 1
        },
        {
          "instruction": "Mix together graham cracker crust and 1¼ sticks of butter. Press out in pan.In mixer, mix together powdered sugar, 2 sticks of butter, vanilla, and eggs.",
          "number": 2
        },
        {
          "instruction": "Pour on top of graham cracker crust.",
          "number": 3
        },
        {
          "instruction": "Spread out crushed pineapple on top of sugar mixture, then add sliced bananas. I added cherries next for fun.In mixer, add heavy cream and mix on medium high until soft peak. When almost completed, add ½ cup sugar.",
          "number": 4
        },
        {
          "instruction": "Spread whipped cream over top of bananas. Refrigerate for at least 2 hours, (I waited 1 hours and it was fine.)Enjoy!",
          "number": 5
        }
      ],
      "name": "A Cake To Warm Any Heart – Banana Split Cake",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 999044,
      "image": "https://spoonacular.com/recipeImages/999044-556x370.jpg",
      "ingredients": [
        {
          "id": 9037,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 16057,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 11297,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 2045,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1256,
          "quantity": {
            "amount": 3,
            "unit": "tablespoons"
          }
        },
        {
          "id": 9152,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 11291,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Working in a couple of batches, roughly chop the chickpeas and place in a bowl.",
          "number": 1
        },
        {
          "instruction": "Add the minced herbs and scallions to the chickpeas and give a quick toss.",
          "number": 2
        },
        {
          "instruction": "In a separate bowl, whisk together the mayo, lemon juice, and olive oil.",
          "number": 3
        },
        {
          "instruction": "Cut the avocado in half, remove the pit, and cut each half into  cubes (see note).",
          "number": 4
        },
        {
          "instruction": "Place in the bowl and pour the mayo mixture over the chickpeas and avocado. Toss until well combine. Taste and add salt/pepper to your preferred taste.",
          "number": 5
        },
        {
          "instruction": "Serve on a sandwich or with crackers.",
          "number": 6
        }
      ],
      "name": "Avocado Chickpea Salad",
      "tags": [
        "salad"
      ]
    },
    {
      "id": 798070,
      "image": "https://spoonacular.com/recipeImages/798070-556x370.jpg",
      "ingredients": [
        {
          "id": 18371,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 20081,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 9236,
          "quantity": {
            "amount": 20,
            "unit": "ounces"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 19095,
          "quantity": {
            "amount": 8,
            "unit": "servings"
          }
        },
        {
          "id": 1054,
          "quantity": {
            "amount": 8,
            "unit": "servings"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Melt butter and brush some of the butter around the slow cooker.Using a stand mixer, combine flour, 1-cup sugar, baking powder, and salt. Then, add milk and remaining melted cooled butter, mixing just until dry ingredients are moistened.",
          "number": 1
        },
        {
          "instruction": "Pour the batter in the slow cooker and place the frozen peaches on top.Cook on high for 3 hours with lid on top. Once the cobbler is done, divide and serve cobbler warm with ice cream and whipped cream on top.",
          "number": 2
        }
      ],
      "name": "Slow Cooker Peach Cobbler",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 574317,
      "image": "https://spoonacular.com/recipeImages/574317-556x370.jpg",
      "ingredients": [
        {
          "id": 20081,
          "quantity": {
            "amount": 2.5,
            "unit": "cups"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "T"
          }
        },
        {
          "id": 10862,
          "quantity": {
            "amount": 3,
            "unit": "strips"
          }
        },
        {
          "id": 5114,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1019,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "id": 1022020,
          "quantity": {
            "amount": 2,
            "unit": "t"
          }
        },
        {
          "id": 11333,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 1026,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "id": 1033,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 10011282,
          "quantity": {
            "amount": 0.5,
            "unit": "medium"
          }
        },
        {
          "id": 10211529,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "t"
          }
        },
        {
          "id": 11424,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 1,
            "unit": "t"
          }
        },
        {
          "id": 14412,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 1011009,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a large mixing bowl, add 1 cup warm water, 1 pack rapid or quick yeast, 1 t sugar 1/2 t salt and 1 T olive oil.",
          "number": 1
        },
        {
          "instruction": "Mix well.",
          "number": 2
        },
        {
          "instruction": "Add 2 1/2 cups flour and mix.",
          "number": 3
        },
        {
          "instruction": "Add  a little more flour if too sticky but you are making a light dough not a heavy brick.",
          "number": 4
        },
        {
          "instruction": "Cover and let rise until double in size. About 30-40 minutes.",
          "number": 5
        },
        {
          "instruction": "While dough is rising, prep any toppings.",
          "number": 6
        },
        {
          "instruction": "Preheat oven 375 convection.",
          "number": 7
        },
        {
          "instruction": "Spread the dough on a well oiled large pizza pan or cookie sheet. Melt 2 T butter in a microwave for 15-20 seconds.",
          "number": 8
        },
        {
          "instruction": "Mix 2 t garlic powder in the butter and spread thinly over the dough.",
          "number": 9
        },
        {
          "instruction": "Top with cheeses and other toppings of choice.",
          "number": 10
        },
        {
          "instruction": "Bake in oven for 20 to 25 minutes.",
          "number": 11
        }
      ],
      "name": "4 Cheese White Pizza",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 673337,
      "image": "https://spoonacular.com/recipeImages/673337-556x370.jpg",
      "ingredients": [
        {
          "id": 98998,
          "quantity": {
            "amount": 12,
            "unit": "servings"
          }
        },
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "tablespoon"
          }
        },
        {
          "id": 8030,
          "quantity": {
            "amount": 6.5,
            "unit": "oz"
          }
        },
        {
          "id": 19116,
          "quantity": {
            "amount": 9,
            "unit": "oz"
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 19336,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Pour mixture into prepared pan, using your hands press to flatten. Set aside for 1-2 hours to set.In a separate bowl, combine powdered sugar with milk and stir to combine. Using a spoon, drizzle glaze on top of cereal bars and dust with colored sugar or sprinkles.",
          "number": 1
        }
      ],
      "name": "Cereal Marshmallow Bars",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 764184,
      "image": "https://spoonacular.com/recipeImages/764184-556x370.jpg",
      "ingredients": [
        {
          "id": 1123,
          "quantity": {
            "amount": 6,
            "unit": "large"
          }
        },
        {
          "id": 6150,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 16158,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2028,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 2046,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "To hard-boil the eggs, place the raw eggs at the bottom of a large pot.",
          "number": 1
        },
        {
          "instruction": "Pour water in the pot until the water is 1-2 inches over the top of the eggs.",
          "number": 2
        },
        {
          "instruction": "Place the pot on the stove top uncovered and turn the burner to high heat. Bring the water in the pot to a boil. When the water comes to a full boil, cover the pot with a lid and turn off the heat to the burner. Leave the pot on the burner, covered, for 12 minutes.While the eggs sit in the covered pot, fill a mixing bowl  way with ice water. When the time is up on the eggs, use a slotted spoon to remove them from the pot and transfer them to the bowl of ice water to stop them from cooking. Leave them in the bowl of ice water for a few minutes until fully cold.Peel the eggs under cold running water (Ive found its much easier). Slice the eggs in half lengthwise and removethe yolks into a mixing bowl. Use a fork to mash the yolks as much as you can. I usually add a little splash of water to the mashed egg yolks and mash again.",
          "number": 3
        },
        {
          "instruction": "Add the black pepper, hummus, hot sauce and mustard and stir together until well combined and mostly smooth. Spoon or pipe this filling back into the hollows of the egg whites. Sprinkle paprika over the tops of the eggs and serve.",
          "number": 4
        }
      ],
      "name": "Hummus Deviled Eggs",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 206402,
      "image": "https://spoonacular.com/recipeImages/206402-556x370.jpg",
      "ingredients": [
        {
          "id": 1017,
          "quantity": {
            "amount": 16,
            "unit": "ounces"
          }
        },
        {
          "id": 1214,
          "quantity": {
            "amount": 12,
            "unit": "ounces"
          }
        },
        {
          "id": 1053,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19206,
          "quantity": {
            "amount": 6.8,
            "unit": "ounces"
          }
        },
        {
          "id": 9214,
          "quantity": {
            "amount": 12,
            "unit": "ounces"
          }
        },
        {
          "id": 9216,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 9216,
          "quantity": {
            "amount": 8,
            "unit": "servings"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Whisk together evaporated milk, pudding mix, and zest in a bowl for 2 minutes or until mixture is thickened.",
          "number": 1
        },
        {
          "instruction": "Beat cream cheese and vanilla at medium speed with an electric mixer until fluffy.",
          "number": 2
        },
        {
          "instruction": "Add orange juice concentrate, beating until smooth; add evaporated milk mixture, and beat until blended.",
          "number": 3
        },
        {
          "instruction": "Pour into crust. Cover and chill 8 hours or until firm.",
          "number": 4
        },
        {
          "instruction": "Combine cream and confectioner's sugar in a bowl and whip with a whisk until it holds soft peaks. Dollop or pipe each slice with whipped cream, and garnish with candied zest or candy if desired.",
          "number": 5
        }
      ],
      "name": "Creamsicle Pie",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 446577,
      "image": "https://spoonacular.com/recipeImages/446577-556x370.jpg",
      "ingredients": [
        {
          "id": 10123,
          "quantity": {
            "amount": 6,
            "unit": "slices"
          }
        },
        {
          "id": 11052,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 1,
            "unit": "pinch"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.125,
            "unit": "teaspoon"
          }
        },
        {
          "id": 14412,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Place bacon in a large, deep skillet. Cook over medium high heat until the fat begins to render. Stir in onions and garlic; let cook for 1 minute. Stir in beans and water.",
          "number": 1
        },
        {
          "instruction": "Let the beans cook until the water has evaporated and the beans are tender. If the beans are not tender once the water has evaporated, add a small amount more water and let them cook until tender. Season with salt and pepper (to taste) and serve.",
          "number": 2
        }
      ],
      "name": "Smothered Green Beans",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 576906,
      "image": "https://spoonacular.com/recipeImages/576906-556x370.jpg",
      "ingredients": [
        {
          "id": 11959,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 1004,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1012047,
          "quantity": {
            "amount": 2,
            "unit": "servings"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.125,
            "unit": "teaspoon"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 9252,
          "quantity": {
            "amount": 0.5,
            "unit": ""
          }
        },
        {
          "id": 9252,
          "quantity": {
            "amount": 1,
            "unit": "tablespoons"
          }
        },
        {
          "id": 43408,
          "quantity": {
            "amount": 3,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11677,
          "quantity": {
            "amount": 1,
            "unit": "medium"
          }
        },
        {
          "id": 2049,
          "quantity": {
            "amount": 2,
            "unit": "sprigs"
          }
        },
        {
          "id": 12155,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a medium bowl add the pear juice and vinegar. While whisking, slowly stream in the olive oil. Scrape the leaves off of two sprigs of thyme and add in the black pepper.",
          "number": 1
        },
        {
          "instruction": "Whisk to combine",
          "number": 2
        },
        {
          "instruction": "Assemble romaine leaves and top with sliced pear, shallot, toasted walnuts, blue cheese and season with sea salt to taste.",
          "number": 3
        },
        {
          "instruction": "Drizzle with desired amount of the pear vinaigrette and enjoy!",
          "number": 4
        }
      ],
      "name": "Pear & Walnut Salad with a Pear Vinaigrette",
      "tags": [
        "salad"
      ]
    },
    {
      "id": 504218,
      "image": "https://spoonacular.com/recipeImages/504218-556x370.jpg",
      "ingredients": [
        {
          "id": 10011693,
          "quantity": {
            "amount": 2,
            "unit": "cans"
          }
        },
        {
          "id": 11124,
          "quantity": {
            "amount": 4,
            "unit": ""
          }
        },
        {
          "id": 2012,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 1002014,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 11913,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "cloves"
          }
        },
        {
          "id": 11333,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 11477,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Chop all the veggies.",
          "number": 1
        },
        {
          "instruction": "Saute the onion and garlic in a large skillet.",
          "number": 2
        },
        {
          "instruction": "Add in the carrots and saute for a few minutes, covering to cook for about 5 minutes.",
          "number": 3
        },
        {
          "instruction": "Add in the other veggies and seasonings and let it cook until the veggies are tender.",
          "number": 4
        },
        {
          "instruction": "Serve hot over cornbread with shredded cheese and sour cream.",
          "number": 5
        }
      ],
      "name": "Mexican Vegetables on Cornbread",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 445196,
      "image": "https://spoonacular.com/recipeImages/445196-556x370.jpg",
      "ingredients": [
        {
          "id": 6150,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 10220445,
          "quantity": {
            "amount": 2,
            "unit": "servings"
          }
        },
        {
          "id": 2003,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1022020,
          "quantity": {
            "amount": 0.125,
            "unit": "teaspoon"
          }
        },
        {
          "id": 11333,
          "quantity": {
            "amount": 1,
            "unit": "medium"
          }
        },
        {
          "id": 19296,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 1,
            "unit": "medium"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.125,
            "unit": "teaspoon"
          }
        },
        {
          "id": 15152,
          "quantity": {
            "amount": 0.75,
            "unit": "pound"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a nonstick skillet coated with cooking spray, saute onion and green pepper for 3-4 minutes or until crisp-tender.",
          "number": 1
        },
        {
          "instruction": "Combine the barbecue sauce, honey, basil, garlic powder and pepper; pour over vegetables. Bring to a boil over medium-high heat, stirring constantly.",
          "number": 2
        },
        {
          "instruction": "Add shrimp; cook and stir for 3-5 minutes or until shrimp turn pink.",
          "number": 3
        },
        {
          "instruction": "Serve with rice.",
          "number": 4
        }
      ],
      "name": "Barbecue Shrimp Stir-Fry",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 759534,
      "image": "https://spoonacular.com/recipeImages/759534-556x370.jpg",
      "ingredients": [
        {
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 16018,
          "quantity": {
            "amount": 15,
            "unit": "oz"
          }
        },
        {
          "id": 4582,
          "quantity": {
            "amount": 1,
            "unit": "Tbs"
          }
        },
        {
          "id": 99223,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 11165,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 10218364,
          "quantity": {
            "amount": 4,
            "unit": "8-inch"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 1002014,
          "quantity": {
            "amount": 1,
            "unit": "tsp"
          }
        },
        {
          "id": 9160,
          "quantity": {
            "amount": 2,
            "unit": "Tbs"
          }
        },
        {
          "id": 10011109,
          "quantity": {
            "amount": 8,
            "unit": "oz"
          }
        },
        {
          "id": 10611282,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat oven to 450°F.",
          "number": 1
        },
        {
          "instruction": "Heat oil in saucepan over medium-high heat.",
          "number": 2
        },
        {
          "instruction": "Add onion, and cook 5 minutes, or until translucent.",
          "number": 3
        },
        {
          "instruction": "Add garlic and cumin, and cook 1 minute more.",
          "number": 4
        },
        {
          "instruction": "Place onion mixture in blender with beans, chipotle chile, brown sugar, and 3 Tbs. water. Blend until smooth. Season with salt and pepper.",
          "number": 5
        },
        {
          "instruction": "Place 2 tortillas each on 2 baking sheets.",
          "number": 6
        },
        {
          "instruction": "Spread bean mixture on tortillas, and bake 5 to 7 minutes, or until edges become golden.",
          "number": 7
        },
        {
          "instruction": "Toss slaw in bowl with cilantro and lime juice. Season with salt and pepper. Top each clayuda with slaw, and cut into triangles.",
          "number": 8
        }
      ],
      "name": "Clayudas",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 588893,
      "image": "https://spoonacular.com/recipeImages/588893-556x370.jpg",
      "ingredients": [
        {
          "id": 11457,
          "quantity": {
            "amount": 2,
            "unit": "handfuls"
          }
        },
        {
          "id": 11268,
          "quantity": {
            "amount": 0.5,
            "unit": "oz"
          }
        },
        {
          "id": 10020005,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "large cloves"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1033,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 14412,
          "quantity": {
            "amount": 5,
            "unit": "cups"
          }
        },
        {
          "id": 10511282,
          "quantity": {
            "amount": 0.5,
            "unit": "medium"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a medium sized pot combine the farro with the 5 cups of water and 2 teaspoons salt. Bring to a boil, then lower to a simmer and cook for about 25 minutes for semi-pearled farro and 50 minutes for whole farro. The farro is done when the grains are tender and all the water has been absorbed. Set aside.While the farro is cooking, combine the shiitake mushrooms with 1 cup of boiling water.",
          "number": 1
        },
        {
          "instruction": "Let sit for 15 minutes or however long the package instructions say is needed to reconstitute the mushrooms. When done, remove the mushrooms from the water and chop, reserving the liquid.About 2o minutes before the farro is done warm the olive oil in a large skillet. Cook the onion, stirring frequently, for about 5 minutes or until translucent and beginning to get some color.",
          "number": 2
        },
        {
          "instruction": "Add the garlic and crushed red pepper flakes (if using), cook 1 minute longer, until fragrant.",
          "number": 3
        },
        {
          "instruction": "Add the chopped mushrooms, mushroom broth and a few big handfuls of baby spinach. Cook, stirring frequently, until the spinach has wilted and most of the liquid has evaporated. Season with salt and pepper to taste.Stir in the farro, mixing with a large spoon to combine well.",
          "number": 4
        },
        {
          "instruction": "Serve topped with shredded Parmesan cheese.",
          "number": 5
        }
      ],
      "name": "Farro with Shiitake Mushrooms and Baby Spinach",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 615581,
      "image": "https://spoonacular.com/recipeImages/615581-556x370.jpg",
      "ingredients": [
        {
          "id": 2069,
          "quantity": {
            "amount": 0.5,
            "unit": "tablespoon"
          }
        },
        {
          "id": 11250,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 4582,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 20027,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11156,
          "quantity": {
            "amount": 3,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11165,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 19296,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 4025,
          "quantity": {
            "amount": 5,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11119,
          "quantity": {
            "amount": 1,
            "unit": "head"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 15152,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        },
        {
          "id": 11112,
          "quantity": {
            "amount": 0.25,
            "unit": "head"
          }
        },
        {
          "id": 1016168,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 98962,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a bowl, whisk together the mayo, chili sauce and sriracha, then set it aside until ready to use.Toss the shrimp with the cornstarch until evenly coated.",
          "number": 1
        },
        {
          "instruction": "Heat the canola oil in a large skillet over high heat.",
          "number": 2
        },
        {
          "instruction": "Add the shrimp and cook until it just turns pink and opaque, about 3 minutes.",
          "number": 3
        },
        {
          "instruction": "Transfer the shrimp to a large bowl and toss with the mayo mixture.In a separate bowl, add the cabbage and lettuce. Toss with the olive oil, vinegar and honey until well coated. Toss the cilantro in. To serve the shrimp, mix with the slaw and garnish the entire thing with chives. Enjoy!",
          "number": 4
        }
      ],
      "name": "Bang Bang Shrimp with Napa Cabbage Slaw",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 764810,
      "image": "https://spoonacular.com/recipeImages/764810-556x370.jpg",
      "ingredients": [
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 2003,
          "quantity": {
            "amount": 1.5,
            "unit": "teaspoons"
          }
        },
        {
          "id": 2042,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 4,
            "unit": ""
          }
        },
        {
          "id": 1002020,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 10023572,
          "quantity": {
            "amount": 2.75,
            "unit": "pounds"
          }
        },
        {
          "id": 2027,
          "quantity": {
            "amount": 1,
            "unit": "tablespoon"
          }
        },
        {
          "id": 1033,
          "quantity": {
            "amount": 1.5,
            "unit": "cups"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 1.5,
            "unit": "teaspoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat the oven to 350F.Spray baking sheets with cooking spray or spread a thin layer of olive oil over them.",
          "number": 1
        },
        {
          "instruction": "Mix all of the ingredients together very well -- you'll need to use your hands.",
          "number": 2
        },
        {
          "instruction": "Roll into balls the size of a golf ball, molding them firmly together without packing them.",
          "number": 3
        },
        {
          "instruction": "Place the balls on baking sheets.",
          "number": 4
        },
        {
          "instruction": "Bake for 30 to 40 minutes, or until the center registers 160F on a meat thermometer.",
          "number": 5
        },
        {
          "instruction": "Remove from oven and use as needed.",
          "number": 6
        }
      ],
      "name": "Homemade Italian Meatballs",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 799732,
      "image": "https://spoonacular.com/recipeImages/799732-556x370.jpg",
      "ingredients": [
        {
          "id": 10011250,
          "quantity": {
            "amount": 4,
            "unit": ""
          }
        },
        {
          "id": 11143,
          "quantity": {
            "amount": 2,
            "unit": "rib"
          }
        },
        {
          "id": 5064,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 2015,
          "quantity": {
            "amount": 0.75,
            "unit": "teaspoon"
          }
        },
        {
          "id": 9160,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        },
        {
          "id": 1009159,
          "quantity": {
            "amount": 0.75,
            "unit": "teaspoon"
          }
        },
        {
          "id": 4641,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        },
        {
          "id": 98991,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 10011282,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 9316,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a large bowl, mix the first six ingredients. Stir in  chicken, celery and onion. Refrigerate, covered, at least 1 hour.",
          "number": 1
        },
        {
          "instruction": "To serve, stir strawberries into chicken mixture.",
          "number": 2
        },
        {
          "instruction": "Serve over lettuce.",
          "number": 3
        }
      ],
      "name": "Curried Strawberry Chicken Salad",
      "tags": [
        "salad"
      ]
    },
    {
      "id": 621213,
      "image": "https://spoonacular.com/recipeImages/621213-556x370.jpg",
      "ingredients": [
        {
          "id": 10123,
          "quantity": {
            "amount": 14,
            "unit": "slices"
          }
        },
        {
          "id": 11090,
          "quantity": {
            "amount": 4,
            "unit": "oz"
          }
        },
        {
          "id": 1017,
          "quantity": {
            "amount": 3,
            "unit": "oz"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 2,
            "unit": "tsp"
          }
        },
        {
          "id": 1022020,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 1,
            "unit": "tbsp"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 0.5,
            "unit": "small"
          }
        },
        {
          "id": 2026,
          "quantity": {
            "amount": 0.5,
            "unit": "tsp"
          }
        },
        {
          "id": 10011821,
          "quantity": {
            "amount": 0.5,
            "unit": ""
          }
        },
        {
          "id": 10218,
          "quantity": {
            "amount": 16,
            "unit": "oz"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 4,
            "unit": "servings"
          }
        },
        {
          "id": 10011457,
          "quantity": {
            "amount": 2,
            "unit": "oz"
          }
        },
        {
          "id": 11529,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Saute onion in 1 tbsp. Olive Oil for a few minutes until soft.",
          "number": 1
        },
        {
          "instruction": "Add garlic and cook for 45-60 seconds, then add spinach. Put all the spices in there except for 1/4 tsp. of the liquid smoke, thyme, and rosemary.",
          "number": 2
        },
        {
          "instruction": "Let wilt and then add cream cheese. Set aside.Preheat oven to 350F.Lay pork tenderloin on cutting board and cover with saran wrap, then pound with meat hammer until flat - cut the uneven sides so it goes square. Season with salt and pepper, then 1/4 tsp. liquid smoke.Make a bacon weave the same size as the pork tenderloin square.",
          "number": 3
        },
        {
          "instruction": "Spread spinach and cream cheese all over the pork tenderloin, then lay tenderloin on top of bacon. Slice the pieces of bacon that poke out.",
          "number": 4
        },
        {
          "instruction": "Roll it up. Season with salt and pepper and the remaining 1/4 tsp. of thyme and rosemary.",
          "number": 5
        },
        {
          "instruction": "Add toothpicks where the bacon ends are so that it doesn't fall apart.",
          "number": 6
        },
        {
          "instruction": "Bake for 75 minutes or until thermometer reads 140F.",
          "number": 7
        },
        {
          "instruction": "Saute broccoli, peppers, and tomatoes in the remaining fat in the bottom of the pan of the pork tenderloin while it rests.",
          "number": 8
        }
      ],
      "name": "Bacon Wrapped Stuffed Pork Tenderloin",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 611858,
      "image": "https://spoonacular.com/recipeImages/611858-556x370.jpg",
      "ingredients": [
        {
          "id": 18371,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 18372,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": "large"
          }
        },
        {
          "id": 20081,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19157,
          "quantity": {
            "amount": 16,
            "unit": ""
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 10019903,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 2,
            "unit": "teaspoons"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat oven to 350F. Line a 8x8-inch baking pan with foil and spray with non-stick cooking spray.In a medium bowl, whisk together the flour, baking powder, baking soda, and salt.In the bowl of a stand mixer fitted with the paddle attachment or in a large bowl with an electric mixer, combine the melted butter and brown sugar.",
          "number": 1
        },
        {
          "instruction": "Add egg and vanilla, mixing until well combined. Gradually add in dry ingredients and mix until just combined. Stir in chocolate chips.",
          "number": 2
        },
        {
          "instruction": "Spread half the dough into the prepared pan.",
          "number": 3
        },
        {
          "instruction": "Place the Rolos evenly onto the cookie dough. Using a small cookie scoop, evenly distribute the rest of the cookie dough on top of the Rolos. There is need to spread evenly over the Rolos, this will happen naturally during the baking process.",
          "number": 4
        },
        {
          "instruction": "Bake in the preheated oven until a toothpick inserted in the center comes out clean, about 20 to 25 minutes.",
          "number": 5
        },
        {
          "instruction": "Remove pan to wire rack and cool completely.If desired, drizzle with melted chocolate or caramel before serving.",
          "number": 6
        }
      ],
      "name": "Rolo Cookie Bars",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 991136,
      "image": "https://spoonacular.com/recipeImages/991136-556x370.jpg",
      "ingredients": [
        {
          "id": 1001,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 98871,
          "quantity": {
            "amount": 12,
            "unit": ""
          }
        },
        {
          "id": 19296,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 6168,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 1002030,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1055062,
          "quantity": {
            "amount": 1,
            "unit": "pound"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Place chicken in a 3-qt. slow cooker. Toss with 2 tablespoons hot sauce and pepper; cook, covered, on low until tender, 3-4 hours.",
          "number": 1
        },
        {
          "instruction": "Remove chicken; discard cooking juices. In a small saucepan, combine butter, honey and remaining hot sauce; cook and stir over medium heat until blended. Shred chicken with two forks; stir into sauce and heat through.",
          "number": 2
        },
        {
          "instruction": "Serve on rolls with optional ingredients as desired. Freeze option: Freeze cooled chicken mixture in freezer containers. To use, partially thaw in refrigerator overnight. Microwave, covered, on high in a microwave-safe dish until heated through, stirring occasionally and adding a little water or broth if necessary.",
          "number": 3
        }
      ],
      "name": "Buffalo Chicken Sliders",
      "tags": [
        "lunch",
        "main course",
        "main dish",
        "dinner"
      ]
    },
    {
      "id": 583738,
      "image": "https://spoonacular.com/recipeImages/583738-556x370.jpg",
      "ingredients": [
        {
          "id": 18372,
          "quantity": {
            "amount": 0.75,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 20081,
          "quantity": {
            "amount": 1.75,
            "unit": "cups"
          }
        },
        {
          "id": 16098,
          "quantity": {
            "amount": 0.75,
            "unit": "cup"
          }
        },
        {
          "id": 10019151,
          "quantity": {
            "amount": 8,
            "unit": "oz"
          }
        },
        {
          "id": 2047,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 1145,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Preheat oven to 350°F. Line two baking sheets with parchment paper.",
          "number": 1
        },
        {
          "instruction": "Combine the flour, baking soda and salt in a medium bowl. Set aside.In the bowl of a stand mixer, beat the butter, peanut butter and sugars, until light and fluffy.",
          "number": 2
        },
        {
          "instruction": "Add in the egg and vanilla.Gradually add in the flour mixture on low speed. Stir until dough forms. Then stir in Reese's Pieces by hand.Using a cookie dough scoop or your hands, form balls of dough with 1 heaping tablespoon of dough. Gently flatten cookie dough (to form a disk shape) and place on prepared baking sheets.",
          "number": 3
        },
        {
          "instruction": "Bake for 9 minutes and remove from oven.",
          "number": 4
        },
        {
          "instruction": "Let cool for 5 minutes before transferring cookies to a wire rack to cool completely.Note: Cookies will not spread much at all and will look like they are not done baking. But I promise they are! Once they finish cooling, the cookie and chocolate will become firm and you will have a magically soft and crumbly cookie!",
          "number": 5
        }
      ],
      "name": "Reese's Pieces Peanut Butter Cookies",
      "tags": [
        "antipasti",
        "starter",
        "snack",
        "appetizer",
        "antipasto",
        "hor d'oeuvre"
      ]
    },
    {
      "id": 601216,
      "image": "https://spoonacular.com/recipeImages/601216-556x370.jpg",
      "ingredients": [
        {
          "id": 1041009,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 10018413,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 2044,
          "quantity": {
            "amount": 3,
            "unit": "leaves"
          }
        },
        {
          "id": 10111529,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 11477,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Saute the zucchini in the olive oil on high heat. Season generously with salt and pepper. Stir and leave alone for a little while, so you get a little bit of texture from the browning on the zucchini.While you’re sauteing, toast the flatbread in the oven at 400 degrees.When the zucchini is soft and just slightly browned, remove from the heat. Take the flatbread out of the oven and spread the zucchini on the flatbread.Top with the fresh tomatoes, cheese, and fresh basil.",
          "number": 1
        },
        {
          "instruction": "Cut, serve, and enjoy!",
          "number": 2
        }
      ],
      "name": "Farmer’s Market Flatbread Pizza",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 226562,
      "image": "https://spoonacular.com/recipeImages/226562-556x370.jpg",
      "ingredients": [
        {
          "id": 9019,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 18079,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 16069,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 19334,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 11124,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 2009,
          "quantity": {
            "amount": 0.25,
            "unit": "teaspoon"
          }
        },
        {
          "id": 9079,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        },
        {
          "id": 11165,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 11215,
          "quantity": {
            "amount": 3,
            "unit": ""
          }
        },
        {
          "id": 1002014,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 2042,
          "quantity": {
            "amount": 0.5,
            "unit": "teaspoon"
          }
        },
        {
          "id": 11935,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 4053,
          "quantity": {
            "amount": 2,
            "unit": "tablespoon"
          }
        },
        {
          "id": 11282,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 12151,
          "quantity": {
            "amount": 0.5,
            "unit": "cup"
          }
        },
        {
          "id": 11821,
          "quantity": {
            "amount": 1,
            "unit": "cup"
          }
        },
        {
          "id": 1102047,
          "quantity": {
            "amount": 8,
            "unit": "servings"
          }
        },
        {
          "id": 6615,
          "quantity": {
            "amount": 3,
            "unit": "cups"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "Wash the lentils and place into a pot along with the vegetable broth. Bring to a boil, then reduce heat to medium-low and simmer, for about 40 minutes.",
          "number": 1
        },
        {
          "instruction": "Add more broth or water if necessary",
          "number": 2
        },
        {
          "instruction": "Meanwhile, warm the oil in a pan.",
          "number": 3
        },
        {
          "instruction": "Add the onions and cook for about 4 minutes or until soft.",
          "number": 4
        },
        {
          "instruction": "Add the carrots, bell pepper and garlic. Cook for about 3 minutes more. Set aside.When the lentils are ready mash them slightly with a potato masher or a fork.Preheat the oven to 350º F.In a large bowl, mix the onion mixture, mashed lentils, apple sauce, cranberries, pistachios, bread crumbs, cilantro, chili powder, cumin, thyme, salt and pepper.Line a loaf pan with parchment paper.",
          "number": 5
        },
        {
          "instruction": "Transfer the mixture to the loaf pan and press mixture into the pan with a spoon.",
          "number": 6
        },
        {
          "instruction": "Mix the glaze ingredients in a small bowl and spread evenly over the top.",
          "number": 7
        },
        {
          "instruction": "Bake for about 45 minutes.",
          "number": 8
        },
        {
          "instruction": "Transfer the pan to a wire rack and let the loaf cool a bit. Run a table knife around the edge of the pan and turn the loaf out onto a serving plate.",
          "number": 9
        }
      ],
      "name": "Vegan Lentil Loaf",
      "tags": [
        "side dish"
      ]
    },
    {
      "id": 605132,
      "image": "https://spoonacular.com/recipeImages/605132-556x370.jpg",
      "ingredients": [
        {
          "id": 1001,
          "quantity": {
            "amount": 2,
            "unit": "tablespoons"
          }
        },
        {
          "id": 20027,
          "quantity": {
            "amount": 0.25,
            "unit": "cup"
          }
        },
        {
          "id": 1123,
          "quantity": {
            "amount": 1,
            "unit": ""
          }
        },
        {
          "id": 1125,
          "quantity": {
            "amount": 2,
            "unit": ""
          }
        },
        {
          "id": 1077,
          "quantity": {
            "amount": 2,
            "unit": "cups"
          }
        },
        {
          "id": 2050,
          "quantity": {
            "amount": 1,
            "unit": "teaspoon"
          }
        },
        {
          "id": 19335,
          "quantity": {
            "amount": 0.3333333333333333,
            "unit": "cup"
          }
        }
      ],
      "instructions": [
        {
          "instruction": "In a heavy saucepan, stir together the milk and 1/4 cup of sugar. Bring to a boil over medium heat.",
          "number": 1
        },
        {
          "instruction": "In a medium bowl, whisk together the egg yolks and egg. Stir together the remaining sugar and cornstarch; then stir them into the egg until smooth. When the milk comes to a boil, drizzle it into the bowl in a thin stream while mixing so that you do not cook the eggs. Return the mixture to the saucepan, and slowly bring to a boil, stirring constantly so the eggs don' t curdle or scorch on the bottom.",
          "number": 2
        },
        {
          "instruction": "When the mixture comes to a boil and thickens, remove from the heat. Stir in the butter and vanilla, mixing until the butter is completely blended in.",
          "number": 3
        },
        {
          "instruction": "Pour into a heat-proof container and place a piece of plastic wrap directly on the surface to prevent a skin from forming. Refrigerate until chilled before using.",
          "number": 4
        }
      ],
      "name": "Pastry Cream",
      "tags": [
        "side dish"
      ]
    }
  ]



  module.exports = {
    recipeData 
  }

/***/ }),

/***/ "./src/images/cookies.jpg":
/*!********************************!*\
  !*** ./src/images/cookies.jpg ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("images/cookies.jpg");

/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _images_cookies_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/cookies.jpg */ "./src/images/cookies.jpg");
/* harmony import */ var _classes_RecipeBox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/RecipeBox */ "./src/classes/RecipeBox.js");
/* harmony import */ var _classes_Recipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/Recipe */ "./src/classes/Recipe.js");
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classes/User */ "./src/classes/User.js");





// import { ingredientsData } from '../src/data/ingredients';
// import { recipeData } from '../src/data/recipes';
// import { usersData } from '../src/data/users';


//BUTTONS
const favoriteRecipesButton = document.getElementById('favoriteRecipesButton');
const homeButton = document.getElementById('homeButton');
const tryRecipeButton = document.getElementById('tryRecipeButton');
const favoritingButton = document.getElementById('favoritingButton');
const seeAllRecipesButton = document.getElementById('seeAllRecipesButton');
const nameRadioButton = document.getElementById('name')
const tagRadioButton = document.getElementById('tag')
const ingredientRadioButton = document.getElementById('ingredient')
const searchButton = document.getElementById('searchButton');
const recipesToCookButton = document.getElementById('recipesToCookButton');

//Favorites View Radio Buttons
const nameRadioButton2 = document.getElementById('name2')
const tagRadioButton2 = document.getElementById('tag2')
const ingredientRadioButton2 = document.getElementById('ingredient2')
const searchButton2 = document.getElementById('searchButton2')

//USER INPUT FIELD
const userSearchBox = document.getElementById('userSearchBox');
const mainPageNavForm = document.getElementById('mainPageNavForm')
const favRecipesNavForm = document.getElementById('favRecipesNavForm');
const userSearchBox2 = document.getElementById('userSearchBox2');

//VIEWS
const suggestedRecipe = document.getElementById('suggestedRecipe')
const mainPageView = document.getElementById('mainPageView');
const recipeResultsView = document.getElementById('recipeResultsView');
// const recipeResultsStatement = document.getElementById('recipeResultsStatement');
const recipeInfoView = document.getElementById('recipeInfoView');
const allRecipesView = document.getElementById('allRecipesView');
const favoriteRecipesView = document.getElementById('favoriteRecipesView');
const recipesToCookView = document.getElementById('recipesToCookView');
// const filteredFavoriteRecipesView = document.getElementById('userFaveRecipeFilteredView');

//RANDOM
const recipeTitle = document.getElementById('recipeTitle')
const currentRecipeImage = document.getElementById('currentRecipeImage')
const instructionsList = document.getElementById('instructionsList')
const ingredientsList = document.getElementById('ingredientsList')
const totalCost = document.getElementById('totalCost')
const favRecipeCards = document.getElementById('favRecipeCards')
// const randomRecipeImage = document.getElementById('randomRecipeImage');


//CLASS INSTANSTIATION
var cookbook;
let recipe;
let newUser;
let currentRecipe; 
let groceryStore;
let randomUser;
let randomRecipe;

//ON PAGE LOAD

//FUNCTIONS
const getRandomIndex = (array) => {
  return Math.floor(Math.random() * array.length);
}

const getData = () => {
  return Promise.all([Object(_apiCalls__WEBPACK_IMPORTED_MODULE_1__["fetchApiData"])('ingredients'), Object(_apiCalls__WEBPACK_IMPORTED_MODULE_1__["fetchApiData"])('recipes'), Object(_apiCalls__WEBPACK_IMPORTED_MODULE_1__["fetchApiData"])('users')])
};

const loadPage = () => {
  getData()
  .then((data) => {
    randomUser = data[2].usersData[getRandomIndex(data[2].usersData)];
    console.log(randomUser)
    newUser = new _classes_User__WEBPACK_IMPORTED_MODULE_5__["default"](randomUser);
    cookbook = new _classes_RecipeBox__WEBPACK_IMPORTED_MODULE_3__["default"](data[1].recipeData);
    recipe = new _classes_Recipe__WEBPACK_IMPORTED_MODULE_4__["default"](data[1].recipeData);
    groceryStore = data[0].ingredientsData;
    displayHomePage();
  })
};

const displayHomePage = () => {
  randomRecipe = cookbook.recipesCollection[getRandomIndex(cookbook.recipesCollection)];
  suggestedRecipe.innerHTML = ``;
  suggestedRecipe.insertAdjacentHTML('beforeEnd', 
  `<img class="suggested-recipe-image" src="${randomRecipe.image}" alt="food image" id="${randomRecipe.id}">
  <h2>${randomRecipe.name}</h2>`)
  tryRecipeButton.value = `${randomRecipe.id}`
}

//drop down button pseudo 
  // create a function that will filter through the tags array, pull all the tags no repeats 
  // do a reduce to create an array of all our tags (with error handling, so no repeats)
  // a forEach for the accumulator, for each unique tag, insert adjacent HTML for each individual tag, <a href="#${tag}"</a> 
  
  const dropDownButton = document.getElementById('dropDownButton')
  const myDropdown = document.getElementById("myDropdown")
  
  const showDropDown = () => {
    console.log(myDropdown)
    myDropdown.classList.toggle("show");
  }
  
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }
  
  allRecipesView.addEventListener('click', event => {   
    for (var i = 0; i < cookbook.recipesCollection.length; i++) {
      if (`${cookbook.recipesCollection[i].id}` === event.target.parentNode.id) {
        showRecipeInfoCard();
        recipe = new _classes_Recipe__WEBPACK_IMPORTED_MODULE_4__["default"](cookbook.recipesCollection[i])
        currentRecipe = recipe;
        const recipeIngredients = recipe.findRecipeIngredientInfo();
        const recipeInstructions = recipe.getRecipeInstructions();
        const recipeCostTotal = recipe.calculateRecipeCost();
        recipeTitle.innerHTML = ``
        recipeTitle.innerHTML = `${cookbook.recipesCollection[i].name}`
        currentRecipeImage.src = `${cookbook.recipesCollection[i].image}`
        currentRecipeImage.alt = `${cookbook.recipesCollection[i].name}`
        ingredientsList.innerHTML = ``  
        recipeIngredients.forEach((ingredient) => {
          ingredientsList.insertAdjacentHTML('beforeEnd', `
          <li>${ingredient}</li>`)
        })
        instructionsList.innerHTML = ``
        recipeInstructions.forEach((instruction) => {
          instructionsList.insertAdjacentHTML('beforeEnd', `
          <li>${instruction}</li>`)
        })
        totalCost.innerText = `$${recipeCostTotal}`
      }  
    }
  })
  
  const showAllRecipes = () => {
    allRecipesView.innerHTML = `;`
    cookbook.recipesCollection.forEach(recipe => {
      allRecipesView.insertAdjacentHTML('afterbegin', `
      <article class="recipes-views" id= ${recipe.id}>
      <h1>${recipe.name}</h1>
      <img src="${recipe.image}">
      `)
    })
    show([allRecipesView, homeButton, favoriteRecipesButton])
    hide([mainPageView, seeAllRecipesButton]) 
  }
  
  const searchByFavoriteInput = () => {
    if (nameRadioButton2.checked) {
      let recipeByName = newUser.filterFavoritesByName(userSearchBox2.value)
      return recipeByName;
    } else if (tagRadioButton2.checked)  {
      let recipeByTags = newUser.filterFavoritesByTag(userSearchBox2.value);
      return newUser.matchingRecipesTags;
    } else if (ingredientRadioButton2.checked) {
      newUser.recipeMatch = [];
      newUser.filterFavoritesByIngredient(userSearchBox2.value);
      return newUser.recipeMatch;
    } else if (!tagRadioButton2.checked && !nameRadioButton2.checked && !ingredientRadioButton2) {
      userSearchBox2.disabled;
    }
  }
  
  
  const searchFavoriteResults = (event) => {
    event.preventDefault();
    showRecipeSearchResults();
    recipeResultsView.innerHTML = ``
    let searchedRecipeValues2 = searchByFavoriteInput();
    searchedRecipeValues2.map(searchedRecipe2 => {
      
      recipeResultsView.insertAdjacentHTML('afterbegin', 
      `<article class="result-card">
      <img class="result-image" alt="${searchedRecipe2.name}" src="${searchedRecipe2.image}">
      <h2>${searchedRecipe2.name}</h2>
      </article>`)
    })
  }
  
  //THE DOOOOM!!!
  favoriteRecipesView.addEventListener('click', event => {  
    for (var i = 0; i < newUser.favoriteRecipes.length; i++) {
      if (`${newUser.favoriteRecipes[i].id}` === event.target.parentNode.id) {
        showRecipeInfoCard();
        recipe = new _classes_Recipe__WEBPACK_IMPORTED_MODULE_4__["default"](newUser.favoriteRecipes[i])
        currentRecipe = recipe;
        const recipeIngredients = recipe.findRecipeIngredientInfo();
        const recipeInstructions = recipe.getRecipeInstructions();
        const recipeCostTotal = recipe.calculateRecipeCost();
        recipeTitle.innerHTML = ``;
        recipeTitle.innerHTML = `${newUser.favoriteRecipes[i].name}`
        currentRecipeImage.src = `${newUser.favoriteRecipes[i].image}`
        currentRecipeImage.alt = `${newUser.favoriteRecipes[i].name}`
        
        ingredientsList.innerHTML = `` 
        recipeIngredients.forEach((ingredient) => {
          ingredientsList.insertAdjacentHTML('beforeEnd', `
          <li>${ingredient}</li>`)
        })
        instructionsList.innerHTML = `` 
        recipeInstructions.forEach((instruction) => {
          instructionsList.insertAdjacentHTML('beforeEnd', `
          <li>${instruction}</li>`)
        })
        totalCost.innerText = `$${recipeCostTotal}`
      }  
    }
  })
  
  const displayFavoritedRecipes = () => {
    showFavoriteRecipesView();
    favRecipeCards.innerHTML = ``
    newUser.favoriteRecipes.forEach(recipe => {
      favRecipeCards.insertAdjacentHTML('afterbegin', 
      `<article class="fav-recipe-card" id="${recipe.id}">
      <h2 class="fav-card-title">${recipe.name}</h2>
      <img class="current-recipe-image" src="${recipe.image}">
      <button class="recipe-information-btn" id="recipeInfoButton1">Recipe Information</button>`)
    })
  }
  
  
  
  
  const searchByInput = () => {
    if (nameRadioButton.checked) {
      cookbook.matchingRecipes = [];
      cookbook.findRecipeName(userSearchBox.value)
      return cookbook.matchingRecipes;
    } else if (tagRadioButton.checked)  {
      cookbook.matchingRecipesTags = [];
      cookbook.storeByTag(userSearchBox.value);
      return cookbook.matchingRecipesTags;
    } else if (ingredientRadioButton.checked) {
      cookbook.recipeMatch = [];
      cookbook.findIngredientById(userSearchBox.value);
      return cookbook.recipeMatch;
    } else if (!tagRadioButton.checked && !nameRadioButton.checked && !ingredientRadioButton) {
      userSearchBox.disabled;
    }
  }
  
  const showSearchResults = (event) => {
    event.preventDefault();
    showRecipeSearchResults();
    recipeResultsView.innerHTML = ``
    let searchedRecipeValues = searchByInput();
    searchedRecipeValues.map(searchedRecipe => {
      
      recipeResultsView.insertAdjacentHTML('afterbegin', 
      `<article class="result-card">
      <img class="result-image" alt="${searchedRecipe.name}" src="${searchedRecipe.image}">
      <h2>${searchedRecipe.name}</h2>
      </article>`)
    })
  }
  
  
  const addFavorite = () => {
    // addOrRemoveElement(favoritingButton, 'change-button-color')
    newUser.addFavoriteRecipe(currentRecipe)
  }
  
  
  
//HELPER FUNCTIONS
const show = (elements) => {
  elements.forEach(element => element.classList.remove('hidden'));
}
const hide = (elements) => {
  elements.forEach(element => element.classList.add('hidden'));
}


const showMainPage = () => {
  show([mainPageView, mainPageNavForm, favoriteRecipesButton, seeAllRecipesButton]);
  hide([favoriteRecipesView, recipeInfoView, recipeResultsView, favRecipesNavForm]);
}

const showRecipeSearchResults = () => {
  show([recipeResultsView, seeAllRecipesButton, homeButton, favoriteRecipesButton, mainPageNavForm]);
  hide([mainPageView, favoriteRecipesView, recipeInfoView, favRecipesNavForm]);
}

const showFavoriteRecipesView = () => {
  show([favoriteRecipesView, favRecipesNavForm, homeButton]);
  hide([mainPageView,  favoriteRecipesButton, mainPageNavForm, recipeInfoView]);
}

const showRecipeInfoCard = () => {
  show([recipeInfoView, seeAllRecipesButton, homeButton]);
  hide([allRecipesView, mainPageView, recipeResultsView, favRecipesNavForm]);
}

const showRecipesToCookView = () => {
  show([recipesToCookView, homeButton]);
  hide([mainPageView, recipeInfoView, allRecipesView, recipeResultsView, favRecipesNavForm]);
}

tryRecipeButton.addEventListener('click', () => {
  showRecipeInfoCard();
  for (var i = 0; i < cookbook.recipesCollection.length; i++) {
    if (`${cookbook.recipesCollection[i].id}` === `${tryRecipeButton.value}`) {
      recipe = new _classes_Recipe__WEBPACK_IMPORTED_MODULE_4__["default"](cookbook.recipesCollection[i])
      let currentRecipe = recipe;
      const recipeIngredients = recipe.findRecipeIngredientInfo();
      const recipeInstructions = recipe.getRecipeInstructions();
      const recipeCostTotal = recipe.calculateRecipeCost();
      recipeTitle.innerHTML = ``
      recipeTitle.innerHTML = `${cookbook.recipesCollection[i].name}`
      currentRecipeImage.src = `${cookbook.recipesCollection[i].image}`
      currentRecipeImage.alt = `${cookbook.recipesCollection[i].name}`
      ingredientsList.innerHTML = ``  
      recipeIngredients.forEach((ingredient) => {
        ingredientsList.insertAdjacentHTML('beforeEnd', `
        <li>${ingredient}</li>`)
      })
      instructionsList.innerHTML = ``
      recipeInstructions.forEach((instruction) => {
        instructionsList.insertAdjacentHTML('beforeEnd', `
        <li>${instruction}</li>`)
      })
      totalCost.innerText = `$${recipeCostTotal}`
    }  
  }
})


//EVENT LISTENERS

window.addEventListener('load', loadPage);
homeButton.addEventListener('click', showMainPage);
favoritingButton.addEventListener('click', addFavorite);
seeAllRecipesButton.addEventListener('click', showAllRecipes);
searchButton.addEventListener('click', showSearchResults);
favoriteRecipesButton.addEventListener('click', displayFavoritedRecipes);
searchButton2.addEventListener('click', searchFavoriteResults)
dropDownButton.addEventListener('click', showDropDown)


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUNhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1JlY2lwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9SZWNpcGVCb3guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbmdyZWRpZW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9yZWNpcGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvY29va2llcy5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/MjNkZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsMkRBQTJELFFBQVEsZ0RBQWdELEVBQUUsZ0JBQWdCLGNBQWMsa0JBQWtCLGlCQUFpQiw4QkFBOEIsZ0NBQWdDLEVBQUUsWUFBWSxrQkFBa0IsbUNBQW1DLGlCQUFpQix3QkFBd0IsRUFBRSxRQUFRLHdCQUF3Qix1QkFBdUIsRUFBRSxxQ0FBcUMsZ0JBQWdCLHdCQUF3QixFQUFFLFdBQVcsZ0JBQWdCLGdCQUFnQix1QkFBdUIsRUFBRSwyREFBMkQsZ0JBQWdCLGdCQUFnQix1QkFBdUIsdUJBQXVCLEVBQUUsNEJBQTRCLGtCQUFrQixnQkFBZ0IsaUJBQWlCLHdCQUF3QixnQkFBZ0IsbUNBQW1DLEVBQUUsNkJBQTZCLGlCQUFpQixFQUFFLHNCQUFzQix5QkFBeUIsZ0JBQWdCLGdCQUFnQix1QkFBdUIsRUFBRSxxQkFBcUIsa0JBQWtCLEVBQUUsMEJBQTBCLHVCQUF1QixpQkFBaUIsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsZUFBZSwyQkFBMkIsRUFBRSxrQkFBa0IsdUJBQXVCLEVBQUUsUUFBUSxjQUFjLEVBQUUsOEJBQThCLGlCQUFpQixrQkFBa0IsMkJBQTJCLEVBQUUsMkJBQTJCLGdCQUFnQixFQUFFLFFBQVEsY0FBYyx1QkFBdUIsRUFBRSxRQUFRLGdCQUFnQixFQUFFLGlCQUFpQix5QkFBeUIsRUFBRSxzQkFBc0IsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsaUJBQWlCLEVBQUUsNkJBQTZCLGdCQUFnQixnQkFBZ0IsRUFBRSxxQkFBcUIsZ0JBQWdCLEVBQUUsa0JBQWtCLGtCQUFrQixtQ0FBbUMsZ0JBQWdCLHdCQUF3QixFQUFFLDBCQUEwQiwwQkFBMEIsRUFBRSxtQ0FBbUMsOEJBQThCLGlCQUFpQixrQkFBa0Isb0JBQW9CLGlCQUFpQixvQkFBb0IsRUFBRSxvQ0FBb0MsOEJBQThCLEVBQUUsZUFBZSx1QkFBdUIsMEJBQTBCLEVBQUUsdUJBQXVCLGtCQUFrQix1QkFBdUIsOEJBQThCLHFCQUFxQixtQkFBbUIsb0RBQW9ELGVBQWUsRUFBRSx5QkFBeUIsaUJBQWlCLHVCQUF1QiwwQkFBMEIsbUJBQW1CLEVBQUUsdUJBQXVCLDJCQUEyQixFQUFFLFdBQVcsbUJBQW1CLEVBQUUsdUNBQXVDLGtCQUFrQixFQUFFLFNBQVMsdUZBQXVGLEtBQUssa0JBQWtCLE1BQU0sVUFBVSxVQUFVLFVBQVUsWUFBWSxtQkFBbUIsTUFBTSxVQUFVLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxZQUFZLG1CQUFtQixPQUFPLFVBQVUsa0JBQWtCLE1BQU0sVUFBVSxVQUFVLGtCQUFrQixRQUFRLFVBQVUsVUFBVSxZQUFZLG1CQUFtQixNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxrQkFBa0IsTUFBTSxnQkFBZ0IsS0FBSyxZQUFZLFdBQVcsVUFBVSxrQkFBa0IsTUFBTSxnQkFBZ0IsS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxrQkFBa0IsTUFBTSxrQkFBa0IsTUFBTSxnQkFBZ0IsS0FBSyxVQUFVLFVBQVUsa0JBQWtCLE1BQU0sZ0JBQWdCLEtBQUssVUFBVSxrQkFBa0IsTUFBTSxnQkFBZ0IsS0FBSyxrQkFBa0IsTUFBTSxVQUFVLFVBQVUsWUFBWSxpQkFBaUIsS0FBSyxVQUFVLGdCQUFnQixLQUFLLGdCQUFnQixLQUFLLFVBQVUsWUFBWSxXQUFXLGtCQUFrQixNQUFNLGtCQUFrQixZQUFZLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxVQUFVLGdCQUFnQixNQUFNLGtCQUFrQixNQUFNLFlBQVksbUJBQW1CLE1BQU0sVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksaUJBQWlCLEtBQUssVUFBVSxZQUFZLGFBQWEsaUJBQWlCLE1BQU0sa0JBQWtCLE1BQU0sZ0JBQWdCLFlBQVksS0FBSywyRkFBMkYsVUFBVSxnREFBZ0QsR0FBRyxnQkFBZ0IsY0FBYyxrQkFBa0IsaUJBQWlCLDhCQUE4QixnQ0FBZ0MsR0FBRyxZQUFZLGtCQUFrQixtQ0FBbUMsaUJBQWlCLHdCQUF3QixHQUFHLFNBQVMsd0JBQXdCLHVCQUF1QixHQUFHLHNCQUFzQixLQUFLLHFDQUFxQyxnQkFBZ0Isd0JBQXdCLEdBQUcsV0FBVyxnQkFBZ0IsZ0JBQWdCLHVCQUF1QixHQUFHLDREQUE0RCxnQkFBZ0IsZ0JBQWdCLHVCQUF1Qix1QkFBdUIsR0FBRyw0QkFBNEIsa0JBQWtCLGdCQUFnQixpQkFBaUIsd0JBQXdCLGdCQUFnQixtQ0FBbUMsR0FBRyw2QkFBNkIsaUJBQWlCLEdBQUcsc0JBQXNCLHlCQUF5QixnQkFBZ0IsZ0JBQWdCLHVCQUF1QixHQUFHLHFCQUFxQixrQkFBa0IsR0FBRywwQkFBMEIsdUJBQXVCLGlCQUFpQixnQkFBZ0IsdUJBQXVCLGdCQUFnQixlQUFlLDJCQUEyQixHQUFHLGtCQUFrQix1QkFBdUIsT0FBTyxRQUFRLGNBQWMsR0FBRyw4QkFBOEIsaUJBQWlCLGtCQUFrQiwyQkFBMkIsR0FBRywyQkFBMkIsZ0JBQWdCLEdBQUcsUUFBUSxjQUFjLHVCQUF1QixHQUFHLFFBQVEsZ0JBQWdCLEdBQUcsaUJBQWlCLHlCQUF5QixHQUFHLHNCQUFzQixnQkFBZ0Isa0JBQWtCLDJCQUEyQixpQkFBaUIsR0FBRyw2QkFBNkIsZ0JBQWdCLGdCQUFnQixHQUFHLHFCQUFxQixnQkFBZ0IsR0FBRyxrQkFBa0Isa0JBQWtCLG1DQUFtQyxnQkFBZ0Isd0JBQXdCLEdBQUcsMEJBQTBCLDBCQUEwQixHQUFHLG1DQUFtQyw4QkFBOEIsaUJBQWlCLGtCQUFrQixvQkFBb0IsaUJBQWlCLG9CQUFvQixHQUFHLG9DQUFvQyw4QkFBOEIsR0FBRyxlQUFlLHVCQUF1QiwwQkFBMEIsR0FBRyx1QkFBdUIsa0JBQWtCLHVCQUF1Qiw4QkFBOEIscUJBQXFCLG1CQUFtQixpREFBaUQsZUFBZSxHQUFHLHlCQUF5QixpQkFBaUIsdUJBQXVCLDBCQUEwQixtQkFBbUIsR0FBRyx1QkFBdUIsMkJBQTJCLEdBQUcsV0FBVyxtQkFBbUIsR0FBRyx5Q0FBeUMsa0JBQWtCLEdBQUcsdUJBQXVCO0FBQzd1TjtBQUNlLHNGQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7O0FDUDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNqRWE7O0FBRWIsaUNBQWlDLDJIQUEySDs7QUFFNUosNkJBQTZCLGtLQUFrSzs7QUFFL0wsaURBQWlELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Qsa0hBQWtIOztBQUU5WixzQ0FBc0MsdURBQXVELHVDQUF1QyxTQUFTLE9BQU8sa0JBQWtCLEVBQUUsYUFBYTs7QUFFckwsd0NBQXdDLDhGQUE4Rix3QkFBd0IsZUFBZSxlQUFlLGdCQUFnQixZQUFZLE1BQU0sd0JBQXdCLCtCQUErQixhQUFhLHFCQUFxQixtQ0FBbUMsRUFBRSxFQUFFLGNBQWMsV0FBVyxVQUFVLEVBQUUsVUFBVSxNQUFNLGlEQUFpRCxFQUFFLFVBQVUsa0JBQWtCLEVBQUUsRUFBRSxhQUFhOztBQUVuZiwrQkFBK0Isb0NBQW9DOztBQUVuRTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUNuQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsaUJBQWlCLHdCQUF3QjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLFNBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsYUFBYTs7QUFFdkc7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUJBQW1CLDRCQUE0QjtBQUMvQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxvQkFBb0IsNkJBQTZCO0FBQ2pEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFOzs7Ozs7Ozs7Ozs7QUM1UUE7QUFBQTtBQUFPO0FBQ1AseUVBQXlFLEtBQUs7QUFDOUU7QUFDQTtBQUNBO0FBQ0EsRTs7Ozs7Ozs7Ozs7O0FDTEE7QUFBQSxPQUFPLGtCQUFrQixHQUFHLG1CQUFPLENBQUMsc0RBQXFCOztBQUV6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsdUNBQXVDO0FBQzVGO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRWUscUVBQU0sRTs7Ozs7Ozs7Ozs7O0FDdkNyQjtBQUFBLE9BQU8sYUFBYSxHQUFHLG1CQUFPLENBQUMsOENBQWlCO0FBQ2hELE9BQU8sa0JBQWtCLEdBQUcsbUJBQU8sQ0FBQyxzREFBcUI7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRWUsd0VBQVMsRUFBQzs7O0FBR3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEOzs7Ozs7Ozs7Ozs7QUMzRUE7QUFBQSxVQUFVLGFBQWE7QUFDdkIsT0FBTyxrQkFBa0IsR0FBRyxtQkFBTyxDQUFDLHNEQUFxQjtBQUN6RDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OztBQUdlLG1FQUFJLEVBQUM7Ozs7Ozs7Ozs7OztBQzdFcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3Z0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0Esc0lBQXNJO0FBQ3RJO0FBQ0EsU0FBUztBQUNUO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLDZGQUE2RjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx5RUFBeUUsb0lBQW9JO0FBQzdNO0FBQ0EsU0FBUztBQUNUO0FBQ0EsZ1JBQWdSO0FBQ2hSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSwrQ0FBK0MsNkRBQTZEO0FBQzVHO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw2RkFBNkY7QUFDN0Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBLFNBQVM7QUFDVDtBQUNBLG9DQUFvQztBQUNwQztBQUNBLFNBQVM7QUFDVDtBQUNBLHNJQUFzSTtBQUN0STtBQUNBLFNBQVM7QUFDVDtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw2RUFBNkU7QUFDN0U7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUpBQXFKO0FBQ3JKO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSw2RkFBNkY7QUFDN0Y7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZHQUE2RztBQUM3RztBQUNBLFNBQVM7QUFDVDtBQUNBLHlDQUF5Qyw0RkFBNEYsNEVBQTRFO0FBQ2pOO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLG1JQUFtSTtBQUNuSTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQSxHOzs7Ozs7Ozs7Ozs7QUM1d0tBO0FBQWUsbUZBQW9CLEU7Ozs7Ozs7Ozs7OztBQ0FuQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQjtBQUNvQjtBQUNaO0FBQ2M7QUFDTjtBQUN0QyxXQUFXLGtCQUFrQjtBQUM3QixXQUFXLGFBQWE7QUFDeEIsV0FBVyxZQUFZO0FBQ1c7O0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsOERBQVksaUJBQWlCLDhEQUFZLGFBQWEsOERBQVk7QUFDeEY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxREFBSTtBQUN0QixtQkFBbUIsMERBQVM7QUFDNUIsaUJBQWlCLHVEQUFNO0FBQ3ZCO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsbUJBQW1CLHlCQUF5QixnQkFBZ0I7QUFDMUcsUUFBUSxrQkFBa0I7QUFDMUIsNkJBQTZCLGdCQUFnQjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtSEFBbUgsSUFBSTs7QUFFdkg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUQ7QUFDQSxtQkFBbUIsdUNBQXVDO0FBQzFELGFBQWEsaUNBQWlDO0FBQzlDO0FBQ0EscUJBQXFCLHVEQUFNO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsbUNBQW1DO0FBQ3RFLG9DQUFvQyxvQ0FBb0M7QUFDeEUsb0NBQW9DLG1DQUFtQztBQUN2RTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFlBQVk7QUFDNUIsU0FBUztBQUNULGtDQUFrQyxnQkFBZ0I7QUFDbEQsTztBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsMkNBQTJDLFVBQVU7QUFDckQsWUFBWSxZQUFZO0FBQ3hCLGtCQUFrQixhQUFhO0FBQy9CO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLHFCQUFxQixTQUFTLHNCQUFzQjtBQUMzRixZQUFZLHFCQUFxQjtBQUNqQztBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLDBEO0FBQ0EsbUJBQW1CLG9DQUFvQztBQUN2RCxhQUFhLDhCQUE4QjtBQUMzQztBQUNBLHFCQUFxQix1REFBTTtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGdDQUFnQztBQUNuRSxvQ0FBb0MsaUNBQWlDO0FBQ3JFLG9DQUFvQyxnQ0FBZ0M7O0FBRXBFO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXO0FBQzNCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBWTtBQUM1QixTQUFTO0FBQ1Qsa0NBQWtDLGdCQUFnQjtBQUNsRCxPO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsVUFBVTtBQUN4RCxtQ0FBbUMsWUFBWTtBQUMvQywrQ0FBK0MsYUFBYTtBQUM1RDtBQUNBLEtBQUs7QUFDTDs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUNBQXVDLG9CQUFvQixTQUFTLHFCQUFxQjtBQUN6RixZQUFZLG9CQUFvQjtBQUNoQztBQUNBLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlCQUFpQix1Q0FBdUM7QUFDeEQsV0FBVyxpQ0FBaUMsU0FBUyxzQkFBc0I7QUFDM0UsbUJBQW1CLHVEQUFNO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbUNBQW1DO0FBQ3BFLGtDQUFrQyxvQ0FBb0M7QUFDdEUsa0NBQWtDLG1DQUFtQztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFdBQVc7QUFDekIsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLGNBQWMsWUFBWTtBQUMxQixPQUFPO0FBQ1AsZ0NBQWdDLGdCQUFnQjtBQUNoRCxLO0FBQ0E7QUFDQSxDQUFDOzs7QUFHRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDcFdBO0FBQUE7QUFBQTtBQUFBO0FBQXlGO0FBQ3pGLFlBQWdJOztBQUVoSTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsMEdBQUcsQ0FBQyw0SEFBTzs7OztBQUlULDJMQUFPLGFBQWEsRSIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL3NjcmlwdHMuanNcIik7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyc7ICovXFxuKiB7XFxuICBmb250LWZhbWlseTogJ01vY2hpeSBQb3AgUCBPbmUnLCBzYW5zLXNlcmlmOyB9XFxuXFxuYm9keSwgaHRtbCB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTsgfVxcblxcbmhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbmgxIHtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBtYXJnaW46IDAgMCAwIDFyZW07IH1cXG5cXG5pbnB1dFt0eXBlPXJhZGlvXSxcXG5pbnB1dC5yYWRpbyB7XFxuICBjbGVhcjogbm9uZTtcXG4gIG1hcmdpbjogMnB4IDAgMCAycHg7IH1cXG5cXG5pbnB1dCB7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIHdpZHRoOiAxMHZ3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4OyB9XFxuXFxuLmhvbWUtYnRuLFxcbi5mYXZvcml0ZWQtcmVjaXBlcy1idG4sXFxuLnNlZS1hbGwtcmVjaXBlcyB7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIHdpZHRoOiAxMHZ3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWFyZ2luOiAwIDFyZW0gMCAwOyB9XFxuXFxuLnN1Z2dlc3RlZC1yZWNpcGUtdmlldyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDUwdnc7XFxuICBoZWlnaHQ6IDUwdmg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47IH1cXG5cXG4uc3VnZ2VzdGVkLXJlY2lwZS1pbWFnZSB7XFxuICBoZWlnaHQ6IDYwdmg7IH1cXG5cXG4uZmF2b3JpdGUtYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICB3aWR0aDogMTB2dztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcblxcbi5yZWNpcGUtcmVzdWx0cyB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLnRyeS10aGlzLXJlY2lwZS1idG4ge1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgaGVpZ2h0OiAyMHZoO1xcbiAgd2lkdGg6IDEwdnc7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDN2aDtcXG4gIHJpZ2h0OiAydnc7XFxuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyB9XFxuXFxuLnJlc3VsdC1jYXJkIHtcXG4gIG1hcmdpbjogNXZoIDEzdmggMDsgfVxcblxcbmgyIHtcXG4gIG1hcmdpbjogMDsgfVxcblxcbi5yZWNpcGUtaW5mb3JtYXRpb24tdmlldyB7XFxuICBtYXJnaW46IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbi5jdXJyZW50LXJlY2lwZS1pbWFnZSB7XFxuICB3aWR0aDogNTBlbTsgfVxcblxcbmgzIHtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDsgfVxcblxcbm9sIHtcXG4gIHdpZHRoOiA0N2VtOyB9XFxuXFxuLnRvdGFsLWNvc3Qge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7IH1cXG5cXG4uZmF2LXJlY2lwZS1jYXJkIHtcXG4gIG1hcmdpbjogNXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDE1dmg7IH1cXG5cXG4ucmVjaXBlLWluZm9ybWF0aW9uLWJ0biB7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogNXZoOyB9XFxuXFxuLmZhdi1jYXJkLXRpdGxlIHtcXG4gIGhlaWdodDogNnZoOyB9XFxuXFxuLmJveC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBoZWlnaHQ6IDh2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4uY2hhbmdlLWJ1dHRvbi1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7IH1cXG5cXG4vKiBkcm9wZG93biBDU1MgICovXFxuLmRyb3BidG4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThEQjtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDE2cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4uZHJvcGJ0bjpob3ZlciwgLmRyb3BidG46Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBCOTsgfVxcblxcbi5kcm9wZG93biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7IH1cXG5cXG4uZHJvcGRvd24tY29udGVudCB7XFxuICBkaXNwbGF5OiBub25lO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcXG4gIG1pbi13aWR0aDogMTYwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJveC1zaGFkb3c6IDBweCA4cHggMTZweCAwcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xcbiAgei1pbmRleDogMTsgfVxcblxcbi5kcm9wZG93bi1jb250ZW50IGEge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTJweCAxNnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4uZHJvcGRvd24gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkOyB9XFxuXFxuLnNob3cge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG4vKiBkcm9wRG93biBDU1MgRW5kcyAgKi9cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSwwREFBQTtBQUVBO0VBQ0UsMkNBQTJDLEVBQUE7O0FBRzdDO0VBQ0UsU0FBUztFQUNULGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0IsRUFBQTs7QUFPcEI7O0VBRUUsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsa0JBQWtCLEVBQUE7O0FBR3BCOzs7RUFHRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHcEI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLDhCQUE4QixFQUFBOztBQUdoQztFQUNFLFlBQVksRUFBQTs7QUFHZDtFQUNFLG9CQUFvQjtFQUNwQixXQUFXO0VBQ1gsV0FBVztFQUNYLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWEsRUFBQTs7QUFHZjtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsVUFBVTtFQUNWLHNCQUFzQixFQUFBOztBQUd4QjtFQUNFLGtCQUFrQixFQUFBOztBQUlwQjtFQUNFLFNBQVMsRUFBQTs7QUFHWDtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsV0FBVyxFQUFBOztBQUdiO0VBQ0UsU0FBUztFQUNULGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLFdBQVcsRUFBQTs7QUFHYjtFQUNFLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxxQkFBcUIsRUFBQTs7QUFHdkIsa0JBQUE7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osYUFBYTtFQUNiLGVBQWU7RUFDZixZQUFZO0VBQ1osZUFBZSxFQUFBOztBQUdqQjtFQUNFLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUIsRUFBQTs7QUFHdkI7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLCtDQUE0QztFQUM1QyxVQUFVLEVBQUE7O0FBR1o7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixjQUFjLEVBQUE7O0FBR2hCO0VBQ0Usc0JBQXNCLEVBQUE7O0FBR3hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQix1QkFBQTtBQUVBO0VBQ0UsYUFBYSxFQUFBXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEBpbXBvcnQgJy4vbm9kZV9tb2R1bGVzL25vcm1hbGl6ZS5jc3Mvbm9ybWFsaXplLmNzcyc7ICovXFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogJ01vY2hpeSBQb3AgUCBPbmUnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG5ib2R5LCBodG1sIHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRibHVlO1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTV2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufSBcXG5cXG5oMSB7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgbWFyZ2luOiAwIDAgMCAxcmVtO1xcbn1cXG5cXG5pbnB1dFt0eXBlPXRleHRdIHtcXG5cXG59XFxuXFxuaW5wdXRbdHlwZT1yYWRpb10sXFxuaW5wdXQucmFkaW8ge1xcbiAgY2xlYXI6IG5vbmU7XFxuICBtYXJnaW46IDJweCAwIDAgMnB4O1xcbn1cXG5cXG5pbnB1dCB7XFxuICBoZWlnaHQ6IDN2aDtcXG4gIHdpZHRoOiAxMHZ3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbn1cXG5cXG4uaG9tZS1idG4sIFxcbi5mYXZvcml0ZWQtcmVjaXBlcy1idG4sXFxuLnNlZS1hbGwtcmVjaXBlcyB7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIHdpZHRoOiAxMHZ3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWFyZ2luOiAwIDFyZW0gMCAwO1xcbn1cXG5cXG4uc3VnZ2VzdGVkLXJlY2lwZS12aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogNTB2dztcXG4gIGhlaWdodDogNTB2aDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnN1Z2dlc3RlZC1yZWNpcGUtaW1hZ2Uge1xcbiAgaGVpZ2h0OiA2MHZoO1xcbn1cXG5cXG4uZmF2b3JpdGUtYnV0dG9uIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiA1dmg7XFxuICB3aWR0aDogMTB2dztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG59XFxuXFxuLnJlY2lwZS1yZXN1bHRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi50cnktdGhpcy1yZWNpcGUtYnRuIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGhlaWdodDogMjB2aDtcXG4gIHdpZHRoOiAxMHZ3O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm90dG9tOiAzdmg7XFxuICByaWdodDogMnZ3O1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG59XFxuXFxuLnJlc3VsdC1jYXJkIHtcXG4gIG1hcmdpbjogNXZoIDEzdmggMDtcXG4gIFxcbn1cXG5cXG5oMiB7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbi5yZWNpcGUtaW5mb3JtYXRpb24tdmlldyB7XFxuICBtYXJnaW46IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmN1cnJlbnQtcmVjaXBlLWltYWdlIHtcXG4gIHdpZHRoOiA1MGVtO1xcbn1cXG5cXG5oMyB7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbm9sIHtcXG4gIHdpZHRoOiA0N2VtO1xcbn1cXG5cXG4udG90YWwtY29zdCB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG59XFxuXFxuLmZhdi1yZWNpcGUtY2FyZCB7XFxuICBtYXJnaW46IDV2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxNXZoO1xcbn1cXG5cXG4ucmVjaXBlLWluZm9ybWF0aW9uLWJ0biB7XFxuICB3aWR0aDogMTB2dztcXG4gIGhlaWdodDogNXZoO1xcbn1cXG5cXG4uZmF2LWNhcmQtdGl0bGUge1xcbiAgaGVpZ2h0OiA2dmg7XFxufVxcblxcbi5ib3gtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiA4dmg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2hhbmdlLWJ1dHRvbi1jb2xvciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi8qIGRyb3Bkb3duIENTUyAgKi9cXG4uZHJvcGJ0biB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OERCO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgcGFkZGluZzogMTZweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmRyb3BidG46aG92ZXIsIC5kcm9wYnRuOmZvY3VzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwQjk7XFxufVxcblxcbi5kcm9wZG93biB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi5kcm9wZG93bi1jb250ZW50IHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO1xcbiAgbWluLXdpZHRoOiAxNjBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYm94LXNoYWRvdzogMHB4IDhweCAxNnB4IDBweCByZ2JhKDAsMCwwLDAuMik7XFxuICB6LWluZGV4OiAxO1xcbn1cXG5cXG4uZHJvcGRvd24tY29udGVudCBhIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmc6IDEycHggMTZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4uZHJvcGRvd24gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGRkO1xcbn1cXG5cXG4uc2hvdyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLyogZHJvcERvd24gQ1NTIEVuZHMgICovXFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiZXhwb3J0IGNvbnN0IGZldGNoQXBpRGF0YSA9ICh0eXBlKSA9PiB7XG4gIHJldHVybiBmZXRjaChgaHR0cHM6Ly93aGF0LXMtY29va2luLXN0YXJ0ZXIta2l0Lmhlcm9rdWFwcC5jb20vYXBpL3YxLyR7dHlwZX1gKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gXG4gICAgcmVzcG9uc2UuanNvbigpKVxuICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZygnZmV0Y2ggZXJyb3InLCBlcnJvcikpXG59OyIsImNvbnN0IHsgaW5ncmVkaWVudHNEYXRhIH0gPSByZXF1aXJlKFwiLi4vZGF0YS9pbmdyZWRpZW50c1wiKTtcblxuY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlRGF0YSkge1xuICAgIHRoaXMuaWQgPSByZWNpcGVEYXRhLmlkO1xuICAgIHRoaXMuaW1hZ2UgPSByZWNpcGVEYXRhLmltYWdlO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSByZWNpcGVEYXRhLmluZ3JlZGllbnRzO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlRGF0YS5pbnN0cnVjdGlvbnM7XG4gICAgdGhpcy5uYW1lID0gcmVjaXBlRGF0YS5uYW1lO1xuICAgIHRoaXMudGFncyA9IHJlY2lwZURhdGEudGFncztcbiAgfVxuXG4gIGZpbmRSZWNpcGVJbmdyZWRpZW50SW5mbygpIHtcbiAgICBjb25zdCByZWNpcGVJbmdyZWRpZW50cyA9IHRoaXMuaW5ncmVkaWVudHMubWFwKHJlY2lwZUluZ3JlZGllbnQgPT4ge1xuICAgICAgY29uc3QgaW5ncmVkaWVudE5hbWVzID0gaW5ncmVkaWVudHNEYXRhLmZpbmQoaW5ncmVkaWVudEl0ZW0gPT4gaW5ncmVkaWVudEl0ZW0uaWQgPT09IHJlY2lwZUluZ3JlZGllbnQuaWQpO1xuICAgICAgcmV0dXJuIGluZ3JlZGllbnROYW1lcy5uYW1lO1xuICAgIH0pO1xuICAgIHJldHVybiByZWNpcGVJbmdyZWRpZW50cztcbiAgfVxuXG4gIGdldFJlY2lwZUluc3RydWN0aW9ucygpIHtcbiAgICBjb25zdCBpbnN0cnVjdGlvbkJ5T3JkZXIgPSB0aGlzLmluc3RydWN0aW9ucy5tYXAoKGVsZW0pID0+IHtcbiAgICAgcmV0dXJuIGVsZW0uaW5zdHJ1Y3Rpb25cbiAgfSlcbiAgcmV0dXJuIGluc3RydWN0aW9uQnlPcmRlclxufVxuICBcbiAgY2FsY3VsYXRlUmVjaXBlQ29zdCgpIHtcbiAgICBsZXQgdG90YWxDb3N0O1xuICAgICAgIGNvbnN0IHRvdGFsID0gdGhpcy5pbmdyZWRpZW50cy5yZWR1Y2UoKGFjYywgcmVjaXBlSW5ncmVkaWVudCkgPT4ge1xuICAgICAgICAgbGV0IGZvdW5kSUQgPSBpbmdyZWRpZW50c0RhdGEuZmluZChlbGVtID0+IHtyZXR1cm4gZWxlbS5pZCA9PT0gcmVjaXBlSW5ncmVkaWVudC5pZH0pO1xuICAgICAgICAgdG90YWxDb3N0ID0gKHJlY2lwZUluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50ICogZm91bmRJRC5lc3RpbWF0ZWRDb3N0SW5DZW50cykgLyAxMDA7XG4gICAgICAgICBhY2MgKz0gdG90YWxDb3N0O1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgfSwgMCk7XG4gICAgcmV0dXJuIHRvdGFsLnRvRml4ZWQoMik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZTsiLCJjb25zdCB7IHJlY2lwZURhdGEgfSA9IHJlcXVpcmUoXCIuLi9kYXRhL3JlY2lwZXNcIik7XG5jb25zdCB7IGluZ3JlZGllbnRzRGF0YSB9ID0gcmVxdWlyZShcIi4uL2RhdGEvaW5ncmVkaWVudHNcIik7XG5cbmNsYXNzIFJlY2lwZUJveCB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZXNDb2xsZWN0aW9uKSB7XG4gICAgdGhpcy5yZWNpcGVzQ29sbGVjdGlvbiA9IHJlY2lwZXNDb2xsZWN0aW9uO1xuICAgIHRoaXMubWF0Y2hpbmdSZWNpcGVzVGFncyA9IFtdO1xuICAgIHRoaXMubWF0Y2hpbmdSZWNpcGVzID0gW107XG4gICAgdGhpcy5yZWNpcGVNYXRjaCA9IFtdO1xuICB9XG4gIHN0b3JlQnlUYWcodGhlVXNlcklucHV0KSB7XG4gICAgdGhpcy5yZWNpcGVzQ29sbGVjdGlvbi5mb3JFYWNoKChyZWNpcGUpID0+IHtcbiAgICAgIGlmKHJlY2lwZS50YWdzLmluY2x1ZGVzKHRoZVVzZXJJbnB1dCkgJiYgIXRoaXMubWF0Y2hpbmdSZWNpcGVzVGFncy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICAgIHRoaXMubWF0Y2hpbmdSZWNpcGVzVGFncy5wdXNoKHJlY2lwZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0aGlzLm1hdGNoaW5nUmVjaXBlc1RhZ3M7XG4gIH1cbiAgXG4gIGZpbmRSZWNpcGVOYW1lKHRoZVVzZXJJbnB1dCkge1xuICAgIHRoaXMucmVjaXBlc0NvbGxlY3Rpb24uZm9yRWFjaCgocmVjaXBlKSA9PiB7XG4gICAgICBsZXQgbG93ZXJDYXNlZE5hbWUgPSByZWNpcGUubmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYobG93ZXJDYXNlZE5hbWUuaW5jbHVkZXModGhlVXNlcklucHV0KSAmJiAhdGhpcy5tYXRjaGluZ1JlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgICB0aGlzLm1hdGNoaW5nUmVjaXBlcy5wdXNoKHJlY2lwZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0aGlzLm1hdGNoaW5nUmVjaXBlcztcbiAgfVxuXG4gIGZpbmRJbmdyZWRpZW50QnlJZCh0aGVVc2VySW5wdXQpIHtcbiAgICBsZXQgbWF0Y2hpbmdJbmdyZWRpZW50SWQgPSBudWxsO1xuICAgIGluZ3JlZGllbnRzRGF0YS5mb3JFYWNoKChpbmdyZWRpZW50KSA9PiB7XG4gICAgICBpZihpbmdyZWRpZW50Lm5hbWUgPT09IHRoZVVzZXJJbnB1dCkge1xuICAgICAgICBtYXRjaGluZ0luZ3JlZGllbnRJZCA9IGluZ3JlZGllbnQuaWRcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMucmVjaXBlc0NvbGxlY3Rpb24uZm9yRWFjaCgocmVjaXBlKSA9PiB7XG4gICAgICByZWNpcGUuaW5ncmVkaWVudHMuZm9yRWFjaCgoaW5ncmVkaWVudCkgPT4ge1xuICAgICAgICBpZihpbmdyZWRpZW50LmlkID09PSBtYXRjaGluZ0luZ3JlZGllbnRJZCkge1xuICAgICAgICAgIHRoaXMucmVjaXBlTWF0Y2gucHVzaChyZWNpcGUpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfSlcbiAgICByZXR1cm4gdGhpcy5yZWNpcGVNYXRjaDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWNpcGVCb3g7XG4gXG5cbi8vU2hvdWxkIGJlIGFibGUgdG8gdGFrZSBpbiByZWNpcGUgZGF0YVxuLy93ZSdyZSBwYXNzaW5nIGluIHJlY2lwZURhdGEgYXJyYXkgYXMgdGhlIHBhcmFtZXRlclxuICAvL2NyZWF0ZSBuZXcgaW5zdGFuY2Ugb2YgcmVjaXBlIGJveCB3aWxsIGhvdXNlIHRoZSBlbnRpcmUgcmVjaXBlcyBhcnJheSBvZiBvYmplY3RcbiAgLy9jcmVhdGUgMyBuZXcgaW5zdGFuY2VzIG9mIHJlY2lwZSB0byBwYXNzIGFzIG9uZSByZWNpcGVCb3ggYXJyYXkgdG8gdGVzdCBcbiAgLy9nb2FsOiByZXR1cm4gcmVjaXBlRGF0YSBcbiAgLy9leGFtcGxlOiBjb25zdCByZWNpcGUxID0gbmV3IFJlY2lwZShpZCwgaW1hZ2UsIGluZ3JlZGllbnRzLCBpbnN0cnVjdGlvbnMsIG5hbWUsIHRhZ3MpXG4gIC8vIGNvbnN0IHJlY2lwZTIgPSBuZXcgUmVjaXBlKGlkLCBpbWFnZSwgaW5ncmVkaWVudHMsIGluc3RydWN0aW9ucywgbmFtZSwgdGFncylcbiAgLy9jb25zdCByZWNpcGUzID0gbmV3IFJlY2lwZShpZCwgaW1hZ2UsIGluZ3JlZGllbnRzLCBpbnN0cnVjdGlvbnMsIG5hbWUsIHRhZ3MpXG4gIC8vY29uc3QgcmVjaXBlQm94ID0gbmV3IFJlY2lwZUJveChyZWNpcGUxLCByZWNpcGUyLCByZWNpcGUzKVxuICBcbi8vU2hvdWxkIGJlIGFibGUgdG8gc3RvcmUgcmVjaXBlcyBieSBvbmUgb3IgbW9yZSB0YWcvbmFtZVxuICAvL2dpdmVuIHRoZSB0YWcgXG4gIC8vaXRlcmF0ZSB0aHJvdWdoIHRoZSByZWNpcGVEYXRhIGZvciB0YWdzIGFycmF5XG4gIC8vaXRlcmF0ZSB0aHJvdWdoIHRoZSB0YWdzIGFycmF5IFxuICAvL2lmIHRhZyBpcyBpbmNsdWRlZCBpbiBhcnJheVxuICAvL3B1c2ggcmVjaXBlIGludG8gbmV3IGFycmF5IFxuICAvL3JldHVybiBhbiB0aGF0IG5ldyBhcnJheSBvZiByZWNpcGVzIHRoYXQgaW5jbHVkZSB0aGUgdGFnIFxuICAvL0lmIHRhZy5pbmNsdWRlcyAnc3RyaW5nIG5hbWUgb2YgdGFnJyBcbiAgLy9UaGVuIHJldHVybiB0aGUgd2hvbGUgb2JqZWN0IGluIG5ldyBhcnJheSBcbi8vU2hvdWxkIGJlIGFibGUgdG8gZmlsdGVyIHJlY2lwZXMgYmFzZWQgb24gbmFtZSBcbiAgXG4vL3Nob3VsZCBiZSBhYmxlIHRvIGZpbHRlciByZWNpcGVzIGJhc2VkIG9uIGluZ3JlZGllbnRzIFxuLy9oYXZlIGEgdXNlciBpbnB1dCwgZmlsdGVyIHRocm91Z2ggaW5ncmVkaWVudHNEYXRhIGZvciBpbmdyZWRpZW50c0RhdGEubmFtZVxuLy9yZXR1cm4gdGhlIGluZ3JlZGllbnRzRGF0YS5pZCBcbi8vY29tcGFyZSBpbmdyZWRpZW50c0RhdGEuaWQgdG8gcmVjaXBlc0RhdGEuaW5ncmVkaWVudHMuaWRcbi8vaWYgdGhleSBtYXRjaCB0aGVuIHB1c2ggcmVjaXBlIGludG8gbWF0Y2hpbmdJbmdyZWRpZW50c0FycmF5IiwiLy8gY29uc3QgeyByZWNpcGVEYXRhIH0gPSByZXF1aXJlKFwiLi4vZGF0YS9yZWNpcGVzXCIpO1xuY29uc3QgeyBpbmdyZWRpZW50c0RhdGEgfSA9IHJlcXVpcmUoXCIuLi9kYXRhL2luZ3JlZGllbnRzXCIpO1xuLy8gaW1wb3J0IFJlY2lwZSBmcm9tICcuLi9zcmMvY2xhc3Nlcy9SZWNpcGUnO1xuXG5cbmNsYXNzIFVzZXIge1xuICBjb25zdHJ1Y3RvcihodW1hbikge1xuICAgIHRoaXMubmFtZSA9IGh1bWFuLm5hbWU7XG4gICAgdGhpcy5pZCA9IGh1bWFuLmlkO1xuICAgIHRoaXMucGFudHJ5ID0gaHVtYW4ucGFudHJ5O1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzID0gW107XG4gICAgdGhpcy5yZWNpcGVzVG9Db29rID0gW107XG4gICAgdGhpcy5yZWNpcGVNYXRjaCA9IFtdO1xuICAgIHRoaXMubWF0Y2hpbmdSZWNpcGVzID0gW107XG4gICAgdGhpcy5tYXRjaGluZ1JlY2lwZXNUYWdzID0gW107XG4gIH1cblxuICBcbiAgYWRkRmF2b3JpdGVSZWNpcGUocmVjaXBlKSB7XG4gICAgaWYoIXRoaXMuZmF2b3JpdGVSZWNpcGVzLmluY2x1ZGVzKHJlY2lwZSkpIHtcbiAgICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnB1c2gocmVjaXBlKVxuICAgIH1cbiAgfVxuICByZW1vdmVGYXZvcml0ZVJlY2lwZShyZWNpcGUpIHtcbiAgICBpZih0aGlzLmZhdm9yaXRlUmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5zcGxpY2UocmVjaXBlLCAxKVxuICAgIH1cbiAgfVxuICBhZGRSZWNpcGVUb0Nvb2socmVjaXBlKSB7XG4gICAgaWYoIXRoaXMucmVjaXBlc1RvQ29vay5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzLnJlY2lwZXNUb0Nvb2sucHVzaChyZWNpcGUpXG4gICAgfVxuICB9XG4gIHJlbW92ZVJlY2lwZVRvQ29vayhyZWNpcGUpIHtcbiAgICBpZih0aGlzLnJlY2lwZXNUb0Nvb2suaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpcy5yZWNpcGVzVG9Db29rLnNwbGljZShyZWNpcGUsIDEpXG4gICAgfVxuICB9XG4gIGZpbHRlckZhdm9yaXRlc0J5TmFtZSh1c2VySW5wdXQpIHtcbiAgICBsZXQgbG93ZXJDYXNlZFVzZXJJbnB1dCA9IHVzZXJJbnB1dC50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLmZvckVhY2goKHJlY2lwZSkgPT4ge1xuICAgICAgbGV0IGxvd2VyQ2FzZWROYW1lID0gcmVjaXBlLm5hbWUudG9Mb3dlckNhc2UoKTtcbiAgICAgIGlmKGxvd2VyQ2FzZWROYW1lLmluY2x1ZGVzKGxvd2VyQ2FzZWRVc2VySW5wdXQpKSB7XG4gICAgICAgIHRoaXMubWF0Y2hpbmdSZWNpcGVzLnB1c2gocmVjaXBlKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHRoaXMubWF0Y2hpbmdSZWNpcGVzO1xuICB9XG5cbiAgZmlsdGVyRmF2b3JpdGVzQnlJbmdyZWRpZW50KHVzZXJJbnB1dCkge1xuICAgIGxldCBtYXRjaGluZ0luZ3JlZGllbnRJZCA9IG51bGw7XG4gICAgaW5ncmVkaWVudHNEYXRhLmZvckVhY2goKGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGlmKGluZ3JlZGllbnQubmFtZSA9PT0gdXNlcklucHV0KSB7XG4gICAgICAgIG1hdGNoaW5nSW5ncmVkaW50SWQgPSBpbmdyZWRpZW50LmlkXG4gICAgICB9XG4gICAgfSlcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcy5mb3JFYWNoKChyZWNpcGUpID0+IHtcbiAgICAgIHJlY2lwZS5pbmdyZWRpZW50cy5mb3JFYWNoKChpbmdyZWRpZW50KSA9PiB7XG4gICAgICAgIGlmKGluZ3JlZGllbnQuaWQgPT09IG1hdGNoaW5nSW5ncmVkaWVudElkKSB7XG4gICAgICAgICAgdGhpcy5yZWNpcGVNYXRjaC5wdXNoKHJlY2lwZSlcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9KVxuICAgIHJldHVybiB0aGlzLnJlY2lwZU1hdGNoO1xuICB9XG5cbiAgZmlsdGVyRmF2b3JpdGVzQnlUYWcodXNlcklucHV0KSB7XG4gICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMuZm9yRWFjaCgocmVjaXBlKSA9PiB7XG4gICAgICBpZihyZWNpcGUudGFncy5pbmNsdWRlcyh1c2VySW5wdXQpKSB7XG4gICAgICAgIHRoaXMubWF0Y2hpbmdSZWNpcGVzVGFncy5wdXNoKHJlY2lwZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiB0aGlzLm1hdGNoaW5nUmVjaXBlc1RhZ3M7XG4gIH1cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsImNvbnN0IGluZ3JlZGllbnRzRGF0YSA9IFtcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMDgxLFxuICAgICAgXCJuYW1lXCI6IFwid2hlYXQgZmxvdXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE4MzcyLFxuICAgICAgXCJuYW1lXCI6IFwiYmljYXJib25hdGUgb2Ygc29kYVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1ODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgIFwibmFtZVwiOiBcImVnZ3NcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDcyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgXCJuYW1lXCI6IFwic3Vjcm9zZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5MDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTkyMDYsXG4gICAgICBcIm5hbWVcIjogXCJpbnN0YW50IHZhbmlsbGEgcHVkZGluZ1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICBcIm5hbWVcIjogXCJicm93biBzdWdhclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgIFwibmFtZVwiOiBcInNhbHRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjgwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTIwNDcsXG4gICAgICBcIm5hbWVcIjogXCJmaW5lIHNlYSBzYWx0XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUyOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxOTkwMyxcbiAgICAgIFwibmFtZVwiOiBcInNlbWkgc3dlZXQgY2hpcHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjUzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExNDUsXG4gICAgICBcIm5hbWVcIjogXCJ1bnNhbHRlZCBidXR0ZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjE3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwNTAsXG4gICAgICBcIm5hbWVcIjogXCJ2YW5pbGxhXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkyNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDA5MDE2LFxuICAgICAgXCJuYW1lXCI6IFwiYXBwbGUgY2lkZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkwMDMsXG4gICAgICBcIm5hbWVcIjogXCJhcHBsZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAwMjcsXG4gICAgICBcIm5hbWVcIjogXCJjb3JuIHN0YXJjaFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMjA0NixcbiAgICAgIFwibmFtZVwiOiBcImRpam9uIHN0eWxlIG11c3RhcmRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjE5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgXCJuYW1lXCI6IFwid2hvbGUgZ2FybGljIGNsb3ZlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIyMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDEyMDQ2LFxuICAgICAgXCJuYW1lXCI6IFwid2hvbGUgZ3JhaW4gZGlqb24gbXVzdGFyZFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTk5MTEsXG4gICAgICBcIm5hbWVcIjogXCJtYXBsZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTYxMTIsXG4gICAgICBcIm5hbWVcIjogXCJtaXNvXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk3OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxMDA2MixcbiAgICAgIFwibmFtZVwiOiBcInBvcmsgY2hvcFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MzRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEwMjA0NyxcbiAgICAgIFwibmFtZVwiOiBcInMmcFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MjRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTYxMjQsXG4gICAgICBcIm5hbWVcIjogXCJzb3kgc2F1Y2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTYxNjgsXG4gICAgICBcIm5hbWVcIjogXCJzcmlyYWNoYSBzYXVjZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgIFwibmFtZVwiOiBcImJsYWNrIHBlcHBlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgIFwibmFtZVwiOiBcImJ1dHRlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNDU4MixcbiAgICAgIFwibmFtZVwiOiBcIm9pbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAzMSxcbiAgICAgIFwibmFtZVwiOiBcInJlZCBwZXBwZXIgcG93ZGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU4M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1MTAwLFxuICAgICAgXCJuYW1lXCI6IFwiY2hpY2tlbiB3aW5nXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU5M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDA5LFxuICAgICAgXCJuYW1lXCI6IFwicmVkIGNoaWxpIHBvd2RlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0OTlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAyMjAyMCxcbiAgICAgIFwibmFtZVwiOiBcImdhcmxpYyBwb3dkZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzQ0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDYxNjgsXG4gICAgICBcIm5hbWVcIjogXCJ0YWJhc2NvIHNhdWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg1OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MTc2LFxuICAgICAgXCJuYW1lXCI6IFwibWFuZ29lc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAyNixcbiAgICAgIFwibmFtZVwiOiBcIm9uaW9uIHBvd2RlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1OTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTA0MjA0NyxcbiAgICAgIFwibmFtZVwiOiBcInNlYXNvbmVkIHNhbHRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzM0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE4MzcxLFxuICAgICAgXCJuYW1lXCI6IFwiYmFraW5nIHBvd2RlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNDZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTA0MCxcbiAgICAgIFwibmFtZVwiOiBcInJpcGUgYmFuYW5hXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMzMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDAxMSxcbiAgICAgIFwibmFtZVwiOiBcImJ1Y2sgd2hlYXQgZmxvdXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODY1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEyMzAsXG4gICAgICBcIm5hbWVcIjogXCJidXR0ZXJtaWxrXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc3M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxOTI5NixcbiAgICAgIFwibmFtZVwiOiBcInJ1bm55IGhvbmV5XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxNjA5OCxcbiAgICAgIFwibmFtZVwiOiBcInBlYW51dCBidXR0ZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDkwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwNDgsXG4gICAgICBcIm5hbWVcIjogXCJhcHBsZSBjaWRlciB2aW5lZ2FyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUzMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDA5MCxcbiAgICAgIFwibmFtZVwiOiBcImJyb3duIHJpY2UgZmxvdXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjY3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNzg0LFxuICAgICAgXCJuYW1lXCI6IFwiYnJvd24gcmljZSBzeXJ1cFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMjZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEyNCxcbiAgICAgIFwibmFtZVwiOiBcImVnZyBhbGJ1bWVuXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMwNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzYyNSxcbiAgICAgIFwibmFtZVwiOiBcImV2YXBvcmF0ZWQgY2FuZSBqdWljZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTIyMjAsXG4gICAgICBcIm5hbWVcIjogXCJmbGF4IG1lYWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTE4Mzc1LFxuICAgICAgXCJuYW1lXCI6IFwiaW5zdGFudCB5ZWFzdFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzODNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTkzMDQsXG4gICAgICBcIm5hbWVcIjogXCJ1bnN1bGZ1cmVkIG1vbGFzc2VzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkyNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTQxMyxcbiAgICAgIFwibmFtZVwiOiBcIlBvdGF0byBTdGFyY2ggRmxvdXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODk1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNjk2LFxuICAgICAgXCJuYW1lXCI6IFwidGFwaW9jYSBzdGFyY2hcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNzYwLFxuICAgICAgXCJuYW1lXCI6IFwiV2hvbGUgR3JhaW4gVGVmZiBGbG91clwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MzlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTQ0MTIsXG4gICAgICBcIm5hbWVcIjogXCJpY2Ugd2F0ZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNjI2LFxuICAgICAgXCJuYW1lXCI6IFwieGFudGhhbiBndW1cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjI1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE5MzUwLFxuICAgICAgXCJuYW1lXCI6IFwiY29ybiBzeXJ1cFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTA5OSxcbiAgICAgIFwibmFtZVwiOiBcImZydWl0IGNvY2t0YWlsXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk1M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMjA2MSxcbiAgICAgIFwibmFtZVwiOiBcIndob2xlIGFsbW9uZHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAyOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMjEwNCxcbiAgICAgIFwibmFtZVwiOiBcImNvY29udXRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTE4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEyMTE1LFxuICAgICAgXCJuYW1lXCI6IFwiY29jb251dCBjcmVhbVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNDA0NyxcbiAgICAgIFwibmFtZVwiOiBcImNvY29udXQgb2lsXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE1MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxOTA3MSxcbiAgICAgIFwibmFtZVwiOiBcImRhcmsgY2hvY29sYXRlIG1vcnNlbHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjMyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDgyMTIsXG4gICAgICBcIm5hbWVcIjogXCJncmFub2xhIGNlcmVhbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzODFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogODEyMSxcbiAgICAgIFwibmFtZVwiOiBcIm9hdG1lYWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEyMTQyLFxuICAgICAgXCJuYW1lXCI6IFwicGVjYW5cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNzQwLFxuICAgICAgXCJuYW1lXCI6IFwiYmxhbmNoZWQgYWxtb25kIGZsb3VyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk4NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTI1LFxuICAgICAgXCJuYW1lXCI6IFwiZWdnIHlvbGtzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg4OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMjAyMyxcbiAgICAgIFwibmFtZVwiOiBcInNlc2FtZSBzZWVkc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4ODZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxNTA2MixcbiAgICAgIFwibmFtZVwiOiBcImNoaWNrZW4gdGVuZGVyc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTExMDksXG4gICAgICBcIm5hbWVcIjogXCJzbGF3IG1peFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2ODFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxMTYwOTgsXG4gICAgICBcIm5hbWVcIjogXCJjcmVhbXkgcGVhbnV0IGJ1dHRlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjA2NCxcbiAgICAgIFwibmFtZVwiOiBcIm1pbnRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTc1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMjEsXG4gICAgICBcIm5hbWVcIjogXCJwb3dkZXJlZCBnaW5nZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzgzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkxNjAsXG4gICAgICBcIm5hbWVcIjogXCJqdWljZSBvZiBsaW1lXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ3N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MjY2LFxuICAgICAgXCJuYW1lXCI6IFwicGluZWFwcGxlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgzNFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTEzNSxcbiAgICAgIFwibmFtZVwiOiBcImNhdWxpZmxvd2VyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ4NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2MTcyLFxuICAgICAgXCJuYW1lXCI6IFwiY2hpY2tlbiBzdG9ja1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NTRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM2MzIsXG4gICAgICBcIm5hbWVcIjogXCJnaGVlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM3MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMjEyMCxcbiAgICAgIFwibmFtZVwiOiBcImhhemVsbnV0XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgxMlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzY5MCxcbiAgICAgIFwibmFtZVwiOiBcIm51dHJpdGlvbmFsIHllYXN0IGZsYWtlc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICBcIm5hbWVcIjogXCJvbmlvbnNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDM5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDEwMTIzLFxuICAgICAgXCJuYW1lXCI6IFwicHJvc2N1aXR0b1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEwOTYsXG4gICAgICBcIm5hbWVcIjogXCJyYXBpbmlcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODQ2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDYxNTAsXG4gICAgICBcIm5hbWVcIjogXCJiYXIgYiBxdWUgc2F1Y2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTY2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDYxOTQsXG4gICAgICBcIm5hbWVcIjogXCJjaGlja2VuIGJyb3RoXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk4M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzYyNyxcbiAgICAgIFwibmFtZVwiOiBcImxpcXVpZCBzbW9rZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAyOCxcbiAgICAgIFwibmFtZVwiOiBcInBhcHJpa2FcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzAyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDcyLFxuICAgICAgXCJuYW1lXCI6IFwicG9yayBzaG91bGRlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NjlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjk3MSxcbiAgICAgIFwibmFtZVwiOiBcIndvcmNlc3RlcnNoaXJlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDU3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNjA3LFxuICAgICAgXCJuYW1lXCI6IFwiYWxtb25kbWlsa1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3ODdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTg5NDIsXG4gICAgICBcIm5hbWVcIjogXCJncmFoYW0gY3JhY2tlciBjcnVzdFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAxMjAxMCxcbiAgICAgIFwibmFtZVwiOiBcImdyb3VuZCBjaW5uYW1vblwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3NDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAyNSxcbiAgICAgIFwibmFtZVwiOiBcIm51dG1lZyBwb3dkZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDgwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDQzMjc0LFxuICAgICAgXCJuYW1lXCI6IFwibG93IGZhdCBjcmVhbSBjaGVlc2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTA0OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA4MTIwLFxuICAgICAgXCJuYW1lXCI6IFwid2hvbGUgZ3JhaW4gcm9sbGVkIG9hdHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE0MjQsXG4gICAgICBcIm5hbWVcIjogXCJjYW5uZWQgcHVtcGtpblwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTAxNixcbiAgICAgIFwibmFtZVwiOiBcImFwcGxlIGp1aWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcxMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxODA0NyxcbiAgICAgIFwibmFtZVwiOiBcInJhaXNpbiBicmVhZFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTA4OTAwMyxcbiAgICAgIFwibmFtZVwiOiBcImdyYW5ueXNtaXRoIGFwcGxlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ1OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDc3LFxuICAgICAgXCJuYW1lXCI6IFwiZnVsbC1mYXQgbWlsa1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNzZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEyOTcsXG4gICAgICBcIm5hbWVcIjogXCJmbGF0IGxlYWYgcGFyc2xleSBsZWF2ZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAzMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDMyMDA5LFxuICAgICAgXCJuYW1lXCI6IFwiZHJpZWQgcmVkIGNoaWxpXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTUxNTIsXG4gICAgICBcIm5hbWVcIjogXCJqdW1ibyBzaHJpbXBcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODA0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjk0LFxuICAgICAgXCJuYW1lXCI6IFwidmlkYWxpYSBvbmlvblwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1OTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEwMDcsXG4gICAgICBcIm5hbWVcIjogXCJhcnRpY2hva2VzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MTUwLFxuICAgICAgXCJuYW1lXCI6IFwibGVtb25cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzY2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkxNTYsXG4gICAgICBcIm5hbWVcIjogXCJsZW1vbiBwZWVsXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYzMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxODA2OSxcbiAgICAgIFwibmFtZVwiOiBcImdsdXRlbi1mcmVlIHdoaXRlIHNhbmR3aWNoIGJyZWFkXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2M1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDMzLFxuICAgICAgXCJuYW1lXCI6IFwicGFybWVzYW4gY2hlZXNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM5OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDI3LFxuICAgICAgXCJuYW1lXCI6IFwib3JlZ2Fub1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAzNDA1MyxcbiAgICAgIFwibmFtZVwiOiBcImV4dHJhIHZpcmdpbiBvbGl2ZSBvaWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzA1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMDQsXG4gICAgICBcIm5hbWVcIjogXCJiYXkgbGVhdmVzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDc4NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxOTMzNixcbiAgICAgIFwibmFtZVwiOiBcInBvd2RlcmVkIHN1Z2FyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYwM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTE0MyxcbiAgICAgIFwibmFtZVwiOiBcImNlbGVyeVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEyOSxcbiAgICAgIFwibmFtZVwiOiBcImhhcmRjb29rZWQgZWdnc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4ODJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNDY0MSxcbiAgICAgIFwibmFtZVwiOiBcInJlZHVjZWQgZmF0IG1heW9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjk3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTEyNTYsXG4gICAgICBcIm5hbWVcIjogXCJza2ltIGdyZWVrIHlvZ3VydFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNjNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE5NDQsXG4gICAgICBcIm5hbWVcIjogXCJob3Rkb2cgcmVsaXNoXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM5MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxMTI4MixcbiAgICAgIFwibmFtZVwiOiBcInJlZCBvbmlvblwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2MzhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEzNTMsXG4gICAgICBcIm5hbWVcIjogXCJpZGFobyBwb3RhdG9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMjExODIxLFxuICAgICAgXCJuYW1lXCI6IFwiYmVsbCBwZXBwZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDIwMDQ4LFxuICAgICAgXCJuYW1lXCI6IFwiYnJvd24gbWludXRlIHJpY2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzNjUxLFxuICAgICAgXCJuYW1lXCI6IFwiaXRhbGlhbiBjaGVlc2UgYmxlbmRcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjMzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDc5MjcsXG4gICAgICBcIm5hbWVcIjogXCJzd2VldCBpdGFsaWFuIHR1cmtleSBzYXVzYWdlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIxNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTU0OSxcbiAgICAgIFwibmFtZVwiOiBcImNhbm5lZCB0b21hdG8gc2F1Y2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjIyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTIwMTI5LFxuICAgICAgXCJuYW1lXCI6IFwiYnJlYWQgZmxvdXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwNTMsXG4gICAgICBcIm5hbWVcIjogXCJjcmVhbVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgIFwibmFtZVwiOiBcInB1cmUgb2xpdmUgb2lsXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcwNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxOTkxMixcbiAgICAgIFwibmFtZVwiOiBcImFnYXZlIHN5cnVwXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY0MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAyMDA4MCxcbiAgICAgIFwibmFtZVwiOiBcInBhc3RyeSBmbG91clwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0OTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTkzMzQsXG4gICAgICBcIm5hbWVcIjogXCJkYXJrIGJyb3duIHN1Z2FyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUwMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzgxNCxcbiAgICAgIFwibmFtZVwiOiBcImxpZ2h0bHkgc3dlZXRlbmVkIHdoaXBwZWQgY3JlYW1cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEyMDYsXG4gICAgICBcIm5hbWVcIjogXCJjdWN1bWJlclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNjJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAwMzUsXG4gICAgICBcIm5hbWVcIjogXCJxdWlub2FcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExNTI5LFxuICAgICAgXCJuYW1lXCI6IFwiaGVpcmxvb20gdG9tYXRvZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE0MjQyLFxuICAgICAgXCJuYW1lXCI6IFwiY3JhbmJlcnJ5IGp1aWNlIGNvY2t0YWlsXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMzNVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxNDEzMCxcbiAgICAgIFwibmFtZVwiOiBcImNyZWFtIHNvZGFcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTg1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE5MTc3LFxuICAgICAgXCJuYW1lXCI6IFwiZ2VsYXRpbmVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAxMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MzY0NSxcbiAgICAgIFwibmFtZVwiOiBcImhhbGxvd2VlbiBzcHJpbmtsZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjkzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE0MDUxLFxuICAgICAgXCJuYW1lXCI6IFwiZ3JleSBnb29zZSB2b2RrYVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNzNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTA1NCxcbiAgICAgIFwibmFtZVwiOiBcIndoaXBwZWQgY3JlYW1cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjg5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzODI4LFxuICAgICAgXCJuYW1lXCI6IFwibWFyaW5hdGVkIGFydGljaG9rZSBoZWFydHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjY2LFxuICAgICAgXCJuYW1lXCI6IFwiY3JpbWluaSBtdXNocm9vbXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTUwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTcsXG4gICAgICBcIm5hbWVcIjogXCJjcmVhbSBjaGVlc2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTU1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTksXG4gICAgICBcIm5hbWVcIjogXCJmZXRhXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMDNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAyMjAyNyxcbiAgICAgIFwibmFtZVwiOiBcIm1peGVkIGl0YWxpYW4gaGVyYnNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjUzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwODIwNDcsXG4gICAgICBcIm5hbWVcIjogXCJrb3NoZXIgc2FsdFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NzJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTE0NTcsXG4gICAgICBcIm5hbWVcIjogXCJzcGluYWNoXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMzNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDQ0LFxuICAgICAgXCJuYW1lXCI6IFwiYmFzaWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjAzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDcwMzYsXG4gICAgICBcIm5hbWVcIjogXCJpdGFsaWFuIHNhdXNhZ2UgbGlua3NcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAxMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDExMTU0OSxcbiAgICAgIFwibmFtZVwiOiBcIm1hcmluYXJhIHNhdWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE3MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDM4LFxuICAgICAgXCJuYW1lXCI6IFwicGVjb3Jpbm8gcm9tYW5vIGNoZWVzZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTMwNCxcbiAgICAgIFwibmFtZVwiOiBcInBlYXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExNjc3LFxuICAgICAgXCJuYW1lXCI6IFwic2hhbGxvdHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjk2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMDIwNDIwLFxuICAgICAgXCJuYW1lXCI6IFwicGFzdGEgc2hlbGxzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxMDI2LFxuICAgICAgXCJuYW1lXCI6IFwic2hyZWRkZWQgbW96emFyZWxsYVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxODRcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM2MzAsXG4gICAgICBcIm5hbWVcIjogXCJza2ltIG1pbGsgcmljb3R0YSBjaGVlc2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzk1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE0MTA2LFxuICAgICAgXCJuYW1lXCI6IFwid2hpdGUgd2luZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA2NzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE0NjMsXG4gICAgICBcIm5hbWVcIjogXCJmcm96ZW4gc3BpbmFjaFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MzBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAyNSxcbiAgICAgIFwibmFtZVwiOiBcInBlcHBlcmphY2tcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjEyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDE0NjIzLFxuICAgICAgXCJuYW1lXCI6IFwiYmxhY2tiZXJyeSBqdWljZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTMwMixcbiAgICAgIFwibmFtZVwiOiBcInJhc3BiZXJyeVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTM1NCxcbiAgICAgIFwibmFtZVwiOiBcInBpbmVhcHBsZSB3aXRoIGp1aWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkyNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MDcwLFxuICAgICAgXCJuYW1lXCI6IFwic3dlZXQgY2hlcnJpZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTg0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDE0MTgxLFxuICAgICAgXCJuYW1lXCI6IFwiY2hvY29sYXRlIHN5cnVwXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDUzMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDAxODYxNyxcbiAgICAgIFwibmFtZVwiOiBcImdyYWhhbSBjcmFja2VyIGNydW1ic1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTIxMzUsXG4gICAgICBcIm5hbWVcIjogXCJudXRzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk3OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MDM3LFxuICAgICAgXCJuYW1lXCI6IFwiaGFhcyBhdm9jYWRvc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTYwNTcsXG4gICAgICBcIm5hbWVcIjogXCJnYXJiYW56b3NcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjA0NSxcbiAgICAgIFwibmFtZVwiOiBcImRpbGx3ZWVkXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE2MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMjU2LFxuICAgICAgXCJuYW1lXCI6IFwiZ3JlZWsgeW9ndXJ0XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIzMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MTUyLFxuICAgICAgXCJuYW1lXCI6IFwibGVtb24ganVpY2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjc0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjkxLFxuICAgICAgXCJuYW1lXCI6IFwic3ByaW5nIG9uaW9uc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MjM2LFxuICAgICAgXCJuYW1lXCI6IFwicGVhY2hlc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTkwOTUsXG4gICAgICBcIm5hbWVcIjogXCJpY2VjcmVhbVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0NDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTA4NjIsXG4gICAgICBcIm5hbWVcIjogXCJjb29rZWQgYmFjb24gc3RyaXBzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDg2OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1MTE0LFxuICAgICAgXCJuYW1lXCI6IFwicm9hc3RlZCBjaGlja2VuXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDcwOFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTMzMyxcbiAgICAgIFwibmFtZVwiOiBcImdyZWVuIHBlcHBlcnNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzAzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMjYsXG4gICAgICBcIm5hbWVcIjogXCJmcmVzaCBtb3p6YXJlbGxhXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5MFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDIxMTUyOSxcbiAgICAgIFwibmFtZVwiOiBcIml0YWxpYW4gdG9tYXRvXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk3OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDExMDA5LFxuICAgICAgXCJuYW1lXCI6IFwid2hpdGUgY2hlZGRhclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA3MDlcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjA1XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDk4OTk4LFxuICAgICAgXCJuYW1lXCI6IFwiYmFsc2FtaWMgZ2xhemVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDgwMzAsXG4gICAgICBcIm5hbWVcIjogXCJmcnVpdCBsb29wc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxOTFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTkxMTYsXG4gICAgICBcIm5hbWVcIjogXCJtYXJzaG1hbGxvd1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MjVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTYxNTgsXG4gICAgICBcIm5hbWVcIjogXCJodW1tdXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNDkxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwNDYsXG4gICAgICBcIm5hbWVcIjogXCJwcmVwYXJlZCB5ZWxsb3cgbXVzdGFyZFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTIxNCxcbiAgICAgIFwibmFtZVwiOiBcImV2YXBvcmF0ZWQgbWlsa1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA5NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MjE0LFxuICAgICAgXCJuYW1lXCI6IFwib3JhbmdlIGp1aWNlIGNvbmNlbnRyYXRlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDM3OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MjE2LFxuICAgICAgXCJuYW1lXCI6IFwib3JhbmdlIHBlZWxcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODgyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMTIzLFxuICAgICAgXCJuYW1lXCI6IFwiYmFjb24gc2xpY2VzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDgxN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTA1MixcbiAgICAgIFwibmFtZVwiOiBcInN0cmluZyBiZWFuc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MDJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE5NTksXG4gICAgICBcIm5hbWVcIjogXCJiYWJ5IGFydWd1bGEgbGVhdmVzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDIwN1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDA0LFxuICAgICAgXCJuYW1lXCI6IFwiYmx1ZSBjaGVlc2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjQ2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkyNTIsXG4gICAgICBcIm5hbWVcIjogXCJwZWFyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ2N1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA0MzQwOCxcbiAgICAgIFwibmFtZVwiOiBcInBlYXIganVpY2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTYzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwNDksXG4gICAgICBcIm5hbWVcIjogXCJmcmVzaCB0aHltZSBsZWF2ZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjgxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEyMTU1LFxuICAgICAgXCJuYW1lXCI6IFwid2FsbnV0IGhhbHZlc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OTVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTE2OTMsXG4gICAgICBcIm5hbWVcIjogXCJjYW5uZWQgdG9tYXRvXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE3MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTEyNCxcbiAgICAgIFwibmFtZVwiOiBcImNhcnJvdHNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTM2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwMTIsXG4gICAgICBcIm5hbWVcIjogXCJjb3JpYW5kZXJcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMjAxNCxcbiAgICAgIFwibmFtZVwiOiBcImNvbWlub1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NDdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE5MTMsXG4gICAgICBcIm5hbWVcIjogXCJmcm96ZW4gY29yblwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE0NzcsXG4gICAgICBcIm5hbWVcIjogXCJ6dWNjaGluaSBzcXVhc2hcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzQyXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMjIwNDQ1LFxuICAgICAgXCJuYW1lXCI6IFwic3RlYW1lZCByaWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwNDBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAwMyxcbiAgICAgIFwibmFtZVwiOiBcImdyb3VuZCBiYXNpbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxOThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTYwMTgsXG4gICAgICBcIm5hbWVcIjogXCJjYW5uZWQgYmxhY2sgYmVhbnNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzU2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDk5MjIzLFxuICAgICAgXCJuYW1lXCI6IFwiY2FubmVkIGNoaXBvdGxlIGNoaWxpZXMgaW4gYWRvYm9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjk5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMTY1LFxuICAgICAgXCJuYW1lXCI6IFwiY2lsYW50cm9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMjE4MzY0LFxuICAgICAgXCJuYW1lXCI6IFwiZmxvdXIgdG9ydGlsbGFcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjUzXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwNjExMjgyLFxuICAgICAgXCJuYW1lXCI6IFwid2hpdGUgb25pb25zXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDQ0OVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTQ1NyxcbiAgICAgIFwibmFtZVwiOiBcImJhYnkgc3BpbmFjaCBsZWF2ZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjY4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMjY4LFxuICAgICAgXCJuYW1lXCI6IFwiZHJpZWQgc2hpaXRha2UgbXVzaHJvb21cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODA2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDIwMDA1LFxuICAgICAgXCJuYW1lXCI6IFwiZmFycm9cIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMjg2XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwNTExMjgyLFxuICAgICAgXCJuYW1lXCI6IFwieWVsbG93IG9uaW9uXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI0MVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDY5LFxuICAgICAgXCJuYW1lXCI6IFwiYmFsc2FtaWMgdmluZWdhclwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMThcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTEyNTAsXG4gICAgICBcIm5hbWVcIjogXCJib3N0b24gYmliYiBsZXR0dWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMTU2LFxuICAgICAgXCJuYW1lXCI6IFwiZnJlc2ggY2hpdmVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzI4XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDQwMjUsXG4gICAgICBcIm5hbWVcIjogXCJtYXlvbm5haXNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDYzMFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTExOSxcbiAgICAgIFwibmFtZVwiOiBcIm5hcGEgY2FiYmFnZVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDA5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExMTEyLFxuICAgICAgXCJuYW1lXCI6IFwicmVkIGNhYmJhZ2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjU5XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDk4OTYyLFxuICAgICAgXCJuYW1lXCI6IFwic3dlZXQgY2hpbGkgc2F1Y2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMTAwMVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAyMDQyLFxuICAgICAgXCJuYW1lXCI6IFwiZHJpZWQgdGh5bWVcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogMzA3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDIwMjAsXG4gICAgICBcIm5hbWVcIjogXCJncmFudWxhdGVkIGdhcmxpY1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyMjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMjM1NzIsXG4gICAgICBcIm5hbWVcIjogXCJncm91bmQgY2h1Y2tcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjAwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDExMjUwLFxuICAgICAgXCJuYW1lXCI6IFwiYnV0dGVyaGVhZCBsZXR0dWNlIGxlYXZlc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzNDFcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTA2NCxcbiAgICAgIFwibmFtZVwiOiBcImJha2VkIGNoaWNrZW4gYnJlYXN0XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDEwMjBcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjAxNSxcbiAgICAgIFwibmFtZVwiOiBcImN1cnJ5IHNlYXNvbmluZ1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAzMTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwOTE1OSxcbiAgICAgIFwibmFtZVwiOiBcImxpbWUgcGVlbFwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA0MzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTg5OTEsXG4gICAgICBcIm5hbWVcIjogXCJtaW50IGNodXRuZXlcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTI3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDkzMTYsXG4gICAgICBcIm5hbWVcIjogXCJzdHJhd2JlcnJ5XCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDI5MlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMTA5MCxcbiAgICAgIFwibmFtZVwiOiBcImJyb2Njb2xpIGNyb3duc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAyNTZcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTE4MjEsXG4gICAgICBcIm5hbWVcIjogXCJzd2VldCBvcmFuZ2UgcGVwcGVyXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDk2OFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDIxOCxcbiAgICAgIFwibmFtZVwiOiBcInBvcmsgdGVuZGVybG9pblwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4NDVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTkxNTcsXG4gICAgICBcIm5hbWVcIjogXCJtaW5pIG0mbVwiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1NTJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTg4NzEsXG4gICAgICBcIm5hbWVcIjogXCJoYXdhaWlhbiBzd2VldCByb2xsc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA1MzVcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTA1NTA2MixcbiAgICAgIFwibmFtZVwiOiBcImJvbmVsZXNzIHNraW5sZXNzIGNoaWNrZW4gYnJlYXN0c1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4OTdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTAwMTkxNTEsXG4gICAgICBcIm5hbWVcIjogXCJyZWVzZSBwaWVjZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNzIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwNDEwMDksXG4gICAgICBcIm5hbWVcIjogXCJjaGVlc2VcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogODUwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDEwMDE4NDEzLFxuICAgICAgXCJuYW1lXCI6IFwiZmxhdGJyZWFkXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDMyNlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMDExMTUyOSxcbiAgICAgIFwibmFtZVwiOiBcImdyYXBlIHRvbWF0b1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNjhcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogOTAxOSxcbiAgICAgIFwibmFtZVwiOiBcInVuc3dlZXRlbmVkIGFwcGxlIHNhdWNlXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDE1NFxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxODA3OSxcbiAgICAgIFwibmFtZVwiOiBcImRyeSBicmVhZGNydW1ic1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxNjdcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTYwNjksXG4gICAgICBcIm5hbWVcIjogXCJsZWd1bWVzXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDkwM1xuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5MDc5LFxuICAgICAgXCJuYW1lXCI6IFwiZHJpZWQgY3JhbmJlcnJpZXNcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogOTIxXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDExOTM1LFxuICAgICAgXCJuYW1lXCI6IFwiY2F0c3VwXCIsXG4gICAgICBcImVzdGltYXRlZENvc3RJbkNlbnRzXCI6IDY2NlxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiAxMjE1MSxcbiAgICAgIFwibmFtZVwiOiBcInBpc3RhY2hpb1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiA4MTNcbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMTE4MjEsXG4gICAgICBcIm5hbWVcIjogXCJyZWQgc3dlZXQgcGVwcGVyc1wiLFxuICAgICAgXCJlc3RpbWF0ZWRDb3N0SW5DZW50c1wiOiAxMDI3XG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDY2MTUsXG4gICAgICBcIm5hbWVcIjogXCJ2ZWdldGFibGUgc3RvY2tcIixcbiAgICAgIFwiZXN0aW1hdGVkQ29zdEluQ2VudHNcIjogNjEzXG4gICAgfVxuICBdO1xuXG4gIC8vIGV4cG9ydCBkZWZhdWx0IGluZ3JlZGllbnRzRGF0YTtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW5ncmVkaWVudHNEYXRhIFxuICB9XG5cbiIsImNvbnN0IHJlY2lwZURhdGEgPSBbXG4gICAge1xuICAgICAgXCJpZFwiOiA1OTU3MzYsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU5NTczNi01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDgxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODM3MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTIwNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJUYnNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDE5OTAzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbGFyZ2UgbWl4aW5nIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIHRoZSBkcnkgaW5ncmVkaWVudHMgKGZsb3VyLCBwdWRkaW5nIG1peCwgc29kYSBhbmQgc2FsdCkuIFNldCBhc2lkZS5JbiBhIGxhcmdlIG1peGluZyBib3dsIG9mIGEgc3RhbmQgbWl4ZXIsIGNyZWFtIGJ1dHRlciBmb3IgMzAgc2Vjb25kcy4gR3JhZHVhbGx5IGFkZCBncmFudWxhdGVkIHN1Z2FyIGFuZCBicm93biBzdWdhciBhbmQgY3JlYW0gdW50aWwgbGlnaHQgYW5kIGZsdWZmeS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGVnZyBhbmQgdmFuaWxsYSBhbmQgbWl4IHVudGlsIGNvbWJpbmVkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgZHJ5IGluZ3JlZGllbnRzIGFuZCBtaXggb24gbG93IGp1c3QgdW50aWwgaW5jb3Jwb3JhdGVkLiBTdGlyIGluIGNob2NvbGF0ZSBjaGlwcy5TY29vcCB0aGUgZG91Z2ggaW50byAxLDUgdGFibGVzcG9vbiBzaXplIGJhbGxzIGFuZCBwbGFjZSBvbiBhIHBsYXRlIG9yIHNoZWV0LiBDb3ZlciB3aXRoIHNhcmFuIHdyYXAgYW5kIGNoaWxsIGF0IGxlYXN0IDIgaG91cnMgb3Igb3Zlcm5pZ2h0LldoZW4gcmVhZHkgdG8gYmFrZSwgcHJlaGVhdCBvdmVuIHRvIDM1MCBkZWdyZWVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSB0aGUgY29va2llIGRvdWdoIGJhbGxzIGludG8gdW5ncmVhc2VkIG11ZmZpbiBwYW4uIFNwcmlua2xlIHdpdGggc2VhIHNhbHQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgZm9yIDkgdG8gMTAgbWludXRlcywgb3IgdW50aWwgeW91IHNlZSB0aGUgZWRnZXMgc3RhcnQgdG8gYnJvd24uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSB0aGUgcGFuIGZyb20gdGhlIG92ZW4gYW5kIGxldCBzaXQgZm9yIDEwIG1pbnV0ZXMgYmVmb3JlIHJlbW92aW5nIG9udG8gYSBjb29saW5nIHJhY2suVG9wIHdpdGggaWNlIGNyZWFtIGFuZCBhIGRyaXp6bGUgb2YgY2hvY29sYXRlIHNhdWNlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkxvYWRlZCBDaG9jb2xhdGUgQ2hpcCBQdWRkaW5nIENvb2tpZSBDdXBzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImFudGlwYXN0aVwiLFxuICAgICAgICBcInN0YXJ0ZXJcIixcbiAgICAgICAgXCJzbmFja1wiLFxuICAgICAgICBcImFwcGV0aXplclwiLFxuICAgICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgICBcImhvciBkJ29ldXZyZVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDY3ODM1MyxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjc4MzUzLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwOTAxNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTAwMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwMjcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDQ2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY2xvdmVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMjA0NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5OTExLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNjExMixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEwMDYyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMjQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE2MTI0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxNjE2OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2Vhc29uIHRoZSBwb3JrIGNob3BzIHdpdGggc2FsdCBhbmQgcGVwcGVyIGFuZCBncmlsbCBvciBwYW4gZnJ5IG92ZXIgbWVkaXVtIGhpZ2ggaGVhdCB1bnRpbCBjb29rZWQsIGFib3V0IDMtNSBtaW51dGVzIHBlciBzaWRlLiAoSWYgZ3JpbGxpbmcsIGJhc3RlIHRoZSBjaG9wcyBpbiB0aGUgbWFwbGUgZGlqb24gYXBwbGUgY2lkZXIgc2F1Y2UgYXMgeW91IGdyaWxsLilNZWFud2hpbGUsIG1peCB0aGUgcmVtYWluaW5nIGluZ3JlZGllbnRzIGV4Y2VwdCB0aGUgYXBwbGUgc2xpY2VzLCBicmluZyB0byBhIHNpbW1lciBhbmQgY29vayB1bnRpbCB0aGUgc2F1Y2UgdGhpY2tlbnMsIGFib3V0IDItNSBtaW51dGVzLkdyaWxsIG9yIHNhdXRlIHRoZSBhcHBsZSBzbGljZXMgdW50aWwganVzdCB0ZW5kZXIgYnV0IHN0aWxsIGNyaXNwLlRvc3MgdGhlIHBvcmsgY2hvcHMgYW5kIGFwcGxlIHNsaWNlcyBpbiB0aGUgbWFwbGUgZGlqb24gYXBwbGUgY2lkZXIgc2F1Y2UgYW5kIGVuam95IVwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIk1hcGxlIERpam9uIEFwcGxlIENpZGVyIEdyaWxsZWQgUG9yayBDaG9wc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJsdW5jaFwiLFxuICAgICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICAgIFwiZGlubmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNDEyMzA5LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy80MTIzMDktNTU2eDM3MC5qcGVnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQ1ODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAzMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNTEwMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwb3VuZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDIyMDIwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA2MTY4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTE3NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDI2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDQyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA0MjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggdGhlIGhvdCBzYXVjZSwgYnV0dGVyLCBtYW5nbyBoYWJhbmVybyBzYXVjZSwgYnJvd24gc3VnYXIsIGNoaWxpIHBvd2RlciwgZ2FybGljIHBvd2Rlciwgb25pb24gcG93ZGVyLCBibGFjayBwZXBwZXIsIGNheWVubmUgcGVwcGVyIGFuZCBzZWFzb25pbmcgc2FsdCBpbiBhIGJvd2wuIFN0aXIgdmlnb3JvdXNseSB1bnRpbCBjb21wbGV0ZWx5IGNvbWJpbmVkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkRpcnR5IFN0ZXZlJ3MgT3JpZ2luYWwgV2luZyBTYXVjZVwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzYXVjZVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDc0MTYwMyxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzQxNjAzLTU1NngzNzAuanBlZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDgxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODM3MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTA0MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwMTEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkyOTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE2MDk4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIldhdGNoIGhvdyB0byBtYWtlIHRoaXMgcmVjaXBlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGxhcmdlIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIGJ1dHRlcm1pbGssIGVnZ3MsIGJha2luZyBwb3dkZXIsIHN1Z2FyLCBzYWx0IGFuZCBidXR0ZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGFub3RoZXIgbGFyZ2UgYm93bCBtaXggdG9nZXRoZXIgYWxsLXB1cnBvc2UgZmxvdXIgYW5kIGJ1Y2t3aGVhdCBmbG91ci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2xvd2x5IGFkZCBmbG91ciBpbnRvIHRoZSB3ZXQgaW5ncmVkaWVudHMgbWl4aW5nIHdpdGggYSB3aGlzay5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IHVudGlsIHRoZXJlIGFyZSBubyBsdW1wcyBhbmQgdGhlIGJhdHRlciBpcyBzbW9vdGggYW5kIHZlbHZldHkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbGFyZ2UgY2FzdCBpcm9uIHNraWxsZXQgb3IgZmxhdCBncmlsbCBwYW4gb3ZlciBtZWRpdW0taGlnaCBoZWF0LCBtZWx0IGEgdGFibGVzcG9vbiBvZiBidXR0ZXIuIExhZGxlIHBhbmNha2UgYmF0dGVyIG9udG8gc2tpbGxldCB0byBkZXNpcmVkIHNpemUuIFVzaW5nIHRoZSBsYWRsZSwgZm9ybSBwYW5jYWtlIGludG8gY2lyY3VsYXIgc2hhcGUuIENvb2sgb24gZWFjaCBzaWRlIGZvciAyIHRvIDMgbWludXRlcyBvciB1bnRpbCBnb2xkZW4gYnJvd24uIFNldCBwYW5jYWtlcyBhc2lkZSBhbmQga2VlcCB3YXJtLiBSZXBlYXQgd2l0aCByZW1haW5pbmcgaW5ncmVkaWVudHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk9uY2UgY29tcGxldGVkLCBzcHJlYWQgcGVhbnV0IGJ1dHRlciBvbiBhIHBhbmNha2UsIGxheWVyIGl0IHdpdGggc2xpY2VkIGJhbmFuYXMgYW5kIGRyaXp6bGUgaXQgd2l0aCBob25leS4gVG9wIHRoZSBwYW5jYWtlIHdpdGggYW5vdGhlciBwYW5jYWtlIHRvIGZvcm0gYSBzYW5kd2ljaC4gUmVwZWF0IHdpdGggcmVtYWluaW5nIHBhbmNha2VzIGFuZCBzZXJ2ZSB3aXRoIGV4dHJhIGhvbmV5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkVsdmlzIFBhbmNha2VzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDU2MjMzNCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTYyMzM0LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTgzNzEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA5MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEuMTI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNzg0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0NTgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNjI1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjIyMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJUYWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDExODM3NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMDQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDEzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNjk2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5Mzc2MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTQ0MTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNjI2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkdyZWFzZSBvciBzcHJheSBvaWwgYSA5w5c1IGluY2ggbG9hZiBwYW4uUHJlaGVhdCBvdmVuIHRvIDE3MCDigJMgMjAwwrBGIChsb3dlc3QgcG9zc2libGUpLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggd2FybSB3YXRlciB3aXRoIGJyb3duIHJpY2Ugc3lydXAsIG1vbGFzc2VzLCBhbmQgeWVhc3QgaW4gYSBjdXAgbGFyZ2VyIHRoYW4gOCBvei4sIGFzIGl0IG1heSBidWJibGUgb3Zlcjsgc2V0IGFzaWRlIHVudGlsIGZvYW15IG9uIHRoZSB0b3AsIG5vIG1vcmUgdGhhbiA1IG1pbnV0ZXMuSW4gdGhlIGJvd2wgb2YgeW91ciBtaXhlciwgYmVhdCB0aGUgZWdncyBhdCBoaWdoIHNwZWVkIGluIGEgbGFyZ2UgbWl4aW5nIGJvd2wgdW50aWwgbGFyZ2UgYnViYmxlcyBmb3JtLCBhYm91dCAyMCBzZWNvbmRzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXaGlzayB0b2dldGhlciB0aGUgZHJ5IGluZ3JlZGllbnRzOyBzZXQgYXNpZGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgb2lsLCB2aW5lZ2FyIGFuZCB5ZWFzdCBtaXh0dXJlIHRvIHRoZSBlZ2cgd2hpdGVzIGFuZCBibGVuZCBvbiBsb3cgZm9yIGEgZmV3IHNlY29uZHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBkcnkgaW5ncmVkaWVudHMgYWxsIGF0IG9uY2UgYW5kIG1peCBvbiBsb3cgc3BlZWQgdW50aWwgYWxsIGRyeSBpbmdyZWRpZW50cyBhcmUgbW9pc3RlbmVkLiBUaGVuIGJlYXQgb24gaGlnaCBmb3IgMSBtaW51dGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBkb3VnaCBiYXR0ZXIgdG8gcHJlcGFyZWQgcGFuIGFuZCBkaXN0cmlidXRlIGFuZCBzbW9vdGggdGhlIHRvcCB1c2luZyBhIHJ1YmJlciBzcGF0dWxhLiBZb3UnbGwgd2FudCB0byBtZWV0IGFsbCBzaWRlcyBvZiB0aGUgcGFuLiBJZiB5b3UgbWlzcyB0aGUgY29ybmVycyB0aGF0IHdpbGwgc3RpbGwgYmUgb2theS4gSXQgd2lsbCBmaWxsIGluIHVwb24gcmlzaW5nLiBUbyBldmVuIG91dCB0b3AsIGRyb3AgYSBmZXcgZHJvcHMgb2YgZmlsdGVyZWQgd2F0ZXIgb24gdG9wLCBhbmQgc3ByZWFkIGV2ZW5seSB3aXRoIGEgcnViYmVyIHNwYXR1bGEsIG9yIGRpcCBzcGF0dWxhIGluIHdhdGVyIHNldmVyYWwgdGltZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBicmVhZCBwYW4gaW4gdGhlIG92ZW4uIFR1cm4gb3ZlbiBvZmYuIEFsbG93IHRoZSBkb3VnaCB0byByaXNlIHVudGlsIHRoZSBjZW50ZXIgaXMgYWJvdXQgMS8y4oCdIG92ZXIgdGhlIHRvcCBvZiB0aGUgcGFuLCBhYm91dCAyMiBtaW51dGVzLiBJdCB3aWxsIHJpc2UgbW9yZSB3aGlsZSB0aGUgb3ZlbiBpcyBoZWF0aW5nIGFuZCBkdXJpbmcgYmFraW5nLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgcGFuIGZyb20gb3ZlbiBhbmQgcHJlaGVhdCBvdmVuIHRvIDM3NcKwRi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIHBhbiBvbiB0aGUgY2VudGVyIG9mIHRoZSByYWNrIGluIHRoZSBjZW50ZXIgb2YgdGhlIG92ZW4gYW5kIGJha2UgZm9yIGFib3V0IDQ1IG1pbnV0ZXMgb3IgbW9yZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHRoZSBsb2FmIGZyb20gdGhlIG92ZW4gYW5kIGltbWVkaWF0ZWx5IHJlbW92ZSBpdCBmcm9tIHRoZSBwYW4gKGNhcmVmdWwgaXQgd2lsbCBiZSBob3QpLCBhbmQgc2V0IHRoZSBsb2FmIG9uIGEgY29vbGluZyByYWNrIHRvIGNvb2wuIElmIHlvdSBkbyBub3QgcmVtb3ZlIGl0IHJpZ2h0IGF3YXkgdGhlIHN0ZWFtIHdpbGwgbWFrZSB0aGUgY3J1c3Qgc29nZ3kuU2xpY2Ugb2ZmIHRoZSB0d28gZW5kcyB0byBhbGxvdyB0aGUgc3RlYW0gdG8gZXNjYXBlLCBvciBpdCB3aWxsIGJlZ2luIHRvIHNpbmsgaW4gb24gdGhlIHNpZGVzIGFuZCBib3R0b20uT25jZSBjb29sZWQsIGl0IHdpbGwgc2hyaW5rIGEgbGl0dGxlIGJpdC4gU2xpY2UgaXQgd2l0aCBhbiBlbGVjdHJpYyBzbGljZXIsIGVsZWN0cmljIGtuaWZlIG9yIHNlcnJhdGVkIGtuaWZlLiBZb3UnbGwgZ2V0IGFib3V0IDEzLTE2LCBkZXBlbmRpbmcgdXBvbiBob3cgdGhpY2sgeW91IHNsaWNlIGl0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDEwXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJNb2NrIFVkaeKAmXMgR2x1dGVuIEZyZWUgV2hvbGUgR3JhaW4gQnJlYWRcIixcbiAgICAgIFwidGFnc1wiOiBbXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1MDc5MjEsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzUwNzkyMS01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4MzcxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDgxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MDk5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBpbmNoXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTQ0MTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUbyBtYWtlIHRoZSBDdXBjYWtlczogUHJlaGVhdCBvdmVuIHRvIDM1MCBkZWdyZWVzLiBMaW5lIDEyIGN1cGNha2UgdGlucyB3aXRoIHBhcGVyIGhvbGRlcnMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIldoaXNrIHRvZ2V0aGVyIGRyeSBGcnVpdCBDb2NrdGFpbCBDdXBjYWtlcyBpbmdyZWRpZW50cy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGluIHdldCBGcnVpdCBDb2NrdGFpbCBDdXBjYWtlcyBpbmdyZWRpZW50cyBhbmQgc3RpciB3aXRoIGEgcnViYmVyIHNwYXR1bGEgdW50aWwgdGhvcm91Z2hseSBjb21iaW5lZC4gRmlsbCBjdXBjYWtlIHRpbnMgZXZlbmx5LCBhbmQgYmFrZSBmb3IgMjAgbWludXRlcyBvciB1bnRpbCB0aGluIGtuaWZlIGluc2VydGVkIGluIGNlbnRlciBjb21lcyBvdXQgY2xlYW4uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQW1icm9zaWEgQ3VwY2FrZXNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNzIxMTQ2LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83MjExNDYtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjA2MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjEwNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjExNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxOTA3MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogODIxMixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJIYW5kZnVsXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5OTExLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDgxMjEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjE0MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVoZWF0IHRoZSBvdmVuIHRvIDMyNSBkZWdyZWVzIEYuQ29hcnNlbHkgY2hvcCB0aGUgYWxtb25kcyBhbmQgcGVjYW5zLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDb21iaW5lIHRoZSBvYXRzLCBhbG1vbmRzLCBwZWNhbnMsIGFuZCBzYWx0IGluIGEgYm93bC4gVG9zcyB0byBjb21iaW5lLkluIGEgbWVkaXVtLXNpemVkIGJvd2wsIGNvbWJpbmUgdGhlIGNvY29udXQgb2lsIChtZWFzdXJlIGV4YWN0bHkgd2hlbiBpdCdzIG1lbHRlZCBhbmQgbm90IGluIHRoZSBoYXJkZW5lZCBzdGF0ZSksIGFuZCAxLzIgY3VwIGNob2NvbGF0ZSBjaGlwcy5NaWNyb3dhdmUgaW4gYnVyc3RzIG9mIDE1IHNlY29uZHMgc3RpcnJpbmcgaW4gYmV0d2VlbiBlYWNoIGJ1cnN0IGZvciAxNSBzZWNvbmRzIHVudGlsIGNvbXBsZXRlbHkgbWVsdGVkLlN0aXIgaW4gdGhlIGJyb3duIHN1Z2FyIChtZWFzdXJlZCBsaWdodGx5IHBhY2tlZCksIGhvbmV5IG9yIG1hcGxlIHN5cnVwLCBhbmQgdmFuaWxsYSBleHRyYWN0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIHRoZSBjaG9jb2xhdGUgd2V0IG1peHR1cmUgaW50byB0aGUgb2F0IGFuZCBudXQgbWl4dHVyZSBhbmQgc3RpciB1bnRpbCB3ZWxsIGNvbWJpbmVkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTcHJlYWQgdGhlIGdyYW5vbGEgZXZlbmx5IG9udG8gYSBwYXJjaG1lbnQgbGluZWQgYmFraW5nIHNoZWV0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGZvciAyMC0zMCBtaW51dGVzIChkZXBlbmRpbmcgb24gdGhlIGhlYXQgb2YgeW91ciBvdmVuKSBtYWtpbmcgc3VyZSB0byBmbGlwIGFuZCBzdGlyIHRoZSBncmFub2xhIGFyb3VuZCBldmVyeSA2LTggbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGFuZCBhbGxvdyB0aGUgZ3Jhbm9sYSB0byBoYXJkZW4gYW5kIHNldCB1cC4gKEl0IG1heSBiZSBzb2Z0IGFuZCBub3QgdmVyeSBcXFwiZ3Jhbm9sYS1saWtlXFxcIiwgYnV0IGl0IGhhcmRlbnMgYXMgaXQgZHJpZXMgb3V0IHNvIGJlIGNhcmVmdWwgdG8gbm90IG92ZXItY29vayBpdCkuIE1pbmUgZ2VuZXJhbGx5IHRha2VzIGFib3V0IDIxIG1pbnV0ZXMgdG8gYmUgZnVsbHkgYmFrZWQuQWxsb3cgdGhlIGdyYW5vbGEgdG8gc2l0IGF0IHJvb20gdGVtcGVyYXR1cmUgZm9yIGEgZmV3IGhvdXJzIHRvIGhhcmRlbiBhbmQgc2V0IHVwLk9uY2UgdGhlIGdyYW5vbGEgaXMgaGFyZGVuZWQsIHN0aXIgaW4gdGhlIHJlbWFpbmluZyAxLzIgY3VwIGNob2NvbGF0ZSBjaGlwcyBhbmQgdGhlIHRvYXN0ZWQgZmxha2VkIGNvY29udXQuVG8gbWFrZSBhIHlvZ3VydCBib3dsOiBmaWxsIGEgYm93bCB3aXRoIHRoZSBjb2NvbnV0IGNyZWFtIHlvZ3VydCwgYWRkIGEgc3dpcmwgb2YgbnV0IGJ1dHRlciwgYWRkIHNvbWUgZnJ1aXQgc3VjaCBhcyBhIGJhbmFuYSwgYWRkIHRoZSBncmFub2xhLCBhbmQgZmluaXNoIHdpdGggY2hpYSBzZWVkcy4gRW5qb3kgaW1tZWRpYXRlbHkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQ3JlYW15IENvY29udXQgWW9ndXJ0IEJvd2wgd2l0aCBDaG9jb2xhdGUgR3Jhbm9sYSAoVmlkZW8pXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDU0MTI4OCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTQxMjg4LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNjAsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNzQwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNDAsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicGluY2hcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTIwMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0MCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4MCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzdGlja1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkN1dCB0aGUgYnV0dGVyIGludG8gc21hbGwgY3ViZXMgYW5kIGtlZXAgdGhlbSByZWZyaWdlcmF0ZWQgdW50aWwgcmVhZHkgdG8gdXNlIChJIGN1dCBvbiBwYXJjaG1lbnQgcGFwZXIgYW5kIHdyYXAgdXAgdGhlIGJ1dHRlciBmb3IgZWFzeSB0cmFuc2Zlci4pLkluIHRoZSBmb29kIHByb2Nlc3NvciwgY29tYmluZSB0aGUgZmxvdXIsIGFsbW9uZCBtZWFsLCBzdWdhciwgYW5kIHNhbHQuIElmIHlvdSBkb27igJl0IGhhdmUgYSBmb29kIHByb2Nlc3NvciwgeW91IGNhbiBzaW1wbHkgdXNlIGEgYm93bCB0byBtaXggYWxsIHRoZSBpbmdyZWRpZW50cy5JZiB5b3Ugd2FudCB5b3VyIHNlc2FtZSBzZWVkcyB0byBiZSBmaW5lIHRleHR1cmUsIGFkZCB0aGVtIG5vdy4gSWYgeW91IHByZWZlciB0byBrZWVwIHRoZSBvcmlnaW5hbCBzaGFwZSBvZiBzZXNhbWUgc2VlZHMsIGFkZCB0aGVtIHdpdGggZWdnIHlvbGsgbGF0ZXIgb24uVGFrZSBvdXQgdGhlIGJ1dHRlciBmcm9tIHRoZSByZWZyaWdlcmF0b3IgYW5kIG1peCB0b2dldGhlci4gSWYgeW91IHVzZSBhIHJlZ3VsYXIgYm93bCB0byBtaXgsIHVzZSBhIGRvdWdoL3Bhc3RyeSBibGVuZGVyIHRvIGNvbWJpbmUgdGhlIGJ1dHRlciBpbnRvIHRoZSBkcnkgaW5ncmVkaWVudHMuTGFzdGx5IGFkZCBlZ2cgeW9say5JZiB0aGUgZm9vZCBwcm9jZXNzb3IgaXMgc21hbGwgKGxpa2UgbWluZSkgYW5kIGl0IGRvZXNu4oCZdCBsb29rIGxpa2UgaXTigJlzIG1peGVkIGNvbXBsZXRlbHksIHRha2UgaXQgb3V0IGFuZCBtaXggd2VsbCB3aXRoIGEgc2lsaWNvbmUgc3BhdHVsYS5Gb3JtIHRoZSBkb3VnaCBpbnRvIGEgYmFsbCBhbmQgY3V0IGluIGhhbGYuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJvbGwgaXQgdG8gYSBsb2cgYXBwcm94aW1hdGVseSAy4oCdIGFjcm9zcy4gRm9yIG1lIGl04oCZcyBlYXNpZXIgdG8gd29yayB3aGVuIHRoZSBkb3VnaCBpcyB3cmFwcGVkIGluIHBsYXN0aWMgd3JhcC4gV2hpbGUgcm9sbGluZywgdW53cmFwIHNvbWUgcGFydHMgb2YgcGxhc3RpYyB3cmFwIHRoZW4gcm9sbCBhZ2Fpbi4gRm9ybSBhIG5pY2Ugc2hhcGUuIEkgd2Fzbid0IHBheWluZyBhdHRlbnRpb24gc28gbXkgbG9nIGlzIGZsYXQgb24gb25lIHNpZGUgKHNlZSBzdGVwIDExKSFXcmFwIHRoZSBsb2dzIHRpZ2h0bHkgaW4gcGxhc3RpYyB3cmFwIGFuZCByZWZyaWdlcmF0ZSB1bnRpbCBmaXJtLCBhYm91dCAxIGhvdXIuUHJlaGVhdCB0aGUgb3ZlbiB0byAzNTDCsCBGICgxNzXCsCBDKS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHRoZSBkb3VnaCBmcm9tIHBsYXN0aWMgd3JhcCBhbmQgY3V0IGludG8gZGlzY3MgYWJvdXQgwrwgaW5jaCB0aGljayAoaWYgeW91IHByZWZlciB0aGlja2VyIGNvb2tpZXMsIGN1dCBpbnRvIGRpc2NzIGFib3V0IMK9IGluY2ggYW5kIHlvdSBnZXQgMjAgY29va2llcyB0b3RhbCkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZW0gb24gdHdvIGJha2luZyBzaGVldHMgbGluZWQgd2l0aCBwYXJjaG1lbnQgcGFwZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgZm9yIGFib3V0IDE1IG1pbnV0ZXMsIG9yIHVudGlsIGxpZ2h0bHkgYnJvd25lZCBhcm91bmQgdGhlIGVkZ2VzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgZnJvbSB0aGUgb3ZlbiBhbmQgYWxsb3cgdG8gY29vbCBvbiB0aGUgYmFraW5nIHNoZWV0IGZvciBhYm91dCAxMCBtaW51dGVzLiBUaGVuIHRyYW5zZmVyIHRvIGEgd2lyZSByYWNrIHRvIGNvb2wgY29tcGxldGVseS4gU3RvcmUgY29va2llcyBpbiBhbiBhaXJ0aWdodCBjb250YWluZXIuIENvb2tpZXMgd2lsbCBsYXN0IGZvciBhIGRheSBvciB0d28uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiU2VzYW1lIENvb2tpZXNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICAgIFwic3RhcnRlclwiLFxuICAgICAgICBcInNuYWNrXCIsXG4gICAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICAgIFwiYW50aXBhc3RvXCIsXG4gICAgICAgIFwiaG9yIGQnb2V1dnJlXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNzc5NTgzLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83Nzk1ODMtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQ1ODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0NTgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTUwNjIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicG91bmRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTExMDksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDExNjA5OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNjQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMjEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTE2MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MjY2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTYxMjQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDE2MTY4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDE2MTY4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVwYXJlIHRoZSBjaGlja2VuOiBJbiBhIGxhcmdlIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIHRoZSBicm93biBzdWdhciwgZ2luZ2VyLCBvaWwsIHNveSBzYXVjZSwgU3JpcmFjaGEgYW5kIHBlYW51dCBidXR0ZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgY2hpY2tlbiBhbmQgdG9zcyB0byBjb2F0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJMZXQgbWFyaW5hdGUgYXQgcm9vbSB0ZW1wZXJhdHVyZSBmb3IgMTUgbWludXRlcyBvciBjb3ZlciBhbmQgcmVmcmlnZXJhdGUgZm9yIHVwIHRvIDYgaG91cnMuIFByZWhlYXQgdGhlIG92ZW4gYnJvaWxlciB3aXRoIGEgcmFjayBzZXQgNC1pbmNoZXMgZnJvbSB0aGUgaGVhdCBzb3VyY2UuIExpbmUgYW4gMTh4MTMtaW5jaCByaW1tZWQgc2hlZXQgcGFuIHdpdGggZm9pbCBhbmQgc3ByYXkgd2l0aCBub25zdGljayBzcHJheS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHRoZSBjaGlja2VuIGZyb20gdGhlIG1hcmluYWRlLCBkaXNjYXJkaW5nIGV4Y2VzcyBtYXJpbmFkZSwgYW5kIHBsYWNlIG9uIHByZXBhcmVkIHBhbiwgY292ZXJpbmcgdHdvLXRoaXJkcyBvZiB0aGUgcGFuIGFuZCBzcGFjaW5nIGV2ZW5seS4gQnJvaWwgZm9yIDYgbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHRoZSBwYW4gZnJvbSB0aGUgb3ZlbiBhbmQgc3ByZWFkIHBpbmVhcHBsZSBvbiB0aGUgcmVtYWluaW5nIHNwYWNlIG9uIHRoZSBwYW4uIFNwcmlua2xlIHRoZSBwaW5lYXBwbGUgd2l0aCAxIHRhYmxlc3Bvb24gYnJvd24gc3VnYXIuIEJyb2lsIGZvciAzIHRvIDUgbWludXRlcyBvciB1bnRpbCBjaGlja2VuIGlzIGJyb3duZWQgYW5kIG5vIGxvbmdlciBwaW5rIGluc2lkZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdGhlIGNoaWNrZW4gdG8gc2VydmluZyBwbGF0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBjb2xlc2xhdyBtaXggaW4gYSBtZWRpdW0gYm93bC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBicm9pbGVkIHBpbmVhcHBsZSwgbGltZSBqdWljZSwgb2lsLCBzb3kgc2F1Y2UgYW5kIFNyaXJhY2hhOyB0b3NzIHRvIGNvYXQuIERpdmlkZSBhbW9uZyB0aGUgcGxhdGVzIHdpdGggdGhlIGNoaWNrZW4gYW5kIHNwcmlua2xlIHRoZSBzbGF3IHdpdGggbWludCBvciBiYXNpbC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA4XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJUaGFpIENoaWNrZW4gVGVuZGVycyB3aXRoIEJyb2lsZWQgUGluZWFwcGxlIFNsYXdcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwibHVuY2hcIixcbiAgICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgICBcImRpbm5lclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDU1MDk0MCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTUwOTQwLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTExMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2UgaGVhZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA2MTcyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjA0NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YnNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNsb3Zlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzYzMixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTIxMjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM2OTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGJzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzbWFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEwMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNsaWNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTA5NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIwMCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgdGhlIG92ZW4gdG8gMzc1RkNvb2sgYW5kIHBlZWwgdGhlIGhhcmQgYm9pbGVkIGVnZ3MgYWNjb3JkaW5nIHRvIHlvdXIgZmF2b3VyaXRlIG1ldGhvZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIG9uaW9uLCBnYXJsaWMsIHNhbHQgYW5kIHBlcHBlciB0byBhIG1lZGl1bSBzYXVjZXBhbi4gQ29vayBvdmVyIG1lZGl1bSBoZWF0IGZvciBvbmUgb3IgdHdvIG1pbnV0ZXMsIHVudGlsIGZyYWdyYW50IGFuZCBzbGlnaHRseSBzb2Z0ZW5lZC5UaHJvdyB0aGUgY2F1bGlmbG93ZXIgZmxvcmV0cyBpbiBhbmQgY29udGludWUgY29va2luZyBmb3IgYSBtaW51dGUgb3IgdHdvLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgY2hpY2tlbiBzdG9jaywgY292ZXIgYW5kIGJyaW5nIHRvIHRoZSBib2lsOyBsb3dlciBoZWF0IGFuZCBjb250aW51ZSBjb29raW5nIHVudGlsIHRoZSBjYXVsaWZsb3dlciBpcyB0ZW5kZXIsIGFib3V0IDUtNyBtaW51dGVzLkxhZGxlIHRoZSBjYXVsaWZsb3dlciBtaXh0dXJlIGludG8geW91ciBibGVuZGVyOyBhZGQgZ2hlZSwgRGlqb24gbXVzdGFyZCBhbmQgbnV0cml0aW9uYWwgeWVhc3QgYW5kIHByb2Nlc3Mgb24gaGlnaCBzcGVlZCB1bnRpbCBzdXBlciBzbW9vdGggYW5kIHNpbGt5IGluIGNvbnNpc3RlbmN5LiBTZXQgYXNpZGUuIFN0ZWFtIHRoZSByYXBpbmkgZm9yIDMwIHNlY29uZHMgdG8gYSBtaW51dGUsIHVudGlsIHNsaWdodGx5IHNvZnRlbmVkIGFuZCBicmlnaHQgZ3JlZW4uIEluIGEgc21hbGwgc2tpbGxldCwgZHJ5IHJvYXN0IHRoZSBoYXplbG51dHMgb3ZlciBtZWRpdW0gaGVhdCB1bnRpbCB0aGV5IGJlY29tZSBmcmFncmFudCBhbmQgdGFrZSBhIG5pY2UgZ29sZGVuIGNvbG9yYXRpb24uIFNsaWNlIHRoZSBoYXJkIGJvaWxlZCBlZ2dzIGFuZCBhZGQgdGhlbSB0byBhIGxhcmdlIG1peGluZyBib3dsLCBmb2xsb3dlZCBieSDigJxCZWNoYW1lbOKAnSBzYXVjZSwgcmFwaW5pIGFuZCB0aHJlZSBxdWFydGVycyBvZiB0aGUgaGF6ZWxudXRzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggdmVyeSBkZWxpY2F0ZWx5IHVudGlsIHdlbGwgY29tYmluZWQgYW5kIHRyYW5zZmVyIHRvIGFuIG92ZW4gc2FmZSBkaXNoLiBUZWFyIHRoZSBwcm9zY2l1dHRvIGludG8gc21hbGxlciBwaWVjZXMgYW5kIGFycmFuZ2UgdGhlbSBvbiB0b3Agb2YgdGhlIGRpc2guIFNwcmlua2xlIHdpdGggdGhlIHJlc3Qgb2YgdGhlIGhhemVsbnV0cy4gQ292ZXIgd2l0aCBmb2lsIGFuZCBwbGFjZSBpbiB0aGUgb3ZlbiBmb3IgMjAgbWludXRlczsgYWZ0ZXIgdGhhdCB0aW1lLCByZW1vdmUgdGhlIGZvaWwgYW5kIHNldCB0aGUgb3ZlbiB0byBicm9pbCBmb3IgYSAyLTMgbWludXRlcyBvciB1bnRpbCB0aGUgcHJvc2NpdXR0byBiZWNvbWVzIG5pY2UgYW5kIGNyaXNweSBhbmQgdGFrZXMgYSBuaWNlIGdvbGRlbiBjb2xvcmF0aW9uLiBZb3UgY291bGQgYWxzbyBtYWtlIHRoaXMgYWhlYWQgb2YgdGltZSBhbmQgcGxhY2UgaXQgaW4gdGhlIGZyaWRnZSBhZnRlciB5b3UgaGF2ZSBjb3ZlcmVkIGl0IHdpdGggZm9pbCAoYWx0aG91Z2ggeW91IG1pZ2h0IHdhbnQgdG8gbGV0IGl0IGNvb2wgYSBiaXQgYmVmb3JlaGFuZCkuIEluIHRoaXMgY2FzZSwgeW914oCZbGwgd2FudCB0byBpbmNyZWFzZSBvdmVuIHRpbWUgdG8gYWJvdXQgNDUgbWludXRlcywgYXQgMzc1Ri4gVGhpcyBhbHNvIHJlaGVhdHMgZXh0cmVtZWx5IHdlbGwgaW4gdGhlIG1pY3Jvd2F2ZSBhbmQgd2lsbCBlYXNpbHkga2VlcCBmb3IgNC01IGRheXMgaW4gdGhlIHJlZnJpZ2VyYXRvci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJFZ2cgYW5kIFJhcGluaSBDYXNzZXJvbGVcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwibHVuY2hcIixcbiAgICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgICBcImRpbm5lclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDU4MzUwMixcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTgzNTAyLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNjE1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGJzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA2MTk0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJsYXJnZVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzYyNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YnNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMjgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwNzIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGJzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNjk3MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YnNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ29tYmluZSAxIGN1cCBjaGlja2VuIGJyb3RoLCAxIGN1cCBCQlEgc2F1Y2UsIDMgdGJzcCBsaXF1aWQgc21va2UsIDIgdGJzcCBXb3JjZXN0ZXJzaGlyZSBzYXVjZSwgMyBwcmVzc2VkIGdhcmxpYyBjbG92ZXMsIDIgdGJzcCBicm93biBzdWdhciBhbmQgc3RpciB0byBjb21iaW5lLkdlbmVyb3VzbHkgc3ByaW5rbGUgdGhlIHBvcmsgcm9hc3Qgd2l0aCBzYWx0LCBwZXBwZXIgYW5kIHBhcHJpa2EuUnViIHRoZSBzZWFzb25pbmcgaW50byB0aGUgcG9yayBzaG91bGRlci5DaG9wIDEgbGFyZ2Ugb25pb24gYW5kIHBsYWNlIGl0IGludG8gdGhlIGJvdHRvbSBvZiB0aGUgc2xvdyBjb29rZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBwb3JrIHJvYXN0IG92ZXIgdGhlIG9uaW9uIGFuZCBwb3VyIHRoZSBtYXJpbmFkZSBvdmVyIHRoZSBwb3JrLkNvdmVyIGFuZCBzZXQgb24gbG93IGZvciA4IGhvdXJzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJMZXQgaXQgY29vbCBkb3duIHNvIHlvdSBkb24ndCBidXJuIHlvdXIgZmluZ2VycyB3aGlsZSBzaHJlZGRpbmcuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSB0aGUgbWVhdCB0byBhIGxhcmdlIGJvd2wgYW5kIHNocmVkLiBUaGlzIG1lYXQgaXMgZmFsbC1hcGFydCB0ZW5kZXIhIFRoZSBtYXJpbmFkZSBlbmhhbmNlcyB0aGUgbmF0dXJhbCBmbGF2b3JzIG9mIHRoZSBwb3JrLiBXaGVuIHlvdSdyZSBkb25lIHNocmVkZGluZyB0aGUgcG9yaywgcG91ciBhcyBtdWNoIG9mIHRoZSByZW1haW5pbmcgc2F1Y2Ugb3ZlciB0aGUgcG9yayBhcyB5b3UgbGlrZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2VydmUgd2l0aCBtb3JlIEJhYnkgUmF5cyBCQlEgU2F1Y2UuLi4gYW5kIHBpY2tsZXNcIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJQdWxsZWQgUG9ya1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJsdW5jaFwiLFxuICAgICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICAgIFwiZGlubmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTQzNjg3LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81NDM2ODctNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MzYwNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTA0MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzbWFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODk0MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJUYnNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTIwMTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMjEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicGluY2hcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAyNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwaW5jaFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MzI3NCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA4MTIwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQyNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBhbGwgaW5ncmVkaWVudHMgdG8gYSBibGVuZGVyIChleGNlcHQgZ3JhaGFtIGNyYWNrZXJzIGlmIHVzaW5nKS4gQ292ZXIgYW5kIGJsZW5kIHVudGlsIHdlbGwgcHVyZWVkIHRoZW4gc2VydmUgdG9wcGVkIHdpdGggY3J1c2hlZCBncmFoYW0gY3JhY2tlcnMgaWYgZGVzaXJlZC4qVGhlIGJhbmFuYSBpcyBtb3N0bHkgd2hhdCBnaXZlcyB0aGlzIHNtb290aGllIGl0J3Mgc3dlZXRuZXNzLCBzbyBJIHJlY29tbWVuZCB1c2luZyBvbmUgdGhhdCBpcyBzcGVja2xlZCAobm90IG11c2h5IHRob3VnaCkuUmVjaXBlIFNvdXJjZTogQ29va2luZyBDbGFzc3lcIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJQdW1wa2luIENoZWVzZWNha2UgQnJlYWtmYXN0IFNtb290aGllXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcIm1vcm5pbmcgbWVhbFwiLFxuICAgICAgICBcImJydW5jaFwiLFxuICAgICAgICBcImJyZWFrZmFzdFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDUxNjkwNCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTE2OTA0LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTAxNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJUYWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJUYWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiVGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTgwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxMCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwODkwMDMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibWVkaXVtXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTIwMTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA3NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlcGFyZSBhcHBsZSBmaWxsaW5nOiBNZWx0IGJ1dHRlciBvdmVyIG1lZGl1bSBoZWF0IGluIDEyLSBpbmNoIHNraWxsZXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBhcHBsZXMgYW5kIHN1Z2FyOyBjb29rIDIwIG1pbnV0ZXMsIHN0aXJyaW5nIG9jY2FzaW9uYWxseS4gU3RpciBpbiBhcHBsZSBqdWljZTsgY29vayAxIG1vcmUgbWludXRlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJHcmVhc2UgMTMgeCA5LWluY2ggYmFraW5nIGRpc2guIEFycmFuZ2UgMS8yIG9mIGJyZWFkIHNsaWNlcywgb3ZlcmxhcHBpbmcgc2xpZ2h0bHkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbWVkaXVtIGJvd2wsIHdoaXNrIG1pbGssIHNhbHQsIGNpbm5hbW9uIGFuZCBlZ2dzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIDEvMiBvZiBlZ2cgbWl4dHVyZSBvdmVyIGJyZWFkLiBTZXQgYXNpZGUgMS80IG9mIGFwcGxlIGZpbGxpbmc7IGNvdmVyIGFuZCByZWZyaWdlcmF0ZSB0byBzcG9vbiBvbiBhZnRlciBiYWtpbmcuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNwcmVhZCByZW1haW5pbmcgYXBwbGUgZmlsbGluZyBvdmVyIGJyZWFkIGluIGFuIGV2ZW4gbGF5ZXIuIEFycmFuZ2UgcmVtYWluaW5nIGJyZWFkIHNsaWNlcyBvdmVyIGFwcGxlIGxheWVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIHJlbWFpbmluZyBlZ2cgbWl4dHVyZSBvdmVyIHRvcCBicmVhZCBsYXllci4gUHJlc3MgYnJlYWQgZG93biB3aXRoIHNwYXR1bGEgc28gaXQgYWJzb3JicyB0aGUgbWF4aW11bSBhbW91bnQgb2YgZWdnIG1peHR1cmUuIERvdCBicmVhZCB3aXRoIGJ1dHRlciBhbmQgc3ByaW5rbGUgd2l0aCBzdWdhci4gQ292ZXIgYW5kIHJlZnJpZ2VyYXRlIG92ZXJuaWdodC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVG8gYmFrZTogUHJlaGVhdCBvdmVuIHRvIDMyNcKwRi4gVW5jb3ZlciBkaXNoIGFuZCBiYWtlIDUwIHRvIDU1IG1pbnV0ZXMgb3IgdW50aWwga25pZmUgaW5zZXJ0ZWQgaW4gY2VudGVyIGNvbWVzIG91dCBjbGVhbi4gUmVoZWF0IHJlbWFpbmluZyBhcHBsZSBtaXh0dXJlIGluIG1pY3Jvd2F2ZS4gU3Bvb24gb3ZlciB0b3AgdG8gc2VydmUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQ2lubmFtb24gUmFpc2luIE92ZXJuaWdodCBGcmVuY2ggVG9hc3Qgdy8gQXBwbGUgRmlsbGluZ1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5ODgyNDMsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzk4ODI0My01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI5NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY2xvdmVzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMzIwMDksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicGluY2hcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE1MTUyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI5NCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJtZWRpdW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNZWx0IGJ1dHRlciB0byBhIGxhcmdlIHNraWxsZXQgb3ZlciBtZWRpdW0gaGVhdC4gQXMgdGhlIGJ1dHRlciBtZWx0cywgaXQgd2lsbCBiZWdpbiB0byBmb2FtIGFzIGl0IHRyYW5zaXRpb25zIGZyb20gYSBicmlnaHQsIGxlbW9uLXllbGxvdyBjb2xvciB0byBnb2xkZW4gYW5kIHRoZW4gZmluYWxseSB0byBhIG51dHR5LWJyb3duIGNvbG9yLiBBcyB0aGUgYnV0dGVyIGp1c3QgYmVnaW5zIHRvIHR1cm4gbnV0dHktYnJvd24gZnJvbSBnb2xkZW4sIHJlZHVjZSB5b3VyIGhlYXQgdG8gbWVkaXVtLWxvdyBhbmQgY2FyZWZ1bGx5IHRvc3MgaW4geW91ciBnYXJsaWMgYW5kIG9uaW9uLiBDb29rIHVudGlsIHRoZSBvbmlvbiBqdXN0IGJlZ2lucyB0byBiZWNvbWUgdGVuZGVyIGFuZCB0aGVuIGFkZCBpbiB5b3VyIHNocmltcC4gU3RpcnJpbmcgZnJlcXVlbnRseSwgY29vayB1bnRpbCB0aGUgc2hyaW1wIHR1cm4gcGluayBhbmQgbG9zZSB0aGVpciB0cmFuc2x1Y2VuY2UuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlN0aXIgaW4gc2FsdCwgYmxhY2sgcGVwcGVyLCByZWQgcGVwcGVyIGZsYWtlcyBhbmQgZnJlc2ggcGFyc2xleS4gVG9zcyBzaHJpbXAgdG8gbWFrZSBzdXJlIGFsbCBhcmUgd2VsbC1jb2F0ZWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBmcm9tIGhlYXQgYW5kIHNlcnZlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkJyb3duIEJ1dHRlciBHYXJsaWMgU2hyaW1wXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImx1bmNoXCIsXG4gICAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgICAgXCJkaW5uZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA3MjQwMTgsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzcyNDAxOC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMDA3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkxNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2xpY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkxNTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTgwNjksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2xpY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMzMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyOTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY2xvdmVzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMjcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAzNDA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4xMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MTUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNsaWNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjbG92ZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDdXQgb2ZmIHRoZSBjcnVzdCBmcm9tIDYgc2xpY2VzIG9mIGJyZWFkLiBDaG9wIHRoZSBjZW50ZXJzIGFuZCBwdXQgaW50byBhIGZvb2QgcHJvY2Vzc29yLiBQdWxzZSB1bnRpbCB5b3UgaGF2ZSBjb2Fyc2UgYnJlYWRjcnVtYnMuIFlvdSBzaG91bGQgaGF2ZSBhYm91dCAzIGN1cHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1ha2UgdGhlIHN0dWZmaW5nOiBJbiBhIGxhcmdlIGJvd2wsIHN0aXIgdG9nZXRoZXIgdGhlIGJyZWFkY3J1bWJzLCBsZW1vbiB6ZXN0LCBQYXJtZXNhbiBjaGVlc2UsIG1pbmNlZCBnYXJsaWMsIGNob3BwZWQgcGFyc2xleSwgbWluY2VkIG9yZWdhbm8sIDEvMiBjdXAgb2xpdmUgb2lsLCBhbmQgYmxhY2sgcGVwcGVyLiBTZXQgYXNpZGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQmFrZWQgU3R1ZmZlZCBBcnRpY2hva2VzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiLFxuICAgICAgICBcImFudGlwYXN0aVwiLFxuICAgICAgICBcInN0YXJ0ZXJcIixcbiAgICAgICAgXCJzbmFja1wiLFxuICAgICAgICBcImFwcGV0aXplclwiLFxuICAgICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgICBcImhvciBkJ29ldXZyZVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDYyMzg1NSxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjIzODU1LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTgzNzIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMTYwOTgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMTYwOTgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDgxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDE5OTAzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlRic3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVoZWF0IG92ZW4gdG8gMzUwRkxpbmUgYSBiYWtpbmcgc2hlZXQgd2l0aCBwYXJjaG1lbnQsIHNldCBhc2lkZS5JbiBib3dsIG9mIHN0YW5kIG1peGVyIGNyZWFtIGJ1dHRlciBhbmQgcGVhbnV0IGJ1dHRlciB0b2dldGhlciB1bnRpbCBzbW9vdGguXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBib3RoIHN1Z2FycyBhbmQgYmVhdCBmb3IgMiBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgaW4gZWdnLCB2YW5pbGxhLCBiYWtpbmcgc29kYSBhbmQgc2FsdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IHVudGlsIGNvbWJpbmVkLlR1cm4gbWl4ZXIgdG8gbG93IGFuZCBhZGQgaW4gZmxvdXIuUG9ydGlvbiBvdXQgZG91Z2ggYnkgaW4gdGFibGVzcG9vbiBhbW91bnRzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSb2xsIGludG8gYSBiYWxsIGFuZCB0aGVuIGZsYXR0ZW4gdG8gYXBwcm94aW1hdGVseSAgaW5jaCB0aGljay5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2Ugb24gYmFraW5nIHNoZWV0IGFib3V0IDIgaW5jaGVzIGFwYXJ0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGZvciA4LTkgbWludXRlcyB1bnRpbCBnb2xkZW4gYXQgaGUgZWRnZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogN1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBmcm9tIG92ZW4gYW5kIHRyYW5zZmVyIGNvb2tpZXMgdG8gYSB3aXJlIHJhY2sgdG8gY29vbCBjb21wbGV0ZWx5LkluIG1pY3Jvd2F2ZSBzYWZlIGJvd2wgY29tYmluZSBjaG9jb2xhdGUgY2hpcHMsIHBlYW51dCBidXR0ZXIgYW5kIGJ1dHRlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA4XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSGVhdCBvbiBoaWdoIGZvciAxIG1pbnV0ZSBhbmQgdGhlbiBzdGlyIHVudGlsIHNtb290aC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgcG93ZGVyZWQgc3VnYXIgaW4gYm93bC5EaXAgZWFjaCBjb29raWUgaW4gY2hvY29sYXRlIGFuZCB1c2luZyBhIGZvcmsgcmVtb3ZlIGNvb2tpZSwgdGFwcGluZyBvZmYgZXhjZXNzIGNob2NvbGF0ZS4gWW91IGRvbid0IG5lZWQgYSBsb3Qgb2YgY2hvY29sYXRlIGNvYXRpbmcgb24gdGhlIGNvb2tpZXMuSW1tZWRpYXRlbHkgZGlwIHRoZSBjb29raWUgaW50byB0aGUgcG93ZGVyZWQgc3VnYXIgYW5kIHRvc3MgdG8gY29hdCBjb21wbGV0ZWx5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDEwXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgYmFjayBvbiBjb29saW5nIHJhY2sgdG8gdW50aWwgY2hvY29sYXRlIGlzIHNldC4gUmVwZWF0IGZvciBhbGwgY29va2llcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxMVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiUHVwcHkgQ2hvdyBDb29raWVzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDc5MzU4NCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNzkzNTg0LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTExNDMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjA0NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0NjQxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTEyNTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAyNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjk3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTk0NCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxMTI4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTM1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwb3VuZHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgcG90YXRvZXMgaW4gYSBsYXJnZSBzYXVjZXBhbiBhbmQgYWRkIHdhdGVyIHRvIGNvdmVyIGJ5IDEgaW5jaC4gQnJpbmcgdG8gYm9pbCBvdmVyIG1lZGl1bS1oaWdoIGhlYXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCAxLXRhYmxlc3Bvb24gc2FsdCwgcmVkdWNlIGhlYXQgdG8gbWVkaXVtLCBhbmQgc2ltbWVyLiBTdGlyIGEgZmV3IHRpbWVzLCB1bnRpbCBwb3RhdG9lcyByZS1mb3JrIHRlbmRlciwgYWJvdXQgOCBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJEcmFpbiBwb3RhdG9lcyBhbmQgdHJhbnNmZXIgdG8gYSBsYXJnZSBib3dsLkluIGEgbWVkaXVtIHNpemVkIGJvd2wgd2hpc2sgdG9nZXRoZXIgeW9ndXJ0LCBtYXlvbm5haXNlLCBtdXN0YXJkLCBzYWx0LCBwZXBwZXIgYW5kIG9uaW9uIHBvd2Rlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRvIHBvdGF0b2VzIGFuZCBnZW50bHkgc3RpciB0byBjb21iaW5lLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgY2VsZXJ5LCBwaWNrbGVzLCByZWQgb25pb25zLCBwYXJzbGV5IGFuZCBjaG9wcGVkIGVnZ3MgdG8gcG90YXRvIG1peHR1cmUsIHN0aXIgdG8gY29tYmluZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIG1vcmUgc2FsdCBhbmQgcGVwcGVyIHRvIHRhc3RlLkNvdmVyIGFuZCByZWZyaWdlcmF0ZSB1bnRpbCBjaGlsbGVkLCBhYm91dCAxIGhvdXIgYmVmb3JlIHNlcnZpbmcuIFBvdGF0byBzYWxhZCBjYW4gYmUgbWFkZSB1cCB0byBvbmUgZGF5IGFoZWFkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkVhc3kgQ3JlYW15IFBvdGF0byBTYWxhZCB3aXRoIFlvZ3VydFwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzYWxhZFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDYwNzgwNSxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjA3ODA1LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAyMTE4MjEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY2xvdmVzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMDQ4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNjUxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNzkyNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNtYWxsXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMjcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAzMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJUYnNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNTQ5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkN1dCB0b3BzIG9mZiBwZXBwZXJzOyByZW1vdmUgYW5kIGRpc2NhcmQgc2VlZHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkNob3AgdG9wczsgcGxhY2UgaW4gbWVkaXVtIGJvd2wuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBzYXVzYWdlLCBvbmlvbnMsIHJpY2UsIFBhcm1lc2FuLCBnYXJsaWMsIG9yZWdhbm8sIDEtMS8yIGN1cHMgcGl6emEgc2F1Y2UgYW5kIDEtMS80IGN1cHMgc2hyZWRkZWQgY2hlZXNlOyBtaXggbGlnaHRseS4gIFNwb29uIGludG8gcGVwcGVyIHNoZWxscy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3RhbmQgcGVwcGVycyBpbiBzbG93IGNvb2tlcjsgdG9wIHdpdGggcmVtYWluaW5nIHNhdWNlIGFuZCBzaHJlZGRlZCBjaGVlc2UuICBDb3ZlciB3aXRoIGxpZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ29vayBvbiBMT1cgNiB0byA4IGhvdXJzIChvciBvbiBISUdIIDItMS8yIHRvIDMtMS8yIGhvdXJzKS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJTbG93LUNvb2tlciBJdGFsaWFuLVN0dWZmZWQgUGVwcGVyc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA3NjM4NTgsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzc2Mzg1OC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTIwMTI5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDA4MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTI5NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDExODM3NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTE4Mzc1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA4MTIwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDgxMjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0NDEyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIldoaXNrIGZsb3VycyB0b2dldGhlciB3aXRoICB0ZWFzcG9vbiBpbnN0YW50IHllYXN0IGluIGEgbGFyZ2UgbWl4aW5nIGJvd2wgd2l0aCBhIHRpZ2h0LWZpdHRpbmcgbGlkIChsaWtlIHRoaXMgb25lKSwgYW5kIHRoZW4gc3RpciBpbiB0aGUgb2F0cy4gU3RpciB0aGUgd2F0ZXIgYW5kIG1pbGsgdG9nZXRoZXIsIHRoZW4gcG91ciB0aGUgbGlxdWlkcyBpbnRvIHRoZSBkcnkgaW5ncmVkaWVudHMsIHN0aXJyaW5nIHRvIGNyZWF0ZSBhIGxvb3NlLCBzaGFnZ3kgZG91Z2guIENvdmVyIHRoZSBtaXhpbmcgYm93bCB0aWdodGx5LCBhbmQgYWxsb3cgdGhlIGRvdWdoIHRvIHJlc3QgYXQgcm9vbSB0ZW1wZXJhdHVyZSBhdCBsZWFzdCBlaWdodCBhbmQgdXAgdG8gdHdlbHZlIGhvdXJzLkR1bXAgdGhlIGRvdWdoIGludG8gdGhlIGJhc2luIG9mIGEgc3RhbmQgbWl4ZXIgKGxpa2UgdGhpcyBvbmUpLCBhbmQgdGhlbiBiZWF0IGluIHRoZSBidXR0ZXIsIGhvbmV5LCBzYWx0LCBhbmQgdGhlIHJlbWFpbmluZyAyIHRhYmxlc3Bvb25zIHllYXN0LiBDb250aW51ZSBiZWF0aW5nIGFsbCB0aGUgaW5ncmVkaWVudHMgdG9nZXRoZXIgdW50aWwgdGhleSBmb3JtIGEgc21vb3RoIGRvdWdoLCBhbmQgdGhlbiB0dXJuIGl0IG91dCBvbiBhIHdlbGwtZmxvdXJlZCBzdXJmYWNlLiBLbmVhZCBieSBoYW5kIGZvciB0ZW4gdG8gZmlmdGVlbiBtaW51dGVzLCBpbmNvcnBvcmF0aW5nIGFib3V0IDEgY3VwcyBhZGRpdGlvbmFsIGZsb3VyLCB1bnRpbCB0aGUgZG91Z2ggYmVjb21lcyBzbW9vdGggYW5kIGVsYXN0aWMuT2lsIGEgbGFyZ2UgbWl4aW5nIGJvd2wsIGFuZCB0cmFuc2ZlciB0aGUgZG91Z2ggdG8gdGhlIGJvd2wuIENvdmVyIHRpZ2h0bHksIGFuZCBhbGxvdyB0aGUgZG91Z2ggdG8gcmlzZSB1bnRpbCBkb3VibGVkIGluIHZvbHVtZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVHJhbnNmZXIgdGhlIGRvdWdoIHRvIGEgd2VsbC1mbG91cmVkIHN1cmZhY2UsIGFuZCBzcGxpdCBpbnRvIHR3byBwb3J0aW9ucyBvZiBhcHByb3hpbWF0ZWx5IGVxdWFsIHdlaWdodC4gQnV0dGVyIGFuZCBmbG91ciB0d28gNC1pbmNoIGJ5IDgtaW5jaCBsb2FmIHBhbnMuV29ya2luZyBvbmUgYXQgYSB0aW1lLCByb2xsIGVhY2ggbHVtcCBvZiBkb3VnaCBvdXQgaW50byBhIGxhcmdlIHJlY3RhbmdsZSwgYWJvdXQgOCBieSAxNiBpbmNoZXMuIFdvcmtpbmcgZnJvbSB0aGUgc2hvcnQgZW5kLCByb2xsIHRoZSBkb3VnaCBpbnRvIGEgbG9hZiwgcGluY2hpbmcgdGhlIHNlYW0gYXQgdGhlIGJvdHRvbSBvZiB0aGUgbG9hZiB0aWdodGx5IHRvIHNlYWwgaXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBkb3VnaCwgc2VhbS1zaWRlIGRvd24sIGluIGEgcHJlcGFyZWQgbG9hZiBwYW4uIENvdmVyIGxpZ2h0bHkgd2l0aCBhIGtpdGNoZW4gdG93ZWwsIGFuZCBhbGxvdyBpdCB0byByaXNlIHVudGlsIGRvdWJsZWQgaW4gc2l6ZSwgYWJvdXQgdHdvIGhvdXJzLldoaWxlIHRoZSBkb3VnaCByaXNlcywgaGVhdCB0aGUgb3ZlbiB0byA0MDAgRi5Vc2luZyBhIHBhc3RyeSBicnVzaCwgZ2VudGx5IGJydXNoIHRoZSB0b3Agb2YgdGhlIGRvdWdoIHdpdGggY3JlYW0sIGFuZCB0aGVuIHNjYXR0ZXIgb25lIHRhYmxlc3Bvb24gcm9sbGVkIG9hdHMgb3ZlciBlYWNoIGxvYWYuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRyYW5zZmVyIHRoZSBsb2F2ZXMgdG8gdGhlIG92ZW4sIGFuZCBiYWtlIDUgbWludXRlcyBhdCA0MDAgRi4gVGhlbiByZWR1Y2UgdGhlIHRlbXBlcmF0dXJlIHRvIDM1MCBGIGFuZCBjb250aW51ZSBiYWtpbmcgdW50aWwgdGhlIGNydXN0IGlzIGEgZGFyayBicm93biBhbmQgdGhlIGJyZWFkIHJlYWNoZXMgYW4gaW50ZXJuYWwgdGVtcGVyYXR1cmUgb2YgMjAwIEYgYWJvdXQgNDUgbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGZyb20gdGhlIG92ZW4gYW5kIGFsbG93IHRoZSBsb2F2ZXMgdG8gY29vbCBpbiB0aGVpciBwYW5zIGZvciBmaXZlIG1pbnV0ZXMsIHRoZW4gdHVybiBvdXQgb250byBhIHdpcmUgcmFjaywgYWxsb3dpbmcgdGhlIGJyZWFkIHRvIGNvb2wgY29tcGxldGVseSBiZWZvcmUgc2xpY2luZy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJXaG9sZSBXaGVhdCBNaWxrIGFuZCBIb25leSBTYW5kd2ljaCBCcmVhZFwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJhbnRpcGFzdGlcIixcbiAgICAgICAgXCJzdGFydGVyXCIsXG4gICAgICAgIFwic25hY2tcIixcbiAgICAgICAgXCJhcHBldGl6ZXJcIixcbiAgICAgICAgXCJhbnRpcGFzdG9cIixcbiAgICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2MTgzMzIsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzYxODMzMi01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5OTEyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTY4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODM3MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDI3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTkwNzEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0MixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMjAxMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJnXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDI0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTgzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImdcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDI4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm1MXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMDgwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTIwLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiZ1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbWVkaXVtIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIHRoZSBmbG91ciwgYmFraW5nIHBvd2RlciwgY29ybnN0YXJjaCwgY2lubmFtb24sIGFuZCBzYWx0LiBJbiBhIHNlcGFyYXRlIGJvd2wsIHdoaXNrIHRvZ2V0aGVyIHRoZSBidXR0ZXIsIHB1bXBraW4sIGFuZCB2YW5pbGxhLiBTdGlyIGluIHRoZSBhZ2F2ZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBmbG91ciBtaXh0dXJlLCBzdGlycmluZyBqdXN0IHVudGlsIGluY29ycG9yYXRlZC4gRm9sZCBpbiAyIHRhYmxlc3Bvb25zIG9mIGNob2NvbGF0ZSBjaGlwcy4gQ2hpbGwgdGhlIGNvb2tpZSBkb3VnaCBmb3IgYXQgbGVhc3QgMzAgbWludXRlcy4gKElmIGNoaWxsaW5nIGxvbmdlciB0aGFuIDEgaG91ciwgY292ZXIgdGhlIHRvcCBvZiB0aGUgYm93bCB3aXRoIGZvaWwuKVByZWhlYXQgdGhlIG92ZW4gdG8gMzI1RiwgYW5kIGxpbmUgYSBiYWtpbmcgc2hlZXQgd2l0aCBwYXJjaG1lbnQgcGFwZXIgb3IgYSBzaWxpY29uZSBiYWtpbmcgbWF0LiBEcm9wIHRoZSBjb29raWUgZG91Z2ggaW50byAxMiByb3VuZGVkIHNjb29wcyBvbnRvIHRoZSBwcmVwYXJlZCBiYWtpbmcgc2hlZXQuIEZsYXR0ZW4gc2xpZ2h0bHksIGFuZCBwcmVzcyB0aGUgcmVtYWluaW5nIGNob2NvbGF0ZSBjaGlwcyBpbnRvIHRoZSB0b3BzIG9mIHRoZSBjb29raWUgZG91Z2guXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgYXQgMzI1RiBmb3IgMTUtMTcgbWludXRlcy4gQ29vbCBvbiB0aGUgYmFraW5nIHNoZWV0IGZvciBhdCBsZWFzdCAxMCBtaW51dGVzIGJlZm9yZSB0dXJuaW5nIG91dCBvbnRvIGEgd2lyZSByYWNrLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlRoZSBVbHRpbWF0ZSBIZWFsdGh5IFNvZnQgJiBDaGV3eSBQdW1wa2luIENob2NvbGF0ZSBDaGlwIENvb2tpZXNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjMxOTUxLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy8yMzE5NTEtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDAyNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxOTMzNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzODE0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDc3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIldoaXNrIHRvZ2V0aGVyIGJyb3duIHN1Z2FyLCBjb3Juc3RhcmNoLCBhbmQgMS80IHRlYXNwb29uIHNhbHQgaW4gYSBoZWF2eSBtZWRpdW0gc2F1Y2VwYW4sIHRoZW4gd2hpc2sgaW4gbWlsayBhbmQgY3JlYW0uIEJyaW5nIHRvIGEgYm9pbCBvdmVyIG1lZGl1bSBoZWF0LCB3aGlza2luZyBmcmVxdWVudGx5LCB0aGVuIGJvaWwsIHdoaXNraW5nLCAxIG1pbnV0ZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGZyb20gaGVhdCBhbmQgd2hpc2sgaW4gYnV0dGVyIGFuZCB2YW5pbGxhLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIGludG8gYSBib3dsLCB0aGVuIGNvdmVyIHN1cmZhY2Ugd2l0aCBidXR0ZXJlZCB3YXggcGFwZXIgYW5kIGNoaWxsIHVudGlsIGNvbGQsIGF0IGxlYXN0IDEgMS8yIGhvdXJzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkJ1dHRlcnNjb3RjaCBQdWRkaW5nXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDg4MDEwOCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvODgwMTA4LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMDYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyOTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiYnVuY2hcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY2xvdmVzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkxNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNTI5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmluc2UgdGhlIHF1aW5vYSB1bmRlciBjb29sIHJ1bm5pbmcgd2F0ZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSByaW5zZWQgcXVpbm9hIGluIGEgcG90IHdpdGggMS43NSBjdXBzIG9mIHdhdGVyLiBQdXQgYSBsaWQgb24gdG9wLCBicmluZyBpdCB0byBhIGJvaWwsIHRoZW4gcmVkdWNlIHRoZSBoZWF0IHRvIGxvdyBhbmQgbGV0IHNpbW1lciBmb3IgMTUgbWludXRlcy4gQWZ0ZXIgMTUgbWludXRlcywgdHVybiBvZmYgdGhlIGhlYXQuIEFsbG93IHRoZSBxdWlub2EgdG8gY29vbCBiZWZvcmUgbWFraW5nIHRoZSBzYWxhZCBvciBlbHNlIHRoZSBoZWF0IHdpbGwgd2lsdCB0aGUgcGFyc2xleSBhbmQgdmVnZXRhYmxlcy4gVG8gY29vbCBpdCBmYXN0ZXIsIHNwcmVhZCBpdCBvdXQgb24gYSBiYWtpbmcgc2hlZXQgYW5kIHBsYWNlIGluIHRoZSByZWZyaWdlcmF0b3IgZm9yIDMwIG1pbnV0ZXMuV2hpbGUgdGhlIHF1aW5vYSBpcyBjb29saW5nLCBwcmVwYXJlIHRoZSByZXN0IG9mIHRoZSBzYWxhZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ3V0IHRoZSB0b21hdG8gYW5kIGN1Y3VtYmVyIGludG8gYSBzbWFsbCBkaWNlLiBSaW5zZSB0aGUgcGFyc2xleSB3ZWxsIHRvIHJlbW92ZSBzYW5kIGFuZCBncml0LCB0aGVuIGNob3Agd2VsbC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBjdWN1bWJlciwgdG9tYXRvLCBhbmQgcGFyc2xleSB0byBhIGJvd2wuVG8gbWFrZSB0aGUgZHJlc3NpbmcsIHNxdWVlemUgdGhlIGp1aWNlIGZyb20gdGhlIGxlbW9uIGludG8gYSBib3dsIChhYm91dCAgY3VwKS4gTWluY2UgdGhlIGdhcmxpYyBhbmQgYWRkIHRvIHRoZSBsZW1vbiBqdWljZSBhbG9uZyB3aXRoIHRoZSBvbGl2ZSBvaWwgYW5kIHNhbHQuT25jZSB0aGUgcXVpbm9hIGlzIGNvb2xlZCwgY29tYmluZSBpdCB3aXRoIHRoZSBjaG9wcGVkIHZlZ2V0YWJsZXMgYW5kIHRoZSBsZW1vbiBkcmVzc2luZy4gU3RpciB3ZWxsIGFuZCB0aGVuIHNlcnZlIVwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcInF1aW5vYSB0YWJib3VsZWhcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjAyMzExLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MDIzMTEtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNDI0MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNjY2NjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNDEzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNjY2NjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTE3NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJlbnZlbG9wZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YnNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNjQ1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMzAsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNDA1MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNjY2NjY2NjY2NjY2NjY2NixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDU0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMzAsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkxpZ2h0bHkgc3ByYXkgdGhlIG1vbGQgd2l0aCBub24tc3RpY2sgc3ByYXkgYW5kIHdpcGUgZXhjZXNzIG9mZiB3aXRoIGEgcGFwZXIgdG93ZWwuIERvbuKAmXQgb3ZlcmRvIGl0IG9yIHRoZSByZXNpZHVlIHdpbGwgYWZmZWN0IHRoZSB0YXN0ZSBvZiB0aGUgamVsbG8uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgdGhlIHNvZGEsIGp1aWNlLCBhbmQgY3JlYW0gaW50byBhIG1lZGl1bSBzYXVjZXBhbiBhbmQgc3ByaW5rbGUgdGhlIGdlbGF0aW4gb24gdG9wLiBBbGxvdyB0aGUgZ2VsYXRpbiB0byBzb2FrIGZvciAyLTMgbWludXRlcywgdGhlbiBiZWdpbiB0byBoZWF0IG9uIGxvdywgc3RpcnJpbmcgY29uc3RhbnRseSB1bnRpbCBnZWxhdGluIGlzIGZ1bGx5IGRpc3NvbHZlZCAoYWJvdXQgNSBtaW51dGVzKS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIHNhdWNlcGFuIGZyb20gaGVhdCBhbmQgYWRkIHZvZGthIGFuZCBmb29kIGNvbG9yaW5nLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIGludG8gbW9sZHMgYW5kIGNoaWxsIGZvciBzZXZlcmFsIGhvdXJzLCBvciB1bnRpbCBzZXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBmcm9tIG1vbGQsIHRvcCB3aXRoIHdoaXBwZWQgY3JlYW0sIGFuZCBlbmpveSByZXNwb25zaWJseSEqVGhlIG9yaWdpbmFsIHJlY2lwZSBzdWdnZXN0cyAyLTMgZW52ZWxvcGVzLCBkZXBlbmRpbmcgb24gaG93IGxvbmcgeW91ciBqZWxsbyBzaG90cyB3aWxsIGJlIGxlZnQgb3V0IChtb3JlIGdlbGF0aW4gZm9yIG1vcmUgdGltZSkuIEkgb3B0ZWQgZm9yIDMgYmVjYXVzZSB3ZSB3ZXJlIHRyYXZlbGluZyBhbiBob3VyIHRvIGdldCB0byB0aGUgcGFydHksIGJ1dCBJIGZvdW5kIHRoZW0gdG8gYmUgYSBsaXR0bGUgdG9vIGZpcm0gLCBzbyBJIHN1Z2dlc3QgeW91IHN0aWNrIHdpdGggMiBhbmQgcGxhbiBhY2NvcmRpbmdseSBmb3IgdGhlIGJlc3QgcmVzdWx0cyFcIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJCaXJ0aGRheSBDYWtlIEplbGxvIFNob3RzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImFudGlwYXN0aVwiLFxuICAgICAgICBcInN0YXJ0ZXJcIixcbiAgICAgICAgXCJzbmFja1wiLFxuICAgICAgICBcImFwcGV0aXplclwiLFxuICAgICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgICBcImhvciBkJ29ldXZyZVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDY3MDQwOCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjcwNDA4LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM4MjgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyNjYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDE3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDE5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMjIwMjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAyMjAyNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDgyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwODIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDMzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDMyMDA5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDExNDU3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgb3ZlbiB0byAzNTAgZGVncmVlcyBGLiBGaXJzdCwgcmVtb3ZlIHRoZSBtdXNocm9vbSBzdGVtcyBieSBwdXNoaW5nIGVhY2ggb25lIHRvd2FyZCB5b3UsIHRoZW4gYXdheSBmcm9tIHlvdS4gSXQgd2lsbCBwb3AgcmlnaHQgb3V0LiAoU2F2ZSB0aGVtIHRvIGFkZCB0byBhbm90aGVyIHJlY2lwZS4pIFN3aXNoIGFuZCBydWIgdGhlIG11c2hyb29tIHRvcHMgaW4gYSBsYXJnZSBib3dsIG9mIGNvbGQgd2F0ZXIgdG8gZ2V0IHRoZW0gY2xlYW4uIFRoZW4sIGxheSB0aGVtIG9wZW4gc2lkZSBkb3duIG9uIGEga2l0Y2hlbiB0b3dlbCB0byBkcnkuV2hpbGUgdGhlIG11c2hyb29tcyBkcnksIG1peCB0b2dldGhlciB0aGUgY3JlYW0gY2hlZXNlLCBzcGluYWNoLCBhcnRpY2hva2UgaGVhcnRzLCBwYXJtZXNhbiwgZ2FybGljIHBvd2RlciwgMS8yIHRzcC4ga29zaGVyIHNhbHQsIGFuZCByZWQgcGVwcGVyIGZsYWtlcy5JbiBhIHNtYWxsIGJvd2wsIHN0aXIgdG9nZXRoZXIgb2xpdmUgb2lsLCAxLzQgdHNwLiBzYWx0LCBhbmQgSXRhbGlhbiBzZWFzb25pbmcuIFVzZSBhIGJhc3RpbmcgYnJ1c2ggb3IgeW91ciBmaW5nZXJzIHRvIGxpZ2h0bHkgcnViIHRoZSBvdXRzaWRlIG9mIHRoZSBtdXNocm9vbXMgd2l0aCB0aGUgb2lsIG1peHR1cmUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBtdXNocm9vbXMgb3BlbiBzaWRlIHVwIG9uIGEgYmFraW5nIHNoZWV0LiBVc2UgYSBzbWFsbCBkaXNoZXIgb3Igc3Bvb24gdG8gcGxhY2UgYSBoZWFwaW5nIHNjb29wIG9mIGRpcCBtaXh0dXJlIGludG8gZWFjaCBtdXNocm9vbSwgcHJlc3NpbmcgaXQgZG93biB0byBtYWtlIHN1cmUgaXQgZmlsbHMgdGhlIG9wZW5pbmcuIFByZXNzIGEgc21hbGwgYW1vdW50IG9mIGZldGEgY2hlZXNlIG9uIHRvcCBvZiBlYWNoIHN0dWZmZWQgbXVzaHJvb20uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJha2UgaW4gcHJlaGVhdGVkIG92ZW4gZm9yIDIwLTI1IG1pbnV0ZXMgdW50aWwgZmlsbGluZyBpcyBob3QgYW5kIGJ1YmJseSBhbmQgZmV0YSBpcyBzdGFydGluZyB0byBicm93bi4gTXVzaHJvb21zIHdpbGwgZHJhaW4gc29tZSBicm93biBsaXF1aWQgZHVyaW5nIGNvb2tpbmcsIHNvIGRyYWluIG9uIHBhcGVyIHRvd2VscyBiZWZvcmUgc2VydmluZyBpZiB5b3UgZG9uJ3Qgd2FudCB0aGF0IGxpcXVpZCBvbiB5b3VyIHNlcnZpbmcgcGxhdGUuIFRoZXNlIHRhc3RlIGp1c3QgYXMgZ29vZCBldmVuIGFmdGVyIHRoZXkgaGF2ZSBjb29sZWQgZG93biFcIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJBcnRpY2hva2UgU3BpbmFjaCBEaXAgU3R1ZmZlZCBNdXNocm9vbXNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwiY29uZGltZW50XCIsXG4gICAgICAgIFwiZGlwXCIsXG4gICAgICAgIFwic3ByZWFkXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMzI1MjA4LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy8zMjUyMDgtNTU2eDM3MC5qcGVnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjbG92ZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA3MDM2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwODIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMTE1NDksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAzOCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMzA0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTY3NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzbWFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTAyMDQyMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEwMjYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA4LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNjMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0MTA2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIldhdGNoIGhvdyB0byBtYWtlIHRoaXMgcmVjaXBlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBhbiBvdmVuIHJhY2sgaW4gdGhlIGNlbnRlciBvZiB0aGUgb3Zlbi4gUHJlaGVhdCB0aGUgb3ZlbiB0byAzNTAgZGVncmVlcyBGLiBTcHJheSBhIDktYnktMTMtYnktMi1pbmNoIGdsYXNzIGJha2luZyBkaXNoIHdpdGggdmVnZXRhYmxlIG9pbCBjb29raW5nIHNwcmF5LiBTZXQgYXNpZGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkZvciB0aGUgZm9uZHV0YSBzYXVjZTogSW4gYSBtZWRpdW0gaGVhdnktYm90dG9tZWQgc2F1Y2VwYW4sIGJyaW5nIHRoZSBtaWxrIGFuZCBjcmVhbSB0byBhIHNpbW1lciBvdmVyIG1lZGl1bSBoZWF0LiBSZWR1Y2UgdGhlIGhlYXQgdG8gbG93LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIFBlY29yaW5vIFJvbWFubyBhbmQgd2hpc2sgdW50aWwgdGhlIGNoZWVzZSBpcyBtZWx0ZWQgYW5kIHRoZSBzYXVjZSBpcyBzbW9vdGguXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSB0aGUgcGFuIGZyb20gdGhlIGhlYXQgYW5kIHN0aXIgaW4gdGhlIGJhc2lsLiBTZXQgYXNpZGUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbGFyZ2Ugc2tpbGxldCwgaGVhdCAyIHRhYmxlc3Bvb25zIG9mIG9saXZlIG9pbCBvdmVyIG1lZGl1bS1oaWdoIGhlYXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgc2F1c2FnZSwgc2hhbGxvdHMsIGdhcmxpYywgMS80IHRlYXNwb29uIHNhbHQsIGFuZCAxLzQgdGVhc3Bvb24gcGVwcGVyLiBDb29rIHVudGlsIHRoZSBzYXVzYWdlIGlzIGNvb2tlZCB0aHJvdWdoIGFuZCB0aGUgdmVnZXRhYmxlcyBoYXZlIHNvZnRlbmVkLCA4IHRvIDEwIG1pbnV0ZXMuIFVzaW5nIGEgd29vZGVuIHNwb29uLCBicmVhayB0aGUgc2F1c2FnZSBpbnRvIDEvMi1pbmNoIHBpZWNlcy4gSW5jcmVhc2UgdGhlIGhlYXQgdG8gaGlnaC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA3XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSB3aW5lIGFuZCBzY3JhcGUgdXAgdGhlIGJyb3duIGJpdHMgdGhhdCBjbGluZyB0byB0aGUgYm90dG9tIG9mIHRoZSBwYW4gd2l0aCBhIHdvb2RlbiBzcG9vbi4gQ29vayB1bnRpbCB0aGUgd2luZSBoYXMgZXZhcG9yYXRlZCwgYWJvdXQgMiBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSZW1vdmUgdGhlIHBhbiBmcm9tIHRoZSBoZWF0IGFuZCBzZXQgYXNpZGUgdG8gY29vbCBzbGlnaHRseS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA5XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBwZWFzLCByaWNvdHRhLCBhbmQgMSBjdXAgb2YgdGhlIGZvbmR1dGEgc2F1Y2UuIFNlYXNvbiB3aXRoIHJlbWFpbmluZyAxLzIgdGVhc3Bvb24ga29zaGVyIHNhbHQgYW5kIDEvNCB0ZWFzcG9vbiBwZXBwZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMTBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCcmluZyBhIGxhcmdlIHBvdCBvZiBzYWx0ZWQgd2F0ZXIgdG8gYSBib2lsIG92ZXIgaGlnaCBoZWF0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDExXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBwYXN0YSBhbmQgY29vayB1bnRpbCBqdXN0IHRlbmRlciwgNyB0byA4IG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMTJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJEcmFpbiBhbmQgc2V0IGFzaWRlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDEzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIGhhbGYgb2YgdGhlIG1hcmluYXJhIHNhdWNlIG92ZXIgdGhlIGJvdHRvbSBvZiB0aGUgcHJlcGFyZWQgYmFraW5nIGRpc2guIFVzaW5nIGEgc21hbGwgc3Bvb24sIGZpbGwgdGhlIG1hbmljb3R0aSBzaGVsbHMgd2l0aCB0aGUgc2F1c2FnZSBmaWxsaW5nIGFuZCBhcnJhbmdlIGluIGEgc2luZ2xlIGxheWVyIGluIHRoZSBiYWtpbmcgZGlzaC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgdGhlIHJlbWFpbmluZyBtYXJpbmFyYSBzYXVjZSBvbiB0b3Agb2YgdGhlIGZpbGxlZCBzaGVsbHMuIFNwb29uIHRoZSByZW1haW5pbmcgZm9uZHV0YSBzYXVjZSBvbiB0b3AgYW5kIHNwcmlua2xlIHdpdGggdGhlIG1venphcmVsbGEuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMTVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJEcml6emxlIHdpdGggb2xpdmUgb2lsIGFuZCBiYWtlIHVudGlsIGJ1YmJseSBhbmQgZ29sZGVuIGJyb3duLCAzMCB0byAzNSBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDE2XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJCYWtlZCBNYW5pY290dGkgd2l0aCBTYXVzYWdlIGFuZCBQZWFzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImx1bmNoXCIsXG4gICAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgICAgXCJkaW5uZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1NDI3NzgsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU0Mjc3OC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibWVkaXVtIHNpemVcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0NjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxMCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM2NTEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTM4MjgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDExMjU2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMjUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEwMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTY3NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVoZWF0IHRoZSBvdmVuIHRvIDM3NcKwRiB0aGVuIHByZXBhcmUgYSBsYXJnZSBjYXNzZXJvbGUgZGlzaCAoSSB1c2VkIGEgMSBxdWFydCBkaXNoKSBieSBncmVhc2luZyB3aXRoIEVhcnRoIEJhbGFuY2UsIGJ1dHRlciBvciBub24tc3RpY2sgY29va2luZyBzcHJheS5XYXJtIHRoZSBvbGl2ZSBvaWwgb3ZlciBtZWRpdW0gaGVhdCBpbiBhIHNhdXTDqSBwYW4gYW5kIGNvb2sgdGhlIHNoYWxsb3QgYW5kIGdhcmxpYyBmb3IgYSBmZXcgbWludXRlcywgdW50aWwgZnJhZ3JhbnQuVXNpbmcgYSBzdHJhaW5lciBhbmQgYSBwYXBlciB0b3dlbCwgcHJlc3MgdGhlIGV4Y2VzcyB3YXRlciBvdXQgZnJvbSB0aGUgZGVmcm9zdGVkIHNwaW5hY2ggdGhlbiBhZGQgaXQgdG8gdGhlIHBhbi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBjaG9wcGVkIGFydGljaG9rZSBoZWFydHMgKEkgZGlzY2FyZGVkIGFueSB0b3VnaCBwYXJ0cykgYW5kIGEgcGluY2ggb2Ygc2FsdCAmIHBlcHBlciB0byB0aGUgcGFuIGFuZCBjb29rIGZvciBmaXZlIG1pbnV0ZXMuTWVhbndoaWxlLCBjb21iaW5lIHRoZSBlZ2dzLCB5b2d1cnQgYW5kIGNoZWVzZSBpbiBhIGxhcmdlIGJvd2wgYW5kIHdoaXNrIHRvZ2V0aGVyIHVudGlsIHdlbGwtY29tYmluZWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSB0aGUgc3BpbmFjaCBhcnRpY2hva2UgbWl4dHVyZSBmcm9tIHRoZSBoZWF0IGFuZCBhbGxvdyB0byBjb29sIGZvciBhIGZldyBtaW51dGVzIGJlZm9yZSBhZGRpbmcgdG8gdGhlIGJvd2wgd2l0aCB0aGUgZWdncyBhbmQgY2hlZXNlLkxhc3RseSwgYWRkIHRoZSBjb29rZWQgcXVpbm9hIGFuZCBzdGlyIHVudGlsIGV2ZXJ5dGhpbmcgaXMgbWl4ZWQgdG9nZXRoZXIgd2VsbC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIG1peHR1cmUgaW50byB0aGUgY2Fzc2Vyb2xlIGRpc2gsIHNtb290aGluZyB0aGUgdG9wIHdpdGggdGhlIGJhY2sgb2YgYSBzcG9vbi4gU3ByaW5rbGUgYSBmZXcgdGFibGVzcG9vbnMgb2YgY2hlZXNlIG9uIHRvcCBhbmQgY29vayBmb3IgMzAtMzUgbWludXRlcywgdW50aWwgdG9wIGlzIGxpZ2h0IGdvbGRlbiBicm93bi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2VydmUgd2FybSBhbmQgZW5qb3khXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiU3BpbmFjaCBBcnRpY2hva2UgUXVpbm9hIENhc3Nlcm9sZVwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJsdW5jaFwiLFxuICAgICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICAgIFwiZGlubmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjk4NzAxLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82OTg3MDEtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxNDYyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDE0NjIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzMDIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBpbmNoXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRvIHByZXBhcmUgYmVycnkgbGF5ZXI6IFByZWhlYXQgb3ZlbiB0byAzNzVGLiBDb2F0IHNpeCA4LW91bmNlIHNvdWZmbCBjdXBzIHdpdGggY29va2luZyBzcHJheS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIDEgdGVhc3Bvb24gc3VnYXIgdG8gZWFjaCBjdXAgYW5kIHN3aXJsIHRvIGNvYXQgdGhlIGluc2lkZS4gRGlzdHJpYnV0ZSByYXNwYmVycmllcyBpbiB0aGUgYm90dG9tIG9mIHRoZSBjdXBzIGFuZCBzcHJpbmtsZSBlYWNoIHdpdGggMSB0ZWFzcG9vbiBjcm1lIGRlIGNhc3NpcyAob3IgZWF1LWRlLXZpZSwganVpY2Ugb3IgbmVjdGFyKS5UbyBwcmVwYXJlIHNvdWZmbHM6IFN0aXIgcmFzcGJlcnJpZXMgaW4gYSBzYXVjZXBhbiBvdmVyIGxvdyBoZWF0IHVudGlsIHRoZXkgYXJlIGp1aWN5IChmb3IgZnJlc2gpIG9yIHRoYXdlZCAoZm9yIGZyb3plbikuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRyYW5zZmVyIHRvIGEgZmluZSBzaWV2ZSBzZXQgb3ZlciBhIGJvd2wuIFdpdGggYSBzcG9vbiwgcHJlc3MgdGhlIGJlcnJpZXMgdGhyb3VnaCB0aGUgc2lldmUsIGJlaW5nIGNhcmVmdWwgdG8gZXh0cmFjdCBhbGwgdGhlIHB1bHAuIERpc2NhcmQgdGhlIHNlZWRzLlJldHVybiB0aGUgcHVyZWUgdG8gdGhlIHNhdWNlcGFuLiBCcmluZyB0byBhIHNpbW1lciBhbmQgc3RpciBvdmVyIG1lZGl1bSBoZWF0IHVudGlsIHZlcnkgdGhpY2sgYW5kIHJlZHVjZWQgdG8gMS80IGN1cCwgYWJvdXQgMTAgbWludXRlcy4gKFJlZHVjZSB0aGUgaGVhdCBhcyB0aGUgbWl4dHVyZSB0aGlja2Vucy4pIFN0aXIgaW4gMSB0YWJsZXNwb29uIGNybWUgZGUgY2Fzc2lzIChvciBlYXUtZGUtdmllLCBqdWljZSBvciBuZWN0YXIpIGFuZCBzZXQgYXNpZGUgdG8gY29vbCBzbGlnaHRseS5CZWF0IGVnZyB3aGl0ZXMgYW5kIHNhbHQgaW4gYSBtaXhpbmcgYm93bCB3aXRoIGFuIGVsZWN0cmljIG1peGVyIG9uIGhpZ2ggc3BlZWQgdW50aWwgc29mdCBwZWFrcyBmb3JtLiBDb250aW51aW5nIHRvIGJlYXQsIGdyYWR1YWxseSBhZGQgc3VnYXIgYW5kIGJlYXQgdW50aWwgc3RpZmYgcGVha3MgZm9ybS4gV2l0aCBhIHJ1YmJlciBzcGF0dWxhLCBmb2xkIGFib3V0IGEgZm91cnRoIG9mIHRoZSBiZWF0ZW4gd2hpdGVzIGludG8gdGhlIHJlc2VydmVkIHJhc3BiZXJyeSBwdXJlZSB0byBsaWdodGVuIGl0cyB0ZXh0dXJlLCB0aGVuIHBvdXIgdGhlIG1peHR1cmUgb3ZlciB0aGUgcmVtYWluaW5nIHdoaXRlcy4gR2VudGx5IGZvbGQgdGhlIHB1cmVlIGFuZCB3aGl0ZXMgdG9nZXRoZXIgdW50aWwgZXZlbmx5IGJsZW5kZWQuIFNwb29uIHRoZSBzb3VmZmwgbWl4dHVyZSBpbnRvIHRoZSBjdXBzLCBzcHJlYWRpbmcgdG8gdGhlIGVkZ2VzIG9mIHRoZSBjdXBzLlNldCB0aGUgY3VwcyBvbiBhIGJha2luZyBzaGVldCBhbmQgYmFrZSBmb3IgMTAgbWludXRlcywgb3IgdW50aWwgbGlnaHRseSBicm93bmVkIG9uIHRoZSB0b3AuIER1c3Qgd2l0aCBjb25mZWN0aW9uZXJzIHN1Z2FyIGFuZCBzZXJ2ZSBpbW1lZGlhdGVseS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJEb3VibGUgUmFzcGJlcnJ5IFNvdWZmbMOpc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1MTUwMjEsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzUxNTAyMS01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkwNDAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic3RpY2tzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkzNTQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2UgY2FuXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkwNzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0MTgxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxODYxNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjEzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkdyZWFzZSBhIDnDlzEzIHBhbi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IHRvZ2V0aGVyIGdyYWhhbSBjcmFja2VyIGNydXN0IGFuZCAxwrwgc3RpY2tzIG9mIGJ1dHRlci4gUHJlc3Mgb3V0IGluIHBhbi5JbiBtaXhlciwgbWl4IHRvZ2V0aGVyIHBvd2RlcmVkIHN1Z2FyLCAyIHN0aWNrcyBvZiBidXR0ZXIsIHZhbmlsbGEsIGFuZCBlZ2dzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIG9uIHRvcCBvZiBncmFoYW0gY3JhY2tlciBjcnVzdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIG91dCBjcnVzaGVkIHBpbmVhcHBsZSBvbiB0b3Agb2Ygc3VnYXIgbWl4dHVyZSwgdGhlbiBhZGQgc2xpY2VkIGJhbmFuYXMuIEkgYWRkZWQgY2hlcnJpZXMgbmV4dCBmb3IgZnVuLkluIG1peGVyLCBhZGQgaGVhdnkgY3JlYW0gYW5kIG1peCBvbiBtZWRpdW0gaGlnaCB1bnRpbCBzb2Z0IHBlYWsuIFdoZW4gYWxtb3N0IGNvbXBsZXRlZCwgYWRkIMK9IGN1cCBzdWdhci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIHdoaXBwZWQgY3JlYW0gb3ZlciB0b3Agb2YgYmFuYW5hcy4gUmVmcmlnZXJhdGUgZm9yIGF0IGxlYXN0IDIgaG91cnMsIChJIHdhaXRlZCAxIGhvdXJzIGFuZCBpdCB3YXMgZmluZS4pRW5qb3khXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQSBDYWtlIFRvIFdhcm0gQW55IEhlYXJ0IOKAkyBCYW5hbmEgU3BsaXQgQ2FrZVwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJhbnRpcGFzdGlcIixcbiAgICAgICAgXCJzdGFydGVyXCIsXG4gICAgICAgIFwic25hY2tcIixcbiAgICAgICAgXCJhcHBldGl6ZXJcIixcbiAgICAgICAgXCJhbnRpcGFzdG9cIixcbiAgICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA5OTkwNDQsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzk5OTA0NC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDkwMzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE2MDU3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI5NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyNTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTE1MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEwMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI5MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXb3JraW5nIGluIGEgY291cGxlIG9mIGJhdGNoZXMsIHJvdWdobHkgY2hvcCB0aGUgY2hpY2twZWFzIGFuZCBwbGFjZSBpbiBhIGJvd2wuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgbWluY2VkIGhlcmJzIGFuZCBzY2FsbGlvbnMgdG8gdGhlIGNoaWNrcGVhcyBhbmQgZ2l2ZSBhIHF1aWNrIHRvc3MuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgc2VwYXJhdGUgYm93bCwgd2hpc2sgdG9nZXRoZXIgdGhlIG1heW8sIGxlbW9uIGp1aWNlLCBhbmQgb2xpdmUgb2lsLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDdXQgdGhlIGF2b2NhZG8gaW4gaGFsZiwgcmVtb3ZlIHRoZSBwaXQsIGFuZCBjdXQgZWFjaCBoYWxmIGludG8gIGN1YmVzIChzZWUgbm90ZSkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIGluIHRoZSBib3dsIGFuZCBwb3VyIHRoZSBtYXlvIG1peHR1cmUgb3ZlciB0aGUgY2hpY2twZWFzIGFuZCBhdm9jYWRvLiBUb3NzIHVudGlsIHdlbGwgY29tYmluZS4gVGFzdGUgYW5kIGFkZCBzYWx0L3BlcHBlciB0byB5b3VyIHByZWZlcnJlZCB0YXN0ZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2VydmUgb24gYSBzYW5kd2ljaCBvciB3aXRoIGNyYWNrZXJzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDZcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkF2b2NhZG8gQ2hpY2twZWEgU2FsYWRcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2FsYWRcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA3OTgwNzAsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzc5ODA3MC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4MzcxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwODEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDc3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MjM2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMjAsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJwaW5jaFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQ1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTA5NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDU0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWVsdCBidXR0ZXIgYW5kIGJydXNoIHNvbWUgb2YgdGhlIGJ1dHRlciBhcm91bmQgdGhlIHNsb3cgY29va2VyLlVzaW5nIGEgc3RhbmQgbWl4ZXIsIGNvbWJpbmUgZmxvdXIsIDEtY3VwIHN1Z2FyLCBiYWtpbmcgcG93ZGVyLCBhbmQgc2FsdC4gVGhlbiwgYWRkIG1pbGsgYW5kIHJlbWFpbmluZyBtZWx0ZWQgY29vbGVkIGJ1dHRlciwgbWl4aW5nIGp1c3QgdW50aWwgZHJ5IGluZ3JlZGllbnRzIGFyZSBtb2lzdGVuZWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgdGhlIGJhdHRlciBpbiB0aGUgc2xvdyBjb29rZXIgYW5kIHBsYWNlIHRoZSBmcm96ZW4gcGVhY2hlcyBvbiB0b3AuQ29vayBvbiBoaWdoIGZvciAzIGhvdXJzIHdpdGggbGlkIG9uIHRvcC4gT25jZSB0aGUgY29iYmxlciBpcyBkb25lLCBkaXZpZGUgYW5kIHNlcnZlIGNvYmJsZXIgd2FybSB3aXRoIGljZSBjcmVhbSBhbmQgd2hpcHBlZCBjcmVhbSBvbiB0b3AuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiU2xvdyBDb29rZXIgUGVhY2ggQ29iYmxlclwiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1NzQzMTcsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU3NDMxNy01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDgxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMi41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA4NjIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic3RyaXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDUxMTQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDE5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDIyMDIwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEzMzMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMjYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMzMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTEyODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJtZWRpdW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAyMTE1MjksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDI0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0NDEyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDExMDA5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbGFyZ2UgbWl4aW5nIGJvd2wsIGFkZCAxIGN1cCB3YXJtIHdhdGVyLCAxIHBhY2sgcmFwaWQgb3IgcXVpY2sgeWVhc3QsIDEgdCBzdWdhciAxLzIgdCBzYWx0IGFuZCAxIFQgb2xpdmUgb2lsLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNaXggd2VsbC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIDIgMS8yIGN1cHMgZmxvdXIgYW5kIG1peC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkICBhIGxpdHRsZSBtb3JlIGZsb3VyIGlmIHRvbyBzdGlja3kgYnV0IHlvdSBhcmUgbWFraW5nIGEgbGlnaHQgZG91Z2ggbm90IGEgaGVhdnkgYnJpY2suXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkNvdmVyIGFuZCBsZXQgcmlzZSB1bnRpbCBkb3VibGUgaW4gc2l6ZS4gQWJvdXQgMzAtNDAgbWludXRlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2hpbGUgZG91Z2ggaXMgcmlzaW5nLCBwcmVwIGFueSB0b3BwaW5ncy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlaGVhdCBvdmVuIDM3NSBjb252ZWN0aW9uLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTcHJlYWQgdGhlIGRvdWdoIG9uIGEgd2VsbCBvaWxlZCBsYXJnZSBwaXp6YSBwYW4gb3IgY29va2llIHNoZWV0LiBNZWx0IDIgVCBidXR0ZXIgaW4gYSBtaWNyb3dhdmUgZm9yIDE1LTIwIHNlY29uZHMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogOFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIk1peCAyIHQgZ2FybGljIHBvd2RlciBpbiB0aGUgYnV0dGVyIGFuZCBzcHJlYWQgdGhpbmx5IG92ZXIgdGhlIGRvdWdoLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDlcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUb3Agd2l0aCBjaGVlc2VzIGFuZCBvdGhlciB0b3BwaW5ncyBvZiBjaG9pY2UuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMTBcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGluIG92ZW4gZm9yIDIwIHRvIDI1IG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMTFcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIjQgQ2hlZXNlIFdoaXRlIFBpenphXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImFudGlwYXN0aVwiLFxuICAgICAgICBcInN0YXJ0ZXJcIixcbiAgICAgICAgXCJzbmFja1wiLFxuICAgICAgICBcImFwcGV0aXplclwiLFxuICAgICAgICBcImFudGlwYXN0b1wiLFxuICAgICAgICBcImhvciBkJ29ldXZyZVwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDY3MzMzNyxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjczMzM3LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTg5OTgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA4MDMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNi41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkxMTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA5LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA3NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIG1peHR1cmUgaW50byBwcmVwYXJlZCBwYW4sIHVzaW5nIHlvdXIgaGFuZHMgcHJlc3MgdG8gZmxhdHRlbi4gU2V0IGFzaWRlIGZvciAxLTIgaG91cnMgdG8gc2V0LkluIGEgc2VwYXJhdGUgYm93bCwgY29tYmluZSBwb3dkZXJlZCBzdWdhciB3aXRoIG1pbGsgYW5kIHN0aXIgdG8gY29tYmluZS4gVXNpbmcgYSBzcG9vbiwgZHJpenpsZSBnbGF6ZSBvbiB0b3Agb2YgY2VyZWFsIGJhcnMgYW5kIGR1c3Qgd2l0aCBjb2xvcmVkIHN1Z2FyIG9yIHNwcmlua2xlcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJDZXJlYWwgTWFyc2htYWxsb3cgQmFyc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA3NjQxODQsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzc2NDE4NC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwibGFyZ2VcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNjE1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNjE1OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDI4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicGluY2hcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlRvIGhhcmQtYm9pbCB0aGUgZWdncywgcGxhY2UgdGhlIHJhdyBlZ2dzIGF0IHRoZSBib3R0b20gb2YgYSBsYXJnZSBwb3QuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBvdXIgd2F0ZXIgaW4gdGhlIHBvdCB1bnRpbCB0aGUgd2F0ZXIgaXMgMS0yIGluY2hlcyBvdmVyIHRoZSB0b3Agb2YgdGhlIGVnZ3MuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBwb3Qgb24gdGhlIHN0b3ZlIHRvcCB1bmNvdmVyZWQgYW5kIHR1cm4gdGhlIGJ1cm5lciB0byBoaWdoIGhlYXQuIEJyaW5nIHRoZSB3YXRlciBpbiB0aGUgcG90IHRvIGEgYm9pbC4gV2hlbiB0aGUgd2F0ZXIgY29tZXMgdG8gYSBmdWxsIGJvaWwsIGNvdmVyIHRoZSBwb3Qgd2l0aCBhIGxpZCBhbmQgdHVybiBvZmYgdGhlIGhlYXQgdG8gdGhlIGJ1cm5lci4gTGVhdmUgdGhlIHBvdCBvbiB0aGUgYnVybmVyLCBjb3ZlcmVkLCBmb3IgMTIgbWludXRlcy5XaGlsZSB0aGUgZWdncyBzaXQgaW4gdGhlIGNvdmVyZWQgcG90LCBmaWxsIGEgbWl4aW5nIGJvd2wgIHdheSB3aXRoIGljZSB3YXRlci4gV2hlbiB0aGUgdGltZSBpcyB1cCBvbiB0aGUgZWdncywgdXNlIGEgc2xvdHRlZCBzcG9vbiB0byByZW1vdmUgdGhlbSBmcm9tIHRoZSBwb3QgYW5kIHRyYW5zZmVyIHRoZW0gdG8gdGhlIGJvd2wgb2YgaWNlIHdhdGVyIHRvIHN0b3AgdGhlbSBmcm9tIGNvb2tpbmcuIExlYXZlIHRoZW0gaW4gdGhlIGJvd2wgb2YgaWNlIHdhdGVyIGZvciBhIGZldyBtaW51dGVzIHVudGlsIGZ1bGx5IGNvbGQuUGVlbCB0aGUgZWdncyB1bmRlciBjb2xkIHJ1bm5pbmcgd2F0ZXIgKEl2ZSBmb3VuZCBpdHMgbXVjaCBlYXNpZXIpLiBTbGljZSB0aGUgZWdncyBpbiBoYWxmIGxlbmd0aHdpc2UgYW5kIHJlbW92ZXRoZSB5b2xrcyBpbnRvIGEgbWl4aW5nIGJvd2wuIFVzZSBhIGZvcmsgdG8gbWFzaCB0aGUgeW9sa3MgYXMgbXVjaCBhcyB5b3UgY2FuLiBJIHVzdWFsbHkgYWRkIGEgbGl0dGxlIHNwbGFzaCBvZiB3YXRlciB0byB0aGUgbWFzaGVkIGVnZyB5b2xrcyBhbmQgbWFzaCBhZ2Fpbi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBibGFjayBwZXBwZXIsIGh1bW11cywgaG90IHNhdWNlIGFuZCBtdXN0YXJkIGFuZCBzdGlyIHRvZ2V0aGVyIHVudGlsIHdlbGwgY29tYmluZWQgYW5kIG1vc3RseSBzbW9vdGguIFNwb29uIG9yIHBpcGUgdGhpcyBmaWxsaW5nIGJhY2sgaW50byB0aGUgaG9sbG93cyBvZiB0aGUgZWdnIHdoaXRlcy4gU3ByaW5rbGUgcGFwcmlrYSBvdmVyIHRoZSB0b3BzIG9mIHRoZSBlZ2dzIGFuZCBzZXJ2ZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJIdW1tdXMgRGV2aWxlZCBFZ2dzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDIwNjQwMixcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvMjA2NDAyLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDE2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3VuY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEyMTQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTIwNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDYuOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm91bmNlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MjE0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvdW5jZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTIxNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTIxNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiV2hpc2sgdG9nZXRoZXIgZXZhcG9yYXRlZCBtaWxrLCBwdWRkaW5nIG1peCwgYW5kIHplc3QgaW4gYSBib3dsIGZvciAyIG1pbnV0ZXMgb3IgdW50aWwgbWl4dHVyZSBpcyB0aGlja2VuZWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkJlYXQgY3JlYW0gY2hlZXNlIGFuZCB2YW5pbGxhIGF0IG1lZGl1bSBzcGVlZCB3aXRoIGFuIGVsZWN0cmljIG1peGVyIHVudGlsIGZsdWZmeS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIG9yYW5nZSBqdWljZSBjb25jZW50cmF0ZSwgYmVhdGluZyB1bnRpbCBzbW9vdGg7IGFkZCBldmFwb3JhdGVkIG1pbGsgbWl4dHVyZSwgYW5kIGJlYXQgdW50aWwgYmxlbmRlZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUG91ciBpbnRvIGNydXN0LiBDb3ZlciBhbmQgY2hpbGwgOCBob3VycyBvciB1bnRpbCBmaXJtLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDb21iaW5lIGNyZWFtIGFuZCBjb25mZWN0aW9uZXIncyBzdWdhciBpbiBhIGJvd2wgYW5kIHdoaXAgd2l0aCBhIHdoaXNrIHVudGlsIGl0IGhvbGRzIHNvZnQgcGVha3MuIERvbGxvcCBvciBwaXBlIGVhY2ggc2xpY2Ugd2l0aCB3aGlwcGVkIGNyZWFtLCBhbmQgZ2FybmlzaCB3aXRoIGNhbmRpZWQgemVzdCBvciBjYW5keSBpZiBkZXNpcmVkLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkNyZWFtc2ljbGUgUGllXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDQ0NjU3NyxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNDQ2NTc3LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA2LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2xpY2VzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMDUyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInBvdW5kXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicGluY2hcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMTI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTQ0MTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgYmFjb24gaW4gYSBsYXJnZSwgZGVlcCBza2lsbGV0LiBDb29rIG92ZXIgbWVkaXVtIGhpZ2ggaGVhdCB1bnRpbCB0aGUgZmF0IGJlZ2lucyB0byByZW5kZXIuIFN0aXIgaW4gb25pb25zIGFuZCBnYXJsaWM7IGxldCBjb29rIGZvciAxIG1pbnV0ZS4gU3RpciBpbiBiZWFucyBhbmQgd2F0ZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkxldCB0aGUgYmVhbnMgY29vayB1bnRpbCB0aGUgd2F0ZXIgaGFzIGV2YXBvcmF0ZWQgYW5kIHRoZSBiZWFucyBhcmUgdGVuZGVyLiBJZiB0aGUgYmVhbnMgYXJlIG5vdCB0ZW5kZXIgb25jZSB0aGUgd2F0ZXIgaGFzIGV2YXBvcmF0ZWQsIGFkZCBhIHNtYWxsIGFtb3VudCBtb3JlIHdhdGVyIGFuZCBsZXQgdGhlbSBjb29rIHVudGlsIHRlbmRlci4gU2Vhc29uIHdpdGggc2FsdCBhbmQgcGVwcGVyICh0byB0YXN0ZSkgYW5kIHNlcnZlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlNtb3RoZXJlZCBHcmVlbiBCZWFuc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJzaWRlIGRpc2hcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1NzY5MDYsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU3NjkwNi01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExOTU5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDEyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMzAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjEyNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwNTMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTI1MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MjUyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQzNDA4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNjc3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm1lZGl1bVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNwcmlnc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjE1NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgbWVkaXVtIGJvd2wgYWRkIHRoZSBwZWFyIGp1aWNlIGFuZCB2aW5lZ2FyLiBXaGlsZSB3aGlza2luZywgc2xvd2x5IHN0cmVhbSBpbiB0aGUgb2xpdmUgb2lsLiBTY3JhcGUgdGhlIGxlYXZlcyBvZmYgb2YgdHdvIHNwcmlncyBvZiB0aHltZSBhbmQgYWRkIGluIHRoZSBibGFjayBwZXBwZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIldoaXNrIHRvIGNvbWJpbmVcIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQXNzZW1ibGUgcm9tYWluZSBsZWF2ZXMgYW5kIHRvcCB3aXRoIHNsaWNlZCBwZWFyLCBzaGFsbG90LCB0b2FzdGVkIHdhbG51dHMsIGJsdWUgY2hlZXNlIGFuZCBzZWFzb24gd2l0aCBzZWEgc2FsdCB0byB0YXN0ZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiRHJpenpsZSB3aXRoIGRlc2lyZWQgYW1vdW50IG9mIHRoZSBwZWFyIHZpbmFpZ3JldHRlIGFuZCBlbmpveSFcIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJQZWFyICYgV2FsbnV0IFNhbGFkIHdpdGggYSBQZWFyIFZpbmFpZ3JldHRlXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNhbGFkXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNTA0MjE4LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy81MDQyMTgtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxMTY5MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjYW5zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMTI0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDEyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDE0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTkxMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImNsb3Zlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTMzMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwic2VydmluZ3NcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0NzcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQ2hvcCBhbGwgdGhlIHZlZ2dpZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNhdXRlIHRoZSBvbmlvbiBhbmQgZ2FybGljIGluIGEgbGFyZ2Ugc2tpbGxldC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGluIHRoZSBjYXJyb3RzIGFuZCBzYXV0ZSBmb3IgYSBmZXcgbWludXRlcywgY292ZXJpbmcgdG8gY29vayBmb3IgYWJvdXQgNSBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgaW4gdGhlIG90aGVyIHZlZ2dpZXMgYW5kIHNlYXNvbmluZ3MgYW5kIGxldCBpdCBjb29rIHVudGlsIHRoZSB2ZWdnaWVzIGFyZSB0ZW5kZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNlcnZlIGhvdCBvdmVyIGNvcm5icmVhZCB3aXRoIHNocmVkZGVkIGNoZWVzZSBhbmQgc291ciBjcmVhbS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJNZXhpY2FuIFZlZ2V0YWJsZXMgb24gQ29ybmJyZWFkXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDQ0NTE5NixcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNDQ1MTk2LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNjE1MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDIyMDQ0NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDAzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMjIwMjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjEyNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMzMzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm1lZGl1bVwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTI5NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTI4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJtZWRpdW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjAzMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMTI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTUxNTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicG91bmRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIG5vbnN0aWNrIHNraWxsZXQgY29hdGVkIHdpdGggY29va2luZyBzcHJheSwgc2F1dGUgb25pb24gYW5kIGdyZWVuIHBlcHBlciBmb3IgMy00IG1pbnV0ZXMgb3IgdW50aWwgY3Jpc3AtdGVuZGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDb21iaW5lIHRoZSBiYXJiZWN1ZSBzYXVjZSwgaG9uZXksIGJhc2lsLCBnYXJsaWMgcG93ZGVyIGFuZCBwZXBwZXI7IHBvdXIgb3ZlciB2ZWdldGFibGVzLiBCcmluZyB0byBhIGJvaWwgb3ZlciBtZWRpdW0taGlnaCBoZWF0LCBzdGlycmluZyBjb25zdGFudGx5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgc2hyaW1wOyBjb29rIGFuZCBzdGlyIGZvciAzLTUgbWludXRlcyBvciB1bnRpbCBzaHJpbXAgdHVybiBwaW5rLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTZXJ2ZSB3aXRoIHJpY2UuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQmFyYmVjdWUgU2hyaW1wIFN0aXItRnJ5XCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImx1bmNoXCIsXG4gICAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgICAgXCJkaW5uZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA3NTk1MzQsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzc1OTUzNC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE2MDE4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0NTgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlRic1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5OTIyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTExNjUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAyMTgzNjQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiOC1pbmNoXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDE0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MTYwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlRic1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAxMTEwOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDYxMTI4MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVoZWF0IG92ZW4gdG8gNDUwwrBGLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJIZWF0IG9pbCBpbiBzYXVjZXBhbiBvdmVyIG1lZGl1bS1oaWdoIGhlYXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBvbmlvbiwgYW5kIGNvb2sgNSBtaW51dGVzLCBvciB1bnRpbCB0cmFuc2x1Y2VudC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGdhcmxpYyBhbmQgY3VtaW4sIGFuZCBjb29rIDEgbWludXRlIG1vcmUuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIG9uaW9uIG1peHR1cmUgaW4gYmxlbmRlciB3aXRoIGJlYW5zLCBjaGlwb3RsZSBjaGlsZSwgYnJvd24gc3VnYXIsIGFuZCAzIFRicy4gd2F0ZXIuIEJsZW5kIHVudGlsIHNtb290aC4gU2Vhc29uIHdpdGggc2FsdCBhbmQgcGVwcGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSAyIHRvcnRpbGxhcyBlYWNoIG9uIDIgYmFraW5nIHNoZWV0cy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIGJlYW4gbWl4dHVyZSBvbiB0b3J0aWxsYXMsIGFuZCBiYWtlIDUgdG8gNyBtaW51dGVzLCBvciB1bnRpbCBlZGdlcyBiZWNvbWUgZ29sZGVuLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUb3NzIHNsYXcgaW4gYm93bCB3aXRoIGNpbGFudHJvIGFuZCBsaW1lIGp1aWNlLiBTZWFzb24gd2l0aCBzYWx0IGFuZCBwZXBwZXIuIFRvcCBlYWNoIGNsYXl1ZGEgd2l0aCBzbGF3LCBhbmQgY3V0IGludG8gdHJpYW5nbGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDhcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkNsYXl1ZGFzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDU4ODg5MyxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNTg4ODkzLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0NTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiaGFuZGZ1bHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyNjgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDAwNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlIGNsb3Zlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAzMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE0NDEyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA1MTEyODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJtZWRpdW1cIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIG1lZGl1bSBzaXplZCBwb3QgY29tYmluZSB0aGUgZmFycm8gd2l0aCB0aGUgNSBjdXBzIG9mIHdhdGVyIGFuZCAyIHRlYXNwb29ucyBzYWx0LiBCcmluZyB0byBhIGJvaWwsIHRoZW4gbG93ZXIgdG8gYSBzaW1tZXIgYW5kIGNvb2sgZm9yIGFib3V0IDI1IG1pbnV0ZXMgZm9yIHNlbWktcGVhcmxlZCBmYXJybyBhbmQgNTAgbWludXRlcyBmb3Igd2hvbGUgZmFycm8uIFRoZSBmYXJybyBpcyBkb25lIHdoZW4gdGhlIGdyYWlucyBhcmUgdGVuZGVyIGFuZCBhbGwgdGhlIHdhdGVyIGhhcyBiZWVuIGFic29yYmVkLiBTZXQgYXNpZGUuV2hpbGUgdGhlIGZhcnJvIGlzIGNvb2tpbmcsIGNvbWJpbmUgdGhlIHNoaWl0YWtlIG11c2hyb29tcyB3aXRoIDEgY3VwIG9mIGJvaWxpbmcgd2F0ZXIuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkxldCBzaXQgZm9yIDE1IG1pbnV0ZXMgb3IgaG93ZXZlciBsb25nIHRoZSBwYWNrYWdlIGluc3RydWN0aW9ucyBzYXkgaXMgbmVlZGVkIHRvIHJlY29uc3RpdHV0ZSB0aGUgbXVzaHJvb21zLiBXaGVuIGRvbmUsIHJlbW92ZSB0aGUgbXVzaHJvb21zIGZyb20gdGhlIHdhdGVyIGFuZCBjaG9wLCByZXNlcnZpbmcgdGhlIGxpcXVpZC5BYm91dCAybyBtaW51dGVzIGJlZm9yZSB0aGUgZmFycm8gaXMgZG9uZSB3YXJtIHRoZSBvbGl2ZSBvaWwgaW4gYSBsYXJnZSBza2lsbGV0LiBDb29rIHRoZSBvbmlvbiwgc3RpcnJpbmcgZnJlcXVlbnRseSwgZm9yIGFib3V0IDUgbWludXRlcyBvciB1bnRpbCB0cmFuc2x1Y2VudCBhbmQgYmVnaW5uaW5nIHRvIGdldCBzb21lIGNvbG9yLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIGdhcmxpYyBhbmQgY3J1c2hlZCByZWQgcGVwcGVyIGZsYWtlcyAoaWYgdXNpbmcpLCBjb29rIDEgbWludXRlIGxvbmdlciwgdW50aWwgZnJhZ3JhbnQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0aGUgY2hvcHBlZCBtdXNocm9vbXMsIG11c2hyb29tIGJyb3RoIGFuZCBhIGZldyBiaWcgaGFuZGZ1bHMgb2YgYmFieSBzcGluYWNoLiBDb29rLCBzdGlycmluZyBmcmVxdWVudGx5LCB1bnRpbCB0aGUgc3BpbmFjaCBoYXMgd2lsdGVkIGFuZCBtb3N0IG9mIHRoZSBsaXF1aWQgaGFzIGV2YXBvcmF0ZWQuIFNlYXNvbiB3aXRoIHNhbHQgYW5kIHBlcHBlciB0byB0YXN0ZS5TdGlyIGluIHRoZSBmYXJybywgbWl4aW5nIHdpdGggYSBsYXJnZSBzcG9vbiB0byBjb21iaW5lIHdlbGwuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNlcnZlIHRvcHBlZCB3aXRoIHNocmVkZGVkIFBhcm1lc2FuIGNoZWVzZS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJGYXJybyB3aXRoIFNoaWl0YWtlIE11c2hyb29tcyBhbmQgQmFieSBTcGluYWNoXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImx1bmNoXCIsXG4gICAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgICAgXCJkaW5uZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2MTU1ODEsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzYxNTU4MS01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNjksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0NTgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjAwMjcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTExNTYsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTExNjUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5Mjk2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDQwMjUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTExMTksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiaGVhZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTUxNTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicG91bmRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTExMTIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiaGVhZFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDE2MTY4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5ODk2MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkluIGEgYm93bCwgd2hpc2sgdG9nZXRoZXIgdGhlIG1heW8sIGNoaWxpIHNhdWNlIGFuZCBzcmlyYWNoYSwgdGhlbiBzZXQgaXQgYXNpZGUgdW50aWwgcmVhZHkgdG8gdXNlLlRvc3MgdGhlIHNocmltcCB3aXRoIHRoZSBjb3Juc3RhcmNoIHVudGlsIGV2ZW5seSBjb2F0ZWQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkhlYXQgdGhlIGNhbm9sYSBvaWwgaW4gYSBsYXJnZSBza2lsbGV0IG92ZXIgaGlnaCBoZWF0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIHNocmltcCBhbmQgY29vayB1bnRpbCBpdCBqdXN0IHR1cm5zIHBpbmsgYW5kIG9wYXF1ZSwgYWJvdXQgMyBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUcmFuc2ZlciB0aGUgc2hyaW1wIHRvIGEgbGFyZ2UgYm93bCBhbmQgdG9zcyB3aXRoIHRoZSBtYXlvIG1peHR1cmUuSW4gYSBzZXBhcmF0ZSBib3dsLCBhZGQgdGhlIGNhYmJhZ2UgYW5kIGxldHR1Y2UuIFRvc3Mgd2l0aCB0aGUgb2xpdmUgb2lsLCB2aW5lZ2FyIGFuZCBob25leSB1bnRpbCB3ZWxsIGNvYXRlZC4gVG9zcyB0aGUgY2lsYW50cm8gaW4uIFRvIHNlcnZlIHRoZSBzaHJpbXAsIG1peCB3aXRoIHRoZSBzbGF3IGFuZCBnYXJuaXNoIHRoZSBlbnRpcmUgdGhpbmcgd2l0aCBjaGl2ZXMuIEVuam95IVwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkJhbmcgQmFuZyBTaHJpbXAgd2l0aCBOYXBhIENhYmJhZ2UgU2xhd1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJsdW5jaFwiLFxuICAgICAgICBcIm1haW4gY291cnNlXCIsXG4gICAgICAgIFwibWFpbiBkaXNoXCIsXG4gICAgICAgIFwiZGlubmVyXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNzY0ODEwLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy83NjQ4MTAtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMjA0MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMjAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMjM1NzIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicG91bmRzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMjcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDMzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3Vwc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUHJlaGVhdCB0aGUgb3ZlbiB0byAzNTBGLlNwcmF5IGJha2luZyBzaGVldHMgd2l0aCBjb29raW5nIHNwcmF5IG9yIHNwcmVhZCBhIHRoaW4gbGF5ZXIgb2Ygb2xpdmUgb2lsIG92ZXIgdGhlbS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IGFsbCBvZiB0aGUgaW5ncmVkaWVudHMgdG9nZXRoZXIgdmVyeSB3ZWxsIC0tIHlvdSdsbCBuZWVkIHRvIHVzZSB5b3VyIGhhbmRzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJSb2xsIGludG8gYmFsbHMgdGhlIHNpemUgb2YgYSBnb2xmIGJhbGwsIG1vbGRpbmcgdGhlbSBmaXJtbHkgdG9nZXRoZXIgd2l0aG91dCBwYWNraW5nIHRoZW0uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlBsYWNlIHRoZSBiYWxscyBvbiBiYWtpbmcgc2hlZXRzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGZvciAzMCB0byA0MCBtaW51dGVzLCBvciB1bnRpbCB0aGUgY2VudGVyIHJlZ2lzdGVycyAxNjBGIG9uIGEgbWVhdCB0aGVybW9tZXRlci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUmVtb3ZlIGZyb20gb3ZlbiBhbmQgdXNlIGFzIG5lZWRlZC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJIb21lbWFkZSBJdGFsaWFuIE1lYXRiYWxsc1wiLFxuICAgICAgXCJ0YWdzXCI6IFtcbiAgICAgICAgXCJhbnRpcGFzdGlcIixcbiAgICAgICAgXCJzdGFydGVyXCIsXG4gICAgICAgIFwic25hY2tcIixcbiAgICAgICAgXCJhcHBldGl6ZXJcIixcbiAgICAgICAgXCJhbnRpcGFzdG9cIixcbiAgICAgICAgXCJob3IgZCdvZXV2cmVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA3OTk3MzIsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzc5OTczMi01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDExMjUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTE0MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJyaWJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNTA2NCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTE2MCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwOTE1OSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNzUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0NjQxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4zMzMzMzMzMzMzMzMzMzMzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDk4OTkxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDExMjgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTMxNixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBsYXJnZSBib3dsLCBtaXggdGhlIGZpcnN0IHNpeCBpbmdyZWRpZW50cy4gU3RpciBpbiAgY2hpY2tlbiwgY2VsZXJ5IGFuZCBvbmlvbi4gUmVmcmlnZXJhdGUsIGNvdmVyZWQsIGF0IGxlYXN0IDEgaG91ci5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiVG8gc2VydmUsIHN0aXIgc3RyYXdiZXJyaWVzIGludG8gY2hpY2tlbiBtaXh0dXJlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTZXJ2ZSBvdmVyIGxldHR1Y2UuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogM1xuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJuYW1lXCI6IFwiQ3VycmllZCBTdHJhd2JlcnJ5IENoaWNrZW4gU2FsYWRcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2FsYWRcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA2MjEyMTMsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzYyMTIxMy01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTQsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzbGljZXNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEwOTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiA0LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwib3pcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAxNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIxNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0c3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAyMjAyMCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRzcFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRic3BcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyODIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzbWFsbFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDI2LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidHNwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDExODIxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMjE4LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMTYsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJvelwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogNCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInNlcnZpbmdzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDExNDU3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNTI5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcImluc3RydWN0aW9uc1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2F1dGUgb25pb24gaW4gMSB0YnNwLiBPbGl2ZSBPaWwgZm9yIGEgZmV3IG1pbnV0ZXMgdW50aWwgc29mdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIGdhcmxpYyBhbmQgY29vayBmb3IgNDUtNjAgc2Vjb25kcywgdGhlbiBhZGQgc3BpbmFjaC4gUHV0IGFsbCB0aGUgc3BpY2VzIGluIHRoZXJlIGV4Y2VwdCBmb3IgMS80IHRzcC4gb2YgdGhlIGxpcXVpZCBzbW9rZSwgdGh5bWUsIGFuZCByb3NlbWFyeS5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTGV0IHdpbHQgYW5kIHRoZW4gYWRkIGNyZWFtIGNoZWVzZS4gU2V0IGFzaWRlLlByZWhlYXQgb3ZlbiB0byAzNTBGLkxheSBwb3JrIHRlbmRlcmxvaW4gb24gY3V0dGluZyBib2FyZCBhbmQgY292ZXIgd2l0aCBzYXJhbiB3cmFwLCB0aGVuIHBvdW5kIHdpdGggbWVhdCBoYW1tZXIgdW50aWwgZmxhdCAtIGN1dCB0aGUgdW5ldmVuIHNpZGVzIHNvIGl0IGdvZXMgc3F1YXJlLiBTZWFzb24gd2l0aCBzYWx0IGFuZCBwZXBwZXIsIHRoZW4gMS80IHRzcC4gbGlxdWlkIHNtb2tlLk1ha2UgYSBiYWNvbiB3ZWF2ZSB0aGUgc2FtZSBzaXplIGFzIHRoZSBwb3JrIHRlbmRlcmxvaW4gc3F1YXJlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTcHJlYWQgc3BpbmFjaCBhbmQgY3JlYW0gY2hlZXNlIGFsbCBvdmVyIHRoZSBwb3JrIHRlbmRlcmxvaW4sIHRoZW4gbGF5IHRlbmRlcmxvaW4gb24gdG9wIG9mIGJhY29uLiBTbGljZSB0aGUgcGllY2VzIG9mIGJhY29uIHRoYXQgcG9rZSBvdXQuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJvbGwgaXQgdXAuIFNlYXNvbiB3aXRoIHNhbHQgYW5kIHBlcHBlciBhbmQgdGhlIHJlbWFpbmluZyAxLzQgdHNwLiBvZiB0aHltZSBhbmQgcm9zZW1hcnkuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCB0b290aHBpY2tzIHdoZXJlIHRoZSBiYWNvbiBlbmRzIGFyZSBzbyB0aGF0IGl0IGRvZXNuJ3QgZmFsbCBhcGFydC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQmFrZSBmb3IgNzUgbWludXRlcyBvciB1bnRpbCB0aGVybW9tZXRlciByZWFkcyAxNDBGLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJTYXV0ZSBicm9jY29saSwgcGVwcGVycywgYW5kIHRvbWF0b2VzIGluIHRoZSByZW1haW5pbmcgZmF0IGluIHRoZSBib3R0b20gb2YgdGhlIHBhbiBvZiB0aGUgcG9yayB0ZW5kZXJsb2luIHdoaWxlIGl0IHJlc3RzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDhcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkJhY29uIFdyYXBwZWQgU3R1ZmZlZCBQb3JrIFRlbmRlcmxvaW5cIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwibHVuY2hcIixcbiAgICAgICAgXCJtYWluIGNvdXJzZVwiLFxuICAgICAgICBcIm1haW4gZGlzaFwiLFxuICAgICAgICBcImRpbm5lclwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDYxMTg1OCxcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjExODU4LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTgzNzEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxODM3MixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTIzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxhcmdlXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDgxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTMzNCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkxNTcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxNixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMTk5MDMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE0NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDUwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlByZWhlYXQgb3ZlbiB0byAzNTBGLiBMaW5lIGEgOHg4LWluY2ggYmFraW5nIHBhbiB3aXRoIGZvaWwgYW5kIHNwcmF5IHdpdGggbm9uLXN0aWNrIGNvb2tpbmcgc3ByYXkuSW4gYSBtZWRpdW0gYm93bCwgd2hpc2sgdG9nZXRoZXIgdGhlIGZsb3VyLCBiYWtpbmcgcG93ZGVyLCBiYWtpbmcgc29kYSwgYW5kIHNhbHQuSW4gdGhlIGJvd2wgb2YgYSBzdGFuZCBtaXhlciBmaXR0ZWQgd2l0aCB0aGUgcGFkZGxlIGF0dGFjaG1lbnQgb3IgaW4gYSBsYXJnZSBib3dsIHdpdGggYW4gZWxlY3RyaWMgbWl4ZXIsIGNvbWJpbmUgdGhlIG1lbHRlZCBidXR0ZXIgYW5kIGJyb3duIHN1Z2FyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgZWdnIGFuZCB2YW5pbGxhLCBtaXhpbmcgdW50aWwgd2VsbCBjb21iaW5lZC4gR3JhZHVhbGx5IGFkZCBpbiBkcnkgaW5ncmVkaWVudHMgYW5kIG1peCB1bnRpbCBqdXN0IGNvbWJpbmVkLiBTdGlyIGluIGNob2NvbGF0ZSBjaGlwcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU3ByZWFkIGhhbGYgdGhlIGRvdWdoIGludG8gdGhlIHByZXBhcmVkIHBhbi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiUGxhY2UgdGhlIFJvbG9zIGV2ZW5seSBvbnRvIHRoZSBjb29raWUgZG91Z2guIFVzaW5nIGEgc21hbGwgY29va2llIHNjb29wLCBldmVubHkgZGlzdHJpYnV0ZSB0aGUgcmVzdCBvZiB0aGUgY29va2llIGRvdWdoIG9uIHRvcCBvZiB0aGUgUm9sb3MuIFRoZXJlIGlzIG5lZWQgdG8gc3ByZWFkIGV2ZW5seSBvdmVyIHRoZSBSb2xvcywgdGhpcyB3aWxsIGhhcHBlbiBuYXR1cmFsbHkgZHVyaW5nIHRoZSBiYWtpbmcgcHJvY2Vzcy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQmFrZSBpbiB0aGUgcHJlaGVhdGVkIG92ZW4gdW50aWwgYSB0b290aHBpY2sgaW5zZXJ0ZWQgaW4gdGhlIGNlbnRlciBjb21lcyBvdXQgY2xlYW4sIGFib3V0IDIwIHRvIDI1IG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogNVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBwYW4gdG8gd2lyZSByYWNrIGFuZCBjb29sIGNvbXBsZXRlbHkuSWYgZGVzaXJlZCwgZHJpenpsZSB3aXRoIG1lbHRlZCBjaG9jb2xhdGUgb3IgY2FyYW1lbCBiZWZvcmUgc2VydmluZy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJSb2xvIENvb2tpZSBCYXJzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDk5MTEzNixcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvOTkxMTM2LTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTg4NzEsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxOTI5NixcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNjE2OCxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDAyMDMwLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC4yNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwNTUwNjIsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwicG91bmRcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQbGFjZSBjaGlja2VuIGluIGEgMy1xdC4gc2xvdyBjb29rZXIuIFRvc3Mgd2l0aCAyIHRhYmxlc3Bvb25zIGhvdCBzYXVjZSBhbmQgcGVwcGVyOyBjb29rLCBjb3ZlcmVkLCBvbiBsb3cgdW50aWwgdGVuZGVyLCAzLTQgaG91cnMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlJlbW92ZSBjaGlja2VuOyBkaXNjYXJkIGNvb2tpbmcganVpY2VzLiBJbiBhIHNtYWxsIHNhdWNlcGFuLCBjb21iaW5lIGJ1dHRlciwgaG9uZXkgYW5kIHJlbWFpbmluZyBob3Qgc2F1Y2U7IGNvb2sgYW5kIHN0aXIgb3ZlciBtZWRpdW0gaGVhdCB1bnRpbCBibGVuZGVkLiBTaHJlZCBjaGlja2VuIHdpdGggdHdvIGZvcmtzOyBzdGlyIGludG8gc2F1Y2UgYW5kIGhlYXQgdGhyb3VnaC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiU2VydmUgb24gcm9sbHMgd2l0aCBvcHRpb25hbCBpbmdyZWRpZW50cyBhcyBkZXNpcmVkLiBGcmVlemUgb3B0aW9uOiBGcmVlemUgY29vbGVkIGNoaWNrZW4gbWl4dHVyZSBpbiBmcmVlemVyIGNvbnRhaW5lcnMuIFRvIHVzZSwgcGFydGlhbGx5IHRoYXcgaW4gcmVmcmlnZXJhdG9yIG92ZXJuaWdodC4gTWljcm93YXZlLCBjb3ZlcmVkLCBvbiBoaWdoIGluIGEgbWljcm93YXZlLXNhZmUgZGlzaCB1bnRpbCBoZWF0ZWQgdGhyb3VnaCwgc3RpcnJpbmcgb2NjYXNpb25hbGx5IGFuZCBhZGRpbmcgYSBsaXR0bGUgd2F0ZXIgb3IgYnJvdGggaWYgbmVjZXNzYXJ5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIkJ1ZmZhbG8gQ2hpY2tlbiBTbGlkZXJzXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcImx1bmNoXCIsXG4gICAgICAgIFwibWFpbiBjb3Vyc2VcIixcbiAgICAgICAgXCJtYWluIGRpc2hcIixcbiAgICAgICAgXCJkaW5uZXJcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJpZFwiOiA1ODM3MzgsXG4gICAgICBcImltYWdlXCI6IFwiaHR0cHM6Ly9zcG9vbmFjdWxhci5jb20vcmVjaXBlSW1hZ2VzLzU4MzczOC01NTZ4MzcwLmpwZ1wiLFxuICAgICAgXCJpbmdyZWRpZW50c1wiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4MzcyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE5MzM0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjMsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDgxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMS43NSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTYwOTgsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjc1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDE5MTUxLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogOCxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIm96XCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNDcsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTQ1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQcmVoZWF0IG92ZW4gdG8gMzUwwrBGLiBMaW5lIHR3byBiYWtpbmcgc2hlZXRzIHdpdGggcGFyY2htZW50IHBhcGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDFcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJDb21iaW5lIHRoZSBmbG91ciwgYmFraW5nIHNvZGEgYW5kIHNhbHQgaW4gYSBtZWRpdW0gYm93bC4gU2V0IGFzaWRlLkluIHRoZSBib3dsIG9mIGEgc3RhbmQgbWl4ZXIsIGJlYXQgdGhlIGJ1dHRlciwgcGVhbnV0IGJ1dHRlciBhbmQgc3VnYXJzLCB1bnRpbCBsaWdodCBhbmQgZmx1ZmZ5LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgaW4gdGhlIGVnZyBhbmQgdmFuaWxsYS5HcmFkdWFsbHkgYWRkIGluIHRoZSBmbG91ciBtaXh0dXJlIG9uIGxvdyBzcGVlZC4gU3RpciB1bnRpbCBkb3VnaCBmb3Jtcy4gVGhlbiBzdGlyIGluIFJlZXNlJ3MgUGllY2VzIGJ5IGhhbmQuVXNpbmcgYSBjb29raWUgZG91Z2ggc2Nvb3Agb3IgeW91ciBoYW5kcywgZm9ybSBiYWxscyBvZiBkb3VnaCB3aXRoIDEgaGVhcGluZyB0YWJsZXNwb29uIG9mIGRvdWdoLiBHZW50bHkgZmxhdHRlbiBjb29raWUgZG91Z2ggKHRvIGZvcm0gYSBkaXNrIHNoYXBlKSBhbmQgcGxhY2Ugb24gcHJlcGFyZWQgYmFraW5nIHNoZWV0cy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQmFrZSBmb3IgOSBtaW51dGVzIGFuZCByZW1vdmUgZnJvbSBvdmVuLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJMZXQgY29vbCBmb3IgNSBtaW51dGVzIGJlZm9yZSB0cmFuc2ZlcnJpbmcgY29va2llcyB0byBhIHdpcmUgcmFjayB0byBjb29sIGNvbXBsZXRlbHkuTm90ZTogQ29va2llcyB3aWxsIG5vdCBzcHJlYWQgbXVjaCBhdCBhbGwgYW5kIHdpbGwgbG9vayBsaWtlIHRoZXkgYXJlIG5vdCBkb25lIGJha2luZy4gQnV0IEkgcHJvbWlzZSB0aGV5IGFyZSEgT25jZSB0aGV5IGZpbmlzaCBjb29saW5nLCB0aGUgY29va2llIGFuZCBjaG9jb2xhdGUgd2lsbCBiZWNvbWUgZmlybSBhbmQgeW91IHdpbGwgaGF2ZSBhIG1hZ2ljYWxseSBzb2Z0IGFuZCBjcnVtYmx5IGNvb2tpZSFcIixcbiAgICAgICAgICBcIm51bWJlclwiOiA1XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJSZWVzZSdzIFBpZWNlcyBQZWFudXQgQnV0dGVyIENvb2tpZXNcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwiYW50aXBhc3RpXCIsXG4gICAgICAgIFwic3RhcnRlclwiLFxuICAgICAgICBcInNuYWNrXCIsXG4gICAgICAgIFwiYXBwZXRpemVyXCIsXG4gICAgICAgIFwiYW50aXBhc3RvXCIsXG4gICAgICAgIFwiaG9yIGQnb2V1dnJlXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogNjAxMjE2LFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy82MDEyMTYtNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDQxMDA5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDE4NDEzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcIlwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQ0LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImxlYXZlc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMDExMTUyOSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA0MDUzLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRlYXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExNDc3LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgXCJpbnN0cnVjdGlvbnNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIlNhdXRlIHRoZSB6dWNjaGluaSBpbiB0aGUgb2xpdmUgb2lsIG9uIGhpZ2ggaGVhdC4gU2Vhc29uIGdlbmVyb3VzbHkgd2l0aCBzYWx0IGFuZCBwZXBwZXIuIFN0aXIgYW5kIGxlYXZlIGFsb25lIGZvciBhIGxpdHRsZSB3aGlsZSwgc28geW91IGdldCBhIGxpdHRsZSBiaXQgb2YgdGV4dHVyZSBmcm9tIHRoZSBicm93bmluZyBvbiB0aGUgenVjY2hpbmkuV2hpbGUgeW914oCZcmUgc2F1dGVpbmcsIHRvYXN0IHRoZSBmbGF0YnJlYWQgaW4gdGhlIG92ZW4gYXQgNDAwIGRlZ3JlZXMuV2hlbiB0aGUgenVjY2hpbmkgaXMgc29mdCBhbmQganVzdCBzbGlnaHRseSBicm93bmVkLCByZW1vdmUgZnJvbSB0aGUgaGVhdC4gVGFrZSB0aGUgZmxhdGJyZWFkIG91dCBvZiB0aGUgb3ZlbiBhbmQgc3ByZWFkIHRoZSB6dWNjaGluaSBvbiB0aGUgZmxhdGJyZWFkLlRvcCB3aXRoIHRoZSBmcmVzaCB0b21hdG9lcywgY2hlZXNlLCBhbmQgZnJlc2ggYmFzaWwuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkN1dCwgc2VydmUsIGFuZCBlbmpveSFcIixcbiAgICAgICAgICBcIm51bWJlclwiOiAyXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJGYXJtZXLigJlzIE1hcmtldCBGbGF0YnJlYWQgUGl6emFcIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwiaWRcIjogMjI2NTYyLFxuICAgICAgXCJpbWFnZVwiOiBcImh0dHBzOi8vc3Bvb25hY3VsYXIuY29tL3JlY2lwZUltYWdlcy8yMjY1NjItNTU2eDM3MC5qcGdcIixcbiAgICAgIFwiaW5ncmVkaWVudHNcIjogW1xuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA5MDE5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMixcbiAgICAgICAgICAgIFwidW5pdFwiOiBcInRhYmxlc3Bvb25zXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDE4MDc5LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxNjA2OSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTExMjQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiY3VwXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwMDksXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjI1LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogOTA3OSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMzMzMzMzMzMzMzMzMzMzMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTE2NSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMTUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAzLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwiXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDEwMDIwMTQsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0ZWFzcG9vblwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDQyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMC41LFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTE5MzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAyLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGFibGVzcG9vbnNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogNDA1MyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDExMjgyLFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMjE1MSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuNSxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cFwiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAxMTgyMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEwMjA0NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDgsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJzZXJ2aW5nc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiA2NjE1LFxuICAgICAgICAgIFwicXVhbnRpdHlcIjoge1xuICAgICAgICAgICAgXCJhbW91bnRcIjogMyxcbiAgICAgICAgICAgIFwidW5pdFwiOiBcImN1cHNcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJXYXNoIHRoZSBsZW50aWxzIGFuZCBwbGFjZSBpbnRvIGEgcG90IGFsb25nIHdpdGggdGhlIHZlZ2V0YWJsZSBicm90aC4gQnJpbmcgdG8gYSBib2lsLCB0aGVuIHJlZHVjZSBoZWF0IHRvIG1lZGl1bS1sb3cgYW5kIHNpbW1lciwgZm9yIGFib3V0IDQwIG1pbnV0ZXMuXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIkFkZCBtb3JlIGJyb3RoIG9yIHdhdGVyIGlmIG5lY2Vzc2FyeVwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDJcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJNZWFud2hpbGUsIHdhcm0gdGhlIG9pbCBpbiBhIHBhbi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAzXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiQWRkIHRoZSBvbmlvbnMgYW5kIGNvb2sgZm9yIGFib3V0IDQgbWludXRlcyBvciB1bnRpbCBzb2Z0LlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDRcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJBZGQgdGhlIGNhcnJvdHMsIGJlbGwgcGVwcGVyIGFuZCBnYXJsaWMuIENvb2sgZm9yIGFib3V0IDMgbWludXRlcyBtb3JlLiBTZXQgYXNpZGUuV2hlbiB0aGUgbGVudGlscyBhcmUgcmVhZHkgbWFzaCB0aGVtIHNsaWdodGx5IHdpdGggYSBwb3RhdG8gbWFzaGVyIG9yIGEgZm9yay5QcmVoZWF0IHRoZSBvdmVuIHRvIDM1MMK6IEYuSW4gYSBsYXJnZSBib3dsLCBtaXggdGhlIG9uaW9uIG1peHR1cmUsIG1hc2hlZCBsZW50aWxzLCBhcHBsZSBzYXVjZSwgY3JhbmJlcnJpZXMsIHBpc3RhY2hpb3MsIGJyZWFkIGNydW1icywgY2lsYW50cm8sIGNoaWxpIHBvd2RlciwgY3VtaW4sIHRoeW1lLCBzYWx0IGFuZCBwZXBwZXIuTGluZSBhIGxvYWYgcGFuIHdpdGggcGFyY2htZW50IHBhcGVyLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDVcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUcmFuc2ZlciB0aGUgbWl4dHVyZSB0byB0aGUgbG9hZiBwYW4gYW5kIHByZXNzIG1peHR1cmUgaW50byB0aGUgcGFuIHdpdGggYSBzcG9vbi5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA2XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiTWl4IHRoZSBnbGF6ZSBpbmdyZWRpZW50cyBpbiBhIHNtYWxsIGJvd2wgYW5kIHNwcmVhZCBldmVubHkgb3ZlciB0aGUgdG9wLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDdcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJCYWtlIGZvciBhYm91dCA0NSBtaW51dGVzLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDhcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJUcmFuc2ZlciB0aGUgcGFuIHRvIGEgd2lyZSByYWNrIGFuZCBsZXQgdGhlIGxvYWYgY29vbCBhIGJpdC4gUnVuIGEgdGFibGUga25pZmUgYXJvdW5kIHRoZSBlZGdlIG9mIHRoZSBwYW4gYW5kIHR1cm4gdGhlIGxvYWYgb3V0IG9udG8gYSBzZXJ2aW5nIHBsYXRlLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDlcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwibmFtZVwiOiBcIlZlZ2FuIExlbnRpbCBMb2FmXCIsXG4gICAgICBcInRhZ3NcIjogW1xuICAgICAgICBcInNpZGUgZGlzaFwiXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkXCI6IDYwNTEzMixcbiAgICAgIFwiaW1hZ2VcIjogXCJodHRwczovL3Nwb29uYWN1bGFyLmNvbS9yZWNpcGVJbWFnZXMvNjA1MTMyLTU1NngzNzAuanBnXCIsXG4gICAgICBcImluZ3JlZGllbnRzXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTAwMSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJ0YWJsZXNwb29uc1wiXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpZFwiOiAyMDAyNyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDAuMjUsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyMyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDEsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTEyNSxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJcIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTA3NyxcbiAgICAgICAgICBcInF1YW50aXR5XCI6IHtcbiAgICAgICAgICAgIFwiYW1vdW50XCI6IDIsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBzXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImlkXCI6IDIwNTAsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAxLFxuICAgICAgICAgICAgXCJ1bml0XCI6IFwidGVhc3Bvb25cIlxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaWRcIjogMTkzMzUsXG4gICAgICAgICAgXCJxdWFudGl0eVwiOiB7XG4gICAgICAgICAgICBcImFtb3VudFwiOiAwLjMzMzMzMzMzMzMzMzMzMzMsXG4gICAgICAgICAgICBcInVuaXRcIjogXCJjdXBcIlxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIFwiaW5zdHJ1Y3Rpb25zXCI6IFtcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJJbiBhIGhlYXZ5IHNhdWNlcGFuLCBzdGlyIHRvZ2V0aGVyIHRoZSBtaWxrIGFuZCAxLzQgY3VwIG9mIHN1Z2FyLiBCcmluZyB0byBhIGJvaWwgb3ZlciBtZWRpdW0gaGVhdC5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBcImluc3RydWN0aW9uXCI6IFwiSW4gYSBtZWRpdW0gYm93bCwgd2hpc2sgdG9nZXRoZXIgdGhlIGVnZyB5b2xrcyBhbmQgZWdnLiBTdGlyIHRvZ2V0aGVyIHRoZSByZW1haW5pbmcgc3VnYXIgYW5kIGNvcm5zdGFyY2g7IHRoZW4gc3RpciB0aGVtIGludG8gdGhlIGVnZyB1bnRpbCBzbW9vdGguIFdoZW4gdGhlIG1pbGsgY29tZXMgdG8gYSBib2lsLCBkcml6emxlIGl0IGludG8gdGhlIGJvd2wgaW4gYSB0aGluIHN0cmVhbSB3aGlsZSBtaXhpbmcgc28gdGhhdCB5b3UgZG8gbm90IGNvb2sgdGhlIGVnZ3MuIFJldHVybiB0aGUgbWl4dHVyZSB0byB0aGUgc2F1Y2VwYW4sIGFuZCBzbG93bHkgYnJpbmcgdG8gYSBib2lsLCBzdGlycmluZyBjb25zdGFudGx5IHNvIHRoZSBlZ2dzIGRvbicgdCBjdXJkbGUgb3Igc2NvcmNoIG9uIHRoZSBib3R0b20uXCIsXG4gICAgICAgICAgXCJudW1iZXJcIjogMlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgXCJpbnN0cnVjdGlvblwiOiBcIldoZW4gdGhlIG1peHR1cmUgY29tZXMgdG8gYSBib2lsIGFuZCB0aGlja2VucywgcmVtb3ZlIGZyb20gdGhlIGhlYXQuIFN0aXIgaW4gdGhlIGJ1dHRlciBhbmQgdmFuaWxsYSwgbWl4aW5nIHVudGlsIHRoZSBidXR0ZXIgaXMgY29tcGxldGVseSBibGVuZGVkIGluLlwiLFxuICAgICAgICAgIFwibnVtYmVyXCI6IDNcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIFwiaW5zdHJ1Y3Rpb25cIjogXCJQb3VyIGludG8gYSBoZWF0LXByb29mIGNvbnRhaW5lciBhbmQgcGxhY2UgYSBwaWVjZSBvZiBwbGFzdGljIHdyYXAgZGlyZWN0bHkgb24gdGhlIHN1cmZhY2UgdG8gcHJldmVudCBhIHNraW4gZnJvbSBmb3JtaW5nLiBSZWZyaWdlcmF0ZSB1bnRpbCBjaGlsbGVkIGJlZm9yZSB1c2luZy5cIixcbiAgICAgICAgICBcIm51bWJlclwiOiA0XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBcIm5hbWVcIjogXCJQYXN0cnkgQ3JlYW1cIixcbiAgICAgIFwidGFnc1wiOiBbXG4gICAgICAgIFwic2lkZSBkaXNoXCJcbiAgICAgIF1cbiAgICB9XG4gIF1cblxuXG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgcmVjaXBlRGF0YSBcbiAgfSIsImV4cG9ydCBkZWZhdWx0IFwiaW1hZ2VzL2Nvb2tpZXMuanBnXCI7IiwiaW1wb3J0ICcuL3N0eWxlcy5jc3MnO1xuaW1wb3J0IHsgZmV0Y2hBcGlEYXRhIH0gZnJvbSAnLi9hcGlDYWxscyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2Nvb2tpZXMuanBnJztcbmltcG9ydCBSZWNpcGVCb3ggZnJvbSAnLi9jbGFzc2VzL1JlY2lwZUJveCc7XG5pbXBvcnQgUmVjaXBlIGZyb20gJy4vY2xhc3Nlcy9SZWNpcGUnO1xuLy8gaW1wb3J0IHsgaW5ncmVkaWVudHNEYXRhIH0gZnJvbSAnLi4vc3JjL2RhdGEvaW5ncmVkaWVudHMnO1xuLy8gaW1wb3J0IHsgcmVjaXBlRGF0YSB9IGZyb20gJy4uL3NyYy9kYXRhL3JlY2lwZXMnO1xuLy8gaW1wb3J0IHsgdXNlcnNEYXRhIH0gZnJvbSAnLi4vc3JjL2RhdGEvdXNlcnMnO1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jbGFzc2VzL1VzZXInO1xuXG4vL0JVVFRPTlNcbmNvbnN0IGZhdm9yaXRlUmVjaXBlc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXZvcml0ZVJlY2lwZXNCdXR0b24nKTtcbmNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9tZUJ1dHRvbicpO1xuY29uc3QgdHJ5UmVjaXBlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RyeVJlY2lwZUJ1dHRvbicpO1xuY29uc3QgZmF2b3JpdGluZ0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXZvcml0aW5nQnV0dG9uJyk7XG5jb25zdCBzZWVBbGxSZWNpcGVzQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlZUFsbFJlY2lwZXNCdXR0b24nKTtcbmNvbnN0IG5hbWVSYWRpb0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJylcbmNvbnN0IHRhZ1JhZGlvQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RhZycpXG5jb25zdCBpbmdyZWRpZW50UmFkaW9CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ncmVkaWVudCcpXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VhcmNoQnV0dG9uJyk7XG5jb25zdCByZWNpcGVzVG9Db29rQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZXNUb0Nvb2tCdXR0b24nKTtcblxuLy9GYXZvcml0ZXMgVmlldyBSYWRpbyBCdXR0b25zXG5jb25zdCBuYW1lUmFkaW9CdXR0b24yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUyJylcbmNvbnN0IHRhZ1JhZGlvQnV0dG9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWcyJylcbmNvbnN0IGluZ3JlZGllbnRSYWRpb0J1dHRvbjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5ncmVkaWVudDInKVxuY29uc3Qgc2VhcmNoQnV0dG9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWFyY2hCdXR0b24yJylcblxuLy9VU0VSIElOUFVUIEZJRUxEXG5jb25zdCB1c2VyU2VhcmNoQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJTZWFyY2hCb3gnKTtcbmNvbnN0IG1haW5QYWdlTmF2Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluUGFnZU5hdkZvcm0nKVxuY29uc3QgZmF2UmVjaXBlc05hdkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmF2UmVjaXBlc05hdkZvcm0nKTtcbmNvbnN0IHVzZXJTZWFyY2hCb3gyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VzZXJTZWFyY2hCb3gyJyk7XG5cbi8vVklFV1NcbmNvbnN0IHN1Z2dlc3RlZFJlY2lwZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWdnZXN0ZWRSZWNpcGUnKVxuY29uc3QgbWFpblBhZ2VWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5QYWdlVmlldycpO1xuY29uc3QgcmVjaXBlUmVzdWx0c1ZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjaXBlUmVzdWx0c1ZpZXcnKTtcbi8vIGNvbnN0IHJlY2lwZVJlc3VsdHNTdGF0ZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjaXBlUmVzdWx0c1N0YXRlbWVudCcpO1xuY29uc3QgcmVjaXBlSW5mb1ZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVjaXBlSW5mb1ZpZXcnKTtcbmNvbnN0IGFsbFJlY2lwZXNWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FsbFJlY2lwZXNWaWV3Jyk7XG5jb25zdCBmYXZvcml0ZVJlY2lwZXNWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zhdm9yaXRlUmVjaXBlc1ZpZXcnKTtcbmNvbnN0IHJlY2lwZXNUb0Nvb2tWaWV3ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZXNUb0Nvb2tWaWV3Jyk7XG4vLyBjb25zdCBmaWx0ZXJlZEZhdm9yaXRlUmVjaXBlc1ZpZXcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXNlckZhdmVSZWNpcGVGaWx0ZXJlZFZpZXcnKTtcblxuLy9SQU5ET01cbmNvbnN0IHJlY2lwZVRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JlY2lwZVRpdGxlJylcbmNvbnN0IGN1cnJlbnRSZWNpcGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXJyZW50UmVjaXBlSW1hZ2UnKVxuY29uc3QgaW5zdHJ1Y3Rpb25zTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnN0cnVjdGlvbnNMaXN0JylcbmNvbnN0IGluZ3JlZGllbnRzTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbmdyZWRpZW50c0xpc3QnKVxuY29uc3QgdG90YWxDb3N0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvdGFsQ29zdCcpXG5jb25zdCBmYXZSZWNpcGVDYXJkcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmYXZSZWNpcGVDYXJkcycpXG4vLyBjb25zdCByYW5kb21SZWNpcGVJbWFnZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb21SZWNpcGVJbWFnZScpO1xuXG5cbi8vQ0xBU1MgSU5TVEFOU1RJQVRJT05cbnZhciBjb29rYm9vaztcbmxldCByZWNpcGU7XG5sZXQgbmV3VXNlcjtcbmxldCBjdXJyZW50UmVjaXBlOyBcbmxldCBncm9jZXJ5U3RvcmU7XG5sZXQgcmFuZG9tVXNlcjtcbmxldCByYW5kb21SZWNpcGU7XG5cbi8vT04gUEFHRSBMT0FEXG5cbi8vRlVOQ1RJT05TXG5jb25zdCBnZXRSYW5kb21JbmRleCA9IChhcnJheSkgPT4ge1xuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogYXJyYXkubGVuZ3RoKTtcbn1cblxuY29uc3QgZ2V0RGF0YSA9ICgpID0+IHtcbiAgcmV0dXJuIFByb21pc2UuYWxsKFtmZXRjaEFwaURhdGEoJ2luZ3JlZGllbnRzJyksIGZldGNoQXBpRGF0YSgncmVjaXBlcycpLCBmZXRjaEFwaURhdGEoJ3VzZXJzJyldKVxufTtcblxuY29uc3QgbG9hZFBhZ2UgPSAoKSA9PiB7XG4gIGdldERhdGEoKVxuICAudGhlbigoZGF0YSkgPT4ge1xuICAgIHJhbmRvbVVzZXIgPSBkYXRhWzJdLnVzZXJzRGF0YVtnZXRSYW5kb21JbmRleChkYXRhWzJdLnVzZXJzRGF0YSldO1xuICAgIGNvbnNvbGUubG9nKHJhbmRvbVVzZXIpXG4gICAgbmV3VXNlciA9IG5ldyBVc2VyKHJhbmRvbVVzZXIpO1xuICAgIGNvb2tib29rID0gbmV3IFJlY2lwZUJveChkYXRhWzFdLnJlY2lwZURhdGEpO1xuICAgIHJlY2lwZSA9IG5ldyBSZWNpcGUoZGF0YVsxXS5yZWNpcGVEYXRhKTtcbiAgICBncm9jZXJ5U3RvcmUgPSBkYXRhWzBdLmluZ3JlZGllbnRzRGF0YTtcbiAgICBkaXNwbGF5SG9tZVBhZ2UoKTtcbiAgfSlcbn07XG5cbmNvbnN0IGRpc3BsYXlIb21lUGFnZSA9ICgpID0+IHtcbiAgcmFuZG9tUmVjaXBlID0gY29va2Jvb2sucmVjaXBlc0NvbGxlY3Rpb25bZ2V0UmFuZG9tSW5kZXgoY29va2Jvb2sucmVjaXBlc0NvbGxlY3Rpb24pXTtcbiAgc3VnZ2VzdGVkUmVjaXBlLmlubmVySFRNTCA9IGBgO1xuICBzdWdnZXN0ZWRSZWNpcGUuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCBcbiAgYDxpbWcgY2xhc3M9XCJzdWdnZXN0ZWQtcmVjaXBlLWltYWdlXCIgc3JjPVwiJHtyYW5kb21SZWNpcGUuaW1hZ2V9XCIgYWx0PVwiZm9vZCBpbWFnZVwiIGlkPVwiJHtyYW5kb21SZWNpcGUuaWR9XCI+XG4gIDxoMj4ke3JhbmRvbVJlY2lwZS5uYW1lfTwvaDI+YClcbiAgdHJ5UmVjaXBlQnV0dG9uLnZhbHVlID0gYCR7cmFuZG9tUmVjaXBlLmlkfWBcbn1cblxuLy9kcm9wIGRvd24gYnV0dG9uIHBzZXVkbyBcbiAgLy8gY3JlYXRlIGEgZnVuY3Rpb24gdGhhdCB3aWxsIGZpbHRlciB0aHJvdWdoIHRoZSB0YWdzIGFycmF5LCBwdWxsIGFsbCB0aGUgdGFncyBubyByZXBlYXRzIFxuICAvLyBkbyBhIHJlZHVjZSB0byBjcmVhdGUgYW4gYXJyYXkgb2YgYWxsIG91ciB0YWdzICh3aXRoIGVycm9yIGhhbmRsaW5nLCBzbyBubyByZXBlYXRzKVxuICAvLyBhIGZvckVhY2ggZm9yIHRoZSBhY2N1bXVsYXRvciwgZm9yIGVhY2ggdW5pcXVlIHRhZywgaW5zZXJ0IGFkamFjZW50IEhUTUwgZm9yIGVhY2ggaW5kaXZpZHVhbCB0YWcsIDxhIGhyZWY9XCIjJHt0YWd9XCI8L2E+IFxuICBcbiAgY29uc3QgZHJvcERvd25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcERvd25CdXR0b24nKVxuICBjb25zdCBteURyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJteURyb3Bkb3duXCIpXG4gIFxuICBjb25zdCBzaG93RHJvcERvd24gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2cobXlEcm9wZG93bilcbiAgICBteURyb3Bkb3duLmNsYXNzTGlzdC50b2dnbGUoXCJzaG93XCIpO1xuICB9XG4gIFxuICBcbiAgLy8gQ2xvc2UgdGhlIGRyb3Bkb3duIGlmIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIG9mIGl0XG4gIHdpbmRvdy5vbmNsaWNrID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5tYXRjaGVzKCcuZHJvcGJ0bicpKSB7XG4gICAgICB2YXIgZHJvcGRvd25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRyb3Bkb3duLWNvbnRlbnRcIik7XG4gICAgICB2YXIgaTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBkcm9wZG93bnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG9wZW5Ecm9wZG93biA9IGRyb3Bkb3duc1tpXTtcbiAgICAgICAgaWYgKG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3cnKSkge1xuICAgICAgICAgIG9wZW5Ecm9wZG93bi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgXG4gIGFsbFJlY2lwZXNWaWV3LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4geyAgIFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2Jvb2sucmVjaXBlc0NvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChgJHtjb29rYm9vay5yZWNpcGVzQ29sbGVjdGlvbltpXS5pZH1gID09PSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZCkge1xuICAgICAgICBzaG93UmVjaXBlSW5mb0NhcmQoKTtcbiAgICAgICAgcmVjaXBlID0gbmV3IFJlY2lwZShjb29rYm9vay5yZWNpcGVzQ29sbGVjdGlvbltpXSlcbiAgICAgICAgY3VycmVudFJlY2lwZSA9IHJlY2lwZTtcbiAgICAgICAgY29uc3QgcmVjaXBlSW5ncmVkaWVudHMgPSByZWNpcGUuZmluZFJlY2lwZUluZ3JlZGllbnRJbmZvKCk7XG4gICAgICAgIGNvbnN0IHJlY2lwZUluc3RydWN0aW9ucyA9IHJlY2lwZS5nZXRSZWNpcGVJbnN0cnVjdGlvbnMoKTtcbiAgICAgICAgY29uc3QgcmVjaXBlQ29zdFRvdGFsID0gcmVjaXBlLmNhbGN1bGF0ZVJlY2lwZUNvc3QoKTtcbiAgICAgICAgcmVjaXBlVGl0bGUuaW5uZXJIVE1MID0gYGBcbiAgICAgICAgcmVjaXBlVGl0bGUuaW5uZXJIVE1MID0gYCR7Y29va2Jvb2sucmVjaXBlc0NvbGxlY3Rpb25baV0ubmFtZX1gXG4gICAgICAgIGN1cnJlbnRSZWNpcGVJbWFnZS5zcmMgPSBgJHtjb29rYm9vay5yZWNpcGVzQ29sbGVjdGlvbltpXS5pbWFnZX1gXG4gICAgICAgIGN1cnJlbnRSZWNpcGVJbWFnZS5hbHQgPSBgJHtjb29rYm9vay5yZWNpcGVzQ29sbGVjdGlvbltpXS5uYW1lfWBcbiAgICAgICAgaW5ncmVkaWVudHNMaXN0LmlubmVySFRNTCA9IGBgICBcbiAgICAgICAgcmVjaXBlSW5ncmVkaWVudHMuZm9yRWFjaCgoaW5ncmVkaWVudCkgPT4ge1xuICAgICAgICAgIGluZ3JlZGllbnRzTGlzdC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZUVuZCcsIGBcbiAgICAgICAgICA8bGk+JHtpbmdyZWRpZW50fTwvbGk+YClcbiAgICAgICAgfSlcbiAgICAgICAgaW5zdHJ1Y3Rpb25zTGlzdC5pbm5lckhUTUwgPSBgYFxuICAgICAgICByZWNpcGVJbnN0cnVjdGlvbnMuZm9yRWFjaCgoaW5zdHJ1Y3Rpb24pID0+IHtcbiAgICAgICAgICBpbnN0cnVjdGlvbnNMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgYFxuICAgICAgICAgIDxsaT4ke2luc3RydWN0aW9ufTwvbGk+YClcbiAgICAgICAgfSlcbiAgICAgICAgdG90YWxDb3N0LmlubmVyVGV4dCA9IGAkJHtyZWNpcGVDb3N0VG90YWx9YFxuICAgICAgfSAgXG4gICAgfVxuICB9KVxuICBcbiAgY29uc3Qgc2hvd0FsbFJlY2lwZXMgPSAoKSA9PiB7XG4gICAgYWxsUmVjaXBlc1ZpZXcuaW5uZXJIVE1MID0gYDtgXG4gICAgY29va2Jvb2sucmVjaXBlc0NvbGxlY3Rpb24uZm9yRWFjaChyZWNpcGUgPT4ge1xuICAgICAgYWxsUmVjaXBlc1ZpZXcuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgYFxuICAgICAgPGFydGljbGUgY2xhc3M9XCJyZWNpcGVzLXZpZXdzXCIgaWQ9ICR7cmVjaXBlLmlkfT5cbiAgICAgIDxoMT4ke3JlY2lwZS5uYW1lfTwvaDE+XG4gICAgICA8aW1nIHNyYz1cIiR7cmVjaXBlLmltYWdlfVwiPlxuICAgICAgYClcbiAgICB9KVxuICAgIHNob3coW2FsbFJlY2lwZXNWaWV3LCBob21lQnV0dG9uLCBmYXZvcml0ZVJlY2lwZXNCdXR0b25dKVxuICAgIGhpZGUoW21haW5QYWdlVmlldywgc2VlQWxsUmVjaXBlc0J1dHRvbl0pIFxuICB9XG4gIFxuICBjb25zdCBzZWFyY2hCeUZhdm9yaXRlSW5wdXQgPSAoKSA9PiB7XG4gICAgaWYgKG5hbWVSYWRpb0J1dHRvbjIuY2hlY2tlZCkge1xuICAgICAgbGV0IHJlY2lwZUJ5TmFtZSA9IG5ld1VzZXIuZmlsdGVyRmF2b3JpdGVzQnlOYW1lKHVzZXJTZWFyY2hCb3gyLnZhbHVlKVxuICAgICAgcmV0dXJuIHJlY2lwZUJ5TmFtZTtcbiAgICB9IGVsc2UgaWYgKHRhZ1JhZGlvQnV0dG9uMi5jaGVja2VkKSAge1xuICAgICAgbGV0IHJlY2lwZUJ5VGFncyA9IG5ld1VzZXIuZmlsdGVyRmF2b3JpdGVzQnlUYWcodXNlclNlYXJjaEJveDIudmFsdWUpO1xuICAgICAgcmV0dXJuIG5ld1VzZXIubWF0Y2hpbmdSZWNpcGVzVGFncztcbiAgICB9IGVsc2UgaWYgKGluZ3JlZGllbnRSYWRpb0J1dHRvbjIuY2hlY2tlZCkge1xuICAgICAgbmV3VXNlci5yZWNpcGVNYXRjaCA9IFtdO1xuICAgICAgbmV3VXNlci5maWx0ZXJGYXZvcml0ZXNCeUluZ3JlZGllbnQodXNlclNlYXJjaEJveDIudmFsdWUpO1xuICAgICAgcmV0dXJuIG5ld1VzZXIucmVjaXBlTWF0Y2g7XG4gICAgfSBlbHNlIGlmICghdGFnUmFkaW9CdXR0b24yLmNoZWNrZWQgJiYgIW5hbWVSYWRpb0J1dHRvbjIuY2hlY2tlZCAmJiAhaW5ncmVkaWVudFJhZGlvQnV0dG9uMikge1xuICAgICAgdXNlclNlYXJjaEJveDIuZGlzYWJsZWQ7XG4gICAgfVxuICB9XG4gIFxuICBcbiAgY29uc3Qgc2VhcmNoRmF2b3JpdGVSZXN1bHRzID0gKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBzaG93UmVjaXBlU2VhcmNoUmVzdWx0cygpO1xuICAgIHJlY2lwZVJlc3VsdHNWaWV3LmlubmVySFRNTCA9IGBgXG4gICAgbGV0IHNlYXJjaGVkUmVjaXBlVmFsdWVzMiA9IHNlYXJjaEJ5RmF2b3JpdGVJbnB1dCgpO1xuICAgIHNlYXJjaGVkUmVjaXBlVmFsdWVzMi5tYXAoc2VhcmNoZWRSZWNpcGUyID0+IHtcbiAgICAgIFxuICAgICAgcmVjaXBlUmVzdWx0c1ZpZXcuaW5zZXJ0QWRqYWNlbnRIVE1MKCdhZnRlcmJlZ2luJywgXG4gICAgICBgPGFydGljbGUgY2xhc3M9XCJyZXN1bHQtY2FyZFwiPlxuICAgICAgPGltZyBjbGFzcz1cInJlc3VsdC1pbWFnZVwiIGFsdD1cIiR7c2VhcmNoZWRSZWNpcGUyLm5hbWV9XCIgc3JjPVwiJHtzZWFyY2hlZFJlY2lwZTIuaW1hZ2V9XCI+XG4gICAgICA8aDI+JHtzZWFyY2hlZFJlY2lwZTIubmFtZX08L2gyPlxuICAgICAgPC9hcnRpY2xlPmApXG4gICAgfSlcbiAgfVxuICBcbiAgLy9USEUgRE9PT09NISEhXG4gIGZhdm9yaXRlUmVjaXBlc1ZpZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7ICBcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld1VzZXIuZmF2b3JpdGVSZWNpcGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYCR7bmV3VXNlci5mYXZvcml0ZVJlY2lwZXNbaV0uaWR9YCA9PT0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpIHtcbiAgICAgICAgc2hvd1JlY2lwZUluZm9DYXJkKCk7XG4gICAgICAgIHJlY2lwZSA9IG5ldyBSZWNpcGUobmV3VXNlci5mYXZvcml0ZVJlY2lwZXNbaV0pXG4gICAgICAgIGN1cnJlbnRSZWNpcGUgPSByZWNpcGU7XG4gICAgICAgIGNvbnN0IHJlY2lwZUluZ3JlZGllbnRzID0gcmVjaXBlLmZpbmRSZWNpcGVJbmdyZWRpZW50SW5mbygpO1xuICAgICAgICBjb25zdCByZWNpcGVJbnN0cnVjdGlvbnMgPSByZWNpcGUuZ2V0UmVjaXBlSW5zdHJ1Y3Rpb25zKCk7XG4gICAgICAgIGNvbnN0IHJlY2lwZUNvc3RUb3RhbCA9IHJlY2lwZS5jYWxjdWxhdGVSZWNpcGVDb3N0KCk7XG4gICAgICAgIHJlY2lwZVRpdGxlLmlubmVySFRNTCA9IGBgO1xuICAgICAgICByZWNpcGVUaXRsZS5pbm5lckhUTUwgPSBgJHtuZXdVc2VyLmZhdm9yaXRlUmVjaXBlc1tpXS5uYW1lfWBcbiAgICAgICAgY3VycmVudFJlY2lwZUltYWdlLnNyYyA9IGAke25ld1VzZXIuZmF2b3JpdGVSZWNpcGVzW2ldLmltYWdlfWBcbiAgICAgICAgY3VycmVudFJlY2lwZUltYWdlLmFsdCA9IGAke25ld1VzZXIuZmF2b3JpdGVSZWNpcGVzW2ldLm5hbWV9YFxuICAgICAgICBcbiAgICAgICAgaW5ncmVkaWVudHNMaXN0LmlubmVySFRNTCA9IGBgIFxuICAgICAgICByZWNpcGVJbmdyZWRpZW50cy5mb3JFYWNoKChpbmdyZWRpZW50KSA9PiB7XG4gICAgICAgICAgaW5ncmVkaWVudHNMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgYFxuICAgICAgICAgIDxsaT4ke2luZ3JlZGllbnR9PC9saT5gKVxuICAgICAgICB9KVxuICAgICAgICBpbnN0cnVjdGlvbnNMaXN0LmlubmVySFRNTCA9IGBgIFxuICAgICAgICByZWNpcGVJbnN0cnVjdGlvbnMuZm9yRWFjaCgoaW5zdHJ1Y3Rpb24pID0+IHtcbiAgICAgICAgICBpbnN0cnVjdGlvbnNMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgYFxuICAgICAgICAgIDxsaT4ke2luc3RydWN0aW9ufTwvbGk+YClcbiAgICAgICAgfSlcbiAgICAgICAgdG90YWxDb3N0LmlubmVyVGV4dCA9IGAkJHtyZWNpcGVDb3N0VG90YWx9YFxuICAgICAgfSAgXG4gICAgfVxuICB9KVxuICBcbiAgY29uc3QgZGlzcGxheUZhdm9yaXRlZFJlY2lwZXMgPSAoKSA9PiB7XG4gICAgc2hvd0Zhdm9yaXRlUmVjaXBlc1ZpZXcoKTtcbiAgICBmYXZSZWNpcGVDYXJkcy5pbm5lckhUTUwgPSBgYFxuICAgIG5ld1VzZXIuZmF2b3JpdGVSZWNpcGVzLmZvckVhY2gocmVjaXBlID0+IHtcbiAgICAgIGZhdlJlY2lwZUNhcmRzLmluc2VydEFkamFjZW50SFRNTCgnYWZ0ZXJiZWdpbicsIFxuICAgICAgYDxhcnRpY2xlIGNsYXNzPVwiZmF2LXJlY2lwZS1jYXJkXCIgaWQ9XCIke3JlY2lwZS5pZH1cIj5cbiAgICAgIDxoMiBjbGFzcz1cImZhdi1jYXJkLXRpdGxlXCI+JHtyZWNpcGUubmFtZX08L2gyPlxuICAgICAgPGltZyBjbGFzcz1cImN1cnJlbnQtcmVjaXBlLWltYWdlXCIgc3JjPVwiJHtyZWNpcGUuaW1hZ2V9XCI+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwicmVjaXBlLWluZm9ybWF0aW9uLWJ0blwiIGlkPVwicmVjaXBlSW5mb0J1dHRvbjFcIj5SZWNpcGUgSW5mb3JtYXRpb248L2J1dHRvbj5gKVxuICAgIH0pXG4gIH1cbiAgXG4gIFxuICBcbiAgXG4gIGNvbnN0IHNlYXJjaEJ5SW5wdXQgPSAoKSA9PiB7XG4gICAgaWYgKG5hbWVSYWRpb0J1dHRvbi5jaGVja2VkKSB7XG4gICAgICBjb29rYm9vay5tYXRjaGluZ1JlY2lwZXMgPSBbXTtcbiAgICAgIGNvb2tib29rLmZpbmRSZWNpcGVOYW1lKHVzZXJTZWFyY2hCb3gudmFsdWUpXG4gICAgICByZXR1cm4gY29va2Jvb2subWF0Y2hpbmdSZWNpcGVzO1xuICAgIH0gZWxzZSBpZiAodGFnUmFkaW9CdXR0b24uY2hlY2tlZCkgIHtcbiAgICAgIGNvb2tib29rLm1hdGNoaW5nUmVjaXBlc1RhZ3MgPSBbXTtcbiAgICAgIGNvb2tib29rLnN0b3JlQnlUYWcodXNlclNlYXJjaEJveC52YWx1ZSk7XG4gICAgICByZXR1cm4gY29va2Jvb2subWF0Y2hpbmdSZWNpcGVzVGFncztcbiAgICB9IGVsc2UgaWYgKGluZ3JlZGllbnRSYWRpb0J1dHRvbi5jaGVja2VkKSB7XG4gICAgICBjb29rYm9vay5yZWNpcGVNYXRjaCA9IFtdO1xuICAgICAgY29va2Jvb2suZmluZEluZ3JlZGllbnRCeUlkKHVzZXJTZWFyY2hCb3gudmFsdWUpO1xuICAgICAgcmV0dXJuIGNvb2tib29rLnJlY2lwZU1hdGNoO1xuICAgIH0gZWxzZSBpZiAoIXRhZ1JhZGlvQnV0dG9uLmNoZWNrZWQgJiYgIW5hbWVSYWRpb0J1dHRvbi5jaGVja2VkICYmICFpbmdyZWRpZW50UmFkaW9CdXR0b24pIHtcbiAgICAgIHVzZXJTZWFyY2hCb3guZGlzYWJsZWQ7XG4gICAgfVxuICB9XG4gIFxuICBjb25zdCBzaG93U2VhcmNoUmVzdWx0cyA9IChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgc2hvd1JlY2lwZVNlYXJjaFJlc3VsdHMoKTtcbiAgICByZWNpcGVSZXN1bHRzVmlldy5pbm5lckhUTUwgPSBgYFxuICAgIGxldCBzZWFyY2hlZFJlY2lwZVZhbHVlcyA9IHNlYXJjaEJ5SW5wdXQoKTtcbiAgICBzZWFyY2hlZFJlY2lwZVZhbHVlcy5tYXAoc2VhcmNoZWRSZWNpcGUgPT4ge1xuICAgICAgXG4gICAgICByZWNpcGVSZXN1bHRzVmlldy5pbnNlcnRBZGphY2VudEhUTUwoJ2FmdGVyYmVnaW4nLCBcbiAgICAgIGA8YXJ0aWNsZSBjbGFzcz1cInJlc3VsdC1jYXJkXCI+XG4gICAgICA8aW1nIGNsYXNzPVwicmVzdWx0LWltYWdlXCIgYWx0PVwiJHtzZWFyY2hlZFJlY2lwZS5uYW1lfVwiIHNyYz1cIiR7c2VhcmNoZWRSZWNpcGUuaW1hZ2V9XCI+XG4gICAgICA8aDI+JHtzZWFyY2hlZFJlY2lwZS5uYW1lfTwvaDI+XG4gICAgICA8L2FydGljbGU+YClcbiAgICB9KVxuICB9XG4gIFxuICBcbiAgY29uc3QgYWRkRmF2b3JpdGUgPSAoKSA9PiB7XG4gICAgLy8gYWRkT3JSZW1vdmVFbGVtZW50KGZhdm9yaXRpbmdCdXR0b24sICdjaGFuZ2UtYnV0dG9uLWNvbG9yJylcbiAgICBuZXdVc2VyLmFkZEZhdm9yaXRlUmVjaXBlKGN1cnJlbnRSZWNpcGUpXG4gIH1cbiAgXG4gIFxuICBcbi8vSEVMUEVSIEZVTkNUSU9OU1xuY29uc3Qgc2hvdyA9IChlbGVtZW50cykgPT4ge1xuICBlbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4gZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKSk7XG59XG5jb25zdCBoaWRlID0gKGVsZW1lbnRzKSA9PiB7XG4gIGVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpKTtcbn1cblxuXG5jb25zdCBzaG93TWFpblBhZ2UgPSAoKSA9PiB7XG4gIHNob3coW21haW5QYWdlVmlldywgbWFpblBhZ2VOYXZGb3JtLCBmYXZvcml0ZVJlY2lwZXNCdXR0b24sIHNlZUFsbFJlY2lwZXNCdXR0b25dKTtcbiAgaGlkZShbZmF2b3JpdGVSZWNpcGVzVmlldywgcmVjaXBlSW5mb1ZpZXcsIHJlY2lwZVJlc3VsdHNWaWV3LCBmYXZSZWNpcGVzTmF2Rm9ybV0pO1xufVxuXG5jb25zdCBzaG93UmVjaXBlU2VhcmNoUmVzdWx0cyA9ICgpID0+IHtcbiAgc2hvdyhbcmVjaXBlUmVzdWx0c1ZpZXcsIHNlZUFsbFJlY2lwZXNCdXR0b24sIGhvbWVCdXR0b24sIGZhdm9yaXRlUmVjaXBlc0J1dHRvbiwgbWFpblBhZ2VOYXZGb3JtXSk7XG4gIGhpZGUoW21haW5QYWdlVmlldywgZmF2b3JpdGVSZWNpcGVzVmlldywgcmVjaXBlSW5mb1ZpZXcsIGZhdlJlY2lwZXNOYXZGb3JtXSk7XG59XG5cbmNvbnN0IHNob3dGYXZvcml0ZVJlY2lwZXNWaWV3ID0gKCkgPT4ge1xuICBzaG93KFtmYXZvcml0ZVJlY2lwZXNWaWV3LCBmYXZSZWNpcGVzTmF2Rm9ybSwgaG9tZUJ1dHRvbl0pO1xuICBoaWRlKFttYWluUGFnZVZpZXcsICBmYXZvcml0ZVJlY2lwZXNCdXR0b24sIG1haW5QYWdlTmF2Rm9ybSwgcmVjaXBlSW5mb1ZpZXddKTtcbn1cblxuY29uc3Qgc2hvd1JlY2lwZUluZm9DYXJkID0gKCkgPT4ge1xuICBzaG93KFtyZWNpcGVJbmZvVmlldywgc2VlQWxsUmVjaXBlc0J1dHRvbiwgaG9tZUJ1dHRvbl0pO1xuICBoaWRlKFthbGxSZWNpcGVzVmlldywgbWFpblBhZ2VWaWV3LCByZWNpcGVSZXN1bHRzVmlldywgZmF2UmVjaXBlc05hdkZvcm1dKTtcbn1cblxuY29uc3Qgc2hvd1JlY2lwZXNUb0Nvb2tWaWV3ID0gKCkgPT4ge1xuICBzaG93KFtyZWNpcGVzVG9Db29rVmlldywgaG9tZUJ1dHRvbl0pO1xuICBoaWRlKFttYWluUGFnZVZpZXcsIHJlY2lwZUluZm9WaWV3LCBhbGxSZWNpcGVzVmlldywgcmVjaXBlUmVzdWx0c1ZpZXcsIGZhdlJlY2lwZXNOYXZGb3JtXSk7XG59XG5cbnRyeVJlY2lwZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgc2hvd1JlY2lwZUluZm9DYXJkKCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgY29va2Jvb2sucmVjaXBlc0NvbGxlY3Rpb24ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoYCR7Y29va2Jvb2sucmVjaXBlc0NvbGxlY3Rpb25baV0uaWR9YCA9PT0gYCR7dHJ5UmVjaXBlQnV0dG9uLnZhbHVlfWApIHtcbiAgICAgIHJlY2lwZSA9IG5ldyBSZWNpcGUoY29va2Jvb2sucmVjaXBlc0NvbGxlY3Rpb25baV0pXG4gICAgICBsZXQgY3VycmVudFJlY2lwZSA9IHJlY2lwZTtcbiAgICAgIGNvbnN0IHJlY2lwZUluZ3JlZGllbnRzID0gcmVjaXBlLmZpbmRSZWNpcGVJbmdyZWRpZW50SW5mbygpO1xuICAgICAgY29uc3QgcmVjaXBlSW5zdHJ1Y3Rpb25zID0gcmVjaXBlLmdldFJlY2lwZUluc3RydWN0aW9ucygpO1xuICAgICAgY29uc3QgcmVjaXBlQ29zdFRvdGFsID0gcmVjaXBlLmNhbGN1bGF0ZVJlY2lwZUNvc3QoKTtcbiAgICAgIHJlY2lwZVRpdGxlLmlubmVySFRNTCA9IGBgXG4gICAgICByZWNpcGVUaXRsZS5pbm5lckhUTUwgPSBgJHtjb29rYm9vay5yZWNpcGVzQ29sbGVjdGlvbltpXS5uYW1lfWBcbiAgICAgIGN1cnJlbnRSZWNpcGVJbWFnZS5zcmMgPSBgJHtjb29rYm9vay5yZWNpcGVzQ29sbGVjdGlvbltpXS5pbWFnZX1gXG4gICAgICBjdXJyZW50UmVjaXBlSW1hZ2UuYWx0ID0gYCR7Y29va2Jvb2sucmVjaXBlc0NvbGxlY3Rpb25baV0ubmFtZX1gXG4gICAgICBpbmdyZWRpZW50c0xpc3QuaW5uZXJIVE1MID0gYGAgIFxuICAgICAgcmVjaXBlSW5ncmVkaWVudHMuZm9yRWFjaCgoaW5ncmVkaWVudCkgPT4ge1xuICAgICAgICBpbmdyZWRpZW50c0xpc3QuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVFbmQnLCBgXG4gICAgICAgIDxsaT4ke2luZ3JlZGllbnR9PC9saT5gKVxuICAgICAgfSlcbiAgICAgIGluc3RydWN0aW9uc0xpc3QuaW5uZXJIVE1MID0gYGBcbiAgICAgIHJlY2lwZUluc3RydWN0aW9ucy5mb3JFYWNoKChpbnN0cnVjdGlvbikgPT4ge1xuICAgICAgICBpbnN0cnVjdGlvbnNMaXN0Lmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlRW5kJywgYFxuICAgICAgICA8bGk+JHtpbnN0cnVjdGlvbn08L2xpPmApXG4gICAgICB9KVxuICAgICAgdG90YWxDb3N0LmlubmVyVGV4dCA9IGAkJHtyZWNpcGVDb3N0VG90YWx9YFxuICAgIH0gIFxuICB9XG59KVxuXG5cbi8vRVZFTlQgTElTVEVORVJTXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgbG9hZFBhZ2UpO1xuaG9tZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dNYWluUGFnZSk7XG5mYXZvcml0aW5nQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRmF2b3JpdGUpO1xuc2VlQWxsUmVjaXBlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dBbGxSZWNpcGVzKTtcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dTZWFyY2hSZXN1bHRzKTtcbmZhdm9yaXRlUmVjaXBlc0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRpc3BsYXlGYXZvcml0ZWRSZWNpcGVzKTtcbnNlYXJjaEJ1dHRvbjIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzZWFyY2hGYXZvcml0ZVJlc3VsdHMpXG5kcm9wRG93bkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dEcm9wRG93bilcbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9