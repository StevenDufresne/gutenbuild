"use strict";
self["webpackHotUpdategutenbuild"]("index",{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/tool.js");
/* harmony import */ var _components_tab_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tab-panel */ "./src/components/tab-panel/index.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/settings */ "./src/utils/settings.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './hooks/contextz'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "react-refresh/runtime");










const PluginSidebarTest = () => {
  (0,_utils_settings__WEBPACK_IMPORTED_MODULE_5__.updateSettings)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
    name: "plugin-sidebar-test",
    title: "Gutenbuild",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Object(function webpackMissingModule() { var e = new Error("Cannot find module './hooks/contextz'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tab_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tabs: [{
      name: 'data',
      title: 'Functions',
      className: 'tab-one',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tabs__WEBPACK_IMPORTED_MODULE_4__.DataTab, null)
    }, {
      name: 'settings',
      title: 'Settings',
      className: 'tab-three',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tabs__WEBPACK_IMPORTED_MODULE_4__.SettingsTab, null)
    }]
  })));
};

_c = PluginSidebarTest;
(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('plugin-sidebar-test', {
  render: PluginSidebarTest
});

var _c;

__webpack_require__.$Refresh$.register(_c, "PluginSidebarTest");

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
/******/ 	__webpack_require__.h = function() { return "89928fa1ff656e7c0c23"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=index.daab666487bece93e261.hot-update.js.map