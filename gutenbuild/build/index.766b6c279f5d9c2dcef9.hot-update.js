"use strict";
self["webpackHotUpdategutenbuild"]("index",{

/***/ "./node_modules/@wordpress/icons/build-module/library/settings.js":
/*!************************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/settings.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const settings = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M14.5 13.8c-1.1 0-2.1.7-2.4 1.8H4V17h8.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20v-1.5h-3.1c-.3-1-1.3-1.7-2.4-1.7zM11.9 7c-.3-1-1.3-1.8-2.4-1.8S7.4 6 7.1 7H4v1.5h3.1c.3 1 1.3 1.8 2.4 1.8s2.1-.7 2.4-1.8H20V7h-8.1z"
}));
/* harmony default export */ __webpack_exports__["default"] = (settings);
//# sourceMappingURL=settings.js.map

/***/ }),

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
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/tool.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/home.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/settings.js");
/* harmony import */ var _components_tab_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tab-panel */ "./src/components/tab-panel/index.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/settings */ "./src/utils/settings.js");
/* harmony import */ var _hooks_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./hooks/context */ "./src/hooks/context.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "react-refresh/runtime");











const PluginSidebarTest = () => {
  (0,_utils_settings__WEBPACK_IMPORTED_MODULE_5__.updateSettings)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
    name: "plugin-sidebar-test",
    title: "Gutenbuild",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_8__["default"]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_hooks_context__WEBPACK_IMPORTED_MODULE_6__.DataProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tab_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tabs: [{
      name: 'data',
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Icon, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"]
      }),
      className: 'tab-one',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tabs__WEBPACK_IMPORTED_MODULE_4__.DataTab, null)
    }, {
      name: 'settings',
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_7__.Icon, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"]
      }),
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
/******/ 	__webpack_require__.h = function() { return "e5d76f14bc7727c9a2d5"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=index.766b6c279f5d9c2dcef9.hot-update.js.map