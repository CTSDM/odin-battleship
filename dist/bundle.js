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
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body,
html {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: monospace;
}

body {
    background: lightgrey;
}

.players-container {
    display: grid;
    grid-template-columns: 1fr 100px 1fr;
    justify-items: center;
    width: max-content;
    margin: 20px auto;
    transform: scale(0);
    opacity: 0;
}

.scaling {
    transform: scale(1);
    opacity: 1;
    transition: all ease-in-out 1s;
}

.ocean {
    font-weight: 900;
    background-color: #4F42B5;
    width: 100%;
    user-select: none;
    font-family: serif;
}

.board {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    aspect-ratio: 1;
    border: 3px solid black;
    width: 500px;
    background: red;
}

.cell {
    width: 44px;
    aspect-ratio: 1;
    border: 3px solid black;
}

.player1 {
    justify-self: right;
}

.player2 {
    justify-self: left;
}

.players-name {
    justify-self: center;
    font-size: 1.5rem;
    font-weight: 700;
    margin-top: 20px;
}

.hit {
    background-color: yellow;
    transition: background-color 0.25s ease;
}

.no-hit {
    background-color: white;
    transition: background-color 0.25s ease;
}

.humanPlayer {
    border-color: green;
}

.ship-selection {
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-top: 20px;
}

.ships-images {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 20px;
}

.error {
    color: red;
    font-weight: 800;
    font-size: 1.5rem;
}

.container-form {
    display: flex;
    justify-content: center;
    padding: 2px;
}

#player-data {
    padding: 5px;
    display: flex;
    border: 2px solid blue;
    border-radius: 5px;
    justify-content: center;
    background: lightblue;
    gap: 20px;
}

.highlight-target {
    border-color: blue;
}

.sunk {
    background-color: grey;
}

.transition-selected-axis {
    transition: 0.1s ease-in-out;
}

.selected-axis {
    background-color: magenta;
}

.game-title {
    font-size: 50px;
    font-weight: 900;
    text-align: center;
    transition: all ease-in-out 1s;
}

.winner {
    font-size: 20px;
    transition: all 1s;
}

.winner span:nth-child(2) {
    font-weight: 900;
    color: blue;
    font-style: italic;
}

form input::placeholder {
    font-family: monospace;
}

.difficulty {
    display: flex;
    margin-top: 20px;
    justify-content: center;
    text-align: center;
    user-select: none;
}

.difficulty legend {
    font-weight: 700;
}

.difficulty label {
    margin-left: -8px;
}

.hidden {
    display: none;
}

.individual-ship {
    display: flex;
    align-items: center;
    border: 2px blue solid;
    background: lightcyan;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,qBAAqB;IACrB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,WAAW;IACX,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;IACxB,uCAAuC;AAC3C;;AAEA;IACI,uBAAuB;IACvB,uCAAuC;AAC3C;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,qBAAqB;AACzB","sourcesContent":["body,\nhtml {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: monospace;\n}\n\nbody {\n    background: lightgrey;\n}\n\n.players-container {\n    display: grid;\n    grid-template-columns: 1fr 100px 1fr;\n    justify-items: center;\n    width: max-content;\n    margin: 20px auto;\n    transform: scale(0);\n    opacity: 0;\n}\n\n.scaling {\n    transform: scale(1);\n    opacity: 1;\n    transition: all ease-in-out 1s;\n}\n\n.ocean {\n    font-weight: 900;\n    background-color: #4F42B5;\n    width: 100%;\n    user-select: none;\n    font-family: serif;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    aspect-ratio: 1;\n    border: 3px solid black;\n    width: 500px;\n    background: red;\n}\n\n.cell {\n    width: 44px;\n    aspect-ratio: 1;\n    border: 3px solid black;\n}\n\n.player1 {\n    justify-self: right;\n}\n\n.player2 {\n    justify-self: left;\n}\n\n.players-name {\n    justify-self: center;\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin-top: 20px;\n}\n\n.hit {\n    background-color: yellow;\n    transition: background-color 0.25s ease;\n}\n\n.no-hit {\n    background-color: white;\n    transition: background-color 0.25s ease;\n}\n\n.humanPlayer {\n    border-color: green;\n}\n\n.ship-selection {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 20px;\n}\n\n.ships-images {\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    margin-top: 20px;\n}\n\n.error {\n    color: red;\n    font-weight: 800;\n    font-size: 1.5rem;\n}\n\n.container-form {\n    display: flex;\n    justify-content: center;\n    padding: 2px;\n}\n\n#player-data {\n    padding: 5px;\n    display: flex;\n    border: 2px solid blue;\n    border-radius: 5px;\n    justify-content: center;\n    background: lightblue;\n    gap: 20px;\n}\n\n.highlight-target {\n    border-color: blue;\n}\n\n.sunk {\n    background-color: grey;\n}\n\n.transition-selected-axis {\n    transition: 0.1s ease-in-out;\n}\n\n.selected-axis {\n    background-color: magenta;\n}\n\n.game-title {\n    font-size: 50px;\n    font-weight: 900;\n    text-align: center;\n    transition: all ease-in-out 1s;\n}\n\n.winner {\n    font-size: 20px;\n    transition: all 1s;\n}\n\n.winner span:nth-child(2) {\n    font-weight: 900;\n    color: blue;\n    font-style: italic;\n}\n\nform input::placeholder {\n    font-family: monospace;\n}\n\n.difficulty {\n    display: flex;\n    margin-top: 20px;\n    justify-content: center;\n    text-align: center;\n    user-select: none;\n}\n\n.difficulty legend {\n    font-weight: 700;\n}\n\n.difficulty label {\n    margin-left: -8px;\n}\n\n.hidden {\n    display: none;\n}\n\n.individual-ship {\n    display: flex;\n    align-items: center;\n    border: 2px blue solid;\n    background: lightcyan;\n}\n"],"sourceRoot":""}]);
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
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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
    return [content].concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/auxFunctions.js":
/*!*****************************!*\
  !*** ./src/auxFunctions.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkValidPosition: () => (/* binding */ checkValidPosition),
/* harmony export */   getDifficulty: () => (/* binding */ getDifficulty),
/* harmony export */   getLaunchingCoordinates: () => (/* binding */ getLaunchingCoordinates),
/* harmony export */   getSunkShipPositions: () => (/* binding */ getSunkShipPositions),
/* harmony export */   isShipSunk: () => (/* binding */ isShipSunk)
/* harmony export */ });
function getSunkShipPositions(gameboard, indexX, indexY) {
    // This function gets a sunk ship and will return all the gameboard coordinates containing
    // this ship object
    const ship = gameboard.map[indexX][indexY];
    const sunkShipCoordinates = [];
    gameboard.map.forEach((row, indexRow) => {
        row.forEach((item, indexColumn) => {
            if (item === ship)
                sunkShipCoordinates.push([indexRow, indexColumn]);
        });
    });
    return sunkShipCoordinates;
}

function isShipSunk(gameboard, row, column) {
    const ship = gameboard.map[row][column];
    if (ship.isSunk())
        return true
    else
        return false
}

function getLaunchingCoordinates(coordinateToBeHit, boardSize) {
    // In this function a semi random walk will be used to simulate 
    // that the computers is choosing a position.
    // It will start from one random corner and then circulate around until
    // it arrives to the desired coordinate that was previously selected
    // as the next hit
    const cornersCoordinates = [[0, 0], [0, boardSize - 1], [boardSize - 1, 0], [boardSize - 1, boardSize - 1]];
    const coordinatesToTravel = [];
    while (true) {
        const randomStart = cornersCoordinates[Math.floor(Math.random() * 4)];
        if (randomStart[0] === coordinateToBeHit[0] && randomStart[1] === coordinateToBeHit[1])
            continue
        coordinatesToTravel.push(randomStart);
        break;
    }
    let arrivedDestination = false;
    let x = 0;
    while (!arrivedDestination) {
        ++x;
        const lastCoordinate = coordinatesToTravel[coordinatesToTravel.length - 1];
        const closerProbability = 0.8;
        let getCloserFlag = Math.random() < closerProbability ? 1 : 0;
        let randomAxis = Math.round(Math.random());
        let otherAxis = Math.abs(randomAxis - 1);
        const newCoordinate = [lastCoordinate[0], lastCoordinate[1]];
        if (!getCloserFlag && coordinatesToTravel.length < 20) {
            while (true) {
                let signDirection = Math.round(Math.random()) ? -1 : 1;
                let newAxisPosition = lastCoordinate[randomAxis] + signDirection;
                if (newAxisPosition < 0 || newAxisPosition > boardSize - 1)
                    continue
                newCoordinate[randomAxis] = newAxisPosition;
                newCoordinate[otherAxis] = lastCoordinate[otherAxis];
                coordinatesToTravel.push(newCoordinate);
                break;
            }
        }
        else {
            if (lastCoordinate[randomAxis] > coordinateToBeHit[randomAxis])
                newCoordinate[randomAxis] = lastCoordinate[randomAxis] - 1;
            else if (lastCoordinate[randomAxis] < coordinateToBeHit[randomAxis])
                newCoordinate[randomAxis] = lastCoordinate[randomAxis] + 1;
            else
                continue
            newCoordinate[otherAxis] = lastCoordinate[otherAxis];
            coordinatesToTravel.push(newCoordinate);
        }
        if (newCoordinate[0] === coordinateToBeHit[0] && newCoordinate[1] === coordinateToBeHit[1])
            arrivedDestination = true;
    }
    return coordinatesToTravel;
}

function checkValidPosition(playersArr, turn, row, column) {
    if (playersArr[turn].gameboard.positionsVisited[row][column] === undefined)
        return true
    else
        return false
}

function getDifficulty() {
    const inputs = [...document.querySelectorAll('input')];
    if (inputs[1].checked === true)
        return false;
    return true;
}


/***/ }),

/***/ "./src/background.js":
/*!***************************!*\
  !*** ./src/background.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ backgroundWaves)
/* harmony export */ });
function backgroundWaves() {
        // let's add some event listeners to the ocean div
        let state = 0;
        const stateValues = [`
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
        ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~`,
                `       &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~
                &nbsp; ~ ~ ~ ~ ~ ~ ~
                ~ ~ ~ ~ ~ ~ ~ ~`
        ];
        const waveSpan = document.querySelector('.ocean > span');
        setInterval(function() {
                waveSpan.innerHTML = stateValues[state];
                state = 1 - state;
        }, 250);
}


/***/ }),

/***/ "./src/calculationFunctions.js":
/*!*************************************!*\
  !*** ./src/calculationFunctions.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computerPlays: () => (/* binding */ computerPlays),
/* harmony export */   getBoardSize: () => (/* binding */ getBoardSize),
/* harmony export */   getNewShipPosition: () => (/* binding */ getNewShipPosition),
/* harmony export */   getRandomCoordinates: () => (/* binding */ getRandomCoordinates),
/* harmony export */   isValidShipPosition: () => (/* binding */ isValidShipPosition),
/* harmony export */   shipCollision: () => (/* binding */ shipCollision),
/* harmony export */   shipsLeft: () => (/* binding */ shipsLeft)
/* harmony export */ });
function isValidShipPosition(ship, boardPlayer1Coord) {
    // when there is a mouse up it needs to be checked if a cell is within the coordinates
    // we have to take into account the size of the selected ship
    // its rotation too must be taken into account
    // in this function indexShip is always different from -1
    const shipCoordinates = ship.getBoundingClientRect();
    let rotated;
    if (ship.style.transform === 'rotate(90deg)')
        rotated = true;
    else
        rotated = false;
    let shipSize = getShipSize(shipCoordinates, rotated);
    if (boardPlayer1Coord.left < shipCoordinates.left && shipCoordinates.left < boardPlayer1Coord.right) {
        if (boardPlayer1Coord.top < shipCoordinates.top && shipCoordinates.top < boardPlayer1Coord.bottom)
            if (rotated) {
                if (shipCoordinates.top + (shipSize - 1) * 50 < boardPlayer1Coord.bottom)
                    return true;
            } else
                if (shipCoordinates.left + (shipSize - 1) * 50 < boardPlayer1Coord.right)
                    return true;
    }
    return false;
}

function getBoardSize(player) {
    return player.gameboard.size;
}

function getNewShipPosition(ship, boardPlayer1Coord) {
    const shipCoordinates = ship.getBoundingClientRect();
    let rotated;
    if (ship.style.transform === 'rotate(90deg)')
        rotated = true;
    else
        rotated = false;
    // at this point we know the ship is within bounds;
    // the coordinates of the ship represent all the indexes of the board where the ship will be placed
    // that is, that we need to have an array of arrays with all the position
    // we can use player.gameboad.add ... and set the coordinates like that
    // of course before adding we need to check whether or not that is something that is allowed
    const indexes = [];
    // we need to obtain the size of each ship
    let sizeShip = getShipSize(shipCoordinates, rotated);
    // for loop to have all the indexes
    for (let i = 0; i < sizeShip; ++i) {
        const coordinate = [];
        if (rotated) {
            coordinate.push(Math.floor((shipCoordinates.top - boardPlayer1Coord.top) / 50) + i);
            coordinate.push(Math.floor((shipCoordinates.left - boardPlayer1Coord.left) / 50));
        } else {
            coordinate.push(Math.floor((shipCoordinates.top - boardPlayer1Coord.top) / 50));
            coordinate.push(Math.floor((shipCoordinates.left - boardPlayer1Coord.left) / 50) + i);
        }
        indexes.push(coordinate);
    }
    return indexes;
}

function shipCollision(player, positions) {
    let isCollision = false;
    positions.forEach((position) => {
        if (player.gameboard.map[position[0]][position[1]]) {
            isCollision = true;
        }
    });
    return isCollision;
}

function getRandomCoordinates(nShips, size) {
    // Returns a matrix of nShips with different lengths that are not overlapping
    const initialSize = 2;
    const shipArray = [];
    for (let i = 0; i < nShips; ++i) {
        shipArray.push([]);
    }
    for (let i = 0; i < nShips; ++i) {
        for (let j = 0; j < initialSize + i; ++j) {
            shipArray[i].push([0, 0]);
        }
    }
    // The first length is 2 and then increases by 1
    // The ships can have horizontal or vertical orientation
    for (let i = 0; i < nShips; ++i) {
        let positionValid = false;
        let horizontal = getRandomTrueFalse();
        while (positionValid === false) {
            let row, column;
            row = Math.floor(Math.random() * size);
            column = Math.floor(Math.random() * size);

            let selectedDirection = row;
            // check if the ship will actually fit within the bounds of the gameboard
            if (horizontal)
                selectedDirection = column;
            if (selectedDirection + i + initialSize > size - 1)
                continue;

            if (i > 0) {
                // the first ship position is never check as there is no previous ship
                // We check if there are overlapping
                // we check all the current positions for the ships that are already validated
                const totalLength = initialSize + i;
                let noCollision = true;
                for (let k = 0; k < i; ++k) {
                    shipArray[k].forEach((position) => {
                        for (let j = 0; j < totalLength; ++j) {
                            if (horizontal) {
                                if (position[0] === row && position[1] === column + j) {
                                    noCollision = false;
                                    return;
                                }
                            } else {
                                if (position[0] === row + j && position[1] === column) {
                                    noCollision = false;
                                    return;
                                }
                            }
                        }
                    });
                    if (k === i - 1 && noCollision)
                        positionValid = true;
                }
            } else
                positionValid = true;

            if (positionValid) {
                shipArray[i].forEach((position, idx) => {
                    if (horizontal) {
                        position[0] = row;
                        position[1] = column + idx;
                    } else {
                        position[0] = row + idx;
                        position[1] = column;
                    }
                })
            }
        }
    }
    return shipArray;
}

function computerPlays(size, computerPlayRecord, isRandom) {
    if (isRandom)
        return computerPlaysRandom(size);
    if (computerPlayRecord.searching === false) {
        if (computerPlayRecord.nonSunkShipsHitPosition.length > 0)
            return getNearbyCoordinatesOld(size, computerPlayRecord);
        else
            return computerPlaysRandom(size);
    }
    else {
        const newCords = getNearbyCoordinates(size, computerPlayRecord);
        if (newCords !== -1)
            return newCords;
        else if (computerPlayRecord.nonSunkShipsHitPosition.length > 0)
            return getNearbyCoordinatesOld(size, computerPlayRecord);
        else
            return computerPlaysRandom(size);
    }
}

function getNearbyCoordinatesOld(size, computerRecord) {
    const possiblePos = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    const previousMoves = computerRecord.moves;
    let availableMove;
    for (let j = 0; j < computerRecord.nonSunkShipsHitPosition.length; ++j) {
        const lastHitPosition = computerRecord.nonSunkShipsHitPosition[j];
        for (let i = 0; i < possiblePos.length; ++i) {
            const tempPosition = [lastHitPosition[0] + possiblePos[i][0], lastHitPosition[1] + possiblePos[i][1]];
            if ((tempPosition[0] < 0 || tempPosition[0] > size - 1) || (tempPosition[1] < 0 || tempPosition[1] > size - 1))
                continue;
            availableMove = true;
            previousMoves.forEach((positionVisited) => {
                if (tempPosition[0] === positionVisited[0] && tempPosition[1] === positionVisited[1]) {
                    availableMove = false;
                    return;
                }
            });
            if (i === possiblePos.length - 1)
                computerRecord.searching = false;
            if (availableMove)
                return tempPosition;
        }
    }
    return -1;
}

function getNearbyCoordinates(size, computerRecord) {
    // let's go from top to botton  in counter clock wise direction
    const possiblePos = [[-1, 0], [0, -1], [1, 0], [0, 1]];
    const previousMoves = computerRecord.moves;
    const lastHitPosition = previousMoves[computerRecord.lastHitIndex];
    let availableMove;
    for (let i = 0; i < possiblePos.length; ++i) {
        const tempPosition = [lastHitPosition[0] + possiblePos[i][0], lastHitPosition[1] + possiblePos[i][1]];
        if ((tempPosition[0] < 0 || tempPosition[0] > size - 1) || (tempPosition[1] < 0 || tempPosition[1] > size - 1))
            continue;
        availableMove = true;
        previousMoves.forEach((positionVisited) => {
            if (tempPosition[0] === positionVisited[0] && tempPosition[1] === positionVisited[1]) {
                availableMove = false;
                return;
            }
        });
        if (i === possiblePos.length - 1)
            computerRecord.searching = false;
        if (availableMove)
            return tempPosition;
    }
    return -1;
}

