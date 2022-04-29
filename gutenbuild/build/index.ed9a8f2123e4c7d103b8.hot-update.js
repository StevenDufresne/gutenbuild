"use strict";
self["webpackHotUpdategutenbuild"]("index",{

/***/ "./src/components/tabs/data/index.js":
/*!*******************************************!*\
  !*** ./src/components/tabs/data/index.js ***!
  \*******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _clickable_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../clickable-list */ "./src/components/clickable-list/index.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./context */ "./src/components/tabs/data/context.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/arrow-left.js");
/* harmony import */ var _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/icons */ "./node_modules/@wordpress/icons/build-module/library/external.js");
/* harmony import */ var react_json_view__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-json-view */ "./node_modules/react-json-view/dist/main.js");
/* harmony import */ var react_json_view__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_json_view__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/components/tabs/data/style.scss");
/* provided dependency */ var __react_refresh_utils__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/lib/runtime/RefreshUtils.js");
/* provided dependency */ var __react_refresh_error_overlay__ = __webpack_require__(/*! ./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js */ "./node_modules/@pmmmwh/react-refresh-webpack-plugin/overlay/index.js");
__webpack_require__.$Refresh$.runtime = __webpack_require__(/*! ./node_modules/react-refresh/runtime.js */ "react-refresh/runtime");

var _s = __webpack_require__.$Refresh$.signature(),
    _s2 = __webpack_require__.$Refresh$.signature(),
    _s3 = __webpack_require__.$Refresh$.signature(),
    _s4 = __webpack_require__.$Refresh$.signature();



/**
 * External dependencies
 */








const MySearchControl = (keyword, onChange) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SearchControl, {
  className: "gutenbuild-searchcontrol",
  label: 'Search',
  hideLabelFromVision: true,
  value: keyword,
  onChange: val => setKeyword(val)
});

_c = MySearchControl;

const getDocLink = module => {
  return `https://developer.wordpress.org/block-editor/reference-guides/data/data-core${module}`;
};

const alphaSort = (a, b) => {
  if (b.text.startsWith('_')) {
    return -1;
  }

  return a.text.localeCompare(b.text);
};

const getDocModule = activeStore => {
  const s = activeStore.split('/'); // Not Core

  if (s[1]) {
    return '-' + s[1];
  }

  return '';
};

const ViewHeader = _ref => {
  let {
    title,
    link,
    onBack
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    className: "gutenbuild-view-header",
    align: "center",
    justify: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    style: {
      paddingRight: '8px',
      height: '24px'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: "#",
    onClick: onBack
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_6__["default"]
  }))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    align: "center",
    justify: "flex-start"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("a", {
    href: link,
    target: "_blank"
  }, title), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Icon, {
    size: 18,
    icon: _wordpress_icons__WEBPACK_IMPORTED_MODULE_7__["default"]
  })));
};

_c2 = ViewHeader;

const StoreView = () => {
  _s();

  const {
    stores,
    setActiveStore,
    setAction
  } = (0,_context__WEBPACK_IMPORTED_MODULE_2__.useDataTab)();
  const mappedItems = Object.keys(stores).map(i => {
    return {
      text: stores[i].store.name,
      value: stores[i].store.name
    };
  }).sort(alphaSort);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_clickable_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
    items: mappedItems,
    onClick: i => setActiveStore(i.value)
  }));
};

_s(StoreView, "EGjKMNFxsYncFZkoVz0qla/wD2E=", false, function () {
  return [_context__WEBPACK_IMPORTED_MODULE_2__.useDataTab];
});

_c3 = StoreView;

