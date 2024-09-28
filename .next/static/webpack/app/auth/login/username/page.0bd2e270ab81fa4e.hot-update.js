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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_auth_card_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/auth/card-wrapper */ \"(app-pages-browser)/./components/auth/card-wrapper.jsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./components/ui/form.jsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-toast */ \"(app-pages-browser)/./components/hooks/use-toast.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst loginSchema = zod__WEBPACK_IMPORTED_MODULE_12__.z.object({\n    username: zod__WEBPACK_IMPORTED_MODULE_12__.z.string().min(1, \"Username is required\"),\n    password: zod__WEBPACK_IMPORTED_MODULE_12__.z.string().min(8, \"Password must be at least 8 characters\")\n});\nconst LoginFormUsername = ()=>{\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { toast } = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const form = react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(loginSchema),\n        mode: \"onBlur\",\n        defaultValues: {\n            username: \"\",\n            password: \"\"\n        }\n    });\n    const onSubmit = async (data)=>{\n        setIsLoading(true);\n        try {\n            // Query Firestore to get the user document by username\n            const usersRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_9__.db, \"users\");\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.query)(usersRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.where)(\"username\", \"==\", data.username));\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.getDocs)(q);\n            if (querySnapshot.empty) {\n                toast({\n                    title: \"Login failed\",\n                    description: \"User not found. Please check your username.\",\n                    variant: \"destructive\"\n                });\n                setIsLoading(false);\n                return;\n            }\n            const userDoc = querySnapshot.docs[0];\n            const userData = userDoc.data();\n            console.log(userData);\n            // Sign in with email and password\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_9__.auth, userData.email, data.password);\n            toast({\n                title: \"Login successful\",\n                duration: 1200\n            });\n            form.reset();\n            setTimeout(()=>{\n                router.push(\"/mainScreen\");\n            }, 2000);\n        } catch (error) {\n            console.error(error);\n            if (error.code === \"auth/user-not-found\" || error.message === \"User not found\") {\n                toast({\n                    title: \"Login failed\",\n                    description: \"User not found. Please check your username.\",\n                    variant: \"destructive\",\n                    duration: 1200\n                });\n            } else if (error.code === \"auth/wrong-password\") {\n                toast({\n                    title: \"Login failed\",\n                    description: \"Invalid username or password\",\n                    variant: \"destructive\",\n                    duration: 1200\n                });\n            } else {\n                toast({\n                    title: \"Login failed\",\n                    description: errorMessage,\n                    variant: \"destructive\",\n                    duration: 3000\n                });\n            }\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth_card_wrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        label: \"Login\",\n        title: \"Welcome Back!\",\n        backButtonHref: \"/auth/register\",\n        backButtonLabel: \"Don't have an account? Sign up Here.\",\n        usernameLoginHref: \"/auth/login/email\",\n        usernameLoginLabel: \"Login with email\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.Form, {\n            ...form,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: form.handleSubmit(onSubmit),\n                className: \"space-y-6 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormField, {\n                        control: form.control,\n                        name: \"username\",\n                        render: (param)=>{\n                            let { field } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormItem, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                        children: \"Username\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 123,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                            placeholder: \"Enter your username\",\n                                            ...field\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 125,\n                                            columnNumber: 19\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormMessage, {\n                                        className: \"error-message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 127,\n                                        columnNumber: 17\n                                    }, void 0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                lineNumber: 122,\n                                columnNumber: 15\n                            }, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                        lineNumber: 118,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormField, {\n                        control: form.control,\n                        name: \"password\",\n                        render: (param)=>{\n                            let { field } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormItem, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 136,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                            type: \"password\",\n                                            placeholder: \"Enter your password\",\n                                            ...field\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 138,\n                                            columnNumber: 19\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormMessage, {\n                                        className: \"error-message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 140,\n                                        columnNumber: 17\n                                    }, void 0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                lineNumber: 135,\n                                columnNumber: 15\n                            }, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                        lineNumber: 131,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        type: \"submit\",\n                        className: \"w-full\",\n                        disabled: isLoading,\n                        children: isLoading ? \"Loading...\" : \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                        lineNumber: 144,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                lineNumber: 117,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n            lineNumber: 116,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n        lineNumber: 108,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginFormUsername, \"fUhqugOuTf7O4N6zql7xPrNb+i8=\", false, function() {\n    return [\n        _hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm\n    ];\n});\n_c = LoginFormUsername;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginFormUsername);\nvar _c;\n$RefreshReg$(_c, \"LoginFormUsername\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXV0aC9Mb2dpbkZvcm1Vc2VybmFtZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWlEO0FBQ2hCO0FBQ1Q7QUFDOEI7QUFDVjtBQUNhO0FBUTNCO0FBQ2tCO0FBQ0Y7QUFDQTtBQUVSO0FBQ3FCO0FBQ1k7QUFFdkUsTUFBTXNCLGNBQWNwQixtQ0FBQ0EsQ0FBQ3FCLE1BQU0sQ0FBQztJQUMzQkMsVUFBVXRCLG1DQUFDQSxDQUFDdUIsTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBRztJQUM1QkMsVUFBVXpCLG1DQUFDQSxDQUFDdUIsTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBRztBQUM5QjtBQUVBLE1BQU1FLG9CQUFvQjs7SUFDeEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLEVBQUU4QixLQUFLLEVBQUUsR0FBR2pCLDBEQUFRQTtJQUMxQixNQUFNa0IsU0FBUzVCLDBEQUFTQTtJQUV4QixNQUFNNkIsT0FBT2pDLHFEQUFxQixDQUFDO1FBQ2pDbUMsVUFBVWhDLG9FQUFXQSxDQUFDbUI7UUFDdEJjLE1BQU07UUFDTkMsZUFBZTtZQUNiYixVQUFVO1lBQ1ZHLFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTVcsV0FBVyxPQUFPQztRQUN0QlQsYUFBYTtRQUNiLElBQUk7WUFDRix1REFBdUQ7WUFDdkQsTUFBTVUsV0FBV3RCLCtEQUFVQSxDQUFDRix5Q0FBRUEsRUFBRTtZQUNoQyxNQUFNeUIsSUFBSXRCLDBEQUFLQSxDQUFDcUIsVUFBVXBCLDBEQUFLQSxDQUFDLFlBQVksTUFBTW1CLEtBQUtmLFFBQVE7WUFDL0QsTUFBTWtCLGdCQUFnQixNQUFNckIsNERBQU9BLENBQUNvQjtZQUVwQyxJQUFJQyxjQUFjQyxLQUFLLEVBQUU7Z0JBQ3ZCWixNQUFNO29CQUNKYSxPQUFPO29CQUNQQyxhQUFhO29CQUNiQyxTQUFTO2dCQUNYO2dCQUNBaEIsYUFBYTtnQkFDYjtZQUNGO1lBRUEsTUFBTWlCLFVBQVVMLGNBQWNNLElBQUksQ0FBQyxFQUFFO1lBQ3JDLE1BQU1DLFdBQVdGLFFBQVFSLElBQUk7WUFFN0JXLFFBQVFDLEdBQUcsQ0FBQ0Y7WUFDWixrQ0FBa0M7WUFDbEMsTUFBTWhDLDBFQUEwQkEsQ0FBQ0YsMkNBQUlBLEVBQUVrQyxTQUFTRyxLQUFLLEVBQUViLEtBQUtaLFFBQVE7WUFFcEVJLE1BQU07Z0JBQ0phLE9BQU87Z0JBQ1BTLFVBQVU7WUFDWjtZQUNBcEIsS0FBS3FCLEtBQUs7WUFDVkMsV0FBVztnQkFDVHZCLE9BQU93QixJQUFJLENBQUM7WUFDZCxHQUFHO1FBQ0wsRUFBRSxPQUFPQyxPQUFPO1lBQ2RQLFFBQVFPLEtBQUssQ0FBQ0E7WUFDZCxJQUFJQSxNQUFNQyxJQUFJLEtBQUsseUJBQXlCRCxNQUFNRSxPQUFPLEtBQUssa0JBQWtCO2dCQUM5RTVCLE1BQU07b0JBQ0phLE9BQU87b0JBQ1BDLGFBQWE7b0JBQ2JDLFNBQVM7b0JBQ1RPLFVBQVU7Z0JBQ1o7WUFDRixPQUFPLElBQUlJLE1BQU1DLElBQUksS0FBSyx1QkFBdUI7Z0JBQy9DM0IsTUFBTTtvQkFDSmEsT0FBTztvQkFDUEMsYUFBYTtvQkFDYkMsU0FBUztvQkFDVE8sVUFBVTtnQkFDWjtZQUNGLE9BQ0k7Z0JBQ0Z0QixNQUFNO29CQUNKYSxPQUFPO29CQUNQQyxhQUFhZTtvQkFDYmQsU0FBUztvQkFDVE8sVUFBVTtnQkFDWjtZQUNGO1FBQ0YsU0FBVTtZQUNSdkIsYUFBYTtRQUNmO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ3pCLHFFQUFXQTtRQUNWd0QsT0FBTTtRQUNOakIsT0FBTTtRQUNOa0IsZ0JBQWU7UUFDZkMsaUJBQWdCO1FBQ2hCQyxtQkFBa0I7UUFDbEJDLG9CQUFtQjtrQkFFbkIsNEVBQUMzRCxxREFBSUE7WUFBRSxHQUFHMkIsSUFBSTtzQkFDWiw0RUFBQ0E7Z0JBQUtLLFVBQVVMLEtBQUtpQyxZQUFZLENBQUM1QjtnQkFBVzZCLFdBQVU7O2tDQUNyRCw4REFBQ3hELDBEQUFTQTt3QkFDUnlELFNBQVNuQyxLQUFLbUMsT0FBTzt3QkFDckJDLE1BQUs7d0JBQ0xDLFFBQVE7Z0NBQUMsRUFBRUMsS0FBSyxFQUFFO2lEQUNoQiw4REFBQ2hFLHlEQUFRQTs7a0RBQ1AsOERBQUNDLDBEQUFTQTtrREFBQzs7Ozs7O2tEQUNYLDhEQUFDQyw0REFBV0E7a0RBQ1YsNEVBQUNJLHVEQUFLQTs0Q0FBQzJELGFBQVk7NENBQXVCLEdBQUdELEtBQUs7Ozs7Ozs7Ozs7O2tEQUVwRCw4REFBQzdELDREQUFXQTt3Q0FBQ3lELFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQ0FJN0IsOERBQUN4RCwwREFBU0E7d0JBQ1J5RCxTQUFTbkMsS0FBS21DLE9BQU87d0JBQ3JCQyxNQUFLO3dCQUNMQyxRQUFRO2dDQUFDLEVBQUVDLEtBQUssRUFBRTtpREFDaEIsOERBQUNoRSx5REFBUUE7O2tEQUNQLDhEQUFDQywwREFBU0E7a0RBQUM7Ozs7OztrREFDWCw4REFBQ0MsNERBQVdBO2tEQUNWLDRFQUFDSSx1REFBS0E7NENBQUM0RCxNQUFLOzRDQUFXRCxhQUFZOzRDQUF1QixHQUFHRCxLQUFLOzs7Ozs7Ozs7OztrREFFcEUsOERBQUM3RCw0REFBV0E7d0NBQUN5RCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSTdCLDhEQUFDdkQseURBQU1BO3dCQUFDNkQsTUFBSzt3QkFBU04sV0FBVTt3QkFBU08sVUFBVTdDO2tDQUNoREEsWUFBWSxlQUFlOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXhDO0dBekhNRDs7UUFFY2Qsc0RBQVFBO1FBQ1hWLHNEQUFTQTtRQUVYSixxREFBcUJrQzs7O0tBTDlCTjtBQTJITiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvYXV0aC9Mb2dpbkZvcm1Vc2VybmFtZS5qc3g/ZGMxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0ICogYXMgUmVhY3RIb29rRm9ybSBmcm9tICdyZWFjdC1ob29rLWZvcm0nO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgem9kUmVzb2x2ZXIgfSBmcm9tIFwiQGhvb2tmb3JtL3Jlc29sdmVycy96b2RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgQ2FyZFdyYXBwZXIgZnJvbSBcIkAvY29tcG9uZW50cy9hdXRoL2NhcmQtd3JhcHBlclwiO1xuaW1wb3J0IHtcbiAgRm9ybSxcbiAgRm9ybUl0ZW0sXG4gIEZvcm1MYWJlbCxcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1NZXNzYWdlLFxuICBGb3JtRmllbGQsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZm9ybVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHsgdXNlVG9hc3QgfSBmcm9tICcuLi9ob29rcy91c2UtdG9hc3QnO1xuXG5pbXBvcnQgeyBhdXRoLCBkYiB9IGZyb20gJ0AvZmlyZWJhc2UnO1xuaW1wb3J0IHsgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCB7IGNvbGxlY3Rpb24sIHF1ZXJ5LCB3aGVyZSwgZ2V0RG9jcyB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5cbmNvbnN0IGxvZ2luU2NoZW1hID0gei5vYmplY3Qoe1xuICB1c2VybmFtZTogei5zdHJpbmcoKS5taW4oMSwgXCJVc2VybmFtZSBpcyByZXF1aXJlZFwiKSxcbiAgcGFzc3dvcmQ6IHouc3RyaW5nKCkubWluKDgsIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA4IGNoYXJhY3RlcnNcIiksXG59KTtcblxuY29uc3QgTG9naW5Gb3JtVXNlcm5hbWUgPSAoKSA9PiB7XG4gIGNvbnN0IFtpc0xvYWRpbmcsIHNldElzTG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHsgdG9hc3QgfSA9IHVzZVRvYXN0KCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIGNvbnN0IGZvcm0gPSBSZWFjdEhvb2tGb3JtLnVzZUZvcm0oe1xuICAgIHJlc29sdmVyOiB6b2RSZXNvbHZlcihsb2dpblNjaGVtYSksXG4gICAgbW9kZTogXCJvbkJsdXJcIixcbiAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMgKGRhdGEpID0+IHtcbiAgICBzZXRJc0xvYWRpbmcodHJ1ZSk7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFF1ZXJ5IEZpcmVzdG9yZSB0byBnZXQgdGhlIHVzZXIgZG9jdW1lbnQgYnkgdXNlcm5hbWVcbiAgICAgIGNvbnN0IHVzZXJzUmVmID0gY29sbGVjdGlvbihkYiwgJ3VzZXJzJyk7XG4gICAgICBjb25zdCBxID0gcXVlcnkodXNlcnNSZWYsIHdoZXJlKFwidXNlcm5hbWVcIiwgXCI9PVwiLCBkYXRhLnVzZXJuYW1lKSk7XG4gICAgICBjb25zdCBxdWVyeVNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhxKTtcblxuICAgICAgaWYgKHF1ZXJ5U25hcHNob3QuZW1wdHkpIHtcbiAgICAgICAgdG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiBcIkxvZ2luIGZhaWxlZFwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXIgbm90IGZvdW5kLiBQbGVhc2UgY2hlY2sgeW91ciB1c2VybmFtZS5cIixcbiAgICAgICAgICB2YXJpYW50OiAnZGVzdHJ1Y3RpdmUnLFxuICAgICAgICB9KTtcbiAgICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1c2VyRG9jID0gcXVlcnlTbmFwc2hvdC5kb2NzWzBdO1xuICAgICAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKTtcblxuICAgICAgY29uc29sZS5sb2codXNlckRhdGEpXG4gICAgICAvLyBTaWduIGluIHdpdGggZW1haWwgYW5kIHBhc3N3b3JkXG4gICAgICBhd2FpdCBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhdXRoLCB1c2VyRGF0YS5lbWFpbCwgZGF0YS5wYXNzd29yZCk7XG5cbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiTG9naW4gc3VjY2Vzc2Z1bFwiLFxuICAgICAgICBkdXJhdGlvbjogMTIwMCxcbiAgICAgIH0pO1xuICAgICAgZm9ybS5yZXNldCgpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHJvdXRlci5wdXNoKFwiL21haW5TY3JlZW5cIik7XG4gICAgICB9LCAyMDAwKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ2F1dGgvdXNlci1ub3QtZm91bmQnIHx8IGVycm9yLm1lc3NhZ2UgPT09ICdVc2VyIG5vdCBmb3VuZCcpIHtcbiAgICAgICAgdG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiBcIkxvZ2luIGZhaWxlZFwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXIgbm90IGZvdW5kLiBQbGVhc2UgY2hlY2sgeW91ciB1c2VybmFtZS5cIixcbiAgICAgICAgICB2YXJpYW50OiAnZGVzdHJ1Y3RpdmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMjAwLFxuICAgICAgICB9KVxuICAgICAgfSBlbHNlIGlmIChlcnJvci5jb2RlID09PSAnYXV0aC93cm9uZy1wYXNzd29yZCcpIHtcbiAgICAgICAgdG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiBcIkxvZ2luIGZhaWxlZFwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmRcIixcbiAgICAgICAgICB2YXJpYW50OiAnZGVzdHJ1Y3RpdmUnLFxuICAgICAgICAgIGR1cmF0aW9uOiAxMjAwLFxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgZWxzZXtcbiAgICAgICAgdG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiBcIkxvZ2luIGZhaWxlZFwiLFxuICAgICAgICAgIGRlc2NyaXB0aW9uOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgdmFyaWFudDogJ2Rlc3RydWN0aXZlJyxcbiAgICAgICAgICBkdXJhdGlvbjogMzAwMCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRXcmFwcGVyXG4gICAgICBsYWJlbD1cIkxvZ2luXCJcbiAgICAgIHRpdGxlPVwiV2VsY29tZSBCYWNrIVwiXG4gICAgICBiYWNrQnV0dG9uSHJlZj1cIi9hdXRoL3JlZ2lzdGVyXCJcbiAgICAgIGJhY2tCdXR0b25MYWJlbD1cIkRvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiB1cCBIZXJlLlwiXG4gICAgICB1c2VybmFtZUxvZ2luSHJlZj1cIi9hdXRoL2xvZ2luL2VtYWlsXCJcbiAgICAgIHVzZXJuYW1lTG9naW5MYWJlbD1cIkxvZ2luIHdpdGggZW1haWxcIlxuICAgID5cbiAgICAgIDxGb3JtIHsuLi5mb3JtfT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm0uaGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPVwic3BhY2UteS02IGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlVzZXJuYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VybmFtZVwiIHsuLi5maWVsZH0gLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSBjbGFzc05hbWU9J2Vycm9yLW1lc3NhZ2UnLz5cbiAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiIHsuLi5maWVsZH0gLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSBjbGFzc05hbWU9J2Vycm9yLW1lc3NhZ2UnLz5cbiAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9J3ctZnVsbCcgZGlzYWJsZWQ9e2lzTG9hZGluZ30+XG4gICAgICAgICAgICB7aXNMb2FkaW5nID8gXCJMb2FkaW5nLi4uXCIgOiBcIkxvZ2luXCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvRm9ybT5cbiAgICA8L0NhcmRXcmFwcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Gb3JtVXNlcm5hbWU7Il0sIm5hbWVzIjpbIlJlYWN0SG9va0Zvcm0iLCJ1c2VTdGF0ZSIsInoiLCJ6b2RSZXNvbHZlciIsInVzZVJvdXRlciIsIkNhcmRXcmFwcGVyIiwiRm9ybSIsIkZvcm1JdGVtIiwiRm9ybUxhYmVsIiwiRm9ybUNvbnRyb2wiLCJGb3JtTWVzc2FnZSIsIkZvcm1GaWVsZCIsIkJ1dHRvbiIsIklucHV0IiwidXNlVG9hc3QiLCJhdXRoIiwiZGIiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImNvbGxlY3Rpb24iLCJxdWVyeSIsIndoZXJlIiwiZ2V0RG9jcyIsImxvZ2luU2NoZW1hIiwib2JqZWN0IiwidXNlcm5hbWUiLCJzdHJpbmciLCJtaW4iLCJwYXNzd29yZCIsIkxvZ2luRm9ybVVzZXJuYW1lIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwidG9hc3QiLCJyb3V0ZXIiLCJmb3JtIiwidXNlRm9ybSIsInJlc29sdmVyIiwibW9kZSIsImRlZmF1bHRWYWx1ZXMiLCJvblN1Ym1pdCIsImRhdGEiLCJ1c2Vyc1JlZiIsInEiLCJxdWVyeVNuYXBzaG90IiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidmFyaWFudCIsInVzZXJEb2MiLCJkb2NzIiwidXNlckRhdGEiLCJjb25zb2xlIiwibG9nIiwiZW1haWwiLCJkdXJhdGlvbiIsInJlc2V0Iiwic2V0VGltZW91dCIsInB1c2giLCJlcnJvciIsImNvZGUiLCJtZXNzYWdlIiwiZXJyb3JNZXNzYWdlIiwibGFiZWwiLCJiYWNrQnV0dG9uSHJlZiIsImJhY2tCdXR0b25MYWJlbCIsInVzZXJuYW1lTG9naW5IcmVmIiwidXNlcm5hbWVMb2dpbkxhYmVsIiwiaGFuZGxlU3VibWl0IiwiY2xhc3NOYW1lIiwiY29udHJvbCIsIm5hbWUiLCJyZW5kZXIiLCJmaWVsZCIsInBsYWNlaG9sZGVyIiwidHlwZSIsImRpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/auth/LoginFormUsername.jsx\n"));

/***/ })

});