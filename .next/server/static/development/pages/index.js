module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Button/index.tsx":
/*!*************************************!*\
  !*** ./components/Button/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ \"styled-jsx/style\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../constants/design-tokens */ \"./constants/design-tokens.ts\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ \"classnames\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"/Users/kristina/Projects/triple-core-component-lib/components/Button/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1__[\"createElement\"];\n\n\n\n\nconst Button = ({\n  text,\n  type = \"primary\",\n  size = \"medium\",\n  disabled = false\n}) => {\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], null, __jsx(\"button\", {\n    disabled: disabled,\n    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([[\"2065823521\", [_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].inactive, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.text, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].inactive, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].inactive, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].inactive, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active]]]) + \" \" + (classnames__WEBPACK_IMPORTED_MODULE_3___default()(\"Button\", \"type-\" + type, \"size-\" + size) || \"\"),\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }\n  }, text), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {\n    id: \"2065823521\",\n    dynamic: [_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].inactive, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.text, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].inactive, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].inactive, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].inactive, _constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active],\n    __self: undefined\n  }, `.Button.__jsx-style-dynamic-selector{padding:0.3rem 0.8rem;border:0;border:2px solid ${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default};border-radius:0;font-family:inherit;font-size:1.1rem;font-weight:600;-webkit-letter-spacing:0.01rem;-moz-letter-spacing:0.01rem;-ms-letter-spacing:0.01rem;letter-spacing:0.01rem;text-align:center;line-height:1.1;cursor:pointer;}.Button.__jsx-style-dynamic-selector:hover,.Button.__jsx-style-dynamic-selector:focus{border-bottom-color:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active};box-shadow:inset 0px -1px ${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active};outline:none;}.Button.__jsx-style-dynamic-selector:disabled{border-color:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].inactive};pointer-events:none;}.Button.type-primary.__jsx-style-dynamic-selector{background-color:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default};color:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.text};}.Button.type-primary.__jsx-style-dynamic-selector:active{border-color:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active};background-color:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active};}.Button.type-primary.__jsx-style-dynamic-selector:disabled{background:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].inactive};}.Button.type-secondary.__jsx-style-dynamic-selector{background-color:transparent;color:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default};}.Button.type-secondary.__jsx-style-dynamic-selector:active{border-color:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active};color:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active};}.Button.type-secondary.__jsx-style-dynamic-selector:disabled{color:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].inactive};}.Button.type-link.__jsx-style-dynamic-selector{font-size:1em;color:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default};border-width:0;border-color:transparent;padding:0;}.Button.type-link.__jsx-style-dynamic-selector:hover,.Button.type-link.__jsx-style-dynamic-selector:focus{box-shadow:inset 0 -2px 0 ${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.default};}.Button.type-link.__jsx-style-dynamic-selector:active{border-bottom-color:transparent;color:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active};}.Button.type-link.__jsx-style-dynamic-selector:disabled{color:${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].inactive};}Button.size-large.__jsx-style-dynamic-selector{font-size:1.6rem;border-width:3px;padding:0.4rem 1.2rem;}Button.size-large.__jsx-style-dynamic-selector:hover{box-shadow:inset 0px -2px ${_constants_design_tokens__WEBPACK_IMPORTED_MODULE_2__[\"Colors\"].primary.active};}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rcmlzdGluYS9Qcm9qZWN0cy90cmlwbGUtY29yZS1jb21wb25lbnQtbGliL2NvbXBvbmVudHMvQnV0dG9uL2luZGV4LnRzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQmtCLEFBR2lDLEFBYTJCLEFBS1AsQUFPSSxBQUlKLEFBS0YsQUFJWCxBQUljLEFBS1AsQUFJdEIsQUFPMEMsQUFHeEIsQUFJSSxBQU1uQixBQUt1QyxjQXhCcEIsR0FvQm5CLEtBdkVSLE9Bc0MwQixFQXJDVyxDQTREVixFQVdkLEVBekJ4QixBQWtCQSxJQS9CQSxFQWhCc0IsQUFXMEIsQ0FhVixHQWpCRCxHQVpvQixDQXVDeEMsTUFNakIsQUFlQSxBQUdBLE1BekRBLEVBb0JBLENBYzJCLEdBUzNCLFNBNURrQixFQTBDbkIsQUFBQyxFQWxCQSxPQUtELEFBQUMsRUF1QlksR0FuRFUsT0FvRHRCLElBekNlLFNBVkksSUFXbkIsYUFWa0IsZ0JBQ08sNkdBQ0wsa0JBQ0YsZ0JBQ0QsZUFDakIiLCJmaWxlIjoiL1VzZXJzL2tyaXN0aW5hL1Byb2plY3RzL3RyaXBsZS1jb3JlLWNvbXBvbmVudC1saWIvY29tcG9uZW50cy9CdXR0b24vaW5kZXgudHN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBDb2xvcnMgfSBmcm9tIFwiLi4vLi4vY29uc3RhbnRzL2Rlc2lnbi10b2tlbnNcIjtcbmltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIHRleHQ6IHN0cmluZztcbiAgdHlwZT86IFwicHJpbWFyeVwiIHwgXCJzZWNvbmRhcnlcIiB8IFwibGlua1wiO1xuICBzaXplPzogXCJtZWRpdW1cIiB8IFwibGFyZ2VcIjtcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xufVxuXG5jb25zdCBCdXR0b246IFJlYWN0LkZDPFByb3BzPiA9ICh7IHRleHQsIHR5cGUgPSBcInByaW1hcnlcIiwgc2l6ZSA9IFwibWVkaXVtXCIsIGRpc2FibGVkID0gZmFsc2UgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8YnV0dG9uIGNsYXNzTmFtZT17Y2xhc3NOYW1lcyhcIkJ1dHRvblwiLCBcInR5cGUtXCIgKyB0eXBlLCBcInNpemUtXCIgKyBzaXplKX0gZGlzYWJsZWQ9e2Rpc2FibGVkfT5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLkJ1dHRvbiB7XG4gICAgICAgICAgcGFkZGluZzogMC4zcmVtIDAuOHJlbTtcbiAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgJHtDb2xvcnMucHJpbWFyeS5kZWZhdWx0fTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICAgIC5CdXR0b246aG92ZXIsIC5CdXR0b246Zm9jdXMge1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6ICR7Q29sb3JzLnByaW1hcnkuYWN0aXZlfTtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwcHggLTFweCAke0NvbG9ycy5wcmltYXJ5LmFjdGl2ZX07XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuQnV0dG9uOmRpc2FibGVkIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7Q29sb3JzLmluYWN0aXZlfTtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFRZUEVTICovXG4gICAgICAgIFxuICAgICAgICAuQnV0dG9uLnR5cGUtcHJpbWFyeSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcnMucHJpbWFyeS5kZWZhdWx0fTtcbiAgICAgICAgICBjb2xvcjogJHtDb2xvcnMucHJpbWFyeS50ZXh0fTtcbiAgICAgICAgfVxuICAgICAgICAuQnV0dG9uLnR5cGUtcHJpbWFyeTphY3RpdmUge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtDb2xvcnMucHJpbWFyeS5hY3RpdmV9O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Q29sb3JzLnByaW1hcnkuYWN0aXZlfTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lOlxuICAgICAgICB9XG4gICAgICAgIC5CdXR0b24udHlwZS1wcmltYXJ5OmRpc2FibGVkIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke0NvbG9ycy5pbmFjdGl2ZX07XG4gICAgICAgIH1cblxuICAgICAgICAuQnV0dG9uLnR5cGUtc2Vjb25kYXJ5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogJHtDb2xvcnMucHJpbWFyeS5kZWZhdWx0fTtcbiAgICAgICAgfVxuICAgICAgICAuQnV0dG9uLnR5cGUtc2Vjb25kYXJ5OmFjdGl2ZSB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke0NvbG9ycy5wcmltYXJ5LmFjdGl2ZX07XG4gICAgICAgICAgY29sb3I6ICR7Q29sb3JzLnByaW1hcnkuYWN0aXZlfTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lOlxuICAgICAgICB9XG4gICAgICAgIC5CdXR0b24udHlwZS1zZWNvbmRhcnk6ZGlzYWJsZWQge1xuICAgICAgICAgIGNvbG9yOiAke0NvbG9ycy5pbmFjdGl2ZX07XG4gICAgICAgIH1cblxuICAgICAgICAuQnV0dG9uLnR5cGUtbGluayB7XG4gICAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgICAgY29sb3I6ICR7Q29sb3JzLnByaW1hcnkuZGVmYXVsdH07XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAwO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgcGFkZGluZzogMDsgXG4gICAgICAgIH1cbiAgICAgICAgLkJ1dHRvbi50eXBlLWxpbms6aG92ZXIsIC5CdXR0b24udHlwZS1saW5rOmZvY3VzIHtcbiAgICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIC0ycHggMCAke0NvbG9ycy5wcmltYXJ5LmRlZmF1bHR9O1xuICAgICAgICB9XG4gICAgICAgIC5CdXR0b24udHlwZS1saW5rOmFjdGl2ZSB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgY29sb3I6ICR7Q29sb3JzLnByaW1hcnkuYWN0aXZlfTtcbiAgICAgICAgfVxuICAgICAgICAuQnV0dG9uLnR5cGUtbGluazpkaXNhYmxlZCB7XG4gICAgICAgICAgY29sb3I6ICR7Q29sb3JzLmluYWN0aXZlfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFNJWkVTICovXG5cbiAgICAgICAgQnV0dG9uLnNpemUtbGFyZ2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS42cmVtO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgICAgICAgIHBhZGRpbmc6IDAuNHJlbSAxLjJyZW07XG4gICAgICAgIH1cbiAgICAgICAgQnV0dG9uLnNpemUtbGFyZ2U6aG92ZXIge1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMnB4ICR7Q29sb3JzLnByaW1hcnkuYWN0aXZlfTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uOyJdfQ== */\n/*@ sourceURL=/Users/kristina/Projects/triple-core-component-lib/components/Button/index.tsx */`));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Button);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50c3g/YWFhMyJdLCJuYW1lcyI6WyJCdXR0b24iLCJ0ZXh0IiwidHlwZSIsInNpemUiLCJkaXNhYmxlZCIsIkNvbG9ycyIsInByaW1hcnkiLCJkZWZhdWx0IiwiYWN0aXZlIiwiaW5hY3RpdmUiLCJjbGFzc05hbWVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFTQSxNQUFNQSxNQUF1QixHQUFHLENBQUM7QUFBRUMsTUFBRjtBQUFRQyxNQUFJLEdBQUcsU0FBZjtBQUEwQkMsTUFBSSxHQUFHLFFBQWpDO0FBQTJDQyxVQUFRLEdBQUc7QUFBdEQsQ0FBRCxLQUFtRTtBQUNqRyxTQUNFLDREQUNFO0FBQXlFLFlBQVEsRUFBRUEsUUFBbkY7QUFBQSxnR0FPd0JDLCtEQUFNLENBQUNDLE9BQVAsQ0FBZUMsT0FQdkMsRUFrQjJCRiwrREFBTSxDQUFDQyxPQUFQLENBQWVFLE1BbEIxQyxFQW1CaUNILCtEQUFNLENBQUNDLE9BQVAsQ0FBZUUsTUFuQmhELEVBdUJvQkgsK0RBQU0sQ0FBQ0ksUUF2QjNCLEVBOEJ3QkosK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxPQTlCdkMsRUErQmFGLCtEQUFNLENBQUNDLE9BQVAsQ0FBZUwsSUEvQjVCLEVBa0NvQkksK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlRSxNQWxDbkMsRUFtQ3dCSCwrREFBTSxDQUFDQyxPQUFQLENBQWVFLE1BbkN2QyxFQXVDa0JILCtEQUFNLENBQUNJLFFBdkN6QixFQTRDYUosK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxPQTVDNUIsRUErQ29CRiwrREFBTSxDQUFDQyxPQUFQLENBQWVFLE1BL0NuQyxFQWdEYUgsK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlRSxNQWhENUIsRUFvRGFILCtEQUFNLENBQUNJLFFBcERwQixFQXlEYUosK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxPQXpENUIsRUErRGlDRiwrREFBTSxDQUFDQyxPQUFQLENBQWVDLE9BL0RoRCxFQW1FYUYsK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlRSxNQW5FNUIsRUFzRWFILCtEQUFNLENBQUNJLFFBdEVwQixFQWlGaUNKLCtEQUFNLENBQUNDLE9BQVAsQ0FBZUUsTUFqRmhELGNBQW1CRSxpREFBVSxDQUFDLFFBQUQsRUFBVyxVQUFVUixJQUFyQixFQUEyQixVQUFVQyxJQUFyQyxDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dGLElBREgsQ0FERjtBQUFBO0FBQUEsY0FRMEJJLCtEQUFNLENBQUNDLE9BQVAsQ0FBZUMsT0FSekMsRUFtQjZCRiwrREFBTSxDQUFDQyxPQUFQLENBQWVFLE1BbkI1QyxFQW9CbUNILCtEQUFNLENBQUNDLE9BQVAsQ0FBZUUsTUFwQmxELEVBd0JzQkgsK0RBQU0sQ0FBQ0ksUUF4QjdCLEVBK0IwQkosK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxPQS9CekMsRUFnQ2VGLCtEQUFNLENBQUNDLE9BQVAsQ0FBZUwsSUFoQzlCLEVBbUNzQkksK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlRSxNQW5DckMsRUFvQzBCSCwrREFBTSxDQUFDQyxPQUFQLENBQWVFLE1BcEN6QyxFQXdDb0JILCtEQUFNLENBQUNJLFFBeEMzQixFQTZDZUosK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxPQTdDOUIsRUFnRHNCRiwrREFBTSxDQUFDQyxPQUFQLENBQWVFLE1BaERyQyxFQWlEZUgsK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlRSxNQWpEOUIsRUFxRGVILCtEQUFNLENBQUNJLFFBckR0QixFQTBEZUosK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlQyxPQTFEOUIsRUFnRW1DRiwrREFBTSxDQUFDQyxPQUFQLENBQWVDLE9BaEVsRCxFQW9FZUYsK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlRSxNQXBFOUIsRUF1RWVILCtEQUFNLENBQUNJLFFBdkV0QixFQWtGbUNKLCtEQUFNLENBQUNDLE9BQVAsQ0FBZUUsTUFsRmxEO0FBQUE7QUFBQSw2RkFRMEJILCtEQUFNLENBQUNDLE9BQVAsQ0FBZUMsT0FSekMsa1ZBbUI2QkYsK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlRSxNQW5CNUMsOEJBb0JtQ0gsK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlRSxNQXBCbEQsNkVBd0JzQkgsK0RBQU0sQ0FBQ0ksUUF4QjdCLDRGQStCMEJKLCtEQUFNLENBQUNDLE9BQVAsQ0FBZUMsT0EvQnpDLFVBZ0NlRiwrREFBTSxDQUFDQyxPQUFQLENBQWVMLElBaEM5QiwyRUFtQ3NCSSwrREFBTSxDQUFDQyxPQUFQLENBQWVFLE1BbkNyQyxxQkFvQzBCSCwrREFBTSxDQUFDQyxPQUFQLENBQWVFLE1BcEN6QywyRUF3Q29CSCwrREFBTSxDQUFDSSxRQXhDM0IsNEZBNkNlSiwrREFBTSxDQUFDQyxPQUFQLENBQWVDLE9BN0M5Qiw2RUFnRHNCRiwrREFBTSxDQUFDQyxPQUFQLENBQWVFLE1BaERyQyxVQWlEZUgsK0RBQU0sQ0FBQ0MsT0FBUCxDQUFlRSxNQWpEOUIsd0VBcURlSCwrREFBTSxDQUFDSSxRQXJEdEIsd0VBMERlSiwrREFBTSxDQUFDQyxPQUFQLENBQWVDLE9BMUQ5QiwyTEFnRW1DRiwrREFBTSxDQUFDQyxPQUFQLENBQWVDLE9BaEVsRCxpR0FvRWVGLCtEQUFNLENBQUNDLE9BQVAsQ0FBZUUsTUFwRTlCLG1FQXVFZUgsK0RBQU0sQ0FBQ0ksUUF2RXRCLDRMQWtGbUNKLCtEQUFNLENBQUNDLE9BQVAsQ0FBZUUsTUFsRmxEOztnR0FBQSxFQURGO0FBd0ZELENBekZEOztBQTJGZVIscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0J1dHRvbi9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IENvbG9ycyB9IGZyb20gXCIuLi8uLi9jb25zdGFudHMvZGVzaWduLXRva2Vuc1wiO1xuaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcblxuaW50ZXJmYWNlIFByb3BzIHtcbiAgdGV4dDogc3RyaW5nO1xuICB0eXBlPzogXCJwcmltYXJ5XCIgfCBcInNlY29uZGFyeVwiIHwgXCJsaW5rXCI7XG4gIHNpemU/OiBcIm1lZGl1bVwiIHwgXCJsYXJnZVwiO1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG59XG5cbmNvbnN0IEJ1dHRvbjogUmVhY3QuRkM8UHJvcHM+ID0gKHsgdGV4dCwgdHlwZSA9IFwicHJpbWFyeVwiLCBzaXplID0gXCJtZWRpdW1cIiwgZGlzYWJsZWQgPSBmYWxzZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPXtjbGFzc05hbWVzKFwiQnV0dG9uXCIsIFwidHlwZS1cIiArIHR5cGUsIFwic2l6ZS1cIiArIHNpemUpfSBkaXNhYmxlZD17ZGlzYWJsZWR9PlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAuQnV0dG9uIHtcbiAgICAgICAgICBwYWRkaW5nOiAwLjNyZW0gMC44cmVtO1xuICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAke0NvbG9ycy5wcmltYXJ5LmRlZmF1bHR9O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMXJlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLkJ1dHRvbjpob3ZlciwgLkJ1dHRvbjpmb2N1cyB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJHtDb2xvcnMucHJpbWFyeS5hY3RpdmV9O1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDBweCAtMXB4ICR7Q29sb3JzLnByaW1hcnkuYWN0aXZlfTtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICAgIC5CdXR0b246ZGlzYWJsZWQge1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogJHtDb2xvcnMuaW5hY3RpdmV9O1xuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLyogVFlQRVMgKi9cbiAgICAgICAgXG4gICAgICAgIC5CdXR0b24udHlwZS1wcmltYXJ5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke0NvbG9ycy5wcmltYXJ5LmRlZmF1bHR9O1xuICAgICAgICAgIGNvbG9yOiAke0NvbG9ycy5wcmltYXJ5LnRleHR9O1xuICAgICAgICB9XG4gICAgICAgIC5CdXR0b24udHlwZS1wcmltYXJ5OmFjdGl2ZSB7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiAke0NvbG9ycy5wcmltYXJ5LmFjdGl2ZX07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtDb2xvcnMucHJpbWFyeS5hY3RpdmV9O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU6XG4gICAgICAgIH1cbiAgICAgICAgLkJ1dHRvbi50eXBlLXByaW1hcnk6ZGlzYWJsZWQge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7Q29sb3JzLmluYWN0aXZlfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5CdXR0b24udHlwZS1zZWNvbmRhcnkge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiAke0NvbG9ycy5wcmltYXJ5LmRlZmF1bHR9O1xuICAgICAgICB9XG4gICAgICAgIC5CdXR0b24udHlwZS1zZWNvbmRhcnk6YWN0aXZlIHtcbiAgICAgICAgICBib3JkZXItY29sb3I6ICR7Q29sb3JzLnByaW1hcnkuYWN0aXZlfTtcbiAgICAgICAgICBjb2xvcjogJHtDb2xvcnMucHJpbWFyeS5hY3RpdmV9O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU6XG4gICAgICAgIH1cbiAgICAgICAgLkJ1dHRvbi50eXBlLXNlY29uZGFyeTpkaXNhYmxlZCB7XG4gICAgICAgICAgY29sb3I6ICR7Q29sb3JzLmluYWN0aXZlfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5CdXR0b24udHlwZS1saW5rIHtcbiAgICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgICBjb2xvcjogJHtDb2xvcnMucHJpbWFyeS5kZWZhdWx0fTtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDA7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBwYWRkaW5nOiAwOyBcbiAgICAgICAgfVxuICAgICAgICAuQnV0dG9uLnR5cGUtbGluazpob3ZlciwgLkJ1dHRvbi50eXBlLWxpbms6Zm9jdXMge1xuICAgICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgLTJweCAwICR7Q29sb3JzLnByaW1hcnkuZGVmYXVsdH07XG4gICAgICAgIH1cbiAgICAgICAgLkJ1dHRvbi50eXBlLWxpbms6YWN0aXZlIHtcbiAgICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBjb2xvcjogJHtDb2xvcnMucHJpbWFyeS5hY3RpdmV9O1xuICAgICAgICB9XG4gICAgICAgIC5CdXR0b24udHlwZS1saW5rOmRpc2FibGVkIHtcbiAgICAgICAgICBjb2xvcjogJHtDb2xvcnMuaW5hY3RpdmV9O1xuICAgICAgICB9XG5cbiAgICAgICAgLyogU0laRVMgKi9cblxuICAgICAgICBCdXR0b24uc2l6ZS1sYXJnZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjZyZW07XG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgICAgICAgcGFkZGluZzogMC40cmVtIDEuMnJlbTtcbiAgICAgICAgfVxuICAgICAgICBCdXR0b24uc2l6ZS1sYXJnZTpob3ZlciB7XG4gICAgICAgICAgYm94LXNoYWRvdzogaW5zZXQgMHB4IC0ycHggJHtDb2xvcnMucHJpbWFyeS5hY3RpdmV9O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCdXR0b247Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Button/index.tsx\n");

