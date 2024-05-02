/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./Dev/components/HTMLManager.js":
/*!***************************************!*\
  !*** ./Dev/components/HTMLManager.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HTMLManager: () => (/* binding */ HTMLManager)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var HTMLManager = /*#__PURE__*/function () {
  function HTMLManager() {
    _classCallCheck(this, HTMLManager);
  }
  return _createClass(HTMLManager, null, [{
    key: "appendChild",
    value:
    /**
     * Функция добавляет родителю дочерний элемент, если родителя еще не существует, он ждет его создания, используя MutationObserver
     * @param parentSelector {string} CSS-селектор родительского элемента
     * @param childElement {HTMLElement} Дочерний элемент
     */
    function appendChild(parentSelector, childElement) {
      console.log("Функция appendChild");
      var parentElement = document.querySelector(parentSelector);
      if (parentElement) {
        console.log("Element: ", parentElement);
        parentElement.appendChild(childElement);
      } else {
        var observer = new MutationObserver(function (mutations) {
          var _iterator = _createForOfIteratorHelper(mutations),
            _step;
          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var mutation = _step.value;
              if (mutation.type === "childList") {
                var addedNodes = mutation.addedNodes;
                var _iterator2 = _createForOfIteratorHelper(addedNodes),
                  _step2;
                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var node = _step2.value;
                    if (node.nodeType === Node.ELEMENT_NODE && node.matches(parentSelector)) {
                      console.log("Element: ", node);
                      node.appendChild(childElement);
                      observer.disconnect();
                      return;
                    }
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        });
        observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
    }
  }]);
}();

/***/ }),

/***/ "./Dev/components/SabiButton.js":
/*!**************************************!*\
  !*** ./Dev/components/SabiButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SabiButton: () => (/* binding */ SabiButton)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classPrivateFieldInitSpec(obj, privateMap, value) { _checkPrivateRedeclaration(obj, privateMap); privateMap.set(obj, value); }
function _checkPrivateRedeclaration(obj, privateCollection) { if (privateCollection.has(obj)) { throw new TypeError("Cannot initialize the same private elements twice on an object"); } }
function _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }
function _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
var _button = /*#__PURE__*/new WeakMap();
var _buttonType = /*#__PURE__*/new WeakMap();
var SabiButton = /*#__PURE__*/function () {
  /**
   * Создает кнопку с заданным текстом, типом стиля и обработчиком клика.
   * @param {string} text - текст на кнопке.
   * @param {string} buttonType - тип стиля кнопки ('primary', 'secondary').
   * @param {Function} onClick - функция, которая будет вызвана при клике на кнопку.
   */
  function SabiButton(text) {
    var buttonType = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'primary';
    var onClick = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {
      return console.log('SabiButton clicked!');
    };
    _classCallCheck(this, SabiButton);
    // Определяем приватные поля класса
    _classPrivateFieldInitSpec(this, _button, void 0);
    _classPrivateFieldInitSpec(this, _buttonType, void 0);
    _classPrivateFieldSet(_button, this, document.createElement('button'));
    _classPrivateFieldGet(_button, this).textContent = text;
    _classPrivateFieldGet(_button, this).type = 'button';
    _classPrivateFieldGet(_button, this).classList.add('sabi-button', buttonType);
    _classPrivateFieldSet(_buttonType, this, buttonType);
    this.applyButtonStyles();
    this.addEventListeners(onClick);
  }

  /**
   * Возвращает DOM элемент кнопки.
   * @returns {HTMLElement}
   */
  return _createClass(SabiButton, [{
    key: "element",
    get: function get() {
      return _classPrivateFieldGet(_button, this);
    }

    /**
     * Применяет стили к кнопке в зависимости от её типа.
     */
  }, {
    key: "applyButtonStyles",
    value: function applyButtonStyles() {
      var baseStyles = {
        padding: '10px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        transition: 'all 0.3s',
        marginLeft: '16px'
      };
      var typeStyles = {
        primary: {
          backgroundColor: '#4CAF50',
          color: 'white'
        },
        secondary: {
          backgroundColor: '#f44336',
          color: 'white'
        }
      };
      Object.assign(_classPrivateFieldGet(_button, this).style, baseStyles, typeStyles[_classPrivateFieldGet(_buttonType, this)]);
    }

    /**
     * Добавляет обработчики событий на кнопку.
     * @param {Function} onClick - функция обработчика клика.
     */
  }, {
    key: "addEventListeners",
    value: function addEventListeners(onClick) {
      _classPrivateFieldGet(_button, this).addEventListener('mouseover', this.onMouseOverHandler.bind(this));
      _classPrivateFieldGet(_button, this).addEventListener('mouseout', this.onMouseOutHandler.bind(this));
      _classPrivateFieldGet(_button, this).addEventListener('click', onClick);
    }

    /**
     * Обработчик события mouseover.
     */
  }, {
    key: "onMouseOverHandler",
    value: function onMouseOverHandler() {
      _classPrivateFieldGet(_button, this).style.backgroundColor = _classPrivateFieldGet(_buttonType, this) === 'primary' ? '#3d8e41' : '#a52424';
    }

    /**
     * Обработчик события mouseout.
     */
  }, {
    key: "onMouseOutHandler",
    value: function onMouseOutHandler() {
      _classPrivateFieldGet(_button, this).style.backgroundColor = _classPrivateFieldGet(_buttonType, this) === 'primary' ? '#4CAF50' : '#f44336';
    }
  }]);
}();

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
/******/ 			// no module.id needed
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
/*!**************************************!*\
  !*** ./Dev/content/contentScript.js ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_SabiButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/SabiButton */ "./Dev/components/SabiButton.js");
/* harmony import */ var _components_HTMLManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/HTMLManager */ "./Dev/components/HTMLManager.js");


var button = new _components_SabiButton__WEBPACK_IMPORTED_MODULE_0__.SabiButton("Привет-Пока", "primary", function () {
  console.log("Нажата кнопка- Привет-Пока");
});
button.element.classList.add("fr-command", "fr-btn");
_components_HTMLManager__WEBPACK_IMPORTED_MODULE_1__.HTMLManager.appendChild('.fr-btn-grp', button.element);
var p = document.createElement("p");
p.textContent = "Привет, как дела?";
_components_HTMLManager__WEBPACK_IMPORTED_MODULE_1__.HTMLManager.appendChild('div[data-e2e="wysiwyg-editor"] .fr-element.fr-view.custom-theme p', p);
})();

/******/ })()
;
//# sourceMappingURL=contentScript.js.map