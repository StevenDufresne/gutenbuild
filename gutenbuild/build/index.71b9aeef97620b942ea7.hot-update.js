"use strict";
self["webpackHotUpdategutenbuild"]("index",{

/***/ "./src/components/tabs/data/store-view/index.js":
/*!******************************************************!*\
  !*** ./src/components/tabs/data/store-view/index.js ***!
  \******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _clickable_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../clickable-list */ "./src/components/clickable-list/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../context */ "./src/components/tabs/data/context.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _search_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../search-control */ "./src/components/search-control/index.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "react-refresh/runtime");

var _s = __webpack_require__.$Refresh$.signature();



/**
 * External dependencies
 */






const alphaSort = (a, b) => {
  if (b.text.startsWith('_')) {
    return -1;
  }

  return a.text.localeCompare(b.text);
};

const StoreView = () => {
  _s();

  const {
    stores,
    setActiveStore,
    search
  } = (0,_context__WEBPACK_IMPORTED_MODULE_2__.useDataTab)();
  const [keyword, setKeyword] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [searchResults, setSearchResults] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const mappedItems = Object.keys(stores).map(i => {
    return {
      text: stores[i].store.name,
      value: stores[i].store.name
    };
  }).sort(alphaSort);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_search_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    value: keyword,
    onChange: val => {
      let s = [];

      if (val.trim().length > 0) {
        s = search(val);
      }

      setSearchResults(s);
      setKeyword(val);
    }
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_clickable_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
    items: searchResults.length ? searchResults : mappedItems,
    onClick: i => setActiveStore(i.value)
  }));
};

_s(StoreView, "xv680wexR2kTxWz3vSTymQDTZsA=", false, function () {
  return [_context__WEBPACK_IMPORTED_MODULE_2__.useDataTab];
});

_c = StoreView;
/* harmony default export */ __webpack_exports__["default"] = (StoreView);

var _c;

__webpack_require__.$Refresh$.register(_c, "StoreView");

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
/******/ 	__webpack_require__.h = function() { return "28e89e16c6c36660db40"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=index.71b9aeef97620b942ea7.hot-update.js.map