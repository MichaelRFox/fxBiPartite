var fxBiPartite = function(exports) {
    var commonjsGlobal = 'undefined' != typeof globalThis ? globalThis : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : {};
    function createCommonjsModule(fn, basedir, module) {
        return module = {
            path: basedir,
            exports: {},
            require: function(path, base) {
                return commonjsRequire(path, null == base ? module.path : base);
            }
        }, fn(module, module.exports), module.exports;
    }
    function commonjsRequire() {
        throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
    }
    var check = function(it) {
        return it && it.Math == Math && it;
    };
    var global_1 = check('object' == typeof globalThis && globalThis) || check('object' == typeof window && window) || check('object' == typeof self && self) || check('object' == typeof commonjsGlobal && commonjsGlobal) || Function('return this')();
    var fails = function(exec) {
        try {
            return !!exec();
        } catch (error) {
            return true;
        }
    };
    var descriptors = !fails((function() {
        return 7 != Object.defineProperty({}, 1, {
            get: function() {
                return 7;
            }
        })[1];
    }));
    var nativePropertyIsEnumerable = {}.propertyIsEnumerable;
    var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var NASHORN_BUG = getOwnPropertyDescriptor && !nativePropertyIsEnumerable.call({
        1: 2
    }, 1);
    var f = NASHORN_BUG ? function propertyIsEnumerable(V) {
        var descriptor = getOwnPropertyDescriptor(this, V);
        return !!descriptor && descriptor.enumerable;
    } : nativePropertyIsEnumerable;
    var objectPropertyIsEnumerable = {
        f: f
    };
    var createPropertyDescriptor = function(bitmap, value) {
        return {
            enumerable: !(1 & bitmap),
            configurable: !(2 & bitmap),
            writable: !(4 & bitmap),
            value: value
        };
    };
    var toString = {}.toString;
    var classofRaw = function(it) {
        return toString.call(it).slice(8, -1);
    };
    var split = ''.split;
    var indexedObject = fails((function() {
        return !Object('z').propertyIsEnumerable(0);
    })) ? function(it) {
        return 'String' == classofRaw(it) ? split.call(it, '') : Object(it);
    } : Object;
    var requireObjectCoercible = function(it) {
        if (null == it) {
            throw TypeError('Can\'t call method on ' + it);
        }
        return it;
    };
    var toIndexedObject = function(it) {
        return indexedObject(requireObjectCoercible(it));
    };
    var isObject = function(it) {
        return 'object' == typeof it ? null !== it : 'function' == typeof it;
    };
    var toPrimitive = function(input, PREFERRED_STRING) {
        if (!isObject(input)) {
            return input;
        }
        var fn, val;
        if (PREFERRED_STRING && 'function' == typeof (fn = input.toString) && !isObject(val = fn.call(input))) {
            return val;
        }
        if ('function' == typeof (fn = input.valueOf) && !isObject(val = fn.call(input))) {
            return val;
        }
        if (!PREFERRED_STRING && 'function' == typeof (fn = input.toString) && !isObject(val = fn.call(input))) {
            return val;
        }
        throw TypeError('Can\'t convert object to primitive value');
    };
    var hasOwnProperty = {}.hasOwnProperty;
    var has = function(it, key) {
        return hasOwnProperty.call(it, key);
    };
    var document$1 = global_1.document;
    var EXISTS = isObject(document$1) && isObject(document$1.createElement);
    var documentCreateElement = function(it) {
        return EXISTS ? document$1.createElement(it) : {};
    };
    var ie8DomDefine = !descriptors && !fails((function() {
        return 7 != Object.defineProperty(documentCreateElement('div'), 'a', {
            get: function() {
                return 7;
            }
        }).a;
    }));
    var nativeGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var f$1 = descriptors ? nativeGetOwnPropertyDescriptor : function getOwnPropertyDescriptor(O, P) {
        O = toIndexedObject(O);
        P = toPrimitive(P, true);
        if (ie8DomDefine) {
            try {
                return nativeGetOwnPropertyDescriptor(O, P);
            } catch (error) {}
        }
        if (has(O, P)) {
            return createPropertyDescriptor(!objectPropertyIsEnumerable.f.call(O, P), O[P]);
        }
    };
    var objectGetOwnPropertyDescriptor = {
        f: f$1
    };
    var anObject = function(it) {
        if (!isObject(it)) {
            throw TypeError(String(it) + ' is not an object');
        }
        return it;
    };
    var nativeDefineProperty = Object.defineProperty;
    var f$2 = descriptors ? nativeDefineProperty : function defineProperty(O, P, Attributes) {
        anObject(O);
        P = toPrimitive(P, true);
        anObject(Attributes);
        if (ie8DomDefine) {
            try {
                return nativeDefineProperty(O, P, Attributes);
            } catch (error) {}
        }
        if ('get' in Attributes || 'set' in Attributes) {
            throw TypeError('Accessors not supported');
        }
        'value' in Attributes && (O[P] = Attributes.value);
        return O;
    };
    var objectDefineProperty = {
        f: f$2
    };
    var createNonEnumerableProperty = descriptors ? function(object, key, value) {
        return objectDefineProperty.f(object, key, createPropertyDescriptor(1, value));
    } : function(object, key, value) {
        object[key] = value;
        return object;
    };
    var setGlobal = function(key, value) {
        try {
            createNonEnumerableProperty(global_1, key, value);
        } catch (error) {
            global_1[key] = value;
        }
        return value;
    };
    var SHARED = '__core-js_shared__';
    var store = global_1[SHARED] || setGlobal(SHARED, {});
    var sharedStore = store;
    var functionToString = Function.toString;
    'function' != typeof sharedStore.inspectSource && (sharedStore.inspectSource = function(it) {
        return functionToString.call(it);
    });
    var inspectSource = sharedStore.inspectSource;
    var WeakMap = global_1.WeakMap;
    var nativeWeakMap = 'function' == typeof WeakMap && /native code/.test(inspectSource(WeakMap));
    var shared = createCommonjsModule((function(module) {
        (module.exports = function(key, value) {
            return sharedStore[key] || (sharedStore[key] = void 0 !== value ? value : {});
        })('versions', []).push({
            version: '3.6.5',
            mode: 'global',
            copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
        });
    }));
    var id = 0;
    var postfix = Math.random();
    var uid = function(key) {
        return 'Symbol(' + String(void 0 === key ? '' : key) + ')_' + (++id + postfix).toString(36);
    };
    var keys = shared('keys');
    var sharedKey = function(key) {
        return keys[key] || (keys[key] = uid(key));
    };
    var hiddenKeys = {};
    var WeakMap$1 = global_1.WeakMap;
    var set, get, has$1;
    var enforce = function(it) {
        return has$1(it) ? get(it) : set(it, {});
    };
    var getterFor = function(TYPE) {
        return function(it) {
            var state;
            if (!isObject(it) || (state = get(it)).type !== TYPE) {
                throw TypeError('Incompatible receiver, ' + TYPE + ' required');
            }
            return state;
        };
    };
    if (nativeWeakMap) {
        var store$1 = new WeakMap$1;
        var wmget = store$1.get;
        var wmhas = store$1.has;
        var wmset = store$1.set;
        set = function(it, metadata) {
            wmset.call(store$1, it, metadata);
            return metadata;
        };
        get = function(it) {
            return wmget.call(store$1, it) || {};
        };
        has$1 = function(it) {
            return wmhas.call(store$1, it);
        };
    } else {
        var STATE = sharedKey('state');
        hiddenKeys[STATE] = true;
        set = function(it, metadata) {
            createNonEnumerableProperty(it, STATE, metadata);
            return metadata;
        };
        get = function(it) {
            return has(it, STATE) ? it[STATE] : {};
        };
        has$1 = function(it) {
            return has(it, STATE);
        };
    }
    var internalState = {
        set: set,
        get: get,
        has: has$1,
        enforce: enforce,
        getterFor: getterFor
    };
    var redefine = createCommonjsModule((function(module) {
        var getInternalState = internalState.get;
        var enforceInternalState = internalState.enforce;
        var TEMPLATE = String(String).split('String');
        (module.exports = function(O, key, value, options) {
            var unsafe = !!options && !!options.unsafe;
            var simple = !!options && !!options.enumerable;
            var noTargetGet = !!options && !!options.noTargetGet;
            if ('function' == typeof value) {
                'string' != typeof key || has(value, 'name') || createNonEnumerableProperty(value, 'name', key);
                enforceInternalState(value).source = TEMPLATE.join('string' == typeof key ? key : '');
            }
            if (O !== global_1) {
                unsafe ? !noTargetGet && O[key] && (simple = true) : delete O[key];
                simple ? O[key] = value : createNonEnumerableProperty(O, key, value);
            } else {
                simple ? O[key] = value : setGlobal(key, value);
            }
        })(Function.prototype, 'toString', (function toString() {
            return 'function' == typeof this && getInternalState(this).source || inspectSource(this);
        }));
    }));
    var path = global_1;
    var aFunction = function(variable) {
        return 'function' == typeof variable ? variable : void 0;
    };
    var getBuiltIn = function(namespace, method) {
        return arguments.length < 2 ? aFunction(path[namespace]) || aFunction(global_1[namespace]) : path[namespace] && path[namespace][method] || global_1[namespace] && global_1[namespace][method];
    };
    var ceil = Math.ceil;
    var floor = Math.floor;
    var toInteger = function(argument) {
        return isNaN(argument = +argument) ? 0 : (argument > 0 ? floor : ceil)(argument);
    };
    var min = Math.min;
    var toLength = function(argument) {
        return argument > 0 ? min(toInteger(argument), 0x1FFFFFFFFFFFFF) : 0;
    };
    var max = Math.max;
    var min$1 = Math.min;
    var toAbsoluteIndex = function(index, length) {
        var integer = toInteger(index);
        return integer < 0 ? max(integer + length, 0) : min$1(integer, length);
    };
    var createMethod = function(IS_INCLUDES) {
        return function($this, el, fromIndex) {
            var O = toIndexedObject($this);
            var length = toLength(O.length);
            var index = toAbsoluteIndex(fromIndex, length);
            var value;
            if (IS_INCLUDES && el != el) {
                while (length > index) {
                    value = O[index++];
                    if (value != value) {
                        return true;
                    }
                }
            } else {
                for (;length > index; index++) {
                    if ((IS_INCLUDES || index in O) && O[index] === el) {
                        return IS_INCLUDES || index || 0;
                    }
                }
            }
            return !IS_INCLUDES && -1;
        };
    };
    var arrayIncludes = {
        includes: createMethod(true),
        indexOf: createMethod(false)
    };
    var indexOf = arrayIncludes.indexOf;
    var objectKeysInternal = function(object, names) {
        var O = toIndexedObject(object);
        var i = 0;
        var result = [];
        var key;
        for (key in O) {
            !has(hiddenKeys, key) && has(O, key) && result.push(key);
        }
        while (names.length > i) {
            has(O, key = names[i++]) && (~indexOf(result, key) || result.push(key));
        }
        return result;
    };
    var enumBugKeys = [ 'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf' ];
    var hiddenKeys$1 = enumBugKeys.concat('length', 'prototype');
    var f$3 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
        return objectKeysInternal(O, hiddenKeys$1);
    };
    var objectGetOwnPropertyNames = {
        f: f$3
    };
    var f$4 = Object.getOwnPropertySymbols;
    var objectGetOwnPropertySymbols = {
        f: f$4
    };
    var ownKeys = getBuiltIn('Reflect', 'ownKeys') || function ownKeys(it) {
        var keys = objectGetOwnPropertyNames.f(anObject(it));
        var getOwnPropertySymbols = objectGetOwnPropertySymbols.f;
        return getOwnPropertySymbols ? keys.concat(getOwnPropertySymbols(it)) : keys;
    };
    var copyConstructorProperties = function(target, source) {
        var keys = ownKeys(source);
        var defineProperty = objectDefineProperty.f;
        var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
        for (var i = 0; i < keys.length; i++) {
            var key = keys[i];
            has(target, key) || defineProperty(target, key, getOwnPropertyDescriptor(source, key));
        }
    };
    var replacement = /#|\.prototype\./;
    var isForced = function(feature, detection) {
        var value = data[normalize(feature)];
        return value == POLYFILL || value != NATIVE && ('function' == typeof detection ? fails(detection) : !!detection);
    };
    var normalize = isForced.normalize = function(string) {
        return String(string).replace(replacement, '.').toLowerCase();
    };
    var data = isForced.data = {};
    var NATIVE = isForced.NATIVE = 'N';
    var POLYFILL = isForced.POLYFILL = 'P';
    var isForced_1 = isForced;
    var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
    var _export = function(options, source) {
        var TARGET = options.target;
        var GLOBAL = options.global;
        var STATIC = options.stat;
        var FORCED, target, key, targetProperty, sourceProperty, descriptor;
        target = GLOBAL ? global_1 : STATIC ? global_1[TARGET] || setGlobal(TARGET, {}) : (global_1[TARGET] || {}).prototype;
        if (target) {
            for (key in source) {
                sourceProperty = source[key];
                if (options.noTargetGet) {
                    descriptor = getOwnPropertyDescriptor$1(target, key);
                    targetProperty = descriptor && descriptor.value;
                } else {
                    targetProperty = target[key];
                }
                FORCED = isForced_1(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced);
                if (!FORCED && void 0 !== targetProperty) {
                    if (typeof sourceProperty == typeof targetProperty) {
                        continue;
                    }
                    copyConstructorProperties(sourceProperty, targetProperty);
                }
                (options.sham || targetProperty && targetProperty.sham) && createNonEnumerableProperty(sourceProperty, 'sham', true);
                redefine(target, key, sourceProperty, options);
            }
        }
    };
    var aFunction$1 = function(it) {
        if ('function' != typeof it) {
            throw TypeError(String(it) + ' is not a function');
        }
        return it;
    };
    var toObject = function(argument) {
        return Object(requireObjectCoercible(argument));
    };
    var arrayMethodIsStrict = function(METHOD_NAME, argument) {
        var method = [][METHOD_NAME];
        return !!method && fails((function() {
            method.call(null, argument || function() {
                throw 1;
            }, 1);
        }));
    };
    var test = [];
    var nativeSort = test.sort;
    var FAILS_ON_UNDEFINED = fails((function() {
        test.sort(void 0);
    }));
    var FAILS_ON_NULL = fails((function() {
        test.sort(null);
    }));
    var STRICT_METHOD = arrayMethodIsStrict('sort');
    var FORCED = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD;
    _export({
        target: 'Array',
        proto: true,
        forced: FORCED
    }, {
        sort: function sort(comparefn) {
            return void 0 === comparefn ? nativeSort.call(toObject(this)) : nativeSort.call(toObject(this), aFunction$1(comparefn));
        }
    });
    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _toConsumableArray(arr) {
        return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
        if (Array.isArray(arr)) {
            return _arrayLikeToArray(arr);
        }
    }
    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) {
            return arr;
        }
    }
    function _iterableToArray(iter) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(iter)) {
            return Array.from(iter);
        }
    }
    function _iterableToArrayLimit(arr, i) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(arr)) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) {
                        break;
                    }
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    _n || null == _i['return'] || _i['return']();
                } finally {
                    if (_d) {
                        throw _e;
                    }
                }
            }
            return _arr;
        }
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (o) {
            if ('string' == typeof o) {
                return _arrayLikeToArray(o, minLen);
            }
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            return 'Map' === n || 'Set' === n ? Array.from(o) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0;
        }
    }
    function _arrayLikeToArray(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }
    function _nonIterableSpread() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    function _nonIterableRest() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    var isArray = Array.isArray || function isArray(arg) {
        return 'Array' == classofRaw(arg);
    };
    var createProperty = function(object, key, value) {
        var propertyKey = toPrimitive(key);
        propertyKey in object ? objectDefineProperty.f(object, propertyKey, createPropertyDescriptor(0, value)) : object[propertyKey] = value;
    };
    var nativeSymbol = !!Object.getOwnPropertySymbols && !fails((function() {
        return !String(Symbol());
    }));
    var useSymbolAsUid = nativeSymbol && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
    var WellKnownSymbolsStore = shared('wks');
    var Symbol$1 = global_1.Symbol;
    var createWellKnownSymbol = useSymbolAsUid ? Symbol$1 : Symbol$1 && Symbol$1.withoutSetter || uid;
    var wellKnownSymbol = function(name) {
        has(WellKnownSymbolsStore, name) || (nativeSymbol && has(Symbol$1, name) ? WellKnownSymbolsStore[name] = Symbol$1[name] : WellKnownSymbolsStore[name] = createWellKnownSymbol('Symbol.' + name));
        return WellKnownSymbolsStore[name];
    };
    var SPECIES = wellKnownSymbol('species');
    var arraySpeciesCreate = function(originalArray, length) {
        var C;
        if (isArray(originalArray)) {
            C = originalArray.constructor;
            if ('function' != typeof C || C !== Array && !isArray(C.prototype)) {
                if (isObject(C)) {
                    C = C[SPECIES];
                    null === C && (C = void 0);
                }
            } else {
                C = void 0;
            }
        }
        return new (void 0 === C ? Array : C)(0 === length ? 0 : length);
    };
    var engineUserAgent = getBuiltIn('navigator', 'userAgent') || '';
    var process = global_1.process;
    var versions = process && process.versions;
    var v8 = versions && versions.v8;
    var match, version;
    if (v8) {
        match = v8.split('.');
        version = match[0] + match[1];
    } else if (engineUserAgent) {
        match = engineUserAgent.match(/Edge\/(\d+)/);
        if (!match || match[1] >= 74) {
            match = engineUserAgent.match(/Chrome\/(\d+)/);
            match && (version = match[1]);
        }
    }
    var engineV8Version = version && +version;
    var SPECIES$1 = wellKnownSymbol('species');
    var arrayMethodHasSpeciesSupport = function(METHOD_NAME) {
        return engineV8Version >= 51 || !fails((function() {
            var array = [];
            var constructor = array.constructor = {};
            constructor[SPECIES$1] = function() {
                return {
                    foo: 1
                };
            };
            return 1 !== array[METHOD_NAME](Boolean).foo;
        }));
    };
    var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');
    var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
    var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
    var IS_CONCAT_SPREADABLE_SUPPORT = engineV8Version >= 51 || !fails((function() {
        var array = [];
        array[IS_CONCAT_SPREADABLE] = false;
        return array.concat()[0] !== array;
    }));
    var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');
    var isConcatSpreadable = function(O) {
        if (!isObject(O)) {
            return false;
        }
        var spreadable = O[IS_CONCAT_SPREADABLE];
        return void 0 !== spreadable ? !!spreadable : isArray(O);
    };
    var FORCED$1 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT;
    _export({
        target: 'Array',
        proto: true,
        forced: FORCED$1
    }, {
        concat: function concat(arg) {
            var O = toObject(this);
            var A = arraySpeciesCreate(O, 0);
            var n = 0;
            var i, k, length, len, E;
            for (i = -1, length = arguments.length; i < length; i++) {
                E = -1 === i ? O : arguments[i];
                if (isConcatSpreadable(E)) {
                    len = toLength(E.length);
                    if (n + len > MAX_SAFE_INTEGER) {
                        throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    }
                    for (k = 0; k < len; k++, n++) {
                        k in E && createProperty(A, n, E[k]);
                    }
                } else {
                    if (n >= MAX_SAFE_INTEGER) {
                        throw TypeError(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
                    }
                    createProperty(A, n++, E);
                }
            }
            A.length = n;
            return A;
        }
    });
    var xhtml = 'http://www.w3.org/1999/xhtml';
    var namespaces = {
        svg: 'http://www.w3.org/2000/svg',
        xhtml: xhtml,
        xlink: 'http://www.w3.org/1999/xlink',
        xml: 'http://www.w3.org/XML/1998/namespace',
        xmlns: 'http://www.w3.org/2000/xmlns/'
    };
    function namespace(name) {
        var prefix = name += '', i = prefix.indexOf(':');
        i >= 0 && 'xmlns' !== (prefix = name.slice(0, i)) && (name = name.slice(i + 1));
        return namespaces.hasOwnProperty(prefix) ? {
            space: namespaces[prefix],
            local: name
        } : name;
    }
    function creatorInherit(name) {
        return function() {
            var document = this.ownerDocument, uri = this.namespaceURI;
            return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
        };
    }
    function creatorFixed(fullname) {
        return function() {
            return this.ownerDocument.createElementNS(fullname.space, fullname.local);
        };
    }
    function creator(name) {
        var fullname = namespace(name);
        return (fullname.local ? creatorFixed : creatorInherit)(fullname);
    }
    function none() {}
    function selector(selector) {
        return null == selector ? none : function() {
            return this.querySelector(selector);
        };
    }
    function selection_select(select) {
        'function' != typeof select && (select = selector(select));
        for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
                if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                    '__data__' in node && (subnode.__data__ = node.__data__);
                    subgroup[i] = subnode;
                }
            }
        }
        return new Selection(subgroups, this._parents);
    }
    function empty() {
        return [];
    }
    function selectorAll(selector) {
        return null == selector ? empty : function() {
            return this.querySelectorAll(selector);
        };
    }
    function selection_selectAll(select) {
        'function' != typeof select && (select = selectorAll(select));
        for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
                if (node = group[i]) {
                    subgroups.push(select.call(node, node.__data__, i, group));
                    parents.push(node);
                }
            }
        }
        return new Selection(subgroups, parents);
    }
    function matcher(selector) {
        return function() {
            return this.matches(selector);
        };
    }
    function selection_filter(match) {
        'function' != typeof match && (match = matcher(match));
        for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
                (node = group[i]) && match.call(node, node.__data__, i, group) && subgroup.push(node);
            }
        }
        return new Selection(subgroups, this._parents);
    }
    function sparse(update) {
        return new Array(update.length);
    }
    function selection_enter() {
        return new Selection(this._enter || this._groups.map(sparse), this._parents);
    }
    function EnterNode(parent, datum) {
        this.ownerDocument = parent.ownerDocument;
        this.namespaceURI = parent.namespaceURI;
        this._next = null;
        this._parent = parent;
        this.__data__ = datum;
    }
    EnterNode.prototype = {
        constructor: EnterNode,
        appendChild: function(child) {
            return this._parent.insertBefore(child, this._next);
        },
        insertBefore: function(child, next) {
            return this._parent.insertBefore(child, next);
        },
        querySelector: function(selector) {
            return this._parent.querySelector(selector);
        },
        querySelectorAll: function(selector) {
            return this._parent.querySelectorAll(selector);
        }
    };
    function constant(x) {
        return function() {
            return x;
        };
    }
    var keyPrefix = '$';
    function bindIndex(parent, group, enter, update, exit, data) {
        var i = 0, node, groupLength = group.length, dataLength = data.length;
        for (;i < dataLength; ++i) {
            if (node = group[i]) {
                node.__data__ = data[i];
                update[i] = node;
            } else {
                enter[i] = new EnterNode(parent, data[i]);
            }
        }
        for (;i < groupLength; ++i) {
            (node = group[i]) && (exit[i] = node);
        }
    }
    function bindKey(parent, group, enter, update, exit, data, key) {
        var i, node, nodeByKeyValue = {}, groupLength = group.length, dataLength = data.length, keyValues = new Array(groupLength), keyValue;
        for (i = 0; i < groupLength; ++i) {
            if (node = group[i]) {
                keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
                keyValue in nodeByKeyValue ? exit[i] = node : nodeByKeyValue[keyValue] = node;
            }
        }
        for (i = 0; i < dataLength; ++i) {
            keyValue = keyPrefix + key.call(parent, data[i], i, data);
            if (node = nodeByKeyValue[keyValue]) {
                update[i] = node;
                node.__data__ = data[i];
                nodeByKeyValue[keyValue] = null;
            } else {
                enter[i] = new EnterNode(parent, data[i]);
            }
        }
        for (i = 0; i < groupLength; ++i) {
            (node = group[i]) && nodeByKeyValue[keyValues[i]] === node && (exit[i] = node);
        }
    }
    function selection_data(value, key) {
        if (!value) {
            data = new Array(this.size()), j = -1;
            this.each((function(d) {
                data[++j] = d;
            }));
            return data;
        }
        var bind = key ? bindKey : bindIndex, parents = this._parents, groups = this._groups;
        'function' != typeof value && (value = constant(value));
        for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
            var parent = parents[j], group = groups[j], groupLength = group.length, data = value.call(parent, parent && parent.__data__, j, parents), dataLength = data.length, enterGroup = enter[j] = new Array(dataLength), updateGroup = update[j] = new Array(dataLength), exitGroup = exit[j] = new Array(groupLength);
            bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);
            for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
                if (previous = enterGroup[i0]) {
                    i0 >= i1 && (i1 = i0 + 1);
                    while (!(next = updateGroup[i1]) && ++i1 < dataLength) {}
                    previous._next = next || null;
                }
            }
        }
        update = new Selection(update, parents);
        update._enter = enter;
        update._exit = exit;
        return update;
    }
    function selection_exit() {
        return new Selection(this._exit || this._groups.map(sparse), this._parents);
    }
    function selection_join(onenter, onupdate, onexit) {
        var enter = this.enter(), update = this, exit = this.exit();
        enter = 'function' == typeof onenter ? onenter(enter) : enter.append(onenter + '');
        null != onupdate && (update = onupdate(update));
        null == onexit ? exit.remove() : onexit(exit);
        return enter && update ? enter.merge(update).order() : update;
    }
    function selection_merge(selection) {
        for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
            for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
                (node = group0[i] || group1[i]) && (merge[i] = node);
            }
        }
        for (;j < m0; ++j) {
            merges[j] = groups0[j];
        }
        return new Selection(merges, this._parents);
    }
    function selection_order() {
        for (var groups = this._groups, j = -1, m = groups.length; ++j < m; ) {
            for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0; ) {
                if (node = group[i]) {
                    next && 4 ^ node.compareDocumentPosition(next) && next.parentNode.insertBefore(node, next);
                    next = node;
                }
            }
        }
        return this;
    }
    function selection_sort(compare) {
        compare || (compare = ascending);
        function compareNode(a, b) {
            return a && b ? compare(a.__data__, b.__data__) : !a - !b;
        }
        for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
                (node = group[i]) && (sortgroup[i] = node);
            }
            sortgroup.sort(compareNode);
        }
        return new Selection(sortgroups, this._parents).order();
    }
    function ascending(a, b) {
        return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
    }
    function selection_call() {
        var callback = arguments[0];
        arguments[0] = this;
        callback.apply(null, arguments);
        return this;
    }
    function selection_nodes() {
        var nodes = new Array(this.size()), i = -1;
        this.each((function() {
            nodes[++i] = this;
        }));
        return nodes;
    }
    function selection_node() {
        for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
            for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
                var node = group[i];
                if (node) {
                    return node;
                }
            }
        }
        return null;
    }
    function selection_size() {
        var size = 0;
        this.each((function() {
            ++size;
        }));
        return size;
    }
    function selection_empty() {
        return !this.node();
    }
    function selection_each(callback) {
        for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
            for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
                (node = group[i]) && callback.call(node, node.__data__, i, group);
            }
        }
        return this;
    }
    function attrRemove(name) {
        return function() {
            this.removeAttribute(name);
        };
    }
    function attrRemoveNS(fullname) {
        return function() {
            this.removeAttributeNS(fullname.space, fullname.local);
        };
    }
    function attrConstant(name, value) {
        return function() {
            this.setAttribute(name, value);
        };
    }
    function attrConstantNS(fullname, value) {
        return function() {
            this.setAttributeNS(fullname.space, fullname.local, value);
        };
    }
    function attrFunction(name, value) {
        return function() {
            var v = value.apply(this, arguments);
            null == v ? this.removeAttribute(name) : this.setAttribute(name, v);
        };
    }
    function attrFunctionNS(fullname, value) {
        return function() {
            var v = value.apply(this, arguments);
            null == v ? this.removeAttributeNS(fullname.space, fullname.local) : this.setAttributeNS(fullname.space, fullname.local, v);
        };
    }
    function selection_attr(name, value) {
        var fullname = namespace(name);
        if (arguments.length < 2) {
            var node = this.node();
            return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
        }
        return this.each((null == value ? fullname.local ? attrRemoveNS : attrRemove : 'function' == typeof value ? fullname.local ? attrFunctionNS : attrFunction : fullname.local ? attrConstantNS : attrConstant)(fullname, value));
    }
    function defaultView(node) {
        return node.ownerDocument && node.ownerDocument.defaultView || node.document && node || node.defaultView;
    }
    function styleRemove(name) {
        return function() {
            this.style.removeProperty(name);
        };
    }
    function styleConstant(name, value, priority) {
        return function() {
            this.style.setProperty(name, value, priority);
        };
    }
    function styleFunction(name, value, priority) {
        return function() {
            var v = value.apply(this, arguments);
            null == v ? this.style.removeProperty(name) : this.style.setProperty(name, v, priority);
        };
    }
    function selection_style(name, value, priority) {
        return arguments.length > 1 ? this.each((null == value ? styleRemove : 'function' == typeof value ? styleFunction : styleConstant)(name, value, null == priority ? '' : priority)) : styleValue(this.node(), name);
    }
    function styleValue(node, name) {
        return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
    }
    function propertyRemove(name) {
        return function() {
            delete this[name];
        };
    }
    function propertyConstant(name, value) {
        return function() {
            this[name] = value;
        };
    }
    function propertyFunction(name, value) {
        return function() {
            var v = value.apply(this, arguments);
            null == v ? delete this[name] : this[name] = v;
        };
    }
    function selection_property(name, value) {
        return arguments.length > 1 ? this.each((null == value ? propertyRemove : 'function' == typeof value ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
    }
    function classArray(string) {
        return string.trim().split(/^|\s+/);
    }
    function classList(node) {
        return node.classList || new ClassList(node);
    }
    function ClassList(node) {
        this._node = node;
        this._names = classArray(node.getAttribute('class') || '');
    }
    ClassList.prototype = {
        add: function(name) {
            var i = this._names.indexOf(name);
            if (i < 0) {
                this._names.push(name);
                this._node.setAttribute('class', this._names.join(' '));
            }
        },
        remove: function(name) {
            var i = this._names.indexOf(name);
            if (i >= 0) {
                this._names.splice(i, 1);
                this._node.setAttribute('class', this._names.join(' '));
            }
        },
        contains: function(name) {
            return this._names.indexOf(name) >= 0;
        }
    };
    function classedAdd(node, names) {
        var list = classList(node), i = -1, n = names.length;
        while (++i < n) {
            list.add(names[i]);
        }
    }
    function classedRemove(node, names) {
        var list = classList(node), i = -1, n = names.length;
        while (++i < n) {
            list.remove(names[i]);
        }
    }
    function classedTrue(names) {
        return function() {
            classedAdd(this, names);
        };
    }
    function classedFalse(names) {
        return function() {
            classedRemove(this, names);
        };
    }
    function classedFunction(names, value) {
        return function() {
            (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
        };
    }
    function selection_classed(name, value) {
        var names = classArray(name + '');
        if (arguments.length < 2) {
            var list = classList(this.node()), i = -1, n = names.length;
            while (++i < n) {
                if (!list.contains(names[i])) {
                    return false;
                }
            }
            return true;
        }
        return this.each(('function' == typeof value ? classedFunction : value ? classedTrue : classedFalse)(names, value));
    }
    function textRemove() {
        this.textContent = '';
    }
    function textConstant(value) {
        return function() {
            this.textContent = value;
        };
    }
    function textFunction(value) {
        return function() {
            var v = value.apply(this, arguments);
            this.textContent = null == v ? '' : v;
        };
    }
    function selection_text(value) {
        return arguments.length ? this.each(null == value ? textRemove : ('function' == typeof value ? textFunction : textConstant)(value)) : this.node().textContent;
    }
    function htmlRemove() {
        this.innerHTML = '';
    }
    function htmlConstant(value) {
        return function() {
            this.innerHTML = value;
        };
    }
    function htmlFunction(value) {
        return function() {
            var v = value.apply(this, arguments);
            this.innerHTML = null == v ? '' : v;
        };
    }
    function selection_html(value) {
        return arguments.length ? this.each(null == value ? htmlRemove : ('function' == typeof value ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
    }
    function raise() {
        this.nextSibling && this.parentNode.appendChild(this);
    }
    function selection_raise() {
        return this.each(raise);
    }
    function lower() {
        this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
    }
    function selection_lower() {
        return this.each(lower);
    }
    function selection_append(name) {
        var create = 'function' == typeof name ? name : creator(name);
        return this.select((function() {
            return this.appendChild(create.apply(this, arguments));
        }));
    }
    function constantNull() {
        return null;
    }
    function selection_insert(name, before) {
        var create = 'function' == typeof name ? name : creator(name), select = null == before ? constantNull : 'function' == typeof before ? before : selector(before);
        return this.select((function() {
            return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
        }));
    }
    function remove() {
        var parent = this.parentNode;
        parent && parent.removeChild(this);
    }
    function selection_remove() {
        return this.each(remove);
    }
    function selection_cloneShallow() {
        var clone = this.cloneNode(false), parent = this.parentNode;
        return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }
    function selection_cloneDeep() {
        var clone = this.cloneNode(true), parent = this.parentNode;
        return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
    }
    function selection_clone(deep) {
        return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
    }
    function selection_datum(value) {
        return arguments.length ? this.property('__data__', value) : this.node().__data__;
    }
    var filterEvents = {};
    var event = null;
    if ('undefined' != typeof document) {
        var element = document.documentElement;
        'onmouseenter' in element || (filterEvents = {
            mouseenter: 'mouseover',
            mouseleave: 'mouseout'
        });
    }
    function filterContextListener(listener, index, group) {
        listener = contextListener(listener, index, group);
        return function(event) {
            var related = event.relatedTarget;
            related && (related === this || 8 & related.compareDocumentPosition(this)) || listener.call(this, event);
        };
    }
    function contextListener(listener, index, group) {
        return function(event1) {
            var event0 = event;
            event = event1;
            try {
                listener.call(this, this.__data__, index, group);
            } finally {
                event = event0;
            }
        };
    }
    function parseTypenames(typenames) {
        return typenames.trim().split(/^|\s+/).map((function(t) {
            var name = '', i = t.indexOf('.');
            i >= 0 && (name = t.slice(i + 1), t = t.slice(0, i));
            return {
                type: t,
                name: name
            };
        }));
    }
    function onRemove(typename) {
        return function() {
            var on = this.__on;
            if (on) {
                for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
                    o = on[j], typename.type && o.type !== typename.type || o.name !== typename.name ? on[++i] = o : this.removeEventListener(o.type, o.listener, o.capture);
                }
                ++i ? on.length = i : delete this.__on;
            }
        };
    }
    function onAdd(typename, value, capture) {
        var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
        return function(d, i, group) {
            var on = this.__on, o, listener = wrap(value, i, group);
            if (on) {
                for (var j = 0, m = on.length; j < m; ++j) {
                    if ((o = on[j]).type === typename.type && o.name === typename.name) {
                        this.removeEventListener(o.type, o.listener, o.capture);
                        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
                        o.value = value;
                        return;
                    }
                }
            }
            this.addEventListener(typename.type, listener, capture);
            o = {
                type: typename.type,
                name: typename.name,
                value: value,
                listener: listener,
                capture: capture
            };
            on ? on.push(o) : this.__on = [ o ];
        };
    }
    function selection_on(typename, value, capture) {
        var typenames = parseTypenames(typename + ''), i, n = typenames.length, t;
        if (!(arguments.length < 2)) {
            on = value ? onAdd : onRemove;
            null == capture && (capture = false);
            for (i = 0; i < n; ++i) {
                this.each(on(typenames[i], value, capture));
            }
            return this;
        }
        var on = this.node().__on;
        if (on) {
            for (var j = 0, m = on.length, o; j < m; ++j) {
                for (i = 0, o = on[j]; i < n; ++i) {
                    if ((t = typenames[i]).type === o.type && t.name === o.name) {
                        return o.value;
                    }
                }
            }
        }
    }
    function dispatchEvent(node, type, params) {
        var window = defaultView(node), event = window.CustomEvent;
        if ('function' == typeof event) {
            event = new event(type, params);
        } else {
            event = window.document.createEvent('Event');
            params ? (event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail) : event.initEvent(type, false, false);
        }
        node.dispatchEvent(event);
    }
    function dispatchConstant(type, params) {
        return function() {
            return dispatchEvent(this, type, params);
        };
    }
    function dispatchFunction(type, params) {
        return function() {
            return dispatchEvent(this, type, params.apply(this, arguments));
        };
    }
    function selection_dispatch(type, params) {
        return this.each(('function' == typeof params ? dispatchFunction : dispatchConstant)(type, params));
    }
    var root = [ null ];
    function Selection(groups, parents) {
        this._groups = groups;
        this._parents = parents;
    }
    function selection() {
        return new Selection([ [ document.documentElement ] ], root);
    }
    Selection.prototype = selection.prototype = {
        constructor: Selection,
        select: selection_select,
        selectAll: selection_selectAll,
        filter: selection_filter,
        data: selection_data,
        enter: selection_enter,
        exit: selection_exit,
        join: selection_join,
        merge: selection_merge,
        order: selection_order,
        sort: selection_sort,
        call: selection_call,
        nodes: selection_nodes,
        node: selection_node,
        size: selection_size,
        empty: selection_empty,
        each: selection_each,
        attr: selection_attr,
        style: selection_style,
        property: selection_property,
        classed: selection_classed,
        text: selection_text,
        html: selection_html,
        raise: selection_raise,
        lower: selection_lower,
        append: selection_append,
        insert: selection_insert,
        remove: selection_remove,
        clone: selection_clone,
        datum: selection_datum,
        on: selection_on,
        dispatch: selection_dispatch
    };
    function select(selector) {
        return 'string' == typeof selector ? new Selection([ [ document.querySelector(selector) ] ], [ document.documentElement ]) : new Selection([ [ selector ] ], root);
    }
    function sourceEvent() {
        var current = event, source;
        while (source = current.sourceEvent) {
            current = source;
        }
        return current;
    }
    function point(node, event) {
        var svg = node.ownerSVGElement || node;
        if (svg.createSVGPoint) {
            var point = svg.createSVGPoint();
            point.x = event.clientX, point.y = event.clientY;
            point = point.matrixTransform(node.getScreenCTM().inverse());
            return [ point.x, point.y ];
        }
        var rect = node.getBoundingClientRect();
        return [ event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop ];
    }
    function mouse(node) {
        var event = sourceEvent();
        event.changedTouches && (event = event.changedTouches[0]);
        return point(node, event);
    }
    function selectAll(selector) {
        return 'string' == typeof selector ? new Selection([ document.querySelectorAll(selector) ], [ document.documentElement ]) : new Selection([ null == selector ? [] : selector ], root);
    }
    var noop = {
        value: function() {}
    };
    function dispatch() {
        for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
            if (!(t = arguments[i] + '') || t in _ || /[\s.]/.test(t)) {
                throw new Error('illegal type: ' + t);
            }
            _[t] = [];
        }
        return new Dispatch(_);
    }
    function Dispatch(_) {
        this._ = _;
    }
    function parseTypenames$1(typenames, types) {
        return typenames.trim().split(/^|\s+/).map((function(t) {
            var name = '', i = t.indexOf('.');
            i >= 0 && (name = t.slice(i + 1), t = t.slice(0, i));
            if (t && !types.hasOwnProperty(t)) {
                throw new Error('unknown type: ' + t);
            }
            return {
                type: t,
                name: name
            };
        }));
    }
    Dispatch.prototype = dispatch.prototype = {
        constructor: Dispatch,
        on: function(typename, callback) {
            var _ = this._, T = parseTypenames$1(typename + '', _), t, i = -1, n = T.length;
            if (!(arguments.length < 2)) {
                if (null != callback && 'function' != typeof callback) {
                    throw new Error('invalid callback: ' + callback);
                }
                while (++i < n) {
                    if (t = (typename = T[i]).type) {
                        _[t] = set$1(_[t], typename.name, callback);
                    } else if (null == callback) {
                        for (t in _) {
                            _[t] = set$1(_[t], typename.name, null);
                        }
                    }
                }
                return this;
            }
            while (++i < n) {
                if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) {
                    return t;
                }
            }
        },
        copy: function() {
            var copy = {}, _ = this._;
            for (var t in _) {
                copy[t] = _[t].slice();
            }
            return new Dispatch(copy);
        },
        call: function(type, that) {
            if ((n = arguments.length - 2) > 0) {
                for (var args = new Array(n), i = 0, n, t; i < n; ++i) {
                    args[i] = arguments[i + 2];
                }
            }
            if (!this._.hasOwnProperty(type)) {
                throw new Error('unknown type: ' + type);
            }
            for (t = this._[type], i = 0, n = t.length; i < n; ++i) {
                t[i].value.apply(that, args);
            }
        },
        apply: function(type, that, args) {
            if (!this._.hasOwnProperty(type)) {
                throw new Error('unknown type: ' + type);
            }
            for (var t = this._[type], i = 0, n = t.length; i < n; ++i) {
                t[i].value.apply(that, args);
            }
        }
    };
    function get$1(type, name) {
        for (var i = 0, n = type.length, c; i < n; ++i) {
            if ((c = type[i]).name === name) {
                return c.value;
            }
        }
    }
    function set$1(type, name, callback) {
        for (var i = 0, n = type.length; i < n; ++i) {
            if (type[i].name === name) {
                type[i] = noop, type = type.slice(0, i).concat(type.slice(i + 1));
                break;
            }
        }
        null != callback && type.push({
            name: name,
            value: callback
        });
        return type;
    }
    var frame = 0, timeout = 0, interval = 0, pokeDelay = 1000, taskHead, taskTail, clockLast = 0, clockNow = 0, clockSkew = 0, clock = 'object' == typeof performance && performance.now ? performance : Date, setFrame = 'object' == typeof window && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(f) {
        setTimeout(f, 17);
    };
    function now() {
        return clockNow || (setFrame(clearNow), clockNow = clock.now() + clockSkew);
    }
    function clearNow() {
        clockNow = 0;
    }
    function Timer() {
        this._call = this._time = this._next = null;
    }
    Timer.prototype = timer.prototype = {
        constructor: Timer,
        restart: function(callback, delay, time) {
            if ('function' != typeof callback) {
                throw new TypeError('callback is not a function');
            }
            time = (null == time ? now() : +time) + (null == delay ? 0 : +delay);
            if (!this._next && taskTail !== this) {
                taskTail ? taskTail._next = this : taskHead = this;
                taskTail = this;
            }
            this._call = callback;
            this._time = time;
            sleep();
        },
        stop: function() {
            if (this._call) {
                this._call = null;
                this._time = 1 / 0;
                sleep();
            }
        }
    };
    function timer(callback, delay, time) {
        var t = new Timer;
        t.restart(callback, delay, time);
        return t;
    }
    function timerFlush() {
        now();
        ++frame;
        var t = taskHead, e;
        while (t) {
            (e = clockNow - t._time) >= 0 && t._call.call(null, e);
            t = t._next;
        }
        --frame;
    }
    function wake() {
        clockNow = (clockLast = clock.now()) + clockSkew;
        frame = timeout = 0;
        try {
            timerFlush();
        } finally {
            frame = 0;
            nap();
            clockNow = 0;
        }
    }
    function poke() {
        var now = clock.now(), delay = now - clockLast;
        delay > pokeDelay && (clockSkew -= delay, clockLast = now);
    }
    function nap() {
        var t0, t1 = taskHead, t2, time = 1 / 0;
        while (t1) {
            if (t1._call) {
                time > t1._time && (time = t1._time);
                t0 = t1, t1 = t1._next;
            } else {
                t2 = t1._next, t1._next = null;
                t1 = t0 ? t0._next = t2 : taskHead = t2;
            }
        }
        taskTail = t0;
        sleep(time);
    }
    function sleep(time) {
        if (!frame) {
            timeout && (timeout = clearTimeout(timeout));
            var delay = time - clockNow;
            if (delay > 24) {
                time < 1 / 0 && (timeout = setTimeout(wake, time - clock.now() - clockSkew));
                interval && (interval = clearInterval(interval));
            } else {
                interval || (clockLast = clock.now(), interval = setInterval(poke, pokeDelay));
                frame = 1, setFrame(wake);
            }
        }
    }
    function timeout$1(callback, delay, time) {
        var t = new Timer;
        delay = null == delay ? 0 : +delay;
        t.restart((function(elapsed) {
            t.stop();
            callback(elapsed + delay);
        }), delay, time);
        return t;
    }
    var emptyOn = dispatch('start', 'end', 'cancel', 'interrupt');
    var emptyTween = [];
    var CREATED = 0;
    var SCHEDULED = 1;
    var STARTING = 2;
    var STARTED = 3;
    var RUNNING = 4;
    var ENDING = 5;
    var ENDED = 6;
    function schedule(node, name, id, index, group, timing) {
        var schedules = node.__transition;
        if (schedules) {
            if (id in schedules) {
                return;
            }
        } else {
            node.__transition = {};
        }
        create(node, id, {
            name: name,
            index: index,
            group: group,
            on: emptyOn,
            tween: emptyTween,
            time: timing.time,
            delay: timing.delay,
            duration: timing.duration,
            ease: timing.ease,
            timer: null,
            state: CREATED
        });
    }
    function init(node, id) {
        var schedule = get$2(node, id);
        if (schedule.state > CREATED) {
            throw new Error('too late; already scheduled');
        }
        return schedule;
    }
    function set$2(node, id) {
        var schedule = get$2(node, id);
        if (schedule.state > STARTED) {
            throw new Error('too late; already running');
        }
        return schedule;
    }
    function get$2(node, id) {
        var schedule = node.__transition;
        if (!schedule || !(schedule = schedule[id])) {
            throw new Error('transition not found');
        }
        return schedule;
    }
    function create(node, id, self) {
        var schedules = node.__transition, tween;
        schedules[id] = self;
        self.timer = timer(schedule, 0, self.time);
        function schedule(elapsed) {
            self.state = SCHEDULED;
            self.timer.restart(start, self.delay, self.time);
            self.delay <= elapsed && start(elapsed - self.delay);
        }
        function start(elapsed) {
            var i, j, n, o;
            if (self.state !== SCHEDULED) {
                return stop();
            }
            for (i in schedules) {
                o = schedules[i];
                if (o.name === self.name) {
                    if (o.state === STARTED) {
                        return timeout$1(start);
                    }
                    if (o.state === RUNNING) {
                        o.state = ENDED;
                        o.timer.stop();
                        o.on.call('interrupt', node, node.__data__, o.index, o.group);
                        delete schedules[i];
                    } else if (+i < id) {
                        o.state = ENDED;
                        o.timer.stop();
                        o.on.call('cancel', node, node.__data__, o.index, o.group);
                        delete schedules[i];
                    }
                }
            }
            timeout$1((function() {
                if (self.state === STARTED) {
                    self.state = RUNNING;
                    self.timer.restart(tick, self.delay, self.time);
                    tick(elapsed);
                }
            }));
            self.state = STARTING;
            self.on.call('start', node, node.__data__, self.index, self.group);
            if (self.state === STARTING) {
                self.state = STARTED;
                tween = new Array(n = self.tween.length);
                for (i = 0, j = -1; i < n; ++i) {
                    (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) && (tween[++j] = o);
                }
                tween.length = j + 1;
            }
        }
        function tick(elapsed) {
            var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), 
            self.state = ENDING, 1), i = -1, n = tween.length;
            while (++i < n) {
                tween[i].call(node, t);
            }
            if (self.state === ENDING) {
                self.on.call('end', node, node.__data__, self.index, self.group);
                stop();
            }
        }
        function stop() {
            self.state = ENDED;
            self.timer.stop();
            delete schedules[id];
            for (var i in schedules) {
                return;
            }
            delete node.__transition;
        }
    }
    function interrupt(node, name) {
        var schedules = node.__transition, schedule, active, empty = true, i;
        if (schedules) {
            name = null == name ? null : name + '';
            for (i in schedules) {
                if ((schedule = schedules[i]).name === name) {
                    active = schedule.state > STARTING && schedule.state < ENDING;
                    schedule.state = ENDED;
                    schedule.timer.stop();
                    schedule.on.call(active ? 'interrupt' : 'cancel', node, node.__data__, schedule.index, schedule.group);
                    delete schedules[i];
                } else {
                    empty = false;
                }
            }
            empty && delete node.__transition;
        }
    }
    function selection_interrupt(name) {
        return this.each((function() {
            interrupt(this, name);
        }));
    }
    function define(constructor, factory, prototype) {
        constructor.prototype = factory.prototype = prototype;
        prototype.constructor = constructor;
    }
    function extend(parent, definition) {
        var prototype = Object.create(parent.prototype);
        for (var key in definition) {
            prototype[key] = definition[key];
        }
        return prototype;
    }
    function Color() {}
    var darker = 0.7;
    var brighter = 1 / darker;
    var reI = '\\s*([+-]?\\d+)\\s*', reN = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*', reP = '\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*', reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp('^rgb\\(' + [ reI, reI, reI ] + '\\)$'), reRgbPercent = new RegExp('^rgb\\(' + [ reP, reP, reP ] + '\\)$'), reRgbaInteger = new RegExp('^rgba\\(' + [ reI, reI, reI, reN ] + '\\)$'), reRgbaPercent = new RegExp('^rgba\\(' + [ reP, reP, reP, reN ] + '\\)$'), reHslPercent = new RegExp('^hsl\\(' + [ reN, reP, reP ] + '\\)$'), reHslaPercent = new RegExp('^hsla\\(' + [ reN, reP, reP, reN ] + '\\)$');
    var named = {
        aliceblue: 0xf0f8ff,
        antiquewhite: 0xfaebd7,
        aqua: 0x00ffff,
        aquamarine: 0x7fffd4,
        azure: 0xf0ffff,
        beige: 0xf5f5dc,
        bisque: 0xffe4c4,
        black: 0x000000,
        blanchedalmond: 0xffebcd,
        blue: 0x0000ff,
        blueviolet: 0x8a2be2,
        brown: 0xa52a2a,
        burlywood: 0xdeb887,
        cadetblue: 0x5f9ea0,
        chartreuse: 0x7fff00,
        chocolate: 0xd2691e,
        coral: 0xff7f50,
        cornflowerblue: 0x6495ed,
        cornsilk: 0xfff8dc,
        crimson: 0xdc143c,
        cyan: 0x00ffff,
        darkblue: 0x00008b,
        darkcyan: 0x008b8b,
        darkgoldenrod: 0xb8860b,
        darkgray: 0xa9a9a9,
        darkgreen: 0x006400,
        darkgrey: 0xa9a9a9,
        darkkhaki: 0xbdb76b,
        darkmagenta: 0x8b008b,
        darkolivegreen: 0x556b2f,
        darkorange: 0xff8c00,
        darkorchid: 0x9932cc,
        darkred: 0x8b0000,
        darksalmon: 0xe9967a,
        darkseagreen: 0x8fbc8f,
        darkslateblue: 0x483d8b,
        darkslategray: 0x2f4f4f,
        darkslategrey: 0x2f4f4f,
        darkturquoise: 0x00ced1,
        darkviolet: 0x9400d3,
        deeppink: 0xff1493,
        deepskyblue: 0x00bfff,
        dimgray: 0x696969,
        dimgrey: 0x696969,
        dodgerblue: 0x1e90ff,
        firebrick: 0xb22222,
        floralwhite: 0xfffaf0,
        forestgreen: 0x228b22,
        fuchsia: 0xff00ff,
        gainsboro: 0xdcdcdc,
        ghostwhite: 0xf8f8ff,
        gold: 0xffd700,
        goldenrod: 0xdaa520,
        gray: 0x808080,
        green: 0x008000,
        greenyellow: 0xadff2f,
        grey: 0x808080,
        honeydew: 0xf0fff0,
        hotpink: 0xff69b4,
        indianred: 0xcd5c5c,
        indigo: 0x4b0082,
        ivory: 0xfffff0,
        khaki: 0xf0e68c,
        lavender: 0xe6e6fa,
        lavenderblush: 0xfff0f5,
        lawngreen: 0x7cfc00,
        lemonchiffon: 0xfffacd,
        lightblue: 0xadd8e6,
        lightcoral: 0xf08080,
        lightcyan: 0xe0ffff,
        lightgoldenrodyellow: 0xfafad2,
        lightgray: 0xd3d3d3,
        lightgreen: 0x90ee90,
        lightgrey: 0xd3d3d3,
        lightpink: 0xffb6c1,
        lightsalmon: 0xffa07a,
        lightseagreen: 0x20b2aa,
        lightskyblue: 0x87cefa,
        lightslategray: 0x778899,
        lightslategrey: 0x778899,
        lightsteelblue: 0xb0c4de,
        lightyellow: 0xffffe0,
        lime: 0x00ff00,
        limegreen: 0x32cd32,
        linen: 0xfaf0e6,
        magenta: 0xff00ff,
        maroon: 0x800000,
        mediumaquamarine: 0x66cdaa,
        mediumblue: 0x0000cd,
        mediumorchid: 0xba55d3,
        mediumpurple: 0x9370db,
        mediumseagreen: 0x3cb371,
        mediumslateblue: 0x7b68ee,
        mediumspringgreen: 0x00fa9a,
        mediumturquoise: 0x48d1cc,
        mediumvioletred: 0xc71585,
        midnightblue: 0x191970,
        mintcream: 0xf5fffa,
        mistyrose: 0xffe4e1,
        moccasin: 0xffe4b5,
        navajowhite: 0xffdead,
        navy: 0x000080,
        oldlace: 0xfdf5e6,
        olive: 0x808000,
        olivedrab: 0x6b8e23,
        orange: 0xffa500,
        orangered: 0xff4500,
        orchid: 0xda70d6,
        palegoldenrod: 0xeee8aa,
        palegreen: 0x98fb98,
        paleturquoise: 0xafeeee,
        palevioletred: 0xdb7093,
        papayawhip: 0xffefd5,
        peachpuff: 0xffdab9,
        peru: 0xcd853f,
        pink: 0xffc0cb,
        plum: 0xdda0dd,
        powderblue: 0xb0e0e6,
        purple: 0x800080,
        rebeccapurple: 0x663399,
        red: 0xff0000,
        rosybrown: 0xbc8f8f,
        royalblue: 0x4169e1,
        saddlebrown: 0x8b4513,
        salmon: 0xfa8072,
        sandybrown: 0xf4a460,
        seagreen: 0x2e8b57,
        seashell: 0xfff5ee,
        sienna: 0xa0522d,
        silver: 0xc0c0c0,
        skyblue: 0x87ceeb,
        slateblue: 0x6a5acd,
        slategray: 0x708090,
        slategrey: 0x708090,
        snow: 0xfffafa,
        springgreen: 0x00ff7f,
        steelblue: 0x4682b4,
        tan: 0xd2b48c,
        teal: 0x008080,
        thistle: 0xd8bfd8,
        tomato: 0xff6347,
        turquoise: 0x40e0d0,
        violet: 0xee82ee,
        wheat: 0xf5deb3,
        white: 0xffffff,
        whitesmoke: 0xf5f5f5,
        yellow: 0xffff00,
        yellowgreen: 0x9acd32
    };
    define(Color, color, {
        copy: function(channels) {
            return Object.assign(new this.constructor, this, channels);
        },
        displayable: function() {
            return this.rgb().displayable();
        },
        hex: color_formatHex,
        formatHex: color_formatHex,
        formatHsl: color_formatHsl,
        formatRgb: color_formatRgb,
        toString: color_formatRgb
    });
    function color_formatHex() {
        return this.rgb().formatHex();
    }
    function color_formatHsl() {
        return hslConvert(this).formatHsl();
    }
    function color_formatRgb() {
        return this.rgb().formatRgb();
    }
    function color(format) {
        var m, l;
        format = (format + '').trim().toLowerCase();
        return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), 6 === l ? rgbn(m) : 3 === l ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | 0xf0 & m, (0xf & m) << 4 | 0xf & m, 1) : 8 === l ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (0xff & m) / 0xff) : 4 === l ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | 0xf0 & m, ((0xf & m) << 4 | 0xf & m) / 0xff) : null) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format)) ? new Rgb(255 * m[1] / 100, 255 * m[2] / 100, 255 * m[3] / 100, 1) : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format)) ? rgba(255 * m[1] / 100, 255 * m[2] / 100, 255 * m[3] / 100, m[4]) : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format) ? rgbn(named[format]) : 'transparent' === format ? new Rgb(NaN, NaN, NaN, 0) : null;
    }
    function rgbn(n) {
        return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, 0xff & n, 1);
    }
    function rgba(r, g, b, a) {
        a <= 0 && (r = g = b = NaN);
        return new Rgb(r, g, b, a);
    }
    function rgbConvert(o) {
        o instanceof Color || (o = color(o));
        if (!o) {
            return new Rgb;
        }
        o = o.rgb();
        return new Rgb(o.r, o.g, o.b, o.opacity);
    }
    function rgb(r, g, b, opacity) {
        return 1 === arguments.length ? rgbConvert(r) : new Rgb(r, g, b, null == opacity ? 1 : opacity);
    }
    function Rgb(r, g, b, opacity) {
        this.r = +r;
        this.g = +g;
        this.b = +b;
        this.opacity = +opacity;
    }
    define(Rgb, rgb, extend(Color, {
        brighter: function(k) {
            k = null == k ? brighter : Math.pow(brighter, k);
            return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
        },
        darker: function(k) {
            k = null == k ? darker : Math.pow(darker, k);
            return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
        },
        rgb: function() {
            return this;
        },
        displayable: function() {
            return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
        },
        hex: rgb_formatHex,
        formatHex: rgb_formatHex,
        formatRgb: rgb_formatRgb,
        toString: rgb_formatRgb
    }));
    function rgb_formatHex() {
        return '#' + hex(this.r) + hex(this.g) + hex(this.b);
    }
    function rgb_formatRgb() {
        var a = this.opacity;
        a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
        return (1 === a ? 'rgb(' : 'rgba(') + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ', ' + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ', ' + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (1 === a ? ')' : ', ' + a + ')');
    }
    function hex(value) {
        value = Math.max(0, Math.min(255, Math.round(value) || 0));
        return (value < 16 ? '0' : '') + value.toString(16);
    }
    function hsla(h, s, l, a) {
        a <= 0 ? h = s = l = NaN : l <= 0 || l >= 1 ? h = s = NaN : s <= 0 && (h = NaN);
        return new Hsl(h, s, l, a);
    }
    function hslConvert(o) {
        if (o instanceof Hsl) {
            return new Hsl(o.h, o.s, o.l, o.opacity);
        }
        o instanceof Color || (o = color(o));
        if (!o) {
            return new Hsl;
        }
        if (o instanceof Hsl) {
            return o;
        }
        o = o.rgb();
        var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
        if (s) {
            h = r === max ? (g - b) / s + 6 * (g < b) : g === max ? (b - r) / s + 2 : (r - g) / s + 4;
            s /= l < 0.5 ? max + min : 2 - max - min;
            h *= 60;
        } else {
            s = l > 0 && l < 1 ? 0 : h;
        }
        return new Hsl(h, s, l, o.opacity);
    }
    function hsl(h, s, l, opacity) {
        return 1 === arguments.length ? hslConvert(h) : new Hsl(h, s, l, null == opacity ? 1 : opacity);
    }
    function Hsl(h, s, l, opacity) {
        this.h = +h;
        this.s = +s;
        this.l = +l;
        this.opacity = +opacity;
    }
    define(Hsl, hsl, extend(Color, {
        brighter: function(k) {
            k = null == k ? brighter : Math.pow(brighter, k);
            return new Hsl(this.h, this.s, this.l * k, this.opacity);
        },
        darker: function(k) {
            k = null == k ? darker : Math.pow(darker, k);
            return new Hsl(this.h, this.s, this.l * k, this.opacity);
        },
        rgb: function() {
            var h = this.h % 360 + 360 * (this.h < 0), s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
            return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
        },
        displayable: function() {
            return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
        },
        formatHsl: function() {
            var a = this.opacity;
            a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
            return (1 === a ? 'hsl(' : 'hsla(') + (this.h || 0) + ', ' + 100 * (this.s || 0) + '%, ' + 100 * (this.l || 0) + '%' + (1 === a ? ')' : ', ' + a + ')');
        }
    }));
    function hsl2rgb(h, m1, m2) {
        return 255 * (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1);
    }
    function constant$1(x) {
        return function() {
            return x;
        };
    }
    function linear(a, d) {
        return function(t) {
            return a + t * d;
        };
    }
    function exponential(a, b, y) {
        return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
            return Math.pow(a + t * b, y);
        };
    }
    function gamma(y) {
        return 1 == (y = +y) ? nogamma : function(a, b) {
            return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
        };
    }
    function nogamma(a, b) {
        var d = b - a;
        return d ? linear(a, d) : constant$1(isNaN(a) ? b : a);
    }
    var interpolateRgb = function rgbGamma(y) {
        var color = gamma(y);
        function rgb$1(start, end) {
            var r = color((start = rgb(start)).r, (end = rgb(end)).r), g = color(start.g, end.g), b = color(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
            return function(t) {
                start.r = r(t);
                start.g = g(t);
                start.b = b(t);
                start.opacity = opacity(t);
                return start + '';
            };
        }
        rgb$1.gamma = rgbGamma;
        return rgb$1;
    }(1);
    function interpolateNumber(a, b) {
        return a = +a, b = +b, function(t) {
            return a * (1 - t) + b * t;
        };
    }
    var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, 'g');
    function zero(b) {
        return function() {
            return b;
        };
    }
    function one(b) {
        return function(t) {
            return b(t) + '';
        };
    }
    function interpolateString(a, b) {
        var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
        a += '', b += '';
        while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
            if ((bs = bm.index) > bi) {
                bs = b.slice(bi, bs);
                s[i] ? s[i] += bs : s[++i] = bs;
            }
            if ((am = am[0]) === (bm = bm[0])) {
                s[i] ? s[i] += bm : s[++i] = bm;
            } else {
                s[++i] = null;
                q.push({
                    i: i,
                    x: interpolateNumber(am, bm)
                });
            }
            bi = reB.lastIndex;
        }
        if (bi < b.length) {
            bs = b.slice(bi);
            s[i] ? s[i] += bs : s[++i] = bs;
        }
        return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
            for (var i = 0, o; i < b; ++i) {
                s[(o = q[i]).i] = o.x(t);
            }
            return s.join('');
        });
    }
    var degrees = 180 / Math.PI;
    var identity = {
        translateX: 0,
        translateY: 0,
        rotate: 0,
        skewX: 0,
        scaleX: 1,
        scaleY: 1
    };
    function decompose(a, b, c, d, e, f) {
        var scaleX, scaleY, skewX;
        (scaleX = Math.sqrt(a * a + b * b)) && (a /= scaleX, b /= scaleX);
        (skewX = a * c + b * d) && (c -= a * skewX, d -= b * skewX);
        (scaleY = Math.sqrt(c * c + d * d)) && (c /= scaleY, d /= scaleY, skewX /= scaleY);
        a * d < b * c && (a = -a, b = -b, skewX = -skewX, scaleX = -scaleX);
        return {
            translateX: e,
            translateY: f,
            rotate: Math.atan2(b, a) * degrees,
            skewX: Math.atan(skewX) * degrees,
            scaleX: scaleX,
            scaleY: scaleY
        };
    }
    var cssNode, cssRoot, cssView, svgNode;
    function parseCss(value) {
        if ('none' === value) {
            return identity;
        }
        cssNode || (cssNode = document.createElement('DIV'), cssRoot = document.documentElement, 
        cssView = document.defaultView);
        cssNode.style.transform = value;
        value = cssView.getComputedStyle(cssRoot.appendChild(cssNode), null).getPropertyValue('transform');
        cssRoot.removeChild(cssNode);
        value = value.slice(7, -1).split(',');
        return decompose(+value[0], +value[1], +value[2], +value[3], +value[4], +value[5]);
    }
    function parseSvg(value) {
        if (null == value) {
            return identity;
        }
        svgNode || (svgNode = document.createElementNS('http://www.w3.org/2000/svg', 'g'));
        svgNode.setAttribute('transform', value);
        if (!(value = svgNode.transform.baseVal.consolidate())) {
            return identity;
        }
        value = value.matrix;
        return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
    }
    function interpolateTransform(parse, pxComma, pxParen, degParen) {
        function pop(s) {
            return s.length ? s.pop() + ' ' : '';
        }
        function translate(xa, ya, xb, yb, s, q) {
            if (xa !== xb || ya !== yb) {
                var i = s.push('translate(', null, pxComma, null, pxParen);
                q.push({
                    i: i - 4,
                    x: interpolateNumber(xa, xb)
                }, {
                    i: i - 2,
                    x: interpolateNumber(ya, yb)
                });
            } else {
                (xb || yb) && s.push('translate(' + xb + pxComma + yb + pxParen);
            }
        }
        function rotate(a, b, s, q) {
            if (a !== b) {
                a - b > 180 ? b += 360 : b - a > 180 && (a += 360);
                q.push({
                    i: s.push(pop(s) + 'rotate(', null, degParen) - 2,
                    x: interpolateNumber(a, b)
                });
            } else {
                b && s.push(pop(s) + 'rotate(' + b + degParen);
            }
        }
        function skewX(a, b, s, q) {
            a !== b ? q.push({
                i: s.push(pop(s) + 'skewX(', null, degParen) - 2,
                x: interpolateNumber(a, b)
            }) : b && s.push(pop(s) + 'skewX(' + b + degParen);
        }
        function scale(xa, ya, xb, yb, s, q) {
            if (xa !== xb || ya !== yb) {
                var i = s.push(pop(s) + 'scale(', null, ',', null, ')');
                q.push({
                    i: i - 4,
                    x: interpolateNumber(xa, xb)
                }, {
                    i: i - 2,
                    x: interpolateNumber(ya, yb)
                });
            } else {
                1 === xb && 1 === yb || s.push(pop(s) + 'scale(' + xb + ',' + yb + ')');
            }
        }
        return function(a, b) {
            var s = [], q = [];
            a = parse(a), b = parse(b);
            translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
            rotate(a.rotate, b.rotate, s, q);
            skewX(a.skewX, b.skewX, s, q);
            scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
            a = b = null;
            return function(t) {
                var i = -1, n = q.length, o;
                while (++i < n) {
                    s[(o = q[i]).i] = o.x(t);
                }
                return s.join('');
            };
        };
    }
    var interpolateTransformCss = interpolateTransform(parseCss, 'px, ', 'px)', 'deg)');
    var interpolateTransformSvg = interpolateTransform(parseSvg, ', ', ')', ')');
    function tweenRemove(id, name) {
        var tween0, tween1;
        return function() {
            var schedule = set$2(this, id), tween = schedule.tween;
            if (tween !== tween0) {
                tween1 = tween0 = tween;
                for (var i = 0, n = tween1.length; i < n; ++i) {
                    if (tween1[i].name === name) {
                        tween1 = tween1.slice();
                        tween1.splice(i, 1);
                        break;
                    }
                }
            }
            schedule.tween = tween1;
        };
    }
    function tweenFunction(id, name, value) {
        var tween0, tween1;
        if ('function' != typeof value) {
            throw new Error;
        }
        return function() {
            var schedule = set$2(this, id), tween = schedule.tween;
            if (tween !== tween0) {
                tween1 = (tween0 = tween).slice();
                for (var t = {
                    name: name,
                    value: value
                }, i = 0, n = tween1.length; i < n; ++i) {
                    if (tween1[i].name === name) {
                        tween1[i] = t;
                        break;
                    }
                }
                i === n && tween1.push(t);
            }
            schedule.tween = tween1;
        };
    }
    function transition_tween(name, value) {
        var id = this._id;
        name += '';
        if (arguments.length < 2) {
            var tween = get$2(this.node(), id).tween;
            for (var i = 0, n = tween.length, t; i < n; ++i) {
                if ((t = tween[i]).name === name) {
                    return t.value;
                }
            }
            return null;
        }
        return this.each((null == value ? tweenRemove : tweenFunction)(id, name, value));
    }
    function tweenValue(transition, name, value) {
        var id = transition._id;
        transition.each((function() {
            var schedule = set$2(this, id);
            (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
        }));
        return function(node) {
            return get$2(node, id).value[name];
        };
    }
    function interpolate(a, b) {
        var c;
        return ('number' == typeof b ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, 
        interpolateRgb) : interpolateString)(a, b);
    }
    function attrRemove$1(name) {
        return function() {
            this.removeAttribute(name);
        };
    }
    function attrRemoveNS$1(fullname) {
        return function() {
            this.removeAttributeNS(fullname.space, fullname.local);
        };
    }
    function attrConstant$1(name, interpolate, value1) {
        var string00, string1 = value1 + '', interpolate0;
        return function() {
            var string0 = this.getAttribute(name);
            return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
        };
    }
    function attrConstantNS$1(fullname, interpolate, value1) {
        var string00, string1 = value1 + '', interpolate0;
        return function() {
            var string0 = this.getAttributeNS(fullname.space, fullname.local);
            return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
        };
    }
    function attrFunction$1(name, interpolate, value) {
        var string00, string10, interpolate0;
        return function() {
            var string0, value1 = value(this), string1;
            if (null != value1) {
                string0 = this.getAttribute(name);
                string1 = value1 + '';
                return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, 
                interpolate0 = interpolate(string00 = string0, value1));
            }
            this.removeAttribute(name);
        };
    }
    function attrFunctionNS$1(fullname, interpolate, value) {
        var string00, string10, interpolate0;
        return function() {
            var string0, value1 = value(this), string1;
            if (null != value1) {
                string0 = this.getAttributeNS(fullname.space, fullname.local);
                string1 = value1 + '';
                return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, 
                interpolate0 = interpolate(string00 = string0, value1));
            }
            this.removeAttributeNS(fullname.space, fullname.local);
        };
    }
    function transition_attr(name, value) {
        var fullname = namespace(name), i = 'transform' === fullname ? interpolateTransformSvg : interpolate;
        return this.attrTween(name, 'function' == typeof value ? (fullname.local ? attrFunctionNS$1 : attrFunction$1)(fullname, i, tweenValue(this, 'attr.' + name, value)) : null == value ? (fullname.local ? attrRemoveNS$1 : attrRemove$1)(fullname) : (fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, i, value));
    }
    function attrInterpolate(name, i) {
        return function(t) {
            this.setAttribute(name, i.call(this, t));
        };
    }
    function attrInterpolateNS(fullname, i) {
        return function(t) {
            this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
        };
    }
    function attrTweenNS(fullname, value) {
        var t0, i0;
        function tween() {
            var i = value.apply(this, arguments);
            i !== i0 && (t0 = (i0 = i) && attrInterpolateNS(fullname, i));
            return t0;
        }
        tween._value = value;
        return tween;
    }
    function attrTween(name, value) {
        var t0, i0;
        function tween() {
            var i = value.apply(this, arguments);
            i !== i0 && (t0 = (i0 = i) && attrInterpolate(name, i));
            return t0;
        }
        tween._value = value;
        return tween;
    }
    function transition_attrTween(name, value) {
        var key = 'attr.' + name;
        if (arguments.length < 2) {
            return (key = this.tween(key)) && key._value;
        }
        if (null == value) {
            return this.tween(key, null);
        }
        if ('function' != typeof value) {
            throw new Error;
        }
        var fullname = namespace(name);
        return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
    }
    function delayFunction(id, value) {
        return function() {
            init(this, id).delay = +value.apply(this, arguments);
        };
    }
    function delayConstant(id, value) {
        return value = +value, function() {
            init(this, id).delay = value;
        };
    }
    function transition_delay(value) {
        var id = this._id;
        return arguments.length ? this.each(('function' == typeof value ? delayFunction : delayConstant)(id, value)) : get$2(this.node(), id).delay;
    }
    function durationFunction(id, value) {
        return function() {
            set$2(this, id).duration = +value.apply(this, arguments);
        };
    }
    function durationConstant(id, value) {
        return value = +value, function() {
            set$2(this, id).duration = value;
        };
    }
    function transition_duration(value) {
        var id = this._id;
        return arguments.length ? this.each(('function' == typeof value ? durationFunction : durationConstant)(id, value)) : get$2(this.node(), id).duration;
    }
    function easeConstant(id, value) {
        if ('function' != typeof value) {
            throw new Error;
        }
        return function() {
            set$2(this, id).ease = value;
        };
    }
    function transition_ease(value) {
        var id = this._id;
        return arguments.length ? this.each(easeConstant(id, value)) : get$2(this.node(), id).ease;
    }
    function transition_filter(match) {
        'function' != typeof match && (match = matcher(match));
        for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
                (node = group[i]) && match.call(node, node.__data__, i, group) && subgroup.push(node);
            }
        }
        return new Transition(subgroups, this._parents, this._name, this._id);
    }
    function transition_merge(transition) {
        if (transition._id !== this._id) {
            throw new Error;
        }
        for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
            for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
                (node = group0[i] || group1[i]) && (merge[i] = node);
            }
        }
        for (;j < m0; ++j) {
            merges[j] = groups0[j];
        }
        return new Transition(merges, this._parents, this._name, this._id);
    }
    function start(name) {
        return (name + '').trim().split(/^|\s+/).every((function(t) {
            var i = t.indexOf('.');
            i >= 0 && (t = t.slice(0, i));
            return !t || 'start' === t;
        }));
    }
    function onFunction(id, name, listener) {
        var on0, on1, sit = start(name) ? init : set$2;
        return function() {
            var schedule = sit(this, id), on = schedule.on;
            on !== on0 && (on1 = (on0 = on).copy()).on(name, listener);
            schedule.on = on1;
        };
    }
    function transition_on(name, listener) {
        var id = this._id;
        return arguments.length < 2 ? get$2(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
    }
    function removeFunction(id) {
        return function() {
            var parent = this.parentNode;
            for (var i in this.__transition) {
                if (+i !== id) {
                    return;
                }
            }
            parent && parent.removeChild(this);
        };
    }
    function transition_remove() {
        return this.on('end.remove', removeFunction(this._id));
    }
    function transition_select(select) {
        var name = this._name, id = this._id;
        'function' != typeof select && (select = selector(select));
        for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
                if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
                    '__data__' in node && (subnode.__data__ = node.__data__);
                    subgroup[i] = subnode;
                    schedule(subgroup[i], name, id, i, subgroup, get$2(node, id));
                }
            }
        }
        return new Transition(subgroups, this._parents, name, id);
    }
    function transition_selectAll(select) {
        var name = this._name, id = this._id;
        'function' != typeof select && (select = selectorAll(select));
        for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
                if (node = group[i]) {
                    for (var children = select.call(node, node.__data__, i, group), child, inherit = get$2(node, id), k = 0, l = children.length; k < l; ++k) {
                        (child = children[k]) && schedule(child, name, id, k, children, inherit);
                    }
                    subgroups.push(children);
                    parents.push(node);
                }
            }
        }
        return new Transition(subgroups, parents, name, id);
    }
    var Selection$1 = selection.prototype.constructor;
    function transition_selection() {
        return new Selection$1(this._groups, this._parents);
    }
    function styleNull(name, interpolate) {
        var string00, string10, interpolate0;
        return function() {
            var string0 = styleValue(this, name), string1 = (this.style.removeProperty(name), 
            styleValue(this, name));
            return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
        };
    }
    function styleRemove$1(name) {
        return function() {
            this.style.removeProperty(name);
        };
    }
    function styleConstant$1(name, interpolate, value1) {
        var string00, string1 = value1 + '', interpolate0;
        return function() {
            var string0 = styleValue(this, name);
            return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
        };
    }
    function styleFunction$1(name, interpolate, value) {
        var string00, string10, interpolate0;
        return function() {
            var string0 = styleValue(this, name), value1 = value(this), string1 = value1 + '';
            null == value1 && (string1 = value1 = (this.style.removeProperty(name), styleValue(this, name)));
            return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, 
            interpolate0 = interpolate(string00 = string0, value1));
        };
    }
    function styleMaybeRemove(id, name) {
        var on0, on1, listener0, key = 'style.' + name, event = 'end.' + key, remove;
        return function() {
            var schedule = set$2(this, id), on = schedule.on, listener = null == schedule.value[key] ? remove || (remove = styleRemove$1(name)) : void 0;
            on === on0 && listener0 === listener || (on1 = (on0 = on).copy()).on(event, listener0 = listener);
            schedule.on = on1;
        };
    }
    function transition_style(name, value, priority) {
        var i = 'transform' == (name += '') ? interpolateTransformCss : interpolate;
        return null == value ? this.styleTween(name, styleNull(name, i)).on('end.style.' + name, styleRemove$1(name)) : 'function' == typeof value ? this.styleTween(name, styleFunction$1(name, i, tweenValue(this, 'style.' + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant$1(name, i, value), priority).on('end.style.' + name, null);
    }
    function styleInterpolate(name, i, priority) {
        return function(t) {
            this.style.setProperty(name, i.call(this, t), priority);
        };
    }
    function styleTween(name, value, priority) {
        var t, i0;
        function tween() {
            var i = value.apply(this, arguments);
            i !== i0 && (t = (i0 = i) && styleInterpolate(name, i, priority));
            return t;
        }
        tween._value = value;
        return tween;
    }
    function transition_styleTween(name, value, priority) {
        var key = 'style.' + (name += '');
        if (arguments.length < 2) {
            return (key = this.tween(key)) && key._value;
        }
        if (null == value) {
            return this.tween(key, null);
        }
        if ('function' != typeof value) {
            throw new Error;
        }
        return this.tween(key, styleTween(name, value, null == priority ? '' : priority));
    }
    function textConstant$1(value) {
        return function() {
            this.textContent = value;
        };
    }
    function textFunction$1(value) {
        return function() {
            var value1 = value(this);
            this.textContent = null == value1 ? '' : value1;
        };
    }
    function transition_text(value) {
        return this.tween('text', 'function' == typeof value ? textFunction$1(tweenValue(this, 'text', value)) : textConstant$1(null == value ? '' : value + ''));
    }
    function textInterpolate(i) {
        return function(t) {
            this.textContent = i.call(this, t);
        };
    }
    function textTween(value) {
        var t0, i0;
        function tween() {
            var i = value.apply(this, arguments);
            i !== i0 && (t0 = (i0 = i) && textInterpolate(i));
            return t0;
        }
        tween._value = value;
        return tween;
    }
    function transition_textTween(value) {
        var key = 'text';
        if (arguments.length < 1) {
            return (key = this.tween(key)) && key._value;
        }
        if (null == value) {
            return this.tween(key, null);
        }
        if ('function' != typeof value) {
            throw new Error;
        }
        return this.tween(key, textTween(value));
    }
    function transition_transition() {
        var name = this._name, id0 = this._id, id1 = newId();
        for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
                if (node = group[i]) {
                    var inherit = get$2(node, id0);
                    schedule(node, name, id1, i, group, {
                        time: inherit.time + inherit.delay + inherit.duration,
                        delay: 0,
                        duration: inherit.duration,
                        ease: inherit.ease
                    });
                }
            }
        }
        return new Transition(groups, this._parents, name, id1);
    }
    function transition_end() {
        var on0, on1, that = this, id = that._id, size = that.size();
        return new Promise((function(resolve, reject) {
            var cancel = {
                value: reject
            }, end = {
                value: function() {
                    0 == --size && resolve();
                }
            };
            that.each((function() {
                var schedule = set$2(this, id), on = schedule.on;
                if (on !== on0) {
                    on1 = (on0 = on).copy();
                    on1._.cancel.push(cancel);
                    on1._.interrupt.push(cancel);
                    on1._.end.push(end);
                }
                schedule.on = on1;
            }));
        }));
    }
    var id$1 = 0;
    function Transition(groups, parents, name, id) {
        this._groups = groups;
        this._parents = parents;
        this._name = name;
        this._id = id;
    }
    function transition(name) {
        return selection().transition(name);
    }
    function newId() {
        return ++id$1;
    }
    var selection_prototype = selection.prototype;
    Transition.prototype = transition.prototype = {
        constructor: Transition,
        select: transition_select,
        selectAll: transition_selectAll,
        filter: transition_filter,
        merge: transition_merge,
        selection: transition_selection,
        transition: transition_transition,
        call: selection_prototype.call,
        nodes: selection_prototype.nodes,
        node: selection_prototype.node,
        size: selection_prototype.size,
        empty: selection_prototype.empty,
        each: selection_prototype.each,
        on: transition_on,
        attr: transition_attr,
        attrTween: transition_attrTween,
        style: transition_style,
        styleTween: transition_styleTween,
        text: transition_text,
        textTween: transition_textTween,
        remove: transition_remove,
        tween: transition_tween,
        delay: transition_delay,
        duration: transition_duration,
        ease: transition_ease,
        end: transition_end
    };
    function linear$1(t) {
        return +t;
    }
    function cubicInOut(t) {
        return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
    }
    var defaultTiming = {
        time: null,
        delay: 0,
        duration: 250,
        ease: cubicInOut
    };
    function inherit(node, id) {
        var timing;
        while (!(timing = node.__transition) || !(timing = timing[id])) {
            if (!(node = node.parentNode)) {
                return defaultTiming.time = now(), defaultTiming;
            }
        }
        return timing;
    }
    function selection_transition(name) {
        var id, timing;
        name instanceof Transition ? (id = name._id, name = name._name) : (id = newId(), 
        (timing = defaultTiming).time = now(), name = null == name ? null : name + '');
        for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
            for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
                (node = group[i]) && schedule(node, name, id, i, group, timing || inherit(node, id));
            }
        }
        return new Transition(groups, this._parents, name, id);
    }
    selection.prototype.interrupt = selection_interrupt;
    selection.prototype.transition = selection_transition;
    var d3 = {
        select: select,
        selectAll: selectAll,
        mouse: mouse,
        transition: transition,
        easeLinear: linear$1,
        get event() {
            return event;
        }
    };
    var defineProperty = Object.defineProperty;
    var cache = {};
    var thrower = function(it) {
        throw it;
    };
    var arrayMethodUsesToLength = function(METHOD_NAME, options) {
        if (has(cache, METHOD_NAME)) {
            return cache[METHOD_NAME];
        }
        options || (options = {});
        var method = [][METHOD_NAME];
        var ACCESSORS = !!has(options, 'ACCESSORS') && options.ACCESSORS;
        var argument0 = has(options, 0) ? options[0] : thrower;
        var argument1 = has(options, 1) ? options[1] : void 0;
        return cache[METHOD_NAME] = !!method && !fails((function() {
            if (ACCESSORS && !descriptors) {
                return true;
            }
            var O = {
                length: -1
            };
            ACCESSORS ? defineProperty(O, 1, {
                enumerable: true,
                get: thrower
            }) : O[1] = 1;
            method.call(O, argument0, argument1);
        }));
    };
    var $indexOf = arrayIncludes.indexOf;
    var nativeIndexOf = [].indexOf;
    var NEGATIVE_ZERO = !!nativeIndexOf && 1 / [ 1 ].indexOf(1, -0) < 0;
    var STRICT_METHOD$1 = arrayMethodIsStrict('indexOf');
    var USES_TO_LENGTH = arrayMethodUsesToLength('indexOf', {
        ACCESSORS: true,
        1: 0
    });
    _export({
        target: 'Array',
        proto: true,
        forced: NEGATIVE_ZERO || !STRICT_METHOD$1 || !USES_TO_LENGTH
    }, {
        indexOf: function indexOf(searchElement) {
            return NEGATIVE_ZERO ? nativeIndexOf.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments.length > 1 ? arguments[1] : void 0);
        }
    });
    var objectKeys = Object.keys || function keys(O) {
        return objectKeysInternal(O, enumBugKeys);
    };
    var objectDefineProperties = descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
        anObject(O);
        var keys = objectKeys(Properties);
        var length = keys.length;
        var index = 0;
        var key;
        while (length > index) {
            objectDefineProperty.f(O, key = keys[index++], Properties[key]);
        }
        return O;
    };
    var html = getBuiltIn('document', 'documentElement');
    var GT = '>';
    var LT = '<';
    var PROTOTYPE = 'prototype';
    var SCRIPT = 'script';
    var IE_PROTO = sharedKey('IE_PROTO');
    var EmptyConstructor = function() {};
    var scriptTag = function(content) {
        return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
    };
    var NullProtoObjectViaActiveX = function(activeXDocument) {
        activeXDocument.write(scriptTag(''));
        activeXDocument.close();
        var temp = activeXDocument.parentWindow.Object;
        activeXDocument = null;
        return temp;
    };
    var NullProtoObjectViaIFrame = function() {
        var iframe = documentCreateElement('iframe');
        var JS = 'java' + SCRIPT + ':';
        var iframeDocument;
        iframe.style.display = 'none';
        html.appendChild(iframe);
        iframe.src = String(JS);
        iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.write(scriptTag('document.F=Object'));
        iframeDocument.close();
        return iframeDocument.F;
    };
    var activeXDocument;
    var NullProtoObject = function() {
        try {
            activeXDocument = document.domain && new ActiveXObject('htmlfile');
        } catch (error) {}
        NullProtoObject = activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) : NullProtoObjectViaIFrame();
        var length = enumBugKeys.length;
        while (length--) {
            delete NullProtoObject[PROTOTYPE][enumBugKeys[length]];
        }
        return NullProtoObject();
    };
    hiddenKeys[IE_PROTO] = true;
    var objectCreate = Object.create || function create(O, Properties) {
        var result;
        if (null !== O) {
            EmptyConstructor[PROTOTYPE] = anObject(O);
            result = new EmptyConstructor;
            EmptyConstructor[PROTOTYPE] = null;
            result[IE_PROTO] = O;
        } else {
            result = NullProtoObject();
        }
        return void 0 === Properties ? result : objectDefineProperties(result, Properties);
    };
    var UNSCOPABLES = wellKnownSymbol('unscopables');
    var ArrayPrototype = Array.prototype;
    null == ArrayPrototype[UNSCOPABLES] && objectDefineProperty.f(ArrayPrototype, UNSCOPABLES, {
        configurable: true,
        value: objectCreate(null)
    });
    var addToUnscopables = function(key) {
        ArrayPrototype[UNSCOPABLES][key] = true;
    };
    var iterators = {};
    var correctPrototypeGetter = !fails((function() {
        function F() {}
        F.prototype.constructor = null;
        return Object.getPrototypeOf(new F) !== F.prototype;
    }));
    var IE_PROTO$1 = sharedKey('IE_PROTO');
    var ObjectPrototype = Object.prototype;
    var objectGetPrototypeOf = correctPrototypeGetter ? Object.getPrototypeOf : function(O) {
        O = toObject(O);
        return has(O, IE_PROTO$1) ? O[IE_PROTO$1] : 'function' == typeof O.constructor && O instanceof O.constructor ? O.constructor.prototype : O instanceof Object ? ObjectPrototype : null;
    };
    var ITERATOR = wellKnownSymbol('iterator');
    var BUGGY_SAFARI_ITERATORS = false;
    var returnThis = function() {
        return this;
    };
    var IteratorPrototype, PrototypeOfArrayIteratorPrototype, arrayIterator;
    if ([].keys) {
        arrayIterator = [].keys();
        if ('next' in arrayIterator) {
            PrototypeOfArrayIteratorPrototype = objectGetPrototypeOf(objectGetPrototypeOf(arrayIterator));
            PrototypeOfArrayIteratorPrototype !== Object.prototype && (IteratorPrototype = PrototypeOfArrayIteratorPrototype);
        } else {
            BUGGY_SAFARI_ITERATORS = true;
        }
    }
    null == IteratorPrototype && (IteratorPrototype = {});
    has(IteratorPrototype, ITERATOR) || createNonEnumerableProperty(IteratorPrototype, ITERATOR, returnThis);
    var iteratorsCore = {
        IteratorPrototype: IteratorPrototype,
        BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS
    };
    var defineProperty$1 = objectDefineProperty.f;
    var TO_STRING_TAG = wellKnownSymbol('toStringTag');
    var setToStringTag = function(it, TAG, STATIC) {
        it && !has(it = STATIC ? it : it.prototype, TO_STRING_TAG) && defineProperty$1(it, TO_STRING_TAG, {
            configurable: true,
            value: TAG
        });
    };
    var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
    var returnThis$1 = function() {
        return this;
    };
    var createIteratorConstructor = function(IteratorConstructor, NAME, next) {
        var TO_STRING_TAG = NAME + ' Iterator';
        IteratorConstructor.prototype = objectCreate(IteratorPrototype$1, {
            next: createPropertyDescriptor(1, next)
        });
        setToStringTag(IteratorConstructor, TO_STRING_TAG, false);
        iterators[TO_STRING_TAG] = returnThis$1;
        return IteratorConstructor;
    };
    var aPossiblePrototype = function(it) {
        if (!isObject(it) && null !== it) {
            throw TypeError('Can\'t set ' + String(it) + ' as a prototype');
        }
        return it;
    };
    var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function() {
        var CORRECT_SETTER = false;
        var test = {};
        var setter;
        try {
            setter = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set;
            setter.call(test, []);
            CORRECT_SETTER = test instanceof Array;
        } catch (error) {}
        return function setPrototypeOf(O, proto) {
            anObject(O);
            aPossiblePrototype(proto);
            CORRECT_SETTER ? setter.call(O, proto) : O.__proto__ = proto;
            return O;
        };
    }() : void 0);
    var IteratorPrototype$2 = iteratorsCore.IteratorPrototype;
    var BUGGY_SAFARI_ITERATORS$1 = iteratorsCore.BUGGY_SAFARI_ITERATORS;
    var ITERATOR$1 = wellKnownSymbol('iterator');
    var KEYS = 'keys';
    var VALUES = 'values';
    var ENTRIES = 'entries';
    var returnThis$2 = function() {
        return this;
    };
    var defineIterator = function(Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
        createIteratorConstructor(IteratorConstructor, NAME, next);
        var getIterationMethod = function(KIND) {
            if (KIND === DEFAULT && defaultIterator) {
                return defaultIterator;
            }
            if (!BUGGY_SAFARI_ITERATORS$1 && KIND in IterablePrototype) {
                return IterablePrototype[KIND];
            }
            switch (KIND) {
              case KEYS:
                return function keys() {
                    return new IteratorConstructor(this, KIND);
                };

              case VALUES:
                return function values() {
                    return new IteratorConstructor(this, KIND);
                };

              case ENTRIES:
                return function entries() {
                    return new IteratorConstructor(this, KIND);
                };
            }
            return function() {
                return new IteratorConstructor(this);
            };
        };
        var TO_STRING_TAG = NAME + ' Iterator';
        var INCORRECT_VALUES_NAME = false;
        var IterablePrototype = Iterable.prototype;
        var nativeIterator = IterablePrototype[ITERATOR$1] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
        var defaultIterator = !BUGGY_SAFARI_ITERATORS$1 && nativeIterator || getIterationMethod(DEFAULT);
        var anyNativeIterator = 'Array' == NAME && IterablePrototype.entries || nativeIterator;
        var CurrentIteratorPrototype, methods, KEY;
        if (anyNativeIterator) {
            CurrentIteratorPrototype = objectGetPrototypeOf(anyNativeIterator.call(new Iterable));
            if (IteratorPrototype$2 !== Object.prototype && CurrentIteratorPrototype.next) {
                objectGetPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype$2 && (objectSetPrototypeOf ? objectSetPrototypeOf(CurrentIteratorPrototype, IteratorPrototype$2) : 'function' != typeof CurrentIteratorPrototype[ITERATOR$1] && createNonEnumerableProperty(CurrentIteratorPrototype, ITERATOR$1, returnThis$2));
                setToStringTag(CurrentIteratorPrototype, TO_STRING_TAG, true);
            }
        }
        if (DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
            INCORRECT_VALUES_NAME = true;
            defaultIterator = function values() {
                return nativeIterator.call(this);
            };
        }
        IterablePrototype[ITERATOR$1] !== defaultIterator && createNonEnumerableProperty(IterablePrototype, ITERATOR$1, defaultIterator);
        iterators[NAME] = defaultIterator;
        if (DEFAULT) {
            methods = {
                values: getIterationMethod(VALUES),
                keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
                entries: getIterationMethod(ENTRIES)
            };
            if (FORCED) {
                for (KEY in methods) {
                    (BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) && redefine(IterablePrototype, KEY, methods[KEY]);
                }
            } else {
                _export({
                    target: NAME,
                    proto: true,
                    forced: BUGGY_SAFARI_ITERATORS$1 || INCORRECT_VALUES_NAME
                }, methods);
            }
        }
        return methods;
    };
    var ARRAY_ITERATOR = 'Array Iterator';
    var setInternalState = internalState.set;
    var getInternalState = internalState.getterFor(ARRAY_ITERATOR);
    var es_array_iterator = defineIterator(Array, 'Array', (function(iterated, kind) {
        setInternalState(this, {
            type: ARRAY_ITERATOR,
            target: toIndexedObject(iterated),
            index: 0,
            kind: kind
        });
    }), (function() {
        var state = getInternalState(this);
        var target = state.target;
        var kind = state.kind;
        var index = state.index++;
        if (!target || index >= target.length) {
            state.target = void 0;
            return {
                value: void 0,
                done: true
            };
        }
        return 'keys' == kind ? {
            value: index,
            done: false
        } : 'values' == kind ? {
            value: target[index],
            done: false
        } : {
            value: [ index, target[index] ],
            done: false
        };
    }), 'values');
    iterators.Arguments = iterators.Array;
    addToUnscopables('keys');
    addToUnscopables('values');
    addToUnscopables('entries');
    var createMethod$1 = function(IS_RIGHT) {
        return function(that, callbackfn, argumentsLength, memo) {
            aFunction$1(callbackfn);
            var O = toObject(that);
            var self = indexedObject(O);
            var length = toLength(O.length);
            var index = IS_RIGHT ? length - 1 : 0;
            var i = IS_RIGHT ? -1 : 1;
            if (argumentsLength < 2) {
                while (true) {
                    if (index in self) {
                        memo = self[index];
                        index += i;
                        break;
                    }
                    index += i;
                    if (IS_RIGHT ? index < 0 : length <= index) {
                        throw TypeError('Reduce of empty array with no initial value');
                    }
                }
            }
            for (;IS_RIGHT ? index >= 0 : length > index; index += i) {
                index in self && (memo = callbackfn(memo, self[index], index, O));
            }
            return memo;
        };
    };
    var arrayReduce = {
        left: createMethod$1(false),
        right: createMethod$1(true)
    };
    var $reduce = arrayReduce.left;
    var STRICT_METHOD$2 = arrayMethodIsStrict('reduce');
    var USES_TO_LENGTH$1 = arrayMethodUsesToLength('reduce', {
        1: 0
    });
    _export({
        target: 'Array',
        proto: true,
        forced: !STRICT_METHOD$2 || !USES_TO_LENGTH$1
    }, {
        reduce: function reduce(callbackfn) {
            return $reduce(this, callbackfn, arguments.length, arguments.length > 1 ? arguments[1] : void 0);
        }
    });
    var thisNumberValue = function(value) {
        if ('number' != typeof value && 'Number' != classofRaw(value)) {
            throw TypeError('Incorrect invocation');
        }
        return +value;
    };
    var stringRepeat = ''.repeat || function repeat(count) {
        var str = String(requireObjectCoercible(this));
        var result = '';
        var n = toInteger(count);
        if (n < 0 || n == 1 / 0) {
            throw RangeError('Wrong number of repetitions');
        }
        for (;n > 0; (n >>>= 1) && (str += str)) {
            1 & n && (result += str);
        }
        return result;
    };
    var nativeToFixed = 1.0.toFixed;
    var floor$1 = Math.floor;
    var pow = function(x, n, acc) {
        return 0 === n ? acc : n % 2 == 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
    };
    var log = function(x) {
        var n = 0;
        var x2 = x;
        while (x2 >= 4096) {
            n += 12;
            x2 /= 4096;
        }
        while (x2 >= 2) {
            n += 1;
            x2 /= 2;
        }
        return n;
    };
    var FORCED$2 = nativeToFixed && ('0.000' !== 0.00008.toFixed(3) || '1' !== 0.9.toFixed(0) || '1.25' !== 1.255.toFixed(2) || '1000000000000000128' !== (1000000000000000128.0).toFixed(0)) || !fails((function() {
        nativeToFixed.call({});
    }));
    _export({
        target: 'Number',
        proto: true,
        forced: FORCED$2
    }, {
        toFixed: function toFixed(fractionDigits) {
            var number = thisNumberValue(this);
            var fractDigits = toInteger(fractionDigits);
            var data = [ 0, 0, 0, 0, 0, 0 ];
            var sign = '';
            var result = '0';
            var e, z, j, k;
            var multiply = function(n, c) {
                var index = -1;
                var c2 = c;
                while (++index < 6) {
                    c2 += n * data[index];
                    data[index] = c2 % 1e7;
                    c2 = floor$1(c2 / 1e7);
                }
            };
            var divide = function(n) {
                var index = 6;
                var c = 0;
                while (--index >= 0) {
                    c += data[index];
                    data[index] = floor$1(c / n);
                    c = c % n * 1e7;
                }
            };
            var dataToString = function() {
                var index = 6;
                var s = '';
                while (--index >= 0) {
                    if ('' !== s || 0 === index || 0 !== data[index]) {
                        var t = String(data[index]);
                        s = '' === s ? t : s + stringRepeat.call('0', 7 - t.length) + t;
                    }
                }
                return s;
            };
            if (fractDigits < 0 || fractDigits > 20) {
                throw RangeError('Incorrect fraction digits');
            }
            if (number != number) {
                return 'NaN';
            }
            if (number <= -1e21 || number >= 1e21) {
                return String(number);
            }
            if (number < 0) {
                sign = '-';
                number = -number;
            }
            if (number > 1e-21) {
                e = log(number * pow(2, 69, 1)) - 69;
                z = e < 0 ? number * pow(2, -e, 1) : number / pow(2, e, 1);
                z *= 0x10000000000000;
                e = 52 - e;
                if (e > 0) {
                    multiply(0, z);
                    j = fractDigits;
                    while (j >= 7) {
                        multiply(1e7, 0);
                        j -= 7;
                    }
                    multiply(pow(10, j, 1), 0);
                    j = e - 1;
                    while (j >= 23) {
                        divide(1 << 23);
                        j -= 23;
                    }
                    divide(1 << j);
                    multiply(1, 1);
                    divide(2);
                    result = dataToString();
                } else {
                    multiply(0, z);
                    multiply(1 << -e, 0);
                    result = dataToString() + stringRepeat.call('0', fractDigits);
                }
            }
            if (fractDigits > 0) {
                k = result.length;
                result = sign + (k <= fractDigits ? '0.' + stringRepeat.call('0', fractDigits - k) + result : result.slice(0, k - fractDigits) + '.' + result.slice(k - fractDigits));
            } else {
                result = sign + result;
            }
            return result;
        }
    });
    var TO_STRING_TAG$1 = wellKnownSymbol('toStringTag');
    var test$1 = {};
    test$1[TO_STRING_TAG$1] = 'z';
    var toStringTagSupport = '[object z]' === String(test$1);
    var TO_STRING_TAG$2 = wellKnownSymbol('toStringTag');
    var CORRECT_ARGUMENTS = 'Arguments' == classofRaw(function() {
        return arguments;
    }());
    var tryGet = function(it, key) {
        try {
            return it[key];
        } catch (error) {}
    };
    var classof = toStringTagSupport ? classofRaw : function(it) {
        var O, tag, result;
        return void 0 === it ? 'Undefined' : null === it ? 'Null' : 'string' == typeof (tag = tryGet(O = Object(it), TO_STRING_TAG$2)) ? tag : CORRECT_ARGUMENTS ? classofRaw(O) : 'Object' == (result = classofRaw(O)) && 'function' == typeof O.callee ? 'Arguments' : result;
    };
    var objectToString = toStringTagSupport ? {}.toString : function toString() {
        return '[object ' + classof(this) + ']';
    };
    toStringTagSupport || redefine(Object.prototype, 'toString', objectToString, {
        unsafe: true
    });
    var whitespaces = '\t\n\v\f\r                　\u2028\u2029\ufeff';
    var whitespace = '[' + whitespaces + ']';
    var ltrim = RegExp('^' + whitespace + whitespace + '*');
    var rtrim = RegExp(whitespace + whitespace + '*$');
    var createMethod$2 = function(TYPE) {
        return function($this) {
            var string = String(requireObjectCoercible($this));
            1 & TYPE && (string = string.replace(ltrim, ''));
            2 & TYPE && (string = string.replace(rtrim, ''));
            return string;
        };
    };
    var stringTrim = {
        start: createMethod$2(1),
        end: createMethod$2(2),
        trim: createMethod$2(3)
    };
    var trim = stringTrim.trim;
    var $parseFloat = global_1.parseFloat;
    var FORCED$3 = 1 / $parseFloat(whitespaces + '-0') != -1 / 0;
    var numberParseFloat = FORCED$3 ? function parseFloat(string) {
        var trimmedString = trim(String(string));
        var result = $parseFloat(trimmedString);
        return 0 === result && '-' == trimmedString.charAt(0) ? -0 : result;
    } : $parseFloat;
    _export({
        global: true,
        forced: parseFloat != numberParseFloat
    }, {
        parseFloat: numberParseFloat
    });
    var regexpFlags = function() {
        var that = anObject(this);
        var result = '';
        that.global && (result += 'g');
        that.ignoreCase && (result += 'i');
        that.multiline && (result += 'm');
        that.dotAll && (result += 's');
        that.unicode && (result += 'u');
        that.sticky && (result += 'y');
        return result;
    };
    function RE(s, f) {
        return RegExp(s, f);
    }
    var UNSUPPORTED_Y = fails((function() {
        var re = RE('a', 'y');
        re.lastIndex = 2;
        return null != re.exec('abcd');
    }));
    var BROKEN_CARET = fails((function() {
        var re = RE('^r', 'gy');
        re.lastIndex = 2;
        return null != re.exec('str');
    }));
    var regexpStickyHelpers = {
        UNSUPPORTED_Y: UNSUPPORTED_Y,
        BROKEN_CARET: BROKEN_CARET
    };
    var nativeExec = RegExp.prototype.exec;
    var nativeReplace = String.prototype.replace;
    var patchedExec = nativeExec;
    var UPDATES_LAST_INDEX_WRONG = function() {
        var re1 = /a/;
        var re2 = /b*/g;
        nativeExec.call(re1, 'a');
        nativeExec.call(re2, 'a');
        return 0 !== re1.lastIndex || 0 !== re2.lastIndex;
    }();
    var UNSUPPORTED_Y$1 = regexpStickyHelpers.UNSUPPORTED_Y || regexpStickyHelpers.BROKEN_CARET;
    var NPCG_INCLUDED = void 0 !== /()??/.exec('')[1];
    var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$1;
    PATCH && (patchedExec = function exec(str) {
        var re = this;
        var lastIndex, reCopy, match, i;
        var sticky = UNSUPPORTED_Y$1 && re.sticky;
        var flags = regexpFlags.call(re);
        var source = re.source;
        var charsAdded = 0;
        var strCopy = str;
        if (sticky) {
            flags = flags.replace('y', '');
            -1 === flags.indexOf('g') && (flags += 'g');
            strCopy = String(str).slice(re.lastIndex);
            if (re.lastIndex > 0 && (!re.multiline || re.multiline && '\n' !== str[re.lastIndex - 1])) {
                source = '(?: ' + source + ')';
                strCopy = ' ' + strCopy;
                charsAdded++;
            }
            reCopy = new RegExp('^(?:' + source + ')', flags);
        }
        NPCG_INCLUDED && (reCopy = new RegExp('^' + source + '$(?!\\s)', flags));
        UPDATES_LAST_INDEX_WRONG && (lastIndex = re.lastIndex);
        match = nativeExec.call(sticky ? reCopy : re, strCopy);
        if (sticky) {
            if (match) {
                match.input = match.input.slice(charsAdded);
                match[0] = match[0].slice(charsAdded);
                match.index = re.lastIndex;
                re.lastIndex += match[0].length;
            } else {
                re.lastIndex = 0;
            }
        } else {
            UPDATES_LAST_INDEX_WRONG && match && (re.lastIndex = re.global ? match.index + match[0].length : lastIndex);
        }
        NPCG_INCLUDED && match && match.length > 1 && nativeReplace.call(match[0], reCopy, (function() {
            for (i = 1; i < arguments.length - 2; i++) {
                void 0 === arguments[i] && (match[i] = void 0);
            }
        }));
        return match;
    });
    var regexpExec = patchedExec;
    _export({
        target: 'RegExp',
        proto: true,
        forced: /./.exec !== regexpExec
    }, {
        exec: regexpExec
    });
    var freezing = !fails((function() {
        return Object.isExtensible(Object.preventExtensions({}));
    }));
    var internalMetadata = createCommonjsModule((function(module) {
        var defineProperty = objectDefineProperty.f;
        var METADATA = uid('meta');
        var id = 0;
        var isExtensible = Object.isExtensible || function() {
            return true;
        };
        var setMetadata = function(it) {
            defineProperty(it, METADATA, {
                value: {
                    objectID: 'O' + ++id,
                    weakData: {}
                }
            });
        };
        var fastKey = function(it, create) {
            if (!isObject(it)) {
                return 'symbol' == typeof it ? it : ('string' == typeof it ? 'S' : 'P') + it;
            }
            if (!has(it, METADATA)) {
                if (!isExtensible(it)) {
                    return 'F';
                }
                if (!create) {
                    return 'E';
                }
                setMetadata(it);
            }
            return it[METADATA].objectID;
        };
        var getWeakData = function(it, create) {
            if (!has(it, METADATA)) {
                if (!isExtensible(it)) {
                    return true;
                }
                if (!create) {
                    return false;
                }
                setMetadata(it);
            }
            return it[METADATA].weakData;
        };
        var onFreeze = function(it) {
            freezing && meta.REQUIRED && isExtensible(it) && !has(it, METADATA) && setMetadata(it);
            return it;
        };
        var meta = module.exports = {
            REQUIRED: false,
            fastKey: fastKey,
            getWeakData: getWeakData,
            onFreeze: onFreeze
        };
        hiddenKeys[METADATA] = true;
    }));
    var ITERATOR$2 = wellKnownSymbol('iterator');
    var ArrayPrototype$1 = Array.prototype;
    var isArrayIteratorMethod = function(it) {
        return void 0 !== it && (iterators.Array === it || ArrayPrototype$1[ITERATOR$2] === it);
    };
    var functionBindContext = function(fn, that, length) {
        aFunction$1(fn);
        if (void 0 === that) {
            return fn;
        }
        switch (length) {
          case 0:
            return function() {
                return fn.call(that);
            };

          case 1:
            return function(a) {
                return fn.call(that, a);
            };

          case 2:
            return function(a, b) {
                return fn.call(that, a, b);
            };

          case 3:
            return function(a, b, c) {
                return fn.call(that, a, b, c);
            };
        }
        return function() {
            return fn.apply(that, arguments);
        };
    };
    var ITERATOR$3 = wellKnownSymbol('iterator');
    var getIteratorMethod = function(it) {
        if (null != it) {
            return it[ITERATOR$3] || it['@@iterator'] || iterators[classof(it)];
        }
    };
    var callWithSafeIterationClosing = function(iterator, fn, value, ENTRIES) {
        try {
            return ENTRIES ? fn(anObject(value)[0], value[1]) : fn(value);
        } catch (error) {
            var returnMethod = iterator['return'];
            void 0 !== returnMethod && anObject(returnMethod.call(iterator));
            throw error;
        }
    };
    var iterate_1 = createCommonjsModule((function(module) {
        var Result = function(stopped, result) {
            this.stopped = stopped;
            this.result = result;
        };
        var iterate = module.exports = function(iterable, fn, that, AS_ENTRIES, IS_ITERATOR) {
            var boundFunction = functionBindContext(fn, that, AS_ENTRIES ? 2 : 1);
            var iterator, iterFn, index, length, result, next, step;
            if (IS_ITERATOR) {
                iterator = iterable;
            } else {
                iterFn = getIteratorMethod(iterable);
                if ('function' != typeof iterFn) {
                    throw TypeError('Target is not iterable');
                }
                if (isArrayIteratorMethod(iterFn)) {
                    for (index = 0, length = toLength(iterable.length); length > index; index++) {
                        result = AS_ENTRIES ? boundFunction(anObject(step = iterable[index])[0], step[1]) : boundFunction(iterable[index]);
                        if (result && result instanceof Result) {
                            return result;
                        }
                    }
                    return new Result(false);
                }
                iterator = iterFn.call(iterable);
            }
            next = iterator.next;
            while (!(step = next.call(iterator)).done) {
                result = callWithSafeIterationClosing(iterator, boundFunction, step.value, AS_ENTRIES);
                if ('object' == typeof result && result && result instanceof Result) {
                    return result;
                }
            }
            return new Result(false);
        };
        iterate.stop = function(result) {
            return new Result(true, result);
        };
    }));
    var anInstance = function(it, Constructor, name) {
        if (!(it instanceof Constructor)) {
            throw TypeError('Incorrect ' + (name ? name + ' ' : '') + 'invocation');
        }
        return it;
    };
    var ITERATOR$4 = wellKnownSymbol('iterator');
    var SAFE_CLOSING = false;
    try {
        var called = 0;
        var iteratorWithReturn = {
            next: function() {
                return {
                    done: !!called++
                };
            },
            'return': function() {
                SAFE_CLOSING = true;
            }
        };
        iteratorWithReturn[ITERATOR$4] = function() {
            return this;
        };
        Array.from(iteratorWithReturn, (function() {
            throw 2;
        }));
    } catch (error) {}
    var checkCorrectnessOfIteration = function(exec, SKIP_CLOSING) {
        if (!SKIP_CLOSING && !SAFE_CLOSING) {
            return false;
        }
        var ITERATION_SUPPORT = false;
        try {
            var object = {};
            object[ITERATOR$4] = function() {
                return {
                    next: function() {
                        return {
                            done: ITERATION_SUPPORT = true
                        };
                    }
                };
            };
            exec(object);
        } catch (error) {}
        return ITERATION_SUPPORT;
    };
    var inheritIfRequired = function($this, dummy, Wrapper) {
        var NewTarget, NewTargetPrototype;
        objectSetPrototypeOf && 'function' == typeof (NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype && objectSetPrototypeOf($this, NewTargetPrototype);
        return $this;
    };
    var collection = function(CONSTRUCTOR_NAME, wrapper, common) {
        var IS_MAP = -1 !== CONSTRUCTOR_NAME.indexOf('Map');
        var IS_WEAK = -1 !== CONSTRUCTOR_NAME.indexOf('Weak');
        var ADDER = IS_MAP ? 'set' : 'add';
        var NativeConstructor = global_1[CONSTRUCTOR_NAME];
        var NativePrototype = NativeConstructor && NativeConstructor.prototype;
        var Constructor = NativeConstructor;
        var exported = {};
        var fixMethod = function(KEY) {
            var nativeMethod = NativePrototype[KEY];
            redefine(NativePrototype, KEY, 'add' == KEY ? function add(value) {
                nativeMethod.call(this, 0 === value ? 0 : value);
                return this;
            } : 'delete' == KEY ? function(key) {
                return !(IS_WEAK && !isObject(key)) && nativeMethod.call(this, 0 === key ? 0 : key);
            } : 'get' == KEY ? function get(key) {
                return IS_WEAK && !isObject(key) ? void 0 : nativeMethod.call(this, 0 === key ? 0 : key);
            } : 'has' == KEY ? function has(key) {
                return !(IS_WEAK && !isObject(key)) && nativeMethod.call(this, 0 === key ? 0 : key);
            } : function set(key, value) {
                nativeMethod.call(this, 0 === key ? 0 : key, value);
                return this;
            });
        };
        if (isForced_1(CONSTRUCTOR_NAME, 'function' != typeof NativeConstructor || !(IS_WEAK || NativePrototype.forEach && !fails((function() {
            (new NativeConstructor).entries().next();
        }))))) {
            Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
            internalMetadata.REQUIRED = true;
        } else if (isForced_1(CONSTRUCTOR_NAME, true)) {
            var instance = new Constructor;
            var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
            var THROWS_ON_PRIMITIVES = fails((function() {
                instance.has(1);
            }));
            var ACCEPT_ITERABLES = checkCorrectnessOfIteration((function(iterable) {
                new NativeConstructor(iterable);
            }));
            var BUGGY_ZERO = !IS_WEAK && fails((function() {
                var $instance = new NativeConstructor;
                var index = 5;
                while (index--) {
                    $instance[ADDER](index, index);
                }
                return !$instance.has(-0);
            }));
            if (!ACCEPT_ITERABLES) {
                Constructor = wrapper((function(dummy, iterable) {
                    anInstance(dummy, Constructor, CONSTRUCTOR_NAME);
                    var that = inheritIfRequired(new NativeConstructor, dummy, Constructor);
                    null != iterable && iterate_1(iterable, that[ADDER], that, IS_MAP);
                    return that;
                }));
                Constructor.prototype = NativePrototype;
                NativePrototype.constructor = Constructor;
            }
            if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
                fixMethod('delete');
                fixMethod('has');
                IS_MAP && fixMethod('get');
            }
            (BUGGY_ZERO || HASNT_CHAINING) && fixMethod(ADDER);
            IS_WEAK && NativePrototype.clear && delete NativePrototype.clear;
        }
        exported[CONSTRUCTOR_NAME] = Constructor;
        _export({
            global: true,
            forced: Constructor != NativeConstructor
        }, exported);
        setToStringTag(Constructor, CONSTRUCTOR_NAME);
        IS_WEAK || common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
        return Constructor;
    };
    var redefineAll = function(target, src, options) {
        for (var key in src) {
            redefine(target, key, src[key], options);
        }
        return target;
    };
    var SPECIES$2 = wellKnownSymbol('species');
    var setSpecies = function(CONSTRUCTOR_NAME) {
        var Constructor = getBuiltIn(CONSTRUCTOR_NAME);
        var defineProperty = objectDefineProperty.f;
        descriptors && Constructor && !Constructor[SPECIES$2] && defineProperty(Constructor, SPECIES$2, {
            configurable: true,
            get: function() {
                return this;
            }
        });
    };
    var defineProperty$2 = objectDefineProperty.f;
    var fastKey = internalMetadata.fastKey;
    var setInternalState$1 = internalState.set;
    var internalStateGetterFor = internalState.getterFor;
    var collectionStrong = {
        getConstructor: function(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
            var C = wrapper((function(that, iterable) {
                anInstance(that, C, CONSTRUCTOR_NAME);
                setInternalState$1(that, {
                    type: CONSTRUCTOR_NAME,
                    index: objectCreate(null),
                    first: void 0,
                    last: void 0,
                    size: 0
                });
                descriptors || (that.size = 0);
                null != iterable && iterate_1(iterable, that[ADDER], that, IS_MAP);
            }));
            var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
            var define = function(that, key, value) {
                var state = getInternalState(that);
                var entry = getEntry(that, key);
                var previous, index;
                if (entry) {
                    entry.value = value;
                } else {
                    state.last = entry = {
                        index: index = fastKey(key, true),
                        key: key,
                        value: value,
                        previous: previous = state.last,
                        next: void 0,
                        removed: false
                    };
                    state.first || (state.first = entry);
                    previous && (previous.next = entry);
                    descriptors ? state.size++ : that.size++;
                    'F' !== index && (state.index[index] = entry);
                }
                return that;
            };
            var getEntry = function(that, key) {
                var state = getInternalState(that);
                var index = fastKey(key);
                var entry;
                if ('F' !== index) {
                    return state.index[index];
                }
                for (entry = state.first; entry; entry = entry.next) {
                    if (entry.key == key) {
                        return entry;
                    }
                }
            };
            redefineAll(C.prototype, {
                clear: function clear() {
                    var that = this;
                    var state = getInternalState(that);
                    var data = state.index;
                    var entry = state.first;
                    while (entry) {
                        entry.removed = true;
                        entry.previous && (entry.previous = entry.previous.next = void 0);
                        delete data[entry.index];
                        entry = entry.next;
                    }
                    state.first = state.last = void 0;
                    descriptors ? state.size = 0 : that.size = 0;
                },
                'delete': function(key) {
                    var that = this;
                    var state = getInternalState(that);
                    var entry = getEntry(that, key);
                    if (entry) {
                        var next = entry.next;
                        var prev = entry.previous;
                        delete state.index[entry.index];
                        entry.removed = true;
                        prev && (prev.next = next);
                        next && (next.previous = prev);
                        state.first == entry && (state.first = next);
                        state.last == entry && (state.last = prev);
                        descriptors ? state.size-- : that.size--;
                    }
                    return !!entry;
                },
                forEach: function forEach(callbackfn) {
                    var state = getInternalState(this);
                    var boundFunction = functionBindContext(callbackfn, arguments.length > 1 ? arguments[1] : void 0, 3);
                    var entry;
                    while (entry = entry ? entry.next : state.first) {
                        boundFunction(entry.value, entry.key, this);
                        while (entry && entry.removed) {
                            entry = entry.previous;
                        }
                    }
                },
                has: function has(key) {
                    return !!getEntry(this, key);
                }
            });
            redefineAll(C.prototype, IS_MAP ? {
                get: function get(key) {
                    var entry = getEntry(this, key);
                    return entry && entry.value;
                },
                set: function set(key, value) {
                    return define(this, 0 === key ? 0 : key, value);
                }
            } : {
                add: function add(value) {
                    return define(this, value = 0 === value ? 0 : value, value);
                }
            });
            descriptors && defineProperty$2(C.prototype, 'size', {
                get: function() {
                    return getInternalState(this).size;
                }
            });
            return C;
        },
        setStrong: function(C, CONSTRUCTOR_NAME, IS_MAP) {
            var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
            var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
            var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
            defineIterator(C, CONSTRUCTOR_NAME, (function(iterated, kind) {
                setInternalState$1(this, {
                    type: ITERATOR_NAME,
                    target: iterated,
                    state: getInternalCollectionState(iterated),
                    kind: kind,
                    last: void 0
                });
            }), (function() {
                var state = getInternalIteratorState(this);
                var kind = state.kind;
                var entry = state.last;
                while (entry && entry.removed) {
                    entry = entry.previous;
                }
                if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
                    state.target = void 0;
                    return {
                        value: void 0,
                        done: true
                    };
                }
                return 'keys' == kind ? {
                    value: entry.key,
                    done: false
                } : 'values' == kind ? {
                    value: entry.value,
                    done: false
                } : {
                    value: [ entry.key, entry.value ],
                    done: false
                };
            }), IS_MAP ? 'entries' : 'values', !IS_MAP, true);
            setSpecies(CONSTRUCTOR_NAME);
        }
    };
    var es_set = collection('Set', (function(init) {
        return function Set() {
            return init(this, arguments.length ? arguments[0] : void 0);
        };
    }), collectionStrong);
    var createMethod$3 = function(CONVERT_TO_STRING) {
        return function($this, pos) {
            var S = String(requireObjectCoercible($this));
            var position = toInteger(pos);
            var size = S.length;
            var first, second;
            if (position < 0 || position >= size) {
                return CONVERT_TO_STRING ? '' : void 0;
            }
            first = S.charCodeAt(position);
            return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = S.charCodeAt(position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? S.charAt(position) : first : CONVERT_TO_STRING ? S.slice(position, position + 2) : second - 0xDC00 + (first - 0xD800 << 10) + 0x10000;
        };
    };
    var stringMultibyte = {
        codeAt: createMethod$3(false),
        charAt: createMethod$3(true)
    };
    var charAt = stringMultibyte.charAt;
    var STRING_ITERATOR = 'String Iterator';
    var setInternalState$2 = internalState.set;
    var getInternalState$1 = internalState.getterFor(STRING_ITERATOR);
    defineIterator(String, 'String', (function(iterated) {
        setInternalState$2(this, {
            type: STRING_ITERATOR,
            string: String(iterated),
            index: 0
        });
    }), (function next() {
        var state = getInternalState$1(this);
        var string = state.string;
        var index = state.index;
        var point;
        if (index >= string.length) {
            return {
                value: void 0,
                done: true
            };
        }
        point = charAt(string, index);
        state.index += point.length;
        return {
            value: point,
            done: false
        };
    }));
    var SPECIES$3 = wellKnownSymbol('species');
    var REPLACE_SUPPORTS_NAMED_GROUPS = !fails((function() {
        var re = /./;
        re.exec = function() {
            var result = [];
            result.groups = {
                a: '7'
            };
            return result;
        };
        return '7' !== ''.replace(re, '$<a>');
    }));
    var REPLACE_KEEPS_$0 = function() {
        return '$0' === 'a'.replace(/./, '$0');
    }();
    var REPLACE = wellKnownSymbol('replace');
    var REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE = function() {
        return !!/./[REPLACE] && '' === /./[REPLACE]('a', '$0');
    }();
    var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails((function() {
        var re = /(?:)/;
        var originalExec = re.exec;
        re.exec = function() {
            return originalExec.apply(this, arguments);
        };
        var result = 'ab'.split(re);
        return 2 !== result.length || 'a' !== result[0] || 'b' !== result[1];
    }));
    var fixRegexpWellKnownSymbolLogic = function(KEY, length, exec, sham) {
        var SYMBOL = wellKnownSymbol(KEY);
        var DELEGATES_TO_SYMBOL = !fails((function() {
            var O = {};
            O[SYMBOL] = function() {
                return 7;
            };
            return 7 != ''[KEY](O);
        }));
        var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails((function() {
            var execCalled = false;
            var re = /a/;
            if ('split' === KEY) {
                re = {};
                re.constructor = {};
                re.constructor[SPECIES$3] = function() {
                    return re;
                };
                re.flags = '';
                re[SYMBOL] = /./[SYMBOL];
            }
            re.exec = function() {
                execCalled = true;
                return null;
            };
            re[SYMBOL]('');
            return !execCalled;
        }));
        if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || 'replace' === KEY && !(REPLACE_SUPPORTS_NAMED_GROUPS && REPLACE_KEEPS_$0 && !REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE) || 'split' === KEY && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
            var nativeRegExpMethod = /./[SYMBOL];
            var methods = exec(SYMBOL, ''[KEY], (function(nativeMethod, regexp, str, arg2, forceStringMethod) {
                return regexp.exec === regexpExec ? DELEGATES_TO_SYMBOL && !forceStringMethod ? {
                    done: true,
                    value: nativeRegExpMethod.call(regexp, str, arg2)
                } : {
                    done: true,
                    value: nativeMethod.call(str, regexp, arg2)
                } : {
                    done: false
                };
            }), {
                REPLACE_KEEPS_$0: REPLACE_KEEPS_$0,
                REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE
            });
            var stringMethod = methods[0];
            var regexMethod = methods[1];
            redefine(String.prototype, KEY, stringMethod);
            redefine(RegExp.prototype, SYMBOL, 2 == length ? function(string, arg) {
                return regexMethod.call(string, this, arg);
            } : function(string) {
                return regexMethod.call(string, this);
            });
        }
        sham && createNonEnumerableProperty(RegExp.prototype[SYMBOL], 'sham', true);
    };
    var MATCH = wellKnownSymbol('match');
    var isRegexp = function(it) {
        var isRegExp;
        return isObject(it) && (void 0 !== (isRegExp = it[MATCH]) ? !!isRegExp : 'RegExp' == classofRaw(it));
    };
    var SPECIES$4 = wellKnownSymbol('species');
    var speciesConstructor = function(O, defaultConstructor) {
        var C = anObject(O).constructor;
        var S;
        return void 0 === C || null == (S = anObject(C)[SPECIES$4]) ? defaultConstructor : aFunction$1(S);
    };
    var charAt$1 = stringMultibyte.charAt;
    var advanceStringIndex = function(S, index, unicode) {
        return index + (unicode ? charAt$1(S, index).length : 1);
    };
    var regexpExecAbstract = function(R, S) {
        var exec = R.exec;
        if ('function' == typeof exec) {
            var result = exec.call(R, S);
            if ('object' != typeof result) {
                throw TypeError('RegExp exec method returned something other than an Object or null');
            }
            return result;
        }
        if ('RegExp' !== classofRaw(R)) {
            throw TypeError('RegExp#exec called on incompatible receiver');
        }
        return regexpExec.call(R, S);
    };
    var arrayPush = [].push;
    var min$2 = Math.min;
    var MAX_UINT32 = 0xFFFFFFFF;
    var SUPPORTS_Y = !fails((function() {
        return !RegExp(MAX_UINT32, 'y');
    }));
    fixRegexpWellKnownSymbolLogic('split', 2, (function(SPLIT, nativeSplit, maybeCallNative) {
        var internalSplit;
        internalSplit = 'c' == 'abbc'.split(/(b)*/)[1] || 4 != 'test'.split(/(?:)/, -1).length || 2 != 'ab'.split(/(?:ab)*/).length || 4 != '.'.split(/(.?)(.?)/).length || '.'.split(/()()/).length > 1 || ''.split(/.?/).length ? function(separator, limit) {
            var string = String(requireObjectCoercible(this));
            var lim = void 0 === limit ? MAX_UINT32 : limit >>> 0;
            if (0 === lim) {
                return [];
            }
            if (void 0 === separator) {
                return [ string ];
            }
            if (!isRegexp(separator)) {
                return nativeSplit.call(string, separator, lim);
            }
            var output = [];
            var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
            var lastLastIndex = 0;
            var separatorCopy = new RegExp(separator.source, flags + 'g');
            var match, lastIndex, lastLength;
            while (match = regexpExec.call(separatorCopy, string)) {
                lastIndex = separatorCopy.lastIndex;
                if (lastIndex > lastLastIndex) {
                    output.push(string.slice(lastLastIndex, match.index));
                    match.length > 1 && match.index < string.length && arrayPush.apply(output, match.slice(1));
                    lastLength = match[0].length;
                    lastLastIndex = lastIndex;
                    if (output.length >= lim) {
                        break;
                    }
                }
                separatorCopy.lastIndex === match.index && separatorCopy.lastIndex++;
            }
            lastLastIndex === string.length ? !lastLength && separatorCopy.test('') || output.push('') : output.push(string.slice(lastLastIndex));
            return output.length > lim ? output.slice(0, lim) : output;
        } : '0'.split(void 0, 0).length ? function(separator, limit) {
            return void 0 === separator && 0 === limit ? [] : nativeSplit.call(this, separator, limit);
        } : nativeSplit;
        return [ function split(separator, limit) {
            var O = requireObjectCoercible(this);
            var splitter = null == separator ? void 0 : separator[SPLIT];
            return void 0 !== splitter ? splitter.call(separator, O, limit) : internalSplit.call(String(O), separator, limit);
        }, function(regexp, limit) {
            var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== nativeSplit);
            if (res.done) {
                return res.value;
            }
            var rx = anObject(regexp);
            var S = String(this);
            var C = speciesConstructor(rx, RegExp);
            var unicodeMatching = rx.unicode;
            var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (SUPPORTS_Y ? 'y' : 'g');
            var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
            var lim = void 0 === limit ? MAX_UINT32 : limit >>> 0;
            if (0 === lim) {
                return [];
            }
            if (0 === S.length) {
                return null === regexpExecAbstract(splitter, S) ? [ S ] : [];
            }
            var p = 0;
            var q = 0;
            var A = [];
            while (q < S.length) {
                splitter.lastIndex = SUPPORTS_Y ? q : 0;
                var z = regexpExecAbstract(splitter, SUPPORTS_Y ? S : S.slice(q));
                var e;
                if (null === z || (e = min$2(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p) {
                    q = advanceStringIndex(S, q, unicodeMatching);
                } else {
                    A.push(S.slice(p, q));
                    if (A.length === lim) {
                        return A;
                    }
                    for (var i = 1; i <= z.length - 1; i++) {
                        A.push(z[i]);
                        if (A.length === lim) {
                            return A;
                        }
                    }
                    q = p = e;
                }
            }
            A.push(S.slice(p));
            return A;
        } ];
    }), !SUPPORTS_Y);
    var domIterables = {
        CSSRuleList: 0,
        CSSStyleDeclaration: 0,
        CSSValueList: 0,
        ClientRectList: 0,
        DOMRectList: 0,
        DOMStringList: 0,
        DOMTokenList: 1,
        DataTransferItemList: 0,
        FileList: 0,
        HTMLAllCollection: 0,
        HTMLCollection: 0,
        HTMLFormElement: 0,
        HTMLSelectElement: 0,
        MediaList: 0,
        MimeTypeArray: 0,
        NamedNodeMap: 0,
        NodeList: 1,
        PaintRequestList: 0,
        Plugin: 0,
        PluginArray: 0,
        SVGLengthList: 0,
        SVGNumberList: 0,
        SVGPathSegList: 0,
        SVGPointList: 0,
        SVGStringList: 0,
        SVGTransformList: 0,
        SourceBufferList: 0,
        StyleSheetList: 0,
        TextTrackCueList: 0,
        TextTrackList: 0,
        TouchList: 0
    };
    var ITERATOR$5 = wellKnownSymbol('iterator');
    var TO_STRING_TAG$3 = wellKnownSymbol('toStringTag');
    var ArrayValues = es_array_iterator.values;
    for (var COLLECTION_NAME in domIterables) {
        var Collection = global_1[COLLECTION_NAME];
        var CollectionPrototype = Collection && Collection.prototype;
        if (CollectionPrototype) {
            if (CollectionPrototype[ITERATOR$5] !== ArrayValues) {
                try {
                    createNonEnumerableProperty(CollectionPrototype, ITERATOR$5, ArrayValues);
                } catch (error) {
                    CollectionPrototype[ITERATOR$5] = ArrayValues;
                }
            }
            CollectionPrototype[TO_STRING_TAG$3] || createNonEnumerableProperty(CollectionPrototype, TO_STRING_TAG$3, COLLECTION_NAME);
            if (domIterables[COLLECTION_NAME]) {
                for (var METHOD_NAME in es_array_iterator) {
                    if (CollectionPrototype[METHOD_NAME] !== es_array_iterator[METHOD_NAME]) {
                        try {
                            createNonEnumerableProperty(CollectionPrototype, METHOD_NAME, es_array_iterator[METHOD_NAME]);
                        } catch (error) {
                            CollectionPrototype[METHOD_NAME] = es_array_iterator[METHOD_NAME];
                        }
                    }
                }
            }
        }
    }
    var trim$1 = stringTrim.trim;
    var $parseInt = global_1.parseInt;
    var hex$1 = /^[+-]?0[Xx]/;
    var FORCED$4 = 8 !== $parseInt(whitespaces + '08') || 22 !== $parseInt(whitespaces + '0x16');
    var numberParseInt = FORCED$4 ? function parseInt(string, radix) {
        var S = trim$1(String(string));
        return $parseInt(S, radix >>> 0 || (hex$1.test(S) ? 16 : 10));
    } : $parseInt;
    _export({
        global: true,
        forced: parseInt != numberParseInt
    }, {
        parseInt: numberParseInt
    });
    function textDimensions(text, font) {
        var returnDimension = {};
        var pseudoDiv = insertPseudoDiv(text, font);
        returnDimension = {
            width: parseInt(window.getComputedStyle(pseudoDiv, null).getPropertyValue('width'), 10),
            height: parseInt(window.getComputedStyle(pseudoDiv, null).getPropertyValue('height'), 10)
        };
        document.body.removeChild(pseudoDiv);
        return returnDimension;
    }
    function insertPseudoDiv(text, font) {
        var pseudoDiv;
        if (null == document.getElementById('pseudoDiv')) {
            pseudoDiv = document.createElement('div');
            document.body.insertBefore(pseudoDiv, document.body.firstChild);
            pseudoDiv.setAttribute('id', 'pseudoDiv');
            pseudoDiv.style.visibility = 'hidden';
            pseudoDiv.style.position = 'absolute';
            pseudoDiv.style.display = 'inline-block';
        } else {
            pseudoDiv = document.getElementById('pseudoDiv');
        }
        pseudoDiv.style.font = font;
        var textNode = document.createTextNode(text);
        pseudoDiv.appendChild(textNode);
        return pseudoDiv;
    }
    var push = [].push;
    var createMethod$4 = function(TYPE) {
        var IS_MAP = 1 == TYPE;
        var IS_FILTER = 2 == TYPE;
        var IS_SOME = 3 == TYPE;
        var IS_EVERY = 4 == TYPE;
        var IS_FIND_INDEX = 6 == TYPE;
        var NO_HOLES = 5 == TYPE || IS_FIND_INDEX;
        return function($this, callbackfn, that, specificCreate) {
            var O = toObject($this);
            var self = indexedObject(O);
            var boundFunction = functionBindContext(callbackfn, that, 3);
            var length = toLength(self.length);
            var index = 0;
            var create = specificCreate || arraySpeciesCreate;
            var target = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : void 0;
            var value, result;
            for (;length > index; index++) {
                if (NO_HOLES || index in self) {
                    value = self[index];
                    result = boundFunction(value, index, O);
                    if (TYPE) {
                        if (IS_MAP) {
                            target[index] = result;
                        } else if (result) {
                            switch (TYPE) {
                              case 3:
                                return true;

                              case 5:
                                return value;

                              case 6:
                                return index;

                              case 2:
                                push.call(target, value);
                            }
                        } else if (IS_EVERY) {
                            return false;
                        }
                    }
                }
            }
            return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
        };
    };
    var arrayIteration = {
        forEach: createMethod$4(0),
        map: createMethod$4(1),
        filter: createMethod$4(2),
        some: createMethod$4(3),
        every: createMethod$4(4),
        find: createMethod$4(5),
        findIndex: createMethod$4(6)
    };
    var $filter = arrayIteration.filter;
    var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');
    var USES_TO_LENGTH$2 = arrayMethodUsesToLength('filter');
    _export({
        target: 'Array',
        proto: true,
        forced: !HAS_SPECIES_SUPPORT || !USES_TO_LENGTH$2
    }, {
        filter: function filter(callbackfn) {
            return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
    });
    var $forEach = arrayIteration.forEach;
    var STRICT_METHOD$3 = arrayMethodIsStrict('forEach');
    var USES_TO_LENGTH$3 = arrayMethodUsesToLength('forEach');
    var arrayForEach = STRICT_METHOD$3 && USES_TO_LENGTH$3 ? [].forEach : function forEach(callbackfn) {
        return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
    };
    _export({
        target: 'Array',
        proto: true,
        forced: [].forEach != arrayForEach
    }, {
        forEach: arrayForEach
    });
    var $map = arrayIteration.map;
    var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport('map');
    var USES_TO_LENGTH$4 = arrayMethodUsesToLength('map');
    _export({
        target: 'Array',
        proto: true,
        forced: !HAS_SPECIES_SUPPORT$1 || !USES_TO_LENGTH$4
    }, {
        map: function map(callbackfn) {
            return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : void 0);
        }
    });
    var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport('slice');
    var USES_TO_LENGTH$5 = arrayMethodUsesToLength('slice', {
        ACCESSORS: true,
        0: 0,
        1: 2
    });
    var SPECIES$5 = wellKnownSymbol('species');
    var nativeSlice = [].slice;
    var max$1 = Math.max;
    _export({
        target: 'Array',
        proto: true,
        forced: !HAS_SPECIES_SUPPORT$2 || !USES_TO_LENGTH$5
    }, {
        slice: function slice(start, end) {
            var O = toIndexedObject(this);
            var length = toLength(O.length);
            var k = toAbsoluteIndex(start, length);
            var fin = toAbsoluteIndex(void 0 === end ? length : end, length);
            var Constructor, result, n;
            if (isArray(O)) {
                Constructor = O.constructor;
                if ('function' != typeof Constructor || Constructor !== Array && !isArray(Constructor.prototype)) {
                    if (isObject(Constructor)) {
                        Constructor = Constructor[SPECIES$5];
                        null === Constructor && (Constructor = void 0);
                    }
                } else {
                    Constructor = void 0;
                }
                if (Constructor === Array || void 0 === Constructor) {
                    return nativeSlice.call(O, k, fin);
                }
            }
            result = new (void 0 === Constructor ? Array : Constructor)(max$1(fin - k, 0));
            for (n = 0; k < fin; k++, n++) {
                k in O && createProperty(result, n, O[k]);
            }
            result.length = n;
            return result;
        }
    });
    for (var COLLECTION_NAME$1 in domIterables) {
        var Collection$1 = global_1[COLLECTION_NAME$1];
        var CollectionPrototype$1 = Collection$1 && Collection$1.prototype;
        if (CollectionPrototype$1 && CollectionPrototype$1.forEach !== arrayForEach) {
            try {
                createNonEnumerableProperty(CollectionPrototype$1, 'forEach', arrayForEach);
            } catch (error) {
                CollectionPrototype$1.forEach = arrayForEach;
            }
        }
    }
    function buildSimplexProblem(data, min, available) {
        if (0 == data.length) {
            return [ [], [] ];
        }
        var sum = data.reduce((function(a, b) {
            return a + b;
        }));
        var objective = 'Maximize Z = r';
        var constraints = [];
        var totalConstraint = ''.concat(sum, 'r');
        data.forEach((function(d, i) {
            constraints.push(''.concat(d, 'r + x').concat(i, ' >= ').concat(min));
            totalConstraint += ' + x'.concat(i);
        }));
        constraints.push(''.concat(totalConstraint, ' <= ').concat(available));
        return [ objective, constraints ];
    }
    function getColumn(matrix, column) {
        column = 'first' == column ? 0 : 'last' == column ? matrix[0].length - 1 : column;
        return matrix.reduce((function(a, b) {
            return a.concat(b[column]);
        }), []);
    }
    function trim$2(x) {
        var precision = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7;
        return parseFloat(x.toFixed(precision));
    }
    function testVariable(variable, prefixes) {
        var regex = new RegExp('['.concat(prefixes.join(''), ']\\d+'), 'i');
        return null != variable.match(regex);
    }
    function multipleSolutionTest(model, variables, basicVariables, nonBasicVariables) {
        var primaryNonBasicVariables = nonBasicVariables.reduce((function(a, b) {
            return false == testVariable(b, [ 's', 'e', 'a' ]) ? a.concat(variables.indexOf(b)) : a;
        }), []);
        if (0 == primaryNonBasicVariables.length) {
            return null;
        }
        var pivotColumns = [];
        primaryNonBasicVariables.forEach((function(index) {
            var column = getColumn(model, index);
            0 == trim$2(column.slice(-1)[0]) & column.some((function(d) {
                return trim$2(d) > 0;
            })) && pivotColumns.push(index);
        }));
        return pivotColumns.length > 0 ? pivotColumns[0] : null;
    }
    function _toConsumableArray$1(arr) {
        return _arrayWithoutHoles$1(arr) || _iterableToArray$1(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread$1();
    }
    function _nonIterableSpread$1() {
        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    function _iterableToArray$1(iter) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(iter)) {
            return Array.from(iter);
        }
    }
    function _arrayWithoutHoles$1(arr) {
        if (Array.isArray(arr)) {
            return _arrayLikeToArray$1(arr);
        }
    }
    function _slicedToArray$1(arr, i) {
        return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest$1();
    }
    function _nonIterableRest$1() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    function _unsupportedIterableToArray$1(o, minLen) {
        if (o) {
            if ('string' == typeof o) {
                return _arrayLikeToArray$1(o, minLen);
            }
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            return 'Map' === n || 'Set' === n ? Array.from(o) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray$1(o, minLen) : void 0;
        }
    }
    function _arrayLikeToArray$1(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }
    function _iterableToArrayLimit$1(arr, i) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(arr)) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) {
                        break;
                    }
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    _n || null == _i['return'] || _i['return']();
                } finally {
                    if (_d) {
                        throw _e;
                    }
                }
            }
            return _arr;
        }
    }
    function _arrayWithHoles$1(arr) {
        if (Array.isArray(arr)) {
            return arr;
        }
    }
    function parseModel(objective, constraints) {
        if ('' == objective | 0 == constraints.length) {
            return [ [], '', '' ];
        }
        var modelVariables = [];
        var modelCoeficients = [];
        var modelConstraints = [];
        var modelEqualities = [];
        var objectiveRegex = /(max|min)(?:.*\s*)(\w)(?:\s*=) ((?:\s*[+-]?\s*\d*\.*\d*\w\d*)+)/i;
        var constraintRegex = /((?:\s*[+-]?\s*\d*\.*\d*\w\d*)+)\s*(=|<=|>=)\s*(\d+)/i;
        var _objective$match = objective.match(objectiveRegex), _objective$match2 = _slicedToArray$1(_objective$match, 4), regexResult = _objective$match2[0], type = _objective$match2[1], objectiveVariable = _objective$match2[2], objectiveEquation = _objective$match2[3];
        type = type.toLowerCase();
        var _parseEquation = parseEquation(objectiveEquation), _parseEquation2 = _slicedToArray$1(_parseEquation, 2), objectiveCoeficients = _parseEquation2[0], objectiveVariables = _parseEquation2[1];
        constraints.forEach((function(d) {
            var _d$match = d.match(constraintRegex), _d$match2 = _slicedToArray$1(_d$match, 4), regexResult = _d$match2[0], equation = _d$match2[1], equality = _d$match2[2], constraint = _d$match2[3];
            modelConstraints.push(parseFloat(constraint));
            modelEqualities.push(equality);
            var _parseEquation3 = parseEquation(equation), _parseEquation4 = _slicedToArray$1(_parseEquation3, 2), constraintCoeficients = _parseEquation4[0], constraintVariables = _parseEquation4[1];
            modelVariables.push(constraintVariables);
            modelCoeficients.push(constraintCoeficients);
        }));
        modelVariables.push(objectiveVariables);
        modelCoeficients.push(objectiveCoeficients);
        modelConstraints.push(0);
        var _buildTableau = buildTableau(modelVariables, modelCoeficients, modelConstraints, modelEqualities, objectiveVariable), _buildTableau2 = _slicedToArray$1(_buildTableau, 2), model = _buildTableau2[0], variables = _buildTableau2[1];
        return [ model, variables, type ];
    }
    function parseEquation(equation) {
        var elementRegex = /\s*[+-]?\s*\d*\.*\d*\w\d*/g;
        var coeficentRegex = /\s*([+-]?)\s*(\d*\.*\d*)(\w\d*)/;
        var coeficients = [];
        var variables = [];
        var elements = _toConsumableArray$1(equation.matchAll(elementRegex));
        elements.forEach((function(element) {
            var _element$0$match = element[0].match(coeficentRegex), _element$0$match2 = _slicedToArray$1(_element$0$match, 4), regexResult = _element$0$match2[0], sign = _element$0$match2[1], coeficient = _element$0$match2[2], variable = _element$0$match2[3];
            coeficient = '' == coeficient ? 1 : coeficient;
            coeficients.push(parseFloat(sign + coeficient));
            variables.push(variable);
        }));
        return [ coeficients, variables ];
    }
    function buildTableau(variables, coeficients, constraints, equalities, objectiveVariable, type) {
        var model = [];
        var uniqueVariables = _toConsumableArray$1(new Set(variables.reduce((function(a, b) {
            return a.concat(b);
        }), [])));
        coeficients.forEach((function(coeficient, row) {
            var tmp = Array.apply(null, Array(uniqueVariables.length)).map(Number.prototype.valueOf, 0);
            coeficient.forEach((function(item, index) {
                var pos = uniqueVariables.indexOf(variables[row][index]);
                tmp[pos] = row == coeficients.length - 1 ? -item : item;
            }));
            model.push(tmp);
        }));
        var slackVariableCount = equalities.reduce((function(a, b) {
            return '<=' == b ? ++a : a;
        }), 0);
        var extraVariableCount = equalities.reduce((function(a, b) {
            return '>=' == b ? ++a : a;
        }), 0);
        var alternateVariableCount = equalities.reduce((function(a, b) {
            return '>=' == b || '=' == b ? ++a : a;
        }), 0);
        for (var i = 0; i < slackVariableCount; i++) {
            uniqueVariables.push('s' + i);
        }
        for (var _i2 = 0; _i2 < extraVariableCount; _i2++) {
            uniqueVariables.push('e' + _i2);
        }
        for (var _i3 = 0; _i3 < alternateVariableCount; _i3++) {
            uniqueVariables.push('a' + _i3);
        }
        uniqueVariables.push(objectiveVariable);
        var totalNewVariableCount = uniqueVariables.length - model[0].length;
        var tmp = Array.apply(null, Array(totalNewVariableCount)).map(Number.prototype.valueOf, 0);
        model.forEach((function(row) {
            row.push.apply(row, _toConsumableArray$1(tmp));
        }));
        var lePositions = equalities.reduce((function(a, b, i) {
            return '<=' == b ? a.concat(i) : a;
        }), []);
        lePositions.forEach((function(row, index) {
            var column = uniqueVariables.indexOf('s' + index);
            model[row][column] = 1;
        }));
        var aPositions = equalities.reduce((function(a, b, i) {
            return '>=' == b || '=' == b ? a.concat(i) : a;
        }), []);
        aPositions.forEach((function(row, index) {
            var column = uniqueVariables.indexOf('a' + index);
            model[row][column] = 1;
        }));
        var gePositions = equalities.reduce((function(a, b, i) {
            return '>=' == b ? a.concat(i) : a;
        }), []);
        gePositions.forEach((function(row, index) {
            var column = uniqueVariables.indexOf('e' + index);
            model[row][column] = -1;
        }));
        model.forEach((function(row, index) {
            row[row.length - 1] = constraints[index];
        }));
        return [ model, uniqueVariables ];
    }
    function getPivot(model, variables, basicVariables, nonBasicVariables, type) {
        var pivotColumn;
        var pivotRow = null;
        var minRatio = Number.MAX_VALUE;
        var rowCount = model.length;
        var columnCount = model[0].length;
        var pivotRows = [];
        var objectiveValues = model[rowCount - 1].slice(0, -1).reduce((function(a, b, i) {
            return -1 != nonBasicVariables.indexOf(variables[i]) ? a.concat(b) : a;
        }), []);
        objectiveValues = 'max' == type ? objectiveValues.filter((function(d) {
            return trim$2(d) < 0;
        })) : objectiveValues.filter((function(d) {
            return trim$2(d) > 0;
        }));
        if (0 == objectiveValues.length) {
            var test = multipleSolutionTest(model, variables, basicVariables, nonBasicVariables);
            return null == test ? 'solved' : 'multiple solutions';
        }
        var objectiveValue = objectiveValues[0];
        pivotColumn = model[rowCount - 1].indexOf(objectiveValue);
        minRatio = model.reduce((function(a, b, i) {
            if (trim$2(b[pivotColumn]) > 0 & i != rowCount - 1) {
                var ratio = b[columnCount - 1] / b[pivotColumn];
                return ratio < a ? ratio : a;
            }
            return a;
        }), minRatio);
        pivotRows = model.reduce((function(a, b, i) {
            return trim$2(b[pivotColumn]) > 0 & i != rowCount - 1 && b[b.length - 1] / b[pivotColumn] == minRatio ? a.concat(i) : a;
        }), []);
        switch (pivotRows.length) {
          case 0:
            return 'unbounded';

          case 1:
            pivotRow = pivotRows[0];
            break;

          default:
            pivotRows.forEach((function(row) {
                testVariable(basicVariables[row], [ 'a' ]) && (pivotRow = row);
            }));
        }
        pivotRow = null == pivotRow ? pivotRows[0] : pivotRow;
        return {
            row: pivotRow,
            column: pivotColumn
        };
    }
    function pivotModel(model, pivot) {
        var multiplier;
        var pivotValue = model[pivot.row][pivot.column];
        1 != pivotValue && model[pivot.row].forEach((function(value, index) {
            model[pivot.row][index] = value / pivotValue;
        }));
        model.forEach((function(row, rowIndex) {
            if (rowIndex !== pivot.row && 0 !== row[pivot.column]) {
                multiplier = -row[pivot.column];
                row.forEach((function(value, columnIndex) {
                    model[rowIndex][columnIndex] = multiplier * model[pivot.row][columnIndex] + model[rowIndex][columnIndex];
                }));
            }
        }));
        return model;
    }
    function buildPhaseOneTableau(model, variables) {
        var objectiveRow = [];
        var alternativeRows = [];
        var phaseOneTableau = [];
        model.forEach((function(row) {
            phaseOneTableau.push(row);
        }));
        variables.forEach((function(variable) {
            objectiveRow.push(testVariable(variable, [ 'a' ]) ? -1 : 0);
        }));
        phaseOneTableau.forEach((function(row) {
            for (var index = 0; index < row.length; index++) {
                if (testVariable(variables[index], [ 'a' ]) && 1 == row[index]) {
                    alternativeRows.push(row);
                    break;
                }
            }
        }));
        alternativeRows.forEach((function(row) {
            row.forEach((function(item, index) {
                objectiveRow[index] += item;
            }));
        }));
        phaseOneTableau.push(objectiveRow);
        return phaseOneTableau;
    }
    function reBaseModel(model, variables, basicVariables) {
        var objectiveRow = model[model.length - 1];
        var changedRows = [];
        variables.forEach((function(variable, index) {
            var row = basicVariables.indexOf(variable);
            -1 != row && 0 != trim$2(objectiveRow[index]) && changedRows.push(model[row].map((function(item) {
                return item * -objectiveRow[index];
            })));
        }));
        changedRows.forEach((function(row) {
            row.forEach((function(item, index) {
                model[model.length - 1][index] += item;
            }));
        }));
        return model;
    }
    function cleanPhaseOneTableau(model, objective, variables, basicVariables, nonBasicVariables) {
        var lastRow = model.length - 1;
        var lastColumn = model[0].length - 1;
        if (trim$2(model[lastRow][lastColumn]) > 0) {
            return [ model, 'infeasible' ];
        }
        model.push(objective);
        var columnsToRemove = variables.reduce((function(a, b, i) {
            return testVariable(b, [ 'a' ]) && -1 == basicVariables.indexOf(b) ? a.concat(i) : a;
        }), []).reverse();
        model.forEach((function(row) {
            columnsToRemove.forEach((function(column) {
                row.splice(column, 1);
            }));
        }));
        var basicVariableCount = basicVariables.reduce((function(a, b) {
            return testVariable(b, [ 'a' ]) ? ++a : a;
        }), 0);
        var phaseOneObjective = model.splice(lastRow, 1)[0];
        columnsToRemove.forEach((function(column) {
            variables.splice(column, 1);
        }));
        var indexes = nonBasicVariables.reduce((function(a, b, i) {
            return testVariable(b, [ 'a' ]) ? a.concat(i) : a;
        }), []).reverse();
        indexes.forEach((function(index) {
            nonBasicVariables.splice(index, 1);
        }));
        model = reBaseModel(model, variables, basicVariables);
        return [ model, '' ];
    }
    function getVariables(model, variables) {
        var prefixCodes = [ 's', 'a' ];
        var basicVariableCount = variables.reduce((function(a, b) {
            return -1 != prefixCodes.indexOf(b.charAt(0)) ? ++a : a;
        }), 0);
        var lastRow = model.length - 1;
        var zPrefix = variables[variables.length - 1];
        var basicVariables = new Array(basicVariableCount);
        var nonBasicVariables = [];
        model.forEach((function(row, index) {
            row.forEach((function(item, column) {
                var isValidColumn = testVariable(variables[column], prefixCodes);
                var isZcolumn = variables[column] == zPrefix && index == lastRow;
                (1 == item && isValidColumn || isZcolumn) && (basicVariables[index] = variables[column]);
            }));
        }));
        variables.forEach((function(variable) {
            -1 == basicVariables.indexOf(variable) && nonBasicVariables.push(variable);
        }));
        return {
            basicVariables: basicVariables,
            nonBasicVariables: nonBasicVariables
        };
    }
    function swapVariables(pivot, variables, basicVariables, nonBasicVariables) {
        var tmpVariable = basicVariables[pivot.row];
        basicVariables[pivot.row] = variables[pivot.column];
        nonBasicVariables[nonBasicVariables.indexOf(variables[pivot.column])] = tmpVariable;
        return {
            basicVariables: basicVariables,
            nonBasicVariables: nonBasicVariables
        };
    }
    function _slicedToArray$2(arr, i) {
        return _arrayWithHoles$2(arr) || _iterableToArrayLimit$2(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$2();
    }
    function _nonIterableRest$2() {
        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
    }
    function _unsupportedIterableToArray$2(o, minLen) {
        if (o) {
            if ('string' == typeof o) {
                return _arrayLikeToArray$2(o, minLen);
            }
            var n = Object.prototype.toString.call(o).slice(8, -1);
            'Object' === n && o.constructor && (n = o.constructor.name);
            return 'Map' === n || 'Set' === n ? Array.from(o) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray$2(o, minLen) : void 0;
        }
    }
    function _arrayLikeToArray$2(arr, len) {
        (null == len || len > arr.length) && (len = arr.length);
        for (var i = 0, arr2 = new Array(len); i < len; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    }
    function _iterableToArrayLimit$2(arr, i) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(arr)) {
            var _arr = [];
            var _n = true;
            var _d = false;
            var _e = void 0;
            try {
                for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
                    _arr.push(_s.value);
                    if (i && _arr.length === i) {
                        break;
                    }
                }
            } catch (err) {
                _d = true;
                _e = err;
            } finally {
                try {
                    _n || null == _i['return'] || _i['return']();
                } finally {
                    if (_d) {
                        throw _e;
                    }
                }
            }
            return _arr;
        }
    }
    function _arrayWithHoles$2(arr) {
        if (Array.isArray(arr)) {
            return arr;
        }
    }
    function buildSolution(model, basicVariables, nonBasicVariables, result) {
        var solution = [];
        var lastColumn = model[0].length - 1;
        for (var i = 0; i < basicVariables.length; i++) {
            solution.push([ basicVariables[i], trim$2(model[i][lastColumn]) ]);
        }
        return {
            solution: solution,
            result: result
        };
    }
    function phaseTwo(model, variables, basicVariables, nonBasicVariables, type) {
        var pivot;
        while (true) {
            pivot = getPivot(model, variables, basicVariables, nonBasicVariables, type);
            switch (pivot) {
              case 'solved':
              case 'multiple solutions':
              case 'unbounded':
                return [ model, pivot ];
            }
            model = pivotModel(model, pivot);
            swapVariables(pivot, variables, basicVariables, nonBasicVariables);
        }
    }
    function simplex(objective, constraints) {
        var _parseModel = parseModel(objective, constraints), _parseModel2 = _slicedToArray$2(_parseModel, 3), model = _parseModel2[0], variables = _parseModel2[1], type = _parseModel2[2];
        if (0 == model.length) {
            return {
                solution: [],
                result: ''
            };
        }
        var tableau;
        var result;
        model.forEach((function(row) {
            row[row.length - 1] < 0 && row.forEach((function(item) {}));
        }));
        var _getVariables = getVariables(model, variables), basicVariables = _getVariables.basicVariables, nonBasicVariables = _getVariables.nonBasicVariables;
        var isTwoPhase = variables.some((function(variable) {
            return 'a' == variable.charAt(0);
        }));
        if (isTwoPhase) {
            var originalObjective = model.pop();
            tableau = buildPhaseOneTableau(model, variables);
            var _phaseTwo = phaseTwo(tableau, variables, basicVariables, nonBasicVariables, 'min');
            var _phaseTwo2 = _slicedToArray$2(_phaseTwo, 2);
            tableau = _phaseTwo2[0];
            result = _phaseTwo2[1];
            if ('unbounded' == result) {
                return buildSolution(tableau, basicVariables, nonBasicVariables, result);
            }
            var _cleanPhaseOneTableau = cleanPhaseOneTableau(tableau, originalObjective, variables, basicVariables, nonBasicVariables);
            var _cleanPhaseOneTableau2 = _slicedToArray$2(_cleanPhaseOneTableau, 2);
            tableau = _cleanPhaseOneTableau2[0];
            result = _cleanPhaseOneTableau2[1];
            if ('infeasible' == result) {
                return buildSolution(tableau, basicVariables, nonBasicVariables, result);
            }
            var _phaseTwo3 = phaseTwo(tableau, variables, basicVariables, nonBasicVariables, type);
            var _phaseTwo4 = _slicedToArray$2(_phaseTwo3, 2);
            tableau = _phaseTwo4[0];
            result = _phaseTwo4[1];
        } else {
            var _phaseTwo5 = phaseTwo(model, variables, basicVariables, nonBasicVariables, type);
            var _phaseTwo6 = _slicedToArray$2(_phaseTwo5, 2);
            tableau = _phaseTwo6[0];
            result = _phaseTwo6[1];
        }
        return buildSolution(tableau, basicVariables, nonBasicVariables, result);
    }
    function bpMap(a, p, m, s, e) {
        var ret = [];
        var data = a.reduce((function(a, b) {
            return b.value > 1e-5 ? a.concat(b.value) : a;
        }), []);
        var len = data.length;
        var totalPad = len * p * 2;
        var availableSize = e - s - totalPad;
        var t = data.reduce((function(a, b) {
            return a + b;
        }), 0);
        var _buildSimplexProblem = buildSimplexProblem(data, m, availableSize), _buildSimplexProblem2 = _slicedToArray(_buildSimplexProblem, 2), objective = _buildSimplexProblem2[0], constraints = _buildSimplexProblem2[1];
        var _simplex = simplex(objective, constraints), solution = _simplex.solution, result = _simplex.result;
        var ratio;
        switch (result) {
          case 'unbounded':
          case 'infeasible':
            ratio = availableSize / t;
            break;

          case '':
            ratio = 0;
            break;

          default:
            ratio = solution.reduce((function(a, b) {
                return 'r' == b[0] ? b[1] : a;
            }), 0);
        }
        var b = s;
        var o = ratio;
        a.forEach((function(d) {
            var v = d.value * o;
            var adjustedMin = d.value < 1e-5 ? 0 : m;
            var adjustedP = d.value < 1e-5 ? 0 : p;
            ret.push({
                s: b + adjustedP + (v < adjustedMin ? 0.5 * (adjustedMin - v) : 0),
                e: b + adjustedP + (v < adjustedMin ? 0.5 * (adjustedMin + v) : v),
                p: t < 1e-5 ? 0 : d.value / t
            });
            b += 2 * adjustedP + (v < adjustedMin ? adjustedMin : v);
        }));
        return ret;
    }
    function getTransitions(duration, name) {
        var t = d3.transition(name).duration(duration);
        var t1 = d3.transition(name).duration(duration / 2).ease(d3.easeLinear);
        var t2 = d3.transition(name).ease(d3.easeLinear);
        return [ t, t1, t2 ];
    }
    var state = 'unclicked';
    function click(d) {
        if ('unclicked' == state) {
            state = 'clicked';
            mouseOver(d);
        } else {
            state = 'unclicked';
            mouseOut(d);
        }
    }
    function mouseOver(d) {
        var newbars = bars(d);
        var _getTransitions = getTransitions(biPartite.duration(), 'mouse'), _getTransitions2 = _slicedToArray(_getTransitions, 3), t = _getTransitions2[0], t1 = _getTransitions2[1], t2 = _getTransitions2[2];
        d3.selectAll('.biPartite-mainBar').filter((function(r) {
            return r.part === d.part && r.key === d.key;
        })).select('rect').style('stroke-opacity', 1);
        d3.selectAll('.biPartite-subBar').data(newbars.subBars).transition(t).attr('transform', (function(d) {
            return 'translate('.concat(d.x, ',').concat(d.y, ')');
        })).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
        var e = d3.selectAll('.biPartite-edge').data(newbars.edges);
        e.filter((function(t) {
            return t[d.part] === d.key;
        })).transition(t).style('fill-opacity', biPartite.edgeOpacity()).attr('d', (function(d) {
            return d.path;
        }));
        e.filter((function(t) {
            return t[d.part] !== d.key;
        })).transition(t).style('fill-opacity', 0).attr('d', (function(d) {
            return d.path;
        }));
        var mainBars = d3.selectAll('.biPartite-mainBar').data(newbars.mainBars);
        mainBars.transition(t).attr('transform', (function(d) {
            return 'translate('.concat(d.x, ',').concat(d.y, ')');
        })).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
        mainBars.select('.biPartite-percentage.white').transition(t1).style('opacity', 0).transition(t2).text((function(d) {
            return 0 == d.value ? '' : formatPercent(d.percent);
        })).style('opacity', (function(d) {
            return 0 == d.value ? 0 : 1;
        }));
        mainBars.select('.biPartite-label').transition(t).style('opacity', (function(d) {
            return 0 == d.value ? 0 : 1;
        }));
    }
    function mouseOut(d) {
        var newBars = bars();
        var _getTransitions3 = getTransitions(biPartite.duration(), 'mouse'), _getTransitions4 = _slicedToArray(_getTransitions3, 3), t = _getTransitions4[0], t1 = _getTransitions4[1], t2 = _getTransitions4[2];
        d3.selectAll('.biPartite-mainBar').filter((function(r) {
            return r.part === d.part && r.key === d.key;
        })).select('rect').style('stroke-opacity', 0);
        d3.selectAll('.biPartite-subBar').data(newBars.subBars).transition(t).attr('transform', (function(d) {
            return 'translate('.concat(d.x, ',').concat(d.y, ')');
        })).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
        d3.selectAll('.biPartite-edge').data(newBars.edges).transition(t).style('fill-opacity', biPartite.edgeOpacity()).attr('d', (function(d) {
            return d.path;
        }));
        var mainBars = d3.selectAll('.biPartite-mainBar').data(newBars.mainBars);
        mainBars.transition(t).attr('transform', (function(d) {
            return 'translate('.concat(d.x, ',').concat(d.y, ')');
        })).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
        mainBars.select('.biPartite-percentage.white').transition(t1).style('opacity', 0).transition(t2).text((function(d) {
            return 0 == d.value ? '' : formatPercent(d.percent);
        })).style('opacity', (function(d) {
            return 0 == d.value ? 0 : 1;
        }));
        mainBars.select('.biPartite-label').transition(t).style('opacity', 1);
    }
    var data$1 = [];
    var container = document.documentElement;
    var fillColors = [ '#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3' ];
    var sort = 'alpha';
    var sourceKeys = [];
    var targetKeys = [];
    var orient = 'vertical';
    var pad = 1;
    var duration = 750;
    var edgeOpacity = 0.4;
    var edgeMode = 'curved';
    var refresh = true;
    var width = 0;
    var height = 0;
    var minWidth = 0;
    var minHeight = 0;
    var labelOffset = 0;
    var eventTypeOver = 'mouseenter';
    var eventTypeOut = 'mouseleave';
    var eventListenerOver = mouseOver;
    var eventListenerOut = mouseOut;
    var glb = {
        data: data$1,
        container: container,
        fillColors: fillColors,
        sort: sort,
        sourceKeys: sourceKeys,
        targetKeys: targetKeys,
        orient: orient,
        pad: pad,
        duration: duration,
        edgeOpacity: edgeOpacity,
        edgeMode: edgeMode,
        refresh: refresh,
        width: width,
        height: height,
        minWidth: minWidth,
        minHeight: minHeight,
        labelOffset: labelOffset,
        eventTypeOver: eventTypeOver,
        eventTypeOut: eventTypeOut,
        eventListenerOver: eventListenerOver,
        eventListenerOut: eventListenerOut
    };
    function calculateMainBars(part, mb) {
        var mainBars = [];
        var orient = biPartite.orient();
        var ps = [];
        var mbData = biPartite.data().slice();
        var keys = 'primary' == part ? glb.sourceKeys : glb.targetKeys;
        var key = 'primary' == part ? keyPrimary : keySecondary;
        var altKey = 'primary' == part ? keySecondary : keyPrimary;
        keys.forEach((function(d) {
            var sum = null != mb && mb.part != part ? mbData.reduce((function(a, b) {
                return key(b) == d && altKey(b) == mb.key ? a + value(b) : a;
            }), 0) : mbData.reduce((function(a, b) {
                return key(b) == d ? a + value(b) : a;
            }), 0);
            ps.push({
                key: d,
                value: sum
            });
        }));
        var bars = bpMap(ps, biPartite.pad(), glb.minHeight, 0, 'vertical' == orient ? glb.height : glb.width);
        ps.forEach((function(d, i) {
            mainBars.push({
                x: 'horizontal' == orient ? (bars[i].s + bars[i].e) / 2 : 'primary' == part ? 0 : glb.width - glb.minWidth / 2,
                y: 'vertical' == orient ? (bars[i].s + bars[i].e) / 2 : 'primary' == part ? 0 : glb.height - glb.minWidth / 2,
                height: 'vertical' == orient ? (bars[i].e - bars[i].s) / 2 : glb.minWidth / 2,
                width: 'horizontal' == orient ? (bars[i].e - bars[i].s) / 2 : glb.minWidth / 2,
                part: part,
                key: d.key,
                value: d.value,
                percent: bars[i].p
            });
        }));
        return mainBars;
    }
    function calculateSubBars(part, mb, mainBars) {
        var orient = biPartite.orient();
        var subBars = [];
        var ps = [];
        var sbData = biPartite.data().slice();
        var keys = 'primary' == part ? glb.sourceKeys : glb.targetKeys;
        var key = 'primary' == part ? keyPrimary : keySecondary;
        var altKey = 'primary' == part ? keySecondary : keyPrimary;
        keys.forEach((function(d) {
            var values = null != mb && mb.part != part ? sbData.reduce((function(a, b) {
                return key(b) == d ? altKey(b) == mb.key ? a.concat({
                    key: altKey(b),
                    value: value(b)
                }) : a.concat({
                    key: altKey(b),
                    value: 0
                }) : a;
            }), []) : sbData.reduce((function(a, b) {
                return key(b) == d ? a.concat({
                    key: altKey(b),
                    value: value(b)
                }) : a;
            }), []);
            ps.push({
                key: d,
                values: values
            });
        }));
        ps.forEach((function(d) {
            var g = mainBars[part].filter((function(e) {
                return e.key == d.key;
            }))[0];
            var bars = bpMap(d.values, 0, 0, 'vertical' == orient ? g.y - g.height : g.x - g.width, 'vertical' == orient ? g.y + g.height : g.x + g.width);
            d.values.forEach((function(t, i) {
                subBars.push({
                    x: 'vertical' == orient ? 'primary' == part ? 0 : glb.width - glb.minWidth / 2 : (bars[i].s + bars[i].e) / 2,
                    y: 'horizontal' == orient ? 'primary' == part ? 0 : glb.height - glb.minWidth / 2 : (bars[i].s + bars[i].e) / 2,
                    height: ('vertical' == orient ? bars[i].e - bars[i].s : glb.minWidth) / 2,
                    width: ('horizontal' == orient ? bars[i].e - bars[i].s : glb.minWidth) / 2,
                    part: part,
                    primary: 'primary' == part ? d.key : t.key,
                    secondary: 'primary' == part ? t.key : d.key,
                    value: t.value,
                    percent: bars[i].p * g.percent,
                    index: 'primary' == part ? ''.concat(d.key, '|').concat(t.key) : ''.concat(t.key, '|').concat(d.key)
                });
            }));
        }));
        return subBars;
    }
    function calculateEdges(subBars) {
        return subBars.primary.map((function(d) {
            var g = subBars.secondary.filter((function(e) {
                return e.index == d.index;
            }))[0];
            return {
                path: 'vertical' == biPartite.orient() ? edgeVert(d.x + d.width, d.y + d.height, g.x - g.width, g.y + g.height, g.x - g.width, g.y - g.height, d.x + d.width, d.y - d.height) : edgeHoriz(d.x - d.width, d.y + d.height, g.x - g.width, g.y - g.height, g.x + g.width, g.y - g.height, d.x + d.width, d.y + d.height),
                primary: d.primary,
                secondary: d.secondary,
                value: d.value,
                percent: d.percent
            };
        }));
    }
    function edgeVert(x1, y1, x2, y2, x3, y3, x4, y4) {
        if ('straight' == biPartite.edgeMode()) {
            return 'M'.concat(x1, ',').concat(y1, 'L').concat(x2, ',').concat(y2, 'L').concat(x3, ',').concat(y3, 'L').concat(x4, ',').concat(y4, 'z');
        }
        var mx1 = (x1 + x2) / 2;
        var mx3 = (x3 + x4) / 2;
        return 'M'.concat(x1, ',').concat(y1, 'C').concat(mx1, ',').concat(y1, ' ').concat(mx1, ',').concat(y2, ',').concat(x2, ',').concat(y2, 'L').concat(x3, ',').concat(y3, 'C').concat(mx3, ',').concat(y3, ' ').concat(mx3, ',').concat(y4, ',').concat(x4, ',').concat(y4, 'z');
    }
    function edgeHoriz(x1, y1, x2, y2, x3, y3, x4, y4) {
        if ('straight' == biPartite.edgeMode()) {
            return 'M'.concat(x1, ',').concat(y1, 'L').concat(x2, ',').concat(y2, 'L').concat(x3, ',').concat(y3, 'L').concat(x4, ',').concat(y4, 'z');
        }
        var my1 = (y1 + y2) / 2;
        var my3 = (y3 + y4) / 2;
        return 'M'.concat(x1, ',').concat(y1, 'C').concat(x1, ',').concat(my1, ' ').concat(x2, ',').concat(my1, ',').concat(x2, ',').concat(y2, 'L').concat(x3, ',').concat(y3, 'C').concat(x3, ',').concat(my3, ' ').concat(x4, ',').concat(my3, ',').concat(x4, ',').concat(y4, 'z');
    }
    function getFont(rule) {
        rule = rule.toLowerCase();
        var fontStyle = getComputedStyle(document.documentElement, null).getPropertyValue('font-style');
        var fontVariant = getComputedStyle(document.documentElement, null).getPropertyValue('font-variant');
        var fontWeight = getComputedStyle(document.documentElement, null).getPropertyValue('font-weight');
        var fontSize = getComputedStyle(document.documentElement, null).getPropertyValue('font-size');
        var lineHeight = getComputedStyle(document.documentElement, null).getPropertyValue('line-height');
        var fontFamily = getComputedStyle(document.documentElement, null).getPropertyValue('font-family');
        var rules;
        var selectorText;
        _toConsumableArray(document.styleSheets).forEach((function(d) {
            rules = d.cssRules ? d.cssRules : d.rules;
            for (var i = 0; i < rules.length; i++) {
                selectorText = rules[i].selectorText.toLowerCase().split(/[\s,>+~]+/);
                for (var j = 0; j < selectorText.length; j++) {
                    if (-1 != selectorText[j].indexOf(rule)) {
                        if ('' != rules[i].style['font']) {
                            return rules[i].style['font'];
                        }
                        fontStyle = '' == rules[i].style['font-style'] ? fontStyle : rules[i].style['font-style'];
                        fontVariant = '' == rules[i].style['font-variant'] ? fontVariant : rules[i].style['font-variant'];
                        fontWeight = '' == rules[i].style['font-weight'] ? fontWeight : rules[i].style['font-weight'];
                        fontSize = '' == rules[i].style['font-size'] ? fontSize : rules[i].style['font-size'];
                        lineHeight = '' == rules[i].style['line-height'] ? lineHeight : rules[i].style['line-height'];
                        fontFamily = '' == rules[i].style['font-family'] ? fontFamily : rules[i].style['font-family'];
                    }
                }
            }
        }));
        return ''.concat(fontStyle, ' ').concat(fontVariant, ' ').concat(fontWeight, ' ').concat(fontSize, '/').concat(lineHeight, ' ').concat(fontFamily);
    }
    function getLabelLengths(data, font) {
        var primary = data.reduce((function(a, b) {
            return a.concat(textDimensions(b[0], font).width);
        }), []);
        var secondary = data.reduce((function(a, b) {
            return a.concat(textDimensions(b[1], font).width);
        }), []);
        primary = primary.reduce((function(a, b) {
            return Math.max(a, b);
        }), 0);
        secondary = secondary.reduce((function(a, b) {
            return Math.max(a, b);
        }), 0);
        return {
            primary: primary,
            secondary: secondary
        };
    }
    function formatPercent(value) {
        return value < 0.01 ? '< 1%' : ''.concat(parseFloat(100 * value).toFixed(0), '%');
    }
    function getMargins(data) {
        var font = getFont('.biPartite-label');
        var dimensions = getLabelLengths(data, font);
        var minHeight = textDimensions('Mg', font).height;
        font = getFont('.biPartite-percentage');
        return {
            primary: dimensions['primary'] + biPartite.pad(),
            secondary: dimensions['secondary'] + biPartite.pad(),
            minHeight: minHeight,
            minWidth: textDimensions('100%', font)['width']
        };
    }
    function graphSize() {
        var labelMargin = 10;
        var margins = getMargins(biPartite.data());
        var minHeight = margins.minHeight;
        var minWidth = margins.minWidth;
        var labelOffset = minWidth / 2 + labelMargin;
        var width;
        var height;
        if ('vertical' == biPartite.orient()) {
            width = biPartite.container().getBoundingClientRect().width - margins.primary - margins.secondary - 2 * labelMargin - minWidth / 2;
            d3.select('#svgG').attr('transform', 'translate('.concat(margins.primary + labelOffset, ', ', 0, ')'));
            height = biPartite.container().getBoundingClientRect().height;
        } else {
            width = biPartite.container().getBoundingClientRect().width;
            d3.select('#svgG').attr('transform', 'translate(0, '.concat(margins.primary + labelOffset, ')'));
            height = biPartite.container().getBoundingClientRect().height - margins.primary - margins.secondary - 2 * labelMargin - minWidth / 2;
        }
        return [ width, height, minWidth, minHeight, labelOffset ];
    }
    function collapsePath(path) {
        var origin = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'left';
        var regex = /[,\s]|[a-z]/gi;
        var pathSplit = path.split(regex);
        var pathType = 18 == pathSplit.length ? 'curved' : 'straight';
        return 'left' == origin ? 'curved' == pathType ? 'M'.concat(pathSplit[1], ' ').concat(pathSplit[2], ' L').concat(pathSplit[15], ' ').concat(pathSplit[16], 'z') : 'M'.concat(pathSplit[1], ' ').concat(pathSplit[2], ' L').concat(pathSplit[7], ' ').concat(pathSplit[8], 'z') : 'curved' == pathType ? 'M'.concat(pathSplit[7], ' ').concat(pathSplit[8], ' L').concat(pathSplit[9], ' ').concat(pathSplit[10], 'z') : 'M'.concat(pathSplit[3], ' ').concat(pathSplit[4], ' L').concat(pathSplit[5], ' ').concat(pathSplit[6], 'z');
    }
    function bars(mb) {
        var mainBars = {
            primary: [],
            secondary: []
        };
        var subBars = {
            primary: [],
            secondary: []
        };
        mainBars['primary'] = calculateMainBars('primary', mb);
        mainBars['secondary'] = calculateMainBars('secondary', mb);
        subBars['primary'] = calculateSubBars('primary', mb, mainBars);
        subBars['secondary'] = calculateSubBars('secondary', mb, mainBars);
        return {
            mainBars: mainBars.primary.concat(mainBars.secondary),
            subBars: subBars.primary.concat(subBars.secondary),
            edges: calculateEdges(subBars)
        };
    }
    function fill(d) {
        var key = null == d.primary ? d.key : d.primary;
        var index = glb.sourceKeys.indexOf(key);
        return glb.fillColors[index];
    }
    function initArray(n) {
        var a = new Array(n);
        for (var i = 0; i < n; ++i) {
            a[i] = 0;
        }
        return a;
    }
    function getKeys(data) {
        var sourceKeys = _toConsumableArray(new Set(data.reduce((function(a, b) {
            return a.concat(keyPrimary(b));
        }), [])));
        var targetKeys = _toConsumableArray(new Set(data.reduce((function(a, b) {
            return a.concat(keySecondary(b));
        }), [])));
        return {
            sourceKeys: sourceKeys,
            targetKeys: targetKeys
        };
    }
    function keyPrimary(d) {
        return d[0];
    }
    function keySecondary(d) {
        return d[1];
    }
    function value(d) {
        return d[2];
    }
    function fx(d) {
        return -d.width;
    }
    function fy(d) {
        return -d.height;
    }
    function fw(d) {
        return 2 * d.width;
    }
    function fh(d) {
        return 2 * d.height;
    }
    var d3InterpolatePath = createCommonjsModule((function(module, exports) {
        (function(global, factory) {
            factory(exports);
        })(commonjsGlobal, (function(exports) {
            function _defineProperty(obj, key, value) {
                key in obj ? Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: true,
                    configurable: true,
                    writable: true
                }) : obj[key] = value;
                return obj;
            }
            function _extends() {
                _extends = Object.assign || function(target) {
                    for (var i = 1; i < arguments.length; i++) {
                        var source = arguments[i];
                        for (var key in source) {
                            Object.prototype.hasOwnProperty.call(source, key) && (target[key] = source[key]);
                        }
                    }
                    return target;
                };
                return _extends.apply(this, arguments);
            }
            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    enumerableOnly && (symbols = symbols.filter((function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    })));
                    keys.push.apply(keys, symbols);
                }
                return keys;
            }
            function _objectSpread2(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? ownKeys(Object(source), true).forEach((function(key) {
                        _defineProperty(target, key, source[key]);
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach((function(key) {
                        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                    }));
                }
                return target;
            }
            function _unsupportedIterableToArray(o, minLen) {
                if (o) {
                    if ('string' == typeof o) {
                        return _arrayLikeToArray(o, minLen);
                    }
                    var n = Object.prototype.toString.call(o).slice(8, -1);
                    'Object' === n && o.constructor && (n = o.constructor.name);
                    return 'Map' === n || 'Set' === n ? Array.from(o) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? _arrayLikeToArray(o, minLen) : void 0;
                }
            }
            function _arrayLikeToArray(arr, len) {
                (null == len || len > arr.length) && (len = arr.length);
                for (var i = 0, arr2 = new Array(len); i < len; i++) {
                    arr2[i] = arr[i];
                }
                return arr2;
            }
            function _createForOfIteratorHelper(o, allowArrayLike) {
                var it;
                if ('undefined' == typeof Symbol || null == o[Symbol.iterator]) {
                    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && 'number' == typeof o.length) {
                        it && (o = it);
                        var i = 0;
                        var F = function() {};
                        return {
                            s: F,
                            n: function() {
                                return i >= o.length ? {
                                    done: true
                                } : {
                                    done: false,
                                    value: o[i++]
                                };
                            },
                            e: function(e) {
                                throw e;
                            },
                            f: F
                        };
                    }
                    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                }
                var normalCompletion = true, didErr = false, err;
                return {
                    s: function() {
                        it = o[Symbol.iterator]();
                    },
                    n: function() {
                        var step = it.next();
                        normalCompletion = step.done;
                        return step;
                    },
                    e: function(e) {
                        didErr = true;
                        err = e;
                    },
                    f: function() {
                        try {
                            normalCompletion || null == it.return || it.return();
                        } finally {
                            if (didErr) {
                                throw err;
                            }
                        }
                    }
                };
            }
            function decasteljau(points, t) {
                var left = [];
                var right = [];
                function decasteljauRecurse(points, t) {
                    if (1 === points.length) {
                        left.push(points[0]);
                        right.push(points[0]);
                    } else {
                        var newPoints = Array(points.length - 1);
                        for (var i = 0; i < newPoints.length; i++) {
                            0 === i && left.push(points[0]);
                            i === newPoints.length - 1 && right.push(points[i + 1]);
                            newPoints[i] = [ (1 - t) * points[i][0] + t * points[i + 1][0], (1 - t) * points[i][1] + t * points[i + 1][1] ];
                        }
                        decasteljauRecurse(newPoints, t);
                    }
                }
                points.length && decasteljauRecurse(points, t);
                return {
                    left: left,
                    right: right.reverse()
                };
            }
            function pointsToCommand(points) {
                var command = {};
                if (4 === points.length) {
                    command.x2 = points[2][0];
                    command.y2 = points[2][1];
                }
                if (points.length >= 3) {
                    command.x1 = points[1][0];
                    command.y1 = points[1][1];
                }
                command.x = points[points.length - 1][0];
                command.y = points[points.length - 1][1];
                4 === points.length ? command.type = 'C' : 3 === points.length ? command.type = 'Q' : command.type = 'L';
                return command;
            }
            function splitCurveAsPoints(points, segmentCount) {
                segmentCount = segmentCount || 2;
                var segments = [];
                var remainingCurve = points;
                var tIncrement = 1 / segmentCount;
                for (var i = 0; i < segmentCount - 1; i++) {
                    var tRelative = tIncrement / (1 - tIncrement * i);
                    var split = decasteljau(remainingCurve, tRelative);
                    segments.push(split.left);
                    remainingCurve = split.right;
                }
                segments.push(remainingCurve);
                return segments;
            }
            function splitCurve(commandStart, commandEnd, segmentCount) {
                var points = [ [ commandStart.x, commandStart.y ] ];
                null != commandEnd.x1 && points.push([ commandEnd.x1, commandEnd.y1 ]);
                null != commandEnd.x2 && points.push([ commandEnd.x2, commandEnd.y2 ]);
                points.push([ commandEnd.x, commandEnd.y ]);
                return splitCurveAsPoints(points, segmentCount).map(pointsToCommand);
            }
            var commandTokenRegex = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g;
            var typeMap = {
                M: [ 'x', 'y' ],
                L: [ 'x', 'y' ],
                H: [ 'x' ],
                V: [ 'y' ],
                C: [ 'x1', 'y1', 'x2', 'y2', 'x', 'y' ],
                S: [ 'x2', 'y2', 'x', 'y' ],
                Q: [ 'x1', 'y1', 'x', 'y' ],
                T: [ 'x', 'y' ],
                A: [ 'rx', 'ry', 'xAxisRotation', 'largeArcFlag', 'sweepFlag', 'x', 'y' ],
                Z: []
            };
            Object.keys(typeMap).forEach((function(key) {
                typeMap[key.toLowerCase()] = typeMap[key];
            }));
            function arrayOfLength(length, value) {
                var array = Array(length);
                for (var i = 0; i < length; i++) {
                    array[i] = value;
                }
                return array;
            }
            function commandToString(command) {
                return ''.concat(command.type).concat(typeMap[command.type].map((function(p) {
                    return command[p];
                })).join(','));
            }
            function convertToSameType(aCommand, bCommand) {
                var conversionMap = {
                    x1: 'x',
                    y1: 'y',
                    x2: 'x',
                    y2: 'y'
                };
                var readFromBKeys = [ 'xAxisRotation', 'largeArcFlag', 'sweepFlag' ];
                if (aCommand.type !== bCommand.type && 'M' !== bCommand.type.toUpperCase()) {
                    var aConverted = {};
                    Object.keys(bCommand).forEach((function(bKey) {
                        var bValue = bCommand[bKey];
                        var aValue = aCommand[bKey];
                        if (void 0 === aValue) {
                            if (readFromBKeys.includes(bKey)) {
                                aValue = bValue;
                            } else {
                                void 0 === aValue && conversionMap[bKey] && (aValue = aCommand[conversionMap[bKey]]);
                                void 0 === aValue && (aValue = 0);
                            }
                        }
                        aConverted[bKey] = aValue;
                    }));
                    aConverted.type = bCommand.type;
                    aCommand = aConverted;
                }
                return aCommand;
            }
            function splitSegment(commandStart, commandEnd, segmentCount) {
                var segments = [];
                if ('L' === commandEnd.type || 'Q' === commandEnd.type || 'C' === commandEnd.type) {
                    segments = segments.concat(splitCurve(commandStart, commandEnd, segmentCount));
                } else {
                    var copyCommand = _extends({}, commandStart);
                    'M' === copyCommand.type && (copyCommand.type = 'L');
                    segments = segments.concat(arrayOfLength(segmentCount - 1).map((function() {
                        return copyCommand;
                    })));
                    segments.push(commandEnd);
                }
                return segments;
            }
            function extend(commandsToExtend, referenceCommands, excludeSegment) {
                var numSegmentsToExtend = commandsToExtend.length - 1;
                var numReferenceSegments = referenceCommands.length - 1;
                var segmentRatio = numSegmentsToExtend / numReferenceSegments;
                var countPointsPerSegment = arrayOfLength(numReferenceSegments).reduce((function(accum, d, i) {
                    var insertIndex = Math.floor(segmentRatio * i);
                    if (excludeSegment && insertIndex < commandsToExtend.length - 1 && excludeSegment(commandsToExtend[insertIndex], commandsToExtend[insertIndex + 1])) {
                        var addToPriorSegment = segmentRatio * i % 1 < 0.5;
                        accum[insertIndex] && (addToPriorSegment ? insertIndex > 0 ? insertIndex -= 1 : insertIndex < commandsToExtend.length - 1 && (insertIndex += 1) : insertIndex < commandsToExtend.length - 1 ? insertIndex += 1 : insertIndex > 0 && (insertIndex -= 1));
                    }
                    accum[insertIndex] = (accum[insertIndex] || 0) + 1;
                    return accum;
                }), []);
                var extended = countPointsPerSegment.reduce((function(extended, segmentCount, i) {
                    if (i === commandsToExtend.length - 1) {
                        var lastCommandCopies = arrayOfLength(segmentCount, _extends({}, commandsToExtend[commandsToExtend.length - 1]));
                        'M' === lastCommandCopies[0].type && lastCommandCopies.forEach((function(d) {
                            d.type = 'L';
                        }));
                        return extended.concat(lastCommandCopies);
                    }
                    return extended.concat(splitSegment(commandsToExtend[i], commandsToExtend[i + 1], segmentCount));
                }), []);
                extended.unshift(commandsToExtend[0]);
                return extended;
            }
            function pathCommandsFromString(d) {
                var tokens = (d || '').match(commandTokenRegex) || [];
                var commands = [];
                var commandArgs;
                var command;
                for (var i = 0; i < tokens.length; ++i) {
                    commandArgs = typeMap[tokens[i]];
                    if (commandArgs) {
                        command = {
                            type: tokens[i]
                        };
                        for (var a = 0; a < commandArgs.length; ++a) {
                            command[commandArgs[a]] = +tokens[i + a + 1];
                        }
                        i += commandArgs.length;
                        commands.push(command);
                    }
                }
                return commands;
            }
            function interpolatePathCommands(aCommandsInput, bCommandsInput, excludeSegment) {
                var aCommands = null == aCommandsInput ? [] : aCommandsInput.slice();
                var bCommands = null == bCommandsInput ? [] : bCommandsInput.slice();
                if (!aCommands.length && !bCommands.length) {
                    return function nullInterpolator() {
                        return [];
                    };
                }
                var addZ = !(0 !== aCommands.length && 'Z' !== aCommands[aCommands.length - 1].type || 0 !== bCommands.length && 'Z' !== bCommands[bCommands.length - 1].type);
                aCommands.length > 0 && 'Z' === aCommands[aCommands.length - 1].type && aCommands.pop();
                bCommands.length > 0 && 'Z' === bCommands[bCommands.length - 1].type && bCommands.pop();
                aCommands.length ? bCommands.length || bCommands.push(aCommands[0]) : aCommands.push(bCommands[0]);
                var numPointsToExtend = Math.abs(bCommands.length - aCommands.length);
                0 !== numPointsToExtend && (bCommands.length > aCommands.length ? aCommands = extend(aCommands, bCommands, excludeSegment) : bCommands.length < aCommands.length && (bCommands = extend(bCommands, aCommands, excludeSegment)));
                aCommands = aCommands.map((function(aCommand, i) {
                    return convertToSameType(aCommand, bCommands[i]);
                }));
                var interpolatedCommands = aCommands.map((function(aCommand) {
                    return _objectSpread2({}, aCommand);
                }));
                addZ && interpolatedCommands.push({
                    type: 'Z'
                });
                return function pathCommandInterpolator(t) {
                    if (1 === t) {
                        return null == bCommandsInput ? [] : bCommandsInput;
                    }
                    if (t > 0) {
                        for (var i = 0; i < interpolatedCommands.length; ++i) {
                            var aCommand = aCommands[i];
                            var bCommand = bCommands[i];
                            var interpolatedCommand = interpolatedCommands[i];
                            var _iterator = _createForOfIteratorHelper(typeMap[interpolatedCommand.type]), _step;
                            try {
                                for (_iterator.s(); !(_step = _iterator.n()).done; ) {
                                    var arg = _step.value;
                                    interpolatedCommand[arg] = (1 - t) * aCommand[arg] + t * bCommand[arg];
                                    'largeArcFlag' !== arg && 'sweepFlag' !== arg || (interpolatedCommand[arg] = Math.round(interpolatedCommand[arg]));
                                }
                            } catch (err) {
                                _iterator.e(err);
                            } finally {
                                _iterator.f();
                            }
                        }
                    }
                    return interpolatedCommands;
                };
            }
            function interpolatePath(a, b, excludeSegment) {
                var aCommands = pathCommandsFromString(a);
                var bCommands = pathCommandsFromString(b);
                if (!aCommands.length && !bCommands.length) {
                    return function nullInterpolator() {
                        return '';
                    };
                }
                var commandInterpolator = interpolatePathCommands(aCommands, bCommands, excludeSegment);
                return function pathStringInterpolator(t) {
                    if (1 === t) {
                        return null == b ? '' : b;
                    }
                    var interpolatedCommands = commandInterpolator(t);
                    var interpolatedString = '';
                    var _iterator2 = _createForOfIteratorHelper(interpolatedCommands), _step2;
                    try {
                        for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                            var interpolatedCommand = _step2.value;
                            interpolatedString += commandToString(interpolatedCommand);
                        }
                    } catch (err) {
                        _iterator2.e(err);
                    } finally {
                        _iterator2.f();
                    }
                    return interpolatedString;
                };
            }
            exports.interpolatePath = interpolatePath;
            exports.interpolatePathCommands = interpolatePathCommands;
            exports.pathCommandsFromString = pathCommandsFromString;
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
        }));
    }));
    function update(bars) {
        var noDelay = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        var _ref = getTransitions(true == noDelay ? 0 : biPartite.duration(), 'update'), _ref2 = _slicedToArray(_ref, 3), t = _ref2[0], t1 = _ref2[1], t2 = _ref2[2];
        var subBars = d3.select('#biPartite-subBar').selectAll('.biPartite-subBar').data(bars.subBars);
        subBars.enter().append('g').attr('class', 'biPartite-subBar').attr('transform', (function(d) {
            return 'translate('.concat(d.x, ', ').concat(d.y, ')');
        })).append('rect').style('fill', (function(d) {
            return fill(d);
        })).style('shape-rendering', 'crispEdges').transition(t).attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
        subBars.exit().transition(t).on('start', (function(d, i, nodes) {
            d3.select(nodes[i]).remove();
        }));
        subBars.transition(t).attr('transform', (function(d) {
            return 'translate('.concat(d.x, ', ').concat(d.y, ')');
        })).select('rect').style('fill', (function(d) {
            return fill(d);
        })).attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
        var edges = d3.select('#biPartite-edge').selectAll('.biPartite-edge').data(bars.edges);
        edges.enter().append('path').merge(edges).attr('class', 'biPartite-edge').style('fill', (function(d) {
            return fill(d);
        })).style('fill-opacity', biPartite.edgeOpacity()).attr('d', (function(d) {
            return collapsePath(d.path);
        })).transition(t).attrTween('d', (function(d) {
            return d3InterpolatePath.interpolatePath(d3.select(this).attr('d'), d.path);
        }));
        edges.exit().transition(t).on('start', (function(d, i, nodes) {
            d3.select(nodes[i]).remove();
        }));
        edges.transition(t).style('fill', (function(d) {
            return fill(d);
        })).attrTween('d', (function(d, i, nodes) {
            return d3InterpolatePath.interpolatePath(d3.select(nodes[i]).attr('d'), d.path);
        }));
        var mainBars = d3.select('#biPartite-mainBar').selectAll('.biPartite-mainBar').data(bars.mainBars);
        var mainBarsEnter = mainBars.enter().append('g').attr('transform', (function(d) {
            return 'translate('.concat(d.x, ', ').concat(d.y, ')');
        })).attr('class', 'biPartite-mainBar').on(glb.eventTypeOver, glb.eventListenerOver).on(glb.eventTypeOut, glb.eventListenerOut);
        mainBarsEnter.append('rect').attr('id', (function(d, i) {
            return 'mainBar'.concat(i);
        })).attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh).style('fill-opacity', 0);
        mainBarsEnter.append('text').attr('class', 'biPartite-label').attr('x', (function(d) {
            return 'primary' == d.part ? -glb.LabelOffset : glb.LabelOffset;
        })).attr('dy', '0.35em').style('opacity', 0).text((function(d) {
            return d.key;
        })).attr('text-anchor', (function(d) {
            return 'primary' == d.part ? 'end' : 'start';
        })).attr('transform', (function(d) {
            return 'vertical' == biPartite.orient() ? 'rotate(0)' : 'rotate(90)';
        })).transition(t).style('opacity', 1);
        mainBarsEnter.append('text').attr('class', 'biPartite-percentage white').attr('dy', '0.35em').style('font', getFont('biPartite-percentage')).style('opacity', 0).style('pointer-events', 'none').style('clip-path', (function(d, i) {
            return 'url(#clip'.concat(i, ')');
        })).text((function(d) {
            return formatPercent(d.percent);
        })).attr('transform', (function(d) {
            return 'vertical' == biPartite.orient() ? 'rotate(0)' : 'rotate(90)';
        })).transition(t).style('opacity', 1);
        mainBars.attr('transform', (function(d) {
            return 'translate('.concat(d.x, ', ').concat(d.y, ')');
        })).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
        mainBars.select('.biPartite-label').transition(t1).style('opacity', 0).transition(t2).attr('x', (function(d) {
            return 'primary' == d.part ? -glb.LabelOffset : glb.LabelOffset;
        })).attr('text-anchor', (function(d) {
            return 'primary' == d.part ? 'end' : 'start';
        })).text((function(d) {
            return d.key;
        })).style('opacity', 1);
        mainBars.select('.biPartite-percentage.white').text((function(d) {
            return formatPercent(d.percent);
        }));
        mainBars.exit().transition(t).on('start', (function(d, i, nodes) {
            d3.select(nodes[i]).remove();
        }));
    }
    function init$1() {
        var svg = d3.select(biPartite.container()).append('svg').attr('id', 'svg').attr('width', '100%').attr('height', '100%');
        var svgG = svg.append('g').attr('class', 'biPartite').attr('id', 'svgG');
        svgG.append('g').attr('id', 'biPartite-subBar');
        svgG.append('g').attr('id', 'biPartite-edge');
        svgG.append('g').attr('id', 'biPartite-mainBar');
        return svgG;
    }
    var start$1;
    var active = false;
    var width$1;
    var height$1;
    function startListener() {
        active = true;
        window.requestAnimationFrame(containerListener);
    }
    function containerListener(timeStamp) {
        start$1 = null == start$1 ? timeStamp : start$1;
        var threshold = 60;
        var elapsed = timeStamp - start$1;
        if (elapsed > threshold) {
            start$1 = timeStamp;
            newWidth = biPartite.container().getBoundingClientRect().width;
            newHeight = biPartite.container().getBoundingClientRect().height;
            width$1 = null == width$1 ? newWidth : width$1;
            height$1 = null == height$1 ? newHeight : height$1;
            if (width$1 != newWidth || height$1 != newHeight) {
                width$1 = newWidth;
                height$1 = newHeight;
                glb.refresh = true;
                biPartite.update(true);
            }
        }
        true == active && requestAnimationFrame(containerListener);
    }
    var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport('splice');
    var USES_TO_LENGTH$6 = arrayMethodUsesToLength('splice', {
        ACCESSORS: true,
        0: 0,
        1: 2
    });
    var max$2 = Math.max;
    var min$3 = Math.min;
    var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
    var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded';
    _export({
        target: 'Array',
        proto: true,
        forced: !HAS_SPECIES_SUPPORT$3 || !USES_TO_LENGTH$6
    }, {
        splice: function splice(start, deleteCount) {
            var O = toObject(this);
            var len = toLength(O.length);
            var actualStart = toAbsoluteIndex(start, len);
            var argumentsLength = arguments.length;
            var insertCount, actualDeleteCount, A, k, from, to;
            if (0 === argumentsLength) {
                insertCount = actualDeleteCount = 0;
            } else if (1 === argumentsLength) {
                insertCount = 0;
                actualDeleteCount = len - actualStart;
            } else {
                insertCount = argumentsLength - 2;
                actualDeleteCount = min$3(max$2(toInteger(deleteCount), 0), len - actualStart);
            }
            if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$1) {
                throw TypeError(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
            }
            A = arraySpeciesCreate(O, actualDeleteCount);
            for (k = 0; k < actualDeleteCount; k++) {
                from = actualStart + k;
                from in O && createProperty(A, k, O[from]);
            }
            A.length = actualDeleteCount;
            if (insertCount < actualDeleteCount) {
                for (k = actualStart; k < len - actualDeleteCount; k++) {
                    from = k + actualDeleteCount;
                    to = k + insertCount;
                    from in O ? O[to] = O[from] : delete O[to];
                }
                for (k = len; k > len - actualDeleteCount + insertCount; k--) {
                    delete O[k - 1];
                }
            } else if (insertCount > actualDeleteCount) {
                for (k = len - actualDeleteCount; k > actualStart; k--) {
                    from = k + actualDeleteCount - 1;
                    to = k + insertCount - 1;
                    from in O ? O[to] = O[from] : delete O[to];
                }
            }
            for (k = 0; k < insertCount; k++) {
                O[k + actualStart] = arguments[k + 2];
            }
            O.length = len - actualDeleteCount + insertCount;
            return A;
        }
    });
    function sortKeys(data) {
        switch (glb.sort) {
          case 'alpha':
            sortAlpha(data);
            break;

          case 'barycentric':
            sortBaryCentric(data);
            break;

          case 'sh':
            sortSH(data);
            break;

          default:
            glb.sourceKeys = _toConsumableArray(new Set(data.reduce((function(a, b) {
                return a.concat(keyPrimary(b));
            }), [])));
            glb.targetKeys = _toConsumableArray(new Set(data.reduce((function(a, b) {
                return a.concat(keySecondary(b));
            }), [])));
        }
    }
    function sortAlpha(data) {
        var sourceKeys = _toConsumableArray(new Set(data.reduce((function(a, b) {
            return a.concat(keyPrimary(b));
        }), [])));
        var targetKeys = _toConsumableArray(new Set(data.reduce((function(a, b) {
            return a.concat(keySecondary(b));
        }), [])));
        glb.sourceKeys = sourceKeys.sort();
        glb.targetKeys = targetKeys.sort();
    }
    function sortBaryCentric(data) {
        var _getKeys = getKeys(data), sourceKeys = _getKeys.sourceKeys, targetKeys = _getKeys.targetKeys;
        var matrix = [];
        sourceKeys.forEach((function(sourceKey, row) {
            var tmp = [];
            targetKeys.forEach((function(targetKey, column) {
                var value = data.filter((function(d) {
                    return d[0] == sourceKey && d[1] == targetKey;
                })).length;
                tmp.push(value);
            }));
            var count = tmp.reduce((function(a, b) {
                return 1 == b ? a + b : a;
            }), 0);
            var rowCenter = tmp.reduce((function(a, b, i) {
                return 1 == b ? a + i : a;
            }), 0) / count;
            tmp.push(rowCenter);
            matrix.push(tmp);
        }));
        var lastRow = targetKeys.length;
        var rowOrderedMatrix = [];
        var orderedSourceKeys = [];
        while (matrix.length > 0) {
            var lowIndex = matrix.reduce((function(a, b, i) {
                return b[lastRow] < a[1] ? [ i, b[lastRow] ] : a;
            }), [ 0, 1e10 ])[0];
            rowOrderedMatrix.push(matrix.splice(lowIndex, 1)[0].slice(0, -1));
            orderedSourceKeys.push(sourceKeys.splice(lowIndex, 1)[0]);
        }
        var columnSums = initArray(targetKeys.length);
        var columnIndexSums = initArray(targetKeys.length);
        rowOrderedMatrix.forEach((function(row, rowIndex) {
            row.forEach((function(item, column) {
                columnSums[column] += item;
                columnIndexSums[column] += 1 == item ? rowIndex + 1 : 0;
            }));
        }));
        var columnCenters = columnIndexSums.map((function(d, i) {
            return d / columnSums[i] - 1;
        }));
        var orderedTargetKeys = [];
        while (columnCenters.length > 0) {
            var _lowIndex = columnCenters.indexOf(Math.min.apply(Math, _toConsumableArray(columnCenters)));
            columnCenters.splice(_lowIndex, 1);
            orderedTargetKeys.push(targetKeys.splice(_lowIndex, 1)[0]);
        }
        glb.sourceKeys = orderedSourceKeys;
        glb.targetKeys = orderedTargetKeys;
    }
    function sortSH(data) {
        function randBetween(min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        }
        function randPairs(min, max) {
            var ret = new Array(2);
            var sequence = Array.apply(null, {
                length: max + 1 - min
            }).map((function(d, i) {
                return i + min;
            }));
            var index = randBetween(min, max);
            ret[0] = sequence.splice(index, 1)[0];
            max--;
            index = randBetween(min, max);
            ret[1] = sequence[index];
            return ret;
        }
        function resortData(keys, index, data) {
            var ret = [];
            keys.forEach((function(key) {
                data.forEach((function(row) {
                    row[index] == key && ret.push(row);
                }));
            }));
            return ret;
        }
        var alpha = Math.pow(data.length, 2);
        var beta = data.length;
        var dataCopy = data.slice();
        var _adjacencyGraph = adjacencyGraph(dataCopy), _adjacencyGraph2 = _slicedToArray(_adjacencyGraph, 3), graph = _adjacencyGraph2[0], sourceKeys = _adjacencyGraph2[1], targetKeys = _adjacencyGraph2[2];
        var density = data.length / (sourceKeys.length + targetKeys.length);
        var stoppingCount = alpha * density / (beta + density);
        var currentCount = 0;
        var _graphPairs = graphPairs(graph, sourceKeys, targetKeys), _graphPairs2 = _slicedToArray(_graphPairs, 2), pairs = _graphPairs2[0], keyPairs = _graphPairs2[1];
        var crossings = edgeCrossings(pairs);
        while (currentCount < stoppingCount && crossings > 0) {
            var tmpData = void 0;
            var leftKeys = sourceKeys.slice();
            var rightKeys = targetKeys.slice();
            var side = randBetween(0, 1);
            var _ref = randPairs(0, 0 == side ? leftKeys.length - 1 : rightKeys.length - 1), _ref2 = _slicedToArray(_ref, 2), index1 = _ref2[0], index2 = _ref2[1];
            if (0 == side) {
                var _ref3 = [ leftKeys[index2], leftKeys[index1] ];
                leftKeys[index1] = _ref3[0];
                leftKeys[index2] = _ref3[1];
                tmpData = resortData(leftKeys, 0, dataCopy);
            } else {
                var _ref4 = [ rightKeys[index2], rightKeys[index1] ];
                rightKeys[index1] = _ref4[0];
                rightKeys[index2] = _ref4[1];
                tmpData = resortData(rightKeys, 1, dataCopy);
            }
            var _adjacencyGraph3 = adjacencyGraph(tmpData);
            var _adjacencyGraph4 = _slicedToArray(_adjacencyGraph3, 3);
            graph = _adjacencyGraph4[0];
            leftKeys = _adjacencyGraph4[1];
            rightKeys = _adjacencyGraph4[2];
            var _graphPairs3 = graphPairs(graph, leftKeys, rightKeys);
            var _graphPairs4 = _slicedToArray(_graphPairs3, 2);
            pairs = _graphPairs4[0];
            keyPairs = _graphPairs4[1];
            var newCrossings = edgeCrossings(pairs);
            if (newCrossings < crossings) {
                crossings = newCrossings;
                currentCount = 0;
                sourceKeys = leftKeys;
                targetKeys = rightKeys;
                dataCopy = tmpData;
            } else {
                currentCount += 1;
            }
        }
        glb.sourceKeys = sourceKeys;
        glb.targetKeys = targetKeys;
        console.log('sh crossings:', crossings);
    }
    function adjacencyGraph(data) {
        var _getKeys2 = getKeys(data), sourceKeys = _getKeys2.sourceKeys, targetKeys = _getKeys2.targetKeys;
        var graph = [];
        sourceKeys.forEach((function(sourceKey, row) {
            var tmp = [];
            targetKeys.forEach((function(targetKey, column) {
                var value = data.filter((function(d) {
                    return d[0] == sourceKey && d[1] == targetKey;
                })).length;
                tmp.push(value);
            }));
            graph.push(tmp);
        }));
        return [ graph, sourceKeys, targetKeys ];
    }
    function graphPairs(graph, sourceKeys, targetKeys) {
        var pairs = [];
        var keyPairs = [];
        graph.forEach((function(vector, row) {
            vector.forEach((function(item, column) {
                if (1 == item) {
                    pairs.push([ row, column ]);
                    keyPairs.push([ sourceKeys[row], targetKeys[column] ]);
                }
            }));
        }));
        return [ pairs, keyPairs ];
    }
    function edgeCrossings(pairs) {
        var crossings = 0;
        pairs.forEach((function(pair, row) {
            for (var i = row + 1; i < pairs.length; i++) {
                pair[0] < pairs[i][0] && pair[1] > pairs[i][1] && (crossings += 1);
            }
        }));
        return crossings;
    }
    var biPartite = {};
    biPartite.show = function() {
        init$1();
        biPartite.update();
        return biPartite;
    };
    biPartite.data = function(data) {
        if (null == data) {
            return glb.data;
        }
        glb.data = data;
        glb.refresh = true;
        return biPartite;
    };
    biPartite.container = function(container) {
        if (null == container) {
            return glb.container;
        }
        glb.container = container;
        glb.refresh = true;
        startListener();
        return biPartite;
    };
    biPartite.fillColors = function(fillColors) {
        if (null == fillColors) {
            return glb.fillColors;
        }
        glb.fillColors = fillColors;
        glb.refresh = true;
        return biPartite;
    };
    biPartite.sort = function(sort) {
        if (null == sort) {
            return glb.sort;
        }
        glb.sort = sort;
        glb.refresh = true;
        return biPartite;
    };
    biPartite.orient = function(orient) {
        if (null == orient) {
            return glb.orient;
        }
        glb.orient = orient;
        glb.refresh = true;
        return biPartite;
    };
    biPartite.pad = function(pad) {
        if (null == pad) {
            return glb.pad;
        }
        glb.pad = pad;
        glb.refresh = true;
        return biPartite;
    };
    biPartite.duration = function(duration) {
        if (null == duration) {
            return glb.duration;
        }
        glb.duration = duration;
        glb.refresh = true;
        return biPartite;
    };
    biPartite.edgeOpacity = function(edgeOpacity) {
        if (null == edgeOpacity) {
            return glb.edgeOpacity;
        }
        glb.edgeOpacity = edgeOpacity;
        glb.refresh = true;
        return biPartite;
    };
    biPartite.edgeMode = function(edgeMode) {
        if (null == edgeMode) {
            return glb.edgeMode;
        }
        glb.edgeMode = edgeMode;
        glb.refresh = true;
        return biPartite;
    };
    biPartite.event = function(event) {
        if (null == event) {
            return glb.event;
        }
        glb.event = event;
        switch (event) {
          case 'hover':
            glb.eventTypeOver = 'mouseenter';
            glb.eventTypeOut = 'mouseleave';
            glb.eventListenerOver = mouseOver;
            glb.eventListenerOut = mouseOut;
            break;

          case 'click':
            glb.eventTypeOver = 'click';
            glb.eventTypeOut = 'click';
            glb.eventListenerOver = click;
            glb.eventListenerOut = click;
            break;

          case 'doubleClick':
            glb.eventTypeOver = 'dblclick';
            glb.eventTypeOut = 'dblclick';
            glb.eventListenerOver = click;
            glb.eventListenerOut = click;
            break;
        }
        return biPartite;
    };
    biPartite.update = function() {
        var noDelay = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        if (false != glb.refresh) {
            var _graphSize = graphSize();
            var _graphSize2 = _slicedToArray(_graphSize, 5);
            glb.width = _graphSize2[0];
            glb.height = _graphSize2[1];
            glb.minWidth = _graphSize2[2];
            glb.minHeight = _graphSize2[3];
            glb.LabelOffset = _graphSize2[4];
            sortKeys(biPartite.data());
            update(bars(), noDelay);
            glb.refresh = false;
        }
    };
    exports.biPartite = biPartite;
    return exports;
}({});