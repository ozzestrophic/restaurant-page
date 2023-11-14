/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("console.log(\"this is working!\");\n\nfunction createContent() {\n  const content = document.querySelector(\"#content\");\n\n  content.classList.add(`grid`, `grid-rows-[30vh_minmax(65vh,1fr)_5vh]`);\n\n  function createHeader() {\n    const header = document.createElement(\"header\");\n    header.classList.add(\n      `text-white`,\n      `text-center`,\n      `gap-2`,\n      `bg-[url('../src/falafel.jpg')]`,\n      `bg-cover`,\n      `bg-center`\n    );\n\n    header.innerText = \"this is auto generated\";\n\n    return header;\n  }\n\n  content.appendChild(createHeader());\n}\n\ncreateContent();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;