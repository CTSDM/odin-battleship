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
    user-select: none;
    font-family: serif;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    padding: 0 2px;
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
    margin-left: -10px;
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

.info {
    margin-top: 5px;
    text-align: center;
    font-size: 1.4rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,WAAW;IACX,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;IACxB,uCAAuC;AAC3C;;AAEA;IACI,uBAAuB;IACvB,uCAAuC;AAC3C;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":["body,\nhtml {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: monospace;\n}\n\nbody {\n    background: lightgrey;\n}\n\n.players-container {\n    display: grid;\n    grid-template-columns: 1fr 100px 1fr;\n    width: max-content;\n    margin: 20px auto;\n    transform: scale(0);\n    opacity: 0;\n}\n\n.scaling {\n    transform: scale(1);\n    opacity: 1;\n    transition: all ease-in-out 1s;\n}\n\n.ocean {\n    font-weight: 900;\n    background-color: #4F42B5;\n    user-select: none;\n    font-family: serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding: 0 2px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    aspect-ratio: 1;\n    border: 3px solid black;\n    width: 500px;\n    background: red;\n}\n\n.cell {\n    width: 44px;\n    aspect-ratio: 1;\n    border: 3px solid black;\n}\n\n.player1 {\n    justify-self: right;\n}\n\n.player2 {\n    justify-self: left;\n}\n\n.players-name {\n    justify-self: center;\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin-top: 20px;\n}\n\n.hit {\n    background-color: yellow;\n    transition: background-color 0.25s ease;\n}\n\n.no-hit {\n    background-color: white;\n    transition: background-color 0.25s ease;\n}\n\n.humanPlayer {\n    border-color: green;\n}\n\n.ship-selection {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 20px;\n}\n\n.ships-images {\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    margin-top: 20px;\n}\n\n.error {\n    color: red;\n    font-weight: 800;\n    font-size: 1.5rem;\n}\n\n.container-form {\n    display: flex;\n    justify-content: center;\n    padding: 2px;\n}\n\n#player-data {\n    padding: 5px;\n    display: flex;\n    border: 2px solid blue;\n    border-radius: 5px;\n    justify-content: center;\n    background: lightblue;\n    gap: 20px;\n}\n\n.highlight-target {\n    border-color: blue;\n}\n\n.sunk {\n    background-color: grey;\n}\n\n.transition-selected-axis {\n    transition: 0.1s ease-in-out;\n}\n\n.selected-axis {\n    background-color: magenta;\n}\n\n.game-title {\n    font-size: 50px;\n    font-weight: 900;\n    text-align: center;\n    transition: all ease-in-out 1s;\n}\n\n.winner {\n    font-size: 20px;\n    transition: all 1s;\n}\n\n.winner span:nth-child(2) {\n    font-weight: 900;\n    color: blue;\n    font-style: italic;\n}\n\nform input::placeholder {\n    font-family: monospace;\n}\n\n.difficulty {\n    display: flex;\n    margin-top: 20px;\n    justify-content: center;\n    text-align: center;\n    user-select: none;\n}\n\n.difficulty legend {\n    font-weight: 700;\n}\n\n.difficulty label {\n    margin-left: -10px;\n}\n\n.hidden {\n    display: none;\n}\n\n.individual-ship {\n    display: flex;\n    align-items: center;\n    border: 2px blue solid;\n    background: lightcyan;\n}\n\n.info {\n    margin-top: 5px;\n    text-align: center;\n    font-size: 1.4rem;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   backgroundWaves: () => (/* binding */ backgroundWaves),
/* harmony export */   initializeWaves: () => (/* binding */ initializeWaves)
/* harmony export */ });
const stateValues = [
        `&nbsp; ~ ~ ~ ~ ~ ~ ~`,
        `~ ~ ~ ~ ~ ~ ~ ~`
];
const waveGroup = [...document.querySelector('.separator.ocean').children];

function backgroundWaves() {
        let state = 0;
        setInterval(function() {
                waveGroup.forEach((wave) => {
                        wave.appendChild(getConfiguredWave(state));
                        wave.removeChild([...wave.children][0]);
                });
                state = 1 - state;
        }, 250);
}

function initializeWaves() {
        waveGroup.forEach((wave) => {
                for (let i = 0; i < waveGroup.length * 2; ++i)
                        wave.appendChild(getConfiguredWave(i % 2));
        });
}

function getConfiguredWave(state) {
        const divWave = document.createElement('div');
        divWave.innerHTML = stateValues[state];
        return divWave;
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
        removeInformationPlacement();
    });
}

function removeInformationPlacement() {
    if (document.body.lastChild.classList.contains('info'))
        document.body.removeChild(document.body.lastChild);
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
                        removeInformationPlacement();
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
        showInstructionsManual();
    });
    buttonPrev.insertAdjacentElement('beforebegin', manualButton);
    buttonPrev.remove();
}

function showInstructionsManual() {
    if (document.body.lastChild.classList.contains('info') === false) {
        const divInfo = document.createElement('div');
        const divInfoDrag = document.createElement('div');
        const divInfoRotation = document.createElement('div');
        divInfoDrag.textContent = 'Click and drag to place the ship into the battlefield!';
        divInfoRotation.textContent = 'While dragging the ship, you can press "R" to rotate it 90 degrees.';
        divInfo.appendChild(divInfoDrag);
        divInfo.appendChild(divInfoRotation);
        divInfo.classList.add('info');
        document.body.append(divInfo);
    }
}

