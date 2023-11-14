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

eval("console.log(\"this is working!\");\n\nfunction createContent() {\n  const content = document.querySelector(\"#content\");\n\n  content.classList.add(`grid`, `grid-rows-[30vh_minmax(65vh,1fr)_5vh]`);\n\n  content.appendChild(createHeader());\n  content.appendChild(createMidContent());\n  content.appendChild(createFooter());\n}\n\nfunction createHeader() {\n  const header = document.createElement(\"header\");\n  header.classList.add(\n    `text-white`,\n    `text-center`,\n    `gap-2`,\n    `bg-[url('../src/falafel.jpg')]`,\n    `bg-cover`,\n    `bg-center`\n  );\n\n  const headingsDiv = document.createElement(\"div\");\n  headingsDiv.classList.add(\n    `flex`,\n    `flex-col`,\n    `place-content-center`,\n    `h-full`,\n    `backdrop-blur-sm`\n  );\n\n  const h1 = document.createElement(\"h1\");\n  h1.classList.add(`text-5xl`, `font-bold`, `font-serif`);\n  h1.innerText = `Welcome to Ozzeek's`;\n\n  const p = document.createElement(\"p\");\n  p.innerText = \"This is my new awesome restaurant\";\n\n  headingsDiv.appendChild(h1);\n  headingsDiv.appendChild(p);\n  headingsDiv.appendChild(createBtnsDiv());\n\n  header.appendChild(headingsDiv);\n\n  return header;\n}\n\nfunction createBtnsDiv() {\n  const btnsDiv = document.createElement(\"div\");\n  btnsDiv.classList.add(`flex`, `justify-center`, `gap`, `gap-4`, `mt-6`);\n\n  btnsDiv.appendChild(createBtns(\"home\", \"Home\"));\n  btnsDiv.appendChild(createBtns(\"recipes\", \"Recipes\"));\n  btnsDiv.appendChild(createBtns(\"about\", \"About\"));\n\n  return btnsDiv;\n}\n\nfunction createBtns(id, text) {\n  const btn = document.createElement(\"button\");\n  btn.classList.add(\n    `border-white`,\n    `border`,\n    `rounded-md`,\n    `p-4`,\n    `hover:bg-slate-200`,\n    `hover:text-gray-800`\n  );\n\n  btn.id = id;\n  btn.innerText = text;\n\n  return btn;\n}\n\nfunction createMidContent() {\n  const midContent = document.createElement(\"div\");\n  midContent.innerHTML = \"This is inner\";\n\n  return midContent;\n}\n\nfunction createFooter() {\n  const footer = document.createElement(\"footer\");\n  footer.classList.add(`text-center`);\n  footer.innerText = \"Created by Osama\";\n\n  return footer;\n}\n\ncreateContent();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

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