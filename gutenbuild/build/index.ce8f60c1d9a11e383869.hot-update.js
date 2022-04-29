"use strict";
self["webpackHotUpdategutenbuild"]("index",{

/***/ "./src/components/peek-attributes/index.js":
/*!*************************************************!*\
  !*** ./src/components/peek-attributes/index.js ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_misc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/misc */ "./src/utils/misc.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "react-refresh/runtime");







class PeekAttributes extends react__WEBPACK_IMPORTED_MODULE_2__.Component {
  constructor() {
    super();
    this.state = {
      block: undefined
    };
    this.debouncedMM = (0,lodash__WEBPACK_IMPORTED_MODULE_1__.debounce)(this.update, 300);
  }

  update(e) {
    const el = document.elementFromPoint(e.pageX, e.pageY);
    const attr = el.getAttribute('data-block');

    if (attr) {
      const block = wp.data.select('core/block-editor').getBlocksByClientId(attr)[0];
      this.setState({
        block: block
      });
    }
  }

  componentDidMount() {
    document.addEventListener('mousemove', this.debouncedMM);
  }

  componentWillUnmount() {
    document.removeEventListener('mousemove', this.debouncedMM);
  }

  render() {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, this.state.block ? Object.keys(this.state.block).filter(key => !['isValid', 'validationIssues'].includes(key)).map(key => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
      key: key
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      style: {
        fontWeight: 'bold',
        marginBottom: '2px'
      }
    }, key, ":"), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_utils_misc__WEBPACK_IMPORTED_MODULE_4__.trunc)(JSON.stringify(this.state.block[key]), 100)))) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, "Hover over a block.")));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (PeekAttributes);

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
/******/ 	__webpack_require__.h = function() { return "09c2c926404e85e80961"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=index.ce8f60c1d9a11e383869.hot-update.js.map