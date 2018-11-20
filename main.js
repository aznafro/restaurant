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
eval("__webpack_require__.r(__webpack_exports__);\nconst navbar = () => {\r\n\tlet nav = document.createElement(\"nav\");\r\n\tlet navBar = document.createElement(\"ul\");\r\n\tlet navText = [\"Home\", \"Menu\", \"Locations\", \"Contact\"];\r\n\tlet navToggle = document.createElement(\"span\");\r\n\tlet navToggleIcon = document.createElement(\"i\");\r\n\tlet navItems = [];\r\n\r\n\tlet screen;\r\n\tlet content;\r\n\r\n\t// nav toggle\r\n\tnavToggleIcon.classList.add(\"fas\");\r\n\tnavToggleIcon.classList.add(\"fa-times\");\r\n\r\n\tnavToggle.classList.add(\"nav-toggle\");\r\n\tnavToggle.appendChild(navToggleIcon);\r\n\r\n\tlet toggled = false;\r\n\tfunction toggle() {\r\n\t\tif(!screen) {\r\n\t\t\tscreen = document.querySelector(\".screen\");\r\n\t\t\tcontent = document.querySelector(\".content\");\r\n\t\t}\r\n\r\n\t\tscreen.classList.toggle(\"hidden\");\r\n\t\tcontent.classList.toggle(\"blur\");\r\n\r\n\t\tif(!toggled) {\r\n\t\t\tnavToggle.style.animation = \".5s spinIn forwards\";\r\n\t\t} else {\r\n\t\t\tnavToggle.style.animation = \".5s spinOut forwards\";\r\n\t\t}\r\n\t\ttoggled = !toggled;\r\n\r\n\t\tlet delay = 0;\r\n\t\tnavItems.forEach(function(navItem) {\r\n\t\t\tsetTimeout(function() {\r\n\t\t\t\tnavItem.classList.toggle(\"nav-item-in\");\r\n\t\t\t}, delay);\r\n\t\t\tdelay += 50;\r\n\t\t});\r\n\t}\r\n\r\n\tnavToggle.addEventListener(\"click\", toggle);\r\n\tnav.appendChild(navToggle);\r\n\r\n\tnavBar.classList.add(\"navbar\");\r\n\r\n\tnavText.forEach(function(text) {\r\n\t\tlet navItem = document.createElement(\"li\");\r\n\t\tlet navLink = document.createElement(\"a\");\r\n\t\tnavLink.textContent = text;\r\n\t\tnavLink.classList.add(\"nav-link\");\r\n\r\n\t\tif(text == \"Home\") {\r\n\t\t\tnavLink.classList.add(\"active\");\r\n\t\t}\r\n\r\n\t\tnavItem.classList.add(\"nav-item\");\r\n\r\n\t\t// eventhandlers for nav clicks\r\n\t\tnavItem.addEventListener(\"click\", function() {\r\n\t\t\tif(window.innerWidth < 768) {\r\n\t\t\t\ttoggle();\r\n\t\t\t}\r\n\r\n\t\t\tnavItems.forEach(function(otherNavItem) {\r\n\t\t\t\tif(otherNavItem.textContent != navItem.textContent) {\r\n\t\t\t\t\totherNavItem.querySelector(\".nav-link\").classList.remove(\"active\");\r\n\t\t\t\t} else {\r\n\t\t\t\t\totherNavItem.querySelector(\".nav-link\").classList.add(\"active\");\r\n\t\t\t\t}\r\n\t\t\t});\r\n\r\n\t\t\t\r\n\t\t});\r\n\t\tnavItems.push(navItem);\r\n\r\n\r\n\t\tnavItem.appendChild(navLink);\r\n\t\tnavBar.appendChild(navItem);\r\n\t});\r\n\r\n\tnav.appendChild(navBar);\r\n\r\n\treturn nav;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (navbar);\n\n//# sourceURL=webpack:///./src/js/components/navbar.js?");

/***/ }),

