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
    background: rgb(255, 100, 30);
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
    border-color: gold;
    background-color: lightcoral;
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
    background-color: darkblue;
    font-size: 2rem;
    user-select: none;
    display: grid;
    place-items: center;
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

.computer-state-movement {
    text-align: center;
    font-style: italic;
    font-size: 1.3rem;
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,UAAU;IACV,SAAS;IACT,sBAAsB;IACtB,sBAAsB;AAC1B;;AAEA;IACI,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,oCAAoC;IACpC,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,UAAU;IACV,8BAA8B;AAClC;;AAEA;IACI,gBAAgB;IAChB,yBAAyB;IACzB,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,6BAA6B;IAC7B,cAAc;AAClB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,6BAA6B;AACjC;;AAEA;IACI,WAAW;IACX,eAAe;IACf,uBAAuB;AAC3B;;AAEA;IACI,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,oBAAoB;IACpB,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;AACpB;;AAEA;IACI,wBAAwB;IACxB,uCAAuC;AAC3C;;AAEA;IACI,uBAAuB;IACvB,uCAAuC;AAC3C;;AAEA;IACI,kBAAkB;IAClB,4BAA4B;AAChC;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,gBAAgB;AACpB;;AAEA;IACI,UAAU;IACV,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,YAAY;IACZ,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,uBAAuB;IACvB,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,0BAA0B;IAC1B,eAAe;IACf,iBAAiB;IACjB,aAAa;IACb,mBAAmB;AACvB;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,kBAAkB;IAClB,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,kBAAkB;AACtB;;AAEA;IACI,gBAAgB;IAChB,WAAW;IACX,kBAAkB;AACtB;;AAEA;IACI,sBAAsB;AAC1B;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,uBAAuB;IACvB,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,qBAAqB;AACzB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":["body,\nhtml {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n    font-family: monospace;\n}\n\nbody {\n    background: lightgrey;\n}\n\n.players-container {\n    display: grid;\n    grid-template-columns: 1fr 100px 1fr;\n    width: max-content;\n    margin: 20px auto;\n    transform: scale(0);\n    opacity: 0;\n}\n\n.scaling {\n    transform: scale(1);\n    opacity: 1;\n    transition: all ease-in-out 1s;\n}\n\n.ocean {\n    font-weight: 900;\n    background-color: #4F42B5;\n    user-select: none;\n    font-family: serif;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    padding: 0 2px;\n}\n\n.board {\n    display: grid;\n    grid-template-columns: repeat(10, 1fr);\n    aspect-ratio: 1;\n    border: 3px solid black;\n    width: 500px;\n    background: rgb(255, 100, 30);\n}\n\n.cell {\n    width: 44px;\n    aspect-ratio: 1;\n    border: 3px solid black;\n}\n\n.player1 {\n    justify-self: right;\n}\n\n.player2 {\n    justify-self: left;\n}\n\n.players-name {\n    justify-self: center;\n    font-size: 1.5rem;\n    font-weight: 700;\n    margin-top: 20px;\n}\n\n.hit {\n    background-color: yellow;\n    transition: background-color 0.25s ease;\n}\n\n.no-hit {\n    background-color: white;\n    transition: background-color 0.25s ease;\n}\n\n.humanPlayer {\n    border-color: gold;\n    background-color: lightcoral;\n}\n\n.ship-selection {\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n    margin-top: 20px;\n}\n\n.ships-images {\n    display: flex;\n    gap: 20px;\n    justify-content: center;\n    margin-top: 20px;\n}\n\n.error {\n    color: red;\n    font-weight: 800;\n    font-size: 1.5rem;\n}\n\n.container-form {\n    display: flex;\n    justify-content: center;\n    padding: 2px;\n}\n\n#player-data {\n    padding: 5px;\n    display: flex;\n    border: 2px solid blue;\n    border-radius: 5px;\n    justify-content: center;\n    background: lightblue;\n    gap: 20px;\n}\n\n.highlight-target {\n    border-color: blue;\n}\n\n.sunk {\n    background-color: darkblue;\n    font-size: 2rem;\n    user-select: none;\n    display: grid;\n    place-items: center;\n}\n\n.transition-selected-axis {\n    transition: 0.1s ease-in-out;\n}\n\n.selected-axis {\n    background-color: magenta;\n}\n\n.game-title {\n    font-size: 50px;\n    font-weight: 900;\n    text-align: center;\n    transition: all ease-in-out 1s;\n}\n\n.winner {\n    font-size: 20px;\n    transition: all 1s;\n}\n\n.winner span:nth-child(2) {\n    font-weight: 900;\n    color: blue;\n    font-style: italic;\n}\n\nform input::placeholder {\n    font-family: monospace;\n}\n\n.difficulty {\n    display: flex;\n    margin-top: 20px;\n    justify-content: center;\n    text-align: center;\n    user-select: none;\n}\n\n.difficulty legend {\n    font-weight: 700;\n}\n\n.difficulty label {\n    margin-left: -10px;\n}\n\n.hidden {\n    display: none;\n}\n\n.individual-ship {\n    display: flex;\n    align-items: center;\n    border: 2px blue solid;\n    background: lightcyan;\n}\n\n.info {\n    margin-top: 5px;\n    text-align: center;\n    font-size: 1.4rem;\n}\n\n.computer-state-movement {\n    text-align: center;\n    font-style: italic;\n    font-size: 1.3rem;\n}\n"],"sourceRoot":""}]);
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
        cell.textContent = 'x';
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
    const divThinkingState = document.querySelector('.computer-state-movement');
    if (flag)
        divThinkingState.textContent = 'Computer is THINKING';
    else
        divThinkingState.textContent = '';
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
        cell.classList.remove('humanPlayer');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPLGlGQUFpRixVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFP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QUNBO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ3pGQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQW9CO0FBQ3FCO0FBQ3lCO0FBQ2xFO0FBQ0E7QUFDQSwrREFBZTtBQUNmLCtEQUFlO0FBQ2YsNERBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2F1eEZ1bmN0aW9ucy5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvYmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvY2FsY3VsYXRpb25GdW5jdGlvbnMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2RvbU1hbmlwdWxhdGlvbi5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvLi9zcmMvZ2FtZWJvYXJkLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9vYmplY3RzTW9kaWZpY2F0aW9uLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL3NoaXBzLmpzIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC8uL3NyYy91c2VybmFtZURPTS5qcyIsIndlYnBhY2s6Ly9vZGluLWJhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL29kaW4tYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5LFxuaHRtbCB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XG59XG5cbi5wbGF5ZXJzLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxMDBweCAxZnI7XG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xuICAgIG1hcmdpbjogMjBweCBhdXRvO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgb3BhY2l0eTogMDtcbn1cblxuLnNjYWxpbmcge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMXM7XG59XG5cbi5vY2VhbiB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEY0MkI1O1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgIGZvbnQtZmFtaWx5OiBzZXJpZjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gICAgcGFkZGluZzogMCAycHg7XG59XG5cbi5ib2FyZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbiAgICBhc3BlY3QtcmF0aW86IDE7XG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XG4gICAgd2lkdGg6IDUwMHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsIDEwMCwgMzApO1xufVxuXG4uY2VsbCB7XG4gICAgd2lkdGg6IDQ0cHg7XG4gICAgYXNwZWN0LXJhdGlvOiAxO1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xufVxuXG4ucGxheWVyMSB7XG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcbn1cblxuLnBsYXllcjIge1xuICAgIGp1c3RpZnktc2VsZjogbGVmdDtcbn1cblxuLnBsYXllcnMtbmFtZSB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4uaGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjI1cyBlYXNlO1xufVxuXG4ubm8taGl0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2U7XG59XG5cbi5odW1hblBsYXllciB7XG4gICAgYm9yZGVyLWNvbG9yOiBnb2xkO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Y29yYWw7XG59XG5cbi5zaGlwLXNlbGVjdGlvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLnNoaXBzLWltYWdlcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmVycm9yIHtcbiAgICBjb2xvcjogcmVkO1xuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5jb250YWluZXItZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycHg7XG59XG5cbiNwbGF5ZXItZGF0YSB7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYm9yZGVyOiAycHggc29saWQgYmx1ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogbGlnaHRibHVlO1xuICAgIGdhcDogMjBweDtcbn1cblxuLmhpZ2hsaWdodC10YXJnZXQge1xuICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcbn1cblxuLnN1bmsge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtibHVlO1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi50cmFuc2l0aW9uLXNlbGVjdGVkLWF4aXMge1xuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XG59XG5cbi5zZWxlY3RlZC1heGlzIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBtYWdlbnRhO1xufVxuXG4uZ2FtZS10aXRsZSB7XG4gICAgZm9udC1zaXplOiA1MHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAxcztcbn1cblxuLndpbm5lciB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHRyYW5zaXRpb246IGFsbCAxcztcbn1cblxuLndpbm5lciBzcGFuOm50aC1jaGlsZCgyKSB7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBjb2xvcjogYmx1ZTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbmZvcm0gaW5wdXQ6OnBsYWNlaG9sZGVyIHtcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xufVxuXG4uZGlmZmljdWx0eSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuLmRpZmZpY3VsdHkgbGVnZW5kIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xufVxuXG4uZGlmZmljdWx0eSBsYWJlbCB7XG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xufVxuXG4uaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4uaW5kaXZpZHVhbC1zaGlwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyOiAycHggYmx1ZSBzb2xpZDtcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGN5YW47XG59XG5cbi5pbmZvIHtcbiAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uY29tcHV0ZXItc3RhdGUtbW92ZW1lbnQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7SUFDdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG9DQUFvQztJQUNwQyxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsZUFBZTtJQUNmLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHdCQUF3QjtJQUN4Qix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsU0FBUztJQUNULGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixxQkFBcUI7SUFDckIsU0FBUztBQUNiOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5LFxcbmh0bWwge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kOiBsaWdodGdyZXk7XFxufVxcblxcbi5wbGF5ZXJzLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEwMHB4IDFmcjtcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxuXFxuLnNjYWxpbmcge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgMXM7XFxufVxcblxcbi5vY2VhbiB7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0RjQyQjU7XFxuICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgICBmb250LWZhbWlseTogc2VyaWY7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgICBwYWRkaW5nOiAwIDJweDtcXG59XFxuXFxuLmJvYXJkIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICAgIHdpZHRoOiA1MDBweDtcXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwgMTAwLCAzMCk7XFxufVxcblxcbi5jZWxsIHtcXG4gICAgd2lkdGg6IDQ0cHg7XFxuICAgIGFzcGVjdC1yYXRpbzogMTtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxufVxcblxcbi5wbGF5ZXIxIHtcXG4gICAganVzdGlmeS1zZWxmOiByaWdodDtcXG59XFxuXFxuLnBsYXllcjIge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGxlZnQ7XFxufVxcblxcbi5wbGF5ZXJzLW5hbWUge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5oaXQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4yNXMgZWFzZTtcXG59XFxuXFxuLm5vLWhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuMjVzIGVhc2U7XFxufVxcblxcbi5odW1hblBsYXllciB7XFxuICAgIGJvcmRlci1jb2xvcjogZ29sZDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRjb3JhbDtcXG59XFxuXFxuLnNoaXAtc2VsZWN0aW9uIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMjBweDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLnNoaXBzLWltYWdlcyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcbi5lcnJvciB7XFxuICAgIGNvbG9yOiByZWQ7XFxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbn1cXG5cXG4uY29udGFpbmVyLWZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnB4O1xcbn1cXG5cXG4jcGxheWVyLWRhdGEge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIGJsdWU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Ymx1ZTtcXG4gICAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4uaGlnaGxpZ2h0LXRhcmdldCB7XFxuICAgIGJvcmRlci1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnN1bmsge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrYmx1ZTtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRyYW5zaXRpb24tc2VsZWN0ZWQtYXhpcyB7XFxuICAgIHRyYW5zaXRpb246IDAuMXMgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zZWxlY3RlZC1heGlzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogbWFnZW50YTtcXG59XFxuXFxuLmdhbWUtdGl0bGUge1xcbiAgICBmb250LXNpemU6IDUwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA5MDA7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IDFzO1xcbn1cXG5cXG4ud2lubmVyIHtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XFxufVxcblxcbi53aW5uZXIgc3BhbjpudGgtY2hpbGQoMikge1xcbiAgICBmb250LXdlaWdodDogOTAwO1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5mb3JtIGlucHV0OjpwbGFjZWhvbGRlciB7XFxuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2U7XFxufVxcblxcbi5kaWZmaWN1bHR5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5kaWZmaWN1bHR5IGxlZ2VuZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcblxcbi5kaWZmaWN1bHR5IGxhYmVsIHtcXG4gICAgbWFyZ2luLWxlZnQ6IC0xMHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmluZGl2aWR1YWwtc2hpcCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlcjogMnB4IGJsdWUgc29saWQ7XFxuICAgIGJhY2tncm91bmQ6IGxpZ2h0Y3lhbjtcXG59XFxuXFxuLmluZm8ge1xcbiAgICBtYXJnaW4tdG9wOiA1cHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5jb21wdXRlci1zdGF0ZS1tb3ZlbWVudCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZnVuY3Rpb24gZ2V0U3Vua1NoaXBQb3NpdGlvbnMoZ2FtZWJvYXJkLCBpbmRleFgsIGluZGV4WSkge1xuICAgIC8vIFRoaXMgZnVuY3Rpb24gZ2V0cyBhIHN1bmsgc2hpcCBhbmQgd2lsbCByZXR1cm4gYWxsIHRoZSBnYW1lYm9hcmQgY29vcmRpbmF0ZXMgY29udGFpbmluZ1xuICAgIC8vIHRoaXMgc2hpcCBvYmplY3RcbiAgICBjb25zdCBzaGlwID0gZ2FtZWJvYXJkLm1hcFtpbmRleFhdW2luZGV4WV07XG4gICAgY29uc3Qgc3Vua1NoaXBDb29yZGluYXRlcyA9IFtdO1xuICAgIGdhbWVib2FyZC5tYXAuZm9yRWFjaCgocm93LCBpbmRleFJvdykgPT4ge1xuICAgICAgICByb3cuZm9yRWFjaCgoaXRlbSwgaW5kZXhDb2x1bW4pID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSBzaGlwKVxuICAgICAgICAgICAgICAgIHN1bmtTaGlwQ29vcmRpbmF0ZXMucHVzaChbaW5kZXhSb3csIGluZGV4Q29sdW1uXSk7XG4gICAgICAgIH0pO1xuICAgIH0pO1xuICAgIHJldHVybiBzdW5rU2hpcENvb3JkaW5hdGVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNTaGlwU3VuayhnYW1lYm9hcmQsIHJvdywgY29sdW1uKSB7XG4gICAgY29uc3Qgc2hpcCA9IGdhbWVib2FyZC5tYXBbcm93XVtjb2x1bW5dO1xuICAgIGlmIChzaGlwLmlzU3VuaygpKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXVuY2hpbmdDb29yZGluYXRlcyhjb29yZGluYXRlVG9CZUhpdCwgYm9hcmRTaXplKSB7XG4gICAgLy8gSW4gdGhpcyBmdW5jdGlvbiBhIHNlbWkgcmFuZG9tIHdhbGsgd2lsbCBiZSB1c2VkIHRvIHNpbXVsYXRlIFxuICAgIC8vIHRoYXQgdGhlIGNvbXB1dGVycyBpcyBjaG9vc2luZyBhIHBvc2l0aW9uLlxuICAgIC8vIEl0IHdpbGwgc3RhcnQgZnJvbSBvbmUgcmFuZG9tIGNvcm5lciBhbmQgdGhlbiBjaXJjdWxhdGUgYXJvdW5kIHVudGlsXG4gICAgLy8gaXQgYXJyaXZlcyB0byB0aGUgZGVzaXJlZCBjb29yZGluYXRlIHRoYXQgd2FzIHByZXZpb3VzbHkgc2VsZWN0ZWRcbiAgICAvLyBhcyB0aGUgbmV4dCBoaXRcbiAgICBjb25zdCBjb3JuZXJzQ29vcmRpbmF0ZXMgPSBbWzAsIDBdLCBbMCwgYm9hcmRTaXplIC0gMV0sIFtib2FyZFNpemUgLSAxLCAwXSwgW2JvYXJkU2l6ZSAtIDEsIGJvYXJkU2l6ZSAtIDFdXTtcbiAgICBjb25zdCBjb29yZGluYXRlc1RvVHJhdmVsID0gW107XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgY29uc3QgcmFuZG9tU3RhcnQgPSBjb3JuZXJzQ29vcmRpbmF0ZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCldO1xuICAgICAgICBpZiAocmFuZG9tU3RhcnRbMF0gPT09IGNvb3JkaW5hdGVUb0JlSGl0WzBdICYmIHJhbmRvbVN0YXJ0WzFdID09PSBjb29yZGluYXRlVG9CZUhpdFsxXSlcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgIGNvb3JkaW5hdGVzVG9UcmF2ZWwucHVzaChyYW5kb21TdGFydCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBsZXQgYXJyaXZlZERlc3RpbmF0aW9uID0gZmFsc2U7XG4gICAgbGV0IHggPSAwO1xuICAgIHdoaWxlICghYXJyaXZlZERlc3RpbmF0aW9uKSB7XG4gICAgICAgICsreDtcbiAgICAgICAgY29uc3QgbGFzdENvb3JkaW5hdGUgPSBjb29yZGluYXRlc1RvVHJhdmVsW2Nvb3JkaW5hdGVzVG9UcmF2ZWwubGVuZ3RoIC0gMV07XG4gICAgICAgIGNvbnN0IGNsb3NlclByb2JhYmlsaXR5ID0gMC44O1xuICAgICAgICBsZXQgZ2V0Q2xvc2VyRmxhZyA9IE1hdGgucmFuZG9tKCkgPCBjbG9zZXJQcm9iYWJpbGl0eSA/IDEgOiAwO1xuICAgICAgICBsZXQgcmFuZG9tQXhpcyA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIGxldCBvdGhlckF4aXMgPSBNYXRoLmFicyhyYW5kb21BeGlzIC0gMSk7XG4gICAgICAgIGNvbnN0IG5ld0Nvb3JkaW5hdGUgPSBbbGFzdENvb3JkaW5hdGVbMF0sIGxhc3RDb29yZGluYXRlWzFdXTtcbiAgICAgICAgaWYgKCFnZXRDbG9zZXJGbGFnICYmIGNvb3JkaW5hdGVzVG9UcmF2ZWwubGVuZ3RoIDwgMjApIHtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNpZ25EaXJlY3Rpb24gPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID8gLTEgOiAxO1xuICAgICAgICAgICAgICAgIGxldCBuZXdBeGlzUG9zaXRpb24gPSBsYXN0Q29vcmRpbmF0ZVtyYW5kb21BeGlzXSArIHNpZ25EaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgaWYgKG5ld0F4aXNQb3NpdGlvbiA8IDAgfHwgbmV3QXhpc1Bvc2l0aW9uID4gYm9hcmRTaXplIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICBuZXdDb29yZGluYXRlW3JhbmRvbUF4aXNdID0gbmV3QXhpc1Bvc2l0aW9uO1xuICAgICAgICAgICAgICAgIG5ld0Nvb3JkaW5hdGVbb3RoZXJBeGlzXSA9IGxhc3RDb29yZGluYXRlW290aGVyQXhpc107XG4gICAgICAgICAgICAgICAgY29vcmRpbmF0ZXNUb1RyYXZlbC5wdXNoKG5ld0Nvb3JkaW5hdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGxhc3RDb29yZGluYXRlW3JhbmRvbUF4aXNdID4gY29vcmRpbmF0ZVRvQmVIaXRbcmFuZG9tQXhpc10pXG4gICAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZVtyYW5kb21BeGlzXSA9IGxhc3RDb29yZGluYXRlW3JhbmRvbUF4aXNdIC0gMTtcbiAgICAgICAgICAgIGVsc2UgaWYgKGxhc3RDb29yZGluYXRlW3JhbmRvbUF4aXNdIDwgY29vcmRpbmF0ZVRvQmVIaXRbcmFuZG9tQXhpc10pXG4gICAgICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZVtyYW5kb21BeGlzXSA9IGxhc3RDb29yZGluYXRlW3JhbmRvbUF4aXNdICsgMTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgbmV3Q29vcmRpbmF0ZVtvdGhlckF4aXNdID0gbGFzdENvb3JkaW5hdGVbb3RoZXJBeGlzXTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGVzVG9UcmF2ZWwucHVzaChuZXdDb29yZGluYXRlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmV3Q29vcmRpbmF0ZVswXSA9PT0gY29vcmRpbmF0ZVRvQmVIaXRbMF0gJiYgbmV3Q29vcmRpbmF0ZVsxXSA9PT0gY29vcmRpbmF0ZVRvQmVIaXRbMV0pXG4gICAgICAgICAgICBhcnJpdmVkRGVzdGluYXRpb24gPSB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gY29vcmRpbmF0ZXNUb1RyYXZlbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrVmFsaWRQb3NpdGlvbihwbGF5ZXJzQXJyLCB0dXJuLCByb3csIGNvbHVtbikge1xuICAgIGlmIChwbGF5ZXJzQXJyW3R1cm5dLmdhbWVib2FyZC5wb3NpdGlvbnNWaXNpdGVkW3Jvd11bY29sdW1uXSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIGZhbHNlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaWZmaWN1bHR5KCkge1xuICAgIGNvbnN0IGlucHV0cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpXTtcbiAgICBpZiAoaW5wdXRzWzFdLmNoZWNrZWQgPT09IHRydWUpXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gdHJ1ZTtcbn1cbiIsImNvbnN0IHN0YXRlVmFsdWVzID0gW1xuICAgICAgICBgJm5ic3A7IH4gfiB+IH4gfiB+IH5gLFxuICAgICAgICBgfiB+IH4gfiB+IH4gfiB+YFxuXTtcbmNvbnN0IHdhdmVHcm91cCA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VwYXJhdG9yLm9jZWFuJykuY2hpbGRyZW5dO1xuXG5leHBvcnQgZnVuY3Rpb24gYmFja2dyb3VuZFdhdmVzKCkge1xuICAgICAgICBsZXQgc3RhdGUgPSAwO1xuICAgICAgICBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB3YXZlR3JvdXAuZm9yRWFjaCgod2F2ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2F2ZS5hcHBlbmRDaGlsZChnZXRDb25maWd1cmVkV2F2ZShzdGF0ZSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2F2ZS5yZW1vdmVDaGlsZChbLi4ud2F2ZS5jaGlsZHJlbl1bMF0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHN0YXRlID0gMSAtIHN0YXRlO1xuICAgICAgICB9LCAyNTApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVdhdmVzKCkge1xuICAgICAgICB3YXZlR3JvdXAuZm9yRWFjaCgod2F2ZSkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2F2ZUdyb3VwLmxlbmd0aCAqIDI7ICsraSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHdhdmUuYXBwZW5kQ2hpbGQoZ2V0Q29uZmlndXJlZFdhdmUoaSAlIDIpKTtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldENvbmZpZ3VyZWRXYXZlKHN0YXRlKSB7XG4gICAgICAgIGNvbnN0IGRpdldhdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2V2F2ZS5pbm5lckhUTUwgPSBzdGF0ZVZhbHVlc1tzdGF0ZV07XG4gICAgICAgIHJldHVybiBkaXZXYXZlO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzVmFsaWRTaGlwUG9zaXRpb24oc2hpcCwgYm9hcmRQbGF5ZXIxQ29vcmQpIHtcbiAgICAvLyB3aGVuIHRoZXJlIGlzIGEgbW91c2UgdXAgaXQgbmVlZHMgdG8gYmUgY2hlY2tlZCBpZiBhIGNlbGwgaXMgd2l0aGluIHRoZSBjb29yZGluYXRlc1xuICAgIC8vIHdlIGhhdmUgdG8gdGFrZSBpbnRvIGFjY291bnQgdGhlIHNpemUgb2YgdGhlIHNlbGVjdGVkIHNoaXBcbiAgICAvLyBpdHMgcm90YXRpb24gdG9vIG11c3QgYmUgdGFrZW4gaW50byBhY2NvdW50XG4gICAgLy8gaW4gdGhpcyBmdW5jdGlvbiBpbmRleFNoaXAgaXMgYWx3YXlzIGRpZmZlcmVudCBmcm9tIC0xXG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gc2hpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgcm90YXRlZDtcbiAgICBpZiAoc2hpcC5zdHlsZS50cmFuc2Zvcm0gPT09ICdyb3RhdGUoOTBkZWcpJylcbiAgICAgICAgcm90YXRlZCA9IHRydWU7XG4gICAgZWxzZVxuICAgICAgICByb3RhdGVkID0gZmFsc2U7XG4gICAgbGV0IHNoaXBTaXplID0gZ2V0U2hpcFNpemUoc2hpcENvb3JkaW5hdGVzLCByb3RhdGVkKTtcbiAgICBpZiAoYm9hcmRQbGF5ZXIxQ29vcmQubGVmdCA8IHNoaXBDb29yZGluYXRlcy5sZWZ0ICYmIHNoaXBDb29yZGluYXRlcy5sZWZ0IDwgYm9hcmRQbGF5ZXIxQ29vcmQucmlnaHQpIHtcbiAgICAgICAgaWYgKGJvYXJkUGxheWVyMUNvb3JkLnRvcCA8IHNoaXBDb29yZGluYXRlcy50b3AgJiYgc2hpcENvb3JkaW5hdGVzLnRvcCA8IGJvYXJkUGxheWVyMUNvb3JkLmJvdHRvbSlcbiAgICAgICAgICAgIGlmIChyb3RhdGVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNoaXBDb29yZGluYXRlcy50b3AgKyAoc2hpcFNpemUgLSAxKSAqIDUwIDwgYm9hcmRQbGF5ZXIxQ29vcmQuYm90dG9tKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIGlmIChzaGlwQ29vcmRpbmF0ZXMubGVmdCArIChzaGlwU2l6ZSAtIDEpICogNTAgPCBib2FyZFBsYXllcjFDb29yZC5yaWdodClcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldEJvYXJkU2l6ZShwbGF5ZXIpIHtcbiAgICByZXR1cm4gcGxheWVyLmdhbWVib2FyZC5zaXplO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TmV3U2hpcFBvc2l0aW9uKHNoaXAsIGJvYXJkUGxheWVyMUNvb3JkKSB7XG4gICAgY29uc3Qgc2hpcENvb3JkaW5hdGVzID0gc2hpcC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICBsZXQgcm90YXRlZDtcbiAgICBpZiAoc2hpcC5zdHlsZS50cmFuc2Zvcm0gPT09ICdyb3RhdGUoOTBkZWcpJylcbiAgICAgICAgcm90YXRlZCA9IHRydWU7XG4gICAgZWxzZVxuICAgICAgICByb3RhdGVkID0gZmFsc2U7XG4gICAgLy8gYXQgdGhpcyBwb2ludCB3ZSBrbm93IHRoZSBzaGlwIGlzIHdpdGhpbiBib3VuZHM7XG4gICAgLy8gdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBzaGlwIHJlcHJlc2VudCBhbGwgdGhlIGluZGV4ZXMgb2YgdGhlIGJvYXJkIHdoZXJlIHRoZSBzaGlwIHdpbGwgYmUgcGxhY2VkXG4gICAgLy8gdGhhdCBpcywgdGhhdCB3ZSBuZWVkIHRvIGhhdmUgYW4gYXJyYXkgb2YgYXJyYXlzIHdpdGggYWxsIHRoZSBwb3NpdGlvblxuICAgIC8vIHdlIGNhbiB1c2UgcGxheWVyLmdhbWVib2FkLmFkZCAuLi4gYW5kIHNldCB0aGUgY29vcmRpbmF0ZXMgbGlrZSB0aGF0XG4gICAgLy8gb2YgY291cnNlIGJlZm9yZSBhZGRpbmcgd2UgbmVlZCB0byBjaGVjayB3aGV0aGVyIG9yIG5vdCB0aGF0IGlzIHNvbWV0aGluZyB0aGF0IGlzIGFsbG93ZWRcbiAgICBjb25zdCBpbmRleGVzID0gW107XG4gICAgLy8gd2UgbmVlZCB0byBvYnRhaW4gdGhlIHNpemUgb2YgZWFjaCBzaGlwXG4gICAgbGV0IHNpemVTaGlwID0gZ2V0U2hpcFNpemUoc2hpcENvb3JkaW5hdGVzLCByb3RhdGVkKTtcbiAgICAvLyBmb3IgbG9vcCB0byBoYXZlIGFsbCB0aGUgaW5kZXhlc1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZVNoaXA7ICsraSkge1xuICAgICAgICBjb25zdCBjb29yZGluYXRlID0gW107XG4gICAgICAgIGlmIChyb3RhdGVkKSB7XG4gICAgICAgICAgICBjb29yZGluYXRlLnB1c2goTWF0aC5mbG9vcigoc2hpcENvb3JkaW5hdGVzLnRvcCAtIGJvYXJkUGxheWVyMUNvb3JkLnRvcCkgLyA1MCkgKyBpKTtcbiAgICAgICAgICAgIGNvb3JkaW5hdGUucHVzaChNYXRoLmZsb29yKChzaGlwQ29vcmRpbmF0ZXMubGVmdCAtIGJvYXJkUGxheWVyMUNvb3JkLmxlZnQpIC8gNTApKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvb3JkaW5hdGUucHVzaChNYXRoLmZsb29yKChzaGlwQ29vcmRpbmF0ZXMudG9wIC0gYm9hcmRQbGF5ZXIxQ29vcmQudG9wKSAvIDUwKSk7XG4gICAgICAgICAgICBjb29yZGluYXRlLnB1c2goTWF0aC5mbG9vcigoc2hpcENvb3JkaW5hdGVzLmxlZnQgLSBib2FyZFBsYXllcjFDb29yZC5sZWZ0KSAvIDUwKSArIGkpO1xuICAgICAgICB9XG4gICAgICAgIGluZGV4ZXMucHVzaChjb29yZGluYXRlKTtcbiAgICB9XG4gICAgcmV0dXJuIGluZGV4ZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaGlwQ29sbGlzaW9uKHBsYXllciwgcG9zaXRpb25zKSB7XG4gICAgbGV0IGlzQ29sbGlzaW9uID0gZmFsc2U7XG4gICAgcG9zaXRpb25zLmZvckVhY2goKHBvc2l0aW9uKSA9PiB7XG4gICAgICAgIGlmIChwbGF5ZXIuZ2FtZWJvYXJkLm1hcFtwb3NpdGlvblswXV1bcG9zaXRpb25bMV1dKSB7XG4gICAgICAgICAgICBpc0NvbGxpc2lvbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaXNDb2xsaXNpb247XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21Db29yZGluYXRlcyhuU2hpcHMsIHNpemUpIHtcbiAgICAvLyBSZXR1cm5zIGEgbWF0cml4IG9mIG5TaGlwcyB3aXRoIGRpZmZlcmVudCBsZW5ndGhzIHRoYXQgYXJlIG5vdCBvdmVybGFwcGluZ1xuICAgIGNvbnN0IGluaXRpYWxTaXplID0gMjtcbiAgICBjb25zdCBzaGlwQXJyYXkgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5TaGlwczsgKytpKSB7XG4gICAgICAgIHNoaXBBcnJheS5wdXNoKFtdKTtcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuU2hpcHM7ICsraSkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGluaXRpYWxTaXplICsgaTsgKytqKSB7XG4gICAgICAgICAgICBzaGlwQXJyYXlbaV0ucHVzaChbMCwgMF0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIFRoZSBmaXJzdCBsZW5ndGggaXMgMiBhbmQgdGhlbiBpbmNyZWFzZXMgYnkgMVxuICAgIC8vIFRoZSBzaGlwcyBjYW4gaGF2ZSBob3Jpem9udGFsIG9yIHZlcnRpY2FsIG9yaWVudGF0aW9uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuU2hpcHM7ICsraSkge1xuICAgICAgICBsZXQgcG9zaXRpb25WYWxpZCA9IGZhbHNlO1xuICAgICAgICBsZXQgaG9yaXpvbnRhbCA9IGdldFJhbmRvbVRydWVGYWxzZSgpO1xuICAgICAgICB3aGlsZSAocG9zaXRpb25WYWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGxldCByb3csIGNvbHVtbjtcbiAgICAgICAgICAgIHJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHNpemUpO1xuICAgICAgICAgICAgY29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSk7XG5cbiAgICAgICAgICAgIGxldCBzZWxlY3RlZERpcmVjdGlvbiA9IHJvdztcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBzaGlwIHdpbGwgYWN0dWFsbHkgZml0IHdpdGhpbiB0aGUgYm91bmRzIG9mIHRoZSBnYW1lYm9hcmRcbiAgICAgICAgICAgIGlmIChob3Jpem9udGFsKVxuICAgICAgICAgICAgICAgIHNlbGVjdGVkRGlyZWN0aW9uID0gY29sdW1uO1xuICAgICAgICAgICAgaWYgKHNlbGVjdGVkRGlyZWN0aW9uICsgaSArIGluaXRpYWxTaXplID4gc2l6ZSAtIDEpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBzaGlwIHBvc2l0aW9uIGlzIG5ldmVyIGNoZWNrIGFzIHRoZXJlIGlzIG5vIHByZXZpb3VzIHNoaXBcbiAgICAgICAgICAgICAgICAvLyBXZSBjaGVjayBpZiB0aGVyZSBhcmUgb3ZlcmxhcHBpbmdcbiAgICAgICAgICAgICAgICAvLyB3ZSBjaGVjayBhbGwgdGhlIGN1cnJlbnQgcG9zaXRpb25zIGZvciB0aGUgc2hpcHMgdGhhdCBhcmUgYWxyZWFkeSB2YWxpZGF0ZWRcbiAgICAgICAgICAgICAgICBjb25zdCB0b3RhbExlbmd0aCA9IGluaXRpYWxTaXplICsgaTtcbiAgICAgICAgICAgICAgICBsZXQgbm9Db2xsaXNpb24gPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgaTsgKytrKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoaXBBcnJheVtrXS5mb3JFYWNoKChwb3NpdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0b3RhbExlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhvcml6b250YWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uWzBdID09PSByb3cgJiYgcG9zaXRpb25bMV0gPT09IGNvbHVtbiArIGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vQ29sbGlzaW9uID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25bMF0gPT09IHJvdyArIGogJiYgcG9zaXRpb25bMV0gPT09IGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9Db2xsaXNpb24gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChrID09PSBpIC0gMSAmJiBub0NvbGxpc2lvbilcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uVmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZVxuICAgICAgICAgICAgICAgIHBvc2l0aW9uVmFsaWQgPSB0cnVlO1xuXG4gICAgICAgICAgICBpZiAocG9zaXRpb25WYWxpZCkge1xuICAgICAgICAgICAgICAgIHNoaXBBcnJheVtpXS5mb3JFYWNoKChwb3NpdGlvbiwgaWR4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChob3Jpem9udGFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblswXSA9IHJvdztcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uWzFdID0gY29sdW1uICsgaWR4O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25bMF0gPSByb3cgKyBpZHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblsxXSA9IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHNoaXBBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbXB1dGVyUGxheXMoc2l6ZSwgY29tcHV0ZXJQbGF5UmVjb3JkLCBpc1JhbmRvbSkge1xuICAgIGlmIChpc1JhbmRvbSlcbiAgICAgICAgcmV0dXJuIGNvbXB1dGVyUGxheXNSYW5kb20oc2l6ZSk7XG4gICAgaWYgKGNvbXB1dGVyUGxheVJlY29yZC5zZWFyY2hpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgIGlmIChjb21wdXRlclBsYXlSZWNvcmQubm9uU3Vua1NoaXBzSGl0UG9zaXRpb24ubGVuZ3RoID4gMClcbiAgICAgICAgICAgIHJldHVybiBnZXROZWFyYnlDb29yZGluYXRlc09sZChzaXplLCBjb21wdXRlclBsYXlSZWNvcmQpO1xuICAgICAgICBlbHNlXG4gICAgICAgICAgICByZXR1cm4gY29tcHV0ZXJQbGF5c1JhbmRvbShzaXplKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IG5ld0NvcmRzID0gZ2V0TmVhcmJ5Q29vcmRpbmF0ZXMoc2l6ZSwgY29tcHV0ZXJQbGF5UmVjb3JkKTtcbiAgICAgICAgaWYgKG5ld0NvcmRzICE9PSAtMSlcbiAgICAgICAgICAgIHJldHVybiBuZXdDb3JkcztcbiAgICAgICAgZWxzZSBpZiAoY29tcHV0ZXJQbGF5UmVjb3JkLm5vblN1bmtTaGlwc0hpdFBvc2l0aW9uLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gZ2V0TmVhcmJ5Q29vcmRpbmF0ZXNPbGQoc2l6ZSwgY29tcHV0ZXJQbGF5UmVjb3JkKTtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgcmV0dXJuIGNvbXB1dGVyUGxheXNSYW5kb20oc2l6ZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXROZWFyYnlDb29yZGluYXRlc09sZChzaXplLCBjb21wdXRlclJlY29yZCkge1xuICAgIGNvbnN0IHBvc3NpYmxlUG9zID0gW1stMSwgMF0sIFswLCAtMV0sIFsxLCAwXSwgWzAsIDFdXTtcbiAgICBjb25zdCBwcmV2aW91c01vdmVzID0gY29tcHV0ZXJSZWNvcmQubW92ZXM7XG4gICAgbGV0IGF2YWlsYWJsZU1vdmU7XG4gICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb21wdXRlclJlY29yZC5ub25TdW5rU2hpcHNIaXRQb3NpdGlvbi5sZW5ndGg7ICsraikge1xuICAgICAgICBjb25zdCBsYXN0SGl0UG9zaXRpb24gPSBjb21wdXRlclJlY29yZC5ub25TdW5rU2hpcHNIaXRQb3NpdGlvbltqXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NzaWJsZVBvcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgY29uc3QgdGVtcFBvc2l0aW9uID0gW2xhc3RIaXRQb3NpdGlvblswXSArIHBvc3NpYmxlUG9zW2ldWzBdLCBsYXN0SGl0UG9zaXRpb25bMV0gKyBwb3NzaWJsZVBvc1tpXVsxXV07XG4gICAgICAgICAgICBpZiAoKHRlbXBQb3NpdGlvblswXSA8IDAgfHwgdGVtcFBvc2l0aW9uWzBdID4gc2l6ZSAtIDEpIHx8ICh0ZW1wUG9zaXRpb25bMV0gPCAwIHx8IHRlbXBQb3NpdGlvblsxXSA+IHNpemUgLSAxKSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIGF2YWlsYWJsZU1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgcHJldmlvdXNNb3Zlcy5mb3JFYWNoKChwb3NpdGlvblZpc2l0ZWQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGVtcFBvc2l0aW9uWzBdID09PSBwb3NpdGlvblZpc2l0ZWRbMF0gJiYgdGVtcFBvc2l0aW9uWzFdID09PSBwb3NpdGlvblZpc2l0ZWRbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgYXZhaWxhYmxlTW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gcG9zc2libGVQb3MubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICBjb21wdXRlclJlY29yZC5zZWFyY2hpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChhdmFpbGFibGVNb3ZlKVxuICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wUG9zaXRpb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBnZXROZWFyYnlDb29yZGluYXRlcyhzaXplLCBjb21wdXRlclJlY29yZCkge1xuICAgIC8vIGxldCdzIGdvIGZyb20gdG9wIHRvIGJvdHRvbiAgaW4gY291bnRlciBjbG9jayB3aXNlIGRpcmVjdGlvblxuICAgIGNvbnN0IHBvc3NpYmxlUG9zID0gW1stMSwgMF0sIFswLCAtMV0sIFsxLCAwXSwgWzAsIDFdXTtcbiAgICBjb25zdCBwcmV2aW91c01vdmVzID0gY29tcHV0ZXJSZWNvcmQubW92ZXM7XG4gICAgY29uc3QgbGFzdEhpdFBvc2l0aW9uID0gcHJldmlvdXNNb3Zlc1tjb21wdXRlclJlY29yZC5sYXN0SGl0SW5kZXhdO1xuICAgIGxldCBhdmFpbGFibGVNb3ZlO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zc2libGVQb3MubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgY29uc3QgdGVtcFBvc2l0aW9uID0gW2xhc3RIaXRQb3NpdGlvblswXSArIHBvc3NpYmxlUG9zW2ldWzBdLCBsYXN0SGl0UG9zaXRpb25bMV0gKyBwb3NzaWJsZVBvc1tpXVsxXV07XG4gICAgICAgIGlmICgodGVtcFBvc2l0aW9uWzBdIDwgMCB8fCB0ZW1wUG9zaXRpb25bMF0gPiBzaXplIC0gMSkgfHwgKHRlbXBQb3NpdGlvblsxXSA8IDAgfHwgdGVtcFBvc2l0aW9uWzFdID4gc2l6ZSAtIDEpKVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIGF2YWlsYWJsZU1vdmUgPSB0cnVlO1xuICAgICAgICBwcmV2aW91c01vdmVzLmZvckVhY2goKHBvc2l0aW9uVmlzaXRlZCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRlbXBQb3NpdGlvblswXSA9PT0gcG9zaXRpb25WaXNpdGVkWzBdICYmIHRlbXBQb3NpdGlvblsxXSA9PT0gcG9zaXRpb25WaXNpdGVkWzFdKSB7XG4gICAgICAgICAgICAgICAgYXZhaWxhYmxlTW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpID09PSBwb3NzaWJsZVBvcy5sZW5ndGggLSAxKVxuICAgICAgICAgICAgY29tcHV0ZXJSZWNvcmQuc2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgIGlmIChhdmFpbGFibGVNb3ZlKVxuICAgICAgICAgICAgcmV0dXJuIHRlbXBQb3NpdGlvbjtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuXG5mdW5jdGlvbiBjb21wdXRlclBsYXlzUmFuZG9tKHNpemUpIHtcbiAgICAvLyBpdCBqdXN0IHJldHVybiBzb21lIHJhbmRvbSBjb29yZGluYXRlc1xuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBzaXplKTtcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogc2l6ZSk7XG4gICAgcmV0dXJuIFt4LCB5XTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNoaXBzTGVmdChjb250YWluZXIpIHtcbiAgICBsZXQgYW55TGVmdCA9IHRydWU7XG4gICAgWy4uLmNvbnRhaW5lcl0uZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICAgICAgaWYgKGltYWdlLnN0eWxlLndpZHRoICE9PSAnMHB4JyAmJiBpbWFnZS5zdHlsZS5oZWlnaHQgIT09ICcwcHgnKSB7XG4gICAgICAgICAgICBhbnlMZWZ0ID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gYW55TGVmdDtcbn1cblxuZnVuY3Rpb24gZ2V0U2hpcFNpemUoY29vcmRpbmF0ZXMsIGlzUm90YXRlZCkge1xuICAgIGlmIChpc1JvdGF0ZWQpXG4gICAgICAgIHJldHVybiBNYXRoLmNlaWwoKGNvb3JkaW5hdGVzLmJvdHRvbSAtIGNvb3JkaW5hdGVzLnRvcCkgLyA1MCk7XG4gICAgZWxzZVxuICAgICAgICByZXR1cm4gTWF0aC5jZWlsKChjb29yZGluYXRlcy5yaWdodCAtIGNvb3JkaW5hdGVzLmxlZnQpIC8gNTApO1xufVxuXG5mdW5jdGlvbiBnZXRSYW5kb21UcnVlRmFsc2UoKSB7XG4gICAgY29uc3QgcmFuZG9tTnVtYmVyID0gTWF0aC5yYW5kb20oKTtcbiAgICBpZiAocmFuZG9tTnVtYmVyID49IDAuNSlcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICBlbHNlXG4gICAgICAgIHJldHVybiBmYWxzZVxufVxuIiwiaW1wb3J0IGltYWdlU2hpcDEgZnJvbSBcIi4vaW1hZ2VzL3NtYWxsU2hpcC5wbmdcIjtcbmltcG9ydCB7IHNoaXBzTGVmdCwgaXNWYWxpZFNoaXBQb3NpdGlvbiwgZ2V0Qm9hcmRTaXplLCBnZXROZXdTaGlwUG9zaXRpb24sIHNoaXBDb2xsaXNpb24sIGNvbXB1dGVyUGxheXMsIGdldFJhbmRvbUNvb3JkaW5hdGVzIH0gZnJvbSBcIi4vY2FsY3VsYXRpb25GdW5jdGlvbnNcIjtcbmltcG9ydCB7IGFkZFNoaXBUb1BsYXllciwgY3JlYXRlR2FtZVJlY29yZCwgY3JlYXRlUGxheWVycyB9IGZyb20gXCIuL29iamVjdHNNb2RpZmljYXRpb25cIjtcbmltcG9ydCB7IHNldFVwUGxheWVyTmFtZSB9IGZyb20gXCIuL3VzZXJuYW1lRE9NLmpzXCI7XG5pbXBvcnQgeyBnZXRTdW5rU2hpcFBvc2l0aW9ucywgaXNTaGlwU3VuaywgZ2V0TGF1bmNoaW5nQ29vcmRpbmF0ZXMsIGNoZWNrVmFsaWRQb3NpdGlvbiwgZ2V0RGlmZmljdWx0eSB9IGZyb20gXCIuL2F1eEZ1bmN0aW9ucy5qc1wiO1xuXG5jb25zdCBJTUFHRVNfU0hJUFMgPSBpbWFnZVNoaXAxO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVCb2FyZChzaXplLCBudW1iZXJPZlNoaXBzKSB7XG4gICAgbG9hZEdyaWQoc2l6ZSk7XG4gICAgc2V0VXBQbGF5ZXJOYW1lKGRpc2FibGVCdXR0b25zKTtcbiAgICBzZXRVcEZ1bmN0aW9uYWxpdHkobnVtYmVyT2ZTaGlwcywgc2l6ZSk7XG4gICAgbWFrZUJvYXJkRGl2VmlzaWJsZSgpO1xufVxuXG5mdW5jdGlvbiBtYWtlQm9hcmREaXZWaXNpYmxlKCkge1xuICAgIGNvbnN0IGJvYXJkQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXllcnMtY29udGFpbmVyJyk7XG4gICAgc2V0VGltZW91dCgoKSA9PiBib2FyZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzY2FsaW5nJyksIDEwMCk7XG59XG5cbmZ1bmN0aW9uIHNldFVwRnVuY3Rpb25hbGl0eShudW1iZXJPZlNoaXBzLCBzaXplKSB7XG4gICAgY29uc3QgcGxheWVyc0FyciA9IFtdO1xuICAgIGNyZWF0ZVBsYXllcnMocGxheWVyc0Fyciwgc2l6ZSk7XG4gICAgcmFuZG9tUG9zaXRpb25TdGFydChwbGF5ZXJzQXJyLCBudW1iZXJPZlNoaXBzKTtcbiAgICBzZXRVcE1hbnVhbFBvc2l0aW9uKHBsYXllcnNBcnIsIG51bWJlck9mU2hpcHMsIHRydWUpO1xuICAgIGNyZWF0ZURpdlNoaXBzKG51bWJlck9mU2hpcHMpO1xuICAgIHNldFVwRXZlbnRMaXN0ZW5lcnNTaGlwcyhwbGF5ZXJzQXJyKTtcbiAgICBzdGFydEdhbWUocGxheWVyc0FyciwgdHJ1ZSwgbnVtYmVyT2ZTaGlwcyk7XG59XG5cbmZ1bmN0aW9uIGNoYW5nZUdhbWVUaXRsZShzdGF0ZSkge1xuICAgIGNvbnN0IHNwYW5UaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLXRpdGxlIHNwYW4nKTtcbiAgICBpZiAoc3RhdGUgPT09IDApXG4gICAgICAgIHNwYW5UaXRsZS50ZXh0Q29udGVudCA9ICc8V0VMQ09NRT4nO1xuICAgIGVsc2UgaWYgKHN0YXRlID09PSAxKVxuICAgICAgICBzcGFuVGl0bGUudGV4dENvbnRlbnQgPSAnRklHSFQhISEhJztcbiAgICBlbHNlIGlmIChzdGF0ZSA9PT0gMilcbiAgICAgICAgc3BhblRpdGxlLnRleHRDb250ZW50ID0gJ1lvdSB3aW4hJztcbiAgICBlbHNlIGlmIChzdGF0ZSA9PT0gMylcbiAgICAgICAgc3BhblRpdGxlLnRleHRDb250ZW50ID0gJ0dhbWUgT3ZlciEnO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlQnV0dG9ucyhmbGFnRGlzYWJsZSwgZmxhZ0xhc3RCdXR0b24gPSBmYWxzZSkge1xuICAgIGNvbnN0IHNoaXBCdXR0b25zID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXNlbGVjdGlvbicpLmNoaWxkcmVuXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBCdXR0b25zLmxlbmd0aDsgKytpKVxuICAgICAgICBzaGlwQnV0dG9uc1tpXS5kaXNhYmxlZCA9IGZsYWdEaXNhYmxlO1xuICAgIGlmIChmbGFnTGFzdEJ1dHRvbilcbiAgICAgICAgc2hpcEJ1dHRvbnNbc2hpcEJ1dHRvbnMubGVuZ3RoIC0gMV0uZGlzYWJsZWQgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiByYW5kb21Qb3NpdGlvblN0YXJ0KHBsYXllcnNBcnIsIG51bWJlck9mU2hpcHMpIHtcbiAgICBjb25zdCByZXN0YXJ0UG9zaXRpb25CdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFuZG9taXplLXBsYWNlbWVudCcpO1xuICAgIHJlc3RhcnRQb3NpdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICdSYW5kb21pemUgc2hpcCBwbGFjZW1lbnQnO1xuICAgIHJlc3RhcnRQb3NpdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVzdGFydFBsYXllcnNHcmlkKHBsYXllcnNBcnIpO1xuICAgICAgICBwbGF5ZXJzQXJyLmZvckVhY2goKHBsYXllciwgcGxheWVySW5kZXgpID0+IHtcbiAgICAgICAgICAgIHBsYWNlU2hpcHNHYW1lYm9hcmQocGxheWVyLCBwbGF5ZXJJbmRleCwgbnVtYmVyT2ZTaGlwcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZXRVcE1hbnVhbFBvc2l0aW9uKHBsYXllcnNBcnIsIG51bWJlck9mU2hpcHMpO1xuICAgICAgICAvLyB3ZSBlbmFibGUgdGhlIGJ1dHRvbiBvZiBzdGFydGluZyB0aGUgZ2FtZVxuICAgICAgICBkaXNhYmxlRGl2U2hpcHMoKTtcbiAgICAgICAgZGlzYWJsZVN0YXJ0QnV0dG9uKGZhbHNlKTtcbiAgICAgICAgcmVtb3ZlSW5mb3JtYXRpb25QbGFjZW1lbnQoKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlSW5mb3JtYXRpb25QbGFjZW1lbnQoKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkubGFzdENoaWxkLmNsYXNzTGlzdC5jb250YWlucygnaW5mbycpKVxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGRvY3VtZW50LmJvZHkubGFzdENoaWxkKTtcbn1cblxuZnVuY3Rpb24gcGxhY2VTaGlwc0dhbWVib2FyZChwbGF5ZXIsIHBsYXllckluZGV4LCBuU2hpcHMpIHtcbiAgICBsZXQgY29vcmRpbmF0ZXNTaGlwc0FycjtcbiAgICBsZXQgc2l6ZSA9IHBsYXllci5nYW1lYm9hcmQuc2l6ZTtcbiAgICBjb29yZGluYXRlc1NoaXBzQXJyID0gZ2V0UmFuZG9tQ29vcmRpbmF0ZXMoblNoaXBzLCBzaXplKTtcbiAgICBjb29yZGluYXRlc1NoaXBzQXJyLmZvckVhY2goKGNvb3JkaW5hdGVzKSA9PiB7XG4gICAgICAgIGFkZFNoaXBUb1BsYXllcihwbGF5ZXIsIGNvb3JkaW5hdGVzKTtcbiAgICAgICAgaWYgKHBsYXllckluZGV4ID09PSAxKVxuICAgICAgICAgICAgY29sb3JQbGF5ZXJTaGlwcyhjb29yZGluYXRlcywgcGxheWVySW5kZXgpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBzZXRVcERpdlNoaXBzKCkge1xuICAgIGNvbnN0IGltYWdlc0VsZW1lbnRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXTtcbiAgICBpbWFnZXNFbGVtZW50cy5mb3JFYWNoKChpbWFnZSkgPT4gaW1hZ2Uuc3JjID0gSU1BR0VTX1NISVBTKTtcbiAgICBlbmFibGVEaXZTaGlwcygpO1xuICAgIGRpc2FibGVEaXZTaGlwcygpO1xufVxuXG5mdW5jdGlvbiBlbmFibGVEaXZTaGlwcygpIHtcbiAgICBjb25zdCBpbWFnZXNFbGVtZW50cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKV07XG4gICAgaW1hZ2VzRWxlbWVudHMuZm9yRWFjaCgoaW1hZ2UsIGluZGV4KSA9PiB7XG4gICAgICAgIHJlc3RhcnRJbWFnZVBvc2l0aW9uKGltYWdlKTtcbiAgICAgICAgcmVzdGFydFNpemVJbWFnZShpbWFnZSwgaW5kZXgpO1xuICAgIH0pO1xuICAgIGRpc2FibGVEaXZTaGlwQ29udGFpbmVyKGZhbHNlKTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZURpdlNoaXBDb250YWluZXIoZmxhZyA9IHRydWUpIHtcbiAgICBjb25zdCBpbmRpdmlkdWFsU2hpcENvbnRhaW5lcnMgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNoaXBzLWltYWdlcyBkaXYnKV07XG4gICAgaWYgKGZsYWcpXG4gICAgICAgIGluZGl2aWR1YWxTaGlwQ29udGFpbmVycy5mb3JFYWNoKChkaXYpID0+IGRpdi5jbGFzc0xpc3QucmVtb3ZlKCdpbmRpdmlkdWFsLXNoaXAnKSk7XG4gICAgZWxzZVxuICAgICAgICBpbmRpdmlkdWFsU2hpcENvbnRhaW5lcnMuZm9yRWFjaCgoZGl2KSA9PiBkaXYuY2xhc3NMaXN0LmFkZCgnaW5kaXZpZHVhbC1zaGlwJykpO1xuXG59XG5cbmZ1bmN0aW9uIGRpc2FibGVEaXZTaGlwcygpIHtcbiAgICBjb25zdCBpbWFnZXNFbGVtZW50cyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWcnKV07XG4gICAgaW1hZ2VzRWxlbWVudHMuZm9yRWFjaCgoaW1hZ2UpID0+IHJlc3RhcnRTaXplSW1hZ2UoaW1hZ2UsIDAsIDApKTtcbiAgICBkaXNhYmxlRGl2U2hpcENvbnRhaW5lcih0cnVlKTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydEltYWdlUG9zaXRpb24oaW1hZ2UpIHtcbiAgICBpbWFnZS5zdHlsZS5wb3NpdGlvbiA9ICdzdGF0aWMnO1xuICAgIGltYWdlLnRvcCA9IDA7XG4gICAgaW1hZ2UubGVmdCA9IDA7XG4gICAgaW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRTaXplSW1hZ2UoaW1hZ2UsIGluZGV4LCBmbGFnV2lkdGggPSAxKSB7XG4gICAgY29uc3Qgd2lkdGggPSAxMDAgKiBmbGFnV2lkdGggKyA1MCAqIGluZGV4O1xuICAgIGltYWdlLnN0eWxlLndpZHRoID0gYCR7d2lkdGggKiBmbGFnV2lkdGh9cHhgO1xuICAgIGltYWdlLnN0eWxlLmhlaWdodCA9IGAkezUwICogZmxhZ1dpZHRofXB4YDtcbn1cblxuZnVuY3Rpb24gc2V0VXBFdmVudExpc3RlbmVyc1NoaXBzKHBsYXllcnNBcnIpIHtcbiAgICBsZXQgYWN0aXZhdGlvbiA9IGZhbHNlO1xuICAgIGxldCBpbmRleFNoaXAgPSAtMTtcbiAgICBjb25zdCBpbml0aWFsQ2xpY2tQb3NpdGlvbiA9IFtdO1xuICAgIGNvbnN0IGltYWdlc0VsZW1lbnRzID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZycpXTtcbiAgICBpbWFnZXNFbGVtZW50cy5mb3JFYWNoKChpbWFnZSwgaW5kZXgpID0+IHtcbiAgICAgICAgaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGVNb3VzZSkgPT4ge1xuICAgICAgICAgICAgYWN0aXZhdGlvbiA9IHRydWU7XG4gICAgICAgICAgICBpbmRleFNoaXAgPSBpbmRleDtcbiAgICAgICAgICAgIGluaXRpYWxDbGlja1Bvc2l0aW9uWzBdID0gZU1vdXNlLmNsaWVudFg7XG4gICAgICAgICAgICBpbml0aWFsQ2xpY2tQb3NpdGlvblsxXSA9IGVNb3VzZS5jbGllbnRZO1xuICAgICAgICB9KTtcbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgKGVLZXkpID0+IHtcbiAgICAgICAgaWYgKGVLZXkuY29kZSA9PT0gJ0tleVInKSB7XG4gICAgICAgICAgICBsZXQgbmV3Um90YXRpb25WYWx1ZTtcbiAgICAgICAgICAgIGlmIChpbmRleFNoaXAgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSBpbWFnZXNFbGVtZW50c1tpbmRleFNoaXBdO1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZS5zdHlsZS50cmFuc2Zvcm0gIT09ICdyb3RhdGUoOTBkZWcpJylcbiAgICAgICAgICAgICAgICAgICAgbmV3Um90YXRpb25WYWx1ZSA9IDkwO1xuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgbmV3Um90YXRpb25WYWx1ZSA9IDA7XG4gICAgICAgICAgICAgICAgaW1hZ2Uuc3R5bGUudHJhbnNmb3JtID0gYHJvdGF0ZSgke25ld1JvdGF0aW9uVmFsdWV9ZGVnKWA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChlKSA9PiB7XG4gICAgICAgIGlmIChhY3RpdmF0aW9uICYmIGluZGV4U2hpcCAhPT0gLTEpIHtcbiAgICAgICAgICAgIGltYWdlc0VsZW1lbnRzW2luZGV4U2hpcF0uc3R5bGUucG9zaXRpb24gPSAncmVsYXRpdmUnO1xuICAgICAgICAgICAgaW1hZ2VzRWxlbWVudHNbaW5kZXhTaGlwXS5zdHlsZS5sZWZ0ID0gYCR7ZS5jbGllbnRYIC0gaW5pdGlhbENsaWNrUG9zaXRpb25bMF19cHhgO1xuICAgICAgICAgICAgaW1hZ2VzRWxlbWVudHNbaW5kZXhTaGlwXS5zdHlsZS50b3AgPSBgJHtlLmNsaWVudFkgLSBpbml0aWFsQ2xpY2tQb3NpdGlvblsxXX1weGA7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCAoKSA9PiB7XG4gICAgICAgIGlmIChpbmRleFNoaXAgIT09IC0xKSB7XG4gICAgICAgICAgICBjb25zdCBib2FyZFBsYXllcjFDb29yZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXIxJykuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBpZiAoaXNWYWxpZFNoaXBQb3NpdGlvbihpbWFnZXNFbGVtZW50c1tpbmRleFNoaXBdLCBib2FyZFBsYXllcjFDb29yZCkpIHtcbiAgICAgICAgICAgICAgICAvLyBsZXQncyBwbGFjZSB0aGUgc2hpcFxuICAgICAgICAgICAgICAgIC8vIG9uY2UgaSBrbm93IHRoZSBzaGlwIHBvc2l0aW9uIGlzIHZhbGlkIGkgY2FuIGNhbGN1bGF0ZSB0aGUgaW5kZXggd2hlcmUgdGhlIHNoaXAgY2FuIGJlIHBsYWNlZFxuICAgICAgICAgICAgICAgIC8vIGluIHRoaXMgcG9zaXRpb24gaXMgc2hvdWxkIGNoZWNrIGlmIHRoZXJlIGFyZSBzaGlwcyBvbiB0aGUgdG8gcG9zaXRpb25zIHdoZXJlIHRoZSBuZXcgc2hpcCBjYW4gYmUgcGxhY2VkXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gZ2V0TmV3U2hpcFBvc2l0aW9uKGltYWdlc0VsZW1lbnRzW2luZGV4U2hpcF0sIGJvYXJkUGxheWVyMUNvb3JkKTtcbiAgICAgICAgICAgICAgICBpZiAoIXNoaXBDb2xsaXNpb24ocGxheWVyc0FyclsxXSwgcG9zaXRpb25zKSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRTaGlwVG9QbGF5ZXIocGxheWVyc0FyclsxXSwgcG9zaXRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3JQbGF5ZXJTaGlwcyhwb3NpdGlvbnMsIDEpO1xuICAgICAgICAgICAgICAgICAgICAvLyBwbGFjZSB0aGUgc2hpcCB3aXRoaW4gdGhlIGdhbWVib2FyZFxuICAgICAgICAgICAgICAgICAgICAvLyBkZWxldGUgdGhlIGltYWdlIHRoYXQgaXMgYXNzb2NpYXRlZCB0byB0aGUgcGxhY2VkIHNoaXBcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzRWxlbWVudHNbaW5kZXhTaGlwXS5zdHlsZS53aWR0aCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGltYWdlc0VsZW1lbnRzW2luZGV4U2hpcF0uc3R5bGUuaGVpZ2h0ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzRWxlbWVudHNbaW5kZXhTaGlwXS5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2luZGl2aWR1YWwtc2hpcCcpO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGUgY29uZGl0aW9uIGJlbG93ICBtZWFucyB0aGF0IGFsbCB0aGUgc2hpcHMgaGF2ZSBiZWVuIHBsYWNlZCBjb3JyZWN0bHlcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNoaXBzTGVmdChpbWFnZXNFbGVtZW50cykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlU2hpcHNHYW1lYm9hcmQocGxheWVyc0FyclswXSwgMCwgaW1hZ2VzRWxlbWVudHMubGVuZ3RoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVTdGFydEJ1dHRvbihmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVJbmZvcm1hdGlvblBsYWNlbWVudCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHJlc3RhcnRJbWFnZVBvc2l0aW9uKGltYWdlc0VsZW1lbnRzW2luZGV4U2hpcF0pO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgcmVzdGFydEltYWdlUG9zaXRpb24oaW1hZ2VzRWxlbWVudHNbaW5kZXhTaGlwXSk7XG4gICAgICAgICAgICBpbmRleFNoaXAgPSAtMTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBkaXNhYmxlU3RhcnRCdXR0b24oZmxhZ0VuYWJsZSkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1nYW1lJyk7XG4gICAgYnV0dG9uLmRpc2FibGVkID0gZmxhZ0VuYWJsZTtcbn1cblxuZnVuY3Rpb24gc2V0VXBNYW51YWxQb3NpdGlvbihwbGF5ZXJzQXJyLCBuU2hpcHMsIGRpc2FibGVkTWFudWFsID0gZmFsc2UpIHtcbiAgICBjb25zdCBidXR0b25QcmV2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hbnVhbC1wbGFjZW1lbnQnKTtcbiAgICBjb25zdCBtYW51YWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBtYW51YWxCdXR0b24uaWQgPSAnbWFudWFsLXBsYWNlbWVudCc7XG4gICAgbWFudWFsQnV0dG9uLnRleHRDb250ZW50ID0gJ01hbnVhbCBwbGFjZW1lbnQgb2YgdGhlIHNoaXAnO1xuICAgIG1hbnVhbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgaWYgKGRpc2FibGVkTWFudWFsKVxuICAgICAgICBtYW51YWxCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIG1hbnVhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcmVzdGFydFBsYXllcnNHcmlkKHBsYXllcnNBcnIpO1xuICAgICAgICByZXN0YXJ0TWFudWFsU2hpcFBsYWNlbWVudChtYW51YWxCdXR0b24sIHBsYXllcnNBcnIsIG5TaGlwcyk7XG4gICAgICAgIG1hbnVhbEJ1dHRvbi5yZW1vdmUoKTtcbiAgICAgICAgZGlzYWJsZVN0YXJ0QnV0dG9uKHRydWUpO1xuICAgICAgICBlbmFibGVEaXZTaGlwcygpO1xuICAgICAgICBzaG93SW5zdHJ1Y3Rpb25zTWFudWFsKCk7XG4gICAgfSk7XG4gICAgYnV0dG9uUHJldi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgbWFudWFsQnV0dG9uKTtcbiAgICBidXR0b25QcmV2LnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBzaG93SW5zdHJ1Y3Rpb25zTWFudWFsKCkge1xuICAgIGlmIChkb2N1bWVudC5ib2R5Lmxhc3RDaGlsZC5jbGFzc0xpc3QuY29udGFpbnMoJ2luZm8nKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgZGl2SW5mbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXZJbmZvRHJhZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBkaXZJbmZvUm90YXRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2SW5mb0RyYWcudGV4dENvbnRlbnQgPSAnQ2xpY2sgYW5kIGRyYWcgdG8gcGxhY2UgdGhlIHNoaXAgaW50byB0aGUgYmF0dGxlZmllbGQhJztcbiAgICAgICAgZGl2SW5mb1JvdGF0aW9uLnRleHRDb250ZW50ID0gJ1doaWxlIGRyYWdnaW5nIHRoZSBzaGlwLCB5b3UgY2FuIHByZXNzIFwiUlwiIHRvIHJvdGF0ZSBpdCA5MCBkZWdyZWVzLic7XG4gICAgICAgIGRpdkluZm8uYXBwZW5kQ2hpbGQoZGl2SW5mb0RyYWcpO1xuICAgICAgICBkaXZJbmZvLmFwcGVuZENoaWxkKGRpdkluZm9Sb3RhdGlvbik7XG4gICAgICAgIGRpdkluZm8uY2xhc3NMaXN0LmFkZCgnaW5mbycpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZChkaXZJbmZvKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRNYW51YWxTaGlwUGxhY2VtZW50KG1hbnVhbFBvc2l0aW9uQnV0dG9uLCBwbGF5ZXJzQXJyKSB7XG4gICAgY29uc3QgYnV0dG9uUmVzdGFydCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGJ1dHRvblJlc3RhcnQudGV4dENvbnRlbnQgPSAnUmVzdGFydCBtYW51YWwgc2hpcCBwbGFjZW1lbnQnO1xuICAgIGJ1dHRvblJlc3RhcnQudHlwZSA9ICdidXR0b24nO1xuICAgIGJ1dHRvblJlc3RhcnQuaWQgPSAnbWFudWFsLXBsYWNlbWVudCc7XG4gICAgYnV0dG9uUmVzdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgc2hvd0luc3RydWN0aW9uc01hbnVhbCgpO1xuICAgICAgICBkaXNhYmxlU3RhcnRCdXR0b24odHJ1ZSk7XG4gICAgICAgIHJlc3RhcnRQbGF5ZXJzR3JpZChwbGF5ZXJzQXJyKTtcbiAgICAgICAgZW5hYmxlRGl2U2hpcHMoKTtcbiAgICB9KTtcbiAgICBtYW51YWxQb3NpdGlvbkJ1dHRvbi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgYnV0dG9uUmVzdGFydCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZURpdlNoaXBzKG5TaGlwcykge1xuICAgIGNvbnN0IGRpdlNoaXBzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2U2hpcHMuY2xhc3NMaXN0LmFkZCgnc2hpcHMtaW1hZ2VzJyk7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuU2hpcHM7ICsraSkge1xuICAgICAgICBjb25zdCBkaXZJbmRpdmlkdWFsQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGNvbnN0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpbWcuZHJhZ2dhYmxlID0gZmFsc2U7XG4gICAgICAgIGltZy5hbHQgPSBgU2hpcCBvZiBsZW5ndGggJHtpICsgMn1gO1xuICAgICAgICBkaXZJbmRpdmlkdWFsQ29udGFpbmVyLmFwcGVuZENoaWxkKGltZyk7XG4gICAgICAgIGRpdlNoaXBzLmFwcGVuZENoaWxkKGRpdkluZGl2aWR1YWxDb250YWluZXIpO1xuICAgIH1cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRpdlNoaXBzKTtcbiAgICBzZXRVcERpdlNoaXBzKCk7XG59XG5cbmZ1bmN0aW9uIHJlc3RhcnRQbGF5ZXJzR3JpZChwbGF5ZXJzQXJyKSB7XG4gICAgY29uc3Qgc2l6ZSA9IGdldEJvYXJkU2l6ZShwbGF5ZXJzQXJyWzBdKTtcbiAgICBsb2FkR3JpZChzaXplKTtcbiAgICBjcmVhdGVQbGF5ZXJzKHBsYXllcnNBcnIsIHNpemUpO1xufVxuXG5mdW5jdGlvbiBsb2FkR3JpZChzaXplKSB7XG4gICAgY29uc3QgZGl2Qm9hcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmJvYXJkJyk7XG4gICAgZGl2Qm9hcmRzLmZvckVhY2goKGRpdkJvYXJkKSA9PiB7XG4gICAgICAgIGRpdkJvYXJkLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIGZvciAobGV0IHJvdyA9IDA7IHJvdyA8IHNpemU7ICsrcm93KSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb2x1bW4gPSAwOyBjb2x1bW4gPCBzaXplOyArK2NvbHVtbikge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgICAgICAgICAgZGl2LmRhdGFzZXQucm93ID0gcm93O1xuICAgICAgICAgICAgICAgIGRpdi5kYXRhc2V0LmNvbHVtbiA9IGNvbHVtbjtcbiAgICAgICAgICAgICAgICBkaXZCb2FyZC5hcHBlbmRDaGlsZChkaXYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0R2FtZShwbGF5ZXJzLCBjb21wdXRlciwgblNoaXBzKSB7XG4gICAgY29uc3Qgc3RhcnRHYW1lQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0LWdhbWUnKTtcbiAgICBzdGFydEdhbWVCdXR0b24udGV4dENvbnRlbnQgPSAnU3RhcnQgZ2FtZSEnO1xuICAgIHN0YXJ0R2FtZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgY2hhbmdlR2FtZVRpdGxlKDEpO1xuICAgICAgICBjb25zdCBnYW1lRGlmZmljdWx0eSA9IGdldERpZmZpY3VsdHkoKTtcbiAgICAgICAgbW9kaWZ5Q29tcHV0ZXJUZXh0KGdhbWVEaWZmaWN1bHR5KTtcbiAgICAgICAgY3JlYXRlRXZlbnRzKHBsYXllcnMsIGNvbXB1dGVyLCBuU2hpcHMsIGdhbWVEaWZmaWN1bHR5KTtcbiAgICAgICAgcmVtb3ZlQWxsQnV0dG9ucygpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiB0b2dnbGVIaWREaWZmaWN1bHR5RGl2KCkge1xuICAgIGNvbnN0IGRpdkRpZmZpY3VsdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlmZmljdWx0eScpO1xuICAgIGRpdkRpZmZpY3VsdHkuY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFsbEJ1dHRvbnMoKSB7XG4gICAgdG9nZ2xlSGlkRGlmZmljdWx0eURpdigpO1xuICAgIGNvbnN0IGJ1dHRvbnNEaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1zZWxlY3Rpb24nKTtcbiAgICB3aGlsZSAoYnV0dG9uc0Rpdi5jaGlsZHJlbi5sZW5ndGggPiAwKVxuICAgICAgICBidXR0b25zRGl2LmNoaWxkcmVuWzBdLnJlbW92ZSgpO1xufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRBeGlzKGNlbGxJbmksIGZsYWdFbmFibGUgPSB0cnVlKSB7XG4gICAgY29uc3QgYm9hcmRBcnJheSA9IFsuLi5jZWxsSW5pLnBhcmVudEVsZW1lbnQuY2hpbGRyZW5dO1xuICAgIGNvbnN0IHJvdyA9ICtjZWxsSW5pLmRhdGFzZXQucm93LCBjb2x1bW4gPSArY2VsbEluaS5kYXRhc2V0LmNvbHVtbjtcbiAgICBjb25zdCBzaXplID0gTWF0aC5zcXJ0KGJvYXJkQXJyYXkubGVuZ3RoKTtcbiAgICBjb25zdCBhcnJheUluZGV4ID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgYXJyYXlJbmRleC5wdXNoKHJvdyAqIHNpemUgKyBpKTtcbiAgICAgICAgYXJyYXlJbmRleC5wdXNoKGNvbHVtbiArIGkgKiBzaXplKTtcbiAgICB9XG4gICAgYXJyYXlJbmRleC5mb3JFYWNoKChpbmRleCkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gYm9hcmRBcnJheVtpbmRleF07XG4gICAgICAgIGlmIChmbGFnRW5hYmxlKVxuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaWdobGlnaHQtdGFyZ2V0Jyk7XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0LXRhcmdldCcpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRBeGlzRXZlbnQoZXZlbnQpIHtcbiAgICBjb25zdCBjZWxsRXZlbnQgPSBldmVudC50YXJnZXQ7XG4gICAgaGlnaGxpZ2h0QXhpcyhjZWxsRXZlbnQsIGV2ZW50LnR5cGUgPT09ICdtb3VzZWVudGVyJyk7XG59XG5cbmZ1bmN0aW9uIGRyYXdTaGlwU3VuayhwbGF5ZXJzQXJyLCByb3csIGNvbHVtbiwgdHVybikge1xuICAgIGNvbnN0IGdhbWVib2FyZE9iamVjdCA9IHBsYXllcnNBcnJbdHVybl0uZ2FtZWJvYXJkO1xuICAgIGNvbnN0IHNoaXBTdW5rQ29vcmRpbmF0ZXMgPSBnZXRTdW5rU2hpcFBvc2l0aW9ucyhnYW1lYm9hcmRPYmplY3QsIHJvdywgY29sdW1uKTtcbiAgICBjb25zdCBnYW1lYm9hcmREaXZPcHBvbmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZCcpO1xuICAgIGNvbnN0IGluZGV4T3Bwb25lbnQgPSB0dXJuID8gMCA6IDE7XG4gICAgY29uc3QgZ2FtZWJvYXJkQXJyT3Bwb25lbnQgPSBbLi4uZ2FtZWJvYXJkRGl2T3Bwb25lbnRbaW5kZXhPcHBvbmVudF0uY2hpbGRyZW5dO1xuICAgIHNoaXBTdW5rQ29vcmRpbmF0ZXMuZm9yRWFjaCgoY29vcmRpbmF0ZSkgPT4ge1xuICAgICAgICBjb25zdCBjZWxsID0gZ2FtZWJvYXJkQXJyT3Bwb25lbnRbY29vcmRpbmF0ZVsxXSArIGNvb3JkaW5hdGVbMF0gKiBNYXRoLnNxcnQoZ2FtZWJvYXJkQXJyT3Bwb25lbnQubGVuZ3RoKV07XG4gICAgICAgIGNlbGwudGV4dENvbnRlbnQgPSAneCc7XG4gICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBibGlua1RhcmdldChjZWxsQXJyYXksIHJvdywgY29sdW1uKSB7XG4gICAgY29uc3Qgc2l6ZSA9IE1hdGguc3FydChjZWxsQXJyYXkubGVuZ3RoKTtcbiAgICBjb25zdCBjZWxsID0gY2VsbEFycmF5W2NvbHVtbiArIHJvdyAqIHNpemVdO1xuICAgIGNvbnN0IGRlbGF5ID0gMTAwMDtcbiAgICAvLyBtc1xuICAgIGxldCByZXBldGl0aW9ucyA9IDU7XG4gICAgZm9yIChsZXQgaW5kZXhSZXBldGl0aW9uID0gMDsgaW5kZXhSZXBldGl0aW9uIC0gcmVwZXRpdGlvbnM7ICsraW5kZXhSZXBldGl0aW9uKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb24tc2VsZWN0ZWQtYXhpcycpO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZC1heGlzJyk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodC10YXJnZXQnKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZC1heGlzJyksIGRlbGF5IC8gcmVwZXRpdGlvbnMgLyAyKTtcbiAgICAgICAgfSwgZGVsYXkgLyByZXBldGl0aW9ucyAqIChpbmRleFJlcGV0aXRpb24gLSAxKSk7XG4gICAgfVxuICAgIHNldFRpbWVvdXQoKCkgPT4gY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2l0aW9uLXNlbGVjdGVkLWF4aXMnKSwgZGVsYXkpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVFdmVudHMocGxheWVyc0FyciwgZmxhZ0NvbXB1dGVyLCBudW1iZXJPZlNoaXBzLCBpc0RpZmZpY3VsdCkge1xuICAgIGNvbnN0IGdhbWVSZWNvcmQgPSBjcmVhdGVHYW1lUmVjb3JkKCk7XG4gICAgLy8gV2UgYXNzb2NpYXRlIGVhY2ggcGxheWVyIHdpdGggYSBib2FyZDtcbiAgICAvLyB0aGUgZnVuY3Rpb24gaW5zaWRlIHRoZSBldmVudCBsaXN0ZW5lciBzaG91bGQgbm90IGJlIGFuIGFub255bW91cyBmdW5jdGlvblxuICAgIGNvbnN0IGRpdkJvYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5ib2FyZCcpO1xuICAgIGNvbnN0IGdhbWVTcGFjZSA9IHtcbiAgICAgICAgdHVybjogMCxcbiAgICAgICAgY29tcHV0ZXJJc1BsYXlpbmc6IGZhbHNlXG4gICAgfTtcbiAgICBjb25zdCBkaXZCb2FyZENoaWxkcmVuQXJyYXkgPSBbLi4uZGl2Qm9hcmRzWzFdLmNoaWxkcmVuXTtcbiAgICBkaXZCb2FyZENoaWxkcmVuQXJyYXkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBjbGlja2VkKTtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaGlnaGxpZ2h0QXhpc0V2ZW50KTtcbiAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGlnaGxpZ2h0QXhpc0V2ZW50KTtcbiAgICB9KTtcbiAgICBmdW5jdGlvbiBjbGlja2VkKGUpIHtcbiAgICAgICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0O1xuICAgICAgICBjb25zdCByb3cgPSArZS50YXJnZXQuZGF0YXNldC5yb3c7XG4gICAgICAgIGNvbnN0IGNvbHVtbiA9ICtlLnRhcmdldC5kYXRhc2V0LmNvbHVtbjtcbiAgICAgICAgaWYgKGdhbWVTcGFjZS5jb21wdXRlcklzUGxheWluZyA9PT0gZmFsc2UgJiYgZ2FtZVNwYWNlLnR1cm4gPT09IDApIHtcbiAgICAgICAgICAgIGlmIChjaGVja1ZhbGlkUG9zaXRpb24ocGxheWVyc0FyciwgZ2FtZVNwYWNlLnR1cm4sIHJvdywgY29sdW1uKSlcbiAgICAgICAgICAgICAgICBoYW5kbGVIaXQocGxheWVyc0FyciwgZ2FtZVNwYWNlLCByb3csIGNvbHVtbiwgZSwgZ2FtZVJlY29yZCwgZGl2Qm9hcmRDaGlsZHJlbkFycmF5LCBudW1iZXJPZlNoaXBzLCBmbGFnQ29tcHV0ZXIsIGNsaWNrZWQsIGlzRGlmZmljdWx0KTtcbiAgICAgICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGNsaWNrZWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVIaXQocGxheWVyc0FyciwgZ2FtZVNwYWNlLCByb3csIGNvbHVtbiwgZSwgZ2FtZVJlY29yZCwgZGl2Qm9hcmRDaGlsZHJlbkFycmF5LCBudW1iZXJPZlNoaXBzLCBmbGFnQ29tcHV0ZXIsIGNsaWNrZWRFdmVudEZ1bmN0aW9uLCBpc0RpZmZpY3VsdCkge1xuICAgIC8vIGRpc2FibGUgaGlnaGxpZ2h0QXhpc0V2ZW50XG4gICAgaGlnaGxpZ2h0QXhpcyhkaXZCb2FyZENoaWxkcmVuQXJyYXlbY29sdW1uICsgcm93ICogTWF0aC5zcXJ0KGRpdkJvYXJkQ2hpbGRyZW5BcnJheS5sZW5ndGgpXSwgZmFsc2UpO1xuICAgIGRpdkJvYXJkQ2hpbGRyZW5BcnJheS5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhpZ2hsaWdodEF4aXNFdmVudCk7XG4gICAgICAgIGNlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIGhpZ2hsaWdodEF4aXNFdmVudCk7XG4gICAgfSk7XG4gICAgYmxpbmtUYXJnZXQoZGl2Qm9hcmRDaGlsZHJlbkFycmF5LCByb3csIGNvbHVtbik7XG4gICAgY29uc3Qgc2hpcEhpdCA9IHJlZ2lzdGVySGl0KHBsYXllcnNBcnIsIGdhbWVTcGFjZS50dXJuLCByb3csIGNvbHVtbiwgZS50YXJnZXQsIGdhbWVSZWNvcmRbZ2FtZVNwYWNlLnR1cm5dKTtcbiAgICBpZiAoc2hpcEhpdCAmJiBpc1NoaXBTdW5rKHBsYXllcnNBcnJbZ2FtZVNwYWNlLnR1cm5dLmdhbWVib2FyZCwgcm93LCBjb2x1bW4pKVxuICAgICAgICBkcmF3U2hpcFN1bmsocGxheWVyc0Fyciwgcm93LCBjb2x1bW4sIGdhbWVTcGFjZS50dXJuKTtcbiAgICBnYW1lUmVjb3JkW2dhbWVTcGFjZS50dXJuXS5tb3Zlcy5wdXNoKFtyb3csIGNvbHVtbl0pO1xuICAgIGdhbWVTcGFjZS50dXJuID0gMTtcbiAgICBpZiAocGxheWVyc0FyclswXS5nYW1lYm9hcmQuYXJlU2hpcHNMZWZ0KCkgPT09IGZhbHNlKSB7XG4gICAgICAgIGRpc2FibGVFdmVudExpc3RlbmVycyhjbGlja2VkRXZlbnRGdW5jdGlvbik7XG4gICAgICAgIGVuZEdhbWUoZ2FtZVNwYWNlLnR1cm4sIHBsYXllcnNBcnIsIG51bWJlck9mU2hpcHMsIHRydWUpO1xuICAgIH0gZWxzZVxuICAgICAgICBjb21wdXRlclR1cm4oZmxhZ0NvbXB1dGVyLCBnYW1lU3BhY2UsIHBsYXllcnNBcnIsIGdhbWVSZWNvcmQsIGRpdkJvYXJkQ2hpbGRyZW5BcnJheSwgbnVtYmVyT2ZTaGlwcywgY2xpY2tlZEV2ZW50RnVuY3Rpb24sIGlzRGlmZmljdWx0KTtcbn1cblxuZnVuY3Rpb24gZGlzYWJsZUV2ZW50TGlzdGVuZXJzKGV2ZW50RnVuY3Rpb24pIHtcbiAgICBjb25zdCBkaXZCb2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuYm9hcmQnKTtcbiAgICBjb25zdCBkaXZCb2FyZENoaWxkcmVuQXJyYXkgPSBbLi4uZGl2Qm9hcmRzWzFdLmNoaWxkcmVuXTtcbiAgICBkaXZCb2FyZENoaWxkcmVuQXJyYXkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBldmVudEZ1bmN0aW9uKTtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaGlnaGxpZ2h0QXhpc0V2ZW50KTtcbiAgICAgICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGlnaGxpZ2h0QXhpc0V2ZW50KTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWdobGlnaHQtdGFyZ2V0Jyk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHNpbXBsZXJMb29wcyhjb29yZGluYXRlc1RvVHJhdmVsLCBjZWxsQXJyYXksIGRlbGF5KSB7XG4gICAgY29uc3Qgc2l6ZSA9IE1hdGguc3FydChjZWxsQXJyYXkubGVuZ3RoKTtcbiAgICBjb29yZGluYXRlc1RvVHJhdmVsLmZvckVhY2goKGNvb3JkaW5hdGUsIGluZGV4KSA9PiB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAwKVxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodEF4aXMoY2VsbEFycmF5W2Nvb3JkaW5hdGVzVG9UcmF2ZWxbaW5kZXggLSAxXVsxXSArIGNvb3JkaW5hdGVzVG9UcmF2ZWxbaW5kZXggLSAxXVswXSAqIHNpemVdLCBmYWxzZSk7XG4gICAgICAgICAgICBoaWdobGlnaHRBeGlzKGNlbGxBcnJheVtjb29yZGluYXRlWzFdICsgY29vcmRpbmF0ZVswXSAqIHNpemVdKTtcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gY29vcmRpbmF0ZXNUb1RyYXZlbC5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaGlnaGxpZ2h0QXhpcyhjZWxsQXJyYXlbY29vcmRpbmF0ZVsxXSArIGNvb3JkaW5hdGVbMF0gKiBzaXplXSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICBibGlua1RhcmdldChjZWxsQXJyYXksIGNvb3JkaW5hdGVbMF0sIGNvb3JkaW5hdGVbMV0pO1xuICAgICAgICAgICAgICAgIH0sIGRlbGF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgZGVsYXkgKiBpbmRleCk7XG4gICAgfVxuICAgICk7XG59XG5cbmZ1bmN0aW9uIGNvbXB1dGVyVHVybihmbGFnQ29tcHV0ZXIsIGdhbWVTcGFjZSwgcGxheWVyc0FyciwgZ2FtZVJlY29yZCwgZGl2Qm9hcmRDaGlsZHJlbkFycmF5LCBudW1iZXJPZlNoaXBzLCBjbGlja2VkRXZlbnRGdW5jdGlvbiwgaXNSYW5kb20gPSBmYWxzZSkge1xuICAgIGlmIChmbGFnQ29tcHV0ZXIgPT09IHRydWUgJiYgZ2FtZVNwYWNlLnR1cm4gPT09IDEgJiYgZ2FtZVNwYWNlLmNvbXB1dGVySXNQbGF5aW5nID09PSBmYWxzZSkge1xuICAgICAgICBjb25zdCBkaXZCb2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuYm9hcmQnKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdldEJvYXJkU2l6ZShwbGF5ZXJzQXJyWzBdKTtcbiAgICAgICAgZ2FtZVNwYWNlLmNvbXB1dGVySXNQbGF5aW5nID0gdHJ1ZTtcbiAgICAgICAgZW5hYmxlQ29tcHV0ZXJUaGlua2luZ0Rpdih0cnVlKTtcbiAgICAgICAgY29uc3QgcHJvZ3JhbW1hYmxlRGVsYXkgPSA1MDtcbiAgICAgICAgbGV0IHZhbGlkUG9zaXRpb24gPSBmYWxzZTtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdoaWxlICh2YWxpZFBvc2l0aW9uID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IFtyb3csIGNvbHVtbl0gPSBjb21wdXRlclBsYXlzKHBsYXllcnNBcnJbMV0uZ2FtZWJvYXJkLm1hcC5sZW5ndGgsIGdhbWVSZWNvcmRbZ2FtZVNwYWNlLnR1cm5dLCBpc1JhbmRvbSk7XG4gICAgICAgICAgICAgICAgdmFsaWRQb3NpdGlvbiA9IGNoZWNrVmFsaWRQb3NpdGlvbihwbGF5ZXJzQXJyLCBnYW1lU3BhY2UudHVybiwgcm93LCBjb2x1bW4pXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkUG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZ2FtZVJlY29yZFtnYW1lU3BhY2UudHVybl0ubW92ZXMucHVzaChbcm93LCBjb2x1bW5dKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29vcmRpbmF0ZXNUb1RyYXZlbCA9IGdldExhdW5jaGluZ0Nvb3JkaW5hdGVzKFtyb3csIGNvbHVtbl0sIHNpemUpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXZCb2FyZENoaWxkcmVuQ29tcHV0ZXJBcnJheSA9IFsuLi5kaXZCb2FyZHNbMF0uY2hpbGRyZW5dO1xuICAgICAgICAgICAgICAgICAgICBzaW1wbGVyTG9vcHMoY29vcmRpbmF0ZXNUb1RyYXZlbCwgZGl2Qm9hcmRDaGlsZHJlbkNvbXB1dGVyQXJyYXksIHByb2dyYW1tYWJsZURlbGF5KTtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVTcGFjZS5jb21wdXRlcklzUGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2FtZVNwYWNlLnR1cm4gPSAoZ2FtZVNwYWNlLnR1cm4gPT09IDAgPyAxIDogMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVDb21wdXRlclRoaW5raW5nRGl2KGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsaW5rVGFyZ2V0KGRpdkJvYXJkQ2hpbGRyZW5Db21wdXRlckFycmF5LCByb3csIGNvbHVtbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXZCb2FyZENoaWxkcmVuQXJyYXkuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIGhpZ2hsaWdodEF4aXNFdmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgaGlnaGxpZ2h0QXhpc0V2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHByb2dyYW1tYWJsZURlbGF5ICogY29vcmRpbmF0ZXNUb1RyYXZlbC5sZW5ndGggKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IGRpdkJvYXJkc1swXS5jaGlsZHJlbltyb3cgKiBzaXplICsgY29sdW1uXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHVybiA9IGdhbWVTcGFjZS50dXJuO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ2lzdGVySGl0KHBsYXllcnNBcnIsIHR1cm4sIHJvdywgY29sdW1uLCBjZWxsLCBnYW1lUmVjb3JkW3R1cm5dKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVSZWNvcmRbdHVybl0ubm9uU3Vua1NoaXBzSGl0UG9zaXRpb24ucHVzaChbcm93LCBjb2x1bW5dKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTaGlwU3VuayhwbGF5ZXJzQXJyW3R1cm5dLmdhbWVib2FyZCwgcm93LCBjb2x1bW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVSZWNvcmRbdHVybl0ucmVtb3ZlU3Vua1NoaXAoZ2V0U3Vua1NoaXBQb3NpdGlvbnMocGxheWVyc0Fyclt0dXJuXS5nYW1lYm9hcmQsIHJvdywgY29sdW1uKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdTaGlwU3VuayhwbGF5ZXJzQXJyLCByb3csIGNvbHVtbiwgdHVybik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhbWVSZWNvcmRbdHVybl0uc2VhcmNoaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJzQXJyW2dhbWVTcGFjZS50dXJuID8gMCA6IDFdLmdhbWVib2FyZC5hcmVTaGlwc0xlZnQoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUV2ZW50TGlzdGVuZXJzKGNsaWNrZWRFdmVudEZ1bmN0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW5kR2FtZShnYW1lU3BhY2UudHVybiwgcGxheWVyc0FyciwgbnVtYmVyT2ZTaGlwcywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSwgcHJvZ3JhbW1hYmxlRGVsYXkgKiAoY29vcmRpbmF0ZXNUb1RyYXZlbC5sZW5ndGggKyAxKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LCAxMDApO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZW5hYmxlQ29tcHV0ZXJUaGlua2luZ0RpdihmbGFnKSB7XG4gICAgY29uc3QgZGl2VGhpbmtpbmdTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21wdXRlci1zdGF0ZS1tb3ZlbWVudCcpO1xuICAgIGlmIChmbGFnKVxuICAgICAgICBkaXZUaGlua2luZ1N0YXRlLnRleHRDb250ZW50ID0gJ0NvbXB1dGVyIGlzIFRISU5LSU5HJztcbiAgICBlbHNlXG4gICAgICAgIGRpdlRoaW5raW5nU3RhdGUudGV4dENvbnRlbnQgPSAnJztcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSh0dXJuLCBwbGF5ZXJzQXJyLCBudW1iZXJPZlNoaXBzLCBmbGFnVXNlcldpbikge1xuICAgIGNoYW5nZUdhbWVUaXRsZShmbGFnVXNlcldpbiA/IDIgOiAzKTtcbiAgICBzZXRVcFJlcGxheUdhbWUocGxheWVyc0FyciwgbnVtYmVyT2ZTaGlwcywgZ2V0V2lubmVyRGl2KDEgLSB0dXJuKSwgZmxhZ1VzZXJXaW4pO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5uZXJEaXYod2lubmVySW5kZXgpIHtcbiAgICBjb25zdCBkaXZXaW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25zdCBzcGFuTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBzcGFuQXJyYXkgPSBbZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyldO1xuICAgIGNvbnN0IHdpbm5lck5hbWUgPSBbLi4uZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXllcnMtbmFtZScpXVt3aW5uZXJJbmRleF0udGV4dENvbnRlbnQ7XG4gICAgZGl2V2lubmVyLmNsYXNzTGlzdC5hZGQoJ3dpbm5lcicpO1xuICAgIHNwYW5OYW1lLnRleHRDb250ZW50ID0gYCR7d2lubmVyTmFtZX0gYDtcbiAgICBzcGFuQXJyYXlbMF0udGV4dENvbnRlbnQgPSAnUGxheWVyICc7XG4gICAgc3BhbkFycmF5WzFdLnRleHRDb250ZW50ID0gJ2dldHMgdGhlIGNvbXBldGl0aW9uISc7XG4gICAgZGl2V2lubmVyLmFwcGVuZENoaWxkKHNwYW5BcnJheVswXSk7XG4gICAgZGl2V2lubmVyLmFwcGVuZENoaWxkKHNwYW5OYW1lKTtcbiAgICBkaXZXaW5uZXIuYXBwZW5kQ2hpbGQoc3BhbkFycmF5WzFdKTtcbiAgICByZXR1cm4gZGl2V2lubmVyO1xufVxuXG5mdW5jdGlvbiBzZXRVcFJlcGxheUdhbWUocGxheWVyc0FyciwgbnVtYmVyT2ZTaGlwcywgd2lubmVyRGl2KSB7XG4gICAgY29uc3QgZGl2U2hpcHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1zZWxlY3Rpb24nKTtcbiAgICBjb25zdCByZXBsYXlCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXBsYXlCdXR0b24udGV4dENvbnRlbnQgPSAnUGxheSBhZ2Fpbic7XG4gICAgcmVwbGF5QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICByZXBsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHRvZ2dsZUhpZERpZmZpY3VsdHlEaXYoKTtcbiAgICAgICAgbW9kaWZ5Q29tcHV0ZXJUZXh0KCk7XG4gICAgICAgIGNoYW5nZUdhbWVUaXRsZSgwKTtcbiAgICAgICAgc2V0VXBQbGF5QnV0dG9ucyhwbGF5ZXJzQXJyLCBudW1iZXJPZlNoaXBzKTtcbiAgICAgICAgcmVwbGF5QnV0dG9uLnJlbW92ZSgpO1xuICAgICAgICB3aW5uZXJEaXYucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgZGl2U2hpcHMuYXBwZW5kQ2hpbGQod2lubmVyRGl2KTtcbiAgICBkaXZTaGlwcy5hcHBlbmRDaGlsZChyZXBsYXlCdXR0b24pO1xufVxuXG5mdW5jdGlvbiBzZXRVcFBsYXlCdXR0b25zKHBsYXllcnMsIG5TaGlwcykge1xuICAgIHJlc3RhcnRQbGF5ZXJzR3JpZChwbGF5ZXJzKTtcbiAgICBjb25zdCBkaXZCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtc2VsZWN0aW9uJyk7XG4gICAgY3JlYXRlUGxheUJ1dHRvbnMoZGl2QnV0dG9ucywgcGxheWVycywgblNoaXBzKTtcbiAgICByYW5kb21Qb3NpdGlvblN0YXJ0KHBsYXllcnMsIG5TaGlwcyk7XG4gICAgc2V0VXBNYW51YWxQb3NpdGlvbihwbGF5ZXJzLCBuU2hpcHMpO1xuICAgIHN0YXJ0R2FtZShwbGF5ZXJzLCB0cnVlLCBuU2hpcHMpO1xuICAgIGRpc2FibGVTdGFydEJ1dHRvbih0cnVlKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUGxheUJ1dHRvbnMoY29udGFpbmVyKSB7XG4gICAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXNldEJ1dHRvbi5pZCA9ICdyYW5kb21pemUtcGxhY2VtZW50JztcbiAgICByZXNldEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgY29uc3QgbWFudWFsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgbWFudWFsQnV0dG9uLmlkID0gJ21hbnVhbC1wbGFjZW1lbnQnO1xuICAgIG1hbnVhbEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgY29uc3Qgc3RhcnRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzdGFydEJ1dHRvbi5pZCA9ICdzdGFydC1nYW1lJztcbiAgICBzdGFydEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgY29udGFpbmVyLmFwcGVuZChyZXNldEJ1dHRvbik7XG4gICAgY29udGFpbmVyLmFwcGVuZChtYW51YWxCdXR0b24pO1xuICAgIGNvbnRhaW5lci5hcHBlbmQoc3RhcnRCdXR0b24pO1xufVxuXG5mdW5jdGlvbiByZWdpc3RlckhpdChwbGF5ZXJzQXJyLCB0dXJuLCByb3csIGNvbHVtbiwgY2VsbCwgcGxheWVyKSB7XG4gICAgbGV0IHNoaXBXYXNIaXQgPSBmYWxzZTtcbiAgICBwbGF5ZXJzQXJyW3R1cm5dLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKFtyb3csIGNvbHVtbl0pO1xuICAgIGlmIChwbGF5ZXJzQXJyW3R1cm5dLmdhbWVib2FyZC5wb3NpdGlvbnNWaXNpdGVkW3Jvd11bY29sdW1uXSA9PT0gdHJ1ZSkge1xuICAgICAgICBzaGlwV2FzSGl0ID0gdHJ1ZTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdodW1hblBsYXllcicpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodC10YXJnZXQnKTtcbiAgICAgICAgcGxheWVyLmhpdHMucHVzaCh0cnVlKTtcbiAgICAgICAgaWYgKHR1cm4gPT09IDEpIHtcbiAgICAgICAgICAgIHBsYXllci5sYXN0SGl0SW5kZXggPSBwbGF5ZXIubW92ZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHBsYXllci5zZWFyY2hpbmcgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ25vLWhpdCcpO1xuICAgICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodC10YXJnZXQnKTtcbiAgICAgICAgcGxheWVyLmhpdHMucHVzaChmYWxzZSk7XG4gICAgfVxuICAgIHJldHVybiBzaGlwV2FzSGl0O1xufVxuXG5mdW5jdGlvbiBjb2xvclBsYXllclNoaXBzKHNoaXBQb3NpdGlvbnMsIGkpIHtcbiAgICBpID0gaSA9PT0gMCA/IDEgOiAwXG4gICAgY29uc3QgZ2FtZUJvYXJkUGxheWVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmJvYXJkJyk7XG4gICAgc2hpcFBvc2l0aW9ucy5mb3JFYWNoKChwb3NpdGlvbikgPT4ge1xuICAgICAgICBnYW1lQm9hcmRQbGF5ZXJbaV0uY2hpbGRyZW5bcG9zaXRpb25bMF0gKiAxMCArIHBvc2l0aW9uWzFdXS5jbGFzc0xpc3QuYWRkKCdodW1hblBsYXllcicpO1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBtb2RpZnlDb21wdXRlclRleHQoaXNFYXN5KSB7XG4gICAgY29uc3QgY29tcHV0ZXJOYW1lRGl2ID0gWy4uLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbGF5ZXJzLW5hbWUnKV1bMV07XG4gICAgbGV0IHRleHREaWZmaWN1bHR5O1xuICAgIGlmIChpc0Vhc3kgPT09IHVuZGVmaW5lZClcbiAgICAgICAgdGV4dERpZmZpY3VsdHkgPSAnJztcbiAgICBlbHNlXG4gICAgICAgIHRleHREaWZmaWN1bHR5ID0gaXNFYXN5ID8gJyAoZWFzeSknIDogJyAoaGFyZCknXG4gICAgY29tcHV0ZXJOYW1lRGl2LnRleHRDb250ZW50ID0gYENPTVBVVEVSJHt0ZXh0RGlmZmljdWx0eX1gO1xufVxuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwcydcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3Rvcihib2FyZFNpemUpIHtcbiAgICAgICAgdGhpcy5zaXplID0gYm9hcmRTaXplO1xuICAgICAgICB0aGlzLm1hcCA9IHRoaXMuaW5pdGlhbGl6ZUFycihib2FyZFNpemUpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uc1Zpc2l0ZWQgPSB0aGlzLmluaXRpYWxpemVBcnIoYm9hcmRTaXplKTtcbiAgICB9XG5cbiAgICBpbml0aWFsaXplQXJyKGJvYXJkU2l6ZSkge1xuICAgICAgICBjb25zdCBhcnIgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZFNpemU7ICsraSlcbiAgICAgICAgICAgIGFyci5wdXNoKG5ldyBBcnJheShib2FyZFNpemUpKTtcbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICBhZGRTaGlwKHBvc2l0aW9uKSB7XG4gICAgICAgIGlmICghY2hlY2tWYWxpZENvb3JkaW5hdGVzKHBvc2l0aW9uLCB0aGlzLm1hcCkpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIC8vIFdlIGFzc3VtZSB0aGUgc2hpcHMgYXJlIGNvbXBsZXRlbHkgc3RyYWlnaHRcbiAgICAgICAgLy8gVGhlIGZpcnN0IGVsZW1lbnQgb2YgcG9zaXRpb24gaXMgdGhlIG1vc3QgbGVmdC9ib3R0b21cbiAgICAgICAgY29uc3QgeExlbmd0aCA9IHBvc2l0aW9uW3Bvc2l0aW9uLmxlbmd0aCAtIDFdWzBdIC0gcG9zaXRpb25bMF1bMF07XG4gICAgICAgIGNvbnN0IHlMZW5ndGggPSBwb3NpdGlvbltwb3NpdGlvbi5sZW5ndGggLSAxXVsxXSAtIHBvc2l0aW9uWzBdWzFdO1xuICAgICAgICBsZXQgc2hpcExlbmd0aCA9IE1hdGguYWJzKHhMZW5ndGggfHwgeUxlbmd0aCk7XG4gICAgICAgIGNvbnN0IG5ld1NoaXAgPSBuZXcgU2hpcChzaGlwTGVuZ3RoICsgMSk7XG4gICAgICAgIHBvc2l0aW9uLmZvckVhY2goKGNvb3JkaW5hdGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JkaW5hdGVbMF1dW2Nvb3JkaW5hdGVbMV1dID0gbmV3U2hpcDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZXMpIHtcbiAgICAgICAgLy8gbGV0cyBjaGVjayBpZiB0aGUgcG9zaXRpb24gaGFzIGJlZW4gdmlzaXRlZFxuICAgICAgICBpZiAodGhpcy5wb3NpdGlvbnNWaXNpdGVkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMubWFwW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMubWFwW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0uaGl0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNWaXNpdGVkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNWaXNpdGVkW2Nvb3JkaW5hdGVzWzBdXVtjb29yZGluYXRlc1sxXV0gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFyZVNoaXBzTGVmdCgpIHtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgdGhpcy5zaXplOyArK3JvdylcbiAgICAgICAgICAgIGZvciAobGV0IGNvbHVtbiA9IDA7IGNvbHVtbiA8IHRoaXMuc2l6ZTsgKytjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXBbcm93XVtjb2x1bW5dICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnBvc2l0aW9uc1Zpc2l0ZWRbcm93XVtjb2x1bW5dICE9PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrVmFsaWRDb29yZGluYXRlcyhjb29yZGluYXRlcywgbWFwKSB7XG4gICAgLy8gY2hlY2sgdGhhdCB0aGUgaW5wdXQgYXJlIG51bWJlcnNcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkaW5hdGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY29vcmRpbmF0ZXNbaV1bMF0gIT09ICdudW1iZXInIHx8IHR5cGVvZiBjb29yZGluYXRlc1tpXVswXSAhPT0gJ251bWJlcicpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChtYXBbY29vcmRpbmF0ZXNbaV1bMF1dID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgZWxzZSBpZiAobWFwW2Nvb3JkaW5hdGVzW2ldWzBdXVtjb29yZGluYXRlc1tpXVsxXV0gIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59XG4iLCJpbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJ1xuXG5leHBvcnQgZnVuY3Rpb24gYWRkU2hpcFRvUGxheWVyKHBsYXllciwgcG9zaXRpb25zKSB7XG4gICAgcGxheWVyLmdhbWVib2FyZC5hZGRTaGlwKHBvc2l0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVHYW1lUmVjb3JkKCkge1xuICAgIGNvbnN0IGh1bWFuID0ge1xuICAgICAgICBtb3ZlczogW10sXG4gICAgICAgIGhpdHM6IFtdLFxuICAgIH07XG4gICAgY29uc3QgY29tcHV0ZXIgPSB7XG4gICAgICAgIG1vdmVzOiBbXSxcbiAgICAgICAgbm9uU3Vua1NoaXBzSGl0UG9zaXRpb246IFtdLFxuICAgICAgICBoaXRzOiBbXSxcbiAgICAgICAgc2VhcmNoaW5nOiBmYWxzZSxcbiAgICAgICAgbGFzdEhpdEluZGV4OiAwLFxuICAgICAgICByZW1vdmVTdW5rU2hpcChzaGlwU3Vua0Nvb3JkaW5hdGVzKSB7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvb3JkaW5hdGUgb2Ygc2hpcFN1bmtDb29yZGluYXRlcykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSB0aGlzLm5vblN1bmtTaGlwc0hpdFBvc2l0aW9uLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm5vblN1bmtTaGlwc0hpdFBvc2l0aW9uW2ldWzBdID09PSBjb29yZGluYXRlWzBdICYmIHRoaXMubm9uU3Vua1NoaXBzSGl0UG9zaXRpb25baV1bMV0gPT09IGNvb3JkaW5hdGVbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9uU3Vua1NoaXBzSGl0UG9zaXRpb24uc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHJldHVybiBbaHVtYW4sIGNvbXB1dGVyXTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBsYXllcnMocGxheWVycywgc2l6ZSkge1xuICAgIHBsYXllcnMuc3BsaWNlKDAsIHBsYXllcnMubGVuZ3RoKTtcbiAgICBjb25zdCBwbGF5ZXJPbmUgPSBuZXcgUGxheWVyKHNpemUpO1xuICAgIGNvbnN0IHBsYXllclR3byA9IG5ldyBQbGF5ZXIoc2l6ZSk7XG4gICAgcGxheWVycy5wdXNoKHBsYXllck9uZSk7XG4gICAgcGxheWVycy5wdXNoKHBsYXllclR3byk7XG59XG4iLCJpbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZ2FtZWJvYXJkJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQbGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKHNpemUsIGlzSHVtYW4gPSB0cnVlKSB7XG4gICAgICAgIHRoaXMuZ2FtZWJvYXJkID0gbmV3IEdhbWVib2FyZChzaXplKTtcbiAgICAgICAgdGhpcy5odW1hbiA9IGlzSHVtYW47XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcCB7XG4gICAgI2xlbmd0aFxuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCkge1xuICAgICAgICB0aGlzLiNsZW5ndGggPSBsZW5ndGg7XG4gICAgfVxuXG4gICAgaGl0KCkge1xuICAgICAgICB0aGlzLiNsZW5ndGggLT0gMTtcbiAgICB9XG5cbiAgICBnZXQgbGVuZ3RoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy4jbGVuZ3RoO1xuICAgIH1cblxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2xlbmd0aCA9PT0gMCA/IHRydWUgOiBmYWxzZTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0VXBQbGF5ZXJOYW1lKGNhbGxiYWNrRGlzYWJsZUJ1dHRvbnMpIHtcbiAgICBjb25zdCBjb250YWluZXJOYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzLWNvbnRhaW5lcicpO1xuICAgIHNldFVwRGl2Rm9ybShjb250YWluZXJOYW1lcywgY2FsbGJhY2tEaXNhYmxlQnV0dG9ucyk7XG59XG5cbmZ1bmN0aW9uIHNldFVwRGl2Rm9ybShjb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZGl2Q29udGFpbmVyRm9ybVBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZDb250YWluZXJGb3JtUGxheWVyTmFtZS5jbGFzc0xpc3QuYWRkKCdjb250YWluZXItZm9ybScpO1xuICAgIHNldFVwRGl2Q29udGFpbmVyRm9ybU5hbWUoZGl2Q29udGFpbmVyRm9ybVBsYXllck5hbWUsIGNhbGxiYWNrKTtcbiAgICBjb250YWluZXIuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdhZnRlcmVuZCcsIGRpdkNvbnRhaW5lckZvcm1QbGF5ZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0VXBEaXZDb250YWluZXJGb3JtTmFtZShkaXZDb250YWluZXIsIGNhbGxiYWNrKSB7XG4gICAgY29uc3QgZm9ybVBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgc2V0VXBGb3JtKGZvcm1QbGF5ZXJOYW1lKTtcbiAgICBkaXZDb250YWluZXIuYXBwZW5kQ2hpbGQoZm9ybVBsYXllck5hbWUpO1xuICAgIGZvcm1QbGF5ZXJOYW1lLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICAgIGZvcm1FdmVudChlLCBjYWxsYmFjayk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdldFBsYXllck5hbWUoKSB7XG4gICAgY29uc3QgaW5wdXRQbGF5ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheWVyLW5hbWUtdGV4dCcpO1xuICAgIGNvbnN0IGlucHV0UGxheWVyTmFtZSA9IGlucHV0UGxheWVyLnZhbHVlO1xuICAgIHJldHVybiBpbnB1dFBsYXllck5hbWU7XG59XG5cbmZ1bmN0aW9uIGZvcm1FdmVudChlLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGZvcm0gPSBlLnRhcmdldDtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgY29uc3QgcGxheWVyTmFtZSA9IGdldFBsYXllck5hbWUoKTtcbiAgICBpZiAoaXNWYWxpZElucHV0KHBsYXllck5hbWUpKSB7XG4gICAgICAgIHNldFBsYXllck5hbWUocGxheWVyTmFtZSk7XG4gICAgICAgIHBhcmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIGNhbGxiYWNrKGZhbHNlLCB0cnVlKTtcbiAgICAgICAgY2hhbmdlR2FtZVRpdGxlKDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHNob3dFcnJvck1lc3NhZ2VJbnB1dChmb3JtKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VHYW1lVGl0bGUoc3RhdGUpIHtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZElucHV0KG5hbWUpIHtcbiAgICBpZiAobmFtZS5sZW5ndGggPiAwKVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2hvd0Vycm9yTWVzc2FnZUlucHV0KGZvcm0pIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVycm9yJykpXG4gICAgICAgIHJldHVyblxuICAgIGNvbnN0IGRpdkVycm9yTWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRpdkVycm9yTWVzc2FnZS5jbGFzc0xpc3QuYWRkKCdlcnJvcicpO1xuICAgIGRpdkVycm9yTWVzc2FnZS50ZXh0Q29udGVudCA9ICdQbGVhc2UgZml4IHlvdXIgaW5wdXQnO1xuICAgIGNvbnN0IGZvcm1MYXN0Q2hpbGQgPSBmb3JtLmNoaWxkcmVuW2Zvcm0uY2hpbGRyZW4ubGVuZ3RoIC0gMV07XG4gICAgZm9ybUxhc3RDaGlsZC5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgZGl2RXJyb3JNZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gc2V0VXBGb3JtKGZvcm0pIHtcbiAgICBmb3JtLmlkID0gJ3BsYXllci1kYXRhJztcbiAgICBjb25zdCBkaXZQbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29uc3QgaW5wdXRQbGF5ZXJOYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzZXRVcElucHV0UGxheWVyTmFtZShpbnB1dFBsYXllck5hbWUpO1xuICAgIHNldFVwRGl2UGxheWVyTmFtZShkaXZQbGF5ZXJOYW1lKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRpdlBsYXllck5hbWUpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRQbGF5ZXJOYW1lKTtcbn1cblxuZnVuY3Rpb24gc2V0VXBEaXZQbGF5ZXJOYW1lKGRpdlBsYXllck5hbWUpIHtcbiAgICBjb25zdCBzcGFuUGxheWVyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCBpbnB1dFBsYXllck5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGlucHV0UGxheWVyTmFtZS5wbGFjZWhvbGRlciA9ICdZb3VyIHBsYXllciBuYW1lJztcbiAgICBpbnB1dFBsYXllck5hbWUuaWQgPSAncGxheWVyLW5hbWUtdGV4dCc7XG4gICAgc3BhblBsYXllck5hbWUudGV4dENvbnRlbnQgPSAnUGxheWVyIG5hbWU6ICc7XG4gICAgZGl2UGxheWVyTmFtZS5hcHBlbmRDaGlsZChzcGFuUGxheWVyTmFtZSk7XG4gICAgZGl2UGxheWVyTmFtZS5hcHBlbmRDaGlsZChpbnB1dFBsYXllck5hbWUpO1xufVxuXG5mdW5jdGlvbiBzZXRVcElucHV0UGxheWVyTmFtZShpbnB1dFN1Ym1pdCkge1xuICAgIGlucHV0U3VibWl0LnR5cGUgPSAnc3VibWl0JztcbiAgICBpbnB1dFN1Ym1pdC52YWx1ZSA9ICdTZW5kJztcbn1cblxuZnVuY3Rpb24gc2V0UGxheWVyTmFtZShuYW1lKSB7XG4gICAgY29uc3QgZGl2TmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5ZXJzLW5hbWUnKTtcbiAgICBkaXZOYW1lLnRleHRDb250ZW50ID0gbmFtZTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHN0YXJ0R2FtZSBmcm9tICcuL2RvbU1hbmlwdWxhdGlvbidcbmltcG9ydCB7IGJhY2tncm91bmRXYXZlcywgaW5pdGlhbGl6ZVdhdmVzIH0gZnJvbSAnLi9iYWNrZ3JvdW5kLmpzJ1xuY29uc3QgR0FNRUJPQVJEX1NJWkUgPSAxMDtcbmNvbnN0IE5VTUJFUl9PRl9TSElQUyA9IDQ7XG5pbml0aWFsaXplV2F2ZXMoKTtcbmJhY2tncm91bmRXYXZlcygpO1xuc3RhcnRHYW1lKEdBTUVCT0FSRF9TSVpFLCBOVU1CRVJfT0ZfU0hJUFMpO1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=