/***/ }),

/***/ "./constants/design-tokens.ts":
/*!************************************!*\
  !*** ./constants/design-tokens.ts ***!
  \************************************/
/*! exports provided: Colors */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Colors\", function() { return Colors; });\nconst Colors = {\n  text: '#111',\n  background: '#EBEBEB',\n  primary: {\n    default: '#7F2A68',\n    active: '#60104A',\n    text: '#fff'\n  },\n  inactive: '#BFBFBF'\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb25zdGFudHMvZGVzaWduLXRva2Vucy50cz8wNTY0Il0sIm5hbWVzIjpbIkNvbG9ycyIsInRleHQiLCJiYWNrZ3JvdW5kIiwicHJpbWFyeSIsImRlZmF1bHQiLCJhY3RpdmUiLCJpbmFjdGl2ZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFPLE1BQU1BLE1BQU0sR0FBRztBQUNsQkMsTUFBSSxFQUFFLE1BRFk7QUFFbEJDLFlBQVUsRUFBRSxTQUZNO0FBR2xCQyxTQUFPLEVBQUU7QUFDTEMsV0FBTyxFQUFFLFNBREo7QUFFTEMsVUFBTSxFQUFFLFNBRkg7QUFHTEosUUFBSSxFQUFFO0FBSEQsR0FIUztBQVFsQkssVUFBUSxFQUFFO0FBUlEsQ0FBZiIsImZpbGUiOiIuL2NvbnN0YW50cy9kZXNpZ24tdG9rZW5zLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IENvbG9ycyA9IHtcbiAgICB0ZXh0OiAnIzExMScsXG4gICAgYmFja2dyb3VuZDogJyNFQkVCRUInLFxuICAgIHByaW1hcnk6IHtcbiAgICAgICAgZGVmYXVsdDogJyM3RjJBNjgnLFxuICAgICAgICBhY3RpdmU6ICcjNjAxMDRBJyxcbiAgICAgICAgdGV4dDogJyNmZmYnXG4gICAgfSxcbiAgICBpbmFjdGl2ZTogJyNCRkJGQkYnXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./constants/design-tokens.ts\n");