function computerPlaysRandom(size) {
    // it just return some random coordinates
    const x = Math.floor(Math.random() * size);
    const y = Math.floor(Math.random() * size);
    return [x, y];
}

function shipsLeft(container) {
    let anyLeft = true;
    [...container].forEach((image) => {
        if (image.style.width !== '0px' && image.style.height !== '0px') {
            anyLeft = false;
            return;
        }
    });
    return anyLeft;
}

function getShipSize(coordinates, isRotated) {
    if (isRotated)
        return Math.ceil((coordinates.bottom - coordinates.top) / 50);
    else
        return Math.ceil((coordinates.right - coordinates.left) / 50);
}

function getRandomTrueFalse() {
    const randomNumber = Math.random();
    if (randomNumber >= 0.5)
        return true
    else
        return false
}


/***/ }),

/***/ "./src/domManipulation.js":
/*!********************************!*\
  !*** ./src/domManipulation.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createBoard)
/* harmony export */ });
/* harmony import */ var _images_smallShip_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/smallShip.png */ "./src/images/smallShip.png");
/* harmony import */ var _calculationFunctions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./calculationFunctions */ "./src/calculationFunctions.js");
/* harmony import */ var _objectsModification__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./objectsModification */ "./src/objectsModification.js");
/* harmony import */ var _usernameDOM_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./usernameDOM.js */ "./src/usernameDOM.js");
/* harmony import */ var _auxFunctions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auxFunctions.js */ "./src/auxFunctions.js");






const IMAGES_SHIPS = _images_smallShip_png__WEBPACK_IMPORTED_MODULE_0__;

function createBoard(size, numberOfShips) {
    loadGrid(size);
    (0,_usernameDOM_js__WEBPACK_IMPORTED_MODULE_3__.setUpPlayerName)(disableButtons);
    setUpFunctionality(numberOfShips, size);
    makeBoardDivVisible();
}

function makeBoardDivVisible() {
    const boardContainer = document.querySelector('.players-container');
    setTimeout(() => boardContainer.classList.add('scaling'), 100);
}

function setUpFunctionality(numberOfShips, size) {
    const playersArr = [];
    (0,_objectsModification__WEBPACK_IMPORTED_MODULE_2__.createPlayers)(playersArr, size);
    randomPositionStart(playersArr, numberOfShips);
    setUpManualPosition(playersArr, numberOfShips, true);
    createDivShips(numberOfShips);
    setUpEventListenersShips(playersArr);
    startGame(playersArr, true, numberOfShips);
}

function changeGameTitle(state) {
    const spanTitle = document.querySelector('.game-title span');
    if (state === 0)
        spanTitle.textContent = '<WELCOME>';
    else if (state === 1)
        spanTitle.textContent = 'FIGHT!!!!';
    else if (state === 2)
        spanTitle.textContent = 'You win!';
    else if (state === 3)
        spanTitle.textContent = 'Game Over!';
}

function disableButtons(flagDisable, flagLastButton = false) {
    const shipButtons = [...document.querySelector('.ship-selection').children];
    for (let i = 0; i < shipButtons.length; ++i)
        shipButtons[i].disabled = flagDisable;
    if (flagLastButton)
        shipButtons[shipButtons.length - 1].disabled = true;
}

function randomPositionStart(playersArr, numberOfShips) {
    const restartPositionButton = document.getElementById('randomize-placement');
    restartPositionButton.textContent = 'Randomize ship placement';
    restartPositionButton.addEventListener('click', () => {
        restartPlayersGrid(playersArr);
        playersArr.forEach((player, playerIndex) => {
            placeShipsGameboard(player, playerIndex, numberOfShips);
        });
        setUpManualPosition(playersArr, numberOfShips);
        // we enable the button of starting the game
        disableDivShips();
        disableStartButton(false);
    });
}

function placeShipsGameboard(player, playerIndex, nShips) {
    let coordinatesShipsArr;
    let size = player.gameboard.size;
    coordinatesShipsArr = (0,_calculationFunctions__WEBPACK_IMPORTED_MODULE_1__.getRandomCoordinates)(nShips, size);
    coordinatesShipsArr.forEach((coordinates) => {
        (0,_objectsModification__WEBPACK_IMPORTED_MODULE_2__.addShipToPlayer)(player, coordinates);
        if (playerIndex === 1)
            colorPlayerShips(coordinates, playerIndex);
    });
}

function setUpDivShips() {
    const imagesElements = [...document.querySelectorAll('img')];
    imagesElements.forEach((image) => image.src = IMAGES_SHIPS);
    enableDivShips();
    disableDivShips();
}

function enableDivShips() {
    const imagesElements = [...document.querySelectorAll('img')];
    imagesElements.forEach((image, index) => {
        restartImagePosition(image);
        restartSizeImage(image, index);
    });
    disableDivShipContainer(false);
}

function disableDivShipContainer(flag = true) {
    const individualShipContainers = [...document.querySelectorAll('.ships-images div')];
    if (flag)
        individualShipContainers.forEach((div) => div.classList.remove('individual-ship'));
    else
        individualShipContainers.forEach((div) => div.classList.add('individual-ship'));

}

function disableDivShips() {
    const imagesElements = [...document.querySelectorAll('img')];
    imagesElements.forEach((image) => restartSizeImage(image, 0, 0));
    disableDivShipContainer(true);
}

function restartImagePosition(image) {
    image.style.position = 'static';
    image.top = 0;
    image.left = 0;
    image.style.transform = 'rotate(0deg)';
}

function restartSizeImage(image, index, flagWidth = 1) {
    const width = 100 * flagWidth + 50 * index;
    image.style.width = `${width * flagWidth}px`;
    image.style.height = `${50 * flagWidth}px`;
}

function setUpEventListenersShips(playersArr) {
    let activation = false;
    let indexShip = -1;
    const initialClickPosition = [];
    const imagesElements = [...document.querySelectorAll('img')];
    imagesElements.forEach((image, index) => {
        image.addEventListener('mousedown', (eMouse) => {
            activation = true;
            indexShip = index;
            initialClickPosition[0] = eMouse.clientX;
            initialClickPosition[1] = eMouse.clientY;
        });
    });

    document.addEventListener('keypress', (eKey) => {
        if (eKey.code === 'KeyR') {
            let newRotationValue;
            if (indexShip !== -1) {
                const image = imagesElements[indexShip];
                if (image.style.transform !== 'rotate(90deg)')
                    newRotationValue = 90;
                else
                    newRotationValue = 0;
                image.style.transform = `rotate(${newRotationValue}deg)`;
            }
        }
    });

    document.addEventListener('mousemove', (e) => {
        if (activation && indexShip !== -1) {
            imagesElements[indexShip].style.position = 'relative';
            imagesElements[indexShip].style.left = `${e.clientX - initialClickPosition[0]}px`;
            imagesElements[indexShip].style.top = `${e.clientY - initialClickPosition[1]}px`;
        }
    });

    document.addEventListener('mouseup', () => {
        if (indexShip !== -1) {
            const boardPlayer1Coord = document.querySelector('.player1').getBoundingClientRect();
            if ((0,_calculationFunctions__WEBPACK_IMPORTED_MODULE_1__.isValidShipPosition)(imagesElements[indexShip], boardPlayer1Coord)) {
                // let's place the ship
                // once i know the ship position is valid i can calculate the index where the ship can be placed
                // in this position is should check if there are ships on the to positions where the new ship can be placed
                const positions = (0,_calculationFunctions__WEBPACK_IMPORTED_MODULE_1__.getNewShipPosition)(imagesElements[indexShip], boardPlayer1Coord);
                if (!(0,_calculationFunctions__WEBPACK_IMPORTED_MODULE_1__.shipCollision)(playersArr[1], positions)) {
                    (0,_objectsModification__WEBPACK_IMPORTED_MODULE_2__.addShipToPlayer)(playersArr[1], positions);
                    colorPlayerShips(positions, 1);
                    // place the ship within the gameboard
                    // delete the image that is associated to the placed ship
                    imagesElements[indexShip].style.width = 0;
                    imagesElements[indexShip].style.height = 0;
                    imagesElements[indexShip].parentElement.classList.remove('individual-ship');
                    // the condition below  means that all the ships have been placed correctly
                    if ((0,_calculationFunctions__WEBPACK_IMPORTED_MODULE_1__.shipsLeft)(imagesElements)) {
                        placeShipsGameboard(playersArr[0], 0, imagesElements.length);
                        disableStartButton(false);
                    }
                } else
                    restartImagePosition(imagesElements[indexShip]);
            } else
                restartImagePosition(imagesElements[indexShip]);
            indexShip = -1;
        }
    });
}

function disableStartButton(flagEnable) {
    const button = document.getElementById('start-game');
    button.disabled = flagEnable;
}

function setUpManualPosition(playersArr, nShips, disabledManual = false) {
    const buttonPrev = document.getElementById('manual-placement');
    const manualButton = document.createElement('button');
    manualButton.id = 'manual-placement';
    manualButton.textContent = 'Manual placement of the ship';
    manualButton.type = 'button';
    if (disabledManual)
        manualButton.disabled = true;
    manualButton.addEventListener('click', () => {
        restartPlayersGrid(playersArr);
        restartManualShipPlacement(manualButton, playersArr, nShips);
        manualButton.remove();
        disableStartButton(true);
        enableDivShips();
    });
    buttonPrev.insertAdjacentElement('beforebegin', manualButton);
    buttonPrev.remove();
}

function restartManualShipPlacement(manualPositionButton, playersArr) {
    const buttonRestart = document.createElement('button');
    buttonRestart.textContent = 'Restart manual ship placement';
    buttonRestart.type = 'button';
    buttonRestart.id = 'manual-placement';
    buttonRestart.addEventListener('click', () => {
        disableStartButton(true);
        restartPlayersGrid(playersArr);
        enableDivShips();
    });
    manualPositionButton.insertAdjacentElement('beforebegin', buttonRestart);
}

function createDivShips(nShips) {
    const divShips = document.createElement('div');
    divShips.classList.add('ships-images');
    for (let i = 0; i < nShips; ++i) {
        const divIndividualContainer = document.createElement('div');
        const img = document.createElement('img');
        img.draggable = false;
        img.alt = `Ship of length ${i + 2}`;
        divIndividualContainer.appendChild(img);
        divShips.appendChild(divIndividualContainer);
    }
    document.body.appendChild(divShips);
    setUpDivShips();
}

function restartPlayersGrid(playersArr) {
    const size = (0,_calculationFunctions__WEBPACK_IMPORTED_MODULE_1__.getBoardSize)(playersArr[0]);
    loadGrid(size);
    (0,_objectsModification__WEBPACK_IMPORTED_MODULE_2__.createPlayers)(playersArr, size);
}

function loadGrid(size) {
    const divBoards = document.querySelectorAll('div.board');
    divBoards.forEach((divBoard) => {
        divBoard.textContent = '';
        for (let row = 0; row < size; ++row) {
            for (let column = 0; column < size; ++column) {
                const div = document.createElement('div');
                div.classList.add('cell');
                div.dataset.row = row;
                div.dataset.column = column;
                divBoard.appendChild(div);
            }
        }
    });
}

function startGame(players, computer, nShips) {
    const startGameButton = document.getElementById('start-game');
    startGameButton.textContent = 'Start game!';
    startGameButton.addEventListener('click', () => {
        changeGameTitle(1);
        const gameDifficulty = (0,_auxFunctions_js__WEBPACK_IMPORTED_MODULE_4__.getDifficulty)();
        modifyComputerText(gameDifficulty);
        createEvents(players, computer, nShips, gameDifficulty);
        removeAllButtons();
    });
}

function toggleHidDifficultyDiv() {
    const divDifficulty = document.querySelector('.difficulty');
    divDifficulty.classList.toggle('hidden');
}

function removeAllButtons() {
    toggleHidDifficultyDiv();
    const buttonsDiv = document.querySelector('.ship-selection');
    while (buttonsDiv.children.length > 0)
        buttonsDiv.children[0].remove();
}

function highlightAxis(cellIni, flagEnable = true) {
    const boardArray = [...cellIni.parentElement.children];
    const row = +cellIni.dataset.row, column = +cellIni.dataset.column;
    const size = Math.sqrt(boardArray.length);
    const arrayIndex = [];
    for (let i = 0; i < size; ++i) {
        arrayIndex.push(row * size + i);
        arrayIndex.push(column + i * size);
    }
    arrayIndex.forEach((index) => {
        const cell = boardArray[index];
        if (flagEnable)
            cell.classList.add('highlight-target');
        else
            cell.classList.remove('highlight-target');
    });
}

function highlightAxisEvent(event) {
    const cellEvent = event.target;
    highlightAxis(cellEvent, event.type === 'mouseenter');
}

function drawShipSunk(playersArr, row, column, turn) {
    const gameboardObject = playersArr[turn].gameboard;
    const shipSunkCoordinates = (0,_auxFunctions_js__WEBPACK_IMPORTED_MODULE_4__.getSunkShipPositions)(gameboardObject, row, column);
    const gameboardDivOpponent = document.querySelectorAll('.board');
    const indexOpponent = turn ? 0 : 1;
    const gameboardArrOpponent = [...gameboardDivOpponent[indexOpponent].children];
    shipSunkCoordinates.forEach((coordinate) => {
        const cell = gameboardArrOpponent[coordinate[1] + coordinate[0] * Math.sqrt(gameboardArrOpponent.length)];
        cell.classList.add('sunk');
    });
}

function blinkTarget(cellArray, row, column) {
    const size = Math.sqrt(cellArray.length);
    const cell = cellArray[column + row * size];
    const delay = 1000;
    // ms
    let repetitions = 5;
    for (let indexRepetition = 0; indexRepetition - repetitions; ++indexRepetition) {
        setTimeout(function() {
            cell.classList.add('transition-selected-axis');
            cell.classList.add('selected-axis');
            cell.classList.remove('highlight-target');
            setTimeout(() => cell.classList.remove('selected-axis'), delay / repetitions / 2);
        }, delay / repetitions * (indexRepetition - 1));
    }
    setTimeout(() => cell.classList.remove('transition-selected-axis'), delay);
}

function createEvents(playersArr, flagComputer, numberOfShips, isDifficult) {
    const gameRecord = (0,_objectsModification__WEBPACK_IMPORTED_MODULE_2__.createGameRecord)();
    // We associate each player with a board;
    // the function inside the event listener should not be an anonymous function
    const divBoards = document.querySelectorAll('div.board');
    const gameSpace = {
        turn: 0,
        computerIsPlaying: false
    };
    const divBoardChildrenArray = [...divBoards[1].children];
    divBoardChildrenArray.forEach((cell) => {
        cell.addEventListener('mouseup', clicked);
        cell.addEventListener('mouseenter', highlightAxisEvent);
        cell.addEventListener('mouseleave', highlightAxisEvent);
    });
    function clicked(e) {
        const cell = e.target;
        const row = +e.target.dataset.row;
        const column = +e.target.dataset.column;
        if (gameSpace.computerIsPlaying === false && gameSpace.turn === 0) {
            if ((0,_auxFunctions_js__WEBPACK_IMPORTED_MODULE_4__.checkValidPosition)(playersArr, gameSpace.turn, row, column))
                handleHit(playersArr, gameSpace, row, column, e, gameRecord, divBoardChildrenArray, numberOfShips, flagComputer, clicked, isDifficult);
            cell.removeEventListener('mouseup', clicked);
        }
    }
}

function handleHit(playersArr, gameSpace, row, column, e, gameRecord, divBoardChildrenArray, numberOfShips, flagComputer, clickedEventFunction, isDifficult) {
    // disable highlightAxisEvent
    highlightAxis(divBoardChildrenArray[column + row * Math.sqrt(divBoardChildrenArray.length)], false);
    divBoardChildrenArray.forEach((cell) => {
        cell.removeEventListener('mouseenter', highlightAxisEvent);
        cell.removeEventListener('mouseleave', highlightAxisEvent);
    });
    blinkTarget(divBoardChildrenArray, row, column);
    const shipHit = registerHit(playersArr, gameSpace.turn, row, column, e.target, gameRecord[gameSpace.turn]);
    if (shipHit && (0,_auxFunctions_js__WEBPACK_IMPORTED_MODULE_4__.isShipSunk)(playersArr[gameSpace.turn].gameboard, row, column))
        drawShipSunk(playersArr, row, column, gameSpace.turn);
    gameRecord[gameSpace.turn].moves.push([row, column]);
    gameSpace.turn = 1;
    if (playersArr[0].gameboard.areShipsLeft() === false) {
        disableEventListeners(clickedEventFunction);
        endGame(gameSpace.turn, playersArr, numberOfShips, true);
    } else
        computerTurn(flagComputer, gameSpace, playersArr, gameRecord, divBoardChildrenArray, numberOfShips, clickedEventFunction, isDifficult);
}

function disableEventListeners(eventFunction) {
    const divBoards = document.querySelectorAll('div.board');
    const divBoardChildrenArray = [...divBoards[1].children];
    divBoardChildrenArray.forEach((cell) => {
        cell.removeEventListener('mouseup', eventFunction);
        cell.removeEventListener('mouseenter', highlightAxisEvent);
        cell.removeEventListener('mouseleave', highlightAxisEvent);
        cell.classList.remove('highlight-target');
    });
}

function simplerLoops(coordinatesToTravel, cellArray, delay) {
    const size = Math.sqrt(cellArray.length);
    coordinatesToTravel.forEach((coordinate, index) => {
        setTimeout(function() {
            if (index > 0)
                highlightAxis(cellArray[coordinatesToTravel[index - 1][1] + coordinatesToTravel[index - 1][0] * size], false);
            highlightAxis(cellArray[coordinate[1] + coordinate[0] * size]);
            if (index === coordinatesToTravel.length - 1) {
                setTimeout(function() {
                    highlightAxis(cellArray[coordinate[1] + coordinate[0] * size], false);
                    blinkTarget(cellArray, coordinate[0], coordinate[1]);
                }, delay);
            }
        }, delay * index);
    }
    );
}

