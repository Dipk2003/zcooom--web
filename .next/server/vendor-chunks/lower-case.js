"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/lower-case";
exports.ids = ["vendor-chunks/lower-case"];
exports.modules = {

/***/ "(rsc)/./node_modules/lower-case/dist.es2015/index.js":
/*!******************************************************!*\
  !*** ./node_modules/lower-case/dist.es2015/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   localeLowerCase: () => (/* binding */ localeLowerCase),\n/* harmony export */   lowerCase: () => (/* binding */ lowerCase)\n/* harmony export */ });\n/**\n * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt\n */\nvar SUPPORTED_LOCALE = {\n    tr: {\n        regexp: /\\u0130|\\u0049|\\u0049\\u0307/g,\n        map: {\n            İ: \"\\u0069\",\n            I: \"\\u0131\",\n            İ: \"\\u0069\",\n        },\n    },\n    az: {\n        regexp: /\\u0130/g,\n        map: {\n            İ: \"\\u0069\",\n            I: \"\\u0131\",\n            İ: \"\\u0069\",\n        },\n    },\n    lt: {\n        regexp: /\\u0049|\\u004A|\\u012E|\\u00CC|\\u00CD|\\u0128/g,\n        map: {\n            I: \"\\u0069\\u0307\",\n            J: \"\\u006A\\u0307\",\n            Į: \"\\u012F\\u0307\",\n            Ì: \"\\u0069\\u0307\\u0300\",\n            Í: \"\\u0069\\u0307\\u0301\",\n            Ĩ: \"\\u0069\\u0307\\u0303\",\n        },\n    },\n};\n/**\n * Localized lower case.\n */\nfunction localeLowerCase(str, locale) {\n    var lang = SUPPORTED_LOCALE[locale.toLowerCase()];\n    if (lang)\n        return lowerCase(str.replace(lang.regexp, function (m) { return lang.map[m]; }));\n    return lowerCase(str);\n}\n/**\n * Lower case as a function.\n */\nfunction lowerCase(str) {\n    return str.toLowerCase();\n}\n//# sourceMappingURL=index.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSxpRUFBaUUscUJBQXFCO0FBQ3RGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3lvb20vLi9ub2RlX21vZHVsZXMvbG93ZXItY2FzZS9kaXN0LmVzMjAxNS9pbmRleC5qcz8zYmYwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogU291cmNlOiBmdHA6Ly9mdHAudW5pY29kZS5vcmcvUHVibGljL1VDRC9sYXRlc3QvdWNkL1NwZWNpYWxDYXNpbmcudHh0XG4gKi9cbnZhciBTVVBQT1JURURfTE9DQUxFID0ge1xuICAgIHRyOiB7XG4gICAgICAgIHJlZ2V4cDogL1xcdTAxMzB8XFx1MDA0OXxcXHUwMDQ5XFx1MDMwNy9nLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIMSwOiBcIlxcdTAwNjlcIixcbiAgICAgICAgICAgIEk6IFwiXFx1MDEzMVwiLFxuICAgICAgICAgICAgScyHOiBcIlxcdTAwNjlcIixcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIGF6OiB7XG4gICAgICAgIHJlZ2V4cDogL1xcdTAxMzAvZyxcbiAgICAgICAgbWFwOiB7XG4gICAgICAgICAgICDEsDogXCJcXHUwMDY5XCIsXG4gICAgICAgICAgICBJOiBcIlxcdTAxMzFcIixcbiAgICAgICAgICAgIEnMhzogXCJcXHUwMDY5XCIsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBsdDoge1xuICAgICAgICByZWdleHA6IC9cXHUwMDQ5fFxcdTAwNEF8XFx1MDEyRXxcXHUwMENDfFxcdTAwQ0R8XFx1MDEyOC9nLFxuICAgICAgICBtYXA6IHtcbiAgICAgICAgICAgIEk6IFwiXFx1MDA2OVxcdTAzMDdcIixcbiAgICAgICAgICAgIEo6IFwiXFx1MDA2QVxcdTAzMDdcIixcbiAgICAgICAgICAgIMSuOiBcIlxcdTAxMkZcXHUwMzA3XCIsXG4gICAgICAgICAgICDDjDogXCJcXHUwMDY5XFx1MDMwN1xcdTAzMDBcIixcbiAgICAgICAgICAgIMONOiBcIlxcdTAwNjlcXHUwMzA3XFx1MDMwMVwiLFxuICAgICAgICAgICAgxKg6IFwiXFx1MDA2OVxcdTAzMDdcXHUwMzAzXCIsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG4vKipcbiAqIExvY2FsaXplZCBsb3dlciBjYXNlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9jYWxlTG93ZXJDYXNlKHN0ciwgbG9jYWxlKSB7XG4gICAgdmFyIGxhbmcgPSBTVVBQT1JURURfTE9DQUxFW2xvY2FsZS50b0xvd2VyQ2FzZSgpXTtcbiAgICBpZiAobGFuZylcbiAgICAgICAgcmV0dXJuIGxvd2VyQ2FzZShzdHIucmVwbGFjZShsYW5nLnJlZ2V4cCwgZnVuY3Rpb24gKG0pIHsgcmV0dXJuIGxhbmcubWFwW21dOyB9KSk7XG4gICAgcmV0dXJuIGxvd2VyQ2FzZShzdHIpO1xufVxuLyoqXG4gKiBMb3dlciBjYXNlIGFzIGEgZnVuY3Rpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb3dlckNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci50b0xvd2VyQ2FzZSgpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/lower-case/dist.es2015/index.js\n");

/***/ })

};
;