const ActiveStoreView = () => {
  _s2();

  const {
    action,
    setAction,
    activeStore,
    setActiveStore,
    setActiveFunction
  } = (0,_context__WEBPACK_IMPORTED_MODULE_2__.useDataTab)();
  const [keyword, setKeyword] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const mappedFunctions = Object.keys(wp.data[action](activeStore)).map(i => {
    return {
      text: `${i}()`,
      value: i
    };
  }).sort(alphaSort);
  const docLink = getDocLink(getDocModule(activeStore));
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewHeader, {
    title: activeStore,
    link: docLink,
    onBack: () => setActiveStore(null)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SearchControl, {
    className: "gutenbuild-searchcontrol",
    label: 'Search',
    hideLabelFromVision: true,
    value: keyword,
    onChange: val => setKeyword(val)
  })), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Flex, {
    style: {
      padding: '1rem'
    }
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    id: "selector",
    name: "action",
    value: "select",
    checked: action === 'select',
    onChange: i => setAction('select')
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "selector"
  }, "Selectors")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("span", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("input", {
    type: "radio",
    id: "actions",
    name: "action",
    value: "dispatch",
    onChange: i => setAction('dispatch'),
    checked: action === 'dispatch'
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("label", {
    htmlFor: "actions"
  }, "Actions"))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_clickable_list__WEBPACK_IMPORTED_MODULE_1__["default"], {
    items: mappedFunctions.filter(i => i.text.toLowerCase().includes(keyword.toLowerCase())),
    onClick: i => setActiveFunction(i.value)
  }));
};

_s2(ActiveStoreView, "tfgHuwOkprRi0uNiObgNm8LfJBo=", false, function () {
  return [_context__WEBPACK_IMPORTED_MODULE_2__.useDataTab];
});

_c4 = ActiveStoreView;

const ActiveFunctionView = () => {
  _s3();

  const {
    action,
    activeStore,
    activeFunction,
    setActiveFunction
  } = (0,_context__WEBPACK_IMPORTED_MODULE_2__.useDataTab)();
  const [output, setOutput] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();
  const [isOutputObject, setOutputObject] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)();

  const callFunction = async () => {
    try {
      let out = await wp.data[action](activeStore)[activeFunction]();

      if (out === undefined) {
        out = 'undefined';
      }

      setOutput(out);
      setOutputObject(_.isObject(out));
    } catch (e) {
      setOutput("Error running function. Most likely missing arguments that currently isn't supported.");
    }
  };

  const docLink = `${getDocLink(getDocModule(activeStore))}/#${activeFunction.toLowerCase()}`;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ViewHeader, {
    title: activeFunction,
    link: docLink,
    onBack: () => setActiveFunction(null)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
    variant: "primary",
    onClick: callFunction
  }, "Run Function")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
    title: "Output"
  }, isOutputObject ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)((react_json_view__WEBPACK_IMPORTED_MODULE_4___default()), {
    src: output
  }) : (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
    value: JSON.stringify(output)
  })));
};

_s3(ActiveFunctionView, "+GTMumIohKVVhdw1AbYXiUQk1J4=", false, function () {
  return [_context__WEBPACK_IMPORTED_MODULE_2__.useDataTab];
});

_c5 = ActiveFunctionView;

const DataTab = () => {
  _s4();

  const {
    activeStore,
    activeFunction
  } = (0,_context__WEBPACK_IMPORTED_MODULE_2__.useDataTab)();

  if (activeStore && !activeFunction) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActiveStoreView, null);
  }

  if (activeFunction) {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(ActiveFunctionView, null);
  }

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(StoreView, null);
};

_s4(DataTab, "GqkqiVDZH290gJjquYA6KVy2yn0=", false, function () {
  return [_context__WEBPACK_IMPORTED_MODULE_2__.useDataTab];
});

_c6 = DataTab;
/* harmony default export */ __webpack_exports__["default"] = (props => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_context__WEBPACK_IMPORTED_MODULE_2__.DataTabProvider, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(DataTab, props)));

var _c, _c2, _c3, _c4, _c5, _c6;

__webpack_require__.$Refresh$.register(_c, "MySearchControl");
__webpack_require__.$Refresh$.register(_c2, "ViewHeader");
__webpack_require__.$Refresh$.register(_c3, "StoreView");
__webpack_require__.$Refresh$.register(_c4, "ActiveStoreView");
__webpack_require__.$Refresh$.register(_c5, "ActiveFunctionView");
__webpack_require__.$Refresh$.register(_c6, "DataTab");

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
/******/ 	__webpack_require__.h = function() { return "8625f023465665f413cb"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=index.ed9a8f2123e4c7d103b8.hot-update.js.map