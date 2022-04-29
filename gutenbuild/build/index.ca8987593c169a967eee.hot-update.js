self["webpackHotUpdategutenbuild"]("index",{

/***/ "./src/components/tabs/data/context.js":
/*!*********************************************!*\
  !*** ./src/components/tabs/data/context.js ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

const MAX_RESULTS = 24;
const StateContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();

const getType = (lib, obj) => {
  if (lib === 'components' || obj.$$typeof) {
    return 'component';
  }

  return typeof obj;
};

const flatten = obj => {
  var out = [];

  for (var lib in obj) {
    for (var prop in obj[lib]) {
      if (obj[lib][prop]) {
        out.push({
          text: `${lib}.${prop}`,
          type: getType(lib, obj[lib][prop])
        });
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

  console.log(allData);

  const search = keyword => {
    const results = (0,fast_fuzzy__WEBPACK_IMPORTED_MODULE_1__.search)(keyword, allData, {
      ignoreCase: true,
      keySelector: obj => obj.text
    });
    return results.splice(0, MAX_RESULTS);
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

/***/ }),

/***/ "./node_modules/graphemesplit/index.js":
/*!*********************************************!*\
  !*** ./node_modules/graphemesplit/index.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const types = __webpack_require__(/*! ./types */ "./node_modules/graphemesplit/types.js");
const typeTrieData = (__webpack_require__(/*! ./typeTrie.json */ "./node_modules/graphemesplit/typeTrie.json").data);
const extPictData = (__webpack_require__(/*! ./extPict.json */ "./node_modules/graphemesplit/extPict.json").data);

const UnicodeTrie = __webpack_require__(/*! unicode-trie */ "./node_modules/unicode-trie/index.js");
const Base64 = (__webpack_require__(/*! js-base64 */ "./node_modules/js-base64/base64.js").Base64);

const typeTrie = new UnicodeTrie(Base64.toUint8Array(typeTrieData));
const extPict = new UnicodeTrie(Base64.toUint8Array(extPictData));

function is(type, bit) {
  return (type & bit) !== 0;
}

const GB11State = {
  Initial: 0,
  ExtendOrZWJ: 1,
  NotBoundary: 2,
};

function nextGraphemeClusterSize(ts, start) {
  const L = ts.length;

  let ri = 0;
  let gb11State = GB11State.Initial;

  // GB1: sot ÷ Any
  for (let i = start; i + 1 < L; i++) {
    const curr = ts[i + 0];
    const next = ts[i + 1];

    // for GB12, GB13
    if (!is(curr, types.Regional_Indicator)) {
      ri = 0;
    }

    // for GB11: \p{Extended_Pictographic} Extend* ZWJ x \p{Extended_Pictographic}
    switch (gb11State) {
      case GB11State.NotBoundary:
      case GB11State.Initial:
        if (is(curr, types.Extended_Pictographic)) {
          gb11State = GB11State.ExtendOrZWJ;
        } else {
          gb11State = GB11State.Initial;
        }
        break;
      case GB11State.ExtendOrZWJ:
        if (is(curr, types.Extend)) {
          gb11State = GB11State.ExtendOrZWJ;
        } else if (
          is(curr, types.ZWJ) &&
          is(next, types.Extended_Pictographic)
        ) {
          gb11State = GB11State.NotBoundary;
        } else {
          gb11State = GB11State.Initial;
        }
        break;
    }

    // GB3: CR x LF
    if (is(curr, types.CR) && is(next, types.LF)) {
      continue;
    }
    // GB4: (Control | CR | LF) ÷
    if (is(curr, types.Control | types.CR | types.LF)) {
      return i + 1 - start;
    }
    // GB5: ÷ (Control | CR | LF)
    if (is(next, types.Control | types.CR | types.LF)) {
      return i + 1 - start;
    }
    // GB6: L x (L | V | LV | LVT)
    if (
      is(curr, types.L) &&
      is(next, types.L | types.V | types.LV | types.LVT)
    ) {
      continue;
    }
    // GB7: (LV | V) x (V | T)
    if (is(curr, types.LV | types.V) && is(next, types.V | types.T)) {
      continue;
    }
    // GB8: (LVT | T) x T
    if (is(curr, types.LVT | types.T) && is(next, types.T)) {
      continue;
    }
    // GB9: x (Extend | ZWJ)
    if (is(next, types.Extend | types.ZWJ)) {
      continue;
    }
    // GB9a: x SpacingMark
    if (is(next, types.SpacingMark)) {
      continue;
    }
    // GB9b: Prepend x
    if (is(curr, types.Prepend)) {
      continue;
    }
    // GB11: \p{Extended_Pictographic} Extend* ZWJ x \p{Extended_Pictographic}
    if (gb11State === GB11State.NotBoundary) {
      continue;
    }
    // GB12: sot (RI RI)* RI x RI
    // GB13: [^RI] (RI RI)* RI x RI
    if (
      is(curr, types.Regional_Indicator) &&
      is(next, types.Regional_Indicator) &&
      ri % 2 === 0
    ) {
      ri++;
      continue;
    }
    // GB999: Any ÷ Any
    return i + 1 - start;
  }
  // GB2: Any ÷ eot
  return L - start;
}

module.exports = function split(str) {
  const graphemeClusters = [];

  const map = [0];
  const ts = [];
  for (let i = 0; i < str.length; ) {
    const code = str.codePointAt(i);
    ts.push(typeTrie.get(code) | extPict.get(code));
    i += code > 65535 ? 2 : 1;
    map.push(i);
  }

  for (let offset = 0; offset < ts.length; ) {
    const size = nextGraphemeClusterSize(ts, offset);
    const start = map[offset];
    const end = map[offset + size];
    graphemeClusters.push(str.slice(start, end));
    offset += size;
  }

  return graphemeClusters;
};


/***/ }),

/***/ "./node_modules/graphemesplit/types.js":
/*!*********************************************!*\
  !*** ./node_modules/graphemesplit/types.js ***!
  \*********************************************/
/***/ (function(module) {

module.exports = {
  Other: 0,
  CR: 1 << 0,
  LF: 1 << 1,
  Control: 1 << 2,
  Extend: 1 << 3,
  ZWJ: 1 << 4,
  Regional_Indicator: 1 << 5,
  Prepend: 1 << 6,
  SpacingMark: 1 << 7,
  L: 1 << 8,
  V: 1 << 9,
  T: 1 << 10,
  LV: 1 << 11,
  LVT: 1 << 12,
  Extended_Pictographic: 1 << 13,
};


/***/ }),

