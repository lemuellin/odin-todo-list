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
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n    font-family: helvetica;\n    /* box-sizing: border-box; */\n    /* list-style: none; */\n    /* text-decoration: none; */\n}\n\nbody{\n    background-color: white;\n}\n\n.header{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100px;\n    background-color: #ff5e5b;\n    padding-left: 50px;\n}\n\n.dashboard{\n    display: flex;\n}\n\n    .sidePanel{\n        width: 20%;\n        height: 550px;\n        background-color: #d8d8d8;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n        .projectList, .todoList{\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n        \n        .project{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 240px;\n            font-size: 15px;\n        }\n\n        .project:hover{\n            background-color: #00cecb;\n            opacity: 0.8;\n        }\n\n        .project:active, .project:focus, .pressed{\n            background-color: #00cecb;\n            opacity: 1;\n        }\n\n        .createProject, .editProject, .createTodo, .deleteProject{\n            width: 150px;\n            border: none;\n            border-radius: 20px;\n            font-size: 16px;\n            background-color: #ffed66;\n            padding: 10px;\n        }\n\n        .deleteProject{\n            background-color: red;\n            opacity: 0.8;\n        }\n\n        .createProject:hover, .editProject:hover, .createTodo:hover, .deleteProject:hover{\n            background-color: #ffb238;\n            opacity: 0.9;\n        }\n\n        .createProject:active,.editProject:active, .createTodo:active, .deleteProject:active{\n            background-color: #ff773d;\n        }\n\n    .mainPanel{\n        width: 80%;\n        height: 550px;\n        background-color: white;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .buttonBar{\n        width: 1000px;\n        display: flex;\n        justify-content: flex-end;\n    }\n    \n    .todoContainer{\n        display: flex;\n        gap: 5px;\n    }\n\n        .todoItems{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 800px;\n            font-size: 15px;\n        }\n\n        .todoItemsComplete{\n            text-decoration: line-through;\n        }\n\n        .todoEditButton, .todoDeleteButton, .todoInfoButton{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n        .todoDeleteButton{\n        }\n\n        .todoInfoButton{\n        }\n\n/* Project and Item Popup */\n.projectPopup{\n    display: none;\n}\n\n.projectEditPopup, .itemEditPopup, .infoPopup{\n    display: none;\n    background-color: #ffb238;\n    border-radius: 20px;\n    width: 400px;\n    padding: 40px;\n    /* place it dead center in the window*/\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.itemPopup{\n    display: none;\n}\n\n    .projectForm{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .projectEditForm, .itemEditForm, .infoForm{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .projectInput{\n        border: none;\n        border-radius: 10px;\n        background-color: #efefef;\n        height: 50px;\n        width: 225px;\n        font-size: 15px;\n        padding-left: 15px;\n    }\n\n    .projectSubmit, .projectCancel, .projectEditSubmit, .projectEditCancel, .closeButton{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 30px;\n        width: 200px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .itemSubmit, .itemCancel, .itemEditSubmit, .itemEditCancel{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 40px;\n        width: 100px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .projectCancel, .itemCancel, .projectEditCancel, .itemEditCancel, .closeButton{\n        background-color: #f55536;\n    }\n\n    .projectSubmit:hover, .projectCancel:hover, .itemSubmit:hover, .itemCancel:hover, .projectEditSubmit:hover, .projectEditCancel:hover, .itemEditSubmit:hover, .itemEditCancel:hover, .closeButton:hover{\n        opacity:1;\n    }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;IAEI;QACI,UAAU;QACV,aAAa;QACb,yBAAyB;QACzB,eAAe;QACf,iBAAiB;QACjB,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;QAEI;YACI,aAAa;YACb,sBAAsB;YACtB,SAAS;QACb;;QAEA;YACI,YAAY;YACZ,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,YAAY;YACZ,eAAe;QACnB;;QAEA;YACI,yBAAyB;YACzB,YAAY;QAChB;;QAEA;YACI,yBAAyB;YACzB,UAAU;QACd;;QAEA;YACI,YAAY;YACZ,YAAY;YACZ,mBAAmB;YACnB,eAAe;YACf,yBAAyB;YACzB,aAAa;QACjB;;QAEA;YACI,qBAAqB;YACrB,YAAY;QAChB;;QAEA;YACI,yBAAyB;YACzB,YAAY;QAChB;;QAEA;YACI,yBAAyB;QAC7B;;IAEJ;QACI,UAAU;QACV,aAAa;QACb,uBAAuB;QACvB,eAAe;QACf,iBAAiB;QACjB,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;IAEA;QACI,aAAa;QACb,aAAa;QACb,yBAAyB;IAC7B;;IAEA;QACI,aAAa;QACb,QAAQ;IACZ;;QAEI;YACI,YAAY;YACZ,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,YAAY;YACZ,eAAe;QACnB;;QAEA;YACI,6BAA6B;QACjC;;QAEA;YACI,YAAY;YACZ,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,WAAW;YACX,eAAe;QACnB;;QAEA;QACA;;QAEA;QACA;;AAER,2BAA2B;AAC3B;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;;IAEI;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;IAEA;QACI,YAAY;QACZ,mBAAmB;QACnB,yBAAyB;QACzB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,YAAY;QACZ,mBAAmB;QACnB,yBAAyB;QACzB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,YAAY;QACZ,mBAAmB;QACnB,yBAAyB;QACzB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,SAAS;IACb","sourcesContent":["*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n    font-family: helvetica;\n    /* box-sizing: border-box; */\n    /* list-style: none; */\n    /* text-decoration: none; */\n}\n\nbody{\n    background-color: white;\n}\n\n.header{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100px;\n    background-color: #ff5e5b;\n    padding-left: 50px;\n}\n\n.dashboard{\n    display: flex;\n}\n\n    .sidePanel{\n        width: 20%;\n        height: 550px;\n        background-color: #d8d8d8;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n        .projectList, .todoList{\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n        \n        .project{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 240px;\n            font-size: 15px;\n        }\n\n        .project:hover{\n            background-color: #00cecb;\n            opacity: 0.8;\n        }\n\n        .project:active, .project:focus, .pressed{\n            background-color: #00cecb;\n            opacity: 1;\n        }\n\n        .createProject, .editProject, .createTodo, .deleteProject{\n            width: 150px;\n            border: none;\n            border-radius: 20px;\n            font-size: 16px;\n            background-color: #ffed66;\n            padding: 10px;\n        }\n\n        .deleteProject{\n            background-color: red;\n            opacity: 0.8;\n        }\n\n        .createProject:hover, .editProject:hover, .createTodo:hover, .deleteProject:hover{\n            background-color: #ffb238;\n            opacity: 0.9;\n        }\n\n        .createProject:active,.editProject:active, .createTodo:active, .deleteProject:active{\n            background-color: #ff773d;\n        }\n\n    .mainPanel{\n        width: 80%;\n        height: 550px;\n        background-color: white;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .buttonBar{\n        width: 1000px;\n        display: flex;\n        justify-content: flex-end;\n    }\n    \n    .todoContainer{\n        display: flex;\n        gap: 5px;\n    }\n\n        .todoItems{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 800px;\n            font-size: 15px;\n        }\n\n        .todoItemsComplete{\n            text-decoration: line-through;\n        }\n\n        .todoEditButton, .todoDeleteButton, .todoInfoButton{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n        .todoDeleteButton{\n        }\n\n        .todoInfoButton{\n        }\n\n/* Project and Item Popup */\n.projectPopup{\n    display: none;\n}\n\n.projectEditPopup, .itemEditPopup, .infoPopup{\n    display: none;\n    background-color: #ffb238;\n    border-radius: 20px;\n    width: 400px;\n    padding: 40px;\n    /* place it dead center in the window*/\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.itemPopup{\n    display: none;\n}\n\n    .projectForm{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .projectEditForm, .itemEditForm, .infoForm{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .projectInput{\n        border: none;\n        border-radius: 10px;\n        background-color: #efefef;\n        height: 50px;\n        width: 225px;\n        font-size: 15px;\n        padding-left: 15px;\n    }\n\n    .projectSubmit, .projectCancel, .projectEditSubmit, .projectEditCancel, .closeButton{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 30px;\n        width: 200px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .itemSubmit, .itemCancel, .itemEditSubmit, .itemEditCancel{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 40px;\n        width: 100px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .projectCancel, .itemCancel, .projectEditCancel, .itemEditCancel, .closeButton{\n        background-color: #f55536;\n    }\n\n    .projectSubmit:hover, .projectCancel:hover, .itemSubmit:hover, .itemCancel:hover, .projectEditSubmit:hover, .projectEditCancel:hover, .itemEditSubmit:hover, .itemEditCancel:hover, .closeButton:hover{\n        opacity:1;\n    }"],"sourceRoot":""}]);
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
/* harmony export */   "popupOpen": () => (/* binding */ popupOpen),
/* harmony export */   "popupClose": () => (/* binding */ popupClose),
/* harmony export */   "currentItem": () => (/* binding */ currentItem),
/* harmony export */   "createDOM": () => (/* binding */ createDOM)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


function initDOM(){
    // Create Project Button
    const createProject = document.querySelector('.createProject');
    createProject.addEventListener('click', () => {popupOpen.project()});

    const projectCancel = document.querySelector('.projectCancel');
    projectCancel.addEventListener('click', (e)=>{
        e.preventDefault();
        popupClose.project();
    });

    // Edit Project Button
    const editProject = document.querySelector('.editProject');
    editProject.addEventListener('click', () => {popupOpen.projectEdit()});

    const projectEditCancel = document.querySelector('.projectEditCancel');
    projectEditCancel.addEventListener('click', (e) => {
        e.preventDefault();
        popupClose.projectEdit();
    });

    // Create To-Do Button
    const createTodo = document.querySelector('.createTodo');
    createTodo.addEventListener('click', ()=>{popupOpen.item()});

    const itemCancel = document.querySelector('.itemCancel');
    itemCancel.addEventListener('click', (e) => {
        e.preventDefault();
        popupClose.item();
    });

    // Edit To-Do Button
    const todoEditCancel = document.querySelector('.itemEditCancel');
    todoEditCancel.addEventListener('click', (e) => {
        e.preventDefault();
        popupClose.itemEdit();        
    });


}

const popupOpen = (() => {
    const project = () => {
        document.querySelector('.projectPopup').style.display = 'block';
        document.querySelector('.createProject').style.display = 'none';
        document.querySelector('.editProject').style.display = 'none';
        document.querySelector('.deleteProject').style.display = 'none';
    }

    const projectEdit = () => {
        document.querySelector('.projectEditPopup').style.display = 'block';
        document.querySelector('.createProject').style.display = 'none';
        document.querySelector('.editProject').style.display = 'none';
        document.querySelector('.deleteProject').style.display = 'none';
    }

    const item = () => {
        document.querySelector('.itemPopup').style.display = 'block';
        document.querySelector('.createTodo').style.display = 'none';
    }

    const itemEdit = () => {
        document.querySelector('.itemEditPopup').style.display = 'block';
    }

    return {
        project,
        projectEdit,
        item,
        itemEdit,
    };
})();

const popupClose = (() => {
    const project = () => {
        document.querySelector('.projectPopup').style.display = 'none';
        document.querySelector('.projectForm').reset();
        document.querySelector('.createProject').style.display = 'block';
        document.querySelector('.editProject').style.display = 'block';
        document.querySelector('.deleteProject').style.display = 'block';
    }

    const projectEdit = () => {
        document.querySelector('.projectEditPopup').style.display = 'none';
        document.querySelector('.projectEditForm').reset();
        document.querySelector('.createProject').style.display = 'block';
        document.querySelector('.editProject').style.display = 'block';
        document.querySelector('.deleteProject').style.display = 'block';        
    }

    const item = () => {
        document.querySelector('.itemPopup').style.display = 'none';
        document.querySelector('.itemForm').reset();
        document.querySelector('.createTodo').style.display = 'block';
    }

    const itemEdit = () => {
        document.querySelector('.itemEditPopup').style.display = 'none';
        document.querySelector('.itemEditForm').reset();
        document.querySelector('.createTodo').style.display = 'block';
    }

    return {
        project,
        projectEdit,
        item,
        itemEdit,
    };
})();

let currentItem;
const createDOM = (() => {
    const project = (_projectList) => {
        const projectList = document.querySelector('.projectList');
        let eachProject = _projectList.length - 1;
            const projects = document.createElement('button');
            projects.textContent = _projectList[eachProject];
            projects.classList.add('project');
            projects.classList.add(`projects${_index_js__WEBPACK_IMPORTED_MODULE_0__.projectCounter}`);
            projectList.appendChild(projects);
        popupClose.project();
    }

    const projectEdit = (_projectList, _currentProject) => {
        document.querySelector(`.projects${_currentProject}`).textContent = `${_projectList[_currentProject]}`;
        popupClose.projectEdit();
    }

    const item = (todo, project, nthProject, nthItem) => {
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
            // project Status
            todo.status = (todo.status == "complete") ? "incomplete" : "complete";
            // CSS - Line Through
            todoButton.style.cssText = (todo.status == "complete") ? "text-decoration: line-through;" : "text-decoration: none;";
        });
        todoContainer.appendChild(todoButton);

        //Todo Info
        const todoInfoButton = document.createElement('button');
        todoInfoButton.classList.add('todoInfoButton');
        todoInfoButton.textContent = "i";
        todoInfoButton.addEventListener('click', () => {

            document.querySelector('.infoPopup').style.display = "block";
                const titleInfo = document.querySelector('.titleInfo');
                const descriptionInfo = document.querySelector('.descriptionInfo');
                const statusInfo = document.querySelector('.statusInfo');
                // const priorityInfo = document.querySelector('.priorityInfo');
                // const dueDateInfo = document.querySelector('.dueDateInfo');

                titleInfo.textContent = todo.title;
                descriptionInfo.textContent = todo.description;
                statusInfo.textContent = todo.status;
                // priorityInfo.textContent = todo.priority;
                // dueDateInfo.textContent = todo.dueDate;

            const closeButton = document.querySelector('.closeButton');
            closeButton.addEventListener('click', () => {
                document.querySelector('.infoPopup').style.display = "none";
            });
        });
        todoContainer.appendChild(todoInfoButton);

        //Todo Edit
        const todoEditButton = document.createElement('button');
        todoEditButton.classList.add('todoEditButton');
        todoEditButton.textContent = "Edit";
        todoEditButton.addEventListener('click', () => {
            popupOpen.itemEdit();
            currentItem = nthItem;
            return currentItem;
        });
        todoContainer.appendChild(todoEditButton);

        //Todo Delete
        const todoDeleteButton = document.createElement('button');
        todoDeleteButton.classList.add('todoDeleteButton');
        todoDeleteButton.textContent = "X";
        todoDeleteButton.addEventListener('click', () => {
            //remove DOM
            todoList.removeChild(todoContainer);
            //remove object from array
            // project[nthProject].splice(nthItem,1);
            project[nthProject][nthItem] = '';
            //render main panel
            (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.projectButton)();
        });
        todoContainer.appendChild(todoDeleteButton);

        popupClose.item();
    }

    return {
        project,
        projectEdit,
        item,
    }
})();




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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css");



