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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_auth_card_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/auth/card-wrapper */ \"(app-pages-browser)/./components/auth/card-wrapper.jsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./components/ui/form.jsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-toast */ \"(app-pages-browser)/./components/hooks/use-toast.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst loginSchema = zod__WEBPACK_IMPORTED_MODULE_12__.z.object({\n    username: zod__WEBPACK_IMPORTED_MODULE_12__.z.string().min(1, \"Username is required\"),\n    password: zod__WEBPACK_IMPORTED_MODULE_12__.z.string().min(8, \"Password must be at least 8 characters\")\n});\nconst LoginFormUsername = ()=>{\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { toast } = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const form = react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(loginSchema),\n        mode: \"onBlur\",\n        defaultValues: {\n            username: \"\",\n            password: \"\"\n        }\n    });\n    const onSubmit = async (data)=>{\n        setIsLoading(true);\n        try {\n            // Query Firestore to get the user document by username\n            const usersRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_9__.db, \"users\");\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.query)(usersRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.where)(\"username\", \"==\", data.username));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.getDocs)(q);\n            if (querySnapshot.empty) {\n                toast({\n                    title: \"Login failed\",\n                    description: \"User not found. Please check your username.\"\n                });\n                setIsLoading(false);\n                return;\n            }\n            const userDoc = querySnapshot.docs[0];\n            if (!userDoc) {\n                toast({\n                    title: \"Login failed\",\n                    description: \"User not found. Please check your username.\"\n                });\n                return;\n            }\n            const userData = userDoc.data();\n            // Sign in with email and password\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_9__.auth, userData.email, data.password);\n            toast({\n                title: \"Login successful\",\n                duration: 1200\n            });\n            form.reset();\n            setTimeout(()=>{\n                router.push(\"/mainScreen\");\n            }, 2000);\n        } catch (error) {\n            console.error(error);\n            if (error.code === \"auth/user-not-found\" || error.message === \"User not found\") {\n                toast({\n                    title: \"Login failed\",\n                    description: \"User not found. Please check your username.\",\n                    variant: \"destructive\",\n                    duration: 1200\n                });\n            } else if (error.code === \"auth/wrong-password\") {\n                toast({\n                    title: \"Login failed\",\n                    description: \"Invalid username or password\",\n                    variant: \"destructive\",\n                    duration: 1200\n                });\n            } else {\n                toast({\n                    title: \"Login failed\",\n                    description: errorMessage,\n                    variant: \"destructive\",\n                    duration: 3000\n                });\n            }\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth_card_wrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        label: \"Login\",\n        title: \"Welcome Back!\",\n        backButtonHref: \"/auth/register\",\n        backButtonLabel: \"Don't have an account? Sign up Here.\",\n        usernameLoginHref: \"/auth/login/email\",\n        usernameLoginLabel: \"Login with email\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.Form, {\n            ...form,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: form.handleSubmit(onSubmit),\n                className: \"space-y-6 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormField, {\n                        control: form.control,\n                        name: \"username\",\n                        render: (param)=>{\n                            let { field } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormItem, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                        children: \"Username\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 130,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                            placeholder: \"Enter your username\",\n                                            ...field\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 132,\n                                            columnNumber: 19\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 131,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormMessage, {\n                                        className: \"error-message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 134,\n                                        columnNumber: 17\n                                    }, void 0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                lineNumber: 129,\n                                columnNumber: 15\n                            }, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                        lineNumber: 125,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormField, {\n                        control: form.control,\n                        name: \"password\",\n                        render: (param)=>{\n                            let { field } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormItem, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 143,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                            type: \"password\",\n                                            placeholder: \"Enter your password\",\n                                            ...field\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 145,\n                                            columnNumber: 19\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 144,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormMessage, {\n                                        className: \"error-message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 147,\n                                        columnNumber: 17\n                                    }, void 0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                lineNumber: 142,\n                                columnNumber: 15\n                            }, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                        lineNumber: 138,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        type: \"submit\",\n                        className: \"w-full\",\n                        disabled: isLoading,\n                        children: isLoading ? \"Loading...\" : \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                        lineNumber: 151,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                lineNumber: 124,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n            lineNumber: 123,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n        lineNumber: 115,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginFormUsername, \"fUhqugOuTf7O4N6zql7xPrNb+i8=\", false, function() {\n    return [\n        _hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm\n    ];\n});\n_c = LoginFormUsername;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginFormUsername);\nvar _c;\n$RefreshReg$(_c, \"LoginFormUsername\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXV0aC9Mb2dpbkZvcm1Vc2VybmFtZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWlEO0FBQ2hCO0FBQ1Q7QUFDOEI7QUFDVjtBQUNhO0FBUTNCO0FBQ2tCO0FBQ0Y7QUFDQTtBQUVSO0FBQ3FCO0FBQ1k7QUFFdkUsTUFBTXNCLGNBQWNwQixtQ0FBQ0EsQ0FBQ3FCLE1BQU0sQ0FBQztJQUMzQkMsVUFBVXRCLG1DQUFDQSxDQUFDdUIsTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBRztJQUM1QkMsVUFBVXpCLG1DQUFDQSxDQUFDdUIsTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBRztBQUM5QjtBQUVBLE1BQU1FLG9CQUFvQjs7SUFDeEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLEVBQUU4QixLQUFLLEVBQUUsR0FBR2pCLDBEQUFRQTtJQUMxQixNQUFNa0IsU0FBUzVCLDBEQUFTQTtJQUV4QixNQUFNNkIsT0FBT2pDLHFEQUFxQixDQUFDO1FBQ2pDbUMsVUFBVWhDLG9FQUFXQSxDQUFDbUI7UUFDdEJjLE1BQU07UUFDTkMsZUFBZTtZQUNiYixVQUFVO1lBQ1ZHLFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTVcsV0FBVyxPQUFPQztRQUN0QlQsYUFBYTtRQUNiLElBQUk7WUFDRix1REFBdUQ7WUFDdkQsTUFBTVUsV0FBV3RCLCtEQUFVQSxDQUFDRix5Q0FBRUEsRUFBRTtZQUNoQyxNQUFNeUIsSUFBSXRCLDBEQUFLQSxDQUFDcUIsVUFBVXBCLDBEQUFLQSxDQUFDLFlBQVksTUFBTW1CLEtBQUtmLFFBQVE7WUFDL0QsTUFBTWtCLGdCQUFnQixNQUFNckIsNERBQU9BLENBQUNvQjtZQUVwQyxJQUFJQyxjQUFjQyxLQUFLLEVBQUU7Z0JBQ3ZCWixNQUFNO29CQUNKYSxPQUFPO29CQUNQQyxhQUFhO2dCQUNmO2dCQUNBZixhQUFhO2dCQUNiO1lBQ0Y7WUFFQSxNQUFNZ0IsVUFBVUosY0FBY0ssSUFBSSxDQUFDLEVBQUU7WUFFckMsSUFBRyxDQUFDRCxTQUFRO2dCQUNWZixNQUFNO29CQUNKYSxPQUFPO29CQUNQQyxhQUFhO2dCQUNmO2dCQUNBO1lBQ0Y7WUFDQSxNQUFNRyxXQUFXRixRQUFRUCxJQUFJO1lBRzdCLGtDQUFrQztZQUNsQyxNQUFNdEIsMEVBQTBCQSxDQUFDRiwyQ0FBSUEsRUFBRWlDLFNBQVNDLEtBQUssRUFBRVYsS0FBS1osUUFBUTtZQUVwRUksTUFBTTtnQkFDSmEsT0FBTztnQkFDUE0sVUFBVTtZQUNaO1lBQ0FqQixLQUFLa0IsS0FBSztZQUNWQyxXQUFXO2dCQUNUcEIsT0FBT3FCLElBQUksQ0FBQztZQUNkLEdBQUc7UUFDTCxFQUFFLE9BQU9DLE9BQU87WUFDZEMsUUFBUUQsS0FBSyxDQUFDQTtZQUNkLElBQUlBLE1BQU1FLElBQUksS0FBSyx5QkFBeUJGLE1BQU1HLE9BQU8sS0FBSyxrQkFBa0I7Z0JBQzlFMUIsTUFBTTtvQkFDSmEsT0FBTztvQkFDUEMsYUFBYTtvQkFDYmEsU0FBUztvQkFDVFIsVUFBVTtnQkFDWjtZQUNGLE9BQU8sSUFBSUksTUFBTUUsSUFBSSxLQUFLLHVCQUF1QjtnQkFDL0N6QixNQUFNO29CQUNKYSxPQUFPO29CQUNQQyxhQUFhO29CQUNiYSxTQUFTO29CQUNUUixVQUFVO2dCQUNaO1lBQ0YsT0FDSTtnQkFDRm5CLE1BQU07b0JBQ0phLE9BQU87b0JBQ1BDLGFBQWFjO29CQUNiRCxTQUFTO29CQUNUUixVQUFVO2dCQUNaO1lBQ0Y7UUFDRixTQUFVO1lBQ1JwQixhQUFhO1FBQ2Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDekIscUVBQVdBO1FBQ1Z1RCxPQUFNO1FBQ05oQixPQUFNO1FBQ05pQixnQkFBZTtRQUNmQyxpQkFBZ0I7UUFDaEJDLG1CQUFrQjtRQUNsQkMsb0JBQW1CO2tCQUVuQiw0RUFBQzFELHFEQUFJQTtZQUFFLEdBQUcyQixJQUFJO3NCQUNaLDRFQUFDQTtnQkFBS0ssVUFBVUwsS0FBS2dDLFlBQVksQ0FBQzNCO2dCQUFXNEIsV0FBVTs7a0NBQ3JELDhEQUFDdkQsMERBQVNBO3dCQUNSd0QsU0FBU2xDLEtBQUtrQyxPQUFPO3dCQUNyQkMsTUFBSzt3QkFDTEMsUUFBUTtnQ0FBQyxFQUFFQyxLQUFLLEVBQUU7aURBQ2hCLDhEQUFDL0QseURBQVFBOztrREFDUCw4REFBQ0MsMERBQVNBO2tEQUFDOzs7Ozs7a0RBQ1gsOERBQUNDLDREQUFXQTtrREFDViw0RUFBQ0ksdURBQUtBOzRDQUFDMEQsYUFBWTs0Q0FBdUIsR0FBR0QsS0FBSzs7Ozs7Ozs7Ozs7a0RBRXBELDhEQUFDNUQsNERBQVdBO3dDQUFDd0QsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUk3Qiw4REFBQ3ZELDBEQUFTQTt3QkFDUndELFNBQVNsQyxLQUFLa0MsT0FBTzt3QkFDckJDLE1BQUs7d0JBQ0xDLFFBQVE7Z0NBQUMsRUFBRUMsS0FBSyxFQUFFO2lEQUNoQiw4REFBQy9ELHlEQUFRQTs7a0RBQ1AsOERBQUNDLDBEQUFTQTtrREFBQzs7Ozs7O2tEQUNYLDhEQUFDQyw0REFBV0E7a0RBQ1YsNEVBQUNJLHVEQUFLQTs0Q0FBQzJELE1BQUs7NENBQVdELGFBQVk7NENBQXVCLEdBQUdELEtBQUs7Ozs7Ozs7Ozs7O2tEQUVwRSw4REFBQzVELDREQUFXQTt3Q0FBQ3dELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJN0IsOERBQUN0RCx5REFBTUE7d0JBQUM0RCxNQUFLO3dCQUFTTixXQUFVO3dCQUFTTyxVQUFVNUM7a0NBQ2hEQSxZQUFZLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNeEM7R0FoSU1EOztRQUVjZCxzREFBUUE7UUFDWFYsc0RBQVNBO1FBRVhKLHFEQUFxQmtDOzs7S0FMOUJOO0FBa0lOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luRm9ybVVzZXJuYW1lLmpzeD9kYzFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdEhvb2tGb3JtIGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5pbXBvcnQgeyB6b2RSZXNvbHZlciB9IGZyb20gXCJAaG9va2Zvcm0vcmVzb2x2ZXJzL3pvZFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJztcbmltcG9ydCBDYXJkV3JhcHBlciBmcm9tIFwiQC9jb21wb25lbnRzL2F1dGgvY2FyZC13cmFwcGVyXCI7XG5pbXBvcnQge1xuICBGb3JtLFxuICBGb3JtSXRlbSxcbiAgRm9ybUxhYmVsLFxuICBGb3JtQ29udHJvbCxcbiAgRm9ybU1lc3NhZ2UsXG4gIEZvcm1GaWVsZCxcbn0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9mb3JtXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2J1dHRvblwiO1xuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2lucHV0XCI7XG5pbXBvcnQgeyB1c2VUb2FzdCB9IGZyb20gJy4uL2hvb2tzL3VzZS10b2FzdCc7XG5cbmltcG9ydCB7IGF1dGgsIGRiIH0gZnJvbSAnQC9maXJlYmFzZSc7XG5pbXBvcnQgeyBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCB9IGZyb20gJ2ZpcmViYXNlL2F1dGgnO1xuaW1wb3J0IHsgY29sbGVjdGlvbiwgcXVlcnksIHdoZXJlLCBnZXREb2NzIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJztcblxuY29uc3QgbG9naW5TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHVzZXJuYW1lOiB6LnN0cmluZygpLm1pbigxLCBcIlVzZXJuYW1lIGlzIHJlcXVpcmVkXCIpLFxuICBwYXNzd29yZDogei5zdHJpbmcoKS5taW4oOCwgXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVyc1wiKSxcbn0pO1xuXG5jb25zdCBMb2dpbkZvcm1Vc2VybmFtZSA9ICgpID0+IHtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgeyB0b2FzdCB9ID0gdXNlVG9hc3QoKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgY29uc3QgZm9ybSA9IFJlYWN0SG9va0Zvcm0udXNlRm9ybSh7XG4gICAgcmVzb2x2ZXI6IHpvZFJlc29sdmVyKGxvZ2luU2NoZW1hKSxcbiAgICBtb2RlOiBcIm9uQmx1clwiLFxuICAgIGRlZmF1bHRWYWx1ZXM6IHtcbiAgICAgIHVzZXJuYW1lOiBcIlwiLFxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgfSxcbiAgfSk7XG5cbiAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoZGF0YSkgPT4ge1xuICAgIHNldElzTG9hZGluZyh0cnVlKTtcbiAgICB0cnkge1xuICAgICAgLy8gUXVlcnkgRmlyZXN0b3JlIHRvIGdldCB0aGUgdXNlciBkb2N1bWVudCBieSB1c2VybmFtZVxuICAgICAgY29uc3QgdXNlcnNSZWYgPSBjb2xsZWN0aW9uKGRiLCAndXNlcnMnKTtcbiAgICAgIGNvbnN0IHEgPSBxdWVyeSh1c2Vyc1JlZiwgd2hlcmUoXCJ1c2VybmFtZVwiLCBcIj09XCIsIGRhdGEudXNlcm5hbWUpKTtcbiAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuXG4gICAgICBpZiAocXVlcnlTbmFwc2hvdC5lbXB0eSkge1xuICAgICAgICB0b2FzdCh7XG4gICAgICAgICAgdGl0bGU6IFwiTG9naW4gZmFpbGVkXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlciBub3QgZm91bmQuIFBsZWFzZSBjaGVjayB5b3VyIHVzZXJuYW1lLlwiLFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1c2VyRG9jID0gcXVlcnlTbmFwc2hvdC5kb2NzWzBdO1xuXG4gICAgICBpZighdXNlckRvYyl7XG4gICAgICAgIHRvYXN0KHtcbiAgICAgICAgICB0aXRsZTogXCJMb2dpbiBmYWlsZWRcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2VyIG5vdCBmb3VuZC4gUGxlYXNlIGNoZWNrIHlvdXIgdXNlcm5hbWUuXCIsXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB1c2VyRGF0YSA9IHVzZXJEb2MuZGF0YSgpO1xuXG4gICAgICBcbiAgICAgIC8vIFNpZ24gaW4gd2l0aCBlbWFpbCBhbmQgcGFzc3dvcmRcbiAgICAgIGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIHVzZXJEYXRhLmVtYWlsLCBkYXRhLnBhc3N3b3JkKTtcblxuICAgICAgdG9hc3Qoe1xuICAgICAgICB0aXRsZTogXCJMb2dpbiBzdWNjZXNzZnVsXCIsXG4gICAgICAgIGR1cmF0aW9uOiAxMjAwLFxuICAgICAgfSk7XG4gICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgcm91dGVyLnB1c2goXCIvbWFpblNjcmVlblwiKTtcbiAgICAgIH0sIDIwMDApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgIGlmIChlcnJvci5jb2RlID09PSAnYXV0aC91c2VyLW5vdC1mb3VuZCcgfHwgZXJyb3IubWVzc2FnZSA9PT0gJ1VzZXIgbm90IGZvdW5kJykge1xuICAgICAgICB0b2FzdCh7XG4gICAgICAgICAgdGl0bGU6IFwiTG9naW4gZmFpbGVkXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiVXNlciBub3QgZm91bmQuIFBsZWFzZSBjaGVjayB5b3VyIHVzZXJuYW1lLlwiLFxuICAgICAgICAgIHZhcmlhbnQ6ICdkZXN0cnVjdGl2ZScsXG4gICAgICAgICAgZHVyYXRpb246IDEyMDAsXG4gICAgICAgIH0pXG4gICAgICB9IGVsc2UgaWYgKGVycm9yLmNvZGUgPT09ICdhdXRoL3dyb25nLXBhc3N3b3JkJykge1xuICAgICAgICB0b2FzdCh7XG4gICAgICAgICAgdGl0bGU6IFwiTG9naW4gZmFpbGVkXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IFwiSW52YWxpZCB1c2VybmFtZSBvciBwYXNzd29yZFwiLFxuICAgICAgICAgIHZhcmlhbnQ6ICdkZXN0cnVjdGl2ZScsXG4gICAgICAgICAgZHVyYXRpb246IDEyMDAsXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBlbHNle1xuICAgICAgICB0b2FzdCh7XG4gICAgICAgICAgdGl0bGU6IFwiTG9naW4gZmFpbGVkXCIsXG4gICAgICAgICAgZGVzY3JpcHRpb246IGVycm9yTWVzc2FnZSxcbiAgICAgICAgICB2YXJpYW50OiAnZGVzdHJ1Y3RpdmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9IGZpbmFsbHkge1xuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8Q2FyZFdyYXBwZXJcbiAgICAgIGxhYmVsPVwiTG9naW5cIlxuICAgICAgdGl0bGU9XCJXZWxjb21lIEJhY2shXCJcbiAgICAgIGJhY2tCdXR0b25IcmVmPVwiL2F1dGgvcmVnaXN0ZXJcIlxuICAgICAgYmFja0J1dHRvbkxhYmVsPVwiRG9uJ3QgaGF2ZSBhbiBhY2NvdW50PyBTaWduIHVwIEhlcmUuXCJcbiAgICAgIHVzZXJuYW1lTG9naW5IcmVmPVwiL2F1dGgvbG9naW4vZW1haWxcIlxuICAgICAgdXNlcm5hbWVMb2dpbkxhYmVsPVwiTG9naW4gd2l0aCBlbWFpbFwiXG4gICAgPlxuICAgICAgPEZvcm0gey4uLmZvcm19PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybS5oYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJzcGFjZS15LTYgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIGNvbnRyb2w9e2Zvcm0uY29udHJvbH1cbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+VXNlcm5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXJuYW1lXCIgey4uLmZpZWxkfSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPEZvcm1NZXNzYWdlIGNsYXNzTmFtZT0nZXJyb3ItbWVzc2FnZScvPlxuICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIGNvbnRyb2w9e2Zvcm0uY29udHJvbH1cbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+UGFzc3dvcmQ8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCIgey4uLmZpZWxkfSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPEZvcm1NZXNzYWdlIGNsYXNzTmFtZT0nZXJyb3ItbWVzc2FnZScvPlxuICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT0ndy1mdWxsJyBkaXNhYmxlZD17aXNMb2FkaW5nfT5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgPyBcIkxvYWRpbmcuLi5cIiA6IFwiTG9naW5cIn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvQ2FyZFdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1Vc2VybmFtZTsiXSwibmFtZXMiOlsiUmVhY3RIb29rRm9ybSIsInVzZVN0YXRlIiwieiIsInpvZFJlc29sdmVyIiwidXNlUm91dGVyIiwiQ2FyZFdyYXBwZXIiLCJGb3JtIiwiRm9ybUl0ZW0iLCJGb3JtTGFiZWwiLCJGb3JtQ29udHJvbCIsIkZvcm1NZXNzYWdlIiwiRm9ybUZpZWxkIiwiQnV0dG9uIiwiSW5wdXQiLCJ1c2VUb2FzdCIsImF1dGgiLCJkYiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJnZXREb2NzIiwibG9naW5TY2hlbWEiLCJvYmplY3QiLCJ1c2VybmFtZSIsInN0cmluZyIsIm1pbiIsInBhc3N3b3JkIiwiTG9naW5Gb3JtVXNlcm5hbWUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ0b2FzdCIsInJvdXRlciIsImZvcm0iLCJ1c2VGb3JtIiwicmVzb2x2ZXIiLCJtb2RlIiwiZGVmYXVsdFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsInVzZXJzUmVmIiwicSIsInF1ZXJ5U25hcHNob3QiLCJlbXB0eSIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ1c2VyRG9jIiwiZG9jcyIsInVzZXJEYXRhIiwiZW1haWwiLCJkdXJhdGlvbiIsInJlc2V0Iiwic2V0VGltZW91dCIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJjb2RlIiwibWVzc2FnZSIsInZhcmlhbnQiLCJlcnJvck1lc3NhZ2UiLCJsYWJlbCIsImJhY2tCdXR0b25IcmVmIiwiYmFja0J1dHRvbkxhYmVsIiwidXNlcm5hbWVMb2dpbkhyZWYiLCJ1c2VybmFtZUxvZ2luTGFiZWwiLCJoYW5kbGVTdWJtaXQiLCJjbGFzc05hbWUiLCJjb250cm9sIiwibmFtZSIsInJlbmRlciIsImZpZWxkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/auth/LoginFormUsername.jsx\n"));

/***/ })

});