/***/ "./node_modules/js-base64/base64.js":
/*!******************************************!*\
  !*** ./node_modules/js-base64/base64.js ***!
  \******************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

//
// THIS FILE IS AUTOMATICALLY GENERATED! DO NOT EDIT BY HAND!
//
;
(function (global, factory) {
     true
        ? module.exports = factory()
        : 0;
}((typeof self !== 'undefined' ? self
    : typeof window !== 'undefined' ? window
        : typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g
            : this), function () {
    'use strict';
    /**
     *  base64.ts
     *
     *  Licensed under the BSD 3-Clause License.
     *    http://opensource.org/licenses/BSD-3-Clause
     *
     *  References:
     *    http://en.wikipedia.org/wiki/Base64
     *
     * @author Dan Kogai (https://github.com/dankogai)
     */
    var version = '3.7.2';
    /**
     * @deprecated use lowercase `version`.
     */
    var VERSION = version;
    var _hasatob = typeof atob === 'function';
    var _hasbtoa = typeof btoa === 'function';
    var _hasBuffer = typeof Buffer === 'function';
    var _TD = typeof TextDecoder === 'function' ? new TextDecoder() : undefined;
    var _TE = typeof TextEncoder === 'function' ? new TextEncoder() : undefined;
    var b64ch = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
    var b64chs = Array.prototype.slice.call(b64ch);
    var b64tab = (function (a) {
        var tab = {};
        a.forEach(function (c, i) { return tab[c] = i; });
        return tab;
    })(b64chs);
    var b64re = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
    var _fromCC = String.fromCharCode.bind(String);
    var _U8Afrom = typeof Uint8Array.from === 'function'
        ? Uint8Array.from.bind(Uint8Array)
        : function (it, fn) {
            if (fn === void 0) { fn = function (x) { return x; }; }
            return new Uint8Array(Array.prototype.slice.call(it, 0).map(fn));
        };
    var _mkUriSafe = function (src) { return src
        .replace(/=/g, '').replace(/[+\/]/g, function (m0) { return m0 == '+' ? '-' : '_'; }); };
    var _tidyB64 = function (s) { return s.replace(/[^A-Za-z0-9\+\/]/g, ''); };
    /**
     * polyfill version of `btoa`
     */
    var btoaPolyfill = function (bin) {
        // console.log('polyfilled');
        var u32, c0, c1, c2, asc = '';
        var pad = bin.length % 3;
        for (var i = 0; i < bin.length;) {
            if ((c0 = bin.charCodeAt(i++)) > 255 ||
                (c1 = bin.charCodeAt(i++)) > 255 ||
                (c2 = bin.charCodeAt(i++)) > 255)
                throw new TypeError('invalid character found');
            u32 = (c0 << 16) | (c1 << 8) | c2;
            asc += b64chs[u32 >> 18 & 63]
                + b64chs[u32 >> 12 & 63]
                + b64chs[u32 >> 6 & 63]
                + b64chs[u32 & 63];
        }
        return pad ? asc.slice(0, pad - 3) + "===".substring(pad) : asc;
    };
    /**
     * does what `window.btoa` of web browsers do.
     * @param {String} bin binary string
     * @returns {string} Base64-encoded string
     */
    var _btoa = _hasbtoa ? function (bin) { return btoa(bin); }
        : _hasBuffer ? function (bin) { return Buffer.from(bin, 'binary').toString('base64'); }
            : btoaPolyfill;
    var _fromUint8Array = _hasBuffer
        ? function (u8a) { return Buffer.from(u8a).toString('base64'); }
        : function (u8a) {
            // cf. https://stackoverflow.com/questions/12710001/how-to-convert-uint8-array-to-base64-encoded-string/12713326#12713326
            var maxargs = 0x1000;
            var strs = [];
            for (var i = 0, l = u8a.length; i < l; i += maxargs) {
                strs.push(_fromCC.apply(null, u8a.subarray(i, i + maxargs)));
            }
            return _btoa(strs.join(''));
        };
    /**
     * converts a Uint8Array to a Base64 string.
     * @param {boolean} [urlsafe] URL-and-filename-safe a la RFC4648 §5
     * @returns {string} Base64 string
     */
    var fromUint8Array = function (u8a, urlsafe) {
        if (urlsafe === void 0) { urlsafe = false; }
        return urlsafe ? _mkUriSafe(_fromUint8Array(u8a)) : _fromUint8Array(u8a);
    };
    // This trick is found broken https://github.com/dankogai/js-base64/issues/130
    // const utob = (src: string) => unescape(encodeURIComponent(src));
    // reverting good old fationed regexp
    var cb_utob = function (c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (_fromCC(0xc0 | (cc >>> 6))
                    + _fromCC(0x80 | (cc & 0x3f)))
                    : (_fromCC(0xe0 | ((cc >>> 12) & 0x0f))
                        + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                        + _fromCC(0x80 | (cc & 0x3f)));
        }
        else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (_fromCC(0xf0 | ((cc >>> 18) & 0x07))
                + _fromCC(0x80 | ((cc >>> 12) & 0x3f))
                + _fromCC(0x80 | ((cc >>> 6) & 0x3f))
                + _fromCC(0x80 | (cc & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    /**
     * @deprecated should have been internal use only.
     * @param {string} src UTF-8 string
     * @returns {string} UTF-16 string
     */
    var utob = function (u) { return u.replace(re_utob, cb_utob); };
    //
    var _encode = _hasBuffer
        ? function (s) { return Buffer.from(s, 'utf8').toString('base64'); }
        : _TE
            ? function (s) { return _fromUint8Array(_TE.encode(s)); }
            : function (s) { return _btoa(utob(s)); };
    /**
     * converts a UTF-8-encoded string to a Base64 string.
     * @param {boolean} [urlsafe] if `true` make the result URL-safe
     * @returns {string} Base64 string
     */
    var encode = function (src, urlsafe) {
        if (urlsafe === void 0) { urlsafe = false; }
        return urlsafe
            ? _mkUriSafe(_encode(src))
            : _encode(src);
    };
    /**
     * converts a UTF-8-encoded string to URL-safe Base64 RFC4648 §5.
     * @returns {string} Base64 string
     */
    var encodeURI = function (src) { return encode(src, true); };
    // This trick is found broken https://github.com/dankogai/js-base64/issues/130
    // const btou = (src: string) => decodeURIComponent(escape(src));
    // reverting good old fationed regexp
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function (cccc) {
        switch (cccc.length) {
            case 4:
                var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                    | ((0x3f & cccc.charCodeAt(1)) << 12)
                    | ((0x3f & cccc.charCodeAt(2)) << 6)
                    | (0x3f & cccc.charCodeAt(3)), offset = cp - 0x10000;
                return (_fromCC((offset >>> 10) + 0xD800)
                    + _fromCC((offset & 0x3FF) + 0xDC00));
            case 3:
                return _fromCC(((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    | (0x3f & cccc.charCodeAt(2)));
            default:
                return _fromCC(((0x1f & cccc.charCodeAt(0)) << 6)
                    | (0x3f & cccc.charCodeAt(1)));
        }
    };
    /**
     * @deprecated should have been internal use only.
     * @param {string} src UTF-16 string
     * @returns {string} UTF-8 string
     */
    var btou = function (b) { return b.replace(re_btou, cb_btou); };
    /**
     * polyfill version of `atob`
     */
    var atobPolyfill = function (asc) {
        // console.log('polyfilled');
        asc = asc.replace(/\s+/g, '');
        if (!b64re.test(asc))
            throw new TypeError('malformed base64.');
        asc += '=='.slice(2 - (asc.length & 3));
        var u24, bin = '', r1, r2;
        for (var i = 0; i < asc.length;) {
            u24 = b64tab[asc.charAt(i++)] << 18
                | b64tab[asc.charAt(i++)] << 12
                | (r1 = b64tab[asc.charAt(i++)]) << 6
                | (r2 = b64tab[asc.charAt(i++)]);
            bin += r1 === 64 ? _fromCC(u24 >> 16 & 255)
                : r2 === 64 ? _fromCC(u24 >> 16 & 255, u24 >> 8 & 255)
                    : _fromCC(u24 >> 16 & 255, u24 >> 8 & 255, u24 & 255);
        }
        return bin;
    };
    /**
     * does what `window.atob` of web browsers do.
     * @param {String} asc Base64-encoded string
     * @returns {string} binary string
     */
    var _atob = _hasatob ? function (asc) { return atob(_tidyB64(asc)); }
        : _hasBuffer ? function (asc) { return Buffer.from(asc, 'base64').toString('binary'); }
            : atobPolyfill;
    //
    var _toUint8Array = _hasBuffer
        ? function (a) { return _U8Afrom(Buffer.from(a, 'base64')); }
        : function (a) { return _U8Afrom(_atob(a), function (c) { return c.charCodeAt(0); }); };
    /**
     * converts a Base64 string to a Uint8Array.
     */
    var toUint8Array = function (a) { return _toUint8Array(_unURI(a)); };
    //
    var _decode = _hasBuffer
        ? function (a) { return Buffer.from(a, 'base64').toString('utf8'); }
        : _TD
            ? function (a) { return _TD.decode(_toUint8Array(a)); }
            : function (a) { return btou(_atob(a)); };
    var _unURI = function (a) { return _tidyB64(a.replace(/[-_]/g, function (m0) { return m0 == '-' ? '+' : '/'; })); };
    /**
     * converts a Base64 string to a UTF-8 string.
     * @param {String} src Base64 string.  Both normal and URL-safe are supported
     * @returns {string} UTF-8 string
     */
    var decode = function (src) { return _decode(_unURI(src)); };
    /**
     * check if a value is a valid Base64 string
     * @param {String} src a value to check
      */
    var isValid = function (src) {
        if (typeof src !== 'string')
            return false;
        var s = src.replace(/\s+/g, '').replace(/={0,2}$/, '');
        return !/[^\s0-9a-zA-Z\+/]/.test(s) || !/[^\s0-9a-zA-Z\-_]/.test(s);
    };
    //
    var _noEnum = function (v) {
        return {
            value: v, enumerable: false, writable: true, configurable: true
        };
    };
    /**
     * extend String.prototype with relevant methods
     */
    var extendString = function () {
        var _add = function (name, body) { return Object.defineProperty(String.prototype, name, _noEnum(body)); };
        _add('fromBase64', function () { return decode(this); });
        _add('toBase64', function (urlsafe) { return encode(this, urlsafe); });
        _add('toBase64URI', function () { return encode(this, true); });
        _add('toBase64URL', function () { return encode(this, true); });
        _add('toUint8Array', function () { return toUint8Array(this); });
    };
    /**
     * extend Uint8Array.prototype with relevant methods
     */
    var extendUint8Array = function () {
        var _add = function (name, body) { return Object.defineProperty(Uint8Array.prototype, name, _noEnum(body)); };
        _add('toBase64', function (urlsafe) { return fromUint8Array(this, urlsafe); });
        _add('toBase64URI', function () { return fromUint8Array(this, true); });
        _add('toBase64URL', function () { return fromUint8Array(this, true); });
    };
    /**
     * extend Builtin prototypes with relevant methods
     */
    var extendBuiltins = function () {
        extendString();
        extendUint8Array();
    };
    var gBase64 = {
        version: version,
        VERSION: VERSION,
        atob: _atob,
        atobPolyfill: atobPolyfill,
        btoa: _btoa,
        btoaPolyfill: btoaPolyfill,
        fromBase64: decode,
        toBase64: encode,
        encode: encode,
        encodeURI: encodeURI,
        encodeURL: encodeURI,
        utob: utob,
        btou: btou,
        decode: decode,
        isValid: isValid,
        fromUint8Array: fromUint8Array,
        toUint8Array: toUint8Array,
        extendString: extendString,
        extendUint8Array: extendUint8Array,
        extendBuiltins: extendBuiltins
    };
    //
    // export Base64 to the namespace
    //
    // ES5 is yet to have Object.assign() that may make transpilers unhappy.
    // gBase64.Base64 = Object.assign({}, gBase64);
    gBase64.Base64 = {};
    Object.keys(gBase64).forEach(function (k) { return gBase64.Base64[k] = gBase64[k]; });
    return gBase64;
}));


/***/ }),

