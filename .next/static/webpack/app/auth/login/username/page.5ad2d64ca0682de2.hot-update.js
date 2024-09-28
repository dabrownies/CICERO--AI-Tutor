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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-hook-form */ \"(app-pages-browser)/./node_modules/react-hook-form/dist/index.esm.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! zod */ \"(app-pages-browser)/./node_modules/zod/lib/index.mjs\");\n/* harmony import */ var _hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @hookform/resolvers/zod */ \"(app-pages-browser)/./node_modules/@hookform/resolvers/zod/dist/zod.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _components_auth_card_wrapper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/auth/card-wrapper */ \"(app-pages-browser)/./components/auth/card-wrapper.jsx\");\n/* harmony import */ var _components_ui_form__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ui/form */ \"(app-pages-browser)/./components/ui/form.jsx\");\n/* harmony import */ var _components_ui_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/ui/button */ \"(app-pages-browser)/./components/ui/button.jsx\");\n/* harmony import */ var _components_ui_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/ui/input */ \"(app-pages-browser)/./components/ui/input.jsx\");\n/* harmony import */ var _hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../hooks/use-toast */ \"(app-pages-browser)/./components/hooks/use-toast.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/firebase */ \"(app-pages-browser)/./firebase.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! firebase/auth */ \"(app-pages-browser)/./node_modules/firebase/auth/dist/esm/index.esm.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! firebase/firestore */ \"(app-pages-browser)/./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n//Components imports\n\n\n\n\n\n\n\n\n//Firebase imports\n\n\n\nconst loginSchema = zod__WEBPACK_IMPORTED_MODULE_12__.z.object({\n    username: zod__WEBPACK_IMPORTED_MODULE_12__.z.string().min(1, \"Username is required.\"),\n    password: zod__WEBPACK_IMPORTED_MODULE_12__.z.string().min(8, {\n        message: \"Password must be at least 8 characters.\"\n    })\n});\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_11__.getFirestore)();\nconst loginWithUsername = async (data)=>{\n    setIsLoading(true);\n    try {\n        //Query firestore for the user with the given username\n        const usersRef = collection(db, \"users\");\n        const q = query(usersRef, where(\"username\", \"==\", data.username));\n        const querySnapshot = await getDocs(q);\n        if (querySnapshot.empty) {\n            (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.toast)({\n                title: \"User not found\",\n                variant: \"destructive\"\n            });\n        }\n        const userDoc = querySnapshot.docs[0];\n        const userData = userDoc.data();\n        await (0,firebase_auth__WEBPACK_IMPORTED_MODULE_10__.signInWithEmailAndPassword)(_firebase__WEBPACK_IMPORTED_MODULE_9__.auth, user.email, data.password);\n    } catch (error) {\n        console.log(error.message);\n        (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.toast)({\n            title: \"Login failed\",\n            description: error.message,\n            variant: \"destructive\"\n        });\n    }\n};\nconst onSubmit = async (data)=>{\n    setIsLoading(true);\n    try {\n        const user1 = await loginWithUsername(data.username, data.password);\n        (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.toast)({\n            title: \"Login successful\",\n            timeout: 1200\n        });\n        form.reset();\n        setTimeout(()=>{\n            router.push(\"/mainScreen\");\n        }, 1500);\n    } catch (error) {\n        if (error.code === \"auth/user-not-found\") {\n            (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.toast)({\n                title: \"User not found, check your usernames and password\",\n                timeout: 1000\n            });\n        } else if (error.code === \"auth/wrong-password\") {\n            (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.toast)({\n                title: \"Invalid username or password\",\n                timeout: 1000\n            });\n        } else {\n            console.log(error.message);\n            (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.toast)({\n                title: \"Login failed\",\n                description: error.message,\n                variant: \"destructive\"\n            });\n        }\n    } finally{\n        setIsLoading(false);\n    }\n};\nconst LoginFormUsername = ()=>{\n    _s();\n    //Loading state\n    const [isLoading, setIsLoading1] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //Toast hook\n    const { toast } = (0,_hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast)();\n    //Router to navigate between pages\n    const router1 = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    //Form initialization\n    const form1 = react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm({\n        resolver: (0,_hookform_resolvers_zod__WEBPACK_IMPORTED_MODULE_2__.zodResolver)(loginSchema),\n        mode: \"onBlur\",\n        defaultValues: {\n            username: \"\",\n            password: \"\"\n        }\n    });\n    //   try{\n    //     await new Promise((resolve) => setTimeout(resolve, 1500));\n    //     //Retrieve user data from local storage\n    //     const registeredUser = JSON.parse(localStorage.getItem(\"registeredUser\"));\n    //     if(!registeredUser){\n    //       toast({\n    //         title: \"Login failed\",\n    //         description: \"User not found, check your usernames and password\",\n    //       });\n    //       setIsLoading(false);\n    //       return;\n    //     }\n    //     //Retrieve username and password\n    //     const enteredUsername = form.getValues(\"username\");\n    //     const enteredPassword = form.getValues(\"password\");\n    //     //Check if the username and password match\n    //     if(enteredUsername === registeredUser.username && enteredPassword === registeredUser.password){\n    //       toast({\n    //         title: \"Login successful\",\n    //         timeout: 1200,\n    //         status: \"success\",\n    //       });\n    //       form.reset();\n    //       setTimeout(() => {\n    //         router.push(\"/mainScreen\")}, 1500);\n    //     }\n    //     else{\n    //       toast({\n    //         title: \"Login failed\",\n    //         description: \"Invalid username or password\",\n    //       })\n    //     }\n    //     }catch(e){\n    //     toast({\n    //       title: \"Login Failed\",\n    //       description: e.message,\n    //       variant: 'destructive',\n    //     });\n    //   }\n    //   setIsLoading(false);\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth_card_wrapper__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        label: \"Login\",\n        title: \"Welcome Back!\",\n        backButtonHref: \"/auth/register\",\n        backButtonLabel: \"Don't have an account? Sign up Here.\",\n        usernameLoginHref: \"/auth/login/email\",\n        usernameLoginLabel: \"Login with email\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.Form, {\n            ...form1,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: form1.handleSubmit(onSubmit),\n                className: \"space-y-6 flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormField, {\n                        control: form1.control,\n                        name: \"username\",\n                        render: (param)=>{\n                            let { field } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormItem, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                        children: \"Username\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 194,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                            placeholder: \"Enter your username\",\n                                            ...field\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 196,\n                                            columnNumber: 19\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 195,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormMessage, {\n                                        className: \"error-message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 198,\n                                        columnNumber: 17\n                                    }, void 0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                lineNumber: 193,\n                                columnNumber: 15\n                            }, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                        lineNumber: 189,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormField, {\n                        control: form1.control,\n                        name: \"password\",\n                        render: (param)=>{\n                            let { field } = param;\n                            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormItem, {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormLabel, {\n                                        children: \"Password\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 207,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormControl, {\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_input__WEBPACK_IMPORTED_MODULE_7__.Input, {\n                                            type: \"password\",\n                                            placeholder: \"Enter your password\",\n                                            ...field\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                            lineNumber: 209,\n                                            columnNumber: 19\n                                        }, void 0)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 208,\n                                        columnNumber: 17\n                                    }, void 0),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_form__WEBPACK_IMPORTED_MODULE_5__.FormMessage, {\n                                        className: \"error-message\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                        lineNumber: 211,\n                                        columnNumber: 17\n                                    }, void 0)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                                lineNumber: 206,\n                                columnNumber: 15\n                            }, void 0);\n                        }\n                    }, void 0, false, {\n                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                        lineNumber: 202,\n                        columnNumber: 11\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_button__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                        type: \"submit\",\n                        className: \"w-full\",\n                        disabled: isLoading,\n                        children: isLoading ? \"Loading...\" : \"Login\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                        lineNumber: 215,\n                        columnNumber: 11\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n                lineNumber: 188,\n                columnNumber: 9\n            }, undefined)\n        }, void 0, false, {\n            fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n            lineNumber: 187,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/ceo/Desktop/hackathon_2024/ai-tutor/components/auth/LoginFormUsername.jsx\",\n        lineNumber: 179,\n        columnNumber: 5\n    }, undefined);\n};\n_s(LoginFormUsername, \"fWkBMTSBF9DGjvagzTqNBzOAhSc=\", false, function() {\n    return [\n        _hooks_use_toast__WEBPACK_IMPORTED_MODULE_8__.useToast,\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_hook_form__WEBPACK_IMPORTED_MODULE_13__.useForm\n    ];\n});\n_c = LoginFormUsername;\n/* harmony default export */ __webpack_exports__[\"default\"] = (LoginFormUsername);\nvar _c;\n$RefreshReg$(_c, \"LoginFormUsername\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvYXV0aC9Mb2dpbkZvcm1Vc2VybmFtZS5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWlEO0FBQ2hCO0FBR2pDLG9CQUFvQjtBQUNHO0FBQytCO0FBQ1Y7QUFDYTtBQVEzQjtBQUNrQjtBQUNGO0FBQ007QUFFcEQsa0JBQWtCO0FBQ2M7QUFDeUI7QUFDUDtBQUdsRCxNQUFNbUIsY0FBY2pCLG1DQUFDQSxDQUFDa0IsTUFBTSxDQUFDO0lBQzNCQyxVQUFVbkIsbUNBQUNBLENBQUNvQixNQUFNLEdBQUdDLEdBQUcsQ0FBQyxHQUN2QjtJQUNBQyxVQUFVdEIsbUNBQUNBLENBQUNvQixNQUFNLEdBQUdDLEdBQUcsQ0FBQyxHQUFHO1FBQzFCRSxTQUFTO0lBQ1g7QUFDSjtBQUdBLE1BQU1DLEtBQUtSLGlFQUFZQTtBQUV2QixNQUFNUyxvQkFBbUIsT0FBT0M7SUFDOUJDLGFBQWE7SUFDYixJQUFHO1FBQ0Qsc0RBQXNEO1FBQ3RELE1BQU1DLFdBQVdDLFdBQVdMLElBQUk7UUFDaEMsTUFBTU0sSUFBSUMsTUFBTUgsVUFBVUksTUFBTSxZQUFZLE1BQU1OLEtBQUtQLFFBQVE7UUFDL0QsTUFBTWMsZ0JBQWdCLE1BQU1DLFFBQVFKO1FBRXBDLElBQUdHLGNBQWNFLEtBQUssRUFBQztZQUNyQnZCLHVEQUFLQSxDQUFDO2dCQUNKd0IsT0FBTztnQkFDUEMsU0FBUztZQUNYO1FBQ0Y7UUFHQSxNQUFNQyxVQUFVTCxjQUFjTSxJQUFJLENBQUMsRUFBRTtRQUNyQyxNQUFNQyxXQUFXRixRQUFRWixJQUFJO1FBRTdCLE1BQU1YLDBFQUEwQkEsQ0FBQ0QsMkNBQUlBLEVBQUUyQixLQUFLQyxLQUFLLEVBQUVoQixLQUFLSixRQUFRO0lBR2hFLEVBQUMsT0FBTXFCLE9BQU07UUFDWEMsUUFBUUMsR0FBRyxDQUFDRixNQUFNcEIsT0FBTztRQUN6QlgsdURBQUtBLENBQUM7WUFDSndCLE9BQU87WUFDUFUsYUFB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QUFZOzRDQUF1QixHQUFHRCxLQUFLOzs7Ozs7Ozs7OztrREFFcEQsOERBQUMvRCw0REFBV0E7d0NBQUMyRCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBSTdCLDhEQUFDMUQsMERBQVNBO3dCQUNSMkQsU0FBU25CLE1BQUttQixPQUFPO3dCQUNyQkMsTUFBSzt3QkFDTEMsUUFBUTtnQ0FBQyxFQUFFQyxLQUFLLEVBQUU7aURBQ2hCLDhEQUFDbEUseURBQVFBOztrREFDUCw4REFBQ0MsMERBQVNBO2tEQUFDOzs7Ozs7a0RBQ1gsOERBQUNDLDREQUFXQTtrREFDViw0RUFBQ0ksdURBQUtBOzRDQUFDOEQsTUFBSzs0Q0FBV0QsYUFBWTs0Q0FBdUIsR0FBR0QsS0FBSzs7Ozs7Ozs7Ozs7a0RBRXBFLDhEQUFDL0QsNERBQVdBO3dDQUFDMkQsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQUk3Qiw4REFBQ3pELHlEQUFNQTt3QkFBQytELE1BQUs7d0JBQVNOLFdBQVU7d0JBQVNPLFVBQVVsQjtrQ0FDaERBLFlBQVksZUFBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU14QztHQS9HTUQ7O1FBSVkxQyxzREFBUUE7UUFFVFgsc0RBQVNBO1FBSVhKLHFEQUFxQjJEOzs7S0FWOUJGO0FBaUhOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL0xvZ2luRm9ybVVzZXJuYW1lLmpzeD9kYzFiIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgKiBhcyBSZWFjdEhvb2tGb3JtIGZyb20gJ3JlYWN0LWhvb2stZm9ybSc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuXG4vL0NvbXBvbmVudHMgaW1wb3J0c1xuaW1wb3J0IHt6IH0gZnJvbSBcInpvZFwiO1xuaW1wb3J0IHsgem9kUmVzb2x2ZXIgfSBmcm9tIFwiQGhvb2tmb3JtL3Jlc29sdmVycy96b2RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvbmF2aWdhdGlvbic7XG5pbXBvcnQgQ2FyZFdyYXBwZXIgZnJvbSBcIkAvY29tcG9uZW50cy9hdXRoL2NhcmQtd3JhcHBlclwiO1xuaW1wb3J0IHtcbiAgRm9ybSxcbiAgRm9ybUl0ZW0sXG4gIEZvcm1MYWJlbCxcbiAgRm9ybUNvbnRyb2wsXG4gIEZvcm1NZXNzYWdlLFxuICBGb3JtRmllbGQsXG59IGZyb20gXCJAL2NvbXBvbmVudHMvdWkvZm9ybVwiO1xuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9idXR0b25cIjtcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIkAvY29tcG9uZW50cy91aS9pbnB1dFwiO1xuaW1wb3J0IHt0b2FzdCwgdXNlVG9hc3QgfSBmcm9tICcuLi9ob29rcy91c2UtdG9hc3QnO1xuXG4vL0ZpcmViYXNlIGltcG9ydHNcbmltcG9ydCB7YXV0aH0gZnJvbSAnQC9maXJlYmFzZSc7XG5pbXBvcnQge3NpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkfSBmcm9tICdmaXJlYmFzZS9hdXRoJztcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gJ2ZpcmViYXNlL2ZpcmVzdG9yZSc7XG5cblxuY29uc3QgbG9naW5TY2hlbWEgPSB6Lm9iamVjdCh7XG4gIHVzZXJuYW1lOiB6LnN0cmluZygpLm1pbigxLFxuICAgICdVc2VybmFtZSBpcyByZXF1aXJlZC4nKSxcbiAgICBwYXNzd29yZDogei5zdHJpbmcoKS5taW4oOCwge1xuICAgICAgbWVzc2FnZTogXCJQYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDggY2hhcmFjdGVycy5cIixcbiAgICB9KVxufSk7XG5cblxuY29uc3QgZGIgPSBnZXRGaXJlc3RvcmUoKTtcblxuY29uc3QgbG9naW5XaXRoVXNlcm5hbWU9IGFzeW5jIChkYXRhKSA9PiB7XG4gIHNldElzTG9hZGluZyh0cnVlKTtcbiAgdHJ5e1xuICAgIC8vUXVlcnkgZmlyZXN0b3JlIGZvciB0aGUgdXNlciB3aXRoIHRoZSBnaXZlbiB1c2VybmFtZVxuICAgIGNvbnN0IHVzZXJzUmVmID0gY29sbGVjdGlvbihkYiwgJ3VzZXJzJyk7XG4gICAgY29uc3QgcSA9IHF1ZXJ5KHVzZXJzUmVmLCB3aGVyZSgndXNlcm5hbWUnLCAnPT0nLCBkYXRhLnVzZXJuYW1lKSk7XG4gICAgY29uc3QgcXVlcnlTbmFwc2hvdCA9IGF3YWl0IGdldERvY3MocSk7XG5cbiAgICBpZihxdWVyeVNuYXBzaG90LmVtcHR5KXtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiVXNlciBub3QgZm91bmRcIixcbiAgICAgICAgdmFyaWFudDogJ2Rlc3RydWN0aXZlJyxcbiAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgY29uc3QgdXNlckRvYyA9IHF1ZXJ5U25hcHNob3QuZG9jc1swXTtcbiAgICBjb25zdCB1c2VyRGF0YSA9IHVzZXJEb2MuZGF0YSgpO1xuXG4gICAgYXdhaXQgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXV0aCwgdXNlci5lbWFpbCwgZGF0YS5wYXNzd29yZCk7XG5cblxuICAgIH1jYXRjaChlcnJvcil7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvci5tZXNzYWdlKTtcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiTG9naW4gZmFpbGVkXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICB2YXJpYW50OiAnZGVzdHJ1Y3RpdmUnLFxuICAgICAgfSk7XG4gICAgfVxufVxuXG5jb25zdCBvblN1Ym1pdCA9IGFzeW5jKGRhdGEpID0+IHtcbiAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICB0cnl7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGxvZ2luV2l0aFVzZXJuYW1lKGRhdGEudXNlcm5hbWUsIGRhdGEucGFzc3dvcmQpO1xuICAgIHRvYXN0KHtcbiAgICAgIHRpdGxlOiBcIkxvZ2luIHN1Y2Nlc3NmdWxcIixcbiAgICAgIHRpbWVvdXQ6IDEyMDAsXG4gICAgfSk7XG4gICAgZm9ybS5yZXNldCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcm91dGVyLnB1c2goXCIvbWFpblNjcmVlblwiKTtcbiAgICB9LDE1MDApO1xuICB9Y2F0Y2goZXJyb3Ipe1xuICAgIGlmKGVycm9yLmNvZGUgPT09ICdhdXRoL3VzZXItbm90LWZvdW5kJyl7XG4gICAgICB0b2FzdCh7XG4gICAgICAgIHRpdGxlOiBcIlVzZXIgbm90IGZvdW5kLCBjaGVjayB5b3VyIHVzZXJuYW1lcyBhbmQgcGFzc3dvcmRcIixcbiAgICAgICAgdGltZW91dDogMTAwMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmKGVycm9yLmNvZGUgPT09ICdhdXRoL3dyb25nLXBhc3N3b3JkJyl7XG4gICAgICB0b2FzdCh7XG4gICAgICAgIHRpdGxlOiBcIkludmFsaWQgdXNlcm5hbWUgb3IgcGFzc3dvcmRcIixcbiAgICAgICAgdGltZW91dDogMTAwMCxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgY29uc29sZS5sb2coZXJyb3IubWVzc2FnZSlcbiAgICAgIHRvYXN0KHtcbiAgICAgICAgdGl0bGU6IFwiTG9naW4gZmFpbGVkXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBlcnJvci5tZXNzYWdlLFxuICAgICAgICB2YXJpYW50OiAnZGVzdHJ1Y3RpdmUnLFxuICAgICAgfSk7XG4gICAgfVxuICB9ZmluYWxseXtcbiAgICBzZXRJc0xvYWRpbmcoZmFsc2UpO1xuICB9XG59XG5cbmNvbnN0IExvZ2luRm9ybVVzZXJuYW1lID0gKCkgPT4ge1xuICAvL0xvYWRpbmcgc3RhdGVcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgLy9Ub2FzdCBob29rXG4gIGNvbnN0IHt0b2FzdH0gPSB1c2VUb2FzdCgpO1xuICAvL1JvdXRlciB0byBuYXZpZ2F0ZSBiZXR3ZWVuIHBhZ2VzXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG5cbiAgLy9Gb3JtIGluaXRpYWxpemF0aW9uXG4gIGNvbnN0IGZvcm0gPSBSZWFjdEhvb2tGb3JtLnVzZUZvcm0oe1xuICAgIHJlc29sdmVyOiB6b2RSZXNvbHZlcihsb2dpblNjaGVtYSksXG4gICAgbW9kZTogXCJvbkJsdXJcIixcbiAgICBkZWZhdWx0VmFsdWVzOiB7XG4gICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgIHBhc3N3b3JkOiBcIlwiLFxuICAgIH0sXG4gIH0pO1xuXG4gIC8vICAgdHJ5e1xuICAvLyAgICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSwgMTUwMCkpO1xuXG4gIC8vICAgICAvL1JldHJpZXZlIHVzZXIgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2VcbiAgLy8gICAgIGNvbnN0IHJlZ2lzdGVyZWRVc2VyID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInJlZ2lzdGVyZWRVc2VyXCIpKTtcblxuICAvLyAgICAgaWYoIXJlZ2lzdGVyZWRVc2VyKXtcbiAgLy8gICAgICAgdG9hc3Qoe1xuICAvLyAgICAgICAgIHRpdGxlOiBcIkxvZ2luIGZhaWxlZFwiLFxuICAvLyAgICAgICAgIGRlc2NyaXB0aW9uOiBcIlVzZXIgbm90IGZvdW5kLCBjaGVjayB5b3VyIHVzZXJuYW1lcyBhbmQgcGFzc3dvcmRcIixcbiAgLy8gICAgICAgfSk7XG5cbiAgLy8gICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgLy8gICAgICAgcmV0dXJuO1xuICAvLyAgICAgfVxuICAgICAgXG4gIC8vICAgICAvL1JldHJpZXZlIHVzZXJuYW1lIGFuZCBwYXNzd29yZFxuICAvLyAgICAgY29uc3QgZW50ZXJlZFVzZXJuYW1lID0gZm9ybS5nZXRWYWx1ZXMoXCJ1c2VybmFtZVwiKTtcbiAgLy8gICAgIGNvbnN0IGVudGVyZWRQYXNzd29yZCA9IGZvcm0uZ2V0VmFsdWVzKFwicGFzc3dvcmRcIik7XG5cbiAgLy8gICAgIC8vQ2hlY2sgaWYgdGhlIHVzZXJuYW1lIGFuZCBwYXNzd29yZCBtYXRjaFxuICAvLyAgICAgaWYoZW50ZXJlZFVzZXJuYW1lID09PSByZWdpc3RlcmVkVXNlci51c2VybmFtZSAmJiBlbnRlcmVkUGFzc3dvcmQgPT09IHJlZ2lzdGVyZWRVc2VyLnBhc3N3b3JkKXtcbiAgLy8gICAgICAgdG9hc3Qoe1xuICAvLyAgICAgICAgIHRpdGxlOiBcIkxvZ2luIHN1Y2Nlc3NmdWxcIixcbiAgLy8gICAgICAgICB0aW1lb3V0OiAxMjAwLFxuICAvLyAgICAgICAgIHN0YXR1czogXCJzdWNjZXNzXCIsXG4gIC8vICAgICAgIH0pO1xuICAvLyAgICAgICBmb3JtLnJlc2V0KCk7XG4gIC8vICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAvLyAgICAgICAgIHJvdXRlci5wdXNoKFwiL21haW5TY3JlZW5cIil9LCAxNTAwKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIGVsc2V7XG4gIC8vICAgICAgIHRvYXN0KHtcbiAgLy8gICAgICAgICB0aXRsZTogXCJMb2dpbiBmYWlsZWRcIixcbiAgLy8gICAgICAgICBkZXNjcmlwdGlvbjogXCJJbnZhbGlkIHVzZXJuYW1lIG9yIHBhc3N3b3JkXCIsXG4gIC8vICAgICAgIH0pXG4gIC8vICAgICB9XG4gIC8vICAgICB9Y2F0Y2goZSl7XG4gIC8vICAgICB0b2FzdCh7XG4gIC8vICAgICAgIHRpdGxlOiBcIkxvZ2luIEZhaWxlZFwiLFxuICAvLyAgICAgICBkZXNjcmlwdGlvbjogZS5tZXNzYWdlLFxuICAvLyAgICAgICB2YXJpYW50OiAnZGVzdHJ1Y3RpdmUnLFxuICAvLyAgICAgfSk7XG4gIC8vICAgfVxuICAvLyAgIHNldElzTG9hZGluZyhmYWxzZSk7XG4gIC8vIH1cblxuXG4gIHJldHVybiAoXG4gICAgPENhcmRXcmFwcGVyXG4gICAgICBsYWJlbD1cIkxvZ2luXCJcbiAgICAgIHRpdGxlPVwiV2VsY29tZSBCYWNrIVwiXG4gICAgICBiYWNrQnV0dG9uSHJlZj1cIi9hdXRoL3JlZ2lzdGVyXCJcbiAgICAgIGJhY2tCdXR0b25MYWJlbD1cIkRvbid0IGhhdmUgYW4gYWNjb3VudD8gU2lnbiB1cCBIZXJlLlwiXG4gICAgICB1c2VybmFtZUxvZ2luSHJlZj17XCIvYXV0aC9sb2dpbi9lbWFpbFwifVxuICAgICAgdXNlcm5hbWVMb2dpbkxhYmVsPVwiTG9naW4gd2l0aCBlbWFpbFwiXG4gICAgPlxuICAgICAgPEZvcm0gey4uLmZvcm19PlxuICAgICAgICA8Zm9ybSBvblN1Ym1pdD17Zm9ybS5oYW5kbGVTdWJtaXQob25TdWJtaXQpfSBjbGFzc05hbWU9XCJzcGFjZS15LTYgZmxleCBmbGV4LWNvbFwiPlxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIGNvbnRyb2w9e2Zvcm0uY29udHJvbH1cbiAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+VXNlcm5hbWU8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHVzZXJuYW1lXCIgey4uLmZpZWxkfSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPEZvcm1NZXNzYWdlIGNsYXNzTmFtZT0nZXJyb3ItbWVzc2FnZScvPlxuICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxGb3JtRmllbGRcbiAgICAgICAgICAgIGNvbnRyb2w9e2Zvcm0uY29udHJvbH1cbiAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICByZW5kZXI9eyh7IGZpZWxkIH0pID0+IChcbiAgICAgICAgICAgICAgPEZvcm1JdGVtPlxuICAgICAgICAgICAgICAgIDxGb3JtTGFiZWw+UGFzc3dvcmQ8L0Zvcm1MYWJlbD5cbiAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgICA8SW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIHBhc3N3b3JkXCIgey4uLmZpZWxkfSAvPlxuICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPEZvcm1NZXNzYWdlIGNsYXNzTmFtZT0nZXJyb3ItbWVzc2FnZScvPlxuICAgICAgICAgICAgICA8L0Zvcm1JdGVtPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxCdXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT0ndy1mdWxsJyBkaXNhYmxlZD17aXNMb2FkaW5nfT5cbiAgICAgICAgICAgIHtpc0xvYWRpbmcgPyBcIkxvYWRpbmcuLi5cIiA6IFwiTG9naW5cIn1cbiAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9Gb3JtPlxuICAgIDwvQ2FyZFdyYXBwZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkZvcm1Vc2VybmFtZTsiXSwibmFtZXMiOlsiUmVhY3RIb29rRm9ybSIsInVzZVN0YXRlIiwieiIsInpvZFJlc29sdmVyIiwidXNlUm91dGVyIiwiQ2FyZFdyYXBwZXIiLCJGb3JtIiwiRm9ybUl0ZW0iLCJGb3JtTGFiZWwiLCJGb3JtQ29udHJvbCIsIkZvcm1NZXNzYWdlIiwiRm9ybUZpZWxkIiwiQnV0dG9uIiwiSW5wdXQiLCJ0b2FzdCIsInVzZVRvYXN0IiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwiZ2V0RmlyZXN0b3JlIiwibG9naW5TY2hlbWEiLCJvYmplY3QiLCJ1c2VybmFtZSIsInN0cmluZyIsIm1pbiIsInBhc3N3b3JkIiwibWVzc2FnZSIsImRiIiwibG9naW5XaXRoVXNlcm5hbWUiLCJkYXRhIiwic2V0SXNMb2FkaW5nIiwidXNlcnNSZWYiLCJjb2xsZWN0aW9uIiwicSIsInF1ZXJ5Iiwid2hlcmUiLCJxdWVyeVNuYXBzaG90IiwiZ2V0RG9jcyIsImVtcHR5IiwidGl0bGUiLCJ2YXJpYW50IiwidXNlckRvYyIsImRvY3MiLCJ1c2VyRGF0YSIsInVzZXIiLCJlbWFpbCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImRlc2NyaXB0aW9uIiwib25TdWJtaXQiLCJ0aW1lb3V0IiwiZm9ybSIsInJlc2V0Iiwic2V0VGltZW91dCIsInJvdXRlciIsInB1c2giLCJjb2RlIiwiTG9naW5Gb3JtVXNlcm5hbWUiLCJpc0xvYWRpbmciLCJ1c2VGb3JtIiwicmVzb2x2ZXIiLCJtb2RlIiwiZGVmYXVsdFZhbHVlcyIsImxhYmVsIiwiYmFja0J1dHRvbkhyZWYiLCJiYWNrQnV0dG9uTGFiZWwiLCJ1c2VybmFtZUxvZ2luSHJlZiIsInVzZXJuYW1lTG9naW5MYWJlbCIsImhhbmRsZVN1Ym1pdCIsImNsYXNzTmFtZSIsImNvbnRyb2wiLCJuYW1lIiwicmVuZGVyIiwiZmllbGQiLCJwbGFjZWhvbGRlciIsInR5cGUiLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/auth/LoginFormUsername.jsx\n"));

/***/ })

});