/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* Fonts */\r\n\r\n/* CSS Reset */\r\n\r\n/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Remove default margin */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\nul,\r\nol {\r\n  list-style: none;\r\n}\r\n\r\n/* Set core root defaults */\r\nhtml:focus-within {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: \"Fira Sans\", sans-serif;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\r\n@media (prefers-reduced-motion: reduce) {\r\n  html:focus-within {\r\n    scroll-behavior: auto;\r\n  }\r\n\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}\r\n\r\n/* Main Styles */\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow:\r\n    rgba(50, 50, 93, 0.4) 0 50px 100px -20px,\r\n    rgba(0, 0, 0, 0.2) 0 30px 60px -30px,\r\n    rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset;\r\n  border-radius: 10px;\r\n  min-width: 500px;\r\n  width: 700px;\r\n  max-width: 50vw;\r\n  overflow: hidden;\r\n}\r\n\r\n.container > * {\r\n  flex-basis: 50px;\r\n}\r\n\r\n.container h2 {\r\n  padding: 0.5em 0 0.25em 0.75em;\r\n  font-weight: 600;\r\n  border-bottom: 1px solid rgba(128, 128, 128, 0.425);\r\n  font-size: 1.25em;\r\n}\r\n\r\n.add-input-container {\r\n  display: flex;\r\n  padding-left: 1em;\r\n  padding-right: 0.75em;\r\n  border-bottom: 1px solid rgba(128, 128, 128, 0.425);\r\n}\r\n\r\n.add-input-container .todo-input {\r\n  flex: 1;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.add-input-container .todo-input::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.btn-add-todo {\r\n  background: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: gray;\r\n}\r\n\r\n.btn-add-todo:disabled {\r\n  color: rgba(128, 128, 128, 0.534);\r\n  cursor: not-allowed;\r\n}\r\n\r\n.todo-list {\r\n  margin: 0;\r\n  padding-left: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.todo-item {\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgba(128, 128, 128, 0.425);\r\n  flex-basis: 50px;\r\n}\r\n\r\n.todo-item label {\r\n  display: flex;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n\r\n.todo-list .todo-item:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.todo-item-check {\r\n  margin-right: 0.5em;\r\n  transform: scale(1.25);\r\n}\r\n\r\n.todo-item-description {\r\n  flex: 1;\r\n  border: none;\r\n  background-color: transparent;\r\n  color: black;\r\n  outline: none;\r\n}\r\n\r\n.todo-completed .todo-item-description {\r\n  text-decoration: line-through black;\r\n  color: gray;\r\n}\r\n\r\n.item-edit-icon {\r\n  cursor: move;\r\n  color: gray;\r\n}\r\n\r\n.editing .item-edit-icon {\r\n  display: none;\r\n}\r\n\r\n.item-delete-icon {\r\n  color: #f00;\r\n  display: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.editing .item-delete-icon {\r\n  display: initial;\r\n}\r\n\r\n.btn-clear {\r\n  border: none;\r\n  padding: 0.75em 0;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  background: radial-gradient(at 50% 0%, rgba(206, 206, 206, 0.479) 70%, transparent);\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,UAAU;;AAGV,cAAc;;AAEd,qBAAqB;AACrB;;;EAGE,sBAAsB;AACxB;;AAEA,0BAA0B;AAC1B;;;;;;;;;;EAUE,SAAS;AACX;;AAEA,2GAA2G;AAC3G;;EAEE,gBAAgB;AAClB;;AAEA,2BAA2B;AAC3B;EACE,uBAAuB;AACzB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;AAChC;;AAEA,oCAAoC;AACpC;;EAEE,eAAe;EACf,cAAc;AAChB;;AAEA,yCAAyC;AACzC;;;;EAIE,aAAa;AACf;;AAEA,gGAAgG;AAChG;EACE;IACE,qBAAqB;EACvB;;EAEA;;;IAGE,qCAAqC;IACrC,uCAAuC;IACvC,sCAAsC;IACtC,gCAAgC;EAClC;AACF;;AAEA,gBAAgB;AAChB;EACE,aAAa;EACb,sBAAsB;EACtB;;;6CAG2C;EAC3C,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,8BAA8B;EAC9B,gBAAgB;EAChB,mDAAmD;EACnD,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,qBAAqB;EACrB,mDAAmD;AACrD;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,uBAAuB;EACvB,YAAY;EACZ,eAAe;EACf,WAAW;AACb;;AAEA;EACE,iCAAiC;EACjC,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,eAAe;EACf,aAAa;EACb,sBAAsB;EACtB,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,OAAO;EACP,aAAa;EACb,mBAAmB;EACnB,mDAAmD;EACnD,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,OAAO;AACT;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,sBAAsB;AACxB;;AAEA;EACE,OAAO;EACP,YAAY;EACZ,6BAA6B;EAC7B,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,mCAAmC;EACnC,WAAW;AACb;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,WAAW;EACX,aAAa;EACb,eAAe;AACjB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,mFAAmF;AACrF","sourcesContent":["/* Fonts */\r\n@import url(\"https://fonts.googleapis.com/css2?family=Fira+Sans:wght@100;200;300&display=swap\");\r\n\r\n/* CSS Reset */\r\n\r\n/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Remove default margin */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\nul,\r\nol {\r\n  list-style: none;\r\n}\r\n\r\n/* Set core root defaults */\r\nhtml:focus-within {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  text-rendering: optimizeSpeed;\r\n  line-height: 1.5;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-family: \"Fira Sans\", sans-serif;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */\r\n@media (prefers-reduced-motion: reduce) {\r\n  html:focus-within {\r\n    scroll-behavior: auto;\r\n  }\r\n\r\n  *,\r\n  *::before,\r\n  *::after {\r\n    animation-duration: 0.01ms !important;\r\n    animation-iteration-count: 1 !important;\r\n    transition-duration: 0.01ms !important;\r\n    scroll-behavior: auto !important;\r\n  }\r\n}\r\n\r\n/* Main Styles */\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  box-shadow:\r\n    rgba(50, 50, 93, 0.4) 0 50px 100px -20px,\r\n    rgba(0, 0, 0, 0.2) 0 30px 60px -30px,\r\n    rgba(10, 37, 64, 0.35) 0 -2px 6px 0 inset;\r\n  border-radius: 10px;\r\n  min-width: 500px;\r\n  width: 700px;\r\n  max-width: 50vw;\r\n  overflow: hidden;\r\n}\r\n\r\n.container > * {\r\n  flex-basis: 50px;\r\n}\r\n\r\n.container h2 {\r\n  padding: 0.5em 0 0.25em 0.75em;\r\n  font-weight: 600;\r\n  border-bottom: 1px solid rgba(128, 128, 128, 0.425);\r\n  font-size: 1.25em;\r\n}\r\n\r\n.add-input-container {\r\n  display: flex;\r\n  padding-left: 1em;\r\n  padding-right: 0.75em;\r\n  border-bottom: 1px solid rgba(128, 128, 128, 0.425);\r\n}\r\n\r\n.add-input-container .todo-input {\r\n  flex: 1;\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\n.add-input-container .todo-input::placeholder {\r\n  font-style: italic;\r\n}\r\n\r\n.btn-add-todo {\r\n  background: transparent;\r\n  border: none;\r\n  cursor: pointer;\r\n  color: gray;\r\n}\r\n\r\n.btn-add-todo:disabled {\r\n  color: rgba(128, 128, 128, 0.534);\r\n  cursor: not-allowed;\r\n}\r\n\r\n.todo-list {\r\n  margin: 0;\r\n  padding-left: 0;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.todo-item {\r\n  padding-left: 1em;\r\n  padding-right: 1em;\r\n  flex: 1;\r\n  display: flex;\r\n  align-items: center;\r\n  border-bottom: 1px solid rgba(128, 128, 128, 0.425);\r\n  flex-basis: 50px;\r\n}\r\n\r\n.todo-item label {\r\n  display: flex;\r\n  align-items: center;\r\n  flex: 1;\r\n}\r\n\r\n.todo-list .todo-item:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n.todo-item-check {\r\n  margin-right: 0.5em;\r\n  transform: scale(1.25);\r\n}\r\n\r\n.todo-item-description {\r\n  flex: 1;\r\n  border: none;\r\n  background-color: transparent;\r\n  color: black;\r\n  outline: none;\r\n}\r\n\r\n.todo-completed .todo-item-description {\r\n  text-decoration: line-through black;\r\n  color: gray;\r\n}\r\n\r\n.item-edit-icon {\r\n  cursor: move;\r\n  color: gray;\r\n}\r\n\r\n.editing .item-edit-icon {\r\n  display: none;\r\n}\r\n\r\n.item-delete-icon {\r\n  color: #f00;\r\n  display: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.editing .item-delete-icon {\r\n  display: initial;\r\n}\r\n\r\n.btn-clear {\r\n  border: none;\r\n  padding: 0.75em 0;\r\n  cursor: pointer;\r\n  font-weight: 600;\r\n  background: radial-gradient(at 50% 0%, rgba(206, 206, 206, 0.479) 70%, transparent);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/Store.js":
/*!**********************!*\
  !*** ./src/Store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Store)
/* harmony export */ });
class Store {
  static getData() {
    if (!window.localStorage.getItem('todoData')) return null;
    return JSON.parse(window.localStorage.getItem('todoData'));
  }

