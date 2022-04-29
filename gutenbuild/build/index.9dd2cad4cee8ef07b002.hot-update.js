"use strict";
self["webpackHotUpdategutenbuild"]("index",{

/***/ "./src/components/tabs/data/context.js":
/*!*********************************************!*\
  !*** ./src/components/tabs/data/context.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataTabProvider": function() { return /* binding */ DataTabProvider; },
/* harmony export */   "useDataTab": function() { return /* binding */ useDataTab; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fast_fuzzy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fast-fuzzy */ "./node_modules/fast-fuzzy/lib/fuzzy.mjs");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "react-refresh/runtime");

var _s = __webpack_require__.$Refresh$.signature(),
    _s2 = __webpack_require__.$Refresh$.signature();



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */


/**
 * Module Constants
 */

const MAX_RESULTS = 12;
const StateContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();

const flatten = obj => {
  var out = [];

  for (var key in obj) {
    for (var prop in obj[key]) {
      if (typeof obj[key][prop] === 'function') {
        out.push(`${key}.${prop}`);
      }
    }
  }

  return out;
};

function DataTabProvider(_ref) {
  _s();

  let {
    children
  } = _ref;
  const [action, setAction] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('select');
  const [activeStore, setActiveStore] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const [activeFunction, setActiveFunction] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  let allData = flatten(wp);
  const stores = {};

  for (let i = 0; i < Object.keys(wp).length; i++) {
    const key = Object.keys(wp)[i];

    if (wp[key].store) {
      stores[key] = wp[key];
    }
  }

  const storeNames = Object.keys(stores).map(i => stores[i].store.name); // Add Select Functions

  for (let k = 0; k < storeNames.length; k++) {
    const store = storeNames[k];
    allData = allData.concat(flatten({
      [`data.select('${store}')`]: wp.data.select(store)
    }));
  } // Add Dispatch Functions


  for (let k = 0; k < storeNames.length; k++) {
    const store = storeNames[k];
    allData = allData.concat(flatten({
      [`data.dispatch('${store}')`]: wp.data.dispatch(store)
    }));
  }

  const search = keyword => {
    const results = (0,fast_fuzzy__WEBPACK_IMPORTED_MODULE_1__.search)(keyword, allData);
    return results;
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(StateContext.Provider, {
    value: {
      action,
      setAction,
      activeStore,
      setActiveStore,
      activeFunction,
      setActiveFunction,
      stores,
      search
    }
  }, children);
}

_s(DataTabProvider, "ASUFVp6lf8uAMFStabuOW0z+w7A=");

_c = DataTabProvider;
function useDataTab() {
  _s2();

  const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(StateContext);

  if (context === undefined) {
    throw new Error('useData must be used within a Provider');
  }

  return context;
}

_s2(useDataTab, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");

var _c;

__webpack_require__.$Refresh$.register(_c, "DataTabProvider");

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
/******/ 	__webpack_require__.h = function() { return "c7d32922e0aa54a1e6a9"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=index.9dd2cad4cee8ef07b002.hot-update.js.map