// Todo Item Factory 
const todoItem = (title, description, project, status) => {
    const completeToggle = () => {
        status = (status == "complete") ? "incomplete" : "complete";
    }
    // dueDate, priority
    return {title, description, project, status, completeToggle};
};

// Create Project Algor
function createProjectAlgor(_name, projectList){
    projectList.push(_name);
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.createDOM.project(projectList);
    projectCounter++;
}

// Variables
let project = []; // sorted all todos based on project#
let projectList = []; // all project names goes here
let currentProject;
let projectCounter = 0;

//#region Initialization - create Default Projects and Todo Items
(0,_DOM_js__WEBPACK_IMPORTED_MODULE_0__.initDOM)();

let projectInit = [];

createProjectAlgor("Inbox", projectList); 
projectInit.push(todoItem('title11', 'description11', '0', "incomplete"));
projectInit.push(todoItem('title12', 'description12', '0', "incomplete"));
projectInit.push(todoItem('title13', 'description13', '0', "incomplete"));

createProjectAlgor("Work", projectList);
projectInit.push(todoItem('title21', 'description21', '1', "incomplete"));
projectInit.push(todoItem('title22', 'description22', '1', "incomplete"));

createProjectAlgor("Hobbies", projectList);
projectInit.push(todoItem('title31', 'description31', '2', "incomplete"));
projectInit.push(todoItem('title32', 'description32', '2', "incomplete"));
projectInit.push(todoItem('title33', 'description33', '2', "incomplete"));
projectInit.push(todoItem('title34', 'description34', '2', "incomplete"));