  static setData(data) {
    window.localStorage.setItem('todoData', JSON.stringify(data));
  }
}

/***/ }),

/***/ "./src/Todo.js":
/*!*********************!*\
  !*** ./src/Todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Todo)
/* harmony export */ });
/* harmony import */ var _Store_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Store.js */ "./src/Store.js");


class Todo {
  static todos = [];

  constructor(description) {
    this.index = Todo.todos.length;
    this.description = description;
    this.completed = false;
  }

  static toggleTodoStatus(index) {
    Todo.todos = Todo.todos.map((todo) => {
      if (todo.index === parseInt(index, 10)) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    _Store_js__WEBPACK_IMPORTED_MODULE_0__["default"].setData(Todo.todos);
    Todo.renderUI();
  }

  static renderUI() {
    const todoList = document.querySelector('.todo-list');
    todoList.innerHTML = '';
    Todo.reassignTodoIndices();
    Todo.todos.forEach((todoItem) => {
      const li = document.createElement('li');
      li.className = 'todo-item';
      li.innerHTML = `
      <label data-index=${todoItem.index} class="${todoItem.completed ? 'todo-completed' : ''}">
        <input type="checkbox" class="todo-item-check" ${todoItem.completed ? 'checked' : ''}>
        <input type="text" class="todo-item-description" value="${todoItem.description}" disabled>
      </label>
      <i class="fas fa-ellipsis-v item-edit-icon"></i>
      <i class="fas fa-trash-alt item-delete-icon"></i>
      `;
      todoList.appendChild(li);
    });

    // Event listeners for the checkboxes on each todo item
    const todosCheckboxes = document.querySelectorAll('.todo-item-check');
    [...todosCheckboxes].forEach((chkBox) => {
      chkBox.addEventListener('change', (e) => {
        const todoNode = e.target.parentNode;
        Todo.toggleTodoStatus(todoNode.dataset.index);
      });
    });

    // Event listeners for the edit icons to edit the todo description
    const editIcons = document.querySelectorAll('.item-edit-icon');
    [...editIcons].forEach((icon) => {
      icon.addEventListener('click', (e) => {
        const todoNode = e.target.parentNode;
        const todoDescription = todoNode.querySelector('.todo-item-description');
        todoNode.classList.add('editing');
        if (todoNode.querySelector('.todo-completed')) return; // prevents editing in already completed todos
        todoDescription.disabled = false;
        todoDescription.focus();
        todoDescription.selectionStart = todoDescription.value.length;
      });
    });

    // Event listeners for the todos description on blurring out of the input field
    const todoItemDescription = document.querySelectorAll('.todo-item-description');
    [...todoItemDescription].forEach((input) => {
      input.addEventListener('blur', (e) => {
        const todoNode = e.target.parentNode.parentNode;
        const todoIndex = e.target.parentNode.dataset.index;
        const todo = Todo.todos.find((todo) => todo.index === parseInt(todoIndex, 10));
        e.target.value = todo.description;
        e.target.disabled = true;
        setTimeout(() => {
          todoNode.classList.remove('editing');
        }, 100);
      });
    });

    // Event listeners for the todos description on pressing Enter to change it
    [...todoItemDescription].forEach((input) => {
      input.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
          const todoIndex = e.target.parentNode.dataset.index;
          const todoNewDescription = e.target.value;
          if (!todoNewDescription) {
            alert('Please add a new description to the selected todo. If you want to delete the todo, you can click the red bin button next to it in edit mode.');
            return;
          }
          Todo.editTodo(todoIndex, todoNewDescription);
        }
      });
    });

