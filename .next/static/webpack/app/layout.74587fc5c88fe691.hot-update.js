"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/globals.css":
/*!*****************************!*\
  !*** ./src/app/globals.css ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"016b95a949c4\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZ2xvYmFscy5jc3MiLCJtYXBwaW5ncyI6IjtBQUFBLCtEQUFlLGNBQWM7QUFDN0IsSUFBSSxJQUFVLElBQUksaUJBQWlCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZ2xvYmFscy5jc3M/MzBkZCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBcIjAxNmI5NWE5NDljNFwiXG5pZiAobW9kdWxlLmhvdCkgeyBtb2R1bGUuaG90LmFjY2VwdCgpIH1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/app/component/MobileMenu.jsx":
/*!******************************************!*\
  !*** ./src/app/component/MobileMenu.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst MobileMenu = (param)=>{\n    let { isMenuOpen, handleNavigate } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"md:hidden absolute top-20 left-0 right-0 bg-customBg flex gap-3 flex-col items-center py-5 text-white transition-transform transform border border-t-1 \".concat(isMenuOpen ? \"translate-x-0\" : \"-translate-x-full\"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/about\",\n                onClick: ()=>handleNavigate(\"/about\"),\n                children: \"About\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/train/src/app/component/MobileMenu.jsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/blogs\",\n                onClick: ()=>handleNavigate(\"/blogs\"),\n                children: \"Blogs\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/train/src/app/component/MobileMenu.jsx\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {\n                href: \"/faqs\",\n                onClick: ()=>handleNavigate(\"/faqs\"),\n                children: \"Faqs\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/train/src/app/component/MobileMenu.jsx\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"text-white font-bold\",\n                onClick: ()=>handleNavigate(\"/login\"),\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"/Users/mac/Desktop/train/src/app/component/MobileMenu.jsx\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/mac/Desktop/train/src/app/component/MobileMenu.jsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, undefined);\n};\n_c = MobileMenu;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MobileMenu);\nvar _c;\n$RefreshReg$(_c, \"MobileMenu\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvY29tcG9uZW50L01vYmlsZU1lbnUuanN4IiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZCO0FBRTdCLE1BQU1DLGFBQWE7UUFBQyxFQUFFQyxVQUFVLEVBQUVDLGNBQWMsRUFBRTtJQUNoRCxxQkFDRSw4REFBQ0M7UUFDQ0MsV0FBVywwSkFFVixPQURDSCxhQUFhLGtCQUFrQjs7MEJBR2pDLDhEQUFDRixrREFBSUE7Z0JBQUNNLE1BQUs7Z0JBQVNDLFNBQVMsSUFBTUosZUFBZTswQkFBVzs7Ozs7OzBCQUc3RCw4REFBQ0gsa0RBQUlBO2dCQUFDTSxNQUFLO2dCQUFTQyxTQUFTLElBQU1KLGVBQWU7MEJBQVc7Ozs7OzswQkFHN0QsOERBQUNILGtEQUFJQTtnQkFBQ00sTUFBSztnQkFBUUMsU0FBUyxJQUFNSixlQUFlOzBCQUFVOzs7Ozs7MEJBRzNELDhEQUFDSztnQkFDQ0gsV0FBVTtnQkFDVkUsU0FBUyxJQUFNSixlQUFlOzBCQUMvQjs7Ozs7Ozs7Ozs7O0FBS1A7S0F4Qk1GO0FBMEJOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvY29tcG9uZW50L01vYmlsZU1lbnUuanN4PzllOTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBNb2JpbGVNZW51ID0gKHsgaXNNZW51T3BlbiwgaGFuZGxlTmF2aWdhdGUgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT17YG1kOmhpZGRlbiBhYnNvbHV0ZSB0b3AtMjAgbGVmdC0wIHJpZ2h0LTAgYmctY3VzdG9tQmcgZmxleCBnYXAtMyBmbGV4LWNvbCBpdGVtcy1jZW50ZXIgcHktNSB0ZXh0LXdoaXRlIHRyYW5zaXRpb24tdHJhbnNmb3JtIHRyYW5zZm9ybSBib3JkZXIgYm9yZGVyLXQtMSAke1xuICAgICAgICBpc01lbnVPcGVuID8gXCJ0cmFuc2xhdGUteC0wXCIgOiBcIi10cmFuc2xhdGUteC1mdWxsXCJcbiAgICAgIH1gfVxuICAgID5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXZpZ2F0ZShcIi9hYm91dFwiKX0+XG4gICAgICAgIEFib3V0XG4gICAgICA8L0xpbms+XG4gICAgICA8TGluayBocmVmPVwiL2Jsb2dzXCIgb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGUoXCIvYmxvZ3NcIil9PlxuICAgICAgICBCbG9nc1xuICAgICAgPC9MaW5rPlxuICAgICAgPExpbmsgaHJlZj1cIi9mYXFzXCIgb25DbGljaz17KCkgPT4gaGFuZGxlTmF2aWdhdGUoXCIvZmFxc1wiKX0+XG4gICAgICAgIEZhcXNcbiAgICAgIDwvTGluaz5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBmb250LWJvbGRcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVOYXZpZ2F0ZShcIi9sb2dpblwiKX1cbiAgICAgID5cbiAgICAgICAgTG9naW5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9iaWxlTWVudTtcbiJdLCJuYW1lcyI6WyJMaW5rIiwiTW9iaWxlTWVudSIsImlzTWVudU9wZW4iLCJoYW5kbGVOYXZpZ2F0ZSIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJvbkNsaWNrIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/component/MobileMenu.jsx\n"));

/***/ })

});