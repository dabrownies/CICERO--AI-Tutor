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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_auth_card_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/auth/card-wrapper */ \"(app-pages-browser)/./components/auth/card-wrapper.jsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./components/ui/form.jsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-toast */ \"(app-pages-browser)/./components/hooks/use-toast.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst loginSchema = zod__WEBPACK_IMPORTED_MODULE_12__.z.object({\n    username: zod__WEBPACK_IMPORTED_MODULE_12__.z.string().min(1, \"Username is required\"),\n    password: zod__WEBPACK_IMPORTED_MODULE_12__.z.string().min(8, \"Password must be at least 8 characters\")\n});\nconst LoginFormUsername = ()=>{\n    _s();\n    const [isLoading, setIsLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const { toast } = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast)();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const form = react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(loginSchema),\n        mode: \"onBlur\",\n        defaultValues: {\n            username: \"\",\n            password: \"\"\n        }\n    });\n    const onSubmit = async (data)=>{\n        setIsLoading(true);\n        try {\n            // Query Firestore to get the user document by username\n            const usersRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_9__.db, \"users\");\n            const q = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.query)(usersRef, (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.where)(\"username\", \"==\", data.username));\n            console.log(\"Created query\");\n            const querySnapshot = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.getDocs)(q);\n            console.log(\"Got query snapshot\");\n            if (querySnapshot.empty) {\n                toast({\n                    title: \"Login failed\",\n                    description: \"User not found. Please check your username.\",\n                    variant: \"destructive\",\n                    duration: 1200\n                });\n                setIsLoading(false);\n                window.location.reload();\n                return;\n            }\n            const userDoc = querySnapshot.docs[0];\n            if (!userDoc) {\n                toast({\n                    title: \"Login failed\",\n                    description: \"User not found. Please check your username.\",\n                    variant: \"destructive\",\n                    duration: 1200\n                });\n                window.location.reload();\n                return;\n            }\n            const userData = userDoc.data();\n            //Get the user UID from the userDocument\n            const userUID = userDoc.id;\n            // Sign in with email and password\n            await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_9__.auth, userData.email, data.password).then((userCredential)=>{\n                const signedInUserUID = userCredential.user.uid;\n                if (signedInUserUID !== userUID) {\n                    toast({\n                        title: \"Login failed\",\n                        description: \"Invalid username or password\",\n                        variant: \"destructive\",\n                        duration: 1200\n                    });\n                    setTimeout(()=>{});\n                    window.location.reload();\n                } else {\n                    toast({\n                        title: \"Login successful\",\n                        description: \"You have been logged in successfully.\",\n                        variant: \"success\",\n                        duration: 1200\n                    });\n                    form.reset();\n                    setTimeout(()=>{\n                        router.push(\"/mainScreen\");\n                    }, 2000);\n                }\n            });\n        } catch (error) {\n            console.error(\"Error logging in:\", error);\n            let errorMessage = \"An error occurred during login\";\n            if (error.code === \"auth/user-not-found\" || error.message === \"User not found\") {\n                errorMessage = \"User not found. Please check your username.\";\n            } else if (error.code === \"auth/wrong-password\") {\n                errorMessage = \"Invalid username or password\";\n            }\n            toast({\n                title: \"Login failed\",\n                description: errorMessage,\n                variant: \"destructive\",\n                duration: 3000\n            });\n        } finally{\n            setIsLoading(false);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth_card_wrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        label: \"Login\",\n        title: \"Welcome Back!\",\n        backButtonHref: \"/auth/register\",\n        backButtonLabel: \"Don't have an account? Sign up Here.\",\n        usernameLoginHref: \"/auth/login/email\",\n        usernameLoginLabel: \"Login with email\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-4 md:p-6 lg:p-8\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.Form, {\n                ...form,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                    onSubmit: form.handleSubmit(onSubmit),\n                    className: \"space-y-6 flex flex-col\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormField, {\n                            control: form.control,\n                            name: \"username\",\n                            render: (param)=>{\n                                let { field } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                            children: \"Username\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 148,\n                                            columnNumber: 17\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                                placeholder: \"Enter your username\",\n                                                ...field\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                                lineNumber: 150,\n                                                columnNumber: 19\n                                            }, void 0)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 149,\n                                            columnNumber: 17\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormMessage, {\n                                            className: \"error-message\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 152,\n                                            columnNumber: 17\n                                        }, void 0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                    lineNumber: 147,\n                                    columnNumber: 15\n                                }, void 0);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                            lineNumber: 143,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormField, {\n                            control: form.control,\n                            name: \"password\",\n                            render: (param)=>{\n                                let { field } = param;\n                                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormItem, {\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                            children: \"Password\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 161,\n                                            columnNumber: 17\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                                type: \"password\",\n                                                placeholder: \"Enter your password\",\n                                                ...field\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                                lineNumber: 163,\n                                                columnNumber: 19\n                                            }, void 0)\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 162,\n                                            columnNumber: 17\n                                        }, void 0),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormMessage, {\n                                            className: \"error-message\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 165,\n                                            columnNumber: 17\n                                        }, void 0)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                    lineNumber: 160,\n                                    columnNumber: 15\n                                }, void 0);\n                            }\n                        }, void 0, false, {\n                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                            lineNumber: 156,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                            type: \"submit\",\n                            className: \"w-full\",\n                            disabled: isLoading,\n                            children: isLoading ? \"Loading...\" : \"Login\"\n                        }, void 0, false, {\n                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                            lineNumber: 169,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                    lineNumber: 142,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                lineNumber: 141,\n                columnNumber: 7\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n            lineNumber: 140,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n        lineNumber: 132,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginFormUsername, \"fUhqugOuTf7O4N6zql7xPrNb+i8=\", false, function() {\n    return [\n        _hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm\n    ];\n});\n_c = LoginFormUsername;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginFormUsername);\nvar _c;\n$RefreshReg$(_c, \"LoginFormUsername\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXV0aC9Mb2dpbkZvcm1Vc2VybmFtZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWlEO0FBQ2hCO0FBQ1Q7QUFDOEI7QUFDVjtBQUNhO0FBUTNCO0FBQ2tCO0FBQ0Y7QUFDQTtBQUVSO0FBQ3FCO0FBQ1k7QUFFdkUsTUFBTXNCLGNBQWNwQixtQ0FBQ0EsQ0FBQ3FCLE1BQU0sQ0FBQztJQUMzQkMsVUFBVXRCLG1DQUFDQSxDQUFDdUIsTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBRztJQUM1QkMsVUFBVXpCLG1DQUFDQSxDQUFDdUIsTUFBTSxHQUFHQyxHQUFHLENBQUMsR0FBRztBQUM5QjtBQUVBLE1BQU1FLG9CQUFvQjs7SUFDeEIsTUFBTSxDQUFDQyxXQUFXQyxhQUFhLEdBQUc3QiwrQ0FBUUEsQ0FBQztJQUMzQyxNQUFNLEVBQUU4QixLQUFLLEVBQUUsR0FBR2pCLDBEQUFRQTtJQUMxQixNQUFNa0IsU0FBUzVCLDBEQUFTQTtJQUV4QixNQUFNNkIsT0FBT2pDLHFEQUFxQixDQUFDO1FBQ2pDbUMsVUFBVWhDLG9FQUFXQSxDQUFDbUI7UUFDdEJjLE1BQU07UUFDTkMsZUFBZTtZQUNiYixVQUFVO1lBQ1ZHLFVBQVU7UUFDWjtJQUNGO0lBRUEsTUFBTVcsV0FBVyxPQUFPQztRQUN0QlQsYUFBYTtRQUNiLElBQUk7WUFDRix1REFBdUQ7WUFDdkQsTUFBTVUsV0FBV3RCLCtEQUFVQSxDQUFDRix5Q0FBRUEsRUFBRTtZQUNoQyxNQUFNeUIsSUFBSXRCLDBEQUFLQSxDQUFDcUIsVUFBVXBCLDBEQUFLQSxDQUFDLFlBQVksTUFBTW1CLEtBQUtmLFFBQVE7WUFDL0RrQixRQUFRQyxHQUFHLENBQUM7WUFDWixNQUFNQyxnQkFBZ0IsTUFBTXZCLDREQUFPQSxDQUFDb0I7WUFDcENDLFFBQVFDLEdBQUcsQ0FBQztZQUdaLElBQUlDLGNBQWNDLEtBQUssRUFBRTtnQkFDdkJkLE1BQU07b0JBQ0pl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QUs7Z0RBQVdELGFBQVk7Z0RBQXVCLEdBQUdELEtBQUs7Ozs7Ozs7Ozs7O3NEQUVwRSw4REFBQ3hFLDREQUFXQTs0Q0FBQ21FLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OztzQ0FJN0IsOERBQUNqRSx5REFBTUE7NEJBQUN3RSxNQUFLOzRCQUFTUCxXQUFVOzRCQUFTUSxVQUFVeEQ7c0NBQ2hEQSxZQUFZLGVBQWU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU94QztHQW5KTUQ7O1FBRWNkLHNEQUFRQTtRQUNYVixzREFBU0E7UUFFWEoscURBQXFCa0M7OztLQUw5Qk47QUFxSk4sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL2F1dGgvTG9naW5Gb3JtVXNlcm5hbWUuanN4P2RjMWIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCAqIGFzIFJlYWN0SG9va0Zvcm0gZnJvbSAncmVhY3QtaG9vay1mb3JtJztcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgeiB9IGZyb20gXCJ6b2RcIjtcbmltcG9ydCB7IHpvZFJlc29sdmVyIH0gZnJvbSBcIkBob29rZm9ybS9yZXNvbHZlcnMvem9kXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xuaW1wb3J0IENhcmRXcmFwcGVyIGZyb20gXCJAL2NvbXBvbmVudHMvYXV0aC9jYXJkLXdyYXBwZXJcIjtcbmltcG9ydCB7XG4gIEZvcm0sXG4gIEZvcm1JdGVtLFxuICBGb3JtTGFiZWwsXG4gIEZvcm1Db250cm9sLFxuICBGb3JtTWVzc2FnZSxcbiAgRm9ybUZpZWxkLFxufSBmcm9tIFwiQC9jb21wb25lbnRzL3VpL2Zvcm1cIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvYnV0dG9uXCI7XG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvaW5wdXRcIjtcbmltcG9ydCB7IHVzZVRvYXN0IH0gZnJvbSAnLi4vaG9va3MvdXNlLXRvYXN0JztcblxuaW1wb3J0IHsgYXV0aCwgZGIgfSBmcm9tICdAL2ZpcmViYXNlJztcbmltcG9ydCB7IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSAnZmlyZWJhc2UvYXV0aCc7XG5pbXBvcnQgeyBjb2xsZWN0aW9uLCBxdWVyeSwgd2hlcmUsIGdldERvY3MgfSBmcm9tICdmaXJlYmFzZS9maXJlc3RvcmUnO1xuXG5jb25zdCBsb2dpblNjaGVtYSA9IHoub2JqZWN0KHtcbiAgdXNlcm5hbWU6IHouc3RyaW5nKCkubWluKDEsIFwiVXNlcm5hbWUgaXMgcmVxdWlyZWRcIiksXG4gIHBhc3N3b3JkOiB6LnN0cmluZygpLm1pbig4LCBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgOCBjaGFyYWN0ZXJzXCIpLFxufSk7XG5cbmNvbnN0IExvZ2luRm9ybVVzZXJuYW1lID0gKCkgPT4ge1xuICBjb25zdCBbaXNMb2FkaW5nLCBzZXRJc0xvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB7IHRvYXN0IH0gPSB1c2VUb2FzdCgpO1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zdCBmb3JtID0gUmVhY3RIb29rRm9ybS51c2VGb3JtKHtcbiAgICByZXNvbHZlcjogem9kUmVzb2x2ZXIobG9naW5TY2hlbWEpLFxuICAgIG1vZGU6IFwib25CbHVyXCIsXG4gICAgZGVmYXVsdFZhbHVlczoge1xuICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICB9LFxuICB9KTtcblxuICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jIChkYXRhKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHRyeSB7XG4gICAgICAvLyBRdWVyeSBGaXJlc3RvcmUgdG8gZ2V0IHRoZSB1c2VyIGRvY3VtZW50IGJ5IHVzZXJuYW1lXG4gICAgICBjb25zdCB1c2Vyc1JlZiA9IGNvbGxlY3Rpb24oZGIsICd1c2VycycpO1xuICAgICAgY29uc3QgcSA9IHF1ZXJ5KHVzZXJzUmVmLCB3aGVyZShcInVzZXJuYW1lXCIsIFwiPT1cIiwgZGF0YS51c2VybmFtZSkpO1xuICAgICAgY29uc29sZS5sb2coJ0NyZWF0ZWQgcXVlcnknKTtcbiAgICAgIGNvbnN0IHF1ZXJ5U25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHEpO1xuICAgICAgY29uc29sZS5sb2coJ0dvdCBxdWVyeSBzbmFwc2hvdCcpO1xuXG5cbiAgICAgIGlmIChxdWVyeVNuYXBzaG90LmVtcHR5KSB7XG4gICAgICAgIHRvYXN0KHtcbiAgICAgICAgICB0aXRsZTogXCJMb2dpbiBmYWlsZWRcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2VyIG5vdCBmb3VuZC4gUGxlYXNlIGNoZWNrIHlvdXIgdXNlcm5hbWUuXCIsXG4gICAgICAgICAgdmFyaWFudDogJ2Rlc3RydWN0aXZlJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTIwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1c2VyRG9jID0gcXVlcnlTbmFwc2hvdC5kb2NzWzBdO1xuXG4gICAgICBpZighdXNlckRvYyl7XG4gICAgICAgIHRvYXN0KHtcbiAgICAgICAgICB0aXRsZTogXCJMb2dpbiBmYWlsZWRcIixcbiAgICAgICAgICBkZXNjcmlwdGlvbjogXCJVc2VyIG5vdCBmb3VuZC4gUGxlYXNlIGNoZWNrIHlvdXIgdXNlcm5hbWUuXCIsXG4gICAgICAgICAgdmFyaWFudDogJ2Rlc3RydWN0aXZlJyxcbiAgICAgICAgICBkdXJhdGlvbjogMTIwMCxcbiAgICAgICAgfSk7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgY29uc3QgdXNlckRhdGEgPSB1c2VyRG9jLmRhdGEoKTtcblxuICAgICAgLy9HZXQgdGhlIHVzZXIgVUlEIGZyb20gdGhlIHVzZXJEb2N1bWVudFxuICAgICAgY29uc3QgdXNlclVJRCA9IHVzZXJEb2MuaWQ7XG5cbiAgICAgIC8vIFNpZ24gaW4gd2l0aCBlbWFpbCBhbmQgcGFzc3dvcmRcbiAgICAgIGF3YWl0IHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGF1dGgsIHVzZXJEYXRhLmVtYWlsLCBkYXRhLnBhc3N3b3JkKS50aGVuKCh1c2VyQ3JlZGVudGlhbCkgPT4ge1xuICAgICAgICBjb25zdCBzaWduZWRJblVzZXJVSUQgPSB1c2VyQ3JlZGVudGlhbC51c2VyLnVpZDtcbiAgICAgICAgXG4gICAgICAgIGlmIChzaWduZWRJblVzZXJVSUQgIT09IHVzZXJVSUQpIHtcbiAgICAgICAgICB0b2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogXCJMb2dpbiBmYWlsZWRcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcIkludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmRcIixcbiAgICAgICAgICAgIHZhcmlhbnQ6ICdkZXN0cnVjdGl2ZScsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTIwMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0pXG4gICAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICB0b2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogXCJMb2dpbiBzdWNjZXNzZnVsXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJZb3UgaGF2ZSBiZWVuIGxvZ2dlZCBpbiBzdWNjZXNzZnVsbHkuXCIsXG4gICAgICAgICAgICB2YXJpYW50OiAnc3VjY2VzcycsXG4gICAgICAgICAgICBkdXJhdGlvbjogMTIwMCxcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBmb3JtLnJlc2V0KCk7XG4gICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICByb3V0ZXIucHVzaChcIi9tYWluU2NyZWVuXCIpO1xuICAgICAgICAgIH0sIDIwMDApO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvZ2dpbmcgaW46JywgZXJyb3IpO1xuICAgICAgbGV0IGVycm9yTWVzc2FnZSA9IFwiQW4gZXJyb3Igb2NjdXJyZWQgZHVyaW5nIGxvZ2luXCI7XG4gICAgICBpZiAoZXJyb3IuY29kZSA9PT0gJ2F1dGgvdXNlci1ub3QtZm91bmQnIHx8IGVycm9yLm1lc3NhZ2UgPT09ICdVc2VyIG5vdCBmb3VuZCcpIHtcbiAgICAgICAgZXJyb3JNZXNzYWdlID0gXCJVc2VyIG5vdCBmb3VuZC4gUGxlYXNlIGNoZWNrIHlvdXIgdXNlcm5hbWUuXCI7XG4gICAgICB9IGVsc2UgaWYgKGVycm9yLmNvZGUgPT09ICdhdXRoL3dyb25nLXBhc3N3b3JkJykge1xuICAgICAgICBlcnJvck1lc3NhZ2UgPSBcIkludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmRcIjtcbiAgICAgIH1cbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiTG9naW4gZmFpbGVkXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBlcnJvck1lc3NhZ2UsXG4gICAgICAgIHZhcmlhbnQ6ICdkZXN0cnVjdGl2ZScsXG4gICAgICAgIGR1cmF0aW9uOiAzMDAwLFxuICAgICAgfSk7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENhcmRXcmFwcGVyXG4gICAgICBsYWJlbD1cIkxvZ2luXCJcbiAgICAgIHRpdGxlPVwiV2VsY29tZSBCYWNrIVwiXG4gICAgICBiYWNrQnV0dG9uSHJlZj1cIi9hdXRoL3JlZ2lzdGVyXCJcbiAgICAgIGJhY2tCdXR0b25MYWJlbD1cIkRvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiB1cCBIZXJlLlwiXG4gICAgICB1c2VybmFtZUxvZ2luSHJlZj1cIi9hdXRoL2xvZ2luL2VtYWlsXCJcbiAgICAgIHVzZXJuYW1lTG9naW5MYWJlbD1cIkxvZ2luIHdpdGggZW1haWxcIlxuICAgID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicC00IG1kOnAtNiBsZzpwLThcIj5cbiAgICAgIDxGb3JtIHsuLi5mb3JtfT5cbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2Zvcm0uaGFuZGxlU3VibWl0KG9uU3VibWl0KX0gY2xhc3NOYW1lPVwic3BhY2UteS02IGZsZXggZmxleC1jb2xcIj5cbiAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlVzZXJuYW1lPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciB1c2VybmFtZVwiIHsuLi5maWVsZH0gLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSBjbGFzc05hbWU9J2Vycm9yLW1lc3NhZ2UnLz5cbiAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8Rm9ybUZpZWxkXG4gICAgICAgICAgICBjb250cm9sPXtmb3JtLmNvbnRyb2x9XG4gICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcmVuZGVyPXsoeyBmaWVsZCB9KSA9PiAoXG4gICAgICAgICAgICAgIDxGb3JtSXRlbT5cbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsPlBhc3N3b3JkPC9Gb3JtTGFiZWw+XG4gICAgICAgICAgICAgICAgPEZvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgICAgPElucHV0IHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwYXNzd29yZFwiIHsuLi5maWVsZH0gLz5cbiAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxuICAgICAgICAgICAgICAgIDxGb3JtTWVzc2FnZSBjbGFzc05hbWU9J2Vycm9yLW1lc3NhZ2UnLz5cbiAgICAgICAgICAgICAgPC9Gb3JtSXRlbT5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgLz5cbiAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9J3ctZnVsbCcgZGlzYWJsZWQ9e2lzTG9hZGluZ30+XG4gICAgICAgICAgICB7aXNMb2FkaW5nID8gXCJMb2FkaW5nLi4uXCIgOiBcIkxvZ2luXCJ9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvRm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvQ2FyZFdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1Vc2VybmFtZTsiXSwibmFtZXMiOlsiUmVhY3RIb29rRm9ybSIsInVzZVN0YXRlIiwieiIsInpvZFJlc29sdmVyIiwidXNlUm91dGVyIiwiQ2FyZFdyYXBwZXIiLCJGb3JtIiwiRm9ybUl0ZW0iLCJGb3JtTGFiZWwiLCJGb3JtQ29udHJvbCIsIkZvcm1NZXNzYWdlIiwiRm9ybUZpZWxkIiwiQnV0dG9uIiwiSW5wdXQiLCJ1c2VUb2FzdCIsImF1dGgiLCJkYiIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiY29sbGVjdGlvbiIsInF1ZXJ5Iiwid2hlcmUiLCJnZXREb2NzIiwibG9naW5TY2hlbWEiLCJvYmplY3QiLCJ1c2VybmFtZSIsInN0cmluZyIsIm1pbiIsInBhc3N3b3JkIiwiTG9naW5Gb3JtVXNlcm5hbWUiLCJpc0xvYWRpbmciLCJzZXRJc0xvYWRpbmciLCJ0b2FzdCIsInJvdXRlciIsImZvcm0iLCJ1c2VGb3JtIiwicmVzb2x2ZXIiLCJtb2RlIiwiZGVmYXVsdFZhbHVlcyIsIm9uU3VibWl0IiwiZGF0YSIsInVzZXJzUmVmIiwicSIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeVNuYXBzaG90IiwiZW1wdHkiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidmFyaWFudCIsImR1cmF0aW9uIiwid2luZG93IiwibG9jYXRpb24iLCJyZWxvYWQiLCJ1c2VyRG9jIiwiZG9jcyIsInVzZXJEYXRhIiwidXNlclVJRCIsImlkIiwiZW1haWwiLCJ0aGVuIiwidXNlckNyZWRlbnRpYWwiLCJzaWduZWRJblVzZXJVSUQiLCJ1c2VyIiwidWlkIiwic2V0VGltZW91dCIsInJlc2V0IiwicHVzaCIsImVycm9yIiwiZXJyb3JNZXNzYWdlIiwiY29kZSIsIm1lc3NhZ2UiLCJsYWJlbCIsImJhY2tCdXR0b25IcmVmIiwiYmFja0J1dHRvbkxhYmVsIiwidXNlcm5hbWVMb2dpbkhyZWYiLCJ1c2VybmFtZUxvZ2luTGFiZWwiLCJkaXYiLCJjbGFzc05hbWUiLCJoYW5kbGVTdWJtaXQiLCJjb250cm9sIiwibmFtZSIsInJlbmRlciIsImZpZWxkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/auth/LoginFormUsername.jsx\n"));

/***/ })

});