function computerTurn(flagComputer, gameSpace, playersArr, gameRecord, divBoardChildrenArray, numberOfShips, clickedEventFunction, isRandom = false) {
    if (flagComputer === true && gameSpace.turn === 1 && gameSpace.computerIsPlaying === false) {
        const divBoards = document.querySelectorAll('div.board');
        const size = (0,_calculationFunctions__WEBPACK_IMPORTED_MODULE_1__.getBoardSize)(playersArr[0]);
        gameSpace.computerIsPlaying = true;
        enableComputerThinkingDiv(true);
        const programmableDelay = 50;
        let validPosition = false;
        setTimeout(function() {
            while (validPosition === false) {
                const [row, column] = (0,_calculationFunctions__WEBPACK_IMPORTED_MODULE_1__.computerPlays)(playersArr[1].gameboard.map.length, gameRecord[gameSpace.turn], isRandom);
                validPosition = (0,_auxFunctions_js__WEBPACK_IMPORTED_MODULE_4__.checkValidPosition)(playersArr, gameSpace.turn, row, column)
                if (validPosition) {
                    gameRecord[gameSpace.turn].moves.push([row, column]);
                    const coordinatesToTravel = (0,_auxFunctions_js__WEBPACK_IMPORTED_MODULE_4__.getLaunchingCoordinates)([row, column], size);
                    const divBoardChildrenComputerArray = [...divBoards[0].children];
                    simplerLoops(coordinatesToTravel, divBoardChildrenComputerArray, programmableDelay);
                    setTimeout(function() {
                        gameSpace.computerIsPlaying = false;
                        gameSpace.turn = (gameSpace.turn === 0 ? 1 : 0);
                        enableComputerThinkingDiv(false);
                        blinkTarget(divBoardChildrenComputerArray, row, column);
                        divBoardChildrenArray.forEach((cell) => {
                            cell.addEventListener('mouseenter', highlightAxisEvent);
                            cell.addEventListener('mouseleave', highlightAxisEvent);
                        }
                        );
                    }, programmableDelay * coordinatesToTravel.length + 1);
                    const cell = divBoards[0].children[row * size + column];
                    const turn = gameSpace.turn;
                    setTimeout(function() {
                        if (registerHit(playersArr, turn, row, column, cell, gameRecord[turn])) {
                            gameRecord[turn].nonSunkShipsHitPosition.push([row, column]);
                            if ((0,_auxFunctions_js__WEBPACK_IMPORTED_MODULE_4__.isShipSunk)(playersArr[turn].gameboard, row, column)) {
                                gameRecord[turn].removeSunkShip((0,_auxFunctions_js__WEBPACK_IMPORTED_MODULE_4__.getSunkShipPositions)(playersArr[turn].gameboard, row, column));
                                drawShipSunk(playersArr, row, column, turn);
                                gameRecord[turn].searching = false;
                            }
                            if (playersArr[gameSpace.turn ? 0 : 1].gameboard.areShipsLeft() === false) {
                                disableEventListeners(clickedEventFunction);
                                endGame(gameSpace.turn, playersArr, numberOfShips, false);
                            }
                        }
                    }, programmableDelay * (coordinatesToTravel.length + 1));
                }
            }
        }, 100);
    }
}

function enableComputerThinkingDiv(flag) {
    const divSeparators = [...document.querySelectorAll('.separator')];
    if (flag)
        divSeparators[1].textContent = 'Computer is THINKING';
    else
        divSeparators[1].textContent = '';
}

function endGame(turn, playersArr, numberOfShips, flagUserWin) {
    changeGameTitle(flagUserWin ? 2 : 3);
    setUpReplayGame(playersArr, numberOfShips, getWinnerDiv(1 - turn), flagUserWin);
}

function getWinnerDiv(winnerIndex) {
    const divWinner = document.createElement('div');
    const spanName = document.createElement('span');
    const spanArray = [document.createElement('span'), document.createElement('span')];
    const winnerName = [...document.querySelectorAll('.players-name')][winnerIndex].textContent;
    divWinner.classList.add('winner');
    spanName.textContent = `${winnerName} `;
    spanArray[0].textContent = 'Player ';
    spanArray[1].textContent = 'gets the competition!';
    divWinner.appendChild(spanArray[0]);
    divWinner.appendChild(spanName);
    divWinner.appendChild(spanArray[1]);
    return divWinner;
}

function setUpReplayGame(playersArr, numberOfShips, winnerDiv) {
    const divShips = document.querySelector('.ship-selection');
    const replayButton = document.createElement('button');
    replayButton.textContent = 'Play again';
    replayButton.type = 'button';
    replayButton.addEventListener('click', () => {
        toggleHidDifficultyDiv();
        modifyComputerText();
        changeGameTitle(0);
        setUpPlayButtons(playersArr, numberOfShips);
        replayButton.remove();
        winnerDiv.remove();
    });
    divShips.appendChild(winnerDiv);
    divShips.appendChild(replayButton);
}

function setUpPlayButtons(players, nShips) {
    restartPlayersGrid(players);
    const divButtons = document.querySelector('.ship-selection');
    createPlayButtons(divButtons, players, nShips);
    randomPositionStart(players, nShips);
    setUpManualPosition(players, nShips);
    startGame(players, true, nShips);
    disableStartButton(true);
}

function createPlayButtons(container) {
    const resetButton = document.createElement('button');
    resetButton.id = 'randomize-placement';
    resetButton.type = 'button';
    const manualButton = document.createElement('button');
    manualButton.id = 'manual-placement';
    manualButton.type = 'button';
    const startButton = document.createElement('button');
    startButton.id = 'start-game';
    startButton.type = 'button';
    container.append(resetButton);
    container.append(manualButton);
    container.append(startButton);
}

function registerHit(playersArr, turn, row, column, cell, player) {
    let shipWasHit = false;
    playersArr[turn].gameboard.receiveAttack([row, column]);
    if (playersArr[turn].gameboard.positionsVisited[row][column] === true) {
        shipWasHit = true;
        cell.classList.add('hit');
        cell.classList.remove('highlight-target');
        player.hits.push(true);
        if (turn === 1) {
            player.lastHitIndex = player.moves.length - 1;
            player.searching = true;
        }
    }
    else {
        cell.classList.add('no-hit');
        cell.classList.remove('highlight-target');
        player.hits.push(false);
    }
    return shipWasHit;
}

function colorPlayerShips(shipPositions, i) {
    i = i === 0 ? 1 : 0
    const gameBoardPlayer = document.querySelectorAll('div.board');
    shipPositions.forEach((position) => {
        gameBoardPlayer[i].children[position[0] * 10 + position[1]].classList.add('humanPlayer');
    });
}

function modifyComputerText(isEasy) {
    const computerNameDiv = [...document.querySelectorAll('.players-name')][1];
    let textDifficulty;
    if (isEasy === undefined)
        textDifficulty = '';
    else
        textDifficulty = isEasy ? ' (easy)' : ' (hard)'
    computerNameDiv.textContent = `COMPUTER${textDifficulty}`;
}


/***/ }),

/***/ "./src/gameboard.js":
/*!**************************!*\
  !*** ./src/gameboard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Gameboard)
/* harmony export */ });
/* harmony import */ var _ships__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ships */ "./src/ships.js");


class Gameboard {
    constructor(boardSize) {
        this.size = boardSize;
        this.map = this.initializeArr(boardSize);
        this.positionsVisited = this.initializeArr(boardSize);
    }

    initializeArr(boardSize) {
        const arr = [];
        for (let i = 0; i < boardSize; ++i)
            arr.push(new Array(boardSize));
        return arr;
    }

    addShip(position) {
        if (!checkValidCoordinates(position, this.map))
            return false;
        // We assume the ships are completely straight
        // The first element of position is the most left/bottom
        const xLength = position[position.length - 1][0] - position[0][0];
        const yLength = position[position.length - 1][1] - position[0][1];
        let shipLength = Math.abs(xLength || yLength);
        const newShip = new _ships__WEBPACK_IMPORTED_MODULE_0__["default"](shipLength + 1);
        position.forEach((coordinate) => {
            this.map[coordinate[0]][coordinate[1]] = newShip;
        });
        return true;
    }

    receiveAttack(coordinates) {
        // lets check if the position has been visited
        if (this.positionsVisited[coordinates[0]][coordinates[1]] === undefined) {
            if (this.map[coordinates[0]][coordinates[1]] !== undefined) {
                this.map[coordinates[0]][coordinates[1]].hit();
                this.positionsVisited[coordinates[0]][coordinates[1]] = true;
            } else
                this.positionsVisited[coordinates[0]][coordinates[1]] = false;
        }
    }

    areShipsLeft() {
        for (let row = 0; row < this.size; ++row)
            for (let column = 0; column < this.size; ++column) {
                if (this.map[row][column] !== undefined)
                    if (this.positionsVisited[row][column] !== true)
                        return true;
            }
        return false;
    }
}

function checkValidCoordinates(coordinates, map) {
    // check that the input are numbers
    for (let i = 0; i < coordinates.length; ++i) {
        if (typeof coordinates[i][0] !== 'number' || typeof coordinates[i][0] !== 'number')
            return false;
        if (map[coordinates[i][0]] === undefined)
            return true;
        else if (map[coordinates[i][0]][coordinates[i][1]] !== undefined)
            return false;
    }
    return true;
}


/***/ }),

/***/ "./src/objectsModification.js":
/*!************************************!*\
  !*** ./src/objectsModification.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addShipToPlayer: () => (/* binding */ addShipToPlayer),
/* harmony export */   createGameRecord: () => (/* binding */ createGameRecord),
/* harmony export */   createPlayers: () => (/* binding */ createPlayers)
/* harmony export */ });
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ "./src/player.js");


function addShipToPlayer(player, positions) {
    player.gameboard.addShip(positions);
}

function createGameRecord() {
    const human = {
        moves: [],
        hits: [],
    };
    const computer = {
        moves: [],
        nonSunkShipsHitPosition: [],
        hits: [],
        searching: false,
        lastHitIndex: 0,
        removeSunkShip(shipSunkCoordinates) {
            for (const coordinate of shipSunkCoordinates) {
                for (let i = this.nonSunkShipsHitPosition.length - 1; i >= 0; --i) {
                    if (this.nonSunkShipsHitPosition[i][0] === coordinate[0] && this.nonSunkShipsHitPosition[i][1] === coordinate[1]) {
                        this.nonSunkShipsHitPosition.splice(i, 1);
                        break;
                    }
                }
            }
        },
    };

    return [human, computer];
}

function createPlayers(players, size) {
    players.splice(0, players.length);
    const playerOne = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](size);
    const playerTwo = new _player__WEBPACK_IMPORTED_MODULE_0__["default"](size);
    players.push(playerOne);
    players.push(playerTwo);
}


/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Player)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/gameboard.js");


class Player {
    constructor(size, isHuman = true) {
        this.gameboard = new _gameboard__WEBPACK_IMPORTED_MODULE_0__["default"](size);
        this.human = isHuman;
    }
}


/***/ }),

/***/ "./src/ships.js":
/*!**********************!*\
  !*** ./src/ships.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Ship)
/* harmony export */ });
class Ship {
    #length
    constructor(length) {
        this.#length = length;
    }

    hit() {
        this.#length -= 1;
    }

    get length() {
        return this.#length;
    }

    isSunk() {
        return this.#length === 0 ? true : false;
    }
}


/***/ }),

/***/ "./src/usernameDOM.js":
/*!****************************!*\
  !*** ./src/usernameDOM.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeGameTitle: () => (/* binding */ changeGameTitle),
/* harmony export */   setUpPlayerName: () => (/* binding */ setUpPlayerName)
/* harmony export */ });
function setUpPlayerName(callbackDisableButtons) {
    const containerNames = document.querySelector('.players-container');
    setUpDivForm(containerNames, callbackDisableButtons);
}

function setUpDivForm(container, callback) {
    const divContainerFormPlayerName = document.createElement('div');
    divContainerFormPlayerName.classList.add('container-form');
    setUpDivContainerFormName(divContainerFormPlayerName, callback);
    container.insertAdjacentElement('afterend', divContainerFormPlayerName);
}

function setUpDivContainerFormName(divContainer, callback) {
    const formPlayerName = document.createElement('form');
    setUpForm(formPlayerName);
    divContainer.appendChild(formPlayerName);
    formPlayerName.addEventListener('submit', (e) => {
        formEvent(e, callback);
    });
}

function getPlayerName() {
    const inputPlayer = document.getElementById('player-name-text');
    const inputPlayerName = inputPlayer.value;
    return inputPlayerName;
}

function formEvent(e, callback) {
    const form = e.target;
    e.preventDefault();
    const parentElement = e.target.parentElement;
    const playerName = getPlayerName();
    if (isValidInput(playerName)) {
        setPlayerName(playerName);
        parentElement.remove();
        callback(false, true);
        changeGameTitle(0);
    } else {
        showErrorMessageInput(form);
    }
}

function changeGameTitle(state) {
}

function isValidInput(name) {
    if (name.length > 0)
        return true
    return false;
}

function showErrorMessageInput(form) {
    if (document.querySelector('.error'))
        return
    const divErrorMessage = document.createElement('div');
    divErrorMessage.classList.add('error');
    divErrorMessage.textContent = 'Please fix your input';
    const formLastChild = form.children[form.children.length - 1];
    formLastChild.insertAdjacentElement('beforebegin', divErrorMessage);
}

function setUpForm(form) {
    form.id = 'player-data';
    const divPlayerName = document.createElement('div');
    const inputPlayerName = document.createElement('input');
    setUpInputPlayerName(inputPlayerName);
    setUpDivPlayerName(divPlayerName);
    form.appendChild(divPlayerName);
    form.appendChild(inputPlayerName);
}

function setUpDivPlayerName(divPlayerName) {
    const spanPlayerName = document.createElement('span');
    const inputPlayerName = document.createElement('input');
    inputPlayerName.placeholder = 'Your player name';
    inputPlayerName.id = 'player-name-text';
    spanPlayerName.textContent = 'Player name: ';
    divPlayerName.appendChild(spanPlayerName);
    divPlayerName.appendChild(inputPlayerName);
}

function setUpInputPlayerName(inputSubmit) {
    inputSubmit.type = 'submit';
    inputSubmit.value = 'Send';
}

function setPlayerName(name) {
    const divName = document.querySelector('.players-name');
    divName.textContent = name;
}


/***/ }),

/***/ "./src/images/smallShip.png":
/*!**********************************!*\
  !*** ./src/images/smallShip.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3eb93aad7040c6e952bf.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _domManipulation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domManipulation */ "./src/domManipulation.js");
/* harmony import */ var _background_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background.js */ "./src/background.js");