/***/ "./src/js/components/screen.js":
/*!*************************************!*\
  !*** ./src/js/components/screen.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst screen = () => {\r\n\tlet screen = document.createElement(\"div\");\r\n\tscreen.classList.add(\"screen\");\r\n\tscreen.classList.add(\"hidden\");\r\n\treturn screen;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (screen);\n\n//# sourceURL=webpack:///./src/js/components/screen.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navbar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navbar.js */ \"./src/js/components/navbar.js\");\n/* harmony import */ var _components_screen__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/screen */ \"./src/js/components/screen.js\");\n/* harmony import */ var _sections_home_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sections/home.js */ \"./src/js/sections/home.js\");\n/* harmony import */ var _sections_menu_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sections/menu.js */ \"./src/js/sections/menu.js\");\n/* harmony import */ var _sections_locations_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sections/locations.js */ \"./src/js/sections/locations.js\");\n/* harmony import */ var _sections_contact_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sections/contact.js */ \"./src/js/sections/contact.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(function() {\r\n\tlet nav = Object(_components_navbar_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\tlet scrn = Object(_components_screen__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\tlet homeSection = Object(_sections_home_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(), \r\n\t\tmenuSection, \r\n\t\tlocationsSection, \r\n\t\tcontactSection;\r\n\tlet body = document.body;\r\n\tlet content = document.createElement(\"div\");\r\n\tlet innerContainer = document.createElement(\"div\");\r\n\r\n\t// add nav\r\n\tlet navLinks = nav.querySelectorAll(\".nav-link\");\r\n\tnavLinks.forEach(function(link) {\r\n\t\tlink.addEventListener(\"click\", function() {\r\n\t\t\tlet targetLink = link.textContent.toLowerCase();\r\n\t\t\tlet currentContent = innerContainer.querySelector(\"[class$=\\\"__section\\\"]\");\r\n\t\t\tlet currentContentName = currentContent.getAttribute(\"class\").split(\"__\")[0];\r\n\t\t\t\r\n\t\t\t// if were clicking a link were already on, do nothing\r\n\t\t\tif(targetLink == currentContentName) {\r\n\t\t\t\treturn;\r\n\t\t\t}\r\n\r\n\t\t\tcurrentContent.remove();\r\n\t\t\tswitch(targetLink) {\r\n\t\t\t\tcase \"home\": {\r\n\t\t\t\t\tinnerContainer.appendChild(homeSection);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t\tcase \"menu\": {\r\n\t\t\t\t\tif(!menuSection) {\r\n\t\t\t\t\t\tmenuSection = Object(_sections_menu_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\t\t\t\t\t}\r\n\t\t\t\t\tinnerContainer.appendChild(menuSection);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t\tcase \"locations\": {\r\n\t\t\t\t\tif(!locationsSection) {\r\n\t\t\t\t\t\tlocationsSection = Object(_sections_locations_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n\t\t\t\t\t}\r\n\t\t\t\t\tinnerContainer.appendChild(locationsSection);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t\tcase \"contact\": {\r\n\t\t\t\t\tif(!contactSection) {\r\n\t\t\t\t\t\tcontactSection = Object(_sections_contact_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n\t\t\t\t\t}\r\n\t\t\t\t\tinnerContainer.appendChild(contactSection);\r\n\t\t\t\t\tbreak;\r\n\t\t\t\t}\r\n\t\t\t}\r\n\t\t});\r\n\t});\r\n\tbody.appendChild(nav);\r\n\r\n\t// add screen, this is used when the background gets blurred.\r\n\t// it blocks the user from interacting with the background\r\n\tbody.appendChild(scrn);\r\n\r\n\t// init with the home content\r\n\tinnerContainer.classList.add(\"inner-container\");\r\n\tinnerContainer.appendChild(homeSection);\r\n\r\n\t// add inner container where all the tab contents will go\r\n\tcontent.appendChild(innerContainer);\r\n\r\n\tcontent.classList.add(\"content\");\r\n\tbody.appendChild(content);\r\n})();\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/sections/contact.js":