/***/ "./node_modules/tiny-inflate/index.js":
/*!********************************************!*\
  !*** ./node_modules/tiny-inflate/index.js ***!
  \********************************************/
/***/ (function(module) {

var TINF_OK = 0;
var TINF_DATA_ERROR = -3;

function Tree() {
  this.table = new Uint16Array(16);   /* table of code length counts */
  this.trans = new Uint16Array(288);  /* code -> symbol translation table */
}

function Data(source, dest) {
  this.source = source;
  this.sourceIndex = 0;
  this.tag = 0;
  this.bitcount = 0;
  
  this.dest = dest;
  this.destLen = 0;
  
  this.ltree = new Tree();  /* dynamic length/symbol tree */
  this.dtree = new Tree();  /* dynamic distance tree */
}

/* --------------------------------------------------- *
 * -- uninitialized global data (static structures) -- *
 * --------------------------------------------------- */

var sltree = new Tree();
var sdtree = new Tree();

/* extra bits and base tables for length codes */
var length_bits = new Uint8Array(30);
var length_base = new Uint16Array(30);

/* extra bits and base tables for distance codes */
var dist_bits = new Uint8Array(30);
var dist_base = new Uint16Array(30);

/* special ordering of code length codes */
var clcidx = new Uint8Array([
  16, 17, 18, 0, 8, 7, 9, 6,
  10, 5, 11, 4, 12, 3, 13, 2,
  14, 1, 15
]);

/* used by tinf_decode_trees, avoids allocations every call */
var code_tree = new Tree();
var lengths = new Uint8Array(288 + 32);

/* ----------------------- *
 * -- utility functions -- *
 * ----------------------- */

/* build extra bits and base tables */
function tinf_build_bits_base(bits, base, delta, first) {
  var i, sum;

  /* build bits table */
  for (i = 0; i < delta; ++i) bits[i] = 0;
  for (i = 0; i < 30 - delta; ++i) bits[i + delta] = i / delta | 0;

  /* build base table */
  for (sum = first, i = 0; i < 30; ++i) {
    base[i] = sum;
    sum += 1 << bits[i];
  }
}

/* build the fixed huffman trees */
function tinf_build_fixed_trees(lt, dt) {
  var i;

  /* build fixed length tree */
  for (i = 0; i < 7; ++i) lt.table[i] = 0;

  lt.table[7] = 24;
  lt.table[8] = 152;
  lt.table[9] = 112;

  for (i = 0; i < 24; ++i) lt.trans[i] = 256 + i;
  for (i = 0; i < 144; ++i) lt.trans[24 + i] = i;
  for (i = 0; i < 8; ++i) lt.trans[24 + 144 + i] = 280 + i;
  for (i = 0; i < 112; ++i) lt.trans[24 + 144 + 8 + i] = 144 + i;

  /* build fixed distance tree */
  for (i = 0; i < 5; ++i) dt.table[i] = 0;

  dt.table[5] = 32;

  for (i = 0; i < 32; ++i) dt.trans[i] = i;
}

/* given an array of code lengths, build a tree */
var offs = new Uint16Array(16);

function tinf_build_tree(t, lengths, off, num) {
  var i, sum;

  /* clear code length count table */
  for (i = 0; i < 16; ++i) t.table[i] = 0;

  /* scan symbol lengths, and sum code length counts */
  for (i = 0; i < num; ++i) t.table[lengths[off + i]]++;

  t.table[0] = 0;

  /* compute offset table for distribution sort */
  for (sum = 0, i = 0; i < 16; ++i) {
    offs[i] = sum;
    sum += t.table[i];
  }

  /* create code->symbol translation table (symbols sorted by code) */
  for (i = 0; i < num; ++i) {
    if (lengths[off + i]) t.trans[offs[lengths[off + i]]++] = i;
  }
}

/* ---------------------- *
 * -- decode functions -- *
 * ---------------------- */

/* get one bit from source stream */
function tinf_getbit(d) {
  /* check if tag is empty */
  if (!d.bitcount--) {
    /* load next tag */
    d.tag = d.source[d.sourceIndex++];
    d.bitcount = 7;
  }

  /* shift bit out of tag */
  var bit = d.tag & 1;
  d.tag >>>= 1;

  return bit;
}

/* read a num bit value from a stream and add base */
function tinf_read_bits(d, num, base) {
  if (!num)
    return base;

  while (d.bitcount < 24) {
    d.tag |= d.source[d.sourceIndex++] << d.bitcount;
    d.bitcount += 8;
  }

  var val = d.tag & (0xffff >>> (16 - num));
  d.tag >>>= num;
  d.bitcount -= num;
  return val + base;
}

/* given a data stream and a tree, decode a symbol */
function tinf_decode_symbol(d, t) {
  while (d.bitcount < 24) {
    d.tag |= d.source[d.sourceIndex++] << d.bitcount;
    d.bitcount += 8;
  }
  
  var sum = 0, cur = 0, len = 0;
  var tag = d.tag;

  /* get more bits while code value is above sum */
  do {
    cur = 2 * cur + (tag & 1);
    tag >>>= 1;
    ++len;

    sum += t.table[len];
    cur -= t.table[len];
  } while (cur >= 0);
  
  d.tag = tag;
  d.bitcount -= len;

  return t.trans[sum + cur];
}

/* given a data stream, decode dynamic trees from it */
function tinf_decode_trees(d, lt, dt) {
  var hlit, hdist, hclen;
  var i, num, length;

  /* get 5 bits HLIT (257-286) */
  hlit = tinf_read_bits(d, 5, 257);

  /* get 5 bits HDIST (1-32) */
  hdist = tinf_read_bits(d, 5, 1);

  /* get 4 bits HCLEN (4-19) */
  hclen = tinf_read_bits(d, 4, 4);

  for (i = 0; i < 19; ++i) lengths[i] = 0;

  /* read code lengths for code length alphabet */
  for (i = 0; i < hclen; ++i) {
    /* get 3 bits code length (0-7) */
    var clen = tinf_read_bits(d, 3, 0);
    lengths[clcidx[i]] = clen;
  }

  /* build code length tree */
  tinf_build_tree(code_tree, lengths, 0, 19);

  /* decode code lengths for the dynamic trees */
  for (num = 0; num < hlit + hdist;) {
    var sym = tinf_decode_symbol(d, code_tree);

    switch (sym) {
      case 16:
        /* copy previous code length 3-6 times (read 2 bits) */
        var prev = lengths[num - 1];
        for (length = tinf_read_bits(d, 2, 3); length; --length) {
          lengths[num++] = prev;
        }
        break;
      case 17:
        /* repeat code length 0 for 3-10 times (read 3 bits) */
        for (length = tinf_read_bits(d, 3, 3); length; --length) {
          lengths[num++] = 0;
        }
        break;
      case 18:
        /* repeat code length 0 for 11-138 times (read 7 bits) */
        for (length = tinf_read_bits(d, 7, 11); length; --length) {
          lengths[num++] = 0;
        }
        break;
      default:
        /* values 0-15 represent the actual code lengths */
        lengths[num++] = sym;
        break;
    }
  }

  /* build dynamic trees */
  tinf_build_tree(lt, lengths, 0, hlit);
  tinf_build_tree(dt, lengths, hlit, hdist);
}

/* ----------------------------- *
 * -- block inflate functions -- *
 * ----------------------------- */

/* given a stream and two trees, inflate a block of data */
function tinf_inflate_block_data(d, lt, dt) {
  while (1) {
    var sym = tinf_decode_symbol(d, lt);

    /* check for end of block */
    if (sym === 256) {
      return TINF_OK;
    }

    if (sym < 256) {
      d.dest[d.destLen++] = sym;
    } else {
      var length, dist, offs;
      var i;

      sym -= 257;

      /* possibly get more bits from length code */
      length = tinf_read_bits(d, length_bits[sym], length_base[sym]);

      dist = tinf_decode_symbol(d, dt);

      /* possibly get more bits from distance code */
      offs = d.destLen - tinf_read_bits(d, dist_bits[dist], dist_base[dist]);

      /* copy match */
      for (i = offs; i < offs + length; ++i) {
        d.dest[d.destLen++] = d.dest[i];
      }
    }
  }
}

/* inflate an uncompressed block of data */
function tinf_inflate_uncompressed_block(d) {
  var length, invlength;
  var i;
  
  /* unread from bitbuffer */
  while (d.bitcount > 8) {
    d.sourceIndex--;
    d.bitcount -= 8;
  }

  /* get length */
  length = d.source[d.sourceIndex + 1];
  length = 256 * length + d.source[d.sourceIndex];

  /* get one's complement of length */
  invlength = d.source[d.sourceIndex + 3];
  invlength = 256 * invlength + d.source[d.sourceIndex + 2];

  /* check length */
  if (length !== (~invlength & 0x0000ffff))
    return TINF_DATA_ERROR;

  d.sourceIndex += 4;

  /* copy block */
  for (i = length; i; --i)
    d.dest[d.destLen++] = d.source[d.sourceIndex++];

  /* make sure we start next block on a byte boundary */
  d.bitcount = 0;

  return TINF_OK;
}

/* inflate stream from source to dest */
function tinf_uncompress(source, dest) {
  var d = new Data(source, dest);
  var bfinal, btype, res;

  do {
    /* read final block flag */
    bfinal = tinf_getbit(d);

    /* read block type (2 bits) */
    btype = tinf_read_bits(d, 2, 0);

    /* decompress block */
    switch (btype) {
      case 0:
        /* decompress uncompressed block */
        res = tinf_inflate_uncompressed_block(d);
        break;
      case 1:
        /* decompress block with fixed huffman trees */
        res = tinf_inflate_block_data(d, sltree, sdtree);
        break;
      case 2:
        /* decompress block with dynamic huffman trees */
        tinf_decode_trees(d, d.ltree, d.dtree);
        res = tinf_inflate_block_data(d, d.ltree, d.dtree);
        break;
      default:
        res = TINF_DATA_ERROR;
    }

    if (res !== TINF_OK)
      throw new Error('Data error');

  } while (!bfinal);

  if (d.destLen < d.dest.length) {
    if (typeof d.dest.slice === 'function')
      return d.dest.slice(0, d.destLen);
    else
      return d.dest.subarray(0, d.destLen);
  }
  
  return d.dest;
}

/* -------------------- *
 * -- initialization -- *
 * -------------------- */

/* build fixed huffman trees */
tinf_build_fixed_trees(sltree, sdtree);

/* build extra bits and base tables */
tinf_build_bits_base(length_bits, length_base, 4, 3);
tinf_build_bits_base(dist_bits, dist_base, 2, 1);

/* fix a special case */
length_bits[28] = 0;
length_base[28] = 258;

module.exports = tinf_uncompress;


/***/ }),