const GAMEBOARD_SIZE = 10;
const NUMBER_OF_SHIPS = 4;
(0,_background_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
(0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__["default"])(GAMEBOARD_SIZE, NUMBER_OF_SHIPS);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDekZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNBb0I7QUFDcUI7QUFDSTtBQUM3QztBQUNBO0FBQ0EsMERBQWU7QUFDZiw0REFBUyIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvYXV4RnVuY3Rpb25zLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9iYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9jYWxjdWxhdGlvbkZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZG9tTWFuaXB1bGF0aW9uLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL29iamVjdHNNb2RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3BsYXllci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc2hpcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3VzZXJuYW1lRE9NLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYGJvZHksXG5odG1sIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcbn1cblxuLnBsYXllcnMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4IDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnNjYWxpbmcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMXM7XG59XG5cbi5vY2VhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0MkI1O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbn1cblxuLmJvYXJkIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xuICAgIGFzcGVjdC1yYXRpbzogMTtcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgYmFja2dyb3VuZDogcmVkO1xufVxuXG4uY2VsbCB7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG4ucGxheWVyMSB7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbn1cblxuLnBsYXllcjIge1xuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcbn1cblxuLnBsYXllcnMtbmFtZSB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlO1xufVxuXG4ubm8taGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2U7XG59XG5cbi5odW1hblBsYXllciB7XG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcbn1cblxuLnNoaXAtc2VsZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uc2hpcHMtaW1hZ2VzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uZXJyb3Ige1xuICAgIGNvbG9yOiByZWQ7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbn1cblxuLmNvbnRhaW5lci1mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJweDtcbn1cblxuI3BsYXllci1kYXRhIHtcbiAgICBwYWRkaW5nOiA1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uaGlnaGxpZ2h0LXRhcmdldCB7XG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xufVxuXG4uc3VuayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLnRyYW5zaXRpb24tc2VsZWN0ZWQtYXhpcyB7XG4gICAgdHJhbnNpdGlvbjogMC4xcyBlYXNlLWluLW91dDtcbn1cblxuLnNlbGVjdGVkLWF4aXMge1xuICAgIGJhY2tncm91bmQtY29sb3I6IG1hZ2VudGE7XG59XG5cbi5nYW1lLXRpdGxlIHtcbiAgICBmb250LXNpemU6IDUwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDFzO1xufVxuXG4ud2lubmVyIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xufVxuXG4ud2lubmVyIHNwYW46bnRoLWNoaWxkKDIpIHtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIGNvbG9yOiBibHVlO1xuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbn1cblxuZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XG59XG5cbi5kaWZmaWN1bHR5IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG4uZGlmZmljdWx0eSBsZWdlbmQge1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5kaWZmaWN1bHR5IGxhYmVsIHtcbiAgICBtYXJnaW4tbGVmdDogLThweDtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmluZGl2aWR1YWwtc2hpcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7XG4gICAgYmFja2dyb3VuZDogbGlnaHRjeWFuO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCO0lBQ3RCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksd0JBQXdCO0lBQ3hCLHVDQUF1QztBQUMzQzs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2Qix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFNBQVM7SUFDVCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksXFxuaHRtbCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLnBsYXllcnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwcHggMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgbWFyZ2luOiAyMHB4IGF1dG87XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcblxcbi5zY2FsaW5nIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDFzO1xcbn1cXG5cXG4ub2NlYW4ge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0MkI1O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG5cXG4uY2VsbCB7XFxuICAgIHdpZHRoOiA0NHB4O1xcbiAgICBhc3BlY3QtcmF0aW86IDE7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4ucGxheWVyMSB7XFxuICAgIGp1c3RpZnktc2VsZjogcmlnaHQ7XFxufVxcblxcbi5wbGF5ZXIyIHtcXG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xcbn1cXG5cXG4ucGxheWVycy1uYW1lIHtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogeWVsbG93O1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2U7XFxufVxcblxcbi5uby1oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlO1xcbn1cXG5cXG4uaHVtYW5QbGF5ZXIge1xcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xcbn1cXG5cXG4uc2hpcC1zZWxlY3Rpb24ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uc2hpcHMtaW1hZ2VzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLmVycm9yIHtcXG4gICAgY29sb3I6IHJlZDtcXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5jb250YWluZXItZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycHg7XFxufVxcblxcbiNwbGF5ZXItZGF0YSB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5oaWdobGlnaHQtdGFyZ2V0IHtcXG4gICAgYm9yZGVyLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uc3VuayB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XFxufVxcblxcbi50cmFuc2l0aW9uLXNlbGVjdGVkLWF4aXMge1xcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xcbn1cXG5cXG4uc2VsZWN0ZWQtYXhpcyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG1hZ2VudGE7XFxufVxcblxcbi5nYW1lLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiA1MHB4O1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAxcztcXG59XFxuXFxuLndpbm5lciB7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzO1xcbn1cXG5cXG4ud2lubmVyIHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuZm9ybSBpbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xcbn1cXG5cXG4uZGlmZmljdWx0eSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uZGlmZmljdWx0eSBsZWdlbmQge1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZGlmZmljdWx0eSBsYWJlbCB7XFxuICAgIG1hcmdpbi1sZWZ0OiAtOHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmluZGl2aWR1YWwtc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Y3lhbjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3Vua1NoaXBQb3NpdGlvbnMoZ2FtZWJvYXJkLCBpbmRleFgsIGluZGV4WSkge1xuICAgIC8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBhIHN1bmsgc2hpcCBhbmQgd2lsbCByZXR1cm4gYWxsIHRoZSBnYW1lYm9hcmQgY29vcmRpbmF0ZXMgY29udGFpbmluZ1xuICAgIC8vIHRoaXMgc2hpcCBvYmplY3RcbiAgICBjb25zdCBzaGlwID0gZ2FtZWJvYXJkLm1hcFtpbmRleFhdW2luZGV4WV07XG4gICAgY29uc3Qgc3Vua1NoaXBDb29yZGluYXRlcyA9IFtdO1xuICAgIGdhbWVib2FyZC5tYXAuZm9yRWFjaCgocm93LCBpbmRleFJvdykgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoaXRlbSwgaW5kZXhDb2x1bW4pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBzaGlwKVxuICAgICAgICAgICAgICAgIHN1bmtTaGlwQ29vcmRpbmF0ZXMucHVzaChbaW5kZXhSb3csIGluZGV4Q29sdW1uXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBzdW5rU2hpcENvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTaGlwU3VuayhnYW1lYm9hcmQsIHJvdywgY29sdW1uKSB7XG4gICAgY29uc3Qgc2hpcCA9IGdhbWVib2FyZC5tYXBbcm93XVtjb2x1bW5dO1xuICAgIGlmIChzaGlwLmlzU3VuaygpKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXVuY2hpbmdDb29yZGluYXRlcyhjb29yZGluYXRlVG9CZUhpdCwgYm9hcmRTaXplKSB7XG4gICAgLy8gSW4gdGhpcyBmdW5jdGlvbiBhIHNlbWkgcmFuZG9tIHdhbGsgd2lsbCBiZSB1c2VkIHRvIHNpbXVsYXRlIFxuICAgIC8vIHRoYXQgdGhlIGNvbXB1dGVycyBpcyBjaG9vc2luZyBhIHBvc2l0aW9uLlxuICAgIC8vIEl0IHdpbGwgc3RhcnQgZnJvbSBvbmUgcmFuZG9tIGNvcm5lciBhbmQgdGhlbiBjaXJjdWxhdGUgYXJvdW5kIHVudGlsXG4gICAgLy8gaXQgYXJyaXZlcyB0byB0aGUgZGVzaXJlZCBjb29yZGluYXRlIHRoYXQgd2FzIHByZXZpb3VzbHkgc2VsZWN0ZWRcbiAgICAvLyBhcyB0aGUgbmV4dCBoaXRcbiAgICBjb25zdCBjb3JuZXJzQ29vcmRpbmF0ZXMgPSBbWzAsIDBdLCBbMCwgYm9hcmRTaXplIC0gMV0sIFtib2FyZFNpemUgLSAxLCAwXSwgW2JvYXJkU2l6ZSAtIDEsIGJvYXJkU2l6ZSAtIDFdXTtcbiAgICBjb25zdCBjb29yZGluYXRlc1RvVHJhdmVsID0gW107XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tU3RhcnQgPSBjb3JuZXJzQ29vcmRpbmF0ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xuICAgICAgICBpZiAocmFuZG9tU3RhcnRbMF0gPT09IGNvb3JkaW5hdGVUb0JlSGl0WzBdICYmIHJhbmRvbVN0YXJ0WzFdID09PSBjb29yZGluYXRlVG9CZUhpdFsxXSlcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIGNvb3JkaW5hdGVzVG9UcmF2ZWwucHVzaChyYW5kb21TdGFydCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsZXQgYXJyaXZlZERlc3RpbmF0aW9uID0gZmFsc2U7XG4gICAgbGV0IHggPSAwO1xuICAgIHdoaWxlICghYXJyaXZlZERlc3RpbmF0aW9uKSB7XG4gICAgICAgICsreDtcbiAgICAgICAgY29uc3QgbGFzdENvb3JkaW5hdGUgPSBjb29yZGluYXRlc1RvVHJhdmVsW2Nvb3JkaW5hdGVzVG9UcmF2ZWwubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IGNsb3NlclByb2JhYmlsaXR5ID0gMC44O1xuICAgICAgICBsZXQgZ2V0Q2xvc2VyRmxhZyA9IE1hdGgucmFuZG9tKCkgPCBjbG9zZXJQcm9iYWJpbGl0eSA/IDEgOiAwO1xuICAgICAgICBsZXQgcmFuZG9tQXhpcyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIGxldCBvdGhlckF4aXMgPSBNYXRoLmFicyhyYW5kb21BeGlzIC0gMSk7XG4gICAgICAgIGNvbnN0IG5ld0Nvb3JkaW5hdGUgPSBbbGFzdENvb3JkaW5hdGVbMF0sIGxhc3RDb29yZGluYXRlWzFdXTtcbiAgICAgICAgaWYgKCFnZXRDbG9zZXJGbGFnICYmIGNvb3JkaW5hdGVzVG9UcmF2ZWwubGVuZ3RoIDwgMjApIHtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNpZ25EaXJlY3Rpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgIGxldCBuZXdBeGlzUG9zaXRpb24gPSBsYXN0Q29vcmRpbmF0ZVtyYW5kb21BeGlzXSArIHNpZ25EaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgaWYgKG5ld0F4aXNQb3NpdGlvbiA8IDAgfHwgbmV3QXhpc1Bvc2l0aW9uID4gYm9hcmRTaXplIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlW3JhbmRvbUF4aXNdID0gbmV3QXhpc1Bvc2l0aW9uO1xuICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVbb3RoZXJBeGlzXSA9IGxhc3RDb29yZGluYXRlW290aGVyQXhpc107XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNUb1RyYXZlbC5wdXNoKG5ld0Nvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxhc3RDb29yZGluYXRlW3JhbmRvbUF4aXNdID4gY29vcmRpbmF0ZVRvQmVIaXRbcmFuZG9tQXhpc10pXG4gICAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZVtyYW5kb21BeGlzXSA9IGxhc3RDb29yZGluYXRlW3JhbmRvbUF4aXNdIC0gMTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGxhc3RDb29yZGluYXRlW3JhbmRvbUF4aXNdIDwgY29vcmRpbmF0ZVRvQmVIaXRbcmFuZG9tQXhpc10pXG4gICAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZVtyYW5kb21BeGlzXSA9IGxhc3RDb29yZGluYXRlW3JhbmRvbUF4aXNdICsgMTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZVtvdGhlckF4aXNdID0gbGFzdENvb3JkaW5hdGVbb3RoZXJBeGlzXTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzVG9UcmF2ZWwucHVzaChuZXdDb29yZGluYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q29vcmRpbmF0ZVswXSA9PT0gY29vcmRpbmF0ZVRvQmVIaXRbMF0gJiYgbmV3Q29vcmRpbmF0ZVsxXSA9PT0gY29vcmRpbmF0ZVRvQmVIaXRbMV0pXG4gICAgICAgICAgICBhcnJpdmVkRGVzdGluYXRpb24gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY29vcmRpbmF0ZXNUb1RyYXZlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVmFsaWRQb3NpdGlvbihwbGF5ZXJzQXJyLCB0dXJuLCByb3csIGNvbHVtbikge1xuICAgIGlmIChwbGF5ZXJzQXJyW3R1cm5dLmdhbWVib2FyZC5wb3NpdGlvbnNWaXNpdGVkW3Jvd11bY29sdW1uXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaWZmaWN1bHR5KCkge1xuICAgIGNvbnN0IGlucHV0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXTtcbiAgICBpZiAoaW5wdXRzWzFdLmNoZWNrZWQgPT09IHRydWUpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJhY2tncm91bmRXYXZlcygpIHtcbiAgICAgICAgLy8gbGV0J3MgYWRkIHNvbWUgZXZlbnQgbGlzdGVuZXJzIHRvIHRoZSBvY2VhbiBkaXZcbiAgICAgICAgbGV0IHN0YXRlID0gMDtcbiAgICAgICAgY29uc3Qgc3RhdGVWYWx1ZXMgPSBbYFxuICAgICAgICAgICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+YCxcbiAgICAgICAgICAgICAgICBgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgICAgICAgICAgfiB+IH4gfiB+IH4gfiB+XG4gICAgICAgICAgICAgICAgJm5ic3A7IH4gfiB+IH4gfiB+IH5cbiAgICAgICAgICAgICAgICB+IH4gfiB+IH4gfiB+IH5cbiAgICAgICAgICAgICAgICAmbmJzcDsgfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgICAgICAgICAgfiB+IH4gfiB+IH4gfiB+XG4gICAgICAgICAgICAgICAgJm5ic3A7IH4gfiB+IH4gfiB+IH5cbiAgICAgICAgICAgICAgICB+IH4gfiB+IH4gfiB+IH5cbiAgICAgICAgICAgICAgICAmbmJzcDsgfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgICAgICAgICAgfiB+IH4gfiB+IH4gfiB+XG4gICAgICAgICAgICAgICAgJm5ic3A7IH4gfiB+IH4gfiB+IH5cbiAgICAgICAgICAgICAgICB+IH4gfiB+IH4gfiB+IH5cbiAgICAgICAgICAgICAgICAmbmJzcDsgfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgICAgICAgICAgfiB+IH4gfiB+IH4gfiB+XG4gICAgICAgICAgICAgICAgJm5ic3A7IH4gfiB+IH4gfiB+IH5cbiAgICAgICAgICAgICAgICB+IH4gfiB+IH4gfiB+IH5cbiAgICAgICAgICAgICAgICAmbmJzcDsgfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgIH4gfiB+IH4gfiB+IH4gflxuICAgICAgICAgICAgICAgICZuYnNwOyB+IH4gfiB+IH4gfiB+XG4gICAgICAgICAgICAgICAgfiB+IH4gfiB+IH4gfiB+XG4gICAgICAgICAgICAgICAgJm5ic3A7IH4gfiB+IH4gfiB+IH5cbiAgICAgICAgICAgICAgICB+IH4gfiB+IH4gfiB+IH5gXG4gICAgICAgIF07XG4gICAgICAgIGNvbnN0IHdhdmVTcGFuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm9jZWFuID4gc3BhbicpO1xuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3YXZlU3Bhbi5pbm5lckhUTUwgPSBzdGF0ZVZhbHVlc1tzdGF0ZV07XG4gICAgICAgICAgICAgICAgc3RhdGUgPSAxIC0gc3RhdGU7XG4gICAgICAgIH0sIDI1MCk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNWYWxpZFNoaXBQb3NpdGlvbihzaGlwLCBib2FyZFBsYXllcjFDb29yZCkge1xuICAgIC8vIHdoZW4gdGhlcmUgaXMgYSBtb3VzZSB1cCBpdCBuZWVkcyB0byBiZSBjaGVja2VkIGlmIGEgY2VsbCBpcyB3aXRoaW4gdGhlIGNvb3JkaW5hdGVzXG4gICAgLy8gd2UgaGF2ZSB0byB0YWtlIGludG8gYWNjb3VudCB0aGUgc2l6ZSBvZiB0aGUgc2VsZWN0ZWQgc2hpcFxuICAgIC8vIGl0cyByb3RhdGlvbiB0b28gbXVzdCBiZSB0YWtlbiBpbnRvIGFjY291bnRcbiAgICAvLyBpbiB0aGlzIGZ1bmN0aW9uIGluZGV4U2hpcCBpcyBhbHdheXMgZGlmZmVyZW50IGZyb20gLTFcbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBzaGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCByb3RhdGVkO1xuICAgIGlmIChzaGlwLnN0eWxlLnRyYW5zZm9ybSA9PT0gJ3JvdGF0ZSg5MGRlZyknKVxuICAgICAgICByb3RhdGVkID0gdHJ1ZTtcbiAgICBlbHNlXG4gICAgICAgIHJvdGF0ZWQgPSBmYWxzZTtcbiAgICBsZXQgc2hpcFNpemUgPSBnZXRTaGlwU2l6ZShzaGlwQ29vcmRpbmF0ZXMsIHJvdGF0ZWQpO1xuICAgIGlmIChib2FyZFBsYXllcjFDb29yZC5sZWZ0IDwgc2hpcENvb3JkaW5hdGVzLmxlZnQgJiYgc2hpcENvb3JkaW5hdGVzLmxlZnQgPCBib2FyZFBsYXllcjFDb29yZC5yaWdodCkge1xuICAgICAgICBpZiAoYm9hcmRQbGF5ZXIxQ29vcmQudG9wIDwgc2hpcENvb3JkaW5hdGVzLnRvcCAmJiBzaGlwQ29vcmRpbmF0ZXMudG9wIDwgYm9hcmRQbGF5ZXIxQ29vcmQuYm90dG9tKVxuICAgICAgICAgICAgaWYgKHJvdGF0ZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAoc2hpcENvb3JkaW5hdGVzLnRvcCArIChzaGlwU2l6ZSAtIDEpICogNTAgPCBib2FyZFBsYXllcjFDb29yZC5ib3R0b20pXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgaWYgKHNoaXBDb29yZGluYXRlcy5sZWZ0ICsgKHNoaXBTaXplIC0gMSkgKiA1MCA8IGJvYXJkUGxheWVyMUNvb3JkLnJpZ2h0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Qm9hcmRTaXplKHBsYXllcikge1xuICAgIHJldHVybiBwbGF5ZXIuZ2FtZWJvYXJkLnNpemU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXROZXdTaGlwUG9zaXRpb24oc2hpcCwgYm9hcmRQbGF5ZXIxQ29vcmQpIHtcbiAgICBjb25zdCBzaGlwQ29vcmRpbmF0ZXMgPSBzaGlwLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGxldCByb3RhdGVkO1xuICAgIGlmIChzaGlwLnN0eWxlLnRyYW5zZm9ybSA9PT0gJ3JvdGF0ZSg5MGRlZyknKVxuICAgICAgICByb3RhdGVkID0gdHJ1ZTtcbiAgICBlbHNlXG4gICAgICAgIHJvdGF0ZWQgPSBmYWxzZTtcbiAgICAvLyBhdCB0aGlzIHBvaW50IHdlIGtub3cgdGhlIHNoaXAgaXMgd2l0aGluIGJvdW5kcztcbiAgICAvLyB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHNoaXAgcmVwcmVzZW50IGFsbCB0aGUgaW5kZXhlcyBvZiB0aGUgYm9hcmQgd2hlcmUgdGhlIHNoaXAgd2lsbCBiZSBwbGFjZWRcbiAgICAvLyB0aGF0IGlzLCB0aGF0IHdlIG5lZWQgdG8gaGF2ZSBhbiBhcnJheSBvZiBhcnJheXMgd2l0aCBhbGwgdGhlIHBvc2l0aW9uXG4gICAgLy8gd2UgY2FuIHVzZSBwbGF5ZXIuZ2FtZWJvYWQuYWRkIC4uLiBhbmQgc2V0IHRoZSBjb29yZGluYXRlcyBsaWtlIHRoYXRcbiAgICAvLyBvZiBjb3Vyc2UgYmVmb3JlIGFkZGluZyB3ZSBuZWVkIHRvIGNoZWNrIHdoZXRoZXIgb3Igbm90IHRoYXQgaXMgc29tZXRoaW5nIHRoYXQgaXMgYWxsb3dlZFxuICAgIGNvbnN0IGluZGV4ZXMgPSBbXTtcbiAgICAvLyB3ZSBuZWVkIHRvIG9idGFpbiB0aGUgc2l6ZSBvZiBlYWNoIHNoaXBcbiAgICBsZXQgc2l6ZVNoaXAgPSBnZXRTaGlwU2l6ZShzaGlwQ29vcmRpbmF0ZXMsIHJvdGF0ZWQpO1xuICAgIC8vIGZvciBsb29wIHRvIGhhdmUgYWxsIHRoZSBpbmRleGVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplU2hpcDsgKytpKSB7XG4gICAgICAgIGNvbnN0IGNvb3JkaW5hdGUgPSBbXTtcbiAgICAgICAgaWYgKHJvdGF0ZWQpIHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGUucHVzaChNYXRoLmZsb29yKChzaGlwQ29vcmRpbmF0ZXMudG9wIC0gYm9hcmRQbGF5ZXIxQ29vcmQudG9wKSAvIDUwKSArIGkpO1xuICAgICAgICAgICAgY29vcmRpbmF0ZS5wdXNoKE1hdGguZmxvb3IoKHNoaXBDb29yZGluYXRlcy5sZWZ0IC0gYm9hcmRQbGF5ZXIxQ29vcmQubGVmdCkgLyA1MCkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29vcmRpbmF0ZS5wdXNoKE1hdGguZmxvb3IoKHNoaXBDb29yZGluYXRlcy50b3AgLSBib2FyZFBsYXllcjFDb29yZC50b3ApIC8gNTApKTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGUucHVzaChNYXRoLmZsb29yKChzaGlwQ29vcmRpbmF0ZXMubGVmdCAtIGJvYXJkUGxheWVyMUNvb3JkLmxlZnQpIC8gNTApICsgaSk7XG4gICAgICAgIH1cbiAgICAgICAgaW5kZXhlcy5wdXNoKGNvb3JkaW5hdGUpO1xuICAgIH1cbiAgICByZXR1cm4gaW5kZXhlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBDb2xsaXNpb24ocGxheWVyLCBwb3NpdGlvbnMpIHtcbiAgICBsZXQgaXNDb2xsaXNpb24gPSBmYWxzZTtcbiAgICBwb3NpdGlvbnMuZm9yRWFjaCgocG9zaXRpb24pID0+IHtcbiAgICAgICAgaWYgKHBsYXllci5nYW1lYm9hcmQubWFwW3Bvc2l0aW9uWzBdXVtwb3NpdGlvblsxXV0pIHtcbiAgICAgICAgICAgIGlzQ29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpc0NvbGxpc2lvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUNvb3JkaW5hdGVzKG5TaGlwcywgc2l6ZSkge1xuICAgIC8vIFJldHVybnMgYSBtYXRyaXggb2YgblNoaXBzIHdpdGggZGlmZmVyZW50IGxlbmd0aHMgdGhhdCBhcmUgbm90IG92ZXJsYXBwaW5nXG4gICAgY29uc3QgaW5pdGlhbFNpemUgPSAyO1xuICAgIGNvbnN0IHNoaXBBcnJheSA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgblNoaXBzOyArK2kpIHtcbiAgICAgICAgc2hpcEFycmF5LnB1c2goW10pO1xuICAgIH1cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5TaGlwczsgKytpKSB7XG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgaW5pdGlhbFNpemUgKyBpOyArK2opIHtcbiAgICAgICAgICAgIHNoaXBBcnJheVtpXS5wdXNoKFswLCAwXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gVGhlIGZpcnN0IGxlbmd0aCBpcyAyIGFuZCB0aGVuIGluY3JlYXNlcyBieSAxXG4gICAgLy8gVGhlIHNoaXBzIGNhbiBoYXZlIGhvcml6b250YWwgb3IgdmVydGljYWwgb3JpZW50YXRpb25cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5TaGlwczsgKytpKSB7XG4gICAgICAgIGxldCBwb3NpdGlvblZhbGlkID0gZmFsc2U7XG4gICAgICAgIGxldCBob3Jpem9udGFsID0gZ2V0UmFuZG9tVHJ1ZUZhbHNlKCk7XG4gICAgICAgIHdoaWxlIChwb3NpdGlvblZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IHJvdywgY29sdW1uO1xuICAgICAgICAgICAgcm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSk7XG4gICAgICAgICAgICBjb2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcblxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRGlyZWN0aW9uID0gcm93O1xuICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIHNoaXAgd2lsbCBhY3R1YWxseSBmaXQgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIGdhbWVib2FyZFxuICAgICAgICAgICAgaWYgKGhvcml6b250YWwpXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWREaXJlY3Rpb24gPSBjb2x1bW47XG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWREaXJlY3Rpb24gKyBpICsgaW5pdGlhbFNpemUgPiBzaXplIC0gMSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhlIGZpcnN0IHNoaXAgcG9zaXRpb24gaXMgbmV2ZXIgY2hlY2sgYXMgdGhlcmUgaXMgbm8gcHJldmlvdXMgc2hpcFxuICAgICAgICAgICAgICAgIC8vIFdlIGNoZWNrIGlmIHRoZXJlIGFyZSBvdmVybGFwcGluZ1xuICAgICAgICAgICAgICAgIC8vIHdlIGNoZWNrIGFsbCB0aGUgY3VycmVudCBwb3NpdGlvbnMgZm9yIHRoZSBzaGlwcyB0aGF0IGFyZSBhbHJlYWR5IHZhbGlkYXRlZFxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsTGVuZ3RoID0gaW5pdGlhbFNpemUgKyBpO1xuICAgICAgICAgICAgICAgIGxldCBub0NvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBpOyArK2spIHtcbiAgICAgICAgICAgICAgICAgICAgc2hpcEFycmF5W2tdLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRvdGFsTGVuZ3RoOyArK2opIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25bMF0gPT09IHJvdyAmJiBwb3NpdGlvblsxXSA9PT0gY29sdW1uICsgaikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Db2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvblswXSA9PT0gcm93ICsgaiAmJiBwb3NpdGlvblsxXSA9PT0gY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0NvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGsgPT09IGkgLSAxICYmIG5vQ29sbGlzaW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25WYWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcG9zaXRpb25WYWxpZCA9IHRydWU7XG5cbiAgICAgICAgICAgIGlmIChwb3NpdGlvblZhbGlkKSB7XG4gICAgICAgICAgICAgICAgc2hpcEFycmF5W2ldLmZvckVhY2goKHBvc2l0aW9uLCBpZHgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uWzBdID0gcm93O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25bMV0gPSBjb2x1bW4gKyBpZHg7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblswXSA9IHJvdyArIGlkeDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uWzFdID0gY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gc2hpcEFycmF5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcHV0ZXJQbGF5cyhzaXplLCBjb21wdXRlclBsYXlSZWNvcmQsIGlzUmFuZG9tKSB7XG4gICAgaWYgKGlzUmFuZG9tKVxuICAgICAgICByZXR1cm4gY29tcHV0ZXJQbGF5c1JhbmRvbShzaXplKTtcbiAgICBpZiAoY29tcHV0ZXJQbGF5UmVjb3JkLnNlYXJjaGluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGNvbXB1dGVyUGxheVJlY29yZC5ub25TdW5rU2hpcHNIaXRQb3NpdGlvbi5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcmV0dXJuIGdldE5lYXJieUNvb3JkaW5hdGVzT2xkKHNpemUsIGNvbXB1dGVyUGxheVJlY29yZCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBjb21wdXRlclBsYXlzUmFuZG9tKHNpemUpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbmV3Q29yZHMgPSBnZXROZWFyYnlDb29yZGluYXRlcyhzaXplLCBjb21wdXRlclBsYXlSZWNvcmQpO1xuICAgICAgICBpZiAobmV3Q29yZHMgIT09IC0xKVxuICAgICAgICAgICAgcmV0dXJuIG5ld0NvcmRzO1xuICAgICAgICBlbHNlIGlmIChjb21wdXRlclBsYXlSZWNvcmQubm9uU3Vua1NoaXBzSGl0UG9zaXRpb24ubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiBnZXROZWFyYnlDb29yZGluYXRlc09sZChzaXplLCBjb21wdXRlclBsYXlSZWNvcmQpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gY29tcHV0ZXJQbGF5c1JhbmRvbShzaXplKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdldE5lYXJieUNvb3JkaW5hdGVzT2xkKHNpemUsIGNvbXB1dGVyUmVjb3JkKSB7XG4gICAgY29uc3QgcG9zc2libGVQb3MgPSBbWy0xLCAwXSwgWzAsIC0xXSwgWzEsIDBdLCBbMCwgMV1dO1xuICAgIGNvbnN0IHByZXZpb3VzTW92ZXMgPSBjb21wdXRlclJlY29yZC5tb3ZlcztcbiAgICBsZXQgYXZhaWxhYmxlTW92ZTtcbiAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvbXB1dGVyUmVjb3JkLm5vblN1bmtTaGlwc0hpdFBvc2l0aW9uLmxlbmd0aDsgKytqKSB7XG4gICAgICAgIGNvbnN0IGxhc3RIaXRQb3NpdGlvbiA9IGNvbXB1dGVyUmVjb3JkLm5vblN1bmtTaGlwc0hpdFBvc2l0aW9uW2pdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlUG9zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wUG9zaXRpb24gPSBbbGFzdEhpdFBvc2l0aW9uWzBdICsgcG9zc2libGVQb3NbaV1bMF0sIGxhc3RIaXRQb3NpdGlvblsxXSArIHBvc3NpYmxlUG9zW2ldWzFdXTtcbiAgICAgICAgICAgIGlmICgodGVtcFBvc2l0aW9uWzBdIDwgMCB8fCB0ZW1wUG9zaXRpb25bMF0gPiBzaXplIC0gMSkgfHwgKHRlbXBQb3NpdGlvblsxXSA8IDAgfHwgdGVtcFBvc2l0aW9uWzFdID4gc2l6ZSAtIDEpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgYXZhaWxhYmxlTW92ZSA9IHRydWU7XG4gICAgICAgICAgICBwcmV2aW91c01vdmVzLmZvckVhY2goKHBvc2l0aW9uVmlzaXRlZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0ZW1wUG9zaXRpb25bMF0gPT09IHBvc2l0aW9uVmlzaXRlZFswXSAmJiB0ZW1wUG9zaXRpb25bMV0gPT09IHBvc2l0aW9uVmlzaXRlZFsxXSkge1xuICAgICAgICAgICAgICAgICAgICBhdmFpbGFibGVNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpID09PSBwb3NzaWJsZVBvcy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgIGNvbXB1dGVyUmVjb3JkLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKGF2YWlsYWJsZU1vdmUpXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRlbXBQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGdldE5lYXJieUNvb3JkaW5hdGVzKHNpemUsIGNvbXB1dGVyUmVjb3JkKSB7XG4gICAgLy8gbGV0J3MgZ28gZnJvbSB0b3AgdG8gYm90dG9uICBpbiBjb3VudGVyIGNsb2NrIHdpc2UgZGlyZWN0aW9uXG4gICAgY29uc3QgcG9zc2libGVQb3MgPSBbWy0xLCAwXSwgWzAsIC0xXSwgWzEsIDBdLCBbMCwgMV1dO1xuICAgIGNvbnN0IHByZXZpb3VzTW92ZXMgPSBjb21wdXRlclJlY29yZC5tb3ZlcztcbiAgICBjb25zdCBsYXN0SGl0UG9zaXRpb24gPSBwcmV2aW91c01vdmVzW2NvbXB1dGVyUmVjb3JkLmxhc3RIaXRJbmRleF07XG4gICAgbGV0IGF2YWlsYWJsZU1vdmU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZVBvcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBjb25zdCB0ZW1wUG9zaXRpb24gPSBbbGFzdEhpdFBvc2l0aW9uWzBdICsgcG9zc2libGVQb3NbaV1bMF0sIGxhc3RIaXRQb3NpdGlvblsxXSArIHBvc3NpYmxlUG9zW2ldWzFdXTtcbiAgICAgICAgaWYgKCh0ZW1wUG9zaXRpb25bMF0gPCAwIHx8IHRlbXBQb3NpdGlvblswXSA+IHNpemUgLSAxKSB8fCAodGVtcFBvc2l0aW9uWzFdIDwgMCB8fCB0ZW1wUG9zaXRpb25bMV0gPiBzaXplIC0gMSkpXG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgYXZhaWxhYmxlTW92ZSA9IHRydWU7XG4gICAgICAgIHByZXZpb3VzTW92ZXMuZm9yRWFjaCgocG9zaXRpb25WaXNpdGVkKSA9PiB7XG4gICAgICAgICAgICBpZiAodGVtcFBvc2l0aW9uWzBdID09PSBwb3NpdGlvblZpc2l0ZWRbMF0gJiYgdGVtcFBvc2l0aW9uWzFdID09PSBwb3NpdGlvblZpc2l0ZWRbMV0pIHtcbiAgICAgICAgICAgICAgICBhdmFpbGFibGVNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGkgPT09IHBvc3NpYmxlUG9zLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICBjb21wdXRlclJlY29yZC5zZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgaWYgKGF2YWlsYWJsZU1vdmUpXG4gICAgICAgICAgICByZXR1cm4gdGVtcFBvc2l0aW9uO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyUGxheXNSYW5kb20oc2l6ZSkge1xuICAgIC8vIGl0IGp1c3QgcmV0dXJuIHNvbWUgcmFuZG9tIGNvb3JkaW5hdGVzXG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpO1xuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcbiAgICByZXR1cm4gW3gsIHldO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpcHNMZWZ0KGNvbnRhaW5lcikge1xuICAgIGxldCBhbnlMZWZ0ID0gdHJ1ZTtcbiAgICBbLi4uY29udGFpbmVyXS5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgICAgICBpZiAoaW1hZ2Uuc3R5bGUud2lkdGggIT09ICcwcHgnICYmIGltYWdlLnN0eWxlLmhlaWdodCAhPT0gJzBweCcpIHtcbiAgICAgICAgICAgIGFueUxlZnQgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBhbnlMZWZ0O1xufVxuXG5mdW5jdGlvbiBnZXRTaGlwU2l6ZShjb29yZGluYXRlcywgaXNSb3RhdGVkKSB7XG4gICAgaWYgKGlzUm90YXRlZClcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgoY29vcmRpbmF0ZXMuYm90dG9tIC0gY29vcmRpbmF0ZXMudG9wKSAvIDUwKTtcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoKGNvb3JkaW5hdGVzLnJpZ2h0IC0gY29vcmRpbmF0ZXMubGVmdCkgLyA1MCk7XG59XG5cbmZ1bmN0aW9uIGdldFJhbmRvbVRydWVGYWxzZSgpIHtcbiAgICBjb25zdCByYW5kb21OdW1iZXIgPSBNYXRoLnJhbmRvbSgpO1xuICAgIGlmIChyYW5kb21OdW1iZXIgPj0gMC41KVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlXG59XG4iLCJpbXBvcnQgaW1hZ2VTaGlwMSBmcm9tIFwiLi9pbWFnZXMvc21hbGxTaGlwLnBuZ1wiO1xuaW1wb3J0IHsgc2hpcHNMZWZ0LCBpc1ZhbGlkU2hpcFBvc2l0aW9uLCBnZXRCb2FyZFNpemUsIGdldE5ld1NoaXBQb3NpdGlvbiwgc2hpcENvbGxpc2lvbiwgY29tcHV0ZXJQbGF5cywgZ2V0UmFuZG9tQ29vcmRpbmF0ZXMgfSBmcm9tIFwiLi9jYWxjdWxhdGlvbkZ1bmN0aW9uc1wiO1xuaW1wb3J0IHsgYWRkU2hpcFRvUGxheWVyLCBjcmVhdGVHYW1lUmVjb3JkLCBjcmVhdGVQbGF5ZXJzIH0gZnJvbSBcIi4vb2JqZWN0c01vZGlmaWNhdGlvblwiO1xuaW1wb3J0IHsgc2V0VXBQbGF5ZXJOYW1lIH0gZnJvbSBcIi4vdXNlcm5hbWVET00uanNcIjtcbmltcG9ydCB7IGdldFN1bmtTaGlwUG9zaXRpb25zLCBpc1NoaXBTdW5rLCBnZXRMYXVuY2hpbmdDb29yZGluYXRlcywgY2hlY2tWYWxpZFBvc2l0aW9uLCBnZXREaWZmaWN1bHR5IH0gZnJvbSBcIi4vYXV4RnVuY3Rpb25zLmpzXCI7XG5cbmNvbnN0IElNQUdFU19TSElQUyA9IGltYWdlU2hpcDE7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUJvYXJkKHNpemUsIG51bWJlck9mU2hpcHMpIHtcbiAgICBsb2FkR3JpZChzaXplKTtcbiAgICBzZXRVcFBsYXllck5hbWUoZGlzYWJsZUJ1dHRvbnMpO1xuICAgIHNldFVwRnVuY3Rpb25hbGl0eShudW1iZXJPZlNoaXBzLCBzaXplKTtcbiAgICBtYWtlQm9hcmREaXZWaXNpYmxlKCk7XG59XG5cbmZ1bmN0aW9uIG1ha2VCb2FyZERpdlZpc2libGUoKSB7XG4gICAgY29uc3QgYm9hcmRDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVycy1jb250YWluZXInKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IGJvYXJkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NjYWxpbmcnKSwgMTAwKTtcbn1cblxuZnVuY3Rpb24gc2V0VXBGdW5jdGlvbmFsaXR5KG51bWJlck9mU2hpcHMsIHNpemUpIHtcbiAgICBjb25zdCBwbGF5ZXJzQXJyID0gW107XG4gICAgY3JlYXRlUGxheWVycyhwbGF5ZXJzQXJyLCBzaXplKTtcbiAgICByYW5kb21Qb3NpdGlvblN0YXJ0KHBsYXllcnNBcnIsIG51bWJlck9mU2hpcHMpO1xuICAgIHNldFVwTWFudWFsUG9zaXRpb24ocGxheWVyc0FyciwgbnVtYmVyT2ZTaGlwcywgdHJ1ZSk7XG4gICAgY3JlYXRlRGl2U2hpcHMobnVtYmVyT2ZTaGlwcyk7XG4gICAgc2V0VXBFdmVudExpc3RlbmVyc1NoaXBzKHBsYXllcnNBcnIpO1xuICAgIHN0YXJ0R2FtZShwbGF5ZXJzQXJyLCB0cnVlLCBudW1iZXJPZlNoaXBzKTtcbn1cblxuZnVuY3Rpb24gY2hhbmdlR2FtZVRpdGxlKHN0YXRlKSB7XG4gICAgY29uc3Qgc3BhblRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmdhbWUtdGl0bGUgc3BhbicpO1xuICAgIGlmIChzdGF0ZSA9PT0gMClcbiAgICAgICAgc3BhblRpdGxlLnRleHRDb250ZW50ID0gJzxXRUxDT01FPic7XG4gICAgZWxzZSBpZiAoc3RhdGUgPT09IDEpXG4gICAgICAgIHNwYW5UaXRsZS50ZXh0Q29udGVudCA9ICdGSUdIVCEhISEnO1xuICAgIGVsc2UgaWYgKHN0YXRlID09PSAyKVxuICAgICAgICBzcGFuVGl0bGUudGV4dENvbnRlbnQgPSAnWW91IHdpbiEnO1xuICAgIGVsc2UgaWYgKHN0YXRlID09PSAzKVxuICAgICAgICBzcGFuVGl0bGUudGV4dENvbnRlbnQgPSAnR2FtZSBPdmVyISc7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVCdXR0b25zKGZsYWdEaXNhYmxlLCBmbGFnTGFzdEJ1dHRvbiA9IGZhbHNlKSB7XG4gICAgY29uc3Qgc2hpcEJ1dHRvbnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtc2VsZWN0aW9uJykuY2hpbGRyZW5dO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcEJ1dHRvbnMubGVuZ3RoOyArK2kpXG4gICAgICAgIHNoaXBCdXR0b25zW2ldLmRpc2FibGVkID0gZmxhZ0Rpc2FibGU7XG4gICAgaWYgKGZsYWdMYXN0QnV0dG9uKVxuICAgICAgICBzaGlwQnV0dG9uc1tzaGlwQnV0dG9ucy5sZW5ndGggLSAxXS5kaXNhYmxlZCA9IHRydWU7XG59XG5cbmZ1bmN0aW9uIHJhbmRvbVBvc2l0aW9uU3RhcnQocGxheWVyc0FyciwgbnVtYmVyT2ZTaGlwcykge1xuICAgIGNvbnN0IHJlc3RhcnRQb3NpdGlvbkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYW5kb21pemUtcGxhY2VtZW50Jyk7XG4gICAgcmVzdGFydFBvc2l0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gJ1JhbmRvbWl6ZSBzaGlwIHBsYWNlbWVudCc7XG4gICAgcmVzdGFydFBvc2l0aW9uQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICByZXN0YXJ0UGxheWVyc0dyaWQocGxheWVyc0Fycik7XG4gICAgICAgIHBsYXllcnNBcnIuZm9yRWFjaCgocGxheWVyLCBwbGF5ZXJJbmRleCkgPT4ge1xuICAgICAgICAgICAgcGxhY2VTaGlwc0dhbWVib2FyZChwbGF5ZXIsIHBsYXllckluZGV4LCBudW1iZXJPZlNoaXBzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHNldFVwTWFudWFsUG9zaXRpb24ocGxheWVyc0FyciwgbnVtYmVyT2ZTaGlwcyk7XG4gICAgICAgIC8vIHdlIGVuYWJsZSB0aGUgYnV0dG9uIG9mIHN0YXJ0aW5nIHRoZSBnYW1lXG4gICAgICAgIGRpc2FibGVEaXZTaGlwcygpO1xuICAgICAgICBkaXNhYmxlU3RhcnRCdXR0b24oZmFsc2UpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBwbGFjZVNoaXBzR2FtZWJvYXJkKHBsYXllciwgcGxheWVySW5kZXgsIG5TaGlwcykge1xuICAgIGxldCBjb29yZGluYXRlc1NoaXBzQXJyO1xuICAgIGxldCBzaXplID0gcGxheWVyLmdhbWVib2FyZC5zaXplO1xuICAgIGNvb3JkaW5hdGVzU2hpcHNBcnIgPSBnZXRSYW5kb21Db29yZGluYXRlcyhuU2hpcHMsIHNpemUpO1xuICAgIGNvb3JkaW5hdGVzU2hpcHNBcnIuZm9yRWFjaCgoY29vcmRpbmF0ZXMpID0+IHtcbiAgICAgICAgYWRkU2hpcFRvUGxheWVyKHBsYXllciwgY29vcmRpbmF0ZXMpO1xuICAgICAgICBpZiAocGxheWVySW5kZXggPT09IDEpXG4gICAgICAgICAgICBjb2xvclBsYXllclNoaXBzKGNvb3JkaW5hdGVzLCBwbGF5ZXJJbmRleCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNldFVwRGl2U2hpcHMoKSB7XG4gICAgY29uc3QgaW1hZ2VzRWxlbWVudHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyldO1xuICAgIGltYWdlc0VsZW1lbnRzLmZvckVhY2goKGltYWdlKSA9PiBpbWFnZS5zcmMgPSBJTUFHRVNfU0hJUFMpO1xuICAgIGVuYWJsZURpdlNoaXBzKCk7XG4gICAgZGlzYWJsZURpdlNoaXBzKCk7XG59XG5cbmZ1bmN0aW9uIGVuYWJsZURpdlNoaXBzKCkge1xuICAgIGNvbnN0IGltYWdlc0VsZW1lbnRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXTtcbiAgICBpbWFnZXNFbGVtZW50cy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgcmVzdGFydEltYWdlUG9zaXRpb24oaW1hZ2UpO1xuICAgICAgICByZXN0YXJ0U2l6ZUltYWdlKGltYWdlLCBpbmRleCk7XG4gICAgfSk7XG4gICAgZGlzYWJsZURpdlNoaXBDb250YWluZXIoZmFsc2UpO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlRGl2U2hpcENvbnRhaW5lcihmbGFnID0gdHJ1ZSkge1xuICAgIGNvbnN0IGluZGl2aWR1YWxTaGlwQ29udGFpbmVycyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hpcHMtaW1hZ2VzIGRpdicpXTtcbiAgICBpZiAoZmxhZylcbiAgICAgICAgaW5kaXZpZHVhbFNoaXBDb250YWluZXJzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5yZW1vdmUoJ2luZGl2aWR1YWwtc2hpcCcpKTtcbiAgICBlbHNlXG4gICAgICAgIGluZGl2aWR1YWxTaGlwQ29udGFpbmVycy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QuYWRkKCdpbmRpdmlkdWFsLXNoaXAnKSk7XG5cbn1cblxuZnVuY3Rpb24gZGlzYWJsZURpdlNoaXBzKCkge1xuICAgIGNvbnN0IGltYWdlc0VsZW1lbnRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXTtcbiAgICBpbWFnZXNFbGVtZW50cy5mb3JFYWNoKChpbWFnZSkgPT4gcmVzdGFydFNpemVJbWFnZShpbWFnZSwgMCwgMCkpO1xuICAgIGRpc2FibGVEaXZTaGlwQ29udGFpbmVyKHRydWUpO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0SW1hZ2VQb3NpdGlvbihpbWFnZSkge1xuICAgIGltYWdlLnN0eWxlLnBvc2l0aW9uID0gJ3N0YXRpYyc7XG4gICAgaW1hZ2UudG9wID0gMDtcbiAgICBpbWFnZS5sZWZ0ID0gMDtcbiAgICBpbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcbn1cblxuZnVuY3Rpb24gcmVzdGFydFNpemVJbWFnZShpbWFnZSwgaW5kZXgsIGZsYWdXaWR0aCA9IDEpIHtcbiAgICBjb25zdCB3aWR0aCA9IDEwMCAqIGZsYWdXaWR0aCArIDUwICogaW5kZXg7XG4gICAgaW1hZ2Uuc3R5bGUud2lkdGggPSBgJHt3aWR0aCAqIGZsYWdXaWR0aH1weGA7XG4gICAgaW1hZ2Uuc3R5bGUuaGVpZ2h0ID0gYCR7NTAgKiBmbGFnV2lkdGh9cHhgO1xufVxuXG5mdW5jdGlvbiBzZXRVcEV2ZW50TGlzdGVuZXJzU2hpcHMocGxheWVyc0Fycikge1xuICAgIGxldCBhY3RpdmF0aW9uID0gZmFsc2U7XG4gICAgbGV0IGluZGV4U2hpcCA9IC0xO1xuICAgIGNvbnN0IGluaXRpYWxDbGlja1Bvc2l0aW9uID0gW107XG4gICAgY29uc3QgaW1hZ2VzRWxlbWVudHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyldO1xuICAgIGltYWdlc0VsZW1lbnRzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICBpbWFnZS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCAoZU1vdXNlKSA9PiB7XG4gICAgICAgICAgICBhY3RpdmF0aW9uID0gdHJ1ZTtcbiAgICAgICAgICAgIGluZGV4U2hpcCA9IGluZGV4O1xuICAgICAgICAgICAgaW5pdGlhbENsaWNrUG9zaXRpb25bMF0gPSBlTW91c2UuY2xpZW50WDtcbiAgICAgICAgICAgIGluaXRpYWxDbGlja1Bvc2l0aW9uWzFdID0gZU1vdXNlLmNsaWVudFk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCAoZUtleSkgPT4ge1xuICAgICAgICBpZiAoZUtleS5jb2RlID09PSAnS2V5UicpIHtcbiAgICAgICAgICAgIGxldCBuZXdSb3RhdGlvblZhbHVlO1xuICAgICAgICAgICAgaWYgKGluZGV4U2hpcCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IGltYWdlc0VsZW1lbnRzW2luZGV4U2hpcF07XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlLnN0eWxlLnRyYW5zZm9ybSAhPT0gJ3JvdGF0ZSg5MGRlZyknKVxuICAgICAgICAgICAgICAgICAgICBuZXdSb3RhdGlvblZhbHVlID0gOTA7XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICBuZXdSb3RhdGlvblZhbHVlID0gMDtcbiAgICAgICAgICAgICAgICBpbWFnZS5zdHlsZS50cmFuc2Zvcm0gPSBgcm90YXRlKCR7bmV3Um90YXRpb25WYWx1ZX1kZWcpYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgICAgICAgaWYgKGFjdGl2YXRpb24gJiYgaW5kZXhTaGlwICE9PSAtMSkge1xuICAgICAgICAgICAgaW1hZ2VzRWxlbWVudHNbaW5kZXhTaGlwXS5zdHlsZS5wb3NpdGlvbiA9ICdyZWxhdGl2ZSc7XG4gICAgICAgICAgICBpbWFnZXNFbGVtZW50c1tpbmRleFNoaXBdLnN0eWxlLmxlZnQgPSBgJHtlLmNsaWVudFggLSBpbml0aWFsQ2xpY2tQb3NpdGlvblswXX1weGA7XG4gICAgICAgICAgICBpbWFnZXNFbGVtZW50c1tpbmRleFNoaXBdLnN0eWxlLnRvcCA9IGAke2UuY2xpZW50WSAtIGluaXRpYWxDbGlja1Bvc2l0aW9uWzFdfXB4YDtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsICgpID0+IHtcbiAgICAgICAgaWYgKGluZGV4U2hpcCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnN0IGJvYXJkUGxheWVyMUNvb3JkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcjEnKS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGlmIChpc1ZhbGlkU2hpcFBvc2l0aW9uKGltYWdlc0VsZW1lbnRzW2luZGV4U2hpcF0sIGJvYXJkUGxheWVyMUNvb3JkKSkge1xuICAgICAgICAgICAgICAgIC8vIGxldCdzIHBsYWNlIHRoZSBzaGlwXG4gICAgICAgICAgICAgICAgLy8gb25jZSBpIGtub3cgdGhlIHNoaXAgcG9zaXRpb24gaXMgdmFsaWQgaSBjYW4gY2FsY3VsYXRlIHRoZSBpbmRleCB3aGVyZSB0aGUgc2hpcCBjYW4gYmUgcGxhY2VkXG4gICAgICAgICAgICAgICAgLy8gaW4gdGhpcyBwb3NpdGlvbiBpcyBzaG91bGQgY2hlY2sgaWYgdGhlcmUgYXJlIHNoaXBzIG9uIHRoZSB0byBwb3NpdGlvbnMgd2hlcmUgdGhlIG5ldyBzaGlwIGNhbiBiZSBwbGFjZWRcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBnZXROZXdTaGlwUG9zaXRpb24oaW1hZ2VzRWxlbWVudHNbaW5kZXhTaGlwXSwgYm9hcmRQbGF5ZXIxQ29vcmQpO1xuICAgICAgICAgICAgICAgIGlmICghc2hpcENvbGxpc2lvbihwbGF5ZXJzQXJyWzFdLCBwb3NpdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFNoaXBUb1BsYXllcihwbGF5ZXJzQXJyWzFdLCBwb3NpdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICBjb2xvclBsYXllclNoaXBzKHBvc2l0aW9ucywgMSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBsYWNlIHRoZSBzaGlwIHdpdGhpbiB0aGUgZ2FtZWJvYXJkXG4gICAgICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSB0aGUgaW1hZ2UgdGhhdCBpcyBhc3NvY2lhdGVkIHRvIHRoZSBwbGFjZWQgc2hpcFxuICAgICAgICAgICAgICAgICAgICBpbWFnZXNFbGVtZW50c1tpbmRleFNoaXBdLnN0eWxlLndpZHRoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzRWxlbWVudHNbaW5kZXhTaGlwXS5zdHlsZS5oZWlnaHQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNFbGVtZW50c1tpbmRleFNoaXBdLnBhcmVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaW5kaXZpZHVhbC1zaGlwJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoZSBjb25kaXRpb24gYmVsb3cgIG1lYW5zIHRoYXQgYWxsIHRoZSBzaGlwcyBoYXZlIGJlZW4gcGxhY2VkIGNvcnJlY3RseVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hpcHNMZWZ0KGltYWdlc0VsZW1lbnRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwc0dhbWVib2FyZChwbGF5ZXJzQXJyWzBdLCAwLCBpbWFnZXNFbGVtZW50cy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZVN0YXJ0QnV0dG9uKGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXN0YXJ0SW1hZ2VQb3NpdGlvbihpbWFnZXNFbGVtZW50c1tpbmRleFNoaXBdKTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJlc3RhcnRJbWFnZVBvc2l0aW9uKGltYWdlc0VsZW1lbnRzW2luZGV4U2hpcF0pO1xuICAgICAgICAgICAgaW5kZXhTaGlwID0gLTE7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZVN0YXJ0QnV0dG9uKGZsYWdFbmFibGUpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZScpO1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZsYWdFbmFibGU7XG59XG5cbmZ1bmN0aW9uIHNldFVwTWFudWFsUG9zaXRpb24ocGxheWVyc0FyciwgblNoaXBzLCBkaXNhYmxlZE1hbnVhbCA9IGZhbHNlKSB7XG4gICAgY29uc3QgYnV0dG9uUHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW51YWwtcGxhY2VtZW50Jyk7XG4gICAgY29uc3QgbWFudWFsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWFudWFsQnV0dG9uLmlkID0gJ21hbnVhbC1wbGFjZW1lbnQnO1xuICAgIG1hbnVhbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdNYW51YWwgcGxhY2VtZW50IG9mIHRoZSBzaGlwJztcbiAgICBtYW51YWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGlmIChkaXNhYmxlZE1hbnVhbClcbiAgICAgICAgbWFudWFsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBtYW51YWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlc3RhcnRQbGF5ZXJzR3JpZChwbGF5ZXJzQXJyKTtcbiAgICAgICAgcmVzdGFydE1hbnVhbFNoaXBQbGFjZW1lbnQobWFudWFsQnV0dG9uLCBwbGF5ZXJzQXJyLCBuU2hpcHMpO1xuICAgICAgICBtYW51YWxCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIGRpc2FibGVTdGFydEJ1dHRvbih0cnVlKTtcbiAgICAgICAgZW5hYmxlRGl2U2hpcHMoKTtcbiAgICB9KTtcbiAgICBidXR0b25QcmV2Lmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBtYW51YWxCdXR0b24pO1xuICAgIGJ1dHRvblByZXYucmVtb3ZlKCk7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRNYW51YWxTaGlwUGxhY2VtZW50KG1hbnVhbFBvc2l0aW9uQnV0dG9uLCBwbGF5ZXJzQXJyKSB7XG4gICAgY29uc3QgYnV0dG9uUmVzdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvblJlc3RhcnQudGV4dENvbnRlbnQgPSAnUmVzdGFydCBtYW51YWwgc2hpcCBwbGFjZW1lbnQnO1xuICAgIGJ1dHRvblJlc3RhcnQudHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvblJlc3RhcnQuaWQgPSAnbWFudWFsLXBsYWNlbWVudCc7XG4gICAgYnV0dG9uUmVzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZGlzYWJsZVN0YXJ0QnV0dG9uKHRydWUpO1xuICAgICAgICByZXN0YXJ0UGxheWVyc0dyaWQocGxheWVyc0Fycik7XG4gICAgICAgIGVuYWJsZURpdlNoaXBzKCk7XG4gICAgfSk7XG4gICAgbWFudWFsUG9zaXRpb25CdXR0b24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGJ1dHRvblJlc3RhcnQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXZTaGlwcyhuU2hpcHMpIHtcbiAgICBjb25zdCBkaXZTaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdlNoaXBzLmNsYXNzTGlzdC5hZGQoJ3NoaXBzLWltYWdlcycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgblNoaXBzOyArK2kpIHtcbiAgICAgICAgY29uc3QgZGl2SW5kaXZpZHVhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICBpbWcuYWx0ID0gYFNoaXAgb2YgbGVuZ3RoICR7aSArIDJ9YDtcbiAgICAgICAgZGl2SW5kaXZpZHVhbENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBkaXZTaGlwcy5hcHBlbmRDaGlsZChkaXZJbmRpdmlkdWFsQ29udGFpbmVyKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZTaGlwcyk7XG4gICAgc2V0VXBEaXZTaGlwcygpO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0UGxheWVyc0dyaWQocGxheWVyc0Fycikge1xuICAgIGNvbnN0IHNpemUgPSBnZXRCb2FyZFNpemUocGxheWVyc0FyclswXSk7XG4gICAgbG9hZEdyaWQoc2l6ZSk7XG4gICAgY3JlYXRlUGxheWVycyhwbGF5ZXJzQXJyLCBzaXplKTtcbn1cblxuZnVuY3Rpb24gbG9hZEdyaWQoc2l6ZSkge1xuICAgIGNvbnN0IGRpdkJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5ib2FyZCcpO1xuICAgIGRpdkJvYXJkcy5mb3JFYWNoKChkaXZCb2FyZCkgPT4ge1xuICAgICAgICBkaXZCb2FyZC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyArK3Jvdykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgc2l6ZTsgKytjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgICAgIGRpdi5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICAgICAgICAgICAgICBkaXYuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW47XG4gICAgICAgICAgICAgICAgZGl2Qm9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUocGxheWVycywgY29tcHV0ZXIsIG5TaGlwcykge1xuICAgIGNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJyk7XG4gICAgc3RhcnRHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gJ1N0YXJ0IGdhbWUhJztcbiAgICBzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNoYW5nZUdhbWVUaXRsZSgxKTtcbiAgICAgICAgY29uc3QgZ2FtZURpZmZpY3VsdHkgPSBnZXREaWZmaWN1bHR5KCk7XG4gICAgICAgIG1vZGlmeUNvbXB1dGVyVGV4dChnYW1lRGlmZmljdWx0eSk7XG4gICAgICAgIGNyZWF0ZUV2ZW50cyhwbGF5ZXJzLCBjb21wdXRlciwgblNoaXBzLCBnYW1lRGlmZmljdWx0eSk7XG4gICAgICAgIHJlbW92ZUFsbEJ1dHRvbnMoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlSGlkRGlmZmljdWx0eURpdigpIHtcbiAgICBjb25zdCBkaXZEaWZmaWN1bHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpZmZpY3VsdHknKTtcbiAgICBkaXZEaWZmaWN1bHR5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxCdXR0b25zKCkge1xuICAgIHRvZ2dsZUhpZERpZmZpY3VsdHlEaXYoKTtcbiAgICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtc2VsZWN0aW9uJyk7XG4gICAgd2hpbGUgKGJ1dHRvbnNEaXYuY2hpbGRyZW4ubGVuZ3RoID4gMClcbiAgICAgICAgYnV0dG9uc0Rpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0QXhpcyhjZWxsSW5pLCBmbGFnRW5hYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGJvYXJkQXJyYXkgPSBbLi4uY2VsbEluaS5wYXJlbnRFbGVtZW50LmNoaWxkcmVuXTtcbiAgICBjb25zdCByb3cgPSArY2VsbEluaS5kYXRhc2V0LnJvdywgY29sdW1uID0gK2NlbGxJbmkuZGF0YXNldC5jb2x1bW47XG4gICAgY29uc3Qgc2l6ZSA9IE1hdGguc3FydChib2FyZEFycmF5Lmxlbmd0aCk7XG4gICAgY29uc3QgYXJyYXlJbmRleCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgIGFycmF5SW5kZXgucHVzaChyb3cgKiBzaXplICsgaSk7XG4gICAgICAgIGFycmF5SW5kZXgucHVzaChjb2x1bW4gKyBpICogc2l6ZSk7XG4gICAgfVxuICAgIGFycmF5SW5kZXguZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGJvYXJkQXJyYXlbaW5kZXhdO1xuICAgICAgICBpZiAoZmxhZ0VuYWJsZSlcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0LXRhcmdldCcpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodC10YXJnZXQnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0QXhpc0V2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgY2VsbEV2ZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGhpZ2hsaWdodEF4aXMoY2VsbEV2ZW50LCBldmVudC50eXBlID09PSAnbW91c2VlbnRlcicpO1xufVxuXG5mdW5jdGlvbiBkcmF3U2hpcFN1bmsocGxheWVyc0Fyciwgcm93LCBjb2x1bW4sIHR1cm4pIHtcbiAgICBjb25zdCBnYW1lYm9hcmRPYmplY3QgPSBwbGF5ZXJzQXJyW3R1cm5dLmdhbWVib2FyZDtcbiAgICBjb25zdCBzaGlwU3Vua0Nvb3JkaW5hdGVzID0gZ2V0U3Vua1NoaXBQb3NpdGlvbnMoZ2FtZWJvYXJkT2JqZWN0LCByb3csIGNvbHVtbik7XG4gICAgY29uc3QgZ2FtZWJvYXJkRGl2T3Bwb25lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKTtcbiAgICBjb25zdCBpbmRleE9wcG9uZW50ID0gdHVybiA/IDAgOiAxO1xuICAgIGNvbnN0IGdhbWVib2FyZEFyck9wcG9uZW50ID0gWy4uLmdhbWVib2FyZERpdk9wcG9uZW50W2luZGV4T3Bwb25lbnRdLmNoaWxkcmVuXTtcbiAgICBzaGlwU3Vua0Nvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGdhbWVib2FyZEFyck9wcG9uZW50W2Nvb3JkaW5hdGVbMV0gKyBjb29yZGluYXRlWzBdICogTWF0aC5zcXJ0KGdhbWVib2FyZEFyck9wcG9uZW50Lmxlbmd0aCldO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYmxpbmtUYXJnZXQoY2VsbEFycmF5LCByb3csIGNvbHVtbikge1xuICAgIGNvbnN0IHNpemUgPSBNYXRoLnNxcnQoY2VsbEFycmF5Lmxlbmd0aCk7XG4gICAgY29uc3QgY2VsbCA9IGNlbGxBcnJheVtjb2x1bW4gKyByb3cgKiBzaXplXTtcbiAgICBjb25zdCBkZWxheSA9IDEwMDA7XG4gICAgLy8gbXNcbiAgICBsZXQgcmVwZXRpdGlvbnMgPSA1O1xuICAgIGZvciAobGV0IGluZGV4UmVwZXRpdGlvbiA9IDA7IGluZGV4UmVwZXRpdGlvbiAtIHJlcGV0aXRpb25zOyArK2luZGV4UmVwZXRpdGlvbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXNlbGVjdGVkLWF4aXMnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtYXhpcycpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQtdGFyZ2V0Jyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtYXhpcycpLCBkZWxheSAvIHJlcGV0aXRpb25zIC8gMik7XG4gICAgICAgIH0sIGRlbGF5IC8gcmVwZXRpdGlvbnMgKiAoaW5kZXhSZXBldGl0aW9uIC0gMSkpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbi1zZWxlY3RlZC1heGlzJyksIGRlbGF5KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRzKHBsYXllcnNBcnIsIGZsYWdDb21wdXRlciwgbnVtYmVyT2ZTaGlwcywgaXNEaWZmaWN1bHQpIHtcbiAgICBjb25zdCBnYW1lUmVjb3JkID0gY3JlYXRlR2FtZVJlY29yZCgpO1xuICAgIC8vIFdlIGFzc29jaWF0ZSBlYWNoIHBsYXllciB3aXRoIGEgYm9hcmQ7XG4gICAgLy8gdGhlIGZ1bmN0aW9uIGluc2lkZSB0aGUgZXZlbnQgbGlzdGVuZXIgc2hvdWxkIG5vdCBiZSBhbiBhbm9ueW1vdXMgZnVuY3Rpb25cbiAgICBjb25zdCBkaXZCb2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuYm9hcmQnKTtcbiAgICBjb25zdCBnYW1lU3BhY2UgPSB7XG4gICAgICAgIHR1cm46IDAsXG4gICAgICAgIGNvbXB1dGVySXNQbGF5aW5nOiBmYWxzZVxuICAgIH07XG4gICAgY29uc3QgZGl2Qm9hcmRDaGlsZHJlbkFycmF5ID0gWy4uLmRpdkJvYXJkc1sxXS5jaGlsZHJlbl07XG4gICAgZGl2Qm9hcmRDaGlsZHJlbkFycmF5LmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgY2xpY2tlZCk7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhpZ2hsaWdodEF4aXNFdmVudCk7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZ2hsaWdodEF4aXNFdmVudCk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gY2xpY2tlZChlKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3Qgcm93ID0gK2UudGFyZ2V0LmRhdGFzZXQucm93O1xuICAgICAgICBjb25zdCBjb2x1bW4gPSArZS50YXJnZXQuZGF0YXNldC5jb2x1bW47XG4gICAgICAgIGlmIChnYW1lU3BhY2UuY29tcHV0ZXJJc1BsYXlpbmcgPT09IGZhbHNlICYmIGdhbWVTcGFjZS50dXJuID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tWYWxpZFBvc2l0aW9uKHBsYXllcnNBcnIsIGdhbWVTcGFjZS50dXJuLCByb3csIGNvbHVtbikpXG4gICAgICAgICAgICAgICAgaGFuZGxlSGl0KHBsYXllcnNBcnIsIGdhbWVTcGFjZSwgcm93LCBjb2x1bW4sIGUsIGdhbWVSZWNvcmQsIGRpdkJvYXJkQ2hpbGRyZW5BcnJheSwgbnVtYmVyT2ZTaGlwcywgZmxhZ0NvbXB1dGVyLCBjbGlja2VkLCBpc0RpZmZpY3VsdCk7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBjbGlja2VkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlSGl0KHBsYXllcnNBcnIsIGdhbWVTcGFjZSwgcm93LCBjb2x1bW4sIGUsIGdhbWVSZWNvcmQsIGRpdkJvYXJkQ2hpbGRyZW5BcnJheSwgbnVtYmVyT2ZTaGlwcywgZmxhZ0NvbXB1dGVyLCBjbGlja2VkRXZlbnRGdW5jdGlvbiwgaXNEaWZmaWN1bHQpIHtcbiAgICAvLyBkaXNhYmxlIGhpZ2hsaWdodEF4aXNFdmVudFxuICAgIGhpZ2hsaWdodEF4aXMoZGl2Qm9hcmRDaGlsZHJlbkFycmF5W2NvbHVtbiArIHJvdyAqIE1hdGguc3FydChkaXZCb2FyZENoaWxkcmVuQXJyYXkubGVuZ3RoKV0sIGZhbHNlKTtcbiAgICBkaXZCb2FyZENoaWxkcmVuQXJyYXkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoaWdobGlnaHRBeGlzRXZlbnQpO1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWdobGlnaHRBeGlzRXZlbnQpO1xuICAgIH0pO1xuICAgIGJsaW5rVGFyZ2V0KGRpdkJvYXJkQ2hpbGRyZW5BcnJheSwgcm93LCBjb2x1bW4pO1xuICAgIGNvbnN0IHNoaXBIaXQgPSByZWdpc3RlckhpdChwbGF5ZXJzQXJyLCBnYW1lU3BhY2UudHVybiwgcm93LCBjb2x1bW4sIGUudGFyZ2V0LCBnYW1lUmVjb3JkW2dhbWVTcGFjZS50dXJuXSk7XG4gICAgaWYgKHNoaXBIaXQgJiYgaXNTaGlwU3VuayhwbGF5ZXJzQXJyW2dhbWVTcGFjZS50dXJuXS5nYW1lYm9hcmQsIHJvdywgY29sdW1uKSlcbiAgICAgICAgZHJhd1NoaXBTdW5rKHBsYXllcnNBcnIsIHJvdywgY29sdW1uLCBnYW1lU3BhY2UudHVybik7XG4gICAgZ2FtZVJlY29yZFtnYW1lU3BhY2UudHVybl0ubW92ZXMucHVzaChbcm93LCBjb2x1bW5dKTtcbiAgICBnYW1lU3BhY2UudHVybiA9IDE7XG4gICAgaWYgKHBsYXllcnNBcnJbMF0uZ2FtZWJvYXJkLmFyZVNoaXBzTGVmdCgpID09PSBmYWxzZSkge1xuICAgICAgICBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoY2xpY2tlZEV2ZW50RnVuY3Rpb24pO1xuICAgICAgICBlbmRHYW1lKGdhbWVTcGFjZS50dXJuLCBwbGF5ZXJzQXJyLCBudW1iZXJPZlNoaXBzLCB0cnVlKTtcbiAgICB9IGVsc2VcbiAgICAgICAgY29tcHV0ZXJUdXJuKGZsYWdDb21wdXRlciwgZ2FtZVNwYWNlLCBwbGF5ZXJzQXJyLCBnYW1lUmVjb3JkLCBkaXZCb2FyZENoaWxkcmVuQXJyYXksIG51bWJlck9mU2hpcHMsIGNsaWNrZWRFdmVudEZ1bmN0aW9uLCBpc0RpZmZpY3VsdCk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycyhldmVudEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgZGl2Qm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmJvYXJkJyk7XG4gICAgY29uc3QgZGl2Qm9hcmRDaGlsZHJlbkFycmF5ID0gWy4uLmRpdkJvYXJkc1sxXS5jaGlsZHJlbl07XG4gICAgZGl2Qm9hcmRDaGlsZHJlbkFycmF5LmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZXZlbnRGdW5jdGlvbik7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhpZ2hsaWdodEF4aXNFdmVudCk7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZ2hsaWdodEF4aXNFdmVudCk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0LXRhcmdldCcpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVyTG9vcHMoY29vcmRpbmF0ZXNUb1RyYXZlbCwgY2VsbEFycmF5LCBkZWxheSkge1xuICAgIGNvbnN0IHNpemUgPSBNYXRoLnNxcnQoY2VsbEFycmF5Lmxlbmd0aCk7XG4gICAgY29vcmRpbmF0ZXNUb1RyYXZlbC5mb3JFYWNoKChjb29yZGluYXRlLCBpbmRleCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gMClcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRBeGlzKGNlbGxBcnJheVtjb29yZGluYXRlc1RvVHJhdmVsW2luZGV4IC0gMV1bMV0gKyBjb29yZGluYXRlc1RvVHJhdmVsW2luZGV4IC0gMV1bMF0gKiBzaXplXSwgZmFsc2UpO1xuICAgICAgICAgICAgaGlnaGxpZ2h0QXhpcyhjZWxsQXJyYXlbY29vcmRpbmF0ZVsxXSArIGNvb3JkaW5hdGVbMF0gKiBzaXplXSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGNvb3JkaW5hdGVzVG9UcmF2ZWwubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodEF4aXMoY2VsbEFycmF5W2Nvb3JkaW5hdGVbMV0gKyBjb29yZGluYXRlWzBdICogc2l6ZV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYmxpbmtUYXJnZXQoY2VsbEFycmF5LCBjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdKTtcbiAgICAgICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRlbGF5ICogaW5kZXgpO1xuICAgIH1cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlclR1cm4oZmxhZ0NvbXB1dGVyLCBnYW1lU3BhY2UsIHBsYXllcnNBcnIsIGdhbWVSZWNvcmQsIGRpdkJvYXJkQ2hpbGRyZW5BcnJheSwgbnVtYmVyT2ZTaGlwcywgY2xpY2tlZEV2ZW50RnVuY3Rpb24sIGlzUmFuZG9tID0gZmFsc2UpIHtcbiAgICBpZiAoZmxhZ0NvbXB1dGVyID09PSB0cnVlICYmIGdhbWVTcGFjZS50dXJuID09PSAxICYmIGdhbWVTcGFjZS5jb21wdXRlcklzUGxheWluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZGl2Qm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmJvYXJkJyk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnZXRCb2FyZFNpemUocGxheWVyc0FyclswXSk7XG4gICAgICAgIGdhbWVTcGFjZS5jb21wdXRlcklzUGxheWluZyA9IHRydWU7XG4gICAgICAgIGVuYWJsZUNvbXB1dGVyVGhpbmtpbmdEaXYodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHByb2dyYW1tYWJsZURlbGF5ID0gNTA7XG4gICAgICAgIGxldCB2YWxpZFBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3aGlsZSAodmFsaWRQb3NpdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29tcHV0ZXJQbGF5cyhwbGF5ZXJzQXJyWzFdLmdhbWVib2FyZC5tYXAubGVuZ3RoLCBnYW1lUmVjb3JkW2dhbWVTcGFjZS50dXJuXSwgaXNSYW5kb20pO1xuICAgICAgICAgICAgICAgIHZhbGlkUG9zaXRpb24gPSBjaGVja1ZhbGlkUG9zaXRpb24ocGxheWVyc0FyciwgZ2FtZVNwYWNlLnR1cm4sIHJvdywgY29sdW1uKVxuICAgICAgICAgICAgICAgIGlmICh2YWxpZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVSZWNvcmRbZ2FtZVNwYWNlLnR1cm5dLm1vdmVzLnB1c2goW3JvdywgY29sdW1uXSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzVG9UcmF2ZWwgPSBnZXRMYXVuY2hpbmdDb29yZGluYXRlcyhbcm93LCBjb2x1bW5dLCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2Qm9hcmRDaGlsZHJlbkNvbXB1dGVyQXJyYXkgPSBbLi4uZGl2Qm9hcmRzWzBdLmNoaWxkcmVuXTtcbiAgICAgICAgICAgICAgICAgICAgc2ltcGxlckxvb3BzKGNvb3JkaW5hdGVzVG9UcmF2ZWwsIGRpdkJvYXJkQ2hpbGRyZW5Db21wdXRlckFycmF5LCBwcm9ncmFtbWFibGVEZWxheSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3BhY2UuY29tcHV0ZXJJc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTcGFjZS50dXJuID0gKGdhbWVTcGFjZS50dXJuID09PSAwID8gMSA6IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ29tcHV0ZXJUaGlua2luZ0RpdihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBibGlua1RhcmdldChkaXZCb2FyZENoaWxkcmVuQ29tcHV0ZXJBcnJheSwgcm93LCBjb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2Qm9hcmRDaGlsZHJlbkFycmF5LmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoaWdobGlnaHRBeGlzRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZ2hsaWdodEF4aXNFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LCBwcm9ncmFtbWFibGVEZWxheSAqIGNvb3JkaW5hdGVzVG9UcmF2ZWwubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkaXZCb2FyZHNbMF0uY2hpbGRyZW5bcm93ICogc2l6ZSArIGNvbHVtbl07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR1cm4gPSBnYW1lU3BhY2UudHVybjtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWdpc3RlckhpdChwbGF5ZXJzQXJyLCB0dXJuLCByb3csIGNvbHVtbiwgY2VsbCwgZ2FtZVJlY29yZFt0dXJuXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lUmVjb3JkW3R1cm5dLm5vblN1bmtTaGlwc0hpdFBvc2l0aW9uLnB1c2goW3JvdywgY29sdW1uXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2hpcFN1bmsocGxheWVyc0Fyclt0dXJuXS5nYW1lYm9hcmQsIHJvdywgY29sdW1uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lUmVjb3JkW3R1cm5dLnJlbW92ZVN1bmtTaGlwKGdldFN1bmtTaGlwUG9zaXRpb25zKHBsYXllcnNBcnJbdHVybl0uZ2FtZWJvYXJkLCByb3csIGNvbHVtbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3U2hpcFN1bmsocGxheWVyc0Fyciwgcm93LCBjb2x1bW4sIHR1cm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lUmVjb3JkW3R1cm5dLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyc0FycltnYW1lU3BhY2UudHVybiA/IDAgOiAxXS5nYW1lYm9hcmQuYXJlU2hpcHNMZWZ0KCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVFdmVudExpc3RlbmVycyhjbGlja2VkRXZlbnRGdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEdhbWUoZ2FtZVNwYWNlLnR1cm4sIHBsYXllcnNBcnIsIG51bWJlck9mU2hpcHMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHByb2dyYW1tYWJsZURlbGF5ICogKGNvb3JkaW5hdGVzVG9UcmF2ZWwubGVuZ3RoICsgMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUNvbXB1dGVyVGhpbmtpbmdEaXYoZmxhZykge1xuICAgIGNvbnN0IGRpdlNlcGFyYXRvcnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcGFyYXRvcicpXTtcbiAgICBpZiAoZmxhZylcbiAgICAgICAgZGl2U2VwYXJhdG9yc1sxXS50ZXh0Q29udGVudCA9ICdDb21wdXRlciBpcyBUSElOS0lORyc7XG4gICAgZWxzZVxuICAgICAgICBkaXZTZXBhcmF0b3JzWzFdLnRleHRDb250ZW50ID0gJyc7XG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUodHVybiwgcGxheWVyc0FyciwgbnVtYmVyT2ZTaGlwcywgZmxhZ1VzZXJXaW4pIHtcbiAgICBjaGFuZ2VHYW1lVGl0bGUoZmxhZ1VzZXJXaW4gPyAyIDogMyk7XG4gICAgc2V0VXBSZXBsYXlHYW1lKHBsYXllcnNBcnIsIG51bWJlck9mU2hpcHMsIGdldFdpbm5lckRpdigxIC0gdHVybiksIGZsYWdVc2VyV2luKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2lubmVyRGl2KHdpbm5lckluZGV4KSB7XG4gICAgY29uc3QgZGl2V2lubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3Bhbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3Qgc3BhbkFycmF5ID0gW2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXTtcbiAgICBjb25zdCB3aW5uZXJOYW1lID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXJzLW5hbWUnKV1bd2lubmVySW5kZXhdLnRleHRDb250ZW50O1xuICAgIGRpdldpbm5lci5jbGFzc0xpc3QuYWRkKCd3aW5uZXInKTtcbiAgICBzcGFuTmFtZS50ZXh0Q29udGVudCA9IGAke3dpbm5lck5hbWV9IGA7XG4gICAgc3BhbkFycmF5WzBdLnRleHRDb250ZW50ID0gJ1BsYXllciAnO1xuICAgIHNwYW5BcnJheVsxXS50ZXh0Q29udGVudCA9ICdnZXRzIHRoZSBjb21wZXRpdGlvbiEnO1xuICAgIGRpdldpbm5lci5hcHBlbmRDaGlsZChzcGFuQXJyYXlbMF0pO1xuICAgIGRpdldpbm5lci5hcHBlbmRDaGlsZChzcGFuTmFtZSk7XG4gICAgZGl2V2lubmVyLmFwcGVuZENoaWxkKHNwYW5BcnJheVsxXSk7XG4gICAgcmV0dXJuIGRpdldpbm5lcjtcbn1cblxuZnVuY3Rpb24gc2V0VXBSZXBsYXlHYW1lKHBsYXllcnNBcnIsIG51bWJlck9mU2hpcHMsIHdpbm5lckRpdikge1xuICAgIGNvbnN0IGRpdlNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtc2VsZWN0aW9uJyk7XG4gICAgY29uc3QgcmVwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVwbGF5QnV0dG9uLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nO1xuICAgIHJlcGxheUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgcmVwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2dnbGVIaWREaWZmaWN1bHR5RGl2KCk7XG4gICAgICAgIG1vZGlmeUNvbXB1dGVyVGV4dCgpO1xuICAgICAgICBjaGFuZ2VHYW1lVGl0bGUoMCk7XG4gICAgICAgIHNldFVwUGxheUJ1dHRvbnMocGxheWVyc0FyciwgbnVtYmVyT2ZTaGlwcyk7XG4gICAgICAgIHJlcGxheUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgd2lubmVyRGl2LnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGRpdlNoaXBzLmFwcGVuZENoaWxkKHdpbm5lckRpdik7XG4gICAgZGl2U2hpcHMuYXBwZW5kQ2hpbGQocmVwbGF5QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gc2V0VXBQbGF5QnV0dG9ucyhwbGF5ZXJzLCBuU2hpcHMpIHtcbiAgICByZXN0YXJ0UGxheWVyc0dyaWQocGxheWVycyk7XG4gICAgY29uc3QgZGl2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXNlbGVjdGlvbicpO1xuICAgIGNyZWF0ZVBsYXlCdXR0b25zKGRpdkJ1dHRvbnMsIHBsYXllcnMsIG5TaGlwcyk7XG4gICAgcmFuZG9tUG9zaXRpb25TdGFydChwbGF5ZXJzLCBuU2hpcHMpO1xuICAgIHNldFVwTWFudWFsUG9zaXRpb24ocGxheWVycywgblNoaXBzKTtcbiAgICBzdGFydEdhbWUocGxheWVycywgdHJ1ZSwgblNoaXBzKTtcbiAgICBkaXNhYmxlU3RhcnRCdXR0b24odHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXlCdXR0b25zKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXRCdXR0b24uaWQgPSAncmFuZG9taXplLXBsYWNlbWVudCc7XG4gICAgcmVzZXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNvbnN0IG1hbnVhbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1hbnVhbEJ1dHRvbi5pZCA9ICdtYW51YWwtcGxhY2VtZW50JztcbiAgICBtYW51YWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3RhcnRCdXR0b24uaWQgPSAnc3RhcnQtZ2FtZSc7XG4gICAgc3RhcnRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNvbnRhaW5lci5hcHBlbmQocmVzZXRCdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmQobWFudWFsQnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHN0YXJ0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJIaXQocGxheWVyc0FyciwgdHVybiwgcm93LCBjb2x1bW4sIGNlbGwsIHBsYXllcikge1xuICAgIGxldCBzaGlwV2FzSGl0ID0gZmFsc2U7XG4gICAgcGxheWVyc0Fyclt0dXJuXS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbcm93LCBjb2x1bW5dKTtcbiAgICBpZiAocGxheWVyc0Fyclt0dXJuXS5nYW1lYm9hcmQucG9zaXRpb25zVmlzaXRlZFtyb3ddW2NvbHVtbl0gPT09IHRydWUpIHtcbiAgICAgICAgc2hpcFdhc0hpdCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0LXRhcmdldCcpO1xuICAgICAgICBwbGF5ZXIuaGl0cy5wdXNoKHRydWUpO1xuICAgICAgICBpZiAodHVybiA9PT0gMSkge1xuICAgICAgICAgICAgcGxheWVyLmxhc3RIaXRJbmRleCA9IHBsYXllci5tb3Zlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgcGxheWVyLnNlYXJjaGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbm8taGl0Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0LXRhcmdldCcpO1xuICAgICAgICBwbGF5ZXIuaGl0cy5wdXNoKGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBXYXNIaXQ7XG59XG5cbmZ1bmN0aW9uIGNvbG9yUGxheWVyU2hpcHMoc2hpcFBvc2l0aW9ucywgaSkge1xuICAgIGkgPSBpID09PSAwID8gMSA6IDBcbiAgICBjb25zdCBnYW1lQm9hcmRQbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuYm9hcmQnKTtcbiAgICBzaGlwUG9zaXRpb25zLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGdhbWVCb2FyZFBsYXllcltpXS5jaGlsZHJlbltwb3NpdGlvblswXSAqIDEwICsgcG9zaXRpb25bMV1dLmNsYXNzTGlzdC5hZGQoJ2h1bWFuUGxheWVyJyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeUNvbXB1dGVyVGV4dChpc0Vhc3kpIHtcbiAgICBjb25zdCBjb21wdXRlck5hbWVEaXYgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcnMtbmFtZScpXVsxXTtcbiAgICBsZXQgdGV4dERpZmZpY3VsdHk7XG4gICAgaWYgKGlzRWFzeSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICB0ZXh0RGlmZmljdWx0eSA9ICcnO1xuICAgIGVsc2VcbiAgICAgICAgdGV4dERpZmZpY3VsdHkgPSBpc0Vhc3kgPyAnIChlYXN5KScgOiAnIChoYXJkKSdcbiAgICBjb21wdXRlck5hbWVEaXYudGV4dENvbnRlbnQgPSBgQ09NUFVURVIke3RleHREaWZmaWN1bHR5fWA7XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGJvYXJkU2l6ZSkge1xuICAgICAgICB0aGlzLnNpemUgPSBib2FyZFNpemU7XG4gICAgICAgIHRoaXMubWFwID0gdGhpcy5pbml0aWFsaXplQXJyKGJvYXJkU2l6ZSk7XG4gICAgICAgIHRoaXMucG9zaXRpb25zVmlzaXRlZCA9IHRoaXMuaW5pdGlhbGl6ZUFycihib2FyZFNpemUpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemVBcnIoYm9hcmRTaXplKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkU2l6ZTsgKytpKVxuICAgICAgICAgICAgYXJyLnB1c2gobmV3IEFycmF5KGJvYXJkU2l6ZSkpO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGFkZFNoaXAocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKCFjaGVja1ZhbGlkQ29vcmRpbmF0ZXMocG9zaXRpb24sIHRoaXMubWFwKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gV2UgYXNzdW1lIHRoZSBzaGlwcyBhcmUgY29tcGxldGVseSBzdHJhaWdodFxuICAgICAgICAvLyBUaGUgZmlyc3QgZWxlbWVudCBvZiBwb3NpdGlvbiBpcyB0aGUgbW9zdCBsZWZ0L2JvdHRvbVxuICAgICAgICBjb25zdCB4TGVuZ3RoID0gcG9zaXRpb25bcG9zaXRpb24ubGVuZ3RoIC0gMV1bMF0gLSBwb3NpdGlvblswXVswXTtcbiAgICAgICAgY29uc3QgeUxlbmd0aCA9IHBvc2l0aW9uW3Bvc2l0aW9uLmxlbmd0aCAtIDFdWzFdIC0gcG9zaXRpb25bMF1bMV07XG4gICAgICAgIGxldCBzaGlwTGVuZ3RoID0gTWF0aC5hYnMoeExlbmd0aCB8fCB5TGVuZ3RoKTtcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKHNoaXBMZW5ndGggKyAxKTtcbiAgICAgICAgcG9zaXRpb24uZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYXBbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gPSBuZXdTaGlwO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgICAvLyBsZXRzIGNoZWNrIGlmIHRoZSBwb3NpdGlvbiBoYXMgYmVlbiB2aXNpdGVkXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uc1Zpc2l0ZWRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXBbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXS5oaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1Zpc2l0ZWRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1Zpc2l0ZWRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXJlU2hpcHNMZWZ0KCkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnNpemU7ICsrcm93KVxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGhpcy5zaXplOyArK2NvbHVtbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcFtyb3ddW2NvbHVtbl0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25zVmlzaXRlZFtyb3ddW2NvbHVtbl0gIT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tWYWxpZENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBtYXApIHtcbiAgICAvLyBjaGVjayB0aGF0IHRoZSBpbnB1dCBhcmUgbnVtYmVyc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb29yZGluYXRlc1tpXVswXSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGNvb3JkaW5hdGVzW2ldWzBdICE9PSAnbnVtYmVyJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKG1hcFtjb29yZGluYXRlc1tpXVswXV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBlbHNlIGlmIChtYXBbY29vcmRpbmF0ZXNbaV1bMF1dW2Nvb3JkaW5hdGVzW2ldWzFdXSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTaGlwVG9QbGF5ZXIocGxheWVyLCBwb3NpdGlvbnMpIHtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLmFkZFNoaXAocG9zaXRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVSZWNvcmQoKSB7XG4gICAgY29uc3QgaHVtYW4gPSB7XG4gICAgICAgIG1vdmVzOiBbXSxcbiAgICAgICAgaGl0czogW10sXG4gICAgfTtcbiAgICBjb25zdCBjb21wdXRlciA9IHtcbiAgICAgICAgbW92ZXM6IFtdLFxuICAgICAgICBub25TdW5rU2hpcHNIaXRQb3NpdGlvbjogW10sXG4gICAgICAgIGhpdHM6IFtdLFxuICAgICAgICBzZWFyY2hpbmc6IGZhbHNlLFxuICAgICAgICBsYXN0SGl0SW5kZXg6IDAsXG4gICAgICAgIHJlbW92ZVN1bmtTaGlwKHNoaXBTdW5rQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29vcmRpbmF0ZSBvZiBzaGlwU3Vua0Nvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubm9uU3Vua1NoaXBzSGl0UG9zaXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9uU3Vua1NoaXBzSGl0UG9zaXRpb25baV1bMF0gPT09IGNvb3JkaW5hdGVbMF0gJiYgdGhpcy5ub25TdW5rU2hpcHNIaXRQb3NpdGlvbltpXVsxXSA9PT0gY29vcmRpbmF0ZVsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub25TdW5rU2hpcHNIaXRQb3NpdGlvbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIFtodW1hbiwgY29tcHV0ZXJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxheWVycyhwbGF5ZXJzLCBzaXplKSB7XG4gICAgcGxheWVycy5zcGxpY2UoMCwgcGxheWVycy5sZW5ndGgpO1xuICAgIGNvbnN0IHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoc2l6ZSk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gbmV3IFBsYXllcihzaXplKTtcbiAgICBwbGF5ZXJzLnB1c2gocGxheWVyT25lKTtcbiAgICBwbGF5ZXJzLnB1c2gocGxheWVyVHdvKTtcbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgaXNIdW1hbiA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHNpemUpO1xuICAgICAgICB0aGlzLmh1bWFuID0gaXNIdW1hbjtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICAjbGVuZ3RoXG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuI2xlbmd0aCA9IGxlbmd0aDtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuI2xlbmd0aCAtPSAxO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNsZW5ndGg7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jbGVuZ3RoID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRVcFBsYXllck5hbWUoY2FsbGJhY2tEaXNhYmxlQnV0dG9ucykge1xuICAgIGNvbnN0IGNvbnRhaW5lck5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnMtY29udGFpbmVyJyk7XG4gICAgc2V0VXBEaXZGb3JtKGNvbnRhaW5lck5hbWVzLCBjYWxsYmFja0Rpc2FibGVCdXR0b25zKTtcbn1cblxuZnVuY3Rpb24gc2V0VXBEaXZGb3JtKGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBkaXZDb250YWluZXJGb3JtUGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRhaW5lckZvcm1QbGF5ZXJOYW1lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1mb3JtJyk7XG4gICAgc2V0VXBEaXZDb250YWluZXJGb3JtTmFtZShkaXZDb250YWluZXJGb3JtUGxheWVyTmFtZSwgY2FsbGJhY2spO1xuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgZGl2Q29udGFpbmVyRm9ybVBsYXllck5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRVcERpdkNvbnRhaW5lckZvcm1OYW1lKGRpdkNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBmb3JtUGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBzZXRVcEZvcm0oZm9ybVBsYXllck5hbWUpO1xuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUGxheWVyTmFtZSk7XG4gICAgZm9ybVBsYXllck5hbWUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZm9ybUV2ZW50KGUsIGNhbGxiYWNrKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UGxheWVyTmFtZSgpIHtcbiAgICBjb25zdCBpbnB1dFBsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItbmFtZS10ZXh0Jyk7XG4gICAgY29uc3QgaW5wdXRQbGF5ZXJOYW1lID0gaW5wdXRQbGF5ZXIudmFsdWU7XG4gICAgcmV0dXJuIGlucHV0UGxheWVyTmFtZTtcbn1cblxuZnVuY3Rpb24gZm9ybUV2ZW50KGUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gZ2V0UGxheWVyTmFtZSgpO1xuICAgIGlmIChpc1ZhbGlkSW5wdXQocGxheWVyTmFtZSkpIHtcbiAgICAgICAgc2V0UGxheWVyTmFtZShwbGF5ZXJOYW1lKTtcbiAgICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgY2FsbGJhY2soZmFsc2UsIHRydWUpO1xuICAgICAgICBjaGFuZ2VHYW1lVGl0bGUoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0Vycm9yTWVzc2FnZUlucHV0KGZvcm0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUdhbWVUaXRsZShzdGF0ZSkge1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkSW5wdXQobmFtZSkge1xuICAgIGlmIChuYW1lLmxlbmd0aCA+IDApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzaG93RXJyb3JNZXNzYWdlSW5wdXQoZm9ybSkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKSlcbiAgICAgICAgcmV0dXJuXG4gICAgY29uc3QgZGl2RXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2RXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgZGl2RXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ1BsZWFzZSBmaXggeW91ciBpbnB1dCc7XG4gICAgY29uc3QgZm9ybUxhc3RDaGlsZCA9IGZvcm0uY2hpbGRyZW5bZm9ybS5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgICBmb3JtTGFzdENoaWxkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBkaXZFcnJvck1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBzZXRVcEZvcm0oZm9ybSkge1xuICAgIGZvcm0uaWQgPSAncGxheWVyLWRhdGEnO1xuICAgIGNvbnN0IGRpdlBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnB1dFBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHNldFVwSW5wdXRQbGF5ZXJOYW1lKGlucHV0UGxheWVyTmFtZSk7XG4gICAgc2V0VXBEaXZQbGF5ZXJOYW1lKGRpdlBsYXllck5hbWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2UGxheWVyTmFtZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFBsYXllck5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRVcERpdlBsYXllck5hbWUoZGl2UGxheWVyTmFtZSkge1xuICAgIGNvbnN0IHNwYW5QbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGlucHV0UGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRQbGF5ZXJOYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgcGxheWVyIG5hbWUnO1xuICAgIGlucHV0UGxheWVyTmFtZS5pZCA9ICdwbGF5ZXItbmFtZS10ZXh0JztcbiAgICBzcGFuUGxheWVyTmFtZS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgbmFtZTogJztcbiAgICBkaXZQbGF5ZXJOYW1lLmFwcGVuZENoaWxkKHNwYW5QbGF5ZXJOYW1lKTtcbiAgICBkaXZQbGF5ZXJOYW1lLmFwcGVuZENoaWxkKGlucHV0UGxheWVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldFVwSW5wdXRQbGF5ZXJOYW1lKGlucHV0U3VibWl0KSB7XG4gICAgaW5wdXRTdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgIGlucHV0U3VibWl0LnZhbHVlID0gJ1NlbmQnO1xufVxuXG5mdW5jdGlvbiBzZXRQbGF5ZXJOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBkaXZOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnMtbmFtZScpO1xuICAgIGRpdk5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJ1xuaW1wb3J0IGJhY2tncm91bmRXYXZlcyBmcm9tICcuL2JhY2tncm91bmQuanMnXG5jb25zdCBHQU1FQk9BUkRfU0laRSA9IDEwO1xuY29uc3QgTlVNQkVSX09GX1NISVBTID0gNDtcbmJhY2tncm91bmRXYXZlcygpO1xuc3RhcnRHYW1lKEdBTUVCT0FSRF9TSVpFLCBOVU1CRVJfT0ZfU0hJUFMpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=