/*!************************************!*\
  !*** ./src/js/sections/contact.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contact = () => {\r\n\tlet contactSection = document.createElement(\"section\");\r\n\tcontactSection.classList.add(\"contact__section\");\r\n\t\r\n\t// add header\r\n\tlet contactHeader = document.createElement(\"h1\");\r\n\tlet headerSpan = document.createElement(\"span\");\r\n\t\r\n\tcontactHeader.classList.add(\"contact__header\");\r\n\theaderSpan.classList.add(\"text\");\r\n\r\n\theaderSpan.textContent = \"Contact Us\";\r\n\r\n\tcontactHeader.appendChild(headerSpan);\r\n\tcontactSection.appendChild(contactHeader);\r\n\r\n\tlet row = document.createElement(\"div\");\r\n\tlet descBox = document.createElement(\"div\");\r\n\tlet formBox = document.createElement(\"div\");\r\n\r\n\trow.classList.add(\"row\");\r\n\tdescBox.classList.add(\"col-md-1-2\");\r\n\tformBox.classList.add(\"col-md-1-2\");\r\n\r\n\t// description box\r\n\tlet desc = document.createElement(\"div\");\r\n\tlet descText = document.createElement(\"p\");\r\n\r\n\tdesc.classList.add(\"contact__desc\");\r\n\tdescText.classList.add(\"contact__desc--text\");\r\n\r\n\tdescText.textContent = \"We'd love to hear from you. If you'd like to leave any feedback, comments, or suggestions please send us an email with a little information about yourself!\";\r\n\r\n\tdesc.appendChild(descText);\t\r\n\r\n\t// form box\r\n\tlet form = document.createElement(\"form\");\r\n\tlet emailInput = document.createElement(\"input\");\r\n\tlet comment = document.createElement(\"textarea\");\r\n\tlet send = document.createElement(\"button\");\r\n\r\n\tform.classList.add(\"contact__form\");\r\n\r\n\tsend.classList.add(\"contact__form--button\");\r\n\tsend.textContent = \"Send\";\r\n\r\n\temailInput.classList.add(\"contact__form--input\");\r\n\tcomment.classList.add(\"contact__form--textarea\")\r\n\r\n\t// set input types\r\n\tlet emailType = document.createAttribute(\"type\");\r\n\temailType.value = \"email\";\r\n\temailInput.setAttributeNode(emailType);\r\n\r\n\t// set input placeholders\r\n\tlet emailPlaceholder = document.createAttribute(\"placeholder\");\r\n\tlet commentPlaceholder = document.createAttribute(\"placeholder\");\r\n\r\n\temailPlaceholder.value = \"Email\";\r\n\tcommentPlaceholder.value = \"Comment\";\r\n\r\n\temailInput.setAttributeNode(emailPlaceholder);\r\n\tcomment.setAttributeNode(commentPlaceholder);\r\n\r\n\t// set required\r\n\tlet emailRequired = document.createAttribute(\"required\");\r\n\tlet commentRequired = document.createAttribute(\"required\");\r\n\r\n\temailRequired.value = true;\r\n\tcommentRequired.value = true;\r\n\r\n\temailInput.setAttributeNode(emailRequired);\r\n\tcomment.setAttributeNode(commentRequired);\r\n\r\n\tform.appendChild(emailInput);\r\n\tform.appendChild(comment);\r\n\tform.appendChild(send);\r\n\r\n\tdescBox.appendChild(desc);\r\n\tformBox.appendChild(form);\r\n\r\n\trow.appendChild(descBox);\r\n\trow.appendChild(formBox);\r\n\r\n\tcontactSection.appendChild(row);\r\n\r\n\treturn contactSection;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n//# sourceURL=webpack:///./src/js/sections/contact.js?");

/***/ }),

/***/ "./src/js/sections/home.js":
/*!*********************************!*\
  !*** ./src/js/sections/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst home = () => {\r\n\tlet homeContainer = document.createElement(\"section\");\r\n\r\n\tlet headerDiv = document.createElement(\"div\");\r\n\tlet homeHeader = document.createElement(\"h1\");\r\n\tlet headerSpan = document.createElement(\"span\");\r\n\r\n\tlet quoteDiv = document.createElement(\"div\");\r\n\tlet homeQuote = document.createElement(\"p\");\r\n\tlet quoteSpan = document.createElement(\"span\");\r\n\r\n\thomeContainer.classList.add(\"home__section\");\r\n\r\n\t// add header\r\n\theaderDiv.classList.add(\"home__header--box\");\r\n\thomeHeader.classList.add(\"home__header\");\r\n\r\n\theaderSpan.classList.add(\"text\");\r\n\theaderSpan.textContent = \"Nook Worm\";\r\n\r\n\thomeHeader.appendChild(headerSpan);\r\n\theaderDiv.appendChild(homeHeader);\r\n\thomeContainer.appendChild(headerDiv);\r\n\r\n\t// add quote\r\n\tquoteDiv.classList.add(\"home__quote--box\");\r\n\thomeQuote.classList.add(\"home__quote\");\r\n\r\n\tquoteSpan.classList.add(\"text\");\r\n\tquoteSpan.textContent = \"\\\"Wholesome chit-chat with some noms to boot\\\"\";\r\n\r\n\thomeQuote.appendChild(quoteSpan);\r\n\tquoteDiv.appendChild(homeQuote);\r\n\thomeContainer.appendChild(quoteDiv);\r\n\r\n\treturn homeContainer;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/js/sections/home.js?");

/***/ }),