    // Event listeners for the todos delete button
    const deleteIcons = document.querySelectorAll('.item-delete-icon');
    [...deleteIcons].forEach((icon) => {
      icon.addEventListener('click', (e) => {
        const itemIndexToBeRemoved = parseInt(e.target.parentNode.querySelector('label').dataset.index, 10);
        Todo.deleteTodos(itemIndexToBeRemoved);
      });
    });
  }

  static add(description) {
    const newTodo = new Todo(description);
    Todo.todos.push(newTodo);
    _Store_js__WEBPACK_IMPORTED_MODULE_0__["default"].setData(Todo.todos);
  }

  static editTodo(todoIndex, newDescription) {
    Todo.todos = Todo.todos.map((todo) => {
      if (todo.index === parseInt(todoIndex, 10)) {
        todo.description = newDescription;
      }
      return todo;
    });
    _Store_js__WEBPACK_IMPORTED_MODULE_0__["default"].setData(Todo.todos);
    Todo.renderUI();
  }

  static deleteTodos(...indices) {
    indices.forEach((index) => {
      Todo.todos = Todo.todos.filter((todo) => todo.index !== index);
    });
    Todo.renderUI();
    _Store_js__WEBPACK_IMPORTED_MODULE_0__["default"].setData(Todo.todos);
  }

  static reassignTodoIndices() {
    Todo.todos = Todo.todos.map((todo, counter) => {
      todo.index = counter;
      return todo;
    });
  }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _Todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Todo.js */ "./src/Todo.js");
/* harmony import */ var _Store_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Store.js */ "./src/Store.js");




