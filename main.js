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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n    font-family: helvetica;\n    /* box-sizing: border-box; */\n    /* list-style: none; */\n    /* text-decoration: none; */\n}\n\nbody{\n    background-color: white;\n}\n\n.header{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100px;\n    background-color: #ff5e5b;\n    padding-left: 50px;\n}\n\n.dashboard{\n    display: flex;\n}\n\n    .sidePanel{\n        width: 20%;\n        height: 550px;\n        background-color: #d8d8d8;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n\n    }\n\n        .projectTitle{\n            text-align: left;\n            padding-left: 50px;\n        }\n\n        .projectList, .todoList{\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n        \n        .project{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 240px;\n            font-size: 15px;\n        }\n\n        .project:hover{\n            background-color: #00cecb;\n            opacity: 0.8;\n        }\n\n        .project:active{\n            background-color: #00cecb;\n            opacity: 1;\n        }\n\n        .createProject, .createTodo{\n            width: 150px;\n            border: none;\n            border-radius: 20px;\n            font-size: 16px;\n            background-color: #ffed66;\n            padding: 10px;\n        }\n\n        .createProject:hover, .createTodo:hover{\n            background-color: #ffb238;\n            opacity: 0.9;\n        }\n\n        .createProject:active, .createTodo:active{\n            background-color: #ff773d;\n        }\n\n    .mainPanel{\n        width: 80%;\n        height: 550px;\n        background-color: white;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n        .todoItems{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 1000px;\n            font-size: 15px;\n        }\n\n        .todoItemsComplete{\n            text-decoration: line-through;\n        }\n\n.itemPopup, .projectPopup{\n    display: none;\n    background-color: purple;\n    width: 300px;\n    height: 200px;\n\n    /* place it dead center in the window*/\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;IAEI;QACI,UAAU;QACV,aAAa;QACb,yBAAyB;QACzB,eAAe;QACf,iBAAiB;QACjB,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;;IAEb;;QAEI;YACI,gBAAgB;YAChB,kBAAkB;QACtB;;QAEA;YACI,aAAa;YACb,sBAAsB;YACtB,SAAS;QACb;;QAEA;YACI,YAAY;YACZ,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,YAAY;YACZ,eAAe;QACnB;;QAEA;YACI,yBAAyB;YACzB,YAAY;QAChB;;QAEA;YACI,yBAAyB;YACzB,UAAU;QACd;;QAEA;YACI,YAAY;YACZ,YAAY;YACZ,mBAAmB;YACnB,eAAe;YACf,yBAAyB;YACzB,aAAa;QACjB;;QAEA;YACI,yBAAyB;YACzB,YAAY;QAChB;;QAEA;YACI,yBAAyB;QAC7B;;IAEJ;QACI,UAAU;QACV,aAAa;QACb,uBAAuB;QACvB,eAAe;QACf,iBAAiB;QACjB,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;QAEI;YACI,YAAY;YACZ,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,aAAa;YACb,eAAe;QACnB;;QAEA;YACI,6BAA6B;QACjC;;AAER;IACI,aAAa;IACb,wBAAwB;IACxB,YAAY;IACZ,aAAa;;IAEb,sCAAsC;IACtC,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC","sourcesContent":["*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n    font-family: helvetica;\n    /* box-sizing: border-box; */\n    /* list-style: none; */\n    /* text-decoration: none; */\n}\n\nbody{\n    background-color: white;\n}\n\n.header{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100px;\n    background-color: #ff5e5b;\n    padding-left: 50px;\n}\n\n.dashboard{\n    display: flex;\n}\n\n    .sidePanel{\n        width: 20%;\n        height: 550px;\n        background-color: #d8d8d8;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n\n    }\n\n        .projectTitle{\n            text-align: left;\n            padding-left: 50px;\n        }\n\n        .projectList, .todoList{\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n        \n        .project{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 240px;\n            font-size: 15px;\n        }\n\n        .project:hover{\n            background-color: #00cecb;\n            opacity: 0.8;\n        }\n\n        .project:active{\n            background-color: #00cecb;\n            opacity: 1;\n        }\n\n        .createProject, .createTodo{\n            width: 150px;\n            border: none;\n            border-radius: 20px;\n            font-size: 16px;\n            background-color: #ffed66;\n            padding: 10px;\n        }\n\n        .createProject:hover, .createTodo:hover{\n            background-color: #ffb238;\n            opacity: 0.9;\n        }\n\n        .createProject:active, .createTodo:active{\n            background-color: #ff773d;\n        }\n\n    .mainPanel{\n        width: 80%;\n        height: 550px;\n        background-color: white;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n        .todoItems{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 1000px;\n            font-size: 15px;\n        }\n\n        .todoItemsComplete{\n            text-decoration: line-through;\n        }\n\n.itemPopup, .projectPopup{\n    display: none;\n    background-color: purple;\n    width: 300px;\n    height: 200px;\n\n    /* place it dead center in the window*/\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}"],"sourceRoot":""}]);
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

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initDOM": () => (/* binding */ initDOM),
/* harmony export */   "createDOM": () => (/* binding */ createDOM)
/* harmony export */ });
function initDOM(){
    const content = document.querySelector('#content');

    const header = document.createElement('h1');
    header.textContent = "To-Do List";
    header.classList.add('header');
    content.appendChild(header);

    const dashboard = document.createElement('div');
    dashboard.classList.add('dashboard');
    content.appendChild(dashboard);

        const sidePanel = document.createElement('div');
        sidePanel.classList.add('sidePanel');
        dashboard.appendChild(sidePanel);

            const projectTitle = document.createElement('div');
            projectTitle.textContent = 'Projects';
            sidePanel.appendChild(projectTitle);

            const projectList = document.createElement('div');
            projectList.classList.add('projectList');
            sidePanel.appendChild(projectList);

            const createProject = document.createElement('button');
            createProject.classList.add('createProject');
            createProject.textContent = 'Create Project';
            createProject.addEventListener('click', () => {popupOpen.project()});
            sidePanel.appendChild(createProject);

        const mainPanel = document.createElement('div');
        mainPanel.classList.add('mainPanel');
        dashboard.appendChild(mainPanel);

            const todoTitle = document.createElement('div');
            todoTitle.textContent = 'To-Do Items';
            mainPanel.appendChild(todoTitle);

            const todoList = document.createElement('div');
            todoList.classList.add('todoList');
            mainPanel.appendChild(todoList);

            const createTodo = document.createElement('button');
            createTodo.classList.add('createTodo');
            createTodo.textContent = 'Create To-Do';
            createTodo.addEventListener('click', ()=>{popupOpen.item()});
            mainPanel.appendChild(createTodo);
    
    const projectPopup = document.createElement('div');
    projectPopup.classList.add('projectPopup');
    document.body.appendChild(projectPopup);
    
        const projectForm = document.createElement('form');
        projectForm.classList.add('projectForm');
        projectPopup.appendChild(projectForm);

            const projectInput = document.createElement('input');
            projectInput.type = "text";
            projectInput.placeholder = "Enter Project Name";
            projectInput.name = "project";
            projectInput.classList.add('projectInput');
            projectForm.appendChild(projectInput);

            const projectSubmit = document.createElement('button');
            projectSubmit.textContent = "Submit";
            projectSubmit.classList.add('projectSubmit');
            projectForm.appendChild(projectSubmit);
            
            const projectCancel = document.createElement('button');
            projectCancel.textContent = "Cancel";
            projectCancel.classList.add('projectCancel');
            projectCancel.addEventListener('click', (e)=>{
                e.preventDefault();
                popupClose.project();
            });
            projectForm.appendChild(projectCancel);

    const itemPopup = document.createElement('div');
    itemPopup.classList.add('itemPopup');
    document.body.appendChild(itemPopup);
    
        const itemForm = document.createElement('form');
        itemForm.classList.add('itemForm');
        itemPopup.appendChild(itemForm);

            const itemInputTitle = document.createElement('input');
            itemInputTitle.type = "text";
            itemInputTitle.placeholder = "Enter Title";
            itemInputTitle.name = "title";
            itemInputTitle.classList.add('title');
            itemForm.appendChild(itemInputTitle);

            const itemInputDescription = document.createElement('input');
            itemInputDescription.type = "text";
            itemInputDescription.placeholder = "Enter Description";
            itemInputDescription.name = "description";
            itemInputDescription.classList.add('description');
            itemForm.appendChild(itemInputDescription);

            const itemSubmit = document.createElement('button');
            itemSubmit.textContent = "Submit";
            itemSubmit.classList.add('itemSubmit');
            itemForm.appendChild(itemSubmit);

            const itemCancel = document.createElement('button');
            itemCancel.textContent = "Cancel";
            itemCancel.classList.add('itemCancel');
            itemCancel.addEventListener('click', (e) => {
                e.preventDefault();
                popupClose.item();
            });
            itemForm.appendChild(itemCancel);
}

