"use strict";
self["webpackHotUpdategutenbuild"]("index",{

/***/ "./node_modules/@wordpress/icons/build-module/library/info.js":
/*!********************************************************************!*\
  !*** ./node_modules/@wordpress/icons/build-module/library/info.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const info = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.SVG, {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24"
}, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__.Path, {
  d: "M12 3.2c-4.8 0-8.8 3.9-8.8 8.8 0 4.8 3.9 8.8 8.8 8.8 4.8 0 8.8-3.9 8.8-8.8 0-4.8-4-8.8-8.8-8.8zm0 16c-4 0-7.2-3.3-7.2-7.2C4.8 8 8 4.8 12 4.8s7.2 3.3 7.2 7.2c0 4-3.2 7.2-7.2 7.2zM11 17h2v-6h-2v6zm0-8h2V7h-2v2z"
}));
/* harmony default export */ __webpack_exports__["default"] = (info);
//# sourceMappingURL=info.js.map

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
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/tool.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/home.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/settings.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/info.js");
/* harmony import */ var _components_tab_panel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/tab-panel */ "./src/components/tab-panel/index.js");
/* harmony import */ var _components_tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tabs */ "./src/components/tabs/index.js");
/* harmony import */ var _components_peek_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/peek-attributes */ "./src/components/peek-attributes/index.js");
/* harmony import */ var _utils_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./utils/settings */ "./src/utils/settings.js");
/* harmony import */ var _hooks_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./hooks/context */ "./src/hooks/context.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__);
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "react-refresh/runtime");












const PluginSidebarTest = () => {
  (0,_utils_settings__WEBPACK_IMPORTED_MODULE_6__.updateSettings)();
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
    name: "plugin-sidebar-test",
    title: "Gutenbuild",
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_9__["default"]
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_peek_attributes__WEBPACK_IMPORTED_MODULE_5__["default"], null), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_hooks_context__WEBPACK_IMPORTED_MODULE_7__.DataProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tab_panel__WEBPACK_IMPORTED_MODULE_3__["default"], {
    tabs: [{
      name: 'data',
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Icon, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_10__["default"]
      }),
      className: 'tab-one',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tabs__WEBPACK_IMPORTED_MODULE_4__.DataTab, null)
    }, {
      name: 'settings',
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Icon, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_11__["default"]
      }),
      className: 'tab-three',
      content: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_tabs__WEBPACK_IMPORTED_MODULE_4__.SettingsTab, null)
    }, {
      name: 'settings',
      title: (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_8__.Icon, {
        icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_12__["default"]
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
/******/ 	__webpack_require__.h = function() { return "a5614061d38f9ec7371c"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=index.61810fe6c0b8f645d246.hot-update.js.map