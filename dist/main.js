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

eval("class HeaderComponent extends React.component {\r\n  render() {\r\n    const p = React.createElement(\"p\", {}, \"Super paragraph\");\r\n    const h2 = React.createElement('h2', {title: 'Hi!'}, 'Header')\r\n    const article = React.createElement('article', {}, h2, p)\r\n    return article;\r\n  }\r\n}\r\n\r\nconst component = React.createElement(HeaderComponent);\r\n\r\nconst root = document.querySelector(\"#root\");\r\n\r\nReactDOM.render(component, root);\n\n//# sourceURL=webpack://welcome/./src/index.js?");

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