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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n    font-family: helvetica;\n    /* box-sizing: border-box; */\n    /* list-style: none; */\n    /* text-decoration: none; */\n}\n\nbody{\n    background-color: white;\n}\n\n.header{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100px;\n    background-color: #ff5e5b;\n    padding-left: 50px;\n}\n\n.dashboard{\n    display: flex;\n}\n\n    .sidePanel{\n        width: 20%;\n        height: 550px;\n        background-color: #d8d8d8;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n        .projectTitle{\n            text-align: left;\n            padding-left: 50px;\n        }\n\n        .projectList, .todoList{\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n        \n        .project{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 240px;\n            font-size: 15px;\n        }\n\n        .project:hover{\n            background-color: #00cecb;\n            opacity: 0.8;\n        }\n\n        .project:active{\n            background-color: #00cecb;\n            opacity: 1;\n        }\n\n        .createProject, .createTodo, .deleteProject{\n            width: 150px;\n            border: none;\n            border-radius: 20px;\n            font-size: 16px;\n            background-color: #ffed66;\n            padding: 10px;\n        }\n\n        .deleteProject{\n            background-color: red;\n        }\n\n        .createProject:hover, .createTodo:hover, .deleteProject:hover{\n            background-color: #ffb238;\n            opacity: 0.9;\n        }\n\n        .createProject:active, .createTodo:active, .deleteProject:active{\n            background-color: #ff773d;\n        }\n\n    .mainPanel{\n        width: 80%;\n        height: 550px;\n        background-color: white;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .buttonBar{\n        width: 1000px;\n        display: flex;\n        justify-content: space-between;\n    }\n    \n    .todoContainer{\n        display: flex;\n        gap: 5px;\n    }\n\n        .todoItems{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 800px;\n            font-size: 15px;\n        }\n\n        .todoItemsComplete{\n            text-decoration: line-through;\n        }\n\n        .todoEditButton{\n            border: 1px solid black;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n        .todoDeleteButton{\n            border: 1px solid black;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n        .todoInfoButton{\n            border: 1px solid black;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n/* Project and Item Popup */\n.projectPopup{\n    display: none;\n}\n\n.itemPopup{\n    display: none;\n}\n\n    .projectForm{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .projectInput{\n        border: none;\n        border-radius: 10px;\n        background-color: #efefef;\n        height: 50px;\n        width: 225px;\n        font-size: 15px;\n        padding-left: 15px;\n    }\n\n    .projectSubmit, .projectCancel{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 30px;\n        width: 200px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .itemSubmit, .itemCancel{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 40px;\n        width: 100px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .projectCancel, .itemCancel{\n        background-color: #f55536;\n    }\n\n    .projectSubmit:hover, .projectCancel:hover, .itemSubmit:hover, .itemCancel:hover{\n        opacity:1;\n    }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;IAEI;QACI,UAAU;QACV,aAAa;QACb,yBAAyB;QACzB,eAAe;QACf,iBAAiB;QACjB,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;QAEI;YACI,gBAAgB;YAChB,kBAAkB;QACtB;;QAEA;YACI,aAAa;YACb,sBAAsB;YACtB,SAAS;QACb;;QAEA;YACI,YAAY;YACZ,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,YAAY;YACZ,eAAe;QACnB;;QAEA;YACI,yBAAyB;YACzB,YAAY;QAChB;;QAEA;YACI,yBAAyB;YACzB,UAAU;QACd;;QAEA;YACI,YAAY;YACZ,YAAY;YACZ,mBAAmB;YACnB,eAAe;YACf,yBAAyB;YACzB,aAAa;QACjB;;QAEA;YACI,qBAAqB;QACzB;;QAEA;YACI,yBAAyB;YACzB,YAAY;QAChB;;QAEA;YACI,yBAAyB;QAC7B;;IAEJ;QACI,UAAU;QACV,aAAa;QACb,uBAAuB;QACvB,eAAe;QACf,iBAAiB;QACjB,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;IAEA;QACI,aAAa;QACb,aAAa;QACb,8BAA8B;IAClC;;IAEA;QACI,aAAa;QACb,QAAQ;IACZ;;QAEI;YACI,YAAY;YACZ,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,YAAY;YACZ,eAAe;QACnB;;QAEA;YACI,6BAA6B;QACjC;;QAEA;YACI,uBAAuB;YACvB,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,WAAW;YACX,eAAe;QACnB;;QAEA;YACI,uBAAuB;YACvB,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,WAAW;YACX,eAAe;QACnB;;QAEA;YACI,uBAAuB;YACvB,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,WAAW;YACX,eAAe;QACnB;;AAER,2BAA2B;AAC3B;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;IAEI;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;IAEA;QACI,YAAY;QACZ,mBAAmB;QACnB,yBAAyB;QACzB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,YAAY;QACZ,mBAAmB;QACnB,yBAAyB;QACzB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,YAAY;QACZ,mBAAmB;QACnB,yBAAyB;QACzB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,SAAS;IACb","sourcesContent":["*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n    font-family: helvetica;\n    /* box-sizing: border-box; */\n    /* list-style: none; */\n    /* text-decoration: none; */\n}\n\nbody{\n    background-color: white;\n}\n\n.header{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100px;\n    background-color: #ff5e5b;\n    padding-left: 50px;\n}\n\n.dashboard{\n    display: flex;\n}\n\n    .sidePanel{\n        width: 20%;\n        height: 550px;\n        background-color: #d8d8d8;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n        .projectTitle{\n            text-align: left;\n            padding-left: 50px;\n        }\n\n        .projectList, .todoList{\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n        \n        .project{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 240px;\n            font-size: 15px;\n        }\n\n        .project:hover{\n            background-color: #00cecb;\n            opacity: 0.8;\n        }\n\n        .project:active{\n            background-color: #00cecb;\n            opacity: 1;\n        }\n\n        .createProject, .createTodo, .deleteProject{\n            width: 150px;\n            border: none;\n            border-radius: 20px;\n            font-size: 16px;\n            background-color: #ffed66;\n            padding: 10px;\n        }\n\n        .deleteProject{\n            background-color: red;\n        }\n\n        .createProject:hover, .createTodo:hover, .deleteProject:hover{\n            background-color: #ffb238;\n            opacity: 0.9;\n        }\n\n        .createProject:active, .createTodo:active, .deleteProject:active{\n            background-color: #ff773d;\n        }\n\n    .mainPanel{\n        width: 80%;\n        height: 550px;\n        background-color: white;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .buttonBar{\n        width: 1000px;\n        display: flex;\n        justify-content: space-between;\n    }\n    \n    .todoContainer{\n        display: flex;\n        gap: 5px;\n    }\n\n        .todoItems{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 800px;\n            font-size: 15px;\n        }\n\n        .todoItemsComplete{\n            text-decoration: line-through;\n        }\n\n        .todoEditButton{\n            border: 1px solid black;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n        .todoDeleteButton{\n            border: 1px solid black;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n        .todoInfoButton{\n            border: 1px solid black;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n/* Project and Item Popup */\n.projectPopup{\n    display: none;\n}\n\n.itemPopup{\n    display: none;\n}\n\n    .projectForm{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .projectInput{\n        border: none;\n        border-radius: 10px;\n        background-color: #efefef;\n        height: 50px;\n        width: 225px;\n        font-size: 15px;\n        padding-left: 15px;\n    }\n\n    .projectSubmit, .projectCancel{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 30px;\n        width: 200px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .itemSubmit, .itemCancel{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 40px;\n        width: 100px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .projectCancel, .itemCancel{\n        background-color: #f55536;\n    }\n\n    .projectSubmit:hover, .projectCancel:hover, .itemSubmit:hover, .itemCancel:hover{\n        opacity:1;\n    }"],"sourceRoot":""}]);
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

            const createProjectInput = document.createElement('div');
            createProjectInput.classList.add('createProjectInput');
            sidePanel.appendChild(createProjectInput);

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

            const createTodoInput = document.createElement('div');
            createTodoInput.classList.add('createTodoInput');
            mainPanel.appendChild(createTodoInput);

            const buttonBar = document.createElement('div');
            buttonBar.classList.add('buttonBar');
            mainPanel.appendChild(buttonBar);

            const deleteProject = document.createElement('button');
            deleteProject.classList.add('deleteProject');
            deleteProject.textContent = 'Delete Project';
            buttonBar.appendChild(deleteProject);

            const editProject = document.createElement('button');
            editProject.classList.add('createTodo');
            editProject.textContent = 'Edit Project';
            buttonBar.appendChild(editProject);

            const createTodo = document.createElement('button');
            createTodo.classList.add('createTodo');
            createTodo.textContent = 'Create To-Do';
            createTodo.addEventListener('click', ()=>{popupOpen.item()});
            buttonBar.appendChild(createTodo);
    
    const projectPopup = document.createElement('div');
    projectPopup.classList.add('projectPopup');
    createProjectInput.appendChild(projectPopup);
    
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
    createTodoInput.appendChild(itemPopup);
    
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
            projects.classList.add(`projects${eachProject}`);
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
            
            // document.querySelector(`.X${nthProject}_${nthItem}`).style.display = 'none';
            todoList.removeChild(todoContainer);
            
            sortedProject[nthProject].splice(nthItem,1);
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.projectButton)();
            console.log(sortedProject[nthProject]);

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
/* harmony export */   "projectButton": () => (/* binding */ projectButton)
/* harmony export */ });
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
                _DOM_js__WEBPACK_IMPORTED_MODULE_0__.createDOM.item(sortedProject[i][eachTodo], sortedProject, i, eachTodo); //, sortedProject[i], eachTodo+1);
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
    projectButton();
});

