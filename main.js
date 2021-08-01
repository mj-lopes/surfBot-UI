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

/***/ "./js/funcionamento.js":
/*!*****************************!*\
  !*** ./js/funcionamento.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Funcionamento)\n/* harmony export */ });\nclass Funcionamento {\r\n  constructor(dia, horario, elemento) {\r\n    this.dias = document.querySelector(dia);\r\n    this.horario = document.querySelector(horario);\r\n    this.elemento = document.querySelector(elemento);\r\n    this.agora = new Date();\r\n  }\r\n\r\n  funcionandoNoDia() {\r\n    // verifica se o dia atual na semana está presente no atributo data-dia (5 - sex ou 6 - sab)\r\n    return this.horario.dataset.dia.includes(this.agora.getDay());\r\n  }\r\n\r\n  funcionandoNoHorario() {\r\n    const horario = this.horario.dataset.horario.split(\",\");\r\n    return (\r\n      this.agora.getHours() >= +horario[0] &&\r\n      this.agora.getHours() < +horario[1]\r\n    );\r\n  }\r\n\r\n  estaAberto() {\r\n    if (this.funcionandoNoDia() && this.funcionandoNoHorario()) {\r\n      this.elemento.classList.add(\"aberto\");\r\n    } else {\r\n      this.elemento.classList.remove(\"aberto\");\r\n    }\r\n  }\r\n\r\n  init() {\r\n    this.estaAberto();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://surfbot-flex/./js/funcionamento.js?");

/***/ }),

/***/ "./js/handleForm.js":
/*!**************************!*\
  !*** ./js/handleForm.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HandleInputForm)\n/* harmony export */ });\nclass HandleInputForm {\r\n  constructor(formulario, campo) {\r\n    this.formulario = document.querySelector(formulario);\r\n    this.email = window.location.search;\r\n    this.campo = campo;\r\n  }\r\n\r\n  tratamentoFormDado() {\r\n    // pega o dado de window search e realiza os devidos tratamento para tornar um\r\n    // valor de campo de email válido\r\n    let dado = this.email;\r\n    dado = dado.split(\"=\")[1].replace(\"%40\", \"@\");\r\n    return dado;\r\n  }\r\n\r\n  colocarDadoForm() {\r\n    // seleciona o campo correspondente no formulario passado\r\n    const campoFormulario = this.formulario.elements[this.campo];\r\n    // Seta no campo o dado tratado de window search\r\n    campoFormulario.value = this.tratamentoFormDado();\r\n  }\r\n\r\n  init() {\r\n    // verifica se existe um formulario com o valor e se o valor de\r\n    // windows search não é vazio\r\n    if (this.formulario && this.email) {\r\n      this.colocarDadoForm();\r\n    }\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://surfbot-flex/./js/handleForm.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scrollSuave__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scrollSuave */ \"./js/scrollSuave.js\");\n/* harmony import */ var _handleForm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./handleForm */ \"./js/handleForm.js\");\n/* harmony import */ var _funcionamento__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./funcionamento */ \"./js/funcionamento.js\");\n\r\n\r\n\r\n\r\nconst scrollSection = new _scrollSuave__WEBPACK_IMPORTED_MODULE_0__.default('.menu-nav a[href^=\"#\"]');\r\nscrollSection.init();\r\n\r\nconst scrollParaMapa = new _scrollSuave__WEBPACK_IMPORTED_MODULE_0__.default(\"a[href='#mapa']\");\r\nscrollParaMapa.init();\r\n\r\nconst puxaDadosFormulario = new _handleForm__WEBPACK_IMPORTED_MODULE_1__.default(\r\n  'form[id=\"formulario-vendas\"]',\r\n  \"email\",\r\n);\r\npuxaDadosFormulario.init();\r\n\r\nconst funcionamento = new _funcionamento__WEBPACK_IMPORTED_MODULE_2__.default(\r\n  \"[data-dia]\",\r\n  \"[data-horario]\",\r\n  \".funcionamento\",\r\n);\r\n\r\nfuncionamento.init();\r\n\n\n//# sourceURL=webpack://surfbot-flex/./js/script.js?");

/***/ }),

/***/ "./js/scrollSuave.js":
/*!***************************!*\
  !*** ./js/scrollSuave.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ScrollSuave)\n/* harmony export */ });\nclass ScrollSuave {\r\n  constructor(linksInternos) {\r\n    this.linksInternos = document.querySelectorAll(linksInternos);\r\n\r\n    this.scrollarAteASessao = this.scrollarAteASessao.bind(this);\r\n  }\r\n\r\n  // eslint-disable-next-line class-methods-use-this\r\n  scrollarAteASessao(event) {\r\n    event.preventDefault();\r\n    const hrefSessao = event.currentTarget.getAttribute(\"href\");\r\n    const sessao = document.querySelector(hrefSessao);\r\n\r\n    sessao.scrollIntoView({\r\n      behavior: \"smooth\",\r\n      block: \"start\",\r\n    });\r\n  }\r\n\r\n  adicionarEventos() {\r\n    this.linksInternos.forEach((link) => {\r\n      link.addEventListener(\"click\", this.scrollarAteASessao);\r\n    });\r\n  }\r\n\r\n  init() {\r\n    this.adicionarEventos();\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://surfbot-flex/./js/scrollSuave.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;