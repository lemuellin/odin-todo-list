/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@firebase/util/dist/index.esm2017.js":
/*!***********************************************************!*\
  !*** ./node_modules/@firebase/util/dist/index.esm2017.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CONSTANTS": () => (/* binding */ CONSTANTS),
/* harmony export */   "Deferred": () => (/* binding */ Deferred),
/* harmony export */   "ErrorFactory": () => (/* binding */ ErrorFactory),
/* harmony export */   "FirebaseError": () => (/* binding */ FirebaseError),
/* harmony export */   "MAX_VALUE_MILLIS": () => (/* binding */ MAX_VALUE_MILLIS),
/* harmony export */   "RANDOM_FACTOR": () => (/* binding */ RANDOM_FACTOR),
/* harmony export */   "Sha1": () => (/* binding */ Sha1),
/* harmony export */   "areCookiesEnabled": () => (/* binding */ areCookiesEnabled),
/* harmony export */   "assert": () => (/* binding */ assert),
/* harmony export */   "assertionError": () => (/* binding */ assertionError),
/* harmony export */   "async": () => (/* binding */ async),
/* harmony export */   "base64": () => (/* binding */ base64),
/* harmony export */   "base64Decode": () => (/* binding */ base64Decode),
/* harmony export */   "base64Encode": () => (/* binding */ base64Encode),
/* harmony export */   "base64urlEncodeWithoutPadding": () => (/* binding */ base64urlEncodeWithoutPadding),
/* harmony export */   "calculateBackoffMillis": () => (/* binding */ calculateBackoffMillis),
/* harmony export */   "contains": () => (/* binding */ contains),
/* harmony export */   "createMockUserToken": () => (/* binding */ createMockUserToken),
/* harmony export */   "createSubscribe": () => (/* binding */ createSubscribe),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "deepCopy": () => (/* binding */ deepCopy),
/* harmony export */   "deepEqual": () => (/* binding */ deepEqual),
/* harmony export */   "deepExtend": () => (/* binding */ deepExtend),
/* harmony export */   "errorPrefix": () => (/* binding */ errorPrefix),
/* harmony export */   "extractQuerystring": () => (/* binding */ extractQuerystring),
/* harmony export */   "getGlobal": () => (/* binding */ getGlobal),
/* harmony export */   "getModularInstance": () => (/* binding */ getModularInstance),
/* harmony export */   "getUA": () => (/* binding */ getUA),
/* harmony export */   "isAdmin": () => (/* binding */ isAdmin),
/* harmony export */   "isBrowser": () => (/* binding */ isBrowser),
/* harmony export */   "isBrowserExtension": () => (/* binding */ isBrowserExtension),
/* harmony export */   "isElectron": () => (/* binding */ isElectron),
/* harmony export */   "isEmpty": () => (/* binding */ isEmpty),
/* harmony export */   "isIE": () => (/* binding */ isIE),
/* harmony export */   "isIndexedDBAvailable": () => (/* binding */ isIndexedDBAvailable),
/* harmony export */   "isMobileCordova": () => (/* binding */ isMobileCordova),
/* harmony export */   "isNode": () => (/* binding */ isNode),
/* harmony export */   "isNodeSdk": () => (/* binding */ isNodeSdk),
/* harmony export */   "isReactNative": () => (/* binding */ isReactNative),
/* harmony export */   "isSafari": () => (/* binding */ isSafari),
/* harmony export */   "isUWP": () => (/* binding */ isUWP),
/* harmony export */   "isValidFormat": () => (/* binding */ isValidFormat),
/* harmony export */   "isValidTimestamp": () => (/* binding */ isValidTimestamp),
/* harmony export */   "issuedAtTime": () => (/* binding */ issuedAtTime),
/* harmony export */   "jsonEval": () => (/* binding */ jsonEval),
/* harmony export */   "map": () => (/* binding */ map),
/* harmony export */   "ordinal": () => (/* binding */ ordinal),
/* harmony export */   "querystring": () => (/* binding */ querystring),
/* harmony export */   "querystringDecode": () => (/* binding */ querystringDecode),
/* harmony export */   "safeGet": () => (/* binding */ safeGet),
/* harmony export */   "stringLength": () => (/* binding */ stringLength),
/* harmony export */   "stringToByteArray": () => (/* binding */ stringToByteArray),
/* harmony export */   "stringify": () => (/* binding */ stringify),
/* harmony export */   "validateArgCount": () => (/* binding */ validateArgCount),
/* harmony export */   "validateCallback": () => (/* binding */ validateCallback),
/* harmony export */   "validateContextObject": () => (/* binding */ validateContextObject),
/* harmony export */   "validateIndexedDBOpenable": () => (/* binding */ validateIndexedDBOpenable),
/* harmony export */   "validateNamespace": () => (/* binding */ validateNamespace)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Firebase constants.  Some of these (@defines) can be overridden at compile-time.
 */
const CONSTANTS = {
    /**
     * @define {boolean} Whether this is the client Node.js SDK.
     */
    NODE_CLIENT: false,
    /**
     * @define {boolean} Whether this is the Admin Node.js SDK.
     */
    NODE_ADMIN: false,
    /**
     * Firebase SDK Version
     */
    SDK_VERSION: '${JSCORE_VERSION}'
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Throws an error if the provided assertion is falsy
 */
const assert = function (assertion, message) {
    if (!assertion) {
        throw assertionError(message);
    }
};
/**
 * Returns an Error object suitable for throwing.
 */
const assertionError = function (message) {
    return new Error('Firebase Database (' +
        CONSTANTS.SDK_VERSION +
        ') INTERNAL ASSERT FAILED: ' +
        message);
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const stringToByteArray$1 = function (str) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if ((c & 0xfc00) === 0xd800 &&
            i + 1 < str.length &&
            (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            // Surrogate Pair
            c = 0x10000 + ((c & 0x03ff) << 10) + (str.charCodeAt(++i) & 0x03ff);
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Turns an array of numbers into the string given by the concatenation of the
 * characters to which the numbers correspond.
 * @param bytes Array of numbers representing characters.
 * @return Stringification of the array.
 */
const byteArrayToString = function (bytes) {
    // TODO(user): Use native implementations if/when available
    const out = [];
    let pos = 0, c = 0;
    while (pos < bytes.length) {
        const c1 = bytes[pos++];
        if (c1 < 128) {
            out[c++] = String.fromCharCode(c1);
        }
        else if (c1 > 191 && c1 < 224) {
            const c2 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 31) << 6) | (c2 & 63));
        }
        else if (c1 > 239 && c1 < 365) {
            // Surrogate Pair
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            const c4 = bytes[pos++];
            const u = (((c1 & 7) << 18) | ((c2 & 63) << 12) | ((c3 & 63) << 6) | (c4 & 63)) -
                0x10000;
            out[c++] = String.fromCharCode(0xd800 + (u >> 10));
            out[c++] = String.fromCharCode(0xdc00 + (u & 1023));
        }
        else {
            const c2 = bytes[pos++];
            const c3 = bytes[pos++];
            out[c++] = String.fromCharCode(((c1 & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
        }
    }
    return out.join('');
};
// We define it as an object literal instead of a class because a class compiled down to es5 can't
// be treeshaked. https://github.com/rollup/rollup/issues/1691
// Static lookup maps, lazily populated by init_()
const base64 = {
    /**
     * Maps bytes to characters.
     */
    byteToCharMap_: null,
    /**
     * Maps characters to bytes.
     */
    charToByteMap_: null,
    /**
     * Maps bytes to websafe characters.
     * @private
     */
    byteToCharMapWebSafe_: null,
    /**
     * Maps websafe characters to bytes.
     * @private
     */
    charToByteMapWebSafe_: null,
    /**
     * Our default alphabet, shared between
     * ENCODED_VALS and ENCODED_VALS_WEBSAFE
     */
    ENCODED_VALS_BASE: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz' + '0123456789',
    /**
     * Our default alphabet. Value 64 (=) is special; it means "nothing."
     */
    get ENCODED_VALS() {
        return this.ENCODED_VALS_BASE + '+/=';
    },
    /**
     * Our websafe alphabet.
     */
    get ENCODED_VALS_WEBSAFE() {
        return this.ENCODED_VALS_BASE + '-_.';
    },
    /**
     * Whether this browser supports the atob and btoa functions. This extension
     * started at Mozilla but is now implemented by many browsers. We use the
     * ASSUME_* variables to avoid pulling in the full useragent detection library
     * but still allowing the standard per-browser compilations.
     *
     */
    HAS_NATIVE_SUPPORT: typeof atob === 'function',
    /**
     * Base64-encode an array of bytes.
     *
     * @param input An array of bytes (numbers with
     *     value in [0, 255]) to encode.
     * @param webSafe Boolean indicating we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeByteArray(input, webSafe) {
        if (!Array.isArray(input)) {
            throw Error('encodeByteArray takes an array as a parameter');
        }
        this.init_();
        const byteToCharMap = webSafe
            ? this.byteToCharMapWebSafe_
            : this.byteToCharMap_;
        const output = [];
        for (let i = 0; i < input.length; i += 3) {
            const byte1 = input[i];
            const haveByte2 = i + 1 < input.length;
            const byte2 = haveByte2 ? input[i + 1] : 0;
            const haveByte3 = i + 2 < input.length;
            const byte3 = haveByte3 ? input[i + 2] : 0;
            const outByte1 = byte1 >> 2;
            const outByte2 = ((byte1 & 0x03) << 4) | (byte2 >> 4);
            let outByte3 = ((byte2 & 0x0f) << 2) | (byte3 >> 6);
            let outByte4 = byte3 & 0x3f;
            if (!haveByte3) {
                outByte4 = 64;
                if (!haveByte2) {
                    outByte3 = 64;
                }
            }
            output.push(byteToCharMap[outByte1], byteToCharMap[outByte2], byteToCharMap[outByte3], byteToCharMap[outByte4]);
        }
        return output.join('');
    },
    /**
     * Base64-encode a string.
     *
     * @param input A string to encode.
     * @param webSafe If true, we should use the
     *     alternative alphabet.
     * @return The base64 encoded string.
     */
    encodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return btoa(input);
        }
        return this.encodeByteArray(stringToByteArray$1(input), webSafe);
    },
    /**
     * Base64-decode a string.
     *
     * @param input to decode.
     * @param webSafe True if we should use the
     *     alternative alphabet.
     * @return string representing the decoded value.
     */
    decodeString(input, webSafe) {
        // Shortcut for Mozilla browsers that implement
        // a native base64 encoder in the form of "btoa/atob"
        if (this.HAS_NATIVE_SUPPORT && !webSafe) {
            return atob(input);
        }
        return byteArrayToString(this.decodeStringToByteArray(input, webSafe));
    },
    /**
     * Base64-decode a string.
     *
     * In base-64 decoding, groups of four characters are converted into three
     * bytes.  If the encoder did not apply padding, the input length may not
     * be a multiple of 4.
     *
     * In this case, the last group will have fewer than 4 characters, and
     * padding will be inferred.  If the group has one or two characters, it decodes
     * to one byte.  If the group has three characters, it decodes to two bytes.
     *
     * @param input Input to decode.
     * @param webSafe True if we should use the web-safe alphabet.
     * @return bytes representing the decoded value.
     */
    decodeStringToByteArray(input, webSafe) {
        this.init_();
        const charToByteMap = webSafe
            ? this.charToByteMapWebSafe_
            : this.charToByteMap_;
        const output = [];
        for (let i = 0; i < input.length;) {
            const byte1 = charToByteMap[input.charAt(i++)];
            const haveByte2 = i < input.length;
            const byte2 = haveByte2 ? charToByteMap[input.charAt(i)] : 0;
            ++i;
            const haveByte3 = i < input.length;
            const byte3 = haveByte3 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            const haveByte4 = i < input.length;
            const byte4 = haveByte4 ? charToByteMap[input.charAt(i)] : 64;
            ++i;
            if (byte1 == null || byte2 == null || byte3 == null || byte4 == null) {
                throw Error();
            }
            const outByte1 = (byte1 << 2) | (byte2 >> 4);
            output.push(outByte1);
            if (byte3 !== 64) {
                const outByte2 = ((byte2 << 4) & 0xf0) | (byte3 >> 2);
                output.push(outByte2);
                if (byte4 !== 64) {
                    const outByte3 = ((byte3 << 6) & 0xc0) | byte4;
                    output.push(outByte3);
                }
            }
        }
        return output;
    },
    /**
     * Lazy static initialization function. Called before
     * accessing any of the static map variables.
     * @private
     */
    init_() {
        if (!this.byteToCharMap_) {
            this.byteToCharMap_ = {};
            this.charToByteMap_ = {};
            this.byteToCharMapWebSafe_ = {};
            this.charToByteMapWebSafe_ = {};
            // We want quick mappings back and forth, so we precompute two maps.
            for (let i = 0; i < this.ENCODED_VALS.length; i++) {
                this.byteToCharMap_[i] = this.ENCODED_VALS.charAt(i);
                this.charToByteMap_[this.byteToCharMap_[i]] = i;
                this.byteToCharMapWebSafe_[i] = this.ENCODED_VALS_WEBSAFE.charAt(i);
                this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]] = i;
                // Be forgiving when decoding and correctly decode both encodings.
                if (i >= this.ENCODED_VALS_BASE.length) {
                    this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)] = i;
                    this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)] = i;
                }
            }
        }
    }
};
/**
 * URL-safe base64 encoding
 */
const base64Encode = function (str) {
    const utf8Bytes = stringToByteArray$1(str);
    return base64.encodeByteArray(utf8Bytes, true);
};
/**
 * URL-safe base64 encoding (without "." padding in the end).
 * e.g. Used in JSON Web Token (JWT) parts.
 */
const base64urlEncodeWithoutPadding = function (str) {
    // Use base64url encoding and remove padding in the end (dot characters).
    return base64Encode(str).replace(/\./g, '');
};
/**
 * URL-safe base64 decoding
 *
 * NOTE: DO NOT use the global atob() function - it does NOT support the
 * base64Url variant encoding.
 *
 * @param str To be decoded
 * @return Decoded result, if possible
 */
const base64Decode = function (str) {
    try {
        return base64.decodeString(str, true);
    }
    catch (e) {
        console.error('base64Decode failed: ', e);
    }
    return null;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do a deep-copy of basic JavaScript Objects or Arrays.
 */
function deepCopy(value) {
    return deepExtend(undefined, value);
}
/**
 * Copy properties from source to target (recursively allows extension
 * of Objects and Arrays).  Scalar values in the target are over-written.
 * If target is undefined, an object of the appropriate type will be created
 * (and returned).
 *
 * We recursively copy all child properties of plain Objects in the source- so
 * that namespace- like dictionaries are merged.
 *
 * Note that the target can be a function, in which case the properties in
 * the source Object are copied onto it as static properties of the Function.
 *
 * Note: we don't merge __proto__ to prevent prototype pollution
 */
function deepExtend(target, source) {
    if (!(source instanceof Object)) {
        return source;
    }
    switch (source.constructor) {
        case Date:
            // Treat Dates like scalars; if the target date object had any child
            // properties - they will be lost!
            const dateValue = source;
            return new Date(dateValue.getTime());
        case Object:
            if (target === undefined) {
                target = {};
            }
            break;
        case Array:
            // Always copy the array source and overwrite the target.
            target = [];
            break;
        default:
            // Not a plain Object - treat it as a scalar.
            return source;
    }
    for (const prop in source) {
        // use isValidKey to guard against prototype pollution. See https://snyk.io/vuln/SNYK-JS-LODASH-450202
        if (!source.hasOwnProperty(prop) || !isValidKey(prop)) {
            continue;
        }
        target[prop] = deepExtend(target[prop], source[prop]);
    }
    return target;
}
function isValidKey(key) {
    return key !== '__proto__';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Deferred {
    constructor() {
        this.reject = () => { };
        this.resolve = () => { };
        this.promise = new Promise((resolve, reject) => {
            this.resolve = resolve;
            this.reject = reject;
        });
    }
    /**
     * Our API internals are not promiseified and cannot because our callback APIs have subtle expectations around
     * invoking promises inline, which Promises are forbidden to do. This method accepts an optional node-style callback
     * and returns a node-style callback which will resolve or reject the Deferred's promise.
     */
    wrapCallback(callback) {
        return (error, value) => {
            if (error) {
                this.reject(error);
            }
            else {
                this.resolve(value);
            }
            if (typeof callback === 'function') {
                // Attaching noop handler just in case developer wasn't expecting
                // promises
                this.promise.catch(() => { });
                // Some of our callbacks don't expect a value and our own tests
                // assert that the parameter length is 1
                if (callback.length === 1) {
                    callback(error);
                }
                else {
                    callback(error, value);
                }
            }
        };
    }
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function createMockUserToken(token, projectId) {
    if (token.uid) {
        throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');
    }
    // Unsecured JWTs use "none" as the algorithm.
    const header = {
        alg: 'none',
        type: 'JWT'
    };
    const project = projectId || 'demo-project';
    const iat = token.iat || 0;
    const sub = token.sub || token.user_id;
    if (!sub) {
        throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");
    }
    const payload = Object.assign({ 
        // Set all required fields to decent defaults
        iss: `https://securetoken.google.com/${project}`, aud: project, iat, exp: iat + 3600, auth_time: iat, sub, user_id: sub, firebase: {
            sign_in_provider: 'custom',
            identities: {}
        } }, token);
    // Unsecured JWTs use the empty string as a signature.
    const signature = '';
    return [
        base64urlEncodeWithoutPadding(JSON.stringify(header)),
        base64urlEncodeWithoutPadding(JSON.stringify(payload)),
        signature
    ].join('.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns navigator.userAgent string or '' if it's not defined.
 * @return user agent string
 */
function getUA() {
    if (typeof navigator !== 'undefined' &&
        typeof navigator['userAgent'] === 'string') {
        return navigator['userAgent'];
    }
    else {
        return '';
    }
}
/**
 * Detect Cordova / PhoneGap / Ionic frameworks on a mobile device.
 *
 * Deliberately does not rely on checking `file://` URLs (as this fails PhoneGap
 * in the Ripple emulator) nor Cordova `onDeviceReady`, which would normally
 * wait for a callback.
 */
function isMobileCordova() {
    return (typeof window !== 'undefined' &&
        // @ts-ignore Setting up an broadly applicable index signature for Window
        // just to deal with this case would probably be a bad idea.
        !!(window['cordova'] || window['phonegap'] || window['PhoneGap']) &&
        /ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA()));
}
/**
 * Detect Node.js.
 *
 * @return true if Node.js environment is detected.
 */
// Node detection logic from: https://github.com/iliakan/detect-node/
function isNode() {
    try {
        return (Object.prototype.toString.call(__webpack_require__.g.process) === '[object process]');
    }
    catch (e) {
        return false;
    }
}
/**
 * Detect Browser Environment
 */
function isBrowser() {
    return typeof self === 'object' && self.self === self;
}
function isBrowserExtension() {
    const runtime = typeof chrome === 'object'
        ? chrome.runtime
        : typeof browser === 'object'
            ? browser.runtime
            : undefined;
    return typeof runtime === 'object' && runtime.id !== undefined;
}
/**
 * Detect React Native.
 *
 * @return true if ReactNative environment is detected.
 */
function isReactNative() {
    return (typeof navigator === 'object' && navigator['product'] === 'ReactNative');
}
/** Detects Electron apps. */
function isElectron() {
    return getUA().indexOf('Electron/') >= 0;
}
/** Detects Internet Explorer. */
function isIE() {
    const ua = getUA();
    return ua.indexOf('MSIE ') >= 0 || ua.indexOf('Trident/') >= 0;
}
/** Detects Universal Windows Platform apps. */
function isUWP() {
    return getUA().indexOf('MSAppHost/') >= 0;
}
/**
 * Detect whether the current SDK build is the Node version.
 *
 * @return true if it's the Node SDK build.
 */
function isNodeSdk() {
    return CONSTANTS.NODE_CLIENT === true || CONSTANTS.NODE_ADMIN === true;
}
/** Returns true if we are running in Safari. */
function isSafari() {
    return (!isNode() &&
        navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome'));
}
/**
 * This method checks if indexedDB is supported by current browser/service worker context
 * @return true if indexedDB is supported by current browser/service worker context
 */
function isIndexedDBAvailable() {
    return typeof indexedDB === 'object';
}
/**
 * This method validates browser/sw context for indexedDB by opening a dummy indexedDB database and reject
 * if errors occur during the database open operation.
 *
 * @throws exception if current browser/sw context can't run idb.open (ex: Safari iframe, Firefox
 * private browsing)
 */
function validateIndexedDBOpenable() {
    return new Promise((resolve, reject) => {
        try {
            let preExist = true;
            const DB_CHECK_NAME = 'validate-browser-context-for-indexeddb-analytics-module';
            const request = self.indexedDB.open(DB_CHECK_NAME);
            request.onsuccess = () => {
                request.result.close();
                // delete database only when it doesn't pre-exist
                if (!preExist) {
                    self.indexedDB.deleteDatabase(DB_CHECK_NAME);
                }
                resolve(true);
            };
            request.onupgradeneeded = () => {
                preExist = false;
            };
            request.onerror = () => {
                var _a;
                reject(((_a = request.error) === null || _a === void 0 ? void 0 : _a.message) || '');
            };
        }
        catch (error) {
            reject(error);
        }
    });
}
/**
 *
 * This method checks whether cookie is enabled within current browser
 * @return true if cookie is enabled within current browser
 */
function areCookiesEnabled() {
    if (typeof navigator === 'undefined' || !navigator.cookieEnabled) {
        return false;
    }
    return true;
}
/**
 * Polyfill for `globalThis` object.
 * @returns the `globalThis` object for the given environment.
 */
function getGlobal() {
    if (typeof self !== 'undefined') {
        return self;
    }
    if (typeof window !== 'undefined') {
        return window;
    }
    if (typeof __webpack_require__.g !== 'undefined') {
        return __webpack_require__.g;
    }
    throw new Error('Unable to locate global object.');
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview Standardized Firebase Error.
 *
 * Usage:
 *
 *   // Typescript string literals for type-safe codes
 *   type Err =
 *     'unknown' |
 *     'object-not-found'
 *     ;
 *
 *   // Closure enum for type-safe error codes
 *   // at-enum {string}
 *   var Err = {
 *     UNKNOWN: 'unknown',
 *     OBJECT_NOT_FOUND: 'object-not-found',
 *   }
 *
 *   let errors: Map<Err, string> = {
 *     'generic-error': "Unknown error",
 *     'file-not-found': "Could not find file: {$file}",
 *   };
 *
 *   // Type-safe function - must pass a valid error code as param.
 *   let error = new ErrorFactory<Err>('service', 'Service', errors);
 *
 *   ...
 *   throw error.create(Err.GENERIC);
 *   ...
 *   throw error.create(Err.FILE_NOT_FOUND, {'file': fileName});
 *   ...
 *   // Service: Could not file file: foo.txt (service/file-not-found).
 *
 *   catch (e) {
 *     assert(e.message === "Could not find file: foo.txt.");
 *     if (e.code === 'service/file-not-found') {
 *       console.log("Could not read file: " + e['file']);
 *     }
 *   }
 */
const ERROR_NAME = 'FirebaseError';
// Based on code from:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error#Custom_Error_Types
class FirebaseError extends Error {
    constructor(
    /** The error code for this error. */
    code, message, 
    /** Custom data for this error. */
    customData) {
        super(message);
        this.code = code;
        this.customData = customData;
        /** The custom name for all FirebaseErrors. */
        this.name = ERROR_NAME;
        // Fix For ES5
        // https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
        Object.setPrototypeOf(this, FirebaseError.prototype);
        // Maintains proper stack trace for where our error was thrown.
        // Only available on V8.
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory.prototype.create);
        }
    }
}
class ErrorFactory {
    constructor(service, serviceName, errors) {
        this.service = service;
        this.serviceName = serviceName;
        this.errors = errors;
    }
    create(code, ...data) {
        const customData = data[0] || {};
        const fullCode = `${this.service}/${code}`;
        const template = this.errors[code];
        const message = template ? replaceTemplate(template, customData) : 'Error';
        // Service Name: Error message (service/code).
        const fullMessage = `${this.serviceName}: ${message} (${fullCode}).`;
        const error = new FirebaseError(fullCode, fullMessage, customData);
        return error;
    }
}
function replaceTemplate(template, data) {
    return template.replace(PATTERN, (_, key) => {
        const value = data[key];
        return value != null ? String(value) : `<${key}?>`;
    });
}
const PATTERN = /\{\$([^}]+)}/g;

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Evaluates a JSON string into a javascript object.
 *
 * @param {string} str A string containing JSON.
 * @return {*} The javascript object representing the specified JSON.
 */
function jsonEval(str) {
    return JSON.parse(str);
}
/**
 * Returns JSON representing a javascript object.
 * @param {*} data Javascript object to be stringified.
 * @return {string} The JSON contents of the object.
 */
function stringify(data) {
    return JSON.stringify(data);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Decodes a Firebase auth. token into constituent parts.
 *
 * Notes:
 * - May return with invalid / incomplete claims if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const decode = function (token) {
    let header = {}, claims = {}, data = {}, signature = '';
    try {
        const parts = token.split('.');
        header = jsonEval(base64Decode(parts[0]) || '');
        claims = jsonEval(base64Decode(parts[1]) || '');
        signature = parts[2];
        data = claims['d'] || {};
        delete claims['d'];
    }
    catch (e) { }
    return {
        header,
        claims,
        data,
        signature
    };
};
/**
 * Decodes a Firebase auth. token and checks the validity of its time-based claims. Will return true if the
 * token is within the time window authorized by the 'nbf' (not-before) and 'iat' (issued-at) claims.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidTimestamp = function (token) {
    const claims = decode(token).claims;
    const now = Math.floor(new Date().getTime() / 1000);
    let validSince = 0, validUntil = 0;
    if (typeof claims === 'object') {
        if (claims.hasOwnProperty('nbf')) {
            validSince = claims['nbf'];
        }
        else if (claims.hasOwnProperty('iat')) {
            validSince = claims['iat'];
        }
        if (claims.hasOwnProperty('exp')) {
            validUntil = claims['exp'];
        }
        else {
            // token will expire after 24h by default
            validUntil = validSince + 86400;
        }
    }
    return (!!now &&
        !!validSince &&
        !!validUntil &&
        now >= validSince &&
        now <= validUntil);
};
/**
 * Decodes a Firebase auth. token and returns its issued at time if valid, null otherwise.
 *
 * Notes:
 * - May return null if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const issuedAtTime = function (token) {
    const claims = decode(token).claims;
    if (typeof claims === 'object' && claims.hasOwnProperty('iat')) {
        return claims['iat'];
    }
    return null;
};
/**
 * Decodes a Firebase auth. token and checks the validity of its format. Expects a valid issued-at time.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isValidFormat = function (token) {
    const decoded = decode(token), claims = decoded.claims;
    return !!claims && typeof claims === 'object' && claims.hasOwnProperty('iat');
};
/**
 * Attempts to peer into an auth token and determine if it's an admin auth token by looking at the claims portion.
 *
 * Notes:
 * - May return a false negative if there's no native base64 decoding support.
 * - Doesn't check if the token is actually valid.
 */
const isAdmin = function (token) {
    const claims = decode(token).claims;
    return typeof claims === 'object' && claims['admin'] === true;
};

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function contains(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
}
function safeGet(obj, key) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
        return obj[key];
    }
    else {
        return undefined;
    }
}
function isEmpty(obj) {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            return false;
        }
    }
    return true;
}
function map(obj, fn, contextObj) {
    const res = {};
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            res[key] = fn.call(contextObj, obj[key], key, obj);
        }
    }
    return res;
}
/**
 * Deep equal two objects. Support Arrays and Objects.
 */
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);
    for (const k of aKeys) {
        if (!bKeys.includes(k)) {
            return false;
        }
        const aProp = a[k];
        const bProp = b[k];
        if (isObject(aProp) && isObject(bProp)) {
            if (!deepEqual(aProp, bProp)) {
                return false;
            }
        }
        else if (aProp !== bProp) {
            return false;
        }
    }
    for (const k of bKeys) {
        if (!aKeys.includes(k)) {
            return false;
        }
    }
    return true;
}
function isObject(thing) {
    return thing !== null && typeof thing === 'object';
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Returns a querystring-formatted string (e.g. &arg=val&arg2=val2) from a
 * params object (e.g. {arg: 'val', arg2: 'val2'})
 * Note: You must prepend it with ? when adding it to a URL.
 */
function querystring(querystringParams) {
    const params = [];
    for (const [key, value] of Object.entries(querystringParams)) {
        if (Array.isArray(value)) {
            value.forEach(arrayVal => {
                params.push(encodeURIComponent(key) + '=' + encodeURIComponent(arrayVal));
            });
        }
        else {
            params.push(encodeURIComponent(key) + '=' + encodeURIComponent(value));
        }
    }
    return params.length ? '&' + params.join('&') : '';
}
/**
 * Decodes a querystring (e.g. ?arg=val&arg2=val2) into a params object
 * (e.g. {arg: 'val', arg2: 'val2'})
 */
function querystringDecode(querystring) {
    const obj = {};
    const tokens = querystring.replace(/^\?/, '').split('&');
    tokens.forEach(token => {
        if (token) {
            const [key, value] = token.split('=');
            obj[decodeURIComponent(key)] = decodeURIComponent(value);
        }
    });
    return obj;
}
/**
 * Extract the query string part of a URL, including the leading question mark (if present).
 */
function extractQuerystring(url) {
    const queryStart = url.indexOf('?');
    if (!queryStart) {
        return '';
    }
    const fragmentStart = url.indexOf('#', queryStart);
    return url.substring(queryStart, fragmentStart > 0 ? fragmentStart : undefined);
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @fileoverview SHA-1 cryptographic hash.
 * Variable names follow the notation in FIPS PUB 180-3:
 * http://csrc.nist.gov/publications/fips/fips180-3/fips180-3_final.pdf.
 *
 * Usage:
 *   var sha1 = new sha1();
 *   sha1.update(bytes);
 *   var hash = sha1.digest();
 *
 * Performance:
 *   Chrome 23:   ~400 Mbit/s
 *   Firefox 16:  ~250 Mbit/s
 *
 */
/**
 * SHA-1 cryptographic hash constructor.
 *
 * The properties declared here are discussed in the above algorithm document.
 * @constructor
 * @final
 * @struct
 */
class Sha1 {
    constructor() {
        /**
         * Holds the previous values of accumulated variables a-e in the compress_
         * function.
         * @private
         */
        this.chain_ = [];
        /**
         * A buffer holding the partially computed hash result.
         * @private
         */
        this.buf_ = [];
        /**
         * An array of 80 bytes, each a part of the message to be hashed.  Referred to
         * as the message schedule in the docs.
         * @private
         */
        this.W_ = [];
        /**
         * Contains data needed to pad messages less than 64 bytes.
         * @private
         */
        this.pad_ = [];
        /**
         * @private {number}
         */
        this.inbuf_ = 0;
        /**
         * @private {number}
         */
        this.total_ = 0;
        this.blockSize = 512 / 8;
        this.pad_[0] = 128;
        for (let i = 1; i < this.blockSize; ++i) {
            this.pad_[i] = 0;
        }
        this.reset();
    }
    reset() {
        this.chain_[0] = 0x67452301;
        this.chain_[1] = 0xefcdab89;
        this.chain_[2] = 0x98badcfe;
        this.chain_[3] = 0x10325476;
        this.chain_[4] = 0xc3d2e1f0;
        this.inbuf_ = 0;
        this.total_ = 0;
    }
    /**
     * Internal compress helper function.
     * @param buf Block to compress.
     * @param offset Offset of the block in the buffer.
     * @private
     */
    compress_(buf, offset) {
        if (!offset) {
            offset = 0;
        }
        const W = this.W_;
        // get 16 big endian words
        if (typeof buf === 'string') {
            for (let i = 0; i < 16; i++) {
                // TODO(user): [bug 8140122] Recent versions of Safari for Mac OS and iOS
                // have a bug that turns the post-increment ++ operator into pre-increment
                // during JIT compilation.  We have code that depends heavily on SHA-1 for
                // correctness and which is affected by this bug, so I've removed all uses
                // of post-increment ++ in which the result value is used.  We can revert
                // this change once the Safari bug
                // (https://bugs.webkit.org/show_bug.cgi?id=109036) has been fixed and
                // most clients have been updated.
                W[i] =
                    (buf.charCodeAt(offset) << 24) |
                        (buf.charCodeAt(offset + 1) << 16) |
                        (buf.charCodeAt(offset + 2) << 8) |
                        buf.charCodeAt(offset + 3);
                offset += 4;
            }
        }
        else {
            for (let i = 0; i < 16; i++) {
                W[i] =
                    (buf[offset] << 24) |
                        (buf[offset + 1] << 16) |
                        (buf[offset + 2] << 8) |
                        buf[offset + 3];
                offset += 4;
            }
        }
        // expand to 80 words
        for (let i = 16; i < 80; i++) {
            const t = W[i - 3] ^ W[i - 8] ^ W[i - 14] ^ W[i - 16];
            W[i] = ((t << 1) | (t >>> 31)) & 0xffffffff;
        }
        let a = this.chain_[0];
        let b = this.chain_[1];
        let c = this.chain_[2];
        let d = this.chain_[3];
        let e = this.chain_[4];
        let f, k;
        // TODO(user): Try to unroll this loop to speed up the computation.
        for (let i = 0; i < 80; i++) {
            if (i < 40) {
                if (i < 20) {
                    f = d ^ (b & (c ^ d));
                    k = 0x5a827999;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0x6ed9eba1;
                }
            }
            else {
                if (i < 60) {
                    f = (b & c) | (d & (b | c));
                    k = 0x8f1bbcdc;
                }
                else {
                    f = b ^ c ^ d;
                    k = 0xca62c1d6;
                }
            }
            const t = (((a << 5) | (a >>> 27)) + f + e + k + W[i]) & 0xffffffff;
            e = d;
            d = c;
            c = ((b << 30) | (b >>> 2)) & 0xffffffff;
            b = a;
            a = t;
        }
        this.chain_[0] = (this.chain_[0] + a) & 0xffffffff;
        this.chain_[1] = (this.chain_[1] + b) & 0xffffffff;
        this.chain_[2] = (this.chain_[2] + c) & 0xffffffff;
        this.chain_[3] = (this.chain_[3] + d) & 0xffffffff;
        this.chain_[4] = (this.chain_[4] + e) & 0xffffffff;
    }
    update(bytes, length) {
        // TODO(johnlenz): tighten the function signature and remove this check
        if (bytes == null) {
            return;
        }
        if (length === undefined) {
            length = bytes.length;
        }
        const lengthMinusBlock = length - this.blockSize;
        let n = 0;
        // Using local instead of member variables gives ~5% speedup on Firefox 16.
        const buf = this.buf_;
        let inbuf = this.inbuf_;
        // The outer while loop should execute at most twice.
        while (n < length) {
            // When we have no data in the block to top up, we can directly process the
            // input buffer (assuming it contains sufficient data). This gives ~25%
            // speedup on Chrome 23 and ~15% speedup on Firefox 16, but requires that
            // the data is provided in large chunks (or in multiples of 64 bytes).
            if (inbuf === 0) {
                while (n <= lengthMinusBlock) {
                    this.compress_(bytes, n);
                    n += this.blockSize;
                }
            }
            if (typeof bytes === 'string') {
                while (n < length) {
                    buf[inbuf] = bytes.charCodeAt(n);
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
            else {
                while (n < length) {
                    buf[inbuf] = bytes[n];
                    ++inbuf;
                    ++n;
                    if (inbuf === this.blockSize) {
                        this.compress_(buf);
                        inbuf = 0;
                        // Jump to the outer loop so we use the full-block optimization.
                        break;
                    }
                }
            }
        }
        this.inbuf_ = inbuf;
        this.total_ += length;
    }
    /** @override */
    digest() {
        const digest = [];
        let totalBits = this.total_ * 8;
        // Add pad 0x80 0x00*.
        if (this.inbuf_ < 56) {
            this.update(this.pad_, 56 - this.inbuf_);
        }
        else {
            this.update(this.pad_, this.blockSize - (this.inbuf_ - 56));
        }
        // Add # bits.
        for (let i = this.blockSize - 1; i >= 56; i--) {
            this.buf_[i] = totalBits & 255;
            totalBits /= 256; // Don't use bit-shifting here!
        }
        this.compress_(this.buf_);
        let n = 0;
        for (let i = 0; i < 5; i++) {
            for (let j = 24; j >= 0; j -= 8) {
                digest[n] = (this.chain_[i] >> j) & 255;
                ++n;
            }
        }
        return digest;
    }
}

/**
 * Helper to make a Subscribe function (just like Promise helps make a
 * Thenable).
 *
 * @param executor Function which can make calls to a single Observer
 *     as a proxy.
 * @param onNoObservers Callback when count of Observers goes to zero.
 */
function createSubscribe(executor, onNoObservers) {
    const proxy = new ObserverProxy(executor, onNoObservers);
    return proxy.subscribe.bind(proxy);
}
/**
 * Implement fan-out for any number of Observers attached via a subscribe
 * function.
 */
class ObserverProxy {
    /**
     * @param executor Function which can make calls to a single Observer
     *     as a proxy.
     * @param onNoObservers Callback when count of Observers goes to zero.
     */
    constructor(executor, onNoObservers) {
        this.observers = [];
        this.unsubscribes = [];
        this.observerCount = 0;
        // Micro-task scheduling by calling task.then().
        this.task = Promise.resolve();
        this.finalized = false;
        this.onNoObservers = onNoObservers;
        // Call the executor asynchronously so subscribers that are called
        // synchronously after the creation of the subscribe function
        // can still receive the very first value generated in the executor.
        this.task
            .then(() => {
            executor(this);
        })
            .catch(e => {
            this.error(e);
        });
    }
    next(value) {
        this.forEachObserver((observer) => {
            observer.next(value);
        });
    }
    error(error) {
        this.forEachObserver((observer) => {
            observer.error(error);
        });
        this.close(error);
    }
    complete() {
        this.forEachObserver((observer) => {
            observer.complete();
        });
        this.close();
    }
    /**
     * Subscribe function that can be used to add an Observer to the fan-out list.
     *
     * - We require that no event is sent to a subscriber sychronously to their
     *   call to subscribe().
     */
    subscribe(nextOrObserver, error, complete) {
        let observer;
        if (nextOrObserver === undefined &&
            error === undefined &&
            complete === undefined) {
            throw new Error('Missing Observer.');
        }
        // Assemble an Observer object when passed as callback functions.
        if (implementsAnyMethods(nextOrObserver, [
            'next',
            'error',
            'complete'
        ])) {
            observer = nextOrObserver;
        }
        else {
            observer = {
                next: nextOrObserver,
                error,
                complete
            };
        }
        if (observer.next === undefined) {
            observer.next = noop;
        }
        if (observer.error === undefined) {
            observer.error = noop;
        }
        if (observer.complete === undefined) {
            observer.complete = noop;
        }
        const unsub = this.unsubscribeOne.bind(this, this.observers.length);
        // Attempt to subscribe to a terminated Observable - we
        // just respond to the Observer with the final error or complete
        // event.
        if (this.finalized) {
            // eslint-disable-next-line @typescript-eslint/no-floating-promises
            this.task.then(() => {
                try {
                    if (this.finalError) {
                        observer.error(this.finalError);
                    }
                    else {
                        observer.complete();
                    }
                }
                catch (e) {
                    // nothing
                }
                return;
            });
        }
        this.observers.push(observer);
        return unsub;
    }
    // Unsubscribe is synchronous - we guarantee that no events are sent to
    // any unsubscribed Observer.
    unsubscribeOne(i) {
        if (this.observers === undefined || this.observers[i] === undefined) {
            return;
        }
        delete this.observers[i];
        this.observerCount -= 1;
        if (this.observerCount === 0 && this.onNoObservers !== undefined) {
            this.onNoObservers(this);
        }
    }
    forEachObserver(fn) {
        if (this.finalized) {
            // Already closed by previous event....just eat the additional values.
            return;
        }
        // Since sendOne calls asynchronously - there is no chance that
        // this.observers will become undefined.
        for (let i = 0; i < this.observers.length; i++) {
            this.sendOne(i, fn);
        }
    }
    // Call the Observer via one of it's callback function. We are careful to
    // confirm that the observe has not been unsubscribed since this asynchronous
    // function had been queued.
    sendOne(i, fn) {
        // Execute the callback asynchronously
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            if (this.observers !== undefined && this.observers[i] !== undefined) {
                try {
                    fn(this.observers[i]);
                }
                catch (e) {
                    // Ignore exceptions raised in Observers or missing methods of an
                    // Observer.
                    // Log error to console. b/31404806
                    if (typeof console !== 'undefined' && console.error) {
                        console.error(e);
                    }
                }
            }
        });
    }
    close(err) {
        if (this.finalized) {
            return;
        }
        this.finalized = true;
        if (err !== undefined) {
            this.finalError = err;
        }
        // Proxy is no longer needed - garbage collect references
        // eslint-disable-next-line @typescript-eslint/no-floating-promises
        this.task.then(() => {
            this.observers = undefined;
            this.onNoObservers = undefined;
        });
    }
}
/** Turn synchronous function into one called asynchronously. */
// eslint-disable-next-line @typescript-eslint/ban-types
function async(fn, onError) {
    return (...args) => {
        Promise.resolve(true)
            .then(() => {
            fn(...args);
        })
            .catch((error) => {
            if (onError) {
                onError(error);
            }
        });
    };
}
/**
 * Return true if the object passed in implements any of the named methods.
 */
function implementsAnyMethods(obj, methods) {
    if (typeof obj !== 'object' || obj === null) {
        return false;
    }
    for (const method of methods) {
        if (method in obj && typeof obj[method] === 'function') {
            return true;
        }
    }
    return false;
}
function noop() {
    // do nothing
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Check to make sure the appropriate number of arguments are provided for a public function.
 * Throws an error if it fails.
 *
 * @param fnName The function name
 * @param minCount The minimum number of arguments to allow for the function call
 * @param maxCount The maximum number of argument to allow for the function call
 * @param argCount The actual number of arguments provided.
 */
const validateArgCount = function (fnName, minCount, maxCount, argCount) {
    let argError;
    if (argCount < minCount) {
        argError = 'at least ' + minCount;
    }
    else if (argCount > maxCount) {
        argError = maxCount === 0 ? 'none' : 'no more than ' + maxCount;
    }
    if (argError) {
        const error = fnName +
            ' failed: Was called with ' +
            argCount +
            (argCount === 1 ? ' argument.' : ' arguments.') +
            ' Expects ' +
            argError +
            '.';
        throw new Error(error);
    }
};
/**
 * Generates a string to prefix an error message about failed argument validation
 *
 * @param fnName The function name
 * @param argName The name of the argument
 * @return The prefix to add to the error thrown for validation.
 */
function errorPrefix(fnName, argName) {
    return `${fnName} failed: ${argName} argument `;
}
/**
 * @param fnName
 * @param argumentNumber
 * @param namespace
 * @param optional
 */
function validateNamespace(fnName, namespace, optional) {
    if (optional && !namespace) {
        return;
    }
    if (typeof namespace !== 'string') {
        //TODO: I should do more validation here. We only allow certain chars in namespaces.
        throw new Error(errorPrefix(fnName, 'namespace') + 'must be a valid firebase namespace.');
    }
}
function validateCallback(fnName, argumentName, 
// eslint-disable-next-line @typescript-eslint/ban-types
callback, optional) {
    if (optional && !callback) {
        return;
    }
    if (typeof callback !== 'function') {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid function.');
    }
}
function validateContextObject(fnName, argumentName, context, optional) {
    if (optional && !context) {
        return;
    }
    if (typeof context !== 'object' || context === null) {
        throw new Error(errorPrefix(fnName, argumentName) + 'must be a valid context object.');
    }
}

/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Code originally came from goog.crypt.stringToUtf8ByteArray, but for some reason they
// automatically replaced '\r\n' with '\n', and they didn't handle surrogate pairs,
// so it's been modified.
// Note that not all Unicode characters appear as single characters in JavaScript strings.
// fromCharCode returns the UTF-16 encoding of a character - so some Unicode characters
// use 2 characters in Javascript.  All 4-byte UTF-8 characters begin with a first
// character in the range 0xD800 - 0xDBFF (the first character of a so-called surrogate
// pair).
// See http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.3
/**
 * @param {string} str
 * @return {Array}
 */
const stringToByteArray = function (str) {
    const out = [];
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        let c = str.charCodeAt(i);
        // Is this the lead surrogate in a surrogate pair?
        if (c >= 0xd800 && c <= 0xdbff) {
            const high = c - 0xd800; // the high 10 bits.
            i++;
            assert(i < str.length, 'Surrogate pair missing trail surrogate.');
            const low = str.charCodeAt(i) - 0xdc00; // the low 10 bits.
            c = 0x10000 + (high << 10) + low;
        }
        if (c < 128) {
            out[p++] = c;
        }
        else if (c < 2048) {
            out[p++] = (c >> 6) | 192;
            out[p++] = (c & 63) | 128;
        }
        else if (c < 65536) {
            out[p++] = (c >> 12) | 224;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
        else {
            out[p++] = (c >> 18) | 240;
            out[p++] = ((c >> 12) & 63) | 128;
            out[p++] = ((c >> 6) & 63) | 128;
            out[p++] = (c & 63) | 128;
        }
    }
    return out;
};
/**
 * Calculate length without actually converting; useful for doing cheaper validation.
 * @param {string} str
 * @return {number}
 */
const stringLength = function (str) {
    let p = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        if (c < 128) {
            p++;
        }
        else if (c < 2048) {
            p += 2;
        }
        else if (c >= 0xd800 && c <= 0xdbff) {
            // Lead surrogate of a surrogate pair.  The pair together will take 4 bytes to represent.
            p += 4;
            i++; // skip trail surrogate.
        }
        else {
            p += 3;
        }
    }
    return p;
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The amount of milliseconds to exponentially increase.
 */
const DEFAULT_INTERVAL_MILLIS = 1000;
/**
 * The factor to backoff by.
 * Should be a number greater than 1.
 */
const DEFAULT_BACKOFF_FACTOR = 2;
/**
 * The maximum milliseconds to increase to.
 *
 * <p>Visible for testing
 */
const MAX_VALUE_MILLIS = 4 * 60 * 60 * 1000; // Four hours, like iOS and Android.
/**
 * The percentage of backoff time to randomize by.
 * See
 * http://go/safe-client-behavior#step-1-determine-the-appropriate-retry-interval-to-handle-spike-traffic
 * for context.
 *
 * <p>Visible for testing
 */
const RANDOM_FACTOR = 0.5;
/**
 * Based on the backoff method from
 * https://github.com/google/closure-library/blob/master/closure/goog/math/exponentialbackoff.js.
 * Extracted here so we don't need to pass metadata and a stateful ExponentialBackoff object around.
 */
function calculateBackoffMillis(backoffCount, intervalMillis = DEFAULT_INTERVAL_MILLIS, backoffFactor = DEFAULT_BACKOFF_FACTOR) {
    // Calculates an exponentially increasing value.
    // Deviation: calculates value from count and a constant interval, so we only need to save value
    // and count to restore state.
    const currBaseValue = intervalMillis * Math.pow(backoffFactor, backoffCount);
    // A random "fuzz" to avoid waves of retries.
    // Deviation: randomFactor is required.
    const randomWait = Math.round(
    // A fraction of the backoff value to add/subtract.
    // Deviation: changes multiplication order to improve readability.
    RANDOM_FACTOR *
        currBaseValue *
        // A random float (rounded to int by Math.round above) in the range [-1, 1]. Determines
        // if we add or subtract.
        (Math.random() - 0.5) *
        2);
    // Limits backoff to max to avoid effectively permanent backoff.
    return Math.min(MAX_VALUE_MILLIS, currBaseValue + randomWait);
}

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provide English ordinal letters after a number
 */
function ordinal(i) {
    if (!Number.isFinite(i)) {
        return `${i}`;
    }
    return i + indicator(i);
}
function indicator(i) {
    i = Math.abs(i);
    const cent = i % 100;
    if (cent >= 10 && cent <= 20) {
        return 'th';
    }
    const dec = i % 10;
    if (dec === 1) {
        return 'st';
    }
    if (dec === 2) {
        return 'nd';
    }
    if (dec === 3) {
        return 'rd';
    }
    return 'th';
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function getModularInstance(service) {
    if (service && service._delegate) {
        return service._delegate;
    }
    else {
        return service;
    }
}


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./src/DOM.js":
/*!********************!*\
  !*** ./src/DOM.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initDOM": () => (/* binding */ initDOM),
/* harmony export */   "popupOpen": () => (/* binding */ popupOpen),
/* harmony export */   "popupClose": () => (/* binding */ popupClose),
/* harmony export */   "currentItem": () => (/* binding */ currentItem),
/* harmony export */   "createDOM": () => (/* binding */ createDOM)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/format/index.js");
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");

 // import {saveToLocalStorage} from './localStorage';

function initDOM() {
  // Create Project Button
  var createProject = document.querySelector('.createProject');
  createProject.addEventListener('click', function () {
    popupOpen.project();
  });
  var projectCancel = document.querySelector('.projectCancel');
  projectCancel.addEventListener('click', function (e) {
    e.preventDefault();
    popupClose.project();
  }); // Edit Project Button

  var editProject = document.querySelector('.editProject');
  editProject.addEventListener('click', function () {
    popupOpen.projectEdit();
  });
  var projectEditCancel = document.querySelector('.projectEditCancel');
  projectEditCancel.addEventListener('click', function (e) {
    e.preventDefault();
    popupClose.projectEdit();
  }); // Create To-Do Button

  var createTodo = document.querySelector('.createTodo');
  createTodo.addEventListener('click', function () {
    popupOpen.item();
  });
  var itemCancel = document.querySelector('.itemCancel');
  itemCancel.addEventListener('click', function (e) {
    e.preventDefault();
    popupClose.item();
  }); // Edit To-Do Button

  var todoEditCancel = document.querySelector('.itemEditCancel');
  todoEditCancel.addEventListener('click', function (e) {
    e.preventDefault();
    popupClose.itemEdit();
  });
}

var popupOpen = function () {
  var project = function project() {
    document.querySelector('.projectPopup').style.display = 'block';
    document.querySelector('.createProject').style.display = 'none';
    document.querySelector('.editProject').style.display = 'none';
    document.querySelector('.deleteProject').style.display = 'none';
  };

  var projectEdit = function projectEdit() {
    document.querySelector('.projectEditPopup').style.display = 'block';
    document.querySelector('.createProject').style.display = 'none';
    document.querySelector('.editProject').style.display = 'none';
    document.querySelector('.deleteProject').style.display = 'none';
  };

  var item = function item() {
    document.querySelector('.itemPopup').style.display = 'block';
    document.querySelector('.createTodo').style.display = 'none';
  };

  var itemEdit = function itemEdit() {
    document.querySelector('.itemEditPopup').style.display = 'block';
  };

  return {
    project: project,
    projectEdit: projectEdit,
    item: item,
    itemEdit: itemEdit
  };
}();

var popupClose = function () {
  var project = function project() {
    document.querySelector('.projectPopup').style.display = 'none';
    document.querySelector('.projectForm').reset();
    document.querySelector('.createProject').style.display = 'block';
    document.querySelector('.editProject').style.display = 'block';
    document.querySelector('.deleteProject').style.display = 'block';
  };

  var projectEdit = function projectEdit() {
    document.querySelector('.projectEditPopup').style.display = 'none';
    document.querySelector('.projectEditForm').reset();
    document.querySelector('.createProject').style.display = 'block';
    document.querySelector('.editProject').style.display = 'block';
    document.querySelector('.deleteProject').style.display = 'block';
  };

  var item = function item() {
    document.querySelector('.itemPopup').style.display = 'none';
    document.querySelector('.itemForm').reset();
    document.querySelector('.createTodo').style.display = 'block';
  };

  var itemEdit = function itemEdit() {
    document.querySelector('.itemEditPopup').style.display = 'none';
    document.querySelector('.itemEditForm').reset();
    document.querySelector('.createTodo').style.display = 'block';
  };

  return {
    project: project,
    projectEdit: projectEdit,
    item: item,
    itemEdit: itemEdit
  };
}();

var currentItem;

var createDOM = function () {
  var projectInit = function projectInit(_projectList) {
    var projectList = document.querySelector('.projectList');

    for (var i = 0; i < _projectList.length; i++) {
      var projects = document.createElement('button');
      projects.textContent = _projectList[i];
      projects.classList.add('project');
      projects.classList.add("projects".concat(i));
      projectList.appendChild(projects);
    }
  };

  var project = function project(_projectList) {
    var projectList = document.querySelector('.projectList');
    var eachProject = _projectList.length - 1;
    var projects = document.createElement('button');
    projects.textContent = _projectList[eachProject];
    projects.classList.add('project');
    projects.classList.add("projects".concat(_index_js__WEBPACK_IMPORTED_MODULE_0__.projectCounter));
    projectList.appendChild(projects);
    popupClose.project();
  };

  var projectEdit = function projectEdit(_projectList, _currentProject) {
    document.querySelector(".projects".concat(_currentProject)).textContent = "".concat(_projectList[_currentProject]);
    popupClose.projectEdit();
  };

  var item = function item(_todo, _project, _nthProject, _nthItem) {
    var todoList = document.querySelector('.todoList');
    var todoContainer = document.createElement('div');
    todoContainer.classList.add('todoContainer');
    todoList.appendChild(todoContainer); // Todo Title

    var todoButton = document.createElement('button');
    todoButton.textContent = _todo.title;
    todoButton.classList.add('todoItems');
    todoButton.style.cssText = _todo.status == 'complete' ? 'text-decoration: line-through;' : 'text-decoration: none;';
    todoButton.addEventListener('click', function () {
      // project Status
      _todo.status = _todo.status == 'complete' ? 'incomplete' : 'complete'; // CSS - Line Through

      todoButton.style.cssText = _todo.status == 'complete' ? 'text-decoration: line-through;' : 'text-decoration: none;';
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)();
    });
    todoContainer.appendChild(todoButton); // Todo Info

    var todoInfoButton = document.createElement('button');
    todoInfoButton.classList.add('todoInfoButton');
    todoInfoButton.textContent = 'i';
    todoInfoButton.addEventListener('click', function () {
      document.querySelector('.infoPopup').style.display = 'block';
      var titleInfo = document.querySelector('.titleInfo');
      var descriptionInfo = document.querySelector('.descriptionInfo');
      var statusInfo = document.querySelector('.statusInfo');
      var priorityInfo = document.querySelector('.priorityInfo');
      var dueDateInfo = document.querySelector('.dueDateInfo'); // date-fns

      titleInfo.textContent = _todo.title;
      descriptionInfo.textContent = _todo.description;
      priorityInfo.textContent = "Priority: ".concat(_todo.priority);

      if (_todo.dueDate) {
        dueDateInfo.textContent = (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])(new Date(_todo.dueDate.replace(/-/g, '/')), 'MMMM dd, yyyy');
      }

      statusInfo.textContent = _todo.status;
      var closeButton = document.querySelector('.closeButton');
      closeButton.addEventListener('click', function () {
        document.querySelector('.infoPopup').style.display = 'none';
      });
    });
    todoContainer.appendChild(todoInfoButton); // Todo Edit

    var todoEditButton = document.createElement('button');
    todoEditButton.classList.add('todoEditButton');
    todoEditButton.textContent = 'Edit';
    todoEditButton.addEventListener('click', function () {
      popupOpen.itemEdit();
      currentItem = _nthItem;
    });
    todoContainer.appendChild(todoEditButton); // Todo Delete

    var todoDeleteButton = document.createElement('button');
    todoDeleteButton.classList.add('todoDeleteButton');
    todoDeleteButton.textContent = 'X';
    todoDeleteButton.addEventListener('click', function () {
      // remove DOM
      todoList.removeChild(todoContainer); // remove object from array

      _project[_nthProject][_nthItem] = '';
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.saveToLocalStorage)(); // render main panel

      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.projectButton)();
    });
    todoContainer.appendChild(todoDeleteButton);
    popupClose.item();
  };

  return {
    projectInit: projectInit,
    project: project,
    projectEdit: projectEdit,
    item: item
  };
}();



/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projectButton": () => (/* binding */ projectButton),
/* harmony export */   "projectCounter": () => (/* binding */ projectCounter),
/* harmony export */   "saveToLocalStorage": () => (/* binding */ saveToLocalStorage)
/* harmony export */ });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var _DOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOM.js */ "./src/DOM.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
// Import the functions you need from the SDKs you need
 // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyDhabS79gUYSHfZG70jbRph-4uaV-AtOUE",
  authDomain: "to-do-list-47089.firebaseapp.com",
  projectId: "to-do-list-47089",
  storageBucket: "to-do-list-47089.appspot.com",
  messagingSenderId: "81106768953",
  appId: "1:81106768953:web:35c9711618869a837fa9e8"
}; // Initialize Firebase

var app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);
 // import {saveToLocalStorage, readLocalStorage} from './localStorage';

 // Variables

var project; // sorted all todos based on project#

var projectList; // all project names goes here

var projectCounter;
var currentProject; // localStorage.clear();
// Todo Item Factory

var todoItem = function todoItem(title, description, project, status, dueDate, priority) {
  var completeToggle = function completeToggle() {
    status = status == 'complete' ? 'incomplete' : 'complete';
  };

  return {
    title: title,
    description: description,
    project: project,
    status: status,
    dueDate: dueDate,
    priority: priority,
    completeToggle: completeToggle
  };
}; // Create Project Algor


function createProjectAlgor(_name, projectList) {
  projectList.push(_name);
  _DOM_js__WEBPACK_IMPORTED_MODULE_1__.createDOM.project(projectList);
  projectCounter++;
} // localStorage


function saveToLocalStorage() {
  localStorage.setItem('project', JSON.stringify(project));
  localStorage.setItem('projectList', JSON.stringify(projectList));
  localStorage.setItem('projectCounter', JSON.stringify(projectCounter));
}

function readLocalStorage() {
  project = JSON.parse(localStorage.getItem('project'));
  projectList = JSON.parse(localStorage.getItem('projectList'));
  projectCounter = JSON.parse(localStorage.getItem('projectCounter'));
  return project, projectList, projectCounter;
}

if (localStorage.getItem('projectList')) {
  console.log(projectList);
  readLocalStorage();
  console.log(projectList);
  _DOM_js__WEBPACK_IMPORTED_MODULE_1__.createDOM.projectInit(projectList);
  console.log(localStorage.getItem('project'));
} else {
  init();
}

(0,_DOM_js__WEBPACK_IMPORTED_MODULE_1__.initDOM)(); // #region Initialization - create Default Projects and Todo Items

function init() {
  // Variables
  project = []; // sorted all todos based on project#

  projectList = []; // all project names goes here

  projectCounter = 0;
  var projectInit = [];
  createProjectAlgor('Inbox', projectList);
  projectInit.push(todoItem('Buy birthday present for Tiffany', 'maybe just get an e-giftcard', '0', 'incomplete', '2020-01-01', 'High'));
  projectInit.push(todoItem('Water the plants', 'talk to the plants, make sure they are happy', '0', 'incomplete', '2020-01-01', 'Medium'));
  projectInit.push(todoItem('Car maintenance', 'fix the broken window', '0', 'incomplete', '2020-01-01', 'Low'));
  createProjectAlgor('Work', projectList);
  projectInit.push(todoItem('Meeting with Derek the manager', 'Prepare presentation and coffee', '1', 'incomplete', '2020-01-01', 'High'));
  projectInit.push(todoItem('Call Todd from X Company', 'Discuss about which pizza flavor is the best', '1', 'incomplete', '2020-01-01', 'High'));
  createProjectAlgor('Hobbies', projectList);
  projectInit.push(todoItem('Disc golf with Dalton', 'La Mirada Park', '2', 'incomplete', '2020-01-01', 'Medium'));
  projectInit.push(todoItem('Workout at the gym', 'so that I can have more burgers', '2', 'incomplete', '2020-01-01', 'Low'));
  projectInit.push(todoItem('Browse Amazon for Harry Potter Wands', 'get the Elder Wand', '2', 'incomplete', '2020-01-01', 'High'));
  projectInit.push(todoItem('Watch another Godzilla movie', 'popcorn and coke', '2', 'incomplete', '2020-01-01', 'High')); // Sort todos based on project#: go through projectList and filter the todos

  var _loop = function _loop(i) {
    project[i] = projectInit.filter(function (todo) {
      return todo.project == "".concat(i);
    });
  };

  for (var i = 0; i < projectList.length; i++) {
    _loop(i);
  }

  return project, projectList, currentProject, projectCounter;
} // #endregion
// Project Button Behavior


var todoList = document.querySelector('.todoList');

function projectButton() {
  var _projectList = document.querySelector('.projectList'); // Loop through nodes of parent


  var _loop2 = function _loop2(i) {
    _projectList.children[i].addEventListener('click', function () {
      // Update variable - currentProject
      _projectList.children[i].classList.remove('project');

      currentProject = _projectList.children[i].classList[0].slice(8);

      _projectList.children[i].classList.add('project'); // Add/Rmv 'pressed' class


      for (var j = 0; j < _projectList.children.length; j++) {
        _projectList.children[j].classList.remove('pressed');
      }

      _projectList.children[i].classList.add('pressed'); // clear the main panel


      while (todoList.firstChild) {
        todoList.firstChild.remove();
      } // If this project already has To-Dos in it, then create item DOM


      if (project[currentProject]) {
        for (var eachTodo = 0; eachTodo < project[currentProject].length; eachTodo++) {
          if (project[currentProject][eachTodo]) {
            _DOM_js__WEBPACK_IMPORTED_MODULE_1__.createDOM.item(project[currentProject][eachTodo], project, currentProject, eachTodo);
          }
        }
      }
    });
  };

  for (var i = 0; i < _projectList.children.length; i++) {
    _loop2(i);
  }
}

projectButton();
document.querySelector('.projects0').click();
document.querySelector('.projects0').focus(); // Create Project Submit Button

var projectSubmit = document.querySelector('.projectSubmit');
projectSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  createProjectAlgor(document.querySelector('.projectInput').value, projectList);
  saveToLocalStorage();
  projectButton();
}); // Create ToDo Item Submit Button

var itemSubmit = document.querySelector('.itemSubmit');
itemSubmit.addEventListener('click', function (e) {
  e.preventDefault(); // submit new todo to project

  var todo = todoItem(document.querySelector('.title').value, document.querySelector('.description').value, currentProject, 'incomplete', document.querySelector('.dueDate').value, document.querySelector('.priority').value);

  if (project[currentProject]) {
    project[currentProject].push(todo);
  } else {
    project[currentProject] = [];
    project[currentProject].push(todo);
  } // create DOM and behavior


  _DOM_js__WEBPACK_IMPORTED_MODULE_1__.createDOM.item(todo, project, currentProject, project[currentProject].length - 1);
  saveToLocalStorage();
}); // Edit Project Button

document.querySelector('.projectEditSubmit').addEventListener('click', function (e) {
  e.preventDefault();
  projectList[currentProject] = document.querySelector('.projectEditInput').value;
  _DOM_js__WEBPACK_IMPORTED_MODULE_1__.createDOM.projectEdit(projectList, currentProject);
  saveToLocalStorage();
  projectButton();
}); // Delete Project Button

var deleteProject = document.querySelector('.deleteProject');
deleteProject.addEventListener('click', function () {
  // Remove DOM
  var _projectList = document.querySelector('.projectList');

  _projectList.removeChild(document.querySelector(".projects".concat(currentProject))); // Remove object from projectList array
  // projectList.splice(currentProject,1);


  projectList[currentProject] = ''; // Remove object from todoList
  // project.splice(currentProject,1);

  project[currentProject] = ''; // clear the main panel

  while (todoList.firstChild) {
    todoList.firstChild.remove();
  }

  saveToLocalStorage();
  projectButton();
}); // Edit Item Button

var itemEditSubmit = document.querySelector('.itemEditSubmit');
itemEditSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  project[currentProject][_DOM_js__WEBPACK_IMPORTED_MODULE_1__.currentItem].title = document.querySelector('.titleEdit').value;
  project[currentProject][_DOM_js__WEBPACK_IMPORTED_MODULE_1__.currentItem].description = document.querySelector('.descriptionEdit').value;
  project[currentProject][_DOM_js__WEBPACK_IMPORTED_MODULE_1__.currentItem].dueDate = document.querySelector('.dueDateEdit').value;
  project[currentProject][_DOM_js__WEBPACK_IMPORTED_MODULE_1__.currentItem].priority = document.querySelector('.priorityEdit').value; // clear the main panel

  while (todoList.firstChild) {
    todoList.firstChild.remove();
  }

  for (var eachTodo = 0; eachTodo < project[currentProject].length; eachTodo++) {
    if (project[currentProject][eachTodo]) {
      _DOM_js__WEBPACK_IMPORTED_MODULE_1__.createDOM.item(project[currentProject][eachTodo], project, currentProject, eachTodo);
    }
  }

  saveToLocalStorage();
  _DOM_js__WEBPACK_IMPORTED_MODULE_1__.popupClose.itemEdit();
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n    font-family: helvetica;\n    /* box-sizing: border-box; */\n    /* list-style: none; */\n    /* text-decoration: none; */\n}\n\nbody{\n    background-color: white;\n}\n\n.header{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100px;\n    background-color: #ff5e5b;\n    padding-left: 50px;\n}\n\n.dashboard{\n    display: flex;\n}\n\n    .sidePanel{\n        width: 20%;\n        height: 650px;\n        background-color: #d8d8d8;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n        .projectList, .todoList{\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n        \n        .project{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 240px;\n            font-size: 15px;\n        }\n\n        .project:hover{\n            background-color: #00cecb;\n            opacity: 0.8;\n        }\n\n        .project:active, .project:focus, .pressed{\n            background-color: #00cecb;\n            opacity: 1;\n        }\n\n        .createProject, .editProject, .createTodo, .deleteProject{\n            width: 150px;\n            border: none;\n            border-radius: 20px;\n            font-size: 16px;\n            background-color: #ffed66;\n            padding: 10px;\n        }\n\n        .deleteProject{\n            background-color: red;\n            opacity: 0.8;\n        }\n\n        .createProject:hover, .editProject:hover, .createTodo:hover, .deleteProject:hover{\n            background-color: #ffb238;\n            opacity: 0.9;\n        }\n\n        .createProject:active,.editProject:active, .createTodo:active, .deleteProject:active{\n            background-color: #ff773d;\n        }\n\n    .mainPanel{\n        width: 80%;\n        height: 650px;\n        background-color: white;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .buttonBar{\n        width: 1000px;\n        display: flex;\n        justify-content: flex-end;\n    }\n    \n    .todoContainer{\n        display: flex;\n        gap: 5px;\n    }\n\n        .todoItems{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 800px;\n            font-size: 15px;\n        }\n\n        .todoItemsComplete{\n            text-decoration: line-through;\n        }\n\n        .todoEditButton, .todoDeleteButton, .todoInfoButton{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n        .todoDeleteButton{\n        }\n\n        .todoInfoButton{\n        }\n\n/* Project and Item Popup */\n.projectPopup{\n    display: none;\n}\n\n.projectEditPopup, .itemEditPopup, .infoPopup{\n    display: none;\n    background-color: #ffb238;\n    border-radius: 20px;\n    width: 400px;\n    padding: 40px;\n    /* place it dead center in the window*/\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.itemPopup{\n    display: none;\n}\n\n    .projectForm{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .projectEditForm, .itemEditForm, .infoForm{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .projectInput{\n        border: none;\n        border-radius: 10px;\n        background-color: #efefef;\n        height: 50px;\n        width: 225px;\n        font-size: 15px;\n        padding-left: 15px;\n    }\n\n    .projectSubmit, .projectCancel, .projectEditSubmit, .projectEditCancel, .closeButton{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 30px;\n        width: 200px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .itemSubmit, .itemCancel, .itemEditSubmit, .itemEditCancel{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 40px;\n        width: 100px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .projectCancel, .itemCancel, .projectEditCancel, .itemEditCancel, .closeButton{\n        background-color: #f55536;\n    }\n\n    .projectSubmit:hover, .projectCancel:hover, .itemSubmit:hover, .itemCancel:hover, .projectEditSubmit:hover, .projectEditCancel:hover, .itemEditSubmit:hover, .itemEditCancel:hover, .closeButton:hover{\n        opacity:1;\n    }", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;IACtB,4BAA4B;IAC5B,sBAAsB;IACtB,2BAA2B;AAC/B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,aAAa;IACb,yBAAyB;IACzB,kBAAkB;AACtB;;AAEA;IACI,aAAa;AACjB;;IAEI;QACI,UAAU;QACV,aAAa;QACb,yBAAyB;QACzB,eAAe;QACf,iBAAiB;QACjB,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;QAEI;YACI,aAAa;YACb,sBAAsB;YACtB,SAAS;QACb;;QAEA;YACI,YAAY;YACZ,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,YAAY;YACZ,eAAe;QACnB;;QAEA;YACI,yBAAyB;YACzB,YAAY;QAChB;;QAEA;YACI,yBAAyB;YACzB,UAAU;QACd;;QAEA;YACI,YAAY;YACZ,YAAY;YACZ,mBAAmB;YACnB,eAAe;YACf,yBAAyB;YACzB,aAAa;QACjB;;QAEA;YACI,qBAAqB;YACrB,YAAY;QAChB;;QAEA;YACI,yBAAyB;YACzB,YAAY;QAChB;;QAEA;YACI,yBAAyB;QAC7B;;IAEJ;QACI,UAAU;QACV,aAAa;QACb,uBAAuB;QACvB,eAAe;QACf,iBAAiB;QACjB,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;IAEA;QACI,aAAa;QACb,aAAa;QACb,yBAAyB;IAC7B;;IAEA;QACI,aAAa;QACb,QAAQ;IACZ;;QAEI;YACI,YAAY;YACZ,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,YAAY;YACZ,eAAe;QACnB;;QAEA;YACI,6BAA6B;QACjC;;QAEA;YACI,YAAY;YACZ,mBAAmB;YACnB,yBAAyB;YACzB,YAAY;YACZ,WAAW;YACX,eAAe;QACnB;;QAEA;QACA;;QAEA;QACA;;AAER,2BAA2B;AAC3B;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,yBAAyB;IACzB,mBAAmB;IACnB,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,eAAe;IACf,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;;IAEI;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;IAEA;QACI,aAAa;QACb,sBAAsB;QACtB,mBAAmB;QACnB,SAAS;IACb;;IAEA;QACI,YAAY;QACZ,mBAAmB;QACnB,yBAAyB;QACzB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,kBAAkB;IACtB;;IAEA;QACI,YAAY;QACZ,mBAAmB;QACnB,yBAAyB;QACzB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,YAAY;QACZ,mBAAmB;QACnB,yBAAyB;QACzB,YAAY;QACZ,YAAY;QACZ,eAAe;QACf,YAAY;IAChB;;IAEA;QACI,yBAAyB;IAC7B;;IAEA;QACI,SAAS;IACb","sourcesContent":["*, *::before, *::after{\n    margin: 0;\n    padding: 0;\n    font-family: helvetica;\n    /* box-sizing: border-box; */\n    /* list-style: none; */\n    /* text-decoration: none; */\n}\n\nbody{\n    background-color: white;\n}\n\n.header{\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    height: 100px;\n    background-color: #ff5e5b;\n    padding-left: 50px;\n}\n\n.dashboard{\n    display: flex;\n}\n\n    .sidePanel{\n        width: 20%;\n        height: 650px;\n        background-color: #d8d8d8;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n        .projectList, .todoList{\n            display: flex;\n            flex-direction: column;\n            gap: 10px;\n        }\n        \n        .project{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 240px;\n            font-size: 15px;\n        }\n\n        .project:hover{\n            background-color: #00cecb;\n            opacity: 0.8;\n        }\n\n        .project:active, .project:focus, .pressed{\n            background-color: #00cecb;\n            opacity: 1;\n        }\n\n        .createProject, .editProject, .createTodo, .deleteProject{\n            width: 150px;\n            border: none;\n            border-radius: 20px;\n            font-size: 16px;\n            background-color: #ffed66;\n            padding: 10px;\n        }\n\n        .deleteProject{\n            background-color: red;\n            opacity: 0.8;\n        }\n\n        .createProject:hover, .editProject:hover, .createTodo:hover, .deleteProject:hover{\n            background-color: #ffb238;\n            opacity: 0.9;\n        }\n\n        .createProject:active,.editProject:active, .createTodo:active, .deleteProject:active{\n            background-color: #ff773d;\n        }\n\n    .mainPanel{\n        width: 80%;\n        height: 650px;\n        background-color: white;\n        font-size: 20px;\n        padding-top: 10px;\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .buttonBar{\n        width: 1000px;\n        display: flex;\n        justify-content: flex-end;\n    }\n    \n    .todoContainer{\n        display: flex;\n        gap: 5px;\n    }\n\n        .todoItems{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 800px;\n            font-size: 15px;\n        }\n\n        .todoItemsComplete{\n            text-decoration: line-through;\n        }\n\n        .todoEditButton, .todoDeleteButton, .todoInfoButton{\n            border: none;\n            border-radius: 10px;\n            background-color: #efefef;\n            height: 50px;\n            width: 50px;\n            font-size: 15px;\n        }\n\n        .todoDeleteButton{\n        }\n\n        .todoInfoButton{\n        }\n\n/* Project and Item Popup */\n.projectPopup{\n    display: none;\n}\n\n.projectEditPopup, .itemEditPopup, .infoPopup{\n    display: none;\n    background-color: #ffb238;\n    border-radius: 20px;\n    width: 400px;\n    padding: 40px;\n    /* place it dead center in the window*/\n    position: fixed;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n}\n\n.itemPopup{\n    display: none;\n}\n\n    .projectForm{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .projectEditForm, .itemEditForm, .infoForm{\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        gap: 10px;\n    }\n\n    .projectInput{\n        border: none;\n        border-radius: 10px;\n        background-color: #efefef;\n        height: 50px;\n        width: 225px;\n        font-size: 15px;\n        padding-left: 15px;\n    }\n\n    .projectSubmit, .projectCancel, .projectEditSubmit, .projectEditCancel, .closeButton{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 30px;\n        width: 200px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .itemSubmit, .itemCancel, .itemEditSubmit, .itemEditCancel{\n        border: none;\n        border-radius: 10px;\n        background-color: #20a39e;\n        height: 40px;\n        width: 100px;\n        font-size: 15px;\n        opacity: 0.8;\n    }\n\n    .projectCancel, .itemCancel, .projectEditCancel, .itemEditCancel, .closeButton{\n        background-color: #f55536;\n    }\n\n    .projectSubmit:hover, .projectCancel:hover, .itemSubmit:hover, .itemCancel:hover, .projectEditSubmit:hover, .projectEditCancel:hover, .itemEditSubmit:hover, .itemEditCancel:hover, .closeButton:hover{\n        opacity:1;\n    }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  var sign = number < 0 ? '-' : '';
  var output = Math.abs(number).toString();

  while (output.length < targetLength) {
    output = '0' + output;
  }

  return sign + output;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/formatters/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/formatters/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../_lib/getUTCDayOfYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js");
/* harmony import */ var _lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js");
/* harmony import */ var _lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_lib/getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_lib/getUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js");
/* harmony import */ var _lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");
/* harmony import */ var _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lightFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js");







var dayPeriodEnum = {
  am: 'am',
  pm: 'pm',
  midnight: 'midnight',
  noon: 'noon',
  morning: 'morning',
  afternoon: 'afternoon',
  evening: 'evening',
  night: 'night'
};
/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

var formatters = {
  // Era
  G: function (date, token, localize) {
    var era = date.getUTCFullYear() > 0 ? 1 : 0;

    switch (token) {
      // AD, BC
      case 'G':
      case 'GG':
      case 'GGG':
        return localize.era(era, {
          width: 'abbreviated'
        });
      // A, B

      case 'GGGGG':
        return localize.era(era, {
          width: 'narrow'
        });
      // Anno Domini, Before Christ

      case 'GGGG':
      default:
        return localize.era(era, {
          width: 'wide'
        });
    }
  },
  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === 'yo') {
      var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

      var year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, {
        unit: 'year'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].y(date, token);
  },
  // Local week-numbering year
  Y: function (date, token, localize, options) {
    var signedWeekYear = (0,_lib_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(date, options); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear; // Two digit year

    if (token === 'YY') {
      var twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(twoDigitYear, 2);
    } // Ordinal number


    if (token === 'Yo') {
      return localize.ordinalNumber(weekYear, {
        unit: 'year'
      });
    } // Padding


    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(weekYear, token.length);
  },
  // ISO week-numbering year
  R: function (date, token) {
    var isoWeekYear = (0,_lib_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date); // Padding

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeekYear, token.length);
  },
  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    var year = date.getUTCFullYear();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(year, token.length);
  },
  // Quarter
  Q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'Q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'QQ':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'Qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'QQQ':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'QQQQQ':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'formatting'
        });
      // 1st quarter, 2nd quarter, ...

      case 'QQQQ':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone quarter
  q: function (date, token, localize) {
    var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);

    switch (token) {
      // 1, 2, 3, 4
      case 'q':
        return String(quarter);
      // 01, 02, 03, 04

      case 'qq':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(quarter, 2);
      // 1st, 2nd, 3rd, 4th

      case 'qo':
        return localize.ordinalNumber(quarter, {
          unit: 'quarter'
        });
      // Q1, Q2, Q3, Q4

      case 'qqq':
        return localize.quarter(quarter, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)

      case 'qqqqq':
        return localize.quarter(quarter, {
          width: 'narrow',
          context: 'standalone'
        });
      // 1st quarter, 2nd quarter, ...

      case 'qqqq':
      default:
        return localize.quarter(quarter, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Month
  M: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      case 'M':
      case 'MM':
        return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].M(date, token);
      // 1st, 2nd, ..., 12th

      case 'Mo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'MMM':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // J, F, ..., D

      case 'MMMMM':
        return localize.month(month, {
          width: 'narrow',
          context: 'formatting'
        });
      // January, February, ..., December

      case 'MMMM':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone month
  L: function (date, token, localize) {
    var month = date.getUTCMonth();

    switch (token) {
      // 1, 2, ..., 12
      case 'L':
        return String(month + 1);
      // 01, 02, ..., 12

      case 'LL':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(month + 1, 2);
      // 1st, 2nd, ..., 12th

      case 'Lo':
        return localize.ordinalNumber(month + 1, {
          unit: 'month'
        });
      // Jan, Feb, ..., Dec

      case 'LLL':
        return localize.month(month, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // J, F, ..., D

      case 'LLLLL':
        return localize.month(month, {
          width: 'narrow',
          context: 'standalone'
        });
      // January, February, ..., December

      case 'LLLL':
      default:
        return localize.month(month, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // Local week of year
  w: function (date, token, localize, options) {
    var week = (0,_lib_getUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(date, options);

    if (token === 'wo') {
      return localize.ordinalNumber(week, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(week, token.length);
  },
  // ISO week of year
  I: function (date, token, localize) {
    var isoWeek = (0,_lib_getUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(date);

    if (token === 'Io') {
      return localize.ordinalNumber(isoWeek, {
        unit: 'week'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoWeek, token.length);
  },
  // Day of the month
  d: function (date, token, localize) {
    if (token === 'do') {
      return localize.ordinalNumber(date.getUTCDate(), {
        unit: 'date'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].d(date, token);
  },
  // Day of year
  D: function (date, token, localize) {
    var dayOfYear = (0,_lib_getUTCDayOfYear_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(date);

    if (token === 'Do') {
      return localize.ordinalNumber(dayOfYear, {
        unit: 'dayOfYear'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dayOfYear, token.length);
  },
  // Day of week
  E: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();

    switch (token) {
      // Tue
      case 'E':
      case 'EE':
      case 'EEE':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'EEEEE':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'EEEEEE':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'EEEE':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Local day of week
  e: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case 'e':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'ee':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th

      case 'eo':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'eee':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'eeeee':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'eeeeee':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'eeee':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    var dayOfWeek = date.getUTCDay();
    var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;

    switch (token) {
      // Numerical value (same as in `e`)
      case 'c':
        return String(localDayOfWeek);
      // Padded numerical value

      case 'cc':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th

      case 'co':
        return localize.ordinalNumber(localDayOfWeek, {
          unit: 'day'
        });

      case 'ccc':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'standalone'
        });
      // T

      case 'ccccc':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'standalone'
        });
      // Tu

      case 'cccccc':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'standalone'
        });
      // Tuesday

      case 'cccc':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'standalone'
        });
    }
  },
  // ISO day of week
  i: function (date, token, localize) {
    var dayOfWeek = date.getUTCDay();
    var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;

    switch (token) {
      // 2
      case 'i':
        return String(isoDayOfWeek);
      // 02

      case 'ii':
        return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(isoDayOfWeek, token.length);
      // 2nd

      case 'io':
        return localize.ordinalNumber(isoDayOfWeek, {
          unit: 'day'
        });
      // Tue

      case 'iii':
        return localize.day(dayOfWeek, {
          width: 'abbreviated',
          context: 'formatting'
        });
      // T

      case 'iiiii':
        return localize.day(dayOfWeek, {
          width: 'narrow',
          context: 'formatting'
        });
      // Tu

      case 'iiiiii':
        return localize.day(dayOfWeek, {
          width: 'short',
          context: 'formatting'
        });
      // Tuesday

      case 'iiii':
      default:
        return localize.day(dayOfWeek, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM or PM
  a: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'aaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'aaaaa':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'aaaa':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? 'pm' : 'am';
    }

    switch (token) {
      case 'b':
      case 'bb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'bbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        }).toLowerCase();

      case 'bbbbb':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'bbbb':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    var hours = date.getUTCHours();
    var dayPeriodEnumValue;

    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case 'B':
      case 'BB':
      case 'BBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'abbreviated',
          context: 'formatting'
        });

      case 'BBBBB':
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'narrow',
          context: 'formatting'
        });

      case 'BBBB':
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: 'wide',
          context: 'formatting'
        });
    }
  },
  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === 'ho') {
      var hours = date.getUTCHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].h(date, token);
  },
  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === 'Ho') {
      return localize.ordinalNumber(date.getUTCHours(), {
        unit: 'hour'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].H(date, token);
  },
  // Hour [0-11]
  K: function (date, token, localize) {
    var hours = date.getUTCHours() % 12;

    if (token === 'Ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Hour [1-24]
  k: function (date, token, localize) {
    var hours = date.getUTCHours();
    if (hours === 0) hours = 24;

    if (token === 'ko') {
      return localize.ordinalNumber(hours, {
        unit: 'hour'
      });
    }

    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(hours, token.length);
  },
  // Minute
  m: function (date, token, localize) {
    if (token === 'mo') {
      return localize.ordinalNumber(date.getUTCMinutes(), {
        unit: 'minute'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].m(date, token);
  },
  // Second
  s: function (date, token, localize) {
    if (token === 'so') {
      return localize.ordinalNumber(date.getUTCSeconds(), {
        unit: 'second'
      });
    }

    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].s(date, token);
  },
  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_index_js__WEBPACK_IMPORTED_MODULE_0__["default"].S(date, token);
  },
  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return 'Z';
    }

    switch (token) {
      // Hours and optional minutes
      case 'X':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`

      case 'XXXX':
      case 'XX':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`

      case 'XXXXX':
      case 'XXX': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case 'x':
        return formatTimezoneWithOptionalMinutes(timezoneOffset);
      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`

      case 'xxxx':
      case 'xx':
        // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);
      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`

      case 'xxxxx':
      case 'xxx': // Hours and minutes with `:` delimiter

      default:
        return formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (GMT)
  O: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'O':
      case 'OO':
      case 'OOO':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'OOOO':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Timezone (specific non-location)
  z: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timezoneOffset = originalDate.getTimezoneOffset();

    switch (token) {
      // Short
      case 'z':
      case 'zz':
      case 'zzz':
        return 'GMT' + formatTimezoneShort(timezoneOffset, ':');
      // Long

      case 'zzzz':
      default:
        return 'GMT' + formatTimezone(timezoneOffset, ':');
    }
  },
  // Seconds timestamp
  t: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = Math.floor(originalDate.getTime() / 1000);
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  },
  // Milliseconds timestamp
  T: function (date, token, _localize, options) {
    var originalDate = options._originalDate || date;
    var timestamp = originalDate.getTime();
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(timestamp, token.length);
  }
};

function formatTimezoneShort(offset, dirtyDelimiter) {
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = Math.floor(absOffset / 60);
  var minutes = absOffset % 60;

  if (minutes === 0) {
    return sign + String(hours);
  }

  var delimiter = dirtyDelimiter || '';
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
  if (offset % 60 === 0) {
    var sign = offset > 0 ? '-' : '+';
    return sign + (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.abs(offset) / 60, 2);
  }

  return formatTimezone(offset, dirtyDelimiter);
}

function formatTimezone(offset, dirtyDelimiter) {
  var delimiter = dirtyDelimiter || '';
  var sign = offset > 0 ? '-' : '+';
  var absOffset = Math.abs(offset);
  var hours = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(Math.floor(absOffset / 60), 2);
  var minutes = (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/lightFormatters/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../addLeadingZeros/index.js */ "./node_modules/date-fns/esm/_lib/addLeadingZeros/index.js");

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

var formatters = {
  // Year
  y: function (date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
    var signedYear = date.getUTCFullYear(); // Returns 1 for 1 BC (which is year 0 in JavaScript)

    var year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(token === 'yy' ? year % 100 : year, token.length);
  },
  // Month
  M: function (date, token) {
    var month = date.getUTCMonth();
    return token === 'M' ? String(month + 1) : (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(month + 1, 2);
  },
  // Day of the month
  d: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCDate(), token.length);
  },
  // AM or PM
  a: function (date, token) {
    var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? 'pm' : 'am';

    switch (token) {
      case 'a':
      case 'aa':
        return dayPeriodEnumValue.toUpperCase();

      case 'aaa':
        return dayPeriodEnumValue;

      case 'aaaaa':
        return dayPeriodEnumValue[0];

      case 'aaaa':
      default:
        return dayPeriodEnumValue === 'am' ? 'a.m.' : 'p.m.';
    }
  },
  // Hour [1-12]
  h: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours() % 12 || 12, token.length);
  },
  // Hour [0-23]
  H: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCHours(), token.length);
  },
  // Minute
  m: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCMinutes(), token.length);
  },
  // Second
  s: function (date, token) {
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(date.getUTCSeconds(), token.length);
  },
  // Fraction of second
  S: function (date, token) {
    var numberOfDigits = token.length;
    var milliseconds = date.getUTCMilliseconds();
    var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
    return (0,_addLeadingZeros_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(fractionalSeconds, token.length);
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/format/longFormatters/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function dateLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'P':
      return formatLong.date({
        width: 'short'
      });

    case 'PP':
      return formatLong.date({
        width: 'medium'
      });

    case 'PPP':
      return formatLong.date({
        width: 'long'
      });

    case 'PPPP':
    default:
      return formatLong.date({
        width: 'full'
      });
  }
}

function timeLongFormatter(pattern, formatLong) {
  switch (pattern) {
    case 'p':
      return formatLong.time({
        width: 'short'
      });

    case 'pp':
      return formatLong.time({
        width: 'medium'
      });

    case 'ppp':
      return formatLong.time({
        width: 'long'
      });

    case 'pppp':
    default:
      return formatLong.time({
        width: 'full'
      });
  }
}

function dateTimeLongFormatter(pattern, formatLong) {
  var matchResult = pattern.match(/(P+)(p+)?/) || [];
  var datePattern = matchResult[1];
  var timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  var dateTimeFormat;

  switch (datePattern) {
    case 'P':
      dateTimeFormat = formatLong.dateTime({
        width: 'short'
      });
      break;

    case 'PP':
      dateTimeFormat = formatLong.dateTime({
        width: 'medium'
      });
      break;

    case 'PPP':
      dateTimeFormat = formatLong.dateTime({
        width: 'long'
      });
      break;

    case 'PPPP':
    default:
      dateTimeFormat = formatLong.dateTime({
        width: 'full'
      });
      break;
  }

  return dateTimeFormat.replace('{{date}}', dateLongFormatter(datePattern, formatLong)).replace('{{time}}', timeLongFormatter(timePattern, formatLong));
}

var longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (longFormatters);

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCDayOfYear/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCDayOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


var MILLISECONDS_IN_DAY = 86400000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCDayOfYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var timestamp = date.getTime();
  date.setUTCMonth(0, 1);
  date.setUTCHours(0, 0, 0, 0);
  var startOfYearTimestamp = date.getTime();
  var difference = timestamp - startOfYearTimestamp;
  return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeek/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date).getTime() - (0,_startOfUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var fourthOfJanuaryOfNextYear = new Date(0);
  fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfNextYear);
  var fourthOfJanuaryOfThisYear = new Date(0);
  fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuaryOfThisYear);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeek/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeek/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");




var MILLISECONDS_IN_WEEK = 604800000; // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeek(dirtyDate, options) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var diff = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(date, options).getTime() - (0,_startOfUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(date, options).getTime(); // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)

  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function getUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var year = date.getUTCFullYear();
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var firstWeekOfNextYear = new Date(0);
  firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
  var startOfNextYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfNextYear, dirtyOptions);
  var firstWeekOfThisYear = new Date(0);
  firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
  var startOfThisYear = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeekOfThisYear, dirtyOptions);

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/protectedTokens/index.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isProtectedDayOfYearToken": () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   "isProtectedWeekYearToken": () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   "throwProtectedError": () => (/* binding */ throwProtectedError)
/* harmony export */ });
var protectedDayOfYearTokens = ['D', 'DD'];
var protectedWeekYearTokens = ['YY', 'YYYY'];
function isProtectedDayOfYearToken(token) {
  return protectedDayOfYearTokens.indexOf(token) !== -1;
}
function isProtectedWeekYearToken(token) {
  return protectedWeekYearTokens.indexOf(token) !== -1;
}
function throwProtectedError(token, format, input) {
  if (token === 'YYYY') {
    throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'YY') {
    throw new RangeError("Use `yy` instead of `YY` (in `".concat(format, "`) for formatting years to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'D') {
    throw new RangeError("Use `d` instead of `D` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  } else if (token === 'DD') {
    throw new RangeError("Use `dd` instead of `DD` (in `".concat(format, "`) for formatting days of the month to the input `").concat(input, "`; see: https://git.io/fxCyr"));
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeek(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var weekStartsOn = 1;
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCISOWeekYear/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../getUTCISOWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCISOWeekYear/index.js");
/* harmony import */ var _startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../startOfUTCISOWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCISOWeek/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCISOWeekYear(dirtyDate) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var year = (0,_getUTCISOWeekYear_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var fourthOfJanuary = new Date(0);
  fourthOfJanuary.setUTCFullYear(year, 0, 4);
  fourthOfJanuary.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCISOWeek_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(fourthOfJanuary);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");


 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeek(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeWeekStartsOn = locale && locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  var day = date.getUTCDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setUTCDate(date.getUTCDate() - diff);
  date.setUTCHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/startOfUTCWeekYear/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfUTCWeekYear)
/* harmony export */ });
/* harmony import */ var _getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../getUTCWeekYear/index.js */ "./node_modules/date-fns/esm/_lib/getUTCWeekYear/index.js");
/* harmony import */ var _requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../startOfUTCWeek/index.js */ "./node_modules/date-fns/esm/_lib/startOfUTCWeek/index.js");
/* harmony import */ var _toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");



 // This function will be a part of public API when UTC function will be implemented.
// See issue: https://github.com/date-fns/date-fns/issues/376

function startOfUTCWeekYear(dirtyDate, dirtyOptions) {
  (0,_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var options = dirtyOptions || {};
  var locale = options.locale;
  var localeFirstWeekContainsDate = locale && locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(options.firstWeekContainsDate);
  var year = (0,_getUTCWeekYear_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, dirtyOptions);
  var firstWeek = new Date(0);
  firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setUTCHours(0, 0, 0, 0);
  var date = (0,_startOfUTCWeek_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(firstWeek, dirtyOptions);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }

  var number = Number(dirtyNumber);

  if (isNaN(number)) {
    return number;
  }

  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/addMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addMilliseconds
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds added
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * const result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */

function addMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var timestamp = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate).getTime();
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  return new Date(timestamp + amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/format/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/format/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _isValid_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../isValid/index.js */ "./node_modules/date-fns/esm/isValid/index.js");
/* harmony import */ var _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../locale/en-US/index.js */ "./node_modules/date-fns/esm/locale/en-US/index.js");
/* harmony import */ var _subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../subMilliseconds/index.js */ "./node_modules/date-fns/esm/subMilliseconds/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../_lib/format/formatters/index.js */ "./node_modules/date-fns/esm/_lib/format/formatters/index.js");
/* harmony import */ var _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_lib/format/longFormatters/index.js */ "./node_modules/date-fns/esm/_lib/format/longFormatters/index.js");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_lib/getTimezoneOffsetInMilliseconds/index.js */ "./node_modules/date-fns/esm/_lib/getTimezoneOffsetInMilliseconds/index.js");
/* harmony import */ var _lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_lib/protectedTokens/index.js */ "./node_modules/date-fns/esm/_lib/protectedTokens/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");









 // This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps

var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g; // This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`

var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
var escapedStringRegExp = /^'([^]*?)'?$/;
var doubleQuoteRegExp = /''/g;
var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
/**
 * @name format
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://git.io/fxCyr
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear]{@link https://date-fns.org/docs/getISOWeekYear}
 *    and [getWeekYear]{@link https://date-fns.org/docs/getWeekYear}).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://git.io/fxCyr
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://git.io/fxCyr
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - The second argument is now required for the sake of explicitness.
 *
 *   ```javascript
 *   // Before v2.0.0
 *   format(new Date(2016, 0, 1))
 *
 *   // v2.0.0 onward
 *   format(new Date(2016, 0, 1), "yyyy-MM-dd'T'HH:mm:ss.SSSxxx")
 *   ```
 *
 * - New format string API for `format` function
 *   which is based on [Unicode Technical Standard #35](https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table).
 *   See [this post](https://blog.date-fns.org/post/unicode-tokens-in-date-fns-v2-sreatyki91jg) for more details.
 *
 * - Characters are now escaped using single quote symbols (`'`) instead of square brackets.
 *
 * @param {Date|Number} date - the original date
 * @param {String} format - the string of tokens
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @param {Number} [options.firstWeekContainsDate=1] - the day of January, which is
 * @param {Boolean} [options.useAdditionalWeekYearTokens=false] - if true, allows usage of the week-numbering year tokens `YY` and `YYYY`;
 *   see: https://git.io/fxCyr
 * @param {Boolean} [options.useAdditionalDayOfYearTokens=false] - if true, allows usage of the day of year tokens `D` and `DD`;
 *   see: https://git.io/fxCyr
 * @returns {String} the formatted date string
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `date` must not be Invalid Date
 * @throws {RangeError} `options.locale` must contain `localize` property
 * @throws {RangeError} `options.locale` must contain `formatLong` property
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 * @throws {RangeError} `options.firstWeekContainsDate` must be between 1 and 7
 * @throws {RangeError} use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://git.io/fxCyr
 * @throws {RangeError} format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * var result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * var result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */

function format(dirtyDate, dirtyFormatStr, dirtyOptions) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var formatStr = String(dirtyFormatStr);
  var options = dirtyOptions || {};
  var locale = options.locale || _locale_en_US_index_js__WEBPACK_IMPORTED_MODULE_1__["default"];
  var localeFirstWeekContainsDate = locale.options && locale.options.firstWeekContainsDate;
  var defaultFirstWeekContainsDate = localeFirstWeekContainsDate == null ? 1 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeFirstWeekContainsDate);
  var firstWeekContainsDate = options.firstWeekContainsDate == null ? defaultFirstWeekContainsDate : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.firstWeekContainsDate); // Test if weekStartsOn is between 1 and 7 _and_ is not NaN

  if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
    throw new RangeError('firstWeekContainsDate must be between 1 and 7 inclusively');
  }

  var localeWeekStartsOn = locale.options && locale.options.weekStartsOn;
  var defaultWeekStartsOn = localeWeekStartsOn == null ? 0 : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(localeWeekStartsOn);
  var weekStartsOn = options.weekStartsOn == null ? defaultWeekStartsOn : (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(options.weekStartsOn); // Test if weekStartsOn is between 0 and 6 _and_ is not NaN

  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }

  if (!locale.localize) {
    throw new RangeError('locale must contain localize property');
  }

  if (!locale.formatLong) {
    throw new RangeError('locale must contain formatLong property');
  }

  var originalDate = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);

  if (!(0,_isValid_index_js__WEBPACK_IMPORTED_MODULE_4__["default"])(originalDate)) {
    throw new RangeError('Invalid time value');
  } // Convert the date in system timezone to the same date in UTC+00:00 timezone.
  // This ensures that when UTC functions will be implemented, locales will be compatible with them.
  // See an issue about UTC functions: https://github.com/date-fns/date-fns/issues/376


  var timezoneOffset = (0,_lib_getTimezoneOffsetInMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_5__["default"])(originalDate);
  var utcDate = (0,_subMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_6__["default"])(originalDate, timezoneOffset);
  var formatterOptions = {
    firstWeekContainsDate: firstWeekContainsDate,
    weekStartsOn: weekStartsOn,
    locale: locale,
    _originalDate: originalDate
  };
  var result = formatStr.match(longFormattingTokensRegExp).map(function (substring) {
    var firstCharacter = substring[0];

    if (firstCharacter === 'p' || firstCharacter === 'P') {
      var longFormatter = _lib_format_longFormatters_index_js__WEBPACK_IMPORTED_MODULE_7__["default"][firstCharacter];
      return longFormatter(substring, locale.formatLong, formatterOptions);
    }

    return substring;
  }).join('').match(formattingTokensRegExp).map(function (substring) {
    // Replace two single quote characters with one single quote character
    if (substring === "''") {
      return "'";
    }

    var firstCharacter = substring[0];

    if (firstCharacter === "'") {
      return cleanEscapedString(substring);
    }

    var formatter = _lib_format_formatters_index_js__WEBPACK_IMPORTED_MODULE_8__["default"][firstCharacter];

    if (formatter) {
      if (!options.useAdditionalWeekYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedWeekYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      if (!options.useAdditionalDayOfYearTokens && (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.isProtectedDayOfYearToken)(substring)) {
        (0,_lib_protectedTokens_index_js__WEBPACK_IMPORTED_MODULE_9__.throwProtectedError)(substring, dirtyFormatStr, dirtyDate);
      }

      return formatter(utcDate, substring, locale.localize, formatterOptions);
    }

    if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
      throw new RangeError('Format string contains an unescaped latin alphabet character `' + firstCharacter + '`');
    }

    return substring;
  }).join('');
  return result;
}

function cleanEscapedString(input) {
  return input.match(escapedStringRegExp)[1].replace(doubleQuoteRegExp, "'");
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/isDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {*} value - the value to check
 * @returns {boolean} true if the given value is a date
 * @throws {TypeError} 1 arguments required
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */

function isDate(value) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return value instanceof Date || typeof value === 'object' && Object.prototype.toString.call(value) === '[object Date]';
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isValid/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isValid/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isDate/index.js */ "./node_modules/date-fns/esm/isDate/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate]{@link https://date-fns.org/docs/toDate}
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * - Now `isValid` doesn't throw an exception
 *   if the first argument is not an instance of Date.
 *   Instead, argument is converted beforehand using `toDate`.
 *
 *   Examples:
 *
 *   | `isValid` argument        | Before v2.0.0 | v2.0.0 onward |
 *   |---------------------------|---------------|---------------|
 *   | `new Date()`              | `true`        | `true`        |
 *   | `new Date('2016-01-01')`  | `true`        | `true`        |
 *   | `new Date('')`            | `false`       | `false`       |
 *   | `new Date(1488370835081)` | `true`        | `true`        |
 *   | `new Date(NaN)`           | `false`       | `false`       |
 *   | `'2016-01-01'`            | `TypeError`   | `false`       |
 *   | `''`                      | `TypeError`   | `false`       |
 *   | `1488370835081`           | `TypeError`   | `true`        |
 *   | `NaN`                     | `TypeError`   | `false`       |
 *
 *   We introduce this change to make *date-fns* consistent with ECMAScript behavior
 *   that try to coerce arguments to the expected type
 *   (which is also the case with other *date-fns* functions).
 *
 * @param {*} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */

function isValid(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);

  if (!(0,_isDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate) && typeof dirtyDate !== 'number') {
    return false;
  }

  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate);
  return !isNaN(Number(date));
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js":
/*!**************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return function () {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    // TODO: Remove String()
    var width = options.width ? String(options.width) : args.defaultWidth;
    var format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
function buildLocalizeFn(args) {
  return function (dirtyIndex, dirtyOptions) {
    var options = dirtyOptions || {};
    var context = options.context ? String(options.context) : 'standalone';
    var valuesArray;

    if (context === 'formatting' && args.formattingValues) {
      var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      var width = options.width ? String(options.width) : defaultWidth;
      valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      var _defaultWidth = args.defaultWidth;

      var _width = options.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[_width] || args.values[_defaultWidth];
    }

    var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex; // @ts-ignore: For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!

    return valuesArray[index];
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js":
/*!*********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var width = options.width;
    var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
    var matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }

    var matchedString = matchResult[0];
    var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
    var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    }) : findKey(parsePatterns, function (pattern) {
      return pattern.test(matchedString);
    });
    var value;
    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

function findKey(object, predicate) {
  for (var key in object) {
    if (object.hasOwnProperty(key) && predicate(object[key])) {
      return key;
    }
  }

  return undefined;
}

function findIndex(array, predicate) {
  for (var key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }

  return undefined;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js":
/*!****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return function (string) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    var matchedString = matchResult[0];
    var parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
    value = options.valueCallback ? options.valueCallback(value) : value;
    var rest = string.slice(matchedString.length);
    return {
      value: value,
      rest: rest
    };
  };
}

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than {{count}} seconds'
  },
  xSeconds: {
    one: '1 second',
    other: '{{count}} seconds'
  },
  halfAMinute: 'half a minute',
  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than {{count}} minutes'
  },
  xMinutes: {
    one: '1 minute',
    other: '{{count}} minutes'
  },
  aboutXHours: {
    one: 'about 1 hour',
    other: 'about {{count}} hours'
  },
  xHours: {
    one: '1 hour',
    other: '{{count}} hours'
  },
  xDays: {
    one: '1 day',
    other: '{{count}} days'
  },
  aboutXWeeks: {
    one: 'about 1 week',
    other: 'about {{count}} weeks'
  },
  xWeeks: {
    one: '1 week',
    other: '{{count}} weeks'
  },
  aboutXMonths: {
    one: 'about 1 month',
    other: 'about {{count}} months'
  },
  xMonths: {
    one: '1 month',
    other: '{{count}} months'
  },
  aboutXYears: {
    one: 'about 1 year',
    other: 'about {{count}} years'
  },
  xYears: {
    one: '1 year',
    other: '{{count}} years'
  },
  overXYears: {
    one: 'over 1 year',
    other: 'over {{count}} years'
  },
  almostXYears: {
    one: 'almost 1 year',
    other: 'almost {{count}} years'
  }
};

var formatDistance = function (token, count, options) {
  var result;
  var tokenValue = formatDistanceLocale[token];

  if (typeof tokenValue === 'string') {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace('{{count}}', count.toString());
  }

  if (options !== null && options !== void 0 && options.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'in ' + result;
    } else {
      return result + ' ago';
    }
  }

  return result;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatDistance);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js":
/*!*************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildFormatLongFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildFormatLongFn/index.js");

var dateFormats = {
  full: 'EEEE, MMMM do, y',
  long: 'MMMM do, y',
  medium: 'MMM d, y',
  short: 'MM/dd/yyyy'
};
var timeFormats = {
  full: 'h:mm:ss a zzzz',
  long: 'h:mm:ss a z',
  medium: 'h:mm:ss a',
  short: 'h:mm a'
};
var dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: '{{date}}, {{time}}',
  short: '{{date}}, {{time}}'
};
var formatLong = {
  date: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateFormats,
    defaultWidth: 'full'
  }),
  time: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: timeFormats,
    defaultWidth: 'full'
  }),
  dateTime: (0,_lib_buildFormatLongFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    formats: dateTimeFormats,
    defaultWidth: 'full'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatLong);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: 'P'
};

var formatRelative = function (token, _date, _baseDate, _options) {
  return formatRelativeLocale[token];
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (formatRelative);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildLocalizeFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildLocalizeFn/index.js");

var eraValues = {
  narrow: ['B', 'A'],
  abbreviated: ['BC', 'AD'],
  wide: ['Before Christ', 'Anno Domini']
};
var quarterValues = {
  narrow: ['1', '2', '3', '4'],
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'],
  wide: ['1st quarter', '2nd quarter', '3rd quarter', '4th quarter']
}; // Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.

var monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'],
  abbreviated: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  wide: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
};
var dayValues = {
  narrow: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  short: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  abbreviated: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  wide: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
};
var dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'morning',
    afternoon: 'afternoon',
    evening: 'evening',
    night: 'night'
  }
};
var formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mi',
    noon: 'n',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnight',
    noon: 'noon',
    morning: 'in the morning',
    afternoon: 'in the afternoon',
    evening: 'in the evening',
    night: 'at night'
  }
};

var ordinalNumber = function (dirtyNumber, _options) {
  var number = Number(dirtyNumber); // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  var rem100 = number % 100;

  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st';

      case 2:
        return number + 'nd';

      case 3:
        return number + 'rd';
    }
  }

  return number + 'th';
};

var localize = {
  ordinalNumber: ordinalNumber,
  era: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: eraValues,
    defaultWidth: 'wide'
  }),
  quarter: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: function (quarter) {
      return quarter - 1;
    }
  }),
  month: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: monthValues,
    defaultWidth: 'wide'
  }),
  day: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayValues,
    defaultWidth: 'wide'
  }),
  dayPeriod: (0,_lib_buildLocalizeFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (localize);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../_lib/buildMatchFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchFn/index.js");
/* harmony import */ var _lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../_lib/buildMatchPatternFn/index.js */ "./node_modules/date-fns/esm/locale/_lib/buildMatchPatternFn/index.js");


var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
var parseOrdinalNumberPattern = /\d+/i;
var matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
};
var parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i]
};
var matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
};
var parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i]
};
var matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
};
var parseMonthPatterns = {
  narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
  any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
};
var matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
};
var parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
};
var matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
};
var parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
};
var match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: function (value) {
      return parseInt(value, 10);
    }
  }),
  era: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseEraPatterns,
    defaultParseWidth: 'any'
  }),
  quarter: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: 'any',
    valueCallback: function (index) {
      return index + 1;
    }
  }),
  month: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: 'any'
  }),
  day: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: 'wide',
    parsePatterns: parseDayPatterns,
    defaultParseWidth: 'any'
  }),
  dayPeriod: (0,_lib_buildMatchFn_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: 'any',
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: 'any'
  })
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (match);

/***/ }),

/***/ "./node_modules/date-fns/esm/locale/en-US/index.js":
/*!*********************************************************!*\
  !*** ./node_modules/date-fns/esm/locale/en-US/index.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/formatDistance/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatDistance/index.js");
/* harmony import */ var _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/formatLong/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatLong/index.js");
/* harmony import */ var _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/formatRelative/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/formatRelative/index.js");
/* harmony import */ var _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/localize/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/localize/index.js");
/* harmony import */ var _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_lib/match/index.js */ "./node_modules/date-fns/esm/locale/en-US/_lib/match/index.js");






/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp]{@link https://github.com/kossnocorp}
 * @author Lesha Koss [@leshakoss]{@link https://github.com/leshakoss}
 */
var locale = {
  code: 'en-US',
  formatDistance: _lib_formatDistance_index_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  formatLong: _lib_formatLong_index_js__WEBPACK_IMPORTED_MODULE_1__["default"],
  formatRelative: _lib_formatRelative_index_js__WEBPACK_IMPORTED_MODULE_2__["default"],
  localize: _lib_localize_index_js__WEBPACK_IMPORTED_MODULE_3__["default"],
  match: _lib_match_index_js__WEBPACK_IMPORTED_MODULE_4__["default"],
  options: {
    weekStartsOn: 0
    /* Sunday */
    ,
    firstWeekContainsDate: 1
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (locale);

/***/ }),

/***/ "./node_modules/date-fns/esm/subMilliseconds/index.js":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/esm/subMilliseconds/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ subMilliseconds)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addMilliseconds/index.js */ "./node_modules/date-fns/esm/addMilliseconds/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name subMilliseconds
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} the new date with the milliseconds subtracted
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * const result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */

function subMilliseconds(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyAmount);
  return (0,_addMilliseconds_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyDate, -amount);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");

/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */

function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument); // Clone the date

  if (argument instanceof Date || typeof argument === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"); // eslint-disable-next-line no-console

      console.warn(new Error().stack);
    }

    return new Date(NaN);
  }
}

/***/ }),

/***/ "./node_modules/firebase/app/dist/index.esm.js":
/*!*****************************************************!*\
  !*** ./node_modules/firebase/app/dist/index.esm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseError": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.FirebaseError),
/* harmony export */   "SDK_VERSION": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.SDK_VERSION),
/* harmony export */   "_DEFAULT_ENTRY_NAME": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._DEFAULT_ENTRY_NAME),
/* harmony export */   "_addComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addComponent),
/* harmony export */   "_addOrOverwriteComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._addOrOverwriteComponent),
/* harmony export */   "_apps": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._apps),
/* harmony export */   "_clearComponents": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._clearComponents),
/* harmony export */   "_components": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._components),
/* harmony export */   "_getProvider": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._getProvider),
/* harmony export */   "_registerComponent": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._registerComponent),
/* harmony export */   "_removeServiceInstance": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__._removeServiceInstance),
/* harmony export */   "deleteApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.deleteApp),
/* harmony export */   "getApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApp),
/* harmony export */   "getApps": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.getApps),
/* harmony export */   "initializeApp": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp),
/* harmony export */   "onLog": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.onLog),
/* harmony export */   "registerVersion": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion),
/* harmony export */   "setLogLevel": () => (/* reexport safe */ _firebase_app__WEBPACK_IMPORTED_MODULE_0__.setLogLevel)
/* harmony export */ });
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/app */ "./node_modules/@firebase/app/dist/esm/index.esm2017.js");



var name = "firebase";
var version = "9.8.1";

/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,_firebase_app__WEBPACK_IMPORTED_MODULE_0__.registerVersion)(name, version, 'app');
//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./node_modules/@firebase/app/dist/esm/index.esm2017.js":
/*!**************************************************************!*\
  !*** ./node_modules/@firebase/app/dist/esm/index.esm2017.js ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FirebaseError": () => (/* reexport safe */ _firebase_util__WEBPACK_IMPORTED_MODULE_2__.FirebaseError),
/* harmony export */   "SDK_VERSION": () => (/* binding */ SDK_VERSION),
/* harmony export */   "_DEFAULT_ENTRY_NAME": () => (/* binding */ DEFAULT_ENTRY_NAME),
/* harmony export */   "_addComponent": () => (/* binding */ _addComponent),
/* harmony export */   "_addOrOverwriteComponent": () => (/* binding */ _addOrOverwriteComponent),
/* harmony export */   "_apps": () => (/* binding */ _apps),
/* harmony export */   "_clearComponents": () => (/* binding */ _clearComponents),
/* harmony export */   "_components": () => (/* binding */ _components),
/* harmony export */   "_getProvider": () => (/* binding */ _getProvider),
/* harmony export */   "_registerComponent": () => (/* binding */ _registerComponent),
/* harmony export */   "_removeServiceInstance": () => (/* binding */ _removeServiceInstance),
/* harmony export */   "deleteApp": () => (/* binding */ deleteApp),
/* harmony export */   "getApp": () => (/* binding */ getApp),
/* harmony export */   "getApps": () => (/* binding */ getApps),
/* harmony export */   "initializeApp": () => (/* binding */ initializeApp),
/* harmony export */   "onLog": () => (/* binding */ onLog),
/* harmony export */   "registerVersion": () => (/* binding */ registerVersion),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/component */ "./node_modules/@firebase/component/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/logger */ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js");
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! idb */ "./node_modules/idb/build/index.js");






/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class PlatformLoggerServiceImpl {
    constructor(container) {
        this.container = container;
    }
    // In initial implementation, this will be called by installations on
    // auth token refresh, and installations will send this string.
    getPlatformInfoString() {
        const providers = this.container.getProviders();
        // Loop through providers and get library/version pairs from any that are
        // version components.
        return providers
            .map(provider => {
            if (isVersionServiceProvider(provider)) {
                const service = provider.getImmediate();
                return `${service.library}/${service.version}`;
            }
            else {
                return null;
            }
        })
            .filter(logString => logString)
            .join(' ');
    }
}
/**
 *
 * @param provider check if this provider provides a VersionService
 *
 * NOTE: Using Provider<'app-version'> is a hack to indicate that the provider
 * provides VersionService. The provider is not necessarily a 'app-version'
 * provider.
 */
function isVersionServiceProvider(provider) {
    const component = provider.getComponent();
    return (component === null || component === void 0 ? void 0 : component.type) === "VERSION" /* VERSION */;
}

const name$o = "@firebase/app";
const version$1 = "0.7.24";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const logger = new _firebase_logger__WEBPACK_IMPORTED_MODULE_1__.Logger('@firebase/app');

const name$n = "@firebase/app-compat";

const name$m = "@firebase/analytics-compat";

const name$l = "@firebase/analytics";

const name$k = "@firebase/app-check-compat";

const name$j = "@firebase/app-check";

const name$i = "@firebase/auth";

const name$h = "@firebase/auth-compat";

const name$g = "@firebase/database";

const name$f = "@firebase/database-compat";

const name$e = "@firebase/functions";

const name$d = "@firebase/functions-compat";

const name$c = "@firebase/installations";

const name$b = "@firebase/installations-compat";

const name$a = "@firebase/messaging";

const name$9 = "@firebase/messaging-compat";

const name$8 = "@firebase/performance";

const name$7 = "@firebase/performance-compat";

const name$6 = "@firebase/remote-config";

const name$5 = "@firebase/remote-config-compat";

const name$4 = "@firebase/storage";

const name$3 = "@firebase/storage-compat";

const name$2 = "@firebase/firestore";

const name$1 = "@firebase/firestore-compat";

const name = "firebase";
const version = "9.8.1";

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The default app name
 *
 * @internal
 */
const DEFAULT_ENTRY_NAME = '[DEFAULT]';
const PLATFORM_LOG_STRING = {
    [name$o]: 'fire-core',
    [name$n]: 'fire-core-compat',
    [name$l]: 'fire-analytics',
    [name$m]: 'fire-analytics-compat',
    [name$j]: 'fire-app-check',
    [name$k]: 'fire-app-check-compat',
    [name$i]: 'fire-auth',
    [name$h]: 'fire-auth-compat',
    [name$g]: 'fire-rtdb',
    [name$f]: 'fire-rtdb-compat',
    [name$e]: 'fire-fn',
    [name$d]: 'fire-fn-compat',
    [name$c]: 'fire-iid',
    [name$b]: 'fire-iid-compat',
    [name$a]: 'fire-fcm',
    [name$9]: 'fire-fcm-compat',
    [name$8]: 'fire-perf',
    [name$7]: 'fire-perf-compat',
    [name$6]: 'fire-rc',
    [name$5]: 'fire-rc-compat',
    [name$4]: 'fire-gcs',
    [name$3]: 'fire-gcs-compat',
    [name$2]: 'fire-fst',
    [name$1]: 'fire-fst-compat',
    'fire-js': 'fire-js',
    [name]: 'fire-js-all'
};

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @internal
 */
const _apps = new Map();
/**
 * Registered components.
 *
 * @internal
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const _components = new Map();
/**
 * @param component - the component being added to this app's container
 *
 * @internal
 */
function _addComponent(app, component) {
    try {
        app.container.addComponent(component);
    }
    catch (e) {
        logger.debug(`Component ${component.name} failed to register with FirebaseApp ${app.name}`, e);
    }
}
/**
 *
 * @internal
 */
function _addOrOverwriteComponent(app, component) {
    app.container.addOrOverwriteComponent(component);
}
/**
 *
 * @param component - the component to register
 * @returns whether or not the component is registered successfully
 *
 * @internal
 */
function _registerComponent(component) {
    const componentName = component.name;
    if (_components.has(componentName)) {
        logger.debug(`There were multiple attempts to register component ${componentName}.`);
        return false;
    }
    _components.set(componentName, component);
    // add the component to existing app instances
    for (const app of _apps.values()) {
        _addComponent(app, component);
    }
    return true;
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 *
 * @returns the provider for the service with the matching name
 *
 * @internal
 */
function _getProvider(app, name) {
    const heartbeatController = app.container
        .getProvider('heartbeat')
        .getImmediate({ optional: true });
    if (heartbeatController) {
        void heartbeatController.triggerHeartbeat();
    }
    return app.container.getProvider(name);
}
/**
 *
 * @param app - FirebaseApp instance
 * @param name - service name
 * @param instanceIdentifier - service instance identifier in case the service supports multiple instances
 *
 * @internal
 */
function _removeServiceInstance(app, name, instanceIdentifier = DEFAULT_ENTRY_NAME) {
    _getProvider(app, name).clearInstance(instanceIdentifier);
}
/**
 * Test only
 *
 * @internal
 */
function _clearComponents() {
    _components.clear();
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const ERRORS = {
    ["no-app" /* NO_APP */]: "No Firebase App '{$appName}' has been created - " +
        'call Firebase App.initializeApp()',
    ["bad-app-name" /* BAD_APP_NAME */]: "Illegal App name: '{$appName}",
    ["duplicate-app" /* DUPLICATE_APP */]: "Firebase App named '{$appName}' already exists with different options or config",
    ["app-deleted" /* APP_DELETED */]: "Firebase App named '{$appName}' already deleted",
    ["invalid-app-argument" /* INVALID_APP_ARGUMENT */]: 'firebase.{$appName}() takes either no argument or a ' +
        'Firebase App instance.',
    ["invalid-log-argument" /* INVALID_LOG_ARGUMENT */]: 'First argument to `onLog` must be null or a function.',
    ["storage-open" /* STORAGE_OPEN */]: 'Error thrown when opening storage. Original error: {$originalErrorMessage}.',
    ["storage-get" /* STORAGE_GET */]: 'Error thrown when reading from storage. Original error: {$originalErrorMessage}.',
    ["storage-set" /* STORAGE_WRITE */]: 'Error thrown when writing to storage. Original error: {$originalErrorMessage}.',
    ["storage-delete" /* STORAGE_DELETE */]: 'Error thrown when deleting from storage. Original error: {$originalErrorMessage}.'
};
const ERROR_FACTORY = new _firebase_util__WEBPACK_IMPORTED_MODULE_2__.ErrorFactory('app', 'Firebase', ERRORS);

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class FirebaseAppImpl {
    constructor(options, config, container) {
        this._isDeleted = false;
        this._options = Object.assign({}, options);
        this._config = Object.assign({}, config);
        this._name = config.name;
        this._automaticDataCollectionEnabled =
            config.automaticDataCollectionEnabled;
        this._container = container;
        this.container.addComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('app', () => this, "PUBLIC" /* PUBLIC */));
    }
    get automaticDataCollectionEnabled() {
        this.checkDestroyed();
        return this._automaticDataCollectionEnabled;
    }
    set automaticDataCollectionEnabled(val) {
        this.checkDestroyed();
        this._automaticDataCollectionEnabled = val;
    }
    get name() {
        this.checkDestroyed();
        return this._name;
    }
    get options() {
        this.checkDestroyed();
        return this._options;
    }
    get config() {
        this.checkDestroyed();
        return this._config;
    }
    get container() {
        return this._container;
    }
    get isDeleted() {
        return this._isDeleted;
    }
    set isDeleted(val) {
        this._isDeleted = val;
    }
    /**
     * This function will throw an Error if the App has already been deleted -
     * use before performing API actions on the App.
     */
    checkDestroyed() {
        if (this.isDeleted) {
            throw ERROR_FACTORY.create("app-deleted" /* APP_DELETED */, { appName: this._name });
        }
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * The current SDK version.
 *
 * @public
 */
const SDK_VERSION = version;
function initializeApp(options, rawConfig = {}) {
    if (typeof rawConfig !== 'object') {
        const name = rawConfig;
        rawConfig = { name };
    }
    const config = Object.assign({ name: DEFAULT_ENTRY_NAME, automaticDataCollectionEnabled: false }, rawConfig);
    const name = config.name;
    if (typeof name !== 'string' || !name) {
        throw ERROR_FACTORY.create("bad-app-name" /* BAD_APP_NAME */, {
            appName: String(name)
        });
    }
    const existingApp = _apps.get(name);
    if (existingApp) {
        // return the existing app if options and config deep equal the ones in the existing app.
        if ((0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(options, existingApp.options) &&
            (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.deepEqual)(config, existingApp.config)) {
            return existingApp;
        }
        else {
            throw ERROR_FACTORY.create("duplicate-app" /* DUPLICATE_APP */, { appName: name });
        }
    }
    const container = new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.ComponentContainer(name);
    for (const component of _components.values()) {
        container.addComponent(component);
    }
    const newApp = new FirebaseAppImpl(options, config, container);
    _apps.set(name, newApp);
    return newApp;
}
/**
 * Retrieves a {@link @firebase/app#FirebaseApp} instance.
 *
 * When called with no arguments, the default app is returned. When an app name
 * is provided, the app corresponding to that name is returned.
 *
 * An exception is thrown if the app being retrieved has not yet been
 * initialized.
 *
 * @example
 * ```javascript
 * // Return the default app
 * const app = getApp();
 * ```
 *
 * @example
 * ```javascript
 * // Return a named app
 * const otherApp = getApp("otherApp");
 * ```
 *
 * @param name - Optional name of the app to return. If no name is
 *   provided, the default is `"[DEFAULT]"`.
 *
 * @returns The app corresponding to the provided app name.
 *   If no app name is provided, the default app is returned.
 *
 * @public
 */
function getApp(name = DEFAULT_ENTRY_NAME) {
    const app = _apps.get(name);
    if (!app) {
        throw ERROR_FACTORY.create("no-app" /* NO_APP */, { appName: name });
    }
    return app;
}
/**
 * A (read-only) array of all initialized apps.
 * @public
 */
function getApps() {
    return Array.from(_apps.values());
}
/**
 * Renders this app unusable and frees the resources of all associated
 * services.
 *
 * @example
 * ```javascript
 * deleteApp(app)
 *   .then(function() {
 *     console.log("App deleted successfully");
 *   })
 *   .catch(function(error) {
 *     console.log("Error deleting app:", error);
 *   });
 * ```
 *
 * @public
 */
async function deleteApp(app) {
    const name = app.name;
    if (_apps.has(name)) {
        _apps.delete(name);
        await Promise.all(app.container
            .getProviders()
            .map(provider => provider.delete()));
        app.isDeleted = true;
    }
}
/**
 * Registers a library's name and version for platform logging purposes.
 * @param library - Name of 1p or 3p library (e.g. firestore, angularfire)
 * @param version - Current version of that library.
 * @param variant - Bundle variant, e.g., node, rn, etc.
 *
 * @public
 */
function registerVersion(libraryKeyOrName, version, variant) {
    var _a;
    // TODO: We can use this check to whitelist strings when/if we set up
    // a good whitelist system.
    let library = (_a = PLATFORM_LOG_STRING[libraryKeyOrName]) !== null && _a !== void 0 ? _a : libraryKeyOrName;
    if (variant) {
        library += `-${variant}`;
    }
    const libraryMismatch = library.match(/\s|\//);
    const versionMismatch = version.match(/\s|\//);
    if (libraryMismatch || versionMismatch) {
        const warning = [
            `Unable to register library "${library}" with version "${version}":`
        ];
        if (libraryMismatch) {
            warning.push(`library name "${library}" contains illegal characters (whitespace or "/")`);
        }
        if (libraryMismatch && versionMismatch) {
            warning.push('and');
        }
        if (versionMismatch) {
            warning.push(`version name "${version}" contains illegal characters (whitespace or "/")`);
        }
        logger.warn(warning.join(' '));
        return;
    }
    _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component(`${library}-version`, () => ({ library, version }), "VERSION" /* VERSION */));
}
/**
 * Sets log handler for all Firebase SDKs.
 * @param logCallback - An optional custom log handler that executes user code whenever
 * the Firebase SDK makes a logging call.
 *
 * @public
 */
function onLog(logCallback, options) {
    if (logCallback !== null && typeof logCallback !== 'function') {
        throw ERROR_FACTORY.create("invalid-log-argument" /* INVALID_LOG_ARGUMENT */);
    }
    (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setUserLogHandler)(logCallback, options);
}
/**
 * Sets log level for all Firebase SDKs.
 *
 * All of the log types above the current log level are captured (i.e. if
 * you set the log level to `info`, errors are logged, but `debug` and
 * `verbose` logs are not).
 *
 * @public
 */
function setLogLevel(logLevel) {
    (0,_firebase_logger__WEBPACK_IMPORTED_MODULE_1__.setLogLevel)(logLevel);
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DB_NAME = 'firebase-heartbeat-database';
const DB_VERSION = 1;
const STORE_NAME = 'firebase-heartbeat-store';
let dbPromise = null;
function getDbPromise() {
    if (!dbPromise) {
        dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_3__.openDB)(DB_NAME, DB_VERSION, {
            upgrade: (db, oldVersion) => {
                // We don't use 'break' in this switch statement, the fall-through
                // behavior is what we want, because if there are multiple versions between
                // the old version and the current version, we want ALL the migrations
                // that correspond to those versions to run, not only the last one.
                // eslint-disable-next-line default-case
                switch (oldVersion) {
                    case 0:
                        db.createObjectStore(STORE_NAME);
                }
            }
        }).catch(e => {
            throw ERROR_FACTORY.create("storage-open" /* STORAGE_OPEN */, {
                originalErrorMessage: e.message
            });
        });
    }
    return dbPromise;
}
async function readHeartbeatsFromIndexedDB(app) {
    try {
        const db = await getDbPromise();
        return db
            .transaction(STORE_NAME)
            .objectStore(STORE_NAME)
            .get(computeKey(app));
    }
    catch (e) {
        throw ERROR_FACTORY.create("storage-get" /* STORAGE_GET */, {
            originalErrorMessage: e.message
        });
    }
}
async function writeHeartbeatsToIndexedDB(app, heartbeatObject) {
    try {
        const db = await getDbPromise();
        const tx = db.transaction(STORE_NAME, 'readwrite');
        const objectStore = tx.objectStore(STORE_NAME);
        await objectStore.put(heartbeatObject, computeKey(app));
        return tx.done;
    }
    catch (e) {
        throw ERROR_FACTORY.create("storage-set" /* STORAGE_WRITE */, {
            originalErrorMessage: e.message
        });
    }
}
function computeKey(app) {
    return `${app.name}!${app.options.appId}`;
}

/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const MAX_HEADER_BYTES = 1024;
// 30 days
const STORED_HEARTBEAT_RETENTION_MAX_MILLIS = 30 * 24 * 60 * 60 * 1000;
class HeartbeatServiceImpl {
    constructor(container) {
        this.container = container;
        /**
         * In-memory cache for heartbeats, used by getHeartbeatsHeader() to generate
         * the header string.
         * Stores one record per date. This will be consolidated into the standard
         * format of one record per user agent string before being sent as a header.
         * Populated from indexedDB when the controller is instantiated and should
         * be kept in sync with indexedDB.
         * Leave public for easier testing.
         */
        this._heartbeatsCache = null;
        const app = this.container.getProvider('app').getImmediate();
        this._storage = new HeartbeatStorageImpl(app);
        this._heartbeatsCachePromise = this._storage.read().then(result => {
            this._heartbeatsCache = result;
            return result;
        });
    }
    /**
     * Called to report a heartbeat. The function will generate
     * a HeartbeatsByUserAgent object, update heartbeatsCache, and persist it
     * to IndexedDB.
     * Note that we only store one heartbeat per day. So if a heartbeat for today is
     * already logged, subsequent calls to this function in the same day will be ignored.
     */
    async triggerHeartbeat() {
        const platformLogger = this.container
            .getProvider('platform-logger')
            .getImmediate();
        // This is the "Firebase user agent" string from the platform logger
        // service, not the browser user agent.
        const agent = platformLogger.getPlatformInfoString();
        const date = getUTCDateString();
        if (this._heartbeatsCache === null) {
            this._heartbeatsCache = await this._heartbeatsCachePromise;
        }
        // Do not store a heartbeat if one is already stored for this day
        // or if a header has already been sent today.
        if (this._heartbeatsCache.lastSentHeartbeatDate === date ||
            this._heartbeatsCache.heartbeats.some(singleDateHeartbeat => singleDateHeartbeat.date === date)) {
            return;
        }
        else {
            // There is no entry for this date. Create one.
            this._heartbeatsCache.heartbeats.push({ date, agent });
        }
        // Remove entries older than 30 days.
        this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter(singleDateHeartbeat => {
            const hbTimestamp = new Date(singleDateHeartbeat.date).valueOf();
            const now = Date.now();
            return now - hbTimestamp <= STORED_HEARTBEAT_RETENTION_MAX_MILLIS;
        });
        return this._storage.overwrite(this._heartbeatsCache);
    }
    /**
     * Returns a base64 encoded string which can be attached to the heartbeat-specific header directly.
     * It also clears all heartbeats from memory as well as in IndexedDB.
     *
     * NOTE: Consuming product SDKs should not send the header if this method
     * returns an empty string.
     */
    async getHeartbeatsHeader() {
        if (this._heartbeatsCache === null) {
            await this._heartbeatsCachePromise;
        }
        // If it's still null or the array is empty, there is no data to send.
        if (this._heartbeatsCache === null ||
            this._heartbeatsCache.heartbeats.length === 0) {
            return '';
        }
        const date = getUTCDateString();
        // Extract as many heartbeats from the cache as will fit under the size limit.
        const { heartbeatsToSend, unsentEntries } = extractHeartbeatsForHeader(this._heartbeatsCache.heartbeats);
        const headerString = (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(JSON.stringify({ version: 2, heartbeats: heartbeatsToSend }));
        // Store last sent date to prevent another being logged/sent for the same day.
        this._heartbeatsCache.lastSentHeartbeatDate = date;
        if (unsentEntries.length > 0) {
            // Store any unsent entries if they exist.
            this._heartbeatsCache.heartbeats = unsentEntries;
            // This seems more likely than emptying the array (below) to lead to some odd state
            // since the cache isn't empty and this will be called again on the next request,
            // and is probably safest if we await it.
            await this._storage.overwrite(this._heartbeatsCache);
        }
        else {
            this._heartbeatsCache.heartbeats = [];
            // Do not wait for this, to reduce latency.
            void this._storage.overwrite(this._heartbeatsCache);
        }
        return headerString;
    }
}
function getUTCDateString() {
    const today = new Date();
    // Returns date format 'YYYY-MM-DD'
    return today.toISOString().substring(0, 10);
}
function extractHeartbeatsForHeader(heartbeatsCache, maxSize = MAX_HEADER_BYTES) {
    // Heartbeats grouped by user agent in the standard format to be sent in
    // the header.
    const heartbeatsToSend = [];
    // Single date format heartbeats that are not sent.
    let unsentEntries = heartbeatsCache.slice();
    for (const singleDateHeartbeat of heartbeatsCache) {
        // Look for an existing entry with the same user agent.
        const heartbeatEntry = heartbeatsToSend.find(hb => hb.agent === singleDateHeartbeat.agent);
        if (!heartbeatEntry) {
            // If no entry for this user agent exists, create one.
            heartbeatsToSend.push({
                agent: singleDateHeartbeat.agent,
                dates: [singleDateHeartbeat.date]
            });
            if (countBytes(heartbeatsToSend) > maxSize) {
                // If the header would exceed max size, remove the added heartbeat
                // entry and stop adding to the header.
                heartbeatsToSend.pop();
                break;
            }
        }
        else {
            heartbeatEntry.dates.push(singleDateHeartbeat.date);
            // If the header would exceed max size, remove the added date
            // and stop adding to the header.
            if (countBytes(heartbeatsToSend) > maxSize) {
                heartbeatEntry.dates.pop();
                break;
            }
        }
        // Pop unsent entry from queue. (Skipped if adding the entry exceeded
        // quota and the loop breaks early.)
        unsentEntries = unsentEntries.slice(1);
    }
    return {
        heartbeatsToSend,
        unsentEntries
    };
}
class HeartbeatStorageImpl {
    constructor(app) {
        this.app = app;
        this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck();
    }
    async runIndexedDBEnvironmentCheck() {
        if (!(0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.isIndexedDBAvailable)()) {
            return false;
        }
        else {
            return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.validateIndexedDBOpenable)()
                .then(() => true)
                .catch(() => false);
        }
    }
    /**
     * Read all heartbeats.
     */
    async read() {
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return { heartbeats: [] };
        }
        else {
            const idbHeartbeatObject = await readHeartbeatsFromIndexedDB(this.app);
            return idbHeartbeatObject || { heartbeats: [] };
        }
    }
    // overwrite the storage with the provided heartbeats
    async overwrite(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        }
        else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: heartbeatsObject.heartbeats
            });
        }
    }
    // add heartbeats
    async add(heartbeatsObject) {
        var _a;
        const canUseIndexedDB = await this._canUseIndexedDBPromise;
        if (!canUseIndexedDB) {
            return;
        }
        else {
            const existingHeartbeatsObject = await this.read();
            return writeHeartbeatsToIndexedDB(this.app, {
                lastSentHeartbeatDate: (_a = heartbeatsObject.lastSentHeartbeatDate) !== null && _a !== void 0 ? _a : existingHeartbeatsObject.lastSentHeartbeatDate,
                heartbeats: [
                    ...existingHeartbeatsObject.heartbeats,
                    ...heartbeatsObject.heartbeats
                ]
            });
        }
    }
}
/**
 * Calculate bytes of a HeartbeatsByUserAgent array after being wrapped
 * in a platform logging header JSON object, stringified, and converted
 * to base 64.
 */
function countBytes(heartbeatsCache) {
    // base64 has a restricted set of characters, all of which should be 1 byte.
    return (0,_firebase_util__WEBPACK_IMPORTED_MODULE_2__.base64urlEncodeWithoutPadding)(
    // heartbeatsCache wrapper properties
    JSON.stringify({ version: 2, heartbeats: heartbeatsCache })).length;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function registerCoreComponents(variant) {
    _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('platform-logger', container => new PlatformLoggerServiceImpl(container), "PRIVATE" /* PRIVATE */));
    _registerComponent(new _firebase_component__WEBPACK_IMPORTED_MODULE_0__.Component('heartbeat', container => new HeartbeatServiceImpl(container), "PRIVATE" /* PRIVATE */));
    // Register `app` package.
    registerVersion(name$o, version$1, variant);
    // BUILD_TARGET will be replaced by values like esm5, esm2017, cjs5, etc during the compilation
    registerVersion(name$o, version$1, 'esm2017');
    // Register platform SDK identifier (no version).
    registerVersion('fire-js', '');
}

/**
 * Firebase App
 *
 * @remarks This package coordinates the communication between the different Firebase components
 * @packageDocumentation
 */
registerCoreComponents('');


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/component/dist/esm/index.esm2017.js":
/*!********************************************************************!*\
  !*** ./node_modules/@firebase/component/dist/esm/index.esm2017.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "ComponentContainer": () => (/* binding */ ComponentContainer),
/* harmony export */   "Provider": () => (/* binding */ Provider)
/* harmony export */ });
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/util */ "./node_modules/@firebase/util/dist/index.esm2017.js");


/**
 * Component for service name T, e.g. `auth`, `auth-internal`
 */
class Component {
    /**
     *
     * @param name The public service name, e.g. app, auth, firestore, database
     * @param instanceFactory Service factory responsible for creating the public interface
     * @param type whether the service provided by the component is public or private
     */
    constructor(name, instanceFactory, type) {
        this.name = name;
        this.instanceFactory = instanceFactory;
        this.type = type;
        this.multipleInstances = false;
        /**
         * Properties to be added to the service namespace
         */
        this.serviceProps = {};
        this.instantiationMode = "LAZY" /* LAZY */;
        this.onInstanceCreated = null;
    }
    setInstantiationMode(mode) {
        this.instantiationMode = mode;
        return this;
    }
    setMultipleInstances(multipleInstances) {
        this.multipleInstances = multipleInstances;
        return this;
    }
    setServiceProps(props) {
        this.serviceProps = props;
        return this;
    }
    setInstanceCreatedCallback(callback) {
        this.onInstanceCreated = callback;
        return this;
    }
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_ENTRY_NAME = '[DEFAULT]';

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Provider for instance for service name T, e.g. 'auth', 'auth-internal'
 * NameServiceMapping[T] is an alias for the type of the instance
 */
class Provider {
    constructor(name, container) {
        this.name = name;
        this.container = container;
        this.component = null;
        this.instances = new Map();
        this.instancesDeferred = new Map();
        this.instancesOptions = new Map();
        this.onInitCallbacks = new Map();
    }
    /**
     * @param identifier A provider can provide mulitple instances of a service
     * if this.component.multipleInstances is true.
     */
    get(identifier) {
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        if (!this.instancesDeferred.has(normalizedIdentifier)) {
            const deferred = new _firebase_util__WEBPACK_IMPORTED_MODULE_0__.Deferred();
            this.instancesDeferred.set(normalizedIdentifier, deferred);
            if (this.isInitialized(normalizedIdentifier) ||
                this.shouldAutoInitialize()) {
                // initialize the service if it can be auto-initialized
                try {
                    const instance = this.getOrInitializeService({
                        instanceIdentifier: normalizedIdentifier
                    });
                    if (instance) {
                        deferred.resolve(instance);
                    }
                }
                catch (e) {
                    // when the instance factory throws an exception during get(), it should not cause
                    // a fatal error. We just return the unresolved promise in this case.
                }
            }
        }
        return this.instancesDeferred.get(normalizedIdentifier).promise;
    }
    getImmediate(options) {
        var _a;
        // if multipleInstances is not supported, use the default name
        const normalizedIdentifier = this.normalizeInstanceIdentifier(options === null || options === void 0 ? void 0 : options.identifier);
        const optional = (_a = options === null || options === void 0 ? void 0 : options.optional) !== null && _a !== void 0 ? _a : false;
        if (this.isInitialized(normalizedIdentifier) ||
            this.shouldAutoInitialize()) {
            try {
                return this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
            }
            catch (e) {
                if (optional) {
                    return null;
                }
                else {
                    throw e;
                }
            }
        }
        else {
            // In case a component is not initialized and should/can not be auto-initialized at the moment, return null if the optional flag is set, or throw
            if (optional) {
                return null;
            }
            else {
                throw Error(`Service ${this.name} is not available`);
            }
        }
    }
    getComponent() {
        return this.component;
    }
    setComponent(component) {
        if (component.name !== this.name) {
            throw Error(`Mismatching Component ${component.name} for Provider ${this.name}.`);
        }
        if (this.component) {
            throw Error(`Component for ${this.name} has already been provided`);
        }
        this.component = component;
        // return early without attempting to initialize the component if the component requires explicit initialization (calling `Provider.initialize()`)
        if (!this.shouldAutoInitialize()) {
            return;
        }
        // if the service is eager, initialize the default instance
        if (isComponentEager(component)) {
            try {
                this.getOrInitializeService({ instanceIdentifier: DEFAULT_ENTRY_NAME });
            }
            catch (e) {
                // when the instance factory for an eager Component throws an exception during the eager
                // initialization, it should not cause a fatal error.
                // TODO: Investigate if we need to make it configurable, because some component may want to cause
                // a fatal error in this case?
            }
        }
        // Create service instances for the pending promises and resolve them
        // NOTE: if this.multipleInstances is false, only the default instance will be created
        // and all promises with resolve with it regardless of the identifier.
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            try {
                // `getOrInitializeService()` should always return a valid instance since a component is guaranteed. use ! to make typescript happy.
                const instance = this.getOrInitializeService({
                    instanceIdentifier: normalizedIdentifier
                });
                instanceDeferred.resolve(instance);
            }
            catch (e) {
                // when the instance factory throws an exception, it should not cause
                // a fatal error. We just leave the promise unresolved.
            }
        }
    }
    clearInstance(identifier = DEFAULT_ENTRY_NAME) {
        this.instancesDeferred.delete(identifier);
        this.instancesOptions.delete(identifier);
        this.instances.delete(identifier);
    }
    // app.delete() will call this method on every provider to delete the services
    // TODO: should we mark the provider as deleted?
    async delete() {
        const services = Array.from(this.instances.values());
        await Promise.all([
            ...services
                .filter(service => 'INTERNAL' in service) // legacy services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service.INTERNAL.delete()),
            ...services
                .filter(service => '_delete' in service) // modularized services
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                .map(service => service._delete())
        ]);
    }
    isComponentSet() {
        return this.component != null;
    }
    isInitialized(identifier = DEFAULT_ENTRY_NAME) {
        return this.instances.has(identifier);
    }
    getOptions(identifier = DEFAULT_ENTRY_NAME) {
        return this.instancesOptions.get(identifier) || {};
    }
    initialize(opts = {}) {
        const { options = {} } = opts;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(opts.instanceIdentifier);
        if (this.isInitialized(normalizedIdentifier)) {
            throw Error(`${this.name}(${normalizedIdentifier}) has already been initialized`);
        }
        if (!this.isComponentSet()) {
            throw Error(`Component ${this.name} has not been registered yet`);
        }
        const instance = this.getOrInitializeService({
            instanceIdentifier: normalizedIdentifier,
            options
        });
        // resolve any pending promise waiting for the service instance
        for (const [instanceIdentifier, instanceDeferred] of this.instancesDeferred.entries()) {
            const normalizedDeferredIdentifier = this.normalizeInstanceIdentifier(instanceIdentifier);
            if (normalizedIdentifier === normalizedDeferredIdentifier) {
                instanceDeferred.resolve(instance);
            }
        }
        return instance;
    }
    /**
     *
     * @param callback - a function that will be invoked  after the provider has been initialized by calling provider.initialize().
     * The function is invoked SYNCHRONOUSLY, so it should not execute any longrunning tasks in order to not block the program.
     *
     * @param identifier An optional instance identifier
     * @returns a function to unregister the callback
     */
    onInit(callback, identifier) {
        var _a;
        const normalizedIdentifier = this.normalizeInstanceIdentifier(identifier);
        const existingCallbacks = (_a = this.onInitCallbacks.get(normalizedIdentifier)) !== null && _a !== void 0 ? _a : new Set();
        existingCallbacks.add(callback);
        this.onInitCallbacks.set(normalizedIdentifier, existingCallbacks);
        const existingInstance = this.instances.get(normalizedIdentifier);
        if (existingInstance) {
            callback(existingInstance, normalizedIdentifier);
        }
        return () => {
            existingCallbacks.delete(callback);
        };
    }
    /**
     * Invoke onInit callbacks synchronously
     * @param instance the service instance`
     */
    invokeOnInitCallbacks(instance, identifier) {
        const callbacks = this.onInitCallbacks.get(identifier);
        if (!callbacks) {
            return;
        }
        for (const callback of callbacks) {
            try {
                callback(instance, identifier);
            }
            catch (_a) {
                // ignore errors in the onInit callback
            }
        }
    }
    getOrInitializeService({ instanceIdentifier, options = {} }) {
        let instance = this.instances.get(instanceIdentifier);
        if (!instance && this.component) {
            instance = this.component.instanceFactory(this.container, {
                instanceIdentifier: normalizeIdentifierForFactory(instanceIdentifier),
                options
            });
            this.instances.set(instanceIdentifier, instance);
            this.instancesOptions.set(instanceIdentifier, options);
            /**
             * Invoke onInit listeners.
             * Note this.component.onInstanceCreated is different, which is used by the component creator,
             * while onInit listeners are registered by consumers of the provider.
             */
            this.invokeOnInitCallbacks(instance, instanceIdentifier);
            /**
             * Order is important
             * onInstanceCreated() should be called after this.instances.set(instanceIdentifier, instance); which
             * makes `isInitialized()` return true.
             */
            if (this.component.onInstanceCreated) {
                try {
                    this.component.onInstanceCreated(this.container, instanceIdentifier, instance);
                }
                catch (_a) {
                    // ignore errors in the onInstanceCreatedCallback
                }
            }
        }
        return instance || null;
    }
    normalizeInstanceIdentifier(identifier = DEFAULT_ENTRY_NAME) {
        if (this.component) {
            return this.component.multipleInstances ? identifier : DEFAULT_ENTRY_NAME;
        }
        else {
            return identifier; // assume multiple instances are supported before the component is provided.
        }
    }
    shouldAutoInitialize() {
        return (!!this.component &&
            this.component.instantiationMode !== "EXPLICIT" /* EXPLICIT */);
    }
}
// undefined should be passed to the service factory for the default instance
function normalizeIdentifierForFactory(identifier) {
    return identifier === DEFAULT_ENTRY_NAME ? undefined : identifier;
}
function isComponentEager(component) {
    return component.instantiationMode === "EAGER" /* EAGER */;
}

/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * ComponentContainer that provides Providers for service name T, e.g. `auth`, `auth-internal`
 */
class ComponentContainer {
    constructor(name) {
        this.name = name;
        this.providers = new Map();
    }
    /**
     *
     * @param component Component being added
     * @param overwrite When a component with the same name has already been registered,
     * if overwrite is true: overwrite the existing component with the new component and create a new
     * provider with the new component. It can be useful in tests where you want to use different mocks
     * for different tests.
     * if overwrite is false: throw an exception
     */
    addComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            throw new Error(`Component ${component.name} has already been registered with ${this.name}`);
        }
        provider.setComponent(component);
    }
    addOrOverwriteComponent(component) {
        const provider = this.getProvider(component.name);
        if (provider.isComponentSet()) {
            // delete the existing provider from the container, so we can register the new component
            this.providers.delete(component.name);
        }
        this.addComponent(component);
    }
    /**
     * getProvider provides a type safe interface where it can only be called with a field name
     * present in NameServiceMapping interface.
     *
     * Firebase SDKs providing services should extend NameServiceMapping interface to register
     * themselves.
     */
    getProvider(name) {
        if (this.providers.has(name)) {
            return this.providers.get(name);
        }
        // create a Provider for a service that hasn't registered with Firebase
        const provider = new Provider(name, this);
        this.providers.set(name, provider);
        return provider;
    }
    getProviders() {
        return Array.from(this.providers.values());
    }
}


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/@firebase/logger/dist/esm/index.esm2017.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@firebase/logger/dist/esm/index.esm2017.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogLevel": () => (/* binding */ LogLevel),
/* harmony export */   "Logger": () => (/* binding */ Logger),
/* harmony export */   "setLogLevel": () => (/* binding */ setLogLevel),
/* harmony export */   "setUserLogHandler": () => (/* binding */ setUserLogHandler)
/* harmony export */ });
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * A container for all of the Logger instances
 */
const instances = [];
/**
 * The JS SDK supports 5 log levels and also allows a user the ability to
 * silence the logs altogether.
 *
 * The order is a follows:
 * DEBUG < VERBOSE < INFO < WARN < ERROR
 *
 * All of the log types above the current log level will be captured (i.e. if
 * you set the log level to `INFO`, errors will still be logged, but `DEBUG` and
 * `VERBOSE` logs will not)
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["DEBUG"] = 0] = "DEBUG";
    LogLevel[LogLevel["VERBOSE"] = 1] = "VERBOSE";
    LogLevel[LogLevel["INFO"] = 2] = "INFO";
    LogLevel[LogLevel["WARN"] = 3] = "WARN";
    LogLevel[LogLevel["ERROR"] = 4] = "ERROR";
    LogLevel[LogLevel["SILENT"] = 5] = "SILENT";
})(LogLevel || (LogLevel = {}));
const levelStringToEnum = {
    'debug': LogLevel.DEBUG,
    'verbose': LogLevel.VERBOSE,
    'info': LogLevel.INFO,
    'warn': LogLevel.WARN,
    'error': LogLevel.ERROR,
    'silent': LogLevel.SILENT
};
/**
 * The default log level
 */
const defaultLogLevel = LogLevel.INFO;
/**
 * By default, `console.debug` is not displayed in the developer console (in
 * chrome). To avoid forcing users to have to opt-in to these logs twice
 * (i.e. once for firebase, and once in the console), we are sending `DEBUG`
 * logs to the `console.log` function.
 */
const ConsoleMethod = {
    [LogLevel.DEBUG]: 'log',
    [LogLevel.VERBOSE]: 'log',
    [LogLevel.INFO]: 'info',
    [LogLevel.WARN]: 'warn',
    [LogLevel.ERROR]: 'error'
};
/**
 * The default log handler will forward DEBUG, VERBOSE, INFO, WARN, and ERROR
 * messages on to their corresponding console counterparts (if the log method
 * is supported by the current log level)
 */
const defaultLogHandler = (instance, logType, ...args) => {
    if (logType < instance.logLevel) {
        return;
    }
    const now = new Date().toISOString();
    const method = ConsoleMethod[logType];
    if (method) {
        console[method](`[${now}]  ${instance.name}:`, ...args);
    }
    else {
        throw new Error(`Attempted to log a message with an invalid logType (value: ${logType})`);
    }
};
class Logger {
    /**
     * Gives you an instance of a Logger to capture messages according to
     * Firebase's logging scheme.
     *
     * @param name The name that the logs will be associated with
     */
    constructor(name) {
        this.name = name;
        /**
         * The log level of the given Logger instance.
         */
        this._logLevel = defaultLogLevel;
        /**
         * The main (internal) log handler for the Logger instance.
         * Can be set to a new function in internal package code but not by user.
         */
        this._logHandler = defaultLogHandler;
        /**
         * The optional, additional, user-defined log handler for the Logger instance.
         */
        this._userLogHandler = null;
        /**
         * Capture the current instance for later use
         */
        instances.push(this);
    }
    get logLevel() {
        return this._logLevel;
    }
    set logLevel(val) {
        if (!(val in LogLevel)) {
            throw new TypeError(`Invalid value "${val}" assigned to \`logLevel\``);
        }
        this._logLevel = val;
    }
    // Workaround for setter/getter having to be the same type.
    setLogLevel(val) {
        this._logLevel = typeof val === 'string' ? levelStringToEnum[val] : val;
    }
    get logHandler() {
        return this._logHandler;
    }
    set logHandler(val) {
        if (typeof val !== 'function') {
            throw new TypeError('Value assigned to `logHandler` must be a function');
        }
        this._logHandler = val;
    }
    get userLogHandler() {
        return this._userLogHandler;
    }
    set userLogHandler(val) {
        this._userLogHandler = val;
    }
    /**
     * The functions below are all based on the `console` interface
     */
    debug(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.DEBUG, ...args);
        this._logHandler(this, LogLevel.DEBUG, ...args);
    }
    log(...args) {
        this._userLogHandler &&
            this._userLogHandler(this, LogLevel.VERBOSE, ...args);
        this._logHandler(this, LogLevel.VERBOSE, ...args);
    }
    info(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.INFO, ...args);
        this._logHandler(this, LogLevel.INFO, ...args);
    }
    warn(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.WARN, ...args);
        this._logHandler(this, LogLevel.WARN, ...args);
    }
    error(...args) {
        this._userLogHandler && this._userLogHandler(this, LogLevel.ERROR, ...args);
        this._logHandler(this, LogLevel.ERROR, ...args);
    }
}
function setLogLevel(level) {
    instances.forEach(inst => {
        inst.setLogLevel(level);
    });
}
function setUserLogHandler(logCallback, options) {
    for (const instance of instances) {
        let customLogLevel = null;
        if (options && options.level) {
            customLogLevel = levelStringToEnum[options.level];
        }
        if (logCallback === null) {
            instance.userLogHandler = null;
        }
        else {
            instance.userLogHandler = (instance, level, ...args) => {
                const message = args
                    .map(arg => {
                    if (arg == null) {
                        return null;
                    }
                    else if (typeof arg === 'string') {
                        return arg;
                    }
                    else if (typeof arg === 'number' || typeof arg === 'boolean') {
                        return arg.toString();
                    }
                    else if (arg instanceof Error) {
                        return arg.message;
                    }
                    else {
                        try {
                            return JSON.stringify(arg);
                        }
                        catch (ignored) {
                            return null;
                        }
                    }
                })
                    .filter(arg => arg)
                    .join(' ');
                if (level >= (customLogLevel !== null && customLogLevel !== void 0 ? customLogLevel : instance.logLevel)) {
                    logCallback({
                        level: LogLevel[level].toLowerCase(),
                        message,
                        args,
                        type: instance.name
                    });
                }
            };
        }
    }
}


//# sourceMappingURL=index.esm2017.js.map


/***/ }),

/***/ "./node_modules/idb/build/index.js":
/*!*****************************************!*\
  !*** ./node_modules/idb/build/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unwrap": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   "wrap": () => (/* reexport safe */ _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   "deleteDB": () => (/* binding */ deleteDB),
/* harmony export */   "openDB": () => (/* binding */ openDB)
/* harmony export */ });
/* harmony import */ var _wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wrap-idb-value.js */ "./node_modules/idb/build/wrap-idb-value.js");



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */
function openDB(name, version, { blocked, upgrade, blocking, terminated } = {}) {
    const request = indexedDB.open(name, version);
    const openPromise = (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request);
    if (upgrade) {
        request.addEventListener('upgradeneeded', (event) => {
            upgrade((0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.result), event.oldVersion, event.newVersion, (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request.transaction));
        });
    }
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    openPromise
        .then((db) => {
        if (terminated)
            db.addEventListener('close', () => terminated());
        if (blocking)
            db.addEventListener('versionchange', () => blocking());
    })
        .catch(() => { });
    return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */
function deleteDB(name, { blocked } = {}) {
    const request = indexedDB.deleteDatabase(name);
    if (blocked)
        request.addEventListener('blocked', () => blocked());
    return (0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.w)(request).then(() => undefined);
}

const readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
const writeMethods = ['put', 'add', 'delete', 'clear'];
const cachedMethods = new Map();
function getMethod(target, prop) {
    if (!(target instanceof IDBDatabase &&
        !(prop in target) &&
        typeof prop === 'string')) {
        return;
    }
    if (cachedMethods.get(prop))
        return cachedMethods.get(prop);
    const targetFuncName = prop.replace(/FromIndex$/, '');
    const useIndex = prop !== targetFuncName;
    const isWrite = writeMethods.includes(targetFuncName);
    if (
    // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
    !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) ||
        !(isWrite || readMethods.includes(targetFuncName))) {
        return;
    }
    const method = async function (storeName, ...args) {
        // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
        const tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
        let target = tx.store;
        if (useIndex)
            target = target.index(args.shift());
        // Must reject if op rejects.
        // If it's a write operation, must reject if tx.done rejects.
        // Must reject with op rejection first.
        // Must resolve with op value.
        // Must handle both promises (no unhandled rejections)
        return (await Promise.all([
            target[targetFuncName](...args),
            isWrite && tx.done,
        ]))[0];
    };
    cachedMethods.set(prop, method);
    return method;
}
(0,_wrap_idb_value_js__WEBPACK_IMPORTED_MODULE_0__.r)((oldTraps) => ({
    ...oldTraps,
    get: (target, prop, receiver) => getMethod(target, prop) || oldTraps.get(target, prop, receiver),
    has: (target, prop) => !!getMethod(target, prop) || oldTraps.has(target, prop),
}));




/***/ }),

/***/ "./node_modules/idb/build/wrap-idb-value.js":
/*!**************************************************!*\
  !*** ./node_modules/idb/build/wrap-idb-value.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ reverseTransformCache),
/* harmony export */   "i": () => (/* binding */ instanceOfAny),
/* harmony export */   "r": () => (/* binding */ replaceTraps),
/* harmony export */   "u": () => (/* binding */ unwrap),
/* harmony export */   "w": () => (/* binding */ wrap)
/* harmony export */ });
const instanceOfAny = (object, constructors) => constructors.some((c) => object instanceof c);

let idbProxyableTypes;
let cursorAdvanceMethods;
// This is a function to prevent it throwing up in node environments.
function getIdbProxyableTypes() {
    return (idbProxyableTypes ||
        (idbProxyableTypes = [
            IDBDatabase,
            IDBObjectStore,
            IDBIndex,
            IDBCursor,
            IDBTransaction,
        ]));
}
// This is a function to prevent it throwing up in node environments.
function getCursorAdvanceMethods() {
    return (cursorAdvanceMethods ||
        (cursorAdvanceMethods = [
            IDBCursor.prototype.advance,
            IDBCursor.prototype.continue,
            IDBCursor.prototype.continuePrimaryKey,
        ]));
}
const cursorRequestMap = new WeakMap();
const transactionDoneMap = new WeakMap();
const transactionStoreNamesMap = new WeakMap();
const transformCache = new WeakMap();
const reverseTransformCache = new WeakMap();
function promisifyRequest(request) {
    const promise = new Promise((resolve, reject) => {
        const unlisten = () => {
            request.removeEventListener('success', success);
            request.removeEventListener('error', error);
        };
        const success = () => {
            resolve(wrap(request.result));
            unlisten();
        };
        const error = () => {
            reject(request.error);
            unlisten();
        };
        request.addEventListener('success', success);
        request.addEventListener('error', error);
    });
    promise
        .then((value) => {
        // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
        // (see wrapFunction).
        if (value instanceof IDBCursor) {
            cursorRequestMap.set(value, request);
        }
        // Catching to avoid "Uncaught Promise exceptions"
    })
        .catch(() => { });
    // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
    // is because we create many promises from a single IDBRequest.
    reverseTransformCache.set(promise, request);
    return promise;
}
function cacheDonePromiseForTransaction(tx) {
    // Early bail if we've already created a done promise for this transaction.
    if (transactionDoneMap.has(tx))
        return;
    const done = new Promise((resolve, reject) => {
        const unlisten = () => {
            tx.removeEventListener('complete', complete);
            tx.removeEventListener('error', error);
            tx.removeEventListener('abort', error);
        };
        const complete = () => {
            resolve();
            unlisten();
        };
        const error = () => {
            reject(tx.error || new DOMException('AbortError', 'AbortError'));
            unlisten();
        };
        tx.addEventListener('complete', complete);
        tx.addEventListener('error', error);
        tx.addEventListener('abort', error);
    });
    // Cache it for later retrieval.
    transactionDoneMap.set(tx, done);
}
let idbProxyTraps = {
    get(target, prop, receiver) {
        if (target instanceof IDBTransaction) {
            // Special handling for transaction.done.
            if (prop === 'done')
                return transactionDoneMap.get(target);
            // Polyfill for objectStoreNames because of Edge.
            if (prop === 'objectStoreNames') {
                return target.objectStoreNames || transactionStoreNamesMap.get(target);
            }
            // Make tx.store return the only store in the transaction, or undefined if there are many.
            if (prop === 'store') {
                return receiver.objectStoreNames[1]
                    ? undefined
                    : receiver.objectStore(receiver.objectStoreNames[0]);
            }
        }
        // Else transform whatever we get back.
        return wrap(target[prop]);
    },
    set(target, prop, value) {
        target[prop] = value;
        return true;
    },
    has(target, prop) {
        if (target instanceof IDBTransaction &&
            (prop === 'done' || prop === 'store')) {
            return true;
        }
        return prop in target;
    },
};
function replaceTraps(callback) {
    idbProxyTraps = callback(idbProxyTraps);
}
function wrapFunction(func) {
    // Due to expected object equality (which is enforced by the caching in `wrap`), we
    // only create one new func per func.
    // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
    if (func === IDBDatabase.prototype.transaction &&
        !('objectStoreNames' in IDBTransaction.prototype)) {
        return function (storeNames, ...args) {
            const tx = func.call(unwrap(this), storeNames, ...args);
            transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
            return wrap(tx);
        };
    }
    // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
    // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
    // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
    // with real promises, so each advance methods returns a new promise for the cursor object, or
    // undefined if the end of the cursor has been reached.
    if (getCursorAdvanceMethods().includes(func)) {
        return function (...args) {
            // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
            // the original object.
            func.apply(unwrap(this), args);
            return wrap(cursorRequestMap.get(this));
        };
    }
    return function (...args) {
        // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
        // the original object.
        return wrap(func.apply(unwrap(this), args));
    };
}
function transformCachableValue(value) {
    if (typeof value === 'function')
        return wrapFunction(value);
    // This doesn't return, it just creates a 'done' promise for the transaction,
    // which is later returned for transaction.done (see idbObjectHandler).
    if (value instanceof IDBTransaction)
        cacheDonePromiseForTransaction(value);
    if (instanceOfAny(value, getIdbProxyableTypes()))
        return new Proxy(value, idbProxyTraps);
    // Return the same value back if we're not going to transform it.
    return value;
}
function wrap(value) {
    // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
    // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
    if (value instanceof IDBRequest)
        return promisifyRequest(value);
    // If we've already transformed this value before, reuse the transformed value.
    // This is faster, but it also provides object equality.
    if (transformCache.has(value))
        return transformCache.get(value);
    const newValue = transformCachableValue(value);
    // Not all types are transformed.
    // These may be primitive types, so they can't be WeakMap keys.
    if (newValue !== value) {
        transformCache.set(value, newValue);
        reverseTransformCache.set(newValue, value);
    }
    return newValue;
}
const unwrap = (value) => reverseTransformCache.get(value);




/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZUFBZTtBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixnQkFBZ0I7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsOEJBQThCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MscUJBQU07QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSx5QkFBeUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixRQUFRO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsUUFBUTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixRQUFRO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsNkJBQTZCLFFBQVE7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDJCQUEyQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRLFVBQVUsU0FBUztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGVBQWUscUVBQWU7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLHFFQUFlO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSxxRUFBZTtBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUEsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQSxXQUFXLG1FQUFpQjtBQUM1QixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcsbUVBQWlCO0FBQzVCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRDQUE0QyxxRUFBZTtBQUMzRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUVBQWU7QUFDakM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMscUVBQWU7QUFDN0IsZ0JBQWdCLHFFQUFlO0FBQy9CO0FBQ0E7O0FBRUEsaUVBQWUsVUFBVTs7Ozs7Ozs7Ozs7Ozs7O0FDajJCb0M7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEM7O0FBRTVDO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLHFFQUFlO0FBQzlELEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUIsR0FBRztBQUNIO0FBQ0E7QUFDQSxXQUFXLHFFQUFlO0FBQzFCLEdBQUc7QUFDSDtBQUNBO0FBQ0EsV0FBVyxxRUFBZTtBQUMxQixHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscUVBQWU7QUFDMUI7QUFDQTtBQUNBLGlFQUFlLFVBQVU7Ozs7Ozs7Ozs7Ozs7O0FDbkZ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBLG1DQUFtQyxNQUFNLDBEQUEwRCxNQUFNO0FBQ3pHOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUMvRjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZjJDO0FBQ1M7QUFDcEQsb0NBQW9DO0FBQ3BDOztBQUVlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2QyQztBQUNtQjtBQUNRO0FBQ2xCO0FBQ3BELHNDQUFzQztBQUN0Qzs7QUFFZTtBQUNmLEVBQUUsa0VBQVk7QUFDZCxhQUFhLDREQUFNO0FBQ25CLGFBQWEsdUVBQWlCLG1CQUFtQiwyRUFBcUIsa0JBQWtCO0FBQ3hGO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmMkM7QUFDUztBQUNVLENBQUM7QUFDL0Q7O0FBRWU7QUFDZixFQUFFLGtFQUFZO0FBQ2QsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix1RUFBaUI7QUFDekM7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVFQUFpQjs7QUFFekM7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCMkM7QUFDYTtBQUNRO0FBQ1o7QUFDcEQsc0NBQXNDO0FBQ3RDOztBQUVlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkIsYUFBYSxvRUFBYyw0QkFBNEIsd0VBQWtCLDJCQUEyQjtBQUNwRztBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2YyQztBQUNTO0FBQ0k7QUFDVixDQUFDO0FBQy9DOztBQUVlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsNERBQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsK0RBQVM7QUFDeEYscUdBQXFHLCtEQUFTLGlDQUFpQzs7QUFFL0k7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvRUFBYztBQUN0QztBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isb0VBQWM7O0FBRXRDO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDcENBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDTztBQUNQO0FBQ0EseUlBQXlJO0FBQ3pJLElBQUk7QUFDSixxSUFBcUk7QUFDckksSUFBSTtBQUNKLCtJQUErSTtBQUMvSSxJQUFJO0FBQ0osaUpBQWlKO0FBQ2pKO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDbEJlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKMkM7QUFDUyxDQUFDO0FBQ3JEOztBQUVlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkO0FBQ0EsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjhEO0FBQ0E7QUFDVixDQUFDO0FBQ3JEOztBQUVlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkLGFBQWEsdUVBQWlCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLGFBQWEsdUVBQWlCO0FBQzlCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDYjJDO0FBQ1M7QUFDTixDQUFDO0FBQy9DOztBQUVlO0FBQ2YsRUFBRSxrRUFBWTtBQUNkO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RCwrREFBUztBQUN0RSwwRUFBMEUsK0RBQVMsd0JBQXdCOztBQUUzRztBQUNBO0FBQ0E7O0FBRUEsYUFBYSw0REFBTTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZCd0Q7QUFDSjtBQUNJO0FBQ1YsQ0FBQztBQUMvQzs7QUFFZTtBQUNmLEVBQUUsa0VBQVk7QUFDZDtBQUNBO0FBQ0E7QUFDQSwrRUFBK0UsK0RBQVM7QUFDeEYscUdBQXFHLCtEQUFTO0FBQzlHLGFBQWEsb0VBQWM7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvRUFBYztBQUMzQjtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ25CZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNabUQ7QUFDWDtBQUNpQjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGFBQWE7QUFDeEIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsTUFBTTtBQUNuQixZQUFZLFdBQVc7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2YsRUFBRSxzRUFBWTtBQUNkLGtCQUFrQiw0REFBTTtBQUN4QixlQUFlLG1FQUFTO0FBQ3hCO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CMEM7QUFDVztBQUNLO0FBQ2xCO0FBQ29CO0FBQ1E7QUFDMkI7QUFDNkI7QUFDekU7QUFDTSxDQUFDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNGQUFzRjtBQUN0Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RDtBQUNBLGlEQUFpRCxXQUFXO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0VBQW9FO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvREFBTTs7QUFFekI7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGdCQUFnQixzQ0FBc0MsU0FBUztBQUNqRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFQUEyRSxjQUFjO0FBQ3pGO0FBQ0E7QUFDQTtBQUNB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Ozs7Ozs7Ozs7Ozs7O0FDeFpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsNEJBQTRCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLElBQUksS0FBSyxjQUFjO0FBQ25EO0FBQ0E7QUFDQSxzRkFBc0YsUUFBUTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxJQUFJO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUU0RDtBQUM1RDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFObUU7QUFDTjs7QUFFN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMseUNBQXlDLElBQUk7QUFDOUU7QUFDQSx3QkFBd0IscURBQUk7QUFDNUI7QUFDQTtBQUNBLG9CQUFvQixxREFBSSxzREFBc0QscURBQUk7QUFDbEYsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCx3QkFBd0I7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVSxJQUFJO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFdBQVcscURBQUk7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRTJCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkY1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVxRzs7Ozs7OztVQ3hMckc7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvdXRpbC9kaXN0L2luZGV4LmVzbTIwMTcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvRE9NLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9hZGRMZWFkaW5nWmVyb3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZm9ybWF0L2xpZ2h0Rm9ybWF0dGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENEYXlPZlllYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZ2V0VVRDSVNPV2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENJU09XZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9nZXRVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL2dldFVUQ1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvc3RhcnRPZlVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9fbGliL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vZm9ybWF0L2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVmFsaWQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkRm9ybWF0TG9uZ0ZuL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvX2xpYi9idWlsZExvY2FsaXplRm4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvZm9ybWF0RGlzdGFuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdExvbmcvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9fbGliL2Zvcm1hdFJlbGF0aXZlL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9sb2NhbGUvZW4tVVMvX2xpYi9sb2NhbGl6ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vbG9jYWxlL2VuLVVTL19saWIvbWF0Y2gvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2xvY2FsZS9lbi1VUy9pbmRleC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vc3ViTWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS90b0RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvZmlyZWJhc2UvYXBwL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvQGZpcmViYXNlL2FwcC9kaXN0L2VzbS9pbmRleC5lc20yMDE3LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BmaXJlYmFzZS9jb21wb25lbnQvZGlzdC9lc20vaW5kZXguZXNtMjAxNy5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9AZmlyZWJhc2UvbG9nZ2VyL2Rpc3QvZXNtL2luZGV4LmVzbTIwMTcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvaWRiL2J1aWxkL2luZGV4LmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2lkYi9idWlsZC93cmFwLWlkYi12YWx1ZS5qcyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBAZmlsZW92ZXJ2aWV3IEZpcmViYXNlIGNvbnN0YW50cy4gIFNvbWUgb2YgdGhlc2UgKEBkZWZpbmVzKSBjYW4gYmUgb3ZlcnJpZGRlbiBhdCBjb21waWxlLXRpbWUuXHJcbiAqL1xyXG5jb25zdCBDT05TVEFOVFMgPSB7XHJcbiAgICAvKipcclxuICAgICAqIEBkZWZpbmUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBpcyB0aGUgY2xpZW50IE5vZGUuanMgU0RLLlxyXG4gICAgICovXHJcbiAgICBOT0RFX0NMSUVOVDogZmFsc2UsXHJcbiAgICAvKipcclxuICAgICAqIEBkZWZpbmUge2Jvb2xlYW59IFdoZXRoZXIgdGhpcyBpcyB0aGUgQWRtaW4gTm9kZS5qcyBTREsuXHJcbiAgICAgKi9cclxuICAgIE5PREVfQURNSU46IGZhbHNlLFxyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJlYmFzZSBTREsgVmVyc2lvblxyXG4gICAgICovXHJcbiAgICBTREtfVkVSU0lPTjogJyR7SlNDT1JFX1ZFUlNJT059J1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVGhyb3dzIGFuIGVycm9yIGlmIHRoZSBwcm92aWRlZCBhc3NlcnRpb24gaXMgZmFsc3lcclxuICovXHJcbmNvbnN0IGFzc2VydCA9IGZ1bmN0aW9uIChhc3NlcnRpb24sIG1lc3NhZ2UpIHtcclxuICAgIGlmICghYXNzZXJ0aW9uKSB7XHJcbiAgICAgICAgdGhyb3cgYXNzZXJ0aW9uRXJyb3IobWVzc2FnZSk7XHJcbiAgICB9XHJcbn07XHJcbi8qKlxyXG4gKiBSZXR1cm5zIGFuIEVycm9yIG9iamVjdCBzdWl0YWJsZSBmb3IgdGhyb3dpbmcuXHJcbiAqL1xyXG5jb25zdCBhc3NlcnRpb25FcnJvciA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XHJcbiAgICByZXR1cm4gbmV3IEVycm9yKCdGaXJlYmFzZSBEYXRhYmFzZSAoJyArXHJcbiAgICAgICAgQ09OU1RBTlRTLlNES19WRVJTSU9OICtcclxuICAgICAgICAnKSBJTlRFUk5BTCBBU1NFUlQgRkFJTEVEOiAnICtcclxuICAgICAgICBtZXNzYWdlKTtcclxufTtcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3Qgc3RyaW5nVG9CeXRlQXJyYXkkMSA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIC8vIFRPRE8odXNlcik6IFVzZSBuYXRpdmUgaW1wbGVtZW50YXRpb25zIGlmL3doZW4gYXZhaWxhYmxlXHJcbiAgICBjb25zdCBvdXQgPSBbXTtcclxuICAgIGxldCBwID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGMgPSBzdHIuY2hhckNvZGVBdChpKTtcclxuICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IGM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gNikgfCAxOTI7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChjICYgMHhmYzAwKSA9PT0gMHhkODAwICYmXHJcbiAgICAgICAgICAgIGkgKyAxIDwgc3RyLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmYzAwKSA9PT0gMHhkYzAwKSB7XHJcbiAgICAgICAgICAgIC8vIFN1cnJvZ2F0ZSBQYWlyXHJcbiAgICAgICAgICAgIGMgPSAweDEwMDAwICsgKChjICYgMHgwM2ZmKSA8PCAxMCkgKyAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4MDNmZik7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gMTgpIHwgMjQwO1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiAxMikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyA+PiAxMikgfCAyMjQ7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKChjID4+IDYpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjICYgNjMpIHwgMTI4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBvdXQ7XHJcbn07XHJcbi8qKlxyXG4gKiBUdXJucyBhbiBhcnJheSBvZiBudW1iZXJzIGludG8gdGhlIHN0cmluZyBnaXZlbiBieSB0aGUgY29uY2F0ZW5hdGlvbiBvZiB0aGVcclxuICogY2hhcmFjdGVycyB0byB3aGljaCB0aGUgbnVtYmVycyBjb3JyZXNwb25kLlxyXG4gKiBAcGFyYW0gYnl0ZXMgQXJyYXkgb2YgbnVtYmVycyByZXByZXNlbnRpbmcgY2hhcmFjdGVycy5cclxuICogQHJldHVybiBTdHJpbmdpZmljYXRpb24gb2YgdGhlIGFycmF5LlxyXG4gKi9cclxuY29uc3QgYnl0ZUFycmF5VG9TdHJpbmcgPSBmdW5jdGlvbiAoYnl0ZXMpIHtcclxuICAgIC8vIFRPRE8odXNlcik6IFVzZSBuYXRpdmUgaW1wbGVtZW50YXRpb25zIGlmL3doZW4gYXZhaWxhYmxlXHJcbiAgICBjb25zdCBvdXQgPSBbXTtcclxuICAgIGxldCBwb3MgPSAwLCBjID0gMDtcclxuICAgIHdoaWxlIChwb3MgPCBieXRlcy5sZW5ndGgpIHtcclxuICAgICAgICBjb25zdCBjMSA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICBpZiAoYzEgPCAxMjgpIHtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYzEgPiAxOTEgJiYgYzEgPCAyMjQpIHtcclxuICAgICAgICAgICAgY29uc3QgYzIgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIG91dFtjKytdID0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMxICYgMzEpIDw8IDYpIHwgKGMyICYgNjMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYzEgPiAyMzkgJiYgYzEgPCAzNjUpIHtcclxuICAgICAgICAgICAgLy8gU3Vycm9nYXRlIFBhaXJcclxuICAgICAgICAgICAgY29uc3QgYzIgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIGNvbnN0IGMzID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICBjb25zdCBjNCA9IGJ5dGVzW3BvcysrXTtcclxuICAgICAgICAgICAgY29uc3QgdSA9ICgoKGMxICYgNykgPDwgMTgpIHwgKChjMiAmIDYzKSA8PCAxMikgfCAoKGMzICYgNjMpIDw8IDYpIHwgKGM0ICYgNjMpKSAtXHJcbiAgICAgICAgICAgICAgICAweDEwMDAwO1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoMHhkODAwICsgKHUgPj4gMTApKTtcclxuICAgICAgICAgICAgb3V0W2MrK10gPSBTdHJpbmcuZnJvbUNoYXJDb2RlKDB4ZGMwMCArICh1ICYgMTAyMykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYzIgPSBieXRlc1twb3MrK107XHJcbiAgICAgICAgICAgIGNvbnN0IGMzID0gYnl0ZXNbcG9zKytdO1xyXG4gICAgICAgICAgICBvdXRbYysrXSA9IFN0cmluZy5mcm9tQ2hhckNvZGUoKChjMSAmIDE1KSA8PCAxMikgfCAoKGMyICYgNjMpIDw8IDYpIHwgKGMzICYgNjMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0LmpvaW4oJycpO1xyXG59O1xyXG4vLyBXZSBkZWZpbmUgaXQgYXMgYW4gb2JqZWN0IGxpdGVyYWwgaW5zdGVhZCBvZiBhIGNsYXNzIGJlY2F1c2UgYSBjbGFzcyBjb21waWxlZCBkb3duIHRvIGVzNSBjYW4ndFxyXG4vLyBiZSB0cmVlc2hha2VkLiBodHRwczovL2dpdGh1Yi5jb20vcm9sbHVwL3JvbGx1cC9pc3N1ZXMvMTY5MVxyXG4vLyBTdGF0aWMgbG9va3VwIG1hcHMsIGxhemlseSBwb3B1bGF0ZWQgYnkgaW5pdF8oKVxyXG5jb25zdCBiYXNlNjQgPSB7XHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYnl0ZXMgdG8gY2hhcmFjdGVycy5cclxuICAgICAqL1xyXG4gICAgYnl0ZVRvQ2hhck1hcF86IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgY2hhcmFjdGVycyB0byBieXRlcy5cclxuICAgICAqL1xyXG4gICAgY2hhclRvQnl0ZU1hcF86IG51bGwsXHJcbiAgICAvKipcclxuICAgICAqIE1hcHMgYnl0ZXMgdG8gd2Vic2FmZSBjaGFyYWN0ZXJzLlxyXG4gICAgICogQHByaXZhdGVcclxuICAgICAqL1xyXG4gICAgYnl0ZVRvQ2hhck1hcFdlYlNhZmVfOiBudWxsLFxyXG4gICAgLyoqXHJcbiAgICAgKiBNYXBzIHdlYnNhZmUgY2hhcmFjdGVycyB0byBieXRlcy5cclxuICAgICAqIEBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNoYXJUb0J5dGVNYXBXZWJTYWZlXzogbnVsbCxcclxuICAgIC8qKlxyXG4gICAgICogT3VyIGRlZmF1bHQgYWxwaGFiZXQsIHNoYXJlZCBiZXR3ZWVuXHJcbiAgICAgKiBFTkNPREVEX1ZBTFMgYW5kIEVOQ09ERURfVkFMU19XRUJTQUZFXHJcbiAgICAgKi9cclxuICAgIEVOQ09ERURfVkFMU19CQVNFOiAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVonICsgJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6JyArICcwMTIzNDU2Nzg5JyxcclxuICAgIC8qKlxyXG4gICAgICogT3VyIGRlZmF1bHQgYWxwaGFiZXQuIFZhbHVlIDY0ICg9KSBpcyBzcGVjaWFsOyBpdCBtZWFucyBcIm5vdGhpbmcuXCJcclxuICAgICAqL1xyXG4gICAgZ2V0IEVOQ09ERURfVkFMUygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5FTkNPREVEX1ZBTFNfQkFTRSArICcrLz0nO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogT3VyIHdlYnNhZmUgYWxwaGFiZXQuXHJcbiAgICAgKi9cclxuICAgIGdldCBFTkNPREVEX1ZBTFNfV0VCU0FGRSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5FTkNPREVEX1ZBTFNfQkFTRSArICctXy4nO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogV2hldGhlciB0aGlzIGJyb3dzZXIgc3VwcG9ydHMgdGhlIGF0b2IgYW5kIGJ0b2EgZnVuY3Rpb25zLiBUaGlzIGV4dGVuc2lvblxyXG4gICAgICogc3RhcnRlZCBhdCBNb3ppbGxhIGJ1dCBpcyBub3cgaW1wbGVtZW50ZWQgYnkgbWFueSBicm93c2Vycy4gV2UgdXNlIHRoZVxyXG4gICAgICogQVNTVU1FXyogdmFyaWFibGVzIHRvIGF2b2lkIHB1bGxpbmcgaW4gdGhlIGZ1bGwgdXNlcmFnZW50IGRldGVjdGlvbiBsaWJyYXJ5XHJcbiAgICAgKiBidXQgc3RpbGwgYWxsb3dpbmcgdGhlIHN0YW5kYXJkIHBlci1icm93c2VyIGNvbXBpbGF0aW9ucy5cclxuICAgICAqXHJcbiAgICAgKi9cclxuICAgIEhBU19OQVRJVkVfU1VQUE9SVDogdHlwZW9mIGF0b2IgPT09ICdmdW5jdGlvbicsXHJcbiAgICAvKipcclxuICAgICAqIEJhc2U2NC1lbmNvZGUgYW4gYXJyYXkgb2YgYnl0ZXMuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlucHV0IEFuIGFycmF5IG9mIGJ5dGVzIChudW1iZXJzIHdpdGhcclxuICAgICAqICAgICB2YWx1ZSBpbiBbMCwgMjU1XSkgdG8gZW5jb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgQm9vbGVhbiBpbmRpY2F0aW5nIHdlIHNob3VsZCB1c2UgdGhlXHJcbiAgICAgKiAgICAgYWx0ZXJuYXRpdmUgYWxwaGFiZXQuXHJcbiAgICAgKiBAcmV0dXJuIFRoZSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGVuY29kZUJ5dGVBcnJheShpbnB1dCwgd2ViU2FmZSkge1xyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShpbnB1dCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgRXJyb3IoJ2VuY29kZUJ5dGVBcnJheSB0YWtlcyBhbiBhcnJheSBhcyBhIHBhcmFtZXRlcicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmluaXRfKCk7XHJcbiAgICAgICAgY29uc3QgYnl0ZVRvQ2hhck1hcCA9IHdlYlNhZmVcclxuICAgICAgICAgICAgPyB0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlX1xyXG4gICAgICAgICAgICA6IHRoaXMuYnl0ZVRvQ2hhck1hcF87XHJcbiAgICAgICAgY29uc3Qgb3V0cHV0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbnB1dC5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMSA9IGlucHV0W2ldO1xyXG4gICAgICAgICAgICBjb25zdCBoYXZlQnl0ZTIgPSBpICsgMSA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZTIgPSBoYXZlQnl0ZTIgPyBpbnB1dFtpICsgMV0gOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBoYXZlQnl0ZTMgPSBpICsgMiA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZTMgPSBoYXZlQnl0ZTMgPyBpbnB1dFtpICsgMl0gOiAwO1xyXG4gICAgICAgICAgICBjb25zdCBvdXRCeXRlMSA9IGJ5dGUxID4+IDI7XHJcbiAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUyID0gKChieXRlMSAmIDB4MDMpIDw8IDQpIHwgKGJ5dGUyID4+IDQpO1xyXG4gICAgICAgICAgICBsZXQgb3V0Qnl0ZTMgPSAoKGJ5dGUyICYgMHgwZikgPDwgMikgfCAoYnl0ZTMgPj4gNik7XHJcbiAgICAgICAgICAgIGxldCBvdXRCeXRlNCA9IGJ5dGUzICYgMHgzZjtcclxuICAgICAgICAgICAgaWYgKCFoYXZlQnl0ZTMpIHtcclxuICAgICAgICAgICAgICAgIG91dEJ5dGU0ID0gNjQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWhhdmVCeXRlMikge1xyXG4gICAgICAgICAgICAgICAgICAgIG91dEJ5dGUzID0gNjQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3V0cHV0LnB1c2goYnl0ZVRvQ2hhck1hcFtvdXRCeXRlMV0sIGJ5dGVUb0NoYXJNYXBbb3V0Qnl0ZTJdLCBieXRlVG9DaGFyTWFwW291dEJ5dGUzXSwgYnl0ZVRvQ2hhck1hcFtvdXRCeXRlNF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xyXG4gICAgfSxcclxuICAgIC8qKlxyXG4gICAgICogQmFzZTY0LWVuY29kZSBhIHN0cmluZy5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaW5wdXQgQSBzdHJpbmcgdG8gZW5jb2RlLlxyXG4gICAgICogQHBhcmFtIHdlYlNhZmUgSWYgdHJ1ZSwgd2Ugc2hvdWxkIHVzZSB0aGVcclxuICAgICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cclxuICAgICAqIEByZXR1cm4gVGhlIGJhc2U2NCBlbmNvZGVkIHN0cmluZy5cclxuICAgICAqL1xyXG4gICAgZW5jb2RlU3RyaW5nKGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgLy8gU2hvcnRjdXQgZm9yIE1vemlsbGEgYnJvd3NlcnMgdGhhdCBpbXBsZW1lbnRcclxuICAgICAgICAvLyBhIG5hdGl2ZSBiYXNlNjQgZW5jb2RlciBpbiB0aGUgZm9ybSBvZiBcImJ0b2EvYXRvYlwiXHJcbiAgICAgICAgaWYgKHRoaXMuSEFTX05BVElWRV9TVVBQT1JUICYmICF3ZWJTYWZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBidG9hKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZW5jb2RlQnl0ZUFycmF5KHN0cmluZ1RvQnl0ZUFycmF5JDEoaW5wdXQpLCB3ZWJTYWZlKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEJhc2U2NC1kZWNvZGUgYSBzdHJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlucHV0IHRvIGRlY29kZS5cclxuICAgICAqIEBwYXJhbSB3ZWJTYWZlIFRydWUgaWYgd2Ugc2hvdWxkIHVzZSB0aGVcclxuICAgICAqICAgICBhbHRlcm5hdGl2ZSBhbHBoYWJldC5cclxuICAgICAqIEByZXR1cm4gc3RyaW5nIHJlcHJlc2VudGluZyB0aGUgZGVjb2RlZCB2YWx1ZS5cclxuICAgICAqL1xyXG4gICAgZGVjb2RlU3RyaW5nKGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgLy8gU2hvcnRjdXQgZm9yIE1vemlsbGEgYnJvd3NlcnMgdGhhdCBpbXBsZW1lbnRcclxuICAgICAgICAvLyBhIG5hdGl2ZSBiYXNlNjQgZW5jb2RlciBpbiB0aGUgZm9ybSBvZiBcImJ0b2EvYXRvYlwiXHJcbiAgICAgICAgaWYgKHRoaXMuSEFTX05BVElWRV9TVVBQT1JUICYmICF3ZWJTYWZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhdG9iKGlucHV0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJ5dGVBcnJheVRvU3RyaW5nKHRoaXMuZGVjb2RlU3RyaW5nVG9CeXRlQXJyYXkoaW5wdXQsIHdlYlNhZmUpKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIEJhc2U2NC1kZWNvZGUgYSBzdHJpbmcuXHJcbiAgICAgKlxyXG4gICAgICogSW4gYmFzZS02NCBkZWNvZGluZywgZ3JvdXBzIG9mIGZvdXIgY2hhcmFjdGVycyBhcmUgY29udmVydGVkIGludG8gdGhyZWVcclxuICAgICAqIGJ5dGVzLiAgSWYgdGhlIGVuY29kZXIgZGlkIG5vdCBhcHBseSBwYWRkaW5nLCB0aGUgaW5wdXQgbGVuZ3RoIG1heSBub3RcclxuICAgICAqIGJlIGEgbXVsdGlwbGUgb2YgNC5cclxuICAgICAqXHJcbiAgICAgKiBJbiB0aGlzIGNhc2UsIHRoZSBsYXN0IGdyb3VwIHdpbGwgaGF2ZSBmZXdlciB0aGFuIDQgY2hhcmFjdGVycywgYW5kXHJcbiAgICAgKiBwYWRkaW5nIHdpbGwgYmUgaW5mZXJyZWQuICBJZiB0aGUgZ3JvdXAgaGFzIG9uZSBvciB0d28gY2hhcmFjdGVycywgaXQgZGVjb2Rlc1xyXG4gICAgICogdG8gb25lIGJ5dGUuICBJZiB0aGUgZ3JvdXAgaGFzIHRocmVlIGNoYXJhY3RlcnMsIGl0IGRlY29kZXMgdG8gdHdvIGJ5dGVzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBpbnB1dCBJbnB1dCB0byBkZWNvZGUuXHJcbiAgICAgKiBAcGFyYW0gd2ViU2FmZSBUcnVlIGlmIHdlIHNob3VsZCB1c2UgdGhlIHdlYi1zYWZlIGFscGhhYmV0LlxyXG4gICAgICogQHJldHVybiBieXRlcyByZXByZXNlbnRpbmcgdGhlIGRlY29kZWQgdmFsdWUuXHJcbiAgICAgKi9cclxuICAgIGRlY29kZVN0cmluZ1RvQnl0ZUFycmF5KGlucHV0LCB3ZWJTYWZlKSB7XHJcbiAgICAgICAgdGhpcy5pbml0XygpO1xyXG4gICAgICAgIGNvbnN0IGNoYXJUb0J5dGVNYXAgPSB3ZWJTYWZlXHJcbiAgICAgICAgICAgID8gdGhpcy5jaGFyVG9CeXRlTWFwV2ViU2FmZV9cclxuICAgICAgICAgICAgOiB0aGlzLmNoYXJUb0J5dGVNYXBfO1xyXG4gICAgICAgIGNvbnN0IG91dHB1dCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5wdXQubGVuZ3RoOykge1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMSA9IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkrKyldO1xyXG4gICAgICAgICAgICBjb25zdCBoYXZlQnl0ZTIgPSBpIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlMiA9IGhhdmVCeXRlMiA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDA7XHJcbiAgICAgICAgICAgICsraTtcclxuICAgICAgICAgICAgY29uc3QgaGF2ZUJ5dGUzID0gaSA8IGlucHV0Lmxlbmd0aDtcclxuICAgICAgICAgICAgY29uc3QgYnl0ZTMgPSBoYXZlQnl0ZTMgPyBjaGFyVG9CeXRlTWFwW2lucHV0LmNoYXJBdChpKV0gOiA2NDtcclxuICAgICAgICAgICAgKytpO1xyXG4gICAgICAgICAgICBjb25zdCBoYXZlQnl0ZTQgPSBpIDwgaW5wdXQubGVuZ3RoO1xyXG4gICAgICAgICAgICBjb25zdCBieXRlNCA9IGhhdmVCeXRlNCA/IGNoYXJUb0J5dGVNYXBbaW5wdXQuY2hhckF0KGkpXSA6IDY0O1xyXG4gICAgICAgICAgICArK2k7XHJcbiAgICAgICAgICAgIGlmIChieXRlMSA9PSBudWxsIHx8IGJ5dGUyID09IG51bGwgfHwgYnl0ZTMgPT0gbnVsbCB8fCBieXRlNCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBFcnJvcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUxID0gKGJ5dGUxIDw8IDIpIHwgKGJ5dGUyID4+IDQpO1xyXG4gICAgICAgICAgICBvdXRwdXQucHVzaChvdXRCeXRlMSk7XHJcbiAgICAgICAgICAgIGlmIChieXRlMyAhPT0gNjQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUyID0gKChieXRlMiA8PCA0KSAmIDB4ZjApIHwgKGJ5dGUzID4+IDIpO1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJ5dGU0ICE9PSA2NCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG91dEJ5dGUzID0gKChieXRlMyA8PCA2KSAmIDB4YzApIHwgYnl0ZTQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3V0cHV0LnB1c2gob3V0Qnl0ZTMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvdXRwdXQ7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiBMYXp5IHN0YXRpYyBpbml0aWFsaXphdGlvbiBmdW5jdGlvbi4gQ2FsbGVkIGJlZm9yZVxyXG4gICAgICogYWNjZXNzaW5nIGFueSBvZiB0aGUgc3RhdGljIG1hcCB2YXJpYWJsZXMuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBpbml0XygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYnl0ZVRvQ2hhck1hcF8pIHtcclxuICAgICAgICAgICAgdGhpcy5ieXRlVG9DaGFyTWFwXyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcFdlYlNhZmVfID0ge307XHJcbiAgICAgICAgICAgIC8vIFdlIHdhbnQgcXVpY2sgbWFwcGluZ3MgYmFjayBhbmQgZm9ydGgsIHNvIHdlIHByZWNvbXB1dGUgdHdvIG1hcHMuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5FTkNPREVEX1ZBTFMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcF9baV0gPSB0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBfW3RoaXMuYnl0ZVRvQ2hhck1hcF9baV1dID0gaTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnl0ZVRvQ2hhck1hcFdlYlNhZmVfW2ldID0gdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLmJ5dGVUb0NoYXJNYXBXZWJTYWZlX1tpXV0gPSBpO1xyXG4gICAgICAgICAgICAgICAgLy8gQmUgZm9yZ2l2aW5nIHdoZW4gZGVjb2RpbmcgYW5kIGNvcnJlY3RseSBkZWNvZGUgYm90aCBlbmNvZGluZ3MuXHJcbiAgICAgICAgICAgICAgICBpZiAoaSA+PSB0aGlzLkVOQ09ERURfVkFMU19CQVNFLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhclRvQnl0ZU1hcF9bdGhpcy5FTkNPREVEX1ZBTFNfV0VCU0FGRS5jaGFyQXQoaSldID0gaTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJUb0J5dGVNYXBXZWJTYWZlX1t0aGlzLkVOQ09ERURfVkFMUy5jaGFyQXQoaSldID0gaTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufTtcclxuLyoqXHJcbiAqIFVSTC1zYWZlIGJhc2U2NCBlbmNvZGluZ1xyXG4gKi9cclxuY29uc3QgYmFzZTY0RW5jb2RlID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgY29uc3QgdXRmOEJ5dGVzID0gc3RyaW5nVG9CeXRlQXJyYXkkMShzdHIpO1xyXG4gICAgcmV0dXJuIGJhc2U2NC5lbmNvZGVCeXRlQXJyYXkodXRmOEJ5dGVzLCB0cnVlKTtcclxufTtcclxuLyoqXHJcbiAqIFVSTC1zYWZlIGJhc2U2NCBlbmNvZGluZyAod2l0aG91dCBcIi5cIiBwYWRkaW5nIGluIHRoZSBlbmQpLlxyXG4gKiBlLmcuIFVzZWQgaW4gSlNPTiBXZWIgVG9rZW4gKEpXVCkgcGFydHMuXHJcbiAqL1xyXG5jb25zdCBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZyA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIC8vIFVzZSBiYXNlNjR1cmwgZW5jb2RpbmcgYW5kIHJlbW92ZSBwYWRkaW5nIGluIHRoZSBlbmQgKGRvdCBjaGFyYWN0ZXJzKS5cclxuICAgIHJldHVybiBiYXNlNjRFbmNvZGUoc3RyKS5yZXBsYWNlKC9cXC4vZywgJycpO1xyXG59O1xyXG4vKipcclxuICogVVJMLXNhZmUgYmFzZTY0IGRlY29kaW5nXHJcbiAqXHJcbiAqIE5PVEU6IERPIE5PVCB1c2UgdGhlIGdsb2JhbCBhdG9iKCkgZnVuY3Rpb24gLSBpdCBkb2VzIE5PVCBzdXBwb3J0IHRoZVxyXG4gKiBiYXNlNjRVcmwgdmFyaWFudCBlbmNvZGluZy5cclxuICpcclxuICogQHBhcmFtIHN0ciBUbyBiZSBkZWNvZGVkXHJcbiAqIEByZXR1cm4gRGVjb2RlZCByZXN1bHQsIGlmIHBvc3NpYmxlXHJcbiAqL1xyXG5jb25zdCBiYXNlNjREZWNvZGUgPSBmdW5jdGlvbiAoc3RyKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJldHVybiBiYXNlNjQuZGVjb2RlU3RyaW5nKHN0ciwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Jhc2U2NERlY29kZSBmYWlsZWQ6ICcsIGUpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBEbyBhIGRlZXAtY29weSBvZiBiYXNpYyBKYXZhU2NyaXB0IE9iamVjdHMgb3IgQXJyYXlzLlxyXG4gKi9cclxuZnVuY3Rpb24gZGVlcENvcHkodmFsdWUpIHtcclxuICAgIHJldHVybiBkZWVwRXh0ZW5kKHVuZGVmaW5lZCwgdmFsdWUpO1xyXG59XHJcbi8qKlxyXG4gKiBDb3B5IHByb3BlcnRpZXMgZnJvbSBzb3VyY2UgdG8gdGFyZ2V0IChyZWN1cnNpdmVseSBhbGxvd3MgZXh0ZW5zaW9uXHJcbiAqIG9mIE9iamVjdHMgYW5kIEFycmF5cykuICBTY2FsYXIgdmFsdWVzIGluIHRoZSB0YXJnZXQgYXJlIG92ZXItd3JpdHRlbi5cclxuICogSWYgdGFyZ2V0IGlzIHVuZGVmaW5lZCwgYW4gb2JqZWN0IG9mIHRoZSBhcHByb3ByaWF0ZSB0eXBlIHdpbGwgYmUgY3JlYXRlZFxyXG4gKiAoYW5kIHJldHVybmVkKS5cclxuICpcclxuICogV2UgcmVjdXJzaXZlbHkgY29weSBhbGwgY2hpbGQgcHJvcGVydGllcyBvZiBwbGFpbiBPYmplY3RzIGluIHRoZSBzb3VyY2UtIHNvXHJcbiAqIHRoYXQgbmFtZXNwYWNlLSBsaWtlIGRpY3Rpb25hcmllcyBhcmUgbWVyZ2VkLlxyXG4gKlxyXG4gKiBOb3RlIHRoYXQgdGhlIHRhcmdldCBjYW4gYmUgYSBmdW5jdGlvbiwgaW4gd2hpY2ggY2FzZSB0aGUgcHJvcGVydGllcyBpblxyXG4gKiB0aGUgc291cmNlIE9iamVjdCBhcmUgY29waWVkIG9udG8gaXQgYXMgc3RhdGljIHByb3BlcnRpZXMgb2YgdGhlIEZ1bmN0aW9uLlxyXG4gKlxyXG4gKiBOb3RlOiB3ZSBkb24ndCBtZXJnZSBfX3Byb3RvX18gdG8gcHJldmVudCBwcm90b3R5cGUgcG9sbHV0aW9uXHJcbiAqL1xyXG5mdW5jdGlvbiBkZWVwRXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XHJcbiAgICBpZiAoIShzb3VyY2UgaW5zdGFuY2VvZiBPYmplY3QpKSB7XHJcbiAgICAgICAgcmV0dXJuIHNvdXJjZTtcclxuICAgIH1cclxuICAgIHN3aXRjaCAoc291cmNlLmNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgY2FzZSBEYXRlOlxyXG4gICAgICAgICAgICAvLyBUcmVhdCBEYXRlcyBsaWtlIHNjYWxhcnM7IGlmIHRoZSB0YXJnZXQgZGF0ZSBvYmplY3QgaGFkIGFueSBjaGlsZFxyXG4gICAgICAgICAgICAvLyBwcm9wZXJ0aWVzIC0gdGhleSB3aWxsIGJlIGxvc3QhXHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGVWYWx1ZSA9IHNvdXJjZTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVWYWx1ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIGNhc2UgT2JqZWN0OlxyXG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHt9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQXJyYXk6XHJcbiAgICAgICAgICAgIC8vIEFsd2F5cyBjb3B5IHRoZSBhcnJheSBzb3VyY2UgYW5kIG92ZXJ3cml0ZSB0aGUgdGFyZ2V0LlxyXG4gICAgICAgICAgICB0YXJnZXQgPSBbXTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgLy8gTm90IGEgcGxhaW4gT2JqZWN0IC0gdHJlYXQgaXQgYXMgYSBzY2FsYXIuXHJcbiAgICAgICAgICAgIHJldHVybiBzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHByb3AgaW4gc291cmNlKSB7XHJcbiAgICAgICAgLy8gdXNlIGlzVmFsaWRLZXkgdG8gZ3VhcmQgYWdhaW5zdCBwcm90b3R5cGUgcG9sbHV0aW9uLiBTZWUgaHR0cHM6Ly9zbnlrLmlvL3Z1bG4vU05ZSy1KUy1MT0RBU0gtNDUwMjAyXHJcbiAgICAgICAgaWYgKCFzb3VyY2UuaGFzT3duUHJvcGVydHkocHJvcCkgfHwgIWlzVmFsaWRLZXkocHJvcCkpIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IGRlZXBFeHRlbmQodGFyZ2V0W3Byb3BdLCBzb3VyY2VbcHJvcF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldDtcclxufVxyXG5mdW5jdGlvbiBpc1ZhbGlkS2V5KGtleSkge1xyXG4gICAgcmV0dXJuIGtleSAhPT0gJ19fcHJvdG9fXyc7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY2xhc3MgRGVmZXJyZWQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5yZWplY3QgPSAoKSA9PiB7IH07XHJcbiAgICAgICAgdGhpcy5yZXNvbHZlID0gKCkgPT4geyB9O1xyXG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcclxuICAgICAgICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIE91ciBBUEkgaW50ZXJuYWxzIGFyZSBub3QgcHJvbWlzZWlmaWVkIGFuZCBjYW5ub3QgYmVjYXVzZSBvdXIgY2FsbGJhY2sgQVBJcyBoYXZlIHN1YnRsZSBleHBlY3RhdGlvbnMgYXJvdW5kXHJcbiAgICAgKiBpbnZva2luZyBwcm9taXNlcyBpbmxpbmUsIHdoaWNoIFByb21pc2VzIGFyZSBmb3JiaWRkZW4gdG8gZG8uIFRoaXMgbWV0aG9kIGFjY2VwdHMgYW4gb3B0aW9uYWwgbm9kZS1zdHlsZSBjYWxsYmFja1xyXG4gICAgICogYW5kIHJldHVybnMgYSBub2RlLXN0eWxlIGNhbGxiYWNrIHdoaWNoIHdpbGwgcmVzb2x2ZSBvciByZWplY3QgdGhlIERlZmVycmVkJ3MgcHJvbWlzZS5cclxuICAgICAqL1xyXG4gICAgd3JhcENhbGxiYWNrKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgcmV0dXJuIChlcnJvciwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc29sdmUodmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIC8vIEF0dGFjaGluZyBub29wIGhhbmRsZXIganVzdCBpbiBjYXNlIGRldmVsb3BlciB3YXNuJ3QgZXhwZWN0aW5nXHJcbiAgICAgICAgICAgICAgICAvLyBwcm9taXNlc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9taXNlLmNhdGNoKCgpID0+IHsgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyBTb21lIG9mIG91ciBjYWxsYmFja3MgZG9uJ3QgZXhwZWN0IGEgdmFsdWUgYW5kIG91ciBvd24gdGVzdHNcclxuICAgICAgICAgICAgICAgIC8vIGFzc2VydCB0aGF0IHRoZSBwYXJhbWV0ZXIgbGVuZ3RoIGlzIDFcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjay5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlcnJvciwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVNb2NrVXNlclRva2VuKHRva2VuLCBwcm9qZWN0SWQpIHtcclxuICAgIGlmICh0b2tlbi51aWQpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBcInVpZFwiIGZpZWxkIGlzIG5vIGxvbmdlciBzdXBwb3J0ZWQgYnkgbW9ja1VzZXJUb2tlbi4gUGxlYXNlIHVzZSBcInN1YlwiIGluc3RlYWQgZm9yIEZpcmViYXNlIEF1dGggVXNlciBJRC4nKTtcclxuICAgIH1cclxuICAgIC8vIFVuc2VjdXJlZCBKV1RzIHVzZSBcIm5vbmVcIiBhcyB0aGUgYWxnb3JpdGhtLlxyXG4gICAgY29uc3QgaGVhZGVyID0ge1xyXG4gICAgICAgIGFsZzogJ25vbmUnLFxyXG4gICAgICAgIHR5cGU6ICdKV1QnXHJcbiAgICB9O1xyXG4gICAgY29uc3QgcHJvamVjdCA9IHByb2plY3RJZCB8fCAnZGVtby1wcm9qZWN0JztcclxuICAgIGNvbnN0IGlhdCA9IHRva2VuLmlhdCB8fCAwO1xyXG4gICAgY29uc3Qgc3ViID0gdG9rZW4uc3ViIHx8IHRva2VuLnVzZXJfaWQ7XHJcbiAgICBpZiAoIXN1Yikge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIm1vY2tVc2VyVG9rZW4gbXVzdCBjb250YWluICdzdWInIG9yICd1c2VyX2lkJyBmaWVsZCFcIik7XHJcbiAgICB9XHJcbiAgICBjb25zdCBwYXlsb2FkID0gT2JqZWN0LmFzc2lnbih7IFxyXG4gICAgICAgIC8vIFNldCBhbGwgcmVxdWlyZWQgZmllbGRzIHRvIGRlY2VudCBkZWZhdWx0c1xyXG4gICAgICAgIGlzczogYGh0dHBzOi8vc2VjdXJldG9rZW4uZ29vZ2xlLmNvbS8ke3Byb2plY3R9YCwgYXVkOiBwcm9qZWN0LCBpYXQsIGV4cDogaWF0ICsgMzYwMCwgYXV0aF90aW1lOiBpYXQsIHN1YiwgdXNlcl9pZDogc3ViLCBmaXJlYmFzZToge1xyXG4gICAgICAgICAgICBzaWduX2luX3Byb3ZpZGVyOiAnY3VzdG9tJyxcclxuICAgICAgICAgICAgaWRlbnRpdGllczoge31cclxuICAgICAgICB9IH0sIHRva2VuKTtcclxuICAgIC8vIFVuc2VjdXJlZCBKV1RzIHVzZSB0aGUgZW1wdHkgc3RyaW5nIGFzIGEgc2lnbmF0dXJlLlxyXG4gICAgY29uc3Qgc2lnbmF0dXJlID0gJyc7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKEpTT04uc3RyaW5naWZ5KGhlYWRlcikpLFxyXG4gICAgICAgIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKEpTT04uc3RyaW5naWZ5KHBheWxvYWQpKSxcclxuICAgICAgICBzaWduYXR1cmVcclxuICAgIF0uam9pbignLicpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBSZXR1cm5zIG5hdmlnYXRvci51c2VyQWdlbnQgc3RyaW5nIG9yICcnIGlmIGl0J3Mgbm90IGRlZmluZWQuXHJcbiAqIEByZXR1cm4gdXNlciBhZ2VudCBzdHJpbmdcclxuICovXHJcbmZ1bmN0aW9uIGdldFVBKCkge1xyXG4gICAgaWYgKHR5cGVvZiBuYXZpZ2F0b3IgIT09ICd1bmRlZmluZWQnICYmXHJcbiAgICAgICAgdHlwZW9mIG5hdmlnYXRvclsndXNlckFnZW50J10gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hdmlnYXRvclsndXNlckFnZW50J107XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBDb3Jkb3ZhIC8gUGhvbmVHYXAgLyBJb25pYyBmcmFtZXdvcmtzIG9uIGEgbW9iaWxlIGRldmljZS5cclxuICpcclxuICogRGVsaWJlcmF0ZWx5IGRvZXMgbm90IHJlbHkgb24gY2hlY2tpbmcgYGZpbGU6Ly9gIFVSTHMgKGFzIHRoaXMgZmFpbHMgUGhvbmVHYXBcclxuICogaW4gdGhlIFJpcHBsZSBlbXVsYXRvcikgbm9yIENvcmRvdmEgYG9uRGV2aWNlUmVhZHlgLCB3aGljaCB3b3VsZCBub3JtYWxseVxyXG4gKiB3YWl0IGZvciBhIGNhbGxiYWNrLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNNb2JpbGVDb3Jkb3ZhKCkge1xyXG4gICAgcmV0dXJuICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmUgU2V0dGluZyB1cCBhbiBicm9hZGx5IGFwcGxpY2FibGUgaW5kZXggc2lnbmF0dXJlIGZvciBXaW5kb3dcclxuICAgICAgICAvLyBqdXN0IHRvIGRlYWwgd2l0aCB0aGlzIGNhc2Ugd291bGQgcHJvYmFibHkgYmUgYSBiYWQgaWRlYS5cclxuICAgICAgICAhISh3aW5kb3dbJ2NvcmRvdmEnXSB8fCB3aW5kb3dbJ3Bob25lZ2FwJ10gfHwgd2luZG93WydQaG9uZUdhcCddKSAmJlxyXG4gICAgICAgIC9pb3N8aXBob25lfGlwb2R8aXBhZHxhbmRyb2lkfGJsYWNrYmVycnl8aWVtb2JpbGUvaS50ZXN0KGdldFVBKCkpKTtcclxufVxyXG4vKipcclxuICogRGV0ZWN0IE5vZGUuanMuXHJcbiAqXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBOb2RlLmpzIGVudmlyb25tZW50IGlzIGRldGVjdGVkLlxyXG4gKi9cclxuLy8gTm9kZSBkZXRlY3Rpb24gbG9naWMgZnJvbTogaHR0cHM6Ly9naXRodWIuY29tL2lsaWFrYW4vZGV0ZWN0LW5vZGUvXHJcbmZ1bmN0aW9uIGlzTm9kZSgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmV0dXJuIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZ2xvYmFsLnByb2Nlc3MpID09PSAnW29iamVjdCBwcm9jZXNzXScpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIERldGVjdCBCcm93c2VyIEVudmlyb25tZW50XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0Jyb3dzZXIoKSB7XHJcbiAgICByZXR1cm4gdHlwZW9mIHNlbGYgPT09ICdvYmplY3QnICYmIHNlbGYuc2VsZiA9PT0gc2VsZjtcclxufVxyXG5mdW5jdGlvbiBpc0Jyb3dzZXJFeHRlbnNpb24oKSB7XHJcbiAgICBjb25zdCBydW50aW1lID0gdHlwZW9mIGNocm9tZSA9PT0gJ29iamVjdCdcclxuICAgICAgICA/IGNocm9tZS5ydW50aW1lXHJcbiAgICAgICAgOiB0eXBlb2YgYnJvd3NlciA9PT0gJ29iamVjdCdcclxuICAgICAgICAgICAgPyBicm93c2VyLnJ1bnRpbWVcclxuICAgICAgICAgICAgOiB1bmRlZmluZWQ7XHJcbiAgICByZXR1cm4gdHlwZW9mIHJ1bnRpbWUgPT09ICdvYmplY3QnICYmIHJ1bnRpbWUuaWQgIT09IHVuZGVmaW5lZDtcclxufVxyXG4vKipcclxuICogRGV0ZWN0IFJlYWN0IE5hdGl2ZS5cclxuICpcclxuICogQHJldHVybiB0cnVlIGlmIFJlYWN0TmF0aXZlIGVudmlyb25tZW50IGlzIGRldGVjdGVkLlxyXG4gKi9cclxuZnVuY3Rpb24gaXNSZWFjdE5hdGl2ZSgpIHtcclxuICAgIHJldHVybiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ29iamVjdCcgJiYgbmF2aWdhdG9yWydwcm9kdWN0J10gPT09ICdSZWFjdE5hdGl2ZScpO1xyXG59XHJcbi8qKiBEZXRlY3RzIEVsZWN0cm9uIGFwcHMuICovXHJcbmZ1bmN0aW9uIGlzRWxlY3Ryb24oKSB7XHJcbiAgICByZXR1cm4gZ2V0VUEoKS5pbmRleE9mKCdFbGVjdHJvbi8nKSA+PSAwO1xyXG59XHJcbi8qKiBEZXRlY3RzIEludGVybmV0IEV4cGxvcmVyLiAqL1xyXG5mdW5jdGlvbiBpc0lFKCkge1xyXG4gICAgY29uc3QgdWEgPSBnZXRVQSgpO1xyXG4gICAgcmV0dXJuIHVhLmluZGV4T2YoJ01TSUUgJykgPj0gMCB8fCB1YS5pbmRleE9mKCdUcmlkZW50LycpID49IDA7XHJcbn1cclxuLyoqIERldGVjdHMgVW5pdmVyc2FsIFdpbmRvd3MgUGxhdGZvcm0gYXBwcy4gKi9cclxuZnVuY3Rpb24gaXNVV1AoKSB7XHJcbiAgICByZXR1cm4gZ2V0VUEoKS5pbmRleE9mKCdNU0FwcEhvc3QvJykgPj0gMDtcclxufVxyXG4vKipcclxuICogRGV0ZWN0IHdoZXRoZXIgdGhlIGN1cnJlbnQgU0RLIGJ1aWxkIGlzIHRoZSBOb2RlIHZlcnNpb24uXHJcbiAqXHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBpdCdzIHRoZSBOb2RlIFNESyBidWlsZC5cclxuICovXHJcbmZ1bmN0aW9uIGlzTm9kZVNkaygpIHtcclxuICAgIHJldHVybiBDT05TVEFOVFMuTk9ERV9DTElFTlQgPT09IHRydWUgfHwgQ09OU1RBTlRTLk5PREVfQURNSU4gPT09IHRydWU7XHJcbn1cclxuLyoqIFJldHVybnMgdHJ1ZSBpZiB3ZSBhcmUgcnVubmluZyBpbiBTYWZhcmkuICovXHJcbmZ1bmN0aW9uIGlzU2FmYXJpKCkge1xyXG4gICAgcmV0dXJuICghaXNOb2RlKCkgJiZcclxuICAgICAgICBuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdTYWZhcmknKSAmJlxyXG4gICAgICAgICFuYXZpZ2F0b3IudXNlckFnZW50LmluY2x1ZGVzKCdDaHJvbWUnKSk7XHJcbn1cclxuLyoqXHJcbiAqIFRoaXMgbWV0aG9kIGNoZWNrcyBpZiBpbmRleGVkREIgaXMgc3VwcG9ydGVkIGJ5IGN1cnJlbnQgYnJvd3Nlci9zZXJ2aWNlIHdvcmtlciBjb250ZXh0XHJcbiAqIEByZXR1cm4gdHJ1ZSBpZiBpbmRleGVkREIgaXMgc3VwcG9ydGVkIGJ5IGN1cnJlbnQgYnJvd3Nlci9zZXJ2aWNlIHdvcmtlciBjb250ZXh0XHJcbiAqL1xyXG5mdW5jdGlvbiBpc0luZGV4ZWREQkF2YWlsYWJsZSgpIHtcclxuICAgIHJldHVybiB0eXBlb2YgaW5kZXhlZERCID09PSAnb2JqZWN0JztcclxufVxyXG4vKipcclxuICogVGhpcyBtZXRob2QgdmFsaWRhdGVzIGJyb3dzZXIvc3cgY29udGV4dCBmb3IgaW5kZXhlZERCIGJ5IG9wZW5pbmcgYSBkdW1teSBpbmRleGVkREIgZGF0YWJhc2UgYW5kIHJlamVjdFxyXG4gKiBpZiBlcnJvcnMgb2NjdXIgZHVyaW5nIHRoZSBkYXRhYmFzZSBvcGVuIG9wZXJhdGlvbi5cclxuICpcclxuICogQHRocm93cyBleGNlcHRpb24gaWYgY3VycmVudCBicm93c2VyL3N3IGNvbnRleHQgY2FuJ3QgcnVuIGlkYi5vcGVuIChleDogU2FmYXJpIGlmcmFtZSwgRmlyZWZveFxyXG4gKiBwcml2YXRlIGJyb3dzaW5nKVxyXG4gKi9cclxuZnVuY3Rpb24gdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgbGV0IHByZUV4aXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgY29uc3QgREJfQ0hFQ0tfTkFNRSA9ICd2YWxpZGF0ZS1icm93c2VyLWNvbnRleHQtZm9yLWluZGV4ZWRkYi1hbmFseXRpY3MtbW9kdWxlJztcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdCA9IHNlbGYuaW5kZXhlZERCLm9wZW4oREJfQ0hFQ0tfTkFNRSk7XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub25zdWNjZXNzID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdC5yZXN1bHQuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSBkYXRhYmFzZSBvbmx5IHdoZW4gaXQgZG9lc24ndCBwcmUtZXhpc3RcclxuICAgICAgICAgICAgICAgIGlmICghcHJlRXhpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmluZGV4ZWREQi5kZWxldGVEYXRhYmFzZShEQl9DSEVDS19OQU1FKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc29sdmUodHJ1ZSk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJlcXVlc3Qub251cGdyYWRlbmVlZGVkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcHJlRXhpc3QgPSBmYWxzZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmVxdWVzdC5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KCgoX2EgPSByZXF1ZXN0LmVycm9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWVzc2FnZSkgfHwgJycpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4vKipcclxuICpcclxuICogVGhpcyBtZXRob2QgY2hlY2tzIHdoZXRoZXIgY29va2llIGlzIGVuYWJsZWQgd2l0aGluIGN1cnJlbnQgYnJvd3NlclxyXG4gKiBAcmV0dXJuIHRydWUgaWYgY29va2llIGlzIGVuYWJsZWQgd2l0aGluIGN1cnJlbnQgYnJvd3NlclxyXG4gKi9cclxuZnVuY3Rpb24gYXJlQ29va2llc0VuYWJsZWQoKSB7XHJcbiAgICBpZiAodHlwZW9mIG5hdmlnYXRvciA9PT0gJ3VuZGVmaW5lZCcgfHwgIW5hdmlnYXRvci5jb29raWVFbmFibGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuLyoqXHJcbiAqIFBvbHlmaWxsIGZvciBgZ2xvYmFsVGhpc2Agb2JqZWN0LlxyXG4gKiBAcmV0dXJucyB0aGUgYGdsb2JhbFRoaXNgIG9iamVjdCBmb3IgdGhlIGdpdmVuIGVudmlyb25tZW50LlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0R2xvYmFsKCkge1xyXG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBzZWxmO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdztcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHJldHVybiBnbG9iYWw7XHJcbiAgICB9XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdC4nKTtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGZpbGVvdmVydmlldyBTdGFuZGFyZGl6ZWQgRmlyZWJhc2UgRXJyb3IuXHJcbiAqXHJcbiAqIFVzYWdlOlxyXG4gKlxyXG4gKiAgIC8vIFR5cGVzY3JpcHQgc3RyaW5nIGxpdGVyYWxzIGZvciB0eXBlLXNhZmUgY29kZXNcclxuICogICB0eXBlIEVyciA9XHJcbiAqICAgICAndW5rbm93bicgfFxyXG4gKiAgICAgJ29iamVjdC1ub3QtZm91bmQnXHJcbiAqICAgICA7XHJcbiAqXHJcbiAqICAgLy8gQ2xvc3VyZSBlbnVtIGZvciB0eXBlLXNhZmUgZXJyb3IgY29kZXNcclxuICogICAvLyBhdC1lbnVtIHtzdHJpbmd9XHJcbiAqICAgdmFyIEVyciA9IHtcclxuICogICAgIFVOS05PV046ICd1bmtub3duJyxcclxuICogICAgIE9CSkVDVF9OT1RfRk9VTkQ6ICdvYmplY3Qtbm90LWZvdW5kJyxcclxuICogICB9XHJcbiAqXHJcbiAqICAgbGV0IGVycm9yczogTWFwPEVyciwgc3RyaW5nPiA9IHtcclxuICogICAgICdnZW5lcmljLWVycm9yJzogXCJVbmtub3duIGVycm9yXCIsXHJcbiAqICAgICAnZmlsZS1ub3QtZm91bmQnOiBcIkNvdWxkIG5vdCBmaW5kIGZpbGU6IHskZmlsZX1cIixcclxuICogICB9O1xyXG4gKlxyXG4gKiAgIC8vIFR5cGUtc2FmZSBmdW5jdGlvbiAtIG11c3QgcGFzcyBhIHZhbGlkIGVycm9yIGNvZGUgYXMgcGFyYW0uXHJcbiAqICAgbGV0IGVycm9yID0gbmV3IEVycm9yRmFjdG9yeTxFcnI+KCdzZXJ2aWNlJywgJ1NlcnZpY2UnLCBlcnJvcnMpO1xyXG4gKlxyXG4gKiAgIC4uLlxyXG4gKiAgIHRocm93IGVycm9yLmNyZWF0ZShFcnIuR0VORVJJQyk7XHJcbiAqICAgLi4uXHJcbiAqICAgdGhyb3cgZXJyb3IuY3JlYXRlKEVyci5GSUxFX05PVF9GT1VORCwgeydmaWxlJzogZmlsZU5hbWV9KTtcclxuICogICAuLi5cclxuICogICAvLyBTZXJ2aWNlOiBDb3VsZCBub3QgZmlsZSBmaWxlOiBmb28udHh0IChzZXJ2aWNlL2ZpbGUtbm90LWZvdW5kKS5cclxuICpcclxuICogICBjYXRjaCAoZSkge1xyXG4gKiAgICAgYXNzZXJ0KGUubWVzc2FnZSA9PT0gXCJDb3VsZCBub3QgZmluZCBmaWxlOiBmb28udHh0LlwiKTtcclxuICogICAgIGlmIChlLmNvZGUgPT09ICdzZXJ2aWNlL2ZpbGUtbm90LWZvdW5kJykge1xyXG4gKiAgICAgICBjb25zb2xlLmxvZyhcIkNvdWxkIG5vdCByZWFkIGZpbGU6IFwiICsgZVsnZmlsZSddKTtcclxuICogICAgIH1cclxuICogICB9XHJcbiAqL1xyXG5jb25zdCBFUlJPUl9OQU1FID0gJ0ZpcmViYXNlRXJyb3InO1xyXG4vLyBCYXNlZCBvbiBjb2RlIGZyb206XHJcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0Vycm9yI0N1c3RvbV9FcnJvcl9UeXBlc1xyXG5jbGFzcyBGaXJlYmFzZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAvKiogVGhlIGVycm9yIGNvZGUgZm9yIHRoaXMgZXJyb3IuICovXHJcbiAgICBjb2RlLCBtZXNzYWdlLCBcclxuICAgIC8qKiBDdXN0b20gZGF0YSBmb3IgdGhpcyBlcnJvci4gKi9cclxuICAgIGN1c3RvbURhdGEpIHtcclxuICAgICAgICBzdXBlcihtZXNzYWdlKTtcclxuICAgICAgICB0aGlzLmNvZGUgPSBjb2RlO1xyXG4gICAgICAgIHRoaXMuY3VzdG9tRGF0YSA9IGN1c3RvbURhdGE7XHJcbiAgICAgICAgLyoqIFRoZSBjdXN0b20gbmFtZSBmb3IgYWxsIEZpcmViYXNlRXJyb3JzLiAqL1xyXG4gICAgICAgIHRoaXMubmFtZSA9IEVSUk9SX05BTUU7XHJcbiAgICAgICAgLy8gRml4IEZvciBFUzVcclxuICAgICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L1R5cGVTY3JpcHQtd2lraS9ibG9iL21hc3Rlci9CcmVha2luZy1DaGFuZ2VzLm1kI2V4dGVuZGluZy1idWlsdC1pbnMtbGlrZS1lcnJvci1hcnJheS1hbmQtbWFwLW1heS1uby1sb25nZXItd29ya1xyXG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBGaXJlYmFzZUVycm9yLnByb3RvdHlwZSk7XHJcbiAgICAgICAgLy8gTWFpbnRhaW5zIHByb3BlciBzdGFjayB0cmFjZSBmb3Igd2hlcmUgb3VyIGVycm9yIHdhcyB0aHJvd24uXHJcbiAgICAgICAgLy8gT25seSBhdmFpbGFibGUgb24gVjguXHJcbiAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XHJcbiAgICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIEVycm9yRmFjdG9yeS5wcm90b3R5cGUuY3JlYXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgRXJyb3JGYWN0b3J5IHtcclxuICAgIGNvbnN0cnVjdG9yKHNlcnZpY2UsIHNlcnZpY2VOYW1lLCBlcnJvcnMpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2UgPSBzZXJ2aWNlO1xyXG4gICAgICAgIHRoaXMuc2VydmljZU5hbWUgPSBzZXJ2aWNlTmFtZTtcclxuICAgICAgICB0aGlzLmVycm9ycyA9IGVycm9ycztcclxuICAgIH1cclxuICAgIGNyZWF0ZShjb2RlLCAuLi5kYXRhKSB7XHJcbiAgICAgICAgY29uc3QgY3VzdG9tRGF0YSA9IGRhdGFbMF0gfHwge307XHJcbiAgICAgICAgY29uc3QgZnVsbENvZGUgPSBgJHt0aGlzLnNlcnZpY2V9LyR7Y29kZX1gO1xyXG4gICAgICAgIGNvbnN0IHRlbXBsYXRlID0gdGhpcy5lcnJvcnNbY29kZV07XHJcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRlbXBsYXRlID8gcmVwbGFjZVRlbXBsYXRlKHRlbXBsYXRlLCBjdXN0b21EYXRhKSA6ICdFcnJvcic7XHJcbiAgICAgICAgLy8gU2VydmljZSBOYW1lOiBFcnJvciBtZXNzYWdlIChzZXJ2aWNlL2NvZGUpLlxyXG4gICAgICAgIGNvbnN0IGZ1bGxNZXNzYWdlID0gYCR7dGhpcy5zZXJ2aWNlTmFtZX06ICR7bWVzc2FnZX0gKCR7ZnVsbENvZGV9KS5gO1xyXG4gICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEZpcmViYXNlRXJyb3IoZnVsbENvZGUsIGZ1bGxNZXNzYWdlLCBjdXN0b21EYXRhKTtcclxuICAgICAgICByZXR1cm4gZXJyb3I7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gcmVwbGFjZVRlbXBsYXRlKHRlbXBsYXRlLCBkYXRhKSB7XHJcbiAgICByZXR1cm4gdGVtcGxhdGUucmVwbGFjZShQQVRURVJOLCAoXywga2V5KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW2tleV07XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlICE9IG51bGwgPyBTdHJpbmcodmFsdWUpIDogYDwke2tleX0/PmA7XHJcbiAgICB9KTtcclxufVxyXG5jb25zdCBQQVRURVJOID0gL1xce1xcJChbXn1dKyl9L2c7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBFdmFsdWF0ZXMgYSBKU09OIHN0cmluZyBpbnRvIGEgamF2YXNjcmlwdCBvYmplY3QuXHJcbiAqXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgQSBzdHJpbmcgY29udGFpbmluZyBKU09OLlxyXG4gKiBAcmV0dXJuIHsqfSBUaGUgamF2YXNjcmlwdCBvYmplY3QgcmVwcmVzZW50aW5nIHRoZSBzcGVjaWZpZWQgSlNPTi5cclxuICovXHJcbmZ1bmN0aW9uIGpzb25FdmFsKHN0cikge1xyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc3RyKTtcclxufVxyXG4vKipcclxuICogUmV0dXJucyBKU09OIHJlcHJlc2VudGluZyBhIGphdmFzY3JpcHQgb2JqZWN0LlxyXG4gKiBAcGFyYW0geyp9IGRhdGEgSmF2YXNjcmlwdCBvYmplY3QgdG8gYmUgc3RyaW5naWZpZWQuXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gVGhlIEpTT04gY29udGVudHMgb2YgdGhlIG9iamVjdC5cclxuICovXHJcbmZ1bmN0aW9uIHN0cmluZ2lmeShkYXRhKSB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZGF0YSk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBpbnRvIGNvbnN0aXR1ZW50IHBhcnRzLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIHdpdGggaW52YWxpZCAvIGluY29tcGxldGUgY2xhaW1zIGlmIHRoZXJlJ3Mgbm8gbmF0aXZlIGJhc2U2NCBkZWNvZGluZyBzdXBwb3J0LlxyXG4gKiAtIERvZXNuJ3QgY2hlY2sgaWYgdGhlIHRva2VuIGlzIGFjdHVhbGx5IHZhbGlkLlxyXG4gKi9cclxuY29uc3QgZGVjb2RlID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICBsZXQgaGVhZGVyID0ge30sIGNsYWltcyA9IHt9LCBkYXRhID0ge30sIHNpZ25hdHVyZSA9ICcnO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHRva2VuLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgaGVhZGVyID0ganNvbkV2YWwoYmFzZTY0RGVjb2RlKHBhcnRzWzBdKSB8fCAnJyk7XHJcbiAgICAgICAgY2xhaW1zID0ganNvbkV2YWwoYmFzZTY0RGVjb2RlKHBhcnRzWzFdKSB8fCAnJyk7XHJcbiAgICAgICAgc2lnbmF0dXJlID0gcGFydHNbMl07XHJcbiAgICAgICAgZGF0YSA9IGNsYWltc1snZCddIHx8IHt9O1xyXG4gICAgICAgIGRlbGV0ZSBjbGFpbXNbJ2QnXTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7IH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaGVhZGVyLFxyXG4gICAgICAgIGNsYWltcyxcclxuICAgICAgICBkYXRhLFxyXG4gICAgICAgIHNpZ25hdHVyZVxyXG4gICAgfTtcclxufTtcclxuLyoqXHJcbiAqIERlY29kZXMgYSBGaXJlYmFzZSBhdXRoLiB0b2tlbiBhbmQgY2hlY2tzIHRoZSB2YWxpZGl0eSBvZiBpdHMgdGltZS1iYXNlZCBjbGFpbXMuIFdpbGwgcmV0dXJuIHRydWUgaWYgdGhlXHJcbiAqIHRva2VuIGlzIHdpdGhpbiB0aGUgdGltZSB3aW5kb3cgYXV0aG9yaXplZCBieSB0aGUgJ25iZicgKG5vdC1iZWZvcmUpIGFuZCAnaWF0JyAoaXNzdWVkLWF0KSBjbGFpbXMuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gYSBmYWxzZSBuZWdhdGl2ZSBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbmNvbnN0IGlzVmFsaWRUaW1lc3RhbXAgPSBmdW5jdGlvbiAodG9rZW4pIHtcclxuICAgIGNvbnN0IGNsYWltcyA9IGRlY29kZSh0b2tlbikuY2xhaW1zO1xyXG4gICAgY29uc3Qgbm93ID0gTWF0aC5mbG9vcihuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApO1xyXG4gICAgbGV0IHZhbGlkU2luY2UgPSAwLCB2YWxpZFVudGlsID0gMDtcclxuICAgIGlmICh0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ25iZicpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkU2luY2UgPSBjbGFpbXNbJ25iZiddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjbGFpbXMuaGFzT3duUHJvcGVydHkoJ2lhdCcpKSB7XHJcbiAgICAgICAgICAgIHZhbGlkU2luY2UgPSBjbGFpbXNbJ2lhdCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2xhaW1zLmhhc093blByb3BlcnR5KCdleHAnKSkge1xyXG4gICAgICAgICAgICB2YWxpZFVudGlsID0gY2xhaW1zWydleHAnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRva2VuIHdpbGwgZXhwaXJlIGFmdGVyIDI0aCBieSBkZWZhdWx0XHJcbiAgICAgICAgICAgIHZhbGlkVW50aWwgPSB2YWxpZFNpbmNlICsgODY0MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuICghIW5vdyAmJlxyXG4gICAgICAgICEhdmFsaWRTaW5jZSAmJlxyXG4gICAgICAgICEhdmFsaWRVbnRpbCAmJlxyXG4gICAgICAgIG5vdyA+PSB2YWxpZFNpbmNlICYmXHJcbiAgICAgICAgbm93IDw9IHZhbGlkVW50aWwpO1xyXG59O1xyXG4vKipcclxuICogRGVjb2RlcyBhIEZpcmViYXNlIGF1dGguIHRva2VuIGFuZCByZXR1cm5zIGl0cyBpc3N1ZWQgYXQgdGltZSBpZiB2YWxpZCwgbnVsbCBvdGhlcndpc2UuXHJcbiAqXHJcbiAqIE5vdGVzOlxyXG4gKiAtIE1heSByZXR1cm4gbnVsbCBpZiB0aGVyZSdzIG5vIG5hdGl2ZSBiYXNlNjQgZGVjb2Rpbmcgc3VwcG9ydC5cclxuICogLSBEb2Vzbid0IGNoZWNrIGlmIHRoZSB0b2tlbiBpcyBhY3R1YWxseSB2YWxpZC5cclxuICovXHJcbmNvbnN0IGlzc3VlZEF0VGltZSA9IGZ1bmN0aW9uICh0b2tlbikge1xyXG4gICAgY29uc3QgY2xhaW1zID0gZGVjb2RlKHRva2VuKS5jbGFpbXM7XHJcbiAgICBpZiAodHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcgJiYgY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKSkge1xyXG4gICAgICAgIHJldHVybiBjbGFpbXNbJ2lhdCddO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG51bGw7XHJcbn07XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgRmlyZWJhc2UgYXV0aC4gdG9rZW4gYW5kIGNoZWNrcyB0aGUgdmFsaWRpdHkgb2YgaXRzIGZvcm1hdC4gRXhwZWN0cyBhIHZhbGlkIGlzc3VlZC1hdCB0aW1lLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG5jb25zdCBpc1ZhbGlkRm9ybWF0ID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICBjb25zdCBkZWNvZGVkID0gZGVjb2RlKHRva2VuKSwgY2xhaW1zID0gZGVjb2RlZC5jbGFpbXM7XHJcbiAgICByZXR1cm4gISFjbGFpbXMgJiYgdHlwZW9mIGNsYWltcyA9PT0gJ29iamVjdCcgJiYgY2xhaW1zLmhhc093blByb3BlcnR5KCdpYXQnKTtcclxufTtcclxuLyoqXHJcbiAqIEF0dGVtcHRzIHRvIHBlZXIgaW50byBhbiBhdXRoIHRva2VuIGFuZCBkZXRlcm1pbmUgaWYgaXQncyBhbiBhZG1pbiBhdXRoIHRva2VuIGJ5IGxvb2tpbmcgYXQgdGhlIGNsYWltcyBwb3J0aW9uLlxyXG4gKlxyXG4gKiBOb3RlczpcclxuICogLSBNYXkgcmV0dXJuIGEgZmFsc2UgbmVnYXRpdmUgaWYgdGhlcmUncyBubyBuYXRpdmUgYmFzZTY0IGRlY29kaW5nIHN1cHBvcnQuXHJcbiAqIC0gRG9lc24ndCBjaGVjayBpZiB0aGUgdG9rZW4gaXMgYWN0dWFsbHkgdmFsaWQuXHJcbiAqL1xyXG5jb25zdCBpc0FkbWluID0gZnVuY3Rpb24gKHRva2VuKSB7XHJcbiAgICBjb25zdCBjbGFpbXMgPSBkZWNvZGUodG9rZW4pLmNsYWltcztcclxuICAgIHJldHVybiB0eXBlb2YgY2xhaW1zID09PSAnb2JqZWN0JyAmJiBjbGFpbXNbJ2FkbWluJ10gPT09IHRydWU7XHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmZ1bmN0aW9uIGNvbnRhaW5zKG9iaiwga2V5KSB7XHJcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KTtcclxufVxyXG5mdW5jdGlvbiBzYWZlR2V0KG9iaiwga2V5KSB7XHJcbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xyXG4gICAgICAgIHJldHVybiBvYmpba2V5XTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaXNFbXB0eShvYmopIHtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBtYXAob2JqLCBmbiwgY29udGV4dE9iaikge1xyXG4gICAgY29uc3QgcmVzID0ge307XHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwga2V5KSkge1xyXG4gICAgICAgICAgICByZXNba2V5XSA9IGZuLmNhbGwoY29udGV4dE9iaiwgb2JqW2tleV0sIGtleSwgb2JqKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzO1xyXG59XHJcbi8qKlxyXG4gKiBEZWVwIGVxdWFsIHR3byBvYmplY3RzLiBTdXBwb3J0IEFycmF5cyBhbmQgT2JqZWN0cy5cclxuICovXHJcbmZ1bmN0aW9uIGRlZXBFcXVhbChhLCBiKSB7XHJcbiAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgY29uc3QgYUtleXMgPSBPYmplY3Qua2V5cyhhKTtcclxuICAgIGNvbnN0IGJLZXlzID0gT2JqZWN0LmtleXMoYik7XHJcbiAgICBmb3IgKGNvbnN0IGsgb2YgYUtleXMpIHtcclxuICAgICAgICBpZiAoIWJLZXlzLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYVByb3AgPSBhW2tdO1xyXG4gICAgICAgIGNvbnN0IGJQcm9wID0gYltrXTtcclxuICAgICAgICBpZiAoaXNPYmplY3QoYVByb3ApICYmIGlzT2JqZWN0KGJQcm9wKSkge1xyXG4gICAgICAgICAgICBpZiAoIWRlZXBFcXVhbChhUHJvcCwgYlByb3ApKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYVByb3AgIT09IGJQcm9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGsgb2YgYktleXMpIHtcclxuICAgICAgICBpZiAoIWFLZXlzLmluY2x1ZGVzKGspKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG5mdW5jdGlvbiBpc09iamVjdCh0aGluZykge1xyXG4gICAgcmV0dXJuIHRoaW5nICE9PSBudWxsICYmIHR5cGVvZiB0aGluZyA9PT0gJ29iamVjdCc7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFJldHVybnMgYSBxdWVyeXN0cmluZy1mb3JtYXR0ZWQgc3RyaW5nIChlLmcuICZhcmc9dmFsJmFyZzI9dmFsMikgZnJvbSBhXHJcbiAqIHBhcmFtcyBvYmplY3QgKGUuZy4ge2FyZzogJ3ZhbCcsIGFyZzI6ICd2YWwyJ30pXHJcbiAqIE5vdGU6IFlvdSBtdXN0IHByZXBlbmQgaXQgd2l0aCA/IHdoZW4gYWRkaW5nIGl0IHRvIGEgVVJMLlxyXG4gKi9cclxuZnVuY3Rpb24gcXVlcnlzdHJpbmcocXVlcnlzdHJpbmdQYXJhbXMpIHtcclxuICAgIGNvbnN0IHBhcmFtcyA9IFtdO1xyXG4gICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMocXVlcnlzdHJpbmdQYXJhbXMpKSB7XHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHZhbHVlLmZvckVhY2goYXJyYXlWYWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoYXJyYXlWYWwpKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwYXJhbXMucHVzaChlbmNvZGVVUklDb21wb25lbnQoa2V5KSArICc9JyArIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBwYXJhbXMubGVuZ3RoID8gJyYnICsgcGFyYW1zLmpvaW4oJyYnKSA6ICcnO1xyXG59XHJcbi8qKlxyXG4gKiBEZWNvZGVzIGEgcXVlcnlzdHJpbmcgKGUuZy4gP2FyZz12YWwmYXJnMj12YWwyKSBpbnRvIGEgcGFyYW1zIG9iamVjdFxyXG4gKiAoZS5nLiB7YXJnOiAndmFsJywgYXJnMjogJ3ZhbDInfSlcclxuICovXHJcbmZ1bmN0aW9uIHF1ZXJ5c3RyaW5nRGVjb2RlKHF1ZXJ5c3RyaW5nKSB7XHJcbiAgICBjb25zdCBvYmogPSB7fTtcclxuICAgIGNvbnN0IHRva2VucyA9IHF1ZXJ5c3RyaW5nLnJlcGxhY2UoL15cXD8vLCAnJykuc3BsaXQoJyYnKTtcclxuICAgIHRva2Vucy5mb3JFYWNoKHRva2VuID0+IHtcclxuICAgICAgICBpZiAodG9rZW4pIHtcclxuICAgICAgICAgICAgY29uc3QgW2tleSwgdmFsdWVdID0gdG9rZW4uc3BsaXQoJz0nKTtcclxuICAgICAgICAgICAgb2JqW2RlY29kZVVSSUNvbXBvbmVudChrZXkpXSA9IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcbi8qKlxyXG4gKiBFeHRyYWN0IHRoZSBxdWVyeSBzdHJpbmcgcGFydCBvZiBhIFVSTCwgaW5jbHVkaW5nIHRoZSBsZWFkaW5nIHF1ZXN0aW9uIG1hcmsgKGlmIHByZXNlbnQpLlxyXG4gKi9cclxuZnVuY3Rpb24gZXh0cmFjdFF1ZXJ5c3RyaW5nKHVybCkge1xyXG4gICAgY29uc3QgcXVlcnlTdGFydCA9IHVybC5pbmRleE9mKCc/Jyk7XHJcbiAgICBpZiAoIXF1ZXJ5U3RhcnQpIHtcclxuICAgICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgICBjb25zdCBmcmFnbWVudFN0YXJ0ID0gdXJsLmluZGV4T2YoJyMnLCBxdWVyeVN0YXJ0KTtcclxuICAgIHJldHVybiB1cmwuc3Vic3RyaW5nKHF1ZXJ5U3RhcnQsIGZyYWdtZW50U3RhcnQgPiAwID8gZnJhZ21lbnRTdGFydCA6IHVuZGVmaW5lZCk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIEBmaWxlb3ZlcnZpZXcgU0hBLTEgY3J5cHRvZ3JhcGhpYyBoYXNoLlxyXG4gKiBWYXJpYWJsZSBuYW1lcyBmb2xsb3cgdGhlIG5vdGF0aW9uIGluIEZJUFMgUFVCIDE4MC0zOlxyXG4gKiBodHRwOi8vY3NyYy5uaXN0Lmdvdi9wdWJsaWNhdGlvbnMvZmlwcy9maXBzMTgwLTMvZmlwczE4MC0zX2ZpbmFsLnBkZi5cclxuICpcclxuICogVXNhZ2U6XHJcbiAqICAgdmFyIHNoYTEgPSBuZXcgc2hhMSgpO1xyXG4gKiAgIHNoYTEudXBkYXRlKGJ5dGVzKTtcclxuICogICB2YXIgaGFzaCA9IHNoYTEuZGlnZXN0KCk7XHJcbiAqXHJcbiAqIFBlcmZvcm1hbmNlOlxyXG4gKiAgIENocm9tZSAyMzogICB+NDAwIE1iaXQvc1xyXG4gKiAgIEZpcmVmb3ggMTY6ICB+MjUwIE1iaXQvc1xyXG4gKlxyXG4gKi9cclxuLyoqXHJcbiAqIFNIQS0xIGNyeXB0b2dyYXBoaWMgaGFzaCBjb25zdHJ1Y3Rvci5cclxuICpcclxuICogVGhlIHByb3BlcnRpZXMgZGVjbGFyZWQgaGVyZSBhcmUgZGlzY3Vzc2VkIGluIHRoZSBhYm92ZSBhbGdvcml0aG0gZG9jdW1lbnQuXHJcbiAqIEBjb25zdHJ1Y3RvclxyXG4gKiBAZmluYWxcclxuICogQHN0cnVjdFxyXG4gKi9cclxuY2xhc3MgU2hhMSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBIb2xkcyB0aGUgcHJldmlvdXMgdmFsdWVzIG9mIGFjY3VtdWxhdGVkIHZhcmlhYmxlcyBhLWUgaW4gdGhlIGNvbXByZXNzX1xyXG4gICAgICAgICAqIGZ1bmN0aW9uLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5jaGFpbl8gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBIGJ1ZmZlciBob2xkaW5nIHRoZSBwYXJ0aWFsbHkgY29tcHV0ZWQgaGFzaCByZXN1bHQuXHJcbiAgICAgICAgICogQHByaXZhdGVcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmJ1Zl8gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBBbiBhcnJheSBvZiA4MCBieXRlcywgZWFjaCBhIHBhcnQgb2YgdGhlIG1lc3NhZ2UgdG8gYmUgaGFzaGVkLiAgUmVmZXJyZWQgdG9cclxuICAgICAgICAgKiBhcyB0aGUgbWVzc2FnZSBzY2hlZHVsZSBpbiB0aGUgZG9jcy5cclxuICAgICAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuV18gPSBbXTtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBDb250YWlucyBkYXRhIG5lZWRlZCB0byBwYWQgbWVzc2FnZXMgbGVzcyB0aGFuIDY0IGJ5dGVzLlxyXG4gICAgICAgICAqIEBwcml2YXRlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5wYWRfID0gW107XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLmluYnVmXyA9IDA7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHByaXZhdGUge251bWJlcn1cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnRvdGFsXyA9IDA7XHJcbiAgICAgICAgdGhpcy5ibG9ja1NpemUgPSA1MTIgLyA4O1xyXG4gICAgICAgIHRoaXMucGFkX1swXSA9IDEyODtcclxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuYmxvY2tTaXplOyArK2kpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWRfW2ldID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXNldCgpO1xyXG4gICAgfVxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bMF0gPSAweDY3NDUyMzAxO1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzFdID0gMHhlZmNkYWI4OTtcclxuICAgICAgICB0aGlzLmNoYWluX1syXSA9IDB4OThiYWRjZmU7XHJcbiAgICAgICAgdGhpcy5jaGFpbl9bM10gPSAweDEwMzI1NDc2O1xyXG4gICAgICAgIHRoaXMuY2hhaW5fWzRdID0gMHhjM2QyZTFmMDtcclxuICAgICAgICB0aGlzLmluYnVmXyA9IDA7XHJcbiAgICAgICAgdGhpcy50b3RhbF8gPSAwO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnRlcm5hbCBjb21wcmVzcyBoZWxwZXIgZnVuY3Rpb24uXHJcbiAgICAgKiBAcGFyYW0gYnVmIEJsb2NrIHRvIGNvbXByZXNzLlxyXG4gICAgICogQHBhcmFtIG9mZnNldCBPZmZzZXQgb2YgdGhlIGJsb2NrIGluIHRoZSBidWZmZXIuXHJcbiAgICAgKiBAcHJpdmF0ZVxyXG4gICAgICovXHJcbiAgICBjb21wcmVzc18oYnVmLCBvZmZzZXQpIHtcclxuICAgICAgICBpZiAoIW9mZnNldCkge1xyXG4gICAgICAgICAgICBvZmZzZXQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBXID0gdGhpcy5XXztcclxuICAgICAgICAvLyBnZXQgMTYgYmlnIGVuZGlhbiB3b3Jkc1xyXG4gICAgICAgIGlmICh0eXBlb2YgYnVmID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8odXNlcik6IFtidWcgODE0MDEyMl0gUmVjZW50IHZlcnNpb25zIG9mIFNhZmFyaSBmb3IgTWFjIE9TIGFuZCBpT1NcclxuICAgICAgICAgICAgICAgIC8vIGhhdmUgYSBidWcgdGhhdCB0dXJucyB0aGUgcG9zdC1pbmNyZW1lbnQgKysgb3BlcmF0b3IgaW50byBwcmUtaW5jcmVtZW50XHJcbiAgICAgICAgICAgICAgICAvLyBkdXJpbmcgSklUIGNvbXBpbGF0aW9uLiAgV2UgaGF2ZSBjb2RlIHRoYXQgZGVwZW5kcyBoZWF2aWx5IG9uIFNIQS0xIGZvclxyXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdG5lc3MgYW5kIHdoaWNoIGlzIGFmZmVjdGVkIGJ5IHRoaXMgYnVnLCBzbyBJJ3ZlIHJlbW92ZWQgYWxsIHVzZXNcclxuICAgICAgICAgICAgICAgIC8vIG9mIHBvc3QtaW5jcmVtZW50ICsrIGluIHdoaWNoIHRoZSByZXN1bHQgdmFsdWUgaXMgdXNlZC4gIFdlIGNhbiByZXZlcnRcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMgY2hhbmdlIG9uY2UgdGhlIFNhZmFyaSBidWdcclxuICAgICAgICAgICAgICAgIC8vIChodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTA5MDM2KSBoYXMgYmVlbiBmaXhlZCBhbmRcclxuICAgICAgICAgICAgICAgIC8vIG1vc3QgY2xpZW50cyBoYXZlIGJlZW4gdXBkYXRlZC5cclxuICAgICAgICAgICAgICAgIFdbaV0gPVxyXG4gICAgICAgICAgICAgICAgICAgIChidWYuY2hhckNvZGVBdChvZmZzZXQpIDw8IDI0KSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChidWYuY2hhckNvZGVBdChvZmZzZXQgKyAxKSA8PCAxNikgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmLmNoYXJDb2RlQXQob2Zmc2V0ICsgMikgPDwgOCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWYuY2hhckNvZGVBdChvZmZzZXQgKyAzKTtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSA0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE2OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIFdbaV0gPVxyXG4gICAgICAgICAgICAgICAgICAgIChidWZbb2Zmc2V0XSA8PCAyNCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYnVmW29mZnNldCArIDFdIDw8IDE2KSB8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChidWZbb2Zmc2V0ICsgMl0gPDwgOCkgfFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWZbb2Zmc2V0ICsgM107XHJcbiAgICAgICAgICAgICAgICBvZmZzZXQgKz0gNDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBleHBhbmQgdG8gODAgd29yZHNcclxuICAgICAgICBmb3IgKGxldCBpID0gMTY7IGkgPCA4MDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSBXW2kgLSAzXSBeIFdbaSAtIDhdIF4gV1tpIC0gMTRdIF4gV1tpIC0gMTZdO1xyXG4gICAgICAgICAgICBXW2ldID0gKCh0IDw8IDEpIHwgKHQgPj4+IDMxKSkgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgYSA9IHRoaXMuY2hhaW5fWzBdO1xyXG4gICAgICAgIGxldCBiID0gdGhpcy5jaGFpbl9bMV07XHJcbiAgICAgICAgbGV0IGMgPSB0aGlzLmNoYWluX1syXTtcclxuICAgICAgICBsZXQgZCA9IHRoaXMuY2hhaW5fWzNdO1xyXG4gICAgICAgIGxldCBlID0gdGhpcy5jaGFpbl9bNF07XHJcbiAgICAgICAgbGV0IGYsIGs7XHJcbiAgICAgICAgLy8gVE9ETyh1c2VyKTogVHJ5IHRvIHVucm9sbCB0aGlzIGxvb3AgdG8gc3BlZWQgdXAgdGhlIGNvbXB1dGF0aW9uLlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODA7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoaSA8IDQwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaSA8IDIwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IGQgXiAoYiAmIChjIF4gZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSAweDVhODI3OTk5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZiA9IGIgXiBjIF4gZDtcclxuICAgICAgICAgICAgICAgICAgICBrID0gMHg2ZWQ5ZWJhMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChpIDwgNjApIHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gKGIgJiBjKSB8IChkICYgKGIgfCBjKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgayA9IDB4OGYxYmJjZGM7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmID0gYiBeIGMgXiBkO1xyXG4gICAgICAgICAgICAgICAgICAgIGsgPSAweGNhNjJjMWQ2O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHQgPSAoKChhIDw8IDUpIHwgKGEgPj4+IDI3KSkgKyBmICsgZSArIGsgKyBXW2ldKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgICAgIGUgPSBkO1xyXG4gICAgICAgICAgICBkID0gYztcclxuICAgICAgICAgICAgYyA9ICgoYiA8PCAzMCkgfCAoYiA+Pj4gMikpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICAgICAgYiA9IGE7XHJcbiAgICAgICAgICAgIGEgPSB0O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoYWluX1swXSA9ICh0aGlzLmNoYWluX1swXSArIGEpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1sxXSA9ICh0aGlzLmNoYWluX1sxXSArIGIpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1syXSA9ICh0aGlzLmNoYWluX1syXSArIGMpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1szXSA9ICh0aGlzLmNoYWluX1szXSArIGQpICYgMHhmZmZmZmZmZjtcclxuICAgICAgICB0aGlzLmNoYWluX1s0XSA9ICh0aGlzLmNoYWluX1s0XSArIGUpICYgMHhmZmZmZmZmZjtcclxuICAgIH1cclxuICAgIHVwZGF0ZShieXRlcywgbGVuZ3RoKSB7XHJcbiAgICAgICAgLy8gVE9ETyhqb2hubGVueik6IHRpZ2h0ZW4gdGhlIGZ1bmN0aW9uIHNpZ25hdHVyZSBhbmQgcmVtb3ZlIHRoaXMgY2hlY2tcclxuICAgICAgICBpZiAoYnl0ZXMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBsZW5ndGggPSBieXRlcy5sZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGxlbmd0aE1pbnVzQmxvY2sgPSBsZW5ndGggLSB0aGlzLmJsb2NrU2l6ZTtcclxuICAgICAgICBsZXQgbiA9IDA7XHJcbiAgICAgICAgLy8gVXNpbmcgbG9jYWwgaW5zdGVhZCBvZiBtZW1iZXIgdmFyaWFibGVzIGdpdmVzIH41JSBzcGVlZHVwIG9uIEZpcmVmb3ggMTYuXHJcbiAgICAgICAgY29uc3QgYnVmID0gdGhpcy5idWZfO1xyXG4gICAgICAgIGxldCBpbmJ1ZiA9IHRoaXMuaW5idWZfO1xyXG4gICAgICAgIC8vIFRoZSBvdXRlciB3aGlsZSBsb29wIHNob3VsZCBleGVjdXRlIGF0IG1vc3QgdHdpY2UuXHJcbiAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgLy8gV2hlbiB3ZSBoYXZlIG5vIGRhdGEgaW4gdGhlIGJsb2NrIHRvIHRvcCB1cCwgd2UgY2FuIGRpcmVjdGx5IHByb2Nlc3MgdGhlXHJcbiAgICAgICAgICAgIC8vIGlucHV0IGJ1ZmZlciAoYXNzdW1pbmcgaXQgY29udGFpbnMgc3VmZmljaWVudCBkYXRhKS4gVGhpcyBnaXZlcyB+MjUlXHJcbiAgICAgICAgICAgIC8vIHNwZWVkdXAgb24gQ2hyb21lIDIzIGFuZCB+MTUlIHNwZWVkdXAgb24gRmlyZWZveCAxNiwgYnV0IHJlcXVpcmVzIHRoYXRcclxuICAgICAgICAgICAgLy8gdGhlIGRhdGEgaXMgcHJvdmlkZWQgaW4gbGFyZ2UgY2h1bmtzIChvciBpbiBtdWx0aXBsZXMgb2YgNjQgYnl0ZXMpLlxyXG4gICAgICAgICAgICBpZiAoaW5idWYgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuIDw9IGxlbmd0aE1pbnVzQmxvY2spIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzXyhieXRlcywgbik7XHJcbiAgICAgICAgICAgICAgICAgICAgbiArPSB0aGlzLmJsb2NrU2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGJ5dGVzID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG4gPCBsZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBidWZbaW5idWZdID0gYnl0ZXMuY2hhckNvZGVBdChuKTtcclxuICAgICAgICAgICAgICAgICAgICArK2luYnVmO1xyXG4gICAgICAgICAgICAgICAgICAgICsrbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ1Zik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluYnVmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobiA8IGxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJ1ZltpbmJ1Zl0gPSBieXRlc1tuXTtcclxuICAgICAgICAgICAgICAgICAgICArK2luYnVmO1xyXG4gICAgICAgICAgICAgICAgICAgICsrbjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5idWYgPT09IHRoaXMuYmxvY2tTaXplKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcHJlc3NfKGJ1Zik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluYnVmID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSnVtcCB0byB0aGUgb3V0ZXIgbG9vcCBzbyB3ZSB1c2UgdGhlIGZ1bGwtYmxvY2sgb3B0aW1pemF0aW9uLlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbmJ1Zl8gPSBpbmJ1ZjtcclxuICAgICAgICB0aGlzLnRvdGFsXyArPSBsZW5ndGg7XHJcbiAgICB9XHJcbiAgICAvKiogQG92ZXJyaWRlICovXHJcbiAgICBkaWdlc3QoKSB7XHJcbiAgICAgICAgY29uc3QgZGlnZXN0ID0gW107XHJcbiAgICAgICAgbGV0IHRvdGFsQml0cyA9IHRoaXMudG90YWxfICogODtcclxuICAgICAgICAvLyBBZGQgcGFkIDB4ODAgMHgwMCouXHJcbiAgICAgICAgaWYgKHRoaXMuaW5idWZfIDwgNTYpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUodGhpcy5wYWRfLCA1NiAtIHRoaXMuaW5idWZfKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKHRoaXMucGFkXywgdGhpcy5ibG9ja1NpemUgLSAodGhpcy5pbmJ1Zl8gLSA1NikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgIyBiaXRzLlxyXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLmJsb2NrU2l6ZSAtIDE7IGkgPj0gNTY7IGktLSkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1Zl9baV0gPSB0b3RhbEJpdHMgJiAyNTU7XHJcbiAgICAgICAgICAgIHRvdGFsQml0cyAvPSAyNTY7IC8vIERvbid0IHVzZSBiaXQtc2hpZnRpbmcgaGVyZSFcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb21wcmVzc18odGhpcy5idWZfKTtcclxuICAgICAgICBsZXQgbiA9IDA7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA1OyBpKyspIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDI0OyBqID49IDA7IGogLT0gOCkge1xyXG4gICAgICAgICAgICAgICAgZGlnZXN0W25dID0gKHRoaXMuY2hhaW5fW2ldID4+IGopICYgMjU1O1xyXG4gICAgICAgICAgICAgICAgKytuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkaWdlc3Q7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEhlbHBlciB0byBtYWtlIGEgU3Vic2NyaWJlIGZ1bmN0aW9uIChqdXN0IGxpa2UgUHJvbWlzZSBoZWxwcyBtYWtlIGFcclxuICogVGhlbmFibGUpLlxyXG4gKlxyXG4gKiBAcGFyYW0gZXhlY3V0b3IgRnVuY3Rpb24gd2hpY2ggY2FuIG1ha2UgY2FsbHMgdG8gYSBzaW5nbGUgT2JzZXJ2ZXJcclxuICogICAgIGFzIGEgcHJveHkuXHJcbiAqIEBwYXJhbSBvbk5vT2JzZXJ2ZXJzIENhbGxiYWNrIHdoZW4gY291bnQgb2YgT2JzZXJ2ZXJzIGdvZXMgdG8gemVyby5cclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVN1YnNjcmliZShleGVjdXRvciwgb25Ob09ic2VydmVycykge1xyXG4gICAgY29uc3QgcHJveHkgPSBuZXcgT2JzZXJ2ZXJQcm94eShleGVjdXRvciwgb25Ob09ic2VydmVycyk7XHJcbiAgICByZXR1cm4gcHJveHkuc3Vic2NyaWJlLmJpbmQocHJveHkpO1xyXG59XHJcbi8qKlxyXG4gKiBJbXBsZW1lbnQgZmFuLW91dCBmb3IgYW55IG51bWJlciBvZiBPYnNlcnZlcnMgYXR0YWNoZWQgdmlhIGEgc3Vic2NyaWJlXHJcbiAqIGZ1bmN0aW9uLlxyXG4gKi9cclxuY2xhc3MgT2JzZXJ2ZXJQcm94eSB7XHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBleGVjdXRvciBGdW5jdGlvbiB3aGljaCBjYW4gbWFrZSBjYWxscyB0byBhIHNpbmdsZSBPYnNlcnZlclxyXG4gICAgICogICAgIGFzIGEgcHJveHkuXHJcbiAgICAgKiBAcGFyYW0gb25Ob09ic2VydmVycyBDYWxsYmFjayB3aGVuIGNvdW50IG9mIE9ic2VydmVycyBnb2VzIHRvIHplcm8uXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGV4ZWN1dG9yLCBvbk5vT2JzZXJ2ZXJzKSB7XHJcbiAgICAgICAgdGhpcy5vYnNlcnZlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJDb3VudCA9IDA7XHJcbiAgICAgICAgLy8gTWljcm8tdGFzayBzY2hlZHVsaW5nIGJ5IGNhbGxpbmcgdGFzay50aGVuKCkuXHJcbiAgICAgICAgdGhpcy50YXNrID0gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgdGhpcy5maW5hbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm9uTm9PYnNlcnZlcnMgPSBvbk5vT2JzZXJ2ZXJzO1xyXG4gICAgICAgIC8vIENhbGwgdGhlIGV4ZWN1dG9yIGFzeW5jaHJvbm91c2x5IHNvIHN1YnNjcmliZXJzIHRoYXQgYXJlIGNhbGxlZFxyXG4gICAgICAgIC8vIHN5bmNocm9ub3VzbHkgYWZ0ZXIgdGhlIGNyZWF0aW9uIG9mIHRoZSBzdWJzY3JpYmUgZnVuY3Rpb25cclxuICAgICAgICAvLyBjYW4gc3RpbGwgcmVjZWl2ZSB0aGUgdmVyeSBmaXJzdCB2YWx1ZSBnZW5lcmF0ZWQgaW4gdGhlIGV4ZWN1dG9yLlxyXG4gICAgICAgIHRoaXMudGFza1xyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGV4ZWN1dG9yKHRoaXMpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5lcnJvcihlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIG5leHQodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcigob2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dCh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBlcnJvcihlcnJvcikge1xyXG4gICAgICAgIHRoaXMuZm9yRWFjaE9ic2VydmVyKChvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbG9zZShlcnJvcik7XHJcbiAgICB9XHJcbiAgICBjb21wbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLmZvckVhY2hPYnNlcnZlcigob2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFN1YnNjcmliZSBmdW5jdGlvbiB0aGF0IGNhbiBiZSB1c2VkIHRvIGFkZCBhbiBPYnNlcnZlciB0byB0aGUgZmFuLW91dCBsaXN0LlxyXG4gICAgICpcclxuICAgICAqIC0gV2UgcmVxdWlyZSB0aGF0IG5vIGV2ZW50IGlzIHNlbnQgdG8gYSBzdWJzY3JpYmVyIHN5Y2hyb25vdXNseSB0byB0aGVpclxyXG4gICAgICogICBjYWxsIHRvIHN1YnNjcmliZSgpLlxyXG4gICAgICovXHJcbiAgICBzdWJzY3JpYmUobmV4dE9yT2JzZXJ2ZXIsIGVycm9yLCBjb21wbGV0ZSkge1xyXG4gICAgICAgIGxldCBvYnNlcnZlcjtcclxuICAgICAgICBpZiAobmV4dE9yT2JzZXJ2ZXIgPT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBlcnJvciA9PT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIGNvbXBsZXRlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIE9ic2VydmVyLicpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBc3NlbWJsZSBhbiBPYnNlcnZlciBvYmplY3Qgd2hlbiBwYXNzZWQgYXMgY2FsbGJhY2sgZnVuY3Rpb25zLlxyXG4gICAgICAgIGlmIChpbXBsZW1lbnRzQW55TWV0aG9kcyhuZXh0T3JPYnNlcnZlciwgW1xyXG4gICAgICAgICAgICAnbmV4dCcsXHJcbiAgICAgICAgICAgICdlcnJvcicsXHJcbiAgICAgICAgICAgICdjb21wbGV0ZSdcclxuICAgICAgICBdKSkge1xyXG4gICAgICAgICAgICBvYnNlcnZlciA9IG5leHRPck9ic2VydmVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0OiBuZXh0T3JPYnNlcnZlcixcclxuICAgICAgICAgICAgICAgIGVycm9yLFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9ic2VydmVyLm5leHQgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5uZXh0ID0gbm9vcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9ic2VydmVyLmVycm9yID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IgPSBub29wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob2JzZXJ2ZXIuY29tcGxldGUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSA9IG5vb3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHVuc3ViID0gdGhpcy51bnN1YnNjcmliZU9uZS5iaW5kKHRoaXMsIHRoaXMub2JzZXJ2ZXJzLmxlbmd0aCk7XHJcbiAgICAgICAgLy8gQXR0ZW1wdCB0byBzdWJzY3JpYmUgdG8gYSB0ZXJtaW5hdGVkIE9ic2VydmFibGUgLSB3ZVxyXG4gICAgICAgIC8vIGp1c3QgcmVzcG9uZCB0byB0aGUgT2JzZXJ2ZXIgd2l0aCB0aGUgZmluYWwgZXJyb3Igb3IgY29tcGxldGVcclxuICAgICAgICAvLyBldmVudC5cclxuICAgICAgICBpZiAodGhpcy5maW5hbGl6ZWQpIHtcclxuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgICAgICB0aGlzLnRhc2sudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbmFsRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZXJyb3IodGhpcy5maW5hbEVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBub3RoaW5nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9ic2VydmVycy5wdXNoKG9ic2VydmVyKTtcclxuICAgICAgICByZXR1cm4gdW5zdWI7XHJcbiAgICB9XHJcbiAgICAvLyBVbnN1YnNjcmliZSBpcyBzeW5jaHJvbm91cyAtIHdlIGd1YXJhbnRlZSB0aGF0IG5vIGV2ZW50cyBhcmUgc2VudCB0b1xyXG4gICAgLy8gYW55IHVuc3Vic2NyaWJlZCBPYnNlcnZlci5cclxuICAgIHVuc3Vic2NyaWJlT25lKGkpIHtcclxuICAgICAgICBpZiAodGhpcy5vYnNlcnZlcnMgPT09IHVuZGVmaW5lZCB8fCB0aGlzLm9ic2VydmVyc1tpXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGVsZXRlIHRoaXMub2JzZXJ2ZXJzW2ldO1xyXG4gICAgICAgIHRoaXMub2JzZXJ2ZXJDb3VudCAtPSAxO1xyXG4gICAgICAgIGlmICh0aGlzLm9ic2VydmVyQ291bnQgPT09IDAgJiYgdGhpcy5vbk5vT2JzZXJ2ZXJzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vbk5vT2JzZXJ2ZXJzKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZvckVhY2hPYnNlcnZlcihmbikge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xyXG4gICAgICAgICAgICAvLyBBbHJlYWR5IGNsb3NlZCBieSBwcmV2aW91cyBldmVudC4uLi5qdXN0IGVhdCB0aGUgYWRkaXRpb25hbCB2YWx1ZXMuXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gU2luY2Ugc2VuZE9uZSBjYWxscyBhc3luY2hyb25vdXNseSAtIHRoZXJlIGlzIG5vIGNoYW5jZSB0aGF0XHJcbiAgICAgICAgLy8gdGhpcy5vYnNlcnZlcnMgd2lsbCBiZWNvbWUgdW5kZWZpbmVkLlxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5vYnNlcnZlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5zZW5kT25lKGksIGZuKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBDYWxsIHRoZSBPYnNlcnZlciB2aWEgb25lIG9mIGl0J3MgY2FsbGJhY2sgZnVuY3Rpb24uIFdlIGFyZSBjYXJlZnVsIHRvXHJcbiAgICAvLyBjb25maXJtIHRoYXQgdGhlIG9ic2VydmUgaGFzIG5vdCBiZWVuIHVuc3Vic2NyaWJlZCBzaW5jZSB0aGlzIGFzeW5jaHJvbm91c1xyXG4gICAgLy8gZnVuY3Rpb24gaGFkIGJlZW4gcXVldWVkLlxyXG4gICAgc2VuZE9uZShpLCBmbikge1xyXG4gICAgICAgIC8vIEV4ZWN1dGUgdGhlIGNhbGxiYWNrIGFzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1mbG9hdGluZy1wcm9taXNlc1xyXG4gICAgICAgIHRoaXMudGFzay50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2JzZXJ2ZXJzICE9PSB1bmRlZmluZWQgJiYgdGhpcy5vYnNlcnZlcnNbaV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBmbih0aGlzLm9ic2VydmVyc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBleGNlcHRpb25zIHJhaXNlZCBpbiBPYnNlcnZlcnMgb3IgbWlzc2luZyBtZXRob2RzIG9mIGFuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gT2JzZXJ2ZXIuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gTG9nIGVycm9yIHRvIGNvbnNvbGUuIGIvMzE0MDQ4MDZcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnICYmIGNvbnNvbGUuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGNsb3NlKGVycikge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbmFsaXplZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmluYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAoZXJyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5maW5hbEVycm9yID0gZXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBQcm94eSBpcyBubyBsb25nZXIgbmVlZGVkIC0gZ2FyYmFnZSBjb2xsZWN0IHJlZmVyZW5jZXNcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWZsb2F0aW5nLXByb21pc2VzXHJcbiAgICAgICAgdGhpcy50YXNrLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9ic2VydmVycyA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdGhpcy5vbk5vT2JzZXJ2ZXJzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbi8qKiBUdXJuIHN5bmNocm9ub3VzIGZ1bmN0aW9uIGludG8gb25lIGNhbGxlZCBhc3luY2hyb25vdXNseS4gKi9cclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcclxuZnVuY3Rpb24gYXN5bmMoZm4sIG9uRXJyb3IpIHtcclxuICAgIHJldHVybiAoLi4uYXJncykgPT4ge1xyXG4gICAgICAgIFByb21pc2UucmVzb2x2ZSh0cnVlKVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGZuKC4uLmFyZ3MpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgaWYgKG9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG59XHJcbi8qKlxyXG4gKiBSZXR1cm4gdHJ1ZSBpZiB0aGUgb2JqZWN0IHBhc3NlZCBpbiBpbXBsZW1lbnRzIGFueSBvZiB0aGUgbmFtZWQgbWV0aG9kcy5cclxuICovXHJcbmZ1bmN0aW9uIGltcGxlbWVudHNBbnlNZXRob2RzKG9iaiwgbWV0aG9kcykge1xyXG4gICAgaWYgKHR5cGVvZiBvYmogIT09ICdvYmplY3QnIHx8IG9iaiA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZvciAoY29uc3QgbWV0aG9kIG9mIG1ldGhvZHMpIHtcclxuICAgICAgICBpZiAobWV0aG9kIGluIG9iaiAmJiB0eXBlb2Ygb2JqW21ldGhvZF0gPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIG5vb3AoKSB7XHJcbiAgICAvLyBkbyBub3RoaW5nXHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE3IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIENoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgYXBwcm9wcmlhdGUgbnVtYmVyIG9mIGFyZ3VtZW50cyBhcmUgcHJvdmlkZWQgZm9yIGEgcHVibGljIGZ1bmN0aW9uLlxyXG4gKiBUaHJvd3MgYW4gZXJyb3IgaWYgaXQgZmFpbHMuXHJcbiAqXHJcbiAqIEBwYXJhbSBmbk5hbWUgVGhlIGZ1bmN0aW9uIG5hbWVcclxuICogQHBhcmFtIG1pbkNvdW50IFRoZSBtaW5pbXVtIG51bWJlciBvZiBhcmd1bWVudHMgdG8gYWxsb3cgZm9yIHRoZSBmdW5jdGlvbiBjYWxsXHJcbiAqIEBwYXJhbSBtYXhDb3VudCBUaGUgbWF4aW11bSBudW1iZXIgb2YgYXJndW1lbnQgdG8gYWxsb3cgZm9yIHRoZSBmdW5jdGlvbiBjYWxsXHJcbiAqIEBwYXJhbSBhcmdDb3VudCBUaGUgYWN0dWFsIG51bWJlciBvZiBhcmd1bWVudHMgcHJvdmlkZWQuXHJcbiAqL1xyXG5jb25zdCB2YWxpZGF0ZUFyZ0NvdW50ID0gZnVuY3Rpb24gKGZuTmFtZSwgbWluQ291bnQsIG1heENvdW50LCBhcmdDb3VudCkge1xyXG4gICAgbGV0IGFyZ0Vycm9yO1xyXG4gICAgaWYgKGFyZ0NvdW50IDwgbWluQ291bnQpIHtcclxuICAgICAgICBhcmdFcnJvciA9ICdhdCBsZWFzdCAnICsgbWluQ291bnQ7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChhcmdDb3VudCA+IG1heENvdW50KSB7XHJcbiAgICAgICAgYXJnRXJyb3IgPSBtYXhDb3VudCA9PT0gMCA/ICdub25lJyA6ICdubyBtb3JlIHRoYW4gJyArIG1heENvdW50O1xyXG4gICAgfVxyXG4gICAgaWYgKGFyZ0Vycm9yKSB7XHJcbiAgICAgICAgY29uc3QgZXJyb3IgPSBmbk5hbWUgK1xyXG4gICAgICAgICAgICAnIGZhaWxlZDogV2FzIGNhbGxlZCB3aXRoICcgK1xyXG4gICAgICAgICAgICBhcmdDb3VudCArXHJcbiAgICAgICAgICAgIChhcmdDb3VudCA9PT0gMSA/ICcgYXJndW1lbnQuJyA6ICcgYXJndW1lbnRzLicpICtcclxuICAgICAgICAgICAgJyBFeHBlY3RzICcgK1xyXG4gICAgICAgICAgICBhcmdFcnJvciArXHJcbiAgICAgICAgICAgICcuJztcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3IpO1xyXG4gICAgfVxyXG59O1xyXG4vKipcclxuICogR2VuZXJhdGVzIGEgc3RyaW5nIHRvIHByZWZpeCBhbiBlcnJvciBtZXNzYWdlIGFib3V0IGZhaWxlZCBhcmd1bWVudCB2YWxpZGF0aW9uXHJcbiAqXHJcbiAqIEBwYXJhbSBmbk5hbWUgVGhlIGZ1bmN0aW9uIG5hbWVcclxuICogQHBhcmFtIGFyZ05hbWUgVGhlIG5hbWUgb2YgdGhlIGFyZ3VtZW50XHJcbiAqIEByZXR1cm4gVGhlIHByZWZpeCB0byBhZGQgdG8gdGhlIGVycm9yIHRocm93biBmb3IgdmFsaWRhdGlvbi5cclxuICovXHJcbmZ1bmN0aW9uIGVycm9yUHJlZml4KGZuTmFtZSwgYXJnTmFtZSkge1xyXG4gICAgcmV0dXJuIGAke2ZuTmFtZX0gZmFpbGVkOiAke2FyZ05hbWV9IGFyZ3VtZW50IGA7XHJcbn1cclxuLyoqXHJcbiAqIEBwYXJhbSBmbk5hbWVcclxuICogQHBhcmFtIGFyZ3VtZW50TnVtYmVyXHJcbiAqIEBwYXJhbSBuYW1lc3BhY2VcclxuICogQHBhcmFtIG9wdGlvbmFsXHJcbiAqL1xyXG5mdW5jdGlvbiB2YWxpZGF0ZU5hbWVzcGFjZShmbk5hbWUsIG5hbWVzcGFjZSwgb3B0aW9uYWwpIHtcclxuICAgIGlmIChvcHRpb25hbCAmJiAhbmFtZXNwYWNlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHR5cGVvZiBuYW1lc3BhY2UgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgLy9UT0RPOiBJIHNob3VsZCBkbyBtb3JlIHZhbGlkYXRpb24gaGVyZS4gV2Ugb25seSBhbGxvdyBjZXJ0YWluIGNoYXJzIGluIG5hbWVzcGFjZXMuXHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycm9yUHJlZml4KGZuTmFtZSwgJ25hbWVzcGFjZScpICsgJ211c3QgYmUgYSB2YWxpZCBmaXJlYmFzZSBuYW1lc3BhY2UuJyk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gdmFsaWRhdGVDYWxsYmFjayhmbk5hbWUsIGFyZ3VtZW50TmFtZSwgXHJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXHJcbmNhbGxiYWNrLCBvcHRpb25hbCkge1xyXG4gICAgaWYgKG9wdGlvbmFsICYmICFjYWxsYmFjaykge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JQcmVmaXgoZm5OYW1lLCBhcmd1bWVudE5hbWUpICsgJ211c3QgYmUgYSB2YWxpZCBmdW5jdGlvbi4nKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiB2YWxpZGF0ZUNvbnRleHRPYmplY3QoZm5OYW1lLCBhcmd1bWVudE5hbWUsIGNvbnRleHQsIG9wdGlvbmFsKSB7XHJcbiAgICBpZiAob3B0aW9uYWwgJiYgIWNvbnRleHQpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZW9mIGNvbnRleHQgIT09ICdvYmplY3QnIHx8IGNvbnRleHQgPT09IG51bGwpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyb3JQcmVmaXgoZm5OYW1lLCBhcmd1bWVudE5hbWUpICsgJ211c3QgYmUgYSB2YWxpZCBjb250ZXh0IG9iamVjdC4nKTtcclxuICAgIH1cclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTcgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vLyBDb2RlIG9yaWdpbmFsbHkgY2FtZSBmcm9tIGdvb2cuY3J5cHQuc3RyaW5nVG9VdGY4Qnl0ZUFycmF5LCBidXQgZm9yIHNvbWUgcmVhc29uIHRoZXlcclxuLy8gYXV0b21hdGljYWxseSByZXBsYWNlZCAnXFxyXFxuJyB3aXRoICdcXG4nLCBhbmQgdGhleSBkaWRuJ3QgaGFuZGxlIHN1cnJvZ2F0ZSBwYWlycyxcclxuLy8gc28gaXQncyBiZWVuIG1vZGlmaWVkLlxyXG4vLyBOb3RlIHRoYXQgbm90IGFsbCBVbmljb2RlIGNoYXJhY3RlcnMgYXBwZWFyIGFzIHNpbmdsZSBjaGFyYWN0ZXJzIGluIEphdmFTY3JpcHQgc3RyaW5ncy5cclxuLy8gZnJvbUNoYXJDb2RlIHJldHVybnMgdGhlIFVURi0xNiBlbmNvZGluZyBvZiBhIGNoYXJhY3RlciAtIHNvIHNvbWUgVW5pY29kZSBjaGFyYWN0ZXJzXHJcbi8vIHVzZSAyIGNoYXJhY3RlcnMgaW4gSmF2YXNjcmlwdC4gIEFsbCA0LWJ5dGUgVVRGLTggY2hhcmFjdGVycyBiZWdpbiB3aXRoIGEgZmlyc3RcclxuLy8gY2hhcmFjdGVyIGluIHRoZSByYW5nZSAweEQ4MDAgLSAweERCRkYgKHRoZSBmaXJzdCBjaGFyYWN0ZXIgb2YgYSBzby1jYWxsZWQgc3Vycm9nYXRlXHJcbi8vIHBhaXIpLlxyXG4vLyBTZWUgaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzUuMS8jc2VjLTE1LjEuM1xyXG4vKipcclxuICogQHBhcmFtIHtzdHJpbmd9IHN0clxyXG4gKiBAcmV0dXJuIHtBcnJheX1cclxuICovXHJcbmNvbnN0IHN0cmluZ1RvQnl0ZUFycmF5ID0gZnVuY3Rpb24gKHN0cikge1xyXG4gICAgY29uc3Qgb3V0ID0gW107XHJcbiAgICBsZXQgcCA9IDA7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjID0gc3RyLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgLy8gSXMgdGhpcyB0aGUgbGVhZCBzdXJyb2dhdGUgaW4gYSBzdXJyb2dhdGUgcGFpcj9cclxuICAgICAgICBpZiAoYyA+PSAweGQ4MDAgJiYgYyA8PSAweGRiZmYpIHtcclxuICAgICAgICAgICAgY29uc3QgaGlnaCA9IGMgLSAweGQ4MDA7IC8vIHRoZSBoaWdoIDEwIGJpdHMuXHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICAgICAgYXNzZXJ0KGkgPCBzdHIubGVuZ3RoLCAnU3Vycm9nYXRlIHBhaXIgbWlzc2luZyB0cmFpbCBzdXJyb2dhdGUuJyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvdyA9IHN0ci5jaGFyQ29kZUF0KGkpIC0gMHhkYzAwOyAvLyB0aGUgbG93IDEwIGJpdHMuXHJcbiAgICAgICAgICAgIGMgPSAweDEwMDAwICsgKGhpZ2ggPDwgMTApICsgbG93O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYyA8IDEyOCkge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IGM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCAyMDQ4KSB7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgPj4gNikgfCAxOTI7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGMgPCA2NTUzNikge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDEyKSB8IDIyNDtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gNikgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgICAgIG91dFtwKytdID0gKGMgJiA2MykgfCAxMjg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9IChjID4+IDE4KSB8IDI0MDtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoKGMgPj4gMTIpICYgNjMpIHwgMTI4O1xyXG4gICAgICAgICAgICBvdXRbcCsrXSA9ICgoYyA+PiA2KSAmIDYzKSB8IDEyODtcclxuICAgICAgICAgICAgb3V0W3ArK10gPSAoYyAmIDYzKSB8IDEyODtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gb3V0O1xyXG59O1xyXG4vKipcclxuICogQ2FsY3VsYXRlIGxlbmd0aCB3aXRob3V0IGFjdHVhbGx5IGNvbnZlcnRpbmc7IHVzZWZ1bCBmb3IgZG9pbmcgY2hlYXBlciB2YWxpZGF0aW9uLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyXHJcbiAqIEByZXR1cm4ge251bWJlcn1cclxuICovXHJcbmNvbnN0IHN0cmluZ0xlbmd0aCA9IGZ1bmN0aW9uIChzdHIpIHtcclxuICAgIGxldCBwID0gMDtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgYyA9IHN0ci5jaGFyQ29kZUF0KGkpO1xyXG4gICAgICAgIGlmIChjIDwgMTI4KSB7XHJcbiAgICAgICAgICAgIHArKztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoYyA8IDIwNDgpIHtcclxuICAgICAgICAgICAgcCArPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChjID49IDB4ZDgwMCAmJiBjIDw9IDB4ZGJmZikge1xyXG4gICAgICAgICAgICAvLyBMZWFkIHN1cnJvZ2F0ZSBvZiBhIHN1cnJvZ2F0ZSBwYWlyLiAgVGhlIHBhaXIgdG9nZXRoZXIgd2lsbCB0YWtlIDQgYnl0ZXMgdG8gcmVwcmVzZW50LlxyXG4gICAgICAgICAgICBwICs9IDQ7XHJcbiAgICAgICAgICAgIGkrKzsgLy8gc2tpcCB0cmFpbCBzdXJyb2dhdGUuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwICs9IDM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHA7XHJcbn07XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBUaGUgYW1vdW50IG9mIG1pbGxpc2Vjb25kcyB0byBleHBvbmVudGlhbGx5IGluY3JlYXNlLlxyXG4gKi9cclxuY29uc3QgREVGQVVMVF9JTlRFUlZBTF9NSUxMSVMgPSAxMDAwO1xyXG4vKipcclxuICogVGhlIGZhY3RvciB0byBiYWNrb2ZmIGJ5LlxyXG4gKiBTaG91bGQgYmUgYSBudW1iZXIgZ3JlYXRlciB0aGFuIDEuXHJcbiAqL1xyXG5jb25zdCBERUZBVUxUX0JBQ0tPRkZfRkFDVE9SID0gMjtcclxuLyoqXHJcbiAqIFRoZSBtYXhpbXVtIG1pbGxpc2Vjb25kcyB0byBpbmNyZWFzZSB0by5cclxuICpcclxuICogPHA+VmlzaWJsZSBmb3IgdGVzdGluZ1xyXG4gKi9cclxuY29uc3QgTUFYX1ZBTFVFX01JTExJUyA9IDQgKiA2MCAqIDYwICogMTAwMDsgLy8gRm91ciBob3VycywgbGlrZSBpT1MgYW5kIEFuZHJvaWQuXHJcbi8qKlxyXG4gKiBUaGUgcGVyY2VudGFnZSBvZiBiYWNrb2ZmIHRpbWUgdG8gcmFuZG9taXplIGJ5LlxyXG4gKiBTZWVcclxuICogaHR0cDovL2dvL3NhZmUtY2xpZW50LWJlaGF2aW9yI3N0ZXAtMS1kZXRlcm1pbmUtdGhlLWFwcHJvcHJpYXRlLXJldHJ5LWludGVydmFsLXRvLWhhbmRsZS1zcGlrZS10cmFmZmljXHJcbiAqIGZvciBjb250ZXh0LlxyXG4gKlxyXG4gKiA8cD5WaXNpYmxlIGZvciB0ZXN0aW5nXHJcbiAqL1xyXG5jb25zdCBSQU5ET01fRkFDVE9SID0gMC41O1xyXG4vKipcclxuICogQmFzZWQgb24gdGhlIGJhY2tvZmYgbWV0aG9kIGZyb21cclxuICogaHR0cHM6Ly9naXRodWIuY29tL2dvb2dsZS9jbG9zdXJlLWxpYnJhcnkvYmxvYi9tYXN0ZXIvY2xvc3VyZS9nb29nL21hdGgvZXhwb25lbnRpYWxiYWNrb2ZmLmpzLlxyXG4gKiBFeHRyYWN0ZWQgaGVyZSBzbyB3ZSBkb24ndCBuZWVkIHRvIHBhc3MgbWV0YWRhdGEgYW5kIGEgc3RhdGVmdWwgRXhwb25lbnRpYWxCYWNrb2ZmIG9iamVjdCBhcm91bmQuXHJcbiAqL1xyXG5mdW5jdGlvbiBjYWxjdWxhdGVCYWNrb2ZmTWlsbGlzKGJhY2tvZmZDb3VudCwgaW50ZXJ2YWxNaWxsaXMgPSBERUZBVUxUX0lOVEVSVkFMX01JTExJUywgYmFja29mZkZhY3RvciA9IERFRkFVTFRfQkFDS09GRl9GQUNUT1IpIHtcclxuICAgIC8vIENhbGN1bGF0ZXMgYW4gZXhwb25lbnRpYWxseSBpbmNyZWFzaW5nIHZhbHVlLlxyXG4gICAgLy8gRGV2aWF0aW9uOiBjYWxjdWxhdGVzIHZhbHVlIGZyb20gY291bnQgYW5kIGEgY29uc3RhbnQgaW50ZXJ2YWwsIHNvIHdlIG9ubHkgbmVlZCB0byBzYXZlIHZhbHVlXHJcbiAgICAvLyBhbmQgY291bnQgdG8gcmVzdG9yZSBzdGF0ZS5cclxuICAgIGNvbnN0IGN1cnJCYXNlVmFsdWUgPSBpbnRlcnZhbE1pbGxpcyAqIE1hdGgucG93KGJhY2tvZmZGYWN0b3IsIGJhY2tvZmZDb3VudCk7XHJcbiAgICAvLyBBIHJhbmRvbSBcImZ1enpcIiB0byBhdm9pZCB3YXZlcyBvZiByZXRyaWVzLlxyXG4gICAgLy8gRGV2aWF0aW9uOiByYW5kb21GYWN0b3IgaXMgcmVxdWlyZWQuXHJcbiAgICBjb25zdCByYW5kb21XYWl0ID0gTWF0aC5yb3VuZChcclxuICAgIC8vIEEgZnJhY3Rpb24gb2YgdGhlIGJhY2tvZmYgdmFsdWUgdG8gYWRkL3N1YnRyYWN0LlxyXG4gICAgLy8gRGV2aWF0aW9uOiBjaGFuZ2VzIG11bHRpcGxpY2F0aW9uIG9yZGVyIHRvIGltcHJvdmUgcmVhZGFiaWxpdHkuXHJcbiAgICBSQU5ET01fRkFDVE9SICpcclxuICAgICAgICBjdXJyQmFzZVZhbHVlICpcclxuICAgICAgICAvLyBBIHJhbmRvbSBmbG9hdCAocm91bmRlZCB0byBpbnQgYnkgTWF0aC5yb3VuZCBhYm92ZSkgaW4gdGhlIHJhbmdlIFstMSwgMV0uIERldGVybWluZXNcclxuICAgICAgICAvLyBpZiB3ZSBhZGQgb3Igc3VidHJhY3QuXHJcbiAgICAgICAgKE1hdGgucmFuZG9tKCkgLSAwLjUpICpcclxuICAgICAgICAyKTtcclxuICAgIC8vIExpbWl0cyBiYWNrb2ZmIHRvIG1heCB0byBhdm9pZCBlZmZlY3RpdmVseSBwZXJtYW5lbnQgYmFja29mZi5cclxuICAgIHJldHVybiBNYXRoLm1pbihNQVhfVkFMVUVfTUlMTElTLCBjdXJyQmFzZVZhbHVlICsgcmFuZG9tV2FpdCk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIwIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFByb3ZpZGUgRW5nbGlzaCBvcmRpbmFsIGxldHRlcnMgYWZ0ZXIgYSBudW1iZXJcclxuICovXHJcbmZ1bmN0aW9uIG9yZGluYWwoaSkge1xyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoaSkpIHtcclxuICAgICAgICByZXR1cm4gYCR7aX1gO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGkgKyBpbmRpY2F0b3IoaSk7XHJcbn1cclxuZnVuY3Rpb24gaW5kaWNhdG9yKGkpIHtcclxuICAgIGkgPSBNYXRoLmFicyhpKTtcclxuICAgIGNvbnN0IGNlbnQgPSBpICUgMTAwO1xyXG4gICAgaWYgKGNlbnQgPj0gMTAgJiYgY2VudCA8PSAyMCkge1xyXG4gICAgICAgIHJldHVybiAndGgnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZGVjID0gaSAlIDEwO1xyXG4gICAgaWYgKGRlYyA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiAnc3QnO1xyXG4gICAgfVxyXG4gICAgaWYgKGRlYyA9PT0gMikge1xyXG4gICAgICAgIHJldHVybiAnbmQnO1xyXG4gICAgfVxyXG4gICAgaWYgKGRlYyA9PT0gMykge1xyXG4gICAgICAgIHJldHVybiAncmQnO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICd0aCc7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDIxIEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TW9kdWxhckluc3RhbmNlKHNlcnZpY2UpIHtcclxuICAgIGlmIChzZXJ2aWNlICYmIHNlcnZpY2UuX2RlbGVnYXRlKSB7XHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2UuX2RlbGVnYXRlO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHNlcnZpY2U7XHJcbiAgICB9XHJcbn1cblxuZXhwb3J0IHsgQ09OU1RBTlRTLCBEZWZlcnJlZCwgRXJyb3JGYWN0b3J5LCBGaXJlYmFzZUVycm9yLCBNQVhfVkFMVUVfTUlMTElTLCBSQU5ET01fRkFDVE9SLCBTaGExLCBhcmVDb29raWVzRW5hYmxlZCwgYXNzZXJ0LCBhc3NlcnRpb25FcnJvciwgYXN5bmMsIGJhc2U2NCwgYmFzZTY0RGVjb2RlLCBiYXNlNjRFbmNvZGUsIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nLCBjYWxjdWxhdGVCYWNrb2ZmTWlsbGlzLCBjb250YWlucywgY3JlYXRlTW9ja1VzZXJUb2tlbiwgY3JlYXRlU3Vic2NyaWJlLCBkZWNvZGUsIGRlZXBDb3B5LCBkZWVwRXF1YWwsIGRlZXBFeHRlbmQsIGVycm9yUHJlZml4LCBleHRyYWN0UXVlcnlzdHJpbmcsIGdldEdsb2JhbCwgZ2V0TW9kdWxhckluc3RhbmNlLCBnZXRVQSwgaXNBZG1pbiwgaXNCcm93c2VyLCBpc0Jyb3dzZXJFeHRlbnNpb24sIGlzRWxlY3Ryb24sIGlzRW1wdHksIGlzSUUsIGlzSW5kZXhlZERCQXZhaWxhYmxlLCBpc01vYmlsZUNvcmRvdmEsIGlzTm9kZSwgaXNOb2RlU2RrLCBpc1JlYWN0TmF0aXZlLCBpc1NhZmFyaSwgaXNVV1AsIGlzVmFsaWRGb3JtYXQsIGlzVmFsaWRUaW1lc3RhbXAsIGlzc3VlZEF0VGltZSwganNvbkV2YWwsIG1hcCwgb3JkaW5hbCwgcXVlcnlzdHJpbmcsIHF1ZXJ5c3RyaW5nRGVjb2RlLCBzYWZlR2V0LCBzdHJpbmdMZW5ndGgsIHN0cmluZ1RvQnl0ZUFycmF5LCBzdHJpbmdpZnksIHZhbGlkYXRlQXJnQ291bnQsIHZhbGlkYXRlQ2FsbGJhY2ssIHZhbGlkYXRlQ29udGV4dE9iamVjdCwgdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSwgdmFsaWRhdGVOYW1lc3BhY2UgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbTIwMTcuanMubWFwXG4iLCJpbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XG5pbXBvcnQgeyBwcm9qZWN0QnV0dG9uLCBwcm9qZWN0Q291bnRlciwgc2F2ZVRvTG9jYWxTdG9yYWdlIH0gZnJvbSAnLi9pbmRleC5qcyc7XG4vLyBpbXBvcnQge3NhdmVUb0xvY2FsU3RvcmFnZX0gZnJvbSAnLi9sb2NhbFN0b3JhZ2UnO1xuXG5mdW5jdGlvbiBpbml0RE9NKCkge1xuICAvLyBDcmVhdGUgUHJvamVjdCBCdXR0b25cbiAgY29uc3QgY3JlYXRlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVQcm9qZWN0Jyk7XG4gIGNyZWF0ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wdXBPcGVuLnByb2plY3QoKTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdENhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0Q2FuY2VsJyk7XG4gIHByb2plY3RDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwb3B1cENsb3NlLnByb2plY3QoKTtcbiAgfSk7XG5cbiAgLy8gRWRpdCBQcm9qZWN0IEJ1dHRvblxuICBjb25zdCBlZGl0UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0UHJvamVjdCcpO1xuICBlZGl0UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBwb3B1cE9wZW4ucHJvamVjdEVkaXQoKTtcbiAgfSk7XG5cbiAgY29uc3QgcHJvamVjdEVkaXRDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEVkaXRDYW5jZWwnKTtcbiAgcHJvamVjdEVkaXRDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwb3B1cENsb3NlLnByb2plY3RFZGl0KCk7XG4gIH0pO1xuXG4gIC8vIENyZWF0ZSBUby1EbyBCdXR0b25cbiAgY29uc3QgY3JlYXRlVG9kbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVUb2RvJyk7XG4gIGNyZWF0ZVRvZG8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcG9wdXBPcGVuLml0ZW0oKTtcbiAgfSk7XG5cbiAgY29uc3QgaXRlbUNhbmNlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtQ2FuY2VsJyk7XG4gIGl0ZW1DYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwb3B1cENsb3NlLml0ZW0oKTtcbiAgfSk7XG5cbiAgLy8gRWRpdCBUby1EbyBCdXR0b25cbiAgY29uc3QgdG9kb0VkaXRDYW5jZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbUVkaXRDYW5jZWwnKTtcbiAgdG9kb0VkaXRDYW5jZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwb3B1cENsb3NlLml0ZW1FZGl0KCk7XG4gIH0pO1xufVxuXG5jb25zdCBwb3B1cE9wZW4gPSAoKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0UG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlUHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcm9qZWN0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlUHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgcHJvamVjdEVkaXQgPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RFZGl0UG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlUHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcm9qZWN0Jykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlUHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH07XG5cbiAgY29uc3QgaXRlbSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbVBvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZVRvZG8nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICB9O1xuXG4gIGNvbnN0IGl0ZW1FZGl0ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtRWRpdFBvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIH07XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9qZWN0LFxuICAgIHByb2plY3RFZGl0LFxuICAgIGl0ZW0sXG4gICAgaXRlbUVkaXQsXG4gIH07XG59KSgpO1xuXG5jb25zdCBwb3B1cENsb3NlID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdFBvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEZvcm0nKS5yZXNldCgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jcmVhdGVQcm9qZWN0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmVkaXRQcm9qZWN0Jykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlbGV0ZVByb2plY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgfTtcblxuICBjb25zdCBwcm9qZWN0RWRpdCA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEVkaXRQb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RFZGl0Rm9ybScpLnJlc2V0KCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNyZWF0ZVByb2plY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdFByb2plY3QnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlUHJvamVjdCcpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9O1xuXG4gIGNvbnN0IGl0ZW0gPSAoKSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1Qb3B1cCcpLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLml0ZW1Gb3JtJykucmVzZXQoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlVG9kbycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9O1xuXG4gIGNvbnN0IGl0ZW1FZGl0ID0gKCkgPT4ge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtRWRpdFBvcHVwJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbUVkaXRGb3JtJykucmVzZXQoKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3JlYXRlVG9kbycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdCxcbiAgICBwcm9qZWN0RWRpdCxcbiAgICBpdGVtLFxuICAgIGl0ZW1FZGl0LFxuICB9O1xufSkoKTtcblxubGV0IGN1cnJlbnRJdGVtO1xuY29uc3QgY3JlYXRlRE9NID0gKCgpID0+IHtcbiAgY29uc3QgcHJvamVjdEluaXQgPSAoX3Byb2plY3RMaXN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9wcm9qZWN0TGlzdC5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3QgcHJvamVjdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgIHByb2plY3RzLnRleHRDb250ZW50ID0gX3Byb2plY3RMaXN0W2ldO1xuICAgICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZCgncHJvamVjdCcpO1xuICAgICAgcHJvamVjdHMuY2xhc3NMaXN0LmFkZChgcHJvamVjdHMke2l9YCk7XG4gICAgICBwcm9qZWN0TGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0cyk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IHByb2plY3QgPSAoX3Byb2plY3RMaXN0KSA9PiB7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgICBjb25zdCBlYWNoUHJvamVjdCA9IF9wcm9qZWN0TGlzdC5sZW5ndGggLSAxO1xuICAgIGNvbnN0IHByb2plY3RzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdHMudGV4dENvbnRlbnQgPSBfcHJvamVjdExpc3RbZWFjaFByb2plY3RdO1xuICAgIHByb2plY3RzLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKTtcbiAgICBwcm9qZWN0cy5jbGFzc0xpc3QuYWRkKGBwcm9qZWN0cyR7cHJvamVjdENvdW50ZXJ9YCk7XG4gICAgcHJvamVjdExpc3QuYXBwZW5kQ2hpbGQocHJvamVjdHMpO1xuICAgIHBvcHVwQ2xvc2UucHJvamVjdCgpO1xuICB9O1xuXG4gIGNvbnN0IHByb2plY3RFZGl0ID0gKF9wcm9qZWN0TGlzdCwgX2N1cnJlbnRQcm9qZWN0KSA9PiB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIGAucHJvamVjdHMke19jdXJyZW50UHJvamVjdH1gLFxuICAgICkudGV4dENvbnRlbnQgPSBgJHtfcHJvamVjdExpc3RbX2N1cnJlbnRQcm9qZWN0XX1gO1xuICAgIHBvcHVwQ2xvc2UucHJvamVjdEVkaXQoKTtcbiAgfTtcblxuICBjb25zdCBpdGVtID0gKF90b2RvLCBfcHJvamVjdCwgX250aFByb2plY3QsIF9udGhJdGVtKSA9PiB7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kb0xpc3QnKTtcbiAgICBjb25zdCB0b2RvQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdG9kb0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2RvQ29udGFpbmVyJyk7XG4gICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQodG9kb0NvbnRhaW5lcik7XG5cbiAgICAvLyBUb2RvIFRpdGxlXG4gICAgY29uc3QgdG9kb0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9CdXR0b24udGV4dENvbnRlbnQgPSBfdG9kby50aXRsZTtcbiAgICB0b2RvQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9JdGVtcycpO1xuICAgIHRvZG9CdXR0b24uc3R5bGUuY3NzVGV4dCA9IF90b2RvLnN0YXR1cyA9PSAnY29tcGxldGUnXG4gICAgICA/ICd0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDsnXG4gICAgICA6ICd0ZXh0LWRlY29yYXRpb246IG5vbmU7JztcbiAgICB0b2RvQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgLy8gcHJvamVjdCBTdGF0dXNcbiAgICAgIF90b2RvLnN0YXR1cyA9IF90b2RvLnN0YXR1cyA9PSAnY29tcGxldGUnID8gJ2luY29tcGxldGUnIDogJ2NvbXBsZXRlJztcbiAgICAgIC8vIENTUyAtIExpbmUgVGhyb3VnaFxuICAgICAgdG9kb0J1dHRvbi5zdHlsZS5jc3NUZXh0ID0gX3RvZG8uc3RhdHVzID09ICdjb21wbGV0ZSdcbiAgICAgICAgPyAndGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7J1xuICAgICAgICA6ICd0ZXh0LWRlY29yYXRpb246IG5vbmU7JztcblxuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgfSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvQnV0dG9uKTtcblxuICAgIC8vIFRvZG8gSW5mb1xuICAgIGNvbnN0IHRvZG9JbmZvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgdG9kb0luZm9CdXR0b24uY2xhc3NMaXN0LmFkZCgndG9kb0luZm9CdXR0b24nKTtcbiAgICB0b2RvSW5mb0J1dHRvbi50ZXh0Q29udGVudCA9ICdpJztcbiAgICB0b2RvSW5mb0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvUG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgIGNvbnN0IHRpdGxlSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50aXRsZUluZm8nKTtcbiAgICAgIGNvbnN0IGRlc2NyaXB0aW9uSW5mbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbkluZm8nKTtcbiAgICAgIGNvbnN0IHN0YXR1c0luZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdHVzSW5mbycpO1xuICAgICAgY29uc3QgcHJpb3JpdHlJbmZvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5SW5mbycpO1xuICAgICAgY29uc3QgZHVlRGF0ZUluZm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlRGF0ZUluZm8nKTtcblxuICAgICAgLy8gZGF0ZS1mbnNcbiAgICAgIHRpdGxlSW5mby50ZXh0Q29udGVudCA9IF90b2RvLnRpdGxlO1xuICAgICAgZGVzY3JpcHRpb25JbmZvLnRleHRDb250ZW50ID0gX3RvZG8uZGVzY3JpcHRpb247XG4gICAgICBwcmlvcml0eUluZm8udGV4dENvbnRlbnQgPSBgUHJpb3JpdHk6ICR7X3RvZG8ucHJpb3JpdHl9YDtcbiAgICAgIGlmIChfdG9kby5kdWVEYXRlKSB7XG4gICAgICAgIGR1ZURhdGVJbmZvLnRleHRDb250ZW50ID0gZm9ybWF0KFxuICAgICAgICAgIG5ldyBEYXRlKF90b2RvLmR1ZURhdGUucmVwbGFjZSgvLS9nLCAnLycpKSxcbiAgICAgICAgICAnTU1NTSBkZCwgeXl5eScsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBzdGF0dXNJbmZvLnRleHRDb250ZW50ID0gX3RvZG8uc3RhdHVzO1xuXG4gICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZUJ1dHRvbicpO1xuICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvUG9wdXAnKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvSW5mb0J1dHRvbik7XG5cbiAgICAvLyBUb2RvIEVkaXRcbiAgICBjb25zdCB0b2RvRWRpdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHRvZG9FZGl0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9FZGl0QnV0dG9uJyk7XG4gICAgdG9kb0VkaXRCdXR0b24udGV4dENvbnRlbnQgPSAnRWRpdCc7XG4gICAgdG9kb0VkaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICBwb3B1cE9wZW4uaXRlbUVkaXQoKTtcbiAgICAgIGN1cnJlbnRJdGVtID0gX250aEl0ZW07XG4gICAgfSk7XG4gICAgdG9kb0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0b2RvRWRpdEJ1dHRvbik7XG5cbiAgICAvLyBUb2RvIERlbGV0ZVxuICAgIGNvbnN0IHRvZG9EZWxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICB0b2RvRGVsZXRlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3RvZG9EZWxldGVCdXR0b24nKTtcbiAgICB0b2RvRGVsZXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1gnO1xuICAgIHRvZG9EZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyByZW1vdmUgRE9NXG4gICAgICB0b2RvTGlzdC5yZW1vdmVDaGlsZCh0b2RvQ29udGFpbmVyKTtcbiAgICAgIC8vIHJlbW92ZSBvYmplY3QgZnJvbSBhcnJheVxuICAgICAgX3Byb2plY3RbX250aFByb2plY3RdW19udGhJdGVtXSA9ICcnO1xuICAgICAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgICAvLyByZW5kZXIgbWFpbiBwYW5lbFxuICAgICAgcHJvamVjdEJ1dHRvbigpO1xuICAgIH0pO1xuICAgIHRvZG9Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RlbGV0ZUJ1dHRvbik7XG5cbiAgICBwb3B1cENsb3NlLml0ZW0oKTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIHByb2plY3RJbml0LFxuICAgIHByb2plY3QsXG4gICAgcHJvamVjdEVkaXQsXG4gICAgaXRlbSxcbiAgfTtcbn0pKCk7XG5cbmV4cG9ydCB7XG4gIGluaXRET00sIHBvcHVwT3BlbiwgcG9wdXBDbG9zZSwgY3VycmVudEl0ZW0sIGNyZWF0ZURPTSxcbn07XG4iLCIvLyBJbXBvcnQgdGhlIGZ1bmN0aW9ucyB5b3UgbmVlZCBmcm9tIHRoZSBTREtzIHlvdSBuZWVkXG5pbXBvcnQgeyBpbml0aWFsaXplQXBwIH0gZnJvbSBcImZpcmViYXNlL2FwcFwiO1xuLy8gVE9ETzogQWRkIFNES3MgZm9yIEZpcmViYXNlIHByb2R1Y3RzIHRoYXQgeW91IHdhbnQgdG8gdXNlXG4vLyBodHRwczovL2ZpcmViYXNlLmdvb2dsZS5jb20vZG9jcy93ZWIvc2V0dXAjYXZhaWxhYmxlLWxpYnJhcmllc1xuXG4vLyBZb3VyIHdlYiBhcHAncyBGaXJlYmFzZSBjb25maWd1cmF0aW9uXG5jb25zdCBmaXJlYmFzZUNvbmZpZyA9IHtcbiAgYXBpS2V5OiBcIkFJemFTeURoYWJTNzlnVVlTSGZaRzcwamJScGgtNHVhVi1BdE9VRVwiLFxuICBhdXRoRG9tYWluOiBcInRvLWRvLWxpc3QtNDcwODkuZmlyZWJhc2VhcHAuY29tXCIsXG4gIHByb2plY3RJZDogXCJ0by1kby1saXN0LTQ3MDg5XCIsXG4gIHN0b3JhZ2VCdWNrZXQ6IFwidG8tZG8tbGlzdC00NzA4OS5hcHBzcG90LmNvbVwiLFxuICBtZXNzYWdpbmdTZW5kZXJJZDogXCI4MTEwNjc2ODk1M1wiLFxuICBhcHBJZDogXCIxOjgxMTA2NzY4OTUzOndlYjozNWM5NzExNjE4ODY5YTgzN2ZhOWU4XCJcbn07XG5cbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcbmNvbnN0IGFwcCA9IGluaXRpYWxpemVBcHAoZmlyZWJhc2VDb25maWcpO1xuXG5cblxuaW1wb3J0IHtcbiAgaW5pdERPTSwgY3VycmVudEl0ZW0sIGNyZWF0ZURPTSwgcG9wdXBDbG9zZSxcbn0gZnJvbSAnLi9ET00uanMnO1xuLy8gaW1wb3J0IHtzYXZlVG9Mb2NhbFN0b3JhZ2UsIHJlYWRMb2NhbFN0b3JhZ2V9IGZyb20gJy4vbG9jYWxTdG9yYWdlJztcbmltcG9ydCAnLi9zdHlsZS5jc3MnO1xuXG4vLyBWYXJpYWJsZXNcbmxldCBwcm9qZWN0OyAvLyBzb3J0ZWQgYWxsIHRvZG9zIGJhc2VkIG9uIHByb2plY3QjXG5sZXQgcHJvamVjdExpc3Q7IC8vIGFsbCBwcm9qZWN0IG5hbWVzIGdvZXMgaGVyZVxubGV0IHByb2plY3RDb3VudGVyO1xubGV0IGN1cnJlbnRQcm9qZWN0O1xuLy8gbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5cbi8vIFRvZG8gSXRlbSBGYWN0b3J5XG5jb25zdCB0b2RvSXRlbSA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIHByb2plY3QsIHN0YXR1cywgZHVlRGF0ZSwgcHJpb3JpdHkpID0+IHtcbiAgY29uc3QgY29tcGxldGVUb2dnbGUgPSAoKSA9PiB7XG4gICAgc3RhdHVzID0gc3RhdHVzID09ICdjb21wbGV0ZScgPyAnaW5jb21wbGV0ZScgOiAnY29tcGxldGUnO1xuICB9O1xuICByZXR1cm4ge1xuICAgIHRpdGxlLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHByb2plY3QsXG4gICAgc3RhdHVzLFxuICAgIGR1ZURhdGUsXG4gICAgcHJpb3JpdHksXG4gICAgY29tcGxldGVUb2dnbGUsXG4gIH07XG59O1xuXG4vLyBDcmVhdGUgUHJvamVjdCBBbGdvclxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEFsZ29yKF9uYW1lLCBwcm9qZWN0TGlzdCkge1xuICBwcm9qZWN0TGlzdC5wdXNoKF9uYW1lKTtcbiAgY3JlYXRlRE9NLnByb2plY3QocHJvamVjdExpc3QpO1xuICBwcm9qZWN0Q291bnRlcisrO1xufVxuXG4vLyBsb2NhbFN0b3JhZ2VcbmZ1bmN0aW9uIHNhdmVUb0xvY2FsU3RvcmFnZSgpIHtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0KSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0TGlzdCcsIEpTT04uc3RyaW5naWZ5KHByb2plY3RMaXN0KSk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0Q291bnRlcicsIEpTT04uc3RyaW5naWZ5KHByb2plY3RDb3VudGVyKSk7XG59XG5cbmZ1bmN0aW9uIHJlYWRMb2NhbFN0b3JhZ2UoKSB7XG4gIHByb2plY3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0JykpO1xuICBwcm9qZWN0TGlzdCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RMaXN0JykpO1xuICBwcm9qZWN0Q291bnRlciA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Byb2plY3RDb3VudGVyJykpO1xuXG4gIHJldHVybiBwcm9qZWN0LCBwcm9qZWN0TGlzdCwgcHJvamVjdENvdW50ZXI7XG59XG5cbmlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdExpc3QnKSkge1xuICBjb25zb2xlLmxvZyhwcm9qZWN0TGlzdCk7XG4gIHJlYWRMb2NhbFN0b3JhZ2UoKTtcbiAgY29uc29sZS5sb2cocHJvamVjdExpc3QpO1xuICBjcmVhdGVET00ucHJvamVjdEluaXQocHJvamVjdExpc3QpO1xuICBjb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncHJvamVjdCcpKTtcbn0gZWxzZSB7XG4gIGluaXQoKTtcbn1cblxuaW5pdERPTSgpO1xuXG4vLyAjcmVnaW9uIEluaXRpYWxpemF0aW9uIC0gY3JlYXRlIERlZmF1bHQgUHJvamVjdHMgYW5kIFRvZG8gSXRlbXNcbmZ1bmN0aW9uIGluaXQoKSB7XG4gIC8vIFZhcmlhYmxlc1xuICBwcm9qZWN0ID0gW107IC8vIHNvcnRlZCBhbGwgdG9kb3MgYmFzZWQgb24gcHJvamVjdCNcbiAgcHJvamVjdExpc3QgPSBbXTsgLy8gYWxsIHByb2plY3QgbmFtZXMgZ29lcyBoZXJlXG4gIHByb2plY3RDb3VudGVyID0gMDtcblxuICBjb25zdCBwcm9qZWN0SW5pdCA9IFtdO1xuXG4gIGNyZWF0ZVByb2plY3RBbGdvcignSW5ib3gnLCBwcm9qZWN0TGlzdCk7XG4gIHByb2plY3RJbml0LnB1c2goXG4gICAgdG9kb0l0ZW0oXG4gICAgICAnQnV5IGJpcnRoZGF5IHByZXNlbnQgZm9yIFRpZmZhbnknLFxuICAgICAgJ21heWJlIGp1c3QgZ2V0IGFuIGUtZ2lmdGNhcmQnLFxuICAgICAgJzAnLFxuICAgICAgJ2luY29tcGxldGUnLFxuICAgICAgJzIwMjAtMDEtMDEnLFxuICAgICAgJ0hpZ2gnLFxuICAgICksXG4gICk7XG4gIHByb2plY3RJbml0LnB1c2goXG4gICAgdG9kb0l0ZW0oXG4gICAgICAnV2F0ZXIgdGhlIHBsYW50cycsXG4gICAgICAndGFsayB0byB0aGUgcGxhbnRzLCBtYWtlIHN1cmUgdGhleSBhcmUgaGFwcHknLFxuICAgICAgJzAnLFxuICAgICAgJ2luY29tcGxldGUnLFxuICAgICAgJzIwMjAtMDEtMDEnLFxuICAgICAgJ01lZGl1bScsXG4gICAgKSxcbiAgKTtcbiAgcHJvamVjdEluaXQucHVzaChcbiAgICB0b2RvSXRlbShcbiAgICAgICdDYXIgbWFpbnRlbmFuY2UnLFxuICAgICAgJ2ZpeCB0aGUgYnJva2VuIHdpbmRvdycsXG4gICAgICAnMCcsXG4gICAgICAnaW5jb21wbGV0ZScsXG4gICAgICAnMjAyMC0wMS0wMScsXG4gICAgICAnTG93JyxcbiAgICApLFxuICApO1xuXG4gIGNyZWF0ZVByb2plY3RBbGdvcignV29yaycsIHByb2plY3RMaXN0KTtcbiAgcHJvamVjdEluaXQucHVzaChcbiAgICB0b2RvSXRlbShcbiAgICAgICdNZWV0aW5nIHdpdGggRGVyZWsgdGhlIG1hbmFnZXInLFxuICAgICAgJ1ByZXBhcmUgcHJlc2VudGF0aW9uIGFuZCBjb2ZmZWUnLFxuICAgICAgJzEnLFxuICAgICAgJ2luY29tcGxldGUnLFxuICAgICAgJzIwMjAtMDEtMDEnLFxuICAgICAgJ0hpZ2gnLFxuICAgICksXG4gICk7XG4gIHByb2plY3RJbml0LnB1c2goXG4gICAgdG9kb0l0ZW0oXG4gICAgICAnQ2FsbCBUb2RkIGZyb20gWCBDb21wYW55JyxcbiAgICAgICdEaXNjdXNzIGFib3V0IHdoaWNoIHBpenphIGZsYXZvciBpcyB0aGUgYmVzdCcsXG4gICAgICAnMScsXG4gICAgICAnaW5jb21wbGV0ZScsXG4gICAgICAnMjAyMC0wMS0wMScsXG4gICAgICAnSGlnaCcsXG4gICAgKSxcbiAgKTtcblxuICBjcmVhdGVQcm9qZWN0QWxnb3IoJ0hvYmJpZXMnLCBwcm9qZWN0TGlzdCk7XG4gIHByb2plY3RJbml0LnB1c2goXG4gICAgdG9kb0l0ZW0oXG4gICAgICAnRGlzYyBnb2xmIHdpdGggRGFsdG9uJyxcbiAgICAgICdMYSBNaXJhZGEgUGFyaycsXG4gICAgICAnMicsXG4gICAgICAnaW5jb21wbGV0ZScsXG4gICAgICAnMjAyMC0wMS0wMScsXG4gICAgICAnTWVkaXVtJyxcbiAgICApLFxuICApO1xuICBwcm9qZWN0SW5pdC5wdXNoKFxuICAgIHRvZG9JdGVtKFxuICAgICAgJ1dvcmtvdXQgYXQgdGhlIGd5bScsXG4gICAgICAnc28gdGhhdCBJIGNhbiBoYXZlIG1vcmUgYnVyZ2VycycsXG4gICAgICAnMicsXG4gICAgICAnaW5jb21wbGV0ZScsXG4gICAgICAnMjAyMC0wMS0wMScsXG4gICAgICAnTG93JyxcbiAgICApLFxuICApO1xuICBwcm9qZWN0SW5pdC5wdXNoKFxuICAgIHRvZG9JdGVtKFxuICAgICAgJ0Jyb3dzZSBBbWF6b24gZm9yIEhhcnJ5IFBvdHRlciBXYW5kcycsXG4gICAgICAnZ2V0IHRoZSBFbGRlciBXYW5kJyxcbiAgICAgICcyJyxcbiAgICAgICdpbmNvbXBsZXRlJyxcbiAgICAgICcyMDIwLTAxLTAxJyxcbiAgICAgICdIaWdoJyxcbiAgICApLFxuICApO1xuICBwcm9qZWN0SW5pdC5wdXNoKFxuICAgIHRvZG9JdGVtKFxuICAgICAgJ1dhdGNoIGFub3RoZXIgR29kemlsbGEgbW92aWUnLFxuICAgICAgJ3BvcGNvcm4gYW5kIGNva2UnLFxuICAgICAgJzInLFxuICAgICAgJ2luY29tcGxldGUnLFxuICAgICAgJzIwMjAtMDEtMDEnLFxuICAgICAgJ0hpZ2gnLFxuICAgICksXG4gICk7XG5cbiAgLy8gU29ydCB0b2RvcyBiYXNlZCBvbiBwcm9qZWN0IzogZ28gdGhyb3VnaCBwcm9qZWN0TGlzdCBhbmQgZmlsdGVyIHRoZSB0b2Rvc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdFtpXSA9IHByb2plY3RJbml0LmZpbHRlcigodG9kbykgPT4gdG9kby5wcm9qZWN0ID09IGAke2l9YCk7XG4gIH1cbiAgcmV0dXJuIHByb2plY3QsIHByb2plY3RMaXN0LCBjdXJyZW50UHJvamVjdCwgcHJvamVjdENvdW50ZXI7XG59XG4vLyAjZW5kcmVnaW9uXG5cbi8vIFByb2plY3QgQnV0dG9uIEJlaGF2aW9yXG5jb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvTGlzdCcpO1xuZnVuY3Rpb24gcHJvamVjdEJ1dHRvbigpIHtcbiAgY29uc3QgX3Byb2plY3RMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RMaXN0Jyk7XG4gIC8vIExvb3AgdGhyb3VnaCBub2RlcyBvZiBwYXJlbnRcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBfcHJvamVjdExpc3QuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBfcHJvamVjdExpc3QuY2hpbGRyZW5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAvLyBVcGRhdGUgdmFyaWFibGUgLSBjdXJyZW50UHJvamVjdFxuICAgICAgX3Byb2plY3RMaXN0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3Byb2plY3QnKTtcbiAgICAgIGN1cnJlbnRQcm9qZWN0ID0gX3Byb2plY3RMaXN0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdFswXS5zbGljZSg4KTtcbiAgICAgIF9wcm9qZWN0TGlzdC5jaGlsZHJlbltpXS5jbGFzc0xpc3QuYWRkKCdwcm9qZWN0Jyk7XG5cbiAgICAgIC8vIEFkZC9SbXYgJ3ByZXNzZWQnIGNsYXNzXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IF9wcm9qZWN0TGlzdC5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICBfcHJvamVjdExpc3QuY2hpbGRyZW5bal0uY2xhc3NMaXN0LnJlbW92ZSgncHJlc3NlZCcpO1xuICAgICAgfVxuICAgICAgX3Byb2plY3RMaXN0LmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5hZGQoJ3ByZXNzZWQnKTtcblxuICAgICAgLy8gY2xlYXIgdGhlIG1haW4gcGFuZWxcbiAgICAgIHdoaWxlICh0b2RvTGlzdC5maXJzdENoaWxkKSB7XG4gICAgICAgIHRvZG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIElmIHRoaXMgcHJvamVjdCBhbHJlYWR5IGhhcyBUby1Eb3MgaW4gaXQsIHRoZW4gY3JlYXRlIGl0ZW0gRE9NXG4gICAgICBpZiAocHJvamVjdFtjdXJyZW50UHJvamVjdF0pIHtcbiAgICAgICAgZm9yIChcbiAgICAgICAgICBsZXQgZWFjaFRvZG8gPSAwO1xuICAgICAgICAgIGVhY2hUb2RvIDwgcHJvamVjdFtjdXJyZW50UHJvamVjdF0ubGVuZ3RoO1xuICAgICAgICAgIGVhY2hUb2RvKytcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKHByb2plY3RbY3VycmVudFByb2plY3RdW2VhY2hUb2RvXSkge1xuICAgICAgICAgICAgY3JlYXRlRE9NLml0ZW0oXG4gICAgICAgICAgICAgIHByb2plY3RbY3VycmVudFByb2plY3RdW2VhY2hUb2RvXSxcbiAgICAgICAgICAgICAgcHJvamVjdCxcbiAgICAgICAgICAgICAgY3VycmVudFByb2plY3QsXG4gICAgICAgICAgICAgIGVhY2hUb2RvLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxucHJvamVjdEJ1dHRvbigpO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RzMCcpLmNsaWNrKCk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdHMwJykuZm9jdXMoKTtcblxuLy8gQ3JlYXRlIFByb2plY3QgU3VibWl0IEJ1dHRvblxuY29uc3QgcHJvamVjdFN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0U3VibWl0Jyk7XG5wcm9qZWN0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBjcmVhdGVQcm9qZWN0QWxnb3IoXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3RJbnB1dCcpLnZhbHVlLFxuICAgIHByb2plY3RMaXN0LFxuICApO1xuICBzYXZlVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgcHJvamVjdEJ1dHRvbigpO1xufSk7XG5cbi8vIENyZWF0ZSBUb0RvIEl0ZW0gU3VibWl0IEJ1dHRvblxuY29uc3QgaXRlbVN1Ym1pdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pdGVtU3VibWl0Jyk7XG5pdGVtU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyBzdWJtaXQgbmV3IHRvZG8gdG8gcHJvamVjdFxuICBjb25zdCB0b2RvID0gdG9kb0l0ZW0oXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpdGxlJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRlc2NyaXB0aW9uJykudmFsdWUsXG4gICAgY3VycmVudFByb2plY3QsXG4gICAgJ2luY29tcGxldGUnLFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kdWVEYXRlJykudmFsdWUsXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5JykudmFsdWUsXG4gICk7XG5cbiAgaWYgKHByb2plY3RbY3VycmVudFByb2plY3RdKSB7XG4gICAgcHJvamVjdFtjdXJyZW50UHJvamVjdF0ucHVzaCh0b2RvKTtcbiAgfSBlbHNlIHtcbiAgICBwcm9qZWN0W2N1cnJlbnRQcm9qZWN0XSA9IFtdO1xuICAgIHByb2plY3RbY3VycmVudFByb2plY3RdLnB1c2godG9kbyk7XG4gIH1cbiAgLy8gY3JlYXRlIERPTSBhbmQgYmVoYXZpb3JcbiAgY3JlYXRlRE9NLml0ZW0oXG4gICAgdG9kbyxcbiAgICBwcm9qZWN0LFxuICAgIGN1cnJlbnRQcm9qZWN0LFxuICAgIHByb2plY3RbY3VycmVudFByb2plY3RdLmxlbmd0aCAtIDEsXG4gICk7XG4gIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xufSk7XG5cbi8vIEVkaXQgUHJvamVjdCBCdXR0b25cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0RWRpdFN1Ym1pdCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9qZWN0TGlzdFtjdXJyZW50UHJvamVjdF0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdEVkaXRJbnB1dCcpLnZhbHVlO1xuICBjcmVhdGVET00ucHJvamVjdEVkaXQocHJvamVjdExpc3QsIGN1cnJlbnRQcm9qZWN0KTtcbiAgc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gIHByb2plY3RCdXR0b24oKTtcbn0pO1xuXG4vLyBEZWxldGUgUHJvamVjdCBCdXR0b25cbmNvbnN0IGRlbGV0ZVByb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGVsZXRlUHJvamVjdCcpO1xuZGVsZXRlUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgLy8gUmVtb3ZlIERPTVxuICBjb25zdCBfcHJvamVjdExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdExpc3QnKTtcbiAgX3Byb2plY3RMaXN0LnJlbW92ZUNoaWxkKFxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5wcm9qZWN0cyR7Y3VycmVudFByb2plY3R9YCksXG4gICk7XG5cbiAgLy8gUmVtb3ZlIG9iamVjdCBmcm9tIHByb2plY3RMaXN0IGFycmF5XG4gIC8vIHByb2plY3RMaXN0LnNwbGljZShjdXJyZW50UHJvamVjdCwxKTtcbiAgcHJvamVjdExpc3RbY3VycmVudFByb2plY3RdID0gJyc7XG5cbiAgLy8gUmVtb3ZlIG9iamVjdCBmcm9tIHRvZG9MaXN0XG4gIC8vIHByb2plY3Quc3BsaWNlKGN1cnJlbnRQcm9qZWN0LDEpO1xuICBwcm9qZWN0W2N1cnJlbnRQcm9qZWN0XSA9ICcnO1xuXG4gIC8vIGNsZWFyIHRoZSBtYWluIHBhbmVsXG4gIHdoaWxlICh0b2RvTGlzdC5maXJzdENoaWxkKSB7XG4gICAgdG9kb0xpc3QuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxuXG4gIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICBwcm9qZWN0QnV0dG9uKCk7XG59KTtcblxuLy8gRWRpdCBJdGVtIEJ1dHRvblxuY29uc3QgaXRlbUVkaXRTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaXRlbUVkaXRTdWJtaXQnKTtcbml0ZW1FZGl0U3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9qZWN0W2N1cnJlbnRQcm9qZWN0XVtjdXJyZW50SXRlbV0udGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGl0bGVFZGl0JykudmFsdWU7XG4gIHByb2plY3RbY3VycmVudFByb2plY3RdW2N1cnJlbnRJdGVtXS5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kZXNjcmlwdGlvbkVkaXQnKS52YWx1ZTtcbiAgcHJvamVjdFtjdXJyZW50UHJvamVjdF1bY3VycmVudEl0ZW1dLmR1ZURhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZHVlRGF0ZUVkaXQnKS52YWx1ZTtcbiAgcHJvamVjdFtjdXJyZW50UHJvamVjdF1bY3VycmVudEl0ZW1dLnByaW9yaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByaW9yaXR5RWRpdCcpLnZhbHVlO1xuICAvLyBjbGVhciB0aGUgbWFpbiBwYW5lbFxuICB3aGlsZSAodG9kb0xpc3QuZmlyc3RDaGlsZCkge1xuICAgIHRvZG9MaXN0LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cblxuICBmb3IgKFxuICAgIGxldCBlYWNoVG9kbyA9IDA7XG4gICAgZWFjaFRvZG8gPCBwcm9qZWN0W2N1cnJlbnRQcm9qZWN0XS5sZW5ndGg7XG4gICAgZWFjaFRvZG8rK1xuICApIHtcbiAgICBpZiAocHJvamVjdFtjdXJyZW50UHJvamVjdF1bZWFjaFRvZG9dKSB7XG4gICAgICBjcmVhdGVET00uaXRlbShcbiAgICAgICAgcHJvamVjdFtjdXJyZW50UHJvamVjdF1bZWFjaFRvZG9dLFxuICAgICAgICBwcm9qZWN0LFxuICAgICAgICBjdXJyZW50UHJvamVjdCxcbiAgICAgICAgZWFjaFRvZG8sXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHNhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICBwb3B1cENsb3NlLml0ZW1FZGl0KCk7XG59KTtcblxuZXhwb3J0IHsgcHJvamVjdEJ1dHRvbiwgcHJvamVjdENvdW50ZXIsIHNhdmVUb0xvY2FsU3RvcmFnZSB9O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVye1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXFxuICAgIC8qIGxpc3Qtc3R5bGU6IG5vbmU7ICovXFxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgKi9cXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWU1YjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4uZGFzaGJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4gICAgLnNpZGVQYW5lbHtcXG4gICAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgICBoZWlnaHQ6IDY1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAucHJvamVjdExpc3QsIC50b2RvTGlzdHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAucHJvamVjdHtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogMjQwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3Q6aG92ZXJ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2VjYjtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvamVjdDphY3RpdmUsIC5wcm9qZWN0OmZvY3VzLCAucHJlc3NlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZWNiO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3JlYXRlUHJvamVjdCwgLmVkaXRQcm9qZWN0LCAuY3JlYXRlVG9kbywgLmRlbGV0ZVByb2plY3R7XFxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZDY2O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGVsZXRlUHJvamVjdHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNyZWF0ZVByb2plY3Q6aG92ZXIsIC5lZGl0UHJvamVjdDpob3ZlciwgLmNyZWF0ZVRvZG86aG92ZXIsIC5kZWxldGVQcm9qZWN0OmhvdmVye1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmIyMzg7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC45O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNyZWF0ZVByb2plY3Q6YWN0aXZlLC5lZGl0UHJvamVjdDphY3RpdmUsIC5jcmVhdGVUb2RvOmFjdGl2ZSwgLmRlbGV0ZVByb2plY3Q6YWN0aXZle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc3M2Q7XFxuICAgICAgICB9XFxuXFxuICAgIC5tYWluUGFuZWx7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgaGVpZ2h0OiA2NTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbkJhcntcXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRvZG9Db250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC50b2RvSXRlbXN7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvSXRlbXNDb21wbGV0ZXtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvRWRpdEJ1dHRvbiwgLnRvZG9EZWxldGVCdXR0b24sIC50b2RvSW5mb0J1dHRvbntcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kb0RlbGV0ZUJ1dHRvbntcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvSW5mb0J1dHRvbntcXG4gICAgICAgIH1cXG5cXG4vKiBQcm9qZWN0IGFuZCBJdGVtIFBvcHVwICovXFxuLnByb2plY3RQb3B1cHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3RFZGl0UG9wdXAsIC5pdGVtRWRpdFBvcHVwLCAuaW5mb1BvcHVwe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMjM4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIC8qIHBsYWNlIGl0IGRlYWQgY2VudGVyIGluIHRoZSB3aW5kb3cqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uaXRlbVBvcHVwe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4gICAgLnByb2plY3RGb3Jte1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0RWRpdEZvcm0sIC5pdGVtRWRpdEZvcm0sIC5pbmZvRm9ybXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdElucHV0e1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICB3aWR0aDogMjI1cHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RTdWJtaXQsIC5wcm9qZWN0Q2FuY2VsLCAucHJvamVjdEVkaXRTdWJtaXQsIC5wcm9qZWN0RWRpdENhbmNlbCwgLmNsb3NlQnV0dG9ue1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGEzOWU7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG5cXG4gICAgLml0ZW1TdWJtaXQsIC5pdGVtQ2FuY2VsLCAuaXRlbUVkaXRTdWJtaXQsIC5pdGVtRWRpdENhbmNlbHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBhMzllO1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q2FuY2VsLCAuaXRlbUNhbmNlbCwgLnByb2plY3RFZGl0Q2FuY2VsLCAuaXRlbUVkaXRDYW5jZWwsIC5jbG9zZUJ1dHRvbntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTU1MzY7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RTdWJtaXQ6aG92ZXIsIC5wcm9qZWN0Q2FuY2VsOmhvdmVyLCAuaXRlbVN1Ym1pdDpob3ZlciwgLml0ZW1DYW5jZWw6aG92ZXIsIC5wcm9qZWN0RWRpdFN1Ym1pdDpob3ZlciwgLnByb2plY3RFZGl0Q2FuY2VsOmhvdmVyLCAuaXRlbUVkaXRTdWJtaXQ6aG92ZXIsIC5pdGVtRWRpdENhbmNlbDpob3ZlciwgLmNsb3NlQnV0dG9uOmhvdmVye1xcbiAgICAgICAgb3BhY2l0eToxO1xcbiAgICB9XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0lBQ3RCLDRCQUE0QjtJQUM1QixzQkFBc0I7SUFDdEIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztJQUVJO1FBQ0ksVUFBVTtRQUNWLGFBQWE7UUFDYix5QkFBeUI7UUFDekIsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixTQUFTO0lBQ2I7O1FBRUk7WUFDSSxhQUFhO1lBQ2Isc0JBQXNCO1lBQ3RCLFNBQVM7UUFDYjs7UUFFQTtZQUNJLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtRQUNuQjs7UUFFQTtZQUNJLHlCQUF5QjtZQUN6QixZQUFZO1FBQ2hCOztRQUVBO1lBQ0kseUJBQXlCO1lBQ3pCLFVBQVU7UUFDZDs7UUFFQTtZQUNJLFlBQVk7WUFDWixZQUFZO1lBQ1osbUJBQW1CO1lBQ25CLGVBQWU7WUFDZix5QkFBeUI7WUFDekIsYUFBYTtRQUNqQjs7UUFFQTtZQUNJLHFCQUFxQjtZQUNyQixZQUFZO1FBQ2hCOztRQUVBO1lBQ0kseUJBQXlCO1lBQ3pCLFlBQVk7UUFDaEI7O1FBRUE7WUFDSSx5QkFBeUI7UUFDN0I7O0lBRUo7UUFDSSxVQUFVO1FBQ1YsYUFBYTtRQUNiLHVCQUF1QjtRQUN2QixlQUFlO1FBQ2YsaUJBQWlCO1FBQ2pCLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLFNBQVM7SUFDYjs7SUFFQTtRQUNJLGFBQWE7UUFDYixhQUFhO1FBQ2IseUJBQXlCO0lBQzdCOztJQUVBO1FBQ0ksYUFBYTtRQUNiLFFBQVE7SUFDWjs7UUFFSTtZQUNJLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixZQUFZO1lBQ1osZUFBZTtRQUNuQjs7UUFFQTtZQUNJLDZCQUE2QjtRQUNqQzs7UUFFQTtZQUNJLFlBQVk7WUFDWixtQkFBbUI7WUFDbkIseUJBQXlCO1lBQ3pCLFlBQVk7WUFDWixXQUFXO1lBQ1gsZUFBZTtRQUNuQjs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O0FBRVIsMkJBQTJCO0FBQzNCO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixhQUFhO0lBQ2Isc0NBQXNDO0lBQ3RDLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0lBRUk7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixTQUFTO0lBQ2I7O0lBRUE7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxZQUFZO1FBQ1osbUJBQW1CO1FBQ25CLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osWUFBWTtRQUNaLGVBQWU7UUFDZixZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksWUFBWTtRQUNaLG1CQUFtQjtRQUNuQix5QkFBeUI7UUFDekIsWUFBWTtRQUNaLFlBQVk7UUFDWixlQUFlO1FBQ2YsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLHlCQUF5QjtJQUM3Qjs7SUFFQTtRQUNJLFNBQVM7SUFDYlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLCAqOjpiZWZvcmUsICo6OmFmdGVye1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGZvbnQtZmFtaWx5OiBoZWx2ZXRpY2E7XFxuICAgIC8qIGJveC1zaXppbmc6IGJvcmRlci1ib3g7ICovXFxuICAgIC8qIGxpc3Qtc3R5bGU6IG5vbmU7ICovXFxuICAgIC8qIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgKi9cXG59XFxuXFxuYm9keXtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi5oZWFkZXJ7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmNWU1YjtcXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xcbn1cXG5cXG4uZGFzaGJvYXJke1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4gICAgLnNpZGVQYW5lbHtcXG4gICAgICAgIHdpZHRoOiAyMCU7XFxuICAgICAgICBoZWlnaHQ6IDY1MHB4O1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgICAgICAucHJvamVjdExpc3QsIC50b2RvTGlzdHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICAgICAgfVxcbiAgICAgICAgXFxuICAgICAgICAucHJvamVjdHtcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogMjQwcHg7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnByb2plY3Q6aG92ZXJ7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwY2VjYjtcXG4gICAgICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAucHJvamVjdDphY3RpdmUsIC5wcm9qZWN0OmZvY3VzLCAucHJlc3NlZHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBjZWNiO1xcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY3JlYXRlUHJvamVjdCwgLmVkaXRQcm9qZWN0LCAuY3JlYXRlVG9kbywgLmRlbGV0ZVByb2plY3R7XFxuICAgICAgICAgICAgd2lkdGg6IDE1MHB4O1xcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZlZDY2O1xcbiAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGVsZXRlUHJvamVjdHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNyZWF0ZVByb2plY3Q6aG92ZXIsIC5lZGl0UHJvamVjdDpob3ZlciwgLmNyZWF0ZVRvZG86aG92ZXIsIC5kZWxldGVQcm9qZWN0OmhvdmVye1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmIyMzg7XFxuICAgICAgICAgICAgb3BhY2l0eTogMC45O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNyZWF0ZVByb2plY3Q6YWN0aXZlLC5lZGl0UHJvamVjdDphY3RpdmUsIC5jcmVhdGVUb2RvOmFjdGl2ZSwgLmRlbGV0ZVByb2plY3Q6YWN0aXZle1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjc3M2Q7XFxuICAgICAgICB9XFxuXFxuICAgIC5tYWluUGFuZWx7XFxuICAgICAgICB3aWR0aDogODAlO1xcbiAgICAgICAgaGVpZ2h0OiA2NTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IDEwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJ1dHRvbkJhcntcXG4gICAgICAgIHdpZHRoOiAxMDAwcHg7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgfVxcbiAgICBcXG4gICAgLnRvZG9Db250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiA1cHg7XFxuICAgIH1cXG5cXG4gICAgICAgIC50b2RvSXRlbXN7XFxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvSXRlbXNDb21wbGV0ZXtcXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvRWRpdEJ1dHRvbiwgLnRvZG9EZWxldGVCdXR0b24sIC50b2RvSW5mb0J1dHRvbntcXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xcbiAgICAgICAgICAgIGhlaWdodDogNTBweDtcXG4gICAgICAgICAgICB3aWR0aDogNTBweDtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudG9kb0RlbGV0ZUJ1dHRvbntcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50b2RvSW5mb0J1dHRvbntcXG4gICAgICAgIH1cXG5cXG4vKiBQcm9qZWN0IGFuZCBJdGVtIFBvcHVwICovXFxuLnByb2plY3RQb3B1cHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLnByb2plY3RFZGl0UG9wdXAsIC5pdGVtRWRpdFBvcHVwLCAuaW5mb1BvcHVwe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiMjM4O1xcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIHBhZGRpbmc6IDQwcHg7XFxuICAgIC8qIHBsYWNlIGl0IGRlYWQgY2VudGVyIGluIHRoZSB3aW5kb3cqL1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogNTAlO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4uaXRlbVBvcHVwe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4gICAgLnByb2plY3RGb3Jte1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAxMHB4O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0RWRpdEZvcm0sIC5pdGVtRWRpdEZvcm0sIC5pbmZvRm9ybXtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogMTBweDtcXG4gICAgfVxcblxcbiAgICAucHJvamVjdElucHV0e1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XFxuICAgICAgICBoZWlnaHQ6IDUwcHg7XFxuICAgICAgICB3aWR0aDogMjI1cHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RTdWJtaXQsIC5wcm9qZWN0Q2FuY2VsLCAucHJvamVjdEVkaXRTdWJtaXQsIC5wcm9qZWN0RWRpdENhbmNlbCwgLmNsb3NlQnV0dG9ue1xcbiAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyMGEzOWU7XFxuICAgICAgICBoZWlnaHQ6IDMwcHg7XFxuICAgICAgICB3aWR0aDogMjAwcHg7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgICAgICBvcGFjaXR5OiAwLjg7XFxuICAgIH1cXG5cXG4gICAgLml0ZW1TdWJtaXQsIC5pdGVtQ2FuY2VsLCAuaXRlbUVkaXRTdWJtaXQsIC5pdGVtRWRpdENhbmNlbHtcXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjBhMzllO1xcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICAgICAgb3BhY2l0eTogMC44O1xcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0Q2FuY2VsLCAuaXRlbUNhbmNlbCwgLnByb2plY3RFZGl0Q2FuY2VsLCAuaXRlbUVkaXRDYW5jZWwsIC5jbG9zZUJ1dHRvbntcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNTU1MzY7XFxuICAgIH1cXG5cXG4gICAgLnByb2plY3RTdWJtaXQ6aG92ZXIsIC5wcm9qZWN0Q2FuY2VsOmhvdmVyLCAuaXRlbVN1Ym1pdDpob3ZlciwgLml0ZW1DYW5jZWw6aG92ZXIsIC5wcm9qZWN0RWRpdFN1Ym1pdDpob3ZlciwgLnByb2plY3RFZGl0Q2FuY2VsOmhvdmVyLCAuaXRlbUVkaXRTdWJtaXQ6aG92ZXIsIC5pdGVtRWRpdENhbmNlbDpob3ZlciwgLmNsb3NlQnV0dG9uOmhvdmVye1xcbiAgICAgICAgb3BhY2l0eToxO1xcbiAgICB9XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZExlYWRpbmdaZXJvcyhudW1iZXIsIHRhcmdldExlbmd0aCkge1xuICB2YXIgc2lnbiA9IG51bWJlciA8IDAgPyAnLScgOiAnJztcbiAgdmFyIG91dHB1dCA9IE1hdGguYWJzKG51bWJlcikudG9TdHJpbmcoKTtcblxuICB3aGlsZSAob3V0cHV0Lmxlbmd0aCA8IHRhcmdldExlbmd0aCkge1xuICAgIG91dHB1dCA9ICcwJyArIG91dHB1dDtcbiAgfVxuXG4gIHJldHVybiBzaWduICsgb3V0cHV0O1xufSIsImltcG9ydCBnZXRVVENEYXlPZlllYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDRGF5T2ZZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2VlayBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uLy4uLy4uL19saWIvZ2V0VVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrIGZyb20gXCIuLi8uLi8uLi9fbGliL2dldFVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vLi4vLi4vX2xpYi9nZXRVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IGFkZExlYWRpbmdaZXJvcyBmcm9tIFwiLi4vLi4vYWRkTGVhZGluZ1plcm9zL2luZGV4LmpzXCI7XG5pbXBvcnQgbGlnaHRGb3JtYXR0ZXJzIGZyb20gXCIuLi9saWdodEZvcm1hdHRlcnMvaW5kZXguanNcIjtcbnZhciBkYXlQZXJpb2RFbnVtID0ge1xuICBhbTogJ2FtJyxcbiAgcG06ICdwbScsXG4gIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICBub29uOiAnbm9vbicsXG4gIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICBuaWdodDogJ25pZ2h0J1xufTtcbi8qXG4gKiB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICB8IFVuaXQgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8ICBhICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBBKiB8IE1pbGxpc2Vjb25kcyBpbiBkYXkgICAgICAgICAgICB8XG4gKiB8ICBiICB8IEFNLCBQTSwgbm9vbiwgbWlkbmlnaHQgICAgICAgICB8ICBCICB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICB8XG4gKiB8ICBjICB8IFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrICB8ICBDKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8XG4gKiB8ICBkICB8IERheSBvZiBtb250aCAgICAgICAgICAgICAgICAgICB8ICBEICB8IERheSBvZiB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBlICB8IExvY2FsIGRheSBvZiB3ZWVrICAgICAgICAgICAgICB8ICBFICB8IERheSBvZiB3ZWVrICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBmICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBGKiB8IERheSBvZiB3ZWVrIGluIG1vbnRoICAgICAgICAgICB8XG4gKiB8ICBnKiB8IE1vZGlmaWVkIEp1bGlhbiBkYXkgICAgICAgICAgICB8ICBHICB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBoICB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICB8ICBIICB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBpISB8IElTTyBkYXkgb2Ygd2VlayAgICAgICAgICAgICAgICB8ICBJISB8IElTTyB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgICB8XG4gKiB8ICBqKiB8IExvY2FsaXplZCBob3VyIHcvIGRheSBwZXJpb2QgICB8ICBKKiB8IExvY2FsaXplZCBob3VyIHcvbyBkYXkgcGVyaW9kICB8XG4gKiB8ICBrICB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICB8ICBLICB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBsKiB8IChkZXByZWNhdGVkKSAgICAgICAgICAgICAgICAgICB8ICBMICB8IFN0YW5kLWFsb25lIG1vbnRoICAgICAgICAgICAgICB8XG4gKiB8ICBtICB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICB8ICBNICB8IE1vbnRoICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBuICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBOICB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICBvISB8IE9yZGluYWwgbnVtYmVyIG1vZGlmaWVyICAgICAgICB8ICBPICB8IFRpbWV6b25lIChHTVQpICAgICAgICAgICAgICAgICB8XG4gKiB8ICBwISB8IExvbmcgbG9jYWxpemVkIHRpbWUgICAgICAgICAgICB8ICBQISB8IExvbmcgbG9jYWxpemVkIGRhdGUgICAgICAgICAgICB8XG4gKiB8ICBxICB8IFN0YW5kLWFsb25lIHF1YXJ0ZXIgICAgICAgICAgICB8ICBRICB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICByKiB8IFJlbGF0ZWQgR3JlZ29yaWFuIHllYXIgICAgICAgICB8ICBSISB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICB8XG4gKiB8ICBzICB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICB8ICBTICB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICB8XG4gKiB8ICB0ISB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICB8ICBUISB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgICAgICAgICB8XG4gKiB8ICB1ICB8IEV4dGVuZGVkIHllYXIgICAgICAgICAgICAgICAgICB8ICBVKiB8IEN5Y2xpYyB5ZWFyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICB2KiB8IFRpbWV6b25lIChnZW5lcmljIG5vbi1sb2NhdC4pICB8ICBWKiB8IFRpbWV6b25lIChsb2NhdGlvbikgICAgICAgICAgICB8XG4gKiB8ICB3ICB8IExvY2FsIHdlZWsgb2YgeWVhciAgICAgICAgICAgICB8ICBXKiB8IFdlZWsgb2YgbW9udGggICAgICAgICAgICAgICAgICB8XG4gKiB8ICB4ICB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICB8ICBYICB8IFRpbWV6b25lIChJU08tODYwMSkgICAgICAgICAgICB8XG4gKiB8ICB5ICB8IFllYXIgKGFicykgICAgICAgICAgICAgICAgICAgICB8ICBZICB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICB8XG4gKiB8ICB6ICB8IFRpbWV6b25lIChzcGVjaWZpYyBub24tbG9jYXQuKSB8ICBaKiB8IFRpbWV6b25lIChhbGlhc2VzKSAgICAgICAgICAgICB8XG4gKlxuICogTGV0dGVycyBtYXJrZWQgYnkgKiBhcmUgbm90IGltcGxlbWVudGVkIGJ1dCByZXNlcnZlZCBieSBVbmljb2RlIHN0YW5kYXJkLlxuICpcbiAqIExldHRlcnMgbWFya2VkIGJ5ICEgYXJlIG5vbi1zdGFuZGFyZCwgYnV0IGltcGxlbWVudGVkIGJ5IGRhdGUtZm5zOlxuICogLSBgb2AgbW9kaWZpZXMgdGhlIHByZXZpb3VzIHRva2VuIHRvIHR1cm4gaXQgaW50byBhbiBvcmRpbmFsIChzZWUgYGZvcm1hdGAgZG9jcylcbiAqIC0gYGlgIGlzIElTTyBkYXkgb2Ygd2Vlay4gRm9yIGBpYCBhbmQgYGlpYCBpcyByZXR1cm5zIG51bWVyaWMgSVNPIHdlZWsgZGF5cyxcbiAqICAgaS5lLiA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSwgZXRjLlxuICogLSBgSWAgaXMgSVNPIHdlZWsgb2YgeWVhciwgYXMgb3Bwb3NlZCB0byBgd2Agd2hpY2ggaXMgbG9jYWwgd2VlayBvZiB5ZWFyLlxuICogLSBgUmAgaXMgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsIGFzIG9wcG9zZWQgdG8gYFlgIHdoaWNoIGlzIGxvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIuXG4gKiAgIGBSYCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYElgIGFuZCBgaWBcbiAqICAgZm9yIHVuaXZlcnNhbCBJU08gd2Vlay1udW1iZXJpbmcgZGF0ZSwgd2hlcmVhc1xuICogICBgWWAgaXMgc3VwcG9zZWQgdG8gYmUgdXNlZCBpbiBjb25qdW5jdGlvbiB3aXRoIGB3YCBhbmQgYGVgXG4gKiAgIGZvciB3ZWVrLW51bWJlcmluZyBkYXRlIHNwZWNpZmljIHRvIHRoZSBsb2NhbGUuXG4gKiAtIGBQYCBpcyBsb25nIGxvY2FsaXplZCBkYXRlIGZvcm1hdFxuICogLSBgcGAgaXMgbG9uZyBsb2NhbGl6ZWQgdGltZSBmb3JtYXRcbiAqL1xuXG52YXIgZm9ybWF0dGVycyA9IHtcbiAgLy8gRXJhXG4gIEc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZXJhID0gZGF0ZS5nZXRVVENGdWxsWWVhcigpID4gMCA/IDEgOiAwO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gQUQsIEJDXG4gICAgICBjYXNlICdHJzpcbiAgICAgIGNhc2UgJ0dHJzpcbiAgICAgIGNhc2UgJ0dHRyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBBLCBCXG5cbiAgICAgIGNhc2UgJ0dHR0dHJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmVyYShlcmEsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdydcbiAgICAgICAgfSk7XG4gICAgICAvLyBBbm5vIERvbWluaSwgQmVmb3JlIENocmlzdFxuXG4gICAgICBjYXNlICdHR0dHJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5lcmEoZXJhLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIC8vIE9yZGluYWwgbnVtYmVyXG4gICAgaWYgKHRva2VuID09PSAneW8nKSB7XG4gICAgICB2YXIgc2lnbmVkWWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgICAgdmFyIHllYXIgPSBzaWduZWRZZWFyID4gMCA/IHNpZ25lZFllYXIgOiAxIC0gc2lnbmVkWWVhcjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHllYXIsIHtcbiAgICAgICAgdW5pdDogJ3llYXInXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnkoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBMb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFk6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgc2lnbmVkV2Vla1llYXIgPSBnZXRVVENXZWVrWWVhcihkYXRlLCBvcHRpb25zKTsgLy8gUmV0dXJucyAxIGZvciAxIEJDICh3aGljaCBpcyB5ZWFyIDAgaW4gSmF2YVNjcmlwdClcblxuICAgIHZhciB3ZWVrWWVhciA9IHNpZ25lZFdlZWtZZWFyID4gMCA/IHNpZ25lZFdlZWtZZWFyIDogMSAtIHNpZ25lZFdlZWtZZWFyOyAvLyBUd28gZGlnaXQgeWVhclxuXG4gICAgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgICB2YXIgdHdvRGlnaXRZZWFyID0gd2Vla1llYXIgJSAxMDA7XG4gICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHR3b0RpZ2l0WWVhciwgMik7XG4gICAgfSAvLyBPcmRpbmFsIG51bWJlclxuXG5cbiAgICBpZiAodG9rZW4gPT09ICdZbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWtZZWFyLCB7XG4gICAgICAgIHVuaXQ6ICd5ZWFyJ1xuICAgICAgfSk7XG4gICAgfSAvLyBQYWRkaW5nXG5cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3Mod2Vla1llYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gIFI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHZhciBpc29XZWVrWWVhciA9IGdldFVUQ0lTT1dlZWtZZWFyKGRhdGUpOyAvLyBQYWRkaW5nXG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGlzb1dlZWtZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBFeHRlbmRlZCB5ZWFyLiBUaGlzIGlzIGEgc2luZ2xlIG51bWJlciBkZXNpZ25hdGluZyB0aGUgeWVhciBvZiB0aGlzIGNhbGVuZGFyIHN5c3RlbS5cbiAgLy8gVGhlIG1haW4gZGlmZmVyZW5jZSBiZXR3ZWVuIGB5YCBhbmQgYHVgIGxvY2FsaXplcnMgYXJlIEIuQy4geWVhcnM6XG4gIC8vIHwgWWVhciB8IGB5YCB8IGB1YCB8XG4gIC8vIHwtLS0tLS18LS0tLS18LS0tLS18XG4gIC8vIHwgQUMgMSB8ICAgMSB8ICAgMSB8XG4gIC8vIHwgQkMgMSB8ICAgMSB8ICAgMCB8XG4gIC8vIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gIC8vIEFsc28gYHl5YCBhbHdheXMgcmV0dXJucyB0aGUgbGFzdCB0d28gZGlnaXRzIG9mIGEgeWVhcixcbiAgLy8gd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkLlxuICB1OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHllYXIsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFF1YXJ0ZXJcbiAgUTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBxdWFydGVyID0gTWF0aC5jZWlsKChkYXRlLmdldFVUQ01vbnRoKCkgKyAxKSAvIDMpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgMywgNFxuICAgICAgY2FzZSAnUSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcocXVhcnRlcik7XG4gICAgICAvLyAwMSwgMDIsIDAzLCAwNFxuXG4gICAgICBjYXNlICdRUSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MocXVhcnRlciwgMik7XG4gICAgICAvLyAxc3QsIDJuZCwgM3JkLCA0dGhcblxuICAgICAgY2FzZSAnUW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihxdWFydGVyLCB7XG4gICAgICAgICAgdW5pdDogJ3F1YXJ0ZXInXG4gICAgICAgIH0pO1xuICAgICAgLy8gUTEsIFEyLCBRMywgUTRcblxuICAgICAgY2FzZSAnUVFRJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDEsIDIsIDMsIDQgKG5hcnJvdyBxdWFydGVyOyBjb3VsZCBiZSBub3QgbnVtZXJpY2FsKVxuXG4gICAgICBjYXNlICdRUVFRUSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gMXN0IHF1YXJ0ZXIsIDJuZCBxdWFydGVyLCAuLi5cblxuICAgICAgY2FzZSAnUVFRUSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBxdWFydGVyXG4gIHE6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgcXVhcnRlciA9IE1hdGguY2VpbCgoZGF0ZS5nZXRVVENNb250aCgpICsgMSkgLyAzKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIDEsIDIsIDMsIDRcbiAgICAgIGNhc2UgJ3EnOlxuICAgICAgICByZXR1cm4gU3RyaW5nKHF1YXJ0ZXIpO1xuICAgICAgLy8gMDEsIDAyLCAwMywgMDRcblxuICAgICAgY2FzZSAncXEnOlxuICAgICAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHF1YXJ0ZXIsIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIDNyZCwgNHRoXG5cbiAgICAgIGNhc2UgJ3FvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIocXVhcnRlciwge1xuICAgICAgICAgIHVuaXQ6ICdxdWFydGVyJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFExLCBRMiwgUTMsIFE0XG5cbiAgICAgIGNhc2UgJ3FxcSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5xdWFydGVyKHF1YXJ0ZXIsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyAxLCAyLCAzLCA0IChuYXJyb3cgcXVhcnRlcjsgY291bGQgYmUgbm90IG51bWVyaWNhbClcblxuICAgICAgY2FzZSAncXFxcXEnOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUucXVhcnRlcihxdWFydGVyLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIDFzdCBxdWFydGVyLCAybmQgcXVhcnRlciwgLi4uXG5cbiAgICAgIGNhc2UgJ3FxcXEnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLnF1YXJ0ZXIocXVhcnRlciwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBtb250aCA9IGRhdGUuZ2V0VVRDTW9udGgoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ00nOlxuICAgICAgY2FzZSAnTU0nOlxuICAgICAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLk0oZGF0ZSwgdG9rZW4pO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgMTJ0aFxuXG4gICAgICBjYXNlICdNbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKG1vbnRoICsgMSwge1xuICAgICAgICAgIHVuaXQ6ICdtb250aCdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW4sIEZlYiwgLi4uLCBEZWNcblxuICAgICAgY2FzZSAnTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSiwgRiwgLi4uLCBEXG5cbiAgICAgIGNhc2UgJ01NTU1NJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEphbnVhcnksIEZlYnJ1YXJ5LCAuLi4sIERlY2VtYmVyXG5cbiAgICAgIGNhc2UgJ01NTU0nOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm1vbnRoKG1vbnRoLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBTdGFuZC1hbG9uZSBtb250aFxuICBMOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMSwgMiwgLi4uLCAxMlxuICAgICAgY2FzZSAnTCc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9udGggKyAxKTtcbiAgICAgIC8vIDAxLCAwMiwgLi4uLCAxMlxuXG4gICAgICBjYXNlICdMTCc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDEydGhcblxuICAgICAgY2FzZSAnTG8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihtb250aCArIDEsIHtcbiAgICAgICAgICB1bml0OiAnbW9udGgnXG4gICAgICAgIH0pO1xuICAgICAgLy8gSmFuLCBGZWIsIC4uLiwgRGVjXG5cbiAgICAgIGNhc2UgJ0xMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIEosIEYsIC4uLiwgRFxuXG4gICAgICBjYXNlICdMTExMTCc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgICAvLyBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuXG4gICAgICBjYXNlICdMTExMJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5tb250aChtb250aCwge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gTG9jYWwgd2VlayBvZiB5ZWFyXG4gIHc6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgd2VlayA9IGdldFVUQ1dlZWsoZGF0ZSwgb3B0aW9ucyk7XG5cbiAgICBpZiAodG9rZW4gPT09ICd3bycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKHdlZWssIHtcbiAgICAgICAgdW5pdDogJ3dlZWsnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKHdlZWssIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIElTTyB3ZWVrIG9mIHllYXJcbiAgSTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBpc29XZWVrID0gZ2V0VVRDSVNPV2VlayhkYXRlKTtcblxuICAgIGlmICh0b2tlbiA9PT0gJ0lvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoaXNvV2Vlaywge1xuICAgICAgICB1bml0OiAnd2VlaydcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaXNvV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnZG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ0RhdGUoKSwge1xuICAgICAgICB1bml0OiAnZGF0ZSdcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBsaWdodEZvcm1hdHRlcnMuZChkYXRlLCB0b2tlbik7XG4gIH0sXG4gIC8vIERheSBvZiB5ZWFyXG4gIEQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgZGF5T2ZZZWFyID0gZ2V0VVRDRGF5T2ZZZWFyKGRhdGUpO1xuXG4gICAgaWYgKHRva2VuID09PSAnRG8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXlPZlllYXIsIHtcbiAgICAgICAgdW5pdDogJ2RheU9mWWVhcidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF5T2ZZZWFyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBEYXkgb2Ygd2Vla1xuICBFOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0VVRDRGF5KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBUdWVcbiAgICAgIGNhc2UgJ0UnOlxuICAgICAgY2FzZSAnRUUnOlxuICAgICAgY2FzZSAnRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ0VFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnRUVFRUVFJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ0VFRUUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIExvY2FsIGRheSBvZiB3ZWVrXG4gIGU6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoTnRoIGRheSBvZiB3ZWVrIHdpdGggY3VycmVudCBsb2NhbGUgb3Igd2Vla1N0YXJ0c09uKVxuICAgICAgY2FzZSAnZSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcobG9jYWxEYXlPZldlZWspO1xuICAgICAgLy8gUGFkZGVkIG51bWVyaWNhbCB2YWx1ZVxuXG4gICAgICBjYXNlICdlZSc6XG4gICAgICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MobG9jYWxEYXlPZldlZWssIDIpO1xuICAgICAgLy8gMXN0LCAybmQsIC4uLiwgN3RoXG5cbiAgICAgIGNhc2UgJ2VvJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIobG9jYWxEYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcblxuICAgICAgY2FzZSAnZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUXG5cbiAgICAgIGNhc2UgJ2VlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVcblxuICAgICAgY2FzZSAnZWVlZWVlJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3Nob3J0JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdWVzZGF5XG5cbiAgICAgIGNhc2UgJ2VlZWUnOlxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheShkYXlPZldlZWssIHtcbiAgICAgICAgICB3aWR0aDogJ3dpZGUnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICB9XG4gIH0sXG4gIC8vIFN0YW5kLWFsb25lIGxvY2FsIGRheSBvZiB3ZWVrXG4gIGM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgZGF5T2ZXZWVrID0gZGF0ZS5nZXRVVENEYXkoKTtcbiAgICB2YXIgbG9jYWxEYXlPZldlZWsgPSAoZGF5T2ZXZWVrIC0gb3B0aW9ucy53ZWVrU3RhcnRzT24gKyA4KSAlIDcgfHwgNztcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIE51bWVyaWNhbCB2YWx1ZSAoc2FtZSBhcyBpbiBgZWApXG4gICAgICBjYXNlICdjJzpcbiAgICAgICAgcmV0dXJuIFN0cmluZyhsb2NhbERheU9mV2Vlayk7XG4gICAgICAvLyBQYWRkZWQgbnVtZXJpY2FsIHZhbHVlXG5cbiAgICAgIGNhc2UgJ2NjJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhsb2NhbERheU9mV2VlaywgdG9rZW4ubGVuZ3RoKTtcbiAgICAgIC8vIDFzdCwgMm5kLCAuLi4sIDd0aFxuXG4gICAgICBjYXNlICdjbyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGxvY2FsRGF5T2ZXZWVrLCB7XG4gICAgICAgICAgdW5pdDogJ2RheSdcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVFxuXG4gICAgICBjYXNlICdjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICduYXJyb3cnLFxuICAgICAgICAgIGNvbnRleHQ6ICdzdGFuZGFsb25lJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1XG5cbiAgICAgIGNhc2UgJ2NjY2NjYyc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICdzaG9ydCcsXG4gICAgICAgICAgY29udGV4dDogJ3N0YW5kYWxvbmUnXG4gICAgICAgIH0pO1xuICAgICAgLy8gVHVlc2RheVxuXG4gICAgICBjYXNlICdjY2NjJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXkoZGF5T2ZXZWVrLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnc3RhbmRhbG9uZSdcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBJU08gZGF5IG9mIHdlZWtcbiAgaTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldFVUQ0RheSgpO1xuICAgIHZhciBpc29EYXlPZldlZWsgPSBkYXlPZldlZWsgPT09IDAgPyA3IDogZGF5T2ZXZWVrO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gMlxuICAgICAgY2FzZSAnaSc6XG4gICAgICAgIHJldHVybiBTdHJpbmcoaXNvRGF5T2ZXZWVrKTtcbiAgICAgIC8vIDAyXG5cbiAgICAgIGNhc2UgJ2lpJzpcbiAgICAgICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhpc29EYXlPZldlZWssIHRva2VuLmxlbmd0aCk7XG4gICAgICAvLyAybmRcblxuICAgICAgY2FzZSAnaW8nOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihpc29EYXlPZldlZWssIHtcbiAgICAgICAgICB1bml0OiAnZGF5J1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZVxuXG4gICAgICBjYXNlICdpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnYWJicmV2aWF0ZWQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFRcblxuICAgICAgY2FzZSAnaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnbmFycm93JyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgICAvLyBUdVxuXG4gICAgICBjYXNlICdpaWlpaWknOlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnc2hvcnQnLFxuICAgICAgICAgIGNvbnRleHQ6ICdmb3JtYXR0aW5nJ1xuICAgICAgICB9KTtcbiAgICAgIC8vIFR1ZXNkYXlcblxuICAgICAgY2FzZSAnaWlpaSc6XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gbG9jYWxpemUuZGF5KGRheU9mV2Vlaywge1xuICAgICAgICAgIHdpZHRoOiAnd2lkZScsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuICAgIH1cbiAgfSxcbiAgLy8gQU0gb3IgUE1cbiAgYTogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKTtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gaG91cnMgLyAxMiA+PSAxID8gJ3BtJyA6ICdhbSc7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdhJzpcbiAgICAgIGNhc2UgJ2FhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2FhYSc6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2FhYWFhJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBBTSwgUE0sIG1pZG5pZ2h0LCBub29uXG4gIGI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA9PT0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0ubm9vbjtcbiAgICB9IGVsc2UgaWYgKGhvdXJzID09PSAwKSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm1pZG5pZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBob3VycyAvIDEyID49IDEgPyAncG0nIDogJ2FtJztcbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlICdiJzpcbiAgICAgIGNhc2UgJ2JiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ2JiYic6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICdhYmJyZXZpYXRlZCcsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgIGNhc2UgJ2JiYmJiJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdiYmJiJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBpbiB0aGUgbW9ybmluZywgaW4gdGhlIGFmdGVybm9vbiwgaW4gdGhlIGV2ZW5pbmcsIGF0IG5pZ2h0XG4gIEI6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgdmFyIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgIGlmIChob3VycyA+PSAxNykge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5ldmVuaW5nO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gMTIpIHtcbiAgICAgIGRheVBlcmlvZEVudW1WYWx1ZSA9IGRheVBlcmlvZEVudW0uYWZ0ZXJub29uO1xuICAgIH0gZWxzZSBpZiAoaG91cnMgPj0gNCkge1xuICAgICAgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF5UGVyaW9kRW51bS5tb3JuaW5nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlQZXJpb2RFbnVtVmFsdWUgPSBkYXlQZXJpb2RFbnVtLm5pZ2h0O1xuICAgIH1cblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIGNhc2UgJ0InOlxuICAgICAgY2FzZSAnQkInOlxuICAgICAgY2FzZSAnQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ2FiYnJldmlhdGVkJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG5cbiAgICAgIGNhc2UgJ0JCQkJCJzpcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplLmRheVBlcmlvZChkYXlQZXJpb2RFbnVtVmFsdWUsIHtcbiAgICAgICAgICB3aWR0aDogJ25hcnJvdycsXG4gICAgICAgICAgY29udGV4dDogJ2Zvcm1hdHRpbmcnXG4gICAgICAgIH0pO1xuXG4gICAgICBjYXNlICdCQkJCJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZS5kYXlQZXJpb2QoZGF5UGVyaW9kRW51bVZhbHVlLCB7XG4gICAgICAgICAgd2lkdGg6ICd3aWRlJyxcbiAgICAgICAgICBjb250ZXh0OiAnZm9ybWF0dGluZydcbiAgICAgICAgfSk7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnaG8nKSB7XG4gICAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCkgJSAxMjtcbiAgICAgIGlmIChob3VycyA9PT0gMCkgaG91cnMgPSAxMjtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGhvdXJzLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5oKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0yM11cbiAgSDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIGlmICh0b2tlbiA9PT0gJ0hvJykge1xuICAgICAgcmV0dXJuIGxvY2FsaXplLm9yZGluYWxOdW1iZXIoZGF0ZS5nZXRVVENIb3VycygpLCB7XG4gICAgICAgIHVuaXQ6ICdob3VyJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5IKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gSG91ciBbMC0xMV1cbiAgSzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBsb2NhbGl6ZSkge1xuICAgIHZhciBob3VycyA9IGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyO1xuXG4gICAgaWYgKHRva2VuID09PSAnS28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIEhvdXIgWzEtMjRdXG4gIGs6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldFVUQ0hvdXJzKCk7XG4gICAgaWYgKGhvdXJzID09PSAwKSBob3VycyA9IDI0O1xuXG4gICAgaWYgKHRva2VuID09PSAna28nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihob3Vycywge1xuICAgICAgICB1bml0OiAnaG91cidcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoaG91cnMsIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIE1pbnV0ZVxuICBtOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIGxvY2FsaXplKSB7XG4gICAgaWYgKHRva2VuID09PSAnbW8nKSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUub3JkaW5hbE51bWJlcihkYXRlLmdldFVUQ01pbnV0ZXMoKSwge1xuICAgICAgICB1bml0OiAnbWludXRlJ1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5tKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gU2Vjb25kXG4gIHM6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgbG9jYWxpemUpIHtcbiAgICBpZiAodG9rZW4gPT09ICdzbycpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZS5vcmRpbmFsTnVtYmVyKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB7XG4gICAgICAgIHVuaXQ6ICdzZWNvbmQnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gbGlnaHRGb3JtYXR0ZXJzLnMoZGF0ZSwgdG9rZW4pO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgcmV0dXJuIGxpZ2h0Rm9ybWF0dGVycy5TKGRhdGUsIHRva2VuKTtcbiAgfSxcbiAgLy8gVGltZXpvbmUgKElTTy04NjAxLiBJZiBvZmZzZXQgaXMgMCwgb3V0cHV0IGlzIGFsd2F5cyBgJ1onYClcbiAgWDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBpZiAodGltZXpvbmVPZmZzZXQgPT09IDApIHtcbiAgICAgIHJldHVybiAnWic7XG4gICAgfVxuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgLy8gSG91cnMgYW5kIG9wdGlvbmFsIG1pbnV0ZXNcbiAgICAgIGNhc2UgJ1gnOlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgIC8vIEhvdXJzLCBtaW51dGVzIGFuZCBvcHRpb25hbCBzZWNvbmRzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgLy8gTm90ZTogbmVpdGhlciBJU08tODYwMSBub3IgSmF2YVNjcmlwdCBzdXBwb3J0cyBzZWNvbmRzIGluIHRpbWV6b25lIG9mZnNldHNcbiAgICAgIC8vIHNvIHRoaXMgdG9rZW4gYWx3YXlzIGhhcyB0aGUgc2FtZSBvdXRwdXQgYXMgYFhYYFxuXG4gICAgICBjYXNlICdYWFhYJzpcbiAgICAgIGNhc2UgJ1hYJzpcbiAgICAgICAgLy8gSG91cnMgYW5kIG1pbnV0ZXMgd2l0aG91dCBgOmAgZGVsaW1pdGVyXG4gICAgICAgIHJldHVybiBmb3JtYXRUaW1lem9uZSh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRoIGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGBYWFhgXG5cbiAgICAgIGNhc2UgJ1hYWFhYJzpcbiAgICAgIGNhc2UgJ1hYWCc6IC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGggYDpgIGRlbGltaXRlclxuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQsICc6Jyk7XG4gICAgfVxuICB9LFxuICAvLyBUaW1lem9uZSAoSVNPLTg2MDEuIElmIG9mZnNldCBpcyAwLCBvdXRwdXQgaXMgYCcrMDA6MDAnYCBvciBlcXVpdmFsZW50KVxuICB4OiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4sIF9sb2NhbGl6ZSwgb3B0aW9ucykge1xuICAgIHZhciBvcmlnaW5hbERhdGUgPSBvcHRpb25zLl9vcmlnaW5hbERhdGUgfHwgZGF0ZTtcbiAgICB2YXIgdGltZXpvbmVPZmZzZXQgPSBvcmlnaW5hbERhdGUuZ2V0VGltZXpvbmVPZmZzZXQoKTtcblxuICAgIHN3aXRjaCAodG9rZW4pIHtcbiAgICAgIC8vIEhvdXJzIGFuZCBvcHRpb25hbCBtaW51dGVzXG4gICAgICBjYXNlICd4JzpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lV2l0aE9wdGlvbmFsTWludXRlcyh0aW1lem9uZU9mZnNldCk7XG4gICAgICAvLyBIb3VycywgbWludXRlcyBhbmQgb3B0aW9uYWwgc2Vjb25kcyB3aXRob3V0IGA6YCBkZWxpbWl0ZXJcbiAgICAgIC8vIE5vdGU6IG5laXRoZXIgSVNPLTg2MDEgbm9yIEphdmFTY3JpcHQgc3VwcG9ydHMgc2Vjb25kcyBpbiB0aW1lem9uZSBvZmZzZXRzXG4gICAgICAvLyBzbyB0aGlzIHRva2VuIGFsd2F5cyBoYXMgdGhlIHNhbWUgb3V0cHV0IGFzIGB4eGBcblxuICAgICAgY2FzZSAneHh4eCc6XG4gICAgICBjYXNlICd4eCc6XG4gICAgICAgIC8vIEhvdXJzIGFuZCBtaW51dGVzIHdpdGhvdXQgYDpgIGRlbGltaXRlclxuICAgICAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUodGltZXpvbmVPZmZzZXQpO1xuICAgICAgLy8gSG91cnMsIG1pbnV0ZXMgYW5kIG9wdGlvbmFsIHNlY29uZHMgd2l0aCBgOmAgZGVsaW1pdGVyXG4gICAgICAvLyBOb3RlOiBuZWl0aGVyIElTTy04NjAxIG5vciBKYXZhU2NyaXB0IHN1cHBvcnRzIHNlY29uZHMgaW4gdGltZXpvbmUgb2Zmc2V0c1xuICAgICAgLy8gc28gdGhpcyB0b2tlbiBhbHdheXMgaGFzIHRoZSBzYW1lIG91dHB1dCBhcyBgeHh4YFxuXG4gICAgICBjYXNlICd4eHh4eCc6XG4gICAgICBjYXNlICd4eHgnOiAvLyBIb3VycyBhbmQgbWludXRlcyB3aXRoIGA6YCBkZWxpbWl0ZXJcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKEdNVClcbiAgTzogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAnTyc6XG4gICAgICBjYXNlICdPTyc6XG4gICAgICBjYXNlICdPT08nOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICdPT09PJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gVGltZXpvbmUgKHNwZWNpZmljIG5vbi1sb2NhdGlvbilcbiAgejogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWV6b25lT2Zmc2V0ID0gb3JpZ2luYWxEYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG5cbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICAvLyBTaG9ydFxuICAgICAgY2FzZSAneic6XG4gICAgICBjYXNlICd6eic6XG4gICAgICBjYXNlICd6enonOlxuICAgICAgICByZXR1cm4gJ0dNVCcgKyBmb3JtYXRUaW1lem9uZVNob3J0KHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgICAgLy8gTG9uZ1xuXG4gICAgICBjYXNlICd6enp6JzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAnR01UJyArIGZvcm1hdFRpbWV6b25lKHRpbWV6b25lT2Zmc2V0LCAnOicpO1xuICAgIH1cbiAgfSxcbiAgLy8gU2Vjb25kcyB0aW1lc3RhbXBcbiAgdDogZnVuY3Rpb24gKGRhdGUsIHRva2VuLCBfbG9jYWxpemUsIG9wdGlvbnMpIHtcbiAgICB2YXIgb3JpZ2luYWxEYXRlID0gb3B0aW9ucy5fb3JpZ2luYWxEYXRlIHx8IGRhdGU7XG4gICAgdmFyIHRpbWVzdGFtcCA9IE1hdGguZmxvb3Iob3JpZ2luYWxEYXRlLmdldFRpbWUoKSAvIDEwMDApO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wXG4gIFQ6IGZ1bmN0aW9uIChkYXRlLCB0b2tlbiwgX2xvY2FsaXplLCBvcHRpb25zKSB7XG4gICAgdmFyIG9yaWdpbmFsRGF0ZSA9IG9wdGlvbnMuX29yaWdpbmFsRGF0ZSB8fCBkYXRlO1xuICAgIHZhciB0aW1lc3RhbXAgPSBvcmlnaW5hbERhdGUuZ2V0VGltZSgpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModGltZXN0YW1wLCB0b2tlbi5sZW5ndGgpO1xuICB9XG59O1xuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZVNob3J0KG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KTtcbiAgdmFyIGhvdXJzID0gTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCk7XG4gIHZhciBtaW51dGVzID0gYWJzT2Zmc2V0ICUgNjA7XG5cbiAgaWYgKG1pbnV0ZXMgPT09IDApIHtcbiAgICByZXR1cm4gc2lnbiArIFN0cmluZyhob3Vycyk7XG4gIH1cblxuICB2YXIgZGVsaW1pdGVyID0gZGlydHlEZWxpbWl0ZXIgfHwgJyc7XG4gIHJldHVybiBzaWduICsgU3RyaW5nKGhvdXJzKSArIGRlbGltaXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZXpvbmVXaXRoT3B0aW9uYWxNaW51dGVzKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgaWYgKG9mZnNldCAlIDYwID09PSAwKSB7XG4gICAgdmFyIHNpZ24gPSBvZmZzZXQgPiAwID8gJy0nIDogJysnO1xuICAgIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKE1hdGguYWJzKG9mZnNldCkgLyA2MCwgMik7XG4gIH1cblxuICByZXR1cm4gZm9ybWF0VGltZXpvbmUob2Zmc2V0LCBkaXJ0eURlbGltaXRlcik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWV6b25lKG9mZnNldCwgZGlydHlEZWxpbWl0ZXIpIHtcbiAgdmFyIGRlbGltaXRlciA9IGRpcnR5RGVsaW1pdGVyIHx8ICcnO1xuICB2YXIgc2lnbiA9IG9mZnNldCA+IDAgPyAnLScgOiAnKyc7XG4gIHZhciBhYnNPZmZzZXQgPSBNYXRoLmFicyhvZmZzZXQpO1xuICB2YXIgaG91cnMgPSBhZGRMZWFkaW5nWmVyb3MoTWF0aC5mbG9vcihhYnNPZmZzZXQgLyA2MCksIDIpO1xuICB2YXIgbWludXRlcyA9IGFkZExlYWRpbmdaZXJvcyhhYnNPZmZzZXQgJSA2MCwgMik7XG4gIHJldHVybiBzaWduICsgaG91cnMgKyBkZWxpbWl0ZXIgKyBtaW51dGVzO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImltcG9ydCBhZGRMZWFkaW5nWmVyb3MgZnJvbSBcIi4uLy4uL2FkZExlYWRpbmdaZXJvcy9pbmRleC5qc1wiO1xuLypcbiAqIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgIHwgVW5pdCAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgIGEgIHwgQU0sIFBNICAgICAgICAgICAgICAgICAgICAgICAgIHwgIEEqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGQgIHwgRGF5IG9mIG1vbnRoICAgICAgICAgICAgICAgICAgIHwgIEQgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIGggIHwgSG91ciBbMS0xMl0gICAgICAgICAgICAgICAgICAgIHwgIEggIHwgSG91ciBbMC0yM10gICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIG0gIHwgTWludXRlICAgICAgICAgICAgICAgICAgICAgICAgIHwgIE0gIHwgTW9udGggICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqIHwgIHMgIHwgU2Vjb25kICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFMgIHwgRnJhY3Rpb24gb2Ygc2Vjb25kICAgICAgICAgICAgIHxcbiAqIHwgIHkgIHwgWWVhciAoYWJzKSAgICAgICAgICAgICAgICAgICAgIHwgIFkgIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAqXG4gKiBMZXR0ZXJzIG1hcmtlZCBieSAqIGFyZSBub3QgaW1wbGVtZW50ZWQgYnV0IHJlc2VydmVkIGJ5IFVuaWNvZGUgc3RhbmRhcmQuXG4gKi9cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIFllYXJcbiAgeTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgLy8gRnJvbSBodHRwOi8vd3d3LnVuaWNvZGUub3JnL3JlcG9ydHMvdHIzNS90cjM1LTMxL3RyMzUtZGF0ZXMuaHRtbCNEYXRlX0Zvcm1hdF90b2tlbnNcbiAgICAvLyB8IFllYXIgICAgIHwgICAgIHkgfCB5eSB8ICAgeXl5IHwgIHl5eXkgfCB5eXl5eSB8XG4gICAgLy8gfC0tLS0tLS0tLS18LS0tLS0tLXwtLS0tfC0tLS0tLS18LS0tLS0tLXwtLS0tLS0tfFxuICAgIC8vIHwgQUQgMSAgICAgfCAgICAgMSB8IDAxIHwgICAwMDEgfCAgMDAwMSB8IDAwMDAxIHxcbiAgICAvLyB8IEFEIDEyICAgIHwgICAgMTIgfCAxMiB8ICAgMDEyIHwgIDAwMTIgfCAwMDAxMiB8XG4gICAgLy8gfCBBRCAxMjMgICB8ICAgMTIzIHwgMjMgfCAgIDEyMyB8ICAwMTIzIHwgMDAxMjMgfFxuICAgIC8vIHwgQUQgMTIzNCAgfCAgMTIzNCB8IDM0IHwgIDEyMzQgfCAgMTIzNCB8IDAxMjM0IHxcbiAgICAvLyB8IEFEIDEyMzQ1IHwgMTIzNDUgfCA0NSB8IDEyMzQ1IHwgMTIzNDUgfCAxMjM0NSB8XG4gICAgdmFyIHNpZ25lZFllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7IC8vIFJldHVybnMgMSBmb3IgMSBCQyAod2hpY2ggaXMgeWVhciAwIGluIEphdmFTY3JpcHQpXG5cbiAgICB2YXIgeWVhciA9IHNpZ25lZFllYXIgPiAwID8gc2lnbmVkWWVhciA6IDEgLSBzaWduZWRZZWFyO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3ModG9rZW4gPT09ICd5eScgPyB5ZWFyICUgMTAwIDogeWVhciwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTW9udGhcbiAgTTogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpO1xuICAgIHJldHVybiB0b2tlbiA9PT0gJ00nID8gU3RyaW5nKG1vbnRoICsgMSkgOiBhZGRMZWFkaW5nWmVyb3MobW9udGggKyAxLCAyKTtcbiAgfSxcbiAgLy8gRGF5IG9mIHRoZSBtb250aFxuICBkOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDRGF0ZSgpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBBTSBvciBQTVxuICBhOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICB2YXIgZGF5UGVyaW9kRW51bVZhbHVlID0gZGF0ZS5nZXRVVENIb3VycygpIC8gMTIgPj0gMSA/ICdwbScgOiAnYW0nO1xuXG4gICAgc3dpdGNoICh0b2tlbikge1xuICAgICAgY2FzZSAnYSc6XG4gICAgICBjYXNlICdhYSc6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgY2FzZSAnYWFhJzpcbiAgICAgICAgcmV0dXJuIGRheVBlcmlvZEVudW1WYWx1ZTtcblxuICAgICAgY2FzZSAnYWFhYWEnOlxuICAgICAgICByZXR1cm4gZGF5UGVyaW9kRW51bVZhbHVlWzBdO1xuXG4gICAgICBjYXNlICdhYWFhJzpcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBkYXlQZXJpb2RFbnVtVmFsdWUgPT09ICdhbScgPyAnYS5tLicgOiAncC5tLic7XG4gICAgfVxuICB9LFxuICAvLyBIb3VyIFsxLTEyXVxuICBoOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSAlIDEyIHx8IDEyLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBIb3VyIFswLTIzXVxuICBIOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDSG91cnMoKSwgdG9rZW4ubGVuZ3RoKTtcbiAgfSxcbiAgLy8gTWludXRlXG4gIG06IGZ1bmN0aW9uIChkYXRlLCB0b2tlbikge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRVVENNaW51dGVzKCksIHRva2VuLmxlbmd0aCk7XG4gIH0sXG4gIC8vIFNlY29uZFxuICBzOiBmdW5jdGlvbiAoZGF0ZSwgdG9rZW4pIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0VVRDU2Vjb25kcygpLCB0b2tlbi5sZW5ndGgpO1xuICB9LFxuICAvLyBGcmFjdGlvbiBvZiBzZWNvbmRcbiAgUzogZnVuY3Rpb24gKGRhdGUsIHRva2VuKSB7XG4gICAgdmFyIG51bWJlck9mRGlnaXRzID0gdG9rZW4ubGVuZ3RoO1xuICAgIHZhciBtaWxsaXNlY29uZHMgPSBkYXRlLmdldFVUQ01pbGxpc2Vjb25kcygpO1xuICAgIHZhciBmcmFjdGlvbmFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzICogTWF0aC5wb3coMTAsIG51bWJlck9mRGlnaXRzIC0gMykpO1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZnJhY3Rpb25hbFNlY29uZHMsIHRva2VuLmxlbmd0aCk7XG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBmb3JtYXR0ZXJzOyIsImZ1bmN0aW9uIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgc3dpdGNoIChwYXR0ZXJuKSB7XG4gICAgY2FzZSAnUCc6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy5kYXRlKHtcbiAgICAgICAgd2lkdGg6ICdzaG9ydCdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbWVkaXVtJ1xuICAgICAgfSk7XG5cbiAgICBjYXNlICdQUFAnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcuZGF0ZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAnUFBQUCc6XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLmRhdGUoe1xuICAgICAgICB3aWR0aDogJ2Z1bGwnXG4gICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0aW1lTG9uZ0Zvcm1hdHRlcihwYXR0ZXJuLCBmb3JtYXRMb25nKSB7XG4gIHN3aXRjaCAocGF0dGVybikge1xuICAgIGNhc2UgJ3AnOlxuICAgICAgcmV0dXJuIGZvcm1hdExvbmcudGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ21lZGl1bSdcbiAgICAgIH0pO1xuXG4gICAgY2FzZSAncHBwJzpcbiAgICAgIHJldHVybiBmb3JtYXRMb25nLnRpbWUoe1xuICAgICAgICB3aWR0aDogJ2xvbmcnXG4gICAgICB9KTtcblxuICAgIGNhc2UgJ3BwcHAnOlxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gZm9ybWF0TG9uZy50aW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGF0ZVRpbWVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpIHtcbiAgdmFyIG1hdGNoUmVzdWx0ID0gcGF0dGVybi5tYXRjaCgvKFArKShwKyk/LykgfHwgW107XG4gIHZhciBkYXRlUGF0dGVybiA9IG1hdGNoUmVzdWx0WzFdO1xuICB2YXIgdGltZVBhdHRlcm4gPSBtYXRjaFJlc3VsdFsyXTtcblxuICBpZiAoIXRpbWVQYXR0ZXJuKSB7XG4gICAgcmV0dXJuIGRhdGVMb25nRm9ybWF0dGVyKHBhdHRlcm4sIGZvcm1hdExvbmcpO1xuICB9XG5cbiAgdmFyIGRhdGVUaW1lRm9ybWF0O1xuXG4gIHN3aXRjaCAoZGF0ZVBhdHRlcm4pIHtcbiAgICBjYXNlICdQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnc2hvcnQnXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFAnOlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdtZWRpdW0nXG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSAnUFBQJzpcbiAgICAgIGRhdGVUaW1lRm9ybWF0ID0gZm9ybWF0TG9uZy5kYXRlVGltZSh7XG4gICAgICAgIHdpZHRoOiAnbG9uZydcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlICdQUFBQJzpcbiAgICBkZWZhdWx0OlxuICAgICAgZGF0ZVRpbWVGb3JtYXQgPSBmb3JtYXRMb25nLmRhdGVUaW1lKHtcbiAgICAgICAgd2lkdGg6ICdmdWxsJ1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgfVxuXG4gIHJldHVybiBkYXRlVGltZUZvcm1hdC5yZXBsYWNlKCd7e2RhdGV9fScsIGRhdGVMb25nRm9ybWF0dGVyKGRhdGVQYXR0ZXJuLCBmb3JtYXRMb25nKSkucmVwbGFjZSgne3t0aW1lfX0nLCB0aW1lTG9uZ0Zvcm1hdHRlcih0aW1lUGF0dGVybiwgZm9ybWF0TG9uZykpO1xufVxuXG52YXIgbG9uZ0Zvcm1hdHRlcnMgPSB7XG4gIHA6IHRpbWVMb25nRm9ybWF0dGVyLFxuICBQOiBkYXRlVGltZUxvbmdGb3JtYXR0ZXJcbn07XG5leHBvcnQgZGVmYXVsdCBsb25nRm9ybWF0dGVyczsiLCIvKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMoZGF0ZSkge1xuICB2YXIgdXRjRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpLCBkYXRlLmdldERhdGUoKSwgZGF0ZS5nZXRIb3VycygpLCBkYXRlLmdldE1pbnV0ZXMoKSwgZGF0ZS5nZXRTZWNvbmRzKCksIGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkpKTtcbiAgdXRjRGF0ZS5zZXRVVENGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLSB1dGNEYXRlLmdldFRpbWUoKTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9EQVkgPSA4NjQwMDAwMDsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ0RheU9mWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKTtcbiAgZGF0ZS5zZXRVVENNb250aCgwLCAxKTtcbiAgZGF0ZS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZZZWFyVGltZXN0YW1wID0gZGF0ZS5nZXRUaW1lKCk7XG4gIHZhciBkaWZmZXJlbmNlID0gdGltZXN0YW1wIC0gc3RhcnRPZlllYXJUaW1lc3RhbXA7XG4gIHJldHVybiBNYXRoLmZsb29yKGRpZmZlcmVuY2UgLyBNSUxMSVNFQ09ORFNfSU5fREFZKSArIDE7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWtZZWFyIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2VlayhkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkaWZmID0gc3RhcnRPZlVUQ0lTT1dlZWsoZGF0ZSkuZ2V0VGltZSgpIC0gc3RhcnRPZlVUQ0lTT1dlZWtZZWFyKGRhdGUpLmdldFRpbWUoKTsgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcblxuICByZXR1cm4gTWF0aC5yb3VuZChkaWZmIC8gTUlMTElTRUNPTkRTX0lOX1dFRUspICsgMTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENJU09XZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDSVNPV2Vlay9pbmRleC5qc1wiOyAvLyBUaGlzIGZ1bmN0aW9uIHdpbGwgYmUgYSBwYXJ0IG9mIHB1YmxpYyBBUEkgd2hlbiBVVEMgZnVuY3Rpb24gd2lsbCBiZSBpbXBsZW1lbnRlZC5cbi8vIFNlZSBpc3N1ZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2lzc3Vlcy8zNzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHZhciBzdGFydE9mTmV4dFllYXIgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENGdWxsWWVhcih5ZWFyLCAwLCA0KTtcbiAgZm91cnRoT2ZKYW51YXJ5T2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpO1xuXG4gIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mTmV4dFllYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXIgKyAxO1xuICB9IGVsc2UgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZUaGlzWWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhcjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDE7XG4gIH1cbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2VlayBmcm9tIFwiLi4vc3RhcnRPZlVUQ1dlZWsvaW5kZXguanNcIjtcbmltcG9ydCBzdGFydE9mVVRDV2Vla1llYXIgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrWWVhci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG52YXIgTUlMTElTRUNPTkRTX0lOX1dFRUsgPSA2MDQ4MDAwMDA7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRVVENXZWVrKGRpcnR5RGF0ZSwgb3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRpZmYgPSBzdGFydE9mVVRDV2VlayhkYXRlLCBvcHRpb25zKS5nZXRUaW1lKCkgLSBzdGFydE9mVVRDV2Vla1llYXIoZGF0ZSwgb3B0aW9ucykuZ2V0VGltZSgpOyAvLyBSb3VuZCB0aGUgbnVtYmVyIG9mIGRheXMgdG8gdGhlIG5lYXJlc3QgaW50ZWdlclxuICAvLyBiZWNhdXNlIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGluIGEgd2VlayBpcyBub3QgY29uc3RhbnRcbiAgLy8gKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uLy4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENXZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi90b0ludGVnZXIvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygxLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZSA9IHRvRGF0ZShkaXJ0eURhdGUpO1xuICB2YXIgeWVhciA9IGRhdGUuZ2V0VVRDRnVsbFllYXIoKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGU7XG4gIHZhciBkZWZhdWx0Rmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID09IG51bGwgPyAxIDogdG9JbnRlZ2VyKGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7XG4gIHZhciBmaXJzdFdlZWtDb250YWluc0RhdGUgPSBvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA6IHRvSW50ZWdlcihvcHRpb25zLmZpcnN0V2Vla0NvbnRhaW5zRGF0ZSk7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMSBhbmQgNyBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEoZmlyc3RXZWVrQ29udGFpbnNEYXRlID49IDEgJiYgZmlyc3RXZWVrQ29udGFpbnNEYXRlIDw9IDcpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ2ZpcnN0V2Vla0NvbnRhaW5zRGF0ZSBtdXN0IGJlIGJldHdlZW4gMSBhbmQgNyBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGZpcnN0V2Vla09mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENGdWxsWWVhcih5ZWFyICsgMSwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZOZXh0WWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mTmV4dFllYXIsIGRpcnR5T3B0aW9ucyk7XG4gIHZhciBmaXJzdFdlZWtPZlRoaXNZZWFyID0gbmV3IERhdGUoMCk7XG4gIGZpcnN0V2Vla09mVGhpc1llYXIuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrT2ZUaGlzWWVhci5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2Vla09mVGhpc1llYXIsIGRpcnR5T3B0aW9ucyk7XG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDE7XG4gIH0gZWxzZSBpZiAoZGF0ZS5nZXRUaW1lKCkgPj0gc3RhcnRPZlRoaXNZZWFyLmdldFRpbWUoKSkge1xuICAgIHJldHVybiB5ZWFyO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5ZWFyIC0gMTtcbiAgfVxufSIsInZhciBwcm90ZWN0ZWREYXlPZlllYXJUb2tlbnMgPSBbJ0QnLCAnREQnXTtcbnZhciBwcm90ZWN0ZWRXZWVrWWVhclRva2VucyA9IFsnWVknLCAnWVlZWSddO1xuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4odG9rZW4pIHtcbiAgcmV0dXJuIHByb3RlY3RlZERheU9mWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNQcm90ZWN0ZWRXZWVrWWVhclRva2VuKHRva2VuKSB7XG4gIHJldHVybiBwcm90ZWN0ZWRXZWVrWWVhclRva2Vucy5pbmRleE9mKHRva2VuKSAhPT0gLTE7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dQcm90ZWN0ZWRFcnJvcih0b2tlbiwgZm9ybWF0LCBpbnB1dCkge1xuICBpZiAodG9rZW4gPT09ICdZWVlZJykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgeWVhcnMgdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9IGVsc2UgaWYgKHRva2VuID09PSAnWVknKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYHl5YCBpbnN0ZWFkIG9mIGBZWWAgKGluIGBcIi5jb25jYXQoZm9ybWF0LCBcImApIGZvciBmb3JtYXR0aW5nIHllYXJzIHRvIHRoZSBpbnB1dCBgXCIpLmNvbmNhdChpbnB1dCwgXCJgOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXCIpKTtcbiAgfSBlbHNlIGlmICh0b2tlbiA9PT0gJ0QnKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJVc2UgYGRgIGluc3RlYWQgb2YgYERgIChpbiBgXCIuY29uY2F0KGZvcm1hdCwgXCJgKSBmb3IgZm9ybWF0dGluZyBkYXlzIG9mIHRoZSBtb250aCB0byB0aGUgaW5wdXQgYFwiKS5jb25jYXQoaW5wdXQsIFwiYDsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clwiKSk7XG4gIH0gZWxzZSBpZiAodG9rZW4gPT09ICdERCcpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlVzZSBgZGRgIGluc3RlYWQgb2YgYEREYCAoaW4gYFwiLmNvbmNhdChmb3JtYXQsIFwiYCkgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdG8gdGhlIGlucHV0IGBcIikuY29uY2F0KGlucHV0LCBcImA7IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcIikpO1xuICB9XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcmVxdWlyZWRBcmdzKHJlcXVpcmVkLCBhcmdzKSB7XG4gIGlmIChhcmdzLmxlbmd0aCA8IHJlcXVpcmVkKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihyZXF1aXJlZCArICcgYXJndW1lbnQnICsgKHJlcXVpcmVkID4gMSA/ICdzJyA6ICcnKSArICcgcmVxdWlyZWQsIGJ1dCBvbmx5ICcgKyBhcmdzLmxlbmd0aCArICcgcHJlc2VudCcpO1xuICB9XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IDE7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldFVUQ0RheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0VVRDRGF0ZShkYXRlLmdldFVUQ0RhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgZ2V0VVRDSVNPV2Vla1llYXIgZnJvbSBcIi4uL2dldFVUQ0lTT1dlZWtZZWFyL2luZGV4LmpzXCI7XG5pbXBvcnQgc3RhcnRPZlVUQ0lTT1dlZWsgZnJvbSBcIi4uL3N0YXJ0T2ZVVENJU09XZWVrL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjsgLy8gVGhpcyBmdW5jdGlvbiB3aWxsIGJlIGEgcGFydCBvZiBwdWJsaWMgQVBJIHdoZW4gVVRDIGZ1bmN0aW9uIHdpbGwgYmUgaW1wbGVtZW50ZWQuXG4vLyBTZWUgaXNzdWU6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN0YXJ0T2ZVVENJU09XZWVrWWVhcihkaXJ0eURhdGUpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciB5ZWFyID0gZ2V0VVRDSVNPV2Vla1llYXIoZGlydHlEYXRlKTtcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeSA9IG5ldyBEYXRlKDApO1xuICBmb3VydGhPZkphbnVhcnkuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgNCk7XG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRVVENIb3VycygwLCAwLCAwLCAwKTtcbiAgdmFyIGRhdGUgPSBzdGFydE9mVVRDSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgdG9EYXRlIGZyb20gXCIuLi8uLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2VlayhkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZTtcbiAgdmFyIGxvY2FsZVdlZWtTdGFydHNPbiA9IGxvY2FsZSAmJiBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgdmFyIGRheSA9IGRhdGUuZ2V0VVRDRGF5KCk7XG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPbjtcbiAgZGF0ZS5zZXRVVENEYXRlKGRhdGUuZ2V0VVRDRGF0ZSgpIC0gZGlmZik7XG4gIGRhdGUuc2V0VVRDSG91cnMoMCwgMCwgMCwgMCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCBnZXRVVENXZWVrWWVhciBmcm9tIFwiLi4vZ2V0VVRDV2Vla1llYXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuaW1wb3J0IHN0YXJ0T2ZVVENXZWVrIGZyb20gXCIuLi9zdGFydE9mVVRDV2Vlay9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vdG9JbnRlZ2VyL2luZGV4LmpzXCI7IC8vIFRoaXMgZnVuY3Rpb24gd2lsbCBiZSBhIHBhcnQgb2YgcHVibGljIEFQSSB3aGVuIFVUQyBmdW5jdGlvbiB3aWxsIGJlIGltcGxlbWVudGVkLlxuLy8gU2VlIGlzc3VlOiBodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvaXNzdWVzLzM3NlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mVVRDV2Vla1llYXIoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGU7XG4gIHZhciBsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUgPSBsb2NhbGUgJiYgbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgeWVhciA9IGdldFVUQ1dlZWtZZWFyKGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKTtcbiAgdmFyIGZpcnN0V2VlayA9IG5ldyBEYXRlKDApO1xuICBmaXJzdFdlZWsuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZmlyc3RXZWVrQ29udGFpbnNEYXRlKTtcbiAgZmlyc3RXZWVrLnNldFVUQ0hvdXJzKDAsIDAsIDAsIDApO1xuICB2YXIgZGF0ZSA9IHN0YXJ0T2ZVVENXZWVrKGZpcnN0V2VlaywgZGlydHlPcHRpb25zKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9JbnRlZ2VyKGRpcnR5TnVtYmVyKSB7XG4gIGlmIChkaXJ0eU51bWJlciA9PT0gbnVsbCB8fCBkaXJ0eU51bWJlciA9PT0gdHJ1ZSB8fCBkaXJ0eU51bWJlciA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG5cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG5cbiAgaWYgKGlzTmFOKG51bWJlcikpIHtcbiAgICByZXR1cm4gbnVtYmVyO1xuICB9XG5cbiAgcmV0dXJuIG51bWJlciA8IDAgPyBNYXRoLmNlaWwobnVtYmVyKSA6IE1hdGguZmxvb3IobnVtYmVyKTtcbn0iLCJpbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBhZGRNaWxsaXNlY29uZHNcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWQuIFBvc2l0aXZlIGRlY2ltYWxzIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5mbG9vcmAsIGRlY2ltYWxzIGxlc3MgdGhhbiB6ZXJvIHdpbGwgYmUgcm91bmRlZCB1c2luZyBgTWF0aC5jZWlsYC5cbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDIgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiBjb25zdCByZXN1bHQgPSBhZGRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMzAsIDApLCA3NTApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NTozMC43NTBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGRNaWxsaXNlY29uZHMoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIHRpbWVzdGFtcCA9IHRvRGF0ZShkaXJ0eURhdGUpLmdldFRpbWUoKTtcbiAgdmFyIGFtb3VudCA9IHRvSW50ZWdlcihkaXJ0eUFtb3VudCk7XG4gIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyBhbW91bnQpO1xufSIsImltcG9ydCBpc1ZhbGlkIGZyb20gXCIuLi9pc1ZhbGlkL2luZGV4LmpzXCI7XG5pbXBvcnQgZGVmYXVsdExvY2FsZSBmcm9tIFwiLi4vbG9jYWxlL2VuLVVTL2luZGV4LmpzXCI7XG5pbXBvcnQgc3ViTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9zdWJNaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdHRlcnMgZnJvbSBcIi4uL19saWIvZm9ybWF0L2Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBsb25nRm9ybWF0dGVycyBmcm9tIFwiLi4vX2xpYi9mb3JtYXQvbG9uZ0Zvcm1hdHRlcnMvaW5kZXguanNcIjtcbmltcG9ydCBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIGZyb20gXCIuLi9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMvaW5kZXguanNcIjtcbmltcG9ydCB7IGlzUHJvdGVjdGVkRGF5T2ZZZWFyVG9rZW4sIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbiwgdGhyb3dQcm90ZWN0ZWRFcnJvciB9IGZyb20gXCIuLi9fbGliL3Byb3RlY3RlZFRva2Vucy9pbmRleC5qc1wiO1xuaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7IC8vIFRoaXMgUmVnRXhwIGNvbnNpc3RzIG9mIHRocmVlIHBhcnRzIHNlcGFyYXRlZCBieSBgfGA6XG4vLyAtIFt5WVFxTUx3SWREZWNpaEhLa21zXW8gbWF0Y2hlcyBhbnkgYXZhaWxhYmxlIG9yZGluYWwgbnVtYmVyIHRva2VuXG4vLyAgIChvbmUgb2YgdGhlIGNlcnRhaW4gbGV0dGVycyBmb2xsb3dlZCBieSBgb2ApXG4vLyAtIChcXHcpXFwxKiBtYXRjaGVzIGFueSBzZXF1ZW5jZXMgb2YgdGhlIHNhbWUgbGV0dGVyXG4vLyAtICcnIG1hdGNoZXMgdHdvIHF1b3RlIGNoYXJhY3RlcnMgaW4gYSByb3dcbi8vIC0gJygnJ3xbXiddKSsoJ3wkKSBtYXRjaGVzIGFueXRoaW5nIHN1cnJvdW5kZWQgYnkgdHdvIHF1b3RlIGNoYXJhY3RlcnMgKCcpLFxuLy8gICBleGNlcHQgYSBzaW5nbGUgcXVvdGUgc3ltYm9sLCB3aGljaCBlbmRzIHRoZSBzZXF1ZW5jZS5cbi8vICAgVHdvIHF1b3RlIGNoYXJhY3RlcnMgZG8gbm90IGVuZCB0aGUgc2VxdWVuY2UuXG4vLyAgIElmIHRoZXJlIGlzIG5vIG1hdGNoaW5nIHNpbmdsZSBxdW90ZVxuLy8gICB0aGVuIHRoZSBzZXF1ZW5jZSB3aWxsIGNvbnRpbnVlIHVudGlsIHRoZSBlbmQgb2YgdGhlIHN0cmluZy5cbi8vIC0gLiBtYXRjaGVzIGFueSBzaW5nbGUgY2hhcmFjdGVyIHVubWF0Y2hlZCBieSBwcmV2aW91cyBwYXJ0cyBvZiB0aGUgUmVnRXhwc1xuXG52YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IC9beVlRcU1Md0lkRGVjaWhIS2ttc11vfChcXHcpXFwxKnwnJ3wnKCcnfFteJ10pKygnfCQpfC4vZzsgLy8gVGhpcyBSZWdFeHAgY2F0Y2hlcyBzeW1ib2xzIGVzY2FwZWQgYnkgcXVvdGVzLCBhbmQgYWxzb1xuLy8gc2VxdWVuY2VzIG9mIHN5bWJvbHMgUCwgcCwgYW5kIHRoZSBjb21iaW5hdGlvbnMgbGlrZSBgUFBQUFBQUHBwcHBwYFxuXG52YXIgbG9uZ0Zvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSAvUCtwK3xQK3xwK3wnJ3wnKCcnfFteJ10pKygnfCQpfC4vZztcbnZhciBlc2NhcGVkU3RyaW5nUmVnRXhwID0gL14nKFteXSo/KSc/JC87XG52YXIgZG91YmxlUXVvdGVSZWdFeHAgPSAvJycvZztcbnZhciB1bmVzY2FwZWRMYXRpbkNoYXJhY3RlclJlZ0V4cCA9IC9bYS16QS1aXS87XG4vKipcbiAqIEBuYW1lIGZvcm1hdFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBGb3JtYXQgdGhlIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZyBpbiB0aGUgZ2l2ZW4gZm9ybWF0LiBUaGUgcmVzdWx0IG1heSB2YXJ5IGJ5IGxvY2FsZS5cbiAqXG4gKiA+IOKaoO+4jyBQbGVhc2Ugbm90ZSB0aGF0IHRoZSBgZm9ybWF0YCB0b2tlbnMgZGlmZmVyIGZyb20gTW9tZW50LmpzIGFuZCBvdGhlciBsaWJyYXJpZXMuXG4gKiA+IFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiBUaGUgY2hhcmFjdGVycyB3cmFwcGVkIGJldHdlZW4gdHdvIHNpbmdsZSBxdW90ZXMgY2hhcmFjdGVycyAoJykgYXJlIGVzY2FwZWQuXG4gKiBUd28gc2luZ2xlIHF1b3RlcyBpbiBhIHJvdywgd2hldGhlciBpbnNpZGUgb3Igb3V0c2lkZSBhIHF1b3RlZCBzZXF1ZW5jZSwgcmVwcmVzZW50IGEgJ3JlYWwnIHNpbmdsZSBxdW90ZS5cbiAqIChzZWUgdGhlIGxhc3QgZXhhbXBsZSlcbiAqXG4gKiBGb3JtYXQgb2YgdGhlIHN0cmluZyBpcyBiYXNlZCBvbiBVbmljb2RlIFRlY2huaWNhbCBTdGFuZGFyZCAjMzU6XG4gKiBodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlXG4gKiB3aXRoIGEgZmV3IGFkZGl0aW9ucyAoc2VlIG5vdGUgNyBiZWxvdyB0aGUgdGFibGUpLlxuICpcbiAqIEFjY2VwdGVkIHBhdHRlcm5zOlxuICogfCBVbml0ICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUGF0dGVybiB8IFJlc3VsdCBleGFtcGxlcyAgICAgICAgICAgICAgICAgICB8IE5vdGVzIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS18XG4gKiB8IEVyYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBHLi5HR0cgIHwgQUQsIEJDICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgICB8IEFubm8gRG9taW5pLCBCZWZvcmUgQ2hyaXN0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEdHR0dHICAgfCBBLCBCICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IENhbGVuZGFyIHllYXIgICAgICAgICAgICAgICAgICAgfCB5ICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeW8gICAgICB8IDQ0dGgsIDFzdCwgMHRoLCAxN3RoICAgICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5ICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB5eXkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeXl5eSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHl5eXl5ICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IExvY2FsIHdlZWstbnVtYmVyaW5nIHllYXIgICAgICAgfCBZICAgICAgIHwgNDQsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWW8gICAgICB8IDQ0dGgsIDFzdCwgMTkwMHRoLCAyMDE3dGggICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZICAgICAgfCA0NCwgMDEsIDAwLCAxNyAgICAgICAgICAgICAgICAgICAgfCA1LDggICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBZWVkgICAgIHwgMDQ0LCAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgICB8IDAwNDQsIDAwMDEsIDE5MDAsIDIwMTcgICAgICAgICAgICB8IDUsOCAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFlZWVlZICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzLDUgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyICAgICAgICAgfCBSICAgICAgIHwgLTQzLCAwLCAxLCAxOTAwLCAyMDE3ICAgICAgICAgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlIgICAgICB8IC00MywgMDAsIDAxLCAxOTAwLCAyMDE3ICAgICAgICAgICB8IDUsNyAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJSUiAgICAgfCAtMDQzLCAwMDAsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgfCA1LDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBSUlJSICAgIHwgLTAwNDMsIDAwMDAsIDAwMDEsIDE5MDAsIDIwMTcgICAgIHwgNSw3ICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUlJSUlIgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNSw3IHxcbiAqIHwgRXh0ZW5kZWQgeWVhciAgICAgICAgICAgICAgICAgICB8IHUgICAgICAgfCAtNDMsIDAsIDEsIDE5MDAsIDIwMTcgICAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dSAgICAgIHwgLTQzLCAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICAgIHwgNSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdXV1ICAgICB8IC0wNDMsIDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgICB8IDUgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHV1dXUgICAgfCAtMDA0MywgMDAwMSwgMTkwMCwgMjAxNyAgICAgICAgICAgfCA1ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB1dXV1dSAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw1ICAgfFxuICogfCBRdWFydGVyIChmb3JtYXR0aW5nKSAgICAgICAgICAgIHwgUSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUVFRICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFFRUVEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBRUVFRUSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBRdWFydGVyIChzdGFuZC1hbG9uZSkgICAgICAgICAgIHwgcSAgICAgICB8IDEsIDIsIDMsIDQgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFvICAgICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcSAgICAgIHwgMDEsIDAyLCAwMywgMDQgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcXFxICAgICB8IFExLCBRMiwgUTMsIFE0ICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHFxcXEgICAgfCAxc3QgcXVhcnRlciwgMm5kIHF1YXJ0ZXIsIC4uLiAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBxcXFxcSAgIHwgMSwgMiwgMywgNCAgICAgICAgICAgICAgICAgICAgICAgIHwgNCAgICAgfFxuICogfCBNb250aCAoZm9ybWF0dGluZykgICAgICAgICAgICAgIHwgTSAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1vICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTSAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IE1NTU0gICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBNTU1NTSAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBNb250aCAoc3RhbmQtYWxvbmUpICAgICAgICAgICAgIHwgTCAgICAgICB8IDEsIDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTCAgICAgIHwgMDEsIDAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgTExMICAgICB8IEphbiwgRmViLCAuLi4sIERlYyAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IExMTEwgICAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBMTExMTCAgIHwgSiwgRiwgLi4uLCBEICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBMb2NhbCB3ZWVrIG9mIHllYXIgICAgICAgICAgICAgIHwgdyAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHdvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB3dyAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gd2VlayBvZiB5ZWFyICAgICAgICAgICAgICAgIHwgSSAgICAgICB8IDEsIDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IElvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA1M3RoICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBJSSAgICAgIHwgMDEsIDAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCBEYXkgb2YgbW9udGggICAgICAgICAgICAgICAgICAgIHwgZCAgICAgICB8IDEsIDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGRvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBkZCAgICAgIHwgMDEsIDAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCBEYXkgb2YgeWVhciAgICAgICAgICAgICAgICAgICAgIHwgRCAgICAgICB8IDEsIDIsIC4uLiwgMzY1LCAzNjYgICAgICAgICAgICAgICB8IDkgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERvICAgICAgfCAxc3QsIDJuZCwgLi4uLCAzNjV0aCwgMzY2dGggICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBERCAgICAgIHwgMDEsIDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICAgIHwgOSAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREICAgICB8IDAwMSwgMDAyLCAuLi4sIDM2NSwgMzY2ICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEREREQgICAgfCAuLi4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAzICAgICB8XG4gKiB8IERheSBvZiB3ZWVrIChmb3JtYXR0aW5nKSAgICAgICAgfCBFLi5FRUUgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgRUVFRSAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEVFRUVFICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBFRUVFRUUgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBJU08gZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICAgIHwgaSAgICAgICB8IDEsIDIsIDMsIC4uLiwgNyAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlvICAgICAgfCAxc3QsIDJuZCwgLi4uLCA3dGggICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaSAgICAgIHwgMDEsIDAyLCAuLi4sIDA3ICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpICAgICB8IE1vbiwgVHVlLCBXZWQsIC4uLiwgU3VuICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGlpaWkgICAgfCBNb25kYXksIFR1ZXNkYXksIC4uLiwgU3VuZGF5ICAgICAgfCAyLDcgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBpaWlpaSAgIHwgTSwgVCwgVywgVCwgRiwgUywgUyAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaWlpaWlpICB8IE1vLCBUdSwgV2UsIFRoLCBGciwgU2EsIFN1ICAgICAgICB8IDcgICAgIHxcbiAqIHwgTG9jYWwgZGF5IG9mIHdlZWsgKGZvcm1hdHRpbmcpICB8IGUgICAgICAgfCAyLCAzLCA0LCAuLi4sIDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlbyAgICAgIHwgMm5kLCAzcmQsIC4uLiwgMXN0ICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWUgICAgICB8IDAyLCAwMywgLi4uLCAwMSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZSAgICAgfCBNb24sIFR1ZSwgV2VkLCAuLi4sIFN1biAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBlZWVlICAgIHwgTW9uZGF5LCBUdWVzZGF5LCAuLi4sIFN1bmRheSAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZWVlZWUgICB8IE0sIFQsIFcsIFQsIEYsIFMsIFMgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGVlZWVlZSAgfCBNbywgVHUsIFdlLCBUaCwgRnIsIFNhLCBTdSAgICAgICAgfCAgICAgICB8XG4gKiB8IExvY2FsIGRheSBvZiB3ZWVrIChzdGFuZC1hbG9uZSkgfCBjICAgICAgIHwgMiwgMywgNCwgLi4uLCAxICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY28gICAgICB8IDJuZCwgM3JkLCAuLi4sIDFzdCAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjICAgICAgfCAwMiwgMDMsIC4uLiwgMDEgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2MgICAgIHwgTW9uLCBUdWUsIFdlZCwgLi4uLCBTdW4gICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY2NjYyAgICB8IE1vbmRheSwgVHVlc2RheSwgLi4uLCBTdW5kYXkgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNjY2NjICAgfCBNLCBULCBXLCBULCBGLCBTLCBTICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjY2NjY2MgIHwgTW8sIFR1LCBXZSwgVGgsIEZyLCBTYSwgU3UgICAgICAgIHwgICAgICAgfFxuICogfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgIHwgYS4uYWEgICB8IEFNLCBQTSAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFhYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBhYWFhICAgIHwgYS5tLiwgcC5tLiAgICAgICAgICAgICAgICAgICAgICAgIHwgMiAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWFhYWEgICB8IGEsIHAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgQU0sIFBNLCBub29uLCBtaWRuaWdodCAgICAgICAgICB8IGIuLmJiICAgfCBBTSwgUE0sIG5vb24sIG1pZG5pZ2h0ICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBiYmIgICAgIHwgYW0sIHBtLCBub29uLCBtaWRuaWdodCAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYmJiYiAgICB8IGEubS4sIHAubS4sIG5vb24sIG1pZG5pZ2h0ICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGJiYmJiICAgfCBhLCBwLCBuLCBtaSAgICAgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZsZXhpYmxlIGRheSBwZXJpb2QgICAgICAgICAgICAgfCBCLi5CQkIgIHwgYXQgbmlnaHQsIGluIHRoZSBtb3JuaW5nLCAuLi4gICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgQkJCQiAgICB8IGF0IG5pZ2h0LCBpbiB0aGUgbW9ybmluZywgLi4uICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEJCQkJCICAgfCBhdCBuaWdodCwgaW4gdGhlIG1vcm5pbmcsIC4uLiAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMTJdICAgICAgICAgICAgICAgICAgICAgfCBoICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMTIgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgaG8gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDEydGggICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGhoICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDEyICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMjNdICAgICAgICAgICAgICAgICAgICAgfCBIICAgICAgIHwgMCwgMSwgMiwgLi4uLCAyMyAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgSG8gICAgICB8IDB0aCwgMXN0LCAybmQsIC4uLiwgMjNyZCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEhIICAgICAgfCAwMCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzAtMTFdICAgICAgICAgICAgICAgICAgICAgfCBLICAgICAgIHwgMSwgMiwgLi4uLCAxMSwgMCAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgS28gICAgICB8IDFzdCwgMm5kLCAuLi4sIDExdGgsIDB0aCAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IEtLICAgICAgfCAwMSwgMDIsIC4uLiwgMTEsIDAwICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEhvdXIgWzEtMjRdICAgICAgICAgICAgICAgICAgICAgfCBrICAgICAgIHwgMjQsIDEsIDIsIC4uLiwgMjMgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwga28gICAgICB8IDI0dGgsIDFzdCwgMm5kLCAuLi4sIDIzcmQgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGtrICAgICAgfCAyNCwgMDEsIDAyLCAuLi4sIDIzICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgICAgICAgICAgfCBtICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW8gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG1tICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgICAgICAgICAgfCBzICAgICAgIHwgMCwgMSwgLi4uLCA1OSAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgc28gICAgICB8IDB0aCwgMXN0LCAuLi4sIDU5dGggICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHNzICAgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8IEZyYWN0aW9uIG9mIHNlY29uZCAgICAgICAgICAgICAgfCBTICAgICAgIHwgMCwgMSwgLi4uLCA5ICAgICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgU1MgICAgICB8IDAwLCAwMSwgLi4uLCA5OSAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFNTUyAgICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBTU1NTICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyAgICAgfFxuICogfCBUaW1lem9uZSAoSVNPLTg2MDEgdy8gWikgICAgICAgIHwgWCAgICAgICB8IC0wOCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYICAgICAgfCAtMDgwMCwgKzA1MzAsIFogICAgICAgICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBYWFggICAgIHwgLTA4OjAwLCArMDU6MzAsIFogICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWFhYWCAgICB8IC0wODAwLCArMDUzMCwgWiwgKzEyMzQ1NiAgICAgICAgICB8IDIgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFhYWFhYICAgfCAtMDg6MDAsICswNTozMCwgWiwgKzEyOjM0OjU2ICAgICAgfCAgICAgICB8XG4gKiB8IFRpbWV6b25lIChJU08tODYwMSB3L28gWikgICAgICAgfCB4ICAgICAgIHwgLTA4LCArMDUzMCwgKzAwICAgICAgICAgICAgICAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHggICAgICB8IC0wODAwLCArMDUzMCwgKzAwMDAgICAgICAgICAgICAgICB8ICAgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHh4eCAgICAgfCAtMDg6MDAsICswNTozMCwgKzAwOjAwICAgICAgICAgICAgfCAyICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB4eHh4ICAgIHwgLTA4MDAsICswNTMwLCArMDAwMCwgKzEyMzQ1NiAgICAgIHwgICAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgeHh4eHggICB8IC0wODowMCwgKzA1OjMwLCArMDA6MDAsICsxMjozNDo1NiB8ICAgICAgIHxcbiAqIHwgVGltZXpvbmUgKEdNVCkgICAgICAgICAgICAgICAgICB8IE8uLi5PT08gfCBHTVQtOCwgR01UKzU6MzAsIEdNVCswICAgICAgICAgICAgfCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBPT09PICAgIHwgR01ULTA4OjAwLCBHTVQrMDU6MzAsIEdNVCswMDowMCAgIHwgMiAgICAgfFxuICogfCBUaW1lem9uZSAoc3BlY2lmaWMgbm9uLWxvY2F0LikgIHwgei4uLnp6eiB8IEdNVC04LCBHTVQrNTozMCwgR01UKzAgICAgICAgICAgICB8IDYgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHp6enogICAgfCBHTVQtMDg6MDAsIEdNVCswNTozMCwgR01UKzAwOjAwICAgfCAyLDYgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgICAgICAgICAgfCB0ICAgICAgIHwgNTEyOTY5NTIwICAgICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdHQgICAgICB8IC4uLiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDMsNyAgIHxcbiAqIHwgTWlsbGlzZWNvbmRzIHRpbWVzdGFtcCAgICAgICAgICB8IFQgICAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBUVCAgICAgIHwgLi4uICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMyw3ICAgfFxuICogfCBMb25nIGxvY2FsaXplZCBkYXRlICAgICAgICAgICAgIHwgUCAgICAgICB8IDA0LzI5LzE0NTMgICAgICAgICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQICAgICAgfCBBcHIgMjksIDE0NTMgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFAgICAgIHwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBQUCAgICB8IEZyaWRheSwgQXByaWwgMjl0aCwgMTQ1MyAgICAgICAgICB8IDIsNyAgIHxcbiAqIHwgTG9uZyBsb2NhbGl6ZWQgdGltZSAgICAgICAgICAgICB8IHAgICAgICAgfCAxMjowMCBBTSAgICAgICAgICAgICAgICAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwcCAgICAgIHwgMTI6MDA6MDAgQU0gICAgICAgICAgICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcHBwICAgICB8IDEyOjAwOjAwIEFNIEdNVCsyICAgICAgICAgICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBwcHAgICAgfCAxMjowMDowMCBBTSBHTVQrMDI6MDAgICAgICAgICAgICAgfCAyLDcgICB8XG4gKiB8IENvbWJpbmF0aW9uIG9mIGRhdGUgYW5kIHRpbWUgICAgfCBQcCAgICAgIHwgMDQvMjkvMTQ1MywgMTI6MDAgQU0gICAgICAgICAgICAgIHwgNyAgICAgfFxuICogfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUFBwcCAgICB8IEFwciAyOSwgMTQ1MywgMTI6MDA6MDAgQU0gICAgICAgICB8IDcgICAgIHxcbiAqIHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFBQUHBwcCAgfCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgICAgICAgICAgfCA3ICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBQUFBQcHBwcHwgRnJpZGF5LCBBcHJpbCAyOXRoLCAxNDUzIGF0IC4uLiAgIHwgMiw3ICAgfFxuICogTm90ZXM6XG4gKiAxLiBcIkZvcm1hdHRpbmdcIiB1bml0cyAoZS5nLiBmb3JtYXR0aW5nIHF1YXJ0ZXIpIGluIHRoZSBkZWZhdWx0IGVuLVVTIGxvY2FsZVxuICogICAgYXJlIHRoZSBzYW1lIGFzIFwic3RhbmQtYWxvbmVcIiB1bml0cywgYnV0IGFyZSBkaWZmZXJlbnQgaW4gc29tZSBsYW5ndWFnZXMuXG4gKiAgICBcIkZvcm1hdHRpbmdcIiB1bml0cyBhcmUgZGVjbGluZWQgYWNjb3JkaW5nIHRvIHRoZSBydWxlcyBvZiB0aGUgbGFuZ3VhZ2VcbiAqICAgIGluIHRoZSBjb250ZXh0IG9mIGEgZGF0ZS4gXCJTdGFuZC1hbG9uZVwiIHVuaXRzIGFyZSBhbHdheXMgbm9taW5hdGl2ZSBzaW5ndWxhcjpcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIExMTEwnLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ2RvIE1NTU0nLCB7bG9jYWxlOiBjc30pIC8vPT4gJzYuIGxpc3RvcGFkdSdgXG4gKlxuICogMi4gQW55IHNlcXVlbmNlIG9mIHRoZSBpZGVudGljYWwgbGV0dGVycyBpcyBhIHBhdHRlcm4sIHVubGVzcyBpdCBpcyBlc2NhcGVkIGJ5XG4gKiAgICB0aGUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgKHNlZSBiZWxvdykuXG4gKiAgICBJZiB0aGUgc2VxdWVuY2UgaXMgbG9uZ2VyIHRoYW4gbGlzdGVkIGluIHRhYmxlIChlLmcuIGBFRUVFRUVFRUVFRWApXG4gKiAgICB0aGUgb3V0cHV0IHdpbGwgYmUgdGhlIHNhbWUgYXMgZGVmYXVsdCBwYXR0ZXJuIGZvciB0aGlzIHVuaXQsIHVzdWFsbHlcbiAqICAgIHRoZSBsb25nZXN0IG9uZSAoaW4gY2FzZSBvZiBJU08gd2Vla2RheXMsIGBFRUVFYCkuIERlZmF1bHQgcGF0dGVybnMgZm9yIHVuaXRzXG4gKiAgICBhcmUgbWFya2VkIHdpdGggXCIyXCIgaW4gdGhlIGxhc3QgY29sdW1uIG9mIHRoZSB0YWJsZS5cbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTScpIC8vPT4gJ05vdidgXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICdNTU1NJykgLy89PiAnTm92ZW1iZXInYFxuICpcbiAqICAgIGBmb3JtYXQobmV3IERhdGUoMjAxNywgMTAsIDYpLCAnTU1NTU0nKSAvLz0+ICdOJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTScpIC8vPT4gJ05vdmVtYmVyJ2BcbiAqXG4gKiAgICBgZm9ybWF0KG5ldyBEYXRlKDIwMTcsIDEwLCA2KSwgJ01NTU1NTU0nKSAvLz0+ICdOb3ZlbWJlcidgXG4gKlxuICogMy4gU29tZSBwYXR0ZXJucyBjb3VsZCBiZSB1bmxpbWl0ZWQgbGVuZ3RoIChzdWNoIGFzIGB5eXl5eXl5eWApLlxuICogICAgVGhlIG91dHB1dCB3aWxsIGJlIHBhZGRlZCB3aXRoIHplcm9zIHRvIG1hdGNoIHRoZSBsZW5ndGggb2YgdGhlIHBhdHRlcm4uXG4gKlxuICogICAgYGZvcm1hdChuZXcgRGF0ZSgyMDE3LCAxMCwgNiksICd5eXl5eXl5eScpIC8vPT4gJzAwMDAyMDE3J2BcbiAqXG4gKiA0LiBgUVFRUVFgIGFuZCBgcXFxcXFgIGNvdWxkIGJlIG5vdCBzdHJpY3RseSBudW1lcmljYWwgaW4gc29tZSBsb2NhbGVzLlxuICogICAgVGhlc2UgdG9rZW5zIHJlcHJlc2VudCB0aGUgc2hvcnRlc3QgZm9ybSBvZiB0aGUgcXVhcnRlci5cbiAqXG4gKiA1LiBUaGUgbWFpbiBkaWZmZXJlbmNlIGJldHdlZW4gYHlgIGFuZCBgdWAgcGF0dGVybnMgYXJlIEIuQy4geWVhcnM6XG4gKlxuICogICAgfCBZZWFyIHwgYHlgIHwgYHVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS18LS0tLS18XG4gKiAgICB8IEFDIDEgfCAgIDEgfCAgIDEgfFxuICogICAgfCBCQyAxIHwgICAxIHwgICAwIHxcbiAqICAgIHwgQkMgMiB8ICAgMiB8ICAtMSB8XG4gKlxuICogICAgQWxzbyBgeXlgIGFsd2F5cyByZXR1cm5zIHRoZSBsYXN0IHR3byBkaWdpdHMgb2YgYSB5ZWFyLFxuICogICAgd2hpbGUgYHV1YCBwYWRzIHNpbmdsZSBkaWdpdCB5ZWFycyB0byAyIGNoYXJhY3RlcnMgYW5kIHJldHVybnMgb3RoZXIgeWVhcnMgdW5jaGFuZ2VkOlxuICpcbiAqICAgIHwgWWVhciB8IGB5eWAgfCBgdXVgIHxcbiAqICAgIHwtLS0tLS18LS0tLS0tfC0tLS0tLXxcbiAqICAgIHwgMSAgICB8ICAgMDEgfCAgIDAxIHxcbiAqICAgIHwgMTQgICB8ICAgMTQgfCAgIDE0IHxcbiAqICAgIHwgMzc2ICB8ICAgNzYgfCAgMzc2IHxcbiAqICAgIHwgMTQ1MyB8ICAgNTMgfCAxNDUzIHxcbiAqXG4gKiAgICBUaGUgc2FtZSBkaWZmZXJlbmNlIGlzIHRydWUgZm9yIGxvY2FsIGFuZCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgKGBZYCBhbmQgYFJgKSxcbiAqICAgIGV4Y2VwdCBsb2NhbCB3ZWVrLW51bWJlcmluZyB5ZWFycyBhcmUgZGVwZW5kZW50IG9uIGBvcHRpb25zLndlZWtTdGFydHNPbmBcbiAqICAgIGFuZCBgb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGVgIChjb21wYXJlIFtnZXRJU09XZWVrWWVhcl17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9nZXRJU09XZWVrWWVhcn1cbiAqICAgIGFuZCBbZ2V0V2Vla1llYXJde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvZ2V0V2Vla1llYXJ9KS5cbiAqXG4gKiA2LiBTcGVjaWZpYyBub24tbG9jYXRpb24gdGltZXpvbmVzIGFyZSBjdXJyZW50bHkgdW5hdmFpbGFibGUgaW4gYGRhdGUtZm5zYCxcbiAqICAgIHNvIHJpZ2h0IG5vdyB0aGVzZSB0b2tlbnMgZmFsbCBiYWNrIHRvIEdNVCB0aW1lem9uZXMuXG4gKlxuICogNy4gVGhlc2UgcGF0dGVybnMgYXJlIG5vdCBpbiB0aGUgVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1OlxuICogICAgLSBgaWA6IElTTyBkYXkgb2Ygd2Vla1xuICogICAgLSBgSWA6IElTTyB3ZWVrIG9mIHllYXJcbiAqICAgIC0gYFJgOiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICogICAgLSBgdGA6IHNlY29uZHMgdGltZXN0YW1wXG4gKiAgICAtIGBUYDogbWlsbGlzZWNvbmRzIHRpbWVzdGFtcFxuICogICAgLSBgb2A6IG9yZGluYWwgbnVtYmVyIG1vZGlmaWVyXG4gKiAgICAtIGBQYDogbG9uZyBsb2NhbGl6ZWQgZGF0ZVxuICogICAgLSBgcGA6IGxvbmcgbG9jYWxpemVkIHRpbWVcbiAqXG4gKiA4LiBgWVlgIGFuZCBgWVlZWWAgdG9rZW5zIHJlcHJlc2VudCB3ZWVrLW51bWJlcmluZyB5ZWFycyBidXQgdGhleSBhcmUgb2Z0ZW4gY29uZnVzZWQgd2l0aCB5ZWFycy5cbiAqICAgIFlvdSBzaG91bGQgZW5hYmxlIGBvcHRpb25zLnVzZUFkZGl0aW9uYWxXZWVrWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiA5LiBgRGAgYW5kIGBERGAgdG9rZW5zIHJlcHJlc2VudCBkYXlzIG9mIHRoZSB5ZWFyIGJ1dCB0aGV5IGFyZSBvZnRlbiBjb25mdXNlZCB3aXRoIGRheXMgb2YgdGhlIG1vbnRoLlxuICogICAgWW91IHNob3VsZCBlbmFibGUgYG9wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vuc2AgdG8gdXNlIHRoZW0uIFNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gVGhlIHNlY29uZCBhcmd1bWVudCBpcyBub3cgcmVxdWlyZWQgZm9yIHRoZSBzYWtlIG9mIGV4cGxpY2l0bmVzcy5cbiAqXG4gKiAgIGBgYGphdmFzY3JpcHRcbiAqICAgLy8gQmVmb3JlIHYyLjAuMFxuICogICBmb3JtYXQobmV3IERhdGUoMjAxNiwgMCwgMSkpXG4gKlxuICogICAvLyB2Mi4wLjAgb253YXJkXG4gKiAgIGZvcm1hdChuZXcgRGF0ZSgyMDE2LCAwLCAxKSwgXCJ5eXl5LU1NLWRkJ1QnSEg6bW06c3MuU1NTeHh4XCIpXG4gKiAgIGBgYFxuICpcbiAqIC0gTmV3IGZvcm1hdCBzdHJpbmcgQVBJIGZvciBgZm9ybWF0YCBmdW5jdGlvblxuICogICB3aGljaCBpcyBiYXNlZCBvbiBbVW5pY29kZSBUZWNobmljYWwgU3RhbmRhcmQgIzM1XShodHRwczovL3d3dy51bmljb2RlLm9yZy9yZXBvcnRzL3RyMzUvdHIzNS1kYXRlcy5odG1sI0RhdGVfRmllbGRfU3ltYm9sX1RhYmxlKS5cbiAqICAgU2VlIFt0aGlzIHBvc3RdKGh0dHBzOi8vYmxvZy5kYXRlLWZucy5vcmcvcG9zdC91bmljb2RlLXRva2Vucy1pbi1kYXRlLWZucy12Mi1zcmVhdHlraTkxamcpIGZvciBtb3JlIGRldGFpbHMuXG4gKlxuICogLSBDaGFyYWN0ZXJzIGFyZSBub3cgZXNjYXBlZCB1c2luZyBzaW5nbGUgcXVvdGUgc3ltYm9scyAoYCdgKSBpbnN0ZWFkIG9mIHNxdWFyZSBicmFja2V0cy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBmb3JtYXQgLSB0aGUgc3RyaW5nIG9mIHRva2Vuc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIGFuIG9iamVjdCB3aXRoIG9wdGlvbnMuXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlPTFdIC0gdGhlIGRheSBvZiBKYW51YXJ5LCB3aGljaCBpc1xuICogQHBhcmFtIHtCb29sZWFufSBbb3B0aW9ucy51c2VBZGRpdGlvbmFsV2Vla1llYXJUb2tlbnM9ZmFsc2VdIC0gaWYgdHJ1ZSwgYWxsb3dzIHVzYWdlIG9mIHRoZSB3ZWVrLW51bWJlcmluZyB5ZWFyIHRva2VucyBgWVlgIGFuZCBgWVlZWWA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMudXNlQWRkaXRpb25hbERheU9mWWVhclRva2Vucz1mYWxzZV0gLSBpZiB0cnVlLCBhbGxvd3MgdXNhZ2Ugb2YgdGhlIGRheSBvZiB5ZWFyIHRva2VucyBgRGAgYW5kIGBERGA7XG4gKiAgIHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmdcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMiBhcmd1bWVudHMgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBkYXRlYCBtdXN0IG5vdCBiZSBJbnZhbGlkIERhdGVcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBsb2NhbGl6ZWAgcHJvcGVydHlcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLmxvY2FsZWAgbXVzdCBjb250YWluIGBmb3JtYXRMb25nYCBwcm9wZXJ0eVxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlYCBtdXN0IGJlIGJldHdlZW4gMSBhbmQgN1xuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eXl5YCBpbnN0ZWFkIG9mIGBZWVlZYCBmb3IgZm9ybWF0dGluZyB5ZWFycyB1c2luZyBbZm9ybWF0IHByb3ZpZGVkXSB0byB0aGUgaW5wdXQgW2lucHV0IHByb3ZpZGVkXTsgc2VlOiBodHRwczovL2dpdC5pby9meEN5clxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gdXNlIGB5eWAgaW5zdGVhZCBvZiBgWVlgIGZvciBmb3JtYXR0aW5nIHllYXJzIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRgIGluc3RlYWQgb2YgYERgIGZvciBmb3JtYXR0aW5nIGRheXMgb2YgdGhlIG1vbnRoIHVzaW5nIFtmb3JtYXQgcHJvdmlkZWRdIHRvIHRoZSBpbnB1dCBbaW5wdXQgcHJvdmlkZWRdOyBzZWU6IGh0dHBzOi8vZ2l0LmlvL2Z4Q3lyXG4gKiBAdGhyb3dzIHtSYW5nZUVycm9yfSB1c2UgYGRkYCBpbnN0ZWFkIG9mIGBERGAgZm9yIGZvcm1hdHRpbmcgZGF5cyBvZiB0aGUgbW9udGggdXNpbmcgW2Zvcm1hdCBwcm92aWRlZF0gdG8gdGhlIGlucHV0IFtpbnB1dCBwcm92aWRlZF07IHNlZTogaHR0cHM6Ly9naXQuaW8vZnhDeXJcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGZvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQobmV3IERhdGUoMjAxNCwgMSwgMTEpLCAnTU0vZGQveXl5eScpXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogaW1wb3J0IHsgZW9Mb2NhbGUgfSBmcm9tICdkYXRlLWZucy9sb2NhbGUvZW8nXG4gKiB2YXIgcmVzdWx0ID0gZm9ybWF0KG5ldyBEYXRlKDIwMTQsIDYsIDIpLCBcImRvICdkZScgTU1NTSB5eXl5XCIsIHtcbiAqICAgbG9jYWxlOiBlb0xvY2FsZVxuICogfSlcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBFc2NhcGUgc3RyaW5nIGJ5IHNpbmdsZSBxdW90ZSBjaGFyYWN0ZXJzOlxuICogdmFyIHJlc3VsdCA9IGZvcm1hdChuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxNSksIFwiaCAnbycnY2xvY2snXCIpXG4gKiAvLz0+IFwiMyBvJ2Nsb2NrXCJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBmb3JtYXQoZGlydHlEYXRlLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlPcHRpb25zKSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZm9ybWF0U3RyID0gU3RyaW5nKGRpcnR5Rm9ybWF0U3RyKTtcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge307XG4gIHZhciBsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSB8fCBkZWZhdWx0TG9jYWxlO1xuICB2YXIgbG9jYWxlRmlyc3RXZWVrQ29udGFpbnNEYXRlID0gbG9jYWxlLm9wdGlvbnMgJiYgbG9jYWxlLm9wdGlvbnMuZmlyc3RXZWVrQ29udGFpbnNEYXRlO1xuICB2YXIgZGVmYXVsdEZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9IGxvY2FsZUZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA9PSBudWxsID8gMSA6IHRvSW50ZWdlcihsb2NhbGVGaXJzdFdlZWtDb250YWluc0RhdGUpO1xuICB2YXIgZmlyc3RXZWVrQ29udGFpbnNEYXRlID0gb3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUgPT0gbnVsbCA/IGRlZmF1bHRGaXJzdFdlZWtDb250YWluc0RhdGUgOiB0b0ludGVnZXIob3B0aW9ucy5maXJzdFdlZWtDb250YWluc0RhdGUpOyAvLyBUZXN0IGlmIHdlZWtTdGFydHNPbiBpcyBiZXR3ZWVuIDEgYW5kIDcgX2FuZF8gaXMgbm90IE5hTlxuXG4gIGlmICghKGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA+PSAxICYmIGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSA8PSA3KSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdmaXJzdFdlZWtDb250YWluc0RhdGUgbXVzdCBiZSBiZXR3ZWVuIDEgYW5kIDcgaW5jbHVzaXZlbHknKTtcbiAgfVxuXG4gIHZhciBsb2NhbGVXZWVrU3RhcnRzT24gPSBsb2NhbGUub3B0aW9ucyAmJiBsb2NhbGUub3B0aW9ucy53ZWVrU3RhcnRzT247XG4gIHZhciBkZWZhdWx0V2Vla1N0YXJ0c09uID0gbG9jYWxlV2Vla1N0YXJ0c09uID09IG51bGwgPyAwIDogdG9JbnRlZ2VyKGxvY2FsZVdlZWtTdGFydHNPbik7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSBvcHRpb25zLndlZWtTdGFydHNPbiA9PSBudWxsID8gZGVmYXVsdFdlZWtTdGFydHNPbiA6IHRvSW50ZWdlcihvcHRpb25zLndlZWtTdGFydHNPbik7IC8vIFRlc3QgaWYgd2Vla1N0YXJ0c09uIGlzIGJldHdlZW4gMCBhbmQgNiBfYW5kXyBpcyBub3QgTmFOXG5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUubG9jYWxpemUpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignbG9jYWxlIG11c3QgY29udGFpbiBsb2NhbGl6ZSBwcm9wZXJ0eScpO1xuICB9XG5cbiAgaWYgKCFsb2NhbGUuZm9ybWF0TG9uZykge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdsb2NhbGUgbXVzdCBjb250YWluIGZvcm1hdExvbmcgcHJvcGVydHknKTtcbiAgfVxuXG4gIHZhciBvcmlnaW5hbERhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcblxuICBpZiAoIWlzVmFsaWQob3JpZ2luYWxEYXRlKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgfSAvLyBDb252ZXJ0IHRoZSBkYXRlIGluIHN5c3RlbSB0aW1lem9uZSB0byB0aGUgc2FtZSBkYXRlIGluIFVUQyswMDowMCB0aW1lem9uZS5cbiAgLy8gVGhpcyBlbnN1cmVzIHRoYXQgd2hlbiBVVEMgZnVuY3Rpb25zIHdpbGwgYmUgaW1wbGVtZW50ZWQsIGxvY2FsZXMgd2lsbCBiZSBjb21wYXRpYmxlIHdpdGggdGhlbS5cbiAgLy8gU2VlIGFuIGlzc3VlIGFib3V0IFVUQyBmdW5jdGlvbnM6IGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy9kYXRlLWZucy9pc3N1ZXMvMzc2XG5cblxuICB2YXIgdGltZXpvbmVPZmZzZXQgPSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSk7XG4gIHZhciB1dGNEYXRlID0gc3ViTWlsbGlzZWNvbmRzKG9yaWdpbmFsRGF0ZSwgdGltZXpvbmVPZmZzZXQpO1xuICB2YXIgZm9ybWF0dGVyT3B0aW9ucyA9IHtcbiAgICBmaXJzdFdlZWtDb250YWluc0RhdGU6IGZpcnN0V2Vla0NvbnRhaW5zRGF0ZSxcbiAgICB3ZWVrU3RhcnRzT246IHdlZWtTdGFydHNPbixcbiAgICBsb2NhbGU6IGxvY2FsZSxcbiAgICBfb3JpZ2luYWxEYXRlOiBvcmlnaW5hbERhdGVcbiAgfTtcbiAgdmFyIHJlc3VsdCA9IGZvcm1hdFN0ci5tYXRjaChsb25nRm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkubWFwKGZ1bmN0aW9uIChzdWJzdHJpbmcpIHtcbiAgICB2YXIgZmlyc3RDaGFyYWN0ZXIgPSBzdWJzdHJpbmdbMF07XG5cbiAgICBpZiAoZmlyc3RDaGFyYWN0ZXIgPT09ICdwJyB8fCBmaXJzdENoYXJhY3RlciA9PT0gJ1AnKSB7XG4gICAgICB2YXIgbG9uZ0Zvcm1hdHRlciA9IGxvbmdGb3JtYXR0ZXJzW2ZpcnN0Q2hhcmFjdGVyXTtcbiAgICAgIHJldHVybiBsb25nRm9ybWF0dGVyKHN1YnN0cmluZywgbG9jYWxlLmZvcm1hdExvbmcsIGZvcm1hdHRlck9wdGlvbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBzdWJzdHJpbmc7XG4gIH0pLmpvaW4oJycpLm1hdGNoKGZvcm1hdHRpbmdUb2tlbnNSZWdFeHApLm1hcChmdW5jdGlvbiAoc3Vic3RyaW5nKSB7XG4gICAgLy8gUmVwbGFjZSB0d28gc2luZ2xlIHF1b3RlIGNoYXJhY3RlcnMgd2l0aCBvbmUgc2luZ2xlIHF1b3RlIGNoYXJhY3RlclxuICAgIGlmIChzdWJzdHJpbmcgPT09IFwiJydcIikge1xuICAgICAgcmV0dXJuIFwiJ1wiO1xuICAgIH1cblxuICAgIHZhciBmaXJzdENoYXJhY3RlciA9IHN1YnN0cmluZ1swXTtcblxuICAgIGlmIChmaXJzdENoYXJhY3RlciA9PT0gXCInXCIpIHtcbiAgICAgIHJldHVybiBjbGVhbkVzY2FwZWRTdHJpbmcoc3Vic3RyaW5nKTtcbiAgICB9XG5cbiAgICB2YXIgZm9ybWF0dGVyID0gZm9ybWF0dGVyc1tmaXJzdENoYXJhY3Rlcl07XG5cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBpZiAoIW9wdGlvbnMudXNlQWRkaXRpb25hbFdlZWtZZWFyVG9rZW5zICYmIGlzUHJvdGVjdGVkV2Vla1llYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFvcHRpb25zLnVzZUFkZGl0aW9uYWxEYXlPZlllYXJUb2tlbnMgJiYgaXNQcm90ZWN0ZWREYXlPZlllYXJUb2tlbihzdWJzdHJpbmcpKSB7XG4gICAgICAgIHRocm93UHJvdGVjdGVkRXJyb3Ioc3Vic3RyaW5nLCBkaXJ0eUZvcm1hdFN0ciwgZGlydHlEYXRlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlcih1dGNEYXRlLCBzdWJzdHJpbmcsIGxvY2FsZS5sb2NhbGl6ZSwgZm9ybWF0dGVyT3B0aW9ucyk7XG4gICAgfVxuXG4gICAgaWYgKGZpcnN0Q2hhcmFjdGVyLm1hdGNoKHVuZXNjYXBlZExhdGluQ2hhcmFjdGVyUmVnRXhwKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ0Zvcm1hdCBzdHJpbmcgY29udGFpbnMgYW4gdW5lc2NhcGVkIGxhdGluIGFscGhhYmV0IGNoYXJhY3RlciBgJyArIGZpcnN0Q2hhcmFjdGVyICsgJ2AnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gc3Vic3RyaW5nO1xuICB9KS5qb2luKCcnKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY2xlYW5Fc2NhcGVkU3RyaW5nKGlucHV0KSB7XG4gIHJldHVybiBpbnB1dC5tYXRjaChlc2NhcGVkU3RyaW5nUmVnRXhwKVsxXS5yZXBsYWNlKGRvdWJsZVF1b3RlUmVnRXhwLCBcIidcIik7XG59IiwiaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNEYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiB2YWx1ZSBhIGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGluc3RhbmNlIG9mIERhdGUuIFRoZSBmdW5jdGlvbiB3b3JrcyBmb3IgZGF0ZXMgdHJhbnNmZXJyZWQgYWNyb3NzIGlmcmFtZXMuXG4gKlxuICogIyMjIHYyLjAuMCBicmVha2luZyBjaGFuZ2VzOlxuICpcbiAqIC0gW0NoYW5nZXMgdGhhdCBhcmUgY29tbW9uIGZvciB0aGUgd2hvbGUgbGlicmFyeV0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI0NvbW1vbi1DaGFuZ2VzKS5cbiAqXG4gKiBAcGFyYW0geyp9IHZhbHVlIC0gdGhlIHZhbHVlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgYSBkYXRlXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnRzIHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBhIHZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUobmV3IERhdGUoKSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gaW52YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKG5ldyBEYXRlKE5hTikpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHNvbWUgdmFsdWU6XG4gKiBjb25zdCByZXN1bHQgPSBpc0RhdGUoJzIwMTQtMDItMzEnKVxuICogLy89PiBmYWxzZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgYW4gb2JqZWN0OlxuICogY29uc3QgcmVzdWx0ID0gaXNEYXRlKHt9KVxuICogLy89PiBmYWxzZVxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzRGF0ZSh2YWx1ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT09ICdbb2JqZWN0IERhdGVdJztcbn0iLCJpbXBvcnQgaXNEYXRlIGZyb20gXCIuLi9pc0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgaXNWYWxpZFxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB2YWxpZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybnMgZmFsc2UgaWYgYXJndW1lbnQgaXMgSW52YWxpZCBEYXRlIGFuZCB0cnVlIG90aGVyd2lzZS5cbiAqIEFyZ3VtZW50IGlzIGNvbnZlcnRlZCB0byBEYXRlIHVzaW5nIGB0b0RhdGVgLiBTZWUgW3RvRGF0ZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy90b0RhdGV9XG4gKiBJbnZhbGlkIERhdGUgaXMgYSBEYXRlLCB3aG9zZSB0aW1lIHZhbHVlIGlzIE5hTi5cbiAqXG4gKiBUaW1lIHZhbHVlIG9mIERhdGU6IGh0dHA6Ly9lczUuZ2l0aHViLmlvLyN4MTUuOS4xLjFcbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIC0gTm93IGBpc1ZhbGlkYCBkb2Vzbid0IHRocm93IGFuIGV4Y2VwdGlvblxuICogICBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbm90IGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKiAgIEluc3RlYWQsIGFyZ3VtZW50IGlzIGNvbnZlcnRlZCBiZWZvcmVoYW5kIHVzaW5nIGB0b0RhdGVgLlxuICpcbiAqICAgRXhhbXBsZXM6XG4gKlxuICogICB8IGBpc1ZhbGlkYCBhcmd1bWVudCAgICAgICAgfCBCZWZvcmUgdjIuMC4wIHwgdjIuMC4wIG9ud2FyZCB8XG4gKiAgIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLXxcbiAqICAgfCBgbmV3IERhdGUoKWAgICAgICAgICAgICAgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZSgnMjAxNi0wMS0wMScpYCAgfCBgdHJ1ZWAgICAgICAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYG5ldyBEYXRlKCcnKWAgICAgICAgICAgICB8IGBmYWxzZWAgICAgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgbmV3IERhdGUoMTQ4ODM3MDgzNTA4MSlgIHwgYHRydWVgICAgICAgICB8IGB0cnVlYCAgICAgICAgfFxuICogICB8IGBuZXcgRGF0ZShOYU4pYCAgICAgICAgICAgfCBgZmFsc2VgICAgICAgIHwgYGZhbHNlYCAgICAgICB8XG4gKiAgIHwgYCcyMDE2LTAxLTAxJ2AgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqICAgfCBgJydgICAgICAgICAgICAgICAgICAgICAgIHwgYFR5cGVFcnJvcmAgICB8IGBmYWxzZWAgICAgICAgfFxuICogICB8IGAxNDg4MzcwODM1MDgxYCAgICAgICAgICAgfCBgVHlwZUVycm9yYCAgIHwgYHRydWVgICAgICAgICB8XG4gKiAgIHwgYE5hTmAgICAgICAgICAgICAgICAgICAgICB8IGBUeXBlRXJyb3JgICAgfCBgZmFsc2VgICAgICAgIHxcbiAqXG4gKiAgIFdlIGludHJvZHVjZSB0aGlzIGNoYW5nZSB0byBtYWtlICpkYXRlLWZucyogY29uc2lzdGVudCB3aXRoIEVDTUFTY3JpcHQgYmVoYXZpb3JcbiAqICAgdGhhdCB0cnkgdG8gY29lcmNlIGFyZ3VtZW50cyB0byB0aGUgZXhwZWN0ZWQgdHlwZVxuICogICAod2hpY2ggaXMgYWxzbyB0aGUgY2FzZSB3aXRoIG90aGVyICpkYXRlLWZucyogZnVuY3Rpb25zKS5cbiAqXG4gKiBAcGFyYW0geyp9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHZhbGlkXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gaXNWYWxpZChuZXcgRGF0ZSgyMDE0LCAxLCAzMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWx1ZSwgY29udmVydGFibGUgaW50byBhIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKDEzOTM4MDQ4MDAwMDApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSBpbnZhbGlkIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSBpc1ZhbGlkKG5ldyBEYXRlKCcnKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1ZhbGlkKGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcblxuICBpZiAoIWlzRGF0ZShkaXJ0eURhdGUpICYmIHR5cGVvZiBkaXJ0eURhdGUgIT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgcmV0dXJuICFpc05hTihOdW1iZXIoZGF0ZSkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGJ1aWxkRm9ybWF0TG9uZ0ZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDoge307XG4gICAgLy8gVE9ETzogUmVtb3ZlIFN0cmluZygpXG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuICAgIHZhciBmb3JtYXQgPSBhcmdzLmZvcm1hdHNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0c1thcmdzLmRlZmF1bHRXaWR0aF07XG4gICAgcmV0dXJuIGZvcm1hdDtcbiAgfTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBidWlsZExvY2FsaXplRm4oYXJncykge1xuICByZXR1cm4gZnVuY3Rpb24gKGRpcnR5SW5kZXgsIGRpcnR5T3B0aW9ucykge1xuICAgIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9O1xuICAgIHZhciBjb250ZXh0ID0gb3B0aW9ucy5jb250ZXh0ID8gU3RyaW5nKG9wdGlvbnMuY29udGV4dCkgOiAnc3RhbmRhbG9uZSc7XG4gICAgdmFyIHZhbHVlc0FycmF5O1xuXG4gICAgaWYgKGNvbnRleHQgPT09ICdmb3JtYXR0aW5nJyAmJiBhcmdzLmZvcm1hdHRpbmdWYWx1ZXMpIHtcbiAgICAgIHZhciBkZWZhdWx0V2lkdGggPSBhcmdzLmRlZmF1bHRGb3JtYXR0aW5nV2lkdGggfHwgYXJncy5kZWZhdWx0V2lkdGg7XG4gICAgICB2YXIgd2lkdGggPSBvcHRpb25zLndpZHRoID8gU3RyaW5nKG9wdGlvbnMud2lkdGgpIDogZGVmYXVsdFdpZHRoO1xuICAgICAgdmFsdWVzQXJyYXkgPSBhcmdzLmZvcm1hdHRpbmdWYWx1ZXNbd2lkdGhdIHx8IGFyZ3MuZm9ybWF0dGluZ1ZhbHVlc1tkZWZhdWx0V2lkdGhdO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2RlZmF1bHRXaWR0aCA9IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YXIgX3dpZHRoID0gb3B0aW9ucy53aWR0aCA/IFN0cmluZyhvcHRpb25zLndpZHRoKSA6IGFyZ3MuZGVmYXVsdFdpZHRoO1xuXG4gICAgICB2YWx1ZXNBcnJheSA9IGFyZ3MudmFsdWVzW193aWR0aF0gfHwgYXJncy52YWx1ZXNbX2RlZmF1bHRXaWR0aF07XG4gICAgfVxuXG4gICAgdmFyIGluZGV4ID0gYXJncy5hcmd1bWVudENhbGxiYWNrID8gYXJncy5hcmd1bWVudENhbGxiYWNrKGRpcnR5SW5kZXgpIDogZGlydHlJbmRleDsgLy8gQHRzLWlnbm9yZTogRm9yIHNvbWUgcmVhc29uIFR5cGVTY3JpcHQganVzdCBkb24ndCB3YW50IHRvIG1hdGNoIGl0LCBubyBtYXR0ZXIgaG93IGhhcmQgd2UgdHJ5LiBJIGNoYWxsZW5nZSB5b3UgdG8gdHJ5IHRvIHJlbW92ZSBpdCFcblxuICAgIHJldHVybiB2YWx1ZXNBcnJheVtpbmRleF07XG4gIH07XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaEZuKGFyZ3MpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPiAxICYmIGFyZ3VtZW50c1sxXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzFdIDoge307XG4gICAgdmFyIHdpZHRoID0gb3B0aW9ucy53aWR0aDtcbiAgICB2YXIgbWF0Y2hQYXR0ZXJuID0gd2lkdGggJiYgYXJncy5tYXRjaFBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLm1hdGNoUGF0dGVybnNbYXJncy5kZWZhdWx0TWF0Y2hXaWR0aF07XG4gICAgdmFyIG1hdGNoUmVzdWx0ID0gc3RyaW5nLm1hdGNoKG1hdGNoUGF0dGVybik7XG5cbiAgICBpZiAoIW1hdGNoUmVzdWx0KSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICB2YXIgbWF0Y2hlZFN0cmluZyA9IG1hdGNoUmVzdWx0WzBdO1xuICAgIHZhciBwYXJzZVBhdHRlcm5zID0gd2lkdGggJiYgYXJncy5wYXJzZVBhdHRlcm5zW3dpZHRoXSB8fCBhcmdzLnBhcnNlUGF0dGVybnNbYXJncy5kZWZhdWx0UGFyc2VXaWR0aF07XG4gICAgdmFyIGtleSA9IEFycmF5LmlzQXJyYXkocGFyc2VQYXR0ZXJucykgPyBmaW5kSW5kZXgocGFyc2VQYXR0ZXJucywgZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgICAgIHJldHVybiBwYXR0ZXJuLnRlc3QobWF0Y2hlZFN0cmluZyk7XG4gICAgfSkgOiBmaW5kS2V5KHBhcnNlUGF0dGVybnMsIGZ1bmN0aW9uIChwYXR0ZXJuKSB7XG4gICAgICByZXR1cm4gcGF0dGVybi50ZXN0KG1hdGNoZWRTdHJpbmcpO1xuICAgIH0pO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhrZXkpIDoga2V5O1xuICAgIHZhbHVlID0gb3B0aW9ucy52YWx1ZUNhbGxiYWNrID8gb3B0aW9ucy52YWx1ZUNhbGxiYWNrKHZhbHVlKSA6IHZhbHVlO1xuICAgIHZhciByZXN0ID0gc3RyaW5nLnNsaWNlKG1hdGNoZWRTdHJpbmcubGVuZ3RoKTtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWU6IHZhbHVlLFxuICAgICAgcmVzdDogcmVzdFxuICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbmRLZXkob2JqZWN0LCBwcmVkaWNhdGUpIHtcbiAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBwcmVkaWNhdGUob2JqZWN0W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGZpbmRJbmRleChhcnJheSwgcHJlZGljYXRlKSB7XG4gIGZvciAodmFyIGtleSA9IDA7IGtleSA8IGFycmF5Lmxlbmd0aDsga2V5KyspIHtcbiAgICBpZiAocHJlZGljYXRlKGFycmF5W2tleV0pKSB7XG4gICAgICByZXR1cm4ga2V5O1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYnVpbGRNYXRjaFBhdHRlcm5GbihhcmdzKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuICAgIHZhciBtYXRjaFJlc3VsdCA9IHN0cmluZy5tYXRjaChhcmdzLm1hdGNoUGF0dGVybik7XG4gICAgaWYgKCFtYXRjaFJlc3VsdCkgcmV0dXJuIG51bGw7XG4gICAgdmFyIG1hdGNoZWRTdHJpbmcgPSBtYXRjaFJlc3VsdFswXTtcbiAgICB2YXIgcGFyc2VSZXN1bHQgPSBzdHJpbmcubWF0Y2goYXJncy5wYXJzZVBhdHRlcm4pO1xuICAgIGlmICghcGFyc2VSZXN1bHQpIHJldHVybiBudWxsO1xuICAgIHZhciB2YWx1ZSA9IGFyZ3MudmFsdWVDYWxsYmFjayA/IGFyZ3MudmFsdWVDYWxsYmFjayhwYXJzZVJlc3VsdFswXSkgOiBwYXJzZVJlc3VsdFswXTtcbiAgICB2YWx1ZSA9IG9wdGlvbnMudmFsdWVDYWxsYmFjayA/IG9wdGlvbnMudmFsdWVDYWxsYmFjayh2YWx1ZSkgOiB2YWx1ZTtcbiAgICB2YXIgcmVzdCA9IHN0cmluZy5zbGljZShtYXRjaGVkU3RyaW5nLmxlbmd0aCk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIHJlc3Q6IHJlc3RcbiAgICB9O1xuICB9O1xufSIsInZhciBmb3JtYXREaXN0YW5jZUxvY2FsZSA9IHtcbiAgbGVzc1RoYW5YU2Vjb25kczoge1xuICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIHhTZWNvbmRzOiB7XG4gICAgb25lOiAnMSBzZWNvbmQnLFxuICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gIH0sXG4gIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG4gIGxlc3NUaGFuWE1pbnV0ZXM6IHtcbiAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgIG90aGVyOiAnbGVzcyB0aGFuIHt7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICB4TWludXRlczoge1xuICAgIG9uZTogJzEgbWludXRlJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICB9LFxuICBhYm91dFhIb3Vyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgaG91cicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhIb3Vyczoge1xuICAgIG9uZTogJzEgaG91cicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gaG91cnMnXG4gIH0sXG4gIHhEYXlzOiB7XG4gICAgb25lOiAnMSBkYXknLFxuICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gIH0sXG4gIGFib3V0WFdlZWtzOiB7XG4gICAgb25lOiAnYWJvdXQgMSB3ZWVrJyxcbiAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgeFdlZWtzOiB7XG4gICAgb25lOiAnMSB3ZWVrJyxcbiAgICBvdGhlcjogJ3t7Y291bnR9fSB3ZWVrcydcbiAgfSxcbiAgYWJvdXRYTW9udGhzOiB7XG4gICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICB4TW9udGhzOiB7XG4gICAgb25lOiAnMSBtb250aCcsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICB9LFxuICBhYm91dFhZZWFyczoge1xuICAgIG9uZTogJ2Fib3V0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhYm91dCB7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIHhZZWFyczoge1xuICAgIG9uZTogJzEgeWVhcicsXG4gICAgb3RoZXI6ICd7e2NvdW50fX0geWVhcnMnXG4gIH0sXG4gIG92ZXJYWWVhcnM6IHtcbiAgICBvbmU6ICdvdmVyIDEgeWVhcicsXG4gICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgfSxcbiAgYWxtb3N0WFllYXJzOiB7XG4gICAgb25lOiAnYWxtb3N0IDEgeWVhcicsXG4gICAgb3RoZXI6ICdhbG1vc3Qge3tjb3VudH19IHllYXJzJ1xuICB9XG59O1xuXG52YXIgZm9ybWF0RGlzdGFuY2UgPSBmdW5jdGlvbiAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gIHZhciByZXN1bHQ7XG4gIHZhciB0b2tlblZhbHVlID0gZm9ybWF0RGlzdGFuY2VMb2NhbGVbdG9rZW5dO1xuXG4gIGlmICh0eXBlb2YgdG9rZW5WYWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICByZXN1bHQgPSB0b2tlblZhbHVlO1xuICB9IGVsc2UgaWYgKGNvdW50ID09PSAxKSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vbmU7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gdG9rZW5WYWx1ZS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudC50b1N0cmluZygpKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zICE9PSBudWxsICYmIG9wdGlvbnMgIT09IHZvaWQgMCAmJiBvcHRpb25zLmFkZFN1ZmZpeCkge1xuICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gJiYgb3B0aW9ucy5jb21wYXJpc29uID4gMCkge1xuICAgICAgcmV0dXJuICdpbiAnICsgcmVzdWx0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gcmVzdWx0ICsgJyBhZ28nO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtYXREaXN0YW5jZTsiLCJpbXBvcnQgYnVpbGRGb3JtYXRMb25nRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRGb3JtYXRMb25nRm4vaW5kZXguanNcIjtcbnZhciBkYXRlRm9ybWF0cyA9IHtcbiAgZnVsbDogJ0VFRUUsIE1NTU0gZG8sIHknLFxuICBsb25nOiAnTU1NTSBkbywgeScsXG4gIG1lZGl1bTogJ01NTSBkLCB5JyxcbiAgc2hvcnQ6ICdNTS9kZC95eXl5J1xufTtcbnZhciB0aW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogJ2g6bW06c3MgYSB6enp6JyxcbiAgbG9uZzogJ2g6bW06c3MgYSB6JyxcbiAgbWVkaXVtOiAnaDptbTpzcyBhJyxcbiAgc2hvcnQ6ICdoOm1tIGEnXG59O1xudmFyIGRhdGVUaW1lRm9ybWF0cyA9IHtcbiAgZnVsbDogXCJ7e2RhdGV9fSAnYXQnIHt7dGltZX19XCIsXG4gIGxvbmc6IFwie3tkYXRlfX0gJ2F0JyB7e3RpbWV9fVwiLFxuICBtZWRpdW06ICd7e2RhdGV9fSwge3t0aW1lfX0nLFxuICBzaG9ydDogJ3t7ZGF0ZX19LCB7e3RpbWV9fSdcbn07XG52YXIgZm9ybWF0TG9uZyA9IHtcbiAgZGF0ZTogYnVpbGRGb3JtYXRMb25nRm4oe1xuICAgIGZvcm1hdHM6IGRhdGVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pLFxuICB0aW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogdGltZUZvcm1hdHMsXG4gICAgZGVmYXVsdFdpZHRoOiAnZnVsbCdcbiAgfSksXG4gIGRhdGVUaW1lOiBidWlsZEZvcm1hdExvbmdGbih7XG4gICAgZm9ybWF0czogZGF0ZVRpbWVGb3JtYXRzLFxuICAgIGRlZmF1bHRXaWR0aDogJ2Z1bGwnXG4gIH0pXG59O1xuZXhwb3J0IGRlZmF1bHQgZm9ybWF0TG9uZzsiLCJ2YXIgZm9ybWF0UmVsYXRpdmVMb2NhbGUgPSB7XG4gIGxhc3RXZWVrOiBcIidsYXN0JyBlZWVlICdhdCcgcFwiLFxuICB5ZXN0ZXJkYXk6IFwiJ3llc3RlcmRheSBhdCcgcFwiLFxuICB0b2RheTogXCIndG9kYXkgYXQnIHBcIixcbiAgdG9tb3Jyb3c6IFwiJ3RvbW9ycm93IGF0JyBwXCIsXG4gIG5leHRXZWVrOiBcImVlZWUgJ2F0JyBwXCIsXG4gIG90aGVyOiAnUCdcbn07XG5cbnZhciBmb3JtYXRSZWxhdGl2ZSA9IGZ1bmN0aW9uICh0b2tlbiwgX2RhdGUsIF9iYXNlRGF0ZSwgX29wdGlvbnMpIHtcbiAgcmV0dXJuIGZvcm1hdFJlbGF0aXZlTG9jYWxlW3Rva2VuXTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1hdFJlbGF0aXZlOyIsImltcG9ydCBidWlsZExvY2FsaXplRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRMb2NhbGl6ZUZuL2luZGV4LmpzXCI7XG52YXIgZXJhVmFsdWVzID0ge1xuICBuYXJyb3c6IFsnQicsICdBJ10sXG4gIGFiYnJldmlhdGVkOiBbJ0JDJywgJ0FEJ10sXG4gIHdpZGU6IFsnQmVmb3JlIENocmlzdCcsICdBbm5vIERvbWluaSddXG59O1xudmFyIHF1YXJ0ZXJWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWycxJywgJzInLCAnMycsICc0J10sXG4gIGFiYnJldmlhdGVkOiBbJ1ExJywgJ1EyJywgJ1EzJywgJ1E0J10sXG4gIHdpZGU6IFsnMXN0IHF1YXJ0ZXInLCAnMm5kIHF1YXJ0ZXInLCAnM3JkIHF1YXJ0ZXInLCAnNHRoIHF1YXJ0ZXInXVxufTsgLy8gTm90ZTogaW4gRW5nbGlzaCwgdGhlIG5hbWVzIG9mIGRheXMgb2YgdGhlIHdlZWsgYW5kIG1vbnRocyBhcmUgY2FwaXRhbGl6ZWQuXG4vLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbi8vIEdlbmVyYWxseSwgZm9ybWF0dGVkIGRhdGVzIHNob3VsZCBsb29rIGxpa2UgdGhleSBhcmUgaW4gdGhlIG1pZGRsZSBvZiBhIHNlbnRlbmNlLFxuLy8gZS5nLiBpbiBTcGFuaXNoIGxhbmd1YWdlIHRoZSB3ZWVrZGF5cyBhbmQgbW9udGhzIHNob3VsZCBiZSBpbiB0aGUgbG93ZXJjYXNlLlxuXG52YXIgbW9udGhWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ0EnLCAnUycsICdPJywgJ04nLCAnRCddLFxuICBhYmJyZXZpYXRlZDogWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddLFxuICB3aWRlOiBbJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JywgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXVxufTtcbnZhciBkYXlWYWx1ZXMgPSB7XG4gIG5hcnJvdzogWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gIHNob3J0OiBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ10sXG4gIGFiYnJldmlhdGVkOiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICB3aWRlOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbn07XG52YXIgZGF5UGVyaW9kVmFsdWVzID0ge1xuICBuYXJyb3c6IHtcbiAgICBhbTogJ2EnLFxuICAgIHBtOiAncCcsXG4gICAgbWlkbmlnaHQ6ICdtaScsXG4gICAgbm9vbjogJ24nLFxuICAgIG1vcm5pbmc6ICdtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdldmVuaW5nJyxcbiAgICBuaWdodDogJ25pZ2h0J1xuICB9LFxuICBhYmJyZXZpYXRlZDoge1xuICAgIGFtOiAnQU0nLFxuICAgIHBtOiAnUE0nLFxuICAgIG1pZG5pZ2h0OiAnbWlkbmlnaHQnLFxuICAgIG5vb246ICdub29uJyxcbiAgICBtb3JuaW5nOiAnbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnZXZlbmluZycsXG4gICAgbmlnaHQ6ICduaWdodCdcbiAgfSxcbiAgd2lkZToge1xuICAgIGFtOiAnYS5tLicsXG4gICAgcG06ICdwLm0uJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ21vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2FmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2V2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnbmlnaHQnXG4gIH1cbn07XG52YXIgZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyA9IHtcbiAgbmFycm93OiB7XG4gICAgYW06ICdhJyxcbiAgICBwbTogJ3AnLFxuICAgIG1pZG5pZ2h0OiAnbWknLFxuICAgIG5vb246ICduJyxcbiAgICBtb3JuaW5nOiAnaW4gdGhlIG1vcm5pbmcnLFxuICAgIGFmdGVybm9vbjogJ2luIHRoZSBhZnRlcm5vb24nLFxuICAgIGV2ZW5pbmc6ICdpbiB0aGUgZXZlbmluZycsXG4gICAgbmlnaHQ6ICdhdCBuaWdodCdcbiAgfSxcbiAgYWJicmV2aWF0ZWQ6IHtcbiAgICBhbTogJ0FNJyxcbiAgICBwbTogJ1BNJyxcbiAgICBtaWRuaWdodDogJ21pZG5pZ2h0JyxcbiAgICBub29uOiAnbm9vbicsXG4gICAgbW9ybmluZzogJ2luIHRoZSBtb3JuaW5nJyxcbiAgICBhZnRlcm5vb246ICdpbiB0aGUgYWZ0ZXJub29uJyxcbiAgICBldmVuaW5nOiAnaW4gdGhlIGV2ZW5pbmcnLFxuICAgIG5pZ2h0OiAnYXQgbmlnaHQnXG4gIH0sXG4gIHdpZGU6IHtcbiAgICBhbTogJ2EubS4nLFxuICAgIHBtOiAncC5tLicsXG4gICAgbWlkbmlnaHQ6ICdtaWRuaWdodCcsXG4gICAgbm9vbjogJ25vb24nLFxuICAgIG1vcm5pbmc6ICdpbiB0aGUgbW9ybmluZycsXG4gICAgYWZ0ZXJub29uOiAnaW4gdGhlIGFmdGVybm9vbicsXG4gICAgZXZlbmluZzogJ2luIHRoZSBldmVuaW5nJyxcbiAgICBuaWdodDogJ2F0IG5pZ2h0J1xuICB9XG59O1xuXG52YXIgb3JkaW5hbE51bWJlciA9IGZ1bmN0aW9uIChkaXJ0eU51bWJlciwgX29wdGlvbnMpIHtcbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7IC8vIElmIG9yZGluYWwgbnVtYmVycyBkZXBlbmQgb24gY29udGV4dCwgZm9yIGV4YW1wbGUsXG4gIC8vIGlmIHRoZXkgYXJlIGRpZmZlcmVudCBmb3IgZGlmZmVyZW50IGdyYW1tYXRpY2FsIGdlbmRlcnMsXG4gIC8vIHVzZSBgb3B0aW9ucy51bml0YC5cbiAgLy9cbiAgLy8gYHVuaXRgIGNhbiBiZSAneWVhcicsICdxdWFydGVyJywgJ21vbnRoJywgJ3dlZWsnLCAnZGF0ZScsICdkYXlPZlllYXInLFxuICAvLyAnZGF5JywgJ2hvdXInLCAnbWludXRlJywgJ3NlY29uZCcuXG5cbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMDtcblxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnO1xuXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBudW1iZXIgKyAndGgnO1xufTtcblxudmFyIGxvY2FsaXplID0ge1xuICBvcmRpbmFsTnVtYmVyOiBvcmRpbmFsTnVtYmVyLFxuICBlcmE6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBlcmFWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZSdcbiAgfSksXG4gIHF1YXJ0ZXI6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBxdWFydGVyVmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnLFxuICAgIGFyZ3VtZW50Q2FsbGJhY2s6IGZ1bmN0aW9uIChxdWFydGVyKSB7XG4gICAgICByZXR1cm4gcXVhcnRlciAtIDE7XG4gICAgfVxuICB9KSxcbiAgbW9udGg6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBtb250aFZhbHVlcyxcbiAgICBkZWZhdWx0V2lkdGg6ICd3aWRlJ1xuICB9KSxcbiAgZGF5OiBidWlsZExvY2FsaXplRm4oe1xuICAgIHZhbHVlczogZGF5VmFsdWVzLFxuICAgIGRlZmF1bHRXaWR0aDogJ3dpZGUnXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTG9jYWxpemVGbih7XG4gICAgdmFsdWVzOiBkYXlQZXJpb2RWYWx1ZXMsXG4gICAgZGVmYXVsdFdpZHRoOiAnd2lkZScsXG4gICAgZm9ybWF0dGluZ1ZhbHVlczogZm9ybWF0dGluZ0RheVBlcmlvZFZhbHVlcyxcbiAgICBkZWZhdWx0Rm9ybWF0dGluZ1dpZHRoOiAnd2lkZSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGl6ZTsiLCJpbXBvcnQgYnVpbGRNYXRjaEZuIGZyb20gXCIuLi8uLi8uLi9fbGliL2J1aWxkTWF0Y2hGbi9pbmRleC5qc1wiO1xuaW1wb3J0IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4gZnJvbSBcIi4uLy4uLy4uL19saWIvYnVpbGRNYXRjaFBhdHRlcm5Gbi9pbmRleC5qc1wiO1xudmFyIG1hdGNoT3JkaW5hbE51bWJlclBhdHRlcm4gPSAvXihcXGQrKSh0aHxzdHxuZHxyZCk/L2k7XG52YXIgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiA9IC9cXGQrL2k7XG52YXIgbWF0Y2hFcmFQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihifGEpL2ksXG4gIGFiYnJldmlhdGVkOiAvXihiXFwuP1xccz9jXFwuP3xiXFwuP1xccz9jXFwuP1xccz9lXFwuP3xhXFwuP1xccz9kXFwuP3xjXFwuP1xccz9lXFwuPykvaSxcbiAgd2lkZTogL14oYmVmb3JlIGNocmlzdHxiZWZvcmUgY29tbW9uIGVyYXxhbm5vIGRvbWluaXxjb21tb24gZXJhKS9pXG59O1xudmFyIHBhcnNlRXJhUGF0dGVybnMgPSB7XG4gIGFueTogWy9eYi9pLCAvXihhfGMpL2ldXG59O1xudmFyIG1hdGNoUXVhcnRlclBhdHRlcm5zID0ge1xuICBuYXJyb3c6IC9eWzEyMzRdL2ksXG4gIGFiYnJldmlhdGVkOiAvXnFbMTIzNF0vaSxcbiAgd2lkZTogL15bMTIzNF0odGh8c3R8bmR8cmQpPyBxdWFydGVyL2lcbn07XG52YXIgcGFyc2VRdWFydGVyUGF0dGVybnMgPSB7XG4gIGFueTogWy8xL2ksIC8yL2ksIC8zL2ksIC80L2ldXG59O1xudmFyIG1hdGNoTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltqZm1hc29uZF0vaSxcbiAgYWJicmV2aWF0ZWQ6IC9eKGphbnxmZWJ8bWFyfGFwcnxtYXl8anVufGp1bHxhdWd8c2VwfG9jdHxub3Z8ZGVjKS9pLFxuICB3aWRlOiAvXihqYW51YXJ5fGZlYnJ1YXJ5fG1hcmNofGFwcmlsfG1heXxqdW5lfGp1bHl8YXVndXN0fHNlcHRlbWJlcnxvY3RvYmVyfG5vdmVtYmVyfGRlY2VtYmVyKS9pXG59O1xudmFyIHBhcnNlTW9udGhQYXR0ZXJucyA9IHtcbiAgbmFycm93OiBbL15qL2ksIC9eZi9pLCAvXm0vaSwgL15hL2ksIC9ebS9pLCAvXmovaSwgL15qL2ksIC9eYS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV0sXG4gIGFueTogWy9eamEvaSwgL15mL2ksIC9ebWFyL2ksIC9eYXAvaSwgL15tYXkvaSwgL15qdW4vaSwgL15qdWwvaSwgL15hdS9pLCAvXnMvaSwgL15vL2ksIC9ebi9pLCAvXmQvaV1cbn07XG52YXIgbWF0Y2hEYXlQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXltzbXR3Zl0vaSxcbiAgc2hvcnQ6IC9eKHN1fG1vfHR1fHdlfHRofGZyfHNhKS9pLFxuICBhYmJyZXZpYXRlZDogL14oc3VufG1vbnx0dWV8d2VkfHRodXxmcml8c2F0KS9pLFxuICB3aWRlOiAvXihzdW5kYXl8bW9uZGF5fHR1ZXNkYXl8d2VkbmVzZGF5fHRodXJzZGF5fGZyaWRheXxzYXR1cmRheSkvaVxufTtcbnZhciBwYXJzZURheVBhdHRlcm5zID0ge1xuICBuYXJyb3c6IFsvXnMvaSwgL15tL2ksIC9edC9pLCAvXncvaSwgL150L2ksIC9eZi9pLCAvXnMvaV0sXG4gIGFueTogWy9ec3UvaSwgL15tL2ksIC9edHUvaSwgL153L2ksIC9edGgvaSwgL15mL2ksIC9ec2EvaV1cbn07XG52YXIgbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgbmFycm93OiAvXihhfHB8bWl8bnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2ksXG4gIGFueTogL14oW2FwXVxcLj9cXHM/bVxcLj98bWlkbmlnaHR8bm9vbnwoaW4gdGhlfGF0KSAobW9ybmluZ3xhZnRlcm5vb258ZXZlbmluZ3xuaWdodCkpL2lcbn07XG52YXIgcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyA9IHtcbiAgYW55OiB7XG4gICAgYW06IC9eYS9pLFxuICAgIHBtOiAvXnAvaSxcbiAgICBtaWRuaWdodDogL15taS9pLFxuICAgIG5vb246IC9ebm8vaSxcbiAgICBtb3JuaW5nOiAvbW9ybmluZy9pLFxuICAgIGFmdGVybm9vbjogL2FmdGVybm9vbi9pLFxuICAgIGV2ZW5pbmc6IC9ldmVuaW5nL2ksXG4gICAgbmlnaHQ6IC9uaWdodC9pXG4gIH1cbn07XG52YXIgbWF0Y2ggPSB7XG4gIG9yZGluYWxOdW1iZXI6IGJ1aWxkTWF0Y2hQYXR0ZXJuRm4oe1xuICAgIG1hdGNoUGF0dGVybjogbWF0Y2hPcmRpbmFsTnVtYmVyUGF0dGVybixcbiAgICBwYXJzZVBhdHRlcm46IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4sXG4gICAgdmFsdWVDYWxsYmFjazogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gcGFyc2VJbnQodmFsdWUsIDEwKTtcbiAgICB9XG4gIH0pLFxuICBlcmE6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hFcmFQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRXJhUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBxdWFydGVyOiBidWlsZE1hdGNoRm4oe1xuICAgIG1hdGNoUGF0dGVybnM6IG1hdGNoUXVhcnRlclBhdHRlcm5zLFxuICAgIGRlZmF1bHRNYXRjaFdpZHRoOiAnd2lkZScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VRdWFydGVyUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknLFxuICAgIHZhbHVlQ2FsbGJhY2s6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgcmV0dXJuIGluZGV4ICsgMTtcbiAgICB9XG4gIH0pLFxuICBtb250aDogYnVpbGRNYXRjaEZuKHtcbiAgICBtYXRjaFBhdHRlcm5zOiBtYXRjaE1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdE1hdGNoV2lkdGg6ICd3aWRlJyxcbiAgICBwYXJzZVBhdHRlcm5zOiBwYXJzZU1vbnRoUGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXk6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ3dpZGUnLFxuICAgIHBhcnNlUGF0dGVybnM6IHBhcnNlRGF5UGF0dGVybnMsXG4gICAgZGVmYXVsdFBhcnNlV2lkdGg6ICdhbnknXG4gIH0pLFxuICBkYXlQZXJpb2Q6IGJ1aWxkTWF0Y2hGbih7XG4gICAgbWF0Y2hQYXR0ZXJuczogbWF0Y2hEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0TWF0Y2hXaWR0aDogJ2FueScsXG4gICAgcGFyc2VQYXR0ZXJuczogcGFyc2VEYXlQZXJpb2RQYXR0ZXJucyxcbiAgICBkZWZhdWx0UGFyc2VXaWR0aDogJ2FueSdcbiAgfSlcbn07XG5leHBvcnQgZGVmYXVsdCBtYXRjaDsiLCJpbXBvcnQgZm9ybWF0RGlzdGFuY2UgZnJvbSBcIi4vX2xpYi9mb3JtYXREaXN0YW5jZS9pbmRleC5qc1wiO1xuaW1wb3J0IGZvcm1hdExvbmcgZnJvbSBcIi4vX2xpYi9mb3JtYXRMb25nL2luZGV4LmpzXCI7XG5pbXBvcnQgZm9ybWF0UmVsYXRpdmUgZnJvbSBcIi4vX2xpYi9mb3JtYXRSZWxhdGl2ZS9pbmRleC5qc1wiO1xuaW1wb3J0IGxvY2FsaXplIGZyb20gXCIuL19saWIvbG9jYWxpemUvaW5kZXguanNcIjtcbmltcG9ydCBtYXRjaCBmcm9tIFwiLi9fbGliL21hdGNoL2luZGV4LmpzXCI7XG5cbi8qKlxuICogQHR5cGUge0xvY2FsZX1cbiAqIEBjYXRlZ29yeSBMb2NhbGVzXG4gKiBAc3VtbWFyeSBFbmdsaXNoIGxvY2FsZSAoVW5pdGVkIFN0YXRlcykuXG4gKiBAbGFuZ3VhZ2UgRW5nbGlzaFxuICogQGlzby02MzktMiBlbmdcbiAqIEBhdXRob3IgU2FzaGEgS29zcyBbQGtvc3Nub2NvcnBde0BsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9rb3Nzbm9jb3JwfVxuICogQGF1dGhvciBMZXNoYSBLb3NzIFtAbGVzaGFrb3NzXXtAbGluayBodHRwczovL2dpdGh1Yi5jb20vbGVzaGFrb3NzfVxuICovXG52YXIgbG9jYWxlID0ge1xuICBjb2RlOiAnZW4tVVMnLFxuICBmb3JtYXREaXN0YW5jZTogZm9ybWF0RGlzdGFuY2UsXG4gIGZvcm1hdExvbmc6IGZvcm1hdExvbmcsXG4gIGZvcm1hdFJlbGF0aXZlOiBmb3JtYXRSZWxhdGl2ZSxcbiAgbG9jYWxpemU6IGxvY2FsaXplLFxuICBtYXRjaDogbWF0Y2gsXG4gIG9wdGlvbnM6IHtcbiAgICB3ZWVrU3RhcnRzT246IDBcbiAgICAvKiBTdW5kYXkgKi9cbiAgICAsXG4gICAgZmlyc3RXZWVrQ29udGFpbnNEYXRlOiAxXG4gIH1cbn07XG5leHBvcnQgZGVmYXVsdCBsb2NhbGU7IiwiaW1wb3J0IHRvSW50ZWdlciBmcm9tIFwiLi4vX2xpYi90b0ludGVnZXIvaW5kZXguanNcIjtcbmltcG9ydCBhZGRNaWxsaXNlY29uZHMgZnJvbSBcIi4uL2FkZE1pbGxpc2Vjb25kcy9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3ViTWlsbGlzZWNvbmRzXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiAjIyMgdjIuMC4wIGJyZWFraW5nIGNoYW5nZXM6XG4gKlxuICogLSBbQ2hhbmdlcyB0aGF0IGFyZSBjb21tb24gZm9yIHRoZSB3aG9sZSBsaWJyYXJ5XShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvZGF0ZS1mbnMvYmxvYi9tYXN0ZXIvZG9jcy91cGdyYWRlR3VpZGUubWQjQ29tbW9uLUNoYW5nZXMpLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgc3VidHJhY3RlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaWxsaXNlY29uZHMgc3VidHJhY3RlZFxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA3NTAgbWlsbGlzZWNvbmRzIGZyb20gMTAgSnVseSAyMDE0IDEyOjQ1OjMwLjAwMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN1Yk1pbGxpc2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAzMCwgMCksIDc1MClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjQ1OjI5LjI1MFxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgYW1vdW50ID0gdG9JbnRlZ2VyKGRpcnR5QW1vdW50KTtcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIC1hbW91bnQpO1xufSIsImltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBhcmd1bWVudCAtIHRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDbG9uZSB0aGUgZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZShuZXcgRGF0ZSgyMDE0LCAxLCAxMSwgMTEsIDMwLCAzMCkpXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb252ZXJ0IHRoZSB0aW1lc3RhbXAgdG8gZGF0ZTpcbiAqIGNvbnN0IHJlc3VsdCA9IHRvRGF0ZSgxMzkyMDk4NDMwMDAwKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBhcmdTdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnQpOyAvLyBDbG9uZSB0aGUgZGF0ZVxuXG4gIGlmIChhcmd1bWVudCBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGFyZ3VtZW50ID09PSAnb2JqZWN0JyAmJiBhcmdTdHIgPT09ICdbb2JqZWN0IERhdGVdJykge1xuICAgIC8vIFByZXZlbnQgdGhlIGRhdGUgdG8gbG9zZSB0aGUgbWlsbGlzZWNvbmRzIHdoZW4gcGFzc2VkIHRvIG5ldyBEYXRlKCkgaW4gSUUxMFxuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudC5nZXRUaW1lKCkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCA9PT0gJ251bWJlcicgfHwgYXJnU3RyID09PSAnW29iamVjdCBOdW1iZXJdJykge1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKCh0eXBlb2YgYXJndW1lbnQgPT09ICdzdHJpbmcnIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScpICYmIHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgIGNvbnNvbGUud2FybihcIlN0YXJ0aW5nIHdpdGggdjIuMC4wLWJldGEuMSBkYXRlLWZucyBkb2Vzbid0IGFjY2VwdCBzdHJpbmdzIGFzIGRhdGUgYXJndW1lbnRzLiBQbGVhc2UgdXNlIGBwYXJzZUlTT2AgdG8gcGFyc2Ugc3RyaW5ncy4gU2VlOiBodHRwczovL2dpdC5pby9manVsZVwiKTsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcblxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERhdGUoTmFOKTtcbiAgfVxufSIsImltcG9ydCB7IHJlZ2lzdGVyVmVyc2lvbiB9IGZyb20gJ0BmaXJlYmFzZS9hcHAnO1xuZXhwb3J0ICogZnJvbSAnQGZpcmViYXNlL2FwcCc7XG5cbnZhciBuYW1lID0gXCJmaXJlYmFzZVwiO1xudmFyIHZlcnNpb24gPSBcIjkuOC4xXCI7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMCBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbnJlZ2lzdGVyVmVyc2lvbihuYW1lLCB2ZXJzaW9uLCAnYXBwJyk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBDb21wb25lbnRDb250YWluZXIgfSBmcm9tICdAZmlyZWJhc2UvY29tcG9uZW50JztcbmltcG9ydCB7IExvZ2dlciwgc2V0VXNlckxvZ0hhbmRsZXIsIHNldExvZ0xldmVsIGFzIHNldExvZ0xldmVsJDEgfSBmcm9tICdAZmlyZWJhc2UvbG9nZ2VyJztcbmltcG9ydCB7IEVycm9yRmFjdG9yeSwgZGVlcEVxdWFsLCBiYXNlNjR1cmxFbmNvZGVXaXRob3V0UGFkZGluZywgaXNJbmRleGVkREJBdmFpbGFibGUsIHZhbGlkYXRlSW5kZXhlZERCT3BlbmFibGUgfSBmcm9tICdAZmlyZWJhc2UvdXRpbCc7XG5leHBvcnQgeyBGaXJlYmFzZUVycm9yIH0gZnJvbSAnQGZpcmViYXNlL3V0aWwnO1xuaW1wb3J0IHsgb3BlbkRCIH0gZnJvbSAnaWRiJztcblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY2xhc3MgUGxhdGZvcm1Mb2dnZXJTZXJ2aWNlSW1wbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIC8vIEluIGluaXRpYWwgaW1wbGVtZW50YXRpb24sIHRoaXMgd2lsbCBiZSBjYWxsZWQgYnkgaW5zdGFsbGF0aW9ucyBvblxyXG4gICAgLy8gYXV0aCB0b2tlbiByZWZyZXNoLCBhbmQgaW5zdGFsbGF0aW9ucyB3aWxsIHNlbmQgdGhpcyBzdHJpbmcuXHJcbiAgICBnZXRQbGF0Zm9ybUluZm9TdHJpbmcoKSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXJzID0gdGhpcy5jb250YWluZXIuZ2V0UHJvdmlkZXJzKCk7XHJcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIHByb3ZpZGVycyBhbmQgZ2V0IGxpYnJhcnkvdmVyc2lvbiBwYWlycyBmcm9tIGFueSB0aGF0IGFyZVxyXG4gICAgICAgIC8vIHZlcnNpb24gY29tcG9uZW50cy5cclxuICAgICAgICByZXR1cm4gcHJvdmlkZXJzXHJcbiAgICAgICAgICAgIC5tYXAocHJvdmlkZXIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNWZXJzaW9uU2VydmljZVByb3ZpZGVyKHByb3ZpZGVyKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VydmljZSA9IHByb3ZpZGVyLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke3NlcnZpY2UubGlicmFyeX0vJHtzZXJ2aWNlLnZlcnNpb259YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbHRlcihsb2dTdHJpbmcgPT4gbG9nU3RyaW5nKVxyXG4gICAgICAgICAgICAuam9pbignICcpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gcHJvdmlkZXIgY2hlY2sgaWYgdGhpcyBwcm92aWRlciBwcm92aWRlcyBhIFZlcnNpb25TZXJ2aWNlXHJcbiAqXHJcbiAqIE5PVEU6IFVzaW5nIFByb3ZpZGVyPCdhcHAtdmVyc2lvbic+IGlzIGEgaGFjayB0byBpbmRpY2F0ZSB0aGF0IHRoZSBwcm92aWRlclxyXG4gKiBwcm92aWRlcyBWZXJzaW9uU2VydmljZS4gVGhlIHByb3ZpZGVyIGlzIG5vdCBuZWNlc3NhcmlseSBhICdhcHAtdmVyc2lvbidcclxuICogcHJvdmlkZXIuXHJcbiAqL1xyXG5mdW5jdGlvbiBpc1ZlcnNpb25TZXJ2aWNlUHJvdmlkZXIocHJvdmlkZXIpIHtcclxuICAgIGNvbnN0IGNvbXBvbmVudCA9IHByb3ZpZGVyLmdldENvbXBvbmVudCgpO1xyXG4gICAgcmV0dXJuIChjb21wb25lbnQgPT09IG51bGwgfHwgY29tcG9uZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjb21wb25lbnQudHlwZSkgPT09IFwiVkVSU0lPTlwiIC8qIFZFUlNJT04gKi87XHJcbn1cblxuY29uc3QgbmFtZSRvID0gXCJAZmlyZWJhc2UvYXBwXCI7XG5jb25zdCB2ZXJzaW9uJDEgPSBcIjAuNy4yNFwiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdAZmlyZWJhc2UvYXBwJyk7XG5cbmNvbnN0IG5hbWUkbiA9IFwiQGZpcmViYXNlL2FwcC1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRtID0gXCJAZmlyZWJhc2UvYW5hbHl0aWNzLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJGwgPSBcIkBmaXJlYmFzZS9hbmFseXRpY3NcIjtcblxuY29uc3QgbmFtZSRrID0gXCJAZmlyZWJhc2UvYXBwLWNoZWNrLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJGogPSBcIkBmaXJlYmFzZS9hcHAtY2hlY2tcIjtcblxuY29uc3QgbmFtZSRpID0gXCJAZmlyZWJhc2UvYXV0aFwiO1xuXG5jb25zdCBuYW1lJGggPSBcIkBmaXJlYmFzZS9hdXRoLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJGcgPSBcIkBmaXJlYmFzZS9kYXRhYmFzZVwiO1xuXG5jb25zdCBuYW1lJGYgPSBcIkBmaXJlYmFzZS9kYXRhYmFzZS1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRlID0gXCJAZmlyZWJhc2UvZnVuY3Rpb25zXCI7XG5cbmNvbnN0IG5hbWUkZCA9IFwiQGZpcmViYXNlL2Z1bmN0aW9ucy1jb21wYXRcIjtcblxuY29uc3QgbmFtZSRjID0gXCJAZmlyZWJhc2UvaW5zdGFsbGF0aW9uc1wiO1xuXG5jb25zdCBuYW1lJGIgPSBcIkBmaXJlYmFzZS9pbnN0YWxsYXRpb25zLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJGEgPSBcIkBmaXJlYmFzZS9tZXNzYWdpbmdcIjtcblxuY29uc3QgbmFtZSQ5ID0gXCJAZmlyZWJhc2UvbWVzc2FnaW5nLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJDggPSBcIkBmaXJlYmFzZS9wZXJmb3JtYW5jZVwiO1xuXG5jb25zdCBuYW1lJDcgPSBcIkBmaXJlYmFzZS9wZXJmb3JtYW5jZS1jb21wYXRcIjtcblxuY29uc3QgbmFtZSQ2ID0gXCJAZmlyZWJhc2UvcmVtb3RlLWNvbmZpZ1wiO1xuXG5jb25zdCBuYW1lJDUgPSBcIkBmaXJlYmFzZS9yZW1vdGUtY29uZmlnLWNvbXBhdFwiO1xuXG5jb25zdCBuYW1lJDQgPSBcIkBmaXJlYmFzZS9zdG9yYWdlXCI7XG5cbmNvbnN0IG5hbWUkMyA9IFwiQGZpcmViYXNlL3N0b3JhZ2UtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUkMiA9IFwiQGZpcmViYXNlL2ZpcmVzdG9yZVwiO1xuXG5jb25zdCBuYW1lJDEgPSBcIkBmaXJlYmFzZS9maXJlc3RvcmUtY29tcGF0XCI7XG5cbmNvbnN0IG5hbWUgPSBcImZpcmViYXNlXCI7XG5jb25zdCB2ZXJzaW9uID0gXCI5LjguMVwiO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogVGhlIGRlZmF1bHQgYXBwIG5hbWVcclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5jb25zdCBERUZBVUxUX0VOVFJZX05BTUUgPSAnW0RFRkFVTFRdJztcclxuY29uc3QgUExBVEZPUk1fTE9HX1NUUklORyA9IHtcclxuICAgIFtuYW1lJG9dOiAnZmlyZS1jb3JlJyxcclxuICAgIFtuYW1lJG5dOiAnZmlyZS1jb3JlLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRsXTogJ2ZpcmUtYW5hbHl0aWNzJyxcclxuICAgIFtuYW1lJG1dOiAnZmlyZS1hbmFseXRpY3MtY29tcGF0JyxcclxuICAgIFtuYW1lJGpdOiAnZmlyZS1hcHAtY2hlY2snLFxyXG4gICAgW25hbWUka106ICdmaXJlLWFwcC1jaGVjay1jb21wYXQnLFxyXG4gICAgW25hbWUkaV06ICdmaXJlLWF1dGgnLFxyXG4gICAgW25hbWUkaF06ICdmaXJlLWF1dGgtY29tcGF0JyxcclxuICAgIFtuYW1lJGddOiAnZmlyZS1ydGRiJyxcclxuICAgIFtuYW1lJGZdOiAnZmlyZS1ydGRiLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRlXTogJ2ZpcmUtZm4nLFxyXG4gICAgW25hbWUkZF06ICdmaXJlLWZuLWNvbXBhdCcsXHJcbiAgICBbbmFtZSRjXTogJ2ZpcmUtaWlkJyxcclxuICAgIFtuYW1lJGJdOiAnZmlyZS1paWQtY29tcGF0JyxcclxuICAgIFtuYW1lJGFdOiAnZmlyZS1mY20nLFxyXG4gICAgW25hbWUkOV06ICdmaXJlLWZjbS1jb21wYXQnLFxyXG4gICAgW25hbWUkOF06ICdmaXJlLXBlcmYnLFxyXG4gICAgW25hbWUkN106ICdmaXJlLXBlcmYtY29tcGF0JyxcclxuICAgIFtuYW1lJDZdOiAnZmlyZS1yYycsXHJcbiAgICBbbmFtZSQ1XTogJ2ZpcmUtcmMtY29tcGF0JyxcclxuICAgIFtuYW1lJDRdOiAnZmlyZS1nY3MnLFxyXG4gICAgW25hbWUkM106ICdmaXJlLWdjcy1jb21wYXQnLFxyXG4gICAgW25hbWUkMl06ICdmaXJlLWZzdCcsXHJcbiAgICBbbmFtZSQxXTogJ2ZpcmUtZnN0LWNvbXBhdCcsXHJcbiAgICAnZmlyZS1qcyc6ICdmaXJlLWpzJyxcclxuICAgIFtuYW1lXTogJ2ZpcmUtanMtYWxsJ1xyXG59O1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQGludGVybmFsXHJcbiAqL1xyXG5jb25zdCBfYXBwcyA9IG5ldyBNYXAoKTtcclxuLyoqXHJcbiAqIFJlZ2lzdGVyZWQgY29tcG9uZW50cy5cclxuICpcclxuICogQGludGVybmFsXHJcbiAqL1xyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG5jb25zdCBfY29tcG9uZW50cyA9IG5ldyBNYXAoKTtcclxuLyoqXHJcbiAqIEBwYXJhbSBjb21wb25lbnQgLSB0aGUgY29tcG9uZW50IGJlaW5nIGFkZGVkIHRvIHRoaXMgYXBwJ3MgY29udGFpbmVyXHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX2FkZENvbXBvbmVudChhcHAsIGNvbXBvbmVudCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhcHAuY29udGFpbmVyLmFkZENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2dnZXIuZGVidWcoYENvbXBvbmVudCAke2NvbXBvbmVudC5uYW1lfSBmYWlsZWQgdG8gcmVnaXN0ZXIgd2l0aCBGaXJlYmFzZUFwcCAke2FwcC5uYW1lfWAsIGUpO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9hZGRPck92ZXJ3cml0ZUNvbXBvbmVudChhcHAsIGNvbXBvbmVudCkge1xyXG4gICAgYXBwLmNvbnRhaW5lci5hZGRPck92ZXJ3cml0ZUNvbXBvbmVudChjb21wb25lbnQpO1xyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gY29tcG9uZW50IC0gdGhlIGNvbXBvbmVudCB0byByZWdpc3RlclxyXG4gKiBAcmV0dXJucyB3aGV0aGVyIG9yIG5vdCB0aGUgY29tcG9uZW50IGlzIHJlZ2lzdGVyZWQgc3VjY2Vzc2Z1bGx5XHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX3JlZ2lzdGVyQ29tcG9uZW50KGNvbXBvbmVudCkge1xyXG4gICAgY29uc3QgY29tcG9uZW50TmFtZSA9IGNvbXBvbmVudC5uYW1lO1xyXG4gICAgaWYgKF9jb21wb25lbnRzLmhhcyhjb21wb25lbnROYW1lKSkge1xyXG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhgVGhlcmUgd2VyZSBtdWx0aXBsZSBhdHRlbXB0cyB0byByZWdpc3RlciBjb21wb25lbnQgJHtjb21wb25lbnROYW1lfS5gKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBfY29tcG9uZW50cy5zZXQoY29tcG9uZW50TmFtZSwgY29tcG9uZW50KTtcclxuICAgIC8vIGFkZCB0aGUgY29tcG9uZW50IHRvIGV4aXN0aW5nIGFwcCBpbnN0YW5jZXNcclxuICAgIGZvciAoY29uc3QgYXBwIG9mIF9hcHBzLnZhbHVlcygpKSB7XHJcbiAgICAgICAgX2FkZENvbXBvbmVudChhcHAsIGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxufVxyXG4vKipcclxuICpcclxuICogQHBhcmFtIGFwcCAtIEZpcmViYXNlQXBwIGluc3RhbmNlXHJcbiAqIEBwYXJhbSBuYW1lIC0gc2VydmljZSBuYW1lXHJcbiAqXHJcbiAqIEByZXR1cm5zIHRoZSBwcm92aWRlciBmb3IgdGhlIHNlcnZpY2Ugd2l0aCB0aGUgbWF0Y2hpbmcgbmFtZVxyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9nZXRQcm92aWRlcihhcHAsIG5hbWUpIHtcclxuICAgIGNvbnN0IGhlYXJ0YmVhdENvbnRyb2xsZXIgPSBhcHAuY29udGFpbmVyXHJcbiAgICAgICAgLmdldFByb3ZpZGVyKCdoZWFydGJlYXQnKVxyXG4gICAgICAgIC5nZXRJbW1lZGlhdGUoeyBvcHRpb25hbDogdHJ1ZSB9KTtcclxuICAgIGlmIChoZWFydGJlYXRDb250cm9sbGVyKSB7XHJcbiAgICAgICAgdm9pZCBoZWFydGJlYXRDb250cm9sbGVyLnRyaWdnZXJIZWFydGJlYXQoKTtcclxuICAgIH1cclxuICAgIHJldHVybiBhcHAuY29udGFpbmVyLmdldFByb3ZpZGVyKG5hbWUpO1xyXG59XHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0gYXBwIC0gRmlyZWJhc2VBcHAgaW5zdGFuY2VcclxuICogQHBhcmFtIG5hbWUgLSBzZXJ2aWNlIG5hbWVcclxuICogQHBhcmFtIGluc3RhbmNlSWRlbnRpZmllciAtIHNlcnZpY2UgaW5zdGFuY2UgaWRlbnRpZmllciBpbiBjYXNlIHRoZSBzZXJ2aWNlIHN1cHBvcnRzIG11bHRpcGxlIGluc3RhbmNlc1xyXG4gKlxyXG4gKiBAaW50ZXJuYWxcclxuICovXHJcbmZ1bmN0aW9uIF9yZW1vdmVTZXJ2aWNlSW5zdGFuY2UoYXBwLCBuYW1lLCBpbnN0YW5jZUlkZW50aWZpZXIgPSBERUZBVUxUX0VOVFJZX05BTUUpIHtcclxuICAgIF9nZXRQcm92aWRlcihhcHAsIG5hbWUpLmNsZWFySW5zdGFuY2UoaW5zdGFuY2VJZGVudGlmaWVyKTtcclxufVxyXG4vKipcclxuICogVGVzdCBvbmx5XHJcbiAqXHJcbiAqIEBpbnRlcm5hbFxyXG4gKi9cclxuZnVuY3Rpb24gX2NsZWFyQ29tcG9uZW50cygpIHtcclxuICAgIF9jb21wb25lbnRzLmNsZWFyKCk7XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgRVJST1JTID0ge1xyXG4gICAgW1wibm8tYXBwXCIgLyogTk9fQVBQICovXTogXCJObyBGaXJlYmFzZSBBcHAgJ3skYXBwTmFtZX0nIGhhcyBiZWVuIGNyZWF0ZWQgLSBcIiArXHJcbiAgICAgICAgJ2NhbGwgRmlyZWJhc2UgQXBwLmluaXRpYWxpemVBcHAoKScsXHJcbiAgICBbXCJiYWQtYXBwLW5hbWVcIiAvKiBCQURfQVBQX05BTUUgKi9dOiBcIklsbGVnYWwgQXBwIG5hbWU6ICd7JGFwcE5hbWV9XCIsXHJcbiAgICBbXCJkdXBsaWNhdGUtYXBwXCIgLyogRFVQTElDQVRFX0FQUCAqL106IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGV4aXN0cyB3aXRoIGRpZmZlcmVudCBvcHRpb25zIG9yIGNvbmZpZ1wiLFxyXG4gICAgW1wiYXBwLWRlbGV0ZWRcIiAvKiBBUFBfREVMRVRFRCAqL106IFwiRmlyZWJhc2UgQXBwIG5hbWVkICd7JGFwcE5hbWV9JyBhbHJlYWR5IGRlbGV0ZWRcIixcclxuICAgIFtcImludmFsaWQtYXBwLWFyZ3VtZW50XCIgLyogSU5WQUxJRF9BUFBfQVJHVU1FTlQgKi9dOiAnZmlyZWJhc2UueyRhcHBOYW1lfSgpIHRha2VzIGVpdGhlciBubyBhcmd1bWVudCBvciBhICcgK1xyXG4gICAgICAgICdGaXJlYmFzZSBBcHAgaW5zdGFuY2UuJyxcclxuICAgIFtcImludmFsaWQtbG9nLWFyZ3VtZW50XCIgLyogSU5WQUxJRF9MT0dfQVJHVU1FTlQgKi9dOiAnRmlyc3QgYXJndW1lbnQgdG8gYG9uTG9nYCBtdXN0IGJlIG51bGwgb3IgYSBmdW5jdGlvbi4nLFxyXG4gICAgW1wic3RvcmFnZS1vcGVuXCIgLyogU1RPUkFHRV9PUEVOICovXTogJ0Vycm9yIHRocm93biB3aGVuIG9wZW5pbmcgc3RvcmFnZS4gT3JpZ2luYWwgZXJyb3I6IHskb3JpZ2luYWxFcnJvck1lc3NhZ2V9LicsXHJcbiAgICBbXCJzdG9yYWdlLWdldFwiIC8qIFNUT1JBR0VfR0VUICovXTogJ0Vycm9yIHRocm93biB3aGVuIHJlYWRpbmcgZnJvbSBzdG9yYWdlLiBPcmlnaW5hbCBlcnJvcjogeyRvcmlnaW5hbEVycm9yTWVzc2FnZX0uJyxcclxuICAgIFtcInN0b3JhZ2Utc2V0XCIgLyogU1RPUkFHRV9XUklURSAqL106ICdFcnJvciB0aHJvd24gd2hlbiB3cml0aW5nIHRvIHN0b3JhZ2UuIE9yaWdpbmFsIGVycm9yOiB7JG9yaWdpbmFsRXJyb3JNZXNzYWdlfS4nLFxyXG4gICAgW1wic3RvcmFnZS1kZWxldGVcIiAvKiBTVE9SQUdFX0RFTEVURSAqL106ICdFcnJvciB0aHJvd24gd2hlbiBkZWxldGluZyBmcm9tIHN0b3JhZ2UuIE9yaWdpbmFsIGVycm9yOiB7JG9yaWdpbmFsRXJyb3JNZXNzYWdlfS4nXHJcbn07XHJcbmNvbnN0IEVSUk9SX0ZBQ1RPUlkgPSBuZXcgRXJyb3JGYWN0b3J5KCdhcHAnLCAnRmlyZWJhc2UnLCBFUlJPUlMpO1xuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jbGFzcyBGaXJlYmFzZUFwcEltcGwge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucywgY29uZmlnLCBjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLl9pc0RlbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9vcHRpb25zID0gT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy5fY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgY29uZmlnKTtcclxuICAgICAgICB0aGlzLl9uYW1lID0gY29uZmlnLm5hbWU7XHJcbiAgICAgICAgdGhpcy5fYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID1cclxuICAgICAgICAgICAgY29uZmlnLmF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZDtcclxuICAgICAgICB0aGlzLl9jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ29tcG9uZW50KG5ldyBDb21wb25lbnQoJ2FwcCcsICgpID0+IHRoaXMsIFwiUFVCTElDXCIgLyogUFVCTElDICovKSk7XHJcbiAgICB9XHJcbiAgICBnZXQgYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkKCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tEZXN0cm95ZWQoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkO1xyXG4gICAgfVxyXG4gICAgc2V0IGF1dG9tYXRpY0RhdGFDb2xsZWN0aW9uRW5hYmxlZCh2YWwpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XHJcbiAgICAgICAgdGhpcy5fYXV0b21hdGljRGF0YUNvbGxlY3Rpb25FbmFibGVkID0gdmFsO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hbWUoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICAgICAgdGhpcy5jaGVja0Rlc3Ryb3llZCgpO1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vcHRpb25zO1xyXG4gICAgfVxyXG4gICAgZ2V0IGNvbmZpZygpIHtcclxuICAgICAgICB0aGlzLmNoZWNrRGVzdHJveWVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbmZpZztcclxuICAgIH1cclxuICAgIGdldCBjb250YWluZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIGdldCBpc0RlbGV0ZWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzRGVsZXRlZDtcclxuICAgIH1cclxuICAgIHNldCBpc0RlbGV0ZWQodmFsKSB7XHJcbiAgICAgICAgdGhpcy5faXNEZWxldGVkID0gdmFsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHdpbGwgdGhyb3cgYW4gRXJyb3IgaWYgdGhlIEFwcCBoYXMgYWxyZWFkeSBiZWVuIGRlbGV0ZWQgLVxyXG4gICAgICogdXNlIGJlZm9yZSBwZXJmb3JtaW5nIEFQSSBhY3Rpb25zIG9uIHRoZSBBcHAuXHJcbiAgICAgKi9cclxuICAgIGNoZWNrRGVzdHJveWVkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRGVsZXRlZCkge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImFwcC1kZWxldGVkXCIgLyogQVBQX0RFTEVURUQgKi8sIHsgYXBwTmFtZTogdGhpcy5fbmFtZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuLyoqXHJcbiAqIFRoZSBjdXJyZW50IFNESyB2ZXJzaW9uLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5jb25zdCBTREtfVkVSU0lPTiA9IHZlcnNpb247XHJcbmZ1bmN0aW9uIGluaXRpYWxpemVBcHAob3B0aW9ucywgcmF3Q29uZmlnID0ge30pIHtcclxuICAgIGlmICh0eXBlb2YgcmF3Q29uZmlnICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSByYXdDb25maWc7XHJcbiAgICAgICAgcmF3Q29uZmlnID0geyBuYW1lIH07XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKHsgbmFtZTogREVGQVVMVF9FTlRSWV9OQU1FLCBhdXRvbWF0aWNEYXRhQ29sbGVjdGlvbkVuYWJsZWQ6IGZhbHNlIH0sIHJhd0NvbmZpZyk7XHJcbiAgICBjb25zdCBuYW1lID0gY29uZmlnLm5hbWU7XHJcbiAgICBpZiAodHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnIHx8ICFuYW1lKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJiYWQtYXBwLW5hbWVcIiAvKiBCQURfQVBQX05BTUUgKi8sIHtcclxuICAgICAgICAgICAgYXBwTmFtZTogU3RyaW5nKG5hbWUpXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBleGlzdGluZ0FwcCA9IF9hcHBzLmdldChuYW1lKTtcclxuICAgIGlmIChleGlzdGluZ0FwcCkge1xyXG4gICAgICAgIC8vIHJldHVybiB0aGUgZXhpc3RpbmcgYXBwIGlmIG9wdGlvbnMgYW5kIGNvbmZpZyBkZWVwIGVxdWFsIHRoZSBvbmVzIGluIHRoZSBleGlzdGluZyBhcHAuXHJcbiAgICAgICAgaWYgKGRlZXBFcXVhbChvcHRpb25zLCBleGlzdGluZ0FwcC5vcHRpb25zKSAmJlxyXG4gICAgICAgICAgICBkZWVwRXF1YWwoY29uZmlnLCBleGlzdGluZ0FwcC5jb25maWcpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBleGlzdGluZ0FwcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwiZHVwbGljYXRlLWFwcFwiIC8qIERVUExJQ0FURV9BUFAgKi8sIHsgYXBwTmFtZTogbmFtZSB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCBjb250YWluZXIgPSBuZXcgQ29tcG9uZW50Q29udGFpbmVyKG5hbWUpO1xyXG4gICAgZm9yIChjb25zdCBjb21wb25lbnQgb2YgX2NvbXBvbmVudHMudmFsdWVzKCkpIHtcclxuICAgICAgICBjb250YWluZXIuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICBjb25zdCBuZXdBcHAgPSBuZXcgRmlyZWJhc2VBcHBJbXBsKG9wdGlvbnMsIGNvbmZpZywgY29udGFpbmVyKTtcclxuICAgIF9hcHBzLnNldChuYW1lLCBuZXdBcHApO1xyXG4gICAgcmV0dXJuIG5ld0FwcDtcclxufVxyXG4vKipcclxuICogUmV0cmlldmVzIGEge0BsaW5rIEBmaXJlYmFzZS9hcHAjRmlyZWJhc2VBcHB9IGluc3RhbmNlLlxyXG4gKlxyXG4gKiBXaGVuIGNhbGxlZCB3aXRoIG5vIGFyZ3VtZW50cywgdGhlIGRlZmF1bHQgYXBwIGlzIHJldHVybmVkLiBXaGVuIGFuIGFwcCBuYW1lXHJcbiAqIGlzIHByb3ZpZGVkLCB0aGUgYXBwIGNvcnJlc3BvbmRpbmcgdG8gdGhhdCBuYW1lIGlzIHJldHVybmVkLlxyXG4gKlxyXG4gKiBBbiBleGNlcHRpb24gaXMgdGhyb3duIGlmIHRoZSBhcHAgYmVpbmcgcmV0cmlldmVkIGhhcyBub3QgeWV0IGJlZW5cclxuICogaW5pdGlhbGl6ZWQuXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYGphdmFzY3JpcHRcclxuICogLy8gUmV0dXJuIHRoZSBkZWZhdWx0IGFwcFxyXG4gKiBjb25zdCBhcHAgPSBnZXRBcHAoKTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBleGFtcGxlXHJcbiAqIGBgYGphdmFzY3JpcHRcclxuICogLy8gUmV0dXJuIGEgbmFtZWQgYXBwXHJcbiAqIGNvbnN0IG90aGVyQXBwID0gZ2V0QXBwKFwib3RoZXJBcHBcIik7XHJcbiAqIGBgYFxyXG4gKlxyXG4gKiBAcGFyYW0gbmFtZSAtIE9wdGlvbmFsIG5hbWUgb2YgdGhlIGFwcCB0byByZXR1cm4uIElmIG5vIG5hbWUgaXNcclxuICogICBwcm92aWRlZCwgdGhlIGRlZmF1bHQgaXMgYFwiW0RFRkFVTFRdXCJgLlxyXG4gKlxyXG4gKiBAcmV0dXJucyBUaGUgYXBwIGNvcnJlc3BvbmRpbmcgdG8gdGhlIHByb3ZpZGVkIGFwcCBuYW1lLlxyXG4gKiAgIElmIG5vIGFwcCBuYW1lIGlzIHByb3ZpZGVkLCB0aGUgZGVmYXVsdCBhcHAgaXMgcmV0dXJuZWQuXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmZ1bmN0aW9uIGdldEFwcChuYW1lID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XHJcbiAgICBjb25zdCBhcHAgPSBfYXBwcy5nZXQobmFtZSk7XHJcbiAgICBpZiAoIWFwcCkge1xyXG4gICAgICAgIHRocm93IEVSUk9SX0ZBQ1RPUlkuY3JlYXRlKFwibm8tYXBwXCIgLyogTk9fQVBQICovLCB7IGFwcE5hbWU6IG5hbWUgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXBwO1xyXG59XHJcbi8qKlxyXG4gKiBBIChyZWFkLW9ubHkpIGFycmF5IG9mIGFsbCBpbml0aWFsaXplZCBhcHBzLlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiBnZXRBcHBzKCkge1xyXG4gICAgcmV0dXJuIEFycmF5LmZyb20oX2FwcHMudmFsdWVzKCkpO1xyXG59XHJcbi8qKlxyXG4gKiBSZW5kZXJzIHRoaXMgYXBwIHVudXNhYmxlIGFuZCBmcmVlcyB0aGUgcmVzb3VyY2VzIG9mIGFsbCBhc3NvY2lhdGVkXHJcbiAqIHNlcnZpY2VzLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiBgYGBqYXZhc2NyaXB0XHJcbiAqIGRlbGV0ZUFwcChhcHApXHJcbiAqICAgLnRoZW4oZnVuY3Rpb24oKSB7XHJcbiAqICAgICBjb25zb2xlLmxvZyhcIkFwcCBkZWxldGVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICogICB9KVxyXG4gKiAgIC5jYXRjaChmdW5jdGlvbihlcnJvcikge1xyXG4gKiAgICAgY29uc29sZS5sb2coXCJFcnJvciBkZWxldGluZyBhcHA6XCIsIGVycm9yKTtcclxuICogICB9KTtcclxuICogYGBgXHJcbiAqXHJcbiAqIEBwdWJsaWNcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUFwcChhcHApIHtcclxuICAgIGNvbnN0IG5hbWUgPSBhcHAubmFtZTtcclxuICAgIGlmIChfYXBwcy5oYXMobmFtZSkpIHtcclxuICAgICAgICBfYXBwcy5kZWxldGUobmFtZSk7XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoYXBwLmNvbnRhaW5lclxyXG4gICAgICAgICAgICAuZ2V0UHJvdmlkZXJzKClcclxuICAgICAgICAgICAgLm1hcChwcm92aWRlciA9PiBwcm92aWRlci5kZWxldGUoKSkpO1xyXG4gICAgICAgIGFwcC5pc0RlbGV0ZWQgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbi8qKlxyXG4gKiBSZWdpc3RlcnMgYSBsaWJyYXJ5J3MgbmFtZSBhbmQgdmVyc2lvbiBmb3IgcGxhdGZvcm0gbG9nZ2luZyBwdXJwb3Nlcy5cclxuICogQHBhcmFtIGxpYnJhcnkgLSBOYW1lIG9mIDFwIG9yIDNwIGxpYnJhcnkgKGUuZy4gZmlyZXN0b3JlLCBhbmd1bGFyZmlyZSlcclxuICogQHBhcmFtIHZlcnNpb24gLSBDdXJyZW50IHZlcnNpb24gb2YgdGhhdCBsaWJyYXJ5LlxyXG4gKiBAcGFyYW0gdmFyaWFudCAtIEJ1bmRsZSB2YXJpYW50LCBlLmcuLCBub2RlLCBybiwgZXRjLlxyXG4gKlxyXG4gKiBAcHVibGljXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlclZlcnNpb24obGlicmFyeUtleU9yTmFtZSwgdmVyc2lvbiwgdmFyaWFudCkge1xyXG4gICAgdmFyIF9hO1xyXG4gICAgLy8gVE9ETzogV2UgY2FuIHVzZSB0aGlzIGNoZWNrIHRvIHdoaXRlbGlzdCBzdHJpbmdzIHdoZW4vaWYgd2Ugc2V0IHVwXHJcbiAgICAvLyBhIGdvb2Qgd2hpdGVsaXN0IHN5c3RlbS5cclxuICAgIGxldCBsaWJyYXJ5ID0gKF9hID0gUExBVEZPUk1fTE9HX1NUUklOR1tsaWJyYXJ5S2V5T3JOYW1lXSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbGlicmFyeUtleU9yTmFtZTtcclxuICAgIGlmICh2YXJpYW50KSB7XHJcbiAgICAgICAgbGlicmFyeSArPSBgLSR7dmFyaWFudH1gO1xyXG4gICAgfVxyXG4gICAgY29uc3QgbGlicmFyeU1pc21hdGNoID0gbGlicmFyeS5tYXRjaCgvXFxzfFxcLy8pO1xyXG4gICAgY29uc3QgdmVyc2lvbk1pc21hdGNoID0gdmVyc2lvbi5tYXRjaCgvXFxzfFxcLy8pO1xyXG4gICAgaWYgKGxpYnJhcnlNaXNtYXRjaCB8fCB2ZXJzaW9uTWlzbWF0Y2gpIHtcclxuICAgICAgICBjb25zdCB3YXJuaW5nID0gW1xyXG4gICAgICAgICAgICBgVW5hYmxlIHRvIHJlZ2lzdGVyIGxpYnJhcnkgXCIke2xpYnJhcnl9XCIgd2l0aCB2ZXJzaW9uIFwiJHt2ZXJzaW9ufVwiOmBcclxuICAgICAgICBdO1xyXG4gICAgICAgIGlmIChsaWJyYXJ5TWlzbWF0Y2gpIHtcclxuICAgICAgICAgICAgd2FybmluZy5wdXNoKGBsaWJyYXJ5IG5hbWUgXCIke2xpYnJhcnl9XCIgY29udGFpbnMgaWxsZWdhbCBjaGFyYWN0ZXJzICh3aGl0ZXNwYWNlIG9yIFwiL1wiKWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobGlicmFyeU1pc21hdGNoICYmIHZlcnNpb25NaXNtYXRjaCkge1xyXG4gICAgICAgICAgICB3YXJuaW5nLnB1c2goJ2FuZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmVyc2lvbk1pc21hdGNoKSB7XHJcbiAgICAgICAgICAgIHdhcm5pbmcucHVzaChgdmVyc2lvbiBuYW1lIFwiJHt2ZXJzaW9ufVwiIGNvbnRhaW5zIGlsbGVnYWwgY2hhcmFjdGVycyAod2hpdGVzcGFjZSBvciBcIi9cIilgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9nZ2VyLndhcm4od2FybmluZy5qb2luKCcgJykpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIF9yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KGAke2xpYnJhcnl9LXZlcnNpb25gLCAoKSA9PiAoeyBsaWJyYXJ5LCB2ZXJzaW9uIH0pLCBcIlZFUlNJT05cIiAvKiBWRVJTSU9OICovKSk7XHJcbn1cclxuLyoqXHJcbiAqIFNldHMgbG9nIGhhbmRsZXIgZm9yIGFsbCBGaXJlYmFzZSBTREtzLlxyXG4gKiBAcGFyYW0gbG9nQ2FsbGJhY2sgLSBBbiBvcHRpb25hbCBjdXN0b20gbG9nIGhhbmRsZXIgdGhhdCBleGVjdXRlcyB1c2VyIGNvZGUgd2hlbmV2ZXJcclxuICogdGhlIEZpcmViYXNlIFNESyBtYWtlcyBhIGxvZ2dpbmcgY2FsbC5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gb25Mb2cobG9nQ2FsbGJhY2ssIG9wdGlvbnMpIHtcclxuICAgIGlmIChsb2dDYWxsYmFjayAhPT0gbnVsbCAmJiB0eXBlb2YgbG9nQ2FsbGJhY2sgIT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcImludmFsaWQtbG9nLWFyZ3VtZW50XCIgLyogSU5WQUxJRF9MT0dfQVJHVU1FTlQgKi8pO1xyXG4gICAgfVxyXG4gICAgc2V0VXNlckxvZ0hhbmRsZXIobG9nQ2FsbGJhY2ssIG9wdGlvbnMpO1xyXG59XHJcbi8qKlxyXG4gKiBTZXRzIGxvZyBsZXZlbCBmb3IgYWxsIEZpcmViYXNlIFNES3MuXHJcbiAqXHJcbiAqIEFsbCBvZiB0aGUgbG9nIHR5cGVzIGFib3ZlIHRoZSBjdXJyZW50IGxvZyBsZXZlbCBhcmUgY2FwdHVyZWQgKGkuZS4gaWZcclxuICogeW91IHNldCB0aGUgbG9nIGxldmVsIHRvIGBpbmZvYCwgZXJyb3JzIGFyZSBsb2dnZWQsIGJ1dCBgZGVidWdgIGFuZFxyXG4gKiBgdmVyYm9zZWAgbG9ncyBhcmUgbm90KS5cclxuICpcclxuICogQHB1YmxpY1xyXG4gKi9cclxuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobG9nTGV2ZWwpIHtcclxuICAgIHNldExvZ0xldmVsJDEobG9nTGV2ZWwpO1xyXG59XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAyMSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbmNvbnN0IERCX05BTUUgPSAnZmlyZWJhc2UtaGVhcnRiZWF0LWRhdGFiYXNlJztcclxuY29uc3QgREJfVkVSU0lPTiA9IDE7XHJcbmNvbnN0IFNUT1JFX05BTUUgPSAnZmlyZWJhc2UtaGVhcnRiZWF0LXN0b3JlJztcclxubGV0IGRiUHJvbWlzZSA9IG51bGw7XHJcbmZ1bmN0aW9uIGdldERiUHJvbWlzZSgpIHtcclxuICAgIGlmICghZGJQcm9taXNlKSB7XHJcbiAgICAgICAgZGJQcm9taXNlID0gb3BlbkRCKERCX05BTUUsIERCX1ZFUlNJT04sIHtcclxuICAgICAgICAgICAgdXBncmFkZTogKGRiLCBvbGRWZXJzaW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBXZSBkb24ndCB1c2UgJ2JyZWFrJyBpbiB0aGlzIHN3aXRjaCBzdGF0ZW1lbnQsIHRoZSBmYWxsLXRocm91Z2hcclxuICAgICAgICAgICAgICAgIC8vIGJlaGF2aW9yIGlzIHdoYXQgd2Ugd2FudCwgYmVjYXVzZSBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgdmVyc2lvbnMgYmV0d2VlblxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIG9sZCB2ZXJzaW9uIGFuZCB0aGUgY3VycmVudCB2ZXJzaW9uLCB3ZSB3YW50IEFMTCB0aGUgbWlncmF0aW9uc1xyXG4gICAgICAgICAgICAgICAgLy8gdGhhdCBjb3JyZXNwb25kIHRvIHRob3NlIHZlcnNpb25zIHRvIHJ1biwgbm90IG9ubHkgdGhlIGxhc3Qgb25lLlxyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGRlZmF1bHQtY2FzZVxyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChvbGRWZXJzaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYi5jcmVhdGVPYmplY3RTdG9yZShTVE9SRV9OQU1FKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLmNhdGNoKGUgPT4ge1xyXG4gICAgICAgICAgICB0aHJvdyBFUlJPUl9GQUNUT1JZLmNyZWF0ZShcInN0b3JhZ2Utb3BlblwiIC8qIFNUT1JBR0VfT1BFTiAqLywge1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxFcnJvck1lc3NhZ2U6IGUubWVzc2FnZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYlByb21pc2U7XHJcbn1cclxuYXN5bmMgZnVuY3Rpb24gcmVhZEhlYXJ0YmVhdHNGcm9tSW5kZXhlZERCKGFwcCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xyXG4gICAgICAgIHJldHVybiBkYlxyXG4gICAgICAgICAgICAudHJhbnNhY3Rpb24oU1RPUkVfTkFNRSlcclxuICAgICAgICAgICAgLm9iamVjdFN0b3JlKFNUT1JFX05BTUUpXHJcbiAgICAgICAgICAgIC5nZXQoY29tcHV0ZUtleShhcHApKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJzdG9yYWdlLWdldFwiIC8qIFNUT1JBR0VfR0VUICovLCB7XHJcbiAgICAgICAgICAgIG9yaWdpbmFsRXJyb3JNZXNzYWdlOiBlLm1lc3NhZ2VcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5hc3luYyBmdW5jdGlvbiB3cml0ZUhlYXJ0YmVhdHNUb0luZGV4ZWREQihhcHAsIGhlYXJ0YmVhdE9iamVjdCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYiA9IGF3YWl0IGdldERiUHJvbWlzZSgpO1xyXG4gICAgICAgIGNvbnN0IHR4ID0gZGIudHJhbnNhY3Rpb24oU1RPUkVfTkFNRSwgJ3JlYWR3cml0ZScpO1xyXG4gICAgICAgIGNvbnN0IG9iamVjdFN0b3JlID0gdHgub2JqZWN0U3RvcmUoU1RPUkVfTkFNRSk7XHJcbiAgICAgICAgYXdhaXQgb2JqZWN0U3RvcmUucHV0KGhlYXJ0YmVhdE9iamVjdCwgY29tcHV0ZUtleShhcHApKTtcclxuICAgICAgICByZXR1cm4gdHguZG9uZTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgdGhyb3cgRVJST1JfRkFDVE9SWS5jcmVhdGUoXCJzdG9yYWdlLXNldFwiIC8qIFNUT1JBR0VfV1JJVEUgKi8sIHtcclxuICAgICAgICAgICAgb3JpZ2luYWxFcnJvck1lc3NhZ2U6IGUubWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGNvbXB1dGVLZXkoYXBwKSB7XHJcbiAgICByZXR1cm4gYCR7YXBwLm5hbWV9ISR7YXBwLm9wdGlvbnMuYXBwSWR9YDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMjEgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5jb25zdCBNQVhfSEVBREVSX0JZVEVTID0gMTAyNDtcclxuLy8gMzAgZGF5c1xyXG5jb25zdCBTVE9SRURfSEVBUlRCRUFUX1JFVEVOVElPTl9NQVhfTUlMTElTID0gMzAgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xyXG5jbGFzcyBIZWFydGJlYXRTZXJ2aWNlSW1wbCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBJbi1tZW1vcnkgY2FjaGUgZm9yIGhlYXJ0YmVhdHMsIHVzZWQgYnkgZ2V0SGVhcnRiZWF0c0hlYWRlcigpIHRvIGdlbmVyYXRlXHJcbiAgICAgICAgICogdGhlIGhlYWRlciBzdHJpbmcuXHJcbiAgICAgICAgICogU3RvcmVzIG9uZSByZWNvcmQgcGVyIGRhdGUuIFRoaXMgd2lsbCBiZSBjb25zb2xpZGF0ZWQgaW50byB0aGUgc3RhbmRhcmRcclxuICAgICAgICAgKiBmb3JtYXQgb2Ygb25lIHJlY29yZCBwZXIgdXNlciBhZ2VudCBzdHJpbmcgYmVmb3JlIGJlaW5nIHNlbnQgYXMgYSBoZWFkZXIuXHJcbiAgICAgICAgICogUG9wdWxhdGVkIGZyb20gaW5kZXhlZERCIHdoZW4gdGhlIGNvbnRyb2xsZXIgaXMgaW5zdGFudGlhdGVkIGFuZCBzaG91bGRcclxuICAgICAgICAgKiBiZSBrZXB0IGluIHN5bmMgd2l0aCBpbmRleGVkREIuXHJcbiAgICAgICAgICogTGVhdmUgcHVibGljIGZvciBlYXNpZXIgdGVzdGluZy5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUgPSBudWxsO1xyXG4gICAgICAgIGNvbnN0IGFwcCA9IHRoaXMuY29udGFpbmVyLmdldFByb3ZpZGVyKCdhcHAnKS5nZXRJbW1lZGlhdGUoKTtcclxuICAgICAgICB0aGlzLl9zdG9yYWdlID0gbmV3IEhlYXJ0YmVhdFN0b3JhZ2VJbXBsKGFwcCk7XHJcbiAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlUHJvbWlzZSA9IHRoaXMuX3N0b3JhZ2UucmVhZCgpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlID0gcmVzdWx0O1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBDYWxsZWQgdG8gcmVwb3J0IGEgaGVhcnRiZWF0LiBUaGUgZnVuY3Rpb24gd2lsbCBnZW5lcmF0ZVxyXG4gICAgICogYSBIZWFydGJlYXRzQnlVc2VyQWdlbnQgb2JqZWN0LCB1cGRhdGUgaGVhcnRiZWF0c0NhY2hlLCBhbmQgcGVyc2lzdCBpdFxyXG4gICAgICogdG8gSW5kZXhlZERCLlxyXG4gICAgICogTm90ZSB0aGF0IHdlIG9ubHkgc3RvcmUgb25lIGhlYXJ0YmVhdCBwZXIgZGF5LiBTbyBpZiBhIGhlYXJ0YmVhdCBmb3IgdG9kYXkgaXNcclxuICAgICAqIGFscmVhZHkgbG9nZ2VkLCBzdWJzZXF1ZW50IGNhbGxzIHRvIHRoaXMgZnVuY3Rpb24gaW4gdGhlIHNhbWUgZGF5IHdpbGwgYmUgaWdub3JlZC5cclxuICAgICAqL1xyXG4gICAgYXN5bmMgdHJpZ2dlckhlYXJ0YmVhdCgpIHtcclxuICAgICAgICBjb25zdCBwbGF0Zm9ybUxvZ2dlciA9IHRoaXMuY29udGFpbmVyXHJcbiAgICAgICAgICAgIC5nZXRQcm92aWRlcigncGxhdGZvcm0tbG9nZ2VyJylcclxuICAgICAgICAgICAgLmdldEltbWVkaWF0ZSgpO1xyXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlIFwiRmlyZWJhc2UgdXNlciBhZ2VudFwiIHN0cmluZyBmcm9tIHRoZSBwbGF0Zm9ybSBsb2dnZXJcclxuICAgICAgICAvLyBzZXJ2aWNlLCBub3QgdGhlIGJyb3dzZXIgdXNlciBhZ2VudC5cclxuICAgICAgICBjb25zdCBhZ2VudCA9IHBsYXRmb3JtTG9nZ2VyLmdldFBsYXRmb3JtSW5mb1N0cmluZygpO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBnZXRVVENEYXRlU3RyaW5nKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUgPSBhd2FpdCB0aGlzLl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBEbyBub3Qgc3RvcmUgYSBoZWFydGJlYXQgaWYgb25lIGlzIGFscmVhZHkgc3RvcmVkIGZvciB0aGlzIGRheVxyXG4gICAgICAgIC8vIG9yIGlmIGEgaGVhZGVyIGhhcyBhbHJlYWR5IGJlZW4gc2VudCB0b2RheS5cclxuICAgICAgICBpZiAodGhpcy5faGVhcnRiZWF0c0NhY2hlLmxhc3RTZW50SGVhcnRiZWF0RGF0ZSA9PT0gZGF0ZSB8fFxyXG4gICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5zb21lKHNpbmdsZURhdGVIZWFydGJlYXQgPT4gc2luZ2xlRGF0ZUhlYXJ0YmVhdC5kYXRlID09PSBkYXRlKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBUaGVyZSBpcyBubyBlbnRyeSBmb3IgdGhpcyBkYXRlLiBDcmVhdGUgb25lLlxyXG4gICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5wdXNoKHsgZGF0ZSwgYWdlbnQgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFJlbW92ZSBlbnRyaWVzIG9sZGVyIHRoYW4gMzAgZGF5cy5cclxuICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cyA9IHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzLmZpbHRlcihzaW5nbGVEYXRlSGVhcnRiZWF0ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaGJUaW1lc3RhbXAgPSBuZXcgRGF0ZShzaW5nbGVEYXRlSGVhcnRiZWF0LmRhdGUpLnZhbHVlT2YoKTtcclxuICAgICAgICAgICAgY29uc3Qgbm93ID0gRGF0ZS5ub3coKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5vdyAtIGhiVGltZXN0YW1wIDw9IFNUT1JFRF9IRUFSVEJFQVRfUkVURU5USU9OX01BWF9NSUxMSVM7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0b3JhZ2Uub3ZlcndyaXRlKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYSBiYXNlNjQgZW5jb2RlZCBzdHJpbmcgd2hpY2ggY2FuIGJlIGF0dGFjaGVkIHRvIHRoZSBoZWFydGJlYXQtc3BlY2lmaWMgaGVhZGVyIGRpcmVjdGx5LlxyXG4gICAgICogSXQgYWxzbyBjbGVhcnMgYWxsIGhlYXJ0YmVhdHMgZnJvbSBtZW1vcnkgYXMgd2VsbCBhcyBpbiBJbmRleGVkREIuXHJcbiAgICAgKlxyXG4gICAgICogTk9URTogQ29uc3VtaW5nIHByb2R1Y3QgU0RLcyBzaG91bGQgbm90IHNlbmQgdGhlIGhlYWRlciBpZiB0aGlzIG1ldGhvZFxyXG4gICAgICogcmV0dXJucyBhbiBlbXB0eSBzdHJpbmcuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIGdldEhlYXJ0YmVhdHNIZWFkZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLl9oZWFydGJlYXRzQ2FjaGVQcm9taXNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiBpdCdzIHN0aWxsIG51bGwgb3IgdGhlIGFycmF5IGlzIGVtcHR5LCB0aGVyZSBpcyBubyBkYXRhIHRvIHNlbmQuXHJcbiAgICAgICAgaWYgKHRoaXMuX2hlYXJ0YmVhdHNDYWNoZSA9PT0gbnVsbCB8fFxyXG4gICAgICAgICAgICB0aGlzLl9oZWFydGJlYXRzQ2FjaGUuaGVhcnRiZWF0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBkYXRlID0gZ2V0VVRDRGF0ZVN0cmluZygpO1xyXG4gICAgICAgIC8vIEV4dHJhY3QgYXMgbWFueSBoZWFydGJlYXRzIGZyb20gdGhlIGNhY2hlIGFzIHdpbGwgZml0IHVuZGVyIHRoZSBzaXplIGxpbWl0LlxyXG4gICAgICAgIGNvbnN0IHsgaGVhcnRiZWF0c1RvU2VuZCwgdW5zZW50RW50cmllcyB9ID0gZXh0cmFjdEhlYXJ0YmVhdHNGb3JIZWFkZXIodGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMpO1xyXG4gICAgICAgIGNvbnN0IGhlYWRlclN0cmluZyA9IGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKEpTT04uc3RyaW5naWZ5KHsgdmVyc2lvbjogMiwgaGVhcnRiZWF0czogaGVhcnRiZWF0c1RvU2VuZCB9KSk7XHJcbiAgICAgICAgLy8gU3RvcmUgbGFzdCBzZW50IGRhdGUgdG8gcHJldmVudCBhbm90aGVyIGJlaW5nIGxvZ2dlZC9zZW50IGZvciB0aGUgc2FtZSBkYXkuXHJcbiAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmxhc3RTZW50SGVhcnRiZWF0RGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgaWYgKHVuc2VudEVudHJpZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBTdG9yZSBhbnkgdW5zZW50IGVudHJpZXMgaWYgdGhleSBleGlzdC5cclxuICAgICAgICAgICAgdGhpcy5faGVhcnRiZWF0c0NhY2hlLmhlYXJ0YmVhdHMgPSB1bnNlbnRFbnRyaWVzO1xyXG4gICAgICAgICAgICAvLyBUaGlzIHNlZW1zIG1vcmUgbGlrZWx5IHRoYW4gZW1wdHlpbmcgdGhlIGFycmF5IChiZWxvdykgdG8gbGVhZCB0byBzb21lIG9kZCBzdGF0ZVxyXG4gICAgICAgICAgICAvLyBzaW5jZSB0aGUgY2FjaGUgaXNuJ3QgZW1wdHkgYW5kIHRoaXMgd2lsbCBiZSBjYWxsZWQgYWdhaW4gb24gdGhlIG5leHQgcmVxdWVzdCxcclxuICAgICAgICAgICAgLy8gYW5kIGlzIHByb2JhYmx5IHNhZmVzdCBpZiB3ZSBhd2FpdCBpdC5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5fc3RvcmFnZS5vdmVyd3JpdGUodGhpcy5faGVhcnRiZWF0c0NhY2hlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2hlYXJ0YmVhdHNDYWNoZS5oZWFydGJlYXRzID0gW107XHJcbiAgICAgICAgICAgIC8vIERvIG5vdCB3YWl0IGZvciB0aGlzLCB0byByZWR1Y2UgbGF0ZW5jeS5cclxuICAgICAgICAgICAgdm9pZCB0aGlzLl9zdG9yYWdlLm92ZXJ3cml0ZSh0aGlzLl9oZWFydGJlYXRzQ2FjaGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVhZGVyU3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGdldFVUQ0RhdGVTdHJpbmcoKSB7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XHJcbiAgICAvLyBSZXR1cm5zIGRhdGUgZm9ybWF0ICdZWVlZLU1NLUREJ1xyXG4gICAgcmV0dXJuIHRvZGF5LnRvSVNPU3RyaW5nKCkuc3Vic3RyaW5nKDAsIDEwKTtcclxufVxyXG5mdW5jdGlvbiBleHRyYWN0SGVhcnRiZWF0c0ZvckhlYWRlcihoZWFydGJlYXRzQ2FjaGUsIG1heFNpemUgPSBNQVhfSEVBREVSX0JZVEVTKSB7XHJcbiAgICAvLyBIZWFydGJlYXRzIGdyb3VwZWQgYnkgdXNlciBhZ2VudCBpbiB0aGUgc3RhbmRhcmQgZm9ybWF0IHRvIGJlIHNlbnQgaW5cclxuICAgIC8vIHRoZSBoZWFkZXIuXHJcbiAgICBjb25zdCBoZWFydGJlYXRzVG9TZW5kID0gW107XHJcbiAgICAvLyBTaW5nbGUgZGF0ZSBmb3JtYXQgaGVhcnRiZWF0cyB0aGF0IGFyZSBub3Qgc2VudC5cclxuICAgIGxldCB1bnNlbnRFbnRyaWVzID0gaGVhcnRiZWF0c0NhY2hlLnNsaWNlKCk7XHJcbiAgICBmb3IgKGNvbnN0IHNpbmdsZURhdGVIZWFydGJlYXQgb2YgaGVhcnRiZWF0c0NhY2hlKSB7XHJcbiAgICAgICAgLy8gTG9vayBmb3IgYW4gZXhpc3RpbmcgZW50cnkgd2l0aCB0aGUgc2FtZSB1c2VyIGFnZW50LlxyXG4gICAgICAgIGNvbnN0IGhlYXJ0YmVhdEVudHJ5ID0gaGVhcnRiZWF0c1RvU2VuZC5maW5kKGhiID0+IGhiLmFnZW50ID09PSBzaW5nbGVEYXRlSGVhcnRiZWF0LmFnZW50KTtcclxuICAgICAgICBpZiAoIWhlYXJ0YmVhdEVudHJ5KSB7XHJcbiAgICAgICAgICAgIC8vIElmIG5vIGVudHJ5IGZvciB0aGlzIHVzZXIgYWdlbnQgZXhpc3RzLCBjcmVhdGUgb25lLlxyXG4gICAgICAgICAgICBoZWFydGJlYXRzVG9TZW5kLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgYWdlbnQ6IHNpbmdsZURhdGVIZWFydGJlYXQuYWdlbnQsXHJcbiAgICAgICAgICAgICAgICBkYXRlczogW3NpbmdsZURhdGVIZWFydGJlYXQuZGF0ZV1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmIChjb3VudEJ5dGVzKGhlYXJ0YmVhdHNUb1NlbmQpID4gbWF4U2l6ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGhlYWRlciB3b3VsZCBleGNlZWQgbWF4IHNpemUsIHJlbW92ZSB0aGUgYWRkZWQgaGVhcnRiZWF0XHJcbiAgICAgICAgICAgICAgICAvLyBlbnRyeSBhbmQgc3RvcCBhZGRpbmcgdG8gdGhlIGhlYWRlci5cclxuICAgICAgICAgICAgICAgIGhlYXJ0YmVhdHNUb1NlbmQucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaGVhcnRiZWF0RW50cnkuZGF0ZXMucHVzaChzaW5nbGVEYXRlSGVhcnRiZWF0LmRhdGUpO1xyXG4gICAgICAgICAgICAvLyBJZiB0aGUgaGVhZGVyIHdvdWxkIGV4Y2VlZCBtYXggc2l6ZSwgcmVtb3ZlIHRoZSBhZGRlZCBkYXRlXHJcbiAgICAgICAgICAgIC8vIGFuZCBzdG9wIGFkZGluZyB0byB0aGUgaGVhZGVyLlxyXG4gICAgICAgICAgICBpZiAoY291bnRCeXRlcyhoZWFydGJlYXRzVG9TZW5kKSA+IG1heFNpemUpIHtcclxuICAgICAgICAgICAgICAgIGhlYXJ0YmVhdEVudHJ5LmRhdGVzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUG9wIHVuc2VudCBlbnRyeSBmcm9tIHF1ZXVlLiAoU2tpcHBlZCBpZiBhZGRpbmcgdGhlIGVudHJ5IGV4Y2VlZGVkXHJcbiAgICAgICAgLy8gcXVvdGEgYW5kIHRoZSBsb29wIGJyZWFrcyBlYXJseS4pXHJcbiAgICAgICAgdW5zZW50RW50cmllcyA9IHVuc2VudEVudHJpZXMuc2xpY2UoMSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGhlYXJ0YmVhdHNUb1NlbmQsXHJcbiAgICAgICAgdW5zZW50RW50cmllc1xyXG4gICAgfTtcclxufVxyXG5jbGFzcyBIZWFydGJlYXRTdG9yYWdlSW1wbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihhcHApIHtcclxuICAgICAgICB0aGlzLmFwcCA9IGFwcDtcclxuICAgICAgICB0aGlzLl9jYW5Vc2VJbmRleGVkREJQcm9taXNlID0gdGhpcy5ydW5JbmRleGVkREJFbnZpcm9ubWVudENoZWNrKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBydW5JbmRleGVkREJFbnZpcm9ubWVudENoZWNrKCkge1xyXG4gICAgICAgIGlmICghaXNJbmRleGVkREJBdmFpbGFibGUoKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdmFsaWRhdGVJbmRleGVkREJPcGVuYWJsZSgpXHJcbiAgICAgICAgICAgICAgICAudGhlbigoKSA9PiB0cnVlKVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKCgpID0+IGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIFJlYWQgYWxsIGhlYXJ0YmVhdHMuXHJcbiAgICAgKi9cclxuICAgIGFzeW5jIHJlYWQoKSB7XHJcbiAgICAgICAgY29uc3QgY2FuVXNlSW5kZXhlZERCID0gYXdhaXQgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZTtcclxuICAgICAgICBpZiAoIWNhblVzZUluZGV4ZWREQikge1xyXG4gICAgICAgICAgICByZXR1cm4geyBoZWFydGJlYXRzOiBbXSB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgaWRiSGVhcnRiZWF0T2JqZWN0ID0gYXdhaXQgcmVhZEhlYXJ0YmVhdHNGcm9tSW5kZXhlZERCKHRoaXMuYXBwKTtcclxuICAgICAgICAgICAgcmV0dXJuIGlkYkhlYXJ0YmVhdE9iamVjdCB8fCB7IGhlYXJ0YmVhdHM6IFtdIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gb3ZlcndyaXRlIHRoZSBzdG9yYWdlIHdpdGggdGhlIHByb3ZpZGVkIGhlYXJ0YmVhdHNcclxuICAgIGFzeW5jIG92ZXJ3cml0ZShoZWFydGJlYXRzT2JqZWN0KSB7XHJcbiAgICAgICAgdmFyIF9hO1xyXG4gICAgICAgIGNvbnN0IGNhblVzZUluZGV4ZWREQiA9IGF3YWl0IHRoaXMuX2NhblVzZUluZGV4ZWREQlByb21pc2U7XHJcbiAgICAgICAgaWYgKCFjYW5Vc2VJbmRleGVkREIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0ID0gYXdhaXQgdGhpcy5yZWFkKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB3cml0ZUhlYXJ0YmVhdHNUb0luZGV4ZWREQih0aGlzLmFwcCwge1xyXG4gICAgICAgICAgICAgICAgbGFzdFNlbnRIZWFydGJlYXREYXRlOiAoX2EgPSBoZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZXhpc3RpbmdIZWFydGJlYXRzT2JqZWN0Lmxhc3RTZW50SGVhcnRiZWF0RGF0ZSxcclxuICAgICAgICAgICAgICAgIGhlYXJ0YmVhdHM6IGhlYXJ0YmVhdHNPYmplY3QuaGVhcnRiZWF0c1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBhZGQgaGVhcnRiZWF0c1xyXG4gICAgYXN5bmMgYWRkKGhlYXJ0YmVhdHNPYmplY3QpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgY29uc3QgY2FuVXNlSW5kZXhlZERCID0gYXdhaXQgdGhpcy5fY2FuVXNlSW5kZXhlZERCUHJvbWlzZTtcclxuICAgICAgICBpZiAoIWNhblVzZUluZGV4ZWREQikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QgPSBhd2FpdCB0aGlzLnJlYWQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHdyaXRlSGVhcnRiZWF0c1RvSW5kZXhlZERCKHRoaXMuYXBwLCB7XHJcbiAgICAgICAgICAgICAgICBsYXN0U2VudEhlYXJ0YmVhdERhdGU6IChfYSA9IGhlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBleGlzdGluZ0hlYXJ0YmVhdHNPYmplY3QubGFzdFNlbnRIZWFydGJlYXREYXRlLFxyXG4gICAgICAgICAgICAgICAgaGVhcnRiZWF0czogW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLmV4aXN0aW5nSGVhcnRiZWF0c09iamVjdC5oZWFydGJlYXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLmhlYXJ0YmVhdHNPYmplY3QuaGVhcnRiZWF0c1xyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLyoqXHJcbiAqIENhbGN1bGF0ZSBieXRlcyBvZiBhIEhlYXJ0YmVhdHNCeVVzZXJBZ2VudCBhcnJheSBhZnRlciBiZWluZyB3cmFwcGVkXHJcbiAqIGluIGEgcGxhdGZvcm0gbG9nZ2luZyBoZWFkZXIgSlNPTiBvYmplY3QsIHN0cmluZ2lmaWVkLCBhbmQgY29udmVydGVkXHJcbiAqIHRvIGJhc2UgNjQuXHJcbiAqL1xyXG5mdW5jdGlvbiBjb3VudEJ5dGVzKGhlYXJ0YmVhdHNDYWNoZSkge1xyXG4gICAgLy8gYmFzZTY0IGhhcyBhIHJlc3RyaWN0ZWQgc2V0IG9mIGNoYXJhY3RlcnMsIGFsbCBvZiB3aGljaCBzaG91bGQgYmUgMSBieXRlLlxyXG4gICAgcmV0dXJuIGJhc2U2NHVybEVuY29kZVdpdGhvdXRQYWRkaW5nKFxyXG4gICAgLy8gaGVhcnRiZWF0c0NhY2hlIHdyYXBwZXIgcHJvcGVydGllc1xyXG4gICAgSlNPTi5zdHJpbmdpZnkoeyB2ZXJzaW9uOiAyLCBoZWFydGJlYXRzOiBoZWFydGJlYXRzQ2FjaGUgfSkpLmxlbmd0aDtcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlckNvcmVDb21wb25lbnRzKHZhcmlhbnQpIHtcclxuICAgIF9yZWdpc3RlckNvbXBvbmVudChuZXcgQ29tcG9uZW50KCdwbGF0Zm9ybS1sb2dnZXInLCBjb250YWluZXIgPT4gbmV3IFBsYXRmb3JtTG9nZ2VyU2VydmljZUltcGwoY29udGFpbmVyKSwgXCJQUklWQVRFXCIgLyogUFJJVkFURSAqLykpO1xyXG4gICAgX3JlZ2lzdGVyQ29tcG9uZW50KG5ldyBDb21wb25lbnQoJ2hlYXJ0YmVhdCcsIGNvbnRhaW5lciA9PiBuZXcgSGVhcnRiZWF0U2VydmljZUltcGwoY29udGFpbmVyKSwgXCJQUklWQVRFXCIgLyogUFJJVkFURSAqLykpO1xyXG4gICAgLy8gUmVnaXN0ZXIgYGFwcGAgcGFja2FnZS5cclxuICAgIHJlZ2lzdGVyVmVyc2lvbihuYW1lJG8sIHZlcnNpb24kMSwgdmFyaWFudCk7XHJcbiAgICAvLyBCVUlMRF9UQVJHRVQgd2lsbCBiZSByZXBsYWNlZCBieSB2YWx1ZXMgbGlrZSBlc201LCBlc20yMDE3LCBjanM1LCBldGMgZHVyaW5nIHRoZSBjb21waWxhdGlvblxyXG4gICAgcmVnaXN0ZXJWZXJzaW9uKG5hbWUkbywgdmVyc2lvbiQxLCAnZXNtMjAxNycpO1xyXG4gICAgLy8gUmVnaXN0ZXIgcGxhdGZvcm0gU0RLIGlkZW50aWZpZXIgKG5vIHZlcnNpb24pLlxyXG4gICAgcmVnaXN0ZXJWZXJzaW9uKCdmaXJlLWpzJywgJycpO1xyXG59XG5cbi8qKlxyXG4gKiBGaXJlYmFzZSBBcHBcclxuICpcclxuICogQHJlbWFya3MgVGhpcyBwYWNrYWdlIGNvb3JkaW5hdGVzIHRoZSBjb21tdW5pY2F0aW9uIGJldHdlZW4gdGhlIGRpZmZlcmVudCBGaXJlYmFzZSBjb21wb25lbnRzXHJcbiAqIEBwYWNrYWdlRG9jdW1lbnRhdGlvblxyXG4gKi9cclxucmVnaXN0ZXJDb3JlQ29tcG9uZW50cygnJyk7XG5cbmV4cG9ydCB7IFNES19WRVJTSU9OLCBERUZBVUxUX0VOVFJZX05BTUUgYXMgX0RFRkFVTFRfRU5UUllfTkFNRSwgX2FkZENvbXBvbmVudCwgX2FkZE9yT3ZlcndyaXRlQ29tcG9uZW50LCBfYXBwcywgX2NsZWFyQ29tcG9uZW50cywgX2NvbXBvbmVudHMsIF9nZXRQcm92aWRlciwgX3JlZ2lzdGVyQ29tcG9uZW50LCBfcmVtb3ZlU2VydmljZUluc3RhbmNlLCBkZWxldGVBcHAsIGdldEFwcCwgZ2V0QXBwcywgaW5pdGlhbGl6ZUFwcCwgb25Mb2csIHJlZ2lzdGVyVmVyc2lvbiwgc2V0TG9nTGV2ZWwgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbTIwMTcuanMubWFwXG4iLCJpbXBvcnQgeyBEZWZlcnJlZCB9IGZyb20gJ0BmaXJlYmFzZS91dGlsJztcblxuLyoqXHJcbiAqIENvbXBvbmVudCBmb3Igc2VydmljZSBuYW1lIFQsIGUuZy4gYGF1dGhgLCBgYXV0aC1pbnRlcm5hbGBcclxuICovXHJcbmNsYXNzIENvbXBvbmVudCB7XHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBUaGUgcHVibGljIHNlcnZpY2UgbmFtZSwgZS5nLiBhcHAsIGF1dGgsIGZpcmVzdG9yZSwgZGF0YWJhc2VcclxuICAgICAqIEBwYXJhbSBpbnN0YW5jZUZhY3RvcnkgU2VydmljZSBmYWN0b3J5IHJlc3BvbnNpYmxlIGZvciBjcmVhdGluZyB0aGUgcHVibGljIGludGVyZmFjZVxyXG4gICAgICogQHBhcmFtIHR5cGUgd2hldGhlciB0aGUgc2VydmljZSBwcm92aWRlZCBieSB0aGUgY29tcG9uZW50IGlzIHB1YmxpYyBvciBwcml2YXRlXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGluc3RhbmNlRmFjdG9yeSwgdHlwZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZUZhY3RvcnkgPSBpbnN0YW5jZUZhY3Rvcnk7XHJcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLm11bHRpcGxlSW5zdGFuY2VzID0gZmFsc2U7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogUHJvcGVydGllcyB0byBiZSBhZGRlZCB0byB0aGUgc2VydmljZSBuYW1lc3BhY2VcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLnNlcnZpY2VQcm9wcyA9IHt9O1xyXG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1vZGUgPSBcIkxBWllcIiAvKiBMQVpZICovO1xyXG4gICAgICAgIHRoaXMub25JbnN0YW5jZUNyZWF0ZWQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgc2V0SW5zdGFudGlhdGlvbk1vZGUobW9kZSkge1xyXG4gICAgICAgIHRoaXMuaW5zdGFudGlhdGlvbk1vZGUgPSBtb2RlO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2V0TXVsdGlwbGVJbnN0YW5jZXMobXVsdGlwbGVJbnN0YW5jZXMpIHtcclxuICAgICAgICB0aGlzLm11bHRpcGxlSW5zdGFuY2VzID0gbXVsdGlwbGVJbnN0YW5jZXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbiAgICBzZXRTZXJ2aWNlUHJvcHMocHJvcHMpIHtcclxuICAgICAgICB0aGlzLnNlcnZpY2VQcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgc2V0SW5zdGFuY2VDcmVhdGVkQ2FsbGJhY2soY2FsbGJhY2spIHtcclxuICAgICAgICB0aGlzLm9uSW5zdGFuY2VDcmVhdGVkID0gY2FsbGJhY2s7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcbn1cblxuLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCAyMDE5IEdvb2dsZSBMTENcclxuICpcclxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcclxuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxyXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcclxuICpcclxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuICpcclxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxyXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXHJcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxyXG4gKiBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZSBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kXHJcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4gKi9cclxuY29uc3QgREVGQVVMVF9FTlRSWV9OQU1FID0gJ1tERUZBVUxUXSc7XG5cbi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxOSBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBQcm92aWRlciBmb3IgaW5zdGFuY2UgZm9yIHNlcnZpY2UgbmFtZSBULCBlLmcuICdhdXRoJywgJ2F1dGgtaW50ZXJuYWwnXHJcbiAqIE5hbWVTZXJ2aWNlTWFwcGluZ1tUXSBpcyBhbiBhbGlhcyBmb3IgdGhlIHR5cGUgb2YgdGhlIGluc3RhbmNlXHJcbiAqL1xyXG5jbGFzcyBQcm92aWRlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCBjb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyID0gY29udGFpbmVyO1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkID0gbmV3IE1hcCgpO1xyXG4gICAgICAgIHRoaXMuaW5zdGFuY2VzT3B0aW9ucyA9IG5ldyBNYXAoKTtcclxuICAgICAgICB0aGlzLm9uSW5pdENhbGxiYWNrcyA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIGlkZW50aWZpZXIgQSBwcm92aWRlciBjYW4gcHJvdmlkZSBtdWxpdHBsZSBpbnN0YW5jZXMgb2YgYSBzZXJ2aWNlXHJcbiAgICAgKiBpZiB0aGlzLmNvbXBvbmVudC5tdWx0aXBsZUluc3RhbmNlcyBpcyB0cnVlLlxyXG4gICAgICovXHJcbiAgICBnZXQoaWRlbnRpZmllcikge1xyXG4gICAgICAgIC8vIGlmIG11bHRpcGxlSW5zdGFuY2VzIGlzIG5vdCBzdXBwb3J0ZWQsIHVzZSB0aGUgZGVmYXVsdCBuYW1lXHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoIXRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuaGFzKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkZWZlcnJlZCA9IG5ldyBEZWZlcnJlZCgpO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc0RlZmVycmVkLnNldChub3JtYWxpemVkSWRlbnRpZmllciwgZGVmZXJyZWQpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG91bGRBdXRvSW5pdGlhbGl6ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXplIHRoZSBzZXJ2aWNlIGlmIGl0IGNhbiBiZSBhdXRvLWluaXRpYWxpemVkXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVkSWRlbnRpZmllclxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbnN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZlcnJlZC5yZXNvbHZlKGluc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgdGhyb3dzIGFuIGV4Y2VwdGlvbiBkdXJpbmcgZ2V0KCksIGl0IHNob3VsZCBub3QgY2F1c2VcclxuICAgICAgICAgICAgICAgICAgICAvLyBhIGZhdGFsIGVycm9yLiBXZSBqdXN0IHJldHVybiB0aGUgdW5yZXNvbHZlZCBwcm9taXNlIGluIHRoaXMgY2FzZS5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpLnByb21pc2U7XHJcbiAgICB9XHJcbiAgICBnZXRJbW1lZGlhdGUob3B0aW9ucykge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICAvLyBpZiBtdWx0aXBsZUluc3RhbmNlcyBpcyBub3Qgc3VwcG9ydGVkLCB1c2UgdGhlIGRlZmF1bHQgbmFtZVxyXG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZWRJZGVudGlmaWVyID0gdGhpcy5ub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmlkZW50aWZpZXIpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbmFsID0gKF9hID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9wdGlvbmFsKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBmYWxzZTtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSB8fFxyXG4gICAgICAgICAgICB0aGlzLnNob3VsZEF1dG9Jbml0aWFsaXplKCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldE9ySW5pdGlhbGl6ZVNlcnZpY2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplZElkZW50aWZpZXJcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEluIGNhc2UgYSBjb21wb25lbnQgaXMgbm90IGluaXRpYWxpemVkIGFuZCBzaG91bGQvY2FuIG5vdCBiZSBhdXRvLWluaXRpYWxpemVkIGF0IHRoZSBtb21lbnQsIHJldHVybiBudWxsIGlmIHRoZSBvcHRpb25hbCBmbGFnIGlzIHNldCwgb3IgdGhyb3dcclxuICAgICAgICAgICAgaWYgKG9wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRocm93IEVycm9yKGBTZXJ2aWNlICR7dGhpcy5uYW1lfSBpcyBub3QgYXZhaWxhYmxlYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRDb21wb25lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50O1xyXG4gICAgfVxyXG4gICAgc2V0Q29tcG9uZW50KGNvbXBvbmVudCkge1xyXG4gICAgICAgIGlmIChjb21wb25lbnQubmFtZSAhPT0gdGhpcy5uYW1lKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBNaXNtYXRjaGluZyBDb21wb25lbnQgJHtjb21wb25lbnQubmFtZX0gZm9yIFByb3ZpZGVyICR7dGhpcy5uYW1lfS5gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDb21wb25lbnQgZm9yICR7dGhpcy5uYW1lfSBoYXMgYWxyZWFkeSBiZWVuIHByb3ZpZGVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50ID0gY29tcG9uZW50O1xyXG4gICAgICAgIC8vIHJldHVybiBlYXJseSB3aXRob3V0IGF0dGVtcHRpbmcgdG8gaW5pdGlhbGl6ZSB0aGUgY29tcG9uZW50IGlmIHRoZSBjb21wb25lbnQgcmVxdWlyZXMgZXhwbGljaXQgaW5pdGlhbGl6YXRpb24gKGNhbGxpbmcgYFByb3ZpZGVyLmluaXRpYWxpemUoKWApXHJcbiAgICAgICAgaWYgKCF0aGlzLnNob3VsZEF1dG9Jbml0aWFsaXplKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiB0aGUgc2VydmljZSBpcyBlYWdlciwgaW5pdGlhbGl6ZSB0aGUgZGVmYXVsdCBpbnN0YW5jZVxyXG4gICAgICAgIGlmIChpc0NvbXBvbmVudEVhZ2VyKGNvbXBvbmVudCkpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7IGluc3RhbmNlSWRlbnRpZmllcjogREVGQVVMVF9FTlRSWV9OQU1FIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHRoZSBpbnN0YW5jZSBmYWN0b3J5IGZvciBhbiBlYWdlciBDb21wb25lbnQgdGhyb3dzIGFuIGV4Y2VwdGlvbiBkdXJpbmcgdGhlIGVhZ2VyXHJcbiAgICAgICAgICAgICAgICAvLyBpbml0aWFsaXphdGlvbiwgaXQgc2hvdWxkIG5vdCBjYXVzZSBhIGZhdGFsIGVycm9yLlxyXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSW52ZXN0aWdhdGUgaWYgd2UgbmVlZCB0byBtYWtlIGl0IGNvbmZpZ3VyYWJsZSwgYmVjYXVzZSBzb21lIGNvbXBvbmVudCBtYXkgd2FudCB0byBjYXVzZVxyXG4gICAgICAgICAgICAgICAgLy8gYSBmYXRhbCBlcnJvciBpbiB0aGlzIGNhc2U/XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQ3JlYXRlIHNlcnZpY2UgaW5zdGFuY2VzIGZvciB0aGUgcGVuZGluZyBwcm9taXNlcyBhbmQgcmVzb2x2ZSB0aGVtXHJcbiAgICAgICAgLy8gTk9URTogaWYgdGhpcy5tdWx0aXBsZUluc3RhbmNlcyBpcyBmYWxzZSwgb25seSB0aGUgZGVmYXVsdCBpbnN0YW5jZSB3aWxsIGJlIGNyZWF0ZWRcclxuICAgICAgICAvLyBhbmQgYWxsIHByb21pc2VzIHdpdGggcmVzb2x2ZSB3aXRoIGl0IHJlZ2FyZGxlc3Mgb2YgdGhlIGlkZW50aWZpZXIuXHJcbiAgICAgICAgZm9yIChjb25zdCBbaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZURlZmVycmVkXSBvZiB0aGlzLmluc3RhbmNlc0RlZmVycmVkLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKGluc3RhbmNlSWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyBgZ2V0T3JJbml0aWFsaXplU2VydmljZSgpYCBzaG91bGQgYWx3YXlzIHJldHVybiBhIHZhbGlkIGluc3RhbmNlIHNpbmNlIGEgY29tcG9uZW50IGlzIGd1YXJhbnRlZWQuIHVzZSAhIHRvIG1ha2UgdHlwZXNjcmlwdCBoYXBweS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5nZXRPckluaXRpYWxpemVTZXJ2aWNlKHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZUlkZW50aWZpZXI6IG5vcm1hbGl6ZWRJZGVudGlmaWVyXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlRGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIHdoZW4gdGhlIGluc3RhbmNlIGZhY3RvcnkgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgaXQgc2hvdWxkIG5vdCBjYXVzZVxyXG4gICAgICAgICAgICAgICAgLy8gYSBmYXRhbCBlcnJvci4gV2UganVzdCBsZWF2ZSB0aGUgcHJvbWlzZSB1bnJlc29sdmVkLlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xlYXJJbnN0YW5jZShpZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNEZWZlcnJlZC5kZWxldGUoaWRlbnRpZmllcik7XHJcbiAgICAgICAgdGhpcy5pbnN0YW5jZXNPcHRpb25zLmRlbGV0ZShpZGVudGlmaWVyKTtcclxuICAgICAgICB0aGlzLmluc3RhbmNlcy5kZWxldGUoaWRlbnRpZmllcik7XHJcbiAgICB9XHJcbiAgICAvLyBhcHAuZGVsZXRlKCkgd2lsbCBjYWxsIHRoaXMgbWV0aG9kIG9uIGV2ZXJ5IHByb3ZpZGVyIHRvIGRlbGV0ZSB0aGUgc2VydmljZXNcclxuICAgIC8vIFRPRE86IHNob3VsZCB3ZSBtYXJrIHRoZSBwcm92aWRlciBhcyBkZWxldGVkP1xyXG4gICAgYXN5bmMgZGVsZXRlKCkge1xyXG4gICAgICAgIGNvbnN0IHNlcnZpY2VzID0gQXJyYXkuZnJvbSh0aGlzLmluc3RhbmNlcy52YWx1ZXMoKSk7XHJcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAuLi5zZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihzZXJ2aWNlID0+ICdJTlRFUk5BTCcgaW4gc2VydmljZSkgLy8gbGVnYWN5IHNlcnZpY2VzXHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxyXG4gICAgICAgICAgICAgICAgLm1hcChzZXJ2aWNlID0+IHNlcnZpY2UuSU5URVJOQUwuZGVsZXRlKCkpLFxyXG4gICAgICAgICAgICAuLi5zZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihzZXJ2aWNlID0+ICdfZGVsZXRlJyBpbiBzZXJ2aWNlKSAvLyBtb2R1bGFyaXplZCBzZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcclxuICAgICAgICAgICAgICAgIC5tYXAoc2VydmljZSA9PiBzZXJ2aWNlLl9kZWxldGUoKSlcclxuICAgICAgICBdKTtcclxuICAgIH1cclxuICAgIGlzQ29tcG9uZW50U2V0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudCAhPSBudWxsO1xyXG4gICAgfVxyXG4gICAgaXNJbml0aWFsaXplZChpZGVudGlmaWVyID0gREVGQVVMVF9FTlRSWV9OQU1FKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5zdGFuY2VzLmhhcyhpZGVudGlmaWVyKTtcclxuICAgIH1cclxuICAgIGdldE9wdGlvbnMoaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmluc3RhbmNlc09wdGlvbnMuZ2V0KGlkZW50aWZpZXIpIHx8IHt9O1xyXG4gICAgfVxyXG4gICAgaW5pdGlhbGl6ZShvcHRzID0ge30pIHtcclxuICAgICAgICBjb25zdCB7IG9wdGlvbnMgPSB7fSB9ID0gb3B0cztcclxuICAgICAgICBjb25zdCBub3JtYWxpemVkSWRlbnRpZmllciA9IHRoaXMubm9ybWFsaXplSW5zdGFuY2VJZGVudGlmaWVyKG9wdHMuaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAodGhpcy5pc0luaXRpYWxpemVkKG5vcm1hbGl6ZWRJZGVudGlmaWVyKSkge1xyXG4gICAgICAgICAgICB0aHJvdyBFcnJvcihgJHt0aGlzLm5hbWV9KCR7bm9ybWFsaXplZElkZW50aWZpZXJ9KSBoYXMgYWxyZWFkeSBiZWVuIGluaXRpYWxpemVkYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5pc0NvbXBvbmVudFNldCgpKSB7XHJcbiAgICAgICAgICAgIHRocm93IEVycm9yKGBDb21wb25lbnQgJHt0aGlzLm5hbWV9IGhhcyBub3QgYmVlbiByZWdpc3RlcmVkIHlldGApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuZ2V0T3JJbml0aWFsaXplU2VydmljZSh7XHJcbiAgICAgICAgICAgIGluc3RhbmNlSWRlbnRpZmllcjogbm9ybWFsaXplZElkZW50aWZpZXIsXHJcbiAgICAgICAgICAgIG9wdGlvbnNcclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyByZXNvbHZlIGFueSBwZW5kaW5nIHByb21pc2Ugd2FpdGluZyBmb3IgdGhlIHNlcnZpY2UgaW5zdGFuY2VcclxuICAgICAgICBmb3IgKGNvbnN0IFtpbnN0YW5jZUlkZW50aWZpZXIsIGluc3RhbmNlRGVmZXJyZWRdIG9mIHRoaXMuaW5zdGFuY2VzRGVmZXJyZWQuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbGl6ZWREZWZlcnJlZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpbnN0YW5jZUlkZW50aWZpZXIpO1xyXG4gICAgICAgICAgICBpZiAobm9ybWFsaXplZElkZW50aWZpZXIgPT09IG5vcm1hbGl6ZWREZWZlcnJlZElkZW50aWZpZXIpIHtcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlRGVmZXJyZWQucmVzb2x2ZShpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIC0gYSBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgaW52b2tlZCAgYWZ0ZXIgdGhlIHByb3ZpZGVyIGhhcyBiZWVuIGluaXRpYWxpemVkIGJ5IGNhbGxpbmcgcHJvdmlkZXIuaW5pdGlhbGl6ZSgpLlxyXG4gICAgICogVGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgU1lOQ0hST05PVVNMWSwgc28gaXQgc2hvdWxkIG5vdCBleGVjdXRlIGFueSBsb25ncnVubmluZyB0YXNrcyBpbiBvcmRlciB0byBub3QgYmxvY2sgdGhlIHByb2dyYW0uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlkZW50aWZpZXIgQW4gb3B0aW9uYWwgaW5zdGFuY2UgaWRlbnRpZmllclxyXG4gICAgICogQHJldHVybnMgYSBmdW5jdGlvbiB0byB1bnJlZ2lzdGVyIHRoZSBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBvbkluaXQoY2FsbGJhY2ssIGlkZW50aWZpZXIpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZElkZW50aWZpZXIgPSB0aGlzLm5vcm1hbGl6ZUluc3RhbmNlSWRlbnRpZmllcihpZGVudGlmaWVyKTtcclxuICAgICAgICBjb25zdCBleGlzdGluZ0NhbGxiYWNrcyA9IChfYSA9IHRoaXMub25Jbml0Q2FsbGJhY2tzLmdldChub3JtYWxpemVkSWRlbnRpZmllcikpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG5ldyBTZXQoKTtcclxuICAgICAgICBleGlzdGluZ0NhbGxiYWNrcy5hZGQoY2FsbGJhY2spO1xyXG4gICAgICAgIHRoaXMub25Jbml0Q2FsbGJhY2tzLnNldChub3JtYWxpemVkSWRlbnRpZmllciwgZXhpc3RpbmdDYWxsYmFja3MpO1xyXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nSW5zdGFuY2UgPSB0aGlzLmluc3RhbmNlcy5nZXQobm9ybWFsaXplZElkZW50aWZpZXIpO1xyXG4gICAgICAgIGlmIChleGlzdGluZ0luc3RhbmNlKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKGV4aXN0aW5nSW5zdGFuY2UsIG5vcm1hbGl6ZWRJZGVudGlmaWVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgZXhpc3RpbmdDYWxsYmFja3MuZGVsZXRlKGNhbGxiYWNrKTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnZva2Ugb25Jbml0IGNhbGxiYWNrcyBzeW5jaHJvbm91c2x5XHJcbiAgICAgKiBAcGFyYW0gaW5zdGFuY2UgdGhlIHNlcnZpY2UgaW5zdGFuY2VgXHJcbiAgICAgKi9cclxuICAgIGludm9rZU9uSW5pdENhbGxiYWNrcyhpbnN0YW5jZSwgaWRlbnRpZmllcikge1xyXG4gICAgICAgIGNvbnN0IGNhbGxiYWNrcyA9IHRoaXMub25Jbml0Q2FsbGJhY2tzLmdldChpZGVudGlmaWVyKTtcclxuICAgICAgICBpZiAoIWNhbGxiYWNrcykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgY2FsbGJhY2sgb2YgY2FsbGJhY2tzKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpbnN0YW5jZSwgaWRlbnRpZmllcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2F0Y2ggKF9hKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZ25vcmUgZXJyb3JzIGluIHRoZSBvbkluaXQgY2FsbGJhY2tcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE9ySW5pdGlhbGl6ZVNlcnZpY2UoeyBpbnN0YW5jZUlkZW50aWZpZXIsIG9wdGlvbnMgPSB7fSB9KSB7XHJcbiAgICAgICAgbGV0IGluc3RhbmNlID0gdGhpcy5pbnN0YW5jZXMuZ2V0KGluc3RhbmNlSWRlbnRpZmllcik7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSAmJiB0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuY29tcG9uZW50Lmluc3RhbmNlRmFjdG9yeSh0aGlzLmNvbnRhaW5lciwge1xyXG4gICAgICAgICAgICAgICAgaW5zdGFuY2VJZGVudGlmaWVyOiBub3JtYWxpemVJZGVudGlmaWVyRm9yRmFjdG9yeShpbnN0YW5jZUlkZW50aWZpZXIpLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9uc1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB0aGlzLmluc3RhbmNlc09wdGlvbnMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIC8qKlxyXG4gICAgICAgICAgICAgKiBJbnZva2Ugb25Jbml0IGxpc3RlbmVycy5cclxuICAgICAgICAgICAgICogTm90ZSB0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZCBpcyBkaWZmZXJlbnQsIHdoaWNoIGlzIHVzZWQgYnkgdGhlIGNvbXBvbmVudCBjcmVhdG9yLFxyXG4gICAgICAgICAgICAgKiB3aGlsZSBvbkluaXQgbGlzdGVuZXJzIGFyZSByZWdpc3RlcmVkIGJ5IGNvbnN1bWVycyBvZiB0aGUgcHJvdmlkZXIuXHJcbiAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICB0aGlzLmludm9rZU9uSW5pdENhbGxiYWNrcyhpbnN0YW5jZSwgaW5zdGFuY2VJZGVudGlmaWVyKTtcclxuICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAqIE9yZGVyIGlzIGltcG9ydGFudFxyXG4gICAgICAgICAgICAgKiBvbkluc3RhbmNlQ3JlYXRlZCgpIHNob3VsZCBiZSBjYWxsZWQgYWZ0ZXIgdGhpcy5pbnN0YW5jZXMuc2V0KGluc3RhbmNlSWRlbnRpZmllciwgaW5zdGFuY2UpOyB3aGljaFxyXG4gICAgICAgICAgICAgKiBtYWtlcyBgaXNJbml0aWFsaXplZCgpYCByZXR1cm4gdHJ1ZS5cclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudC5vbkluc3RhbmNlQ3JlYXRlZCh0aGlzLmNvbnRhaW5lciwgaW5zdGFuY2VJZGVudGlmaWVyLCBpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjYXRjaCAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZ25vcmUgZXJyb3JzIGluIHRoZSBvbkluc3RhbmNlQ3JlYXRlZENhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICBub3JtYWxpemVJbnN0YW5jZUlkZW50aWZpZXIoaWRlbnRpZmllciA9IERFRkFVTFRfRU5UUllfTkFNRSkge1xyXG4gICAgICAgIGlmICh0aGlzLmNvbXBvbmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnQubXVsdGlwbGVJbnN0YW5jZXMgPyBpZGVudGlmaWVyIDogREVGQVVMVF9FTlRSWV9OQU1FO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlkZW50aWZpZXI7IC8vIGFzc3VtZSBtdWx0aXBsZSBpbnN0YW5jZXMgYXJlIHN1cHBvcnRlZCBiZWZvcmUgdGhlIGNvbXBvbmVudCBpcyBwcm92aWRlZC5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzaG91bGRBdXRvSW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICByZXR1cm4gKCEhdGhpcy5jb21wb25lbnQgJiZcclxuICAgICAgICAgICAgdGhpcy5jb21wb25lbnQuaW5zdGFudGlhdGlvbk1vZGUgIT09IFwiRVhQTElDSVRcIiAvKiBFWFBMSUNJVCAqLyk7XHJcbiAgICB9XHJcbn1cclxuLy8gdW5kZWZpbmVkIHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIHNlcnZpY2UgZmFjdG9yeSBmb3IgdGhlIGRlZmF1bHQgaW5zdGFuY2VcclxuZnVuY3Rpb24gbm9ybWFsaXplSWRlbnRpZmllckZvckZhY3RvcnkoaWRlbnRpZmllcikge1xyXG4gICAgcmV0dXJuIGlkZW50aWZpZXIgPT09IERFRkFVTFRfRU5UUllfTkFNRSA/IHVuZGVmaW5lZCA6IGlkZW50aWZpZXI7XHJcbn1cclxuZnVuY3Rpb24gaXNDb21wb25lbnRFYWdlcihjb21wb25lbnQpIHtcclxuICAgIHJldHVybiBjb21wb25lbnQuaW5zdGFudGlhdGlvbk1vZGUgPT09IFwiRUFHRVJcIiAvKiBFQUdFUiAqLztcclxufVxuXG4vKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IDIwMTkgR29vZ2xlIExMQ1xyXG4gKlxyXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xyXG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXHJcbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxyXG4gKlxyXG4gKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG4gKlxyXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXHJcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcclxuICogV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXHJcbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcclxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbiAqL1xyXG4vKipcclxuICogQ29tcG9uZW50Q29udGFpbmVyIHRoYXQgcHJvdmlkZXMgUHJvdmlkZXJzIGZvciBzZXJ2aWNlIG5hbWUgVCwgZS5nLiBgYXV0aGAsIGBhdXRoLWludGVybmFsYFxyXG4gKi9cclxuY2xhc3MgQ29tcG9uZW50Q29udGFpbmVyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcclxuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMucHJvdmlkZXJzID0gbmV3IE1hcCgpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGNvbXBvbmVudCBDb21wb25lbnQgYmVpbmcgYWRkZWRcclxuICAgICAqIEBwYXJhbSBvdmVyd3JpdGUgV2hlbiBhIGNvbXBvbmVudCB3aXRoIHRoZSBzYW1lIG5hbWUgaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkLFxyXG4gICAgICogaWYgb3ZlcndyaXRlIGlzIHRydWU6IG92ZXJ3cml0ZSB0aGUgZXhpc3RpbmcgY29tcG9uZW50IHdpdGggdGhlIG5ldyBjb21wb25lbnQgYW5kIGNyZWF0ZSBhIG5ld1xyXG4gICAgICogcHJvdmlkZXIgd2l0aCB0aGUgbmV3IGNvbXBvbmVudC4gSXQgY2FuIGJlIHVzZWZ1bCBpbiB0ZXN0cyB3aGVyZSB5b3Ugd2FudCB0byB1c2UgZGlmZmVyZW50IG1vY2tzXHJcbiAgICAgKiBmb3IgZGlmZmVyZW50IHRlc3RzLlxyXG4gICAgICogaWYgb3ZlcndyaXRlIGlzIGZhbHNlOiB0aHJvdyBhbiBleGNlcHRpb25cclxuICAgICAqL1xyXG4gICAgYWRkQ29tcG9uZW50KGNvbXBvbmVudCkge1xyXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gdGhpcy5nZXRQcm92aWRlcihjb21wb25lbnQubmFtZSk7XHJcbiAgICAgICAgaWYgKHByb3ZpZGVyLmlzQ29tcG9uZW50U2V0KCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDb21wb25lbnQgJHtjb21wb25lbnQubmFtZX0gaGFzIGFscmVhZHkgYmVlbiByZWdpc3RlcmVkIHdpdGggJHt0aGlzLm5hbWV9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3ZpZGVyLnNldENvbXBvbmVudChjb21wb25lbnQpO1xyXG4gICAgfVxyXG4gICAgYWRkT3JPdmVyd3JpdGVDb21wb25lbnQoY29tcG9uZW50KSB7XHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSB0aGlzLmdldFByb3ZpZGVyKGNvbXBvbmVudC5uYW1lKTtcclxuICAgICAgICBpZiAocHJvdmlkZXIuaXNDb21wb25lbnRTZXQoKSkge1xyXG4gICAgICAgICAgICAvLyBkZWxldGUgdGhlIGV4aXN0aW5nIHByb3ZpZGVyIGZyb20gdGhlIGNvbnRhaW5lciwgc28gd2UgY2FuIHJlZ2lzdGVyIHRoZSBuZXcgY29tcG9uZW50XHJcbiAgICAgICAgICAgIHRoaXMucHJvdmlkZXJzLmRlbGV0ZShjb21wb25lbnQubmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkQ29tcG9uZW50KGNvbXBvbmVudCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGdldFByb3ZpZGVyIHByb3ZpZGVzIGEgdHlwZSBzYWZlIGludGVyZmFjZSB3aGVyZSBpdCBjYW4gb25seSBiZSBjYWxsZWQgd2l0aCBhIGZpZWxkIG5hbWVcclxuICAgICAqIHByZXNlbnQgaW4gTmFtZVNlcnZpY2VNYXBwaW5nIGludGVyZmFjZS5cclxuICAgICAqXHJcbiAgICAgKiBGaXJlYmFzZSBTREtzIHByb3ZpZGluZyBzZXJ2aWNlcyBzaG91bGQgZXh0ZW5kIE5hbWVTZXJ2aWNlTWFwcGluZyBpbnRlcmZhY2UgdG8gcmVnaXN0ZXJcclxuICAgICAqIHRoZW1zZWx2ZXMuXHJcbiAgICAgKi9cclxuICAgIGdldFByb3ZpZGVyKG5hbWUpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm92aWRlcnMuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb3ZpZGVycy5nZXQobmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIFByb3ZpZGVyIGZvciBhIHNlcnZpY2UgdGhhdCBoYXNuJ3QgcmVnaXN0ZXJlZCB3aXRoIEZpcmViYXNlXHJcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgUHJvdmlkZXIobmFtZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5wcm92aWRlcnMuc2V0KG5hbWUsIHByb3ZpZGVyKTtcclxuICAgICAgICByZXR1cm4gcHJvdmlkZXI7XHJcbiAgICB9XHJcbiAgICBnZXRQcm92aWRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5wcm92aWRlcnMudmFsdWVzKCkpO1xyXG4gICAgfVxyXG59XG5cbmV4cG9ydCB7IENvbXBvbmVudCwgQ29tcG9uZW50Q29udGFpbmVyLCBQcm92aWRlciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtMjAxNy5qcy5tYXBcbiIsIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgMjAxNyBHb29nbGUgTExDXHJcbiAqXHJcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XHJcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cclxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XHJcbiAqXHJcbiAqICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcbiAqXHJcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcclxuICogZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxyXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cclxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxyXG4gKiBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuICovXHJcbi8qKlxyXG4gKiBBIGNvbnRhaW5lciBmb3IgYWxsIG9mIHRoZSBMb2dnZXIgaW5zdGFuY2VzXHJcbiAqL1xyXG5jb25zdCBpbnN0YW5jZXMgPSBbXTtcclxuLyoqXHJcbiAqIFRoZSBKUyBTREsgc3VwcG9ydHMgNSBsb2cgbGV2ZWxzIGFuZCBhbHNvIGFsbG93cyBhIHVzZXIgdGhlIGFiaWxpdHkgdG9cclxuICogc2lsZW5jZSB0aGUgbG9ncyBhbHRvZ2V0aGVyLlxyXG4gKlxyXG4gKiBUaGUgb3JkZXIgaXMgYSBmb2xsb3dzOlxyXG4gKiBERUJVRyA8IFZFUkJPU0UgPCBJTkZPIDwgV0FSTiA8IEVSUk9SXHJcbiAqXHJcbiAqIEFsbCBvZiB0aGUgbG9nIHR5cGVzIGFib3ZlIHRoZSBjdXJyZW50IGxvZyBsZXZlbCB3aWxsIGJlIGNhcHR1cmVkIChpLmUuIGlmXHJcbiAqIHlvdSBzZXQgdGhlIGxvZyBsZXZlbCB0byBgSU5GT2AsIGVycm9ycyB3aWxsIHN0aWxsIGJlIGxvZ2dlZCwgYnV0IGBERUJVR2AgYW5kXHJcbiAqIGBWRVJCT1NFYCBsb2dzIHdpbGwgbm90KVxyXG4gKi9cclxudmFyIExvZ0xldmVsO1xyXG4oZnVuY3Rpb24gKExvZ0xldmVsKSB7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkRFQlVHXCJdID0gMF0gPSBcIkRFQlVHXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlZFUkJPU0VcIl0gPSAxXSA9IFwiVkVSQk9TRVwiO1xyXG4gICAgTG9nTGV2ZWxbTG9nTGV2ZWxbXCJJTkZPXCJdID0gMl0gPSBcIklORk9cIjtcclxuICAgIExvZ0xldmVsW0xvZ0xldmVsW1wiV0FSTlwiXSA9IDNdID0gXCJXQVJOXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIkVSUk9SXCJdID0gNF0gPSBcIkVSUk9SXCI7XHJcbiAgICBMb2dMZXZlbFtMb2dMZXZlbFtcIlNJTEVOVFwiXSA9IDVdID0gXCJTSUxFTlRcIjtcclxufSkoTG9nTGV2ZWwgfHwgKExvZ0xldmVsID0ge30pKTtcclxuY29uc3QgbGV2ZWxTdHJpbmdUb0VudW0gPSB7XHJcbiAgICAnZGVidWcnOiBMb2dMZXZlbC5ERUJVRyxcclxuICAgICd2ZXJib3NlJzogTG9nTGV2ZWwuVkVSQk9TRSxcclxuICAgICdpbmZvJzogTG9nTGV2ZWwuSU5GTyxcclxuICAgICd3YXJuJzogTG9nTGV2ZWwuV0FSTixcclxuICAgICdlcnJvcic6IExvZ0xldmVsLkVSUk9SLFxyXG4gICAgJ3NpbGVudCc6IExvZ0xldmVsLlNJTEVOVFxyXG59O1xyXG4vKipcclxuICogVGhlIGRlZmF1bHQgbG9nIGxldmVsXHJcbiAqL1xyXG5jb25zdCBkZWZhdWx0TG9nTGV2ZWwgPSBMb2dMZXZlbC5JTkZPO1xyXG4vKipcclxuICogQnkgZGVmYXVsdCwgYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBkaXNwbGF5ZWQgaW4gdGhlIGRldmVsb3BlciBjb25zb2xlIChpblxyXG4gKiBjaHJvbWUpLiBUbyBhdm9pZCBmb3JjaW5nIHVzZXJzIHRvIGhhdmUgdG8gb3B0LWluIHRvIHRoZXNlIGxvZ3MgdHdpY2VcclxuICogKGkuZS4gb25jZSBmb3IgZmlyZWJhc2UsIGFuZCBvbmNlIGluIHRoZSBjb25zb2xlKSwgd2UgYXJlIHNlbmRpbmcgYERFQlVHYFxyXG4gKiBsb2dzIHRvIHRoZSBgY29uc29sZS5sb2dgIGZ1bmN0aW9uLlxyXG4gKi9cclxuY29uc3QgQ29uc29sZU1ldGhvZCA9IHtcclxuICAgIFtMb2dMZXZlbC5ERUJVR106ICdsb2cnLFxyXG4gICAgW0xvZ0xldmVsLlZFUkJPU0VdOiAnbG9nJyxcclxuICAgIFtMb2dMZXZlbC5JTkZPXTogJ2luZm8nLFxyXG4gICAgW0xvZ0xldmVsLldBUk5dOiAnd2FybicsXHJcbiAgICBbTG9nTGV2ZWwuRVJST1JdOiAnZXJyb3InXHJcbn07XHJcbi8qKlxyXG4gKiBUaGUgZGVmYXVsdCBsb2cgaGFuZGxlciB3aWxsIGZvcndhcmQgREVCVUcsIFZFUkJPU0UsIElORk8sIFdBUk4sIGFuZCBFUlJPUlxyXG4gKiBtZXNzYWdlcyBvbiB0byB0aGVpciBjb3JyZXNwb25kaW5nIGNvbnNvbGUgY291bnRlcnBhcnRzIChpZiB0aGUgbG9nIG1ldGhvZFxyXG4gKiBpcyBzdXBwb3J0ZWQgYnkgdGhlIGN1cnJlbnQgbG9nIGxldmVsKVxyXG4gKi9cclxuY29uc3QgZGVmYXVsdExvZ0hhbmRsZXIgPSAoaW5zdGFuY2UsIGxvZ1R5cGUsIC4uLmFyZ3MpID0+IHtcclxuICAgIGlmIChsb2dUeXBlIDwgaW5zdGFuY2UubG9nTGV2ZWwpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCk7XHJcbiAgICBjb25zdCBtZXRob2QgPSBDb25zb2xlTWV0aG9kW2xvZ1R5cGVdO1xyXG4gICAgaWYgKG1ldGhvZCkge1xyXG4gICAgICAgIGNvbnNvbGVbbWV0aG9kXShgWyR7bm93fV0gICR7aW5zdGFuY2UubmFtZX06YCwgLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEF0dGVtcHRlZCB0byBsb2cgYSBtZXNzYWdlIHdpdGggYW4gaW52YWxpZCBsb2dUeXBlICh2YWx1ZTogJHtsb2dUeXBlfSlgKTtcclxuICAgIH1cclxufTtcclxuY2xhc3MgTG9nZ2VyIHtcclxuICAgIC8qKlxyXG4gICAgICogR2l2ZXMgeW91IGFuIGluc3RhbmNlIG9mIGEgTG9nZ2VyIHRvIGNhcHR1cmUgbWVzc2FnZXMgYWNjb3JkaW5nIHRvXHJcbiAgICAgKiBGaXJlYmFzZSdzIGxvZ2dpbmcgc2NoZW1lLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIHRoYXQgdGhlIGxvZ3Mgd2lsbCBiZSBhc3NvY2lhdGVkIHdpdGhcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IobmFtZSkge1xyXG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogVGhlIGxvZyBsZXZlbCBvZiB0aGUgZ2l2ZW4gTG9nZ2VyIGluc3RhbmNlLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2xvZ0xldmVsID0gZGVmYXVsdExvZ0xldmVsO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFRoZSBtYWluIChpbnRlcm5hbCkgbG9nIGhhbmRsZXIgZm9yIHRoZSBMb2dnZXIgaW5zdGFuY2UuXHJcbiAgICAgICAgICogQ2FuIGJlIHNldCB0byBhIG5ldyBmdW5jdGlvbiBpbiBpbnRlcm5hbCBwYWNrYWdlIGNvZGUgYnV0IG5vdCBieSB1c2VyLlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIgPSBkZWZhdWx0TG9nSGFuZGxlcjtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBUaGUgb3B0aW9uYWwsIGFkZGl0aW9uYWwsIHVzZXItZGVmaW5lZCBsb2cgaGFuZGxlciBmb3IgdGhlIExvZ2dlciBpbnN0YW5jZS5cclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlciA9IG51bGw7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQ2FwdHVyZSB0aGUgY3VycmVudCBpbnN0YW5jZSBmb3IgbGF0ZXIgdXNlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaW5zdGFuY2VzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXQgbG9nTGV2ZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ0xldmVsO1xyXG4gICAgfVxyXG4gICAgc2V0IGxvZ0xldmVsKHZhbCkge1xyXG4gICAgICAgIGlmICghKHZhbCBpbiBMb2dMZXZlbCkpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihgSW52YWxpZCB2YWx1ZSBcIiR7dmFsfVwiIGFzc2lnbmVkIHRvIFxcYGxvZ0xldmVsXFxgYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xvZ0xldmVsID0gdmFsO1xyXG4gICAgfVxyXG4gICAgLy8gV29ya2Fyb3VuZCBmb3Igc2V0dGVyL2dldHRlciBoYXZpbmcgdG8gYmUgdGhlIHNhbWUgdHlwZS5cclxuICAgIHNldExvZ0xldmVsKHZhbCkge1xyXG4gICAgICAgIHRoaXMuX2xvZ0xldmVsID0gdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgPyBsZXZlbFN0cmluZ1RvRW51bVt2YWxdIDogdmFsO1xyXG4gICAgfVxyXG4gICAgZ2V0IGxvZ0hhbmRsZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xvZ0hhbmRsZXI7XHJcbiAgICB9XHJcbiAgICBzZXQgbG9nSGFuZGxlcih2YWwpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHZhbCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdWYWx1ZSBhc3NpZ25lZCB0byBgbG9nSGFuZGxlcmAgbXVzdCBiZSBhIGZ1bmN0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIgPSB2YWw7XHJcbiAgICB9XHJcbiAgICBnZXQgdXNlckxvZ0hhbmRsZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3VzZXJMb2dIYW5kbGVyO1xyXG4gICAgfVxyXG4gICAgc2V0IHVzZXJMb2dIYW5kbGVyKHZhbCkge1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyID0gdmFsO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBUaGUgZnVuY3Rpb25zIGJlbG93IGFyZSBhbGwgYmFzZWQgb24gdGhlIGBjb25zb2xlYCBpbnRlcmZhY2VcclxuICAgICAqL1xyXG4gICAgZGVidWcoLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkRFQlVHLCAuLi5hcmdzKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkRFQlVHLCAuLi5hcmdzKTtcclxuICAgIH1cclxuICAgIGxvZyguLi5hcmdzKSB7XHJcbiAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIgJiZcclxuICAgICAgICAgICAgdGhpcy5fdXNlckxvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuVkVSQk9TRSwgLi4uYXJncyk7XHJcbiAgICAgICAgdGhpcy5fbG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5WRVJCT1NFLCAuLi5hcmdzKTtcclxuICAgIH1cclxuICAgIGluZm8oLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLklORk8sIC4uLmFyZ3MpO1xyXG4gICAgICAgIHRoaXMuX2xvZ0hhbmRsZXIodGhpcywgTG9nTGV2ZWwuSU5GTywgLi4uYXJncyk7XHJcbiAgICB9XHJcbiAgICB3YXJuKC4uLmFyZ3MpIHtcclxuICAgICAgICB0aGlzLl91c2VyTG9nSGFuZGxlciAmJiB0aGlzLl91c2VyTG9nSGFuZGxlcih0aGlzLCBMb2dMZXZlbC5XQVJOLCAuLi5hcmdzKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLldBUk4sIC4uLmFyZ3MpO1xyXG4gICAgfVxyXG4gICAgZXJyb3IoLi4uYXJncykge1xyXG4gICAgICAgIHRoaXMuX3VzZXJMb2dIYW5kbGVyICYmIHRoaXMuX3VzZXJMb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkVSUk9SLCAuLi5hcmdzKTtcclxuICAgICAgICB0aGlzLl9sb2dIYW5kbGVyKHRoaXMsIExvZ0xldmVsLkVSUk9SLCAuLi5hcmdzKTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzZXRMb2dMZXZlbChsZXZlbCkge1xyXG4gICAgaW5zdGFuY2VzLmZvckVhY2goaW5zdCA9PiB7XHJcbiAgICAgICAgaW5zdC5zZXRMb2dMZXZlbChsZXZlbCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBzZXRVc2VyTG9nSGFuZGxlcihsb2dDYWxsYmFjaywgb3B0aW9ucykge1xyXG4gICAgZm9yIChjb25zdCBpbnN0YW5jZSBvZiBpbnN0YW5jZXMpIHtcclxuICAgICAgICBsZXQgY3VzdG9tTG9nTGV2ZWwgPSBudWxsO1xyXG4gICAgICAgIGlmIChvcHRpb25zICYmIG9wdGlvbnMubGV2ZWwpIHtcclxuICAgICAgICAgICAgY3VzdG9tTG9nTGV2ZWwgPSBsZXZlbFN0cmluZ1RvRW51bVtvcHRpb25zLmxldmVsXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvZ0NhbGxiYWNrID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnVzZXJMb2dIYW5kbGVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGluc3RhbmNlLnVzZXJMb2dIYW5kbGVyID0gKGluc3RhbmNlLCBsZXZlbCwgLi4uYXJncykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9IGFyZ3NcclxuICAgICAgICAgICAgICAgICAgICAubWFwKGFyZyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgYXJnID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFyZy50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhcmcgaW5zdGFuY2VvZiBFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGFyZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0Y2ggKGlnbm9yZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKGFyZyA9PiBhcmcpXHJcbiAgICAgICAgICAgICAgICAgICAgLmpvaW4oJyAnKTtcclxuICAgICAgICAgICAgICAgIGlmIChsZXZlbCA+PSAoY3VzdG9tTG9nTGV2ZWwgIT09IG51bGwgJiYgY3VzdG9tTG9nTGV2ZWwgIT09IHZvaWQgMCA/IGN1c3RvbUxvZ0xldmVsIDogaW5zdGFuY2UubG9nTGV2ZWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9nQ2FsbGJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXZlbDogTG9nTGV2ZWxbbGV2ZWxdLnRvTG93ZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IGluc3RhbmNlLm5hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuZXhwb3J0IHsgTG9nTGV2ZWwsIExvZ2dlciwgc2V0TG9nTGV2ZWwsIHNldFVzZXJMb2dIYW5kbGVyIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20yMDE3LmpzLm1hcFxuIiwiaW1wb3J0IHsgdyBhcyB3cmFwLCByIGFzIHJlcGxhY2VUcmFwcyB9IGZyb20gJy4vd3JhcC1pZGItdmFsdWUuanMnO1xuZXhwb3J0IHsgdSBhcyB1bndyYXAsIHcgYXMgd3JhcCB9IGZyb20gJy4vd3JhcC1pZGItdmFsdWUuanMnO1xuXG4vKipcbiAqIE9wZW4gYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqIEBwYXJhbSB2ZXJzaW9uIFNjaGVtYSB2ZXJzaW9uLlxuICogQHBhcmFtIGNhbGxiYWNrcyBBZGRpdGlvbmFsIGNhbGxiYWNrcy5cbiAqL1xuZnVuY3Rpb24gb3BlbkRCKG5hbWUsIHZlcnNpb24sIHsgYmxvY2tlZCwgdXBncmFkZSwgYmxvY2tpbmcsIHRlcm1pbmF0ZWQgfSA9IHt9KSB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGluZGV4ZWREQi5vcGVuKG5hbWUsIHZlcnNpb24pO1xuICAgIGNvbnN0IG9wZW5Qcm9taXNlID0gd3JhcChyZXF1ZXN0KTtcbiAgICBpZiAodXBncmFkZSkge1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3VwZ3JhZGVuZWVkZWQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHVwZ3JhZGUod3JhcChyZXF1ZXN0LnJlc3VsdCksIGV2ZW50Lm9sZFZlcnNpb24sIGV2ZW50Lm5ld1ZlcnNpb24sIHdyYXAocmVxdWVzdC50cmFuc2FjdGlvbikpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKGJsb2NrZWQpXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsICgpID0+IGJsb2NrZWQoKSk7XG4gICAgb3BlblByb21pc2VcbiAgICAgICAgLnRoZW4oKGRiKSA9PiB7XG4gICAgICAgIGlmICh0ZXJtaW5hdGVkKVxuICAgICAgICAgICAgZGIuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCAoKSA9PiB0ZXJtaW5hdGVkKCkpO1xuICAgICAgICBpZiAoYmxvY2tpbmcpXG4gICAgICAgICAgICBkYi5hZGRFdmVudExpc3RlbmVyKCd2ZXJzaW9uY2hhbmdlJywgKCkgPT4gYmxvY2tpbmcoKSk7XG4gICAgfSlcbiAgICAgICAgLmNhdGNoKCgpID0+IHsgfSk7XG4gICAgcmV0dXJuIG9wZW5Qcm9taXNlO1xufVxuLyoqXG4gKiBEZWxldGUgYSBkYXRhYmFzZS5cbiAqXG4gKiBAcGFyYW0gbmFtZSBOYW1lIG9mIHRoZSBkYXRhYmFzZS5cbiAqL1xuZnVuY3Rpb24gZGVsZXRlREIobmFtZSwgeyBibG9ja2VkIH0gPSB7fSkge1xuICAgIGNvbnN0IHJlcXVlc3QgPSBpbmRleGVkREIuZGVsZXRlRGF0YWJhc2UobmFtZSk7XG4gICAgaWYgKGJsb2NrZWQpXG4gICAgICAgIHJlcXVlc3QuYWRkRXZlbnRMaXN0ZW5lcignYmxvY2tlZCcsICgpID0+IGJsb2NrZWQoKSk7XG4gICAgcmV0dXJuIHdyYXAocmVxdWVzdCkudGhlbigoKSA9PiB1bmRlZmluZWQpO1xufVxuXG5jb25zdCByZWFkTWV0aG9kcyA9IFsnZ2V0JywgJ2dldEtleScsICdnZXRBbGwnLCAnZ2V0QWxsS2V5cycsICdjb3VudCddO1xuY29uc3Qgd3JpdGVNZXRob2RzID0gWydwdXQnLCAnYWRkJywgJ2RlbGV0ZScsICdjbGVhciddO1xuY29uc3QgY2FjaGVkTWV0aG9kcyA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHtcbiAgICBpZiAoISh0YXJnZXQgaW5zdGFuY2VvZiBJREJEYXRhYmFzZSAmJlxuICAgICAgICAhKHByb3AgaW4gdGFyZ2V0KSAmJlxuICAgICAgICB0eXBlb2YgcHJvcCA9PT0gJ3N0cmluZycpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlZE1ldGhvZHMuZ2V0KHByb3ApKVxuICAgICAgICByZXR1cm4gY2FjaGVkTWV0aG9kcy5nZXQocHJvcCk7XG4gICAgY29uc3QgdGFyZ2V0RnVuY05hbWUgPSBwcm9wLnJlcGxhY2UoL0Zyb21JbmRleCQvLCAnJyk7XG4gICAgY29uc3QgdXNlSW5kZXggPSBwcm9wICE9PSB0YXJnZXRGdW5jTmFtZTtcbiAgICBjb25zdCBpc1dyaXRlID0gd3JpdGVNZXRob2RzLmluY2x1ZGVzKHRhcmdldEZ1bmNOYW1lKTtcbiAgICBpZiAoXG4gICAgLy8gQmFpbCBpZiB0aGUgdGFyZ2V0IGRvZXNuJ3QgZXhpc3Qgb24gdGhlIHRhcmdldC4gRWcsIGdldEFsbCBpc24ndCBpbiBFZGdlLlxuICAgICEodGFyZ2V0RnVuY05hbWUgaW4gKHVzZUluZGV4ID8gSURCSW5kZXggOiBJREJPYmplY3RTdG9yZSkucHJvdG90eXBlKSB8fFxuICAgICAgICAhKGlzV3JpdGUgfHwgcmVhZE1ldGhvZHMuaW5jbHVkZXModGFyZ2V0RnVuY05hbWUpKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1ldGhvZCA9IGFzeW5jIGZ1bmN0aW9uIChzdG9yZU5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgLy8gaXNXcml0ZSA/ICdyZWFkd3JpdGUnIDogdW5kZWZpbmVkIGd6aXBwcyBiZXR0ZXIsIGJ1dCBmYWlscyBpbiBFZGdlIDooXG4gICAgICAgIGNvbnN0IHR4ID0gdGhpcy50cmFuc2FjdGlvbihzdG9yZU5hbWUsIGlzV3JpdGUgPyAncmVhZHdyaXRlJyA6ICdyZWFkb25seScpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gdHguc3RvcmU7XG4gICAgICAgIGlmICh1c2VJbmRleClcbiAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5pbmRleChhcmdzLnNoaWZ0KCkpO1xuICAgICAgICAvLyBNdXN0IHJlamVjdCBpZiBvcCByZWplY3RzLlxuICAgICAgICAvLyBJZiBpdCdzIGEgd3JpdGUgb3BlcmF0aW9uLCBtdXN0IHJlamVjdCBpZiB0eC5kb25lIHJlamVjdHMuXG4gICAgICAgIC8vIE11c3QgcmVqZWN0IHdpdGggb3AgcmVqZWN0aW9uIGZpcnN0LlxuICAgICAgICAvLyBNdXN0IHJlc29sdmUgd2l0aCBvcCB2YWx1ZS5cbiAgICAgICAgLy8gTXVzdCBoYW5kbGUgYm90aCBwcm9taXNlcyAobm8gdW5oYW5kbGVkIHJlamVjdGlvbnMpXG4gICAgICAgIHJldHVybiAoYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgdGFyZ2V0W3RhcmdldEZ1bmNOYW1lXSguLi5hcmdzKSxcbiAgICAgICAgICAgIGlzV3JpdGUgJiYgdHguZG9uZSxcbiAgICAgICAgXSkpWzBdO1xuICAgIH07XG4gICAgY2FjaGVkTWV0aG9kcy5zZXQocHJvcCwgbWV0aG9kKTtcbiAgICByZXR1cm4gbWV0aG9kO1xufVxucmVwbGFjZVRyYXBzKChvbGRUcmFwcykgPT4gKHtcbiAgICAuLi5vbGRUcmFwcyxcbiAgICBnZXQ6ICh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSA9PiBnZXRNZXRob2QodGFyZ2V0LCBwcm9wKSB8fCBvbGRUcmFwcy5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlciksXG4gICAgaGFzOiAodGFyZ2V0LCBwcm9wKSA9PiAhIWdldE1ldGhvZCh0YXJnZXQsIHByb3ApIHx8IG9sZFRyYXBzLmhhcyh0YXJnZXQsIHByb3ApLFxufSkpO1xuXG5leHBvcnQgeyBkZWxldGVEQiwgb3BlbkRCIH07XG4iLCJjb25zdCBpbnN0YW5jZU9mQW55ID0gKG9iamVjdCwgY29uc3RydWN0b3JzKSA9PiBjb25zdHJ1Y3RvcnMuc29tZSgoYykgPT4gb2JqZWN0IGluc3RhbmNlb2YgYyk7XG5cbmxldCBpZGJQcm94eWFibGVUeXBlcztcbmxldCBjdXJzb3JBZHZhbmNlTWV0aG9kcztcbi8vIFRoaXMgaXMgYSBmdW5jdGlvbiB0byBwcmV2ZW50IGl0IHRocm93aW5nIHVwIGluIG5vZGUgZW52aXJvbm1lbnRzLlxuZnVuY3Rpb24gZ2V0SWRiUHJveHlhYmxlVHlwZXMoKSB7XG4gICAgcmV0dXJuIChpZGJQcm94eWFibGVUeXBlcyB8fFxuICAgICAgICAoaWRiUHJveHlhYmxlVHlwZXMgPSBbXG4gICAgICAgICAgICBJREJEYXRhYmFzZSxcbiAgICAgICAgICAgIElEQk9iamVjdFN0b3JlLFxuICAgICAgICAgICAgSURCSW5kZXgsXG4gICAgICAgICAgICBJREJDdXJzb3IsXG4gICAgICAgICAgICBJREJUcmFuc2FjdGlvbixcbiAgICAgICAgXSkpO1xufVxuLy8gVGhpcyBpcyBhIGZ1bmN0aW9uIHRvIHByZXZlbnQgaXQgdGhyb3dpbmcgdXAgaW4gbm9kZSBlbnZpcm9ubWVudHMuXG5mdW5jdGlvbiBnZXRDdXJzb3JBZHZhbmNlTWV0aG9kcygpIHtcbiAgICByZXR1cm4gKGN1cnNvckFkdmFuY2VNZXRob2RzIHx8XG4gICAgICAgIChjdXJzb3JBZHZhbmNlTWV0aG9kcyA9IFtcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuYWR2YW5jZSxcbiAgICAgICAgICAgIElEQkN1cnNvci5wcm90b3R5cGUuY29udGludWUsXG4gICAgICAgICAgICBJREJDdXJzb3IucHJvdG90eXBlLmNvbnRpbnVlUHJpbWFyeUtleSxcbiAgICAgICAgXSkpO1xufVxuY29uc3QgY3Vyc29yUmVxdWVzdE1hcCA9IG5ldyBXZWFrTWFwKCk7XG5jb25zdCB0cmFuc2FjdGlvbkRvbmVNYXAgPSBuZXcgV2Vha01hcCgpO1xuY29uc3QgdHJhbnNhY3Rpb25TdG9yZU5hbWVzTWFwID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHRyYW5zZm9ybUNhY2hlID0gbmV3IFdlYWtNYXAoKTtcbmNvbnN0IHJldmVyc2VUcmFuc2Zvcm1DYWNoZSA9IG5ldyBXZWFrTWFwKCk7XG5mdW5jdGlvbiBwcm9taXNpZnlSZXF1ZXN0KHJlcXVlc3QpIHtcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBjb25zdCB1bmxpc3RlbiA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3QucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VjY2VzcycsIHN1Y2Nlc3MpO1xuICAgICAgICAgICAgcmVxdWVzdC5yZW1vdmVFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VjY2VzcyA9ICgpID0+IHtcbiAgICAgICAgICAgIHJlc29sdmUod3JhcChyZXF1ZXN0LnJlc3VsdCkpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QocmVxdWVzdC5lcnJvcik7XG4gICAgICAgICAgICB1bmxpc3RlbigpO1xuICAgICAgICB9O1xuICAgICAgICByZXF1ZXN0LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Y2Nlc3MnLCBzdWNjZXNzKTtcbiAgICAgICAgcmVxdWVzdC5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIGVycm9yKTtcbiAgICB9KTtcbiAgICBwcm9taXNlXG4gICAgICAgIC50aGVuKCh2YWx1ZSkgPT4ge1xuICAgICAgICAvLyBTaW5jZSBjdXJzb3JpbmcgcmV1c2VzIHRoZSBJREJSZXF1ZXN0ICgqc2lnaCopLCB3ZSBjYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsXG4gICAgICAgIC8vIChzZWUgd3JhcEZ1bmN0aW9uKS5cbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCQ3Vyc29yKSB7XG4gICAgICAgICAgICBjdXJzb3JSZXF1ZXN0TWFwLnNldCh2YWx1ZSwgcmVxdWVzdCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2F0Y2hpbmcgdG8gYXZvaWQgXCJVbmNhdWdodCBQcm9taXNlIGV4Y2VwdGlvbnNcIlxuICAgIH0pXG4gICAgICAgIC5jYXRjaCgoKSA9PiB7IH0pO1xuICAgIC8vIFRoaXMgbWFwcGluZyBleGlzdHMgaW4gcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGJ1dCBkb2Vzbid0IGRvZXNuJ3QgZXhpc3QgaW4gdHJhbnNmb3JtQ2FjaGUuIFRoaXNcbiAgICAvLyBpcyBiZWNhdXNlIHdlIGNyZWF0ZSBtYW55IHByb21pc2VzIGZyb20gYSBzaW5nbGUgSURCUmVxdWVzdC5cbiAgICByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuc2V0KHByb21pc2UsIHJlcXVlc3QpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuZnVuY3Rpb24gY2FjaGVEb25lUHJvbWlzZUZvclRyYW5zYWN0aW9uKHR4KSB7XG4gICAgLy8gRWFybHkgYmFpbCBpZiB3ZSd2ZSBhbHJlYWR5IGNyZWF0ZWQgYSBkb25lIHByb21pc2UgZm9yIHRoaXMgdHJhbnNhY3Rpb24uXG4gICAgaWYgKHRyYW5zYWN0aW9uRG9uZU1hcC5oYXModHgpKVxuICAgICAgICByZXR1cm47XG4gICAgY29uc3QgZG9uZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgY29uc3QgdW5saXN0ZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICB0eC5yZW1vdmVFdmVudExpc3RlbmVyKCdjb21wbGV0ZScsIGNvbXBsZXRlKTtcbiAgICAgICAgICAgIHR4LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICAgICAgdHgucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBlcnJvcik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlID0gKCkgPT4ge1xuICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSAoKSA9PiB7XG4gICAgICAgICAgICByZWplY3QodHguZXJyb3IgfHwgbmV3IERPTUV4Y2VwdGlvbignQWJvcnRFcnJvcicsICdBYm9ydEVycm9yJykpO1xuICAgICAgICAgICAgdW5saXN0ZW4oKTtcbiAgICAgICAgfTtcbiAgICAgICAgdHguYWRkRXZlbnRMaXN0ZW5lcignY29tcGxldGUnLCBjb21wbGV0ZSk7XG4gICAgICAgIHR4LmFkZEV2ZW50TGlzdGVuZXIoJ2Vycm9yJywgZXJyb3IpO1xuICAgICAgICB0eC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGVycm9yKTtcbiAgICB9KTtcbiAgICAvLyBDYWNoZSBpdCBmb3IgbGF0ZXIgcmV0cmlldmFsLlxuICAgIHRyYW5zYWN0aW9uRG9uZU1hcC5zZXQodHgsIGRvbmUpO1xufVxubGV0IGlkYlByb3h5VHJhcHMgPSB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uKSB7XG4gICAgICAgICAgICAvLyBTcGVjaWFsIGhhbmRsaW5nIGZvciB0cmFuc2FjdGlvbi5kb25lLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdkb25lJylcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNhY3Rpb25Eb25lTWFwLmdldCh0YXJnZXQpO1xuICAgICAgICAgICAgLy8gUG9seWZpbGwgZm9yIG9iamVjdFN0b3JlTmFtZXMgYmVjYXVzZSBvZiBFZGdlLlxuICAgICAgICAgICAgaWYgKHByb3AgPT09ICdvYmplY3RTdG9yZU5hbWVzJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQub2JqZWN0U3RvcmVOYW1lcyB8fCB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuZ2V0KHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIHR4LnN0b3JlIHJldHVybiB0aGUgb25seSBzdG9yZSBpbiB0aGUgdHJhbnNhY3Rpb24sIG9yIHVuZGVmaW5lZCBpZiB0aGVyZSBhcmUgbWFueS5cbiAgICAgICAgICAgIGlmIChwcm9wID09PSAnc3RvcmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlY2VpdmVyLm9iamVjdFN0b3JlTmFtZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgOiByZWNlaXZlci5vYmplY3RTdG9yZShyZWNlaXZlci5vYmplY3RTdG9yZU5hbWVzWzBdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBFbHNlIHRyYW5zZm9ybSB3aGF0ZXZlciB3ZSBnZXQgYmFjay5cbiAgICAgICAgcmV0dXJuIHdyYXAodGFyZ2V0W3Byb3BdKTtcbiAgICB9LFxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbHVlKSB7XG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuICAgIGhhcyh0YXJnZXQsIHByb3ApIHtcbiAgICAgICAgaWYgKHRhcmdldCBpbnN0YW5jZW9mIElEQlRyYW5zYWN0aW9uICYmXG4gICAgICAgICAgICAocHJvcCA9PT0gJ2RvbmUnIHx8IHByb3AgPT09ICdzdG9yZScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcHJvcCBpbiB0YXJnZXQ7XG4gICAgfSxcbn07XG5mdW5jdGlvbiByZXBsYWNlVHJhcHMoY2FsbGJhY2spIHtcbiAgICBpZGJQcm94eVRyYXBzID0gY2FsbGJhY2soaWRiUHJveHlUcmFwcyk7XG59XG5mdW5jdGlvbiB3cmFwRnVuY3Rpb24oZnVuYykge1xuICAgIC8vIER1ZSB0byBleHBlY3RlZCBvYmplY3QgZXF1YWxpdHkgKHdoaWNoIGlzIGVuZm9yY2VkIGJ5IHRoZSBjYWNoaW5nIGluIGB3cmFwYCksIHdlXG4gICAgLy8gb25seSBjcmVhdGUgb25lIG5ldyBmdW5jIHBlciBmdW5jLlxuICAgIC8vIEVkZ2UgZG9lc24ndCBzdXBwb3J0IG9iamVjdFN0b3JlTmFtZXMgKGJvb28pLCBzbyB3ZSBwb2x5ZmlsbCBpdCBoZXJlLlxuICAgIGlmIChmdW5jID09PSBJREJEYXRhYmFzZS5wcm90b3R5cGUudHJhbnNhY3Rpb24gJiZcbiAgICAgICAgISgnb2JqZWN0U3RvcmVOYW1lcycgaW4gSURCVHJhbnNhY3Rpb24ucHJvdG90eXBlKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHN0b3JlTmFtZXMsIC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gZnVuYy5jYWxsKHVud3JhcCh0aGlzKSwgc3RvcmVOYW1lcywgLi4uYXJncyk7XG4gICAgICAgICAgICB0cmFuc2FjdGlvblN0b3JlTmFtZXNNYXAuc2V0KHR4LCBzdG9yZU5hbWVzLnNvcnQgPyBzdG9yZU5hbWVzLnNvcnQoKSA6IFtzdG9yZU5hbWVzXSk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcCh0eCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIC8vIEN1cnNvciBtZXRob2RzIGFyZSBzcGVjaWFsLCBhcyB0aGUgYmVoYXZpb3VyIGlzIGEgbGl0dGxlIG1vcmUgZGlmZmVyZW50IHRvIHN0YW5kYXJkIElEQi4gSW5cbiAgICAvLyBJREIsIHlvdSBhZHZhbmNlIHRoZSBjdXJzb3IgYW5kIHdhaXQgZm9yIGEgbmV3ICdzdWNjZXNzJyBvbiB0aGUgSURCUmVxdWVzdCB0aGF0IGdhdmUgeW91IHRoZVxuICAgIC8vIGN1cnNvci4gSXQncyBraW5kYSBsaWtlIGEgcHJvbWlzZSB0aGF0IGNhbiByZXNvbHZlIHdpdGggbWFueSB2YWx1ZXMuIFRoYXQgZG9lc24ndCBtYWtlIHNlbnNlXG4gICAgLy8gd2l0aCByZWFsIHByb21pc2VzLCBzbyBlYWNoIGFkdmFuY2UgbWV0aG9kcyByZXR1cm5zIGEgbmV3IHByb21pc2UgZm9yIHRoZSBjdXJzb3Igb2JqZWN0LCBvclxuICAgIC8vIHVuZGVmaW5lZCBpZiB0aGUgZW5kIG9mIHRoZSBjdXJzb3IgaGFzIGJlZW4gcmVhY2hlZC5cbiAgICBpZiAoZ2V0Q3Vyc29yQWR2YW5jZU1ldGhvZHMoKS5pbmNsdWRlcyhmdW5jKSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIC8vIENhbGxpbmcgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIHdpdGggdGhlIHByb3h5IGFzICd0aGlzJyBjYXVzZXMgSUxMRUdBTCBJTlZPQ0FUSU9OLCBzbyB3ZSB1c2VcbiAgICAgICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgICAgICBmdW5jLmFwcGx5KHVud3JhcCh0aGlzKSwgYXJncyk7XG4gICAgICAgICAgICByZXR1cm4gd3JhcChjdXJzb3JSZXF1ZXN0TWFwLmdldCh0aGlzKSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICAvLyBDYWxsaW5nIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiB3aXRoIHRoZSBwcm94eSBhcyAndGhpcycgY2F1c2VzIElMTEVHQUwgSU5WT0NBVElPTiwgc28gd2UgdXNlXG4gICAgICAgIC8vIHRoZSBvcmlnaW5hbCBvYmplY3QuXG4gICAgICAgIHJldHVybiB3cmFwKGZ1bmMuYXBwbHkodW53cmFwKHRoaXMpLCBhcmdzKSk7XG4gICAgfTtcbn1cbmZ1bmN0aW9uIHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpIHtcbiAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKVxuICAgICAgICByZXR1cm4gd3JhcEZ1bmN0aW9uKHZhbHVlKTtcbiAgICAvLyBUaGlzIGRvZXNuJ3QgcmV0dXJuLCBpdCBqdXN0IGNyZWF0ZXMgYSAnZG9uZScgcHJvbWlzZSBmb3IgdGhlIHRyYW5zYWN0aW9uLFxuICAgIC8vIHdoaWNoIGlzIGxhdGVyIHJldHVybmVkIGZvciB0cmFuc2FjdGlvbi5kb25lIChzZWUgaWRiT2JqZWN0SGFuZGxlcikuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCVHJhbnNhY3Rpb24pXG4gICAgICAgIGNhY2hlRG9uZVByb21pc2VGb3JUcmFuc2FjdGlvbih2YWx1ZSk7XG4gICAgaWYgKGluc3RhbmNlT2ZBbnkodmFsdWUsIGdldElkYlByb3h5YWJsZVR5cGVzKCkpKVxuICAgICAgICByZXR1cm4gbmV3IFByb3h5KHZhbHVlLCBpZGJQcm94eVRyYXBzKTtcbiAgICAvLyBSZXR1cm4gdGhlIHNhbWUgdmFsdWUgYmFjayBpZiB3ZSdyZSBub3QgZ29pbmcgdG8gdHJhbnNmb3JtIGl0LlxuICAgIHJldHVybiB2YWx1ZTtcbn1cbmZ1bmN0aW9uIHdyYXAodmFsdWUpIHtcbiAgICAvLyBXZSBzb21ldGltZXMgZ2VuZXJhdGUgbXVsdGlwbGUgcHJvbWlzZXMgZnJvbSBhIHNpbmdsZSBJREJSZXF1ZXN0IChlZyB3aGVuIGN1cnNvcmluZyksIGJlY2F1c2VcbiAgICAvLyBJREIgaXMgd2VpcmQgYW5kIGEgc2luZ2xlIElEQlJlcXVlc3QgY2FuIHlpZWxkIG1hbnkgcmVzcG9uc2VzLCBzbyB0aGVzZSBjYW4ndCBiZSBjYWNoZWQuXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgSURCUmVxdWVzdClcbiAgICAgICAgcmV0dXJuIHByb21pc2lmeVJlcXVlc3QodmFsdWUpO1xuICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgdHJhbnNmb3JtZWQgdGhpcyB2YWx1ZSBiZWZvcmUsIHJldXNlIHRoZSB0cmFuc2Zvcm1lZCB2YWx1ZS5cbiAgICAvLyBUaGlzIGlzIGZhc3RlciwgYnV0IGl0IGFsc28gcHJvdmlkZXMgb2JqZWN0IGVxdWFsaXR5LlxuICAgIGlmICh0cmFuc2Zvcm1DYWNoZS5oYXModmFsdWUpKVxuICAgICAgICByZXR1cm4gdHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHRyYW5zZm9ybUNhY2hhYmxlVmFsdWUodmFsdWUpO1xuICAgIC8vIE5vdCBhbGwgdHlwZXMgYXJlIHRyYW5zZm9ybWVkLlxuICAgIC8vIFRoZXNlIG1heSBiZSBwcmltaXRpdmUgdHlwZXMsIHNvIHRoZXkgY2FuJ3QgYmUgV2Vha01hcCBrZXlzLlxuICAgIGlmIChuZXdWYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgdHJhbnNmb3JtQ2FjaGUuc2V0KHZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgICAgIHJldmVyc2VUcmFuc2Zvcm1DYWNoZS5zZXQobmV3VmFsdWUsIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xufVxuY29uc3QgdW53cmFwID0gKHZhbHVlKSA9PiByZXZlcnNlVHJhbnNmb3JtQ2FjaGUuZ2V0KHZhbHVlKTtcblxuZXhwb3J0IHsgcmV2ZXJzZVRyYW5zZm9ybUNhY2hlIGFzIGEsIGluc3RhbmNlT2ZBbnkgYXMgaSwgcmVwbGFjZVRyYXBzIGFzIHIsIHVud3JhcCBhcyB1LCB3cmFwIGFzIHcgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbImZvcm1hdCIsInByb2plY3RCdXR0b24iLCJwcm9qZWN0Q291bnRlciIsInNhdmVUb0xvY2FsU3RvcmFnZSIsImluaXRET00iLCJjcmVhdGVQcm9qZWN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBvcHVwT3BlbiIsInByb2plY3QiLCJwcm9qZWN0Q2FuY2VsIiwiZSIsInByZXZlbnREZWZhdWx0IiwicG9wdXBDbG9zZSIsImVkaXRQcm9qZWN0IiwicHJvamVjdEVkaXQiLCJwcm9qZWN0RWRpdENhbmNlbCIsImNyZWF0ZVRvZG8iLCJpdGVtIiwiaXRlbUNhbmNlbCIsInRvZG9FZGl0Q2FuY2VsIiwiaXRlbUVkaXQiLCJzdHlsZSIsImRpc3BsYXkiLCJyZXNldCIsImN1cnJlbnRJdGVtIiwiY3JlYXRlRE9NIiwicHJvamVjdEluaXQiLCJfcHJvamVjdExpc3QiLCJwcm9qZWN0TGlzdCIsImkiLCJsZW5ndGgiLCJwcm9qZWN0cyIsImNyZWF0ZUVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImFkZCIsImFwcGVuZENoaWxkIiwiZWFjaFByb2plY3QiLCJfY3VycmVudFByb2plY3QiLCJfdG9kbyIsIl9wcm9qZWN0IiwiX250aFByb2plY3QiLCJfbnRoSXRlbSIsInRvZG9MaXN0IiwidG9kb0NvbnRhaW5lciIsInRvZG9CdXR0b24iLCJ0aXRsZSIsImNzc1RleHQiLCJzdGF0dXMiLCJ0b2RvSW5mb0J1dHRvbiIsInRpdGxlSW5mbyIsImRlc2NyaXB0aW9uSW5mbyIsInN0YXR1c0luZm8iLCJwcmlvcml0eUluZm8iLCJkdWVEYXRlSW5mbyIsImRlc2NyaXB0aW9uIiwicHJpb3JpdHkiLCJkdWVEYXRlIiwiRGF0ZSIsInJlcGxhY2UiLCJjbG9zZUJ1dHRvbiIsInRvZG9FZGl0QnV0dG9uIiwidG9kb0RlbGV0ZUJ1dHRvbiIsInJlbW92ZUNoaWxkIiwiaW5pdGlhbGl6ZUFwcCIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiY3VycmVudFByb2plY3QiLCJ0b2RvSXRlbSIsImNvbXBsZXRlVG9nZ2xlIiwiY3JlYXRlUHJvamVjdEFsZ29yIiwiX25hbWUiLCJwdXNoIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZWFkTG9jYWxTdG9yYWdlIiwicGFyc2UiLCJnZXRJdGVtIiwiY29uc29sZSIsImxvZyIsImluaXQiLCJmaWx0ZXIiLCJ0b2RvIiwiY2hpbGRyZW4iLCJyZW1vdmUiLCJzbGljZSIsImoiLCJmaXJzdENoaWxkIiwiZWFjaFRvZG8iLCJjbGljayIsImZvY3VzIiwicHJvamVjdFN1Ym1pdCIsInZhbHVlIiwiaXRlbVN1Ym1pdCIsImRlbGV0ZVByb2plY3QiLCJpdGVtRWRpdFN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=