const popupOpen = (() => {
    const project = () => {
      document.querySelector('.projectPopup').style.display = 'block';
    }

    const item = () => {
      document.querySelector('.itemPopup').style.display = 'block';
    }

    return {
        project,
        item,
    };
})();

const popupClose = (() => {
    const project = () => {
      document.querySelector('.projectPopup').style.display = 'none';
      document.querySelector('.projectForm').reset();
    }

    const item = () => {
      document.querySelector('.itemPopup').style.display = 'none';
      document.querySelector('.itemForm').reset();
    }

    return {
        project,
        item,
    };
})();

const createDOM = (() => {


    const project = (_projectList) => {
        const projectList = document.querySelector('.projectList');
        let eachProject = _projectList.length - 1;
            let projects = document.createElement('button');
            projects.textContent = _projectList[eachProject];
            projects.classList.add('project');
            projects.classList.add(`projects${eachProject}`);
            projects.addEventListener('click', () => {

            });
            projectList.appendChild(projects);

        popupClose.project();
    }

    const item = (todo) => {
        const todoList = document.querySelector('.todoList');
        let todoButton = document.createElement('button');
        todoButton.textContent = todo.title;
        todoButton.classList.add('todoItems');
        todoButton.style.cssText = (todo.status == "complete") ? "text-decoration: line-through;" : "text-decoration: none;";
        todoButton.addEventListener('click', () => {
            // sortedProject Status
            todo.status = (todo.status == "complete") ? "incomplete" : "complete";
            // CSS - Line Through
            todoButton.style.cssText = (todo.status == "complete") ? "text-decoration: line-through;" : "text-decoration: none;";
        });
        todoList.appendChild(todoButton);
        popupClose.item();
    }

    return {
        project,
        item,
    }
})();





// create Item drop down a list of project

    // DOM
    // const itemInputProjectDropDown = document.createElement('select');
    // itemInputProjectDropDown.classList.add('itemInputProjectDropDown');
    // itemInputProjectDropDown.name = "projectDropDown";
    // itemForm.appendChild(itemInputProjectDropDown);

    //   const projectList = document.querySelector('.projectList');
    //   const itemInputProjectDropDown = document.querySelector('itemInputProjectDropDown');
    //   for (let i = 0; i < projectList.length; i++){
    //         i = document.createElement('option');
    //         console.log('123');
    //         i.value = projectList[i];
    //         itemInputProjectDropDown.appendChild(i);
    //     }

