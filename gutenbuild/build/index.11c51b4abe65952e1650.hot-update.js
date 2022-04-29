"use strict";
self["webpackHotUpdategutenbuild"]("index",{

/***/ "./node_modules/@wordpress/icons/build-module/library/check.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/check.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const check = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"
}));
/* harmony default export */ __webpack_exports__["default"] = (check);
//# sourceMappingURL=check.js.map

/***/ }),

/***/ "./src/components/clickable-list/index.js":
/*!************************************************!*\
  !*** ./src/components/clickable-list/index.js ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copyToClipboard": function() { return /* binding */ copyToClipboard; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/check.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/copy.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/components/clickable-list/style.scss");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "react-refresh/runtime");

var _s = __webpack_require__.$Refresh$.signature();



/**
 * External dependencies
 */




/**
 * Uses a hidden textarea that is added and removed from the DOM in order to copy to clipboard via the Browser.
 *
 * @param {string} stringToCopy A string that will be copied to the clipboard
 * @return {boolean} Whether the copy function succeeded
 */

const copyToClipboard = stringToCopy => {
  const element = document.createElement('textarea'); // We don't want the text area to be selected since it's temporary.

  element.setAttribute('readonly', ''); // We don't want screen readers to read the content since it's pattern markup

  element.setAttribute('aria-hidden', 'true'); // We don't want the text area to be visible since it's temporary.

  element.style.position = 'absolute';
  element.style.left = '-9999px';
  element.value = stringToCopy;
  document.body.appendChild(element);
  element.select();
  const success = document.execCommand('copy');
  document.body.removeChild(element);
  return success;
};

function trunc(str, charMax) {
  if (str.length > charMax) {
    return str.slice(0, charMax) + '...';
  } else {
    return str;
  }
}

const ClickableList = _ref => {
  _s();

  let {
    items
  } = _ref;
  const [copied, setCopied] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);

  const formatText = (type, text) => {
    let truncated = trunc(text, 30);

    switch (type) {
      case 'component':
        return `<${truncated} />`;

      case 'object':
        return `{${truncated}}`;

      default:
        return `${truncated}()`;
    }
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "gutenbuild-clickable-list"
  }, items.map(i => {
    const split = i.text.split('.');
    const text = split.pop();
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: i.text
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
      href: i.link,
      target: "_blank"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gutenbuild-clickable-list__title"
    }, formatText(i.type, text)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", {
      key: i,
      className: "gutenbuild-clickable-list__subtitle"
    }, split.join('.')), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      className: "gutenbuild-clickable-list__tools"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
      isSmall: true,
      isPrimary: true,
      onClick: e => {
        e.stopPropagation();
        e.preventDefault();
        let copy = `wp.${i.text}`;

        if (i.type === 'function') {
          copy = copy + '()';
        }

        copyToClipboard(copy);
      }
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Icon, {
      size: 18,
      icon: copied ? _wordpress_icons__WEBPACK_IMPORTED_MODULE_3__["default"] : _wordpress_icons__WEBPACK_IMPORTED_MODULE_4__["default"]
    })))));
  }));
};

_s(ClickableList, "jKEnbzxa28QOsEBtpi0vytO0S2Q=");

_c = ClickableList;
/* harmony default export */ __webpack_exports__["default"] = (ClickableList);

var _c;

__webpack_require__.$Refresh$.register(_c, "ClickableList");

var $ReactRefreshModuleId$ = __webpack_require__.$Refresh$.moduleId;
var $ReactRefreshCurrentExports$ = __react_refresh_utils__.getModuleExports(
	$ReactRefreshModuleId$
);

function $ReactRefreshModuleRuntime$(exports) {
	if (true) {
		var errorOverlay;
		if (typeof __react_refresh_error_overlay__ !== 'undefined') {
			errorOverlay = __react_refresh_error_overlay__;
		}
		var testMode;
		if (typeof __react_refresh_test__ !== 'undefined') {
			testMode = __react_refresh_test__;
		}
		return __react_refresh_utils__.executeRuntime(
			exports,
			$ReactRefreshModuleId$,
			module.hot,
			errorOverlay,
			testMode
		);
	}
}

if (typeof Promise !== 'undefined' && $ReactRefreshCurrentExports$ instanceof Promise) {
	$ReactRefreshCurrentExports$.then($ReactRefreshModuleRuntime$);
} else {
	$ReactRefreshModuleRuntime$($ReactRefreshCurrentExports$);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "db2cc8ab65d27a969057"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=index.11c51b4abe65952e1650.hot-update.js.map