// Create ToDo Item Submit Button
const itemSubmit = document.querySelector('.itemSubmit');
itemSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // submit new todo to project
    let todo = (0,_algor_js__WEBPACK_IMPORTED_MODULE_1__.todoItem)(document.querySelector('.title').value, document.querySelector('.description').value, currentProject, "incomplete")
    
    let nthProject = currentProject.slice(7,currentProject.length);
    sortedProject[nthProject].push(todo);

    //create DOM and behavior
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.createDOM.item(todo, sortedProject, nthProject, sortedProject[nthProject].length-1); //, sortedProject[string], sortedProject[string].length-1);
});


// need a current Item number to delete or edit the item





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2FsZ29yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiwgKjo6YmVmb3JlLCAqOjphZnRlcntcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBmb250LWZhbWlseTogaGVsdmV0aWNhO1xcbiAgICAvKiBib3gtc2l6aW5nOiBib3JkZXItYm94OyAqL1xcbiAgICAvKiBsaXN0LXN0eWxlOiBub25lOyAqL1xcbiAgICAvKiB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICovXFxufVxcblxcbmJvZHl7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGVhZGVye1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjVlNWI7XFxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG59XFxuXFxuLmRhc2hib2FyZHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuICAgIC5zaWRlUGFuZWx7XFxuICAgICAgICB3aWR0aDogMjAlO1xcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkOGQ4ZDg7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAgICAgLnByb2plY3RUaXRsZXtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNTBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9qZWN0TGlzdCwgLnRvZG9MaXN0e1xcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgICAgICBnYXA6IDEwcHg7XFxuICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgIC5wcm9qZWN0e1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAyNDBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvamVjdDpob3ZlcntcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZWNiO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuODtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5wcm9qZWN0OmFjdGl2ZXtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZWNiO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3JlYXRlUHJvamVjdCwgLmNyZWF0ZVRvZG8sIC5kZWxldGVQcm9qZWN0e1xcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZWQ2NjtcXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmRlbGV0ZVByb2plY3R7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNyZWF0ZVByb2plY3Q6aG92ZXIsIC5jcmVhdGVUb2RvOmhvdmVyLCAuZGVsZXRlUHJvamVjdDpob3ZlcntcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMjM4O1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuOTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jcmVhdGVQcm9qZWN0OmFjdGl2ZSwgLmNyZWF0ZVRvZG86YWN0aXZlLCAuZGVsZXRlUHJvamVjdDphY3RpdmV7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNzczZDtcXG4gICAgICAgIH1cXG5cXG4gICAgLm1haW5QYW5lbHtcXG4gICAgICAgIHdpZHRoOiA4MCU7XFxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgICBmb250LXNpemU6IDIwcHg7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uQmFye1xcbiAgICAgICAgd2lkdGg6IDEwMDBweDtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG4gICAgXFxuICAgIC50b2RvQ29udGFpbmVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGdhcDogNXB4O1xcbiAgICB9XFxuXFxuICAgICAgICAudG9kb0l0ZW1ze1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA4MDBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kb0l0ZW1zQ29tcGxldGV7XFxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kb0VkaXRCdXR0b257XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kb0RlbGV0ZUJ1dHRvbntcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvSW5mb0J1dHRvbntcXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG5cXG4vKiBQcm9qZWN0IGFuZCBJdGVtIFBvcHVwICovXFxuLnByb2plY3RQb3B1cHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLml0ZW1Qb3B1cHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuICAgIC5wcm9qZWN0Rm9ybXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdElucHV0e1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICB3aWR0aDogMjI1cHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RTdWJtaXQsIC5wcm9qZWN0Q2FuY2Vse1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGEzOWU7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG5cXG4gICAgLml0ZW1TdWJtaXQsIC5pdGVtQ2FuY2Vse1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGEzOWU7XFxuICAgICAgICBoZWlnaHQ6IDQwcHg7XFxuICAgICAgICB3aWR0aDogMTAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RDYW5jZWwsIC5pdGVtQ2FuY2Vse1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1NTUzNjtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdFN1Ym1pdDpob3ZlciwgLnByb2plY3RDYW5jZWw6aG92ZXIsIC5pdGVtU3VibWl0OmhvdmVyLCAuaXRlbUNhbmNlbDpob3ZlcntcXG4gICAgICAgIG9wYWNpdHk6MTtcXG4gICAgfVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtJQUN0Qiw0QkFBNEI7SUFDNUIsc0JBQXNCO0lBQ3RCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7SUFFSTtRQUNJLFVBQVU7UUFDVixhQUFhO1FBQ2IseUJBQXlCO1FBQ3pCLGVBQWU7UUFDZixpQkFBaUI7UUFDakIsYUFBYTtRQUNiLHNCQUFzQjtRQUN0QixtQkFBbUI7UUFDbkIsU0FBUztJQUNiOztRQUVJO1lBQ0ksZ0JBQWdCO1lBQ2hCLGtCQUFrQjtRQUN0Qjs7UUFFQTtZQUNJLGFBQWE7WUFDYixzQkFBc0I7WUFDdEIsU0FBUztRQUNiOztRQUVBO1lBQ0ksWUFBWTtZQUNaLG1CQUFtQjtZQUNuQix5QkFBeUI7WUFDekIsWUFBWTtZQUNaLFlBQVk7WUFDWixlQUFlO1FBQ25COztRQUVBO1lBQ0kseUJBQXlCO1lBQ3pCLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSx5QkFBeUI7WUFDekIsVUFBVTtRQUNkOztRQUVBO1lBQ0ksWUFBWTtZQUNaLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIsZUFBZTtZQUNmLHlCQUF5QjtZQUN6QixhQUFhO1FBQ2pCOztRQUVBO1lBQ0kscUJBQXFCO1FBQ3pCOztRQUVBO1lBQ0kseUJBQXlCO1lBQ3pCLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSx5QkFBeUI7UUFDN0I7O0lBRUo7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IsOEJBQThCO0lBQ2xDOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFFBQVE7SUFDWjs7UUFFSTtZQUNJLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtRQUNuQjs7UUFFQTtZQUNJLDZCQUE2QjtRQUNqQzs7UUFFQTtZQUNJLHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtRQUNuQjs7UUFFQTtZQUNJLHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtRQUNuQjs7UUFFQTtZQUNJLHVCQUF1QjtZQUN2QixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtRQUNuQjs7QUFFUiwyQkFBMkI7QUFDM0I7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7SUFFSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFNBQVM7SUFDYjs7SUFFQTtRQUNJLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLFlBQVk7UUFDWixtQkFBbUI7UUFDbkIseUJBQXlCO1FBQ3pCLFlBQVk7UUFDWixZQUFZO1FBQ1osZUFBZTtRQUNmLFlBQVk7SUFDaEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0kseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksU0FBUztJQUNiXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosICo6OmJlZm9yZSwgKjo6YWZ0ZXJ7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgZm9udC1mYW1pbHk6IGhlbHZldGljYTtcXG4gICAgLyogYm94LXNpemluZzogYm9yZGVyLWJveDsgKi9cXG4gICAgLyogbGlzdC1zdHlsZTogbm9uZTsgKi9cXG4gICAgLyogdGV4dC1kZWNvcmF0aW9uOiBub25lOyAqL1xcbn1cXG5cXG5ib2R5e1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhlYWRlcntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY1ZTViO1xcbiAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxufVxcblxcbi5kYXNoYm9hcmR7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiAgICAuc2lkZVBhbmVse1xcbiAgICAgICAgd2lkdGg6IDIwJTtcXG4gICAgICAgIGhlaWdodDogNTUwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkOGQ4O1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC5wcm9qZWN0VGl0bGV7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDUwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvamVjdExpc3QsIC50b2RvTGlzdHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAucHJvamVjdHtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogMjQwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3Q6aG92ZXJ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2VjYjtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvamVjdDphY3RpdmV7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2VjYjtcXG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNyZWF0ZVByb2plY3QsIC5jcmVhdGVUb2RvLCAuZGVsZXRlUHJvamVjdHtcXG4gICAgICAgICAgICB3aWR0aDogMTUwcHg7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmVkNjY7XFxuICAgICAgICAgICAgcGFkZGluZzogMTBweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5kZWxldGVQcm9qZWN0e1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jcmVhdGVQcm9qZWN0OmhvdmVyLCAuY3JlYXRlVG9kbzpob3ZlciwgLmRlbGV0ZVByb2plY3Q6aG92ZXJ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjIzODtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3JlYXRlUHJvamVjdDphY3RpdmUsIC5jcmVhdGVUb2RvOmFjdGl2ZSwgLmRlbGV0ZVByb2plY3Q6YWN0aXZle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc3M2Q7XFxuICAgICAgICB9XFxuXFxuICAgIC5tYWluUGFuZWx7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbkJhcntcXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuICAgIFxcbiAgICAudG9kb0NvbnRhaW5lcntcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IDVweDtcXG4gICAgfVxcblxcbiAgICAgICAgLnRvZG9JdGVtc3tcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogODAwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvZG9JdGVtc0NvbXBsZXRle1xcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvZG9FZGl0QnV0dG9ue1xcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRvZG9EZWxldGVCdXR0b257XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kb0luZm9CdXR0b257XFxuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuLyogUHJvamVjdCBhbmQgSXRlbSBQb3B1cCAqL1xcbi5wcm9qZWN0UG9wdXB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5pdGVtUG9wdXB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbiAgICAucHJvamVjdEZvcm17XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RJbnB1dHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xcbiAgICAgICAgd2lkdGg6IDIyNXB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0U3VibWl0LCAucHJvamVjdENhbmNlbHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBhMzllO1xcbiAgICAgICAgaGVpZ2h0OiAzMHB4O1xcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxuXFxuICAgIC5pdGVtU3VibWl0LCAuaXRlbUNhbmNlbHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBhMzllO1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q2FuY2VsLCAuaXRlbUNhbmNlbHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTU1MzY7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RTdWJtaXQ6aG92ZXIsIC5wcm9qZWN0Q2FuY2VsOmhvdmVyLCAuaXRlbVN1Ym1pdDpob3ZlciwgLml0ZW1DYW5jZWw6aG92ZXJ7XFxuICAgICAgICBvcGFjaXR5OjE7XFxuICAgIH1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7cHJvamVjdEJ1dHRvbn0gZnJvbSAnLi9pbmRleC5qcyc7XG5cbmZ1bmN0aW9uIGluaXRET00oKXtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRlbnQnKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJUby1EbyBMaXN0XCI7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ2hlYWRlcicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcblxuICAgIGNvbnN0IGRhc2hib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhc2hib2FyZC5jbGFzc0xpc3QuYWRkKCdkYXNoYm9hcmQnKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGRhc2hib2FyZCk7XG5cbiAgICAgICAgY29uc3Qgc2lkZVBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHNpZGVQYW5lbC5jbGFzc0xpc3QuYWRkKCdzaWRlUGFuZWwnKTtcbiAgICAgICAgZGFzaGJvYXJkLmFwcGVuZENoaWxkKHNpZGVQYW5lbCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gJ1Byb2plY3RzJztcbiAgICAgICAgICAgIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdExpc3QuY2xhc3NMaXN0LmFkZCgncHJvamVjdExpc3QnKTtcbiAgICAgICAgICAgIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3RJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVByb2plY3RJbnB1dCcpO1xuICAgICAgICAgICAgc2lkZVBhbmVsLmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RJbnB1dCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGNyZWF0ZVByb2plY3QuY2xhc3NMaXN0LmFkZCgnY3JlYXRlUHJvamVjdCcpO1xuICAgICAgICAgICAgY3JlYXRlUHJvamVjdC50ZXh0Q29udGVudCA9ICdDcmVhdGUgUHJvamVjdCc7XG4gICAgICAgICAgICBjcmVhdGVQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge3BvcHVwT3Blbi5wcm9qZWN0KCl9KTtcbiAgICAgICAgICAgIHNpZGVQYW5lbC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0KTtcblxuICAgICAgICBjb25zdCBtYWluUGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbWFpblBhbmVsLmNsYXNzTGlzdC5hZGQoJ21haW5QYW5lbCcpO1xuICAgICAgICBkYXNoYm9hcmQuYXBwZW5kQ2hpbGQobWFpblBhbmVsKTtcblxuICAgICAgICAgICAgY29uc3QgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSAnVG8tRG8gSXRlbXMnO1xuICAgICAgICAgICAgbWFpblBhbmVsLmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0b2RvTGlzdC5jbGFzc0xpc3QuYWRkKCd0b2RvTGlzdCcpO1xuICAgICAgICAgICAgbWFpblBhbmVsLmFwcGVuZENoaWxkKHRvZG9MaXN0KTtcblxuICAgICAgICAgICAgY29uc3QgY3JlYXRlVG9kb0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBjcmVhdGVUb2RvSW5wdXQuY2xhc3NMaXN0LmFkZCgnY3JlYXRlVG9kb0lucHV0Jyk7XG4gICAgICAgICAgICBtYWluUGFuZWwuYXBwZW5kQ2hpbGQoY3JlYXRlVG9kb0lucHV0KTtcblxuICAgICAgICAgICAgY29uc3QgYnV0dG9uQmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICBidXR0b25CYXIuY2xhc3NMaXN0LmFkZCgnYnV0dG9uQmFyJyk7XG4gICAgICAgICAgICBtYWluUGFuZWwuYXBwZW5kQ2hpbGQoYnV0dG9uQmFyKTtcblxuICAgICAgICAgICAgY29uc3QgZGVsZXRlUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgZGVsZXRlUHJvamVjdC5jbGFzc0xpc3QuYWRkKCdkZWxldGVQcm9qZWN0Jyk7XG4gICAgICAgICAgICBkZWxldGVQcm9qZWN0LnRleHRDb250ZW50ID0gJ0RlbGV0ZSBQcm9qZWN0JztcbiAgICAgICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0KTtcblxuICAgICAgICAgICAgY29uc3QgZWRpdFByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRvZG8nKTtcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0LnRleHRDb250ZW50ID0gJ0VkaXQgUHJvamVjdCc7XG4gICAgICAgICAgICBidXR0b25CYXIuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3QpO1xuXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBjcmVhdGVUb2RvLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZVRvZG8nKTtcbiAgICAgICAgICAgIGNyZWF0ZVRvZG8udGV4dENvbnRlbnQgPSAnQ3JlYXRlIFRvLURvJztcbiAgICAgICAgICAgIGNyZWF0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e3BvcHVwT3Blbi5pdGVtKCl9KTtcbiAgICAgICAgICAgIGJ1dHRvbkJhci5hcHBlbmRDaGlsZChjcmVhdGVUb2RvKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0UG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0UG9wdXAuY2xhc3NMaXN0LmFkZCgncHJvamVjdFBvcHVwJyk7XG4gICAgY3JlYXRlUHJvamVjdElucHV0LmFwcGVuZENoaWxkKHByb2plY3RQb3B1cCk7XG4gICAgXG4gICAgICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBwcm9qZWN0Rm9ybS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Rm9ybScpO1xuICAgICAgICBwcm9qZWN0UG9wdXAuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm0pO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdElucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICAgICAgICAgIHByb2plY3RJbnB1dC5wbGFjZWhvbGRlciA9IFwiRW50ZXIgUHJvamVjdCBOYW1lXCI7XG4gICAgICAgICAgICBwcm9qZWN0SW5wdXQubmFtZSA9IFwicHJvamVjdFwiO1xuICAgICAgICAgICAgcHJvamVjdElucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RJbnB1dCcpO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdElucHV0KTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICAgICAgcHJvamVjdFN1Ym1pdC50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG4gICAgICAgICAgICBwcm9qZWN0U3VibWl0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3RTdWJtaXQnKTtcbiAgICAgICAgICAgIHByb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RTdWJtaXQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0Q2FuY2VsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0Q2FuY2VsLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICAgICAgICAgIHByb2plY3RDYW5jZWwuY2xhc3NMaXN0LmFkZCgncHJvamVjdENhbmNlbCcpO1xuICAgICAgICAgICAgcHJvamVjdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBwb3B1cENsb3NlLnByb2plY3QoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdENhbmNlbCk7XG5cbiAgICBjb25zdCBpdGVtUG9wdXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBpdGVtUG9wdXAuY2xhc3NMaXN0LmFkZCgnaXRlbVBvcHVwJyk7XG4gICAgY3JlYXRlVG9kb0lucHV0LmFwcGVuZENoaWxkKGl0ZW1Qb3B1cCk7XG4gICAgXG4gICAgICAgIGNvbnN0IGl0ZW1Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICAgICAgICBpdGVtRm9ybS5jbGFzc0xpc3QuYWRkKCdpdGVtRm9ybScpO1xuICAgICAgICBpdGVtUG9wdXAuYXBwZW5kQ2hpbGQoaXRlbUZvcm0pO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtSW5wdXRUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpdGVtSW5wdXRUaXRsZS50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICBpdGVtSW5wdXRUaXRsZS5wbGFjZWhvbGRlciA9IFwiRW50ZXIgVGl0bGVcIjtcbiAgICAgICAgICAgIGl0ZW1JbnB1dFRpdGxlLm5hbWUgPSBcInRpdGxlXCI7XG4gICAgICAgICAgICBpdGVtSW5wdXRUaXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoaXRlbUlucHV0VGl0bGUpO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtSW5wdXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBpdGVtSW5wdXREZXNjcmlwdGlvbi50eXBlID0gXCJ0ZXh0XCI7XG4gICAgICAgICAgICBpdGVtSW5wdXREZXNjcmlwdGlvbi5wbGFjZWhvbGRlciA9IFwiRW50ZXIgRGVzY3JpcHRpb25cIjtcbiAgICAgICAgICAgIGl0ZW1JbnB1dERlc2NyaXB0aW9uLm5hbWUgPSBcImRlc2NyaXB0aW9uXCI7XG4gICAgICAgICAgICBpdGVtSW5wdXREZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoaXRlbUlucHV0RGVzY3JpcHRpb24pO1xuXG4gICAgICAgICAgICBjb25zdCBpdGVtU3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBpdGVtU3VibWl0LnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcbiAgICAgICAgICAgIGl0ZW1TdWJtaXQuY2xhc3NMaXN0LmFkZCgnaXRlbVN1Ym1pdCcpO1xuICAgICAgICAgICAgaXRlbUZvcm0uYXBwZW5kQ2hpbGQoaXRlbVN1Ym1pdCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZW1DYW5jZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIGl0ZW1DYW5jZWwudGV4dENvbnRlbnQgPSBcIkNhbmNlbFwiO1xuICAgICAgICAgICAgaXRlbUNhbmNlbC5jbGFzc0xpc3QuYWRkKCdpdGVtQ2FuY2VsJyk7XG4gICAgICAgICAgICBpdGVtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgcG9wdXBDbG9zZS5pdGVtKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGl0ZW1Gb3JtLmFwcGVuZENoaWxkKGl0ZW1DYW5jZWwpO1xufVxuXG5jb25zdCBwb3B1cE9wZW4gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFBvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlUHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgY29uc3QgaXRlbSA9ICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtUG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVUb2RvJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBpdGVtLFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBwb3B1cENsb3NlID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RQb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm0nKS5yZXNldCgpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZVByb2plY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtID0gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1Qb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbUZvcm0nKS5yZXNldCgpO1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZVRvZG8nKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBpdGVtLFxuICAgIH07XG59KSgpO1xuXG5jb25zdCBjcmVhdGVET00gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSAoX3Byb2plY3RMaXN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG4gICAgICAgIGxldCBlYWNoUHJvamVjdCA9IF9wcm9qZWN0TGlzdC5sZW5ndGggLSAxO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gX3Byb2plY3RMaXN0W2VhY2hQcm9qZWN0XTtcbiAgICAgICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICAgICAgICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoYHByb2plY3RzJHtlYWNoUHJvamVjdH1gKTtcbiAgICAgICAgICAgIHByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHByb2plY3RMaXN0LmFwcGVuZENoaWxkKHByb2plY3RzKTtcblxuICAgICAgICBwb3B1cENsb3NlLnByb2plY3QoKTtcbiAgICB9XG5cbiAgICBjb25zdCBpdGVtID0gKHRvZG8sIHNvcnRlZFByb2plY3QsIG50aFByb2plY3QsIG50aEl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0xpc3QnKTtcbiAgICAgICAgY29uc3QgdG9kb0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RvZG9Db250YWluZXInKTtcbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG5cbiAgICAgICAgLy9Ub2RvIFRpdGxlXG4gICAgICAgIGNvbnN0IHRvZG9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdG9kb0J1dHRvbi50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICAgIHRvZG9CdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb0l0ZW1zJyk7XG4gICAgICAgIHRvZG9CdXR0b24uc3R5bGUuY3NzVGV4dCA9ICh0b2RvLnN0YXR1cyA9PSBcImNvbXBsZXRlXCIpID8gXCJ0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcIiA6IFwidGV4dC1kZWNvcmF0aW9uOiBub25lO1wiO1xuICAgICAgICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgLy8gc29ydGVkUHJvamVjdCBTdGF0dXNcbiAgICAgICAgICAgIHRvZG8uc3RhdHVzID0gKHRvZG8uc3RhdHVzID09IFwiY29tcGxldGVcIikgPyBcImluY29tcGxldGVcIiA6IFwiY29tcGxldGVcIjtcbiAgICAgICAgICAgIC8vIENTUyAtIExpbmUgVGhyb3VnaFxuICAgICAgICAgICAgdG9kb0J1dHRvbi5zdHlsZS5jc3NUZXh0ID0gKHRvZG8uc3RhdHVzID09IFwiY29tcGxldGVcIikgPyBcInRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1wiIDogXCJ0ZXh0LWRlY29yYXRpb246IG5vbmU7XCI7XG4gICAgICAgIH0pO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9CdXR0b24pO1xuXG4gICAgICAgIC8vVG9kbyBFZGl0XG4gICAgICAgIGNvbnN0IHRvZG9FZGl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRvZG9FZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0QnV0dG9uJyk7XG4gICAgICAgIHRvZG9FZGl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJFZGl0XCI7XG4gICAgICAgIHRvZG9FZGl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgcG9wdXBPcGVuLml0ZW0oKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRWRpdEJ1dHRvbik7XG5cbiAgICAgICAgLy9Ub2RvIERlbGV0ZVxuICAgICAgICBjb25zdCB0b2RvRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRvZG9EZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb0RlbGV0ZUJ1dHRvbicpO1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJEZWxldGVcIjtcbiAgICAgICAgdG9kb0RlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLlgke250aFByb2plY3R9XyR7bnRoSXRlbX1gKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgdG9kb0xpc3QucmVtb3ZlQ2hpbGQodG9kb0NvbnRhaW5lcik7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHNvcnRlZFByb2plY3RbbnRoUHJvamVjdF0uc3BsaWNlKG50aEl0ZW0sMSk7XG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhzb3J0ZWRQcm9qZWN0W250aFByb2plY3RdKTtcblxuICAgICAgICB9KTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRGVsZXRlQnV0dG9uKTtcblxuICAgICAgICAvL1RvZG8gSW5mb1xuICAgICAgICBjb25zdCB0b2RvSW5mb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0b2RvSW5mb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvSW5mb0J1dHRvbicpO1xuICAgICAgICB0b2RvSW5mb0J1dHRvbi50ZXh0Q29udGVudCA9IFwiaVwiO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JbmZvQnV0dG9uKTtcblxuICAgICAgICBwb3B1cENsb3NlLml0ZW0oKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBpdGVtLFxuICAgIH1cbn0pKCk7XG5cblxuZXhwb3J0e1xuICAgIGluaXRET00sXG4gICAgY3JlYXRlRE9NLFxufTtcblxuXG4vLyBjcmVhdGUgSXRlbSBkcm9wIGRvd24gYSBsaXN0IG9mIHByb2plY3RcblxuICAgIC8vIERPTVxuICAgIC8vIGNvbnN0IGl0ZW1JbnB1dFByb2plY3REcm9wRG93biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpO1xuICAgIC8vIGl0ZW1JbnB1dFByb2plY3REcm9wRG93bi5jbGFzc0xpc3QuYWRkKCdpdGVtSW5wdXRQcm9qZWN0RHJvcERvd24nKTtcbiAgICAvLyBpdGVtSW5wdXRQcm9qZWN0RHJvcERvd24ubmFtZSA9IFwicHJvamVjdERyb3BEb3duXCI7XG4gICAgLy8gaXRlbUZvcm0uYXBwZW5kQ2hpbGQoaXRlbUlucHV0UHJvamVjdERyb3BEb3duKTtcblxuICAgIC8vICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICAvLyAgIGNvbnN0IGl0ZW1JbnB1dFByb2plY3REcm9wRG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2l0ZW1JbnB1dFByb2plY3REcm9wRG93bicpO1xuICAgIC8vICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgLy8gICAgICAgICBpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZygnMTIzJyk7XG4gICAgLy8gICAgICAgICBpLnZhbHVlID0gcHJvamVjdExpc3RbaV07XG4gICAgLy8gICAgICAgICBpdGVtSW5wdXRQcm9qZWN0RHJvcERvd24uYXBwZW5kQ2hpbGQoaSk7XG4gICAgLy8gICAgIH0iLCJpbXBvcnQge2NyZWF0ZURPTX0gZnJvbSAnLi9ET00uanMnO1xuXG4vLyBUb2RvIEl0ZW0gRmFjdG9yeSBcbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgc3RhdHVzKSA9PiB7XG4gICAgLy8gZHVlRGF0ZSwgcHJpb3JpdHlcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgc3RhdHVzfTtcbn07XG5cbi8vIENyZWF0ZSBQcm9qZWN0IEFsZ29yXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QWxnb3IoX25hbWUsIHByb2plY3RMaXN0KXtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKF9uYW1lKTtcbiAgICBjcmVhdGVET00ucHJvamVjdChwcm9qZWN0TGlzdCk7XG59XG5cbmV4cG9ydCB7XG4gICAgdG9kb0l0ZW0sXG4gICAgY3JlYXRlUHJvamVjdEFsZ29yLFxufTsiLCJpbXBvcnQge2luaXRET00sIGNyZWF0ZURPTX0gZnJvbSAnLi9ET00uanMnO1xuaW1wb3J0IHt0b2RvSXRlbSwgY3JlYXRlUHJvamVjdEFsZ29yfSBmcm9tICcuL2FsZ29yLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBWYXJpYWJsZXNcbmxldCBwcm9qZWN0ID0gW107IC8vIGFsbCB0b2RvcyBnb2VzIGhlcmVcbmxldCBzb3J0ZWRQcm9qZWN0ID0gW107IC8vIHNvcnRlZCBhbGwgdG9kb3MgYmFzZWQgb24gcHJvamVjdCNcbmxldCBwcm9qZWN0TGlzdCA9IFtdOyAvLyBhbGwgcHJvamVjdHMgZ29lcyBoZXJlXG5sZXQgY3VycmVudFByb2plY3Q7XG5cbmluaXRET00oKTtcblxuLy8jcmVnaW9uIEluaXRpYWxpemF0aW9uIC0gY3JlYXRlIERlZmF1bHQgUHJvamVjdHMgYW5kIFRvZG8gSXRlbXNcbmNyZWF0ZVByb2plY3RBbGdvcihcIkZhbWlseVwiLCBwcm9qZWN0TGlzdCk7XG5wcm9qZWN0LnB1c2godG9kb0l0ZW0oJ3RpdGxlMTEnLCAnZGVzY3JpcHRpb24xMScsICdwcm9qZWN0MCcsIFwiaW5jb21wbGV0ZVwiKSk7XG5wcm9qZWN0LnB1c2godG9kb0l0ZW0oJ3RpdGxlMTInLCAnZGVzY3JpcHRpb24xMicsICdwcm9qZWN0MCcsIFwiaW5jb21wbGV0ZVwiKSk7XG5wcm9qZWN0LnB1c2godG9kb0l0ZW0oJ3RpdGxlMTMnLCAnZGVzY3JpcHRpb24xMycsICdwcm9qZWN0MCcsIFwiaW5jb21wbGV0ZVwiKSk7XG5cbmNyZWF0ZVByb2plY3RBbGdvcihcIldvcmtcIiwgcHJvamVjdExpc3QpO1xucHJvamVjdC5wdXNoKHRvZG9JdGVtKCd0aXRsZTIxJywgJ2Rlc2NyaXB0aW9uMjEnLCAncHJvamVjdDEnLCBcImluY29tcGxldGVcIikpO1xucHJvamVjdC5wdXNoKHRvZG9JdGVtKCd0aXRsZTIyJywgJ2Rlc2NyaXB0aW9uMjInLCAncHJvamVjdDEnLCBcImluY29tcGxldGVcIikpO1xuXG5jcmVhdGVQcm9qZWN0QWxnb3IoXCJIb2JiaWVzXCIsIHByb2plY3RMaXN0KTtcbnByb2plY3QucHVzaCh0b2RvSXRlbSgndGl0bGUzMScsICdkZXNjcmlwdGlvbjMxJywgJ3Byb2plY3QyJywgXCJpbmNvbXBsZXRlXCIpKTtcbnByb2plY3QucHVzaCh0b2RvSXRlbSgndGl0bGUzMicsICdkZXNjcmlwdGlvbjMyJywgJ3Byb2plY3QyJywgXCJpbmNvbXBsZXRlXCIpKTtcbnByb2plY3QucHVzaCh0b2RvSXRlbSgndGl0bGUzMycsICdkZXNjcmlwdGlvbjMzJywgJ3Byb2plY3QyJywgXCJpbmNvbXBsZXRlXCIpKTtcbnByb2plY3QucHVzaCh0b2RvSXRlbSgndGl0bGUzNCcsICdkZXNjcmlwdGlvbjM0JywgJ3Byb2plY3QyJywgXCJpbmNvbXBsZXRlXCIpKTtcblxuLy8jZW5kcmVnaW9uXG5cbi8vIFNvcnQgdG9kb3MgYmFzZWQgb24gcHJvamVjdCNcbmZ1bmN0aW9uIHNvcnRUb2RvICgpe1xuICAgIGZvciAobGV0IGkgPSAwOyBpPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIHNvcnRlZFByb2plY3RbaV0gPSBwcm9qZWN0LmZpbHRlcih0b2RvID0+IHRvZG8ucHJvamVjdCA9PSBgcHJvamVjdCR7aX1gKTtcbiAgICB9XG4gICAgcmV0dXJuIHNvcnRlZFByb2plY3Q7XG59XG5zb3J0VG9kbygpO1xuXG4vLyBQcm9qZWN0IEJ1dHRvbiBCZWhhdmlvclxuY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0xpc3QnKTtcbmZ1bmN0aW9uIHByb2plY3RCdXR0b24oKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdC5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IF9wcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLnByb2plY3RzJHtpfWApO1xuICAgICAgICBfcHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGN1cnJlbnRQcm9qZWN0ID0gYHByb2plY3Qke2l9YDtcblxuICAgICAgICAgICAgLy8gY2xlYXIgdGhlIG1haW4gcGFuZWxcbiAgICAgICAgICAgIHdoaWxlKHRvZG9MaXN0LmZpcnN0Q2hpbGQpe3RvZG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCl9O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBlYWNoVG9kbyA9IDA7IGVhY2hUb2RvIDwgc29ydGVkUHJvamVjdFtpXS5sZW5ndGg7IGVhY2hUb2RvKyspe1xuICAgICAgICAgICAgICAgIGNyZWF0ZURPTS5pdGVtKHNvcnRlZFByb2plY3RbaV1bZWFjaFRvZG9dLCBzb3J0ZWRQcm9qZWN0LCBpLCBlYWNoVG9kbyk7IC8vLCBzb3J0ZWRQcm9qZWN0W2ldLCBlYWNoVG9kbysxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxucHJvamVjdEJ1dHRvbigpO1xuXG4vLyBDcmVhdGUgUHJvamVjdCBTdWJtaXQgQnV0dG9uXG5jb25zdCBwcm9qZWN0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RTdWJtaXQnKTtcbnByb2plY3RTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjcmVhdGVQcm9qZWN0QWxnb3IoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RJbnB1dCcpLnZhbHVlLCBwcm9qZWN0TGlzdCk7XG4gICAgcHJvamVjdEJ1dHRvbigpO1xufSk7XG5cbi8vIENyZWF0ZSBUb0RvIEl0ZW0gU3VibWl0IEJ1dHRvblxuY29uc3QgaXRlbVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtU3VibWl0Jyk7XG5pdGVtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gc3VibWl0IG5ldyB0b2RvIHRvIHByb2plY3RcbiAgICBsZXQgdG9kbyA9IHRvZG9JdGVtKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZScpLnZhbHVlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb24nKS52YWx1ZSwgY3VycmVudFByb2plY3QsIFwiaW5jb21wbGV0ZVwiKVxuICAgIFxuICAgIGxldCBudGhQcm9qZWN0ID0gY3VycmVudFByb2plY3Quc2xpY2UoNyxjdXJyZW50UHJvamVjdC5sZW5ndGgpO1xuICAgIHNvcnRlZFByb2plY3RbbnRoUHJvamVjdF0ucHVzaCh0b2RvKTtcblxuICAgIC8vY3JlYXRlIERPTSBhbmQgYmVoYXZpb3JcbiAgICBjcmVhdGVET00uaXRlbSh0b2RvLCBzb3J0ZWRQcm9qZWN0LCBudGhQcm9qZWN0LCBzb3J0ZWRQcm9qZWN0W250aFByb2plY3RdLmxlbmd0aC0xKTsgLy8sIHNvcnRlZFByb2plY3Rbc3RyaW5nXSwgc29ydGVkUHJvamVjdFtzdHJpbmddLmxlbmd0aC0xKTtcbn0pO1xuXG5leHBvcnR7XG4gICAgcHJvamVjdEJ1dHRvbixcbn07XG4vLyBuZWVkIGEgY3VycmVudCBJdGVtIG51bWJlciB0byBkZWxldGUgb3IgZWRpdCB0aGUgaXRlbVxuXG5cblxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9