/***/ }),

/***/ "./src/algor.js":
/*!**********************!*\
  !*** ./src/algor.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoItem": () => (/* binding */ todoItem),
/* harmony export */   "createProjectAlgor": () => (/* binding */ createProjectAlgor)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");


// Todo Item Factory 
const todoItem = (title, description, project, status) => {
    // dueDate, priority
    return {title, description, project, status};
};

// Create Project Algor
function createProjectAlgor(_name, projectList){
    projectList.push(_name);
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.createDOM.project(projectList);
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
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _algor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algor.js */ "./src/algor.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




// Variables
let project = []; // all todos goes here
let sortedProject = []; // sorted all todos based on project#
let projectList = []; // all projects goes here
let currentProject;

(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.initDOM)();

//#region Initialization - create Default Projects and Todo Items
(0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.createProjectAlgor)("Family", projectList);
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title11', 'description11', 'project0', "incomplete"));
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title12', 'description12', 'project0', "incomplete"));
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title13', 'description13', 'project0', "incomplete"));

(0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.createProjectAlgor)("Work", projectList);
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title21', 'description21', 'project1', "incomplete"));
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title22', 'description22', 'project1', "incomplete"));

(0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.createProjectAlgor)("Hobbies", projectList);
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title31', 'description31', 'project2', "incomplete"));
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title32', 'description32', 'project2', "incomplete"));
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title33', 'description33', 'project2', "incomplete"));
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title34', 'description34', 'project2', "incomplete"));

//#endregion

// Sort todos based on project#
function sortTodo (){
    for (let i = 0; i< projectList.length; i++){
        sortedProject[i] = project.filter(todo => todo.project == `project${i}`);
    }
    return sortedProject;
}

sortTodo();

// Create Project Button
const projectSubmit = document.querySelector('.projectSubmit');
projectSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.createProjectAlgor)(document.querySelector('.projectInput').value, projectList);
    projectButton();
});

// Project Button Behavior
const todoList = document.querySelector('.todoList');
function projectButton() {
    for (let i = 0; i < projectList.length; i++){
        const _projectButton = document.querySelector(`.projects${i}`);
        _projectButton.addEventListener('click', () => {
            currentProject = `project${i}`;

            // clear the main panel
            while(todoList.firstChild){todoList.firstChild.remove()};

            for (let eachTodo = 0; eachTodo < sortedProject[i].length; eachTodo++){
                _DOM_js__WEBPACK_IMPORTED_MODULE_0__.createDOM.item(sortedProject[i][eachTodo]);
            }
        });
    }
}
projectButton();