/***/ "./node_modules/unicode-trie/index.js":
/*!********************************************!*\
  !*** ./node_modules/unicode-trie/index.js ***!
  \********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

const inflate = __webpack_require__(/*! tiny-inflate */ "./node_modules/tiny-inflate/index.js");
const { swap32LE } = __webpack_require__(/*! ./swap */ "./node_modules/unicode-trie/swap.js");

// Shift size for getting the index-1 table offset.
const SHIFT_1 = 6 + 5;

// Shift size for getting the index-2 table offset.
const SHIFT_2 = 5;

// Difference between the two shift sizes,
// for getting an index-1 offset from an index-2 offset. 6=11-5
const SHIFT_1_2 = SHIFT_1 - SHIFT_2;

// Number of index-1 entries for the BMP. 32=0x20
// This part of the index-1 table is omitted from the serialized form.
const OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> SHIFT_1;

// Number of entries in an index-2 block. 64=0x40
const INDEX_2_BLOCK_LENGTH = 1 << SHIFT_1_2;

// Mask for getting the lower bits for the in-index-2-block offset. */
const INDEX_2_MASK = INDEX_2_BLOCK_LENGTH - 1;

// Shift size for shifting left the index array values.
// Increases possible data size with 16-bit index values at the cost
// of compactability.
// This requires data blocks to be aligned by DATA_GRANULARITY.
const INDEX_SHIFT = 2;