/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Button */ \"./components/Button/index.tsx\");\nvar _jsxFileName = \"/Users/kristina/Projects/triple-core-component-lib/pages/index.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction Home() {\n  return __jsx(\"div\", {\n    className: \"container\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, __jsx(\"title\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 9\n    }\n  }, \"Create Next App\"), __jsx(\"link\", {\n    rel: \"icon\",\n    href: \"/favicon.ico\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  })), __jsx(\"main\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 7\n    }\n  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    text: \"foo\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  })), __jsx(\"footer\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }\n  }));\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC50c3g/ZGI3NiJdLCJuYW1lcyI6WyJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVlLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0IsU0FDRTtBQUFLLGFBQVMsRUFBQyxXQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBRUU7QUFBTSxPQUFHLEVBQUMsTUFBVjtBQUFpQixRQUFJLEVBQUMsY0FBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBREYsRUFPRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UsTUFBQywwREFBRDtBQUFRLFFBQUksRUFBQyxLQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixDQVBGLEVBV0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQVhGLENBREY7QUFrQkQiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICBcbiAgICAgIFxuICAgICAgPG1haW4+XG4gICAgICAgIDxCdXR0b24gdGV4dD1cImZvb1wiLz5cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgXG4gICAgICA8L2Zvb3Rlcj5cblxuICAgIDwvZGl2PlxuICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kristina/Projects/triple-core-component-lib/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "classnames":
/*!*****************************!*\
  !*** external "classnames" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"classnames\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCI/YWFhYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJjbGFzc25hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3NuYW1lc1wiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///classnames\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"styled-jsx/style\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzdHlsZWQtanN4L3N0eWxlXCI/MmJiYiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJzdHlsZWQtanN4L3N0eWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3R5bGVkLWpzeC9zdHlsZVwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///styled-jsx/style\n");

/***/ })

/******/ });