// Create ToDo Item Submit Button
const itemSubmit = document.querySelector('.itemSubmit');
itemSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // submit new todo to project
    let todo = (0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)(document.querySelector('.title').value, document.querySelector('.description').value, currentProject, "incomplete")
    project.push(todo);
    //sort todo
    sortTodo();
    //create DOM and behavior
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.createDOM.item(todo);
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsaUVBQWlFLGdCQUFnQixpQkFBaUIsNkJBQTZCLGlDQUFpQyw2QkFBNkIsa0NBQWtDLEtBQUssU0FBUyw4QkFBOEIsR0FBRyxZQUFZLG9CQUFvQixrQ0FBa0MsMEJBQTBCLG9CQUFvQixnQ0FBZ0MseUJBQXlCLEdBQUcsZUFBZSxvQkFBb0IsR0FBRyxtQkFBbUIscUJBQXFCLHdCQUF3QixvQ0FBb0MsMEJBQTBCLDRCQUE0Qix3QkFBd0IsaUNBQWlDLDhCQUE4QixvQkFBb0IsU0FBUywwQkFBMEIsK0JBQStCLGlDQUFpQyxXQUFXLG9DQUFvQyw0QkFBNEIscUNBQXFDLHdCQUF3QixXQUFXLDZCQUE2QiwyQkFBMkIsa0NBQWtDLHdDQUF3QywyQkFBMkIsMkJBQTJCLDhCQUE4QixXQUFXLDJCQUEyQix3Q0FBd0MsMkJBQTJCLFdBQVcsNEJBQTRCLHdDQUF3Qyx5QkFBeUIsV0FBVyx3Q0FBd0MsMkJBQTJCLDJCQUEyQixrQ0FBa0MsOEJBQThCLHdDQUF3Qyw0QkFBNEIsV0FBVyxvREFBb0Qsd0NBQXdDLDJCQUEyQixXQUFXLHNEQUFzRCx3Q0FBd0MsV0FBVyxtQkFBbUIscUJBQXFCLHdCQUF3QixrQ0FBa0MsMEJBQTBCLDRCQUE0Qix3QkFBd0IsaUNBQWlDLDhCQUE4QixvQkFBb0IsT0FBTyx1QkFBdUIsMkJBQTJCLGtDQUFrQyx3Q0FBd0MsMkJBQTJCLDRCQUE0Qiw4QkFBOEIsV0FBVywrQkFBK0IsNENBQTRDLFdBQVcsOEJBQThCLG9CQUFvQiwrQkFBK0IsbUJBQW1CLG9CQUFvQixxRUFBcUUsZUFBZSxnQkFBZ0IsdUNBQXVDLEdBQUcsT0FBTyxnRkFBZ0YsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFdBQVcsWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGlEQUFpRCxnQkFBZ0IsaUJBQWlCLDZCQUE2QixpQ0FBaUMsNkJBQTZCLGtDQUFrQyxLQUFLLFNBQVMsOEJBQThCLEdBQUcsWUFBWSxvQkFBb0Isa0NBQWtDLDBCQUEwQixvQkFBb0IsZ0NBQWdDLHlCQUF5QixHQUFHLGVBQWUsb0JBQW9CLEdBQUcsbUJBQW1CLHFCQUFxQix3QkFBd0Isb0NBQW9DLDBCQUEwQiw0QkFBNEIsd0JBQXdCLGlDQUFpQyw4QkFBOEIsb0JBQW9CLFNBQVMsMEJBQTBCLCtCQUErQixpQ0FBaUMsV0FBVyxvQ0FBb0MsNEJBQTRCLHFDQUFxQyx3QkFBd0IsV0FBVyw2QkFBNkIsMkJBQTJCLGtDQUFrQyx3Q0FBd0MsMkJBQTJCLDJCQUEyQiw4QkFBOEIsV0FBVywyQkFBMkIsd0NBQXdDLDJCQUEyQixXQUFXLDRCQUE0Qix3Q0FBd0MseUJBQXlCLFdBQVcsd0NBQXdDLDJCQUEyQiwyQkFBMkIsa0NBQWtDLDhCQUE4Qix3Q0FBd0MsNEJBQTRCLFdBQVcsb0RBQW9ELHdDQUF3QywyQkFBMkIsV0FBVyxzREFBc0Qsd0NBQXdDLFdBQVcsbUJBQW1CLHFCQUFxQix3QkFBd0Isa0NBQWtDLDBCQUEwQiw0QkFBNEIsd0JBQXdCLGlDQUFpQyw4QkFBOEIsb0JBQW9CLE9BQU8sdUJBQXVCLDJCQUEyQixrQ0FBa0Msd0NBQXdDLDJCQUEyQiw0QkFBNEIsOEJBQThCLFdBQVcsK0JBQStCLDRDQUE0QyxXQUFXLDhCQUE4QixvQkFBb0IsK0JBQStCLG1CQUFtQixvQkFBb0IscUVBQXFFLGVBQWUsZ0JBQWdCLHVDQUF1QyxHQUFHLG1CQUFtQjtBQUNyNU07QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjs7QUFFakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxREFBcUQ7QUFDckQ7O0FBRUE7QUFDQSxnREFBZ0Q7QUFDaEQ7O0FBRUE7QUFDQSxxRkFBcUY7QUFDckY7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7O0FBRUE7QUFDQSxLQUFLO0FBQ0wsS0FBSzs7O0FBR0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxzQkFBc0IsaUJBQWlCO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHFCQUFxQjtBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVixpREFBaUQscUJBQXFCO0FBQ3RFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Ysc0RBQXNELHFCQUFxQjtBQUMzRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNyR2E7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQSxNQUErRjtBQUMvRixNQUFxRjtBQUNyRixNQUE0RjtBQUM1RixNQUErRztBQUMvRyxNQUF3RztBQUN4RyxNQUF3RztBQUN4RyxNQUFtRztBQUNuRztBQUNBOztBQUVBOztBQUVBLDRCQUE0QixxR0FBbUI7QUFDL0Msd0JBQXdCLGtIQUFhOztBQUVyQyx1QkFBdUIsdUdBQWE7QUFDcEM7QUFDQSxpQkFBaUIsK0ZBQU07QUFDdkIsNkJBQTZCLHNHQUFrQjs7QUFFL0MsYUFBYSwwR0FBRyxDQUFDLHNGQUFPOzs7O0FBSTZDO0FBQ3JFLE9BQU8saUVBQWUsc0ZBQU8sSUFBSSw2RkFBYyxHQUFHLDZGQUFjLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7QUMxQmhFOztBQUViOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEscUJBQXFCLDZCQUE2QjtBQUNsRDs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDdENhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7O0FDVmE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJOztBQUVqRjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7O0FDZkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkRBQTJELG9CQUFvQjtBQUMvRTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsaUJBQWlCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE4QyxZQUFZO0FBQzFEOztBQUVBLGFBQWE7QUFDYjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnR0FBZ0csMkJBQTJCO0FBQzNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0dBQW9HLDJCQUEyQjtBQUMvSCxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBTUM7OztBQUdGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHlCQUF5Qix3QkFBd0I7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ2hObUU7O0FBRW5FO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFpQjtBQUNyQjs7Ozs7Ozs7VUNaQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7Ozs7QUNONEM7QUFDWTtBQUNuQzs7QUFFckI7QUFDQSxrQkFBa0I7QUFDbEIsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0Qjs7QUFFQSxnREFBTzs7QUFFUDtBQUNBLDZEQUFrQjtBQUNsQixhQUFhLG1EQUFRO0FBQ3JCLGFBQWEsbURBQVE7QUFDckIsYUFBYSxtREFBUTs7QUFFckIsNkRBQWtCO0FBQ2xCLGFBQWEsbURBQVE7QUFDckIsYUFBYSxtREFBUTs7QUFFckIsNkRBQWtCO0FBQ2xCLGFBQWEsbURBQVE7QUFDckIsYUFBYSxtREFBUTtBQUNyQixhQUFhLG1EQUFRO0FBQ3JCLGFBQWEsbURBQVE7O0FBRXJCOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsdUJBQXVCO0FBQzNDLDRFQUE0RSxFQUFFO0FBQzlFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksNkRBQWtCO0FBQ3RCO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDLGtFQUFrRSxFQUFFO0FBQ3BFO0FBQ0EsdUNBQXVDLEVBQUU7O0FBRXpDO0FBQ0EsdUNBQXVDOztBQUV2QyxtQ0FBbUMsb0NBQW9DO0FBQ3ZFLGdCQUFnQixtREFBYztBQUM5QjtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsbURBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFjO0FBQ2xCLENBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9hbGdvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xcbiAgICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xcbiAgICAvKiBsaXN0LXN0eWxlOiBub25lOyAqL1xcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICovXFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjVlNWI7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG59XFxuXFxuLmRhc2hib2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuICAgIC5zaWRlUGFuZWx7XFxuICAgICAgICB3aWR0aDogMjAlO1xcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG5cXG4gICAgfVxcblxcbiAgICAgICAgLnByb2plY3RUaXRsZXtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9qZWN0TGlzdCwgLnRvZG9MaXN0e1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC5wcm9qZWN0e1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvamVjdDpob3ZlcntcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZWNiO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9qZWN0OmFjdGl2ZXtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZWNiO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3JlYXRlUHJvamVjdCwgLmNyZWF0ZVRvZG97XFxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZDY2O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3JlYXRlUHJvamVjdDpob3ZlciwgLmNyZWF0ZVRvZG86aG92ZXJ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjIzODtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3JlYXRlUHJvamVjdDphY3RpdmUsIC5jcmVhdGVUb2RvOmFjdGl2ZXtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NzNkO1xcbiAgICAgICAgfVxcblxcbiAgICAubWFpblBhbmVse1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIGhlaWdodDogNTUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAudG9kb0l0ZW1ze1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvZG9JdGVtc0NvbXBsZXRle1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICAgICAgfVxcblxcbi5pdGVtUG9wdXAsIC5wcm9qZWN0UG9wdXB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgd2lkdGg6IDMwMHB4O1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcblxcbiAgICAvKiBwbGFjZSBpdCBkZWFkIGNlbnRlciBpbiB0aGUgd2luZG93Ki9cXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztJQUVJO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixTQUFTOztJQUViOztRQUVJO1lBQ0ksZ0JBQWdCO1lBQ2hCLGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsU0FBUztRQUNiOztRQUVBO1lBQ0ksWUFBWTtZQUNaLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsWUFBWTtZQUNaLFlBQVk7WUFDWixlQUFlO1FBQ25COztRQUVBO1lBQ0kseUJBQXlCO1lBQ3pCLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSx5QkFBeUI7WUFDekIsVUFBVTtRQUNkOztRQUVBO1lBQ0ksWUFBWTtZQUNaLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLHlCQUF5QjtZQUN6QixhQUFhO1FBQ2pCOztRQUVBO1lBQ0kseUJBQXlCO1lBQ3pCLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSx5QkFBeUI7UUFDN0I7O0lBRUo7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFNBQVM7SUFDYjs7UUFFSTtZQUNJLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixhQUFhO1lBQ2IsZUFBZTtRQUNuQjs7UUFFQTtZQUNJLDZCQUE2QjtRQUNqQzs7QUFFUjtJQUNJLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGFBQWE7O0lBRWIsc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVye1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXFxuICAgIC8qIGxpc3Qtc3R5bGU6IG5vbmU7ICovXFxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgKi9cXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWU1YjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4uZGFzaGJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4gICAgLnNpZGVQYW5lbHtcXG4gICAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcblxcbiAgICB9XFxuXFxuICAgICAgICAucHJvamVjdFRpdGxle1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3RMaXN0LCAudG9kb0xpc3R7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLnByb2plY3R7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9qZWN0OmhvdmVye1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNlY2I7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3Q6YWN0aXZle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNlY2I7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jcmVhdGVQcm9qZWN0LCAuY3JlYXRlVG9kb3tcXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVkNjY7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jcmVhdGVQcm9qZWN0OmhvdmVyLCAuY3JlYXRlVG9kbzpob3ZlcntcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMjM4O1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jcmVhdGVQcm9qZWN0OmFjdGl2ZSwgLmNyZWF0ZVRvZG86YWN0aXZle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc3M2Q7XFxuICAgICAgICB9XFxuXFxuICAgIC5tYWluUGFuZWx7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC50b2RvSXRlbXN7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDEwMDBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kb0l0ZW1zQ29tcGxldGV7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgICAgICB9XFxuXFxuLml0ZW1Qb3B1cCwgLnByb2plY3RQb3B1cHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICB3aWR0aDogMzAwcHg7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuXFxuICAgIC8qIHBsYWNlIGl0IGRlYWQgY2VudGVyIGluIHRoZSB3aW5kb3cqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImZ1bmN0aW9uIGluaXRET00oKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJUby1EbyBMaXN0XCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGRhc2hib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhc2hib2FyZC5jbGFzc0xpc3QuYWRkKCdkYXNoYm9hcmQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRhc2hib2FyZCk7XG5cbiAgICAgICAgY29uc3Qgc2lkZVBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGVQYW5lbC5jbGFzc0xpc3QuYWRkKCdzaWRlUGFuZWwnKTtcbiAgICAgICAgZGFzaGJvYXJkLmFwcGVuZENoaWxkKHNpZGVQYW5lbCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICAgICAgICAgIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3QnKTtcbiAgICAgICAgICAgIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnY3JlYXRlUHJvamVjdCcpO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCc7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3BvcHVwT3Blbi5wcm9qZWN0KCl9KTtcbiAgICAgICAgICAgIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KTtcblxuICAgICAgICBjb25zdCBtYWluUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpblBhbmVsLmNsYXNzTGlzdC5hZGQoJ21haW5QYW5lbCcpO1xuICAgICAgICBkYXNoYm9hcmQuYXBwZW5kQ2hpbGQobWFpblBhbmVsKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSAnVG8tRG8gSXRlbXMnO1xuICAgICAgICAgICAgbWFpblBhbmVsLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvTGlzdCcpO1xuICAgICAgICAgICAgbWFpblBhbmVsLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgY3JlYXRlVG9kby5jbGFzc0xpc3QuYWRkKCdjcmVhdGVUb2RvJyk7XG4gICAgICAgICAgICBjcmVhdGVUb2RvLnRleHRDb250ZW50ID0gJ0NyZWF0ZSBUby1Ebyc7XG4gICAgICAgICAgICBjcmVhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9Pntwb3B1cE9wZW4uaXRlbSgpfSk7XG4gICAgICAgICAgICBtYWluUGFuZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kbyk7XG4gICAgXG4gICAgY29uc3QgcHJvamVjdFBvcHVwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcHJvamVjdFBvcHVwLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RQb3B1cCcpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQocHJvamVjdFBvcHVwKTtcbiAgICBcbiAgICAgICAgY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgICAgIHByb2plY3RGb3JtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RGb3JtJyk7XG4gICAgICAgIHByb2plY3RQb3B1cC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xuICAgICAgICAgICAgcHJvamVjdElucHV0LnBsYWNlaG9sZGVyID0gXCJFbnRlciBQcm9qZWN0IE5hbWVcIjtcbiAgICAgICAgICAgIHByb2plY3RJbnB1dC5uYW1lID0gXCJwcm9qZWN0XCI7XG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdElucHV0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0SW5wdXQpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0U3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgICAgIHByb2plY3RTdWJtaXQuY2xhc3NMaXN0LmFkZCgncHJvamVjdFN1Ym1pdCcpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFN1Ym1pdCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RDYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHByb2plY3RDYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICAgICAgcHJvamVjdENhbmNlbC5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Q2FuY2VsJyk7XG4gICAgICAgICAgICBwcm9qZWN0Q2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpPT57XG4gICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHBvcHVwQ2xvc2UucHJvamVjdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChwcm9qZWN0Q2FuY2VsKTtcblxuICAgIGNvbnN0IGl0ZW1Qb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGl0ZW1Qb3B1cC5jbGFzc0xpc3QuYWRkKCdpdGVtUG9wdXAnKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGl0ZW1Qb3B1cCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBpdGVtRm9ybS5jbGFzc0xpc3QuYWRkKCdpdGVtRm9ybScpO1xuICAgICAgICBpdGVtUG9wdXAuYXBwZW5kQ2hpbGQoaXRlbUZvcm0pO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtSW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpdGVtSW5wdXRUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICBpdGVtSW5wdXRUaXRsZS5wbGFjZWhvbGRlciA9IFwiRW50ZXIgVGl0bGVcIjtcbiAgICAgICAgICAgIGl0ZW1JbnB1dFRpdGxlLm5hbWUgPSBcInRpdGxlXCI7XG4gICAgICAgICAgICBpdGVtSW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoaXRlbUlucHV0VGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtSW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpdGVtSW5wdXREZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICBpdGVtSW5wdXREZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRW50ZXIgRGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgIGl0ZW1JbnB1dERlc2NyaXB0aW9uLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICBpdGVtSW5wdXREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoaXRlbUlucHV0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBpdGVtU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgICAgIGl0ZW1TdWJtaXQuY2xhc3NMaXN0LmFkZCgnaXRlbVN1Ym1pdCcpO1xuICAgICAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoaXRlbVN1Ym1pdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGl0ZW1DYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICAgICAgaXRlbUNhbmNlbC5jbGFzc0xpc3QuYWRkKCdpdGVtQ2FuY2VsJyk7XG4gICAgICAgICAgICBpdGVtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcG9wdXBDbG9zZS5pdGVtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGl0ZW1DYW5jZWwpO1xufVxuXG5jb25zdCBwb3B1cE9wZW4gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFBvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbSA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtUG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBpdGVtLFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBwb3B1cENsb3NlID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RQb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm0nKS5yZXNldCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0gPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbVBvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtRm9ybScpLnJlc2V0KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgaXRlbSxcbiAgICB9O1xufSkoKTtcblxuY29uc3QgY3JlYXRlRE9NID0gKCgpID0+IHtcblxuXG4gICAgY29uc3QgcHJvamVjdCA9IChfcHJvamVjdExpc3QpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICAgICAgbGV0IGVhY2hQcm9qZWN0ID0gX3Byb2plY3RMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBsZXQgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gX3Byb2plY3RMaXN0W2VhY2hQcm9qZWN0XTtcbiAgICAgICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoYHByb2plY3RzJHtlYWNoUHJvamVjdH1gKTtcbiAgICAgICAgICAgIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgICAgICBwb3B1cENsb3NlLnByb2plY3QoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtID0gKHRvZG8pID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0xpc3QnKTtcbiAgICAgICAgbGV0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb0l0ZW1zJyk7XG4gICAgICAgIHRvZG9CdXR0b24uc3R5bGUuY3NzVGV4dCA9ICh0b2RvLnN0YXR1cyA9PSBcImNvbXBsZXRlXCIpID8gXCJ0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcIiA6IFwidGV4dC1kZWNvcmF0aW9uOiBub25lO1wiO1xuICAgICAgICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gc29ydGVkUHJvamVjdCBTdGF0dXNcbiAgICAgICAgICAgIHRvZG8uc3RhdHVzID0gKHRvZG8uc3RhdHVzID09IFwiY29tcGxldGVcIikgPyBcImluY29tcGxldGVcIiA6IFwiY29tcGxldGVcIjtcbiAgICAgICAgICAgIC8vIENTUyAtIExpbmUgVGhyb3VnaFxuICAgICAgICAgICAgdG9kb0J1dHRvbi5zdHlsZS5jc3NUZXh0ID0gKHRvZG8uc3RhdHVzID09IFwiY29tcGxldGVcIikgPyBcInRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1wiIDogXCJ0ZXh0LWRlY29yYXRpb246IG5vbmU7XCI7XG4gICAgICAgIH0pO1xuICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvQnV0dG9uKTtcbiAgICAgICAgcG9wdXBDbG9zZS5pdGVtKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdCxcbiAgICAgICAgaXRlbSxcbiAgICB9XG59KSgpO1xuXG5cbmV4cG9ydHtcbiAgICBpbml0RE9NLFxuICAgIGNyZWF0ZURPTSxcbn07XG5cblxuLy8gY3JlYXRlIEl0ZW0gZHJvcCBkb3duIGEgbGlzdCBvZiBwcm9qZWN0XG5cbiAgICAvLyBET01cbiAgICAvLyBjb25zdCBpdGVtSW5wdXRQcm9qZWN0RHJvcERvd24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAvLyBpdGVtSW5wdXRQcm9qZWN0RHJvcERvd24uY2xhc3NMaXN0LmFkZCgnaXRlbUlucHV0UHJvamVjdERyb3BEb3duJyk7XG4gICAgLy8gaXRlbUlucHV0UHJvamVjdERyb3BEb3duLm5hbWUgPSBcInByb2plY3REcm9wRG93blwiO1xuICAgIC8vIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGl0ZW1JbnB1dFByb2plY3REcm9wRG93bik7XG5cbiAgICAvLyAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG4gICAgLy8gICBjb25zdCBpdGVtSW5wdXRQcm9qZWN0RHJvcERvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpdGVtSW5wdXRQcm9qZWN0RHJvcERvd24nKTtcbiAgICAvLyAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspe1xuICAgIC8vICAgICAgICAgaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJzEyMycpO1xuICAgIC8vICAgICAgICAgaS52YWx1ZSA9IHByb2plY3RMaXN0W2ldO1xuICAgIC8vICAgICAgICAgaXRlbUlucHV0UHJvamVjdERyb3BEb3duLmFwcGVuZENoaWxkKGkpO1xuICAgIC8vICAgICB9IiwiaW1wb3J0IHtpbml0RE9NLCBwb3B1cE9wZW4sIHBvcHVwQ2xvc2UsIGNyZWF0ZURPTX0gZnJvbSAnLi9ET00uanMnO1xuXG4vLyBUb2RvIEl0ZW0gRmFjdG9yeSBcbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgc3RhdHVzKSA9PiB7XG4gICAgLy8gZHVlRGF0ZSwgcHJpb3JpdHlcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgc3RhdHVzfTtcbn07XG5cbi8vIENyZWF0ZSBQcm9qZWN0IEFsZ29yXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QWxnb3IoX25hbWUsIHByb2plY3RMaXN0KXtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKF9uYW1lKTtcbiAgICBjcmVhdGVET00ucHJvamVjdChwcm9qZWN0TGlzdCk7XG59XG5cbmV4cG9ydCB7XG4gICAgdG9kb0l0ZW0sXG4gICAgY3JlYXRlUHJvamVjdEFsZ29yLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtpbml0RE9NLCBjcmVhdGVET019IGZyb20gJy4vRE9NLmpzJztcbmltcG9ydCB7dG9kb0l0ZW0sIGNyZWF0ZVByb2plY3RBbGdvcn0gZnJvbSAnLi9hbGdvci5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxuLy8gVmFyaWFibGVzXG5sZXQgcHJvamVjdCA9IFtdOyAvLyBhbGwgdG9kb3MgZ29lcyBoZXJlXG5sZXQgc29ydGVkUHJvamVjdCA9IFtdOyAvLyBzb3J0ZWQgYWxsIHRvZG9zIGJhc2VkIG9uIHByb2plY3QjXG5sZXQgcHJvamVjdExpc3QgPSBbXTsgLy8gYWxsIHByb2plY3RzIGdvZXMgaGVyZVxubGV0IGN1cnJlbnRQcm9qZWN0O1xuXG5pbml0RE9NKCk7XG5cbi8vI3JlZ2lvbiBJbml0aWFsaXphdGlvbiAtIGNyZWF0ZSBEZWZhdWx0IFByb2plY3RzIGFuZCBUb2RvIEl0ZW1zXG5jcmVhdGVQcm9qZWN0QWxnb3IoXCJGYW1pbHlcIiwgcHJvamVjdExpc3QpO1xucHJvamVjdC5wdXNoKHRvZG9JdGVtKCd0aXRsZTExJywgJ2Rlc2NyaXB0aW9uMTEnLCAncHJvamVjdDAnLCBcImluY29tcGxldGVcIikpO1xucHJvamVjdC5wdXNoKHRvZG9JdGVtKCd0aXRsZTEyJywgJ2Rlc2NyaXB0aW9uMTInLCAncHJvamVjdDAnLCBcImluY29tcGxldGVcIikpO1xucHJvamVjdC5wdXNoKHRvZG9JdGVtKCd0aXRsZTEzJywgJ2Rlc2NyaXB0aW9uMTMnLCAncHJvamVjdDAnLCBcImluY29tcGxldGVcIikpO1xuXG5jcmVhdGVQcm9qZWN0QWxnb3IoXCJXb3JrXCIsIHByb2plY3RMaXN0KTtcbnByb2plY3QucHVzaCh0b2RvSXRlbSgndGl0bGUyMScsICdkZXNjcmlwdGlvbjIxJywgJ3Byb2plY3QxJywgXCJpbmNvbXBsZXRlXCIpKTtcbnByb2plY3QucHVzaCh0b2RvSXRlbSgndGl0bGUyMicsICdkZXNjcmlwdGlvbjIyJywgJ3Byb2plY3QxJywgXCJpbmNvbXBsZXRlXCIpKTtcblxuY3JlYXRlUHJvamVjdEFsZ29yKFwiSG9iYmllc1wiLCBwcm9qZWN0TGlzdCk7XG5wcm9qZWN0LnB1c2godG9kb0l0ZW0oJ3RpdGxlMzEnLCAnZGVzY3JpcHRpb24zMScsICdwcm9qZWN0MicsIFwiaW5jb21wbGV0ZVwiKSk7XG5wcm9qZWN0LnB1c2godG9kb0l0ZW0oJ3RpdGxlMzInLCAnZGVzY3JpcHRpb24zMicsICdwcm9qZWN0MicsIFwiaW5jb21wbGV0ZVwiKSk7XG5wcm9qZWN0LnB1c2godG9kb0l0ZW0oJ3RpdGxlMzMnLCAnZGVzY3JpcHRpb24zMycsICdwcm9qZWN0MicsIFwiaW5jb21wbGV0ZVwiKSk7XG5wcm9qZWN0LnB1c2godG9kb0l0ZW0oJ3RpdGxlMzQnLCAnZGVzY3JpcHRpb24zNCcsICdwcm9qZWN0MicsIFwiaW5jb21wbGV0ZVwiKSk7XG5cbi8vI2VuZHJlZ2lvblxuXG4vLyBTb3J0IHRvZG9zIGJhc2VkIG9uIHByb2plY3QjXG5mdW5jdGlvbiBzb3J0VG9kbyAoKXtcbiAgICBmb3IgKGxldCBpID0gMDsgaTwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBzb3J0ZWRQcm9qZWN0W2ldID0gcHJvamVjdC5maWx0ZXIodG9kbyA9PiB0b2RvLnByb2plY3QgPT0gYHByb2plY3Qke2l9YCk7XG4gICAgfVxuICAgIHJldHVybiBzb3J0ZWRQcm9qZWN0O1xufVxuXG5zb3J0VG9kbygpO1xuXG4vLyBDcmVhdGUgUHJvamVjdCBCdXR0b25cbmNvbnN0IHByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFN1Ym1pdCcpO1xucHJvamVjdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNyZWF0ZVByb2plY3RBbGdvcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdElucHV0JykudmFsdWUsIHByb2plY3RMaXN0KTtcbiAgICBwcm9qZWN0QnV0dG9uKCk7XG59KTtcblxuLy8gUHJvamVjdCBCdXR0b24gQmVoYXZpb3JcbmNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9MaXN0Jyk7XG5mdW5jdGlvbiBwcm9qZWN0QnV0dG9uKCkge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdExpc3QubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBfcHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0cyR7aX1gKTtcbiAgICAgICAgX3Byb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBjdXJyZW50UHJvamVjdCA9IGBwcm9qZWN0JHtpfWA7XG5cbiAgICAgICAgICAgIC8vIGNsZWFyIHRoZSBtYWluIHBhbmVsXG4gICAgICAgICAgICB3aGlsZSh0b2RvTGlzdC5maXJzdENoaWxkKXt0b2RvTGlzdC5maXJzdENoaWxkLnJlbW92ZSgpfTtcblxuICAgICAgICAgICAgZm9yIChsZXQgZWFjaFRvZG8gPSAwOyBlYWNoVG9kbyA8IHNvcnRlZFByb2plY3RbaV0ubGVuZ3RoOyBlYWNoVG9kbysrKXtcbiAgICAgICAgICAgICAgICBjcmVhdGVET00uaXRlbShzb3J0ZWRQcm9qZWN0W2ldW2VhY2hUb2RvXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbnByb2plY3RCdXR0b24oKTtcblxuLy8gQ3JlYXRlIFRvRG8gSXRlbSBTdWJtaXQgQnV0dG9uXG5jb25zdCBpdGVtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1TdWJtaXQnKTtcbml0ZW1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBzdWJtaXQgbmV3IHRvZG8gdG8gcHJvamVjdFxuICAgIGxldCB0b2RvID0gdG9kb0l0ZW0oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLnZhbHVlLCBjdXJyZW50UHJvamVjdCwgXCJpbmNvbXBsZXRlXCIpXG4gICAgcHJvamVjdC5wdXNoKHRvZG8pO1xuICAgIC8vc29ydCB0b2RvXG4gICAgc29ydFRvZG8oKTtcbiAgICAvL2NyZWF0ZSBET00gYW5kIGJlaGF2aW9yXG4gICAgY3JlYXRlRE9NLml0ZW0odG9kbyk7XG59KTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=