// Sort todos based on project#: go through projectList and filter the todos
for (let i = 0; i < projectList.length; i++){
    project[i] = projectInit.filter(todo => todo.project == `${i}`);
}
//#endregion

// Project Button Behavior
const todoList = document.querySelector('.todoList');
function projectButton() {
    const _projectList = document.querySelector('.projectList');
    // Loop through nodes of parent
    for (let i = 0; i < _projectList.children.length; i++){
        _projectList.children[i].addEventListener('click', () => {
            // Update variable - currentProject
            _projectList.children[i].classList.remove('project');
            currentProject = _projectList.children[i].classList[0].slice(8);
            _projectList.children[i].classList.add('project');

            // Add/Rmv 'pressed' class
            for (let j = 0; j < _projectList.children.length; j++){
                _projectList.children[j].classList.remove('pressed');
            }
            _projectList.children[i].classList.add('pressed');

            // clear the main panel
            while(todoList.firstChild){todoList.firstChild.remove()};

            // If this project already has To-Dos in it, then create item DOM
            if (project[currentProject]){
                
                for (let eachTodo = 0; eachTodo < project[currentProject].length; eachTodo++){
                    if (project[currentProject][eachTodo]){
                        _DOM_js__WEBPACK_IMPORTED_MODULE_0__.createDOM.item(project[currentProject][eachTodo], project, currentProject, eachTodo);
                    }
                }
            }
        });
    }
}
projectButton();
document.querySelector('.projects0').click();
document.querySelector('.projects0').focus();

// Create Project Submit Button
const projectSubmit = document.querySelector('.projectSubmit');
projectSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    createProjectAlgor(document.querySelector('.projectInput').value, projectList);
    projectButton();
});

// Create ToDo Item Submit Button
const itemSubmit = document.querySelector('.itemSubmit');
itemSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    // submit new todo to project
    let todo = todoItem(document.querySelector('.title').value, document.querySelector('.description').value, currentProject, "incomplete")

    if (project[currentProject]){
        project[currentProject].push(todo);
    } else {
        project[currentProject]=[];
        project[currentProject].push(todo);
    }
    //create DOM and behavior
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.createDOM.item(todo, project, currentProject, project[currentProject].length-1);
});

// Edit Project Button
document.querySelector('.projectEditSubmit').addEventListener('click', (e) => {
    e.preventDefault();
    projectList[currentProject] = document.querySelector('.projectEditInput').value;
    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.createDOM.projectEdit(projectList, currentProject);

    projectButton();
});

// Delete Project Button
const deleteProject = document.querySelector('.deleteProject');
deleteProject.addEventListener('click', () => {
    // Remove DOM
    const _projectList = document.querySelector('.projectList');
    _projectList.removeChild(document.querySelector(`.projects${currentProject}`));

    // Remove object from projectList array
    // projectList.splice(currentProject,1);
    projectList[currentProject] = '';

    // Remove object from todoList
    // project.splice(currentProject,1);
    project[currentProject] = '';

    // clear the main panel
    while(todoList.firstChild){todoList.firstChild.remove()};

    projectButton();
});

