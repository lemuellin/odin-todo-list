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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n    font-family: helvetica;\n    /* box-sizing: border-box; */\n    /* list-style: none; */\n    /* text-decoration: none; */\n}\n\nbody{\n    background-color: white;\n}\n\n.header{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100px;\n    background-color: #ff5e5b;\n    padding-left: 50px;\n}\n\n.dashboard{\n    display: flex;\n}\n\n    .sidePanel{\n        width: 20%;\n        height: 550px;\n        background-color: #d8d8d8;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n        .projectList, .todoList{\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n        \n        .project{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 240px;\n            font-size: 15px;\n        }\n\n        .project:hover{\n            background-color: #00cecb;\n            opacity: 0.8;\n        }\n\n        .project:active{\n            background-color: #00cecb;\n            opacity: 1;\n        }\n\n        .createProject, .editProject, .createTodo, .deleteProject{\n            width: 150px;\n            border: none;\n            border-radius: 20px;\n            font-size: 16px;\n            background-color: #ffed66;\n            padding: 10px;\n        }\n\n        .deleteProject{\n            background-color: red;\n        }\n\n        .createProject:hover, .editProject:hover, .createTodo:hover, .deleteProject:hover{\n            background-color: #ffb238;\n            opacity: 0.9;\n        }\n\n        .createProject:active,.editProject:active, .createTodo:active, .deleteProject:active{\n            background-color: #ff773d;\n        }\n\n    .mainPanel{\n        width: 80%;\n        height: 550px;\n        background-color: white;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .buttonBar{\n        width: 1000px;\n        display: flex;\n        justify-content: space-between;\n    }\n    \n    .todoContainer{\n        display: flex;\n        gap: 5px;\n    }\n\n        .todoItems{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 800px;\n            font-size: 15px;\n        }\n\n        .todoItemsComplete{\n            text-decoration: line-through;\n        }\n\n        .todoEditButton{\n            border: 1px solid black;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n        .todoDeleteButton{\n            border: 1px solid black;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n        .todoInfoButton{\n            border: 1px solid black;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n/* Project and Item Popup */\n.projectPopup{\n    display: none;\n}\n\n.itemPopup{\n    display: none;\n}\n\n    .projectForm{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .projectInput{\n        border: none;\n        border-radius: 10px;\n        background-color: #efefef;\n        height: 50px;\n        width: 225px;\n        font-size: 15px;\n        padding-left: 15px;\n    }\n\n    .projectSubmit, .projectCancel{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 30px;\n        width: 200px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .itemSubmit, .itemCancel{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 40px;\n        width: 100px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .projectCancel, .itemCancel{\n        background-color: #f55536;\n    }\n\n    .projectSubmit:hover, .projectCancel:hover, .itemSubmit:hover, .itemCancel:hover{\n        opacity:1;\n    }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;IAEI;QACI,UAAU;QACV,aAAa;QACb,yBAAyB;QACzB,eAAe;QACf,iBAAiB;QACjB,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;QAEI;YACI,aAAa;YACb,sBAAsB;YACtB,SAAS;QACb;;QAEA;YACI,YAAY;YACZ,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,YAAY;YACZ,eAAe;QACnB;;QAEA;YACI,yBAAyB;YACzB,YAAY;QAChB;;QAEA;YACI,yBAAyB;YACzB,UAAU;QACd;;QAEA;YACI,YAAY;YACZ,YAAY;YACZ,mBAAmB;YACnB,eAAe;YACf,yBAAyB;YACzB,aAAa;QACjB;;QAEA;YACI,qBAAqB;QACzB;;QAEA;YACI,yBAAyB;YACzB,YAAY;QAChB;;QAEA;YACI,yBAAyB;QAC7B;;IAEJ;QACI,UAAU;QACV,aAAa;QACb,uBAAuB;QACvB,eAAe;QACf,iBAAiB;QACjB,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;IAEA;QACI,aAAa;QACb,aAAa;QACb,8BAA8B;IAClC;;IAEA;QACI,aAAa;QACb,QAAQ;IACZ;;QAEI;YACI,YAAY;YACZ,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,YAAY;YACZ,eAAe;QACnB;;QAEA;YACI,6BAA6B;QACjC;;QAEA;YACI,uBAAuB;YACvB,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,WAAW;YACX,eAAe;QACnB;;QAEA;YACI,uBAAuB;YACvB,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,WAAW;YACX,eAAe;QACnB;;QAEA;YACI,uBAAuB;YACvB,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,WAAW;YACX,eAAe;QACnB;;AAER,2BAA2B;AAC3B;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;IAEI;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;IAEA;QACI,YAAY;QACZ,mBAAmB;QACnB,yBAAyB;QACzB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,YAAY;QACZ,mBAAmB;QACnB,yBAAyB;QACzB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,YAAY;QACZ,mBAAmB;QACnB,yBAAyB;QACzB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,SAAS;IACb","sourcesContent":["*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n    font-family: helvetica;\n    /* box-sizing: border-box; */\n    /* list-style: none; */\n    /* text-decoration: none; */\n}\n\nbody{\n    background-color: white;\n}\n\n.header{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100px;\n    background-color: #ff5e5b;\n    padding-left: 50px;\n}\n\n.dashboard{\n    display: flex;\n}\n\n    .sidePanel{\n        width: 20%;\n        height: 550px;\n        background-color: #d8d8d8;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n        .projectList, .todoList{\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n        \n        .project{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 240px;\n            font-size: 15px;\n        }\n\n        .project:hover{\n            background-color: #00cecb;\n            opacity: 0.8;\n        }\n\n        .project:active{\n            background-color: #00cecb;\n            opacity: 1;\n        }\n\n        .createProject, .editProject, .createTodo, .deleteProject{\n            width: 150px;\n            border: none;\n            border-radius: 20px;\n            font-size: 16px;\n            background-color: #ffed66;\n            padding: 10px;\n        }\n\n        .deleteProject{\n            background-color: red;\n        }\n\n        .createProject:hover, .editProject:hover, .createTodo:hover, .deleteProject:hover{\n            background-color: #ffb238;\n            opacity: 0.9;\n        }\n\n        .createProject:active,.editProject:active, .createTodo:active, .deleteProject:active{\n            background-color: #ff773d;\n        }\n\n    .mainPanel{\n        width: 80%;\n        height: 550px;\n        background-color: white;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .buttonBar{\n        width: 1000px;\n        display: flex;\n        justify-content: space-between;\n    }\n    \n    .todoContainer{\n        display: flex;\n        gap: 5px;\n    }\n\n        .todoItems{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 800px;\n            font-size: 15px;\n        }\n\n        .todoItemsComplete{\n            text-decoration: line-through;\n        }\n\n        .todoEditButton{\n            border: 1px solid black;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n        .todoDeleteButton{\n            border: 1px solid black;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n        .todoInfoButton{\n            border: 1px solid black;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n/* Project and Item Popup */\n.projectPopup{\n    display: none;\n}\n\n.itemPopup{\n    display: none;\n}\n\n    .projectForm{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .projectInput{\n        border: none;\n        border-radius: 10px;\n        background-color: #efefef;\n        height: 50px;\n        width: 225px;\n        font-size: 15px;\n        padding-left: 15px;\n    }\n\n    .projectSubmit, .projectCancel{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 30px;\n        width: 200px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .itemSubmit, .itemCancel{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 40px;\n        width: 100px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .projectCancel, .itemCancel{\n        background-color: #f55536;\n    }\n\n    .projectSubmit:hover, .projectCancel:hover, .itemSubmit:hover, .itemCancel:hover{\n        opacity:1;\n    }"],"sourceRoot":""}]);
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
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function initDOM(){
    const createProject = document.querySelector('.createProject');
    createProject.addEventListener('click', () => {popupOpen.project()});

    const projectCancel = document.querySelector('.projectCancel');
    projectCancel.addEventListener('click', (e)=>{
        e.preventDefault();
        popupClose.project();
    });

    const createTodo = document.querySelector('.createTodo');
    createTodo.addEventListener('click', ()=>{popupOpen.item()});

    const itemCancel = document.querySelector('.itemCancel');
    itemCancel.addEventListener('click', (e) => {
        e.preventDefault();
        popupClose.item();
    });
}

const popupOpen = (() => {
    const project = () => {
      document.querySelector('.projectPopup').style.display = 'block';
      document.querySelector('.createProject').style.display = 'none';
    }

    const item = () => {
      document.querySelector('.itemPopup').style.display = 'block';
      document.querySelector('.createTodo').style.display = 'none';
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
      document.querySelector('.createProject').style.display = 'block';
    }

    const item = () => {
      document.querySelector('.itemPopup').style.display = 'none';
      document.querySelector('.itemForm').reset();
      document.querySelector('.createTodo').style.display = 'block';
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
            const projects = document.createElement('button');
            projects.textContent = _projectList[eachProject];
            projects.classList.add('project');
            projects.classList.add(`projects${_index_js__WEBPACK_IMPORTED_MODULE_0__.projectCounter}`);
            projects.addEventListener('click', () => {

            });
            projectList.appendChild(projects);

        popupClose.project();
    }

    const item = (todo, sortedProject, nthProject, nthItem) => {
        const todoList = document.querySelector('.todoList');
        const todoContainer = document.createElement('div');
        todoContainer.classList.add('todoContainer');
        todoList.appendChild(todoContainer);

        //Todo Title
        const todoButton = document.createElement('button');
        todoButton.textContent = todo.title;
        todoButton.classList.add('todoItems');
        todoButton.style.cssText = (todo.status == "complete") ? "text-decoration: line-through;" : "text-decoration: none;";
        todoButton.addEventListener('click', () => {
            // sortedProject Status
            todo.status = (todo.status == "complete") ? "incomplete" : "complete";
            // CSS - Line Through
            todoButton.style.cssText = (todo.status == "complete") ? "text-decoration: line-through;" : "text-decoration: none;";
        });
        todoContainer.appendChild(todoButton);

        //Todo Edit
        const todoEditButton = document.createElement('button');
        todoEditButton.classList.add('todoEditButton');
        todoEditButton.textContent = "Edit";
        todoEditButton.addEventListener('click', () => {
            popupOpen.item();

        });
        todoContainer.appendChild(todoEditButton);

        //Todo Delete
        const todoDeleteButton = document.createElement('button');
        todoDeleteButton.classList.add('todoDeleteButton');
        todoDeleteButton.textContent = "Delete";
        todoDeleteButton.addEventListener('click', () => {
            //remove DOM
            todoList.removeChild(todoContainer);
            //remove object from array
            sortedProject[nthProject].splice(nthItem,1);
            //render main panel
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.projectButton)();
        });
        todoContainer.appendChild(todoDeleteButton);

        //Todo Info
        const todoInfoButton = document.createElement('button');
        todoInfoButton.classList.add('todoInfoButton');
        todoInfoButton.textContent = "i";
        todoContainer.appendChild(todoInfoButton);

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



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectButton": () => (/* binding */ projectButton),
/* harmony export */   "projectCounter": () => (/* binding */ projectCounter)
/* harmony export */ });
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _algor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./algor.js */ "./src/algor.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");




