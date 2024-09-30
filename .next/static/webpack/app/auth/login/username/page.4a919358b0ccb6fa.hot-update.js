"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/auth/login/username/page",{

/***/ "(app-pages-browser)/./components/auth/LoginFormUsername.jsx":
/*!***********************************************!*\
  !*** ./components/auth/LoginFormUsername.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_auth_card_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/auth/card-wrapper */ \"(app-pages-browser)/./components/auth/card-wrapper.jsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./components/ui/form.jsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-toast */ \"(app-pages-browser)/./components/hooks/use-toast.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst loginSchema = zod__WEBPACK_IMPORTED_MODULE_12__.z.object({\n    username: zod__WEBPACK_IMPORTED_MODULE_12__.z.string().min(1, \"Username is required\"),\n    password: zod__WEBPACK_IMPORTED_MODULE_12__.z.string().min(8, \"Password must be at least 8 characters\")\n});\nconst LoginFormUsername = ()=>{\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { toast } = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const form = react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(loginSchema),\n        mode: \"onBlur\",\n        defaultValues: {\n            username: \"\",\n            password: \"\"\n        }\n    });\n    const onSubmit = async (data)=>{\n        setIsLoading(true);\n        try {\n            // Query Firestore to get the user document by username\n            const usersRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_9__.db, \"users\");\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.query)(usersRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.where)(\"username\", \"==\", data.username));\n            console.log(\"Created query\");\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.getDocs)(q);\n            console.log(\"Got query snapshot\");\n            if (querySnapshot.empty) {\n                toast({\n                    title: \"Login failed\",\n                    description: \"User not found. Please check your username.\",\n                    variant: \"destructive\",\n                    duration: 1200\n                });\n                setIsLoading(false);\n                window.location.reload();\n                return;\n            }\n            const userDoc = querySnapshot.docs[0];\n            if (!userDoc) {\n                toast({\n                    title: \"Login failed\",\n                    description: \"User not found. Please check your username.\",\n                    variant: \"destructive\",\n                    duration: 1200\n                });\n                window.location.reload();\n                return;\n            }\n            const userData = userDoc.data();\n            //Get the user UID from the userDocument\n            const userUID = userDoc.id;\n            // Sign in with email and password\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_9__.auth, userData.email, data.password).then((userCredential)=>{\n                const signedInUserUID = userCredential.user.uid;\n                if (signedInUserUID !== userUID) {\n                    toast({\n                        title: \"Login failed\",\n                        description: \"Invalid username or password\",\n                        variant: \"destructive\",\n                        duration: 1200\n                    });\n                    setTimeout(()=>{\n                        window.location.reload();\n                    });\n                } else {\n                    toast({\n                        title: \"Login successful\",\n                        description: \"You have been logged in successfully.\",\n                        variant: \"success\",\n                        duration: 1200\n                    });\n                    form.reset();\n                    setTimeout(()=>{\n                        router.push(\"/mainScreen\");\n                    }, 2000);\n                }\n            });\n        } catch (error) {\n            console.error(\"Error logging in:\", error);\n            let errorMessage = \"An error occurred during login\";\n            if (error.code === \"auth/user-not-found\" || error.message === \"User not found\") {\n                errorMessage = \"User not found. Please check your username.\";\n            } else if (error.code === \"auth/wrong-password\") {\n                errorMessage = \"Invalid username or password\";\n            }\n            toast({\n                title: \"Login failed\",\n                description: errorMessage,\n                variant: \"destructive\",\n                duration: 3000\n            });\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth_card_wrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        label: \"Login\",\n        title: \"Welcome Back!\",\n        backButtonHref: \"/auth/register\",\n        backButtonLabel: \"Don't have an account? Sign up Here.\",\n        usernameLoginHref: \"/auth/login/email\",\n        usernameLoginLabel: \"Login with email\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4 md:p-6 lg:p-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                ...form,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: form.handleSubmit(onSubmit),\n                    className: \"space-y-6 flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormField, {\n                            control: form.control,\n                            name: \"username\",\n                            render: (param)=>{\n                                let { field } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                            children: \"Username\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 147,\n                                            columnNumber: 17\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                                placeholder: \"Enter your username\",\n                                                ...field\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                                lineNumber: 149,\n                                                columnNumber: 19\n                                            }, void 0)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 148,\n                                            columnNumber: 17\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormMessage, {\n                                            className: \"error-message\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 151,\n                                            columnNumber: 17\n                                        }, void 0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                    lineNumber: 146,\n                                    columnNumber: 15\n                                }, void 0);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                            lineNumber: 142,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormField, {\n                            control: form.control,\n                            name: \"password\",\n                            render: (param)=>{\n                                let { field } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                            children: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 160,\n                                            columnNumber: 17\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                                type: \"password\",\n                                                placeholder: \"Enter your password\",\n                                                ...field\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                                lineNumber: 162,\n                                                columnNumber: 19\n                                            }, void 0)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 161,\n                                            columnNumber: 17\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormMessage, {\n                                            className: \"error-message\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 164,\n                                            columnNumber: 17\n                                        }, void 0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                    lineNumber: 159,\n                                    columnNumber: 15\n                                }, void 0);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                            lineNumber: 155,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            type: \"submit\",\n                            className: \"w-full\",\n                            disabled: isLoading,\n                            children: isLoading ? \"Loading...\" : \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                            lineNumber: 168,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                    lineNumber: 141,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                lineNumber: 140,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n            lineNumber: 139,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n        lineNumber: 131,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginFormUsername, \"fUhqugOuTf7O4N6zql7xPrNb+i8=\", false, function() {\n    return [\n        _hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm\n    ];\n});\n_c = LoginFormUsername;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginFormUsername);\nvar _c;\n$RefreshReg$(_c, \"LoginFormUsername\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXV0aC9Mb2dpbkZvcm1Vc2VybmFtZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWlEO0FBQ2hCO0FBQ1Q7QUFDOEI7QUFDVjtBQUNhO0FBUTNCO0FBQ2tCO0FBQ0Y7QUFDQTtBQUVSO0FBQ3FCO0FBQ1k7QUFFdkUsTUFBTXNCLGNBQWNwQixtQ0FBQ0EsQ0FBQ3FCLE1BQU0sQ0FBQztJQUMzQkMsVUFBVXRCLG1DQUFDQSxDQUFDdUIsTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBRztJQUM1QkMsVUFBVXpCLG1DQUFDQSxDQUFDdUIsTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBRztBQUM5QjtBQUVBLE1BQU1FLG9CQUFvQjs7SUFDeEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLEVBQUU4QixLQUFLLEVBQUUsR0FBR2pCLDBEQUFRQTtJQUMxQixNQUFNa0IsU0FBUzVCLDBEQUFTQTtJQUV4QixNQUFNNkIsT0FBT2pDLHFEQUFxQixDQUFDO1FBQ2pDbUMsVUFBVWhDLG9FQUFXQSxDQUFDbUI7UUFDdEJjLE1BQU07UUFDTkMsZUFBZTtZQUNiYixVQUFVO1lBQ1ZHLFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTVcsV0FBVyxPQUFPQztRQUN0QlQsYUFBYTtRQUNiLElBQUk7WUFDRix1REFBdUQ7WUFDdkQsTUFBTVUsV0FBV3RCLCtEQUFVQSxDQUFDRix5Q0FBRUEsRUFBRTtZQUNoQyxNQUFNeUIsSUFBSXRCLDBEQUFLQSxDQUFDcUIsVUFBVXBCLDBEQUFLQSxDQUFDLFlBQVksTUFBTW1CLEtBQUtmLFFBQVE7WUFDL0RrQixRQUFRQyxHQUFHLENBQUM7WUFDWixNQUFNQyxnQkFBZ0IsTUFBTXZCLDREQUFPQSxDQUFDb0I7WUFDcENDLFFBQVFDLEdBQUcsQ0FBQztZQUdaLElBQUlDLGNBQWNDLEtBQUssRUFBRTtnQkFDdkJkLE1BQU07b0JBQ0pl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QUFLO2dEQUFXRCxhQUFZO2dEQUF1QixHQUFHRCxLQUFLOzs7Ozs7Ozs7OztzREFFcEUsOERBQUN4RSw0REFBV0E7NENBQUNtRSxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7c0NBSTdCLDhEQUFDakUseURBQU1BOzRCQUFDd0UsTUFBSzs0QkFBU1AsV0FBVTs0QkFBU1EsVUFBVXhEO3NDQUNoREEsWUFBWSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPeEM7R0FsSk1EOztRQUVjZCxzREFBUUE7UUFDWFYsc0RBQVNBO1FBRVhKLHFEQUFxQmtDOzs7S0FMOUJOO0FBb0pOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luRm9ybVVzZXJuYW1lLmpzeD9kYzFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdEhvb2tGb3JtIGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBDYXJkV3JhcHBlciBmcm9tIFwiQC9jb21wb25lbnRzL2F1dGgvY2FyZC13cmFwcGVyXCI7XG5pbXBvcnQge1xuICBGb3JtLFxuICBGb3JtSXRlbSxcbiAgRm9ybUxhYmVsLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybU1lc3NhZ2UsXG4gIEZvcm1GaWVsZCxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9mb3JtXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gJy4uL2hvb2tzL3VzZS10b2FzdCc7XG5cbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnQC9maXJlYmFzZSc7XG5pbXBvcnQgeyBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgcXVlcnksIHdoZXJlLCBnZXREb2NzIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuY29uc3QgbG9naW5TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHVzZXJuYW1lOiB6LnN0cmluZygpLm1pbigxLCBcIlVzZXJuYW1lIGlzIHJlcXVpcmVkXCIpLFxuICBwYXNzd29yZDogei5zdHJpbmcoKS5taW4oOCwgXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVyc1wiKSxcbn0pO1xuXG5jb25zdCBMb2dpbkZvcm1Vc2VybmFtZSA9ICgpID0+IHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZm9ybSA9IFJlYWN0SG9va0Zvcm0udXNlRm9ybSh7XG4gICAgcmVzb2x2ZXI6IHpvZFJlc29sdmVyKGxvZ2luU2NoZW1hKSxcbiAgICBtb2RlOiBcIm9uQmx1clwiLFxuICAgIGRlZmF1bHRWYWx1ZXM6IHtcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgLy8gUXVlcnkgRmlyZXN0b3JlIHRvIGdldCB0aGUgdXNlciBkb2N1bWVudCBieSB1c2VybmFtZVxuICAgICAgY29uc3QgdXNlcnNSZWYgPSBjb2xsZWN0aW9uKGRiLCAndXNlcnMnKTtcbiAgICAgIGNvbnN0IHEgPSBxdWVyeSh1c2Vyc1JlZiwgd2hlcmUoXCJ1c2VybmFtZVwiLCBcIj09XCIsIGRhdGEudXNlcm5hbWUpKTtcbiAgICAgIGNvbnNvbGUubG9nKCdDcmVhdGVkIHF1ZXJ5Jyk7XG4gICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcbiAgICAgIGNvbnNvbGUubG9nKCdHb3QgcXVlcnkgc25hcHNob3QnKTtcblxuXG4gICAgICBpZiAocXVlcnlTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICB0b2FzdCh7XG4gICAgICAgICAgdGl0bGU6IFwiTG9naW4gZmFpbGVkXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlciBub3QgZm91bmQuIFBsZWFzZSBjaGVjayB5b3VyIHVzZXJuYW1lLlwiLFxuICAgICAgICAgIHZhcmlhbnQ6ICdkZXN0cnVjdGl2ZScsXG4gICAgICAgICAgZHVyYXRpb246IDEyMDAsXG4gICAgICAgIH0pO1xuICAgICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdXNlckRvYyA9IHF1ZXJ5U25hcHNob3QuZG9jc1swXTtcblxuICAgICAgaWYoIXVzZXJEb2Mpe1xuICAgICAgICB0b2FzdCh7XG4gICAgICAgICAgdGl0bGU6IFwiTG9naW4gZmFpbGVkXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlciBub3QgZm91bmQuIFBsZWFzZSBjaGVjayB5b3VyIHVzZXJuYW1lLlwiLFxuICAgICAgICAgIHZhcmlhbnQ6ICdkZXN0cnVjdGl2ZScsXG4gICAgICAgICAgZHVyYXRpb246IDEyMDAsXG4gICAgICAgIH0pO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVzZXJEYXRhID0gdXNlckRvYy5kYXRhKCk7XG5cbiAgICAgIC8vR2V0IHRoZSB1c2VyIFVJRCBmcm9tIHRoZSB1c2VyRG9jdW1lbnRcbiAgICAgIGNvbnN0IHVzZXJVSUQgPSB1c2VyRG9jLmlkO1xuXG4gICAgICAvLyBTaWduIGluIHdpdGggZW1haWwgYW5kIHBhc3N3b3JkXG4gICAgICBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCB1c2VyRGF0YS5lbWFpbCwgZGF0YS5wYXNzd29yZCkudGhlbigodXNlckNyZWRlbnRpYWwpID0+IHtcbiAgICAgICAgY29uc3Qgc2lnbmVkSW5Vc2VyVUlEID0gdXNlckNyZWRlbnRpYWwudXNlci51aWQ7XG4gICAgICAgIFxuICAgICAgICBpZiAoc2lnbmVkSW5Vc2VyVUlEICE9PSB1c2VyVUlEKSB7XG4gICAgICAgICAgdG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6IFwiTG9naW4gZmFpbGVkXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkXCIsXG4gICAgICAgICAgICB2YXJpYW50OiAnZGVzdHJ1Y3RpdmUnLFxuICAgICAgICAgICAgZHVyYXRpb246IDEyMDAsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgdG9hc3Qoe1xuICAgICAgICAgICAgdGl0bGU6IFwiTG9naW4gc3VjY2Vzc2Z1bFwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwiWW91IGhhdmUgYmVlbiBsb2dnZWQgaW4gc3VjY2Vzc2Z1bGx5LlwiLFxuICAgICAgICAgICAgdmFyaWFudDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgZHVyYXRpb246IDEyMDAsXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgcm91dGVyLnB1c2goXCIvbWFpblNjcmVlblwiKTtcbiAgICAgICAgICB9LCAyMDAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2dnaW5nIGluOicsIGVycm9yKTtcbiAgICAgIGxldCBlcnJvck1lc3NhZ2UgPSBcIkFuIGVycm9yIG9jY3VycmVkIGR1cmluZyBsb2dpblwiO1xuICAgICAgaWYgKGVycm9yLmNvZGUgPT09ICdhdXRoL3VzZXItbm90LWZvdW5kJyB8fCBlcnJvci5tZXNzYWdlID09PSAnVXNlciBub3QgZm91bmQnKSB7XG4gICAgICAgIGVycm9yTWVzc2FnZSA9IFwiVXNlciBub3QgZm91bmQuIFBsZWFzZSBjaGVjayB5b3VyIHVzZXJuYW1lLlwiO1xuICAgICAgfSBlbHNlIGlmIChlcnJvci5jb2RlID09PSAnYXV0aC93cm9uZy1wYXNzd29yZCcpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gXCJJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkXCI7XG4gICAgICB9XG4gICAgICB0b2FzdCh7XG4gICAgICAgIHRpdGxlOiBcIkxvZ2luIGZhaWxlZFwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogZXJyb3JNZXNzYWdlLFxuICAgICAgICB2YXJpYW50OiAnZGVzdHJ1Y3RpdmUnLFxuICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgIH0pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxDYXJkV3JhcHBlclxuICAgICAgbGFiZWw9XCJMb2dpblwiXG4gICAgICB0aXRsZT1cIldlbGNvbWUgQmFjayFcIlxuICAgICAgYmFja0J1dHRvbkhyZWY9XCIvYXV0aC9yZWdpc3RlclwiXG4gICAgICBiYWNrQnV0dG9uTGFiZWw9XCJEb24ndCBoYXZlIGFuIGFjY291bnQ/IFNpZ24gdXAgSGVyZS5cIlxuICAgICAgdXNlcm5hbWVMb2dpbkhyZWY9XCIvYXV0aC9sb2dpbi9lbWFpbFwiXG4gICAgICB1c2VybmFtZUxvZ2luTGFiZWw9XCJMb2dpbiB3aXRoIGVtYWlsXCJcbiAgICA+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInAtNCBtZDpwLTYgbGc6cC04XCI+XG4gICAgICA8Rm9ybSB7Li4uZm9ybX0+XG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtLmhhbmRsZVN1Ym1pdChvblN1Ym1pdCl9IGNsYXNzTmFtZT1cInNwYWNlLXktNiBmbGV4IGZsZXgtY29sXCI+XG4gICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgY29udHJvbD17Zm9ybS5jb250cm9sfVxuICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxuICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5Vc2VybmFtZTwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgdXNlcm5hbWVcIiB7Li4uZmllbGR9IC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICA8Rm9ybU1lc3NhZ2UgY2xhc3NOYW1lPSdlcnJvci1tZXNzYWdlJy8+XG4gICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEZvcm1GaWVsZFxuICAgICAgICAgICAgY29udHJvbD17Zm9ybS5jb250cm9sfVxuICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgIHJlbmRlcj17KHsgZmllbGQgfSkgPT4gKFxuICAgICAgICAgICAgICA8Rm9ybUl0ZW0+XG4gICAgICAgICAgICAgICAgPEZvcm1MYWJlbD5QYXNzd29yZDwvRm9ybUxhYmVsPlxuICAgICAgICAgICAgICAgIDxGb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICAgIDxJbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgcGFzc3dvcmRcIiB7Li4uZmllbGR9IC8+XG4gICAgICAgICAgICAgICAgPC9Gb3JtQ29udHJvbD5cbiAgICAgICAgICAgICAgICA8Rm9ybU1lc3NhZ2UgY2xhc3NOYW1lPSdlcnJvci1tZXNzYWdlJy8+XG4gICAgICAgICAgICAgIDwvRm9ybUl0ZW0+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPEJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPSd3LWZ1bGwnIGRpc2FibGVkPXtpc0xvYWRpbmd9PlxuICAgICAgICAgICAge2lzTG9hZGluZyA/IFwiTG9hZGluZy4uLlwiIDogXCJMb2dpblwifVxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L0Zvcm0+XG4gICAgICA8L2Rpdj5cbiAgICA8L0NhcmRXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtVXNlcm5hbWU7Il0sIm5hbWVzIjpbIlJlYWN0SG9va0Zvcm0iLCJ1c2VTdGF0ZSIsInoiLCJ6b2RSZXNvbHZlciIsInVzZVJvdXRlciIsIkNhcmRXcmFwcGVyIiwiRm9ybSIsIkZvcm1JdGVtIiwiRm9ybUxhYmVsIiwiRm9ybUNvbnRyb2wiLCJGb3JtTWVzc2FnZSIsIkZvcm1GaWVsZCIsIkJ1dHRvbiIsIklucHV0IiwidXNlVG9hc3QiLCJhdXRoIiwiZGIiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIndoZXJlIiwiZ2V0RG9jcyIsImxvZ2luU2NoZW1hIiwib2JqZWN0IiwidXNlcm5hbWUiLCJzdHJpbmciLCJtaW4iLCJwYXNzd29yZCIsIkxvZ2luRm9ybVVzZXJuYW1lIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidG9hc3QiLCJyb3V0ZXIiLCJmb3JtIiwidXNlRm9ybSIsInJlc29sdmVyIiwibW9kZSIsImRlZmF1bHRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJ1c2Vyc1JlZiIsInEiLCJjb25zb2xlIiwibG9nIiwicXVlcnlTbmFwc2hvdCIsImVtcHR5IiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInZhcmlhbnQiLCJkdXJhdGlvbiIsIndpbmRvdyIsImxvY2F0aW9uIiwicmVsb2FkIiwidXNlckRvYyIsImRvY3MiLCJ1c2VyRGF0YSIsInVzZXJVSUQiLCJpZCIsImVtYWlsIiwidGhlbiIsInVzZXJDcmVkZW50aWFsIiwic2lnbmVkSW5Vc2VyVUlEIiwidXNlciIsInVpZCIsInNldFRpbWVvdXQiLCJyZXNldCIsInB1c2giLCJlcnJvciIsImVycm9yTWVzc2FnZSIsImNvZGUiLCJtZXNzYWdlIiwibGFiZWwiLCJiYWNrQnV0dG9uSHJlZiIsImJhY2tCdXR0b25MYWJlbCIsInVzZXJuYW1lTG9naW5IcmVmIiwidXNlcm5hbWVMb2dpbkxhYmVsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaGFuZGxlU3VibWl0IiwiY29udHJvbCIsIm5hbWUiLCJyZW5kZXIiLCJmaWVsZCIsInBsYWNlaG9sZGVyIiwidHlwZSIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/auth/LoginFormUsername.jsx\n"));

/***/ })

});