// Edit Item Button
const itemEditSubmit = document.querySelector('.itemEditSubmit');
itemEditSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    project[currentProject][_DOM_js__WEBPACK_IMPORTED_MODULE_0__.currentItem].title = document.querySelector('.titleEdit').value;
    project[currentProject][_DOM_js__WEBPACK_IMPORTED_MODULE_0__.currentItem].description = document.querySelector('.descriptionEdit').value;

    // clear the main panel
    while(todoList.firstChild){todoList.firstChild.remove()};    

    for (let eachTodo = 0; eachTodo < project[currentProject].length; eachTodo++){
        if (project[currentProject][eachTodo]){
            _DOM_js__WEBPACK_IMPORTED_MODULE_0__.createDOM.item(project[currentProject][eachTodo], project, currentProject, eachTodo);
        }
    }

    _DOM_js__WEBPACK_IMPORTED_MODULE_0__.popupClose.itemEdit();

});



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVye1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXFxuICAgIC8qIGxpc3Qtc3R5bGU6IG5vbmU7ICovXFxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgKi9cXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWU1YjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4uZGFzaGJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4gICAgLnNpZGVQYW5lbHtcXG4gICAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAucHJvamVjdExpc3QsIC50b2RvTGlzdHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAucHJvamVjdHtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogMjQwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3Q6aG92ZXJ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2VjYjtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvamVjdDphY3RpdmUsIC5wcm9qZWN0OmZvY3VzLCAucHJlc3NlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZWNiO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3JlYXRlUHJvamVjdCwgLmVkaXRQcm9qZWN0LCAuY3JlYXRlVG9kbywgLmRlbGV0ZVByb2plY3R7XFxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZDY2O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGVsZXRlUHJvamVjdHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNyZWF0ZVByb2plY3Q6aG92ZXIsIC5lZGl0UHJvamVjdDpob3ZlciwgLmNyZWF0ZVRvZG86aG92ZXIsIC5kZWxldGVQcm9qZWN0OmhvdmVye1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmIyMzg7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC45O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNyZWF0ZVByb2plY3Q6YWN0aXZlLC5lZGl0UHJvamVjdDphY3RpdmUsIC5jcmVhdGVUb2RvOmFjdGl2ZSwgLmRlbGV0ZVByb2plY3Q6YWN0aXZle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc3M2Q7XFxuICAgICAgICB9XFxuXFxuICAgIC5tYWluUGFuZWx7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbkJhcntcXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRvZG9Db250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC50b2RvSXRlbXN7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvSXRlbXNDb21wbGV0ZXtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvRWRpdEJ1dHRvbiwgLnRvZG9EZWxldGVCdXR0b24sIC50b2RvSW5mb0J1dHRvbntcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kb0RlbGV0ZUJ1dHRvbntcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvSW5mb0J1dHRvbntcXG4gICAgICAgIH1cXG5cXG4vKiBQcm9qZWN0IGFuZCBJdGVtIFBvcHVwICovXFxuLnByb2plY3RQb3B1cHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3RFZGl0UG9wdXAsIC5pdGVtRWRpdFBvcHVwLCAuaW5mb1BvcHVwe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMjM4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIC8qIHBsYWNlIGl0IGRlYWQgY2VudGVyIGluIHRoZSB3aW5kb3cqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uaXRlbVBvcHVwe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4gICAgLnByb2plY3RGb3Jte1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0RWRpdEZvcm0sIC5pdGVtRWRpdEZvcm0sIC5pbmZvRm9ybXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdElucHV0e1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICB3aWR0aDogMjI1cHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RTdWJtaXQsIC5wcm9qZWN0Q2FuY2VsLCAucHJvamVjdEVkaXRTdWJtaXQsIC5wcm9qZWN0RWRpdENhbmNlbCwgLmNsb3NlQnV0dG9ue1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGEzOWU7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG5cXG4gICAgLml0ZW1TdWJtaXQsIC5pdGVtQ2FuY2VsLCAuaXRlbUVkaXRTdWJtaXQsIC5pdGVtRWRpdENhbmNlbHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBhMzllO1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q2FuY2VsLCAuaXRlbUNhbmNlbCwgLnByb2plY3RFZGl0Q2FuY2VsLCAuaXRlbUVkaXRDYW5jZWwsIC5jbG9zZUJ1dHRvbntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTU1MzY7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RTdWJtaXQ6aG92ZXIsIC5wcm9qZWN0Q2FuY2VsOmhvdmVyLCAuaXRlbVN1Ym1pdDpob3ZlciwgLml0ZW1DYW5jZWw6aG92ZXIsIC5wcm9qZWN0RWRpdFN1Ym1pdDpob3ZlciwgLnByb2plY3RFZGl0Q2FuY2VsOmhvdmVyLCAuaXRlbUVkaXRTdWJtaXQ6aG92ZXIsIC5pdGVtRWRpdENhbmNlbDpob3ZlciwgLmNsb3NlQnV0dG9uOmhvdmVye1xcbiAgICAgICAgb3BhY2l0eToxO1xcbiAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztJQUVJO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixTQUFTO0lBQ2I7O1FBRUk7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLFNBQVM7UUFDYjs7UUFFQTtZQUNJLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtRQUNuQjs7UUFFQTtZQUNJLHlCQUF5QjtZQUN6QixZQUFZO1FBQ2hCOztRQUVBO1lBQ0kseUJBQXlCO1lBQ3pCLFVBQVU7UUFDZDs7UUFFQTtZQUNJLFlBQVk7WUFDWixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGVBQWU7WUFDZix5QkFBeUI7WUFDekIsYUFBYTtRQUNqQjs7UUFFQTtZQUNJLHFCQUFxQjtZQUNyQixZQUFZO1FBQ2hCOztRQUVBO1lBQ0kseUJBQXlCO1lBQ3pCLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSx5QkFBeUI7UUFDN0I7O0lBRUo7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFFBQVE7SUFDWjs7UUFFSTtZQUNJLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtRQUNuQjs7UUFFQTtZQUNJLDZCQUE2QjtRQUNqQzs7UUFFQTtZQUNJLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtRQUNuQjs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O0FBRVIsMkJBQTJCO0FBQzNCO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0lBRUk7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFNBQVM7SUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVye1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXFxuICAgIC8qIGxpc3Qtc3R5bGU6IG5vbmU7ICovXFxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgKi9cXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWU1YjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4uZGFzaGJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4gICAgLnNpZGVQYW5lbHtcXG4gICAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgICBoZWlnaHQ6IDU1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAucHJvamVjdExpc3QsIC50b2RvTGlzdHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAucHJvamVjdHtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogMjQwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3Q6aG92ZXJ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2VjYjtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvamVjdDphY3RpdmUsIC5wcm9qZWN0OmZvY3VzLCAucHJlc3NlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZWNiO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3JlYXRlUHJvamVjdCwgLmVkaXRQcm9qZWN0LCAuY3JlYXRlVG9kbywgLmRlbGV0ZVByb2plY3R7XFxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZDY2O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGVsZXRlUHJvamVjdHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNyZWF0ZVByb2plY3Q6aG92ZXIsIC5lZGl0UHJvamVjdDpob3ZlciwgLmNyZWF0ZVRvZG86aG92ZXIsIC5kZWxldGVQcm9qZWN0OmhvdmVye1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmIyMzg7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC45O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNyZWF0ZVByb2plY3Q6YWN0aXZlLC5lZGl0UHJvamVjdDphY3RpdmUsIC5jcmVhdGVUb2RvOmFjdGl2ZSwgLmRlbGV0ZVByb2plY3Q6YWN0aXZle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc3M2Q7XFxuICAgICAgICB9XFxuXFxuICAgIC5tYWluUGFuZWx7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgaGVpZ2h0OiA1NTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbkJhcntcXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRvZG9Db250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC50b2RvSXRlbXN7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvSXRlbXNDb21wbGV0ZXtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvRWRpdEJ1dHRvbiwgLnRvZG9EZWxldGVCdXR0b24sIC50b2RvSW5mb0J1dHRvbntcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kb0RlbGV0ZUJ1dHRvbntcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvSW5mb0J1dHRvbntcXG4gICAgICAgIH1cXG5cXG4vKiBQcm9qZWN0IGFuZCBJdGVtIFBvcHVwICovXFxuLnByb2plY3RQb3B1cHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3RFZGl0UG9wdXAsIC5pdGVtRWRpdFBvcHVwLCAuaW5mb1BvcHVwe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMjM4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIC8qIHBsYWNlIGl0IGRlYWQgY2VudGVyIGluIHRoZSB3aW5kb3cqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uaXRlbVBvcHVwe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4gICAgLnByb2plY3RGb3Jte1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0RWRpdEZvcm0sIC5pdGVtRWRpdEZvcm0sIC5pbmZvRm9ybXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdElucHV0e1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICB3aWR0aDogMjI1cHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RTdWJtaXQsIC5wcm9qZWN0Q2FuY2VsLCAucHJvamVjdEVkaXRTdWJtaXQsIC5wcm9qZWN0RWRpdENhbmNlbCwgLmNsb3NlQnV0dG9ue1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGEzOWU7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG5cXG4gICAgLml0ZW1TdWJtaXQsIC5pdGVtQ2FuY2VsLCAuaXRlbUVkaXRTdWJtaXQsIC5pdGVtRWRpdENhbmNlbHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBhMzllO1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q2FuY2VsLCAuaXRlbUNhbmNlbCwgLnByb2plY3RFZGl0Q2FuY2VsLCAuaXRlbUVkaXRDYW5jZWwsIC5jbG9zZUJ1dHRvbntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTU1MzY7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RTdWJtaXQ6aG92ZXIsIC5wcm9qZWN0Q2FuY2VsOmhvdmVyLCAuaXRlbVN1Ym1pdDpob3ZlciwgLml0ZW1DYW5jZWw6aG92ZXIsIC5wcm9qZWN0RWRpdFN1Ym1pdDpob3ZlciwgLnByb2plY3RFZGl0Q2FuY2VsOmhvdmVyLCAuaXRlbUVkaXRTdWJtaXQ6aG92ZXIsIC5pdGVtRWRpdENhbmNlbDpob3ZlciwgLmNsb3NlQnV0dG9uOmhvdmVye1xcbiAgICAgICAgb3BhY2l0eToxO1xcbiAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQge3Byb2plY3RCdXR0b24sIHByb2plY3RDb3VudGVyfSBmcm9tICcuL2luZGV4LmpzJztcblxuZnVuY3Rpb24gaW5pdERPTSgpe1xuICAgIC8vIENyZWF0ZSBQcm9qZWN0IEJ1dHRvblxuICAgIGNvbnN0IGNyZWF0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlUHJvamVjdCcpO1xuICAgIGNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7cG9wdXBPcGVuLnByb2plY3QoKX0pO1xuXG4gICAgY29uc3QgcHJvamVjdENhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q2FuY2VsJyk7XG4gICAgcHJvamVjdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKT0+e1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHBvcHVwQ2xvc2UucHJvamVjdCgpO1xuICAgIH0pO1xuXG4gICAgLy8gRWRpdCBQcm9qZWN0IEJ1dHRvblxuICAgIGNvbnN0IGVkaXRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcm9qZWN0Jyk7XG4gICAgZWRpdFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7cG9wdXBPcGVuLnByb2plY3RFZGl0KCl9KTtcblxuICAgIGNvbnN0IHByb2plY3RFZGl0Q2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RFZGl0Q2FuY2VsJyk7XG4gICAgcHJvamVjdEVkaXRDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHBvcHVwQ2xvc2UucHJvamVjdEVkaXQoKTtcbiAgICB9KTtcblxuICAgIC8vIENyZWF0ZSBUby1EbyBCdXR0b25cbiAgICBjb25zdCBjcmVhdGVUb2RvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZVRvZG8nKTtcbiAgICBjcmVhdGVUb2RvLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9Pntwb3B1cE9wZW4uaXRlbSgpfSk7XG5cbiAgICBjb25zdCBpdGVtQ2FuY2VsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1DYW5jZWwnKTtcbiAgICBpdGVtQ2FuY2VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBwb3B1cENsb3NlLml0ZW0oKTtcbiAgICB9KTtcblxuICAgIC8vIEVkaXQgVG8tRG8gQnV0dG9uXG4gICAgY29uc3QgdG9kb0VkaXRDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbUVkaXRDYW5jZWwnKTtcbiAgICB0b2RvRWRpdENhbmNlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgcG9wdXBDbG9zZS5pdGVtRWRpdCgpOyAgICAgICAgXG4gICAgfSk7XG5cblxufVxuXG5jb25zdCBwb3B1cE9wZW4gPSAoKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3QgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0UG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZVByb2plY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlUHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfVxuXG4gICAgY29uc3QgcHJvamVjdEVkaXQgPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0RWRpdFBvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVQcm9qZWN0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcm9qZWN0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZVByb2plY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtUG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZVRvZG8nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1FZGl0ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbUVkaXRQb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIHByb2plY3RFZGl0LFxuICAgICAgICBpdGVtLFxuICAgICAgICBpdGVtRWRpdCxcbiAgICB9O1xufSkoKTtcblxuY29uc3QgcG9wdXBDbG9zZSA9ICgoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdCA9ICgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RQb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Rm9ybScpLnJlc2V0KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVQcm9qZWN0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0UHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlUHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RFZGl0ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEVkaXRQb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0RWRpdEZvcm0nKS5yZXNldCgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlUHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZVByb2plY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgICAgICAgIFxuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0gPSAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtUG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbUZvcm0nKS5yZXNldCgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlVG9kbycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW1FZGl0ID0gKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbUVkaXRQb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtRWRpdEZvcm0nKS5yZXNldCgpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlVG9kbycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIHByb2plY3RFZGl0LFxuICAgICAgICBpdGVtLFxuICAgICAgICBpdGVtRWRpdCxcbiAgICB9O1xufSkoKTtcblxubGV0IGN1cnJlbnRJdGVtO1xuY29uc3QgY3JlYXRlRE9NID0gKCgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0ID0gKF9wcm9qZWN0TGlzdCkgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpO1xuICAgICAgICBsZXQgZWFjaFByb2plY3QgPSBfcHJvamVjdExpc3QubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBwcm9qZWN0cy50ZXh0Q29udGVudCA9IF9wcm9qZWN0TGlzdFtlYWNoUHJvamVjdF07XG4gICAgICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG4gICAgICAgICAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0cyR7cHJvamVjdENvdW50ZXJ9YCk7XG4gICAgICAgICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gICAgICAgIHBvcHVwQ2xvc2UucHJvamVjdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IHByb2plY3RFZGl0ID0gKF9wcm9qZWN0TGlzdCwgX2N1cnJlbnRQcm9qZWN0KSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0cyR7X2N1cnJlbnRQcm9qZWN0fWApLnRleHRDb250ZW50ID0gYCR7X3Byb2plY3RMaXN0W19jdXJyZW50UHJvamVjdF19YDtcbiAgICAgICAgcG9wdXBDbG9zZS5wcm9qZWN0RWRpdCgpO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0gPSAodG9kbywgcHJvamVjdCwgbnRoUHJvamVjdCwgbnRoSXRlbSkgPT4ge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdCcpO1xuICAgICAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRvZG9Db250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9kb0NvbnRhaW5lcicpO1xuICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZCh0b2RvQ29udGFpbmVyKTtcblxuICAgICAgICAvL1RvZG8gVGl0bGVcbiAgICAgICAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0b2RvQnV0dG9uLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgICAgdG9kb0J1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvSXRlbXMnKTtcbiAgICAgICAgdG9kb0J1dHRvbi5zdHlsZS5jc3NUZXh0ID0gKHRvZG8uc3RhdHVzID09IFwiY29tcGxldGVcIikgPyBcInRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1wiIDogXCJ0ZXh0LWRlY29yYXRpb246IG5vbmU7XCI7XG4gICAgICAgIHRvZG9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvLyBwcm9qZWN0IFN0YXR1c1xuICAgICAgICAgICAgdG9kby5zdGF0dXMgPSAodG9kby5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSA/IFwiaW5jb21wbGV0ZVwiIDogXCJjb21wbGV0ZVwiO1xuICAgICAgICAgICAgLy8gQ1NTIC0gTGluZSBUaHJvdWdoXG4gICAgICAgICAgICB0b2RvQnV0dG9uLnN0eWxlLmNzc1RleHQgPSAodG9kby5zdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSA/IFwidGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XCIgOiBcInRleHQtZGVjb3JhdGlvbjogbm9uZTtcIjtcbiAgICAgICAgfSk7XG4gICAgICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0J1dHRvbik7XG5cbiAgICAgICAgLy9Ub2RvIEluZm9cbiAgICAgICAgY29uc3QgdG9kb0luZm9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgdG9kb0luZm9CdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb0luZm9CdXR0b24nKTtcbiAgICAgICAgdG9kb0luZm9CdXR0b24udGV4dENvbnRlbnQgPSBcImlcIjtcbiAgICAgICAgdG9kb0luZm9CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvUG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICAgICAgICAgIGNvbnN0IHRpdGxlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZUluZm8nKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb25JbmZvJyk7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3RhdHVzSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0dXNJbmZvJyk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgcHJpb3JpdHlJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5SW5mbycpO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGR1ZURhdGVJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmR1ZURhdGVJbmZvJyk7XG5cbiAgICAgICAgICAgICAgICB0aXRsZUluZm8udGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uSW5mby50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICAgICAgICAgICAgc3RhdHVzSW5mby50ZXh0Q29udGVudCA9IHRvZG8uc3RhdHVzO1xuICAgICAgICAgICAgICAgIC8vIHByaW9yaXR5SW5mby50ZXh0Q29udGVudCA9IHRvZG8ucHJpb3JpdHk7XG4gICAgICAgICAgICAgICAgLy8gZHVlRGF0ZUluZm8udGV4dENvbnRlbnQgPSB0b2RvLmR1ZURhdGU7XG5cbiAgICAgICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlQnV0dG9uJyk7XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5mb1BvcHVwJykuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9JbmZvQnV0dG9uKTtcblxuICAgICAgICAvL1RvZG8gRWRpdFxuICAgICAgICBjb25zdCB0b2RvRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICB0b2RvRWRpdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCd0b2RvRWRpdEJ1dHRvbicpO1xuICAgICAgICB0b2RvRWRpdEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRWRpdFwiO1xuICAgICAgICB0b2RvRWRpdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHBvcHVwT3Blbi5pdGVtRWRpdCgpO1xuICAgICAgICAgICAgY3VycmVudEl0ZW0gPSBudGhJdGVtO1xuICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRJdGVtO1xuICAgICAgICB9KTtcbiAgICAgICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRWRpdEJ1dHRvbik7XG5cbiAgICAgICAgLy9Ub2RvIERlbGV0ZVxuICAgICAgICBjb25zdCB0b2RvRGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIHRvZG9EZWxldGVCdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb0RlbGV0ZUJ1dHRvbicpO1xuICAgICAgICB0b2RvRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gXCJYXCI7XG4gICAgICAgIHRvZG9EZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAvL3JlbW92ZSBET01cbiAgICAgICAgICAgIHRvZG9MaXN0LnJlbW92ZUNoaWxkKHRvZG9Db250YWluZXIpO1xuICAgICAgICAgICAgLy9yZW1vdmUgb2JqZWN0IGZyb20gYXJyYXlcbiAgICAgICAgICAgIC8vIHByb2plY3RbbnRoUHJvamVjdF0uc3BsaWNlKG50aEl0ZW0sMSk7XG4gICAgICAgICAgICBwcm9qZWN0W250aFByb2plY3RdW250aEl0ZW1dID0gJyc7XG4gICAgICAgICAgICAvL3JlbmRlciBtYWluIHBhbmVsXG4gICAgICAgICAgICBwcm9qZWN0QnV0dG9uKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0b2RvQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EZWxldGVCdXR0b24pO1xuXG4gICAgICAgIHBvcHVwQ2xvc2UuaXRlbSgpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHByb2plY3QsXG4gICAgICAgIHByb2plY3RFZGl0LFxuICAgICAgICBpdGVtLFxuICAgIH1cbn0pKCk7XG5cblxuZXhwb3J0e1xuICAgIGluaXRET00sXG4gICAgcG9wdXBPcGVuLFxuICAgIHBvcHVwQ2xvc2UsXG4gICAgY3VycmVudEl0ZW0sXG4gICAgY3JlYXRlRE9NLFxufTsiLCJpbXBvcnQge2luaXRET00sIGN1cnJlbnRJdGVtLCBjcmVhdGVET00sIHBvcHVwQ2xvc2V9IGZyb20gJy4vRE9NLmpzJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBUb2RvIEl0ZW0gRmFjdG9yeSBcbmNvbnN0IHRvZG9JdGVtID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgcHJvamVjdCwgc3RhdHVzKSA9PiB7XG4gICAgY29uc3QgY29tcGxldGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgICAgIHN0YXR1cyA9IChzdGF0dXMgPT0gXCJjb21wbGV0ZVwiKSA/IFwiaW5jb21wbGV0ZVwiIDogXCJjb21wbGV0ZVwiO1xuICAgIH1cbiAgICAvLyBkdWVEYXRlLCBwcmlvcml0eVxuICAgIHJldHVybiB7dGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBzdGF0dXMsIGNvbXBsZXRlVG9nZ2xlfTtcbn07XG5cbi8vIENyZWF0ZSBQcm9qZWN0IEFsZ29yXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0QWxnb3IoX25hbWUsIHByb2plY3RMaXN0KXtcbiAgICBwcm9qZWN0TGlzdC5wdXNoKF9uYW1lKTtcbiAgICBjcmVhdGVET00ucHJvamVjdChwcm9qZWN0TGlzdCk7XG4gICAgcHJvamVjdENvdW50ZXIrKztcbn1cblxuLy8gVmFyaWFibGVzXG5sZXQgcHJvamVjdCA9IFtdOyAvLyBzb3J0ZWQgYWxsIHRvZG9zIGJhc2VkIG9uIHByb2plY3QjXG5sZXQgcHJvamVjdExpc3QgPSBbXTsgLy8gYWxsIHByb2plY3QgbmFtZXMgZ29lcyBoZXJlXG5sZXQgY3VycmVudFByb2plY3Q7XG5sZXQgcHJvamVjdENvdW50ZXIgPSAwO1xuXG4vLyNyZWdpb24gSW5pdGlhbGl6YXRpb24gLSBjcmVhdGUgRGVmYXVsdCBQcm9qZWN0cyBhbmQgVG9kbyBJdGVtc1xuaW5pdERPTSgpO1xuXG5sZXQgcHJvamVjdEluaXQgPSBbXTtcblxuY3JlYXRlUHJvamVjdEFsZ29yKFwiSW5ib3hcIiwgcHJvamVjdExpc3QpOyBcbnByb2plY3RJbml0LnB1c2godG9kb0l0ZW0oJ3RpdGxlMTEnLCAnZGVzY3JpcHRpb24xMScsICcwJywgXCJpbmNvbXBsZXRlXCIpKTtcbnByb2plY3RJbml0LnB1c2godG9kb0l0ZW0oJ3RpdGxlMTInLCAnZGVzY3JpcHRpb24xMicsICcwJywgXCJpbmNvbXBsZXRlXCIpKTtcbnByb2plY3RJbml0LnB1c2godG9kb0l0ZW0oJ3RpdGxlMTMnLCAnZGVzY3JpcHRpb24xMycsICcwJywgXCJpbmNvbXBsZXRlXCIpKTtcblxuY3JlYXRlUHJvamVjdEFsZ29yKFwiV29ya1wiLCBwcm9qZWN0TGlzdCk7XG5wcm9qZWN0SW5pdC5wdXNoKHRvZG9JdGVtKCd0aXRsZTIxJywgJ2Rlc2NyaXB0aW9uMjEnLCAnMScsIFwiaW5jb21wbGV0ZVwiKSk7XG5wcm9qZWN0SW5pdC5wdXNoKHRvZG9JdGVtKCd0aXRsZTIyJywgJ2Rlc2NyaXB0aW9uMjInLCAnMScsIFwiaW5jb21wbGV0ZVwiKSk7XG5cbmNyZWF0ZVByb2plY3RBbGdvcihcIkhvYmJpZXNcIiwgcHJvamVjdExpc3QpO1xucHJvamVjdEluaXQucHVzaCh0b2RvSXRlbSgndGl0bGUzMScsICdkZXNjcmlwdGlvbjMxJywgJzInLCBcImluY29tcGxldGVcIikpO1xucHJvamVjdEluaXQucHVzaCh0b2RvSXRlbSgndGl0bGUzMicsICdkZXNjcmlwdGlvbjMyJywgJzInLCBcImluY29tcGxldGVcIikpO1xucHJvamVjdEluaXQucHVzaCh0b2RvSXRlbSgndGl0bGUzMycsICdkZXNjcmlwdGlvbjMzJywgJzInLCBcImluY29tcGxldGVcIikpO1xucHJvamVjdEluaXQucHVzaCh0b2RvSXRlbSgndGl0bGUzNCcsICdkZXNjcmlwdGlvbjM0JywgJzInLCBcImluY29tcGxldGVcIikpO1xuXG4vLyBTb3J0IHRvZG9zIGJhc2VkIG9uIHByb2plY3QjOiBnbyB0aHJvdWdoIHByb2plY3RMaXN0IGFuZCBmaWx0ZXIgdGhlIHRvZG9zXG5mb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKXtcbiAgICBwcm9qZWN0W2ldID0gcHJvamVjdEluaXQuZmlsdGVyKHRvZG8gPT4gdG9kby5wcm9qZWN0ID09IGAke2l9YCk7XG59XG4vLyNlbmRyZWdpb25cblxuLy8gUHJvamVjdCBCdXR0b24gQmVoYXZpb3JcbmNvbnN0IHRvZG9MaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9MaXN0Jyk7XG5mdW5jdGlvbiBwcm9qZWN0QnV0dG9uKCkge1xuICAgIGNvbnN0IF9wcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpO1xuICAgIC8vIExvb3AgdGhyb3VnaCBub2RlcyBvZiBwYXJlbnRcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9wcm9qZWN0TGlzdC5jaGlsZHJlbi5sZW5ndGg7IGkrKyl7XG4gICAgICAgIF9wcm9qZWN0TGlzdC5jaGlsZHJlbltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIC8vIFVwZGF0ZSB2YXJpYWJsZSAtIGN1cnJlbnRQcm9qZWN0XG4gICAgICAgICAgICBfcHJvamVjdExpc3QuY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZSgncHJvamVjdCcpO1xuICAgICAgICAgICAgY3VycmVudFByb2plY3QgPSBfcHJvamVjdExpc3QuY2hpbGRyZW5baV0uY2xhc3NMaXN0WzBdLnNsaWNlKDgpO1xuICAgICAgICAgICAgX3Byb2plY3RMaXN0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcblxuICAgICAgICAgICAgLy8gQWRkL1JtdiAncHJlc3NlZCcgY2xhc3NcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgX3Byb2plY3RMaXN0LmNoaWxkcmVuLmxlbmd0aDsgaisrKXtcbiAgICAgICAgICAgICAgICBfcHJvamVjdExpc3QuY2hpbGRyZW5bal0uY2xhc3NMaXN0LnJlbW92ZSgncHJlc3NlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3Byb2plY3RMaXN0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ3ByZXNzZWQnKTtcblxuICAgICAgICAgICAgLy8gY2xlYXIgdGhlIG1haW4gcGFuZWxcbiAgICAgICAgICAgIHdoaWxlKHRvZG9MaXN0LmZpcnN0Q2hpbGQpe3RvZG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCl9O1xuXG4gICAgICAgICAgICAvLyBJZiB0aGlzIHByb2plY3QgYWxyZWFkeSBoYXMgVG8tRG9zIGluIGl0LCB0aGVuIGNyZWF0ZSBpdGVtIERPTVxuICAgICAgICAgICAgaWYgKHByb2plY3RbY3VycmVudFByb2plY3RdKXtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBlYWNoVG9kbyA9IDA7IGVhY2hUb2RvIDwgcHJvamVjdFtjdXJyZW50UHJvamVjdF0ubGVuZ3RoOyBlYWNoVG9kbysrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2plY3RbY3VycmVudFByb2plY3RdW2VhY2hUb2RvXSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBjcmVhdGVET00uaXRlbShwcm9qZWN0W2N1cnJlbnRQcm9qZWN0XVtlYWNoVG9kb10sIHByb2plY3QsIGN1cnJlbnRQcm9qZWN0LCBlYWNoVG9kbyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbnByb2plY3RCdXR0b24oKTtcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0czAnKS5jbGljaygpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzMCcpLmZvY3VzKCk7XG5cbi8vIENyZWF0ZSBQcm9qZWN0IFN1Ym1pdCBCdXR0b25cbmNvbnN0IHByb2plY3RTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFN1Ym1pdCcpO1xucHJvamVjdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNyZWF0ZVByb2plY3RBbGdvcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdElucHV0JykudmFsdWUsIHByb2plY3RMaXN0KTtcbiAgICBwcm9qZWN0QnV0dG9uKCk7XG59KTtcblxuLy8gQ3JlYXRlIFRvRG8gSXRlbSBTdWJtaXQgQnV0dG9uXG5jb25zdCBpdGVtU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1TdWJtaXQnKTtcbml0ZW1TdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBzdWJtaXQgbmV3IHRvZG8gdG8gcHJvamVjdFxuICAgIGxldCB0b2RvID0gdG9kb0l0ZW0oZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykudmFsdWUsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbicpLnZhbHVlLCBjdXJyZW50UHJvamVjdCwgXCJpbmNvbXBsZXRlXCIpXG5cbiAgICBpZiAocHJvamVjdFtjdXJyZW50UHJvamVjdF0pe1xuICAgICAgICBwcm9qZWN0W2N1cnJlbnRQcm9qZWN0XS5wdXNoKHRvZG8pO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2plY3RbY3VycmVudFByb2plY3RdPVtdO1xuICAgICAgICBwcm9qZWN0W2N1cnJlbnRQcm9qZWN0XS5wdXNoKHRvZG8pO1xuICAgIH1cbiAgICAvL2NyZWF0ZSBET00gYW5kIGJlaGF2aW9yXG4gICAgY3JlYXRlRE9NLml0ZW0odG9kbywgcHJvamVjdCwgY3VycmVudFByb2plY3QsIHByb2plY3RbY3VycmVudFByb2plY3RdLmxlbmd0aC0xKTtcbn0pO1xuXG4vLyBFZGl0IFByb2plY3QgQnV0dG9uXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEVkaXRTdWJtaXQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2plY3RMaXN0W2N1cnJlbnRQcm9qZWN0XSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0RWRpdElucHV0JykudmFsdWU7XG4gICAgY3JlYXRlRE9NLnByb2plY3RFZGl0KHByb2plY3RMaXN0LCBjdXJyZW50UHJvamVjdCk7XG5cbiAgICBwcm9qZWN0QnV0dG9uKCk7XG59KTtcblxuLy8gRGVsZXRlIFByb2plY3QgQnV0dG9uXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZVByb2plY3QnKTtcbmRlbGV0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgLy8gUmVtb3ZlIERPTVxuICAgIGNvbnN0IF9wcm9qZWN0TGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0TGlzdCcpO1xuICAgIF9wcm9qZWN0TGlzdC5yZW1vdmVDaGlsZChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAucHJvamVjdHMke2N1cnJlbnRQcm9qZWN0fWApKTtcblxuICAgIC8vIFJlbW92ZSBvYmplY3QgZnJvbSBwcm9qZWN0TGlzdCBhcnJheVxuICAgIC8vIHByb2plY3RMaXN0LnNwbGljZShjdXJyZW50UHJvamVjdCwxKTtcbiAgICBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdF0gPSAnJztcblxuICAgIC8vIFJlbW92ZSBvYmplY3QgZnJvbSB0b2RvTGlzdFxuICAgIC8vIHByb2plY3Quc3BsaWNlKGN1cnJlbnRQcm9qZWN0LDEpO1xuICAgIHByb2plY3RbY3VycmVudFByb2plY3RdID0gJyc7XG5cbiAgICAvLyBjbGVhciB0aGUgbWFpbiBwYW5lbFxuICAgIHdoaWxlKHRvZG9MaXN0LmZpcnN0Q2hpbGQpe3RvZG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCl9O1xuXG4gICAgcHJvamVjdEJ1dHRvbigpO1xufSk7XG5cbi8vIEVkaXQgSXRlbSBCdXR0b25cbmNvbnN0IGl0ZW1FZGl0U3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1FZGl0U3VibWl0Jyk7XG5pdGVtRWRpdFN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHByb2plY3RbY3VycmVudFByb2plY3RdW2N1cnJlbnRJdGVtXS50aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZUVkaXQnKS52YWx1ZTtcbiAgICBwcm9qZWN0W2N1cnJlbnRQcm9qZWN0XVtjdXJyZW50SXRlbV0uZGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVzY3JpcHRpb25FZGl0JykudmFsdWU7XG5cbiAgICAvLyBjbGVhciB0aGUgbWFpbiBwYW5lbFxuICAgIHdoaWxlKHRvZG9MaXN0LmZpcnN0Q2hpbGQpe3RvZG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCl9OyAgICBcblxuICAgIGZvciAobGV0IGVhY2hUb2RvID0gMDsgZWFjaFRvZG8gPCBwcm9qZWN0W2N1cnJlbnRQcm9qZWN0XS5sZW5ndGg7IGVhY2hUb2RvKyspe1xuICAgICAgICBpZiAocHJvamVjdFtjdXJyZW50UHJvamVjdF1bZWFjaFRvZG9dKXtcbiAgICAgICAgICAgIGNyZWF0ZURPTS5pdGVtKHByb2plY3RbY3VycmVudFByb2plY3RdW2VhY2hUb2RvXSwgcHJvamVjdCwgY3VycmVudFByb2plY3QsIGVhY2hUb2RvKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBvcHVwQ2xvc2UuaXRlbUVkaXQoKTtcblxufSk7XG5cbmV4cG9ydHtcbiAgICBwcm9qZWN0QnV0dG9uLFxuICAgIHByb2plY3RDb3VudGVyLFxufTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=