/***/ "./src/js/sections/locations.js":
/*!**************************************!*\
  !*** ./src/js/sections/locations.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst locations = () => {\r\n\tlet locationsSection = document.createElement(\"section\");\r\n\tlocationsSection.classList.add(\"locations__section\");\r\n\r\n\t// add header\r\n\tlet locHeader = document.createElement(\"h1\");\r\n\tlet headerSpan = document.createElement(\"span\");\r\n\t\r\n\tlocHeader.classList.add(\"location__header\");\r\n\theaderSpan.classList.add(\"text\");\r\n\r\n\theaderSpan.textContent = \"Location\";\r\n\r\n\tlocHeader.appendChild(headerSpan);\r\n\tlocationsSection.appendChild(locHeader);\r\n\r\n\t// add location and map\r\n\tlet locBox = document.createElement(\"div\");\r\n\tlet addressBox = document.createElement(\"div\");\r\n\tlet mapBox = document.createElement(\"div\");\r\n\r\n\tlocBox.classList.add(\"row\");\r\n\taddressBox.classList.add(\"col-md-1-2\");\r\n\tmapBox.classList.add(\"col-md-1-2\");\r\n\r\n\t// address\r\n\tlet address = document.createElement(\"div\");\r\n\tlet addName = document.createElement(\"h2\");\r\n\tlet addSt = document.createElement(\"p\");\r\n\tlet addCity = document.createElement(\"p\");\r\n\r\n\taddress.classList.add(\"address\");\r\n\taddName.classList.add(\"address__name\");\r\n\taddSt.classList.add(\"address__add\");\r\n\taddCity.classList.add(\"address__add\");\r\n\r\n\taddName.textContent = \"Nook Worm\";\r\n\taddSt.textContent = \"567 Bulwark Way\";\r\n\taddCity.textContent = \"Costa Mesa, CA 90212\";\r\n\r\n\taddress.appendChild(addName);\r\n\taddress.appendChild(addSt);\r\n\taddress.appendChild(addCity);\r\n\r\n\taddressBox.appendChild(address);\r\n\r\n\t// map\r\n\tlet map = document.createElement(\"iframe\");\r\n\tlet mapSrc = document.createAttribute(\"src\");\r\n\tlet frameBorder = document.createAttribute(\"frameborder\");\r\n\r\n\tmap.classList.add(\"map\");\r\n\r\n\tmapSrc.value = \"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6643.719949213464!2d-117.91841189603863!3d33.634872502228795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x83262048d96b7bfe!2sGreenleaf+Gourmet+Chopshop!5e0!3m2!1sen!2sus!4v1542690706148\";\r\n\tmap.setAttributeNode(mapSrc);\r\n\r\n\tframeBorder.value = 0;\r\n\tmap.setAttributeNode(frameBorder);\r\n\r\n\tmapBox.appendChild(map);\r\n\r\n\t// append elements\r\n\tlocBox.appendChild(mapBox);\r\n\tlocBox.appendChild(addressBox);\r\n\tlocationsSection.appendChild(locBox);\r\n\r\n\treturn locationsSection;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (locations);\n\n//# sourceURL=webpack:///./src/js/sections/locations.js?");

/***/ }),