// Variables
let project = []; // all todos goes here
let sortedProject = []; // sorted all todos based on project#
let projectList = []; // all projects goes here
let currentProject;
let projectCounter = 0;

(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.initDOM)();

//#region Initialization - create Default Projects and Todo Items
(0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.createProjectAlgor)("Family", projectList); projectCounter++;
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title11', 'description11', 'project0', "incomplete"));
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title12', 'description12', 'project0', "incomplete"));
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title13', 'description13', 'project0', "incomplete"));

(0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.createProjectAlgor)("Work", projectList); projectCounter++;
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title21', 'description21', 'project1', "incomplete"));
project.push((0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)('title22', 'description22', 'project1', "incomplete"));

(0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.createProjectAlgor)("Hobbies", projectList); projectCounter++;
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

// Project Button Behavior
const todoList = document.querySelector('.todoList');
function projectButton() {
    const _projectList = document.querySelector('.projectList');
    const projectListChild = _projectList.children;
    // Loop through nodes of a parent
    for (let i = 0; i < projectListChild.length; i++){
        const child = projectListChild[i];
        child.addEventListener('click', () => {
            currentProject = i;            

            // clear the main panel
            while(todoList.firstChild){todoList.firstChild.remove()};

            if (sortedProject[i]){
                for (let eachTodo = 0; eachTodo < sortedProject[i].length; eachTodo++){
                    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.createDOM.item(sortedProject[i][eachTodo], sortedProject, i, eachTodo); //, sortedProject[i], eachTodo+1);
                }
            }
        });
    }
}
projectButton();