// Number of entries in a data block. 32=0x20
const DATA_BLOCK_LENGTH = 1 << SHIFT_2;

// Mask for getting the lower bits for the in-data-block offset.
const DATA_MASK = DATA_BLOCK_LENGTH - 1;

// The part of the index-2 table for U+D800..U+DBFF stores values for
// lead surrogate code _units_ not code _points_.
// Values for lead surrogate code _points_ are indexed with this portion of the table.
// Length=32=0x20=0x400>>SHIFT_2. (There are 1024=0x400 lead surrogates.)
const LSCP_INDEX_2_OFFSET = 0x10000 >> SHIFT_2;
const LSCP_INDEX_2_LENGTH = 0x400 >> SHIFT_2;

// Count the lengths of both BMP pieces. 2080=0x820
const INDEX_2_BMP_LENGTH = LSCP_INDEX_2_OFFSET + LSCP_INDEX_2_LENGTH;

// The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
// Length 32=0x20 for lead bytes C0..DF, regardless of SHIFT_2.
const UTF8_2B_INDEX_2_OFFSET = INDEX_2_BMP_LENGTH;
const UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6;  // U+0800 is the first code point after 2-byte UTF-8

// The index-1 table, only used for supplementary code points, at offset 2112=0x840.
// Variable length, for code points up to highStart, where the last single-value range starts.
// Maximum length 512=0x200=0x100000>>SHIFT_1.
// (For 0x100000 supplementary code points U+10000..U+10ffff.)
//
// The part of the index-2 table for supplementary code points starts
// after this index-1 table.
//
// Both the index-1 table and the following part of the index-2 table
// are omitted completely if there is only BMP data.
const INDEX_1_OFFSET = UTF8_2B_INDEX_2_OFFSET + UTF8_2B_INDEX_2_LENGTH;

// The alignment size of a data block. Also the granularity for compaction.
const DATA_GRANULARITY = 1 << INDEX_SHIFT;

class UnicodeTrie {
  constructor(data) {
    const isBuffer = (typeof data.readUInt32BE === 'function') && (typeof data.slice === 'function');

    if (isBuffer || data instanceof Uint8Array) {
      // read binary format
      let uncompressedLength;
      if (isBuffer) {
        this.highStart = data.readUInt32LE(0);
        this.errorValue = data.readUInt32LE(4);
        uncompressedLength = data.readUInt32LE(8);
        data = data.slice(12);
      } else {
        const view = new DataView(data.buffer);
        this.highStart = view.getUint32(0, true);
        this.errorValue = view.getUint32(4, true);
        uncompressedLength = view.getUint32(8, true);
        data = data.subarray(12);
      }

      // double inflate the actual trie data
      data = inflate(data, new Uint8Array(uncompressedLength));
      data = inflate(data, new Uint8Array(uncompressedLength));

      // swap bytes from little-endian
      swap32LE(data);

      this.data = new Uint32Array(data.buffer);

    } else {
      // pre-parsed data
      ({ data: this.data, highStart: this.highStart, errorValue: this.errorValue } = data);
    }
  }

