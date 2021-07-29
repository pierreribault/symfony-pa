(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js":
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_app_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_js_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/js/map.js */ "./assets/js/map.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.min */ "./node_modules/@fortawesome/fontawesome-free/js/all.min.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_min__WEBPACK_IMPORTED_MODULE_2__);
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */
// any CSS you import will output into a single css file (app.css in this case)



var dropdown = document.getElementById("account-dropdown");
console.log(dropdown);
dropdown.addEventListener("click", function () {
  var menu = document.getElementById("account-menu");
  menu.classList.toggle("hidden");
});

/***/ }),

/***/ "./assets/styles/app.scss":
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
/***/ (() => {

throw new Error("Module build failed (from ./node_modules/mini-css-extract-plugin/dist/loader.js):\nModuleError: Module Error (from ./node_modules/sass-loader/dist/cjs.js):\nMissing binding /Users/florianpaumier/Documents/dev/symfony-pa/node_modules/node-sass/vendor/darwin-x64-88/binding.node\nNode Sass could not find a binding for your current environment: OS X 64-bit with Node.js 15.x\n\nFound bindings for the following environments:\n\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at Object.emitError (/Users/florianpaumier/Documents/dev/symfony-pa/node_modules/webpack/lib/NormalModule.js:550:6)\n    at getSassImplementation (/Users/florianpaumier/Documents/dev/symfony-pa/node_modules/sass-loader/dist/utils.js:54:21)\n    at Object.loader (/Users/florianpaumier/Documents/dev/symfony-pa/node_modules/sass-loader/dist/index.js:27:59)");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_core-js_internals_array-species-create_js-node_modules_core-js_internals-fc1c90","vendors-node_modules_axios_index_js-node_modules_core-js_modules_es_array_index-of_js-node_mo-2de5d8","vendors-node_modules_fortawesome_fontawesome-free_js_all_min_js-node_modules_core-js_internal-8666b7","assets_js_map_js"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIl0sIm5hbWVzIjpbImRyb3Bkb3duIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNvbnNvbGUiLCJsb2ciLCJhZGRFdmVudExpc3RlbmVyIiwibWVudSIsImNsYXNzTGlzdCIsInRvZ2dsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFHQSxJQUFNQSxRQUFRLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixrQkFBeEIsQ0FBakI7QUFDQUMsT0FBTyxDQUFDQyxHQUFSLENBQVlKLFFBQVo7QUFDQUEsUUFBUSxDQUFDSyxnQkFBVCxDQUEwQixPQUExQixFQUFtQyxZQUFNO0FBQ3JDLE1BQU1DLElBQUksR0FBR0wsUUFBUSxDQUFDQyxjQUFULENBQXdCLGNBQXhCLENBQWI7QUFDQUksTUFBSSxDQUFDQyxTQUFMLENBQWVDLE1BQWYsQ0FBc0IsUUFBdEI7QUFDSCxDQUhELEUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIFdlbGNvbWUgdG8geW91ciBhcHAncyBtYWluIEphdmFTY3JpcHQgZmlsZSFcbiAqXG4gKiBXZSByZWNvbW1lbmQgaW5jbHVkaW5nIHRoZSBidWlsdCB2ZXJzaW9uIG9mIHRoaXMgSmF2YVNjcmlwdCBmaWxlXG4gKiAoYW5kIGl0cyBDU1MgZmlsZSkgaW4geW91ciBiYXNlIGxheW91dCAoYmFzZS5odG1sLnR3aWcpLlxuICovXG5cbi8vIGFueSBDU1MgeW91IGltcG9ydCB3aWxsIG91dHB1dCBpbnRvIGEgc2luZ2xlIGNzcyBmaWxlIChhcHAuY3NzIGluIHRoaXMgY2FzZSlcbmltcG9ydCAnLi9zdHlsZXMvYXBwLnNjc3MnO1xuXG5pbXBvcnQgJy4uL2Fzc2V0cy9qcy9tYXAuanMnXG5cbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLm1pbidcblxuXG5jb25zdCBkcm9wZG93biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjb3VudC1kcm9wZG93blwiKVxuY29uc29sZS5sb2coZHJvcGRvd24pXG5kcm9wZG93bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFjY291bnQtbWVudVwiKVxuICAgIG1lbnUuY2xhc3NMaXN0LnRvZ2dsZShcImhpZGRlblwiKVxufSlcbiJdLCJzb3VyY2VSb290IjoiIn0=