// Create Project Submit Button

const projectSubmit = document.querySelector('.projectSubmit');
projectSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    (0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.createProjectAlgor)(document.querySelector('.projectInput').value, projectList);
    projectCounter++;
    projectButton();
});

// Create ToDo Item Submit Button
const itemSubmit = document.querySelector('.itemSubmit');
itemSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // submit new todo to project
    let todo = (0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)(document.querySelector('.title').value, document.querySelector('.description').value, currentProject, "incomplete")

    if (sortedProject[currentProject]){
        sortedProject[currentProject].push(todo);
    } else {
        sortedProject[currentProject]=[];
        sortedProject[currentProject].push(todo);
    }

    //create DOM and behavior
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.createDOM.item(todo, sortedProject, currentProject, sortedProject[currentProject].length-1);
});

// Edit Project Button
const editProject = document.querySelector('.editProject');
editProject.addEventListener('click', (e) => {
    e.preventDefault();


});

// Delete Project Button
const deleteProject = document.querySelector('.deleteProject');
deleteProject.addEventListener('click', () => {
// Remove DOM
    const _projectList = document.querySelector('.projectList');
    _projectList.removeChild(document.querySelector(`.projects${currentProject}`));

// Remove object from projectList array
    projectList.splice(currentProject,1);

// Remove object from todoList
    sortedProject.splice(currentProject,1);

// clear the main panel
    while(todoList.firstChild){todoList.firstChild.remove()};

    projectButton();
});

// Edit Item Button