  get(codePoint) {
    let index;
    if ((codePoint < 0) || (codePoint > 0x10ffff)) {
      return this.errorValue;
    }

    if ((codePoint < 0xd800) || ((codePoint > 0xdbff) && (codePoint <= 0xffff))) {
      // Ordinary BMP code point, excluding leading surrogates.
      // BMP uses a single level lookup.  BMP index starts at offset 0 in the index.
      // data is stored in the index array itself.
      index = (this.data[codePoint >> SHIFT_2] << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }

    if (codePoint <= 0xffff) {
      // Lead Surrogate Code Point.  A Separate index section is stored for
      // lead surrogate code units and code points.
      //   The main index has the code unit data.
      //   For this function, we need the code point data.
      index = (this.data[LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> SHIFT_2)] << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }

    if (codePoint < this.highStart) {
      // Supplemental code point, use two-level lookup.
      index = this.data[(INDEX_1_OFFSET - OMITTED_BMP_INDEX_1_LENGTH) + (codePoint >> SHIFT_1)];
      index = this.data[index + ((codePoint >> SHIFT_2) & INDEX_2_MASK)];
      index = (index << INDEX_SHIFT) + (codePoint & DATA_MASK);
      return this.data[index];
    }

    return this.data[this.data.length - DATA_GRANULARITY];
  }
}

module.exports = UnicodeTrie;

/***/ }),

/***/ "./node_modules/unicode-trie/swap.js":
/*!*******************************************!*\
  !*** ./node_modules/unicode-trie/swap.js ***!
  \*******************************************/
/***/ (function(module) {

const isBigEndian = (new Uint8Array(new Uint32Array([0x12345678]).buffer)[0] === 0x12);

const swap = (b, n, m) => {
  let i = b[n];
  b[n] = b[m];
  b[m] = i;
};

const swap32 = array => {
  const len = array.length;
  for (let i = 0; i < len; i += 4) {
    swap(array, i, i + 3);
    swap(array, i + 1, i + 2);
  }
};

const swap32LE = array => {
  if (isBigEndian) {
    swap32(array);
  }
};

module.exports = {
  swap32LE: swap32LE
};


/***/ }),

/***/ "./node_modules/fast-fuzzy/lib/fuzzy.mjs":
/*!***********************************************!*\
  !*** ./node_modules/fast-fuzzy/lib/fuzzy.mjs ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Searcher": function() { return /* binding */ Searcher; },
/* harmony export */   "fuzzy": function() { return /* binding */ fuzzy; },
/* harmony export */   "search": function() { return /* binding */ search; },
/* harmony export */   "sortKind": function() { return /* binding */ sortKind; }
/* harmony export */ });
/* harmony import */ var graphemesplit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphemesplit */ "./node_modules/graphemesplit/index.js");


