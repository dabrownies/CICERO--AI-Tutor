"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/login/email/page",{

/***/ "(app-pages-browser)/./firebase.js":
/*!*********************!*\
  !*** ./firebase.js ***!
  \*********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"(app-pages-browser)/./node_modules/firebase/app/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n//Import the functions you need from the SDKs you need\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyCvVu-V-rCCcHG83HoNuN0NKnTuQq4T4wM\",\n    authDomain: process.env.NEXT_FIREBASE_AUTH_DOMAIN,\n    projectId: process.env.NEXT_FIREBASE_PROJECT_ID,\n    storageBucket: process.env.NEXT_FIREBASE_STORAGE_BUCKET,\n    messagingSenderId: process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID,\n    appId: process.env.NEXT_FIREBASE_APP_ID,\n    measurementId: process.env.NEXT_FIREBASE_MEASUREMENT_ID\n};\n// Initialize Firebase\n//const app = initializeApp(firebaseConfig);\n//const db = getFirestore(app);\n//const analytics = getAnalytics(app);\n//const auth = getAuth(app);\nconsole.log(firebaseConfig) //export { app, db, auth };\n;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2ZpcmViYXNlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0RBQXNEO0FBQ1Q7QUFDTjtBQUNXO0FBRWxELE1BQU1HLGlCQUFpQjtJQUNyQkMsUUFBUTtJQUNSQyxZQUFZQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLHlCQUF5QjtJQUNqREMsV0FBV0gsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDRyx3QkFBd0I7SUFDL0NDLGVBQWVMLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0ssNEJBQTRCO0lBQ3ZEQyxtQkFBbUJQLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ08saUNBQWlDO0lBQ2hFQyxPQUFPVCxPQUFPQSxDQUFDQyxHQUFHLENBQUNTLG9CQUFvQjtJQUN2Q0MsZUFBZVgsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDVyw0QkFBNEI7QUFDekQ7QUFFQSxzQkFBc0I7QUFDdEIsNENBQTRDO0FBQzVDLCtCQUErQjtBQUMvQixzQ0FBc0M7QUFDdEMsNEJBQTRCO0FBRTVCQyxRQUFRQyxHQUFHLENBQUNqQixnQkFFWiwyQkFBMkIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UuanM/NGQ5NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0ltcG9ydCB0aGUgZnVuY3Rpb25zIHlvdSBuZWVkIGZyb20gdGhlIFNES3MgeW91IG5lZWRcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XG5pbXBvcnQgeyBnZXRBdXRofSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuaW1wb3J0IHsgZ2V0RmlyZXN0b3JlIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeUN2VnUtVi1yQ0NjSEc4M0hvTnVOME5LblR1UXE0VDR3TVwiLFxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5ORVhUX0ZJUkVCQVNFX0FVVEhfRE9NQUlOLFxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52Lk5FWFRfRklSRUJBU0VfUFJPSkVDVF9JRCxcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuTkVYVF9GSVJFQkFTRV9TVE9SQUdFX0JVQ0tFVCxcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lk5FWFRfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCxcbiAgYXBwSWQ6IHByb2Nlc3MuZW52Lk5FWFRfRklSRUJBU0VfQVBQX0lELFxuICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5ORVhUX0ZJUkVCQVNFX01FQVNVUkVNRU5UX0lELFxufTtcblxuLy8gSW5pdGlhbGl6ZSBGaXJlYmFzZVxuLy9jb25zdCBhcHAgPSBpbml0aWFsaXplQXBwKGZpcmViYXNlQ29uZmlnKTtcbi8vY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoYXBwKTtcbi8vY29uc3QgYW5hbHl0aWNzID0gZ2V0QW5hbHl0aWNzKGFwcCk7XG4vL2NvbnN0IGF1dGggPSBnZXRBdXRoKGFwcCk7XG5cbmNvbnNvbGUubG9nKGZpcmViYXNlQ29uZmlnKVxuXG4vL2V4cG9ydCB7IGFwcCwgZGIsIGF1dGggfTtcbiJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0QXV0aCIsImdldEZpcmVzdG9yZSIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2Nlc3MiLCJlbnYiLCJORVhUX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9GSVJFQkFTRV9BUFBfSUQiLCJtZWFzdXJlbWVudElkIiwiTkVYVF9GSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./firebase.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/firebase/app/dist/esm/index.esm.js":
/*!*********************************************************!*\
  !*** ./node_modules/firebase/app/dist/esm/index.esm.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   FirebaseError: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.FirebaseError; },\n/* harmony export */   SDK_VERSION: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION; },\n/* harmony export */   _DEFAULT_ENTRY_NAME: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._DEFAULT_ENTRY_NAME; },\n/* harmony export */   _addComponent: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addComponent; },\n/* harmony export */   _addOrOverwriteComponent: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addOrOverwriteComponent; },\n/* harmony export */   _apps: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._apps; },\n/* harmony export */   _clearComponents: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._clearComponents; },\n/* harmony export */   _components: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._components; },\n/* harmony export */   _getProvider: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider; },\n/* harmony export */   _isFirebaseApp: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._isFirebaseApp; },\n/* harmony export */   _isFirebaseServerApp: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._isFirebaseServerApp; },\n/* harmony export */   _registerComponent: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent; },\n/* harmony export */   _removeServiceInstance: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._removeServiceInstance; },\n/* harmony export */   _serverApps: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._serverApps; },\n/* harmony export */   deleteApp: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.deleteApp; },\n/* harmony export */   getApp: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp; },\n/* harmony export */   getApps: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps; },\n/* harmony export */   initializeApp: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp; },\n/* harmony export */   initializeServerApp: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeServerApp; },\n/* harmony export */   onLog: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.onLog; },\n/* harmony export */   registerVersion: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion; },\n/* harmony export */   setLogLevel: function() { return /* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.setLogLevel; }\n/* harmony export */ });\n/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ \"(app-pages-browser)/./node_modules/@firebase/app/dist/esm/index.esm2017.js\");\n\n\n\nvar name = \"firebase\";\nvar version = \"10.13.2\";\n\n/**\r\n * @license\r\n * Copyright 2020 Google LLC\r\n *\r\n * Licensed under the Apache License, Version 2.0 (the \"License\");\r\n * you may not use this file except in compliance with the License.\r\n * You may obtain a copy of the License at\r\n *\r\n *   http://www.apache.org/licenses/LICENSE-2.0\r\n *\r\n * Unless required by applicable law or agreed to in writing, software\r\n * distributed under the License is distributed on an \"AS IS\" BASIS,\r\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\r\n * See the License for the specific language governing permissions and\r\n * limitations under the License.\r\n */\r\n(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'app');\n//# sourceMappingURL=index.esm.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9maXJlYmFzZS9hcHAvZGlzdC9lc20vaW5kZXguZXNtLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQWdEO0FBQ2xCOztBQUU5QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOERBQWU7QUFDZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvYXBwL2Rpc3QvZXNtL2luZGV4LmVzbS5qcz8zMDBkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlZ2lzdGVyVmVyc2lvbiB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuZXhwb3J0ICogZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5cbnZhciBuYW1lID0gXCJmaXJlYmFzZVwiO1xudmFyIHZlcnNpb24gPSBcIjEwLjEzLjJcIjtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxucmVnaXN0ZXJWZXJzaW9uKG5hbWUsIHZlcnNpb24sICdhcHAnKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/firebase/app/dist/esm/index.esm.js\n"));

/***/ })

});