// Show Item Info




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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSxtREFBYztBQUNsQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnRUFBZ0UsZUFBZTs7QUFFL0U7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsK0JBQStCOztBQUUvQjtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7Ozs7Ozs7OztVQ3pIQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL0RPTS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9hbGdvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcXG4gICAgLyogYm94LXNpemluZzogYm9yZGVyLWJveDsgKi9cXG4gICAgLyogbGlzdC1zdHlsZTogbm9uZTsgKi9cXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiBub25lOyAqL1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1ZTViO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxufVxcblxcbi5kYXNoYm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiAgICAuc2lkZVBhbmVse1xcbiAgICAgICAgd2lkdGg6IDIwJTtcXG4gICAgICAgIGhlaWdodDogNTUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC5wcm9qZWN0TGlzdCwgLnRvZG9MaXN0e1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC5wcm9qZWN0e1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvamVjdDpob3ZlcntcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZWNiO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9qZWN0OmFjdGl2ZXtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZWNiO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3JlYXRlUHJvamVjdCwgLmVkaXRQcm9qZWN0LCAuY3JlYXRlVG9kbywgLmRlbGV0ZVByb2plY3R7XFxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZDY2O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGVsZXRlUHJvamVjdHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3JlYXRlUHJvamVjdDpob3ZlciwgLmVkaXRQcm9qZWN0OmhvdmVyLCAuY3JlYXRlVG9kbzpob3ZlciwgLmRlbGV0ZVByb2plY3Q6aG92ZXJ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjIzODtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3JlYXRlUHJvamVjdDphY3RpdmUsLmVkaXRQcm9qZWN0OmFjdGl2ZSwgLmNyZWF0ZVRvZG86YWN0aXZlLCAuZGVsZXRlUHJvamVjdDphY3RpdmV7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzczZDtcXG4gICAgICAgIH1cXG5cXG4gICAgLm1haW5QYW5lbHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uQmFye1xcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG4gICAgXFxuICAgIC50b2RvQ29udGFpbmVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICB9XFxuXFxuICAgICAgICAudG9kb0l0ZW1ze1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kb0l0ZW1zQ29tcGxldGV7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kb0VkaXRCdXR0b257XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kb0RlbGV0ZUJ1dHRvbntcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvSW5mb0J1dHRvbntcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG5cXG4vKiBQcm9qZWN0IGFuZCBJdGVtIFBvcHVwICovXFxuLnByb2plY3RQb3B1cHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLml0ZW1Qb3B1cHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuICAgIC5wcm9qZWN0Rm9ybXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdElucHV0e1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICB3aWR0aDogMjI1cHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RTdWJtaXQsIC5wcm9qZWN0Q2FuY2Vse1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGEzOWU7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG5cXG4gICAgLml0ZW1TdWJtaXQsIC5pdGVtQ2FuY2Vse1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGEzOWU7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RDYW5jZWwsIC5pdGVtQ2FuY2Vse1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NTUzNjtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdFN1Ym1pdDpob3ZlciwgLnByb2plY3RDYW5jZWw6aG92ZXIsIC5pdGVtU3VibWl0OmhvdmVyLCAuaXRlbUNhbmNlbDpob3ZlcntcXG4gICAgICAgIG9wYWNpdHk6MTtcXG4gICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7SUFFSTtRQUNJLFVBQVU7UUFDVixhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztJQUNiOztRQUVJO1lBQ0ksYUFBYTtZQUNiLHNCQUFzQjtZQUN0QixTQUFTO1FBQ2I7O1FBRUE7WUFDSSxZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLHlCQUF5QjtZQUN6QixZQUFZO1lBQ1osWUFBWTtZQUNaLGVBQWU7UUFDbkI7O1FBRUE7WUFDSSx5QkFBeUI7WUFDekIsWUFBWTtRQUNoQjs7UUFFQTtZQUNJLHlCQUF5QjtZQUN6QixVQUFVO1FBQ2Q7O1FBRUE7WUFDSSxZQUFZO1lBQ1osWUFBWTtZQUNaLG1CQUFtQjtZQUNuQixlQUFlO1lBQ2YseUJBQXlCO1lBQ3pCLGFBQWE7UUFDakI7O1FBRUE7WUFDSSxxQkFBcUI7UUFDekI7O1FBRUE7WUFDSSx5QkFBeUI7WUFDekIsWUFBWTtRQUNoQjs7UUFFQTtZQUNJLHlCQUF5QjtRQUM3Qjs7SUFFSjtRQUNJLFVBQVU7UUFDVixhQUFhO1FBQ2IsdUJBQXVCO1FBQ3ZCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztJQUNiOztJQUVBO1FBQ0ksYUFBYTtRQUNiLGFBQWE7UUFDYiw4QkFBOEI7SUFDbEM7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsUUFBUTtJQUNaOztRQUVJO1lBQ0ksWUFBWTtZQUNaLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsWUFBWTtZQUNaLFlBQVk7WUFDWixlQUFlO1FBQ25COztRQUVBO1lBQ0ksNkJBQTZCO1FBQ2pDOztRQUVBO1lBQ0ksdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsWUFBWTtZQUNaLFdBQVc7WUFDWCxlQUFlO1FBQ25COztRQUVBO1lBQ0ksdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsWUFBWTtZQUNaLFdBQVc7WUFDWCxlQUFlO1FBQ25COztRQUVBO1lBQ0ksdUJBQXVCO1lBQ3ZCLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsWUFBWTtZQUNaLFdBQVc7WUFDWCxlQUFlO1FBQ25COztBQUVSLDJCQUEyQjtBQUMzQjtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztJQUVJO1FBQ0ksYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztJQUNiOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2Ysa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxTQUFTO0lBQ2JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xcbiAgICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xcbiAgICAvKiBsaXN0LXN0eWxlOiBub25lOyAqL1xcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICovXFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjVlNWI7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG59XFxuXFxuLmRhc2hib2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuICAgIC5zaWRlUGFuZWx7XFxuICAgICAgICB3aWR0aDogMjAlO1xcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAgICAgLnByb2plY3RMaXN0LCAudG9kb0xpc3R7XFxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgICAgIGdhcDogMTBweDtcXG4gICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgLnByb2plY3R7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDI0MHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9qZWN0OmhvdmVye1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNlY2I7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3Q6YWN0aXZle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGNlY2I7XFxuICAgICAgICAgICAgb3BhY2l0eTogMTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jcmVhdGVQcm9qZWN0LCAuZWRpdFByb2plY3QsIC5jcmVhdGVUb2RvLCAuZGVsZXRlUHJvamVjdHtcXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVkNjY7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5kZWxldGVQcm9qZWN0e1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jcmVhdGVQcm9qZWN0OmhvdmVyLCAuZWRpdFByb2plY3Q6aG92ZXIsIC5jcmVhdGVUb2RvOmhvdmVyLCAuZGVsZXRlUHJvamVjdDpob3ZlcntcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMjM4O1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jcmVhdGVQcm9qZWN0OmFjdGl2ZSwuZWRpdFByb2plY3Q6YWN0aXZlLCAuY3JlYXRlVG9kbzphY3RpdmUsIC5kZWxldGVQcm9qZWN0OmFjdGl2ZXtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY3NzNkO1xcbiAgICAgICAgfVxcblxcbiAgICAubWFpblBhbmVse1xcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIGhlaWdodDogNTUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5idXR0b25CYXJ7XFxuICAgICAgICB3aWR0aDogMTAwMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRvZG9Db250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC50b2RvSXRlbXN7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvSXRlbXNDb21wbGV0ZXtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvRWRpdEJ1dHRvbntcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvRGVsZXRlQnV0dG9ue1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvZG9JbmZvQnV0dG9ue1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcblxcbi8qIFByb2plY3QgYW5kIEl0ZW0gUG9wdXAgKi9cXG4ucHJvamVjdFBvcHVwe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uaXRlbVBvcHVwe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4gICAgLnByb2plY3RGb3Jte1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0SW5wdXR7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgIHdpZHRoOiAyMjVweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdFN1Ym1pdCwgLnByb2plY3RDYW5jZWx7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwYTM5ZTtcXG4gICAgICAgIGhlaWdodDogMzBweDtcXG4gICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgfVxcblxcbiAgICAuaXRlbVN1Ym1pdCwgLml0ZW1DYW5jZWx7XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIwYTM5ZTtcXG4gICAgICAgIGhlaWdodDogNDBweDtcXG4gICAgICAgIHdpZHRoOiAxMDBweDtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdENhbmNlbCwgLml0ZW1DYW5jZWx7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjU1NTM2O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0U3VibWl0OmhvdmVyLCAucHJvamVjdENhbmNlbDpob3ZlciwgLml0ZW1TdWJtaXQ6aG92ZXIsIC5pdGVtQ2FuY2VsOmhvdmVye1xcbiAgICAgICAgb3BhY2l0eToxO1xcbiAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge3Byb2plY3RCdXR0b24sIHByb2plY3RDb3VudGVyfSBmcm9tICcuL2luZGV4LmpzJztcblxuZnVuY3Rpb24gaW5pdERPTSgpe1xuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlUHJvamVjdCcpO1xuICAgIGNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7cG9wdXBPcGVuLnByb2plY3QoKX0pO1xuXG4gICAgY29uc3QgcHJvamVjdENhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q2FuY2VsJyk7XG4gICAgcHJvamVjdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHBvcHVwQ2xvc2UucHJvamVjdCgpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgY3JlYXRlVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVUb2RvJyk7XG4gICAgY3JlYXRlVG9kby5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57cG9wdXBPcGVuLml0ZW0oKX0pO1xuXG4gICAgY29uc3QgaXRlbUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtQ2FuY2VsJyk7XG4gICAgaXRlbUNhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcG9wdXBDbG9zZS5pdGVtKCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IHBvcHVwT3BlbiA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0UG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVQcm9qZWN0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1Qb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZVRvZG8nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIGl0ZW0sXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IHBvcHVwQ2xvc2UgPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFBvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpLnJlc2V0KCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlUHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0gPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbVBvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtRm9ybScpLnJlc2V0KCk7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlVG9kbycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIGl0ZW0sXG4gICAgfTtcbn0pKCk7XG5cbmNvbnN0IGNyZWF0ZURPTSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9IChfcHJvamVjdExpc3QpID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICAgICAgbGV0IGVhY2hQcm9qZWN0ID0gX3Byb2plY3RMaXN0Lmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcHJvamVjdHMudGV4dENvbnRlbnQgPSBfcHJvamVjdExpc3RbZWFjaFByb2plY3RdO1xuICAgICAgICAgICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgICAgICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZChgcHJvamVjdHMke3Byb2plY3RDb3VudGVyfWApO1xuICAgICAgICAgICAgcHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuXG4gICAgICAgIHBvcHVwQ2xvc2UucHJvamVjdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0gPSAodG9kbywgc29ydGVkUHJvamVjdCwgbnRoUHJvamVjdCwgbnRoSXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdCcpO1xuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb0NvbnRhaW5lcicpO1xuICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcblxuICAgICAgICAvL1RvZG8gVGl0bGVcbiAgICAgICAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0b2RvQnV0dG9uLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvSXRlbXMnKTtcbiAgICAgICAgdG9kb0J1dHRvbi5zdHlsZS5jc3NUZXh0ID0gKHRvZG8uc3RhdHVzID09IFwiY29tcGxldGVcIikgPyBcInRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1wiIDogXCJ0ZXh0LWRlY29yYXRpb246IG5vbmU7XCI7XG4gICAgICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBzb3J0ZWRQcm9qZWN0IFN0YXR1c1xuICAgICAgICAgICAgdG9kby5zdGF0dXMgPSAodG9kby5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSA/IFwiaW5jb21wbGV0ZVwiIDogXCJjb21wbGV0ZVwiO1xuICAgICAgICAgICAgLy8gQ1NTIC0gTGluZSBUaHJvdWdoXG4gICAgICAgICAgICB0b2RvQnV0dG9uLnN0eWxlLmNzc1RleHQgPSAodG9kby5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSA/IFwidGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XCIgOiBcInRleHQtZGVjb3JhdGlvbjogbm9uZTtcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0J1dHRvbik7XG5cbiAgICAgICAgLy9Ub2RvIEVkaXRcbiAgICAgICAgY29uc3QgdG9kb0VkaXRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdG9kb0VkaXRCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb0VkaXRCdXR0b24nKTtcbiAgICAgICAgdG9kb0VkaXRCdXR0b24udGV4dENvbnRlbnQgPSBcIkVkaXRcIjtcbiAgICAgICAgdG9kb0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBwb3B1cE9wZW4uaXRlbSgpO1xuXG4gICAgICAgIH0pO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9FZGl0QnV0dG9uKTtcblxuICAgICAgICAvL1RvZG8gRGVsZXRlXG4gICAgICAgIGNvbnN0IHRvZG9EZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdG9kb0RlbGV0ZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvRGVsZXRlQnV0dG9uJyk7XG4gICAgICAgIHRvZG9EZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRlbGV0ZVwiO1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy9yZW1vdmUgRE9NXG4gICAgICAgICAgICB0b2RvTGlzdC5yZW1vdmVDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgICAgICAgICAgIC8vcmVtb3ZlIG9iamVjdCBmcm9tIGFycmF5XG4gICAgICAgICAgICBzb3J0ZWRQcm9qZWN0W250aFByb2plY3RdLnNwbGljZShudGhJdGVtLDEpO1xuICAgICAgICAgICAgLy9yZW5kZXIgbWFpbiBwYW5lbFxuICAgICAgICAgICAgcHJvamVjdEJ1dHRvbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnV0dG9uKTtcblxuICAgICAgICAvL1RvZG8gSW5mb1xuICAgICAgICBjb25zdCB0b2RvSW5mb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0b2RvSW5mb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvSW5mb0J1dHRvbicpO1xuICAgICAgICB0b2RvSW5mb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiaVwiO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JbmZvQnV0dG9uKTtcblxuICAgICAgICBwb3B1cENsb3NlLml0ZW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBpdGVtLFxuICAgIH1cbn0pKCk7XG5cblxuZXhwb3J0e1xuICAgIGluaXRET00sXG4gICAgY3JlYXRlRE9NLFxufTtcblxuXG4vLyBjcmVhdGUgSXRlbSBkcm9wIGRvd24gYSBsaXN0IG9mIHByb2plY3RcblxuICAgIC8vIERPTVxuICAgIC8vIGNvbnN0IGl0ZW1JbnB1dFByb2plY3REcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIC8vIGl0ZW1JbnB1dFByb2plY3REcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdpdGVtSW5wdXRQcm9qZWN0RHJvcERvd24nKTtcbiAgICAvLyBpdGVtSW5wdXRQcm9qZWN0RHJvcERvd24ubmFtZSA9IFwicHJvamVjdERyb3BEb3duXCI7XG4gICAgLy8gaXRlbUZvcm0uYXBwZW5kQ2hpbGQoaXRlbUlucHV0UHJvamVjdERyb3BEb3duKTtcblxuICAgIC8vICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICAvLyAgIGNvbnN0IGl0ZW1JbnB1dFByb2plY3REcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2l0ZW1JbnB1dFByb2plY3REcm9wRG93bicpO1xuICAgIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgLy8gICAgICAgICBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnMTIzJyk7XG4gICAgLy8gICAgICAgICBpLnZhbHVlID0gcHJvamVjdExpc3RbaV07XG4gICAgLy8gICAgICAgICBpdGVtSW5wdXRQcm9qZWN0RHJvcERvd24uYXBwZW5kQ2hpbGQoaSk7XG4gICAgLy8gICAgIH0iLCJpbXBvcnQgeyBjcmVhdGVET00gfSBmcm9tICcuL0RPTS5qcyc7XG5cbi8vIFRvZG8gSXRlbSBGYWN0b3J5IFxuY29uc3QgdG9kb0l0ZW0gPSAodGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBzdGF0dXMpID0+IHtcbiAgICAvLyBkdWVEYXRlLCBwcmlvcml0eVxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBzdGF0dXN9O1xufTtcblxuLy8gQ3JlYXRlIFByb2plY3QgQWxnb3JcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RBbGdvcihfbmFtZSwgcHJvamVjdExpc3Qpe1xuICAgIHByb2plY3RMaXN0LnB1c2goX25hbWUpO1xuICAgIGNyZWF0ZURPTS5wcm9qZWN0KHByb2plY3RMaXN0KTtcbn1cblxuZXhwb3J0IHtcbiAgICB0b2RvSXRlbSxcbiAgICBjcmVhdGVQcm9qZWN0QWxnb3IsXG59OyIsImltcG9ydCB7aW5pdERPTSwgY3JlYXRlRE9NfSBmcm9tICcuL0RPTS5qcyc7XG5pbXBvcnQge3RvZG9JdGVtLCBjcmVhdGVQcm9qZWN0QWxnb3J9IGZyb20gJy4vYWxnb3IuanMnO1xuaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cbi8vIFZhcmlhYmxlc1xubGV0IHByb2plY3QgPSBbXTsgLy8gYWxsIHRvZG9zIGdvZXMgaGVyZVxubGV0IHNvcnRlZFByb2plY3QgPSBbXTsgLy8gc29ydGVkIGFsbCB0b2RvcyBiYXNlZCBvbiBwcm9qZWN0I1xubGV0IHByb2plY3RMaXN0ID0gW107IC8vIGFsbCBwcm9qZWN0cyBnb2VzIGhlcmVcbmxldCBjdXJyZW50UHJvamVjdDtcbmxldCBwcm9qZWN0Q291bnRlciA9IDA7XG5cbmluaXRET00oKTtcblxuLy8jcmVnaW9uIEluaXRpYWxpemF0aW9uIC0gY3JlYXRlIERlZmF1bHQgUHJvamVjdHMgYW5kIFRvZG8gSXRlbXNcbmNyZWF0ZVByb2plY3RBbGdvcihcIkZhbWlseVwiLCBwcm9qZWN0TGlzdCk7IHByb2plY3RDb3VudGVyKys7XG5wcm9qZWN0LnB1c2godG9kb0l0ZW0oJ3RpdGxlMTEnLCAnZGVzY3JpcHRpb24xMScsICdwcm9qZWN0MCcsIFwiaW5jb21wbGV0ZVwiKSk7XG5wcm9qZWN0LnB1c2godG9kb0l0ZW0oJ3RpdGxlMTInLCAnZGVzY3JpcHRpb24xMicsICdwcm9qZWN0MCcsIFwiaW5jb21wbGV0ZVwiKSk7XG5wcm9qZWN0LnB1c2godG9kb0l0ZW0oJ3RpdGxlMTMnLCAnZGVzY3JpcHRpb24xMycsICdwcm9qZWN0MCcsIFwiaW5jb21wbGV0ZVwiKSk7XG5cbmNyZWF0ZVByb2plY3RBbGdvcihcIldvcmtcIiwgcHJvamVjdExpc3QpOyBwcm9qZWN0Q291bnRlcisrO1xucHJvamVjdC5wdXNoKHRvZG9JdGVtKCd0aXRsZTIxJywgJ2Rlc2NyaXB0aW9uMjEnLCAncHJvamVjdDEnLCBcImluY29tcGxldGVcIikpO1xucHJvamVjdC5wdXNoKHRvZG9JdGVtKCd0aXRsZTIyJywgJ2Rlc2NyaXB0aW9uMjInLCAncHJvamVjdDEnLCBcImluY29tcGxldGVcIikpO1xuXG5jcmVhdGVQcm9qZWN0QWxnb3IoXCJIb2JiaWVzXCIsIHByb2plY3RMaXN0KTsgcHJvamVjdENvdW50ZXIrKztcbnByb2plY3QucHVzaCh0b2RvSXRlbSgndGl0bGUzMScsICdkZXNjcmlwdGlvbjMxJywgJ3Byb2plY3QyJywgXCJpbmNvbXBsZXRlXCIpKTtcbnByb2plY3QucHVzaCh0b2RvSXRlbSgndGl0bGUzMicsICdkZXNjcmlwdGlvbjMyJywgJ3Byb2plY3QyJywgXCJpbmNvbXBsZXRlXCIpKTtcbnByb2plY3QucHVzaCh0b2RvSXRlbSgndGl0bGUzMycsICdkZXNjcmlwdGlvbjMzJywgJ3Byb2plY3QyJywgXCJpbmNvbXBsZXRlXCIpKTtcbnByb2plY3QucHVzaCh0b2RvSXRlbSgndGl0bGUzNCcsICdkZXNjcmlwdGlvbjM0JywgJ3Byb2plY3QyJywgXCJpbmNvbXBsZXRlXCIpKTtcblxuLy8jZW5kcmVnaW9uXG5cbi8vIFNvcnQgdG9kb3MgYmFzZWQgb24gcHJvamVjdCNcbmZ1bmN0aW9uIHNvcnRUb2RvICgpe1xuICAgIGZvciAobGV0IGkgPSAwOyBpPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHNvcnRlZFByb2plY3RbaV0gPSBwcm9qZWN0LmZpbHRlcih0b2RvID0+IHRvZG8ucHJvamVjdCA9PSBgcHJvamVjdCR7aX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvcnRlZFByb2plY3Q7XG59XG5zb3J0VG9kbygpO1xuXG4vLyBQcm9qZWN0IEJ1dHRvbiBCZWhhdmlvclxuY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0xpc3QnKTtcbmZ1bmN0aW9uIHByb2plY3RCdXR0b24oKSB7XG4gICAgY29uc3QgX3Byb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG4gICAgY29uc3QgcHJvamVjdExpc3RDaGlsZCA9IF9wcm9qZWN0TGlzdC5jaGlsZHJlbjtcbiAgICAvLyBMb29wIHRocm91Z2ggbm9kZXMgb2YgYSBwYXJlbnRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Q2hpbGQubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBjaGlsZCA9IHByb2plY3RMaXN0Q2hpbGRbaV07XG4gICAgICAgIGNoaWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBpOyAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyBjbGVhciB0aGUgbWFpbiBwYW5lbFxuICAgICAgICAgICAgd2hpbGUodG9kb0xpc3QuZmlyc3RDaGlsZCl7dG9kb0xpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKX07XG5cbiAgICAgICAgICAgIGlmIChzb3J0ZWRQcm9qZWN0W2ldKXtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlYWNoVG9kbyA9IDA7IGVhY2hUb2RvIDwgc29ydGVkUHJvamVjdFtpXS5sZW5ndGg7IGVhY2hUb2RvKyspe1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVET00uaXRlbShzb3J0ZWRQcm9qZWN0W2ldW2VhY2hUb2RvXSwgc29ydGVkUHJvamVjdCwgaSwgZWFjaFRvZG8pOyAvLywgc29ydGVkUHJvamVjdFtpXSwgZWFjaFRvZG8rMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5wcm9qZWN0QnV0dG9uKCk7XG5cbi8vIENyZWF0ZSBQcm9qZWN0IFN1Ym1pdCBCdXR0b25cblxuY29uc3QgcHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0U3VibWl0Jyk7XG5wcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY3JlYXRlUHJvamVjdEFsZ29yKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0SW5wdXQnKS52YWx1ZSwgcHJvamVjdExpc3QpO1xuICAgIHByb2plY3RDb3VudGVyKys7XG4gICAgcHJvamVjdEJ1dHRvbigpO1xufSk7XG5cbi8vIENyZWF0ZSBUb0RvIEl0ZW0gU3VibWl0IEJ1dHRvblxuY29uc3QgaXRlbVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtU3VibWl0Jyk7XG5pdGVtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gc3VibWl0IG5ldyB0b2RvIHRvIHByb2plY3RcbiAgICBsZXQgdG9kbyA9IHRvZG9JdGVtKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKS52YWx1ZSwgY3VycmVudFByb2plY3QsIFwiaW5jb21wbGV0ZVwiKVxuXG4gICAgaWYgKHNvcnRlZFByb2plY3RbY3VycmVudFByb2plY3RdKXtcbiAgICAgICAgc29ydGVkUHJvamVjdFtjdXJyZW50UHJvamVjdF0ucHVzaCh0b2RvKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBzb3J0ZWRQcm9qZWN0W2N1cnJlbnRQcm9qZWN0XT1bXTtcbiAgICAgICAgc29ydGVkUHJvamVjdFtjdXJyZW50UHJvamVjdF0ucHVzaCh0b2RvKTtcbiAgICB9XG5cbiAgICAvL2NyZWF0ZSBET00gYW5kIGJlaGF2aW9yXG4gICAgY3JlYXRlRE9NLml0ZW0odG9kbywgc29ydGVkUHJvamVjdCwgY3VycmVudFByb2plY3QsIHNvcnRlZFByb2plY3RbY3VycmVudFByb2plY3RdLmxlbmd0aC0xKTtcbn0pO1xuXG4vLyBFZGl0IFByb2plY3QgQnV0dG9uXG5jb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0UHJvamVjdCcpO1xuZWRpdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuXG59KTtcblxuLy8gRGVsZXRlIFByb2plY3QgQnV0dG9uXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZVByb2plY3QnKTtcbmRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4vLyBSZW1vdmUgRE9NXG4gICAgY29uc3QgX3Byb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG4gICAgX3Byb2plY3RMaXN0LnJlbW92ZUNoaWxkKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0cyR7Y3VycmVudFByb2plY3R9YCkpO1xuXG4vLyBSZW1vdmUgb2JqZWN0IGZyb20gcHJvamVjdExpc3QgYXJyYXlcbiAgICBwcm9qZWN0TGlzdC5zcGxpY2UoY3VycmVudFByb2plY3QsMSk7XG5cbi8vIFJlbW92ZSBvYmplY3QgZnJvbSB0b2RvTGlzdFxuICAgIHNvcnRlZFByb2plY3Quc3BsaWNlKGN1cnJlbnRQcm9qZWN0LDEpO1xuXG4vLyBjbGVhciB0aGUgbWFpbiBwYW5lbFxuICAgIHdoaWxlKHRvZG9MaXN0LmZpcnN0Q2hpbGQpe3RvZG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCl9O1xuXG4gICAgcHJvamVjdEJ1dHRvbigpO1xufSk7XG5cbi8vIEVkaXQgSXRlbSBCdXR0b25cblxuLy8gU2hvdyBJdGVtIEluZm9cblxuXG5leHBvcnR7XG4gICAgcHJvamVjdEJ1dHRvbixcbiAgICBwcm9qZWN0Q291bnRlcixcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9