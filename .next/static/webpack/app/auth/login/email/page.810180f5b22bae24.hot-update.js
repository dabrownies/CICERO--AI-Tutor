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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("/* provided dependency */ var process = __webpack_require__(/*! process */ \"(app-pages-browser)/./node_modules/next/dist/build/polyfills/process.js\");\n// Import the functions you need from the SDKs you need\n//import { initializeApp } from \"firebase/app\";\n//import { getAuth} from \"firebase/auth\";\n//import { getFirestore } from \"firebase/firestore\";\nconst firebaseConfig = {\n    apiKey: process.env.NEXT_FIREBASE_API_KEY,\n    authDomain: process.env.NEXT_FIREBASE_AUTH_DOMAIN,\n    projectId: process.env.NEXT_FIREBASE_PROJECT_ID,\n    storageBucket: process.env.NEXT_FIREBASE_STORAGE_BUCKET,\n    messagingSenderId: process.env.NEXT_FIREBASE_MESSAGING_SENDER_ID,\n    appId: process.env.NEXT_FIREBASE_APP_ID,\n    measurementId: process.env.NEXT_FIREBASE_MEASUREMENT_ID\n};\n// Initialize Firebase\n//const app = initializeApp(firebaseConfig);\n//const db = getFirestore(app);\n//const analytics = getAnalytics(app);\n//const auth = getAuth(app);\nconsole.log(firebaseConfig) //export { app, db, auth };\n;\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2ZpcmViYXNlLmpzIiwibWFwcGluZ3MiOiI7QUFBQSx1REFBdUQ7QUFDdkQsK0NBQStDO0FBQy9DLHlDQUF5QztBQUN6QyxvREFBb0Q7QUFFcEQsTUFBTUEsaUJBQWlCO0lBQ3JCQyxRQUFRQyxPQUFPQSxDQUFDQyxHQUFHLENBQUNDLHFCQUFxQjtJQUN6Q0MsWUFBWUgsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDRyx5QkFBeUI7SUFDakRDLFdBQVdMLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ0ssd0JBQXdCO0lBQy9DQyxlQUFlUCxPQUFPQSxDQUFDQyxHQUFHLENBQUNPLDRCQUE0QjtJQUN2REMsbUJBQW1CVCxPQUFPQSxDQUFDQyxHQUFHLENBQUNTLGlDQUFpQztJQUNoRUMsT0FBT1gsT0FBT0EsQ0FBQ0MsR0FBRyxDQUFDVyxvQkFBb0I7SUFDdkNDLGVBQWViLE9BQU9BLENBQUNDLEdBQUcsQ0FBQ2EsNEJBQTRCO0FBQ3pEO0FBQ0Esc0JBQXNCO0FBQ3RCLDRDQUE0QztBQUM1QywrQkFBK0I7QUFDL0Isc0NBQXNDO0FBQ3RDLDRCQUE0QjtBQUU1QkMsUUFBUUMsR0FBRyxDQUFDbEIsZ0JBRVosMkJBQTJCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2ZpcmViYXNlLmpzPzRkOTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0IHRoZSBmdW5jdGlvbnMgeW91IG5lZWQgZnJvbSB0aGUgU0RLcyB5b3UgbmVlZFxuLy9pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuLy9pbXBvcnQgeyBnZXRBdXRofSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xuLy9pbXBvcnQgeyBnZXRGaXJlc3RvcmUgfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XG5cbmNvbnN0IGZpcmViYXNlQ29uZmlnID0ge1xuICBhcGlLZXk6IHByb2Nlc3MuZW52Lk5FWFRfRklSRUJBU0VfQVBJX0tFWSxcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuTkVYVF9GSVJFQkFTRV9BVVRIX0RPTUFJTixcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5ORVhUX0ZJUkVCQVNFX1BST0pFQ1RfSUQsXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52Lk5FWFRfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQsXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5ORVhUX0ZJUkVCQVNFX01FU1NBR0lOR19TRU5ERVJfSUQsXG4gIGFwcElkOiBwcm9jZXNzLmVudi5ORVhUX0ZJUkVCQVNFX0FQUF9JRCxcbiAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYuTkVYVF9GSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCxcbn07XG4vLyBJbml0aWFsaXplIEZpcmViYXNlXG4vL2NvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuLy9jb25zdCBkYiA9IGdldEZpcmVzdG9yZShhcHApO1xuLy9jb25zdCBhbmFseXRpY3MgPSBnZXRBbmFseXRpY3MoYXBwKTtcbi8vY29uc3QgYXV0aCA9IGdldEF1dGgoYXBwKTtcblxuY29uc29sZS5sb2coZmlyZWJhc2VDb25maWcpXG5cbi8vZXhwb3J0IHsgYXBwLCBkYiwgYXV0aCB9O1xuIl0sIm5hbWVzIjpbImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwicHJvY2VzcyIsImVudiIsIk5FWFRfRklSRUJBU0VfQVBJX0tFWSIsImF1dGhEb21haW4iLCJORVhUX0ZJUkVCQVNFX0FVVEhfRE9NQUlOIiwicHJvamVjdElkIiwiTkVYVF9GSVJFQkFTRV9QUk9KRUNUX0lEIiwic3RvcmFnZUJ1Y2tldCIsIk5FWFRfRklSRUJBU0VfU1RPUkFHRV9CVUNLRVQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsIk5FWFRfRklSRUJBU0VfTUVTU0FHSU5HX1NFTkRFUl9JRCIsImFwcElkIiwiTkVYVF9GSVJFQkFTRV9BUFBfSUQiLCJtZWFzdXJlbWVudElkIiwiTkVYVF9GSVJFQkFTRV9NRUFTVVJFTUVOVF9JRCIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./firebase.js\n"));

/***/ })

});