function restartManualShipPlacement(manualPositionButton, playersArr) {
    const buttonRestart = document.createElement('button');
    buttonRestart.textContent = 'Restart manual ship placement';
    buttonRestart.type = 'button';
    buttonRestart.id = 'manual-placement';
    buttonRestart.addEventListener('click', () => {
        showInstructionsManual();
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
(0,_background_js__WEBPACK_IMPORTED_MODULE_2__.initializeWaves)();
(0,_background_js__WEBPACK_IMPORTED_MODULE_2__.backgroundWaves)();
(0,_domManipulation__WEBPACK_IMPORTED_MODULE_1__["default"])(GAMEBOARD_SIZE, NUMBER_OF_SHIPS);


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUN6RkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQUNxQjtBQUN5QjtBQUNsRTtBQUNBO0FBQ0EsK0RBQWU7QUFDZiwrREFBZTtBQUNmLDREQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9hdXhGdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2NhbGN1bGF0aW9uRnVuY3Rpb25zLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9kb21NYW5pcHVsYXRpb24uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvb2JqZWN0c01vZGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvcGxheWVyLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9zaGlwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvdXNlcm5hbWVET00uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSxcbmh0bWwge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZDogbGlnaHRncmV5O1xufVxuXG4ucGxheWVycy1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwcHggMWZyO1xuICAgIHdpZHRoOiBtYXgtY29udGVudDtcbiAgICBtYXJnaW46IDIwcHggYXV0bztcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgIG9wYWNpdHk6IDA7XG59XG5cbi5zY2FsaW5nIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDFzO1xufVxuXG4ub2NlYW4ge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNDJCNTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBmb250LWZhbWlseTogc2VyaWY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIHBhZGRpbmc6IDAgMnB4O1xufVxuXG4uYm9hcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5jZWxsIHtcbiAgICB3aWR0aDogNDRweDtcbiAgICBhc3BlY3QtcmF0aW86IDE7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG59XG5cbi5wbGF5ZXIxIHtcbiAgICBqdXN0aWZ5LXNlbGY6IHJpZ2h0O1xufVxuXG4ucGxheWVyMiB7XG4gICAganVzdGlmeS1zZWxmOiBsZWZ0O1xufVxuXG4ucGxheWVycy1uYW1lIHtcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2U7XG59XG5cbi5uby1oaXQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZTtcbn1cblxuLmh1bWFuUGxheWVyIHtcbiAgICBib3JkZXItY29sb3I6IGdyZWVuO1xufVxuXG4uc2hpcC1zZWxlY3Rpb24ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5zaGlwcy1pbWFnZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5lcnJvciB7XG4gICAgY29sb3I6IHJlZDtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xufVxuXG4uY29udGFpbmVyLWZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgcGFkZGluZzogMnB4O1xufVxuXG4jcGxheWVyLWRhdGEge1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5oaWdobGlnaHQtdGFyZ2V0IHtcbiAgICBib3JkZXItY29sb3I6IGJsdWU7XG59XG5cbi5zdW5rIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xufVxuXG4udHJhbnNpdGlvbi1zZWxlY3RlZC1heGlzIHtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2UtaW4tb3V0O1xufVxuXG4uc2VsZWN0ZWQtYXhpcyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFnZW50YTtcbn1cblxuLmdhbWUtdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogNTBweDtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMXM7XG59XG5cbi53aW5uZXIge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XG59XG5cbi53aW5uZXIgc3BhbjpudGgtY2hpbGQoMikge1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgY29sb3I6IGJsdWU7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcbn1cblxuLmRpZmZpY3VsdHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbi5kaWZmaWN1bHR5IGxlZ2VuZCB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmRpZmZpY3VsdHkgbGFiZWwge1xuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcbn1cblxuLmhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuLmluZGl2aWR1YWwtc2hpcCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7XG4gICAgYmFja2dyb3VuZDogbGlnaHRjeWFuO1xufVxuXG4uaW5mbyB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDEuNHJlbTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7SUFFSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjtJQUN0QixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLFVBQVU7QUFDZDs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixTQUFTO0lBQ1QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFNBQVM7SUFDVCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHksXFxuaHRtbCB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Z3JleTtcXG59XFxuXFxuLnBsYXllcnMtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMTAwcHggMWZyO1xcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG5cXG4uc2NhbGluZyB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAxcztcXG59XFxuXFxuLm9jZWFuIHtcXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRGNDJCNTtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxuICAgIHBhZGRpbmc6IDAgMnB4O1xcbn1cXG5cXG4uYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gICAgYXNwZWN0LXJhdGlvOiAxO1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gICAgd2lkdGg6IDUwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgd2lkdGg6IDQ0cHg7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wbGF5ZXIxIHtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG59XFxuXFxuLnBsYXllcjIge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcblxcbi5wbGF5ZXJzLW5hbWUge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZTtcXG59XFxuXFxuLm5vLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2U7XFxufVxcblxcbi5odW1hblBsYXllciB7XFxuICAgIGJvcmRlci1jb2xvcjogZ3JlZW47XFxufVxcblxcbi5zaGlwLXNlbGVjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5zaGlwcy1pbWFnZXMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbn1cXG5cXG4uZXJyb3Ige1xcbiAgICBjb2xvcjogcmVkO1xcbiAgICBmb250LXdlaWdodDogODAwO1xcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXG59XFxuXFxuLmNvbnRhaW5lci1mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDJweDtcXG59XFxuXFxuI3BsYXllci1kYXRhIHtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibHVlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGJsdWU7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmhpZ2hsaWdodC10YXJnZXQge1xcbiAgICBib3JkZXItY29sb3I6IGJsdWU7XFxufVxcblxcbi5zdW5rIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuLnRyYW5zaXRpb24tc2VsZWN0ZWQtYXhpcyB7XFxuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zZWxlY3RlZC1heGlzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFnZW50YTtcXG59XFxuXFxuLmdhbWUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDFzO1xcbn1cXG5cXG4ud2lubmVyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbi53aW5uZXIgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbi5kaWZmaWN1bHR5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5kaWZmaWN1bHR5IGxlZ2VuZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5kaWZmaWN1bHR5IGxhYmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmluZGl2aWR1YWwtc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Y3lhbjtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGZ1bmN0aW9uIGdldFN1bmtTaGlwUG9zaXRpb25zKGdhbWVib2FyZCwgaW5kZXhYLCBpbmRleFkpIHtcbiAgICAvLyBUaGlzIGZ1bmN0aW9uIGdldHMgYSBzdW5rIHNoaXAgYW5kIHdpbGwgcmV0dXJuIGFsbCB0aGUgZ2FtZWJvYXJkIGNvb3JkaW5hdGVzIGNvbnRhaW5pbmdcbiAgICAvLyB0aGlzIHNoaXAgb2JqZWN0XG4gICAgY29uc3Qgc2hpcCA9IGdhbWVib2FyZC5tYXBbaW5kZXhYXVtpbmRleFldO1xuICAgIGNvbnN0IHN1bmtTaGlwQ29vcmRpbmF0ZXMgPSBbXTtcbiAgICBnYW1lYm9hcmQubWFwLmZvckVhY2goKHJvdywgaW5kZXhSb3cpID0+IHtcbiAgICAgICAgcm93LmZvckVhY2goKGl0ZW0sIGluZGV4Q29sdW1uKSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSA9PT0gc2hpcClcbiAgICAgICAgICAgICAgICBzdW5rU2hpcENvb3JkaW5hdGVzLnB1c2goW2luZGV4Um93LCBpbmRleENvbHVtbl0pO1xuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3Vua1NoaXBDb29yZGluYXRlcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzU2hpcFN1bmsoZ2FtZWJvYXJkLCByb3csIGNvbHVtbikge1xuICAgIGNvbnN0IHNoaXAgPSBnYW1lYm9hcmQubWFwW3Jvd11bY29sdW1uXTtcbiAgICBpZiAoc2hpcC5pc1N1bmsoKSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGF1bmNoaW5nQ29vcmRpbmF0ZXMoY29vcmRpbmF0ZVRvQmVIaXQsIGJvYXJkU2l6ZSkge1xuICAgIC8vIEluIHRoaXMgZnVuY3Rpb24gYSBzZW1pIHJhbmRvbSB3YWxrIHdpbGwgYmUgdXNlZCB0byBzaW11bGF0ZSBcbiAgICAvLyB0aGF0IHRoZSBjb21wdXRlcnMgaXMgY2hvb3NpbmcgYSBwb3NpdGlvbi5cbiAgICAvLyBJdCB3aWxsIHN0YXJ0IGZyb20gb25lIHJhbmRvbSBjb3JuZXIgYW5kIHRoZW4gY2lyY3VsYXRlIGFyb3VuZCB1bnRpbFxuICAgIC8vIGl0IGFycml2ZXMgdG8gdGhlIGRlc2lyZWQgY29vcmRpbmF0ZSB0aGF0IHdhcyBwcmV2aW91c2x5IHNlbGVjdGVkXG4gICAgLy8gYXMgdGhlIG5leHQgaGl0XG4gICAgY29uc3QgY29ybmVyc0Nvb3JkaW5hdGVzID0gW1swLCAwXSwgWzAsIGJvYXJkU2l6ZSAtIDFdLCBbYm9hcmRTaXplIC0gMSwgMF0sIFtib2FyZFNpemUgLSAxLCBib2FyZFNpemUgLSAxXV07XG4gICAgY29uc3QgY29vcmRpbmF0ZXNUb1RyYXZlbCA9IFtdO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIGNvbnN0IHJhbmRvbVN0YXJ0ID0gY29ybmVyc0Nvb3JkaW5hdGVzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDQpXTtcbiAgICAgICAgaWYgKHJhbmRvbVN0YXJ0WzBdID09PSBjb29yZGluYXRlVG9CZUhpdFswXSAmJiByYW5kb21TdGFydFsxXSA9PT0gY29vcmRpbmF0ZVRvQmVIaXRbMV0pXG4gICAgICAgICAgICBjb250aW51ZVxuICAgICAgICBjb29yZGluYXRlc1RvVHJhdmVsLnB1c2gocmFuZG9tU3RhcnQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgbGV0IGFycml2ZWREZXN0aW5hdGlvbiA9IGZhbHNlO1xuICAgIGxldCB4ID0gMDtcbiAgICB3aGlsZSAoIWFycml2ZWREZXN0aW5hdGlvbikge1xuICAgICAgICArK3g7XG4gICAgICAgIGNvbnN0IGxhc3RDb29yZGluYXRlID0gY29vcmRpbmF0ZXNUb1RyYXZlbFtjb29yZGluYXRlc1RvVHJhdmVsLmxlbmd0aCAtIDFdO1xuICAgICAgICBjb25zdCBjbG9zZXJQcm9iYWJpbGl0eSA9IDAuODtcbiAgICAgICAgbGV0IGdldENsb3NlckZsYWcgPSBNYXRoLnJhbmRvbSgpIDwgY2xvc2VyUHJvYmFiaWxpdHkgPyAxIDogMDtcbiAgICAgICAgbGV0IHJhbmRvbUF4aXMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICBsZXQgb3RoZXJBeGlzID0gTWF0aC5hYnMocmFuZG9tQXhpcyAtIDEpO1xuICAgICAgICBjb25zdCBuZXdDb29yZGluYXRlID0gW2xhc3RDb29yZGluYXRlWzBdLCBsYXN0Q29vcmRpbmF0ZVsxXV07XG4gICAgICAgIGlmICghZ2V0Q2xvc2VyRmxhZyAmJiBjb29yZGluYXRlc1RvVHJhdmVsLmxlbmd0aCA8IDIwKSB7XG4gICAgICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgICAgIGxldCBzaWduRGlyZWN0aW9uID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKSA/IC0xIDogMTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3QXhpc1Bvc2l0aW9uID0gbGFzdENvb3JkaW5hdGVbcmFuZG9tQXhpc10gKyBzaWduRGlyZWN0aW9uO1xuICAgICAgICAgICAgICAgIGlmIChuZXdBeGlzUG9zaXRpb24gPCAwIHx8IG5ld0F4aXNQb3NpdGlvbiA+IGJvYXJkU2l6ZSAtIDEpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZVtyYW5kb21BeGlzXSA9IG5ld0F4aXNQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlW290aGVyQXhpc10gPSBsYXN0Q29vcmRpbmF0ZVtvdGhlckF4aXNdO1xuICAgICAgICAgICAgICAgIGNvb3JkaW5hdGVzVG9UcmF2ZWwucHVzaChuZXdDb29yZGluYXRlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChsYXN0Q29vcmRpbmF0ZVtyYW5kb21BeGlzXSA+IGNvb3JkaW5hdGVUb0JlSGl0W3JhbmRvbUF4aXNdKVxuICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVbcmFuZG9tQXhpc10gPSBsYXN0Q29vcmRpbmF0ZVtyYW5kb21BeGlzXSAtIDE7XG4gICAgICAgICAgICBlbHNlIGlmIChsYXN0Q29vcmRpbmF0ZVtyYW5kb21BeGlzXSA8IGNvb3JkaW5hdGVUb0JlSGl0W3JhbmRvbUF4aXNdKVxuICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVbcmFuZG9tQXhpc10gPSBsYXN0Q29vcmRpbmF0ZVtyYW5kb21BeGlzXSArIDE7XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVbb3RoZXJBeGlzXSA9IGxhc3RDb29yZGluYXRlW290aGVyQXhpc107XG4gICAgICAgICAgICBjb29yZGluYXRlc1RvVHJhdmVsLnB1c2gobmV3Q29vcmRpbmF0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5ld0Nvb3JkaW5hdGVbMF0gPT09IGNvb3JkaW5hdGVUb0JlSGl0WzBdICYmIG5ld0Nvb3JkaW5hdGVbMV0gPT09IGNvb3JkaW5hdGVUb0JlSGl0WzFdKVxuICAgICAgICAgICAgYXJyaXZlZERlc3RpbmF0aW9uID0gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNvb3JkaW5hdGVzVG9UcmF2ZWw7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGVja1ZhbGlkUG9zaXRpb24ocGxheWVyc0FyciwgdHVybiwgcm93LCBjb2x1bW4pIHtcbiAgICBpZiAocGxheWVyc0Fyclt0dXJuXS5nYW1lYm9hcmQucG9zaXRpb25zVmlzaXRlZFtyb3ddW2NvbHVtbl0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBmYWxzZVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlmZmljdWx0eSgpIHtcbiAgICBjb25zdCBpbnB1dHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKV07XG4gICAgaWYgKGlucHV0c1sxXS5jaGVja2VkID09PSB0cnVlKVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJjb25zdCBzdGF0ZVZhbHVlcyA9IFtcbiAgICAgICAgYCZuYnNwOyB+IH4gfiB+IH4gfiB+YCxcbiAgICAgICAgYH4gfiB+IH4gfiB+IH4gfmBcbl07XG5jb25zdCB3YXZlR3JvdXAgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNlcGFyYXRvci5vY2VhbicpLmNoaWxkcmVuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGJhY2tncm91bmRXYXZlcygpIHtcbiAgICAgICAgbGV0IHN0YXRlID0gMDtcbiAgICAgICAgc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgd2F2ZUdyb3VwLmZvckVhY2goKHdhdmUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdmUuYXBwZW5kQ2hpbGQoZ2V0Q29uZmlndXJlZFdhdmUoc3RhdGUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdmUucmVtb3ZlQ2hpbGQoWy4uLndhdmUuY2hpbGRyZW5dWzBdKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IDEgLSBzdGF0ZTtcbiAgICAgICAgfSwgMjUwKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVXYXZlcygpIHtcbiAgICAgICAgd2F2ZUdyb3VwLmZvckVhY2goKHdhdmUpID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdhdmVHcm91cC5sZW5ndGggKiAyOyArK2kpXG4gICAgICAgICAgICAgICAgICAgICAgICB3YXZlLmFwcGVuZENoaWxkKGdldENvbmZpZ3VyZWRXYXZlKGkgJSAyKSk7XG4gICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRDb25maWd1cmVkV2F2ZShzdGF0ZSkge1xuICAgICAgICBjb25zdCBkaXZXYXZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdldhdmUuaW5uZXJIVE1MID0gc3RhdGVWYWx1ZXNbc3RhdGVdO1xuICAgICAgICByZXR1cm4gZGl2V2F2ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc1ZhbGlkU2hpcFBvc2l0aW9uKHNoaXAsIGJvYXJkUGxheWVyMUNvb3JkKSB7XG4gICAgLy8gd2hlbiB0aGVyZSBpcyBhIG1vdXNlIHVwIGl0IG5lZWRzIHRvIGJlIGNoZWNrZWQgaWYgYSBjZWxsIGlzIHdpdGhpbiB0aGUgY29vcmRpbmF0ZXNcbiAgICAvLyB3ZSBoYXZlIHRvIHRha2UgaW50byBhY2NvdW50IHRoZSBzaXplIG9mIHRoZSBzZWxlY3RlZCBzaGlwXG4gICAgLy8gaXRzIHJvdGF0aW9uIHRvbyBtdXN0IGJlIHRha2VuIGludG8gYWNjb3VudFxuICAgIC8vIGluIHRoaXMgZnVuY3Rpb24gaW5kZXhTaGlwIGlzIGFsd2F5cyBkaWZmZXJlbnQgZnJvbSAtMVxuICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IHNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHJvdGF0ZWQ7XG4gICAgaWYgKHNoaXAuc3R5bGUudHJhbnNmb3JtID09PSAncm90YXRlKDkwZGVnKScpXG4gICAgICAgIHJvdGF0ZWQgPSB0cnVlO1xuICAgIGVsc2VcbiAgICAgICAgcm90YXRlZCA9IGZhbHNlO1xuICAgIGxldCBzaGlwU2l6ZSA9IGdldFNoaXBTaXplKHNoaXBDb29yZGluYXRlcywgcm90YXRlZCk7XG4gICAgaWYgKGJvYXJkUGxheWVyMUNvb3JkLmxlZnQgPCBzaGlwQ29vcmRpbmF0ZXMubGVmdCAmJiBzaGlwQ29vcmRpbmF0ZXMubGVmdCA8IGJvYXJkUGxheWVyMUNvb3JkLnJpZ2h0KSB7XG4gICAgICAgIGlmIChib2FyZFBsYXllcjFDb29yZC50b3AgPCBzaGlwQ29vcmRpbmF0ZXMudG9wICYmIHNoaXBDb29yZGluYXRlcy50b3AgPCBib2FyZFBsYXllcjFDb29yZC5ib3R0b20pXG4gICAgICAgICAgICBpZiAocm90YXRlZCkge1xuICAgICAgICAgICAgICAgIGlmIChzaGlwQ29vcmRpbmF0ZXMudG9wICsgKHNoaXBTaXplIC0gMSkgKiA1MCA8IGJvYXJkUGxheWVyMUNvb3JkLmJvdHRvbSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBpZiAoc2hpcENvb3JkaW5hdGVzLmxlZnQgKyAoc2hpcFNpemUgLSAxKSAqIDUwIDwgYm9hcmRQbGF5ZXIxQ29vcmQucmlnaHQpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRCb2FyZFNpemUocGxheWVyKSB7XG4gICAgcmV0dXJuIHBsYXllci5nYW1lYm9hcmQuc2l6ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE5ld1NoaXBQb3NpdGlvbihzaGlwLCBib2FyZFBsYXllcjFDb29yZCkge1xuICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IHNoaXAuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgbGV0IHJvdGF0ZWQ7XG4gICAgaWYgKHNoaXAuc3R5bGUudHJhbnNmb3JtID09PSAncm90YXRlKDkwZGVnKScpXG4gICAgICAgIHJvdGF0ZWQgPSB0cnVlO1xuICAgIGVsc2VcbiAgICAgICAgcm90YXRlZCA9IGZhbHNlO1xuICAgIC8vIGF0IHRoaXMgcG9pbnQgd2Uga25vdyB0aGUgc2hpcCBpcyB3aXRoaW4gYm91bmRzO1xuICAgIC8vIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgc2hpcCByZXByZXNlbnQgYWxsIHRoZSBpbmRleGVzIG9mIHRoZSBib2FyZCB3aGVyZSB0aGUgc2hpcCB3aWxsIGJlIHBsYWNlZFxuICAgIC8vIHRoYXQgaXMsIHRoYXQgd2UgbmVlZCB0byBoYXZlIGFuIGFycmF5IG9mIGFycmF5cyB3aXRoIGFsbCB0aGUgcG9zaXRpb25cbiAgICAvLyB3ZSBjYW4gdXNlIHBsYXllci5nYW1lYm9hZC5hZGQgLi4uIGFuZCBzZXQgdGhlIGNvb3JkaW5hdGVzIGxpa2UgdGhhdFxuICAgIC8vIG9mIGNvdXJzZSBiZWZvcmUgYWRkaW5nIHdlIG5lZWQgdG8gY2hlY2sgd2hldGhlciBvciBub3QgdGhhdCBpcyBzb21ldGhpbmcgdGhhdCBpcyBhbGxvd2VkXG4gICAgY29uc3QgaW5kZXhlcyA9IFtdO1xuICAgIC8vIHdlIG5lZWQgdG8gb2J0YWluIHRoZSBzaXplIG9mIGVhY2ggc2hpcFxuICAgIGxldCBzaXplU2hpcCA9IGdldFNoaXBTaXplKHNoaXBDb29yZGluYXRlcywgcm90YXRlZCk7XG4gICAgLy8gZm9yIGxvb3AgdG8gaGF2ZSBhbGwgdGhlIGluZGV4ZXNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNpemVTaGlwOyArK2kpIHtcbiAgICAgICAgY29uc3QgY29vcmRpbmF0ZSA9IFtdO1xuICAgICAgICBpZiAocm90YXRlZCkge1xuICAgICAgICAgICAgY29vcmRpbmF0ZS5wdXNoKE1hdGguZmxvb3IoKHNoaXBDb29yZGluYXRlcy50b3AgLSBib2FyZFBsYXllcjFDb29yZC50b3ApIC8gNTApICsgaSk7XG4gICAgICAgICAgICBjb29yZGluYXRlLnB1c2goTWF0aC5mbG9vcigoc2hpcENvb3JkaW5hdGVzLmxlZnQgLSBib2FyZFBsYXllcjFDb29yZC5sZWZ0KSAvIDUwKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb29yZGluYXRlLnB1c2goTWF0aC5mbG9vcigoc2hpcENvb3JkaW5hdGVzLnRvcCAtIGJvYXJkUGxheWVyMUNvb3JkLnRvcCkgLyA1MCkpO1xuICAgICAgICAgICAgY29vcmRpbmF0ZS5wdXNoKE1hdGguZmxvb3IoKHNoaXBDb29yZGluYXRlcy5sZWZ0IC0gYm9hcmRQbGF5ZXIxQ29vcmQubGVmdCkgLyA1MCkgKyBpKTtcbiAgICAgICAgfVxuICAgICAgICBpbmRleGVzLnB1c2goY29vcmRpbmF0ZSk7XG4gICAgfVxuICAgIHJldHVybiBpbmRleGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2hpcENvbGxpc2lvbihwbGF5ZXIsIHBvc2l0aW9ucykge1xuICAgIGxldCBpc0NvbGxpc2lvbiA9IGZhbHNlO1xuICAgIHBvc2l0aW9ucy5mb3JFYWNoKChwb3NpdGlvbikgPT4ge1xuICAgICAgICBpZiAocGxheWVyLmdhbWVib2FyZC5tYXBbcG9zaXRpb25bMF1dW3Bvc2l0aW9uWzFdXSkge1xuICAgICAgICAgICAgaXNDb2xsaXNpb24gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGlzQ29sbGlzaW9uO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQ29vcmRpbmF0ZXMoblNoaXBzLCBzaXplKSB7XG4gICAgLy8gUmV0dXJucyBhIG1hdHJpeCBvZiBuU2hpcHMgd2l0aCBkaWZmZXJlbnQgbGVuZ3RocyB0aGF0IGFyZSBub3Qgb3ZlcmxhcHBpbmdcbiAgICBjb25zdCBpbml0aWFsU2l6ZSA9IDI7XG4gICAgY29uc3Qgc2hpcEFycmF5ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuU2hpcHM7ICsraSkge1xuICAgICAgICBzaGlwQXJyYXkucHVzaChbXSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgblNoaXBzOyArK2kpIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBpbml0aWFsU2l6ZSArIGk7ICsraikge1xuICAgICAgICAgICAgc2hpcEFycmF5W2ldLnB1c2goWzAsIDBdKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBUaGUgZmlyc3QgbGVuZ3RoIGlzIDIgYW5kIHRoZW4gaW5jcmVhc2VzIGJ5IDFcbiAgICAvLyBUaGUgc2hpcHMgY2FuIGhhdmUgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBvcmllbnRhdGlvblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgblNoaXBzOyArK2kpIHtcbiAgICAgICAgbGV0IHBvc2l0aW9uVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgbGV0IGhvcml6b250YWwgPSBnZXRSYW5kb21UcnVlRmFsc2UoKTtcbiAgICAgICAgd2hpbGUgKHBvc2l0aW9uVmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgcm93LCBjb2x1bW47XG4gICAgICAgICAgICByb3cgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcbiAgICAgICAgICAgIGNvbHVtbiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpO1xuXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWREaXJlY3Rpb24gPSByb3c7XG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgc2hpcCB3aWxsIGFjdHVhbGx5IGZpdCB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgZ2FtZWJvYXJkXG4gICAgICAgICAgICBpZiAoaG9yaXpvbnRhbClcbiAgICAgICAgICAgICAgICBzZWxlY3RlZERpcmVjdGlvbiA9IGNvbHVtbjtcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZERpcmVjdGlvbiArIGkgKyBpbml0aWFsU2l6ZSA+IHNpemUgLSAxKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAvLyB0aGUgZmlyc3Qgc2hpcCBwb3NpdGlvbiBpcyBuZXZlciBjaGVjayBhcyB0aGVyZSBpcyBubyBwcmV2aW91cyBzaGlwXG4gICAgICAgICAgICAgICAgLy8gV2UgY2hlY2sgaWYgdGhlcmUgYXJlIG92ZXJsYXBwaW5nXG4gICAgICAgICAgICAgICAgLy8gd2UgY2hlY2sgYWxsIHRoZSBjdXJyZW50IHBvc2l0aW9ucyBmb3IgdGhlIHNoaXBzIHRoYXQgYXJlIGFscmVhZHkgdmFsaWRhdGVkXG4gICAgICAgICAgICAgICAgY29uc3QgdG90YWxMZW5ndGggPSBpbml0aWFsU2l6ZSArIGk7XG4gICAgICAgICAgICAgICAgbGV0IG5vQ29sbGlzaW9uID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGk7ICsraykge1xuICAgICAgICAgICAgICAgICAgICBzaGlwQXJyYXlba10uZm9yRWFjaCgocG9zaXRpb24pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdG90YWxMZW5ndGg7ICsraikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwb3NpdGlvblswXSA9PT0gcm93ICYmIHBvc2l0aW9uWzFdID09PSBjb2x1bW4gKyBqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub0NvbGxpc2lvbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uWzBdID09PSByb3cgKyBqICYmIHBvc2l0aW9uWzFdID09PSBjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vQ29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoayA9PT0gaSAtIDEgJiYgbm9Db2xsaXNpb24pXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICBwb3NpdGlvblZhbGlkID0gdHJ1ZTtcblxuICAgICAgICAgICAgaWYgKHBvc2l0aW9uVmFsaWQpIHtcbiAgICAgICAgICAgICAgICBzaGlwQXJyYXlbaV0uZm9yRWFjaCgocG9zaXRpb24sIGlkeCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaG9yaXpvbnRhbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25bMF0gPSByb3c7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblsxXSA9IGNvbHVtbiArIGlkeDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uWzBdID0gcm93ICsgaWR4O1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25bMV0gPSBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzaGlwQXJyYXk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21wdXRlclBsYXlzKHNpemUsIGNvbXB1dGVyUGxheVJlY29yZCwgaXNSYW5kb20pIHtcbiAgICBpZiAoaXNSYW5kb20pXG4gICAgICAgIHJldHVybiBjb21wdXRlclBsYXlzUmFuZG9tKHNpemUpO1xuICAgIGlmIChjb21wdXRlclBsYXlSZWNvcmQuc2VhcmNoaW5nID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoY29tcHV0ZXJQbGF5UmVjb3JkLm5vblN1bmtTaGlwc0hpdFBvc2l0aW9uLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gZ2V0TmVhcmJ5Q29vcmRpbmF0ZXNPbGQoc2l6ZSwgY29tcHV0ZXJQbGF5UmVjb3JkKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGNvbXB1dGVyUGxheXNSYW5kb20oc2l6ZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBuZXdDb3JkcyA9IGdldE5lYXJieUNvb3JkaW5hdGVzKHNpemUsIGNvbXB1dGVyUGxheVJlY29yZCk7XG4gICAgICAgIGlmIChuZXdDb3JkcyAhPT0gLTEpXG4gICAgICAgICAgICByZXR1cm4gbmV3Q29yZHM7XG4gICAgICAgIGVsc2UgaWYgKGNvbXB1dGVyUGxheVJlY29yZC5ub25TdW5rU2hpcHNIaXRQb3NpdGlvbi5sZW5ndGggPiAwKVxuICAgICAgICAgICAgcmV0dXJuIGdldE5lYXJieUNvb3JkaW5hdGVzT2xkKHNpemUsIGNvbXB1dGVyUGxheVJlY29yZCk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiBjb21wdXRlclBsYXlzUmFuZG9tKHNpemUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0TmVhcmJ5Q29vcmRpbmF0ZXNPbGQoc2l6ZSwgY29tcHV0ZXJSZWNvcmQpIHtcbiAgICBjb25zdCBwb3NzaWJsZVBvcyA9IFtbLTEsIDBdLCBbMCwgLTFdLCBbMSwgMF0sIFswLCAxXV07XG4gICAgY29uc3QgcHJldmlvdXNNb3ZlcyA9IGNvbXB1dGVyUmVjb3JkLm1vdmVzO1xuICAgIGxldCBhdmFpbGFibGVNb3ZlO1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29tcHV0ZXJSZWNvcmQubm9uU3Vua1NoaXBzSGl0UG9zaXRpb24ubGVuZ3RoOyArK2opIHtcbiAgICAgICAgY29uc3QgbGFzdEhpdFBvc2l0aW9uID0gY29tcHV0ZXJSZWNvcmQubm9uU3Vua1NoaXBzSGl0UG9zaXRpb25bal07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVQb3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBQb3NpdGlvbiA9IFtsYXN0SGl0UG9zaXRpb25bMF0gKyBwb3NzaWJsZVBvc1tpXVswXSwgbGFzdEhpdFBvc2l0aW9uWzFdICsgcG9zc2libGVQb3NbaV1bMV1dO1xuICAgICAgICAgICAgaWYgKCh0ZW1wUG9zaXRpb25bMF0gPCAwIHx8IHRlbXBQb3NpdGlvblswXSA+IHNpemUgLSAxKSB8fCAodGVtcFBvc2l0aW9uWzFdIDwgMCB8fCB0ZW1wUG9zaXRpb25bMV0gPiBzaXplIC0gMSkpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBhdmFpbGFibGVNb3ZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHByZXZpb3VzTW92ZXMuZm9yRWFjaCgocG9zaXRpb25WaXNpdGVkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRlbXBQb3NpdGlvblswXSA9PT0gcG9zaXRpb25WaXNpdGVkWzBdICYmIHRlbXBQb3NpdGlvblsxXSA9PT0gcG9zaXRpb25WaXNpdGVkWzFdKSB7XG4gICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZU1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGkgPT09IHBvc3NpYmxlUG9zLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgY29tcHV0ZXJSZWNvcmQuc2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoYXZhaWxhYmxlTW92ZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVtcFBvc2l0aW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gZ2V0TmVhcmJ5Q29vcmRpbmF0ZXMoc2l6ZSwgY29tcHV0ZXJSZWNvcmQpIHtcbiAgICAvLyBsZXQncyBnbyBmcm9tIHRvcCB0byBib3R0b24gIGluIGNvdW50ZXIgY2xvY2sgd2lzZSBkaXJlY3Rpb25cbiAgICBjb25zdCBwb3NzaWJsZVBvcyA9IFtbLTEsIDBdLCBbMCwgLTFdLCBbMSwgMF0sIFswLCAxXV07XG4gICAgY29uc3QgcHJldmlvdXNNb3ZlcyA9IGNvbXB1dGVyUmVjb3JkLm1vdmVzO1xuICAgIGNvbnN0IGxhc3RIaXRQb3NpdGlvbiA9IHByZXZpb3VzTW92ZXNbY29tcHV0ZXJSZWNvcmQubGFzdEhpdEluZGV4XTtcbiAgICBsZXQgYXZhaWxhYmxlTW92ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvc3NpYmxlUG9zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGNvbnN0IHRlbXBQb3NpdGlvbiA9IFtsYXN0SGl0UG9zaXRpb25bMF0gKyBwb3NzaWJsZVBvc1tpXVswXSwgbGFzdEhpdFBvc2l0aW9uWzFdICsgcG9zc2libGVQb3NbaV1bMV1dO1xuICAgICAgICBpZiAoKHRlbXBQb3NpdGlvblswXSA8IDAgfHwgdGVtcFBvc2l0aW9uWzBdID4gc2l6ZSAtIDEpIHx8ICh0ZW1wUG9zaXRpb25bMV0gPCAwIHx8IHRlbXBQb3NpdGlvblsxXSA+IHNpemUgLSAxKSlcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICBhdmFpbGFibGVNb3ZlID0gdHJ1ZTtcbiAgICAgICAgcHJldmlvdXNNb3Zlcy5mb3JFYWNoKChwb3NpdGlvblZpc2l0ZWQpID0+IHtcbiAgICAgICAgICAgIGlmICh0ZW1wUG9zaXRpb25bMF0gPT09IHBvc2l0aW9uVmlzaXRlZFswXSAmJiB0ZW1wUG9zaXRpb25bMV0gPT09IHBvc2l0aW9uVmlzaXRlZFsxXSkge1xuICAgICAgICAgICAgICAgIGF2YWlsYWJsZU1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaSA9PT0gcG9zc2libGVQb3MubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgIGNvbXB1dGVyUmVjb3JkLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICBpZiAoYXZhaWxhYmxlTW92ZSlcbiAgICAgICAgICAgIHJldHVybiB0ZW1wUG9zaXRpb247XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cblxuZnVuY3Rpb24gY29tcHV0ZXJQbGF5c1JhbmRvbShzaXplKSB7XG4gICAgLy8gaXQganVzdCByZXR1cm4gc29tZSByYW5kb20gY29vcmRpbmF0ZXNcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSk7XG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpO1xuICAgIHJldHVybiBbeCwgeV07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwc0xlZnQoY29udGFpbmVyKSB7XG4gICAgbGV0IGFueUxlZnQgPSB0cnVlO1xuICAgIFsuLi5jb250YWluZXJdLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICAgIGlmIChpbWFnZS5zdHlsZS53aWR0aCAhPT0gJzBweCcgJiYgaW1hZ2Uuc3R5bGUuaGVpZ2h0ICE9PSAnMHB4Jykge1xuICAgICAgICAgICAgYW55TGVmdCA9IGZhbHNlO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGFueUxlZnQ7XG59XG5cbmZ1bmN0aW9uIGdldFNoaXBTaXplKGNvb3JkaW5hdGVzLCBpc1JvdGF0ZWQpIHtcbiAgICBpZiAoaXNSb3RhdGVkKVxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKChjb29yZGluYXRlcy5ib3R0b20gLSBjb29yZGluYXRlcy50b3ApIC8gNTApO1xuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIE1hdGguY2VpbCgoY29vcmRpbmF0ZXMucmlnaHQgLSBjb29yZGluYXRlcy5sZWZ0KSAvIDUwKTtcbn1cblxuZnVuY3Rpb24gZ2V0UmFuZG9tVHJ1ZUZhbHNlKCkge1xuICAgIGNvbnN0IHJhbmRvbU51bWJlciA9IE1hdGgucmFuZG9tKCk7XG4gICAgaWYgKHJhbmRvbU51bWJlciA+PSAwLjUpXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gZmFsc2Vcbn1cbiIsImltcG9ydCBpbWFnZVNoaXAxIGZyb20gXCIuL2ltYWdlcy9zbWFsbFNoaXAucG5nXCI7XG5pbXBvcnQgeyBzaGlwc0xlZnQsIGlzVmFsaWRTaGlwUG9zaXRpb24sIGdldEJvYXJkU2l6ZSwgZ2V0TmV3U2hpcFBvc2l0aW9uLCBzaGlwQ29sbGlzaW9uLCBjb21wdXRlclBsYXlzLCBnZXRSYW5kb21Db29yZGluYXRlcyB9IGZyb20gXCIuL2NhbGN1bGF0aW9uRnVuY3Rpb25zXCI7XG5pbXBvcnQgeyBhZGRTaGlwVG9QbGF5ZXIsIGNyZWF0ZUdhbWVSZWNvcmQsIGNyZWF0ZVBsYXllcnMgfSBmcm9tIFwiLi9vYmplY3RzTW9kaWZpY2F0aW9uXCI7XG5pbXBvcnQgeyBzZXRVcFBsYXllck5hbWUgfSBmcm9tIFwiLi91c2VybmFtZURPTS5qc1wiO1xuaW1wb3J0IHsgZ2V0U3Vua1NoaXBQb3NpdGlvbnMsIGlzU2hpcFN1bmssIGdldExhdW5jaGluZ0Nvb3JkaW5hdGVzLCBjaGVja1ZhbGlkUG9zaXRpb24sIGdldERpZmZpY3VsdHkgfSBmcm9tIFwiLi9hdXhGdW5jdGlvbnMuanNcIjtcblxuY29uc3QgSU1BR0VTX1NISVBTID0gaW1hZ2VTaGlwMTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY3JlYXRlQm9hcmQoc2l6ZSwgbnVtYmVyT2ZTaGlwcykge1xuICAgIGxvYWRHcmlkKHNpemUpO1xuICAgIHNldFVwUGxheWVyTmFtZShkaXNhYmxlQnV0dG9ucyk7XG4gICAgc2V0VXBGdW5jdGlvbmFsaXR5KG51bWJlck9mU2hpcHMsIHNpemUpO1xuICAgIG1ha2VCb2FyZERpdlZpc2libGUoKTtcbn1cblxuZnVuY3Rpb24gbWFrZUJvYXJkRGl2VmlzaWJsZSgpIHtcbiAgICBjb25zdCBib2FyZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzLWNvbnRhaW5lcicpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gYm9hcmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2NhbGluZycpLCAxMDApO1xufVxuXG5mdW5jdGlvbiBzZXRVcEZ1bmN0aW9uYWxpdHkobnVtYmVyT2ZTaGlwcywgc2l6ZSkge1xuICAgIGNvbnN0IHBsYXllcnNBcnIgPSBbXTtcbiAgICBjcmVhdGVQbGF5ZXJzKHBsYXllcnNBcnIsIHNpemUpO1xuICAgIHJhbmRvbVBvc2l0aW9uU3RhcnQocGxheWVyc0FyciwgbnVtYmVyT2ZTaGlwcyk7XG4gICAgc2V0VXBNYW51YWxQb3NpdGlvbihwbGF5ZXJzQXJyLCBudW1iZXJPZlNoaXBzLCB0cnVlKTtcbiAgICBjcmVhdGVEaXZTaGlwcyhudW1iZXJPZlNoaXBzKTtcbiAgICBzZXRVcEV2ZW50TGlzdGVuZXJzU2hpcHMocGxheWVyc0Fycik7XG4gICAgc3RhcnRHYW1lKHBsYXllcnNBcnIsIHRydWUsIG51bWJlck9mU2hpcHMpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VHYW1lVGl0bGUoc3RhdGUpIHtcbiAgICBjb25zdCBzcGFuVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS10aXRsZSBzcGFuJyk7XG4gICAgaWYgKHN0YXRlID09PSAwKVxuICAgICAgICBzcGFuVGl0bGUudGV4dENvbnRlbnQgPSAnPFdFTENPTUU+JztcbiAgICBlbHNlIGlmIChzdGF0ZSA9PT0gMSlcbiAgICAgICAgc3BhblRpdGxlLnRleHRDb250ZW50ID0gJ0ZJR0hUISEhISc7XG4gICAgZWxzZSBpZiAoc3RhdGUgPT09IDIpXG4gICAgICAgIHNwYW5UaXRsZS50ZXh0Q29udGVudCA9ICdZb3Ugd2luISc7XG4gICAgZWxzZSBpZiAoc3RhdGUgPT09IDMpXG4gICAgICAgIHNwYW5UaXRsZS50ZXh0Q29udGVudCA9ICdHYW1lIE92ZXIhJztcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUJ1dHRvbnMoZmxhZ0Rpc2FibGUsIGZsYWdMYXN0QnV0dG9uID0gZmFsc2UpIHtcbiAgICBjb25zdCBzaGlwQnV0dG9ucyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1zZWxlY3Rpb24nKS5jaGlsZHJlbl07XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQnV0dG9ucy5sZW5ndGg7ICsraSlcbiAgICAgICAgc2hpcEJ1dHRvbnNbaV0uZGlzYWJsZWQgPSBmbGFnRGlzYWJsZTtcbiAgICBpZiAoZmxhZ0xhc3RCdXR0b24pXG4gICAgICAgIHNoaXBCdXR0b25zW3NoaXBCdXR0b25zLmxlbmd0aCAtIDFdLmRpc2FibGVkID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tUG9zaXRpb25TdGFydChwbGF5ZXJzQXJyLCBudW1iZXJPZlNoaXBzKSB7XG4gICAgY29uc3QgcmVzdGFydFBvc2l0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhbmRvbWl6ZS1wbGFjZW1lbnQnKTtcbiAgICByZXN0YXJ0UG9zaXRpb25CdXR0b24udGV4dENvbnRlbnQgPSAnUmFuZG9taXplIHNoaXAgcGxhY2VtZW50JztcbiAgICByZXN0YXJ0UG9zaXRpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlc3RhcnRQbGF5ZXJzR3JpZChwbGF5ZXJzQXJyKTtcbiAgICAgICAgcGxheWVyc0Fyci5mb3JFYWNoKChwbGF5ZXIsIHBsYXllckluZGV4KSA9PiB7XG4gICAgICAgICAgICBwbGFjZVNoaXBzR2FtZWJvYXJkKHBsYXllciwgcGxheWVySW5kZXgsIG51bWJlck9mU2hpcHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgc2V0VXBNYW51YWxQb3NpdGlvbihwbGF5ZXJzQXJyLCBudW1iZXJPZlNoaXBzKTtcbiAgICAgICAgLy8gd2UgZW5hYmxlIHRoZSBidXR0b24gb2Ygc3RhcnRpbmcgdGhlIGdhbWVcbiAgICAgICAgZGlzYWJsZURpdlNoaXBzKCk7XG4gICAgICAgIGRpc2FibGVTdGFydEJ1dHRvbihmYWxzZSk7XG4gICAgICAgIHJlbW92ZUluZm9ybWF0aW9uUGxhY2VtZW50KCk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUluZm9ybWF0aW9uUGxhY2VtZW50KCkge1xuICAgIGlmIChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2luZm8nKSlcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZCk7XG59XG5cbmZ1bmN0aW9uIHBsYWNlU2hpcHNHYW1lYm9hcmQocGxheWVyLCBwbGF5ZXJJbmRleCwgblNoaXBzKSB7XG4gICAgbGV0IGNvb3JkaW5hdGVzU2hpcHNBcnI7XG4gICAgbGV0IHNpemUgPSBwbGF5ZXIuZ2FtZWJvYXJkLnNpemU7XG4gICAgY29vcmRpbmF0ZXNTaGlwc0FyciA9IGdldFJhbmRvbUNvb3JkaW5hdGVzKG5TaGlwcywgc2l6ZSk7XG4gICAgY29vcmRpbmF0ZXNTaGlwc0Fyci5mb3JFYWNoKChjb29yZGluYXRlcykgPT4ge1xuICAgICAgICBhZGRTaGlwVG9QbGF5ZXIocGxheWVyLCBjb29yZGluYXRlcyk7XG4gICAgICAgIGlmIChwbGF5ZXJJbmRleCA9PT0gMSlcbiAgICAgICAgICAgIGNvbG9yUGxheWVyU2hpcHMoY29vcmRpbmF0ZXMsIHBsYXllckluZGV4KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gc2V0VXBEaXZTaGlwcygpIHtcbiAgICBjb25zdCBpbWFnZXNFbGVtZW50cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKV07XG4gICAgaW1hZ2VzRWxlbWVudHMuZm9yRWFjaCgoaW1hZ2UpID0+IGltYWdlLnNyYyA9IElNQUdFU19TSElQUyk7XG4gICAgZW5hYmxlRGl2U2hpcHMoKTtcbiAgICBkaXNhYmxlRGl2U2hpcHMoKTtcbn1cblxuZnVuY3Rpb24gZW5hYmxlRGl2U2hpcHMoKSB7XG4gICAgY29uc3QgaW1hZ2VzRWxlbWVudHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyldO1xuICAgIGltYWdlc0VsZW1lbnRzLmZvckVhY2goKGltYWdlLCBpbmRleCkgPT4ge1xuICAgICAgICByZXN0YXJ0SW1hZ2VQb3NpdGlvbihpbWFnZSk7XG4gICAgICAgIHJlc3RhcnRTaXplSW1hZ2UoaW1hZ2UsIGluZGV4KTtcbiAgICB9KTtcbiAgICBkaXNhYmxlRGl2U2hpcENvbnRhaW5lcihmYWxzZSk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVEaXZTaGlwQ29udGFpbmVyKGZsYWcgPSB0cnVlKSB7XG4gICAgY29uc3QgaW5kaXZpZHVhbFNoaXBDb250YWluZXJzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaGlwcy1pbWFnZXMgZGl2JyldO1xuICAgIGlmIChmbGFnKVxuICAgICAgICBpbmRpdmlkdWFsU2hpcENvbnRhaW5lcnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LnJlbW92ZSgnaW5kaXZpZHVhbC1zaGlwJykpO1xuICAgIGVsc2VcbiAgICAgICAgaW5kaXZpZHVhbFNoaXBDb250YWluZXJzLmZvckVhY2goKGRpdikgPT4gZGl2LmNsYXNzTGlzdC5hZGQoJ2luZGl2aWR1YWwtc2hpcCcpKTtcblxufVxuXG5mdW5jdGlvbiBkaXNhYmxlRGl2U2hpcHMoKSB7XG4gICAgY29uc3QgaW1hZ2VzRWxlbWVudHMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nJyldO1xuICAgIGltYWdlc0VsZW1lbnRzLmZvckVhY2goKGltYWdlKSA9PiByZXN0YXJ0U2l6ZUltYWdlKGltYWdlLCAwLCAwKSk7XG4gICAgZGlzYWJsZURpdlNoaXBDb250YWluZXIodHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRJbWFnZVBvc2l0aW9uKGltYWdlKSB7XG4gICAgaW1hZ2Uuc3R5bGUucG9zaXRpb24gPSAnc3RhdGljJztcbiAgICBpbWFnZS50b3AgPSAwO1xuICAgIGltYWdlLmxlZnQgPSAwO1xuICAgIGltYWdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0U2l6ZUltYWdlKGltYWdlLCBpbmRleCwgZmxhZ1dpZHRoID0gMSkge1xuICAgIGNvbnN0IHdpZHRoID0gMTAwICogZmxhZ1dpZHRoICsgNTAgKiBpbmRleDtcbiAgICBpbWFnZS5zdHlsZS53aWR0aCA9IGAke3dpZHRoICogZmxhZ1dpZHRofXB4YDtcbiAgICBpbWFnZS5zdHlsZS5oZWlnaHQgPSBgJHs1MCAqIGZsYWdXaWR0aH1weGA7XG59XG5cbmZ1bmN0aW9uIHNldFVwRXZlbnRMaXN0ZW5lcnNTaGlwcyhwbGF5ZXJzQXJyKSB7XG4gICAgbGV0IGFjdGl2YXRpb24gPSBmYWxzZTtcbiAgICBsZXQgaW5kZXhTaGlwID0gLTE7XG4gICAgY29uc3QgaW5pdGlhbENsaWNrUG9zaXRpb24gPSBbXTtcbiAgICBjb25zdCBpbWFnZXNFbGVtZW50cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKV07XG4gICAgaW1hZ2VzRWxlbWVudHMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgIGltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChlTW91c2UpID0+IHtcbiAgICAgICAgICAgIGFjdGl2YXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgaW5kZXhTaGlwID0gaW5kZXg7XG4gICAgICAgICAgICBpbml0aWFsQ2xpY2tQb3NpdGlvblswXSA9IGVNb3VzZS5jbGllbnRYO1xuICAgICAgICAgICAgaW5pdGlhbENsaWNrUG9zaXRpb25bMV0gPSBlTW91c2UuY2xpZW50WTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIChlS2V5KSA9PiB7XG4gICAgICAgIGlmIChlS2V5LmNvZGUgPT09ICdLZXlSJykge1xuICAgICAgICAgICAgbGV0IG5ld1JvdGF0aW9uVmFsdWU7XG4gICAgICAgICAgICBpZiAoaW5kZXhTaGlwICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gaW1hZ2VzRWxlbWVudHNbaW5kZXhTaGlwXTtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2Uuc3R5bGUudHJhbnNmb3JtICE9PSAncm90YXRlKDkwZGVnKScpXG4gICAgICAgICAgICAgICAgICAgIG5ld1JvdGF0aW9uVmFsdWUgPSA5MDtcbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIG5ld1JvdGF0aW9uVmFsdWUgPSAwO1xuICAgICAgICAgICAgICAgIGltYWdlLnN0eWxlLnRyYW5zZm9ybSA9IGByb3RhdGUoJHtuZXdSb3RhdGlvblZhbHVlfWRlZylgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgICBpZiAoYWN0aXZhdGlvbiAmJiBpbmRleFNoaXAgIT09IC0xKSB7XG4gICAgICAgICAgICBpbWFnZXNFbGVtZW50c1tpbmRleFNoaXBdLnN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcbiAgICAgICAgICAgIGltYWdlc0VsZW1lbnRzW2luZGV4U2hpcF0uc3R5bGUubGVmdCA9IGAke2UuY2xpZW50WCAtIGluaXRpYWxDbGlja1Bvc2l0aW9uWzBdfXB4YDtcbiAgICAgICAgICAgIGltYWdlc0VsZW1lbnRzW2luZGV4U2hpcF0uc3R5bGUudG9wID0gYCR7ZS5jbGllbnRZIC0gaW5pdGlhbENsaWNrUG9zaXRpb25bMV19cHhgO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4ge1xuICAgICAgICBpZiAoaW5kZXhTaGlwICE9PSAtMSkge1xuICAgICAgICAgICAgY29uc3QgYm9hcmRQbGF5ZXIxQ29vcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGxheWVyMScpLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgaWYgKGlzVmFsaWRTaGlwUG9zaXRpb24oaW1hZ2VzRWxlbWVudHNbaW5kZXhTaGlwXSwgYm9hcmRQbGF5ZXIxQ29vcmQpKSB7XG4gICAgICAgICAgICAgICAgLy8gbGV0J3MgcGxhY2UgdGhlIHNoaXBcbiAgICAgICAgICAgICAgICAvLyBvbmNlIGkga25vdyB0aGUgc2hpcCBwb3NpdGlvbiBpcyB2YWxpZCBpIGNhbiBjYWxjdWxhdGUgdGhlIGluZGV4IHdoZXJlIHRoZSBzaGlwIGNhbiBiZSBwbGFjZWRcbiAgICAgICAgICAgICAgICAvLyBpbiB0aGlzIHBvc2l0aW9uIGlzIHNob3VsZCBjaGVjayBpZiB0aGVyZSBhcmUgc2hpcHMgb24gdGhlIHRvIHBvc2l0aW9ucyB3aGVyZSB0aGUgbmV3IHNoaXAgY2FuIGJlIHBsYWNlZFxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IGdldE5ld1NoaXBQb3NpdGlvbihpbWFnZXNFbGVtZW50c1tpbmRleFNoaXBdLCBib2FyZFBsYXllcjFDb29yZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFzaGlwQ29sbGlzaW9uKHBsYXllcnNBcnJbMV0sIHBvc2l0aW9ucykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkU2hpcFRvUGxheWVyKHBsYXllcnNBcnJbMV0sIHBvc2l0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yUGxheWVyU2hpcHMocG9zaXRpb25zLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGxhY2UgdGhlIHNoaXAgd2l0aGluIHRoZSBnYW1lYm9hcmRcbiAgICAgICAgICAgICAgICAgICAgLy8gZGVsZXRlIHRoZSBpbWFnZSB0aGF0IGlzIGFzc29jaWF0ZWQgdG8gdGhlIHBsYWNlZCBzaGlwXG4gICAgICAgICAgICAgICAgICAgIGltYWdlc0VsZW1lbnRzW2luZGV4U2hpcF0uc3R5bGUud2lkdGggPSAwO1xuICAgICAgICAgICAgICAgICAgICBpbWFnZXNFbGVtZW50c1tpbmRleFNoaXBdLnN0eWxlLmhlaWdodCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc0VsZW1lbnRzW2luZGV4U2hpcF0ucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdpbmRpdmlkdWFsLXNoaXAnKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhlIGNvbmRpdGlvbiBiZWxvdyAgbWVhbnMgdGhhdCBhbGwgdGhlIHNoaXBzIGhhdmUgYmVlbiBwbGFjZWQgY29ycmVjdGx5XG4gICAgICAgICAgICAgICAgICAgIGlmIChzaGlwc0xlZnQoaW1hZ2VzRWxlbWVudHMpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZVNoaXBzR2FtZWJvYXJkKHBsYXllcnNBcnJbMF0sIDAsIGltYWdlc0VsZW1lbnRzLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlU3RhcnRCdXR0b24oZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlSW5mb3JtYXRpb25QbGFjZW1lbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgICAgICByZXN0YXJ0SW1hZ2VQb3NpdGlvbihpbWFnZXNFbGVtZW50c1tpbmRleFNoaXBdKTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHJlc3RhcnRJbWFnZVBvc2l0aW9uKGltYWdlc0VsZW1lbnRzW2luZGV4U2hpcF0pO1xuICAgICAgICAgICAgaW5kZXhTaGlwID0gLTE7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZVN0YXJ0QnV0dG9uKGZsYWdFbmFibGUpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtZ2FtZScpO1xuICAgIGJ1dHRvbi5kaXNhYmxlZCA9IGZsYWdFbmFibGU7XG59XG5cbmZ1bmN0aW9uIHNldFVwTWFudWFsUG9zaXRpb24ocGxheWVyc0FyciwgblNoaXBzLCBkaXNhYmxlZE1hbnVhbCA9IGZhbHNlKSB7XG4gICAgY29uc3QgYnV0dG9uUHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYW51YWwtcGxhY2VtZW50Jyk7XG4gICAgY29uc3QgbWFudWFsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWFudWFsQnV0dG9uLmlkID0gJ21hbnVhbC1wbGFjZW1lbnQnO1xuICAgIG1hbnVhbEJ1dHRvbi50ZXh0Q29udGVudCA9ICdNYW51YWwgcGxhY2VtZW50IG9mIHRoZSBzaGlwJztcbiAgICBtYW51YWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGlmIChkaXNhYmxlZE1hbnVhbClcbiAgICAgICAgbWFudWFsQnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBtYW51YWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHJlc3RhcnRQbGF5ZXJzR3JpZChwbGF5ZXJzQXJyKTtcbiAgICAgICAgcmVzdGFydE1hbnVhbFNoaXBQbGFjZW1lbnQobWFudWFsQnV0dG9uLCBwbGF5ZXJzQXJyLCBuU2hpcHMpO1xuICAgICAgICBtYW51YWxCdXR0b24ucmVtb3ZlKCk7XG4gICAgICAgIGRpc2FibGVTdGFydEJ1dHRvbih0cnVlKTtcbiAgICAgICAgZW5hYmxlRGl2U2hpcHMoKTtcbiAgICAgICAgc2hvd0luc3RydWN0aW9uc01hbnVhbCgpO1xuICAgIH0pO1xuICAgIGJ1dHRvblByZXYuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIG1hbnVhbEJ1dHRvbik7XG4gICAgYnV0dG9uUHJldi5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gc2hvd0luc3RydWN0aW9uc01hbnVhbCgpIHtcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5sYXN0Q2hpbGQuY2xhc3NMaXN0LmNvbnRhaW5zKCdpbmZvJykgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IGRpdkluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2SW5mb0RyYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgZGl2SW5mb1JvdGF0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdkluZm9EcmFnLnRleHRDb250ZW50ID0gJ0NsaWNrIGFuZCBkcmFnIHRvIHBsYWNlIHRoZSBzaGlwIGludG8gdGhlIGJhdHRsZWZpZWxkISc7XG4gICAgICAgIGRpdkluZm9Sb3RhdGlvbi50ZXh0Q29udGVudCA9ICdXaGlsZSBkcmFnZ2luZyB0aGUgc2hpcCwgeW91IGNhbiBwcmVzcyBcIlJcIiB0byByb3RhdGUgaXQgOTAgZGVncmVlcy4nO1xuICAgICAgICBkaXZJbmZvLmFwcGVuZENoaWxkKGRpdkluZm9EcmFnKTtcbiAgICAgICAgZGl2SW5mby5hcHBlbmRDaGlsZChkaXZJbmZvUm90YXRpb24pO1xuICAgICAgICBkaXZJbmZvLmNsYXNzTGlzdC5hZGQoJ2luZm8nKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZGl2SW5mbyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZXN0YXJ0TWFudWFsU2hpcFBsYWNlbWVudChtYW51YWxQb3NpdGlvbkJ1dHRvbiwgcGxheWVyc0Fycikge1xuICAgIGNvbnN0IGJ1dHRvblJlc3RhcnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b25SZXN0YXJ0LnRleHRDb250ZW50ID0gJ1Jlc3RhcnQgbWFudWFsIHNoaXAgcGxhY2VtZW50JztcbiAgICBidXR0b25SZXN0YXJ0LnR5cGUgPSAnYnV0dG9uJztcbiAgICBidXR0b25SZXN0YXJ0LmlkID0gJ21hbnVhbC1wbGFjZW1lbnQnO1xuICAgIGJ1dHRvblJlc3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHNob3dJbnN0cnVjdGlvbnNNYW51YWwoKTtcbiAgICAgICAgZGlzYWJsZVN0YXJ0QnV0dG9uKHRydWUpO1xuICAgICAgICByZXN0YXJ0UGxheWVyc0dyaWQocGxheWVyc0Fycik7XG4gICAgICAgIGVuYWJsZURpdlNoaXBzKCk7XG4gICAgfSk7XG4gICAgbWFudWFsUG9zaXRpb25CdXR0b24uaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIGJ1dHRvblJlc3RhcnQpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVEaXZTaGlwcyhuU2hpcHMpIHtcbiAgICBjb25zdCBkaXZTaGlwcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdlNoaXBzLmNsYXNzTGlzdC5hZGQoJ3NoaXBzLWltYWdlcycpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgblNoaXBzOyArK2kpIHtcbiAgICAgICAgY29uc3QgZGl2SW5kaXZpZHVhbENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaW1nLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgICBpbWcuYWx0ID0gYFNoaXAgb2YgbGVuZ3RoICR7aSArIDJ9YDtcbiAgICAgICAgZGl2SW5kaXZpZHVhbENvbnRhaW5lci5hcHBlbmRDaGlsZChpbWcpO1xuICAgICAgICBkaXZTaGlwcy5hcHBlbmRDaGlsZChkaXZJbmRpdmlkdWFsQ29udGFpbmVyKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXZTaGlwcyk7XG4gICAgc2V0VXBEaXZTaGlwcygpO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0UGxheWVyc0dyaWQocGxheWVyc0Fycikge1xuICAgIGNvbnN0IHNpemUgPSBnZXRCb2FyZFNpemUocGxheWVyc0FyclswXSk7XG4gICAgbG9hZEdyaWQoc2l6ZSk7XG4gICAgY3JlYXRlUGxheWVycyhwbGF5ZXJzQXJyLCBzaXplKTtcbn1cblxuZnVuY3Rpb24gbG9hZEdyaWQoc2l6ZSkge1xuICAgIGNvbnN0IGRpdkJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5ib2FyZCcpO1xuICAgIGRpdkJvYXJkcy5mb3JFYWNoKChkaXZCb2FyZCkgPT4ge1xuICAgICAgICBkaXZCb2FyZC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCBzaXplOyArK3Jvdykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgc2l6ZTsgKytjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICAgICAgICAgIGRpdi5kYXRhc2V0LnJvdyA9IHJvdztcbiAgICAgICAgICAgICAgICBkaXYuZGF0YXNldC5jb2x1bW4gPSBjb2x1bW47XG4gICAgICAgICAgICAgICAgZGl2Qm9hcmQuYXBwZW5kQ2hpbGQoZGl2KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzdGFydEdhbWUocGxheWVycywgY29tcHV0ZXIsIG5TaGlwcykge1xuICAgIGNvbnN0IHN0YXJ0R2FtZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJyk7XG4gICAgc3RhcnRHYW1lQnV0dG9uLnRleHRDb250ZW50ID0gJ1N0YXJ0IGdhbWUhJztcbiAgICBzdGFydEdhbWVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGNoYW5nZUdhbWVUaXRsZSgxKTtcbiAgICAgICAgY29uc3QgZ2FtZURpZmZpY3VsdHkgPSBnZXREaWZmaWN1bHR5KCk7XG4gICAgICAgIG1vZGlmeUNvbXB1dGVyVGV4dChnYW1lRGlmZmljdWx0eSk7XG4gICAgICAgIGNyZWF0ZUV2ZW50cyhwbGF5ZXJzLCBjb21wdXRlciwgblNoaXBzLCBnYW1lRGlmZmljdWx0eSk7XG4gICAgICAgIHJlbW92ZUFsbEJ1dHRvbnMoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlSGlkRGlmZmljdWx0eURpdigpIHtcbiAgICBjb25zdCBkaXZEaWZmaWN1bHR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpZmZpY3VsdHknKTtcbiAgICBkaXZEaWZmaWN1bHR5LmNsYXNzTGlzdC50b2dnbGUoJ2hpZGRlbicpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBbGxCdXR0b25zKCkge1xuICAgIHRvZ2dsZUhpZERpZmZpY3VsdHlEaXYoKTtcbiAgICBjb25zdCBidXR0b25zRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtc2VsZWN0aW9uJyk7XG4gICAgd2hpbGUgKGJ1dHRvbnNEaXYuY2hpbGRyZW4ubGVuZ3RoID4gMClcbiAgICAgICAgYnV0dG9uc0Rpdi5jaGlsZHJlblswXS5yZW1vdmUoKTtcbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0QXhpcyhjZWxsSW5pLCBmbGFnRW5hYmxlID0gdHJ1ZSkge1xuICAgIGNvbnN0IGJvYXJkQXJyYXkgPSBbLi4uY2VsbEluaS5wYXJlbnRFbGVtZW50LmNoaWxkcmVuXTtcbiAgICBjb25zdCByb3cgPSArY2VsbEluaS5kYXRhc2V0LnJvdywgY29sdW1uID0gK2NlbGxJbmkuZGF0YXNldC5jb2x1bW47XG4gICAgY29uc3Qgc2l6ZSA9IE1hdGguc3FydChib2FyZEFycmF5Lmxlbmd0aCk7XG4gICAgY29uc3QgYXJyYXlJbmRleCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgKytpKSB7XG4gICAgICAgIGFycmF5SW5kZXgucHVzaChyb3cgKiBzaXplICsgaSk7XG4gICAgICAgIGFycmF5SW5kZXgucHVzaChjb2x1bW4gKyBpICogc2l6ZSk7XG4gICAgfVxuICAgIGFycmF5SW5kZXguZm9yRWFjaCgoaW5kZXgpID0+IHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGJvYXJkQXJyYXlbaW5kZXhdO1xuICAgICAgICBpZiAoZmxhZ0VuYWJsZSlcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0LXRhcmdldCcpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodC10YXJnZXQnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0QXhpc0V2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgY2VsbEV2ZW50ID0gZXZlbnQudGFyZ2V0O1xuICAgIGhpZ2hsaWdodEF4aXMoY2VsbEV2ZW50LCBldmVudC50eXBlID09PSAnbW91c2VlbnRlcicpO1xufVxuXG5mdW5jdGlvbiBkcmF3U2hpcFN1bmsocGxheWVyc0Fyciwgcm93LCBjb2x1bW4sIHR1cm4pIHtcbiAgICBjb25zdCBnYW1lYm9hcmRPYmplY3QgPSBwbGF5ZXJzQXJyW3R1cm5dLmdhbWVib2FyZDtcbiAgICBjb25zdCBzaGlwU3Vua0Nvb3JkaW5hdGVzID0gZ2V0U3Vua1NoaXBQb3NpdGlvbnMoZ2FtZWJvYXJkT2JqZWN0LCByb3csIGNvbHVtbik7XG4gICAgY29uc3QgZ2FtZWJvYXJkRGl2T3Bwb25lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYm9hcmQnKTtcbiAgICBjb25zdCBpbmRleE9wcG9uZW50ID0gdHVybiA/IDAgOiAxO1xuICAgIGNvbnN0IGdhbWVib2FyZEFyck9wcG9uZW50ID0gWy4uLmdhbWVib2FyZERpdk9wcG9uZW50W2luZGV4T3Bwb25lbnRdLmNoaWxkcmVuXTtcbiAgICBzaGlwU3Vua0Nvb3JkaW5hdGVzLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGdhbWVib2FyZEFyck9wcG9uZW50W2Nvb3JkaW5hdGVbMV0gKyBjb29yZGluYXRlWzBdICogTWF0aC5zcXJ0KGdhbWVib2FyZEFyck9wcG9uZW50Lmxlbmd0aCldO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYmxpbmtUYXJnZXQoY2VsbEFycmF5LCByb3csIGNvbHVtbikge1xuICAgIGNvbnN0IHNpemUgPSBNYXRoLnNxcnQoY2VsbEFycmF5Lmxlbmd0aCk7XG4gICAgY29uc3QgY2VsbCA9IGNlbGxBcnJheVtjb2x1bW4gKyByb3cgKiBzaXplXTtcbiAgICBjb25zdCBkZWxheSA9IDEwMDA7XG4gICAgLy8gbXNcbiAgICBsZXQgcmVwZXRpdGlvbnMgPSA1O1xuICAgIGZvciAobGV0IGluZGV4UmVwZXRpdGlvbiA9IDA7IGluZGV4UmVwZXRpdGlvbiAtIHJlcGV0aXRpb25zOyArK2luZGV4UmVwZXRpdGlvbikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uLXNlbGVjdGVkLWF4aXMnKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQtYXhpcycpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQtdGFyZ2V0Jyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQtYXhpcycpLCBkZWxheSAvIHJlcGV0aXRpb25zIC8gMik7XG4gICAgICAgIH0sIGRlbGF5IC8gcmVwZXRpdGlvbnMgKiAoaW5kZXhSZXBldGl0aW9uIC0gMSkpO1xuICAgIH1cbiAgICBzZXRUaW1lb3V0KCgpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgndHJhbnNpdGlvbi1zZWxlY3RlZC1heGlzJyksIGRlbGF5KTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlRXZlbnRzKHBsYXllcnNBcnIsIGZsYWdDb21wdXRlciwgbnVtYmVyT2ZTaGlwcywgaXNEaWZmaWN1bHQpIHtcbiAgICBjb25zdCBnYW1lUmVjb3JkID0gY3JlYXRlR2FtZVJlY29yZCgpO1xuICAgIC8vIFdlIGFzc29jaWF0ZSBlYWNoIHBsYXllciB3aXRoIGEgYm9hcmQ7XG4gICAgLy8gdGhlIGZ1bmN0aW9uIGluc2lkZSB0aGUgZXZlbnQgbGlzdGVuZXIgc2hvdWxkIG5vdCBiZSBhbiBhbm9ueW1vdXMgZnVuY3Rpb25cbiAgICBjb25zdCBkaXZCb2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuYm9hcmQnKTtcbiAgICBjb25zdCBnYW1lU3BhY2UgPSB7XG4gICAgICAgIHR1cm46IDAsXG4gICAgICAgIGNvbXB1dGVySXNQbGF5aW5nOiBmYWxzZVxuICAgIH07XG4gICAgY29uc3QgZGl2Qm9hcmRDaGlsZHJlbkFycmF5ID0gWy4uLmRpdkJvYXJkc1sxXS5jaGlsZHJlbl07XG4gICAgZGl2Qm9hcmRDaGlsZHJlbkFycmF5LmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgY2xpY2tlZCk7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhpZ2hsaWdodEF4aXNFdmVudCk7XG4gICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZ2hsaWdodEF4aXNFdmVudCk7XG4gICAgfSk7XG4gICAgZnVuY3Rpb24gY2xpY2tlZChlKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBlLnRhcmdldDtcbiAgICAgICAgY29uc3Qgcm93ID0gK2UudGFyZ2V0LmRhdGFzZXQucm93O1xuICAgICAgICBjb25zdCBjb2x1bW4gPSArZS50YXJnZXQuZGF0YXNldC5jb2x1bW47XG4gICAgICAgIGlmIChnYW1lU3BhY2UuY29tcHV0ZXJJc1BsYXlpbmcgPT09IGZhbHNlICYmIGdhbWVTcGFjZS50dXJuID09PSAwKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tWYWxpZFBvc2l0aW9uKHBsYXllcnNBcnIsIGdhbWVTcGFjZS50dXJuLCByb3csIGNvbHVtbikpXG4gICAgICAgICAgICAgICAgaGFuZGxlSGl0KHBsYXllcnNBcnIsIGdhbWVTcGFjZSwgcm93LCBjb2x1bW4sIGUsIGdhbWVSZWNvcmQsIGRpdkJvYXJkQ2hpbGRyZW5BcnJheSwgbnVtYmVyT2ZTaGlwcywgZmxhZ0NvbXB1dGVyLCBjbGlja2VkLCBpc0RpZmZpY3VsdCk7XG4gICAgICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBjbGlja2VkKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFuZGxlSGl0KHBsYXllcnNBcnIsIGdhbWVTcGFjZSwgcm93LCBjb2x1bW4sIGUsIGdhbWVSZWNvcmQsIGRpdkJvYXJkQ2hpbGRyZW5BcnJheSwgbnVtYmVyT2ZTaGlwcywgZmxhZ0NvbXB1dGVyLCBjbGlja2VkRXZlbnRGdW5jdGlvbiwgaXNEaWZmaWN1bHQpIHtcbiAgICAvLyBkaXNhYmxlIGhpZ2hsaWdodEF4aXNFdmVudFxuICAgIGhpZ2hsaWdodEF4aXMoZGl2Qm9hcmRDaGlsZHJlbkFycmF5W2NvbHVtbiArIHJvdyAqIE1hdGguc3FydChkaXZCb2FyZENoaWxkcmVuQXJyYXkubGVuZ3RoKV0sIGZhbHNlKTtcbiAgICBkaXZCb2FyZENoaWxkcmVuQXJyYXkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoaWdobGlnaHRBeGlzRXZlbnQpO1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBoaWdobGlnaHRBeGlzRXZlbnQpO1xuICAgIH0pO1xuICAgIGJsaW5rVGFyZ2V0KGRpdkJvYXJkQ2hpbGRyZW5BcnJheSwgcm93LCBjb2x1bW4pO1xuICAgIGNvbnN0IHNoaXBIaXQgPSByZWdpc3RlckhpdChwbGF5ZXJzQXJyLCBnYW1lU3BhY2UudHVybiwgcm93LCBjb2x1bW4sIGUudGFyZ2V0LCBnYW1lUmVjb3JkW2dhbWVTcGFjZS50dXJuXSk7XG4gICAgaWYgKHNoaXBIaXQgJiYgaXNTaGlwU3VuayhwbGF5ZXJzQXJyW2dhbWVTcGFjZS50dXJuXS5nYW1lYm9hcmQsIHJvdywgY29sdW1uKSlcbiAgICAgICAgZHJhd1NoaXBTdW5rKHBsYXllcnNBcnIsIHJvdywgY29sdW1uLCBnYW1lU3BhY2UudHVybik7XG4gICAgZ2FtZVJlY29yZFtnYW1lU3BhY2UudHVybl0ubW92ZXMucHVzaChbcm93LCBjb2x1bW5dKTtcbiAgICBnYW1lU3BhY2UudHVybiA9IDE7XG4gICAgaWYgKHBsYXllcnNBcnJbMF0uZ2FtZWJvYXJkLmFyZVNoaXBzTGVmdCgpID09PSBmYWxzZSkge1xuICAgICAgICBkaXNhYmxlRXZlbnRMaXN0ZW5lcnMoY2xpY2tlZEV2ZW50RnVuY3Rpb24pO1xuICAgICAgICBlbmRHYW1lKGdhbWVTcGFjZS50dXJuLCBwbGF5ZXJzQXJyLCBudW1iZXJPZlNoaXBzLCB0cnVlKTtcbiAgICB9IGVsc2VcbiAgICAgICAgY29tcHV0ZXJUdXJuKGZsYWdDb21wdXRlciwgZ2FtZVNwYWNlLCBwbGF5ZXJzQXJyLCBnYW1lUmVjb3JkLCBkaXZCb2FyZENoaWxkcmVuQXJyYXksIG51bWJlck9mU2hpcHMsIGNsaWNrZWRFdmVudEZ1bmN0aW9uLCBpc0RpZmZpY3VsdCk7XG59XG5cbmZ1bmN0aW9uIGRpc2FibGVFdmVudExpc3RlbmVycyhldmVudEZ1bmN0aW9uKSB7XG4gICAgY29uc3QgZGl2Qm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmJvYXJkJyk7XG4gICAgY29uc3QgZGl2Qm9hcmRDaGlsZHJlbkFycmF5ID0gWy4uLmRpdkJvYXJkc1sxXS5jaGlsZHJlbl07XG4gICAgZGl2Qm9hcmRDaGlsZHJlbkFycmF5LmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZXZlbnRGdW5jdGlvbik7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhpZ2hsaWdodEF4aXNFdmVudCk7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZ2hsaWdodEF4aXNFdmVudCk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0LXRhcmdldCcpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzaW1wbGVyTG9vcHMoY29vcmRpbmF0ZXNUb1RyYXZlbCwgY2VsbEFycmF5LCBkZWxheSkge1xuICAgIGNvbnN0IHNpemUgPSBNYXRoLnNxcnQoY2VsbEFycmF5Lmxlbmd0aCk7XG4gICAgY29vcmRpbmF0ZXNUb1RyYXZlbC5mb3JFYWNoKChjb29yZGluYXRlLCBpbmRleCkgPT4ge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGluZGV4ID4gMClcbiAgICAgICAgICAgICAgICBoaWdobGlnaHRBeGlzKGNlbGxBcnJheVtjb29yZGluYXRlc1RvVHJhdmVsW2luZGV4IC0gMV1bMV0gKyBjb29yZGluYXRlc1RvVHJhdmVsW2luZGV4IC0gMV1bMF0gKiBzaXplXSwgZmFsc2UpO1xuICAgICAgICAgICAgaGlnaGxpZ2h0QXhpcyhjZWxsQXJyYXlbY29vcmRpbmF0ZVsxXSArIGNvb3JkaW5hdGVbMF0gKiBzaXplXSk7XG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IGNvb3JkaW5hdGVzVG9UcmF2ZWwubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGhpZ2hsaWdodEF4aXMoY2VsbEFycmF5W2Nvb3JkaW5hdGVbMV0gKyBjb29yZGluYXRlWzBdICogc2l6ZV0sIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgYmxpbmtUYXJnZXQoY2VsbEFycmF5LCBjb29yZGluYXRlWzBdLCBjb29yZGluYXRlWzFdKTtcbiAgICAgICAgICAgICAgICB9LCBkZWxheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIGRlbGF5ICogaW5kZXgpO1xuICAgIH1cbiAgICApO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlclR1cm4oZmxhZ0NvbXB1dGVyLCBnYW1lU3BhY2UsIHBsYXllcnNBcnIsIGdhbWVSZWNvcmQsIGRpdkJvYXJkQ2hpbGRyZW5BcnJheSwgbnVtYmVyT2ZTaGlwcywgY2xpY2tlZEV2ZW50RnVuY3Rpb24sIGlzUmFuZG9tID0gZmFsc2UpIHtcbiAgICBpZiAoZmxhZ0NvbXB1dGVyID09PSB0cnVlICYmIGdhbWVTcGFjZS50dXJuID09PSAxICYmIGdhbWVTcGFjZS5jb21wdXRlcklzUGxheWluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZGl2Qm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmJvYXJkJyk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnZXRCb2FyZFNpemUocGxheWVyc0FyclswXSk7XG4gICAgICAgIGdhbWVTcGFjZS5jb21wdXRlcklzUGxheWluZyA9IHRydWU7XG4gICAgICAgIGVuYWJsZUNvbXB1dGVyVGhpbmtpbmdEaXYodHJ1ZSk7XG4gICAgICAgIGNvbnN0IHByb2dyYW1tYWJsZURlbGF5ID0gNTA7XG4gICAgICAgIGxldCB2YWxpZFBvc2l0aW9uID0gZmFsc2U7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3aGlsZSAodmFsaWRQb3NpdGlvbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBbcm93LCBjb2x1bW5dID0gY29tcHV0ZXJQbGF5cyhwbGF5ZXJzQXJyWzFdLmdhbWVib2FyZC5tYXAubGVuZ3RoLCBnYW1lUmVjb3JkW2dhbWVTcGFjZS50dXJuXSwgaXNSYW5kb20pO1xuICAgICAgICAgICAgICAgIHZhbGlkUG9zaXRpb24gPSBjaGVja1ZhbGlkUG9zaXRpb24ocGxheWVyc0FyciwgZ2FtZVNwYWNlLnR1cm4sIHJvdywgY29sdW1uKVxuICAgICAgICAgICAgICAgIGlmICh2YWxpZFBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGdhbWVSZWNvcmRbZ2FtZVNwYWNlLnR1cm5dLm1vdmVzLnB1c2goW3JvdywgY29sdW1uXSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvb3JkaW5hdGVzVG9UcmF2ZWwgPSBnZXRMYXVuY2hpbmdDb29yZGluYXRlcyhbcm93LCBjb2x1bW5dLCBzaXplKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGl2Qm9hcmRDaGlsZHJlbkNvbXB1dGVyQXJyYXkgPSBbLi4uZGl2Qm9hcmRzWzBdLmNoaWxkcmVuXTtcbiAgICAgICAgICAgICAgICAgICAgc2ltcGxlckxvb3BzKGNvb3JkaW5hdGVzVG9UcmF2ZWwsIGRpdkJvYXJkQ2hpbGRyZW5Db21wdXRlckFycmF5LCBwcm9ncmFtbWFibGVEZWxheSk7XG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBnYW1lU3BhY2UuY29tcHV0ZXJJc1BsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTcGFjZS50dXJuID0gKGdhbWVTcGFjZS50dXJuID09PSAwID8gMSA6IDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgZW5hYmxlQ29tcHV0ZXJUaGlua2luZ0RpdihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBibGlua1RhcmdldChkaXZCb2FyZENoaWxkcmVuQ29tcHV0ZXJBcnJheSwgcm93LCBjb2x1bW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGl2Qm9hcmRDaGlsZHJlbkFycmF5LmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoaWdobGlnaHRBeGlzRXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZ2hsaWdodEF4aXNFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9LCBwcm9ncmFtbWFibGVEZWxheSAqIGNvb3JkaW5hdGVzVG9UcmF2ZWwubGVuZ3RoICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBkaXZCb2FyZHNbMF0uY2hpbGRyZW5bcm93ICogc2l6ZSArIGNvbHVtbl07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHR1cm4gPSBnYW1lU3BhY2UudHVybjtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZWdpc3RlckhpdChwbGF5ZXJzQXJyLCB0dXJuLCByb3csIGNvbHVtbiwgY2VsbCwgZ2FtZVJlY29yZFt0dXJuXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lUmVjb3JkW3R1cm5dLm5vblN1bmtTaGlwc0hpdFBvc2l0aW9uLnB1c2goW3JvdywgY29sdW1uXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU2hpcFN1bmsocGxheWVyc0Fyclt0dXJuXS5nYW1lYm9hcmQsIHJvdywgY29sdW1uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lUmVjb3JkW3R1cm5dLnJlbW92ZVN1bmtTaGlwKGdldFN1bmtTaGlwUG9zaXRpb25zKHBsYXllcnNBcnJbdHVybl0uZ2FtZWJvYXJkLCByb3csIGNvbHVtbikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkcmF3U2hpcFN1bmsocGxheWVyc0Fyciwgcm93LCBjb2x1bW4sIHR1cm4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnYW1lUmVjb3JkW3R1cm5dLnNlYXJjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyc0FycltnYW1lU3BhY2UudHVybiA/IDAgOiAxXS5nYW1lYm9hcmQuYXJlU2hpcHNMZWZ0KCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVFdmVudExpc3RlbmVycyhjbGlja2VkRXZlbnRGdW5jdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVuZEdhbWUoZ2FtZVNwYWNlLnR1cm4sIHBsYXllcnNBcnIsIG51bWJlck9mU2hpcHMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sIHByb2dyYW1tYWJsZURlbGF5ICogKGNvb3JkaW5hdGVzVG9UcmF2ZWwubGVuZ3RoICsgMSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgMTAwKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGVuYWJsZUNvbXB1dGVyVGhpbmtpbmdEaXYoZmxhZykge1xuICAgIGNvbnN0IGRpdlNlcGFyYXRvcnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNlcGFyYXRvcicpXTtcbiAgICBpZiAoZmxhZylcbiAgICAgICAgZGl2U2VwYXJhdG9yc1sxXS50ZXh0Q29udGVudCA9ICdDb21wdXRlciBpcyBUSElOS0lORyc7XG4gICAgZWxzZVxuICAgICAgICBkaXZTZXBhcmF0b3JzWzFdLnRleHRDb250ZW50ID0gJyc7XG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUodHVybiwgcGxheWVyc0FyciwgbnVtYmVyT2ZTaGlwcywgZmxhZ1VzZXJXaW4pIHtcbiAgICBjaGFuZ2VHYW1lVGl0bGUoZmxhZ1VzZXJXaW4gPyAyIDogMyk7XG4gICAgc2V0VXBSZXBsYXlHYW1lKHBsYXllcnNBcnIsIG51bWJlck9mU2hpcHMsIGdldFdpbm5lckRpdigxIC0gdHVybiksIGZsYWdVc2VyV2luKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2lubmVyRGl2KHdpbm5lckluZGV4KSB7XG4gICAgY29uc3QgZGl2V2lubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3Qgc3Bhbk5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgY29uc3Qgc3BhbkFycmF5ID0gW2RvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXTtcbiAgICBjb25zdCB3aW5uZXJOYW1lID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXJzLW5hbWUnKV1bd2lubmVySW5kZXhdLnRleHRDb250ZW50O1xuICAgIGRpdldpbm5lci5jbGFzc0xpc3QuYWRkKCd3aW5uZXInKTtcbiAgICBzcGFuTmFtZS50ZXh0Q29udGVudCA9IGAke3dpbm5lck5hbWV9IGA7XG4gICAgc3BhbkFycmF5WzBdLnRleHRDb250ZW50ID0gJ1BsYXllciAnO1xuICAgIHNwYW5BcnJheVsxXS50ZXh0Q29udGVudCA9ICdnZXRzIHRoZSBjb21wZXRpdGlvbiEnO1xuICAgIGRpdldpbm5lci5hcHBlbmRDaGlsZChzcGFuQXJyYXlbMF0pO1xuICAgIGRpdldpbm5lci5hcHBlbmRDaGlsZChzcGFuTmFtZSk7XG4gICAgZGl2V2lubmVyLmFwcGVuZENoaWxkKHNwYW5BcnJheVsxXSk7XG4gICAgcmV0dXJuIGRpdldpbm5lcjtcbn1cblxuZnVuY3Rpb24gc2V0VXBSZXBsYXlHYW1lKHBsYXllcnNBcnIsIG51bWJlck9mU2hpcHMsIHdpbm5lckRpdikge1xuICAgIGNvbnN0IGRpdlNoaXBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtc2VsZWN0aW9uJyk7XG4gICAgY29uc3QgcmVwbGF5QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVwbGF5QnV0dG9uLnRleHRDb250ZW50ID0gJ1BsYXkgYWdhaW4nO1xuICAgIHJlcGxheUJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgcmVwbGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICB0b2dnbGVIaWREaWZmaWN1bHR5RGl2KCk7XG4gICAgICAgIG1vZGlmeUNvbXB1dGVyVGV4dCgpO1xuICAgICAgICBjaGFuZ2VHYW1lVGl0bGUoMCk7XG4gICAgICAgIHNldFVwUGxheUJ1dHRvbnMocGxheWVyc0FyciwgbnVtYmVyT2ZTaGlwcyk7XG4gICAgICAgIHJlcGxheUJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgd2lubmVyRGl2LnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIGRpdlNoaXBzLmFwcGVuZENoaWxkKHdpbm5lckRpdik7XG4gICAgZGl2U2hpcHMuYXBwZW5kQ2hpbGQocmVwbGF5QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gc2V0VXBQbGF5QnV0dG9ucyhwbGF5ZXJzLCBuU2hpcHMpIHtcbiAgICByZXN0YXJ0UGxheWVyc0dyaWQocGxheWVycyk7XG4gICAgY29uc3QgZGl2QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXNlbGVjdGlvbicpO1xuICAgIGNyZWF0ZVBsYXlCdXR0b25zKGRpdkJ1dHRvbnMsIHBsYXllcnMsIG5TaGlwcyk7XG4gICAgcmFuZG9tUG9zaXRpb25TdGFydChwbGF5ZXJzLCBuU2hpcHMpO1xuICAgIHNldFVwTWFudWFsUG9zaXRpb24ocGxheWVycywgblNoaXBzKTtcbiAgICBzdGFydEdhbWUocGxheWVycywgdHJ1ZSwgblNoaXBzKTtcbiAgICBkaXNhYmxlU3RhcnRCdXR0b24odHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVBsYXlCdXR0b25zKGNvbnRhaW5lcikge1xuICAgIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcmVzZXRCdXR0b24uaWQgPSAncmFuZG9taXplLXBsYWNlbWVudCc7XG4gICAgcmVzZXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNvbnN0IG1hbnVhbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG1hbnVhbEJ1dHRvbi5pZCA9ICdtYW51YWwtcGxhY2VtZW50JztcbiAgICBtYW51YWxCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgc3RhcnRCdXR0b24uaWQgPSAnc3RhcnQtZ2FtZSc7XG4gICAgc3RhcnRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgIGNvbnRhaW5lci5hcHBlbmQocmVzZXRCdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmQobWFudWFsQnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHN0YXJ0QnV0dG9uKTtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJIaXQocGxheWVyc0FyciwgdHVybiwgcm93LCBjb2x1bW4sIGNlbGwsIHBsYXllcikge1xuICAgIGxldCBzaGlwV2FzSGl0ID0gZmFsc2U7XG4gICAgcGxheWVyc0Fyclt0dXJuXS5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhbcm93LCBjb2x1bW5dKTtcbiAgICBpZiAocGxheWVyc0Fyclt0dXJuXS5nYW1lYm9hcmQucG9zaXRpb25zVmlzaXRlZFtyb3ddW2NvbHVtbl0gPT09IHRydWUpIHtcbiAgICAgICAgc2hpcFdhc0hpdCA9IHRydWU7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0LXRhcmdldCcpO1xuICAgICAgICBwbGF5ZXIuaGl0cy5wdXNoKHRydWUpO1xuICAgICAgICBpZiAodHVybiA9PT0gMSkge1xuICAgICAgICAgICAgcGxheWVyLmxhc3RIaXRJbmRleCA9IHBsYXllci5tb3Zlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgcGxheWVyLnNlYXJjaGluZyA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbm8taGl0Jyk7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0LXRhcmdldCcpO1xuICAgICAgICBwbGF5ZXIuaGl0cy5wdXNoKGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNoaXBXYXNIaXQ7XG59XG5cbmZ1bmN0aW9uIGNvbG9yUGxheWVyU2hpcHMoc2hpcFBvc2l0aW9ucywgaSkge1xuICAgIGkgPSBpID09PSAwID8gMSA6IDBcbiAgICBjb25zdCBnYW1lQm9hcmRQbGF5ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuYm9hcmQnKTtcbiAgICBzaGlwUG9zaXRpb25zLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGdhbWVCb2FyZFBsYXllcltpXS5jaGlsZHJlbltwb3NpdGlvblswXSAqIDEwICsgcG9zaXRpb25bMV1dLmNsYXNzTGlzdC5hZGQoJ2h1bWFuUGxheWVyJyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIG1vZGlmeUNvbXB1dGVyVGV4dChpc0Vhc3kpIHtcbiAgICBjb25zdCBjb21wdXRlck5hbWVEaXYgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcnMtbmFtZScpXVsxXTtcbiAgICBsZXQgdGV4dERpZmZpY3VsdHk7XG4gICAgaWYgKGlzRWFzeSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICB0ZXh0RGlmZmljdWx0eSA9ICcnO1xuICAgIGVsc2VcbiAgICAgICAgdGV4dERpZmZpY3VsdHkgPSBpc0Vhc3kgPyAnIChlYXN5KScgOiAnIChoYXJkKSdcbiAgICBjb21wdXRlck5hbWVEaXYudGV4dENvbnRlbnQgPSBgQ09NUFVURVIke3RleHREaWZmaWN1bHR5fWA7XG59XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXBzJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKGJvYXJkU2l6ZSkge1xuICAgICAgICB0aGlzLnNpemUgPSBib2FyZFNpemU7XG4gICAgICAgIHRoaXMubWFwID0gdGhpcy5pbml0aWFsaXplQXJyKGJvYXJkU2l6ZSk7XG4gICAgICAgIHRoaXMucG9zaXRpb25zVmlzaXRlZCA9IHRoaXMuaW5pdGlhbGl6ZUFycihib2FyZFNpemUpO1xuICAgIH1cblxuICAgIGluaXRpYWxpemVBcnIoYm9hcmRTaXplKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkU2l6ZTsgKytpKVxuICAgICAgICAgICAgYXJyLnB1c2gobmV3IEFycmF5KGJvYXJkU2l6ZSkpO1xuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH1cblxuICAgIGFkZFNoaXAocG9zaXRpb24pIHtcbiAgICAgICAgaWYgKCFjaGVja1ZhbGlkQ29vcmRpbmF0ZXMocG9zaXRpb24sIHRoaXMubWFwKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgLy8gV2UgYXNzdW1lIHRoZSBzaGlwcyBhcmUgY29tcGxldGVseSBzdHJhaWdodFxuICAgICAgICAvLyBUaGUgZmlyc3QgZWxlbWVudCBvZiBwb3NpdGlvbiBpcyB0aGUgbW9zdCBsZWZ0L2JvdHRvbVxuICAgICAgICBjb25zdCB4TGVuZ3RoID0gcG9zaXRpb25bcG9zaXRpb24ubGVuZ3RoIC0gMV1bMF0gLSBwb3NpdGlvblswXVswXTtcbiAgICAgICAgY29uc3QgeUxlbmd0aCA9IHBvc2l0aW9uW3Bvc2l0aW9uLmxlbmd0aCAtIDFdWzFdIC0gcG9zaXRpb25bMF1bMV07XG4gICAgICAgIGxldCBzaGlwTGVuZ3RoID0gTWF0aC5hYnMoeExlbmd0aCB8fCB5TGVuZ3RoKTtcbiAgICAgICAgY29uc3QgbmV3U2hpcCA9IG5ldyBTaGlwKHNoaXBMZW5ndGggKyAxKTtcbiAgICAgICAgcG9zaXRpb24uZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5tYXBbY29vcmRpbmF0ZVswXV1bY29vcmRpbmF0ZVsxXV0gPSBuZXdTaGlwO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlcykge1xuICAgICAgICAvLyBsZXRzIGNoZWNrIGlmIHRoZSBwb3NpdGlvbiBoYXMgYmVlbiB2aXNpdGVkXG4gICAgICAgIGlmICh0aGlzLnBvc2l0aW9uc1Zpc2l0ZWRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXBbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXS5oaXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1Zpc2l0ZWRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2VcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1Zpc2l0ZWRbY29vcmRpbmF0ZXNbMF1dW2Nvb3JkaW5hdGVzWzFdXSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXJlU2hpcHNMZWZ0KCkge1xuICAgICAgICBmb3IgKGxldCByb3cgPSAwOyByb3cgPCB0aGlzLnNpemU7ICsrcm93KVxuICAgICAgICAgICAgZm9yIChsZXQgY29sdW1uID0gMDsgY29sdW1uIDwgdGhpcy5zaXplOyArK2NvbHVtbikge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hcFtyb3ddW2NvbHVtbl0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucG9zaXRpb25zVmlzaXRlZFtyb3ddW2NvbHVtbl0gIT09IHRydWUpXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2hlY2tWYWxpZENvb3JkaW5hdGVzKGNvb3JkaW5hdGVzLCBtYXApIHtcbiAgICAvLyBjaGVjayB0aGF0IHRoZSBpbnB1dCBhcmUgbnVtYmVyc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRpbmF0ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjb29yZGluYXRlc1tpXVswXSAhPT0gJ251bWJlcicgfHwgdHlwZW9mIGNvb3JkaW5hdGVzW2ldWzBdICE9PSAnbnVtYmVyJylcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKG1hcFtjb29yZGluYXRlc1tpXVswXV0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBlbHNlIGlmIChtYXBbY29vcmRpbmF0ZXNbaV1bMF1dW2Nvb3JkaW5hdGVzW2ldWzFdXSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImltcG9ydCBQbGF5ZXIgZnJvbSAnLi9wbGF5ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRTaGlwVG9QbGF5ZXIocGxheWVyLCBwb3NpdGlvbnMpIHtcbiAgICBwbGF5ZXIuZ2FtZWJvYXJkLmFkZFNoaXAocG9zaXRpb25zKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUdhbWVSZWNvcmQoKSB7XG4gICAgY29uc3QgaHVtYW4gPSB7XG4gICAgICAgIG1vdmVzOiBbXSxcbiAgICAgICAgaGl0czogW10sXG4gICAgfTtcbiAgICBjb25zdCBjb21wdXRlciA9IHtcbiAgICAgICAgbW92ZXM6IFtdLFxuICAgICAgICBub25TdW5rU2hpcHNIaXRQb3NpdGlvbjogW10sXG4gICAgICAgIGhpdHM6IFtdLFxuICAgICAgICBzZWFyY2hpbmc6IGZhbHNlLFxuICAgICAgICBsYXN0SGl0SW5kZXg6IDAsXG4gICAgICAgIHJlbW92ZVN1bmtTaGlwKHNoaXBTdW5rQ29vcmRpbmF0ZXMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29vcmRpbmF0ZSBvZiBzaGlwU3Vua0Nvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMubm9uU3Vua1NoaXBzSGl0UG9zaXRpb24ubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubm9uU3Vua1NoaXBzSGl0UG9zaXRpb25baV1bMF0gPT09IGNvb3JkaW5hdGVbMF0gJiYgdGhpcy5ub25TdW5rU2hpcHNIaXRQb3NpdGlvbltpXVsxXSA9PT0gY29vcmRpbmF0ZVsxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub25TdW5rU2hpcHNIaXRQb3NpdGlvbi5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgcmV0dXJuIFtodW1hbiwgY29tcHV0ZXJdO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUGxheWVycyhwbGF5ZXJzLCBzaXplKSB7XG4gICAgcGxheWVycy5zcGxpY2UoMCwgcGxheWVycy5sZW5ndGgpO1xuICAgIGNvbnN0IHBsYXllck9uZSA9IG5ldyBQbGF5ZXIoc2l6ZSk7XG4gICAgY29uc3QgcGxheWVyVHdvID0gbmV3IFBsYXllcihzaXplKTtcbiAgICBwbGF5ZXJzLnB1c2gocGxheWVyT25lKTtcbiAgICBwbGF5ZXJzLnB1c2gocGxheWVyVHdvKTtcbn1cbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXllciB7XG4gICAgY29uc3RydWN0b3Ioc2l6ZSwgaXNIdW1hbiA9IHRydWUpIHtcbiAgICAgICAgdGhpcy5nYW1lYm9hcmQgPSBuZXcgR2FtZWJvYXJkKHNpemUpO1xuICAgICAgICB0aGlzLmh1bWFuID0gaXNIdW1hbjtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTaGlwIHtcbiAgICAjbGVuZ3RoXG4gICAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuI2xlbmd0aCA9IGxlbmd0aDtcbiAgICB9XG5cbiAgICBoaXQoKSB7XG4gICAgICAgIHRoaXMuI2xlbmd0aCAtPSAxO1xuICAgIH1cblxuICAgIGdldCBsZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNsZW5ndGg7XG4gICAgfVxuXG4gICAgaXNTdW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jbGVuZ3RoID09PSAwID8gdHJ1ZSA6IGZhbHNlO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRVcFBsYXllck5hbWUoY2FsbGJhY2tEaXNhYmxlQnV0dG9ucykge1xuICAgIGNvbnN0IGNvbnRhaW5lck5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnMtY29udGFpbmVyJyk7XG4gICAgc2V0VXBEaXZGb3JtKGNvbnRhaW5lck5hbWVzLCBjYWxsYmFja0Rpc2FibGVCdXR0b25zKTtcbn1cblxuZnVuY3Rpb24gc2V0VXBEaXZGb3JtKGNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBkaXZDb250YWluZXJGb3JtUGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkNvbnRhaW5lckZvcm1QbGF5ZXJOYW1lLmNsYXNzTGlzdC5hZGQoJ2NvbnRhaW5lci1mb3JtJyk7XG4gICAgc2V0VXBEaXZDb250YWluZXJGb3JtTmFtZShkaXZDb250YWluZXJGb3JtUGxheWVyTmFtZSwgY2FsbGJhY2spO1xuICAgIGNvbnRhaW5lci5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgZGl2Q29udGFpbmVyRm9ybVBsYXllck5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRVcERpdkNvbnRhaW5lckZvcm1OYW1lKGRpdkNvbnRhaW5lciwgY2FsbGJhY2spIHtcbiAgICBjb25zdCBmb3JtUGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbiAgICBzZXRVcEZvcm0oZm9ybVBsYXllck5hbWUpO1xuICAgIGRpdkNvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtUGxheWVyTmFtZSk7XG4gICAgZm9ybVBsYXllck5hbWUuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgZm9ybUV2ZW50KGUsIGNhbGxiYWNrKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0UGxheWVyTmFtZSgpIHtcbiAgICBjb25zdCBpbnB1dFBsYXllciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXItbmFtZS10ZXh0Jyk7XG4gICAgY29uc3QgaW5wdXRQbGF5ZXJOYW1lID0gaW5wdXRQbGF5ZXIudmFsdWU7XG4gICAgcmV0dXJuIGlucHV0UGxheWVyTmFtZTtcbn1cblxuZnVuY3Rpb24gZm9ybUV2ZW50KGUsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZm9ybSA9IGUudGFyZ2V0O1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBwYXJlbnRFbGVtZW50ID0gZS50YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICBjb25zdCBwbGF5ZXJOYW1lID0gZ2V0UGxheWVyTmFtZSgpO1xuICAgIGlmIChpc1ZhbGlkSW5wdXQocGxheWVyTmFtZSkpIHtcbiAgICAgICAgc2V0UGxheWVyTmFtZShwbGF5ZXJOYW1lKTtcbiAgICAgICAgcGFyZW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgY2FsbGJhY2soZmFsc2UsIHRydWUpO1xuICAgICAgICBjaGFuZ2VHYW1lVGl0bGUoMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hvd0Vycm9yTWVzc2FnZUlucHV0KGZvcm0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUdhbWVUaXRsZShzdGF0ZSkge1xufVxuXG5mdW5jdGlvbiBpc1ZhbGlkSW5wdXQobmFtZSkge1xuICAgIGlmIChuYW1lLmxlbmd0aCA+IDApXG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzaG93RXJyb3JNZXNzYWdlSW5wdXQoZm9ybSkge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZXJyb3InKSlcbiAgICAgICAgcmV0dXJuXG4gICAgY29uc3QgZGl2RXJyb3JNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2RXJyb3JNZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ2Vycm9yJyk7XG4gICAgZGl2RXJyb3JNZXNzYWdlLnRleHRDb250ZW50ID0gJ1BsZWFzZSBmaXggeW91ciBpbnB1dCc7XG4gICAgY29uc3QgZm9ybUxhc3RDaGlsZCA9IGZvcm0uY2hpbGRyZW5bZm9ybS5jaGlsZHJlbi5sZW5ndGggLSAxXTtcbiAgICBmb3JtTGFzdENoaWxkLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCBkaXZFcnJvck1lc3NhZ2UpO1xufVxuXG5mdW5jdGlvbiBzZXRVcEZvcm0oZm9ybSkge1xuICAgIGZvcm0uaWQgPSAncGxheWVyLWRhdGEnO1xuICAgIGNvbnN0IGRpdlBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBpbnB1dFBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHNldFVwSW5wdXRQbGF5ZXJOYW1lKGlucHV0UGxheWVyTmFtZSk7XG4gICAgc2V0VXBEaXZQbGF5ZXJOYW1lKGRpdlBsYXllck5hbWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZGl2UGxheWVyTmFtZSk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dFBsYXllck5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRVcERpdlBsYXllck5hbWUoZGl2UGxheWVyTmFtZSkge1xuICAgIGNvbnN0IHNwYW5QbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGNvbnN0IGlucHV0UGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXRQbGF5ZXJOYW1lLnBsYWNlaG9sZGVyID0gJ1lvdXIgcGxheWVyIG5hbWUnO1xuICAgIGlucHV0UGxheWVyTmFtZS5pZCA9ICdwbGF5ZXItbmFtZS10ZXh0JztcbiAgICBzcGFuUGxheWVyTmFtZS50ZXh0Q29udGVudCA9ICdQbGF5ZXIgbmFtZTogJztcbiAgICBkaXZQbGF5ZXJOYW1lLmFwcGVuZENoaWxkKHNwYW5QbGF5ZXJOYW1lKTtcbiAgICBkaXZQbGF5ZXJOYW1lLmFwcGVuZENoaWxkKGlucHV0UGxheWVyTmFtZSk7XG59XG5cbmZ1bmN0aW9uIHNldFVwSW5wdXRQbGF5ZXJOYW1lKGlucHV0U3VibWl0KSB7XG4gICAgaW5wdXRTdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuICAgIGlucHV0U3VibWl0LnZhbHVlID0gJ1NlbmQnO1xufVxuXG5mdW5jdGlvbiBzZXRQbGF5ZXJOYW1lKG5hbWUpIHtcbiAgICBjb25zdCBkaXZOYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnMtbmFtZScpO1xuICAgIGRpdk5hbWUudGV4dENvbnRlbnQgPSBuYW1lO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgc3RhcnRHYW1lIGZyb20gJy4vZG9tTWFuaXB1bGF0aW9uJ1xuaW1wb3J0IHsgYmFja2dyb3VuZFdhdmVzLCBpbml0aWFsaXplV2F2ZXMgfSBmcm9tICcuL2JhY2tncm91bmQuanMnXG5jb25zdCBHQU1FQk9BUkRfU0laRSA9IDEwO1xuY29uc3QgTlVNQkVSX09GX1NISVBTID0gNDtcbmluaXRpYWxpemVXYXZlcygpO1xuYmFja2dyb3VuZFdhdmVzKCk7XG5zdGFydEdhbWUoR0FNRUJPQVJEX1NJWkUsIE5VTUJFUl9PRl9TSElQUyk7XG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==