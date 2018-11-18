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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/components/navbar.js":
/*!*************************************!*\
  !*** ./src/js/components/navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst navbar = () => {\r\n\tlet nav = document.createElement(\"nav\");\r\n\tlet navBar = document.createElement(\"ul\");\r\n\tlet navText = [\"Home\", \"Menu\", \"Locations\", \"Contact\"];\r\n\tlet navToggle = document.createElement(\"span\");\r\n\tlet navToggleIcon = document.createElement(\"i\");\r\n\tlet navItems = [];\r\n\r\n\t// nav toggle\r\n\tnavToggleIcon.classList.add(\"fas\");\r\n\tnavToggleIcon.classList.add(\"fa-times\");\r\n\r\n\tnavToggle.classList.add(\"nav-toggle\");\r\n\tnavToggle.appendChild(navToggleIcon);\r\n\r\n\tlet toggled = false;\r\n\tnavToggle.addEventListener(\"click\", function() {\r\n\t\t// this.classList.toggle(\"spin\");\r\n\r\n\t\tif(!toggled) {\r\n\t\t\tthis.style.animation = \".5s spinIn forwards\";\r\n\t\t} else {\r\n\t\t\tthis.style.animation = \".5s spinOut forwards\";\r\n\t\t}\r\n\t\ttoggled = !toggled;\r\n\r\n\t\tlet delay = 0;\r\n\t\tnavItems.forEach(function(navItem) {\r\n\t\t\tsetTimeout(function() {\r\n\t\t\t\tnavItem.classList.toggle(\"nav-item-in\");\r\n\t\t\t\tconsole.log(delay + \"s\");\r\n\t\t\t}, delay);\r\n\t\t\tdelay += 50;\r\n\t\t});\r\n\r\n\t});\r\n\r\n\tnav.appendChild(navToggle);\r\n\r\n\tnavBar.classList.add(\"navbar\");\r\n\r\n\tnavText.forEach(function(text) {\r\n\t\tlet navItem = document.createElement(\"li\");\r\n\t\tlet navLink = document.createElement(\"a\");\r\n\t\tnavLink.textContent = text;\r\n\t\tnavLink.classList.add(\"nav-link\");\r\n\r\n\t\tif(text == \"Home\") {\r\n\t\t\tnavLink.classList.add(\"active\");\r\n\t\t}\r\n\r\n\t\tnavItem.classList.add(\"nav-item\");\r\n\r\n\t\t// eventhandlers for nav clicks\r\n\t\tnavItem.addEventListener(\"click\", function() {\r\n\r\n\t\t\tnavItems.forEach(function(otherNavItem) {\r\n\t\t\t\tif(otherNavItem.textContent != navItem.textContent) {\r\n\t\t\t\t\totherNavItem.querySelector(\".nav-link\").classList.remove(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\totherNavItem.querySelector(\".nav-link\").classList.add(\"active\");\r\n\t\t\t\t}\r\n\t\t\t});\r\n\t\t});\r\n\t\tnavItems.push(navItem);\r\n\r\n\r\n\t\tnavItem.appendChild(navLink);\r\n\t\tnavBar.appendChild(navItem);\r\n\t});\r\n\r\n\tnav.appendChild(navBar);\r\n\r\n\treturn nav;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbar);\n\n//# sourceURL=webpack:///./src/js/components/navbar.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar.js */ \"./src/js/components/navbar.js\");\n/* harmony import */ var _sections_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sections/home.js */ \"./src/js/sections/home.js\");\n/* harmony import */ var _sections_menu_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/menu.js */ \"./src/js/sections/menu.js\");\n/* harmony import */ var _sections_locations_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/locations.js */ \"./src/js/sections/locations.js\");\n/* harmony import */ var _sections_contact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/contact.js */ \"./src/js/sections/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n(function() {\r\n\tlet nav = Object(_components_navbar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\tlet homeSection = Object(_sections_home_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(), \r\n\t\tmenuSection, \r\n\t\tlocationsSection, \r\n\t\tcontactSection;\r\n\r\n\tlet content = document.querySelector(\".content\");\r\n\tlet innerContainer = document.createElement(\"div\");\r\n\r\n\t// add nav\r\n\tcontent.appendChild(nav);\r\n\r\n\t// add inner container where all the tab contents will go\r\n\tinnerContainer.classList.add(\"inner-container\");\r\n\tcontent.appendChild(innerContainer);\r\n\t\r\n\t// init with the home content\r\n\tinnerContainer.appendChild(homeSection);\r\n})();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/sections/contact.js":
/*!************************************!*\
  !*** ./src/js/sections/contact.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contact = () => {\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n//# sourceURL=webpack:///./src/js/sections/contact.js?");

/***/ }),

/***/ "./src/js/sections/home.js":
/*!*********************************!*\
  !*** ./src/js/sections/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst home = () => {\r\n\tlet homeContainer = document.createElement(\"div\");\r\n\r\n\tlet headerDiv = document.createElement(\"div\");\r\n\tlet homeHeader = document.createElement(\"h1\");\r\n\tlet headerSpan = document.createElement(\"span\");\r\n\r\n\tlet quoteDiv = document.createElement(\"div\");\r\n\tlet homeQuote = document.createElement(\"p\");\r\n\tlet quoteSpan = document.createElement(\"span\");\r\n\r\n\thomeContainer.classList.add(\"home\");\r\n\r\n\t// add header\r\n\thomeHeader.classList.add(\"home__header\");\r\n\r\n\theaderSpan.classList.add(\"text\");\r\n\theaderSpan.textContent = \"Nook Worm\";\r\n\r\n\theaderDiv.appendChild(homeHeader);\r\n\thomeHeader.appendChild(headerSpan);\r\n\thomeContainer.appendChild(headerDiv);\r\n\r\n\t// add quote\r\n\thomeQuote.classList.add(\"home__quote\");\r\n\r\n\tquoteSpan.classList.add(\"text\");\r\n\tquoteSpan.textContent = \"\\\"Wholesome chit-chat with some noms to boot\\\"\";\r\n\r\n\tquoteDiv.appendChild(homeQuote);\r\n\thomeQuote.appendChild(quoteSpan);\r\n\thomeContainer.appendChild(quoteDiv);\r\n\r\n\treturn homeContainer;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/js/sections/home.js?");

/***/ }),

/***/ "./src/js/sections/locations.js":
/*!**************************************!*\
  !*** ./src/js/sections/locations.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst locations = () => {\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (locations);\n\n//# sourceURL=webpack:///./src/js/sections/locations.js?");

/***/ }),

/***/ "./src/js/sections/menu.js":
/*!*********************************!*\
  !*** ./src/js/sections/menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menu = () => {\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/js/sections/menu.js?");

/***/ })

/******/ });