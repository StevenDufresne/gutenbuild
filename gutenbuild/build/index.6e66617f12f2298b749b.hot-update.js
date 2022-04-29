"use strict";
self["webpackHotUpdategutenbuild"]("index",{

/***/ "./src/components/tabs/settings/index.js":
/*!***********************************************!*\
  !*** ./src/components/tabs/settings/index.js ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/components/tabs/settings/style.scss");
/* harmony import */ var _utils_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/keys */ "./src/utils/keys.js");
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/settings */ "./src/utils/settings.js");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "react-refresh/runtime");

var _s = __webpack_require__.$Refresh$.signature();








const SettingsTab = () => {
  _s();

  const [skeletonMode, setSkeletonMode] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(localStorage.getItem(_utils_keys__WEBPACK_IMPORTED_MODULE_3__.SKELETON_KEY));
  (0,_utils_settings__WEBPACK_IMPORTED_MODULE_4__.updateSettings)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
    title: "Skeleton Mode"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Adds a border to every block. Helps to see document structure and selecting parent blocks."), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
    label: "On",
    checked: skeletonMode,
    onChange: () => {
      const isToggled = !skeletonMode;
      setSkeletonMode(isToggled);

      if (isToggled) {
        localStorage.setItem(_utils_keys__WEBPACK_IMPORTED_MODULE_3__.SKELETON_KEY, true);
      } else {
        localStorage.removeItem(_utils_keys__WEBPACK_IMPORTED_MODULE_3__.SKELETON_KEY);
      }
    }
  }));
};

_s(SettingsTab, "Ra0WSC/+WYkBcj4Cz41z4Ee1vHc=");

_c = SettingsTab;
/* harmony default export */ __webpack_exports__["default"] = (SettingsTab);

var _c;

__webpack_require__.$Refresh$.register(_c, "SettingsTab");

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
/******/ 	__webpack_require__.h = function() { return "8e1de87455d314949d0e"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=index.6e66617f12f2298b749b.hot-update.js.map