window.onload = () => {
  const todoInput = document.querySelector('.todo-input');
  const addTodoBtn = document.querySelector('.btn-add-todo');
  const clearAllBtn = document.querySelector('.btn-clear');

  const data = _Store_js__WEBPACK_IMPORTED_MODULE_2__["default"].getData();
  if (!data) {
    const dataToBeStored = [
      {
        index: 0,
        description: 'Do chores',
        completed: false,
      },
      {
        index: 1,
        description: 'Join board meeting',
        completed: false,
      },
      {
        index: 2,
        description: 'Walk the dog',
        completed: true,
      },
    ];
    _Store_js__WEBPACK_IMPORTED_MODULE_2__["default"].setData(dataToBeStored);
    _Todo_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos = dataToBeStored;
  } else {
    _Todo_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos = data;
  }
  _Todo_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderUI();

  addTodoBtn.addEventListener('click', (e) => {
    _Todo_js__WEBPACK_IMPORTED_MODULE_1__["default"].add(todoInput.value.trim());
    todoInput.value = '';
    e.target.parentNode.disabled = true;
    _Todo_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderUI();
  });

  todoInput.addEventListener('keyup', (e) => {
    if (todoInput.value.trim() !== '') {
      addTodoBtn.disabled = false;
      if (e.key === 'Enter') {
        _Todo_js__WEBPACK_IMPORTED_MODULE_1__["default"].add(todoInput.value.trim());
        todoInput.value = '';
        addTodoBtn.disabled = true;
        _Todo_js__WEBPACK_IMPORTED_MODULE_1__["default"].renderUI();
      }
    } else {
      addTodoBtn.disabled = true;
    }
  });

  clearAllBtn.addEventListener('click', () => {
    const todosToBeRemoved = _Todo_js__WEBPACK_IMPORTED_MODULE_1__["default"].todos.filter((todo) => todo.completed);
    const todosIndices = todosToBeRemoved.map((todo) => todo.index);
    _Todo_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteTodos(...todosIndices);
  });
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ1E7QUFDRTs7QUFFL0I7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSx5REFBYTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxJQUFJLHlEQUFhO0FBQ2pCLElBQUksc0RBQVU7QUFDZCxJQUFJO0FBQ0osSUFBSSxzREFBVTtBQUNkO0FBQ0EsRUFBRSx5REFBYTs7QUFFZjtBQUNBLElBQUksb0RBQVE7QUFDWjtBQUNBO0FBQ0EsSUFBSSx5REFBYTtBQUNqQixHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSxvREFBUTtBQUNoQjtBQUNBO0FBQ0EsUUFBUSx5REFBYTtBQUNyQjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBLDZCQUE2Qiw2REFBaUI7QUFDOUM7QUFDQSxJQUFJLDREQUFnQjtBQUNwQixHQUFHO0FBQ0gsRSIsInNvdXJjZXMiOlsid2VicGFjazovL1RPRE8tTGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vVE9ETy1MaXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9UT0RPLUxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9UT0RPLUxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vVE9ETy1MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL1RPRE8tTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vVE9ETy1MaXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL1RPRE8tTGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9UT0RPLUxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9UT0RPLUxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9UT0RPLUxpc3QvLi9zcmMvU3RvcmUuanMiLCJ3ZWJwYWNrOi8vVE9ETy1MaXN0Ly4vc3JjL1RvZG8uanMiLCJ3ZWJwYWNrOi8vVE9ETy1MaXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL1RPRE8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9UT0RPLUxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL1RPRE8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL1RPRE8tTGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL1RPRE8tTGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUZpcmErU2Fuczp3Z2h0QDEwMDsyMDA7MzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEZvbnRzICovXFxyXFxuXFxyXFxuLyogQ1NTIFJlc2V0ICovXFxyXFxuXFxyXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcclxcbmJvZHksXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxucCxcXHJcXG5maWd1cmUsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5kbCxcXHJcXG5kZCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcclxcbnVsLFxcclxcbm9sIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXHJcXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcclxcbmE6bm90KFtjbGFzc10pIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcclxcbmltZyxcXHJcXG5waWN0dXJlIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXHJcXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcclxcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAqLFxcclxcbiAgKjo6YmVmb3JlLFxcclxcbiAgKjo6YWZ0ZXIge1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBTdHlsZXMgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgcmdiYSg1MCwgNTAsIDkzLCAwLjQpIDAgNTBweCAxMDBweCAtMjBweCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIpIDAgMzBweCA2MHB4IC0zMHB4LFxcclxcbiAgICByZ2JhKDEwLCAzNywgNjQsIDAuMzUpIDAgLTJweCA2cHggMCBpbnNldDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtaW4td2lkdGg6IDUwMHB4O1xcclxcbiAgd2lkdGg6IDcwMHB4O1xcclxcbiAgbWF4LXdpZHRoOiA1MHZ3O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciA+ICoge1xcclxcbiAgZmxleC1iYXNpczogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciBoMiB7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAwIDAuMjVlbSAwLjc1ZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MjUpO1xcclxcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnB1dC1jb250YWluZXIgLnRvZG8taW5wdXQge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaW5wdXQtY29udGFpbmVyIC50b2RvLWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5idG4tYWRkLXRvZG8ge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1hZGQtdG9kbzpkaXNhYmxlZCB7XFxyXFxuICBjb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUzNCk7XFxyXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQyNSk7XFxyXFxuICBmbGV4LWJhc2lzOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAudG9kby1pdGVtOmxhc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1jaGVjayB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb21wbGV0ZWQgLnRvZG8taXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCBibGFjaztcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1lZGl0LWljb24ge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5lZGl0aW5nIC5pdGVtLWVkaXQtaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1kZWxldGUtaWNvbiB7XFxyXFxuICBjb2xvcjogI2YwMDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lZGl0aW5nIC5pdGVtLWRlbGV0ZS1pY29uIHtcXHJcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxyXFxufVxcclxcblxcclxcbi5idG4tY2xlYXIge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMC43NWVtIDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGF0IDUwJSAwJSwgcmdiYSgyMDYsIDIwNiwgMjA2LCAwLjQ3OSkgNzAlLCB0cmFuc3BhcmVudCk7XFxyXFxufVxcclxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsVUFBVTs7QUFHVixjQUFjOztBQUVkLHFCQUFxQjtBQUNyQjs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBLDBCQUEwQjtBQUMxQjs7Ozs7Ozs7OztFQVVFLFNBQVM7QUFDWDs7QUFFQSwyR0FBMkc7QUFDM0c7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLDJCQUEyQjtBQUMzQjtFQUNFLHVCQUF1QjtBQUN6Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxpQkFBaUI7RUFDakIsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUEsMERBQTBEO0FBQzFEO0VBQ0UsOEJBQThCO0FBQ2hDOztBQUVBLG9DQUFvQztBQUNwQzs7RUFFRSxlQUFlO0VBQ2YsY0FBYztBQUNoQjs7QUFFQSx5Q0FBeUM7QUFDekM7Ozs7RUFJRSxhQUFhO0FBQ2Y7O0FBRUEsZ0dBQWdHO0FBQ2hHO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7O0VBRUE7OztJQUdFLHFDQUFxQztJQUNyQyx1Q0FBdUM7SUFDdkMsc0NBQXNDO0lBQ3RDLGdDQUFnQztFQUNsQztBQUNGOztBQUVBLGdCQUFnQjtBQUNoQjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEI7Ozs2Q0FHMkM7RUFDM0MsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixnQkFBZ0I7RUFDaEIsbURBQW1EO0VBQ25ELGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG1EQUFtRDtBQUNyRDs7QUFFQTtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUVBO0VBQ0UsaUNBQWlDO0VBQ2pDLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxlQUFlO0VBQ2YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1EQUFtRDtFQUNuRCxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLE9BQU87QUFDVDs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxPQUFPO0VBQ1AsWUFBWTtFQUNaLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsbUZBQW1GO0FBQ3JGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEZvbnRzICovXFxyXFxuQGltcG9ydCB1cmwoXFxcImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9RmlyYStTYW5zOndnaHRAMTAwOzIwMDszMDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuLyogQ1NTIFJlc2V0ICovXFxyXFxuXFxyXFxuLyogQm94IHNpemluZyBydWxlcyAqL1xcclxcbiosXFxyXFxuKjo6YmVmb3JlLFxcclxcbio6OmFmdGVyIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBkZWZhdWx0IG1hcmdpbiAqL1xcclxcbmJvZHksXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxuaDQsXFxyXFxucCxcXHJcXG5maWd1cmUsXFxyXFxuYmxvY2txdW90ZSxcXHJcXG5kbCxcXHJcXG5kZCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBsaXN0IHN0eWxlcyBvbiB1bCwgb2wgZWxlbWVudHMgd2l0aCBhIGxpc3Qgcm9sZSwgd2hpY2ggc3VnZ2VzdHMgZGVmYXVsdCBzdHlsaW5nIHdpbGwgYmUgcmVtb3ZlZCAqL1xcclxcbnVsLFxcclxcbm9sIHtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFNldCBjb3JlIHJvb3QgZGVmYXVsdHMgKi9cXHJcXG5odG1sOmZvY3VzLXdpdGhpbiB7XFxyXFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVTcGVlZDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJGaXJhIFNhbnNcXFwiLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcclxcbmE6bm90KFtjbGFzc10pIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcclxcbmltZyxcXHJcXG5waWN0dXJlIHtcXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBJbmhlcml0IGZvbnRzIGZvciBpbnB1dHMgYW5kIGJ1dHRvbnMgKi9cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEsXFxyXFxuc2VsZWN0IHtcXHJcXG4gIGZvbnQ6IGluaGVyaXQ7XFxyXFxufVxcclxcblxcclxcbi8qIFJlbW92ZSBhbGwgYW5pbWF0aW9ucywgdHJhbnNpdGlvbnMgYW5kIHNtb290aCBzY3JvbGwgZm9yIHBlb3BsZSB0aGF0IHByZWZlciBub3QgdG8gc2VlIHRoZW0gKi9cXHJcXG5AbWVkaWEgKHByZWZlcnMtcmVkdWNlZC1tb3Rpb246IHJlZHVjZSkge1xcclxcbiAgaHRtbDpmb2N1cy13aXRoaW4ge1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAqLFxcclxcbiAgKjo6YmVmb3JlLFxcclxcbiAgKjo6YWZ0ZXIge1xcclxcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcclxcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxICFpbXBvcnRhbnQ7XFxyXFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMDFtcyAhaW1wb3J0YW50O1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IGF1dG8gIWltcG9ydGFudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTWFpbiBTdHlsZXMgKi9cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgYm94LXNoYWRvdzpcXHJcXG4gICAgcmdiYSg1MCwgNTAsIDkzLCAwLjQpIDAgNTBweCAxMDBweCAtMjBweCxcXHJcXG4gICAgcmdiYSgwLCAwLCAwLCAwLjIpIDAgMzBweCA2MHB4IC0zMHB4LFxcclxcbiAgICByZ2JhKDEwLCAzNywgNjQsIDAuMzUpIDAgLTJweCA2cHggMCBpbnNldDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxyXFxuICBtaW4td2lkdGg6IDUwMHB4O1xcclxcbiAgd2lkdGg6IDcwMHB4O1xcclxcbiAgbWF4LXdpZHRoOiA1MHZ3O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciA+ICoge1xcclxcbiAgZmxleC1iYXNpczogNTBweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciBoMiB7XFxyXFxuICBwYWRkaW5nOiAwLjVlbSAwIDAuMjVlbSAwLjc1ZW07XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40MjUpO1xcclxcbiAgZm9udC1zaXplOiAxLjI1ZW07XFxyXFxufVxcclxcblxcclxcbi5hZGQtaW5wdXQtY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDAuNzVlbTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFkZC1pbnB1dC1jb250YWluZXIgLnRvZG8taW5wdXQge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5hZGQtaW5wdXQtY29udGFpbmVyIC50b2RvLWlucHV0OjpwbGFjZWhvbGRlciB7XFxyXFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxyXFxufVxcclxcblxcclxcbi5idG4tYWRkLXRvZG8ge1xcclxcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBjb2xvcjogZ3JheTtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi1hZGQtdG9kbzpkaXNhYmxlZCB7XFxyXFxuICBjb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUzNCk7XFxyXFxuICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1saXN0IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi50b2RvLWl0ZW0ge1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxZW07XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQyNSk7XFxyXFxuICBmbGV4LWJhc2lzOiA1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1pdGVtIGxhYmVsIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8tbGlzdCAudG9kby1pdGVtOmxhc3QtY2hpbGQge1xcclxcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1jaGVjayB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDAuNWVtO1xcclxcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjI1KTtcXHJcXG59XFxyXFxuXFxyXFxuLnRvZG8taXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4udG9kby1jb21wbGV0ZWQgLnRvZG8taXRlbS1kZXNjcmlwdGlvbiB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaCBibGFjaztcXHJcXG4gIGNvbG9yOiBncmF5O1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1lZGl0LWljb24ge1xcclxcbiAgY3Vyc29yOiBtb3ZlO1xcclxcbiAgY29sb3I6IGdyYXk7XFxyXFxufVxcclxcblxcclxcbi5lZGl0aW5nIC5pdGVtLWVkaXQtaWNvbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaXRlbS1kZWxldGUtaWNvbiB7XFxyXFxuICBjb2xvcjogI2YwMDtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5lZGl0aW5nIC5pdGVtLWRlbGV0ZS1pY29uIHtcXHJcXG4gIGRpc3BsYXk6IGluaXRpYWw7XFxyXFxufVxcclxcblxcclxcbi5idG4tY2xlYXIge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgcGFkZGluZzogMC43NWVtIDA7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgYmFja2dyb3VuZDogcmFkaWFsLWdyYWRpZW50KGF0IDUwJSAwJSwgcmdiYSgyMDYsIDIwNiwgMjA2LCAwLjQ3OSkgNzAlLCB0cmFuc3BhcmVudCk7XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmUge1xuICBzdGF0aWMgZ2V0RGF0YSgpIHtcbiAgICBpZiAoIXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0RhdGEnKSkgcmV0dXJuIG51bGw7XG4gICAgcmV0dXJuIEpTT04ucGFyc2Uod2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvRGF0YScpKTtcbiAgfVxuXG4gIHN0YXRpYyBzZXREYXRhKGRhdGEpIHtcbiAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9EYXRhJywgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICB9XG59IiwiaW1wb3J0IFN0b3JlIGZyb20gJy4vU3RvcmUuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvIHtcbiAgc3RhdGljIHRvZG9zID0gW107XG5cbiAgY29uc3RydWN0b3IoZGVzY3JpcHRpb24pIHtcbiAgICB0aGlzLmluZGV4ID0gVG9kby50b2Rvcy5sZW5ndGg7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgdG9nZ2xlVG9kb1N0YXR1cyhpbmRleCkge1xuICAgIFRvZG8udG9kb3MgPSBUb2RvLnRvZG9zLm1hcCgodG9kbykgPT4ge1xuICAgICAgaWYgKHRvZG8uaW5kZXggPT09IHBhcnNlSW50KGluZGV4LCAxMCkpIHtcbiAgICAgICAgdG9kby5jb21wbGV0ZWQgPSAhdG9kby5jb21wbGV0ZWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9kbztcbiAgICB9KTtcbiAgICBTdG9yZS5zZXREYXRhKFRvZG8udG9kb3MpO1xuICAgIFRvZG8ucmVuZGVyVUkoKTtcbiAgfVxuXG4gIHN0YXRpYyByZW5kZXJVSSgpIHtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbiAgICB0b2RvTGlzdC5pbm5lckhUTUwgPSAnJztcbiAgICBUb2RvLnJlYXNzaWduVG9kb0luZGljZXMoKTtcbiAgICBUb2RvLnRvZG9zLmZvckVhY2goKHRvZG9JdGVtKSA9PiB7XG4gICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICBsaS5jbGFzc05hbWUgPSAndG9kby1pdGVtJztcbiAgICAgIGxpLmlubmVySFRNTCA9IGBcbiAgICAgIDxsYWJlbCBkYXRhLWluZGV4PSR7dG9kb0l0ZW0uaW5kZXh9IGNsYXNzPVwiJHt0b2RvSXRlbS5jb21wbGV0ZWQgPyAndG9kby1jb21wbGV0ZWQnIDogJyd9XCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBjbGFzcz1cInRvZG8taXRlbS1jaGVja1wiICR7dG9kb0l0ZW0uY29tcGxldGVkID8gJ2NoZWNrZWQnIDogJyd9PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBjbGFzcz1cInRvZG8taXRlbS1kZXNjcmlwdGlvblwiIHZhbHVlPVwiJHt0b2RvSXRlbS5kZXNjcmlwdGlvbn1cIiBkaXNhYmxlZD5cbiAgICAgIDwvbGFiZWw+XG4gICAgICA8aSBjbGFzcz1cImZhcyBmYS1lbGxpcHNpcy12IGl0ZW0tZWRpdC1pY29uXCI+PC9pPlxuICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtdHJhc2gtYWx0IGl0ZW0tZGVsZXRlLWljb25cIj48L2k+XG4gICAgICBgO1xuICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH0pO1xuXG4gICAgLy8gRXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgY2hlY2tib3hlcyBvbiBlYWNoIHRvZG8gaXRlbVxuICAgIGNvbnN0IHRvZG9zQ2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50b2RvLWl0ZW0tY2hlY2snKTtcbiAgICBbLi4udG9kb3NDaGVja2JveGVzXS5mb3JFYWNoKChjaGtCb3gpID0+IHtcbiAgICAgIGNoa0JveC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvTm9kZSA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgICAgIFRvZG8udG9nZ2xlVG9kb1N0YXR1cyh0b2RvTm9kZS5kYXRhc2V0LmluZGV4KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gRXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgZWRpdCBpY29ucyB0byBlZGl0IHRoZSB0b2RvIGRlc2NyaXB0aW9uXG4gICAgY29uc3QgZWRpdEljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tZWRpdC1pY29uJyk7XG4gICAgWy4uLmVkaXRJY29uc10uZm9yRWFjaCgoaWNvbikgPT4ge1xuICAgICAgaWNvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRvZG9Ob2RlID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICAgICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gdG9kb05vZGUucXVlcnlTZWxlY3RvcignLnRvZG8taXRlbS1kZXNjcmlwdGlvbicpO1xuICAgICAgICB0b2RvTm9kZS5jbGFzc0xpc3QuYWRkKCdlZGl0aW5nJyk7XG4gICAgICAgIGlmICh0b2RvTm9kZS5xdWVyeVNlbGVjdG9yKCcudG9kby1jb21wbGV0ZWQnKSkgcmV0dXJuOyAvLyBwcmV2ZW50cyBlZGl0aW5nIGluIGFscmVhZHkgY29tcGxldGVkIHRvZG9zXG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0b2RvRGVzY3JpcHRpb24uZm9jdXMoKTtcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uLnNlbGVjdGlvblN0YXJ0ID0gdG9kb0Rlc2NyaXB0aW9uLnZhbHVlLmxlbmd0aDtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gRXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgdG9kb3MgZGVzY3JpcHRpb24gb24gYmx1cnJpbmcgb3V0IG9mIHRoZSBpbnB1dCBmaWVsZFxuICAgIGNvbnN0IHRvZG9JdGVtRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1pdGVtLWRlc2NyaXB0aW9uJyk7XG4gICAgWy4uLnRvZG9JdGVtRGVzY3JpcHRpb25dLmZvckVhY2goKGlucHV0KSA9PiB7XG4gICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKGUpID0+IHtcbiAgICAgICAgY29uc3QgdG9kb05vZGUgPSBlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGU7XG4gICAgICAgIGNvbnN0IHRvZG9JbmRleCA9IGUudGFyZ2V0LnBhcmVudE5vZGUuZGF0YXNldC5pbmRleDtcbiAgICAgICAgY29uc3QgdG9kbyA9IFRvZG8udG9kb3MuZmluZCgodG9kbykgPT4gdG9kby5pbmRleCA9PT0gcGFyc2VJbnQodG9kb0luZGV4LCAxMCkpO1xuICAgICAgICBlLnRhcmdldC52YWx1ZSA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgIGUudGFyZ2V0LmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdG9kb05vZGUuY2xhc3NMaXN0LnJlbW92ZSgnZWRpdGluZycpO1xuICAgICAgICB9LCAxMDApO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICAvLyBFdmVudCBsaXN0ZW5lcnMgZm9yIHRoZSB0b2RvcyBkZXNjcmlwdGlvbiBvbiBwcmVzc2luZyBFbnRlciB0byBjaGFuZ2UgaXRcbiAgICBbLi4udG9kb0l0ZW1EZXNjcmlwdGlvbl0uZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XG4gICAgICAgICAgY29uc3QgdG9kb0luZGV4ID0gZS50YXJnZXQucGFyZW50Tm9kZS5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgIGNvbnN0IHRvZG9OZXdEZXNjcmlwdGlvbiA9IGUudGFyZ2V0LnZhbHVlO1xuICAgICAgICAgIGlmICghdG9kb05ld0Rlc2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBhbGVydCgnUGxlYXNlIGFkZCBhIG5ldyBkZXNjcmlwdGlvbiB0byB0aGUgc2VsZWN0ZWQgdG9kby4gSWYgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSB0b2RvLCB5b3UgY2FuIGNsaWNrIHRoZSByZWQgYmluIGJ1dHRvbiBuZXh0IHRvIGl0IGluIGVkaXQgbW9kZS4nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgICAgVG9kby5lZGl0VG9kbyh0b2RvSW5kZXgsIHRvZG9OZXdEZXNjcmlwdGlvbik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgLy8gRXZlbnQgbGlzdGVuZXJzIGZvciB0aGUgdG9kb3MgZGVsZXRlIGJ1dHRvblxuICAgIGNvbnN0IGRlbGV0ZUljb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLml0ZW0tZGVsZXRlLWljb24nKTtcbiAgICBbLi4uZGVsZXRlSWNvbnNdLmZvckVhY2goKGljb24pID0+IHtcbiAgICAgIGljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtSW5kZXhUb0JlUmVtb3ZlZCA9IHBhcnNlSW50KGUudGFyZ2V0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcignbGFiZWwnKS5kYXRhc2V0LmluZGV4LCAxMCk7XG4gICAgICAgIFRvZG8uZGVsZXRlVG9kb3MoaXRlbUluZGV4VG9CZVJlbW92ZWQpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgYWRkKGRlc2NyaXB0aW9uKSB7XG4gICAgY29uc3QgbmV3VG9kbyA9IG5ldyBUb2RvKGRlc2NyaXB0aW9uKTtcbiAgICBUb2RvLnRvZG9zLnB1c2gobmV3VG9kbyk7XG4gICAgU3RvcmUuc2V0RGF0YShUb2RvLnRvZG9zKTtcbiAgfVxuXG4gIHN0YXRpYyBlZGl0VG9kbyh0b2RvSW5kZXgsIG5ld0Rlc2NyaXB0aW9uKSB7XG4gICAgVG9kby50b2RvcyA9IFRvZG8udG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICBpZiAodG9kby5pbmRleCA9PT0gcGFyc2VJbnQodG9kb0luZGV4LCAxMCkpIHtcbiAgICAgICAgdG9kby5kZXNjcmlwdGlvbiA9IG5ld0Rlc2NyaXB0aW9uO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRvZG87XG4gICAgfSk7XG4gICAgU3RvcmUuc2V0RGF0YShUb2RvLnRvZG9zKTtcbiAgICBUb2RvLnJlbmRlclVJKCk7XG4gIH1cblxuICBzdGF0aWMgZGVsZXRlVG9kb3MoLi4uaW5kaWNlcykge1xuICAgIGluZGljZXMuZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgIFRvZG8udG9kb3MgPSBUb2RvLnRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5pbmRleCAhPT0gaW5kZXgpO1xuICAgIH0pO1xuICAgIFRvZG8ucmVuZGVyVUkoKTtcbiAgICBTdG9yZS5zZXREYXRhKFRvZG8udG9kb3MpO1xuICB9XG5cbiAgc3RhdGljIHJlYXNzaWduVG9kb0luZGljZXMoKSB7XG4gICAgVG9kby50b2RvcyA9IFRvZG8udG9kb3MubWFwKCh0b2RvLCBjb3VudGVyKSA9PiB7XG4gICAgICB0b2RvLmluZGV4ID0gY291bnRlcjtcbiAgICAgIHJldHVybiB0b2RvO1xuICAgIH0pO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5pbXBvcnQgVG9kbyBmcm9tICcuL1RvZG8uanMnO1xuaW1wb3J0IFN0b3JlIGZyb20gJy4vU3RvcmUuanMnO1xuXG53aW5kb3cub25sb2FkID0gKCkgPT4ge1xuICBjb25zdCB0b2RvSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1pbnB1dCcpO1xuICBjb25zdCBhZGRUb2RvQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ0bi1hZGQtdG9kbycpO1xuICBjb25zdCBjbGVhckFsbEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idG4tY2xlYXInKTtcblxuICBjb25zdCBkYXRhID0gU3RvcmUuZ2V0RGF0YSgpO1xuICBpZiAoIWRhdGEpIHtcbiAgICBjb25zdCBkYXRhVG9CZVN0b3JlZCA9IFtcbiAgICAgIHtcbiAgICAgICAgaW5kZXg6IDAsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnRG8gY2hvcmVzJyxcbiAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGluZGV4OiAxLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0pvaW4gYm9hcmQgbWVldGluZycsXG4gICAgICAgIGNvbXBsZXRlZDogZmFsc2UsXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBpbmRleDogMixcbiAgICAgICAgZGVzY3JpcHRpb246ICdXYWxrIHRoZSBkb2cnLFxuICAgICAgICBjb21wbGV0ZWQ6IHRydWUsXG4gICAgICB9LFxuICAgIF07XG4gICAgU3RvcmUuc2V0RGF0YShkYXRhVG9CZVN0b3JlZCk7XG4gICAgVG9kby50b2RvcyA9IGRhdGFUb0JlU3RvcmVkO1xuICB9IGVsc2Uge1xuICAgIFRvZG8udG9kb3MgPSBkYXRhO1xuICB9XG4gIFRvZG8ucmVuZGVyVUkoKTtcblxuICBhZGRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBUb2RvLmFkZCh0b2RvSW5wdXQudmFsdWUudHJpbSgpKTtcbiAgICB0b2RvSW5wdXQudmFsdWUgPSAnJztcbiAgICBlLnRhcmdldC5wYXJlbnROb2RlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBUb2RvLnJlbmRlclVJKCk7XG4gIH0pO1xuXG4gIHRvZG9JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIChlKSA9PiB7XG4gICAgaWYgKHRvZG9JbnB1dC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICBhZGRUb2RvQnRuLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICBpZiAoZS5rZXkgPT09ICdFbnRlcicpIHtcbiAgICAgICAgVG9kby5hZGQodG9kb0lucHV0LnZhbHVlLnRyaW0oKSk7XG4gICAgICAgIHRvZG9JbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgICBhZGRUb2RvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgVG9kby5yZW5kZXJVSSgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBhZGRUb2RvQnRuLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIGNsZWFyQWxsQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IHRvZG9zVG9CZVJlbW92ZWQgPSBUb2RvLnRvZG9zLmZpbHRlcigodG9kbykgPT4gdG9kby5jb21wbGV0ZWQpO1xuICAgIGNvbnN0IHRvZG9zSW5kaWNlcyA9IHRvZG9zVG9CZVJlbW92ZWQubWFwKCh0b2RvKSA9PiB0b2RvLmluZGV4KTtcbiAgICBUb2RvLmRlbGV0ZVRvZG9zKC4uLnRvZG9zSW5kaWNlcyk7XG4gIH0pO1xufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=