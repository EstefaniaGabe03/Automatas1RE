"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/app/page.js":
/*!*************************!*\
  !*** ./src/app/page.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\nfunction Home() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Analizador l\\xe9xico JSON\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\OneDrive\\\\Escritorio\\\\Automatas1RE\\\\src\\\\app\\\\page.js\",\n                lineNumber: 7,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                type: \"file\",\n                accept: \".json\",\n                onChange: validacionJSONtokens,\n                style: {\n                    display: \"none\"\n                },\n                id: \"fileInput\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\OneDrive\\\\Escritorio\\\\Automatas1RE\\\\src\\\\app\\\\page.js\",\n                lineNumber: 8,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                children: \"Analizar texto\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\OneDrive\\\\Escritorio\\\\Automatas1RE\\\\src\\\\app\\\\page.js\",\n                lineNumber: 15,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: \"Estefan\\xeda Garc\\xeda Beltr\\xe1n\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\OneDrive\\\\Escritorio\\\\Automatas1RE\\\\src\\\\app\\\\page.js\",\n                lineNumber: 16,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Dell\\\\OneDrive\\\\Escritorio\\\\Automatas1RE\\\\src\\\\app\\\\page.js\",\n                lineNumber: 17,\n                columnNumber: 1\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Dell\\\\OneDrive\\\\Escritorio\\\\Automatas1RE\\\\src\\\\app\\\\page.js\",\n        lineNumber: 6,\n        columnNumber: 1\n    }, this);\n}\n_c = Home;\n;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvcGFnZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUMwQjtBQUVYLFNBQVNDO0lBQ3RCLHFCQUNGLDhEQUFDQztRQUFJQyxPQUFPO1lBQUNDLFdBQVU7UUFBUTs7MEJBQy9CLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDQztnQkFDREMsTUFBSztnQkFDTEMsUUFBTztnQkFDUEMsVUFBVUM7Z0JBQ1ZQLE9BQU87b0JBQUNRLFNBQVE7Z0JBQU07Z0JBQ3RCQyxJQUFHOzs7Ozs7MEJBRUgsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNDOzBCQUFFOzs7Ozs7MEJBQ0gsOERBQUNDOzs7Ozs7Ozs7OztBQUtEO0tBbEJ3QmQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC9wYWdlLmpzPzJiM2QiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICByZXR1cm4gKFxuPGRpdiBzdHlsZT17e3RleHRBbGlnbjonY2VudGVyJ319PlxuPGgxPkFuYWxpemFkb3IgbMOpeGljbyBKU09OPC9oMT5cbjxpbnB1dFxudHlwZT1cImZpbGVcIlxuYWNjZXB0PVwiLmpzb25cIlxub25DaGFuZ2U9e3ZhbGlkYWNpb25KU09OdG9rZW5zfVxuc3R5bGU9e3tkaXNwbGF5Oidub25lJ319XG5pZD1cImZpbGVJbnB1dFwiXG4+PC9pbnB1dD5cbjxoMj5BbmFsaXphciB0ZXh0bzwvaDI+XG48cD5Fc3RlZmFuw61hIEdhcmPDrWEgQmVsdHLDoW48L3A+XG48bGFiZWxcbj48L2xhYmVsPlxuPC9kaXY+XG5cbiAgICApXG59OyBcblxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiSG9tZSIsImRpdiIsInN0eWxlIiwidGV4dEFsaWduIiwiaDEiLCJpbnB1dCIsInR5cGUiLCJhY2NlcHQiLCJvbkNoYW5nZSIsInZhbGlkYWNpb25KU09OdG9rZW5zIiwiZGlzcGxheSIsImlkIiwiaDIiLCJwIiwibGFiZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/page.js\n"));

/***/ })

});