/***/ "./src/js/sections/menu.js":
/*!*********************************!*\
  !*** ./src/js/sections/menu.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nlet menuItems = [{\r\n\t\tname: \"Pizzas\",\r\n\t\tdescription: \"Try one of our delicious pizzas made in our very own brick oven\",\r\n\t\timageURL: \"images/pizza.jpg\"\r\n\t}, {\r\n\t\tname: \"Burgers\",\r\n\t\tdescription: \"Made with 100% Wagyu beef, we craft burgers that produces the juiciest bites\",\r\n\t\timageURL: \"images/burger.jpg\"\r\n\t}, {\r\n\t\tname: \"Hotdogs\",\r\n\t\tdescription: \"Not your average hotdog, these babies are loaded with flavor\",\r\n\t\timageURL: \"images/hotdog.jpg\"\r\n\t}, {\r\n\t\tname: \"Beer\",\r\n\t\tdescription: \"Choose from a huge selection of craft beer, imported and domestic\",\r\n\t\timageURL: \"images/beer.jpg\"\r\n\t}\r\n];\r\n\r\nlet bigScreen = false;\r\nlet currentCard = 0;\r\nlet cards = [];\r\n\r\nfunction nextCard(index) {\r\n\tcards[currentCard].classList.add(\"fade\");\r\n\r\n\tcurrentCard = currentCard += index;\r\n\tif(currentCard >= cards.length) {\r\n\t\tcurrentCard = 0;\r\n\t} else if(currentCard < 0) {\r\n\t\tcurrentCard = cards.length - 1;\r\n\t}\r\n\r\n\tcards[currentCard].classList.remove(\"fade\");\r\n}\r\n\r\nconst menu = () => {\r\n\tlet menuSection = document.createElement(\"section\");\r\n\tlet menuHeader = document.createElement(\"h1\");\r\n\tlet menuSpan = document.createElement(\"span\");\r\n\r\n\tmenuSection.classList.add(\"menu__section\");\r\n\tmenuHeader.classList.add(\"menu__header\");\r\n\tmenuSpan.classList.add(\"text\");\r\n\r\n\tmenuSpan.textContent = \"Popular Dishes\";\r\n\tmenuHeader.appendChild(menuSpan);\r\n\r\n\tlet slideshow = document.createElement(\"div\");\r\n\r\n\tif(window.innerWidth >= 768) {\r\n\t\tbigScreen = true;\r\n\t\tslideshow.classList.add(\"row\");\r\n\t} else {\r\n\t\tslideshow.classList.add(\"slideshow\");\r\n\r\n\t\tlet leftArrow = document.createElement(\"a\");\r\n\t\tlet rightArrow = document.createElement(\"a\");\r\n\r\n\t\tleftArrow.classList.add(\"arrow\");\r\n\t\tleftArrow.classList.add(\"arrow-left\");\r\n\t\trightArrow.classList.add(\"arrow\");\r\n\t\trightArrow.classList.add(\"arrow-right\");\r\n\r\n\t\tleftArrow.innerHTML = \"&#10094;\";\r\n\t\trightArrow.innerHTML = \"&#10095;\";\r\n\r\n\t\tleftArrow.addEventListener(\"click\", function() {\r\n\t\t\tnextCard(-1);\r\n\t\t});\r\n\t\trightArrow.addEventListener(\"click\", function() {\r\n\t\t\tnextCard(1);\r\n\t\t});\r\n\r\n\t\tslideshow.appendChild(leftArrow);\r\n\t\tslideshow.appendChild(rightArrow);\r\n\t}\r\n\r\n\tlet firstItem = true;\r\n\tmenuItems.forEach(function(menuItem) {\r\n\t\tlet card = document.createElement(\"div\");\r\n\t\tlet cardImg = document.createElement(\"div\");\r\n\t\tlet cardName = document.createElement(\"h2\");\r\n\t\tlet cardDesc = document.createElement(\"p\");\r\n\t\tlet overlay = document.createElement(\"div\");\r\n\r\n\t\tcard.classList.add(\"card\");\r\n\r\n\t\tcardImg.classList.add(\"card__img\");\r\n\t\tcardName.classList.add(\"card__name\");\r\n\t\tcardDesc.classList.add(\"card__desc\");\r\n\t\toverlay.classList.add(\"card__overlay\");\r\n\r\n\t\tcardImg.style.backgroundImage = \"linear-gradient(to bottom, transparent 0%, transparent 60%, black 100%), url(\" + menuItem.imageURL + \")\";\r\n\r\n\t\tcardName.textContent = menuItem.name;\r\n\t\tcardDesc.textContent = menuItem.description;\r\n\r\n\t\toverlay.appendChild(cardName);\r\n\t\toverlay.appendChild(cardDesc);\r\n\r\n\t\tcard.appendChild(cardImg);\r\n\t\tcard.appendChild(overlay);\r\n\r\n\t\tcards.push(card);\r\n\r\n\t\tif(bigScreen) {\r\n\t\t\tlet col = document.createElement(\"div\");\r\n\t\t\tcol.classList.add(\"col-1-4\");\r\n\r\n\t\t\tcol.appendChild(card);\r\n\t\t\tslideshow.appendChild(col);\r\n\t\t} else {\r\n\t\t\tslideshow.appendChild(card);\r\n\t\t}\r\n\t});\r\n\r\n\t// keep the hiddenness of the cards in order\r\n\tif(!bigScreen) {\r\n\t\tfor(let i=0; i < cards.length; i++) {\r\n\t\t\tif(i != 0) {\r\n\t\t\t\tcards[i].classList.add(\"fade\");\r\n\t\t\t}\r\n\t\t}\r\n\t}\r\n\r\n\tmenuSection.appendChild(menuHeader);\r\n\tmenuSection.appendChild(slideshow);\r\n\r\n\treturn menuSection;\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/js/sections/menu.js?");

/***/ })

/******/ });