const whitespaceRegex = /^\s+$/;
const nonWordRegex = /^[`~!@#$%^&*()\-=_+{}[\]\|\\;':",./<>?]+$/;
const sortKind = {
  insertOrder: "insertOrder",
  bestMatch: "bestMatch"
}; // the default options, which will be used for any unset option

const defaultOptions = {
  keySelector: s => s,
  threshold: .6,
  ignoreCase: true,
  ignoreSymbols: true,
  normalizeWhitespace: true,
  returnMatchData: false,
  useDamerau: true,
  useSellers: true,
  sortBy: sortKind.bestMatch
};

const noop = () => {};

const arrayWrap = item => item instanceof Array ? item : [item]; // return normalized string, with map included


function normalize(string, options) {
  const lower = options.ignoreCase ? string.toLocaleLowerCase() : string; // track transformations

  const normal = [];
  const map = [];
  let lastWasWhitespace = true;
  let length = 0;

  for (const grapheme of graphemesplit__WEBPACK_IMPORTED_MODULE_0__(lower)) {
    whitespaceRegex.lastIndex = 0;
    nonWordRegex.lastIndex = 0;

    if (options.normalizeWhitespace && whitespaceRegex.test(grapheme)) {
      if (!lastWasWhitespace) {
        normal.push(" ");
        map.push(length);
        lastWasWhitespace = true;
      }
    } else if (!(options.ignoreSymbols && nonWordRegex.test(grapheme))) {
      normal.push(grapheme.normalize());
      map.push(length);
      lastWasWhitespace = false;
    }

    length += grapheme.length;
  } // add the end of the string


  map.push(string.length);

  while (normal[normal.length - 1] === " ") {
    normal.pop();
    map.pop();
  }

  return {
    original: string,
    normal,
    map
  };
} // translates a match to the original string


function denormalizeMatchPosition(match, map) {
  return {
    index: map[match.start],
    length: map[match.end + 1] - map[match.start]
  };
} // walks back up the matrix to find the match index and length


function walkBack(rows, scoreIndex) {
  if (scoreIndex === 0) {
    return {
      index: 0,
      length: 0
    };
  }

  let start = scoreIndex;

  for (let i = rows.length - 2; i > 0 && start > 1; i--) {
    const row = rows[i];
    start = row[start] < row[start - 1] ? start : start - 1;
  }

  return {
    start: start - 1,
    end: scoreIndex - 1
  };
} // walkback is a noop for non-sellers, but should still return an object


function noopWalkback() {
  return {
    start: 0,
    end: 0
  };
}

const levUpdateScore = () => true;

const sellersUpdateScore = (cur, min) => cur < min;

function getLevScore(rows, length) {
  const lastRow = rows[rows.length - 1];
  const lastCell = lastRow[length - 1];
  const scoreLength = Math.max(rows.length, length);
  return {
    score: 1 - lastCell / (scoreLength - 1),
    scoreIndex: length - 1
  };
}

function getSellersScore(rows, length) {
  // search term was empty string, return perfect score
  if (rows.length === 1) {
    return {
      score: 1,
      scoreIndex: 0
    };
  }

  const lastRow = rows[rows.length - 1];
  let minValue = lastRow[0];
  let minIndex = 0;

  for (let i = 1; i < length; i++) {
    const val = lastRow[i];

    if (val < minValue) {
      minValue = val;
      minIndex = i;
    }
  }

  return {
    score: 1 - minValue / (rows.length - 1),
    scoreIndex: minIndex
  };
}

function initLevRows(rowCount, columnCount) {
  const rows = new Array(rowCount);

  for (let i = 0; i < rowCount; i++) {
    rows[i] = new Array(columnCount);
    rows[i][0] = i;
  }

  for (let i = 0; i < columnCount; i++) {
    rows[0][i] = i;
  }

  return rows;
}

function initSellersRows(rowCount, columnCount) {
  const rows = new Array(rowCount);
  rows[0] = new Array(columnCount).fill(0);

  for (let i = 1; i < rowCount; i++) {
    rows[i] = new Array(columnCount);
    rows[i][0] = i;
  }

  return rows;
} // the content of the innermost loop of levenshtein


function levCore(term, candidate, rows, i, j) {
  const rowA = rows[i];
  const rowB = rows[i + 1];
  const cost = term[i] === candidate[j] ? 0 : 1;
  let m;
  let min = rowB[j] + 1; // insertion

  if ((m = rowA[j + 1] + 1) < min) min = m; // deletion

  if ((m = rowA[j] + cost) < min) min = m; // substitution

  rowB[j + 1] = min;
} // runtime complexity: O(mn) where m and n are the lengths of term and candidate, respectively
// Note: this method only runs on a single column


function levenshtein(term, candidate, rows, j) {
  for (let i = 0; i < term.length; i++) {
    levCore(term, candidate, rows, i, j);
  }
} // has all the runtime characteristics of the above, but punishes transpositions less,
// resulting in better tolerance to those types of typos
// Note: this method only runs on a single column


function damerauLevenshtein(term, candidate, rows, j) {
  // if j === 0, we can't check for transpositions,
  // so use normal levenshtein instead
  if (j === 0) {
    levenshtein(term, candidate, rows, j);
    return;
  } // for i === 0, we also can't check for transpositions, so calculate
  // the first row using normal levenshtein as well


  if (term.length > 0) {
    levCore(term, candidate, rows, 0, j);
  }

  for (let i = 1; i < term.length; i++) {
    const rowA = rows[i - 1];
    const rowB = rows[i];
    const rowC = rows[i + 1];
    const cost = term[i] === candidate[j] ? 0 : 1;
    let m; // insertion

    let min = rowC[j] + 1; // deletion

    if ((m = rowB[j + 1] + 1) < min) min = m; // substitution

    if ((m = rowB[j] + cost) < min) min = m; // transposition

    if (term[i] === candidate[j - 1] && term[i - 1] === candidate[j] && (m = rowA[j - 1] + cost) < min) min = m;
    rowC[j + 1] = min;
  }
} // method for creating a trie from search candidates
// using a trie can significantly improve search time


function trieInsert(trie, string, item) {
  let walker = trie;

  for (let i = 0; i < string.length; i++) {
    const char = string[i]; // add child node if not already present

    if (walker.children[char] == null) {
      walker.children[char] = {
        children: {},
        candidates: [],
        depth: 0
      };
    } // log max depth of this subtree


    walker.depth = Math.max(walker.depth, string.length - i); // step into child node

    walker = walker.children[char];
  }

  walker.candidates.push(item);
} // transforms a list of candidates into objects with normalized search keys,
// and inserts them into a trie
// the keySelector is used to pick strings from an object to search by


function createSearchTrie(trie, index, items, options) {
  for (const item of items) {
    const candidates = arrayWrap(options.keySelector(item)).map((key, keyIndex) => ({
      index,
      keyIndex,
      item,
      normalized: normalize(key, options)
    }));
    index++;

    for (const candidate of candidates) {
      trieInsert(trie, candidate.normalized.normal, candidate);
    }
  }
} // scored item comparator


function compareItemsBestScore(a, b) {
  // highest priority is raw levenshtein score
  const scoreDiff = b.score - a.score;

  if (scoreDiff !== 0) {
    return scoreDiff;
  } // ties are broken by earlier match positions


  const matchPosDiff = a.match.start - b.match.start;

  if (matchPosDiff !== 0) {
    return matchPosDiff;
  } // prioritize earlier keys


  const keyIndexDiff = a.keyIndex - b.keyIndex;

  if (keyIndexDiff !== 0) {
    return keyIndexDiff;
  } // lastly, break ties by preferring the closer length match


  const lengthDiff = a.lengthDiff - b.lengthDiff;

  if (lengthDiff !== 0) {
    return lengthDiff;
  } // if all else fails, resort to insertion order


  return compareItemsInsertOrder(a, b);
}

function compareItemsInsertOrder(a, b) {
  return a.index - b.index;
}

function getCompareFunc(sortBy) {
  switch (sortBy) {
    case sortKind.bestMatch:
      return compareItemsBestScore;

    case sortKind.insertOrder:
      return compareItemsInsertOrder;

    default:
      throw new Error(`unknown sortBy method ${sortBy}`);
  }
} // dedupes and adds results to the results list/map


function addResult(results, resultMap, candidate, score, match, lengthDiff, compareItems) {
  const scoredItem = {
    item: candidate.item,
    normalized: candidate.normalized,
    score,
    match,
    index: candidate.index,
    keyIndex: candidate.keyIndex,
    lengthDiff
  };

  if (resultMap[candidate.index] == null) {
    resultMap[candidate.index] = results.length;
    results.push(scoredItem);
  } else if (compareItems(scoredItem, results[resultMap[candidate.index]]) < 0) {
    results[resultMap[candidate.index]] = scoredItem;
  }
}

const getLevLength = Math.max;

const getSellersLength = termLength => termLength; // skip any subtrees for which it is impossible to score >= threshold


function levShouldContinue(node, pos, term, threshold, sValue) {
  // earliest point (length) at which sValue could return to 0
  const p1 = pos + sValue; // point (length) at which string lengths would match

  const p2 = Math.min(term.length, pos + node.depth + 1); // the best score possible is the string which minimizes the value
  // max(sValue, strLenDiff), which is always halfway between p1 and p2

  const length = Math.ceil((p1 + p2) / 2);
  const bestPossibleValue = length - p2;
  return 1 - bestPossibleValue / length >= threshold;
}

function sellersShouldContinue(node, _, term, threshold, sValue, lastValue) {
  const bestPossibleValue = Math.min(sValue, lastValue - (node.depth + 1));
  return 1 - bestPossibleValue / term.length >= threshold;
} // (pseudo) recursively walk the trie


function searchRecurse(trie, term, scoreMethods, rows, results, resultMap, options) {
  const stack = [];

  for (const key in trie.children) {
    const node = trie.children[key];
    stack.push([node, 1, key, 0, term.length]);
  }

  const acc = new Array(trie.depth);

  while (stack.length !== 0) {
    const [node, len, char, si, sv] = stack.pop();
    acc[len - 1] = char; // build rows

    scoreMethods.score(term, acc, rows, len - 1); // track best score and position

    const lastIndex = len;
    const lastValue = rows[rows.length - 1][lastIndex];
    let sIndex = si,
        sValue = sv;

    if (scoreMethods.shouldUpdateScore(lastValue, sv)) {
      sIndex = lastIndex;
      sValue = lastValue;
    } // insert results


    if (node.candidates.length > 0) {
      const length = scoreMethods.getLength(term.length, len);
      const score = 1 - sValue / length;

      if (score >= options.threshold) {
        const match = walkBack(rows, sIndex);
        const lengthDiff = Math.abs(len - term.length);

        for (const candidate of node.candidates) {
          addResult(results, resultMap, candidate, score, match, lengthDiff, scoreMethods.compareItems);
        }
      }
    } // recurse for children


    for (const key in node.children) {
      const child = node.children[key];

      if (scoreMethods.shouldContinue(child, len, term, options.threshold, sValue, lastValue)) {
        stack.push([child, len + 1, key, sIndex, sValue]);
      }
    }
  }
} // the core match finder: returns a sorted, filtered list of matches
// this does not normalize input, requiring users to normalize themselves


function searchCore(term, trie, options) {
  const initMethod = options.useSellers ? initSellersRows : initLevRows;
  const scoreMethods = {
    score: options.useDamerau ? damerauLevenshtein : levenshtein,
    getLength: options.useSellers ? getSellersLength : getLevLength,
    shouldUpdateScore: options.useSellers ? sellersUpdateScore : levUpdateScore,
    shouldContinue: options.useSellers ? sellersShouldContinue : levShouldContinue,
    walkBack: options.useSellers ? walkBack : noopWalkback,
    compareItems: getCompareFunc(options.sortBy)
  }; // walk the trie, scoring and storing the candidates

  const resultMap = {};
  const results = [];
  const rows = initMethod(term.length + 1, trie.depth + 1);

  if (options.threshold <= 0 || term.length === 0) {
    for (const candidate of trie.candidates) {
      addResult(results, resultMap, candidate, 0, {
        index: 0,
        length: 0
      }, term.length, scoreMethods.compareItems);
    }
  }

  searchRecurse(trie, term, scoreMethods, rows, results, resultMap, options);
  const sorted = results.sort(scoreMethods.compareItems);

  if (options.returnMatchData) {
    const denormalize = options.useSellers ? denormalizeMatchPosition : noop;
    return sorted.map(candidate => ({
      item: candidate.item,
      original: candidate.normalized.original,
      key: candidate.normalized.normal.join(""),
      score: candidate.score,
      match: denormalize(candidate.match, candidate.normalized.map)
    }));
  }

  return sorted.map(candidate => candidate.item);
} // wrapper for exporting sellers while allowing options to be passed in


function fuzzy(term, candidate, options) {
  options = { ...defaultOptions,
    ...options
  };
  const initMethod = options.useSellers ? initSellersRows : initLevRows;
  const scoreMethod = options.useDamerau ? damerauLevenshtein : levenshtein;
  const getScore = options.useSellers ? getSellersScore : getLevScore;
  term = normalize(term, options).normal;
  const normalized = normalize(candidate, options);
  const rows = initMethod(term.length + 1, normalized.normal.length + 1);

  for (let j = 0; j < normalized.normal.length; j++) {
    scoreMethod(term, normalized.normal, rows, j);
  }

  const scoreResult = getScore(rows, normalized.normal.length + 1);
  return options.returnMatchData ? {
    item: candidate,
    original: normalized.original,
    key: normalized.normal.join(""),
    score: scoreResult.score,
    match: options.useSellers ? denormalizeMatchPosition(walkBack(rows, scoreResult.scoreIndex), normalized.map) : noop()
  } : scoreResult.score;
} // simple one-off search. Useful if you don't expect to use the same candidate list again

function search(term, candidates, options) {
  options = { ...defaultOptions,
    ...options
  };
  const trie = {
    children: {},
    candidates: [],
    depth: 0
  };
  createSearchTrie(trie, 0, candidates, options);
  return searchCore(normalize(term, options).normal, trie, options);
} // class that improves performance of searching the same set multiple times
// normalizes the strings and caches the result for future calls

class Searcher {
  constructor(candidates, options) {
    this.options = Object.assign({}, defaultOptions, options);
    this.trie = {
      children: {},
      candidates: [],
      depth: 0
    };
    createSearchTrie(this.trie, 0, candidates, this.options);
    this.count = candidates.length;
  }

  add(...candidates) {
    createSearchTrie(this.trie, this.count, candidates, this.options);
    this.count += candidates.length;
  }

  search(term, options) {
    options = Object.assign({}, this.options, options);
    return searchCore(normalize(term, this.options).normal, this.trie, options);
  }

}




/***/ }),

/***/ "./node_modules/graphemesplit/extPict.json":
/*!*************************************************!*\
  !*** ./node_modules/graphemesplit/extPict.json ***!
  \*************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"data":"AAACAAAAAACAOAAAAbYBSf7t2S1IBEEYBuDVDZ7FYrQMNsFiu3hgEYOI0SCXRIUrB8JhEZtgs5gEg1GMFk02m82oGI02m+9xezCOczv/uwv3fvAwc/PzfXOzcdqzWdaBDdiGPdiHdjE+DS3RNDuCfsn8idQ/g3OH3BdwKf0e96/gumTfYcncLdzBPTzAo+RZ+f0Cr/AG7/AJX4738x1wtz9FO5PX/50n6UXMNdfg/0lERERERERERERERETpdedHBvDRql4nq0cXtW9af98qdRby0Vvp8K4W0V+C5Xw0t4J2bfjeBp3cnEu1brnnCTYNa7eKdz91XP7WO9Lb4GqRb7cY6xbtAdqeVOsY/QGcevw/tb6OT85YhvfKYEx9CMuxKsKnrs+eJtVInVvHJ0eVYVvTZk2siFVLOCjb61PTZX3MdVWEyP7fjzpmMxdzTyq2Ebue6x61nXRGnzndWpf1an7dXmGYE4Y1ptqqKsK1nu26Ju0ty+maV2Rpvk+qnDZjKUIobUiesdAQE/jmCTmHmsskpFZsVYbtmXRcaoSGUPomunW2derQhDPFjtT1Q/eb8vnm990fq35oHVt11bU9m89c7DNI8Qs="}');

/***/ }),

/***/ "./node_modules/graphemesplit/typeTrie.json":
/*!**************************************************!*\
  !*** ./node_modules/graphemesplit/typeTrie.json ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"data":"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"}');

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "a73894c62c1eb5e0d74f"; }
/******/ }();
/******/ 
/******/ }
);
//# sourceMappingURL=index.ca8987593c169a967eee.hot-update.js.map