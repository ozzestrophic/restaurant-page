/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createAbout: () => (/* binding */ createAbout)\n/* harmony export */ });\nfunction createAbout() {\n  const home = document.createElement(\"div\");\n  home.innerHTML = \"this is About\";\n\n  const mid = document.querySelector(\"#mid\");\n  mid.innerHTML = home.innerHTML;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/about.js?");

/***/ }),

/***/ "./src/buttons.js":
/*!************************!*\
  !*** ./src/buttons.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createBtnsDiv: () => (/* binding */ createBtnsDiv)\n/* harmony export */ });\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about */ \"./src/about.js\");\n/* harmony import */ var _recipes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./recipes */ \"./src/recipes.js\");\n\n\n\n\nfunction createBtnsDiv() {\n  const btnsDiv = document.createElement(\"div\");\n  btnsDiv.classList.add(`flex`, `justify-center`, `gap`, `gap-4`, `mt-6`);\n\n  btnsDiv.appendChild(createBtns(\"home\", \"Home\", _home__WEBPACK_IMPORTED_MODULE_0__.createHome));\n  btnsDiv.appendChild(createBtns(\"recipes\", \"Recipes\", _recipes__WEBPACK_IMPORTED_MODULE_2__.createRecipes));\n  btnsDiv.appendChild(createBtns(\"about\", \"About\", _about__WEBPACK_IMPORTED_MODULE_1__.createAbout));\n\n  return btnsDiv;\n}\n\nfunction createBtns(id, text, func) {\n  const btn = document.createElement(\"button\");\n  btn.classList.add(\n    `border-white`,\n    `border`,\n    `rounded-md`,\n    `p-4`,\n    `hover:bg-slate-200`,\n    `hover:text-gray-800`\n  );\n\n  btn.id = id;\n  btn.innerText = text;\n  btn.addEventListener(\"click\", func);\n\n  return btn;\n}\n\nfunction addEventToButton(btn, func) {\n  btn.addEventListener(\"click\", func);\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/buttons.js?");

/***/ }),

/***/ "./src/content.js":
/*!************************!*\
  !*** ./src/content.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContent: () => (/* binding */ createContent)\n/* harmony export */ });\n/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ \"./src/buttons.js\");\n\n\nfunction createContent() {\n  const content = document.querySelector(\"#content\");\n\n  content.classList.add(`grid`, `grid-rows-[30vh_minmax(65vh,1fr)_5vh]`);\n\n  content.appendChild(createHeader());\n  content.appendChild(createMidContent());\n  content.appendChild(createFooter());\n}\n\nfunction createHeader() {\n  const header = document.createElement(\"header\");\n  header.classList.add(\n    `text-white`,\n    `text-center`,\n    `gap-2`,\n    `bg-[url('../src/falafel.jpg')]`,\n    `bg-cover`,\n    `bg-center`\n  );\n\n  const headingsDiv = document.createElement(\"div\");\n  headingsDiv.classList.add(\n    `flex`,\n    `flex-col`,\n    `place-content-center`,\n    `h-full`,\n    `backdrop-blur-sm`\n  );\n\n  const h1 = document.createElement(\"h1\");\n  h1.classList.add(`text-5xl`, `font-bold`, `font-serif`);\n  h1.innerText = `Welcome to Flafelo's`;\n\n  const p = document.createElement(\"p\");\n  p.innerText = \"This is my new awesome restaurant\";\n\n  headingsDiv.appendChild(h1);\n  headingsDiv.appendChild(p);\n  headingsDiv.appendChild((0,_buttons__WEBPACK_IMPORTED_MODULE_0__.createBtnsDiv)());\n\n  header.appendChild(headingsDiv);\n\n  return header;\n}\n\nfunction createMidContent() {\n  const midContent = document.createElement(\"div\");\n  midContent.id = \"mid\";\n  midContent.innerHTML = \"This is inner\";\n\n  return midContent;\n}\n\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(`text-center`);\n  footer.innerText = \"Created by Osama\";\n\n  return footer;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/content.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHome: () => (/* binding */ createHome)\n/* harmony export */ });\nfunction createHome() {\n  const home = document.createElement(\"div\");\n  home.innerHTML = \"this is home\";\n\n  const mid = document.querySelector(\"#mid\");\n  mid.innerHTML = home.innerHTML;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_content_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/content.js */ \"./src/content.js\");\nconsole.log(\"this is working!\");\n\n\n\n(0,_src_content_js__WEBPACK_IMPORTED_MODULE_0__.createContent)();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/recipes.js":
/*!************************!*\
  !*** ./src/recipes.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createRecipes: () => (/* binding */ createRecipes)\n/* harmony export */ });\nfunction createRecipes() {\n  const home = document.createElement(\"div\");\n  home.innerHTML = \"this is recipes\";\n\n  const mid = document.querySelector(\"#mid\");\n  mid.innerHTML = home.innerHTML;\n}\n\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/recipes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;