var biPartite = (function (exports) {
  'use strict';
  function _typeof(obj) {
    "@babel/helpers - typeof";
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    return _typeof(obj);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray$1(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray$1(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray$1(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _iterableToArrayLimit(arr, i) {
    var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];
    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _s, _e;
    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);
        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
  function _unsupportedIterableToArray$1(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray$1(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen);
  }
  function _arrayLikeToArray$1(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _createForOfIteratorHelper$1(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function _classPrivateFieldGet(receiver, privateMap) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
    return _classApplyDescriptorGet(receiver, descriptor);
  }
  function _classPrivateFieldSet(receiver, privateMap, value) {
    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
    _classApplyDescriptorSet(receiver, descriptor, value);
    return value;
  }
  function _classExtractFieldDescriptor(receiver, privateMap, action) {
    if (!privateMap.has(receiver)) {
      throw new TypeError("attempted to " + action + " private field on non-instance");
    }
    return privateMap.get(receiver);
  }
  function _classApplyDescriptorGet(receiver, descriptor) {
    if (descriptor.get) {
      return descriptor.get.call(receiver);
    }
    return descriptor.value;
  }
  function _classApplyDescriptorSet(receiver, descriptor, value) {
    if (descriptor.set) {
      descriptor.set.call(receiver, value);
    } else {
      if (!descriptor.writable) {
        throw new TypeError("attempted to set read only private field");
      }
      descriptor.value = value;
    }
  }
  function _checkPrivateRedeclaration(obj, privateCollection) {
    if (privateCollection.has(obj)) {
      throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
  }
  function _classPrivateFieldInitSpec(obj, privateMap, value) {
    _checkPrivateRedeclaration(obj, privateMap);
    privateMap.set(obj, value);
  }
  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};
  var runtime = {exports: {}};
  (function (module) {
    var runtime = function (exports) {
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      function define(obj, key, value) {
        Object.defineProperty(obj, key, {
          value: value,
          enumerable: true,
          configurable: true,
          writable: true
        });
        return obj[key];
      }
      try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({}, "");
      } catch (err) {
        define = function (obj, key, value) {
          return obj[key] = value;
        };
      }
      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }
      exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.
      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.
      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.
      function Generator() {}
      function GeneratorFunction() {}
      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.
      var IteratorPrototype = {};
      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          define(prototype, method, function (arg) {
            return this._invoke(method, arg);
          });
        });
      }
      exports.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };
      exports.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.
      exports.awrap = function (arg) {
        return {
          __await: arg
        };
      };
      function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            if (value && typeof value === "object" && hasOwn.call(value, "__await")) {
              return PromiseImpl.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }
            return PromiseImpl.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration.
              result.value = unwrapped;
              resolve(result);
            }, function (error) {
              // If a rejected Promise was yielded, throw the rejection back
              // into the async generator function so it can be handled there.
              return invoke("throw", error, resolve, reject);
            });
          }
        }
        var previousPromise;
        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new PromiseImpl(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          return previousPromise = // If enqueue has been called before, then we want to wait until
          // all previous Promises have been resolved before calling invoke,
          // so that results are always delivered in the correct order. If
          // enqueue has not been called before, then it is important to
          // call invoke immediately, without waiting on a callback to fire,
          // so that the async generator function has the opportunity to do
          // any necessary setup in a predictable way. This predictability
          // is why the Promise constructor synchronously invokes its
          // executor callback, and why async functions synchronously
          // execute code before the first await. Since we implement simple
          // async functions in terms of async generators, it is especially
          // important to get this right, even though it requires care.
          previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
      }
      defineIteratorMethods(AsyncIterator.prototype);
      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };
      exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.
      exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
        : iter.next().then(function (result) {
          return result.done ? result.value : iter.next();
        });
      };
      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }
          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
            return doneResult();
          }
          context.method = method;
          context.arg = arg;
          while (true) {
            var delegate = context.delegate;
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }
            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }
              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }
            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);
            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;
              if (record.arg === ContinueSentinel) {
                continue;
              }
              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.
      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;
          if (context.method === "throw") {
            // Note: ["return"] must be used for ES3 parsing compatibility.
            if (delegate.iterator["return"]) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);
              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }
            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }
        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).
          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.
          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.
      defineIteratorMethods(Gp);
      define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.
      Gp[iteratorSymbol] = function () {
        return this;
      };
      Gp.toString = function () {
        return "[object Generator]";
      };
      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };
        if (1 in locs) {
          entry.catchLoc = locs[1];
        }
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
      }
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
      exports.keys = function (object) {
        var keys = [];
        for (var key in object) {
          keys.push(key);
        }
        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
          while (keys.length) {
            var key = keys.pop();
            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.
          next.done = true;
          return next;
        };
      };
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }
          if (typeof iterable.next === "function") {
            return iterable;
          }
          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
              while (++i < iterable.length) {
                if (hasOwn.call(iterable, i)) {
                  next.value = iterable[i];
                  next.done = false;
                  return next;
                }
              }
              next.value = undefined$1;
              next.done = true;
              return next;
            };
            return next.next = next;
          }
        } // Return an iterator with no values.
        return {
          next: doneResult
        };
      }
      exports.values = values;
      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }
      Context.prototype = {
        constructor: Context,
        reset: function (skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.
          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);
          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function () {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }
          return this.rval;
        },
        dispatchException: function (exception) {
          if (this.done) {
            throw exception;
          }
          var context = this;
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;
            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }
            return !!caught;
          }
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function (type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }
          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;
          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }
          return this.complete(record);
        },
        complete: function (record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }
          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }
          return ContinueSentinel;
        },
        finish: function (finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function (tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.
          throw new Error("illegal catch attempt");
        },
        delegateYield: function (iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };
          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }
          return ContinueSentinel;
        }
      }; // Regardless of whether this script is executing as a CommonJS module
      // or not, return the runtime object so that we can declare the variable
      // regeneratorRuntime in the outer scope, which allows this module to be
      // injected easily by `bin/regenerator --include-runtime script.js`.
      return exports;
    }( // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    module.exports );
    try {
      regeneratorRuntime = runtime;
    } catch (accidentalStrictMode) {
      // This module should not be running in strict mode, so the above
      // assignment should always work unless something is misconfigured. Just
      // in case runtime.js accidentally runs in strict mode, we can escape
      // strict mode using a global Function call. This could conceivably fail
      // if a Content Security Policy forbids using Function, but in that case
      // the proper solution is to fix the accidental strict mode problem. If
      // you've misconfigured your bundler to force strict mode and applied a
      // CSP to forbid Function, and you're not willing to fix either of those
      // problems, please detail your unique predicament in a GitHub issue.
      Function("r", "regeneratorRuntime = r")(runtime);
    }
  })(runtime);
  var check = function (it) {
    return it && it.Math == Math && it;
  }; // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global$Y = // eslint-disable-next-line es/no-global-this -- safe
  check(typeof globalThis == 'object' && globalThis) || check(typeof window == 'object' && window) || // eslint-disable-next-line no-restricted-globals -- safe
  check(typeof self == 'object' && self) || check(typeof commonjsGlobal == 'object' && commonjsGlobal) || // eslint-disable-next-line no-new-func -- fallback
  function () {
    return this;
  }() || Function('return this')();
  var objectGetOwnPropertyDescriptor = {};
  var fails$w = function (exec) {
    try {
      return !!exec();
    } catch (error) {
      return true;
    }
  };
  var fails$v = fails$w; // Detect IE8's incomplete defineProperty implementation
  var descriptors = !fails$v(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- required for testing
    return Object.defineProperty({}, 1, {
      get: function () {
        return 7;
      }
    })[1] != 7;
  });
  var call$i = Function.prototype.call;
  var functionCall = call$i.bind ? call$i.bind(call$i) : function () {
    return call$i.apply(call$i, arguments);
  };
  var objectPropertyIsEnumerable = {};
  var $propertyIsEnumerable$1 = {}.propertyIsEnumerable; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getOwnPropertyDescriptor$3 = Object.getOwnPropertyDescriptor; // Nashorn ~ JDK8 bug
  var NASHORN_BUG = getOwnPropertyDescriptor$3 && !$propertyIsEnumerable$1.call({
    1: 2
  }, 1); // `Object.prototype.propertyIsEnumerable` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.propertyisenumerable
  objectPropertyIsEnumerable.f = NASHORN_BUG ? function propertyIsEnumerable(V) {
    var descriptor = getOwnPropertyDescriptor$3(this, V);
    return !!descriptor && descriptor.enumerable;
  } : $propertyIsEnumerable$1;
  var createPropertyDescriptor$5 = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };
  var FunctionPrototype$3 = Function.prototype;
  var bind$9 = FunctionPrototype$3.bind;
  var call$h = FunctionPrototype$3.call;
  var callBind = bind$9 && bind$9.bind(call$h);
  var functionUncurryThis = bind$9 ? function (fn) {
    return fn && callBind(call$h, fn);
  } : function (fn) {
    return fn && function () {
      return call$h.apply(fn, arguments);
    };
  };
  var uncurryThis$C = functionUncurryThis;
  var toString$g = uncurryThis$C({}.toString);
  var stringSlice$6 = uncurryThis$C(''.slice);
  var classofRaw$1 = function (it) {
    return stringSlice$6(toString$g(it), 8, -1);
  };
  var global$X = global$Y;
  var uncurryThis$B = functionUncurryThis;
  var fails$u = fails$w;
  var classof$b = classofRaw$1;
  var Object$5 = global$X.Object;
  var split = uncurryThis$B(''.split); // fallback for non-array-like ES3 and non-enumerable old V8 strings
  var indexedObject = fails$u(function () {
    // throws an error in rhino, see https://github.com/mozilla/rhino/issues/346
    // eslint-disable-next-line no-prototype-builtins -- safe
    return !Object$5('z').propertyIsEnumerable(0);
  }) ? function (it) {
    return classof$b(it) == 'String' ? split(it, '') : Object$5(it);
  } : Object$5;
  var global$W = global$Y;
  var TypeError$k = global$W.TypeError; // `RequireObjectCoercible` abstract operation
  // https://tc39.es/ecma262/#sec-requireobjectcoercible
  var requireObjectCoercible$8 = function (it) {
    if (it == undefined) throw TypeError$k("Can't call method on " + it);
    return it;
  };
  var IndexedObject$4 = indexedObject;
  var requireObjectCoercible$7 = requireObjectCoercible$8;
  var toIndexedObject$b = function (it) {
    return IndexedObject$4(requireObjectCoercible$7(it));
  };
  // https://tc39.es/ecma262/#sec-iscallable
  var isCallable$m = function (argument) {
    return typeof argument == 'function';
  };
  var isCallable$l = isCallable$m;
  var isObject$h = function (it) {
    return typeof it == 'object' ? it !== null : isCallable$l(it);
  };
  var global$V = global$Y;
  var isCallable$k = isCallable$m;
  var aFunction = function (argument) {
    return isCallable$k(argument) ? argument : undefined;
  };
  var getBuiltIn$8 = function (namespace, method) {
    return arguments.length < 2 ? aFunction(global$V[namespace]) : global$V[namespace] && global$V[namespace][method];
  };
  var uncurryThis$A = functionUncurryThis;
  var objectIsPrototypeOf = uncurryThis$A({}.isPrototypeOf);
  var getBuiltIn$7 = getBuiltIn$8;
  var engineUserAgent = getBuiltIn$7('navigator', 'userAgent') || '';
  var global$U = global$Y;
  var userAgent$5 = engineUserAgent;
  var process$3 = global$U.process;
  var Deno = global$U.Deno;
  var versions = process$3 && process$3.versions || Deno && Deno.version;
  var v8 = versions && versions.v8;
  var match, version;
  if (v8) {
    match = v8.split('.'); // in old Chrome, versions of V8 isn't V8 = Chrome / 10
    // but their correct versions are not interesting for us
    version = match[0] > 0 && match[0] < 4 ? 1 : +(match[0] + match[1]);
  } // BrowserFS NodeJS `process` polyfill incorrectly set `.v8` to `0.0`
  // so check `userAgent` even if `.v8` exists, but 0
  if (!version && userAgent$5) {
    match = userAgent$5.match(/Edge\/(\d+)/);
    if (!match || match[1] >= 74) {
      match = userAgent$5.match(/Chrome\/(\d+)/);
      if (match) version = +match[1];
    }
  }
  var engineV8Version = version;
  /* eslint-disable es/no-symbol -- required for testing */
  var V8_VERSION$3 = engineV8Version;
  var fails$t = fails$w; // eslint-disable-next-line es/no-object-getownpropertysymbols -- required for testing
  var nativeSymbol = !!Object.getOwnPropertySymbols && !fails$t(function () {
    var symbol = Symbol(); // Chrome 38 Symbol has incorrect toString conversion
    // `get-own-property-symbols` polyfill symbols converted to object are not Symbol instances
    return !String(symbol) || !(Object(symbol) instanceof Symbol) || // Chrome 38-40 symbols are not inherited from DOM collections prototypes to instances
    !Symbol.sham && V8_VERSION$3 && V8_VERSION$3 < 41;
  });
  /* eslint-disable es/no-symbol -- required for testing */
  var NATIVE_SYMBOL$3 = nativeSymbol;
  var useSymbolAsUid = NATIVE_SYMBOL$3 && !Symbol.sham && typeof Symbol.iterator == 'symbol';
  var global$T = global$Y;
  var getBuiltIn$6 = getBuiltIn$8;
  var isCallable$j = isCallable$m;
  var isPrototypeOf$8 = objectIsPrototypeOf;
  var USE_SYMBOL_AS_UID$1 = useSymbolAsUid;
  var Object$4 = global$T.Object;
  var isSymbol$4 = USE_SYMBOL_AS_UID$1 ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    var $Symbol = getBuiltIn$6('Symbol');
    return isCallable$j($Symbol) && isPrototypeOf$8($Symbol.prototype, Object$4(it));
  };
  var global$S = global$Y;
  var String$6 = global$S.String;
  var tryToString$4 = function (argument) {
    try {
      return String$6(argument);
    } catch (error) {
      return 'Object';
    }
  };
  var global$R = global$Y;
  var isCallable$i = isCallable$m;
  var tryToString$3 = tryToString$4;
  var TypeError$j = global$R.TypeError; // `Assert: IsCallable(argument) is true`
  var aCallable$7 = function (argument) {
    if (isCallable$i(argument)) return argument;
    throw TypeError$j(tryToString$3(argument) + ' is not a function');
  };
  var aCallable$6 = aCallable$7; // `GetMethod` abstract operation
  // https://tc39.es/ecma262/#sec-getmethod
  var getMethod$6 = function (V, P) {
    var func = V[P];
    return func == null ? undefined : aCallable$6(func);
  };
  var global$Q = global$Y;
  var call$g = functionCall;
  var isCallable$h = isCallable$m;
  var isObject$g = isObject$h;
  var TypeError$i = global$Q.TypeError; // `OrdinaryToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-ordinarytoprimitive
  var ordinaryToPrimitive$1 = function (input, pref) {
    var fn, val;
    if (pref === 'string' && isCallable$h(fn = input.toString) && !isObject$g(val = call$g(fn, input))) return val;
    if (isCallable$h(fn = input.valueOf) && !isObject$g(val = call$g(fn, input))) return val;
    if (pref !== 'string' && isCallable$h(fn = input.toString) && !isObject$g(val = call$g(fn, input))) return val;
    throw TypeError$i("Can't convert object to primitive value");
  };
  var shared$5 = {exports: {}};
  var isPure = false;
  var global$P = global$Y; // eslint-disable-next-line es/no-object-defineproperty -- safe
  var defineProperty$9 = Object.defineProperty;
  var setGlobal$3 = function (key, value) {
    try {
      defineProperty$9(global$P, key, {
        value: value,
        configurable: true,
        writable: true
      });
    } catch (error) {
      global$P[key] = value;
    }
    return value;
  };
  var global$O = global$Y;
  var setGlobal$2 = setGlobal$3;
  var SHARED = '__core-js_shared__';
  var store$3 = global$O[SHARED] || setGlobal$2(SHARED, {});
  var sharedStore = store$3;
  var store$2 = sharedStore;
  (shared$5.exports = function (key, value) {
    return store$2[key] || (store$2[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: '3.19.0',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)'
  });
  var global$N = global$Y;
  var requireObjectCoercible$6 = requireObjectCoercible$8;
  var Object$3 = global$N.Object; // `ToObject` abstract operation
  // https://tc39.es/ecma262/#sec-toobject
  var toObject$b = function (argument) {
    return Object$3(requireObjectCoercible$6(argument));
  };
  var uncurryThis$z = functionUncurryThis;
  var toObject$a = toObject$b;
  var hasOwnProperty = uncurryThis$z({}.hasOwnProperty); // `HasOwnProperty` abstract operation
  // https://tc39.es/ecma262/#sec-hasownproperty
  var hasOwnProperty_1 = Object.hasOwn || function hasOwn(it, key) {
    return hasOwnProperty(toObject$a(it), key);
  };
  var uncurryThis$y = functionUncurryThis;
  var id$3 = 0;
  var postfix = Math.random();
  var toString$f = uncurryThis$y(1.0.toString);
  var uid$4 = function (key) {
    return 'Symbol(' + (key === undefined ? '' : key) + ')_' + toString$f(++id$3 + postfix, 36);
  };
  var global$M = global$Y;
  var shared$4 = shared$5.exports;
  var hasOwn$g = hasOwnProperty_1;
  var uid$3 = uid$4;
  var NATIVE_SYMBOL$2 = nativeSymbol;
  var USE_SYMBOL_AS_UID = useSymbolAsUid;
  var WellKnownSymbolsStore$1 = shared$4('wks');
  var Symbol$3 = global$M.Symbol;
  var symbolFor = Symbol$3 && Symbol$3['for'];
  var createWellKnownSymbol = USE_SYMBOL_AS_UID ? Symbol$3 : Symbol$3 && Symbol$3.withoutSetter || uid$3;
  var wellKnownSymbol$o = function (name) {
    if (!hasOwn$g(WellKnownSymbolsStore$1, name) || !(NATIVE_SYMBOL$2 || typeof WellKnownSymbolsStore$1[name] == 'string')) {
      var description = 'Symbol.' + name;
      if (NATIVE_SYMBOL$2 && hasOwn$g(Symbol$3, name)) {
        WellKnownSymbolsStore$1[name] = Symbol$3[name];
      } else if (USE_SYMBOL_AS_UID && symbolFor) {
        WellKnownSymbolsStore$1[name] = symbolFor(description);
      } else {
        WellKnownSymbolsStore$1[name] = createWellKnownSymbol(description);
      }
    }
    return WellKnownSymbolsStore$1[name];
  };
  var global$L = global$Y;
  var call$f = functionCall;
  var isObject$f = isObject$h;
  var isSymbol$3 = isSymbol$4;
  var getMethod$5 = getMethod$6;
  var ordinaryToPrimitive = ordinaryToPrimitive$1;
  var wellKnownSymbol$n = wellKnownSymbol$o;
  var TypeError$h = global$L.TypeError;
  var TO_PRIMITIVE$1 = wellKnownSymbol$n('toPrimitive'); // `ToPrimitive` abstract operation
  // https://tc39.es/ecma262/#sec-toprimitive
  var toPrimitive$2 = function (input, pref) {
    if (!isObject$f(input) || isSymbol$3(input)) return input;
    var exoticToPrim = getMethod$5(input, TO_PRIMITIVE$1);
    var result;
    if (exoticToPrim) {
      if (pref === undefined) pref = 'default';
      result = call$f(exoticToPrim, input, pref);
      if (!isObject$f(result) || isSymbol$3(result)) return result;
      throw TypeError$h("Can't convert object to primitive value");
    }
    if (pref === undefined) pref = 'number';
    return ordinaryToPrimitive(input, pref);
  };
  var toPrimitive$1 = toPrimitive$2;
  var isSymbol$2 = isSymbol$4; // `ToPropertyKey` abstract operation
  // https://tc39.es/ecma262/#sec-topropertykey
  var toPropertyKey$4 = function (argument) {
    var key = toPrimitive$1(argument, 'string');
    return isSymbol$2(key) ? key : key + '';
  };
  var global$K = global$Y;
  var isObject$e = isObject$h;
  var document$3 = global$K.document; // typeof document.createElement is 'object' in old IE
  var EXISTS$1 = isObject$e(document$3) && isObject$e(document$3.createElement);
  var documentCreateElement$2 = function (it) {
    return EXISTS$1 ? document$3.createElement(it) : {};
  };
  var DESCRIPTORS$f = descriptors;
  var fails$s = fails$w;
  var createElement$1 = documentCreateElement$2; // Thank's IE8 for his funny defineProperty
  var ie8DomDefine = !DESCRIPTORS$f && !fails$s(function () {
    // eslint-disable-next-line es/no-object-defineproperty -- requied for testing
    return Object.defineProperty(createElement$1('div'), 'a', {
      get: function () {
        return 7;
      }
    }).a != 7;
  });
  var DESCRIPTORS$e = descriptors;
  var call$e = functionCall;
  var propertyIsEnumerableModule$2 = objectPropertyIsEnumerable;
  var createPropertyDescriptor$4 = createPropertyDescriptor$5;
  var toIndexedObject$a = toIndexedObject$b;
  var toPropertyKey$3 = toPropertyKey$4;
  var hasOwn$f = hasOwnProperty_1;
  var IE8_DOM_DEFINE$1 = ie8DomDefine; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var $getOwnPropertyDescriptor$1 = Object.getOwnPropertyDescriptor; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  objectGetOwnPropertyDescriptor.f = DESCRIPTORS$e ? $getOwnPropertyDescriptor$1 : function getOwnPropertyDescriptor(O, P) {
    O = toIndexedObject$a(O);
    P = toPropertyKey$3(P);
    if (IE8_DOM_DEFINE$1) try {
      return $getOwnPropertyDescriptor$1(O, P);
    } catch (error) {
      /* empty */
    }
    if (hasOwn$f(O, P)) return createPropertyDescriptor$4(!call$e(propertyIsEnumerableModule$2.f, O, P), O[P]);
  };
  var objectDefineProperty = {};
  var global$J = global$Y;
  var isObject$d = isObject$h;
  var String$5 = global$J.String;
  var TypeError$g = global$J.TypeError; // `Assert: Type(argument) is Object`
  var anObject$j = function (argument) {
    if (isObject$d(argument)) return argument;
    throw TypeError$g(String$5(argument) + ' is not an object');
  };
  var global$I = global$Y;
  var DESCRIPTORS$d = descriptors;
  var IE8_DOM_DEFINE = ie8DomDefine;
  var anObject$i = anObject$j;
  var toPropertyKey$2 = toPropertyKey$4;
  var TypeError$f = global$I.TypeError; // eslint-disable-next-line es/no-object-defineproperty -- safe
  var $defineProperty$1 = Object.defineProperty; // `Object.defineProperty` method
  // https://tc39.es/ecma262/#sec-object.defineproperty
  objectDefineProperty.f = DESCRIPTORS$d ? $defineProperty$1 : function defineProperty(O, P, Attributes) {
    anObject$i(O);
    P = toPropertyKey$2(P);
    anObject$i(Attributes);
    if (IE8_DOM_DEFINE) try {
      return $defineProperty$1(O, P, Attributes);
    } catch (error) {
      /* empty */
    }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError$f('Accessors not supported');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };
  var DESCRIPTORS$c = descriptors;
  var definePropertyModule$6 = objectDefineProperty;
  var createPropertyDescriptor$3 = createPropertyDescriptor$5;
  var createNonEnumerableProperty$8 = DESCRIPTORS$c ? function (object, key, value) {
    return definePropertyModule$6.f(object, key, createPropertyDescriptor$3(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };
  var redefine$d = {exports: {}};
  var uncurryThis$x = functionUncurryThis;
  var isCallable$g = isCallable$m;
  var store$1 = sharedStore;
  var functionToString$1 = uncurryThis$x(Function.toString); // this helper broken in `core-js@3.4.1-3.4.4`, so we can't use `shared` helper
  if (!isCallable$g(store$1.inspectSource)) {
    store$1.inspectSource = function (it) {
      return functionToString$1(it);
    };
  }
  var inspectSource$4 = store$1.inspectSource;
  var global$H = global$Y;
  var isCallable$f = isCallable$m;
  var inspectSource$3 = inspectSource$4;
  var WeakMap$2 = global$H.WeakMap;
  var nativeWeakMap = isCallable$f(WeakMap$2) && /native code/.test(inspectSource$3(WeakMap$2));
  var shared$3 = shared$5.exports;
  var uid$2 = uid$4;
  var keys$2 = shared$3('keys');
  var sharedKey$4 = function (key) {
    return keys$2[key] || (keys$2[key] = uid$2(key));
  };
  var hiddenKeys$6 = {};
  var NATIVE_WEAK_MAP$1 = nativeWeakMap;
  var global$G = global$Y;
  var uncurryThis$w = functionUncurryThis;
  var isObject$c = isObject$h;
  var createNonEnumerableProperty$7 = createNonEnumerableProperty$8;
  var hasOwn$e = hasOwnProperty_1;
  var shared$2 = sharedStore;
  var sharedKey$3 = sharedKey$4;
  var hiddenKeys$5 = hiddenKeys$6;
  var OBJECT_ALREADY_INITIALIZED = 'Object already initialized';
  var TypeError$e = global$G.TypeError;
  var WeakMap$1 = global$G.WeakMap;
  var set$3, get$2, has;
  var enforce = function (it) {
    return has(it) ? get$2(it) : set$3(it, {});
  };
  var getterFor = function (TYPE) {
    return function (it) {
      var state;
      if (!isObject$c(it) || (state = get$2(it)).type !== TYPE) {
        throw TypeError$e('Incompatible receiver, ' + TYPE + ' required');
      }
      return state;
    };
  };
  if (NATIVE_WEAK_MAP$1 || shared$2.state) {
    var store = shared$2.state || (shared$2.state = new WeakMap$1());
    var wmget = uncurryThis$w(store.get);
    var wmhas = uncurryThis$w(store.has);
    var wmset = uncurryThis$w(store.set);
    set$3 = function (it, metadata) {
      if (wmhas(store, it)) throw new TypeError$e(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      wmset(store, it, metadata);
      return metadata;
    };
    get$2 = function (it) {
      return wmget(store, it) || {};
    };
    has = function (it) {
      return wmhas(store, it);
    };
  } else {
    var STATE = sharedKey$3('state');
    hiddenKeys$5[STATE] = true;
    set$3 = function (it, metadata) {
      if (hasOwn$e(it, STATE)) throw new TypeError$e(OBJECT_ALREADY_INITIALIZED);
      metadata.facade = it;
      createNonEnumerableProperty$7(it, STATE, metadata);
      return metadata;
    };
    get$2 = function (it) {
      return hasOwn$e(it, STATE) ? it[STATE] : {};
    };
    has = function (it) {
      return hasOwn$e(it, STATE);
    };
  }
  var internalState = {
    set: set$3,
    get: get$2,
    has: has,
    enforce: enforce,
    getterFor: getterFor
  };
  var DESCRIPTORS$b = descriptors;
  var hasOwn$d = hasOwnProperty_1;
  var FunctionPrototype$2 = Function.prototype; // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
  var getDescriptor = DESCRIPTORS$b && Object.getOwnPropertyDescriptor;
  var EXISTS = hasOwn$d(FunctionPrototype$2, 'name'); // additional protection from minified / mangled / dropped function names
  var PROPER = EXISTS && function something() {
    /* empty */
  }.name === 'something';
  var CONFIGURABLE = EXISTS && (!DESCRIPTORS$b || DESCRIPTORS$b && getDescriptor(FunctionPrototype$2, 'name').configurable);
  var functionName = {
    EXISTS: EXISTS,
    PROPER: PROPER,
    CONFIGURABLE: CONFIGURABLE
  };
  var global$F = global$Y;
  var isCallable$e = isCallable$m;
  var hasOwn$c = hasOwnProperty_1;
  var createNonEnumerableProperty$6 = createNonEnumerableProperty$8;
  var setGlobal$1 = setGlobal$3;
  var inspectSource$2 = inspectSource$4;
  var InternalStateModule$7 = internalState;
  var CONFIGURABLE_FUNCTION_NAME$1 = functionName.CONFIGURABLE;
  var getInternalState$6 = InternalStateModule$7.get;
  var enforceInternalState$1 = InternalStateModule$7.enforce;
  var TEMPLATE = String(String).split('String');
  (redefine$d.exports = function (O, key, value, options) {
    var unsafe = options ? !!options.unsafe : false;
    var simple = options ? !!options.enumerable : false;
    var noTargetGet = options ? !!options.noTargetGet : false;
    var name = options && options.name !== undefined ? options.name : key;
    var state;
    if (isCallable$e(value)) {
      if (String(name).slice(0, 7) === 'Symbol(') {
        name = '[' + String(name).replace(/^Symbol\(([^)]*)\)/, '$1') + ']';
      }
      if (!hasOwn$c(value, 'name') || CONFIGURABLE_FUNCTION_NAME$1 && value.name !== name) {
        createNonEnumerableProperty$6(value, 'name', name);
      }
      state = enforceInternalState$1(value);
      if (!state.source) {
        state.source = TEMPLATE.join(typeof name == 'string' ? name : '');
      }
    }
    if (O === global$F) {
      if (simple) O[key] = value;else setGlobal$1(key, value);
      return;
    } else if (!unsafe) {
      delete O[key];
    } else if (!noTargetGet && O[key]) {
      simple = true;
    }
    if (simple) O[key] = value;else createNonEnumerableProperty$6(O, key, value); // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, 'toString', function toString() {
    return isCallable$e(this) && getInternalState$6(this).source || inspectSource$2(this);
  });
  var objectGetOwnPropertyNames = {};
  var ceil = Math.ceil;
  var floor$2 = Math.floor; // `ToIntegerOrInfinity` abstract operation
  // https://tc39.es/ecma262/#sec-tointegerorinfinity
  var toIntegerOrInfinity$6 = function (argument) {
    var number = +argument; // eslint-disable-next-line no-self-compare -- safe
    return number !== number || number === 0 ? 0 : (number > 0 ? floor$2 : ceil)(number);
  };
  var toIntegerOrInfinity$5 = toIntegerOrInfinity$6;
  var max$2 = Math.max;
  var min$3 = Math.min; // Helper for a popular repeating case of the spec:
  // Let integer be ? ToInteger(index).
  // If integer < 0, let result be max((length + integer), 0); else let result be min(integer, length).
  var toAbsoluteIndex$3 = function (index, length) {
    var integer = toIntegerOrInfinity$5(index);
    return integer < 0 ? max$2(integer + length, 0) : min$3(integer, length);
  };
  var toIntegerOrInfinity$4 = toIntegerOrInfinity$6;
  var min$2 = Math.min; // `ToLength` abstract operation
  // https://tc39.es/ecma262/#sec-tolength
  var toLength$4 = function (argument) {
    return argument > 0 ? min$2(toIntegerOrInfinity$4(argument), 0x1FFFFFFFFFFFFF) : 0; // 2 ** 53 - 1 == 9007199254740991
  };
  var toLength$3 = toLength$4; // `LengthOfArrayLike` abstract operation
  // https://tc39.es/ecma262/#sec-lengthofarraylike
  var lengthOfArrayLike$9 = function (obj) {
    return toLength$3(obj.length);
  };
  var toIndexedObject$9 = toIndexedObject$b;
  var toAbsoluteIndex$2 = toAbsoluteIndex$3;
  var lengthOfArrayLike$8 = lengthOfArrayLike$9; // `Array.prototype.{ indexOf, includes }` methods implementation
  var createMethod$4 = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIndexedObject$9($this);
      var length = lengthOfArrayLike$8(O);
      var index = toAbsoluteIndex$2(fromIndex, length);
      var value; // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare -- NaN check
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++]; // eslint-disable-next-line no-self-compare -- NaN check
        if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
      } else for (; length > index; index++) {
        if ((IS_INCLUDES || index in O) && O[index] === el) return IS_INCLUDES || index || 0;
      }
      return !IS_INCLUDES && -1;
    };
  };
  var arrayIncludes = {
    // `Array.prototype.includes` method
    // https://tc39.es/ecma262/#sec-array.prototype.includes
    includes: createMethod$4(true),
    // `Array.prototype.indexOf` method
    // https://tc39.es/ecma262/#sec-array.prototype.indexof
    indexOf: createMethod$4(false)
  };
  var uncurryThis$v = functionUncurryThis;
  var hasOwn$b = hasOwnProperty_1;
  var toIndexedObject$8 = toIndexedObject$b;
  var indexOf$1 = arrayIncludes.indexOf;
  var hiddenKeys$4 = hiddenKeys$6;
  var push$4 = uncurryThis$v([].push);
  var objectKeysInternal = function (object, names) {
    var O = toIndexedObject$8(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) !hasOwn$b(hiddenKeys$4, key) && hasOwn$b(O, key) && push$4(result, key); // Don't enum bug & hidden keys
    while (names.length > i) if (hasOwn$b(O, key = names[i++])) {
      ~indexOf$1(result, key) || push$4(result, key);
    }
    return result;
  };
  var enumBugKeys$3 = ['constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'toLocaleString', 'toString', 'valueOf'];
  var internalObjectKeys$1 = objectKeysInternal;
  var enumBugKeys$2 = enumBugKeys$3;
  var hiddenKeys$3 = enumBugKeys$2.concat('length', 'prototype'); // `Object.getOwnPropertyNames` method
  // https://tc39.es/ecma262/#sec-object.getownpropertynames
  // eslint-disable-next-line es/no-object-getownpropertynames -- safe
  objectGetOwnPropertyNames.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return internalObjectKeys$1(O, hiddenKeys$3);
  };
  var objectGetOwnPropertySymbols = {};
  objectGetOwnPropertySymbols.f = Object.getOwnPropertySymbols;
  var getBuiltIn$5 = getBuiltIn$8;
  var uncurryThis$u = functionUncurryThis;
  var getOwnPropertyNamesModule$2 = objectGetOwnPropertyNames;
  var getOwnPropertySymbolsModule$2 = objectGetOwnPropertySymbols;
  var anObject$h = anObject$j;
  var concat$1 = uncurryThis$u([].concat); // all object keys, includes non-enumerable and symbols
  var ownKeys$3 = getBuiltIn$5('Reflect', 'ownKeys') || function ownKeys(it) {
    var keys = getOwnPropertyNamesModule$2.f(anObject$h(it));
    var getOwnPropertySymbols = getOwnPropertySymbolsModule$2.f;
    return getOwnPropertySymbols ? concat$1(keys, getOwnPropertySymbols(it)) : keys;
  };
  var hasOwn$a = hasOwnProperty_1;
  var ownKeys$2 = ownKeys$3;
  var getOwnPropertyDescriptorModule$2 = objectGetOwnPropertyDescriptor;
  var definePropertyModule$5 = objectDefineProperty;
  var copyConstructorProperties$2 = function (target, source) {
    var keys = ownKeys$2(source);
    var defineProperty = definePropertyModule$5.f;
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule$2.f;
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      if (!hasOwn$a(target, key)) defineProperty(target, key, getOwnPropertyDescriptor(source, key));
    }
  };
  var fails$r = fails$w;
  var isCallable$d = isCallable$m;
  var replacement = /#|\.prototype\./;
  var isForced$5 = function (feature, detection) {
    var value = data[normalize(feature)];
    return value == POLYFILL ? true : value == NATIVE ? false : isCallable$d(detection) ? fails$r(detection) : !!detection;
  };
  var normalize = isForced$5.normalize = function (string) {
    return String(string).replace(replacement, '.').toLowerCase();
  };
  var data = isForced$5.data = {};
  var NATIVE = isForced$5.NATIVE = 'N';
  var POLYFILL = isForced$5.POLYFILL = 'P';
  var isForced_1 = isForced$5;
  var global$E = global$Y;
  var getOwnPropertyDescriptor$2 = objectGetOwnPropertyDescriptor.f;
  var createNonEnumerableProperty$5 = createNonEnumerableProperty$8;
  var redefine$c = redefine$d.exports;
  var setGlobal = setGlobal$3;
  var copyConstructorProperties$1 = copyConstructorProperties$2;
  var isForced$4 = isForced_1;
  /*
    options.target      - name of the target object
    options.global      - target is the global object
    options.stat        - export as static methods of target
    options.proto       - export as prototype methods of target
    options.real        - real prototype method for the `pure` version
    options.forced      - export even if the native feature is available
    options.bind        - bind methods to the target, required for the `pure` version
    options.wrap        - wrap constructors to preventing global pollution, required for the `pure` version
    options.unsafe      - use the simple assignment of property instead of delete + defineProperty
    options.sham        - add a flag to not completely full polyfills
    options.enumerable  - export as enumerable property
    options.noTargetGet - prevent calling a getter on target
    options.name        - the .name of the function if it does not match the key
  */
  var _export = function (options, source) {
    var TARGET = options.target;
    var GLOBAL = options.global;
    var STATIC = options.stat;
    var FORCED, target, key, targetProperty, sourceProperty, descriptor;
    if (GLOBAL) {
      target = global$E;
    } else if (STATIC) {
      target = global$E[TARGET] || setGlobal(TARGET, {});
    } else {
      target = (global$E[TARGET] || {}).prototype;
    }
    if (target) for (key in source) {
      sourceProperty = source[key];
      if (options.noTargetGet) {
        descriptor = getOwnPropertyDescriptor$2(target, key);
        targetProperty = descriptor && descriptor.value;
      } else targetProperty = target[key];
      FORCED = isForced$4(GLOBAL ? key : TARGET + (STATIC ? '.' : '#') + key, options.forced); // contained in target
      if (!FORCED && targetProperty !== undefined) {
        if (typeof sourceProperty == typeof targetProperty) continue;
        copyConstructorProperties$1(sourceProperty, targetProperty);
      } // add a flag to not completely full polyfills
      if (options.sham || targetProperty && targetProperty.sham) {
        createNonEnumerableProperty$5(sourceProperty, 'sham', true);
      } // extend global
      redefine$c(target, key, sourceProperty, options);
    }
  };
  var fails$q = fails$w;
  var arrayMethodIsStrict$5 = function (METHOD_NAME, argument) {
    var method = [][METHOD_NAME];
    return !!method && fails$q(function () {
      // eslint-disable-next-line no-useless-call,no-throw-literal -- required for testing
      method.call(null, argument || function () {
        throw 1;
      }, 1);
    });
  };
  /* eslint-disable es/no-array-prototype-indexof -- required for testing */
  var $$s = _export;
  var uncurryThis$t = functionUncurryThis;
  var $IndexOf = arrayIncludes.indexOf;
  var arrayMethodIsStrict$4 = arrayMethodIsStrict$5;
  var un$IndexOf = uncurryThis$t([].indexOf);
  var NEGATIVE_ZERO = !!un$IndexOf && 1 / un$IndexOf([1], 1, -0) < 0;
  var STRICT_METHOD$4 = arrayMethodIsStrict$4('indexOf'); // `Array.prototype.indexOf` method
  // https://tc39.es/ecma262/#sec-array.prototype.indexof
  $$s({
    target: 'Array',
    proto: true,
    forced: NEGATIVE_ZERO || !STRICT_METHOD$4
  }, {
    indexOf: function indexOf(searchElement
    /* , fromIndex = 0 */
    ) {
      var fromIndex = arguments.length > 1 ? arguments[1] : undefined;
      return NEGATIVE_ZERO // convert -0 to +0
      ? un$IndexOf(this, searchElement, fromIndex) || 0 : $IndexOf(this, searchElement, fromIndex);
    }
  });
  var classof$a = classofRaw$1; // `IsArray` abstract operation
  // https://tc39.es/ecma262/#sec-isarray
  // eslint-disable-next-line es/no-array-isarray -- safe
  var isArray$5 = Array.isArray || function isArray(argument) {
    return classof$a(argument) == 'Array';
  };
  var wellKnownSymbol$m = wellKnownSymbol$o;
  var TO_STRING_TAG$3 = wellKnownSymbol$m('toStringTag');
  var test$2 = {};
  test$2[TO_STRING_TAG$3] = 'z';
  var toStringTagSupport = String(test$2) === '[object z]';
  var global$D = global$Y;
  var TO_STRING_TAG_SUPPORT$2 = toStringTagSupport;
  var isCallable$c = isCallable$m;
  var classofRaw = classofRaw$1;
  var wellKnownSymbol$l = wellKnownSymbol$o;
  var TO_STRING_TAG$2 = wellKnownSymbol$l('toStringTag');
  var Object$2 = global$D.Object; // ES3 wrong here
  var CORRECT_ARGUMENTS = classofRaw(function () {
    return arguments;
  }()) == 'Arguments'; // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (error) {
      /* empty */
    }
  }; // getting tag from ES6+ `Object.prototype.toString`
  var classof$9 = TO_STRING_TAG_SUPPORT$2 ? classofRaw : function (it) {
    var O, tag, result;
    return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
    : typeof (tag = tryGet(O = Object$2(it), TO_STRING_TAG$2)) == 'string' ? tag // builtinTag case
    : CORRECT_ARGUMENTS ? classofRaw(O) // ES3 arguments fallback
    : (result = classofRaw(O)) == 'Object' && isCallable$c(O.callee) ? 'Arguments' : result;
  };
  var uncurryThis$s = functionUncurryThis;
  var fails$p = fails$w;
  var isCallable$b = isCallable$m;
  var classof$8 = classof$9;
  var getBuiltIn$4 = getBuiltIn$8;
  var inspectSource$1 = inspectSource$4;
  var noop$1 = function () {
    /* empty */
  };
  var empty$1 = [];
  var construct = getBuiltIn$4('Reflect', 'construct');
  var constructorRegExp = /^\s*(?:class|function)\b/;
  var exec$4 = uncurryThis$s(constructorRegExp.exec);
  var INCORRECT_TO_STRING = !constructorRegExp.exec(noop$1);
  var isConstructorModern = function (argument) {
    if (!isCallable$b(argument)) return false;
    try {
      construct(noop$1, empty$1, argument);
      return true;
    } catch (error) {
      return false;
    }
  };
  var isConstructorLegacy = function (argument) {
    if (!isCallable$b(argument)) return false;
    switch (classof$8(argument)) {
      case 'AsyncFunction':
      case 'GeneratorFunction':
      case 'AsyncGeneratorFunction':
        return false;
      // we can't check .prototype since constructors produced by .bind haven't it
    }
    return INCORRECT_TO_STRING || !!exec$4(constructorRegExp, inspectSource$1(argument));
  }; // `IsConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-isconstructor
  var isConstructor$4 = !construct || fails$p(function () {
    var called;
    return isConstructorModern(isConstructorModern.call) || !isConstructorModern(Object) || !isConstructorModern(function () {
      called = true;
    }) || called;
  }) ? isConstructorLegacy : isConstructorModern;
  var toPropertyKey$1 = toPropertyKey$4;
  var definePropertyModule$4 = objectDefineProperty;
  var createPropertyDescriptor$2 = createPropertyDescriptor$5;
  var createProperty$5 = function (object, key, value) {
    var propertyKey = toPropertyKey$1(key);
    if (propertyKey in object) definePropertyModule$4.f(object, propertyKey, createPropertyDescriptor$2(0, value));else object[propertyKey] = value;
  };
  var fails$o = fails$w;
  var wellKnownSymbol$k = wellKnownSymbol$o;
  var V8_VERSION$2 = engineV8Version;
  var SPECIES$6 = wellKnownSymbol$k('species');
  var arrayMethodHasSpeciesSupport$5 = function (METHOD_NAME) {
    // We can't use this feature detection in V8 since it causes
    // deoptimization and serious performance degradation
    // https://github.com/zloirock/core-js/issues/677
    return V8_VERSION$2 >= 51 || !fails$o(function () {
      var array = [];
      var constructor = array.constructor = {};
      constructor[SPECIES$6] = function () {
        return {
          foo: 1
        };
      };
      return array[METHOD_NAME](Boolean).foo !== 1;
    });
  };
  var uncurryThis$r = functionUncurryThis;
  var arraySlice$6 = uncurryThis$r([].slice);
  var $$r = _export;
  var global$C = global$Y;
  var isArray$4 = isArray$5;
  var isConstructor$3 = isConstructor$4;
  var isObject$b = isObject$h;
  var toAbsoluteIndex$1 = toAbsoluteIndex$3;
  var lengthOfArrayLike$7 = lengthOfArrayLike$9;
  var toIndexedObject$7 = toIndexedObject$b;
  var createProperty$4 = createProperty$5;
  var wellKnownSymbol$j = wellKnownSymbol$o;
  var arrayMethodHasSpeciesSupport$4 = arrayMethodHasSpeciesSupport$5;
  var un$Slice = arraySlice$6;
  var HAS_SPECIES_SUPPORT$3 = arrayMethodHasSpeciesSupport$4('slice');
  var SPECIES$5 = wellKnownSymbol$j('species');
  var Array$3 = global$C.Array;
  var max$1 = Math.max; // `Array.prototype.slice` method
  // https://tc39.es/ecma262/#sec-array.prototype.slice
  // fallback for not array-like ES3 strings and DOM objects
  $$r({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$3
  }, {
    slice: function slice(start, end) {
      var O = toIndexedObject$7(this);
      var length = lengthOfArrayLike$7(O);
      var k = toAbsoluteIndex$1(start, length);
      var fin = toAbsoluteIndex$1(end === undefined ? length : end, length); // inline `ArraySpeciesCreate` for usage native `Array#slice` where it's possible
      var Constructor, result, n;
      if (isArray$4(O)) {
        Constructor = O.constructor; // cross-realm fallback
        if (isConstructor$3(Constructor) && (Constructor === Array$3 || isArray$4(Constructor.prototype))) {
          Constructor = undefined;
        } else if (isObject$b(Constructor)) {
          Constructor = Constructor[SPECIES$5];
          if (Constructor === null) Constructor = undefined;
        }
        if (Constructor === Array$3 || Constructor === undefined) {
          return un$Slice(O, k, fin);
        }
      }
      result = new (Constructor === undefined ? Array$3 : Constructor)(max$1(fin - k, 0));
      for (n = 0; k < fin; k++, n++) if (k in O) createProperty$4(result, n, O[k]);
      result.length = n;
      return result;
    }
  });
  var uncurryThis$q = functionUncurryThis;
  var aCallable$5 = aCallable$7;
  var bind$8 = uncurryThis$q(uncurryThis$q.bind); // optional / simple context binding
  var functionBindContext = function (fn, that) {
    aCallable$5(fn);
    return that === undefined ? fn : bind$8 ? bind$8(fn, that) : function () {
      return fn.apply(that, arguments);
    };
  };
  var call$d = functionCall;
  var anObject$g = anObject$j;
  var getMethod$4 = getMethod$6;
  var iteratorClose$2 = function (iterator, kind, value) {
    var innerResult, innerError;
    anObject$g(iterator);
    try {
      innerResult = getMethod$4(iterator, 'return');
      if (!innerResult) {
        if (kind === 'throw') throw value;
        return value;
      }
      innerResult = call$d(innerResult, iterator);
    } catch (error) {
      innerError = true;
      innerResult = error;
    }
    if (kind === 'throw') throw value;
    if (innerError) throw innerResult;
    anObject$g(innerResult);
    return value;
  };
  var anObject$f = anObject$j;
  var iteratorClose$1 = iteratorClose$2; // call something on iterator step with safe closing on error
  var callWithSafeIterationClosing$1 = function (iterator, fn, value, ENTRIES) {
    try {
      return ENTRIES ? fn(anObject$f(value)[0], value[1]) : fn(value);
    } catch (error) {
      iteratorClose$1(iterator, 'throw', error);
    }
  };
  var iterators = {};
  var wellKnownSymbol$i = wellKnownSymbol$o;
  var Iterators$4 = iterators;
  var ITERATOR$7 = wellKnownSymbol$i('iterator');
  var ArrayPrototype$1 = Array.prototype; // check on default Array iterator
  var isArrayIteratorMethod$2 = function (it) {
    return it !== undefined && (Iterators$4.Array === it || ArrayPrototype$1[ITERATOR$7] === it);
  };
  var classof$7 = classof$9;
  var getMethod$3 = getMethod$6;
  var Iterators$3 = iterators;
  var wellKnownSymbol$h = wellKnownSymbol$o;
  var ITERATOR$6 = wellKnownSymbol$h('iterator');
  var getIteratorMethod$3 = function (it) {
    if (it != undefined) return getMethod$3(it, ITERATOR$6) || getMethod$3(it, '@@iterator') || Iterators$3[classof$7(it)];
  };
  var global$B = global$Y;
  var call$c = functionCall;
  var aCallable$4 = aCallable$7;
  var anObject$e = anObject$j;
  var tryToString$2 = tryToString$4;
  var getIteratorMethod$2 = getIteratorMethod$3;
  var TypeError$d = global$B.TypeError;
  var getIterator$2 = function (argument, usingIterator) {
    var iteratorMethod = arguments.length < 2 ? getIteratorMethod$2(argument) : usingIterator;
    if (aCallable$4(iteratorMethod)) return anObject$e(call$c(iteratorMethod, argument));
    throw TypeError$d(tryToString$2(argument) + ' is not iterable');
  };
  var global$A = global$Y;
  var bind$7 = functionBindContext;
  var call$b = functionCall;
  var toObject$9 = toObject$b;
  var callWithSafeIterationClosing = callWithSafeIterationClosing$1;
  var isArrayIteratorMethod$1 = isArrayIteratorMethod$2;
  var isConstructor$2 = isConstructor$4;
  var lengthOfArrayLike$6 = lengthOfArrayLike$9;
  var createProperty$3 = createProperty$5;
  var getIterator$1 = getIterator$2;
  var getIteratorMethod$1 = getIteratorMethod$3;
  var Array$2 = global$A.Array; // `Array.from` method implementation
  // https://tc39.es/ecma262/#sec-array.from
  var arrayFrom = function from(arrayLike
  /* , mapfn = undefined, thisArg = undefined */
  ) {
    var O = toObject$9(arrayLike);
    var IS_CONSTRUCTOR = isConstructor$2(this);
    var argumentsLength = arguments.length;
    var mapfn = argumentsLength > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    if (mapping) mapfn = bind$7(mapfn, argumentsLength > 2 ? arguments[2] : undefined);
    var iteratorMethod = getIteratorMethod$1(O);
    var index = 0;
    var length, result, step, iterator, next, value; // if the target is not iterable or it's an array with the default iterator - use a simple case
    if (iteratorMethod && !(this == Array$2 && isArrayIteratorMethod$1(iteratorMethod))) {
      iterator = getIterator$1(O, iteratorMethod);
      next = iterator.next;
      result = IS_CONSTRUCTOR ? new this() : [];
      for (; !(step = call$b(next, iterator)).done; index++) {
        value = mapping ? callWithSafeIterationClosing(iterator, mapfn, [step.value, index], true) : step.value;
        createProperty$3(result, index, value);
      }
    } else {
      length = lengthOfArrayLike$6(O);
      result = IS_CONSTRUCTOR ? new this(length) : Array$2(length);
      for (; length > index; index++) {
        value = mapping ? mapfn(O[index], index) : O[index];
        createProperty$3(result, index, value);
      }
    }
    result.length = index;
    return result;
  };
  var wellKnownSymbol$g = wellKnownSymbol$o;
  var ITERATOR$5 = wellKnownSymbol$g('iterator');
  var SAFE_CLOSING = false;
  try {
    var called = 0;
    var iteratorWithReturn = {
      next: function () {
        return {
          done: !!called++
        };
      },
      'return': function () {
        SAFE_CLOSING = true;
      }
    };
    iteratorWithReturn[ITERATOR$5] = function () {
      return this;
    }; // eslint-disable-next-line es/no-array-from, no-throw-literal -- required for testing
    Array.from(iteratorWithReturn, function () {
      throw 2;
    });
  } catch (error) {
    /* empty */
  }
  var checkCorrectnessOfIteration$3 = function (exec, SKIP_CLOSING) {
    if (!SKIP_CLOSING && !SAFE_CLOSING) return false;
    var ITERATION_SUPPORT = false;
    try {
      var object = {};
      object[ITERATOR$5] = function () {
        return {
          next: function () {
            return {
              done: ITERATION_SUPPORT = true
            };
          }
        };
      };
      exec(object);
    } catch (error) {
      /* empty */
    }
    return ITERATION_SUPPORT;
  };
  var $$q = _export;
  var from = arrayFrom;
  var checkCorrectnessOfIteration$2 = checkCorrectnessOfIteration$3;
  var INCORRECT_ITERATION$1 = !checkCorrectnessOfIteration$2(function (iterable) {
    // eslint-disable-next-line es/no-array-from -- required for testing
    Array.from(iterable);
  }); // `Array.from` method
  // https://tc39.es/ecma262/#sec-array.from
  $$q({
    target: 'Array',
    stat: true,
    forced: INCORRECT_ITERATION$1
  }, {
    from: from
  });
  var global$z = global$Y;
  var classof$6 = classof$9;
  var String$4 = global$z.String;
  var toString$e = function (argument) {
    if (classof$6(argument) === 'Symbol') throw TypeError('Cannot convert a Symbol value to a string');
    return String$4(argument);
  };
  var uncurryThis$p = functionUncurryThis;
  var toIntegerOrInfinity$3 = toIntegerOrInfinity$6;
  var toString$d = toString$e;
  var requireObjectCoercible$5 = requireObjectCoercible$8;
  var charAt$5 = uncurryThis$p(''.charAt);
  var charCodeAt$1 = uncurryThis$p(''.charCodeAt);
  var stringSlice$5 = uncurryThis$p(''.slice);
  var createMethod$3 = function (CONVERT_TO_STRING) {
    return function ($this, pos) {
      var S = toString$d(requireObjectCoercible$5($this));
      var position = toIntegerOrInfinity$3(pos);
      var size = S.length;
      var first, second;
      if (position < 0 || position >= size) return CONVERT_TO_STRING ? '' : undefined;
      first = charCodeAt$1(S, position);
      return first < 0xD800 || first > 0xDBFF || position + 1 === size || (second = charCodeAt$1(S, position + 1)) < 0xDC00 || second > 0xDFFF ? CONVERT_TO_STRING ? charAt$5(S, position) : first : CONVERT_TO_STRING ? stringSlice$5(S, position, position + 2) : (first - 0xD800 << 10) + (second - 0xDC00) + 0x10000;
    };
  };
  var stringMultibyte = {
    // `String.prototype.codePointAt` method
    // https://tc39.es/ecma262/#sec-string.prototype.codepointat
    codeAt: createMethod$3(false),
    // `String.prototype.at` method
    // https://github.com/mathiasbynens/String.prototype.at
    charAt: createMethod$3(true)
  };
  var internalObjectKeys = objectKeysInternal;
  var enumBugKeys$1 = enumBugKeys$3; // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  // eslint-disable-next-line es/no-object-keys -- safe
  var objectKeys$3 = Object.keys || function keys(O) {
    return internalObjectKeys(O, enumBugKeys$1);
  };
  var DESCRIPTORS$a = descriptors;
  var definePropertyModule$3 = objectDefineProperty;
  var anObject$d = anObject$j;
  var toIndexedObject$6 = toIndexedObject$b;
  var objectKeys$2 = objectKeys$3; // `Object.defineProperties` method
  // https://tc39.es/ecma262/#sec-object.defineproperties
  // eslint-disable-next-line es/no-object-defineproperties -- safe
  var objectDefineProperties = DESCRIPTORS$a ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject$d(O);
    var props = toIndexedObject$6(Properties);
    var keys = objectKeys$2(Properties);
    var length = keys.length;
    var index = 0;
    var key;
    while (length > index) definePropertyModule$3.f(O, key = keys[index++], props[key]);
    return O;
  };
  var getBuiltIn$3 = getBuiltIn$8;
  var html$2 = getBuiltIn$3('document', 'documentElement');
  /* global ActiveXObject -- old IE, WSH */
  var anObject$c = anObject$j;
  var defineProperties = objectDefineProperties;
  var enumBugKeys = enumBugKeys$3;
  var hiddenKeys$2 = hiddenKeys$6;
  var html$1 = html$2;
  var documentCreateElement$1 = documentCreateElement$2;
  var sharedKey$2 = sharedKey$4;
  var GT = '>';
  var LT = '<';
  var PROTOTYPE$1 = 'prototype';
  var SCRIPT = 'script';
  var IE_PROTO$1 = sharedKey$2('IE_PROTO');
  var EmptyConstructor = function () {
    /* empty */
  };
  var scriptTag = function (content) {
    return LT + SCRIPT + GT + content + LT + '/' + SCRIPT + GT;
  }; // Create object with fake `null` prototype: use ActiveX Object with cleared prototype
  var NullProtoObjectViaActiveX = function (activeXDocument) {
    activeXDocument.write(scriptTag(''));
    activeXDocument.close();
    var temp = activeXDocument.parentWindow.Object;
    activeXDocument = null; // avoid memory leak
    return temp;
  }; // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var NullProtoObjectViaIFrame = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = documentCreateElement$1('iframe');
    var JS = 'java' + SCRIPT + ':';
    var iframeDocument;
    iframe.style.display = 'none';
    html$1.appendChild(iframe); // https://github.com/zloirock/core-js/issues/475
    iframe.src = String(JS);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(scriptTag('document.F=Object'));
    iframeDocument.close();
    return iframeDocument.F;
  }; // Check for document.domain and active x support
  // No need to use active x approach when document.domain is not set
  // see https://github.com/es-shims/es5-shim/issues/150
  // variation of https://github.com/kitcambridge/es5-shim/commit/4f738ac066346
  // avoid IE GC bug
  var activeXDocument;
  var NullProtoObject = function () {
    try {
      activeXDocument = new ActiveXObject('htmlfile');
    } catch (error) {
      /* ignore */
    }
    NullProtoObject = typeof document != 'undefined' ? document.domain && activeXDocument ? NullProtoObjectViaActiveX(activeXDocument) // old IE
    : NullProtoObjectViaIFrame() : NullProtoObjectViaActiveX(activeXDocument); // WSH
    var length = enumBugKeys.length;
    while (length--) delete NullProtoObject[PROTOTYPE$1][enumBugKeys[length]];
    return NullProtoObject();
  };
  hiddenKeys$2[IE_PROTO$1] = true; // `Object.create` method
  // https://tc39.es/ecma262/#sec-object.create
  var objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      EmptyConstructor[PROTOTYPE$1] = anObject$c(O);
      result = new EmptyConstructor();
      EmptyConstructor[PROTOTYPE$1] = null; // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = NullProtoObject();
    return Properties === undefined ? result : defineProperties(result, Properties);
  };
  var fails$n = fails$w;
  var correctPrototypeGetter = !fails$n(function () {
    function F() {
      /* empty */
    }
    F.prototype.constructor = null; // eslint-disable-next-line es/no-object-getprototypeof -- required for testing
    return Object.getPrototypeOf(new F()) !== F.prototype;
  });
  var global$y = global$Y;
  var hasOwn$9 = hasOwnProperty_1;
  var isCallable$a = isCallable$m;
  var toObject$8 = toObject$b;
  var sharedKey$1 = sharedKey$4;
  var CORRECT_PROTOTYPE_GETTER = correctPrototypeGetter;
  var IE_PROTO = sharedKey$1('IE_PROTO');
  var Object$1 = global$y.Object;
  var ObjectPrototype$1 = Object$1.prototype; // `Object.getPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.getprototypeof
  var objectGetPrototypeOf = CORRECT_PROTOTYPE_GETTER ? Object$1.getPrototypeOf : function (O) {
    var object = toObject$8(O);
    if (hasOwn$9(object, IE_PROTO)) return object[IE_PROTO];
    var constructor = object.constructor;
    if (isCallable$a(constructor) && object instanceof constructor) {
      return constructor.prototype;
    }
    return object instanceof Object$1 ? ObjectPrototype$1 : null;
  };
  var fails$m = fails$w;
  var isCallable$9 = isCallable$m;
  var getPrototypeOf$1 = objectGetPrototypeOf;
  var redefine$b = redefine$d.exports;
  var wellKnownSymbol$f = wellKnownSymbol$o;
  var ITERATOR$4 = wellKnownSymbol$f('iterator');
  var BUGGY_SAFARI_ITERATORS$1 = false; // `%IteratorPrototype%` object
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-object
  var IteratorPrototype$2, PrototypeOfArrayIteratorPrototype, arrayIterator;
  /* eslint-disable es/no-array-prototype-keys -- safe */
  if ([].keys) {
    arrayIterator = [].keys(); // Safari 8 has buggy iterators w/o `next`
    if (!('next' in arrayIterator)) BUGGY_SAFARI_ITERATORS$1 = true;else {
      PrototypeOfArrayIteratorPrototype = getPrototypeOf$1(getPrototypeOf$1(arrayIterator));
      if (PrototypeOfArrayIteratorPrototype !== Object.prototype) IteratorPrototype$2 = PrototypeOfArrayIteratorPrototype;
    }
  }
  var NEW_ITERATOR_PROTOTYPE = IteratorPrototype$2 == undefined || fails$m(function () {
    var test = {}; // FF44- legacy iterators case
    return IteratorPrototype$2[ITERATOR$4].call(test) !== test;
  });
  if (NEW_ITERATOR_PROTOTYPE) IteratorPrototype$2 = {}; // `%IteratorPrototype%[@@iterator]()` method
  // https://tc39.es/ecma262/#sec-%iteratorprototype%-@@iterator
  if (!isCallable$9(IteratorPrototype$2[ITERATOR$4])) {
    redefine$b(IteratorPrototype$2, ITERATOR$4, function () {
      return this;
    });
  }
  var iteratorsCore = {
    IteratorPrototype: IteratorPrototype$2,
    BUGGY_SAFARI_ITERATORS: BUGGY_SAFARI_ITERATORS$1
  };
  var defineProperty$8 = objectDefineProperty.f;
  var hasOwn$8 = hasOwnProperty_1;
  var wellKnownSymbol$e = wellKnownSymbol$o;
  var TO_STRING_TAG$1 = wellKnownSymbol$e('toStringTag');
  var setToStringTag$5 = function (it, TAG, STATIC) {
    if (it && !hasOwn$8(it = STATIC ? it : it.prototype, TO_STRING_TAG$1)) {
      defineProperty$8(it, TO_STRING_TAG$1, {
        configurable: true,
        value: TAG
      });
    }
  };
  var IteratorPrototype$1 = iteratorsCore.IteratorPrototype;
  var create$4 = objectCreate;
  var createPropertyDescriptor$1 = createPropertyDescriptor$5;
  var setToStringTag$4 = setToStringTag$5;
  var Iterators$2 = iterators;
  var returnThis$1 = function () {
    return this;
  };
  var createIteratorConstructor$2 = function (IteratorConstructor, NAME, next) {
    var TO_STRING_TAG = NAME + ' Iterator';
    IteratorConstructor.prototype = create$4(IteratorPrototype$1, {
      next: createPropertyDescriptor$1(1, next)
    });
    setToStringTag$4(IteratorConstructor, TO_STRING_TAG, false);
    Iterators$2[TO_STRING_TAG] = returnThis$1;
    return IteratorConstructor;
  };
  var global$x = global$Y;
  var isCallable$8 = isCallable$m;
  var String$3 = global$x.String;
  var TypeError$c = global$x.TypeError;
  var aPossiblePrototype$1 = function (argument) {
    if (typeof argument == 'object' || isCallable$8(argument)) return argument;
    throw TypeError$c("Can't set " + String$3(argument) + ' as a prototype');
  };
  /* eslint-disable no-proto -- safe */
  var uncurryThis$o = functionUncurryThis;
  var anObject$b = anObject$j;
  var aPossiblePrototype = aPossiblePrototype$1; // `Object.setPrototypeOf` method
  // https://tc39.es/ecma262/#sec-object.setprototypeof
  // Works with __proto__ only. Old v8 can't work with null proto objects.
  // eslint-disable-next-line es/no-object-setprototypeof -- safe
  var objectSetPrototypeOf = Object.setPrototypeOf || ('__proto__' in {} ? function () {
    var CORRECT_SETTER = false;
    var test = {};
    var setter;
    try {
      // eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
      setter = uncurryThis$o(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set);
      setter(test, []);
      CORRECT_SETTER = test instanceof Array;
    } catch (error) {
      /* empty */
    }
    return function setPrototypeOf(O, proto) {
      anObject$b(O);
      aPossiblePrototype(proto);
      if (CORRECT_SETTER) setter(O, proto);else O.__proto__ = proto;
      return O;
    };
  }() : undefined);
  var $$p = _export;
  var call$a = functionCall;
  var FunctionName = functionName;
  var isCallable$7 = isCallable$m;
  var createIteratorConstructor$1 = createIteratorConstructor$2;
  var getPrototypeOf = objectGetPrototypeOf;
  var setPrototypeOf$2 = objectSetPrototypeOf;
  var setToStringTag$3 = setToStringTag$5;
  var createNonEnumerableProperty$4 = createNonEnumerableProperty$8;
  var redefine$a = redefine$d.exports;
  var wellKnownSymbol$d = wellKnownSymbol$o;
  var Iterators$1 = iterators;
  var IteratorsCore = iteratorsCore;
  var PROPER_FUNCTION_NAME$2 = FunctionName.PROPER;
  var CONFIGURABLE_FUNCTION_NAME = FunctionName.CONFIGURABLE;
  var IteratorPrototype = IteratorsCore.IteratorPrototype;
  var BUGGY_SAFARI_ITERATORS = IteratorsCore.BUGGY_SAFARI_ITERATORS;
  var ITERATOR$3 = wellKnownSymbol$d('iterator');
  var KEYS = 'keys';
  var VALUES = 'values';
  var ENTRIES = 'entries';
  var returnThis = function () {
    return this;
  };
  var defineIterator$3 = function (Iterable, NAME, IteratorConstructor, next, DEFAULT, IS_SET, FORCED) {
    createIteratorConstructor$1(IteratorConstructor, NAME, next);
    var getIterationMethod = function (KIND) {
      if (KIND === DEFAULT && defaultIterator) return defaultIterator;
      if (!BUGGY_SAFARI_ITERATORS && KIND in IterablePrototype) return IterablePrototype[KIND];
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
      return function () {
        return new IteratorConstructor(this);
      };
    };
    var TO_STRING_TAG = NAME + ' Iterator';
    var INCORRECT_VALUES_NAME = false;
    var IterablePrototype = Iterable.prototype;
    var nativeIterator = IterablePrototype[ITERATOR$3] || IterablePrototype['@@iterator'] || DEFAULT && IterablePrototype[DEFAULT];
    var defaultIterator = !BUGGY_SAFARI_ITERATORS && nativeIterator || getIterationMethod(DEFAULT);
    var anyNativeIterator = NAME == 'Array' ? IterablePrototype.entries || nativeIterator : nativeIterator;
    var CurrentIteratorPrototype, methods, KEY; // fix native
    if (anyNativeIterator) {
      CurrentIteratorPrototype = getPrototypeOf(anyNativeIterator.call(new Iterable()));
      if (CurrentIteratorPrototype !== Object.prototype && CurrentIteratorPrototype.next) {
        if (getPrototypeOf(CurrentIteratorPrototype) !== IteratorPrototype) {
          if (setPrototypeOf$2) {
            setPrototypeOf$2(CurrentIteratorPrototype, IteratorPrototype);
          } else if (!isCallable$7(CurrentIteratorPrototype[ITERATOR$3])) {
            redefine$a(CurrentIteratorPrototype, ITERATOR$3, returnThis);
          }
        } // Set @@toStringTag to native iterators
        setToStringTag$3(CurrentIteratorPrototype, TO_STRING_TAG, true);
      }
    } // fix Array.prototype.{ values, @@iterator }.name in V8 / FF
    if (PROPER_FUNCTION_NAME$2 && DEFAULT == VALUES && nativeIterator && nativeIterator.name !== VALUES) {
      if (CONFIGURABLE_FUNCTION_NAME) {
        createNonEnumerableProperty$4(IterablePrototype, 'name', VALUES);
      } else {
        INCORRECT_VALUES_NAME = true;
        defaultIterator = function values() {
          return call$a(nativeIterator, this);
        };
      }
    } // export additional methods
    if (DEFAULT) {
      methods = {
        values: getIterationMethod(VALUES),
        keys: IS_SET ? defaultIterator : getIterationMethod(KEYS),
        entries: getIterationMethod(ENTRIES)
      };
      if (FORCED) for (KEY in methods) {
        if (BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME || !(KEY in IterablePrototype)) {
          redefine$a(IterablePrototype, KEY, methods[KEY]);
        }
      } else $$p({
        target: NAME,
        proto: true,
        forced: BUGGY_SAFARI_ITERATORS || INCORRECT_VALUES_NAME
      }, methods);
    } // define iterator
    if (IterablePrototype[ITERATOR$3] !== defaultIterator) {
      redefine$a(IterablePrototype, ITERATOR$3, defaultIterator, {
        name: DEFAULT
      });
    }
    Iterators$1[NAME] = defaultIterator;
    return methods;
  };
  var charAt$4 = stringMultibyte.charAt;
  var toString$c = toString$e;
  var InternalStateModule$6 = internalState;
  var defineIterator$2 = defineIterator$3;
  var STRING_ITERATOR = 'String Iterator';
  var setInternalState$6 = InternalStateModule$6.set;
  var getInternalState$5 = InternalStateModule$6.getterFor(STRING_ITERATOR); // `String.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-string.prototype-@@iterator
  defineIterator$2(String, 'String', function (iterated) {
    setInternalState$6(this, {
      type: STRING_ITERATOR,
      string: toString$c(iterated),
      index: 0
    }); // `%StringIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%stringiteratorprototype%.next
  }, function next() {
    var state = getInternalState$5(this);
    var string = state.string;
    var index = state.index;
    var point;
    if (index >= string.length) return {
      value: undefined,
      done: true
    };
    point = charAt$4(string, index);
    state.index += point.length;
    return {
      value: point,
      done: false
    };
  });
  var global$w = global$Y;
  var isArray$3 = isArray$5;
  var isConstructor$1 = isConstructor$4;
  var isObject$a = isObject$h;
  var wellKnownSymbol$c = wellKnownSymbol$o;
  var SPECIES$4 = wellKnownSymbol$c('species');
  var Array$1 = global$w.Array; // a part of `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesConstructor$1 = function (originalArray) {
    var C;
    if (isArray$3(originalArray)) {
      C = originalArray.constructor; // cross-realm fallback
      if (isConstructor$1(C) && (C === Array$1 || isArray$3(C.prototype))) C = undefined;else if (isObject$a(C)) {
        C = C[SPECIES$4];
        if (C === null) C = undefined;
      }
    }
    return C === undefined ? Array$1 : C;
  };
  var arraySpeciesConstructor = arraySpeciesConstructor$1; // `ArraySpeciesCreate` abstract operation
  // https://tc39.es/ecma262/#sec-arrayspeciescreate
  var arraySpeciesCreate$3 = function (originalArray, length) {
    return new (arraySpeciesConstructor(originalArray))(length === 0 ? 0 : length);
  };
  var bind$6 = functionBindContext;
  var uncurryThis$n = functionUncurryThis;
  var IndexedObject$3 = indexedObject;
  var toObject$7 = toObject$b;
  var lengthOfArrayLike$5 = lengthOfArrayLike$9;
  var arraySpeciesCreate$2 = arraySpeciesCreate$3;
  var push$3 = uncurryThis$n([].push); // `Array.prototype.{ forEach, map, filter, some, every, find, findIndex, filterReject }` methods implementation
  var createMethod$2 = function (TYPE) {
    var IS_MAP = TYPE == 1;
    var IS_FILTER = TYPE == 2;
    var IS_SOME = TYPE == 3;
    var IS_EVERY = TYPE == 4;
    var IS_FIND_INDEX = TYPE == 6;
    var IS_FILTER_REJECT = TYPE == 7;
    var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
    return function ($this, callbackfn, that, specificCreate) {
      var O = toObject$7($this);
      var self = IndexedObject$3(O);
      var boundFunction = bind$6(callbackfn, that);
      var length = lengthOfArrayLike$5(self);
      var index = 0;
      var create = specificCreate || arraySpeciesCreate$2;
      var target = IS_MAP ? create($this, length) : IS_FILTER || IS_FILTER_REJECT ? create($this, 0) : undefined;
      var value, result;
      for (; length > index; index++) if (NO_HOLES || index in self) {
        value = self[index];
        result = boundFunction(value, index, O);
        if (TYPE) {
          if (IS_MAP) target[index] = result; // map
          else if (result) switch (TYPE) {
            case 3:
              return true;
            // some
            case 5:
              return value;
            // find
            case 6:
              return index;
            // findIndex
            case 2:
              push$3(target, value);
            // filter
          } else switch (TYPE) {
            case 4:
              return false;
            // every
            case 7:
              push$3(target, value);
            // filterReject
          }
        }
      }
      return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : target;
    };
  };
  var arrayIteration = {
    // `Array.prototype.forEach` method
    // https://tc39.es/ecma262/#sec-array.prototype.foreach
    forEach: createMethod$2(0),
    // `Array.prototype.map` method
    // https://tc39.es/ecma262/#sec-array.prototype.map
    map: createMethod$2(1),
    // `Array.prototype.filter` method
    // https://tc39.es/ecma262/#sec-array.prototype.filter
    filter: createMethod$2(2),
    // `Array.prototype.some` method
    // https://tc39.es/ecma262/#sec-array.prototype.some
    some: createMethod$2(3),
    // `Array.prototype.every` method
    // https://tc39.es/ecma262/#sec-array.prototype.every
    every: createMethod$2(4),
    // `Array.prototype.find` method
    // https://tc39.es/ecma262/#sec-array.prototype.find
    find: createMethod$2(5),
    // `Array.prototype.findIndex` method
    // https://tc39.es/ecma262/#sec-array.prototype.findIndex
    findIndex: createMethod$2(6),
    // `Array.prototype.filterReject` method
    // https://github.com/tc39/proposal-array-filtering
    filterReject: createMethod$2(7)
  };
  var wellKnownSymbol$b = wellKnownSymbol$o;
  var create$3 = objectCreate;
  var definePropertyModule$2 = objectDefineProperty;
  var UNSCOPABLES = wellKnownSymbol$b('unscopables');
  var ArrayPrototype = Array.prototype; // Array.prototype[@@unscopables]
  // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  if (ArrayPrototype[UNSCOPABLES] == undefined) {
    definePropertyModule$2.f(ArrayPrototype, UNSCOPABLES, {
      configurable: true,
      value: create$3(null)
    });
  } // add a key to Array.prototype[@@unscopables]
  var addToUnscopables$3 = function (key) {
    ArrayPrototype[UNSCOPABLES][key] = true;
  };
  var $$o = _export;
  var $find = arrayIteration.find;
  var addToUnscopables$2 = addToUnscopables$3;
  var FIND = 'find';
  var SKIPS_HOLES = true; // Shouldn't skip holes
  if (FIND in []) Array(1)[FIND](function () {
    SKIPS_HOLES = false;
  }); // `Array.prototype.find` method
  // https://tc39.es/ecma262/#sec-array.prototype.find
  $$o({
    target: 'Array',
    proto: true,
    forced: SKIPS_HOLES
  }, {
    find: function find(callbackfn
    /* , that = undefined */
    ) {
      return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$2(FIND);
  var $$n = _export;
  var $filter = arrayIteration.filter;
  var arrayMethodHasSpeciesSupport$3 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT$2 = arrayMethodHasSpeciesSupport$3('filter'); // `Array.prototype.filter` method
  // https://tc39.es/ecma262/#sec-array.prototype.filter
  // with adding support of @@species
  $$n({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$2
  }, {
    filter: function filter(callbackfn
    /* , thisArg */
    ) {
      return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  var $$m = _export;
  var $map = arrayIteration.map;
  var arrayMethodHasSpeciesSupport$2 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT$1 = arrayMethodHasSpeciesSupport$2('map'); // `Array.prototype.map` method
  // https://tc39.es/ecma262/#sec-array.prototype.map
  // with adding support of @@species
  $$m({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT$1
  }, {
    map: function map(callbackfn
    /* , thisArg */
    ) {
      return $map(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    }
  });
  var toIndexedObject$5 = toIndexedObject$b;
  var addToUnscopables$1 = addToUnscopables$3;
  var Iterators = iterators;
  var InternalStateModule$5 = internalState;
  var defineIterator$1 = defineIterator$3;
  var ARRAY_ITERATOR = 'Array Iterator';
  var setInternalState$5 = InternalStateModule$5.set;
  var getInternalState$4 = InternalStateModule$5.getterFor(ARRAY_ITERATOR); // `Array.prototype.entries` method
  // https://tc39.es/ecma262/#sec-array.prototype.entries
  // `Array.prototype.keys` method
  // https://tc39.es/ecma262/#sec-array.prototype.keys
  // `Array.prototype.values` method
  // https://tc39.es/ecma262/#sec-array.prototype.values
  // `Array.prototype[@@iterator]` method
  // https://tc39.es/ecma262/#sec-array.prototype-@@iterator
  // `CreateArrayIterator` internal method
  // https://tc39.es/ecma262/#sec-createarrayiterator
  var es_array_iterator = defineIterator$1(Array, 'Array', function (iterated, kind) {
    setInternalState$5(this, {
      type: ARRAY_ITERATOR,
      target: toIndexedObject$5(iterated),
      // target
      index: 0,
      // next index
      kind: kind // kind
    }); // `%ArrayIteratorPrototype%.next` method
    // https://tc39.es/ecma262/#sec-%arrayiteratorprototype%.next
  }, function () {
    var state = getInternalState$4(this);
    var target = state.target;
    var kind = state.kind;
    var index = state.index++;
    if (!target || index >= target.length) {
      state.target = undefined;
      return {
        value: undefined,
        done: true
      };
    }
    if (kind == 'keys') return {
      value: index,
      done: false
    };
    if (kind == 'values') return {
      value: target[index],
      done: false
    };
    return {
      value: [index, target[index]],
      done: false
    };
  }, 'values'); // argumentsList[@@iterator] is %ArrayProto_values%
  // https://tc39.es/ecma262/#sec-createunmappedargumentsobject
  // https://tc39.es/ecma262/#sec-createmappedargumentsobject
  Iterators.Arguments = Iterators.Array; // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables$1('keys');
  addToUnscopables$1('values');
  addToUnscopables$1('entries');
  var internalMetadata = {exports: {}};
  var objectGetOwnPropertyNamesExternal = {};
  /* eslint-disable es/no-object-getownpropertynames -- safe */
  var classof$5 = classofRaw$1;
  var toIndexedObject$4 = toIndexedObject$b;
  var $getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var arraySlice$5 = arraySlice$6;
  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
  var getWindowNames = function (it) {
    try {
      return $getOwnPropertyNames$1(it);
    } catch (error) {
      return arraySlice$5(windowNames);
    }
  }; // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
  objectGetOwnPropertyNamesExternal.f = function getOwnPropertyNames(it) {
    return windowNames && classof$5(it) == 'Window' ? getWindowNames(it) : $getOwnPropertyNames$1(toIndexedObject$4(it));
  };
  var fails$l = fails$w;
  var freezing = !fails$l(function () {
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
    return Object.isExtensible(Object.preventExtensions({}));
  });
  var $$l = _export;
  var uncurryThis$m = functionUncurryThis;
  var hiddenKeys$1 = hiddenKeys$6;
  var isObject$9 = isObject$h;
  var hasOwn$7 = hasOwnProperty_1;
  var defineProperty$7 = objectDefineProperty.f;
  var getOwnPropertyNamesModule$1 = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternalModule = objectGetOwnPropertyNamesExternal;
  var uid$1 = uid$4;
  var FREEZING = freezing;
  var REQUIRED = false;
  var METADATA = uid$1('meta');
  var id$2 = 0; // eslint-disable-next-line es/no-object-isextensible -- safe
  var isExtensible$1 = Object.isExtensible || function () {
    return true;
  };
  var setMetadata = function (it) {
    defineProperty$7(it, METADATA, {
      value: {
        objectID: 'O' + id$2++,
        // object ID
        weakData: {} // weak collections IDs
      }
    });
  };
  var fastKey$1 = function (it, create) {
    // return a primitive with prefix
    if (!isObject$9(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!hasOwn$7(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return 'F'; // not necessary to add metadata
      if (!create) return 'E'; // add missing metadata
      setMetadata(it); // return object ID
    }
    return it[METADATA].objectID;
  };
  var getWeakData$1 = function (it, create) {
    if (!hasOwn$7(it, METADATA)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible$1(it)) return true; // not necessary to add metadata
      if (!create) return false; // add missing metadata
      setMetadata(it); // return the store of weak collections IDs
    }
    return it[METADATA].weakData;
  }; // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZING && REQUIRED && isExtensible$1(it) && !hasOwn$7(it, METADATA)) setMetadata(it);
    return it;
  };
  var enable = function () {
    meta.enable = function () {
      /* empty */
    };
    REQUIRED = true;
    var getOwnPropertyNames = getOwnPropertyNamesModule$1.f;
    var splice = uncurryThis$m([].splice);
    var test = {};
    test[METADATA] = 1; // prevent exposing of metadata key
    if (getOwnPropertyNames(test).length) {
      getOwnPropertyNamesModule$1.f = function (it) {
        var result = getOwnPropertyNames(it);
        for (var i = 0, length = result.length; i < length; i++) {
          if (result[i] === METADATA) {
            splice(result, i, 1);
            break;
          }
        }
        return result;
      };
      $$l({
        target: 'Object',
        stat: true,
        forced: true
      }, {
        getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
      });
    }
  };
  var meta = internalMetadata.exports = {
    enable: enable,
    fastKey: fastKey$1,
    getWeakData: getWeakData$1,
    onFreeze: onFreeze
  };
  hiddenKeys$1[METADATA] = true;
  var global$v = global$Y;
  var bind$5 = functionBindContext;
  var call$9 = functionCall;
  var anObject$a = anObject$j;
  var tryToString$1 = tryToString$4;
  var isArrayIteratorMethod = isArrayIteratorMethod$2;
  var lengthOfArrayLike$4 = lengthOfArrayLike$9;
  var isPrototypeOf$7 = objectIsPrototypeOf;
  var getIterator = getIterator$2;
  var getIteratorMethod = getIteratorMethod$3;
  var iteratorClose = iteratorClose$2;
  var TypeError$b = global$v.TypeError;
  var Result = function (stopped, result) {
    this.stopped = stopped;
    this.result = result;
  };
  var ResultPrototype = Result.prototype;
  var iterate$4 = function (iterable, unboundFunction, options) {
    var that = options && options.that;
    var AS_ENTRIES = !!(options && options.AS_ENTRIES);
    var IS_ITERATOR = !!(options && options.IS_ITERATOR);
    var INTERRUPTED = !!(options && options.INTERRUPTED);
    var fn = bind$5(unboundFunction, that);
    var iterator, iterFn, index, length, result, next, step;
    var stop = function (condition) {
      if (iterator) iteratorClose(iterator, 'normal', condition);
      return new Result(true, condition);
    };
    var callFn = function (value) {
      if (AS_ENTRIES) {
        anObject$a(value);
        return INTERRUPTED ? fn(value[0], value[1], stop) : fn(value[0], value[1]);
      }
      return INTERRUPTED ? fn(value, stop) : fn(value);
    };
    if (IS_ITERATOR) {
      iterator = iterable;
    } else {
      iterFn = getIteratorMethod(iterable);
      if (!iterFn) throw TypeError$b(tryToString$1(iterable) + ' is not iterable'); // optimisation for array iterators
      if (isArrayIteratorMethod(iterFn)) {
        for (index = 0, length = lengthOfArrayLike$4(iterable); length > index; index++) {
          result = callFn(iterable[index]);
          if (result && isPrototypeOf$7(ResultPrototype, result)) return result;
        }
        return new Result(false);
      }
      iterator = getIterator(iterable, iterFn);
    }
    next = iterator.next;
    while (!(step = call$9(next, iterator)).done) {
      try {
        result = callFn(step.value);
      } catch (error) {
        iteratorClose(iterator, 'throw', error);
      }
      if (typeof result == 'object' && result && isPrototypeOf$7(ResultPrototype, result)) return result;
    }
    return new Result(false);
  };
  var global$u = global$Y;
  var isPrototypeOf$6 = objectIsPrototypeOf;
  var TypeError$a = global$u.TypeError;
  var anInstance$4 = function (it, Prototype) {
    if (isPrototypeOf$6(Prototype, it)) return it;
    throw TypeError$a('Incorrect invocation');
  };
  var isCallable$6 = isCallable$m;
  var isObject$8 = isObject$h;
  var setPrototypeOf$1 = objectSetPrototypeOf; // makes subclassing work correct for wrapped built-ins
  var inheritIfRequired$3 = function ($this, dummy, Wrapper) {
    var NewTarget, NewTargetPrototype;
    if ( // it can work only with native `setPrototypeOf`
    setPrototypeOf$1 && // we haven't completely correct pre-ES6 way for getting `new.target`, so use this
    isCallable$6(NewTarget = dummy.constructor) && NewTarget !== Wrapper && isObject$8(NewTargetPrototype = NewTarget.prototype) && NewTargetPrototype !== Wrapper.prototype) setPrototypeOf$1($this, NewTargetPrototype);
    return $this;
  };
  var $$k = _export;
  var global$t = global$Y;
  var uncurryThis$l = functionUncurryThis;
  var isForced$3 = isForced_1;
  var redefine$9 = redefine$d.exports;
  var InternalMetadataModule$1 = internalMetadata.exports;
  var iterate$3 = iterate$4;
  var anInstance$3 = anInstance$4;
  var isCallable$5 = isCallable$m;
  var isObject$7 = isObject$h;
  var fails$k = fails$w;
  var checkCorrectnessOfIteration$1 = checkCorrectnessOfIteration$3;
  var setToStringTag$2 = setToStringTag$5;
  var inheritIfRequired$2 = inheritIfRequired$3;
  var collection$3 = function (CONSTRUCTOR_NAME, wrapper, common) {
    var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
    var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
    var ADDER = IS_MAP ? 'set' : 'add';
    var NativeConstructor = global$t[CONSTRUCTOR_NAME];
    var NativePrototype = NativeConstructor && NativeConstructor.prototype;
    var Constructor = NativeConstructor;
    var exported = {};
    var fixMethod = function (KEY) {
      var uncurriedNativeMethod = uncurryThis$l(NativePrototype[KEY]);
      redefine$9(NativePrototype, KEY, KEY == 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY == 'delete' ? function (key) {
        return IS_WEAK && !isObject$7(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'get' ? function get(key) {
        return IS_WEAK && !isObject$7(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY == 'has' ? function has(key) {
        return IS_WEAK && !isObject$7(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      });
    };
    var REPLACE = isForced$3(CONSTRUCTOR_NAME, !isCallable$5(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails$k(function () {
      new NativeConstructor().entries().next();
    })));
    if (REPLACE) {
      // create collection constructor
      Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
      InternalMetadataModule$1.enable();
    } else if (isForced$3(CONSTRUCTOR_NAME, true)) {
      var instance = new Constructor(); // early implementations not supports chaining
      var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
      var THROWS_ON_PRIMITIVES = fails$k(function () {
        instance.has(1);
      }); // most early implementations doesn't supports iterables, most modern - not close it correctly
      // eslint-disable-next-line no-new -- required for testing
      var ACCEPT_ITERABLES = checkCorrectnessOfIteration$1(function (iterable) {
        new NativeConstructor(iterable);
      }); // for early implementations -0 and +0 not the same
      var BUGGY_ZERO = !IS_WEAK && fails$k(function () {
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new NativeConstructor();
        var index = 5;
        while (index--) $instance[ADDER](index, index);
        return !$instance.has(-0);
      });
      if (!ACCEPT_ITERABLES) {
        Constructor = wrapper(function (dummy, iterable) {
          anInstance$3(dummy, NativePrototype);
          var that = inheritIfRequired$2(new NativeConstructor(), dummy, Constructor);
          if (iterable != undefined) iterate$3(iterable, that[ADDER], {
            that: that,
            AS_ENTRIES: IS_MAP
          });
          return that;
        });
        Constructor.prototype = NativePrototype;
        NativePrototype.constructor = Constructor;
      }
      if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
        fixMethod('delete');
        fixMethod('has');
        IS_MAP && fixMethod('get');
      }
      if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method
      if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
    }
    exported[CONSTRUCTOR_NAME] = Constructor;
    $$k({
      global: true,
      forced: Constructor != NativeConstructor
    }, exported);
    setToStringTag$2(Constructor, CONSTRUCTOR_NAME);
    if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);
    return Constructor;
  };
  var redefine$8 = redefine$d.exports;
  var redefineAll$4 = function (target, src, options) {
    for (var key in src) redefine$8(target, key, src[key], options);
    return target;
  };
  var getBuiltIn$2 = getBuiltIn$8;
  var definePropertyModule$1 = objectDefineProperty;
  var wellKnownSymbol$a = wellKnownSymbol$o;
  var DESCRIPTORS$9 = descriptors;
  var SPECIES$3 = wellKnownSymbol$a('species');
  var setSpecies$3 = function (CONSTRUCTOR_NAME) {
    var Constructor = getBuiltIn$2(CONSTRUCTOR_NAME);
    var defineProperty = definePropertyModule$1.f;
    if (DESCRIPTORS$9 && Constructor && !Constructor[SPECIES$3]) {
      defineProperty(Constructor, SPECIES$3, {
        configurable: true,
        get: function () {
          return this;
        }
      });
    }
  };
  var defineProperty$6 = objectDefineProperty.f;
  var create$2 = objectCreate;
  var redefineAll$3 = redefineAll$4;
  var bind$4 = functionBindContext;
  var anInstance$2 = anInstance$4;
  var iterate$2 = iterate$4;
  var defineIterator = defineIterator$3;
  var setSpecies$2 = setSpecies$3;
  var DESCRIPTORS$8 = descriptors;
  var fastKey = internalMetadata.exports.fastKey;
  var InternalStateModule$4 = internalState;
  var setInternalState$4 = InternalStateModule$4.set;
  var internalStateGetterFor$1 = InternalStateModule$4.getterFor;
  var collectionStrong$2 = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance$2(that, Prototype);
        setInternalState$4(that, {
          type: CONSTRUCTOR_NAME,
          index: create$2(null),
          first: undefined,
          last: undefined,
          size: 0
        });
        if (!DESCRIPTORS$8) that.size = 0;
        if (iterable != undefined) iterate$2(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
      var define = function (that, key, value) {
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        var previous, index; // change existing entry
        if (entry) {
          entry.value = value; // create new entry
        } else {
          state.last = entry = {
            index: index = fastKey(key, true),
            key: key,
            value: value,
            previous: previous = state.last,
            next: undefined,
            removed: false
          };
          if (!state.first) state.first = entry;
          if (previous) previous.next = entry;
          if (DESCRIPTORS$8) state.size++;else that.size++; // add to index
          if (index !== 'F') state.index[index] = entry;
        }
        return that;
      };
      var getEntry = function (that, key) {
        var state = getInternalState(that); // fast case
        var index = fastKey(key);
        var entry;
        if (index !== 'F') return state.index[index]; // frozen object case
        for (entry = state.first; entry; entry = entry.next) {
          if (entry.key == key) return entry;
        }
      };
      redefineAll$3(Prototype, {
        // `{ Map, Set }.prototype.clear()` methods
        // https://tc39.es/ecma262/#sec-map.prototype.clear
        // https://tc39.es/ecma262/#sec-set.prototype.clear
        clear: function clear() {
          var that = this;
          var state = getInternalState(that);
          var data = state.index;
          var entry = state.first;
          while (entry) {
            entry.removed = true;
            if (entry.previous) entry.previous = entry.previous.next = undefined;
            delete data[entry.index];
            entry = entry.next;
          }
          state.first = state.last = undefined;
          if (DESCRIPTORS$8) state.size = 0;else that.size = 0;
        },
        // `{ Map, Set }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.delete
        // https://tc39.es/ecma262/#sec-set.prototype.delete
        'delete': function (key) {
          var that = this;
          var state = getInternalState(that);
          var entry = getEntry(that, key);
          if (entry) {
            var next = entry.next;
            var prev = entry.previous;
            delete state.index[entry.index];
            entry.removed = true;
            if (prev) prev.next = next;
            if (next) next.previous = prev;
            if (state.first == entry) state.first = next;
            if (state.last == entry) state.last = prev;
            if (DESCRIPTORS$8) state.size--;else that.size--;
          }
          return !!entry;
        },
        // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.foreach
        // https://tc39.es/ecma262/#sec-set.prototype.foreach
        forEach: function forEach(callbackfn
        /* , that = undefined */
        ) {
          var state = getInternalState(this);
          var boundFunction = bind$4(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
          var entry;
          while (entry = entry ? entry.next : state.first) {
            boundFunction(entry.value, entry.key, this); // revert to the last existing entry
            while (entry && entry.removed) entry = entry.previous;
          }
        },
        // `{ Map, Set}.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-map.prototype.has
        // https://tc39.es/ecma262/#sec-set.prototype.has
        has: function has(key) {
          return !!getEntry(this, key);
        }
      });
      redefineAll$3(Prototype, IS_MAP ? {
        // `Map.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-map.prototype.get
        get: function get(key) {
          var entry = getEntry(this, key);
          return entry && entry.value;
        },
        // `Map.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-map.prototype.set
        set: function set(key, value) {
          return define(this, key === 0 ? 0 : key, value);
        }
      } : {
        // `Set.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-set.prototype.add
        add: function add(value) {
          return define(this, value = value === 0 ? 0 : value, value);
        }
      });
      if (DESCRIPTORS$8) defineProperty$6(Prototype, 'size', {
        get: function () {
          return getInternalState(this).size;
        }
      });
      return Constructor;
    },
    setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
      var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
      var getInternalCollectionState = internalStateGetterFor$1(CONSTRUCTOR_NAME);
      var getInternalIteratorState = internalStateGetterFor$1(ITERATOR_NAME); // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.entries
      // https://tc39.es/ecma262/#sec-map.prototype.keys
      // https://tc39.es/ecma262/#sec-map.prototype.values
      // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
      // https://tc39.es/ecma262/#sec-set.prototype.entries
      // https://tc39.es/ecma262/#sec-set.prototype.keys
      // https://tc39.es/ecma262/#sec-set.prototype.values
      // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
      defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
        setInternalState$4(this, {
          type: ITERATOR_NAME,
          target: iterated,
          state: getInternalCollectionState(iterated),
          kind: kind,
          last: undefined
        });
      }, function () {
        var state = getInternalIteratorState(this);
        var kind = state.kind;
        var entry = state.last; // revert to the last existing entry
        while (entry && entry.removed) entry = entry.previous; // get next entry
        if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
          // or finish the iteration
          state.target = undefined;
          return {
            value: undefined,
            done: true
          };
        } // return step by kind
        if (kind == 'keys') return {
          value: entry.key,
          done: false
        };
        if (kind == 'values') return {
          value: entry.value,
          done: false
        };
        return {
          value: [entry.key, entry.value],
          done: false
        };
      }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // `{ Map, Set }.prototype[@@species]` accessors
      // https://tc39.es/ecma262/#sec-get-map-@@species
      // https://tc39.es/ecma262/#sec-get-set-@@species
      setSpecies$2(CONSTRUCTOR_NAME);
    }
  };
  var collection$2 = collection$3;
  var collectionStrong$1 = collectionStrong$2; // `Map` constructor
  // https://tc39.es/ecma262/#sec-map-objects
  collection$2('Map', function (init) {
    return function Map() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong$1);
  var TO_STRING_TAG_SUPPORT$1 = toStringTagSupport;
  var classof$4 = classof$9; // `Object.prototype.toString` method implementation
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  var objectToString = TO_STRING_TAG_SUPPORT$1 ? {}.toString : function toString() {
    return '[object ' + classof$4(this) + ']';
  };
  var TO_STRING_TAG_SUPPORT = toStringTagSupport;
  var redefine$7 = redefine$d.exports;
  var toString$b = objectToString; // `Object.prototype.toString` method
  // https://tc39.es/ecma262/#sec-object.prototype.tostring
  if (!TO_STRING_TAG_SUPPORT) {
    redefine$7(Object.prototype, 'toString', toString$b, {
      unsafe: true
    });
  }
  // flag - `iterable` interface - 'entries', 'keys', 'values', 'forEach' methods
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
  var documentCreateElement = documentCreateElement$2;
  var classList$1 = documentCreateElement('span').classList;
  var DOMTokenListPrototype$2 = classList$1 && classList$1.constructor && classList$1.constructor.prototype;
  var domTokenListPrototype = DOMTokenListPrototype$2 === Object.prototype ? undefined : DOMTokenListPrototype$2;
  var global$s = global$Y;
  var DOMIterables$1 = domIterables;
  var DOMTokenListPrototype$1 = domTokenListPrototype;
  var ArrayIteratorMethods = es_array_iterator;
  var createNonEnumerableProperty$3 = createNonEnumerableProperty$8;
  var wellKnownSymbol$9 = wellKnownSymbol$o;
  var ITERATOR$2 = wellKnownSymbol$9('iterator');
  var TO_STRING_TAG = wellKnownSymbol$9('toStringTag');
  var ArrayValues = ArrayIteratorMethods.values;
  var handlePrototype$1 = function (CollectionPrototype, COLLECTION_NAME) {
    if (CollectionPrototype) {
      // some Chrome versions have non-configurable methods on DOMTokenList
      if (CollectionPrototype[ITERATOR$2] !== ArrayValues) try {
        createNonEnumerableProperty$3(CollectionPrototype, ITERATOR$2, ArrayValues);
      } catch (error) {
        CollectionPrototype[ITERATOR$2] = ArrayValues;
      }
      if (!CollectionPrototype[TO_STRING_TAG]) {
        createNonEnumerableProperty$3(CollectionPrototype, TO_STRING_TAG, COLLECTION_NAME);
      }
      if (DOMIterables$1[COLLECTION_NAME]) for (var METHOD_NAME in ArrayIteratorMethods) {
        // some Chrome versions have non-configurable methods on DOMTokenList
        if (CollectionPrototype[METHOD_NAME] !== ArrayIteratorMethods[METHOD_NAME]) try {
          createNonEnumerableProperty$3(CollectionPrototype, METHOD_NAME, ArrayIteratorMethods[METHOD_NAME]);
        } catch (error) {
          CollectionPrototype[METHOD_NAME] = ArrayIteratorMethods[METHOD_NAME];
        }
      }
    }
  };
  for (var COLLECTION_NAME$1 in DOMIterables$1) {
    handlePrototype$1(global$s[COLLECTION_NAME$1] && global$s[COLLECTION_NAME$1].prototype, COLLECTION_NAME$1);
  }
  handlePrototype$1(DOMTokenListPrototype$1, 'DOMTokenList');
  var arraySlice$4 = arraySlice$6;
  var floor$1 = Math.floor;
  var mergeSort = function (array, comparefn) {
    var length = array.length;
    var middle = floor$1(length / 2);
    return length < 8 ? insertionSort(array, comparefn) : merge(array, mergeSort(arraySlice$4(array, 0, middle), comparefn), mergeSort(arraySlice$4(array, middle), comparefn), comparefn);
  };
  var insertionSort = function (array, comparefn) {
    var length = array.length;
    var i = 1;
    var element, j;
    while (i < length) {
      j = i;
      element = array[i];
      while (j && comparefn(array[j - 1], element) > 0) {
        array[j] = array[--j];
      }
      if (j !== i++) array[j] = element;
    }
    return array;
  };
  var merge = function (array, left, right, comparefn) {
    var llength = left.length;
    var rlength = right.length;
    var lindex = 0;
    var rindex = 0;
    while (lindex < llength || rindex < rlength) {
      array[lindex + rindex] = lindex < llength && rindex < rlength ? comparefn(left[lindex], right[rindex]) <= 0 ? left[lindex++] : right[rindex++] : lindex < llength ? left[lindex++] : right[rindex++];
    }
    return array;
  };
  var arraySort = mergeSort;
  var userAgent$4 = engineUserAgent;
  var firefox = userAgent$4.match(/firefox\/(\d+)/i);
  var engineFfVersion = !!firefox && +firefox[1];
  var UA = engineUserAgent;
  var engineIsIeOrEdge = /MSIE|Trident/.test(UA);
  var userAgent$3 = engineUserAgent;
  var webkit = userAgent$3.match(/AppleWebKit\/(\d+)\./);
  var engineWebkitVersion = !!webkit && +webkit[1];
  var $$j = _export;
  var uncurryThis$k = functionUncurryThis;
  var aCallable$3 = aCallable$7;
  var toObject$6 = toObject$b;
  var lengthOfArrayLike$3 = lengthOfArrayLike$9;
  var toString$a = toString$e;
  var fails$j = fails$w;
  var internalSort = arraySort;
  var arrayMethodIsStrict$3 = arrayMethodIsStrict$5;
  var FF = engineFfVersion;
  var IE_OR_EDGE = engineIsIeOrEdge;
  var V8 = engineV8Version;
  var WEBKIT = engineWebkitVersion;
  var test$1 = [];
  var un$Sort = uncurryThis$k(test$1.sort);
  var push$2 = uncurryThis$k(test$1.push); // IE8-
  var FAILS_ON_UNDEFINED = fails$j(function () {
    test$1.sort(undefined);
  }); // V8 bug
  var FAILS_ON_NULL = fails$j(function () {
    test$1.sort(null);
  }); // Old WebKit
  var STRICT_METHOD$3 = arrayMethodIsStrict$3('sort');
  var STABLE_SORT = !fails$j(function () {
    // feature detection can be too slow, so check engines versions
    if (V8) return V8 < 70;
    if (FF && FF > 3) return;
    if (IE_OR_EDGE) return true;
    if (WEBKIT) return WEBKIT < 603;
    var result = '';
    var code, chr, value, index; // generate an array with more 512 elements (Chakra and old V8 fails only in this case)
    for (code = 65; code < 76; code++) {
      chr = String.fromCharCode(code);
      switch (code) {
        case 66:
        case 69:
        case 70:
        case 72:
          value = 3;
          break;
        case 68:
        case 71:
          value = 4;
          break;
        default:
          value = 2;
      }
      for (index = 0; index < 47; index++) {
        test$1.push({
          k: chr + index,
          v: value
        });
      }
    }
    test$1.sort(function (a, b) {
      return b.v - a.v;
    });
    for (index = 0; index < test$1.length; index++) {
      chr = test$1[index].k.charAt(0);
      if (result.charAt(result.length - 1) !== chr) result += chr;
    }
    return result !== 'DGBEFHACIJK';
  });
  var FORCED$6 = FAILS_ON_UNDEFINED || !FAILS_ON_NULL || !STRICT_METHOD$3 || !STABLE_SORT;
  var getSortCompare = function (comparefn) {
    return function (x, y) {
      if (y === undefined) return -1;
      if (x === undefined) return 1;
      if (comparefn !== undefined) return +comparefn(x, y) || 0;
      return toString$a(x) > toString$a(y) ? 1 : -1;
    };
  }; // `Array.prototype.sort` method
  // https://tc39.es/ecma262/#sec-array.prototype.sort
  $$j({
    target: 'Array',
    proto: true,
    forced: FORCED$6
  }, {
    sort: function sort(comparefn) {
      if (comparefn !== undefined) aCallable$3(comparefn);
      var array = toObject$6(this);
      if (STABLE_SORT) return comparefn === undefined ? un$Sort(array) : un$Sort(array, comparefn);
      var items = [];
      var arrayLength = lengthOfArrayLike$3(array);
      var itemsLength, index;
      for (index = 0; index < arrayLength; index++) {
        if (index in array) push$2(items, array[index]);
      }
      internalSort(items, getSortCompare(comparefn));
      itemsLength = items.length;
      index = 0;
      while (index < itemsLength) array[index] = items[index++];
      while (index < arrayLength) delete array[index++];
      return array;
    }
  });
  var anObject$9 = anObject$j; // `RegExp.prototype.flags` getter implementation
  // https://tc39.es/ecma262/#sec-get-regexp.prototype.flags
  var regexpFlags$1 = function () {
    var that = anObject$9(this);
    var result = '';
    if (that.global) result += 'g';
    if (that.ignoreCase) result += 'i';
    if (that.multiline) result += 'm';
    if (that.dotAll) result += 's';
    if (that.unicode) result += 'u';
    if (that.sticky) result += 'y';
    return result;
  };
  var regexpStickyHelpers = {};
  var fails$i = fails$w;
  var global$r = global$Y; // babel-minify and Closure Compiler transpiles RegExp('a', 'y') -> /a/y and it causes SyntaxError
  var $RegExp$2 = global$r.RegExp;
  regexpStickyHelpers.UNSUPPORTED_Y = fails$i(function () {
    var re = $RegExp$2('a', 'y');
    re.lastIndex = 2;
    return re.exec('abcd') != null;
  });
  regexpStickyHelpers.BROKEN_CARET = fails$i(function () {
    // https://bugzilla.mozilla.org/show_bug.cgi?id=773687
    var re = $RegExp$2('^r', 'gy');
    re.lastIndex = 2;
    return re.exec('str') != null;
  });
  var fails$h = fails$w;
  var global$q = global$Y; // babel-minify and Closure Compiler transpiles RegExp('.', 's') -> /./s and it causes SyntaxError
  var $RegExp$1 = global$q.RegExp;
  var regexpUnsupportedDotAll = fails$h(function () {
    var re = $RegExp$1('.', 's');
    return !(re.dotAll && re.exec('\n') && re.flags === 's');
  });
  var fails$g = fails$w;
  var global$p = global$Y; // babel-minify and Closure Compiler transpiles RegExp('(?<a>b)', 'g') -> /(?<a>b)/g and it causes SyntaxError
  var $RegExp = global$p.RegExp;
  var regexpUnsupportedNcg = fails$g(function () {
    var re = $RegExp('(?<a>b)', 'g');
    return re.exec('b').groups.a !== 'b' || 'b'.replace(re, '$<a>c') !== 'bc';
  });
  /* eslint-disable regexp/no-empty-capturing-group, regexp/no-empty-group, regexp/no-lazy-ends -- testing */
  /* eslint-disable regexp/no-useless-quantifier -- testing */
  var call$8 = functionCall;
  var uncurryThis$j = functionUncurryThis;
  var toString$9 = toString$e;
  var regexpFlags = regexpFlags$1;
  var stickyHelpers$2 = regexpStickyHelpers;
  var shared$1 = shared$5.exports;
  var create$1 = objectCreate;
  var getInternalState$3 = internalState.get;
  var UNSUPPORTED_DOT_ALL$1 = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG$1 = regexpUnsupportedNcg;
  var nativeReplace = shared$1('native-string-replace', String.prototype.replace);
  var nativeExec = RegExp.prototype.exec;
  var patchedExec = nativeExec;
  var charAt$3 = uncurryThis$j(''.charAt);
  var indexOf = uncurryThis$j(''.indexOf);
  var replace$3 = uncurryThis$j(''.replace);
  var stringSlice$4 = uncurryThis$j(''.slice);
  var UPDATES_LAST_INDEX_WRONG = function () {
    var re1 = /a/;
    var re2 = /b*/g;
    call$8(nativeExec, re1, 'a');
    call$8(nativeExec, re2, 'a');
    return re1.lastIndex !== 0 || re2.lastIndex !== 0;
  }();
  var UNSUPPORTED_Y$2 = stickyHelpers$2.UNSUPPORTED_Y || stickyHelpers$2.BROKEN_CARET; // nonparticipating capturing group, copied from es5-shim's String#split patch.
  var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
  var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED || UNSUPPORTED_Y$2 || UNSUPPORTED_DOT_ALL$1 || UNSUPPORTED_NCG$1;
  if (PATCH) {
    // eslint-disable-next-line max-statements -- TODO
    patchedExec = function exec(string) {
      var re = this;
      var state = getInternalState$3(re);
      var str = toString$9(string);
      var raw = state.raw;
      var result, reCopy, lastIndex, match, i, object, group;
      if (raw) {
        raw.lastIndex = re.lastIndex;
        result = call$8(patchedExec, raw, str);
        re.lastIndex = raw.lastIndex;
        return result;
      }
      var groups = state.groups;
      var sticky = UNSUPPORTED_Y$2 && re.sticky;
      var flags = call$8(regexpFlags, re);
      var source = re.source;
      var charsAdded = 0;
      var strCopy = str;
      if (sticky) {
        flags = replace$3(flags, 'y', '');
        if (indexOf(flags, 'g') === -1) {
          flags += 'g';
        }
        strCopy = stringSlice$4(str, re.lastIndex); // Support anchored sticky behavior.
        if (re.lastIndex > 0 && (!re.multiline || re.multiline && charAt$3(str, re.lastIndex - 1) !== '\n')) {
          source = '(?: ' + source + ')';
          strCopy = ' ' + strCopy;
          charsAdded++;
        } // ^(? + rx + ) is needed, in combination with some str slicing, to
        // simulate the 'y' flag.
        reCopy = new RegExp('^(?:' + source + ')', flags);
      }
      if (NPCG_INCLUDED) {
        reCopy = new RegExp('^' + source + '$(?!\\s)', flags);
      }
      if (UPDATES_LAST_INDEX_WRONG) lastIndex = re.lastIndex;
      match = call$8(nativeExec, sticky ? reCopy : re, strCopy);
      if (sticky) {
        if (match) {
          match.input = stringSlice$4(match.input, charsAdded);
          match[0] = stringSlice$4(match[0], charsAdded);
          match.index = re.lastIndex;
          re.lastIndex += match[0].length;
        } else re.lastIndex = 0;
      } else if (UPDATES_LAST_INDEX_WRONG && match) {
        re.lastIndex = re.global ? match.index + match[0].length : lastIndex;
      }
      if (NPCG_INCLUDED && match && match.length > 1) {
        // Fix browsers whose `exec` methods don't consistently return `undefined`
        // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
        call$8(nativeReplace, match[0], reCopy, function () {
          for (i = 1; i < arguments.length - 2; i++) {
            if (arguments[i] === undefined) match[i] = undefined;
          }
        });
      }
      if (match && groups) {
        match.groups = object = create$1(null);
        for (i = 0; i < groups.length; i++) {
          group = groups[i];
          object[group[0]] = match[group[1]];
        }
      }
      return match;
    };
  }
  var regexpExec$3 = patchedExec;
  var $$i = _export;
  var exec$3 = regexpExec$3; // `RegExp.prototype.exec` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.exec
  $$i({
    target: 'RegExp',
    proto: true,
    forced: /./.exec !== exec$3
  }, {
    exec: exec$3
  });
  var FunctionPrototype$1 = Function.prototype;
  var apply$3 = FunctionPrototype$1.apply;
  var bind$3 = FunctionPrototype$1.bind;
  var call$7 = FunctionPrototype$1.call; // eslint-disable-next-line es/no-reflect -- safe
  var functionApply = typeof Reflect == 'object' && Reflect.apply || (bind$3 ? call$7.bind(apply$3) : function () {
    return call$7.apply(apply$3, arguments);
  });
  var uncurryThis$i = functionUncurryThis;
  var redefine$6 = redefine$d.exports;
  var regexpExec$2 = regexpExec$3;
  var fails$f = fails$w;
  var wellKnownSymbol$8 = wellKnownSymbol$o;
  var createNonEnumerableProperty$2 = createNonEnumerableProperty$8;
  var SPECIES$2 = wellKnownSymbol$8('species');
  var RegExpPrototype$3 = RegExp.prototype;
  var fixRegexpWellKnownSymbolLogic = function (KEY, exec, FORCED, SHAM) {
    var SYMBOL = wellKnownSymbol$8(KEY);
    var DELEGATES_TO_SYMBOL = !fails$f(function () {
      // String methods call symbol-named RegEp methods
      var O = {};
      O[SYMBOL] = function () {
        return 7;
      };
      return ''[KEY](O) != 7;
    });
    var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL && !fails$f(function () {
      // Symbol-named RegExp methods call .exec
      var execCalled = false;
      var re = /a/;
      if (KEY === 'split') {
        // We can't use real regex here since it causes deoptimization
        // and serious performance degradation in V8
        // https://github.com/zloirock/core-js/issues/306
        re = {}; // RegExp[@@split] doesn't call the regex's exec method, but first creates
        // a new one. We need to return the patched regex when creating the new one.
        re.constructor = {};
        re.constructor[SPECIES$2] = function () {
          return re;
        };
        re.flags = '';
        re[SYMBOL] = /./[SYMBOL];
      }
      re.exec = function () {
        execCalled = true;
        return null;
      };
      re[SYMBOL]('');
      return !execCalled;
    });
    if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || FORCED) {
      var uncurriedNativeRegExpMethod = uncurryThis$i(/./[SYMBOL]);
      var methods = exec(SYMBOL, ''[KEY], function (nativeMethod, regexp, str, arg2, forceStringMethod) {
        var uncurriedNativeMethod = uncurryThis$i(nativeMethod);
        var $exec = regexp.exec;
        if ($exec === regexpExec$2 || $exec === RegExpPrototype$3.exec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return {
              done: true,
              value: uncurriedNativeRegExpMethod(regexp, str, arg2)
            };
          }
          return {
            done: true,
            value: uncurriedNativeMethod(str, regexp, arg2)
          };
        }
        return {
          done: false
        };
      });
      redefine$6(String.prototype, KEY, methods[0]);
      redefine$6(RegExpPrototype$3, SYMBOL, methods[1]);
    }
    if (SHAM) createNonEnumerableProperty$2(RegExpPrototype$3[SYMBOL], 'sham', true);
  };
  var isObject$6 = isObject$h;
  var classof$3 = classofRaw$1;
  var wellKnownSymbol$7 = wellKnownSymbol$o;
  var MATCH$1 = wellKnownSymbol$7('match'); // `IsRegExp` abstract operation
  // https://tc39.es/ecma262/#sec-isregexp
  var isRegexp = function (it) {
    var isRegExp;
    return isObject$6(it) && ((isRegExp = it[MATCH$1]) !== undefined ? !!isRegExp : classof$3(it) == 'RegExp');
  };
  var global$o = global$Y;
  var isConstructor = isConstructor$4;
  var tryToString = tryToString$4;
  var TypeError$9 = global$o.TypeError; // `Assert: IsConstructor(argument) is true`
  var aConstructor$1 = function (argument) {
    if (isConstructor(argument)) return argument;
    throw TypeError$9(tryToString(argument) + ' is not a constructor');
  };
  var anObject$8 = anObject$j;
  var aConstructor = aConstructor$1;
  var wellKnownSymbol$6 = wellKnownSymbol$o;
  var SPECIES$1 = wellKnownSymbol$6('species'); // `SpeciesConstructor` abstract operation
  // https://tc39.es/ecma262/#sec-speciesconstructor
  var speciesConstructor$3 = function (O, defaultConstructor) {
    var C = anObject$8(O).constructor;
    var S;
    return C === undefined || (S = anObject$8(C)[SPECIES$1]) == undefined ? defaultConstructor : aConstructor(S);
  };
  var charAt$2 = stringMultibyte.charAt; // `AdvanceStringIndex` abstract operation
  // https://tc39.es/ecma262/#sec-advancestringindex
  var advanceStringIndex$3 = function (S, index, unicode) {
    return index + (unicode ? charAt$2(S, index).length : 1);
  };
  var global$n = global$Y;
  var call$6 = functionCall;
  var anObject$7 = anObject$j;
  var isCallable$4 = isCallable$m;
  var classof$2 = classofRaw$1;
  var regexpExec$1 = regexpExec$3;
  var TypeError$8 = global$n.TypeError; // `RegExpExec` abstract operation
  // https://tc39.es/ecma262/#sec-regexpexec
  var regexpExecAbstract = function (R, S) {
    var exec = R.exec;
    if (isCallable$4(exec)) {
      var result = call$6(exec, R, S);
      if (result !== null) anObject$7(result);
      return result;
    }
    if (classof$2(R) === 'RegExp') return call$6(regexpExec$1, R, S);
    throw TypeError$8('RegExp#exec called on incompatible receiver');
  };
  var apply$2 = functionApply;
  var call$5 = functionCall;
  var uncurryThis$h = functionUncurryThis;
  var fixRegExpWellKnownSymbolLogic$1 = fixRegexpWellKnownSymbolLogic;
  var isRegExp$2 = isRegexp;
  var anObject$6 = anObject$j;
  var requireObjectCoercible$4 = requireObjectCoercible$8;
  var speciesConstructor$2 = speciesConstructor$3;
  var advanceStringIndex$2 = advanceStringIndex$3;
  var toLength$2 = toLength$4;
  var toString$8 = toString$e;
  var getMethod$2 = getMethod$6;
  var arraySlice$3 = arraySlice$6;
  var callRegExpExec = regexpExecAbstract;
  var regexpExec = regexpExec$3;
  var stickyHelpers$1 = regexpStickyHelpers;
  var fails$e = fails$w;
  var UNSUPPORTED_Y$1 = stickyHelpers$1.UNSUPPORTED_Y;
  var MAX_UINT32 = 0xFFFFFFFF;
  var min$1 = Math.min;
  var $push = [].push;
  var exec$2 = uncurryThis$h(/./.exec);
  var push$1 = uncurryThis$h($push);
  var stringSlice$3 = uncurryThis$h(''.slice); // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  // Weex JS has frozen built-in prototypes, so use try / catch wrapper
  var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails$e(function () {
    // eslint-disable-next-line regexp/no-empty-group -- required for testing
    var re = /(?:)/;
    var originalExec = re.exec;
    re.exec = function () {
      return originalExec.apply(this, arguments);
    };
    var result = 'ab'.split(re);
    return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
  }); // @@split logic
  fixRegExpWellKnownSymbolLogic$1('split', function (SPLIT, nativeSplit, maybeCallNative) {
    var internalSplit;
    if ('abbc'.split(/(b)*/)[1] == 'c' || // eslint-disable-next-line regexp/no-empty-group -- required for testing
    'test'.split(/(?:)/, -1).length != 4 || 'ab'.split(/(?:ab)*/).length != 2 || '.'.split(/(.?)(.?)/).length != 4 || // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
    '.'.split(/()()/).length > 1 || ''.split(/.?/).length) {
      // based on es5-shim implementation, need to rework it
      internalSplit = function (separator, limit) {
        var string = toString$8(requireObjectCoercible$4(this));
        var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
        if (lim === 0) return [];
        if (separator === undefined) return [string]; // If `separator` is not a regex, use native split
        if (!isRegExp$2(separator)) {
          return call$5(nativeSplit, string, separator, lim);
        }
        var output = [];
        var flags = (separator.ignoreCase ? 'i' : '') + (separator.multiline ? 'm' : '') + (separator.unicode ? 'u' : '') + (separator.sticky ? 'y' : '');
        var lastLastIndex = 0; // Make `global` and avoid `lastIndex` issues by working with a copy
        var separatorCopy = new RegExp(separator.source, flags + 'g');
        var match, lastIndex, lastLength;
        while (match = call$5(regexpExec, separatorCopy, string)) {
          lastIndex = separatorCopy.lastIndex;
          if (lastIndex > lastLastIndex) {
            push$1(output, stringSlice$3(string, lastLastIndex, match.index));
            if (match.length > 1 && match.index < string.length) apply$2($push, output, arraySlice$3(match, 1));
            lastLength = match[0].length;
            lastLastIndex = lastIndex;
            if (output.length >= lim) break;
          }
          if (separatorCopy.lastIndex === match.index) separatorCopy.lastIndex++; // Avoid an infinite loop
        }
        if (lastLastIndex === string.length) {
          if (lastLength || !exec$2(separatorCopy, '')) push$1(output, '');
        } else push$1(output, stringSlice$3(string, lastLastIndex));
        return output.length > lim ? arraySlice$3(output, 0, lim) : output;
      }; // Chakra, V8
    } else if ('0'.split(undefined, 0).length) {
      internalSplit = function (separator, limit) {
        return separator === undefined && limit === 0 ? [] : call$5(nativeSplit, this, separator, limit);
      };
    } else internalSplit = nativeSplit;
    return [// `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible$4(this);
      var splitter = separator == undefined ? undefined : getMethod$2(separator, SPLIT);
      return splitter ? call$5(splitter, separator, O, limit) : call$5(internalSplit, toString$8(O), separator, limit);
    }, // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject$6(this);
      var S = toString$8(string);
      var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
      if (res.done) return res.value;
      var C = speciesConstructor$2(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') + (rx.multiline ? 'm' : '') + (rx.unicode ? 'u' : '') + (UNSUPPORTED_Y$1 ? 'g' : 'y'); // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y$1 ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y$1 ? 0 : q;
        var z = callRegExpExec(splitter, UNSUPPORTED_Y$1 ? stringSlice$3(S, q) : S);
        var e;
        if (z === null || (e = min$1(toLength$2(splitter.lastIndex + (UNSUPPORTED_Y$1 ? q : 0)), S.length)) === p) {
          q = advanceStringIndex$2(S, q, unicodeMatching);
        } else {
          push$1(A, stringSlice$3(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push$1(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push$1(A, stringSlice$3(S, p));
      return A;
    }];
  }, !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y$1);
  var whitespaces$4 = '\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u2000\u2001\u2002' + '\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';
  var uncurryThis$g = functionUncurryThis;
  var requireObjectCoercible$3 = requireObjectCoercible$8;
  var toString$7 = toString$e;
  var whitespaces$3 = whitespaces$4;
  var replace$2 = uncurryThis$g(''.replace);
  var whitespace = '[' + whitespaces$3 + ']';
  var ltrim = RegExp('^' + whitespace + whitespace + '*');
  var rtrim = RegExp(whitespace + whitespace + '*$'); // `String.prototype.{ trim, trimStart, trimEnd, trimLeft, trimRight }` methods implementation
  var createMethod$1 = function (TYPE) {
    return function ($this) {
      var string = toString$7(requireObjectCoercible$3($this));
      if (TYPE & 1) string = replace$2(string, ltrim, '');
      if (TYPE & 2) string = replace$2(string, rtrim, '');
      return string;
    };
  };
  var stringTrim = {
    // `String.prototype.{ trimLeft, trimStart }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimstart
    start: createMethod$1(1),
    // `String.prototype.{ trimRight, trimEnd }` methods
    // https://tc39.es/ecma262/#sec-string.prototype.trimend
    end: createMethod$1(2),
    // `String.prototype.trim` method
    // https://tc39.es/ecma262/#sec-string.prototype.trim
    trim: createMethod$1(3)
  };
  var PROPER_FUNCTION_NAME$1 = functionName.PROPER;
  var fails$d = fails$w;
  var whitespaces$2 = whitespaces$4;
  var non = '\u200B\u0085\u180E'; // check that a method works with the correct list
  // of whitespaces and has a correct name
  var stringTrimForced = function (METHOD_NAME) {
    return fails$d(function () {
      return !!whitespaces$2[METHOD_NAME]() || non[METHOD_NAME]() !== non || PROPER_FUNCTION_NAME$1 && whitespaces$2[METHOD_NAME].name !== METHOD_NAME;
    });
  };
  var $$h = _export;
  var $trim = stringTrim.trim;
  var forcedStringTrimMethod = stringTrimForced; // `String.prototype.trim` method
  // https://tc39.es/ecma262/#sec-string.prototype.trim
  $$h({
    target: 'String',
    proto: true,
    forced: forcedStringTrimMethod('trim')
  }, {
    trim: function trim() {
      return $trim(this);
    }
  });
  var $$g = _export;
  var uncurryThis$f = functionUncurryThis;
  var IndexedObject$2 = indexedObject;
  var toIndexedObject$3 = toIndexedObject$b;
  var arrayMethodIsStrict$2 = arrayMethodIsStrict$5;
  var un$Join = uncurryThis$f([].join);
  var ES3_STRINGS = IndexedObject$2 != Object;
  var STRICT_METHOD$2 = arrayMethodIsStrict$2('join', ','); // `Array.prototype.join` method
  // https://tc39.es/ecma262/#sec-array.prototype.join
  $$g({
    target: 'Array',
    proto: true,
    forced: ES3_STRINGS || !STRICT_METHOD$2
  }, {
    join: function join(separator) {
      return un$Join(toIndexedObject$3(this), separator === undefined ? ',' : separator);
    }
  });
  var $$f = _export;
  var global$m = global$Y;
  var toAbsoluteIndex = toAbsoluteIndex$3;
  var toIntegerOrInfinity$2 = toIntegerOrInfinity$6;
  var lengthOfArrayLike$2 = lengthOfArrayLike$9;
  var toObject$5 = toObject$b;
  var arraySpeciesCreate$1 = arraySpeciesCreate$3;
  var createProperty$2 = createProperty$5;
  var arrayMethodHasSpeciesSupport$1 = arrayMethodHasSpeciesSupport$5;
  var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport$1('splice');
  var TypeError$7 = global$m.TypeError;
  var max = Math.max;
  var min = Math.min;
  var MAX_SAFE_INTEGER$1 = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_LENGTH_EXCEEDED = 'Maximum allowed length exceeded'; // `Array.prototype.splice` method
  // https://tc39.es/ecma262/#sec-array.prototype.splice
  // with adding support of @@species
  $$f({
    target: 'Array',
    proto: true,
    forced: !HAS_SPECIES_SUPPORT
  }, {
    splice: function splice(start, deleteCount
    /* , ...items */
    ) {
      var O = toObject$5(this);
      var len = lengthOfArrayLike$2(O);
      var actualStart = toAbsoluteIndex(start, len);
      var argumentsLength = arguments.length;
      var insertCount, actualDeleteCount, A, k, from, to;
      if (argumentsLength === 0) {
        insertCount = actualDeleteCount = 0;
      } else if (argumentsLength === 1) {
        insertCount = 0;
        actualDeleteCount = len - actualStart;
      } else {
        insertCount = argumentsLength - 2;
        actualDeleteCount = min(max(toIntegerOrInfinity$2(deleteCount), 0), len - actualStart);
      }
      if (len + insertCount - actualDeleteCount > MAX_SAFE_INTEGER$1) {
        throw TypeError$7(MAXIMUM_ALLOWED_LENGTH_EXCEEDED);
      }
      A = arraySpeciesCreate$1(O, actualDeleteCount);
      for (k = 0; k < actualDeleteCount; k++) {
        from = actualStart + k;
        if (from in O) createProperty$2(A, k, O[from]);
      }
      A.length = actualDeleteCount;
      if (insertCount < actualDeleteCount) {
        for (k = actualStart; k < len - actualDeleteCount; k++) {
          from = k + actualDeleteCount;
          to = k + insertCount;
          if (from in O) O[to] = O[from];else delete O[to];
        }
        for (k = len; k > len - actualDeleteCount + insertCount; k--) delete O[k - 1];
      } else if (insertCount > actualDeleteCount) {
        for (k = len - actualDeleteCount; k > actualStart; k--) {
          from = k + actualDeleteCount - 1;
          to = k + insertCount - 1;
          if (from in O) O[to] = O[from];else delete O[to];
        }
      }
      for (k = 0; k < insertCount; k++) {
        O[k + actualStart] = arguments[k + 2];
      }
      O.length = len - actualDeleteCount + insertCount;
      return A;
    }
  });
  var DESCRIPTORS$7 = descriptors;
  var FUNCTION_NAME_EXISTS = functionName.EXISTS;
  var uncurryThis$e = functionUncurryThis;
  var defineProperty$5 = objectDefineProperty.f;
  var FunctionPrototype = Function.prototype;
  var functionToString = uncurryThis$e(FunctionPrototype.toString);
  var nameRE = /^\s*function ([^ (]*)/;
  var regExpExec$2 = uncurryThis$e(nameRE.exec);
  var NAME = 'name'; // Function instances `.name` property
  // https://tc39.es/ecma262/#sec-function-instances-name
  if (DESCRIPTORS$7 && !FUNCTION_NAME_EXISTS) {
    defineProperty$5(FunctionPrototype, NAME, {
      configurable: true,
      get: function () {
        try {
          return regExpExec$2(nameRE, functionToString(this))[1];
        } catch (error) {
          return '';
        }
      }
    });
  }
  var global$l = global$Y;
  var path$1 = global$l;
  var wellKnownSymbolWrapped = {};
  var wellKnownSymbol$5 = wellKnownSymbol$o;
  wellKnownSymbolWrapped.f = wellKnownSymbol$5;
  var path = path$1;
  var hasOwn$6 = hasOwnProperty_1;
  var wrappedWellKnownSymbolModule$1 = wellKnownSymbolWrapped;
  var defineProperty$4 = objectDefineProperty.f;
  var defineWellKnownSymbol$2 = function (NAME) {
    var Symbol = path.Symbol || (path.Symbol = {});
    if (!hasOwn$6(Symbol, NAME)) defineProperty$4(Symbol, NAME, {
      value: wrappedWellKnownSymbolModule$1.f(NAME)
    });
  };
  var defineWellKnownSymbol$1 = defineWellKnownSymbol$2; // `Symbol.iterator` well-known symbol
  // https://tc39.es/ecma262/#sec-symbol.iterator
  defineWellKnownSymbol$1('iterator');
  var $$e = _export;
  var global$k = global$Y;
  var getBuiltIn$1 = getBuiltIn$8;
  var apply$1 = functionApply;
  var call$4 = functionCall;
  var uncurryThis$d = functionUncurryThis;
  var DESCRIPTORS$6 = descriptors;
  var NATIVE_SYMBOL$1 = nativeSymbol;
  var fails$c = fails$w;
  var hasOwn$5 = hasOwnProperty_1;
  var isArray$2 = isArray$5;
  var isCallable$3 = isCallable$m;
  var isObject$5 = isObject$h;
  var isPrototypeOf$5 = objectIsPrototypeOf;
  var isSymbol$1 = isSymbol$4;
  var anObject$5 = anObject$j;
  var toObject$4 = toObject$b;
  var toIndexedObject$2 = toIndexedObject$b;
  var toPropertyKey = toPropertyKey$4;
  var $toString$1 = toString$e;
  var createPropertyDescriptor = createPropertyDescriptor$5;
  var nativeObjectCreate = objectCreate;
  var objectKeys$1 = objectKeys$3;
  var getOwnPropertyNamesModule = objectGetOwnPropertyNames;
  var getOwnPropertyNamesExternal = objectGetOwnPropertyNamesExternal;
  var getOwnPropertySymbolsModule$1 = objectGetOwnPropertySymbols;
  var getOwnPropertyDescriptorModule$1 = objectGetOwnPropertyDescriptor;
  var definePropertyModule = objectDefineProperty;
  var propertyIsEnumerableModule$1 = objectPropertyIsEnumerable;
  var arraySlice$2 = arraySlice$6;
  var redefine$5 = redefine$d.exports;
  var shared = shared$5.exports;
  var sharedKey = sharedKey$4;
  var hiddenKeys = hiddenKeys$6;
  var uid = uid$4;
  var wellKnownSymbol$4 = wellKnownSymbol$o;
  var wrappedWellKnownSymbolModule = wellKnownSymbolWrapped;
  var defineWellKnownSymbol = defineWellKnownSymbol$2;
  var setToStringTag$1 = setToStringTag$5;
  var InternalStateModule$3 = internalState;
  var $forEach$1 = arrayIteration.forEach;
  var HIDDEN = sharedKey('hidden');
  var SYMBOL = 'Symbol';
  var PROTOTYPE = 'prototype';
  var TO_PRIMITIVE = wellKnownSymbol$4('toPrimitive');
  var setInternalState$3 = InternalStateModule$3.set;
  var getInternalState$2 = InternalStateModule$3.getterFor(SYMBOL);
  var ObjectPrototype = Object[PROTOTYPE];
  var $Symbol = global$k.Symbol;
  var SymbolPrototype$1 = $Symbol && $Symbol[PROTOTYPE];
  var TypeError$6 = global$k.TypeError;
  var QObject = global$k.QObject;
  var $stringify = getBuiltIn$1('JSON', 'stringify');
  var nativeGetOwnPropertyDescriptor$1 = getOwnPropertyDescriptorModule$1.f;
  var nativeDefineProperty = definePropertyModule.f;
  var nativeGetOwnPropertyNames = getOwnPropertyNamesExternal.f;
  var nativePropertyIsEnumerable = propertyIsEnumerableModule$1.f;
  var push = uncurryThis$d([].push);
  var AllSymbols = shared('symbols');
  var ObjectPrototypeSymbols = shared('op-symbols');
  var StringToSymbolRegistry = shared('string-to-symbol-registry');
  var SymbolToStringRegistry = shared('symbol-to-string-registry');
  var WellKnownSymbolsStore = shared('wks'); // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var USE_SETTER = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDescriptor = DESCRIPTORS$6 && fails$c(function () {
    return nativeObjectCreate(nativeDefineProperty({}, 'a', {
      get: function () {
        return nativeDefineProperty(this, 'a', {
          value: 7
        }).a;
      }
    })).a != 7;
  }) ? function (O, P, Attributes) {
    var ObjectPrototypeDescriptor = nativeGetOwnPropertyDescriptor$1(ObjectPrototype, P);
    if (ObjectPrototypeDescriptor) delete ObjectPrototype[P];
    nativeDefineProperty(O, P, Attributes);
    if (ObjectPrototypeDescriptor && O !== ObjectPrototype) {
      nativeDefineProperty(ObjectPrototype, P, ObjectPrototypeDescriptor);
    }
  } : nativeDefineProperty;
  var wrap = function (tag, description) {
    var symbol = AllSymbols[tag] = nativeObjectCreate(SymbolPrototype$1);
    setInternalState$3(symbol, {
      type: SYMBOL,
      tag: tag,
      description: description
    });
    if (!DESCRIPTORS$6) symbol.description = description;
    return symbol;
  };
  var $defineProperty = function defineProperty(O, P, Attributes) {
    if (O === ObjectPrototype) $defineProperty(ObjectPrototypeSymbols, P, Attributes);
    anObject$5(O);
    var key = toPropertyKey(P);
    anObject$5(Attributes);
    if (hasOwn$5(AllSymbols, key)) {
      if (!Attributes.enumerable) {
        if (!hasOwn$5(O, HIDDEN)) nativeDefineProperty(O, HIDDEN, createPropertyDescriptor(1, {}));
        O[HIDDEN][key] = true;
      } else {
        if (hasOwn$5(O, HIDDEN) && O[HIDDEN][key]) O[HIDDEN][key] = false;
        Attributes = nativeObjectCreate(Attributes, {
          enumerable: createPropertyDescriptor(0, false)
        });
      }
      return setSymbolDescriptor(O, key, Attributes);
    }
    return nativeDefineProperty(O, key, Attributes);
  };
  var $defineProperties = function defineProperties(O, Properties) {
    anObject$5(O);
    var properties = toIndexedObject$2(Properties);
    var keys = objectKeys$1(properties).concat($getOwnPropertySymbols(properties));
    $forEach$1(keys, function (key) {
      if (!DESCRIPTORS$6 || call$4($propertyIsEnumerable, properties, key)) $defineProperty(O, key, properties[key]);
    });
    return O;
  };
  var $create = function create(O, Properties) {
    return Properties === undefined ? nativeObjectCreate(O) : $defineProperties(nativeObjectCreate(O), Properties);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(V) {
    var P = toPropertyKey(V);
    var enumerable = call$4(nativePropertyIsEnumerable, this, P);
    if (this === ObjectPrototype && hasOwn$5(AllSymbols, P) && !hasOwn$5(ObjectPrototypeSymbols, P)) return false;
    return enumerable || !hasOwn$5(this, P) || !hasOwn$5(AllSymbols, P) || hasOwn$5(this, HIDDEN) && this[HIDDEN][P] ? enumerable : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(O, P) {
    var it = toIndexedObject$2(O);
    var key = toPropertyKey(P);
    if (it === ObjectPrototype && hasOwn$5(AllSymbols, key) && !hasOwn$5(ObjectPrototypeSymbols, key)) return;
    var descriptor = nativeGetOwnPropertyDescriptor$1(it, key);
    if (descriptor && hasOwn$5(AllSymbols, key) && !(hasOwn$5(it, HIDDEN) && it[HIDDEN][key])) {
      descriptor.enumerable = true;
    }
    return descriptor;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(O) {
    var names = nativeGetOwnPropertyNames(toIndexedObject$2(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (!hasOwn$5(AllSymbols, key) && !hasOwn$5(hiddenKeys, key)) push(result, key);
    });
    return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(O) {
    var IS_OBJECT_PROTOTYPE = O === ObjectPrototype;
    var names = nativeGetOwnPropertyNames(IS_OBJECT_PROTOTYPE ? ObjectPrototypeSymbols : toIndexedObject$2(O));
    var result = [];
    $forEach$1(names, function (key) {
      if (hasOwn$5(AllSymbols, key) && (!IS_OBJECT_PROTOTYPE || hasOwn$5(ObjectPrototype, key))) {
        push(result, AllSymbols[key]);
      }
    });
    return result;
  }; // `Symbol` constructor
  // https://tc39.es/ecma262/#sec-symbol-constructor
  if (!NATIVE_SYMBOL$1) {
    $Symbol = function Symbol() {
      if (isPrototypeOf$5(SymbolPrototype$1, this)) throw TypeError$6('Symbol is not a constructor');
      var description = !arguments.length || arguments[0] === undefined ? undefined : $toString$1(arguments[0]);
      var tag = uid(description);
      var setter = function (value) {
        if (this === ObjectPrototype) call$4(setter, ObjectPrototypeSymbols, value);
        if (hasOwn$5(this, HIDDEN) && hasOwn$5(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDescriptor(this, tag, createPropertyDescriptor(1, value));
      };
      if (DESCRIPTORS$6 && USE_SETTER) setSymbolDescriptor(ObjectPrototype, tag, {
        configurable: true,
        set: setter
      });
      return wrap(tag, description);
    };
    SymbolPrototype$1 = $Symbol[PROTOTYPE];
    redefine$5(SymbolPrototype$1, 'toString', function toString() {
      return getInternalState$2(this).tag;
    });
    redefine$5($Symbol, 'withoutSetter', function (description) {
      return wrap(uid(description), description);
    });
    propertyIsEnumerableModule$1.f = $propertyIsEnumerable;
    definePropertyModule.f = $defineProperty;
    getOwnPropertyDescriptorModule$1.f = $getOwnPropertyDescriptor;
    getOwnPropertyNamesModule.f = getOwnPropertyNamesExternal.f = $getOwnPropertyNames;
    getOwnPropertySymbolsModule$1.f = $getOwnPropertySymbols;
    wrappedWellKnownSymbolModule.f = function (name) {
      return wrap(wellKnownSymbol$4(name), name);
    };
    if (DESCRIPTORS$6) {
      // https://github.com/tc39/proposal-Symbol-description
      nativeDefineProperty(SymbolPrototype$1, 'description', {
        configurable: true,
        get: function description() {
          return getInternalState$2(this).description;
        }
      });
      {
        redefine$5(ObjectPrototype, 'propertyIsEnumerable', $propertyIsEnumerable, {
          unsafe: true
        });
      }
    }
  }
  $$e({
    global: true,
    wrap: true,
    forced: !NATIVE_SYMBOL$1,
    sham: !NATIVE_SYMBOL$1
  }, {
    Symbol: $Symbol
  });
  $forEach$1(objectKeys$1(WellKnownSymbolsStore), function (name) {
    defineWellKnownSymbol(name);
  });
  $$e({
    target: SYMBOL,
    stat: true,
    forced: !NATIVE_SYMBOL$1
  }, {
    // `Symbol.for` method
    // https://tc39.es/ecma262/#sec-symbol.for
    'for': function (key) {
      var string = $toString$1(key);
      if (hasOwn$5(StringToSymbolRegistry, string)) return StringToSymbolRegistry[string];
      var symbol = $Symbol(string);
      StringToSymbolRegistry[string] = symbol;
      SymbolToStringRegistry[symbol] = string;
      return symbol;
    },
    // `Symbol.keyFor` method
    // https://tc39.es/ecma262/#sec-symbol.keyfor
    keyFor: function keyFor(sym) {
      if (!isSymbol$1(sym)) throw TypeError$6(sym + ' is not a symbol');
      if (hasOwn$5(SymbolToStringRegistry, sym)) return SymbolToStringRegistry[sym];
    },
    useSetter: function () {
      USE_SETTER = true;
    },
    useSimple: function () {
      USE_SETTER = false;
    }
  });
  $$e({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL$1,
    sham: !DESCRIPTORS$6
  }, {
    // `Object.create` method
    // https://tc39.es/ecma262/#sec-object.create
    create: $create,
    // `Object.defineProperty` method
    // https://tc39.es/ecma262/#sec-object.defineproperty
    defineProperty: $defineProperty,
    // `Object.defineProperties` method
    // https://tc39.es/ecma262/#sec-object.defineproperties
    defineProperties: $defineProperties,
    // `Object.getOwnPropertyDescriptor` method
    // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor
  });
  $$e({
    target: 'Object',
    stat: true,
    forced: !NATIVE_SYMBOL$1
  }, {
    // `Object.getOwnPropertyNames` method
    // https://tc39.es/ecma262/#sec-object.getownpropertynames
    getOwnPropertyNames: $getOwnPropertyNames,
    // `Object.getOwnPropertySymbols` method
    // https://tc39.es/ecma262/#sec-object.getownpropertysymbols
    getOwnPropertySymbols: $getOwnPropertySymbols
  }); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  $$e({
    target: 'Object',
    stat: true,
    forced: fails$c(function () {
      getOwnPropertySymbolsModule$1.f(1);
    })
  }, {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return getOwnPropertySymbolsModule$1.f(toObject$4(it));
    }
  }); // `JSON.stringify` method behavior with symbols
  // https://tc39.es/ecma262/#sec-json.stringify
  if ($stringify) {
    var FORCED_JSON_STRINGIFY = !NATIVE_SYMBOL$1 || fails$c(function () {
      var symbol = $Symbol(); // MS Edge converts symbol values to JSON as {}
      return $stringify([symbol]) != '[null]' // WebKit converts symbol values to JSON as null
      || $stringify({
        a: symbol
      }) != '{}' // V8 throws on boxed symbols
      || $stringify(Object(symbol)) != '{}';
    });
    $$e({
      target: 'JSON',
      stat: true,
      forced: FORCED_JSON_STRINGIFY
    }, {
      // eslint-disable-next-line no-unused-vars -- required for `.length`
      stringify: function stringify(it, replacer, space) {
        var args = arraySlice$2(arguments);
        var $replacer = replacer;
        if (!isObject$5(replacer) && it === undefined || isSymbol$1(it)) return; // IE8 returns string on undefined
        if (!isArray$2(replacer)) replacer = function (key, value) {
          if (isCallable$3($replacer)) value = call$4($replacer, this, key, value);
          if (!isSymbol$1(value)) return value;
        };
        args[1] = replacer;
        return apply$1($stringify, null, args);
      }
    });
  } // `Symbol.prototype[@@toPrimitive]` method
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
  if (!SymbolPrototype$1[TO_PRIMITIVE]) {
    var valueOf = SymbolPrototype$1.valueOf; // eslint-disable-next-line no-unused-vars -- required for .length
    redefine$5(SymbolPrototype$1, TO_PRIMITIVE, function (hint) {
      // TODO: improve hint logic
      return call$4(valueOf, this);
    });
  } // `Symbol.prototype[@@toStringTag]` property
  // https://tc39.es/ecma262/#sec-symbol.prototype-@@tostringtag
  setToStringTag$1($Symbol, SYMBOL);
  hiddenKeys[HIDDEN] = true;
  var $$d = _export;
  var DESCRIPTORS$5 = descriptors;
  var global$j = global$Y;
  var uncurryThis$c = functionUncurryThis;
  var hasOwn$4 = hasOwnProperty_1;
  var isCallable$2 = isCallable$m;
  var isPrototypeOf$4 = objectIsPrototypeOf;
  var toString$6 = toString$e;
  var defineProperty$3 = objectDefineProperty.f;
  var copyConstructorProperties = copyConstructorProperties$2;
  var NativeSymbol = global$j.Symbol;
  var SymbolPrototype = NativeSymbol && NativeSymbol.prototype;
  if (DESCRIPTORS$5 && isCallable$2(NativeSymbol) && (!('description' in SymbolPrototype) || // Safari 12 bug
  NativeSymbol().description !== undefined)) {
    var EmptyStringDescriptionStore = {}; // wrap Symbol constructor for correct work with undefined description
    var SymbolWrapper = function Symbol() {
      var description = arguments.length < 1 || arguments[0] === undefined ? undefined : toString$6(arguments[0]);
      var result = isPrototypeOf$4(SymbolPrototype, this) ? new NativeSymbol(description) // in Edge 13, String(Symbol(undefined)) === 'Symbol(undefined)'
      : description === undefined ? NativeSymbol() : NativeSymbol(description);
      if (description === '') EmptyStringDescriptionStore[result] = true;
      return result;
    };
    copyConstructorProperties(SymbolWrapper, NativeSymbol);
    SymbolWrapper.prototype = SymbolPrototype;
    SymbolPrototype.constructor = SymbolWrapper;
    var NATIVE_SYMBOL = String(NativeSymbol('test')) == 'Symbol(test)';
    var symbolToString = uncurryThis$c(SymbolPrototype.toString);
    var symbolValueOf = uncurryThis$c(SymbolPrototype.valueOf);
    var regexp = /^Symbol\((.*)\)[^)]+$/;
    var replace$1 = uncurryThis$c(''.replace);
    var stringSlice$2 = uncurryThis$c(''.slice);
    defineProperty$3(SymbolPrototype, 'description', {
      configurable: true,
      get: function description() {
        var symbol = symbolValueOf(this);
        var string = symbolToString(symbol);
        if (hasOwn$4(EmptyStringDescriptionStore, symbol)) return '';
        var desc = NATIVE_SYMBOL ? stringSlice$2(string, 7, -1) : replace$1(string, regexp, '$1');
        return desc === '' ? undefined : desc;
      }
    });
    $$d({
      global: true,
      forced: true
    }, {
      Symbol: SymbolWrapper
    });
  }
  var $$c = _export;
  var global$i = global$Y;
  var fails$b = fails$w;
  var isArray$1 = isArray$5;
  var isObject$4 = isObject$h;
  var toObject$3 = toObject$b;
  var lengthOfArrayLike$1 = lengthOfArrayLike$9;
  var createProperty$1 = createProperty$5;
  var arraySpeciesCreate = arraySpeciesCreate$3;
  var arrayMethodHasSpeciesSupport = arrayMethodHasSpeciesSupport$5;
  var wellKnownSymbol$3 = wellKnownSymbol$o;
  var V8_VERSION$1 = engineV8Version;
  var IS_CONCAT_SPREADABLE = wellKnownSymbol$3('isConcatSpreadable');
  var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF;
  var MAXIMUM_ALLOWED_INDEX_EXCEEDED = 'Maximum allowed index exceeded';
  var TypeError$5 = global$i.TypeError; // We can't use this feature detection in V8 since it causes
  // deoptimization and serious performance degradation
  // https://github.com/zloirock/core-js/issues/679
  var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION$1 >= 51 || !fails$b(function () {
    var array = [];
    array[IS_CONCAT_SPREADABLE] = false;
    return array.concat()[0] !== array;
  });
  var SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('concat');
  var isConcatSpreadable = function (O) {
    if (!isObject$4(O)) return false;
    var spreadable = O[IS_CONCAT_SPREADABLE];
    return spreadable !== undefined ? !!spreadable : isArray$1(O);
  };
  var FORCED$5 = !IS_CONCAT_SPREADABLE_SUPPORT || !SPECIES_SUPPORT; // `Array.prototype.concat` method
  // https://tc39.es/ecma262/#sec-array.prototype.concat
  // with adding support of @@isConcatSpreadable and @@species
  $$c({
    target: 'Array',
    proto: true,
    forced: FORCED$5
  }, {
    // eslint-disable-next-line no-unused-vars -- required for `.length`
    concat: function concat(arg) {
      var O = toObject$3(this);
      var A = arraySpeciesCreate(O, 0);
      var n = 0;
      var i, k, length, len, E;
      for (i = -1, length = arguments.length; i < length; i++) {
        E = i === -1 ? O : arguments[i];
        if (isConcatSpreadable(E)) {
          len = lengthOfArrayLike$1(E);
          if (n + len > MAX_SAFE_INTEGER) throw TypeError$5(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          for (k = 0; k < len; k++, n++) if (k in E) createProperty$1(A, n, E[k]);
        } else {
          if (n >= MAX_SAFE_INTEGER) throw TypeError$5(MAXIMUM_ALLOWED_INDEX_EXCEEDED);
          createProperty$1(A, n++, E);
        }
      }
      A.length = n;
      return A;
    }
  });
  var DESCRIPTORS$4 = descriptors;
  var global$h = global$Y;
  var uncurryThis$b = functionUncurryThis;
  var isForced$2 = isForced_1;
  var inheritIfRequired$1 = inheritIfRequired$3;
  var createNonEnumerableProperty$1 = createNonEnumerableProperty$8;
  var defineProperty$2 = objectDefineProperty.f;
  var getOwnPropertyNames$1 = objectGetOwnPropertyNames.f;
  var isPrototypeOf$3 = objectIsPrototypeOf;
  var isRegExp$1 = isRegexp;
  var toString$5 = toString$e;
  var regExpFlags$2 = regexpFlags$1;
  var stickyHelpers = regexpStickyHelpers;
  var redefine$4 = redefine$d.exports;
  var fails$a = fails$w;
  var hasOwn$3 = hasOwnProperty_1;
  var enforceInternalState = internalState.enforce;
  var setSpecies$1 = setSpecies$3;
  var wellKnownSymbol$2 = wellKnownSymbol$o;
  var UNSUPPORTED_DOT_ALL = regexpUnsupportedDotAll;
  var UNSUPPORTED_NCG = regexpUnsupportedNcg;
  var MATCH = wellKnownSymbol$2('match');
  var NativeRegExp = global$h.RegExp;
  var RegExpPrototype$2 = NativeRegExp.prototype;
  var SyntaxError = global$h.SyntaxError;
  var getFlags$2 = uncurryThis$b(regExpFlags$2);
  var exec$1 = uncurryThis$b(RegExpPrototype$2.exec);
  var charAt$1 = uncurryThis$b(''.charAt);
  var replace = uncurryThis$b(''.replace);
  var stringIndexOf$1 = uncurryThis$b(''.indexOf);
  var stringSlice$1 = uncurryThis$b(''.slice); // TODO: Use only propper RegExpIdentifierName
  var IS_NCG = /^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/;
  var re1 = /a/g;
  var re2 = /a/g; // "new" should create a new object, old webkit bug
  var CORRECT_NEW = new NativeRegExp(re1) !== re1;
  var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
  var BASE_FORCED = DESCRIPTORS$4 && (!CORRECT_NEW || UNSUPPORTED_Y || UNSUPPORTED_DOT_ALL || UNSUPPORTED_NCG || fails$a(function () {
    re2[MATCH] = false; // RegExp constructor can alter flags and IsRegExp works correct with @@match
    return NativeRegExp(re1) != re1 || NativeRegExp(re2) == re2 || NativeRegExp(re1, 'i') != '/a/i';
  }));
  var handleDotAll = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var brackets = false;
    var chr;
    for (; index <= length; index++) {
      chr = charAt$1(string, index);
      if (chr === '\\') {
        result += chr + charAt$1(string, ++index);
        continue;
      }
      if (!brackets && chr === '.') {
        result += '[\\s\\S]';
      } else {
        if (chr === '[') {
          brackets = true;
        } else if (chr === ']') {
          brackets = false;
        }
        result += chr;
      }
    }
    return result;
  };
  var handleNCG = function (string) {
    var length = string.length;
    var index = 0;
    var result = '';
    var named = [];
    var names = {};
    var brackets = false;
    var ncg = false;
    var groupid = 0;
    var groupname = '';
    var chr;
    for (; index <= length; index++) {
      chr = charAt$1(string, index);
      if (chr === '\\') {
        chr = chr + charAt$1(string, ++index);
      } else if (chr === ']') {
        brackets = false;
      } else if (!brackets) switch (true) {
        case chr === '[':
          brackets = true;
          break;
        case chr === '(':
          if (exec$1(IS_NCG, stringSlice$1(string, index + 1))) {
            index += 2;
            ncg = true;
          }
          result += chr;
          groupid++;
          continue;
        case chr === '>' && ncg:
          if (groupname === '' || hasOwn$3(names, groupname)) {
            throw new SyntaxError('Invalid capture group name');
          }
          names[groupname] = true;
          named[named.length] = [groupname, groupid];
          ncg = false;
          groupname = '';
          continue;
      }
      if (ncg) groupname += chr;else result += chr;
    }
    return [result, named];
  }; // `RegExp` constructor
  // https://tc39.es/ecma262/#sec-regexp-constructor
  if (isForced$2('RegExp', BASE_FORCED)) {
    var RegExpWrapper = function RegExp(pattern, flags) {
      var thisIsRegExp = isPrototypeOf$3(RegExpPrototype$2, this);
      var patternIsRegExp = isRegExp$1(pattern);
      var flagsAreUndefined = flags === undefined;
      var groups = [];
      var rawPattern = pattern;
      var rawFlags, dotAll, sticky, handled, result, state;
      if (!thisIsRegExp && patternIsRegExp && flagsAreUndefined && pattern.constructor === RegExpWrapper) {
        return pattern;
      }
      if (patternIsRegExp || isPrototypeOf$3(RegExpPrototype$2, pattern)) {
        pattern = pattern.source;
        if (flagsAreUndefined) flags = 'flags' in rawPattern ? rawPattern.flags : getFlags$2(rawPattern);
      }
      pattern = pattern === undefined ? '' : toString$5(pattern);
      flags = flags === undefined ? '' : toString$5(flags);
      rawPattern = pattern;
      if (UNSUPPORTED_DOT_ALL && 'dotAll' in re1) {
        dotAll = !!flags && stringIndexOf$1(flags, 's') > -1;
        if (dotAll) flags = replace(flags, /s/g, '');
      }
      rawFlags = flags;
      if (UNSUPPORTED_Y && 'sticky' in re1) {
        sticky = !!flags && stringIndexOf$1(flags, 'y') > -1;
        if (sticky) flags = replace(flags, /y/g, '');
      }
      if (UNSUPPORTED_NCG) {
        handled = handleNCG(pattern);
        pattern = handled[0];
        groups = handled[1];
      }
      result = inheritIfRequired$1(NativeRegExp(pattern, flags), thisIsRegExp ? this : RegExpPrototype$2, RegExpWrapper);
      if (dotAll || sticky || groups.length) {
        state = enforceInternalState(result);
        if (dotAll) {
          state.dotAll = true;
          state.raw = RegExpWrapper(handleDotAll(pattern), rawFlags);
        }
        if (sticky) state.sticky = true;
        if (groups.length) state.groups = groups;
      }
      if (pattern !== rawPattern) try {
        // fails in old engines, but we have no alternatives for unsupported regex syntax
        createNonEnumerableProperty$1(result, 'source', rawPattern === '' ? '(?:)' : rawPattern);
      } catch (error) {
        /* empty */
      }
      return result;
    };
    var proxy = function (key) {
      key in RegExpWrapper || defineProperty$2(RegExpWrapper, key, {
        configurable: true,
        get: function () {
          return NativeRegExp[key];
        },
        set: function (it) {
          NativeRegExp[key] = it;
        }
      });
    };
    for (var keys$1 = getOwnPropertyNames$1(NativeRegExp), index = 0; keys$1.length > index;) {
      proxy(keys$1[index++]);
    }
    RegExpPrototype$2.constructor = RegExpWrapper;
    RegExpWrapper.prototype = RegExpPrototype$2;
    redefine$4(global$h, 'RegExp', RegExpWrapper);
  } // https://tc39.es/ecma262/#sec-get-regexp-@@species
  setSpecies$1('RegExp');
  var uncurryThis$a = functionUncurryThis;
  var PROPER_FUNCTION_NAME = functionName.PROPER;
  var redefine$3 = redefine$d.exports;
  var anObject$4 = anObject$j;
  var isPrototypeOf$2 = objectIsPrototypeOf;
  var $toString = toString$e;
  var fails$9 = fails$w;
  var regExpFlags$1 = regexpFlags$1;
  var TO_STRING = 'toString';
  var RegExpPrototype$1 = RegExp.prototype;
  var n$ToString = RegExpPrototype$1[TO_STRING];
  var getFlags$1 = uncurryThis$a(regExpFlags$1);
  var NOT_GENERIC = fails$9(function () {
    return n$ToString.call({
      source: 'a',
      flags: 'b'
    }) != '/a/b';
  }); // FF44- RegExp#toString has a wrong name
  var INCORRECT_NAME = PROPER_FUNCTION_NAME && n$ToString.name != TO_STRING; // `RegExp.prototype.toString` method
  // https://tc39.es/ecma262/#sec-regexp.prototype.tostring
  if (NOT_GENERIC || INCORRECT_NAME) {
    redefine$3(RegExp.prototype, TO_STRING, function toString() {
      var R = anObject$4(this);
      var p = $toString(R.source);
      var rf = R.flags;
      var f = $toString(rf === undefined && isPrototypeOf$2(RegExpPrototype$1, R) && !('flags' in RegExpPrototype$1) ? getFlags$1(R) : rf);
      return '/' + p + '/' + f;
    }, {
      unsafe: true
    });
  }
  var DESCRIPTORS$3 = descriptors;
  var uncurryThis$9 = functionUncurryThis;
  var call$3 = functionCall;
  var fails$8 = fails$w;
  var objectKeys = objectKeys$3;
  var getOwnPropertySymbolsModule = objectGetOwnPropertySymbols;
  var propertyIsEnumerableModule = objectPropertyIsEnumerable;
  var toObject$2 = toObject$b;
  var IndexedObject$1 = indexedObject; // eslint-disable-next-line es/no-object-assign -- safe
  var $assign = Object.assign; // eslint-disable-next-line es/no-object-defineproperty -- required for testing
  var defineProperty$1 = Object.defineProperty;
  var concat = uncurryThis$9([].concat); // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  var objectAssign = !$assign || fails$8(function () {
    // should have correct order of operations (Edge bug)
    if (DESCRIPTORS$3 && $assign({
      b: 1
    }, $assign(defineProperty$1({}, 'a', {
      enumerable: true,
      get: function () {
        defineProperty$1(this, 'b', {
          value: 3,
          enumerable: false
        });
      }
    }), {
      b: 2
    })).b !== 1) return true; // should work with symbols and should have deterministic property order (V8 bug)
    var A = {};
    var B = {}; // eslint-disable-next-line es/no-symbol -- safe
    var symbol = Symbol();
    var alphabet = 'abcdefghijklmnopqrst';
    A[symbol] = 7;
    alphabet.split('').forEach(function (chr) {
      B[chr] = chr;
    });
    return $assign({}, A)[symbol] != 7 || objectKeys($assign({}, B)).join('') != alphabet;
  }) ? function assign(target, source) {
    // eslint-disable-line no-unused-vars -- required for `.length`
    var T = toObject$2(target);
    var argumentsLength = arguments.length;
    var index = 1;
    var getOwnPropertySymbols = getOwnPropertySymbolsModule.f;
    var propertyIsEnumerable = propertyIsEnumerableModule.f;
    while (argumentsLength > index) {
      var S = IndexedObject$1(arguments[index++]);
      var keys = getOwnPropertySymbols ? concat(objectKeys(S), getOwnPropertySymbols(S)) : objectKeys(S);
      var length = keys.length;
      var j = 0;
      var key;
      while (length > j) {
        key = keys[j++];
        if (!DESCRIPTORS$3 || call$3(propertyIsEnumerable, S, key)) T[key] = S[key];
      }
    }
    return T;
  } : $assign;
  var $$b = _export;
  var assign = objectAssign; // `Object.assign` method
  // https://tc39.es/ecma262/#sec-object.assign
  // eslint-disable-next-line es/no-object-assign -- required for testing
  $$b({
    target: 'Object',
    stat: true,
    forced: Object.assign !== assign
  }, {
    assign: assign
  });
  var global$g = global$Y;
  var fails$7 = fails$w;
  var uncurryThis$8 = functionUncurryThis;
  var toString$4 = toString$e;
  var trim$3 = stringTrim.trim;
  var whitespaces$1 = whitespaces$4;
  var $parseInt$1 = global$g.parseInt;
  var Symbol$2 = global$g.Symbol;
  var ITERATOR$1 = Symbol$2 && Symbol$2.iterator;
  var hex$1 = /^[+-]?0x/i;
  var exec = uncurryThis$8(hex$1.exec);
  var FORCED$4 = $parseInt$1(whitespaces$1 + '08') !== 8 || $parseInt$1(whitespaces$1 + '0x16') !== 22 // MS Edge 18- broken with boxed symbols
  || ITERATOR$1 && !fails$7(function () {
    $parseInt$1(Object(ITERATOR$1));
  }); // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  var numberParseInt = FORCED$4 ? function parseInt(string, radix) {
    var S = trim$3(toString$4(string));
    return $parseInt$1(S, radix >>> 0 || (exec(hex$1, S) ? 16 : 10));
  } : $parseInt$1;
  var $$a = _export;
  var $parseInt = numberParseInt; // `parseInt` method
  // https://tc39.es/ecma262/#sec-parseint-string-radix
  $$a({
    global: true,
    forced: parseInt != $parseInt
  }, {
    parseInt: $parseInt
  });
  var global$f = global$Y;
  var nativePromiseConstructor = global$f.Promise;
  var userAgent$2 = engineUserAgent;
  var engineIsIos = /(?:ipad|iphone|ipod).*applewebkit/i.test(userAgent$2);
  var classof$1 = classofRaw$1;
  var global$e = global$Y;
  var engineIsNode = classof$1(global$e.process) == 'process';
  var global$d = global$Y;
  var apply = functionApply;
  var bind$2 = functionBindContext;
  var isCallable$1 = isCallable$m;
  var hasOwn$2 = hasOwnProperty_1;
  var fails$6 = fails$w;
  var html = html$2;
  var arraySlice$1 = arraySlice$6;
  var createElement = documentCreateElement$2;
  var IS_IOS$1 = engineIsIos;
  var IS_NODE$3 = engineIsNode;
  var set$2 = global$d.setImmediate;
  var clear = global$d.clearImmediate;
  var process$2 = global$d.process;
  var Dispatch$1 = global$d.Dispatch;
  var Function$1 = global$d.Function;
  var MessageChannel = global$d.MessageChannel;
  var String$2 = global$d.String;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var location, defer, channel, port;
  try {
    // Deno throws a ReferenceError on `location` access without `--location` flag
    location = global$d.location;
  } catch (error) {
    /* empty */
  }
  var run = function (id) {
    if (hasOwn$2(queue, id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var runner = function (id) {
    return function () {
      run(id);
    };
  };
  var listener = function (event) {
    run(event.data);
  };
  var post = function (id) {
    // old engines have not location.origin
    global$d.postMessage(String$2(id), location.protocol + '//' + location.host);
  }; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!set$2 || !clear) {
    set$2 = function setImmediate(fn) {
      var args = arraySlice$1(arguments, 1);
      queue[++counter] = function () {
        apply(isCallable$1(fn) ? fn : Function$1(fn), undefined, args);
      };
      defer(counter);
      return counter;
    };
    clear = function clearImmediate(id) {
      delete queue[id];
    }; // Node.js 0.8-
    if (IS_NODE$3) {
      defer = function (id) {
        process$2.nextTick(runner(id));
      }; // Sphere (JS game engine) Dispatch API
    } else if (Dispatch$1 && Dispatch$1.now) {
      defer = function (id) {
        Dispatch$1.now(runner(id));
      }; // Browsers with MessageChannel, includes WebWorkers
      // except iOS - https://github.com/zloirock/core-js/issues/624
    } else if (MessageChannel && !IS_IOS$1) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = bind$2(port.postMessage, port); // Browsers with postMessage, skip WebWorkers
      // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global$d.addEventListener && isCallable$1(global$d.postMessage) && !global$d.importScripts && location && location.protocol !== 'file:' && !fails$6(post)) {
      defer = post;
      global$d.addEventListener('message', listener, false); // IE8-
    } else if (ONREADYSTATECHANGE in createElement('script')) {
      defer = function (id) {
        html.appendChild(createElement('script'))[ONREADYSTATECHANGE] = function () {
          html.removeChild(this);
          run(id);
        };
      }; // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(runner(id), 0);
      };
    }
  }
  var task$1 = {
    set: set$2,
    clear: clear
  };
  var userAgent$1 = engineUserAgent;
  var global$c = global$Y;
  var engineIsIosPebble = /ipad|iphone|ipod/i.test(userAgent$1) && global$c.Pebble !== undefined;
  var userAgent = engineUserAgent;
  var engineIsWebosWebkit = /web0s(?!.*chrome)/i.test(userAgent);
  var global$b = global$Y;
  var bind$1 = functionBindContext;
  var getOwnPropertyDescriptor$1 = objectGetOwnPropertyDescriptor.f;
  var macrotask = task$1.set;
  var IS_IOS = engineIsIos;
  var IS_IOS_PEBBLE = engineIsIosPebble;
  var IS_WEBOS_WEBKIT = engineIsWebosWebkit;
  var IS_NODE$2 = engineIsNode;
  var MutationObserver = global$b.MutationObserver || global$b.WebKitMutationObserver;
  var document$2 = global$b.document;
  var process$1 = global$b.process;
  var Promise$1 = global$b.Promise; // Node.js 11 shows ExperimentalWarning on getting `queueMicrotask`
  var queueMicrotaskDescriptor = getOwnPropertyDescriptor$1(global$b, 'queueMicrotask');
  var queueMicrotask = queueMicrotaskDescriptor && queueMicrotaskDescriptor.value;
  var flush, head, last, notify$1, toggle, node, promise, then; // modern engines have queueMicrotask method
  if (!queueMicrotask) {
    flush = function () {
      var parent, fn;
      if (IS_NODE$2 && (parent = process$1.domain)) parent.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (error) {
          if (head) notify$1();else last = undefined;
          throw error;
        }
      }
      last = undefined;
      if (parent) parent.enter();
    }; // browsers with MutationObserver, except iOS - https://github.com/zloirock/core-js/issues/339
    // also except WebOS Webkit https://github.com/zloirock/core-js/issues/898
    if (!IS_IOS && !IS_NODE$2 && !IS_WEBOS_WEBKIT && MutationObserver && document$2) {
      toggle = true;
      node = document$2.createTextNode('');
      new MutationObserver(flush).observe(node, {
        characterData: true
      });
      notify$1 = function () {
        node.data = toggle = !toggle;
      }; // environments with maybe non-completely correct, but existent Promise
    } else if (!IS_IOS_PEBBLE && Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      promise = Promise$1.resolve(undefined); // workaround of WebKit ~ iOS Safari 10.1 bug
      promise.constructor = Promise$1;
      then = bind$1(promise.then, promise);
      notify$1 = function () {
        then(flush);
      }; // Node.js without promises
    } else if (IS_NODE$2) {
      notify$1 = function () {
        process$1.nextTick(flush);
      }; // for other environments - macrotask based on:
      // - setImmediate
      // - MessageChannel
      // - window.postMessag
      // - onreadystatechange
      // - setTimeout
    } else {
      // strange IE + webpack dev server bug - use .bind(global)
      macrotask = bind$1(macrotask, global$b);
      notify$1 = function () {
        macrotask(flush);
      };
    }
  }
  var microtask$1 = queueMicrotask || function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify$1();
    }
    last = task;
  };
  var newPromiseCapability$2 = {};
  var aCallable$2 = aCallable$7;
  var PromiseCapability = function (C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aCallable$2(resolve);
    this.reject = aCallable$2(reject);
  }; // `NewPromiseCapability` abstract operation
  // https://tc39.es/ecma262/#sec-newpromisecapability
  newPromiseCapability$2.f = function (C) {
    return new PromiseCapability(C);
  };
  var anObject$3 = anObject$j;
  var isObject$3 = isObject$h;
  var newPromiseCapability$1 = newPromiseCapability$2;
  var promiseResolve$1 = function (C, x) {
    anObject$3(C);
    if (isObject$3(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapability$1.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };
  var global$a = global$Y;
  var hostReportErrors$1 = function (a, b) {
    var console = global$a.console;
    if (console && console.error) {
      arguments.length == 1 ? console.error(a) : console.error(a, b);
    }
  };
  var perform$1 = function (exec) {
    try {
      return {
        error: false,
        value: exec()
      };
    } catch (error) {
      return {
        error: true,
        value: error
      };
    }
  };
  var engineIsBrowser = typeof window == 'object';
  var $$9 = _export;
  var global$9 = global$Y;
  var getBuiltIn = getBuiltIn$8;
  var call$2 = functionCall;
  var NativePromise = nativePromiseConstructor;
  var redefine$2 = redefine$d.exports;
  var redefineAll$2 = redefineAll$4;
  var setPrototypeOf = objectSetPrototypeOf;
  var setToStringTag = setToStringTag$5;
  var setSpecies = setSpecies$3;
  var aCallable$1 = aCallable$7;
  var isCallable = isCallable$m;
  var isObject$2 = isObject$h;
  var anInstance$1 = anInstance$4;
  var inspectSource = inspectSource$4;
  var iterate$1 = iterate$4;
  var checkCorrectnessOfIteration = checkCorrectnessOfIteration$3;
  var speciesConstructor$1 = speciesConstructor$3;
  var task = task$1.set;
  var microtask = microtask$1;
  var promiseResolve = promiseResolve$1;
  var hostReportErrors = hostReportErrors$1;
  var newPromiseCapabilityModule = newPromiseCapability$2;
  var perform = perform$1;
  var InternalStateModule$2 = internalState;
  var isForced$1 = isForced_1;
  var wellKnownSymbol$1 = wellKnownSymbol$o;
  var IS_BROWSER = engineIsBrowser;
  var IS_NODE$1 = engineIsNode;
  var V8_VERSION = engineV8Version;
  var SPECIES = wellKnownSymbol$1('species');
  var PROMISE = 'Promise';
  var getInternalState$1 = InternalStateModule$2.get;
  var setInternalState$2 = InternalStateModule$2.set;
  var getInternalPromiseState = InternalStateModule$2.getterFor(PROMISE);
  var NativePromisePrototype = NativePromise && NativePromise.prototype;
  var PromiseConstructor = NativePromise;
  var PromisePrototype = NativePromisePrototype;
  var TypeError$4 = global$9.TypeError;
  var document$1 = global$9.document;
  var process = global$9.process;
  var newPromiseCapability = newPromiseCapabilityModule.f;
  var newGenericPromiseCapability = newPromiseCapability;
  var DISPATCH_EVENT = !!(document$1 && document$1.createEvent && global$9.dispatchEvent);
  var NATIVE_REJECTION_EVENT = isCallable(global$9.PromiseRejectionEvent);
  var UNHANDLED_REJECTION = 'unhandledrejection';
  var REJECTION_HANDLED = 'rejectionhandled';
  var PENDING = 0;
  var FULFILLED = 1;
  var REJECTED = 2;
  var HANDLED = 1;
  var UNHANDLED = 2;
  var SUBCLASSING = false;
  var Internal, OwnPromiseCapability, PromiseWrapper, nativeThen;
  var FORCED$3 = isForced$1(PROMISE, function () {
    var PROMISE_CONSTRUCTOR_SOURCE = inspectSource(PromiseConstructor);
    var GLOBAL_CORE_JS_PROMISE = PROMISE_CONSTRUCTOR_SOURCE !== String(PromiseConstructor); // V8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // We can't detect it synchronously, so just check versions
    if (!GLOBAL_CORE_JS_PROMISE && V8_VERSION === 66) return true; // We need Promise#finally in the pure version for preventing prototype pollution
    // deoptimization and performance degradation
    // https://github.com/zloirock/core-js/issues/679
    if (V8_VERSION >= 51 && /native code/.test(PROMISE_CONSTRUCTOR_SOURCE)) return false; // Detect correctness of subclassing with @@species support
    var promise = new PromiseConstructor(function (resolve) {
      resolve(1);
    });
    var FakePromise = function (exec) {
      exec(function () {
        /* empty */
      }, function () {
        /* empty */
      });
    };
    var constructor = promise.constructor = {};
    constructor[SPECIES] = FakePromise;
    SUBCLASSING = promise.then(function () {
      /* empty */
    }) instanceof FakePromise;
    if (!SUBCLASSING) return true; // Unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return !GLOBAL_CORE_JS_PROMISE && IS_BROWSER && !NATIVE_REJECTION_EVENT;
  });
  var INCORRECT_ITERATION = FORCED$3 || !checkCorrectnessOfIteration(function (iterable) {
    PromiseConstructor.all(iterable)['catch'](function () {
      /* empty */
    });
  }); // helpers
  var isThenable = function (it) {
    var then;
    return isObject$2(it) && isCallable(then = it.then) ? then : false;
  };
  var notify = function (state, isReject) {
    if (state.notified) return;
    state.notified = true;
    var chain = state.reactions;
    microtask(function () {
      var value = state.value;
      var ok = state.state == FULFILLED;
      var index = 0; // variable length - can't use forEach
      while (chain.length > index) {
        var reaction = chain[index++];
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;
        try {
          if (handler) {
            if (!ok) {
              if (state.rejection === UNHANDLED) onHandleUnhandled(state);
              state.rejection = HANDLED;
            }
            if (handler === true) result = value;else {
              if (domain) domain.enter();
              result = handler(value); // can throw
              if (domain) {
                domain.exit();
                exited = true;
              }
            }
            if (result === reaction.promise) {
              reject(TypeError$4('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              call$2(then, result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (error) {
          if (domain && !exited) domain.exit();
          reject(error);
        }
      }
      state.reactions = [];
      state.notified = false;
      if (isReject && !state.rejection) onUnhandled(state);
    });
  };
  var dispatchEvent$1 = function (name, promise, reason) {
    var event, handler;
    if (DISPATCH_EVENT) {
      event = document$1.createEvent('Event');
      event.promise = promise;
      event.reason = reason;
      event.initEvent(name, false, true);
      global$9.dispatchEvent(event);
    } else event = {
      promise: promise,
      reason: reason
    };
    if (!NATIVE_REJECTION_EVENT && (handler = global$9['on' + name])) handler(event);else if (name === UNHANDLED_REJECTION) hostReportErrors('Unhandled promise rejection', reason);
  };
  var onUnhandled = function (state) {
    call$2(task, global$9, function () {
      var promise = state.facade;
      var value = state.value;
      var IS_UNHANDLED = isUnhandled(state);
      var result;
      if (IS_UNHANDLED) {
        result = perform(function () {
          if (IS_NODE$1) {
            process.emit('unhandledRejection', value, promise);
          } else dispatchEvent$1(UNHANDLED_REJECTION, promise, value);
        }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        state.rejection = IS_NODE$1 || isUnhandled(state) ? UNHANDLED : HANDLED;
        if (result.error) throw result.value;
      }
    });
  };
  var isUnhandled = function (state) {
    return state.rejection !== HANDLED && !state.parent;
  };
  var onHandleUnhandled = function (state) {
    call$2(task, global$9, function () {
      var promise = state.facade;
      if (IS_NODE$1) {
        process.emit('rejectionHandled', promise);
      } else dispatchEvent$1(REJECTION_HANDLED, promise, state.value);
    });
  };
  var bind = function (fn, state, unwrap) {
    return function (value) {
      fn(state, value, unwrap);
    };
  };
  var internalReject = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    state.value = value;
    state.state = REJECTED;
    notify(state, true);
  };
  var internalResolve = function (state, value, unwrap) {
    if (state.done) return;
    state.done = true;
    if (unwrap) state = unwrap;
    try {
      if (state.facade === value) throw TypeError$4("Promise can't be resolved itself");
      var then = isThenable(value);
      if (then) {
        microtask(function () {
          var wrapper = {
            done: false
          };
          try {
            call$2(then, value, bind(internalResolve, wrapper, state), bind(internalReject, wrapper, state));
          } catch (error) {
            internalReject(wrapper, error, state);
          }
        });
      } else {
        state.value = value;
        state.state = FULFILLED;
        notify(state, false);
      }
    } catch (error) {
      internalReject({
        done: false
      }, error, state);
    }
  }; // constructor polyfill
  if (FORCED$3) {
    // 25.4.3.1 Promise(executor)
    PromiseConstructor = function Promise(executor) {
      anInstance$1(this, PromisePrototype);
      aCallable$1(executor);
      call$2(Internal, this);
      var state = getInternalState$1(this);
      try {
        executor(bind(internalResolve, state), bind(internalReject, state));
      } catch (error) {
        internalReject(state, error);
      }
    };
    PromisePrototype = PromiseConstructor.prototype; // eslint-disable-next-line no-unused-vars -- required for `.length`
    Internal = function Promise(executor) {
      setInternalState$2(this, {
        type: PROMISE,
        done: false,
        notified: false,
        parent: false,
        reactions: [],
        rejection: false,
        state: PENDING,
        value: undefined
      });
    };
    Internal.prototype = redefineAll$2(PromisePrototype, {
      // `Promise.prototype.then` method
      // https://tc39.es/ecma262/#sec-promise.prototype.then
      then: function then(onFulfilled, onRejected) {
        var state = getInternalPromiseState(this);
        var reactions = state.reactions;
        var reaction = newPromiseCapability(speciesConstructor$1(this, PromiseConstructor));
        reaction.ok = isCallable(onFulfilled) ? onFulfilled : true;
        reaction.fail = isCallable(onRejected) && onRejected;
        reaction.domain = IS_NODE$1 ? process.domain : undefined;
        state.parent = true;
        reactions[reactions.length] = reaction;
        if (state.state != PENDING) notify(state, false);
        return reaction.promise;
      },
      // `Promise.prototype.catch` method
      // https://tc39.es/ecma262/#sec-promise.prototype.catch
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    OwnPromiseCapability = function () {
      var promise = new Internal();
      var state = getInternalState$1(promise);
      this.promise = promise;
      this.resolve = bind(internalResolve, state);
      this.reject = bind(internalReject, state);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
      return C === PromiseConstructor || C === PromiseWrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
    };
    if (isCallable(NativePromise) && NativePromisePrototype !== Object.prototype) {
      nativeThen = NativePromisePrototype.then;
      if (!SUBCLASSING) {
        // make `Promise#then` return a polyfilled `Promise` for native promise-based APIs
        redefine$2(NativePromisePrototype, 'then', function then(onFulfilled, onRejected) {
          var that = this;
          return new PromiseConstructor(function (resolve, reject) {
            call$2(nativeThen, that, resolve, reject);
          }).then(onFulfilled, onRejected); // https://github.com/zloirock/core-js/issues/640
        }, {
          unsafe: true
        }); // makes sure that native promise-based APIs `Promise#catch` properly works with patched `Promise#then`
        redefine$2(NativePromisePrototype, 'catch', PromisePrototype['catch'], {
          unsafe: true
        });
      } // make `.constructor === Promise` work for native promise-based APIs
      try {
        delete NativePromisePrototype.constructor;
      } catch (error) {
        /* empty */
      } // make `instanceof Promise` work for native promise-based APIs
      if (setPrototypeOf) {
        setPrototypeOf(NativePromisePrototype, PromisePrototype);
      }
    }
  }
  $$9({
    global: true,
    wrap: true,
    forced: FORCED$3
  }, {
    Promise: PromiseConstructor
  });
  setToStringTag(PromiseConstructor, PROMISE, false);
  setSpecies(PROMISE);
  PromiseWrapper = getBuiltIn(PROMISE); // statics
  $$9({
    target: PROMISE,
    stat: true,
    forced: FORCED$3
  }, {
    // `Promise.reject` method
    // https://tc39.es/ecma262/#sec-promise.reject
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      call$2(capability.reject, undefined, r);
      return capability.promise;
    }
  });
  $$9({
    target: PROMISE,
    stat: true,
    forced: FORCED$3
  }, {
    // `Promise.resolve` method
    // https://tc39.es/ecma262/#sec-promise.resolve
    resolve: function resolve(x) {
      return promiseResolve(this, x);
    }
  });
  $$9({
    target: PROMISE,
    stat: true,
    forced: INCORRECT_ITERATION
  }, {
    // `Promise.all` method
    // https://tc39.es/ecma262/#sec-promise.all
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aCallable$1(C.resolve);
        var values = [];
        var counter = 0;
        var remaining = 1;
        iterate$1(iterable, function (promise) {
          var index = counter++;
          var alreadyCalled = false;
          remaining++;
          call$2($promiseResolve, C, promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.error) reject(result.value);
      return capability.promise;
    },
    // `Promise.race` method
    // https://tc39.es/ecma262/#sec-promise.race
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = perform(function () {
        var $promiseResolve = aCallable$1(C.resolve);
        iterate$1(iterable, function (promise) {
          call$2($promiseResolve, C, promise).then(capability.resolve, reject);
        });
      });
      if (result.error) reject(result.value);
      return capability.promise;
    }
  });
  var global$8 = global$Y;
  var aCallable = aCallable$7;
  var toObject$1 = toObject$b;
  var IndexedObject = indexedObject;
  var lengthOfArrayLike = lengthOfArrayLike$9;
  var TypeError$3 = global$8.TypeError; // `Array.prototype.{ reduce, reduceRight }` methods implementation
  var createMethod = function (IS_RIGHT) {
    return function (that, callbackfn, argumentsLength, memo) {
      aCallable(callbackfn);
      var O = toObject$1(that);
      var self = IndexedObject(O);
      var length = lengthOfArrayLike(O);
      var index = IS_RIGHT ? length - 1 : 0;
      var i = IS_RIGHT ? -1 : 1;
      if (argumentsLength < 2) while (true) {
        if (index in self) {
          memo = self[index];
          index += i;
          break;
        }
        index += i;
        if (IS_RIGHT ? index < 0 : length <= index) {
          throw TypeError$3('Reduce of empty array with no initial value');
        }
      }
      for (; IS_RIGHT ? index >= 0 : length > index; index += i) if (index in self) {
        memo = callbackfn(memo, self[index], index, O);
      }
      return memo;
    };
  };
  var arrayReduce = {
    // `Array.prototype.reduce` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduce
    left: createMethod(false),
    // `Array.prototype.reduceRight` method
    // https://tc39.es/ecma262/#sec-array.prototype.reduceright
    right: createMethod(true)
  };
  var $$8 = _export;
  var $reduce = arrayReduce.left;
  var arrayMethodIsStrict$1 = arrayMethodIsStrict$5;
  var CHROME_VERSION = engineV8Version;
  var IS_NODE = engineIsNode;
  var STRICT_METHOD$1 = arrayMethodIsStrict$1('reduce'); // Chrome 80-82 has a critical bug
  // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982
  var CHROME_BUG = !IS_NODE && CHROME_VERSION > 79 && CHROME_VERSION < 83; // `Array.prototype.reduce` method
  // https://tc39.es/ecma262/#sec-array.prototype.reduce
  $$8({
    target: 'Array',
    proto: true,
    forced: !STRICT_METHOD$1 || CHROME_BUG
  }, {
    reduce: function reduce(callbackfn
    /* , initialValue */
    ) {
      var length = arguments.length;
      return $reduce(this, callbackfn, length, length > 1 ? arguments[1] : undefined);
    }
  });
  var $forEach = arrayIteration.forEach;
  var arrayMethodIsStrict = arrayMethodIsStrict$5;
  var STRICT_METHOD = arrayMethodIsStrict('forEach'); // `Array.prototype.forEach` method implementation
  // https://tc39.es/ecma262/#sec-array.prototype.foreach
  var arrayForEach = !STRICT_METHOD ? function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined); // eslint-disable-next-line es/no-array-prototype-foreach -- safe
  } : [].forEach;
  var global$7 = global$Y;
  var DOMIterables = domIterables;
  var DOMTokenListPrototype = domTokenListPrototype;
  var forEach = arrayForEach;
  var createNonEnumerableProperty = createNonEnumerableProperty$8;
  var handlePrototype = function (CollectionPrototype) {
    // some Chrome versions have non-configurable methods on DOMTokenList
    if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
      createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
    } catch (error) {
      CollectionPrototype.forEach = forEach;
    }
  };
  for (var COLLECTION_NAME in DOMIterables) {
    if (DOMIterables[COLLECTION_NAME]) {
      handlePrototype(global$7[COLLECTION_NAME] && global$7[COLLECTION_NAME].prototype);
    }
  }
  handlePrototype(DOMTokenListPrototype);
  var global$6 = global$Y;
  var fails$5 = fails$w;
  var uncurryThis$7 = functionUncurryThis;
  var toString$3 = toString$e;
  var trim$2 = stringTrim.trim;
  var whitespaces = whitespaces$4;
  var charAt = uncurryThis$7(''.charAt);
  var n$ParseFloat = global$6.parseFloat;
  var Symbol$1 = global$6.Symbol;
  var ITERATOR = Symbol$1 && Symbol$1.iterator;
  var FORCED$2 = 1 / n$ParseFloat(whitespaces + '-0') !== -Infinity // MS Edge 18- broken with boxed symbols
  || ITERATOR && !fails$5(function () {
    n$ParseFloat(Object(ITERATOR));
  }); // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  var numberParseFloat = FORCED$2 ? function parseFloat(string) {
    var trimmedString = trim$2(toString$3(string));
    var result = n$ParseFloat(trimmedString);
    return result === 0 && charAt(trimmedString, 0) == '-' ? -0 : result;
  } : n$ParseFloat;
  var $$7 = _export;
  var $parseFloat = numberParseFloat; // `parseFloat` method
  // https://tc39.es/ecma262/#sec-parsefloat-string
  $$7({
    global: true,
    forced: parseFloat != $parseFloat
  }, {
    parseFloat: $parseFloat
  });
  var uncurryThis$6 = functionUncurryThis; // `thisNumberValue` abstract operation
  // https://tc39.es/ecma262/#sec-thisnumbervalue
  var thisNumberValue$2 = uncurryThis$6(1.0.valueOf);
  var global$5 = global$Y;
  var toIntegerOrInfinity$1 = toIntegerOrInfinity$6;
  var toString$2 = toString$e;
  var requireObjectCoercible$2 = requireObjectCoercible$8;
  var RangeError$1 = global$5.RangeError; // `String.prototype.repeat` method implementation
  // https://tc39.es/ecma262/#sec-string.prototype.repeat
  var stringRepeat = function repeat(count) {
    var str = toString$2(requireObjectCoercible$2(this));
    var result = '';
    var n = toIntegerOrInfinity$1(count);
    if (n < 0 || n == Infinity) throw RangeError$1('Wrong number of repetitions');
    for (; n > 0; (n >>>= 1) && (str += str)) if (n & 1) result += str;
    return result;
  };
  var $$6 = _export;
  var global$4 = global$Y;
  var uncurryThis$5 = functionUncurryThis;
  var toIntegerOrInfinity = toIntegerOrInfinity$6;
  var thisNumberValue$1 = thisNumberValue$2;
  var $repeat = stringRepeat;
  var fails$4 = fails$w;
  var RangeError = global$4.RangeError;
  var String$1 = global$4.String;
  var floor = Math.floor;
  var repeat = uncurryThis$5($repeat);
  var stringSlice = uncurryThis$5(''.slice);
  var un$ToFixed = uncurryThis$5(1.0.toFixed);
  var pow = function (x, n, acc) {
    return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
  };
  var log = function (x) {
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
  var multiply = function (data, n, c) {
    var index = -1;
    var c2 = c;
    while (++index < 6) {
      c2 += n * data[index];
      data[index] = c2 % 1e7;
      c2 = floor(c2 / 1e7);
    }
  };
  var divide = function (data, n) {
    var index = 6;
    var c = 0;
    while (--index >= 0) {
      c += data[index];
      data[index] = floor(c / n);
      c = c % n * 1e7;
    }
  };
  var dataToString = function (data) {
    var index = 6;
    var s = '';
    while (--index >= 0) {
      if (s !== '' || index === 0 || data[index] !== 0) {
        var t = String$1(data[index]);
        s = s === '' ? t : s + repeat('0', 7 - t.length) + t;
      }
    }
    return s;
  };
  var FORCED$1 = fails$4(function () {
    return un$ToFixed(0.00008, 3) !== '0.000' || un$ToFixed(0.9, 0) !== '1' || un$ToFixed(1.255, 2) !== '1.25' || un$ToFixed(1000000000000000128.0, 0) !== '1000000000000000128';
  }) || !fails$4(function () {
    // V8 ~ Android 4.3-
    un$ToFixed({});
  }); // `Number.prototype.toFixed` method
  // https://tc39.es/ecma262/#sec-number.prototype.tofixed
  $$6({
    target: 'Number',
    proto: true,
    forced: FORCED$1
  }, {
    toFixed: function toFixed(fractionDigits) {
      var number = thisNumberValue$1(this);
      var fractDigits = toIntegerOrInfinity(fractionDigits);
      var data = [0, 0, 0, 0, 0, 0];
      var sign = '';
      var result = '0';
      var e, z, j, k;
      if (fractDigits < 0 || fractDigits > 20) throw RangeError('Incorrect fraction digits'); // eslint-disable-next-line no-self-compare -- NaN check
      if (number != number) return 'NaN';
      if (number <= -1e21 || number >= 1e21) return String$1(number);
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
          multiply(data, 0, z);
          j = fractDigits;
          while (j >= 7) {
            multiply(data, 1e7, 0);
            j -= 7;
          }
          multiply(data, pow(10, j, 1), 0);
          j = e - 1;
          while (j >= 23) {
            divide(data, 1 << 23);
            j -= 23;
          }
          divide(data, 1 << j);
          multiply(data, 1, 1);
          divide(data, 2);
          result = dataToString(data);
        } else {
          multiply(data, 0, z);
          multiply(data, 1 << -e, 0);
          result = dataToString(data) + repeat('0', fractDigits);
        }
      }
      if (fractDigits > 0) {
        k = result.length;
        result = sign + (k <= fractDigits ? '0.' + repeat('0', fractDigits - k) + result : stringSlice(result, 0, k - fractDigits) + '.' + stringSlice(result, k - fractDigits));
      } else {
        result = sign + result;
      }
      return result;
    }
  });
  var call$1 = functionCall;
  var fixRegExpWellKnownSymbolLogic = fixRegexpWellKnownSymbolLogic;
  var anObject$2 = anObject$j;
  var toLength$1 = toLength$4;
  var toString$1 = toString$e;
  var requireObjectCoercible$1 = requireObjectCoercible$8;
  var getMethod$1 = getMethod$6;
  var advanceStringIndex$1 = advanceStringIndex$3;
  var regExpExec$1 = regexpExecAbstract; // @@match logic
  fixRegExpWellKnownSymbolLogic('match', function (MATCH, nativeMatch, maybeCallNative) {
    return [// `String.prototype.match` method
    // https://tc39.es/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = requireObjectCoercible$1(this);
      var matcher = regexp == undefined ? undefined : getMethod$1(regexp, MATCH);
      return matcher ? call$1(matcher, regexp, O) : new RegExp(regexp)[MATCH](toString$1(O));
    }, // `RegExp.prototype[@@match]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@match
    function (string) {
      var rx = anObject$2(this);
      var S = toString$1(string);
      var res = maybeCallNative(nativeMatch, rx, S);
      if (res.done) return res.value;
      if (!rx.global) return regExpExec$1(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec$1(rx, S)) !== null) {
        var matchStr = toString$1(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex$1(S, toLength$1(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }];
  });
  /* eslint-disable es/no-string-prototype-matchall -- safe */
  var $$5 = _export;
  var global$3 = global$Y;
  var call = functionCall;
  var uncurryThis$4 = functionUncurryThis;
  var createIteratorConstructor = createIteratorConstructor$2;
  var requireObjectCoercible = requireObjectCoercible$8;
  var toLength = toLength$4;
  var toString = toString$e;
  var anObject$1 = anObject$j;
  var classof = classofRaw$1;
  var isPrototypeOf$1 = objectIsPrototypeOf;
  var isRegExp = isRegexp;
  var regExpFlags = regexpFlags$1;
  var getMethod = getMethod$6;
  var redefine$1 = redefine$d.exports;
  var fails$3 = fails$w;
  var wellKnownSymbol = wellKnownSymbol$o;
  var speciesConstructor = speciesConstructor$3;
  var advanceStringIndex = advanceStringIndex$3;
  var regExpExec = regexpExecAbstract;
  var InternalStateModule$1 = internalState;
  var IS_PURE = isPure;
  var MATCH_ALL = wellKnownSymbol('matchAll');
  var REGEXP_STRING = 'RegExp String';
  var REGEXP_STRING_ITERATOR = REGEXP_STRING + ' Iterator';
  var setInternalState$1 = InternalStateModule$1.set;
  var getInternalState = InternalStateModule$1.getterFor(REGEXP_STRING_ITERATOR);
  var RegExpPrototype = RegExp.prototype;
  var TypeError$2 = global$3.TypeError;
  var getFlags = uncurryThis$4(regExpFlags);
  var stringIndexOf = uncurryThis$4(''.indexOf);
  var un$MatchAll = uncurryThis$4(''.matchAll);
  var WORKS_WITH_NON_GLOBAL_REGEX = !!un$MatchAll && !fails$3(function () {
    un$MatchAll('a', /./);
  });
  var $RegExpStringIterator = createIteratorConstructor(function RegExpStringIterator(regexp, string, $global, fullUnicode) {
    setInternalState$1(this, {
      type: REGEXP_STRING_ITERATOR,
      regexp: regexp,
      string: string,
      global: $global,
      unicode: fullUnicode,
      done: false
    });
  }, REGEXP_STRING, function next() {
    var state = getInternalState(this);
    if (state.done) return {
      value: undefined,
      done: true
    };
    var R = state.regexp;
    var S = state.string;
    var match = regExpExec(R, S);
    if (match === null) return {
      value: undefined,
      done: state.done = true
    };
    if (state.global) {
      if (toString(match[0]) === '') R.lastIndex = advanceStringIndex(S, toLength(R.lastIndex), state.unicode);
      return {
        value: match,
        done: false
      };
    }
    state.done = true;
    return {
      value: match,
      done: false
    };
  });
  var $matchAll = function (string) {
    var R = anObject$1(this);
    var S = toString(string);
    var C, flagsValue, flags, matcher, $global, fullUnicode;
    C = speciesConstructor(R, RegExp);
    flagsValue = R.flags;
    if (flagsValue === undefined && isPrototypeOf$1(RegExpPrototype, R) && !('flags' in RegExpPrototype)) {
      flagsValue = getFlags(R);
    }
    flags = flagsValue === undefined ? '' : toString(flagsValue);
    matcher = new C(C === RegExp ? R.source : R, flags);
    $global = !!~stringIndexOf(flags, 'g');
    fullUnicode = !!~stringIndexOf(flags, 'u');
    matcher.lastIndex = toLength(R.lastIndex);
    return new $RegExpStringIterator(matcher, S, $global, fullUnicode);
  }; // `String.prototype.matchAll` method
  // https://tc39.es/ecma262/#sec-string.prototype.matchall
  $$5({
    target: 'String',
    proto: true,
    forced: WORKS_WITH_NON_GLOBAL_REGEX
  }, {
    matchAll: function matchAll(regexp) {
      var O = requireObjectCoercible(this);
      var flags, S, matcher, rx;
      if (regexp != null) {
        if (isRegExp(regexp)) {
          flags = toString(requireObjectCoercible('flags' in RegExpPrototype ? regexp.flags : getFlags(regexp)));
          if (!~stringIndexOf(flags, 'g')) throw TypeError$2('`.matchAll` does not allow non-global regexes');
        }
        if (WORKS_WITH_NON_GLOBAL_REGEX) return un$MatchAll(O, regexp);
        matcher = getMethod(regexp, MATCH_ALL);
        if (matcher === undefined && IS_PURE && classof(regexp) == 'RegExp') matcher = $matchAll;
        if (matcher) return call(matcher, regexp, O);
      } else if (WORKS_WITH_NON_GLOBAL_REGEX) return un$MatchAll(O, regexp);
      S = toString(O);
      rx = new RegExp(regexp, 'g');
      return rx[MATCH_ALL](S);
    }
  });
  MATCH_ALL in RegExpPrototype || redefine$1(RegExpPrototype, MATCH_ALL, $matchAll);
  var collection$1 = collection$3;
  var collectionStrong = collectionStrong$2; // `Set` constructor
  // https://tc39.es/ecma262/#sec-set-objects
  collection$1('Set', function (init) {
    return function Set() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }, collectionStrong);
  var DESCRIPTORS$2 = descriptors;
  var global$2 = global$Y;
  var uncurryThis$3 = functionUncurryThis;
  var isForced = isForced_1;
  var redefine = redefine$d.exports;
  var hasOwn$1 = hasOwnProperty_1;
  var inheritIfRequired = inheritIfRequired$3;
  var isPrototypeOf = objectIsPrototypeOf;
  var isSymbol = isSymbol$4;
  var toPrimitive = toPrimitive$2;
  var fails$2 = fails$w;
  var getOwnPropertyNames = objectGetOwnPropertyNames.f;
  var getOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var defineProperty = objectDefineProperty.f;
  var thisNumberValue = thisNumberValue$2;
  var trim$1 = stringTrim.trim;
  var NUMBER = 'Number';
  var NativeNumber = global$2[NUMBER];
  var NumberPrototype = NativeNumber.prototype;
  var TypeError$1 = global$2.TypeError;
  var arraySlice = uncurryThis$3(''.slice);
  var charCodeAt = uncurryThis$3(''.charCodeAt); // `ToNumeric` abstract operation
  // https://tc39.es/ecma262/#sec-tonumeric
  var toNumeric = function (value) {
    var primValue = toPrimitive(value, 'number');
    return typeof primValue == 'bigint' ? primValue : toNumber(primValue);
  }; // `ToNumber` abstract operation
  // https://tc39.es/ecma262/#sec-tonumber
  var toNumber = function (argument) {
    var it = toPrimitive(argument, 'number');
    var first, third, radix, maxCode, digits, length, index, code;
    if (isSymbol(it)) throw TypeError$1('Cannot convert a Symbol value to a number');
    if (typeof it == 'string' && it.length > 2) {
      it = trim$1(it);
      first = charCodeAt(it, 0);
      if (first === 43 || first === 45) {
        third = charCodeAt(it, 2);
        if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
      } else if (first === 48) {
        switch (charCodeAt(it, 1)) {
          case 66:
          case 98:
            radix = 2;
            maxCode = 49;
            break;
          // fast equal of /^0b[01]+$/i
          case 79:
          case 111:
            radix = 8;
            maxCode = 55;
            break;
          // fast equal of /^0o[0-7]+$/i
          default:
            return +it;
        }
        digits = arraySlice(it, 2);
        length = digits.length;
        for (index = 0; index < length; index++) {
          code = charCodeAt(digits, index); // parseInt parses a string to a first unavailable symbol
          // but ToNumber should return NaN if a string contains unavailable symbols
          if (code < 48 || code > maxCode) return NaN;
        }
        return parseInt(digits, radix);
      }
    }
    return +it;
  }; // `Number` constructor
  // https://tc39.es/ecma262/#sec-number-constructor
  if (isForced(NUMBER, !NativeNumber(' 0o1') || !NativeNumber('0b1') || NativeNumber('+0x1'))) {
    var NumberWrapper = function Number(value) {
      var n = arguments.length < 1 ? 0 : NativeNumber(toNumeric(value));
      var dummy = this; // check on 1..constructor(foo) case
      return isPrototypeOf(NumberPrototype, dummy) && fails$2(function () {
        thisNumberValue(dummy);
      }) ? inheritIfRequired(Object(n), dummy, NumberWrapper) : n;
    };
    for (var keys = DESCRIPTORS$2 ? getOwnPropertyNames(NativeNumber) : ( // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' + // ES2015 (in case, if modules with ES2015 Number statics required before):
    'EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,' + // ESNext
    'fromString,range').split(','), j = 0, key; keys.length > j; j++) {
      if (hasOwn$1(NativeNumber, key = keys[j]) && !hasOwn$1(NumberWrapper, key)) {
        defineProperty(NumberWrapper, key, getOwnPropertyDescriptor(NativeNumber, key));
      }
    }
    NumberWrapper.prototype = NumberPrototype;
    NumberPrototype.constructor = NumberWrapper;
    redefine(global$2, NUMBER, NumberWrapper);
  }
  var $$4 = _export;
  var uncurryThis$2 = functionUncurryThis;
  var isArray = isArray$5;
  var un$Reverse = uncurryThis$2([].reverse);
  var test = [1, 2]; // `Array.prototype.reverse` method
  // https://tc39.es/ecma262/#sec-array.prototype.reverse
  // fix for Safari 12.0 bug
  // https://bugs.webkit.org/show_bug.cgi?id=188794
  $$4({
    target: 'Array',
    proto: true,
    forced: String(test) === String(test.reverse())
  }, {
    reverse: function reverse() {
      // eslint-disable-next-line no-self-assign -- dirty hack
      if (isArray(this)) this.length = this.length;
      return un$Reverse(this);
    }
  });
  var $$3 = _export;
  var toObject = toObject$b;
  var nativeKeys = objectKeys$3;
  var fails$1 = fails$w;
  var FAILS_ON_PRIMITIVES$1 = fails$1(function () {
    nativeKeys(1);
  }); // `Object.keys` method
  // https://tc39.es/ecma262/#sec-object.keys
  $$3({
    target: 'Object',
    stat: true,
    forced: FAILS_ON_PRIMITIVES$1
  }, {
    keys: function keys(it) {
      return nativeKeys(toObject(it));
    }
  });
  var $$2 = _export;
  var fails = fails$w;
  var toIndexedObject$1 = toIndexedObject$b;
  var nativeGetOwnPropertyDescriptor = objectGetOwnPropertyDescriptor.f;
  var DESCRIPTORS$1 = descriptors;
  var FAILS_ON_PRIMITIVES = fails(function () {
    nativeGetOwnPropertyDescriptor(1);
  });
  var FORCED = !DESCRIPTORS$1 || FAILS_ON_PRIMITIVES; // `Object.getOwnPropertyDescriptor` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
  $$2({
    target: 'Object',
    stat: true,
    forced: FORCED,
    sham: !DESCRIPTORS$1
  }, {
    getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
      return nativeGetOwnPropertyDescriptor(toIndexedObject$1(it), key);
    }
  });
  var $$1 = _export;
  var DESCRIPTORS = descriptors;
  var ownKeys$1 = ownKeys$3;
  var toIndexedObject = toIndexedObject$b;
  var getOwnPropertyDescriptorModule = objectGetOwnPropertyDescriptor;
  var createProperty = createProperty$5; // `Object.getOwnPropertyDescriptors` method
  // https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
  $$1({
    target: 'Object',
    stat: true,
    sham: !DESCRIPTORS
  }, {
    getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
      var O = toIndexedObject(object);
      var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
      var keys = ownKeys$1(O);
      var result = {};
      var index = 0;
      var key, descriptor;
      while (keys.length > index) {
        descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
        if (descriptor !== undefined) createProperty(result, key, descriptor);
      }
      return result;
    }
  });
  var $ = _export;
  var $includes = arrayIncludes.includes;
  var addToUnscopables = addToUnscopables$3; // `Array.prototype.includes` method
  // https://tc39.es/ecma262/#sec-array.prototype.includes
  $({
    target: 'Array',
    proto: true
  }, {
    includes: function includes(el
    /* , fromIndex = 0 */
    ) {
      return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
    }
  }); // https://tc39.es/ecma262/#sec-array.prototype-@@unscopables
  addToUnscopables('includes');
  var uncurryThis$1 = functionUncurryThis;
  var redefineAll$1 = redefineAll$4;
  var getWeakData = internalMetadata.exports.getWeakData;
  var anObject = anObject$j;
  var isObject$1 = isObject$h;
  var anInstance = anInstance$4;
  var iterate = iterate$4;
  var ArrayIterationModule = arrayIteration;
  var hasOwn = hasOwnProperty_1;
  var InternalStateModule = internalState;
  var setInternalState = InternalStateModule.set;
  var internalStateGetterFor = InternalStateModule.getterFor;
  var find$1 = ArrayIterationModule.find;
  var findIndex = ArrayIterationModule.findIndex;
  var splice = uncurryThis$1([].splice);
  var id$1 = 0; // fallback for uncaught frozen keys
  var uncaughtFrozenStore = function (store) {
    return store.frozen || (store.frozen = new UncaughtFrozenStore());
  };
  var UncaughtFrozenStore = function () {
    this.entries = [];
  };
  var findUncaughtFrozen = function (store, key) {
    return find$1(store.entries, function (it) {
      return it[0] === key;
    });
  };
  UncaughtFrozenStore.prototype = {
    get: function (key) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) return entry[1];
    },
    has: function (key) {
      return !!findUncaughtFrozen(this, key);
    },
    set: function (key, value) {
      var entry = findUncaughtFrozen(this, key);
      if (entry) entry[1] = value;else this.entries.push([key, value]);
    },
    'delete': function (key) {
      var index = findIndex(this.entries, function (it) {
        return it[0] === key;
      });
      if (~index) splice(this.entries, index, 1);
      return !!~index;
    }
  };
  var collectionWeak$1 = {
    getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
      var Constructor = wrapper(function (that, iterable) {
        anInstance(that, Prototype);
        setInternalState(that, {
          type: CONSTRUCTOR_NAME,
          id: id$1++,
          frozen: undefined
        });
        if (iterable != undefined) iterate(iterable, that[ADDER], {
          that: that,
          AS_ENTRIES: IS_MAP
        });
      });
      var Prototype = Constructor.prototype;
      var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);
      var define = function (that, key, value) {
        var state = getInternalState(that);
        var data = getWeakData(anObject(key), true);
        if (data === true) uncaughtFrozenStore(state).set(key, value);else data[state.id] = value;
        return that;
      };
      redefineAll$1(Prototype, {
        // `{ WeakMap, WeakSet }.prototype.delete(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.delete
        // https://tc39.es/ecma262/#sec-weakset.prototype.delete
        'delete': function (key) {
          var state = getInternalState(this);
          if (!isObject$1(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state)['delete'](key);
          return data && hasOwn(data, state.id) && delete data[state.id];
        },
        // `{ WeakMap, WeakSet }.prototype.has(key)` methods
        // https://tc39.es/ecma262/#sec-weakmap.prototype.has
        // https://tc39.es/ecma262/#sec-weakset.prototype.has
        has: function has(key) {
          var state = getInternalState(this);
          if (!isObject$1(key)) return false;
          var data = getWeakData(key);
          if (data === true) return uncaughtFrozenStore(state).has(key);
          return data && hasOwn(data, state.id);
        }
      });
      redefineAll$1(Prototype, IS_MAP ? {
        // `WeakMap.prototype.get(key)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.get
        get: function get(key) {
          var state = getInternalState(this);
          if (isObject$1(key)) {
            var data = getWeakData(key);
            if (data === true) return uncaughtFrozenStore(state).get(key);
            return data ? data[state.id] : undefined;
          }
        },
        // `WeakMap.prototype.set(key, value)` method
        // https://tc39.es/ecma262/#sec-weakmap.prototype.set
        set: function set(key, value) {
          return define(this, key, value);
        }
      } : {
        // `WeakSet.prototype.add(value)` method
        // https://tc39.es/ecma262/#sec-weakset.prototype.add
        add: function add(value) {
          return define(this, value, true);
        }
      });
      return Constructor;
    }
  };
  var global$1 = global$Y;
  var uncurryThis = functionUncurryThis;
  var redefineAll = redefineAll$4;
  var InternalMetadataModule = internalMetadata.exports;
  var collection = collection$3;
  var collectionWeak = collectionWeak$1;
  var isObject = isObject$h;
  var enforceIternalState = internalState.enforce;
  var NATIVE_WEAK_MAP = nativeWeakMap;
  var IS_IE11 = !global$1.ActiveXObject && 'ActiveXObject' in global$1; // eslint-disable-next-line es/no-object-isextensible -- safe
  var isExtensible = Object.isExtensible;
  var InternalWeakMap;
  var wrapper = function (init) {
    return function WeakMap() {
      return init(this, arguments.length ? arguments[0] : undefined);
    };
  }; // `WeakMap` constructor
  // https://tc39.es/ecma262/#sec-weakmap-constructor
  var $WeakMap = collection('WeakMap', wrapper, collectionWeak); // IE11 WeakMap frozen keys fix
  // We can't use feature detection because it crash some old IE builds
  // https://github.com/zloirock/core-js/issues/485
  if (NATIVE_WEAK_MAP && IS_IE11) {
    InternalWeakMap = collectionWeak.getConstructor(wrapper, 'WeakMap', true);
    InternalMetadataModule.enable();
    var WeakMapPrototype = $WeakMap.prototype;
    var nativeDelete = uncurryThis(WeakMapPrototype['delete']);
    var nativeHas = uncurryThis(WeakMapPrototype.has);
    var nativeGet = uncurryThis(WeakMapPrototype.get);
    var nativeSet = uncurryThis(WeakMapPrototype.set);
    redefineAll(WeakMapPrototype, {
      'delete': function (key) {
        if (isObject(key) && !isExtensible(key)) {
          var state = enforceIternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeDelete(this, key) || state.frozen['delete'](key);
        }
        return nativeDelete(this, key);
      },
      has: function has(key) {
        if (isObject(key) && !isExtensible(key)) {
          var state = enforceIternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas(this, key) || state.frozen.has(key);
        }
        return nativeHas(this, key);
      },
      get: function get(key) {
        if (isObject(key) && !isExtensible(key)) {
          var state = enforceIternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          return nativeHas(this, key) ? nativeGet(this, key) : state.frozen.get(key);
        }
        return nativeGet(this, key);
      },
      set: function set(key, value) {
        if (isObject(key) && !isExtensible(key)) {
          var state = enforceIternalState(this);
          if (!state.frozen) state.frozen = new InternalWeakMap();
          nativeHas(this, key) ? nativeSet(this, key, value) : state.frozen.set(key, value);
        } else nativeSet(this, key, value);
        return this;
      }
    });
  }
  var _marked = /*#__PURE__*/regeneratorRuntime.mark(selection_iterator);
  var xhtml = "http://www.w3.org/1999/xhtml";
  var namespaces = {
    svg: "http://www.w3.org/2000/svg",
    xhtml: xhtml,
    xlink: "http://www.w3.org/1999/xlink",
    xml: "http://www.w3.org/XML/1998/namespace",
    xmlns: "http://www.w3.org/2000/xmlns/"
  };
  function namespace(name) {
    var prefix = name += "",
        i = prefix.indexOf(":");
    if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
    return namespaces.hasOwnProperty(prefix) ? {
      space: namespaces[prefix],
      local: name
    } : name; // eslint-disable-line no-prototype-builtins
  }
  function creatorInherit(name) {
    return function () {
      var document = this.ownerDocument,
          uri = this.namespaceURI;
      return uri === xhtml && document.documentElement.namespaceURI === xhtml ? document.createElement(name) : document.createElementNS(uri, name);
    };
  }
  function creatorFixed(fullname) {
    return function () {
      return this.ownerDocument.createElementNS(fullname.space, fullname.local);
    };
  }
  function creator(name) {
    var fullname = namespace(name);
    return (fullname.local ? creatorFixed : creatorInherit)(fullname);
  }
  function none() {}
  function selector(selector) {
    return selector == null ? none : function () {
      return this.querySelector(selector);
    };
  }
  function selection_select(select) {
    if (typeof select !== "function") select = selector(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
        }
      }
    }
    return new Selection$1(subgroups, this._parents);
  } // Given something array like (or null), returns something that is strictly an
  // array. This is used to ensure that array-like objects passed to d3.selectAll
  // or selection.selectAll are converted into proper arrays when creating a
  // selection; we don’t ever want to create a selection backed by a live
  // HTMLCollection or NodeList. However, note that selection.selectAll will use a
  // static NodeList as a group, since it safely derived from querySelectorAll.
  function array(x) {
    return x == null ? [] : Array.isArray(x) ? x : Array.from(x);
  }
  function empty() {
    return [];
  }
  function selectorAll(selector) {
    return selector == null ? empty : function () {
      return this.querySelectorAll(selector);
    };
  }
  function arrayAll(select) {
    return function () {
      return array(select.apply(this, arguments));
    };
  }
  function selection_selectAll(select) {
    if (typeof select === "function") select = arrayAll(select);else select = selectorAll(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          subgroups.push(select.call(node, node.__data__, i, group));
          parents.push(node);
        }
      }
    }
    return new Selection$1(subgroups, parents);
  }
  function matcher(selector) {
    return function () {
      return this.matches(selector);
    };
  }
  function childMatcher(selector) {
    return function (node) {
      return node.matches(selector);
    };
  }
  var find = Array.prototype.find;
  function childFind(match) {
    return function () {
      return find.call(this.children, match);
    };
  }
  function childFirst() {
    return this.firstElementChild;
  }
  function selection_selectChild(match) {
    return this.select(match == null ? childFirst : childFind(typeof match === "function" ? match : childMatcher(match)));
  }
  var filter = Array.prototype.filter;
  function children() {
    return Array.from(this.children);
  }
  function childrenFilter(match) {
    return function () {
      return filter.call(this.children, match);
    };
  }
  function selection_selectChildren(match) {
    return this.selectAll(match == null ? children : childrenFilter(typeof match === "function" ? match : childMatcher(match)));
  }
  function selection_filter(match) {
    if (typeof match !== "function") match = matcher(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Selection$1(subgroups, this._parents);
  }
  function sparse(update) {
    return new Array(update.length);
  }
  function selection_enter() {
    return new Selection$1(this._enter || this._groups.map(sparse), this._parents);
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
    appendChild: function appendChild(child) {
      return this._parent.insertBefore(child, this._next);
    },
    insertBefore: function insertBefore(child, next) {
      return this._parent.insertBefore(child, next);
    },
    querySelector: function querySelector(selector) {
      return this._parent.querySelector(selector);
    },
    querySelectorAll: function querySelectorAll(selector) {
      return this._parent.querySelectorAll(selector);
    }
  };
  function constant$1(x) {
    return function () {
      return x;
    };
  }
  function bindIndex(parent, group, enter, update, exit, data) {
    var i = 0,
        node,
        groupLength = group.length,
        dataLength = data.length; // Put any non-null nodes that fit into update.
    // Put any null nodes into enter.
    // Put any remaining data into enter.
    for (; i < dataLength; ++i) {
      if (node = group[i]) {
        node.__data__ = data[i];
        update[i] = node;
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    } // Put any non-null nodes that don’t fit into exit.
    for (; i < groupLength; ++i) {
      if (node = group[i]) {
        exit[i] = node;
      }
    }
  }
  function bindKey(parent, group, enter, update, exit, data, key) {
    var i,
        node,
        nodeByKeyValue = new Map(),
        groupLength = group.length,
        dataLength = data.length,
        keyValues = new Array(groupLength),
        keyValue; // Compute the key for each node.
    // If multiple nodes have the same key, the duplicates are added to exit.
    for (i = 0; i < groupLength; ++i) {
      if (node = group[i]) {
        keyValues[i] = keyValue = key.call(node, node.__data__, i, group) + "";
        if (nodeByKeyValue.has(keyValue)) {
          exit[i] = node;
        } else {
          nodeByKeyValue.set(keyValue, node);
        }
      }
    } // Compute the key for each datum.
    // If there a node associated with this key, join and add it to update.
    // If there is not (or the key is a duplicate), add it to enter.
    for (i = 0; i < dataLength; ++i) {
      keyValue = key.call(parent, data[i], i, data) + "";
      if (node = nodeByKeyValue.get(keyValue)) {
        update[i] = node;
        node.__data__ = data[i];
        nodeByKeyValue.delete(keyValue);
      } else {
        enter[i] = new EnterNode(parent, data[i]);
      }
    } // Add any remaining nodes that were not bound to data to exit.
    for (i = 0; i < groupLength; ++i) {
      if ((node = group[i]) && nodeByKeyValue.get(keyValues[i]) === node) {
        exit[i] = node;
      }
    }
  }
  function datum(node) {
    return node.__data__;
  }
  function selection_data(value, key) {
    if (!arguments.length) return Array.from(this, datum);
    var bind = key ? bindKey : bindIndex,
        parents = this._parents,
        groups = this._groups;
    if (typeof value !== "function") value = constant$1(value);
    for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
      var parent = parents[j],
          group = groups[j],
          groupLength = group.length,
          data = arraylike(value.call(parent, parent && parent.__data__, j, parents)),
          dataLength = data.length,
          enterGroup = enter[j] = new Array(dataLength),
          updateGroup = update[j] = new Array(dataLength),
          exitGroup = exit[j] = new Array(groupLength);
      bind(parent, group, enterGroup, updateGroup, exitGroup, data, key); // Now connect the enter nodes to their following update node, such that
      // appendChild can insert the materialized enter node before this node,
      // rather than at the end of the parent node.
      for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
        if (previous = enterGroup[i0]) {
          if (i0 >= i1) i1 = i0 + 1;
          while (!(next = updateGroup[i1]) && ++i1 < dataLength) {
          }
          previous._next = next || null;
        }
      }
    }
    update = new Selection$1(update, parents);
    update._enter = enter;
    update._exit = exit;
    return update;
  } // Given some data, this returns an array-like view of it: an object that
  // exposes a length property and allows numeric indexing. Note that unlike
  // selectAll, this isn’t worried about “live” collections because the resulting
  // array will only be used briefly while data is being bound. (It is possible to
  // cause the data to change while iterating by using a key function, but please
  // don’t; we’d rather avoid a gratuitous copy.)
  function arraylike(data) {
    return _typeof(data) === "object" && "length" in data ? data // Array, TypedArray, NodeList, array-like
    : Array.from(data); // Map, Set, iterable, string, or anything else
  }
  function selection_exit() {
    return new Selection$1(this._exit || this._groups.map(sparse), this._parents);
  }
  function selection_join(onenter, onupdate, onexit) {
    var enter = this.enter(),
        update = this,
        exit = this.exit();
    if (typeof onenter === "function") {
      enter = onenter(enter);
      if (enter) enter = enter.selection();
    } else {
      enter = enter.append(onenter + "");
    }
    if (onupdate != null) {
      update = onupdate(update);
      if (update) update = update.selection();
    }
    if (onexit == null) exit.remove();else onexit(exit);
    return enter && update ? enter.merge(update).order() : update;
  }
  function selection_merge(context) {
    var selection = context.selection ? context.selection() : context;
    for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Selection$1(merges, this._parents);
  }
  function selection_order() {
    for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
      for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
        if (node = group[i]) {
          if (next && node.compareDocumentPosition(next) ^ 4) next.parentNode.insertBefore(node, next);
          next = node;
        }
      }
    }
    return this;
  }
  function selection_sort(compare) {
    if (!compare) compare = ascending;
    function compareNode(a, b) {
      return a && b ? compare(a.__data__, b.__data__) : !a - !b;
    }
    for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          sortgroup[i] = node;
        }
      }
      sortgroup.sort(compareNode);
    }
    return new Selection$1(sortgroups, this._parents).order();
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
    return Array.from(this);
  }
  function selection_node() {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
        var node = group[i];
        if (node) return node;
      }
    }
    return null;
  }
  function selection_size() {
    var size = 0;
    var _iterator3 = _createForOfIteratorHelper$1(this),
        _step3;
    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var node = _step3.value;
        ++size;
      } // eslint-disable-line no-unused-vars
    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }
    return size;
  }
  function selection_empty() {
    return !this.node();
  }
  function selection_each(callback) {
    for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
      for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
        if (node = group[i]) callback.call(node, node.__data__, i, group);
      }
    }
    return this;
  }
  function attrRemove$1(name) {
    return function () {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS$1(fullname) {
    return function () {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant$1(name, value) {
    return function () {
      this.setAttribute(name, value);
    };
  }
  function attrConstantNS$1(fullname, value) {
    return function () {
      this.setAttributeNS(fullname.space, fullname.local, value);
    };
  }
  function attrFunction$1(name, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttribute(name);else this.setAttribute(name, v);
    };
  }
  function attrFunctionNS$1(fullname, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.removeAttributeNS(fullname.space, fullname.local);else this.setAttributeNS(fullname.space, fullname.local, v);
    };
  }
  function selection_attr(name, value) {
    var fullname = namespace(name);
    if (arguments.length < 2) {
      var node = this.node();
      return fullname.local ? node.getAttributeNS(fullname.space, fullname.local) : node.getAttribute(fullname);
    }
    return this.each((value == null ? fullname.local ? attrRemoveNS$1 : attrRemove$1 : typeof value === "function" ? fullname.local ? attrFunctionNS$1 : attrFunction$1 : fullname.local ? attrConstantNS$1 : attrConstant$1)(fullname, value));
  }
  function defaultView(node) {
    return node.ownerDocument && node.ownerDocument.defaultView // node is a Node
    || node.document && node // node is a Window
    || node.defaultView; // node is a Document
  }
  function styleRemove$1(name) {
    return function () {
      this.style.removeProperty(name);
    };
  }
  function styleConstant$1(name, value, priority) {
    return function () {
      this.style.setProperty(name, value, priority);
    };
  }
  function styleFunction$1(name, value, priority) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) this.style.removeProperty(name);else this.style.setProperty(name, v, priority);
    };
  }
  function selection_style(name, value, priority) {
    return arguments.length > 1 ? this.each((value == null ? styleRemove$1 : typeof value === "function" ? styleFunction$1 : styleConstant$1)(name, value, priority == null ? "" : priority)) : styleValue(this.node(), name);
  }
  function styleValue(node, name) {
    return node.style.getPropertyValue(name) || defaultView(node).getComputedStyle(node, null).getPropertyValue(name);
  }
  function propertyRemove(name) {
    return function () {
      delete this[name];
    };
  }
  function propertyConstant(name, value) {
    return function () {
      this[name] = value;
    };
  }
  function propertyFunction(name, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (v == null) delete this[name];else this[name] = v;
    };
  }
  function selection_property(name, value) {
    return arguments.length > 1 ? this.each((value == null ? propertyRemove : typeof value === "function" ? propertyFunction : propertyConstant)(name, value)) : this.node()[name];
  }
  function classArray(string) {
    return string.trim().split(/^|\s+/);
  }
  function classList(node) {
    return node.classList || new ClassList(node);
  }
  function ClassList(node) {
    this._node = node;
    this._names = classArray(node.getAttribute("class") || "");
  }
  ClassList.prototype = {
    add: function add(name) {
      var i = this._names.indexOf(name);
      if (i < 0) {
        this._names.push(name);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    remove: function remove(name) {
      var i = this._names.indexOf(name);
      if (i >= 0) {
        this._names.splice(i, 1);
        this._node.setAttribute("class", this._names.join(" "));
      }
    },
    contains: function contains(name) {
      return this._names.indexOf(name) >= 0;
    }
  };
  function classedAdd(node, names) {
    var list = classList(node),
        i = -1,
        n = names.length;
    while (++i < n) {
      list.add(names[i]);
    }
  }
  function classedRemove(node, names) {
    var list = classList(node),
        i = -1,
        n = names.length;
    while (++i < n) {
      list.remove(names[i]);
    }
  }
  function classedTrue(names) {
    return function () {
      classedAdd(this, names);
    };
  }
  function classedFalse(names) {
    return function () {
      classedRemove(this, names);
    };
  }
  function classedFunction(names, value) {
    return function () {
      (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
    };
  }
  function selection_classed(name, value) {
    var names = classArray(name + "");
    if (arguments.length < 2) {
      var list = classList(this.node()),
          i = -1,
          n = names.length;
      while (++i < n) {
        if (!list.contains(names[i])) return false;
      }
      return true;
    }
    return this.each((typeof value === "function" ? classedFunction : value ? classedTrue : classedFalse)(names, value));
  }
  function textRemove() {
    this.textContent = "";
  }
  function textConstant$1(value) {
    return function () {
      this.textContent = value;
    };
  }
  function textFunction$1(value) {
    return function () {
      var v = value.apply(this, arguments);
      this.textContent = v == null ? "" : v;
    };
  }
  function selection_text(value) {
    return arguments.length ? this.each(value == null ? textRemove : (typeof value === "function" ? textFunction$1 : textConstant$1)(value)) : this.node().textContent;
  }
  function htmlRemove() {
    this.innerHTML = "";
  }
  function htmlConstant(value) {
    return function () {
      this.innerHTML = value;
    };
  }
  function htmlFunction(value) {
    return function () {
      var v = value.apply(this, arguments);
      this.innerHTML = v == null ? "" : v;
    };
  }
  function selection_html(value) {
    return arguments.length ? this.each(value == null ? htmlRemove : (typeof value === "function" ? htmlFunction : htmlConstant)(value)) : this.node().innerHTML;
  }
  function raise() {
    if (this.nextSibling) this.parentNode.appendChild(this);
  }
  function selection_raise() {
    return this.each(raise);
  }
  function lower() {
    if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
  }
  function selection_lower() {
    return this.each(lower);
  }
  function selection_append(name) {
    var create = typeof name === "function" ? name : creator(name);
    return this.select(function () {
      return this.appendChild(create.apply(this, arguments));
    });
  }
  function constantNull() {
    return null;
  }
  function selection_insert(name, before) {
    var create = typeof name === "function" ? name : creator(name),
        select = before == null ? constantNull : typeof before === "function" ? before : selector(before);
    return this.select(function () {
      return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
    });
  }
  function remove() {
    var parent = this.parentNode;
    if (parent) parent.removeChild(this);
  }
  function selection_remove() {
    return this.each(remove);
  }
  function selection_cloneShallow() {
    var clone = this.cloneNode(false),
        parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_cloneDeep() {
    var clone = this.cloneNode(true),
        parent = this.parentNode;
    return parent ? parent.insertBefore(clone, this.nextSibling) : clone;
  }
  function selection_clone(deep) {
    return this.select(deep ? selection_cloneDeep : selection_cloneShallow);
  }
  function selection_datum(value) {
    return arguments.length ? this.property("__data__", value) : this.node().__data__;
  }
  function contextListener(listener) {
    return function (event) {
      listener.call(this, event, this.__data__);
    };
  }
  function parseTypenames$1(typenames) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
      var name = "",
          i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      return {
        type: t,
        name: name
      };
    });
  }
  function onRemove(typename) {
    return function () {
      var on = this.__on;
      if (!on) return;
      for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
        if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
        } else {
          on[++i] = o;
        }
      }
      if (++i) on.length = i;else delete this.__on;
    };
  }
  function onAdd(typename, value, options) {
    return function () {
      var on = this.__on,
          o,
          listener = contextListener(value);
      if (on) for (var j = 0, m = on.length; j < m; ++j) {
        if ((o = on[j]).type === typename.type && o.name === typename.name) {
          this.removeEventListener(o.type, o.listener, o.options);
          this.addEventListener(o.type, o.listener = listener, o.options = options);
          o.value = value;
          return;
        }
      }
      this.addEventListener(typename.type, listener, options);
      o = {
        type: typename.type,
        name: typename.name,
        value: value,
        listener: listener,
        options: options
      };
      if (!on) this.__on = [o];else on.push(o);
    };
  }
  function selection_on(typename, value, options) {
    var typenames = parseTypenames$1(typename + ""),
        i,
        n = typenames.length,
        t;
    if (arguments.length < 2) {
      var on = this.node().__on;
      if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
        for (i = 0, o = on[j]; i < n; ++i) {
          if ((t = typenames[i]).type === o.type && t.name === o.name) {
            return o.value;
          }
        }
      }
      return;
    }
    on = value ? onAdd : onRemove;
    for (i = 0; i < n; ++i) {
      this.each(on(typenames[i], value, options));
    }
    return this;
  }
  function dispatchEvent(node, type, params) {
    var window = defaultView(node),
        event = window.CustomEvent;
    if (typeof event === "function") {
      event = new event(type, params);
    } else {
      event = window.document.createEvent("Event");
      if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;else event.initEvent(type, false, false);
    }
    node.dispatchEvent(event);
  }
  function dispatchConstant(type, params) {
    return function () {
      return dispatchEvent(this, type, params);
    };
  }
  function dispatchFunction(type, params) {
    return function () {
      return dispatchEvent(this, type, params.apply(this, arguments));
    };
  }
  function selection_dispatch(type, params) {
    return this.each((typeof params === "function" ? dispatchFunction : dispatchConstant)(type, params));
  }
  function selection_iterator() {
    var groups, j, m, group, i, n, node;
    return regeneratorRuntime.wrap(function selection_iterator$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            groups = this._groups, j = 0, m = groups.length;
          case 1:
            if (!(j < m)) {
              _context.next = 13;
              break;
            }
            group = groups[j], i = 0, n = group.length;
          case 3:
            if (!(i < n)) {
              _context.next = 10;
              break;
            }
            if (!(node = group[i])) {
              _context.next = 7;
              break;
            }
            _context.next = 7;
            return node;
          case 7:
            ++i;
            _context.next = 3;
            break;
          case 10:
            ++j;
            _context.next = 1;
            break;
          case 13:
          case "end":
            return _context.stop();
        }
      }
    }, _marked, this);
  }
  var root = [null];
  function Selection$1(groups, parents) {
    this._groups = groups;
    this._parents = parents;
  }
  function selection() {
    return new Selection$1([[document.documentElement]], root);
  }
  function selection_selection() {
    return this;
  }
  Selection$1.prototype = selection.prototype = _defineProperty$1({
    constructor: Selection$1,
    select: selection_select,
    selectAll: selection_selectAll,
    selectChild: selection_selectChild,
    selectChildren: selection_selectChildren,
    filter: selection_filter,
    data: selection_data,
    enter: selection_enter,
    exit: selection_exit,
    join: selection_join,
    merge: selection_merge,
    selection: selection_selection,
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
  }, Symbol.iterator, selection_iterator);
  function select(selector) {
    return typeof selector === "string" ? new Selection$1([[document.querySelector(selector)]], [document.documentElement]) : new Selection$1([[selector]], root);
  }
  function selectAll(selector) {
    return typeof selector === "string" ? new Selection$1([document.querySelectorAll(selector)], [document.documentElement]) : new Selection$1([array(selector)], root);
  }
  var noop = {
    value: function value() {}
  };
  function dispatch() {
    for (var i = 0, n = arguments.length, _ = {}, t; i < n; ++i) {
      if (!(t = arguments[i] + "") || t in _ || /[\s.]/.test(t)) throw new Error("illegal type: " + t);
      _[t] = [];
    }
    return new Dispatch(_);
  }
  function Dispatch(_) {
    this._ = _;
  }
  function parseTypenames(typenames, types) {
    return typenames.trim().split(/^|\s+/).map(function (t) {
      var name = "",
          i = t.indexOf(".");
      if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
      if (t && !types.hasOwnProperty(t)) throw new Error("unknown type: " + t);
      return {
        type: t,
        name: name
      };
    });
  }
  Dispatch.prototype = dispatch.prototype = {
    constructor: Dispatch,
    on: function on(typename, callback) {
      var _ = this._,
          T = parseTypenames(typename + "", _),
          t,
          i = -1,
          n = T.length; // If no callback was specified, return the callback of the given type and name.
      if (arguments.length < 2) {
        while (++i < n) {
          if ((t = (typename = T[i]).type) && (t = get$1(_[t], typename.name))) return t;
        }
        return;
      } // If a type was specified, set the callback for the given type and name.
      // Otherwise, if a null callback was specified, remove callbacks of the given name.
      if (callback != null && typeof callback !== "function") throw new Error("invalid callback: " + callback);
      while (++i < n) {
        if (t = (typename = T[i]).type) _[t] = set$1(_[t], typename.name, callback);else if (callback == null) for (t in _) {
          _[t] = set$1(_[t], typename.name, null);
        }
      }
      return this;
    },
    copy: function copy() {
      var copy = {},
          _ = this._;
      for (var t in _) {
        copy[t] = _[t].slice();
      }
      return new Dispatch(copy);
    },
    call: function call(type, that) {
      if ((n = arguments.length - 2) > 0) for (var args = new Array(n), i = 0, n, t; i < n; ++i) {
        args[i] = arguments[i + 2];
      }
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
      for (t = this._[type], i = 0, n = t.length; i < n; ++i) {
        t[i].value.apply(that, args);
      }
    },
    apply: function apply(type, that, args) {
      if (!this._.hasOwnProperty(type)) throw new Error("unknown type: " + type);
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
    if (callback != null) type.push({
      name: name,
      value: callback
    });
    return type;
  }
  var frame = 0,
      // is an animation frame pending?
  timeout$1 = 0,
      // is a timeout pending?
  interval = 0,
      // are any timers active?
  pokeDelay = 1000,
      // how frequently we check for clock skew
  taskHead,
      taskTail,
      clockLast = 0,
      clockNow = 0,
      clockSkew = 0,
      clock = (typeof performance === "undefined" ? "undefined" : _typeof(performance)) === "object" && performance.now ? performance : Date,
      setFrame = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function (f) {
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
    restart: function restart(callback, delay, time) {
      if (typeof callback !== "function") throw new TypeError("callback is not a function");
      time = (time == null ? now() : +time) + (delay == null ? 0 : +delay);
      if (!this._next && taskTail !== this) {
        if (taskTail) taskTail._next = this;else taskHead = this;
        taskTail = this;
      }
      this._call = callback;
      this._time = time;
      sleep();
    },
    stop: function stop() {
      if (this._call) {
        this._call = null;
        this._time = Infinity;
        sleep();
      }
    }
  };
  function timer(callback, delay, time) {
    var t = new Timer();
    t.restart(callback, delay, time);
    return t;
  }
  function timerFlush() {
    now(); // Get the current time, if not already set.
    ++frame; // Pretend we’ve set an alarm, if we haven’t already.
    var t = taskHead,
        e;
    while (t) {
      if ((e = clockNow - t._time) >= 0) t._call.call(undefined, e);
      t = t._next;
    }
    --frame;
  }
  function wake() {
    clockNow = (clockLast = clock.now()) + clockSkew;
    frame = timeout$1 = 0;
    try {
      timerFlush();
    } finally {
      frame = 0;
      nap();
      clockNow = 0;
    }
  }
  function poke() {
    var now = clock.now(),
        delay = now - clockLast;
    if (delay > pokeDelay) clockSkew -= delay, clockLast = now;
  }
  function nap() {
    var t0,
        t1 = taskHead,
        t2,
        time = Infinity;
    while (t1) {
      if (t1._call) {
        if (time > t1._time) time = t1._time;
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
    if (frame) return; // Soonest alarm already set, or will be.
    if (timeout$1) timeout$1 = clearTimeout(timeout$1);
    var delay = time - clockNow; // Strictly less than if we recomputed clockNow.
    if (delay > 24) {
      if (time < Infinity) timeout$1 = setTimeout(wake, time - clock.now() - clockSkew);
      if (interval) interval = clearInterval(interval);
    } else {
      if (!interval) clockLast = clock.now(), interval = setInterval(poke, pokeDelay);
      frame = 1, setFrame(wake);
    }
  }
  function timeout(callback, delay, time) {
    var t = new Timer();
    delay = delay == null ? 0 : +delay;
    t.restart(function (elapsed) {
      t.stop();
      callback(elapsed + delay);
    }, delay, time);
    return t;
  }
  var emptyOn = dispatch("start", "end", "cancel", "interrupt");
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
    if (!schedules) node.__transition = {};else if (id in schedules) return;
    create(node, id, {
      name: name,
      index: index,
      // For context during callback.
      group: group,
      // For context during callback.
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
  function init$1(node, id) {
    var schedule = get(node, id);
    if (schedule.state > CREATED) throw new Error("too late; already scheduled");
    return schedule;
  }
  function set(node, id) {
    var schedule = get(node, id);
    if (schedule.state > STARTED) throw new Error("too late; already running");
    return schedule;
  }
  function get(node, id) {
    var schedule = node.__transition;
    if (!schedule || !(schedule = schedule[id])) throw new Error("transition not found");
    return schedule;
  }
  function create(node, id, self) {
    var schedules = node.__transition,
        tween; // Initialize the self timer when the transition is created.
    // Note the actual delay is not known until the first callback!
    schedules[id] = self;
    self.timer = timer(schedule, 0, self.time);
    function schedule(elapsed) {
      self.state = SCHEDULED;
      self.timer.restart(start, self.delay, self.time); // If the elapsed delay is less than our first sleep, start immediately.
      if (self.delay <= elapsed) start(elapsed - self.delay);
    }
    function start(elapsed) {
      var i, j, n, o; // If the state is not SCHEDULED, then we previously errored on start.
      if (self.state !== SCHEDULED) return stop();
      for (i in schedules) {
        o = schedules[i];
        if (o.name !== self.name) continue; // While this element already has a starting transition during this frame,
        // defer starting an interrupting transition until that transition has a
        // chance to tick (and possibly end); see d3/d3-transition#54!
        if (o.state === STARTED) return timeout(start); // Interrupt the active transition, if any.
        if (o.state === RUNNING) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("interrupt", node, node.__data__, o.index, o.group);
          delete schedules[i];
        } // Cancel any pre-empted transitions.
        else if (+i < id) {
          o.state = ENDED;
          o.timer.stop();
          o.on.call("cancel", node, node.__data__, o.index, o.group);
          delete schedules[i];
        }
      } // Defer the first tick to end of the current frame; see d3/d3#1576.
      // Note the transition may be canceled after start and before the first tick!
      // Note this must be scheduled before the start event; see d3/d3-transition#16!
      // Assuming this is successful, subsequent callbacks go straight to tick.
      timeout(function () {
        if (self.state === STARTED) {
          self.state = RUNNING;
          self.timer.restart(tick, self.delay, self.time);
          tick(elapsed);
        }
      }); // Dispatch the start event.
      // Note this must be done before the tween are initialized.
      self.state = STARTING;
      self.on.call("start", node, node.__data__, self.index, self.group);
      if (self.state !== STARTING) return; // interrupted
      self.state = STARTED; // Initialize the tween, deleting null tween.
      tween = new Array(n = self.tween.length);
      for (i = 0, j = -1; i < n; ++i) {
        if (o = self.tween[i].value.call(node, node.__data__, self.index, self.group)) {
          tween[++j] = o;
        }
      }
      tween.length = j + 1;
    }
    function tick(elapsed) {
      var t = elapsed < self.duration ? self.ease.call(null, elapsed / self.duration) : (self.timer.restart(stop), self.state = ENDING, 1),
          i = -1,
          n = tween.length;
      while (++i < n) {
        tween[i].call(node, t);
      } // Dispatch the end event.
      if (self.state === ENDING) {
        self.on.call("end", node, node.__data__, self.index, self.group);
        stop();
      }
    }
    function stop() {
      self.state = ENDED;
      self.timer.stop();
      delete schedules[id];
      for (var i in schedules) {
        return;
      } // eslint-disable-line no-unused-vars
      delete node.__transition;
    }
  }
  function interrupt(node, name) {
    var schedules = node.__transition,
        schedule,
        active,
        empty = true,
        i;
    if (!schedules) return;
    name = name == null ? null : name + "";
    for (i in schedules) {
      if ((schedule = schedules[i]).name !== name) {
        empty = false;
        continue;
      }
      active = schedule.state > STARTING && schedule.state < ENDING;
      schedule.state = ENDED;
      schedule.timer.stop();
      schedule.on.call(active ? "interrupt" : "cancel", node, node.__data__, schedule.index, schedule.group);
      delete schedules[i];
    }
    if (empty) delete node.__transition;
  }
  function selection_interrupt(name) {
    return this.each(function () {
      interrupt(this, name);
    });
  }
  function define(constructor, factory, prototype) {
    constructor.prototype = factory.prototype = prototype;
    prototype.constructor = constructor;
  }
  function extend$1(parent, definition) {
    var prototype = Object.create(parent.prototype);
    for (var key in definition) {
      prototype[key] = definition[key];
    }
    return prototype;
  }
  function Color() {}
  var _darker = 0.7;
  var _brighter = 1 / _darker;
  var reI = "\\s*([+-]?\\d+)\\s*",
      reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",
      reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",
      reHex = /^#([0-9a-f]{3,8})$/,
      reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"),
      reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"),
      reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"),
      reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"),
      reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"),
      reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
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
    copy: function copy(channels) {
      return Object.assign(new this.constructor(), this, channels);
    },
    displayable: function displayable() {
      return this.rgb().displayable();
    },
    hex: color_formatHex,
    // Deprecated! Use color.formatHex.
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
    format = (format + "").trim().toLowerCase();
    return (m = reHex.exec(format)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) // #ff0000
    : l === 3 ? new Rgb(m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, (m & 0xf) << 4 | m & 0xf, 1) // #f00
    : l === 8 ? rgba(m >> 24 & 0xff, m >> 16 & 0xff, m >> 8 & 0xff, (m & 0xff) / 0xff) // #ff000000
    : l === 4 ? rgba(m >> 12 & 0xf | m >> 8 & 0xf0, m >> 8 & 0xf | m >> 4 & 0xf0, m >> 4 & 0xf | m & 0xf0, ((m & 0xf) << 4 | m & 0xf) / 0xff) // #f000
    : null // invalid hex
    ) : (m = reRgbInteger.exec(format)) ? new Rgb(m[1], m[2], m[3], 1) // rgb(255, 0, 0)
    : (m = reRgbPercent.exec(format)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) // rgb(100%, 0%, 0%)
    : (m = reRgbaInteger.exec(format)) ? rgba(m[1], m[2], m[3], m[4]) // rgba(255, 0, 0, 1)
    : (m = reRgbaPercent.exec(format)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) // rgb(100%, 0%, 0%, 1)
    : (m = reHslPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) // hsl(120, 50%, 50%)
    : (m = reHslaPercent.exec(format)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) // hsla(120, 50%, 50%, 1)
    : named.hasOwnProperty(format) ? rgbn(named[format]) // eslint-disable-line no-prototype-builtins
    : format === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
  }
  function rgbn(n) {
    return new Rgb(n >> 16 & 0xff, n >> 8 & 0xff, n & 0xff, 1);
  }
  function rgba(r, g, b, a) {
    if (a <= 0) r = g = b = NaN;
    return new Rgb(r, g, b, a);
  }
  function rgbConvert(o) {
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Rgb();
    o = o.rgb();
    return new Rgb(o.r, o.g, o.b, o.opacity);
  }
  function rgb(r, g, b, opacity) {
    return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
  }
  function Rgb(r, g, b, opacity) {
    this.r = +r;
    this.g = +g;
    this.b = +b;
    this.opacity = +opacity;
  }
  define(Rgb, rgb, extend$1(Color, {
    brighter: function brighter(k) {
      k = k == null ? _brighter : Math.pow(_brighter, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    darker: function darker(k) {
      k = k == null ? _darker : Math.pow(_darker, k);
      return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
    },
    rgb: function rgb() {
      return this;
    },
    displayable: function displayable() {
      return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
    },
    hex: rgb_formatHex,
    // Deprecated! Use color.formatHex.
    formatHex: rgb_formatHex,
    formatRgb: rgb_formatRgb,
    toString: rgb_formatRgb
  }));
  function rgb_formatHex() {
    return "#" + hex(this.r) + hex(this.g) + hex(this.b);
  }
  function rgb_formatRgb() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
  }
  function hex(value) {
    value = Math.max(0, Math.min(255, Math.round(value) || 0));
    return (value < 16 ? "0" : "") + value.toString(16);
  }
  function hsla(h, s, l, a) {
    if (a <= 0) h = s = l = NaN;else if (l <= 0 || l >= 1) h = s = NaN;else if (s <= 0) h = NaN;
    return new Hsl(h, s, l, a);
  }
  function hslConvert(o) {
    if (o instanceof Hsl) return new Hsl(o.h, o.s, o.l, o.opacity);
    if (!(o instanceof Color)) o = color(o);
    if (!o) return new Hsl();
    if (o instanceof Hsl) return o;
    o = o.rgb();
    var r = o.r / 255,
        g = o.g / 255,
        b = o.b / 255,
        min = Math.min(r, g, b),
        max = Math.max(r, g, b),
        h = NaN,
        s = max - min,
        l = (max + min) / 2;
    if (s) {
      if (r === max) h = (g - b) / s + (g < b) * 6;else if (g === max) h = (b - r) / s + 2;else h = (r - g) / s + 4;
      s /= l < 0.5 ? max + min : 2 - max - min;
      h *= 60;
    } else {
      s = l > 0 && l < 1 ? 0 : h;
    }
    return new Hsl(h, s, l, o.opacity);
  }
  function hsl(h, s, l, opacity) {
    return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
  }
  function Hsl(h, s, l, opacity) {
    this.h = +h;
    this.s = +s;
    this.l = +l;
    this.opacity = +opacity;
  }
  define(Hsl, hsl, extend$1(Color, {
    brighter: function brighter(k) {
      k = k == null ? _brighter : Math.pow(_brighter, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    darker: function darker(k) {
      k = k == null ? _darker : Math.pow(_darker, k);
      return new Hsl(this.h, this.s, this.l * k, this.opacity);
    },
    rgb: function rgb() {
      var h = this.h % 360 + (this.h < 0) * 360,
          s = isNaN(h) || isNaN(this.s) ? 0 : this.s,
          l = this.l,
          m2 = l + (l < 0.5 ? l : 1 - l) * s,
          m1 = 2 * l - m2;
      return new Rgb(hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2), hsl2rgb(h, m1, m2), hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2), this.opacity);
    },
    displayable: function displayable() {
      return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
    },
    formatHsl: function formatHsl() {
      var a = this.opacity;
      a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
      return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
    }
  }));
  /* From FvD 13.37, CSS Color Module Level 3 */
  function hsl2rgb(h, m1, m2) {
    return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
  }
  var constant = function constant(x) {
    return function () {
      return x;
    };
  };
  function linear$1(a, d) {
    return function (t) {
      return a + t * d;
    };
  }
  function exponential(a, b, y) {
    return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function (t) {
      return Math.pow(a + t * b, y);
    };
  }
  function gamma(y) {
    return (y = +y) === 1 ? nogamma : function (a, b) {
      return b - a ? exponential(a, b, y) : constant(isNaN(a) ? b : a);
    };
  }
  function nogamma(a, b) {
    var d = b - a;
    return d ? linear$1(a, d) : constant(isNaN(a) ? b : a);
  }
  var interpolateRgb = function rgbGamma(y) {
    var color = gamma(y);
    function rgb$1(start, end) {
      var r = color((start = rgb(start)).r, (end = rgb(end)).r),
          g = color(start.g, end.g),
          b = color(start.b, end.b),
          opacity = nogamma(start.opacity, end.opacity);
      return function (t) {
        start.r = r(t);
        start.g = g(t);
        start.b = b(t);
        start.opacity = opacity(t);
        return start + "";
      };
    }
    rgb$1.gamma = rgbGamma;
    return rgb$1;
  }(1);
  function interpolateNumber(a, b) {
    return a = +a, b = +b, function (t) {
      return a * (1 - t) + b * t;
    };
  }
  var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
      reB = new RegExp(reA.source, "g");
  function zero(b) {
    return function () {
      return b;
    };
  }
  function one(b) {
    return function (t) {
      return b(t) + "";
    };
  }
  function interpolateString(a, b) {
    var bi = reA.lastIndex = reB.lastIndex = 0,
        // scan index for next number in b
    am,
        // current match in a
    bm,
        // current match in b
    bs,
        // string preceding current number in b, if any
    i = -1,
        // index in s
    s = [],
        // string constants and placeholders
    q = []; // number interpolators
    // Coerce inputs to strings.
    a = a + "", b = b + ""; // Interpolate pairs of numbers in a & b.
    while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
      if ((bs = bm.index) > bi) {
        // a string precedes the next number in b
        bs = b.slice(bi, bs);
        if (s[i]) s[i] += bs; // coalesce with previous string
        else s[++i] = bs;
      }
      if ((am = am[0]) === (bm = bm[0])) {
        // numbers in a & b match
        if (s[i]) s[i] += bm; // coalesce with previous string
        else s[++i] = bm;
      } else {
        // interpolate non-matching numbers
        s[++i] = null;
        q.push({
          i: i,
          x: interpolateNumber(am, bm)
        });
      }
      bi = reB.lastIndex;
    } // Add remains of b.
    if (bi < b.length) {
      bs = b.slice(bi);
      if (s[i]) s[i] += bs; // coalesce with previous string
      else s[++i] = bs;
    } // Special optimization for only a single match.
    // Otherwise, interpolate each of the numbers and rejoin the string.
    return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function (t) {
      for (var i = 0, o; i < b; ++i) {
        s[(o = q[i]).i] = o.x(t);
      }
      return s.join("");
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
    if (scaleX = Math.sqrt(a * a + b * b)) a /= scaleX, b /= scaleX;
    if (skewX = a * c + b * d) c -= a * skewX, d -= b * skewX;
    if (scaleY = Math.sqrt(c * c + d * d)) c /= scaleY, d /= scaleY, skewX /= scaleY;
    if (a * d < b * c) a = -a, b = -b, skewX = -skewX, scaleX = -scaleX;
    return {
      translateX: e,
      translateY: f,
      rotate: Math.atan2(b, a) * degrees,
      skewX: Math.atan(skewX) * degrees,
      scaleX: scaleX,
      scaleY: scaleY
    };
  }
  var svgNode;
  /* eslint-disable no-undef */
  function parseCss(value) {
    var m = new (typeof DOMMatrix === "function" ? DOMMatrix : WebKitCSSMatrix)(value + "");
    return m.isIdentity ? identity : decompose(m.a, m.b, m.c, m.d, m.e, m.f);
  }
  function parseSvg(value) {
    if (value == null) return identity;
    if (!svgNode) svgNode = document.createElementNS("http://www.w3.org/2000/svg", "g");
    svgNode.setAttribute("transform", value);
    if (!(value = svgNode.transform.baseVal.consolidate())) return identity;
    value = value.matrix;
    return decompose(value.a, value.b, value.c, value.d, value.e, value.f);
  }
  function interpolateTransform(parse, pxComma, pxParen, degParen) {
    function pop(s) {
      return s.length ? s.pop() + " " : "";
    }
    function translate(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push("translate(", null, pxComma, null, pxParen);
        q.push({
          i: i - 4,
          x: interpolateNumber(xa, xb)
        }, {
          i: i - 2,
          x: interpolateNumber(ya, yb)
        });
      } else if (xb || yb) {
        s.push("translate(" + xb + pxComma + yb + pxParen);
      }
    }
    function rotate(a, b, s, q) {
      if (a !== b) {
        if (a - b > 180) b += 360;else if (b - a > 180) a += 360; // shortest path
        q.push({
          i: s.push(pop(s) + "rotate(", null, degParen) - 2,
          x: interpolateNumber(a, b)
        });
      } else if (b) {
        s.push(pop(s) + "rotate(" + b + degParen);
      }
    }
    function skewX(a, b, s, q) {
      if (a !== b) {
        q.push({
          i: s.push(pop(s) + "skewX(", null, degParen) - 2,
          x: interpolateNumber(a, b)
        });
      } else if (b) {
        s.push(pop(s) + "skewX(" + b + degParen);
      }
    }
    function scale(xa, ya, xb, yb, s, q) {
      if (xa !== xb || ya !== yb) {
        var i = s.push(pop(s) + "scale(", null, ",", null, ")");
        q.push({
          i: i - 4,
          x: interpolateNumber(xa, xb)
        }, {
          i: i - 2,
          x: interpolateNumber(ya, yb)
        });
      } else if (xb !== 1 || yb !== 1) {
        s.push(pop(s) + "scale(" + xb + "," + yb + ")");
      }
    }
    return function (a, b) {
      var s = [],
          // string constants and placeholders
      q = []; // number interpolators
      a = parse(a), b = parse(b);
      translate(a.translateX, a.translateY, b.translateX, b.translateY, s, q);
      rotate(a.rotate, b.rotate, s, q);
      skewX(a.skewX, b.skewX, s, q);
      scale(a.scaleX, a.scaleY, b.scaleX, b.scaleY, s, q);
      a = b = null; // gc
      return function (t) {
        var i = -1,
            n = q.length,
            o;
        while (++i < n) {
          s[(o = q[i]).i] = o.x(t);
        }
        return s.join("");
      };
    };
  }
  var interpolateTransformCss = interpolateTransform(parseCss, "px, ", "px)", "deg)");
  var interpolateTransformSvg = interpolateTransform(parseSvg, ", ", ")", ")");
  function tweenRemove(id, name) {
    var tween0, tween1;
    return function () {
      var schedule = set(this, id),
          tween = schedule.tween; // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
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
    if (typeof value !== "function") throw new Error();
    return function () {
      var schedule = set(this, id),
          tween = schedule.tween; // If this node shared tween with the previous node,
      // just assign the updated shared tween and we’re done!
      // Otherwise, copy-on-write.
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
        if (i === n) tween1.push(t);
      }
      schedule.tween = tween1;
    };
  }
  function transition_tween(name, value) {
    var id = this._id;
    name += "";
    if (arguments.length < 2) {
      var tween = get(this.node(), id).tween;
      for (var i = 0, n = tween.length, t; i < n; ++i) {
        if ((t = tween[i]).name === name) {
          return t.value;
        }
      }
      return null;
    }
    return this.each((value == null ? tweenRemove : tweenFunction)(id, name, value));
  }
  function tweenValue(transition, name, value) {
    var id = transition._id;
    transition.each(function () {
      var schedule = set(this, id);
      (schedule.value || (schedule.value = {}))[name] = value.apply(this, arguments);
    });
    return function (node) {
      return get(node, id).value[name];
    };
  }
  function interpolate(a, b) {
    var c;
    return (typeof b === "number" ? interpolateNumber : b instanceof color ? interpolateRgb : (c = color(b)) ? (b = c, interpolateRgb) : interpolateString)(a, b);
  }
  function attrRemove(name) {
    return function () {
      this.removeAttribute(name);
    };
  }
  function attrRemoveNS(fullname) {
    return function () {
      this.removeAttributeNS(fullname.space, fullname.local);
    };
  }
  function attrConstant(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function () {
      var string0 = this.getAttribute(name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrConstantNS(fullname, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function () {
      var string0 = this.getAttributeNS(fullname.space, fullname.local);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function attrFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0,
          value1 = value(this),
          string1;
      if (value1 == null) return void this.removeAttribute(name);
      string0 = this.getAttribute(name);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function attrFunctionNS(fullname, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0,
          value1 = value(this),
          string1;
      if (value1 == null) return void this.removeAttributeNS(fullname.space, fullname.local);
      string0 = this.getAttributeNS(fullname.space, fullname.local);
      string1 = value1 + "";
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function transition_attr(name, value) {
    var fullname = namespace(name),
        i = fullname === "transform" ? interpolateTransformSvg : interpolate;
    return this.attrTween(name, typeof value === "function" ? (fullname.local ? attrFunctionNS : attrFunction)(fullname, i, tweenValue(this, "attr." + name, value)) : value == null ? (fullname.local ? attrRemoveNS : attrRemove)(fullname) : (fullname.local ? attrConstantNS : attrConstant)(fullname, i, value));
  }
  function attrInterpolate(name, i) {
    return function (t) {
      this.setAttribute(name, i.call(this, t));
    };
  }
  function attrInterpolateNS(fullname, i) {
    return function (t) {
      this.setAttributeNS(fullname.space, fullname.local, i.call(this, t));
    };
  }
  function attrTweenNS(fullname, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolateNS(fullname, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function attrTween(name, value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && attrInterpolate(name, i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function transition_attrTween(name, value) {
    var key = "attr." + name;
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    var fullname = namespace(name);
    return this.tween(key, (fullname.local ? attrTweenNS : attrTween)(fullname, value));
  }
  function delayFunction(id, value) {
    return function () {
      init$1(this, id).delay = +value.apply(this, arguments);
    };
  }
  function delayConstant(id, value) {
    return value = +value, function () {
      init$1(this, id).delay = value;
    };
  }
  function transition_delay(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? delayFunction : delayConstant)(id, value)) : get(this.node(), id).delay;
  }
  function durationFunction(id, value) {
    return function () {
      set(this, id).duration = +value.apply(this, arguments);
    };
  }
  function durationConstant(id, value) {
    return value = +value, function () {
      set(this, id).duration = value;
    };
  }
  function transition_duration(value) {
    var id = this._id;
    return arguments.length ? this.each((typeof value === "function" ? durationFunction : durationConstant)(id, value)) : get(this.node(), id).duration;
  }
  function easeConstant(id, value) {
    if (typeof value !== "function") throw new Error();
    return function () {
      set(this, id).ease = value;
    };
  }
  function transition_ease(value) {
    var id = this._id;
    return arguments.length ? this.each(easeConstant(id, value)) : get(this.node(), id).ease;
  }
  function easeVarying(id, value) {
    return function () {
      var v = value.apply(this, arguments);
      if (typeof v !== "function") throw new Error();
      set(this, id).ease = v;
    };
  }
  function transition_easeVarying(value) {
    if (typeof value !== "function") throw new Error();
    return this.each(easeVarying(this._id, value));
  }
  function transition_filter(match) {
    if (typeof match !== "function") match = matcher(match);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
        if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
          subgroup.push(node);
        }
      }
    }
    return new Transition(subgroups, this._parents, this._name, this._id);
  }
  function transition_merge(transition) {
    if (transition._id !== this._id) throw new Error();
    for (var groups0 = this._groups, groups1 = transition._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
      for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
        if (node = group0[i] || group1[i]) {
          merge[i] = node;
        }
      }
    }
    for (; j < m0; ++j) {
      merges[j] = groups0[j];
    }
    return new Transition(merges, this._parents, this._name, this._id);
  }
  function start$1(name) {
    return (name + "").trim().split(/^|\s+/).every(function (t) {
      var i = t.indexOf(".");
      if (i >= 0) t = t.slice(0, i);
      return !t || t === "start";
    });
  }
  function onFunction(id, name, listener) {
    var on0,
        on1,
        sit = start$1(name) ? init$1 : set;
    return function () {
      var schedule = sit(this, id),
          on = schedule.on; // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0) (on1 = (on0 = on).copy()).on(name, listener);
      schedule.on = on1;
    };
  }
  function transition_on(name, listener) {
    var id = this._id;
    return arguments.length < 2 ? get(this.node(), id).on.on(name) : this.each(onFunction(id, name, listener));
  }
  function removeFunction(id) {
    return function () {
      var parent = this.parentNode;
      for (var i in this.__transition) {
        if (+i !== id) return;
      }
      if (parent) parent.removeChild(this);
    };
  }
  function transition_remove() {
    return this.on("end.remove", removeFunction(this._id));
  }
  function transition_select(select) {
    var name = this._name,
        id = this._id;
    if (typeof select !== "function") select = selector(select);
    for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
        if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
          if ("__data__" in node) subnode.__data__ = node.__data__;
          subgroup[i] = subnode;
          schedule(subgroup[i], name, id, i, subgroup, get(node, id));
        }
      }
    }
    return new Transition(subgroups, this._parents, name, id);
  }
  function transition_selectAll(select) {
    var name = this._name,
        id = this._id;
    if (typeof select !== "function") select = selectorAll(select);
    for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          for (var children = select.call(node, node.__data__, i, group), child, inherit = get(node, id), k = 0, l = children.length; k < l; ++k) {
            if (child = children[k]) {
              schedule(child, name, id, k, children, inherit);
            }
          }
          subgroups.push(children);
          parents.push(node);
        }
      }
    }
    return new Transition(subgroups, parents, name, id);
  }
  var Selection = selection.prototype.constructor;
  function transition_selection() {
    return new Selection(this._groups, this._parents);
  }
  function styleNull(name, interpolate) {
    var string00, string10, interpolate0;
    return function () {
      var string0 = styleValue(this, name),
          string1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : interpolate0 = interpolate(string00 = string0, string10 = string1);
    };
  }
  function styleRemove(name) {
    return function () {
      this.style.removeProperty(name);
    };
  }
  function styleConstant(name, interpolate, value1) {
    var string00,
        string1 = value1 + "",
        interpolate0;
    return function () {
      var string0 = styleValue(this, name);
      return string0 === string1 ? null : string0 === string00 ? interpolate0 : interpolate0 = interpolate(string00 = string0, value1);
    };
  }
  function styleFunction(name, interpolate, value) {
    var string00, string10, interpolate0;
    return function () {
      var string0 = styleValue(this, name),
          value1 = value(this),
          string1 = value1 + "";
      if (value1 == null) string1 = value1 = (this.style.removeProperty(name), styleValue(this, name));
      return string0 === string1 ? null : string0 === string00 && string1 === string10 ? interpolate0 : (string10 = string1, interpolate0 = interpolate(string00 = string0, value1));
    };
  }
  function styleMaybeRemove(id, name) {
    var on0,
        on1,
        listener0,
        key = "style." + name,
        event = "end." + key,
        remove;
    return function () {
      var schedule = set(this, id),
          on = schedule.on,
          listener = schedule.value[key] == null ? remove || (remove = styleRemove(name)) : undefined; // If this node shared a dispatch with the previous node,
      // just assign the updated shared dispatch and we’re done!
      // Otherwise, copy-on-write.
      if (on !== on0 || listener0 !== listener) (on1 = (on0 = on).copy()).on(event, listener0 = listener);
      schedule.on = on1;
    };
  }
  function transition_style(name, value, priority) {
    var i = (name += "") === "transform" ? interpolateTransformCss : interpolate;
    return value == null ? this.styleTween(name, styleNull(name, i)).on("end.style." + name, styleRemove(name)) : typeof value === "function" ? this.styleTween(name, styleFunction(name, i, tweenValue(this, "style." + name, value))).each(styleMaybeRemove(this._id, name)) : this.styleTween(name, styleConstant(name, i, value), priority).on("end.style." + name, null);
  }
  function styleInterpolate(name, i, priority) {
    return function (t) {
      this.style.setProperty(name, i.call(this, t), priority);
    };
  }
  function styleTween(name, value, priority) {
    var t, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t = (i0 = i) && styleInterpolate(name, i, priority);
      return t;
    }
    tween._value = value;
    return tween;
  }
  function transition_styleTween(name, value, priority) {
    var key = "style." + (name += "");
    if (arguments.length < 2) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, styleTween(name, value, priority == null ? "" : priority));
  }
  function textConstant(value) {
    return function () {
      this.textContent = value;
    };
  }
  function textFunction(value) {
    return function () {
      var value1 = value(this);
      this.textContent = value1 == null ? "" : value1;
    };
  }
  function transition_text(value) {
    return this.tween("text", typeof value === "function" ? textFunction(tweenValue(this, "text", value)) : textConstant(value == null ? "" : value + ""));
  }
  function textInterpolate(i) {
    return function (t) {
      this.textContent = i.call(this, t);
    };
  }
  function textTween(value) {
    var t0, i0;
    function tween() {
      var i = value.apply(this, arguments);
      if (i !== i0) t0 = (i0 = i) && textInterpolate(i);
      return t0;
    }
    tween._value = value;
    return tween;
  }
  function transition_textTween(value) {
    var key = "text";
    if (arguments.length < 1) return (key = this.tween(key)) && key._value;
    if (value == null) return this.tween(key, null);
    if (typeof value !== "function") throw new Error();
    return this.tween(key, textTween(value));
  }
  function transition_transition() {
    var name = this._name,
        id0 = this._id,
        id1 = newId();
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          var inherit = get(node, id0);
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
    var on0,
        on1,
        that = this,
        id = that._id,
        size = that.size();
    return new Promise(function (resolve, reject) {
      var cancel = {
        value: reject
      },
          end = {
        value: function value() {
          if (--size === 0) resolve();
        }
      };
      that.each(function () {
        var schedule = set(this, id),
            on = schedule.on; // If this node shared a dispatch with the previous node,
        // just assign the updated shared dispatch and we’re done!
        // Otherwise, copy-on-write.
        if (on !== on0) {
          on1 = (on0 = on).copy();
          on1._.cancel.push(cancel);
          on1._.interrupt.push(cancel);
          on1._.end.push(end);
        }
        schedule.on = on1;
      }); // The selection was empty, resolve end immediately
      if (size === 0) resolve();
    });
  }
  var id = 0;
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
    return ++id;
  }
  var selection_prototype = selection.prototype;
  Transition.prototype = transition.prototype = _defineProperty$1({
    constructor: Transition,
    select: transition_select,
    selectAll: transition_selectAll,
    selectChild: selection_prototype.selectChild,
    selectChildren: selection_prototype.selectChildren,
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
    easeVarying: transition_easeVarying,
    end: transition_end
  }, Symbol.iterator, selection_prototype[Symbol.iterator]);
  var linear = function linear(t) {
    return +t;
  };
  function cubicInOut(t) {
    return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
  }
  var defaultTiming = {
    time: null,
    // Set on use.
    delay: 0,
    duration: 250,
    ease: cubicInOut
  };
  function inherit(node, id) {
    var timing;
    while (!(timing = node.__transition) || !(timing = timing[id])) {
      if (!(node = node.parentNode)) {
        throw new Error("transition ".concat(id, " not found"));
      }
    }
    return timing;
  }
  function selection_transition(name) {
    var id, timing;
    if (name instanceof Transition) {
      id = name._id, name = name._name;
    } else {
      id = newId(), (timing = defaultTiming).time = now(), name = name == null ? null : name + "";
    }
    for (var groups = this._groups, m = groups.length, j = 0; j < m; ++j) {
      for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
        if (node = group[i]) {
          schedule(node, name, id, i, group, timing || inherit(node, id));
        }
      }
    }
    return new Transition(groups, this._parents, name, id);
  }
  selection.prototype.interrupt = selection_interrupt;
  selection.prototype.transition = selection_transition;
  var d3 = {
    select: select,
    selectAll: selectAll,
    transition: transition,
    easeLinear: linear
  };
  function textDimensions(text, font) {
    var returnDimension = {};
    var pseudoDiv = insertPseudoDiv(text, font);
    returnDimension = {
      width: pseudoDiv.getBoundingClientRect()['width'],
      height: pseudoDiv.getBoundingClientRect()['height']
    };
    document.body.removeChild(pseudoDiv);
    return returnDimension;
  }
  function insertPseudoDiv(text, font) {
    var pseudoDiv;
    if (document.getElementById('pseudoDiv') == null) {
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
  function getLabelLengths(data, font) {
    var primary = data.reduce(function (a, b) {
      return a.concat(textDimensions(b[0], font).width);
    }, []);
    var secondary = data.reduce(function (a, b) {
      return a.concat(textDimensions(b[1], font).width);
    }, []);
    primary = primary.reduce(function (a, b) {
      return Math.max(a, b);
    }, 0);
    secondary = secondary.reduce(function (a, b) {
      return Math.max(a, b);
    }, 0);
    return {
      primary: primary,
      secondary: secondary
    };
  }
  function buildSimplexProblem(data, min, available) {
    if (data.length == 0) return [[], []];
    var sum = data.reduce(function (a, b) {
      return a + b;
    });
    var objective = 'Maximize Z = r';
    var constraints = [];
    var totalConstraint = "".concat(sum, "r");
    data.forEach(function (d, i) {
      constraints.push("".concat(d, "r + x").concat(i, " >= ").concat(min));
      totalConstraint += " + x".concat(i);
    });
    constraints.push("".concat(totalConstraint, " <= ").concat(available));
    return [objective, constraints];
  }
  function getColumn(matrix, column) {
    column = column == 'first' ? 0 : column == 'last' ? matrix[0].length - 1 : column;
    return matrix.reduce(function (a, b) {
      return a.concat(b[column]);
    }, []);
  }
  function trim(x) {
    var precision = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 7;
    return parseFloat(x.toFixed(precision));
  }
  function testVariable(variable, prefixes) {
    var regex = new RegExp("[".concat(prefixes.join(''), "]\\d+"), 'i');
    return variable.match(regex) != null;
  }
  function testRegex(input, testRegex, type) {
    var regex = /\b(?:\d*\.*\d*)([a|e|s]{1}\d*)\b/g;
    var badVariables = Array.from(input.matchAll(regex), function (d) {
      return d[1];
    }).join(', ');
    var match = input.match(testRegex);
    if (match != null && badVariables == '') return true;
    if (match == null) console.error("The ".concat(type, " ").concat(input, " is not in the proper format for an ").concat(type, " statement."));
    if (badVariables != '') console.error("The following variable(s) are reserved: ".concat(badVariables, "."));
    return false;
  }
  function multipleSolutionTest(model, variables, basicVariables, nonBasicVariables) {
    var primaryNonBasicVariables = nonBasicVariables.reduce(function (a, b) {
      return testVariable(b, ['s', 'e', 'a']) == false ? a.concat(variables.indexOf(b)) : a;
    }, []);
    if (primaryNonBasicVariables.length == 0) return false;
    var pivotColumns = [];
    primaryNonBasicVariables.forEach(function (index) {
      var column = getColumn(model, index);
      if (trim(column.slice(-1)[0]) == 0 & column.some(function (d) {
        return trim(d) > 0;
      })) {
        pivotColumns.push(index);
      }
    });
    return pivotColumns.length > 0 ? true : false;
  }
  function parseModel(objective, constraints) {
    if (objective == '' | constraints.length == 0) return [[], '', ''];
    var modelVariables = [];
    var modelCoeficients = [];
    var modelConstraints = [];
    var modelEqualities = [];
    var objectiveRegex = /(max|min)(?:.*\s*)(\w)(?:\s*=) ((?:\s*[+-]?\s*\d*\.*\d*\w\d*)+)/i;
    var constraintRegex = /((?:\s*[+-]?\s*\d*\.*\d*\w\d*)+)\s*(=|<=|>=)\s*(\d+)/i;
    if (testRegex(objective, objectiveRegex, 'objective') == false) return [[], '', ''];
    var constraintTest = constraints.every(function (x) {
      return testRegex(x, constraintRegex, 'constraint');
    });
    if (constraintTest == false) {
      return [[], '', ''];
    }
    var _objective$match = objective.match(objectiveRegex),
        _objective$match2 = _slicedToArray(_objective$match, 4);
        _objective$match2[0];
        var type = _objective$match2[1],
        objectiveVariable = _objective$match2[2],
        objectiveEquation = _objective$match2[3];
    type = type.toLowerCase();
    var _parseEquation = parseEquation(objectiveEquation),
        _parseEquation2 = _slicedToArray(_parseEquation, 2),
        objectiveCoeficients = _parseEquation2[0],
        objectiveVariables = _parseEquation2[1];
    constraints.forEach(function (d) {
      var _d$match = d.match(constraintRegex),
          _d$match2 = _slicedToArray(_d$match, 4);
          _d$match2[0];
          var equation = _d$match2[1],
          equality = _d$match2[2],
          constraint = _d$match2[3];
      modelConstraints.push(parseFloat(constraint));
      modelEqualities.push(equality);
      var _parseEquation3 = parseEquation(equation),
          _parseEquation4 = _slicedToArray(_parseEquation3, 2),
          constraintCoeficients = _parseEquation4[0],
          constraintVariables = _parseEquation4[1];
      modelVariables.push(constraintVariables);
      modelCoeficients.push(constraintCoeficients);
    });
    modelVariables.push(objectiveVariables);
    modelCoeficients.push(objectiveCoeficients);
    modelConstraints.push(0);
    var _buildTableau = buildTableau(modelVariables, modelCoeficients, modelConstraints, modelEqualities, objectiveVariable),
        _buildTableau2 = _slicedToArray(_buildTableau, 2),
        model = _buildTableau2[0],
        variables = _buildTableau2[1];
    return [model, variables, type];
  }
  function parseEquation(equation) {
    var elementRegex = /\s*[+-]?\s*\d*\.*\d*\w\d*/g;
    /* group 1 = sign; group 2 = coefficient; group 3 = variable */
    var coeficentRegex = /\s*([+-]?)\s*(\d*\.*\d*)(\w\d*)/;
    var coeficients = [];
    var variables = [];
    var elements = _toConsumableArray(equation.matchAll(elementRegex));
    elements.forEach(function (element) {
      var _element$0$match = element[0].match(coeficentRegex),
          _element$0$match2 = _slicedToArray(_element$0$match, 4);
          _element$0$match2[0];
          var sign = _element$0$match2[1],
          coeficient = _element$0$match2[2],
          variable = _element$0$match2[3];
      coeficient = coeficient == '' ? 1 : coeficient;
      coeficients.push(parseFloat(sign + coeficient));
      variables.push(variable);
    });
    return [coeficients, variables];
  }
  function buildTableau(variables, coeficients, constraints, equalities, objectiveVariable, type) {
    var model = [];
    var uniqueVariables = _toConsumableArray(new Set(variables.reduce(function (a, b) {
      return a.concat(b);
    }, [])));
    coeficients.forEach(function (coeficient, row) {
      var tmp = Array.apply(null, Array(uniqueVariables.length)).map(Number.prototype.valueOf, 0);
      coeficient.forEach(function (item, index) {
        var pos = uniqueVariables.indexOf(variables[row][index]);
        tmp[pos] = row == coeficients.length - 1 ? -item : item;
      });
      model.push(tmp);
    });
    var slackVariableCount = equalities.reduce(function (a, b) {
      return b == '<=' ? ++a : a;
    }, 0);
    var extraVariableCount = equalities.reduce(function (a, b) {
      return b == '>=' ? ++a : a;
    }, 0);
    var alternateVariableCount = equalities.reduce(function (a, b) {
      return b == '>=' || b == '=' ? ++a : a;
    }, 0);
    for (var i = 0; i < slackVariableCount; i++) {
      uniqueVariables.push('s' + i);
    }
    for (var _i = 0; _i < extraVariableCount; _i++) {
      uniqueVariables.push('e' + _i);
    }
    for (var _i2 = 0; _i2 < alternateVariableCount; _i2++) {
      uniqueVariables.push('a' + _i2);
    }
    uniqueVariables.push(objectiveVariable);
    var totalNewVariableCount = uniqueVariables.length - model[0].length;
    var tmp = Array.apply(null, Array(totalNewVariableCount)).map(Number.prototype.valueOf, 0);
    model.forEach(function (row) {
      row.push.apply(row, _toConsumableArray(tmp));
    });
    var lePositions = equalities.reduce(function (a, b, i) {
      return b == '<=' ? a.concat(i) : a;
    }, []);
    lePositions.forEach(function (row, index) {
      var column = uniqueVariables.indexOf('s' + index);
      model[row][column] = 1;
    });
    var aPositions = equalities.reduce(function (a, b, i) {
      return b == '>=' || b == '=' ? a.concat(i) : a;
    }, []);
    aPositions.forEach(function (row, index) {
      var column = uniqueVariables.indexOf('a' + index);
      model[row][column] = 1;
    });
    var gePositions = equalities.reduce(function (a, b, i) {
      return b == '>=' ? a.concat(i) : a;
    }, []);
    gePositions.forEach(function (row, index) {
      var column = uniqueVariables.indexOf('e' + index);
      model[row][column] = -1;
    });
    model.forEach(function (row, index) {
      row[row.length - 1] = constraints[index];
    });
    return [model, uniqueVariables];
  }
  function getPivot(model, variables, basicVariables, nonBasicVariables, type) {
    var pivotColumn;
    var pivotRow = null;
    var minRatio = Number.MAX_VALUE;
    var rowCount = model.length;
    var columnCount = model[0].length;
    var pivotRows = [];
    var objectiveValues = model[rowCount - 1].slice(0, -1).reduce(function (a, b, i) {
      return nonBasicVariables.indexOf(variables[i]) != -1 ? a.concat(b) : a;
    }, []);
    objectiveValues = type == 'max' ? objectiveValues.filter(function (d) {
      return trim(d) < 0;
    }) : objectiveValues.filter(function (d) {
      return trim(d) > 0;
    });
    if (objectiveValues.length == 0) {
      var test = multipleSolutionTest(model, variables, basicVariables, nonBasicVariables);
      return test == false ? 'solved' : 'multiple solutions';
    } else {
      var objectiveValue = objectiveValues[0];
      /* Bland's rule to avoid cycling */
      pivotColumn = model[rowCount - 1].indexOf(objectiveValue);
    }
    minRatio = model.reduce(function (a, b, i) {
      if (trim(b[pivotColumn]) > 0 & i != rowCount - 1) {
        var ratio = b[columnCount - 1] / b[pivotColumn];
        return ratio < a ? ratio : a;
      }
      return a;
    }, minRatio);
    pivotRows = model.reduce(function (a, b, i) {
      if (trim(b[pivotColumn]) > 0 & i != rowCount - 1) {
        return b[b.length - 1] / b[pivotColumn] == minRatio ? a.concat(i) : a;
      }
      return a;
    }, []);
    switch (pivotRows.length) {
      case 0:
        return 'unbounded';
      case 1:
        pivotRow = pivotRows[0];
        break;
      default:
        pivotRows.forEach(function (row) {
          if (testVariable(basicVariables[row], ['a'])) pivotRow = row;
        });
    }
    pivotRow = pivotRow == null ? pivotRows[0] : pivotRow;
    return {
      row: pivotRow,
      column: pivotColumn
    };
  }
  function pivotModel(model, pivot) {
    var multiplier;
    var pivotValue = model[pivot.row][pivot.column];
    if (pivotValue != 1) {
      model[pivot.row].forEach(function (value, index) {
        model[pivot.row][index] = value / pivotValue;
      });
    }
    model.forEach(function (row, rowIndex) {
      if (rowIndex !== pivot.row && row[pivot.column] !== 0) {
        multiplier = -row[pivot.column];
        row.forEach(function (value, columnIndex) {
          model[rowIndex][columnIndex] = multiplier * model[pivot.row][columnIndex] + model[rowIndex][columnIndex];
        });
      }
    });
    return model;
  }
  function buildPhaseTwoTableau(model, variables) {
    var objectiveRow = [];
    var alternativeRows = [];
    var phaseTwoTableau = [];
    model.forEach(function (row) {
      phaseTwoTableau.push(row);
    });
    variables.forEach(function (variable) {
      objectiveRow.push(testVariable(variable, ['a']) ? -1 : 0);
    });
    phaseTwoTableau.forEach(function (row) {
      for (var index = 0; index < row.length; index++) {
        if (testVariable(variables[index], ['a']) && row[index] == 1) {
          alternativeRows.push(row);
          break;
        }
      }
    });
    alternativeRows.forEach(function (row) {
      row.forEach(function (item, index) {
        objectiveRow[index] += item;
      });
    });
    phaseTwoTableau.push(objectiveRow);
    return phaseTwoTableau;
  }
  function reBaseModel(model, variables, basicVariables) {
    var objectiveRow = model[model.length - 1];
    var changedRows = [];
    variables.forEach(function (variable, index) {
      var row = basicVariables.indexOf(variable);
      if (row != -1 && trim(objectiveRow[index]) != 0) {
        changedRows.push(model[row].map(function (item) {
          return item * -objectiveRow[index];
        }));
      }
    });
    changedRows.forEach(function (row) {
      row.forEach(function (item, index) {
        model[model.length - 1][index] += item;
      });
    });
    return model;
  }
  function cleanPhaseTwoTableau(model, objective, variables, basicVariables, nonBasicVariables) {
    var lastRow = model.length - 1;
    var lastColumn = model[0].length - 1;
    if (trim(model[lastRow][lastColumn]) > 0) {
      return [model, 'infeasible'];
    }
    model.push(objective);
    var columnsToRemove = variables.reduce(function (a, b, i) {
      return testVariable(b, ['a']) && basicVariables.indexOf(b) == -1 ? a.concat(i) : a;
    }, []).reverse();
    model.forEach(function (row) {
      columnsToRemove.forEach(function (column) {
        row.splice(column, 1);
      });
    });
    basicVariables.reduce(function (a, b) {
      return testVariable(b, ['a']) ? ++a : a;
    }, 0);
    model.splice(lastRow, 1)[0];
    columnsToRemove.forEach(function (column) {
      variables.splice(column, 1);
    });
    var indexes = nonBasicVariables.reduce(function (a, b, i) {
      return testVariable(b, ['a']) ? a.concat(i) : a;
    }, []).reverse();
    indexes.forEach(function (index) {
      nonBasicVariables.splice(index, 1);
    });
    model = reBaseModel(model, variables, basicVariables);
    return [model, ''];
  }
  function getVariables(model, variables) {
    var prefixCodes = ['s', 'a'];
    var basicVariableCount = variables.reduce(function (a, b) {
      return testVariable(b, prefixCodes) ? ++a : a;
    }, 0);
    var lastRow = model.length - 1;
    var zPrefix = variables[variables.length - 1];
    var basicVariables = new Array(basicVariableCount);
    var nonBasicVariables = [];
    model.forEach(function (row, index) {
      row.forEach(function (item, column) {
        var isValidColumn = testVariable(variables[column], prefixCodes);
        var isZcolumn = variables[column] == zPrefix && index == lastRow;
        if (item == 1 && isValidColumn || isZcolumn) {
          basicVariables[index] = variables[column];
        }
      });
    });
    variables.forEach(function (variable) {
      if (basicVariables.indexOf(variable) == -1) nonBasicVariables.push(variable);
    });
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
  function buildSolution(model, basicVariables, nonBasicVariables, result) {
    var solution = [];
    var lastColumn = model[0].length - 1;
    for (var i = 0; i < basicVariables.length; i++) {
      solution.push([basicVariables[i], trim(model[i][lastColumn])]);
    }
    return {
      solution: solution,
      result: result
    };
  }
  function executeSimplex(model, variables, basicVariables, nonBasicVariables, type) {
    var pivot;
    while (true) {
      pivot = getPivot(model, variables, basicVariables, nonBasicVariables, type);
      switch (pivot) {
        case 'solved':
        case 'multiple solutions':
        case 'unbounded':
          return [model, pivot];
      }
      model = pivotModel(model, pivot);
      var _swapVariables = swapVariables(pivot, variables, basicVariables, nonBasicVariables);
      basicVariables = _swapVariables.basicVariables;
      nonBasicVariables = _swapVariables.nonBasicVariables;
    }
  }
  function simplex(objective, constraints) {
    var _parseModel = parseModel(objective, constraints),
        _parseModel2 = _slicedToArray(_parseModel, 3),
        model = _parseModel2[0],
        variables = _parseModel2[1],
        type = _parseModel2[2];
    if (model.length == 0) return {
      solution: [],
      result: ''
    };
    var tableau;
    var result;
    model.forEach(function (row) {
      /* ensure rhs is positive */
      if (row[row.length - 1] < 0) {
        row.forEach(function (item) {});
      }
    });
    var _getVariables = getVariables(model, variables),
        basicVariables = _getVariables.basicVariables,
        nonBasicVariables = _getVariables.nonBasicVariables;
    var isTwoPhase = variables.some(function (variable) {
      return testVariable(variable, ['a']);
    });
    if (isTwoPhase) {
      var originalObjective = model.pop();
      /* ignore the original objective function for now */
      tableau = buildPhaseTwoTableau(model, variables);
      var _executeSimplex = executeSimplex(tableau, variables, basicVariables, nonBasicVariables, 'min');
      var _executeSimplex2 = _slicedToArray(_executeSimplex, 2);
      tableau = _executeSimplex2[0];
      result = _executeSimplex2[1];
      if (result == 'unbounded') return buildSolution(tableau, basicVariables, nonBasicVariables, result);
      var _cleanPhaseTwoTableau = cleanPhaseTwoTableau(tableau, originalObjective, variables, basicVariables, nonBasicVariables);
      var _cleanPhaseTwoTableau2 = _slicedToArray(_cleanPhaseTwoTableau, 2);
      tableau = _cleanPhaseTwoTableau2[0];
      result = _cleanPhaseTwoTableau2[1];
      if (result == 'infeasible') return buildSolution(tableau, basicVariables, nonBasicVariables, result);
      var _executeSimplex3 = executeSimplex(tableau, variables, basicVariables, nonBasicVariables, type);
      var _executeSimplex4 = _slicedToArray(_executeSimplex3, 2);
      tableau = _executeSimplex4[0];
      result = _executeSimplex4[1];
    } else {
      var _executeSimplex5 = executeSimplex(model, variables, basicVariables, nonBasicVariables, type);
      var _executeSimplex6 = _slicedToArray(_executeSimplex5, 2);
      tableau = _executeSimplex6[0];
      result = _executeSimplex6[1];
    }
    return buildSolution(tableau, basicVariables, nonBasicVariables, result);
  }
  function bpMap(array, pad, min, start, end) {
    var ret = [];
    var data = array.reduce(function (a, b) {
      return b.value > 1e-5 ? a.concat(b.value) : a;
    }, []);
    var len = data.length;
    var totalPad = len * pad * 2;
    var availableSize = end - start - totalPad;
    var totalSize = data.reduce(function (a, b) {
      return a + b;
    }, 0);
    var _buildSimplexProblem = buildSimplexProblem(data, min, availableSize),
        _buildSimplexProblem2 = _slicedToArray(_buildSimplexProblem, 2),
        objective = _buildSimplexProblem2[0],
        constraints = _buildSimplexProblem2[1];
    var _simplex = simplex(objective, constraints),
        solution = _simplex.solution,
        result = _simplex.result;
    var ratio;
    switch (result) {
      case 'unbounded':
      case 'infeasible':
        ratio = availableSize / totalSize;
        break;
      case '':
        ratio = 0;
        break;
      default:
        ratio = solution.reduce(function (a, b) {
          return b[0] == 'r' ? b[1] : a;
        }, 0);
    }
    var b = start;
    var o = ratio;
    array.forEach(function (d) {
      var v = d.value * o;
      var adjustedMin = d.value < 1e-5 ? 0 : min;
      var adjustedP = d.value < 1e-5 ? 0 : pad;
      ret.push({
        s: b + adjustedP + (v < adjustedMin ? 0.5 * (adjustedMin - v) : 0),
        e: b + adjustedP + (v < adjustedMin ? 0.5 * (adjustedMin + v) : v),
        p: totalSize < 1e-5 ? 0 : d.value / totalSize
      });
      b += 2 * adjustedP + (v < adjustedMin ? adjustedMin : v);
    });
    return ret;
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
    mainBars['secondary'] = calculateMainBars("secondary", mb);
    subBars['primary'] = calculateSubBars("primary", mb, mainBars);
    subBars['secondary'] = calculateSubBars("secondary", mb, mainBars);
    return {
      mainBars: mainBars.primary.concat(mainBars.secondary),
      subBars: subBars.primary.concat(subBars.secondary),
      edges: calculateEdges(subBars)
    };
  }
  function calculateMainBars(part, mb) {
    var mainBars = [];
    var orient = glb.graph.orient();
    var ps = [];
    var mbData = glb.graph.data().slice();
    var keys = part == 'primary' ? glb.sourceKeys : glb.targetKeys;
    var key = part == 'primary' ? keyPrimary : keySecondary;
    var altKey = part == 'primary' ? keySecondary : keyPrimary;
    keys.forEach(function (d) {
      var sum = mb != undefined && mb.part != part ? mbData.reduce(function (a, b) {
        return key(b) == d && altKey(b) == mb.key ? a + value(b) : a;
      }, 0) : mbData.reduce(function (a, b) {
        return key(b) == d ? a + value(b) : a;
      }, 0);
      ps.push({
        key: d,
        value: sum
      });
    });
    var bars = bpMap(ps, glb.graph.pad(), glb.minHeight, 0, orient == 'vertical' ? glb.height : glb.width);
    ps.forEach(function (d, i) {
      mainBars.push({
        x: orient == 'horizontal' ? (bars[i].s + bars[i].e) / 2 : part == 'primary' ? 0 : glb.width - glb.minWidth / 2,
        y: orient == 'vertical' ? (bars[i].s + bars[i].e) / 2 : part == 'primary' ? 0 : glb.height - glb.minWidth / 2,
        height: orient == 'vertical' ? (bars[i].e - bars[i].s) / 2 : glb.minWidth / 2,
        width: orient == 'horizontal' ? (bars[i].e - bars[i].s) / 2 : glb.minWidth / 2,
        part: part,
        key: d.key,
        value: d.value,
        percent: bars[i].p
      });
    });
    return mainBars;
  }
  function calculateSubBars(part, mb, mainBars) {
    var orient = glb.graph.orient();
    var subBars = [];
    var ps = [];
    var sbData = glb.graph.data().slice();
    var keys = part == 'primary' ? glb.sourceKeys : glb.targetKeys;
    var key = part == 'primary' ? keyPrimary : keySecondary;
    var altKey = part == 'primary' ? keySecondary : keyPrimary;
    keys.forEach(function (d) {
      var values = mb != undefined && mb.part != part ? sbData.reduce(function (a, b) {
        return key(b) == d ? altKey(b) == mb.key ? a.concat({
          key: altKey(b),
          value: value(b)
        }) : a.concat({
          key: altKey(b),
          value: 0
        }) : a;
      }, []) : sbData.reduce(function (a, b) {
        return key(b) == d ? a.concat({
          key: altKey(b),
          value: value(b)
        }) : a;
      }, []);
      ps.push({
        key: d,
        values: values
      });
    });
    ps.forEach(function (d) {
      var g = mainBars[part].filter(function (e) {
        return e.key == d.key;
      })[0];
      var bars = bpMap(d.values, 0, 0, orient == 'vertical' ? g.y - g.height : g.x - g.width, orient == 'vertical' ? g.y + g.height : g.x + g.width);
      d.values.forEach(function (t, i) {
        subBars.push({
          x: orient == 'vertical' ? part == 'primary' ? 0 : glb.width - glb.minWidth / 2 : (bars[i].s + bars[i].e) / 2,
          y: orient == 'horizontal' ? part == 'primary' ? 0 : glb.height - glb.minWidth / 2 : (bars[i].s + bars[i].e) / 2,
          height: (orient == 'vertical' ? bars[i].e - bars[i].s : glb.minWidth) / 2,
          width: (orient == 'horizontal' ? bars[i].e - bars[i].s : glb.minWidth) / 2,
          part: part,
          primary: part == 'primary' ? d.key : t.key,
          secondary: part == 'primary' ? t.key : d.key,
          value: t.value,
          percent: bars[i].p * g.percent,
          index: part == 'primary' ? "".concat(d.key, "|").concat(t.key) : "".concat(t.key, "|").concat(d.key)
        });
      });
    });
    return subBars;
  }
  function calculateEdges(subBars) {
    return subBars.primary.map(function (d) {
      var g = subBars.secondary.filter(function (e) {
        return e.index == d.index;
      })[0];
      return {
        path: glb.graph.orient() == 'vertical' ? edgeVert(d.x + d.width, d.y + d.height, g.x - g.width, g.y + g.height, g.x - g.width, g.y - g.height, d.x + d.width, d.y - d.height) : edgeHoriz(d.x - d.width, d.y + d.height, g.x - g.width, g.y - g.height, g.x + g.width, g.y - g.height, d.x + d.width, d.y + d.height),
        primary: d.primary,
        secondary: d.secondary,
        value: d.value,
        percent: d.percent
      };
    });
  }
  function edgeVert(x1, y1, x2, y2, x3, y3, x4, y4) {
    // if (biPartite.edgeMode() == 'straight') {
    if (glb.graph.edgeMode() == 'straight') {
      return "M".concat(x1, ",").concat(y1, "L").concat(x2, ",").concat(y2, "L").concat(x3, ",").concat(y3, "L").concat(x4, ",").concat(y4, "z");
    } else {
      var mx1 = (x1 + x2) / 2;
      var mx3 = (x3 + x4) / 2;
      return "M".concat(x1, ",").concat(y1, "C").concat(mx1, ",").concat(y1, " ").concat(mx1, ",").concat(y2, ",").concat(x2, ",").concat(y2, "L").concat(x3, ",").concat(y3, "C").concat(mx3, ",").concat(y3, " ").concat(mx3, ",").concat(y4, ",").concat(x4, ",").concat(y4, "z");
    }
  }
  function edgeHoriz(x1, y1, x2, y2, x3, y3, x4, y4) {
    // if (biPartite.edgeMode() =='straight') {
    if (glb.graph.edgeMode() == 'straight') {
      return "M".concat(x1, ",").concat(y1, "L").concat(x2, ",").concat(y2, "L").concat(x3, ",").concat(y3, "L").concat(x4, ",").concat(y4, "z");
    } else {
      var my1 = (y1 + y2) / 2;
      var my3 = (y3 + y4) / 2;
      return "M".concat(x1, ",").concat(y1, "C").concat(x1, ",").concat(my1, " ").concat(x2, ",").concat(my1, ",").concat(x2, ",").concat(y2, "L").concat(x3, ",").concat(y3, "C").concat(x3, ",").concat(my3, " ").concat(x4, ",").concat(my3, ",").concat(x4, ",").concat(y4, "z");
    }
  }
  function getTransitions(duration, name) {
    var t = d3.transition(name).duration(duration);
    var t1 = d3.transition(name).duration(duration / 2).ease(d3.easeLinear);
    var t2 = d3.transition(name).ease(d3.easeLinear);
    return [t, t1, t2];
  }
  var state = 'unclicked';
  function click(event) {
    if (state == 'unclicked') {
      state = 'clicked';
      mouseOver(event);
    } else {
      state = 'unclicked';
      mouseOut(event);
    }
  }
  function mouseOver(event) {
    var d = d3.select(event.currentTarget).datum();
    var newbars = bars(d);
    var _getTransitions = getTransitions(glb.graph.duration(), 'mouse'),
        _getTransitions2 = _slicedToArray(_getTransitions, 3),
        t = _getTransitions2[0],
        t1 = _getTransitions2[1],
        t2 = _getTransitions2[2];
    d3.selectAll('.biPartite-mainBar').filter(function (r) {
      return r.part === d.part && r.key === d.key;
    }).select('rect').style('stroke-opacity', 1);
    d3.selectAll('.biPartite-subBar').data(newbars.subBars).transition(t).attr('transform', function (d) {
      return "translate(".concat(d.x, ",").concat(d.y, ")");
    }).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    var e = d3.selectAll('.biPartite-edge').data(newbars.edges);
    e.filter(function (t) {
      return t[d.part] === d.key;
    }).transition(t).style('fill-opacity', glb.graph.edgeOpacity()).attr('d', function (d) {
      return d.path;
    });
    e.filter(function (t) {
      return t[d.part] !== d.key;
    }).transition(t).style('fill-opacity', 0).attr('d', function (d) {
      return d.path;
    });
    var mainBars = d3.selectAll('.biPartite-mainBar').data(newbars.mainBars);
    mainBars.transition(t).attr('transform', function (d) {
      return "translate(".concat(d.x, ",").concat(d.y, ")");
    }).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    mainBars.select('.biPartite-percentage.white').transition(t1).style('opacity', function (element) {
      return d.part == element.part ? 1 : 0;
    }).transition(t2).text(function (element) {
      return element.value == 0 ? '' : formatPercent(element.percent);
    }).style('opacity', function (element) {
      return element.value == 0 ? 0 : 1;
    });
    mainBars.select('.biPartite-label').transition(t).style('opacity', function (d) {
      return d.value == 0 ? 0 : 1;
    });
  }
  function mouseOut(event) {
    var d = d3.select(event.currentTarget).datum();
    var newBars = bars();
    var _getTransitions3 = getTransitions(glb.graph.duration(), 'mouse'),
        _getTransitions4 = _slicedToArray(_getTransitions3, 3),
        t = _getTransitions4[0],
        t1 = _getTransitions4[1],
        t2 = _getTransitions4[2];
    d3.selectAll('.biPartite-mainBar').filter(function (r) {
      return r.part === d.part && r.key === d.key;
    }).select('rect').style('stroke-opacity', 0);
    d3.selectAll('.biPartite-subBar').data(newBars.subBars).transition(t).attr('transform', function (d) {
      return "translate(".concat(d.x, ",").concat(d.y, ")");
    }).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    d3.selectAll('.biPartite-edge').data(newBars.edges).transition(t).style('fill-opacity', glb.graph.edgeOpacity()).attr('d', function (d) {
      return d.path;
    });
    var mainBars = d3.selectAll('.biPartite-mainBar').data(newBars.mainBars);
    mainBars.transition(t).attr('transform', function (d) {
      return "translate(".concat(d.x, ",").concat(d.y, ")");
    }).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    mainBars.select('.biPartite-percentage.white').transition(t1).style('opacity', function (element) {
      return d.part == element.part ? 1 : 0;
    }).transition(t2).text(function (element) {
      return element.value == 0 ? '' : formatPercent(element.percent);
    }).style('opacity', function (element) {
      return element.value == 0 ? 0 : 1;
    });
    mainBars.select('.biPartite-label').transition(t).style('opacity', 1);
  }
  var glb = {
    graph: undefined,
    data: [],
    container: undefined,
    fillColors: ['#66c2a5', '#fc8d62', '#8da0cb', '#e78ac3', '#a6d854', '#ffd92f', '#e5c494', '#b3b3b3'],
    sort: 'alpha',
    sourceKeys: [],
    targetKeys: [],
    orient: 'vertical',
    pad: 1,
    duration: 750,
    edgeOpacity: 0.4,
    edgeMode: 'curved',
    refresh: true,
    width: 0,
    height: 0,
    minWidth: 0,
    minHeight: 0,
    labelOffset: 0,
    eventTypeOver: 'mouseenter',
    eventTypeOut: 'mouseleave',
    eventListenerOver: mouseOver,
    eventListenerOut: mouseOut
  };
  function getFont(rule) {
    rule = rule.toLowerCase(); // defaults
    var fontStyle = getComputedStyle(document.documentElement, null).getPropertyValue('font-style');
    var fontVariant = getComputedStyle(document.documentElement, null).getPropertyValue('font-variant');
    var fontWeight = getComputedStyle(document.documentElement, null).getPropertyValue('font-weight');
    var fontSize = getComputedStyle(document.documentElement, null).getPropertyValue('font-size');
    var lineHeight = getComputedStyle(document.documentElement, null).getPropertyValue('line-height');
    var fontFamily = getComputedStyle(document.documentElement, null).getPropertyValue('font-family');
    var rules;
    var selectorText;
    _toConsumableArray(document.styleSheets).forEach(function (d) {
      rules = d.cssRules ? d.cssRules : d.rules;
      for (var i = 0; i < rules.length; i++) {
        selectorText = rules[i].selectorText.toLowerCase().split(/[\s,>+~]+/); // multiple selectors
        for (var j = 0; j < selectorText.length; j++) {
          if (selectorText[j].indexOf(rule) != -1) {
            if (rules[i].style['font'] != '') {
              // detect shorthand declaration
              return rules[i].style['font'];
            }
            fontStyle = rules[i].style['font-style'] == '' ? fontStyle : rules[i].style['font-style'];
            fontVariant = rules[i].style['font-variant'] == '' ? fontVariant : rules[i].style['font-variant'];
            fontWeight = rules[i].style['font-weight'] == '' ? fontWeight : rules[i].style['font-weight'];
            fontSize = rules[i].style['font-size'] == '' ? fontSize : rules[i].style['font-size'];
            lineHeight = rules[i].style['line-height'] == '' ? lineHeight : rules[i].style['line-height'];
            fontFamily = rules[i].style['font-family'] == '' ? fontFamily : rules[i].style['font-family']; //break;
          }
        }
      }
    });
    return "".concat(fontStyle, " ").concat(fontVariant, " ").concat(fontWeight, " ").concat(fontSize, "/").concat(lineHeight, " ").concat(fontFamily);
  }
  function formatPercent(value) {
    return value < 0.01 ? '< 1%' : "".concat(parseFloat(value * 100).toFixed(0), "%");
  }
  function getMargins(data) {
    var font = getFont('.biPartite-label'); // for label margins
    var dimensions = getLabelLengths(data, font);
    var minHeight = textDimensions('Mg', font).height;
    font = getFont('.biPartite-percentage'); //for minWidth
    return {
      primary: dimensions['primary'] + glb.graph.pad(),
      secondary: dimensions['secondary'] + glb.graph.pad(),
      minHeight: minHeight,
      minWidth: textDimensions('100%', font)['width']
    };
  }
  function graphSize() {
    var labelMargin = 10;
    var margins = getMargins(glb.graph.data());
    var minHeight = margins.minHeight;
    var minWidth = margins.minWidth;
    var labelOffset = minWidth / 2 + labelMargin;
    var width;
    var height;
    if (glb.graph.orient() == 'vertical') {
      width = glb.graph.container().getBoundingClientRect().width - margins.primary - margins.secondary - labelMargin * 2 - minWidth / 2;
      d3.select('#svgG').attr('transform', "translate(".concat(margins.primary + labelOffset, ", ", 0, ")"));
      height = glb.graph.container().getBoundingClientRect().height;
    } else {
      width = glb.graph.container().getBoundingClientRect().width;
      d3.select('#svgG').attr('transform', "translate(0, ".concat(margins.primary + labelOffset, ")"));
      height = glb.graph.container().getBoundingClientRect().height - margins.primary - margins.secondary - labelMargin * 2 - minWidth / 2;
    }
    return [width, height, minWidth, minHeight, labelOffset];
  }
  function collapsePath(path) {
    var origin = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'left';
    var regex = /[,\s]|[a-z]/gi;
    var pathSplit = path.split(regex);
    var pathType = pathSplit.length == 18 ? 'curved' : 'straight';
    return origin == 'left' ? pathType == 'curved' ? "M".concat(pathSplit[1], " ").concat(pathSplit[2], " L").concat(pathSplit[15], " ").concat(pathSplit[16], "z") : "M".concat(pathSplit[1], " ").concat(pathSplit[2], " L").concat(pathSplit[7], " ").concat(pathSplit[8], "z") : pathType == 'curved' ? "M".concat(pathSplit[7], " ").concat(pathSplit[8], " L").concat(pathSplit[9], " ").concat(pathSplit[10], "z") : "M".concat(pathSplit[3], " ").concat(pathSplit[4], " L").concat(pathSplit[5], " ").concat(pathSplit[6], "z");
  }
  function initArray(n) {
    var a = new Array(n);
    for (var i = 0; i < n; ++i) {
      a[i] = 0;
    }
    return a;
  }
  function getKeys(data) {
    var sourceKeys = _toConsumableArray(new Set(data.reduce(function (a, b) {
      return a.concat(keyPrimary(b));
    }, [])));
    var targetKeys = _toConsumableArray(new Set(data.reduce(function (a, b) {
      return a.concat(keySecondary(b));
    }, [])));
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
  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }
      keys.push.apply(keys, symbols);
    }
    return keys;
  }
  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }
    return target;
  }
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
      return target;
    };
    return _extends.apply(this, arguments);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) {
      arr2[i] = arr[i];
    }
    return arr2;
  }
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function F() {};
        return {
          s: F,
          n: function n() {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function e(_e) {
            throw _e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function s() {
        it = it.call(o);
      },
      n: function n() {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function e(_e2) {
        didErr = true;
        err = _e2;
      },
      f: function f() {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }
  function decasteljau(points, t) {
    var left = [];
    var right = [];
    function decasteljauRecurse(points, t) {
      if (points.length === 1) {
        left.push(points[0]);
        right.push(points[0]);
      } else {
        var newPoints = Array(points.length - 1);
        for (var i = 0; i < newPoints.length; i++) {
          if (i === 0) {
            left.push(points[0]);
          }
          if (i === newPoints.length - 1) {
            right.push(points[i + 1]);
          }
          newPoints[i] = [(1 - t) * points[i][0] + t * points[i + 1][0], (1 - t) * points[i][1] + t * points[i + 1][1]];
        }
        decasteljauRecurse(newPoints, t);
      }
    }
    if (points.length) {
      decasteljauRecurse(points, t);
    }
    return {
      left: left,
      right: right.reverse()
    };
  }
  function pointsToCommand(points) {
    var command = {};
    if (points.length === 4) {
      command.x2 = points[2][0];
      command.y2 = points[2][1];
    }
    if (points.length >= 3) {
      command.x1 = points[1][0];
      command.y1 = points[1][1];
    }
    command.x = points[points.length - 1][0];
    command.y = points[points.length - 1][1];
    if (points.length === 4) {
      // start, control1, control2, end
      command.type = 'C';
    } else if (points.length === 3) {
      // start, control, end
      command.type = 'Q';
    } else {
      // start, end
      command.type = 'L';
    }
    return command;
  }
  function splitCurveAsPoints(points, segmentCount) {
    segmentCount = segmentCount || 2;
    var segments = [];
    var remainingCurve = points;
    var tIncrement = 1 / segmentCount; // x-----x-----x-----x
    // t=  0.33   0.66   1
    // x-----o-----------x
    // r=  0.33
    //       x-----o-----x
    // r=         0.5  (0.33 / (1 - 0.33))  === tIncrement / (1 - (tIncrement * (i - 1))
    // x-----x-----x-----x----x
    // t=  0.25   0.5   0.75  1
    // x-----o----------------x
    // r=  0.25
    //       x-----o----------x
    // r=         0.33  (0.25 / (1 - 0.25))
    //             x-----o----x
    // r=         0.5  (0.25 / (1 - 0.5))
    for (var i = 0; i < segmentCount - 1; i++) {
      var tRelative = tIncrement / (1 - tIncrement * i);
      var split = decasteljau(remainingCurve, tRelative);
      segments.push(split.left);
      remainingCurve = split.right;
    } // last segment is just to the end from the last point
    segments.push(remainingCurve);
    return segments;
  }
  function splitCurve(commandStart, commandEnd, segmentCount) {
    var points = [[commandStart.x, commandStart.y]];
    if (commandEnd.x1 != null) {
      points.push([commandEnd.x1, commandEnd.y1]);
    }
    if (commandEnd.x2 != null) {
      points.push([commandEnd.x2, commandEnd.y2]);
    }
    points.push([commandEnd.x, commandEnd.y]);
    return splitCurveAsPoints(points, segmentCount).map(pointsToCommand);
  }
  var commandTokenRegex = /[MLCSTQAHVZmlcstqahv]|-?[\d.e+-]+/g;
  var typeMap = {
    M: ['x', 'y'],
    L: ['x', 'y'],
    H: ['x'],
    V: ['y'],
    C: ['x1', 'y1', 'x2', 'y2', 'x', 'y'],
    S: ['x2', 'y2', 'x', 'y'],
    Q: ['x1', 'y1', 'x', 'y'],
    T: ['x', 'y'],
    A: ['rx', 'ry', 'xAxisRotation', 'largeArcFlag', 'sweepFlag', 'x', 'y'],
    Z: []
  }; // Add lower case entries too matching uppercase (e.g. 'm' == 'M')
  Object.keys(typeMap).forEach(function (key) {
    typeMap[key.toLowerCase()] = typeMap[key];
  });
  function arrayOfLength(length, value) {
    var array = Array(length);
    for (var i = 0; i < length; i++) {
      array[i] = value;
    }
    return array;
  }
  function commandToString(command) {
    return "".concat(command.type).concat(typeMap[command.type].map(function (p) {
      return command[p];
    }).join(','));
  }
  function convertToSameType(aCommand, bCommand) {
    var conversionMap = {
      x1: 'x',
      y1: 'y',
      x2: 'x',
      y2: 'y'
    };
    var readFromBKeys = ['xAxisRotation', 'largeArcFlag', 'sweepFlag']; // convert (but ignore M types)
    if (aCommand.type !== bCommand.type && bCommand.type.toUpperCase() !== 'M') {
      var aConverted = {};
      Object.keys(bCommand).forEach(function (bKey) {
        var bValue = bCommand[bKey]; // first read from the A command
        var aValue = aCommand[bKey]; // if it is one of these values, read from B no matter what
        if (aValue === undefined) {
          if (readFromBKeys.includes(bKey)) {
            aValue = bValue;
          } else {
            // if it wasn't in the A command, see if an equivalent was
            if (aValue === undefined && conversionMap[bKey]) {
              aValue = aCommand[conversionMap[bKey]];
            } // if it doesn't have a converted value, use 0
            if (aValue === undefined) {
              aValue = 0;
            }
          }
        }
        aConverted[bKey] = aValue;
      }); // update the type to match B
      aConverted.type = bCommand.type;
      aCommand = aConverted;
    }
    return aCommand;
  }
  function splitSegment(commandStart, commandEnd, segmentCount) {
    var segments = []; // line, quadratic bezier, or cubic bezier
    if (commandEnd.type === 'L' || commandEnd.type === 'Q' || commandEnd.type === 'C') {
      segments = segments.concat(splitCurve(commandStart, commandEnd, segmentCount)); // general case - just copy the same point
    } else {
      var copyCommand = _extends({}, commandStart); // convert M to L
      if (copyCommand.type === 'M') {
        copyCommand.type = 'L';
      }
      segments = segments.concat(arrayOfLength(segmentCount - 1).map(function () {
        return copyCommand;
      }));
      segments.push(commandEnd);
    }
    return segments;
  }
  function extend(commandsToExtend, referenceCommands, excludeSegment) {
    // compute insertion points:
    // number of segments in the path to extend
    var numSegmentsToExtend = commandsToExtend.length - 1; // number of segments in the reference path.
    var numReferenceSegments = referenceCommands.length - 1; // this value is always between [0, 1].
    var segmentRatio = numSegmentsToExtend / numReferenceSegments; // create a map, mapping segments in referenceCommands to how many points
    // should be added in that segment (should always be >= 1 since we need each
    // point itself).
    // 0 = segment 0-1, 1 = segment 1-2, n-1 = last vertex
    var countPointsPerSegment = arrayOfLength(numReferenceSegments).reduce(function (accum, d, i) {
      var insertIndex = Math.floor(segmentRatio * i); // handle excluding segments
      if (excludeSegment && insertIndex < commandsToExtend.length - 1 && excludeSegment(commandsToExtend[insertIndex], commandsToExtend[insertIndex + 1])) {
        // set the insertIndex to the segment that this point should be added to:
        // round the insertIndex essentially so we split half and half on
        // neighbouring segments. hence the segmentRatio * i < 0.5
        var addToPriorSegment = segmentRatio * i % 1 < 0.5; // only skip segment if we already have 1 point in it (can't entirely remove a segment)
        if (accum[insertIndex]) {
          // TODO - Note this is a naive algorithm that should work for most d3-area use cases
          // but if two adjacent segments are supposed to be skipped, this will not perform as
          // expected. Could be updated to search for nearest segment to place the point in, but
          // will only do that if necessary.
          // add to the prior segment
          if (addToPriorSegment) {
            if (insertIndex > 0) {
              insertIndex -= 1; // not possible to add to previous so adding to next
            } else if (insertIndex < commandsToExtend.length - 1) {
              insertIndex += 1;
            } // add to next segment
          } else if (insertIndex < commandsToExtend.length - 1) {
            insertIndex += 1; // not possible to add to next so adding to previous
          } else if (insertIndex > 0) {
            insertIndex -= 1;
          }
        }
      }
      accum[insertIndex] = (accum[insertIndex] || 0) + 1;
      return accum;
    }, []); // extend each segment to have the correct number of points for a smooth interpolation
    var extended = countPointsPerSegment.reduce(function (extended, segmentCount, i) {
      // if last command, just add `segmentCount` number of times
      if (i === commandsToExtend.length - 1) {
        var lastCommandCopies = arrayOfLength(segmentCount, _extends({}, commandsToExtend[commandsToExtend.length - 1])); // convert M to L
        if (lastCommandCopies[0].type === 'M') {
          lastCommandCopies.forEach(function (d) {
            d.type = 'L';
          });
        }
        return extended.concat(lastCommandCopies);
      } // otherwise, split the segment segmentCount times.
      return extended.concat(splitSegment(commandsToExtend[i], commandsToExtend[i + 1], segmentCount));
    }, []); // add in the very first point since splitSegment only adds in the ones after it
    extended.unshift(commandsToExtend[0]);
    return extended;
  }
  function pathCommandsFromString(d) {
    // split into valid tokens
    var tokens = (d || '').match(commandTokenRegex) || [];
    var commands = [];
    var commandArgs;
    var command; // iterate over each token, checking if we are at a new command
    // by presence in the typeMap
    for (var i = 0; i < tokens.length; ++i) {
      commandArgs = typeMap[tokens[i]]; // new command found:
      if (commandArgs) {
        command = {
          type: tokens[i]
        }; // add each of the expected args for this command:
        for (var a = 0; a < commandArgs.length; ++a) {
          command[commandArgs[a]] = +tokens[i + a + 1];
        } // need to increment our token index appropriately since
        // we consumed token args
        i += commandArgs.length;
        commands.push(command);
      }
    }
    return commands;
  }
  function interpolatePathCommands(aCommandsInput, bCommandsInput, excludeSegment) {
    // make a copy so we don't mess with the input arrays
    var aCommands = aCommandsInput == null ? [] : aCommandsInput.slice();
    var bCommands = bCommandsInput == null ? [] : bCommandsInput.slice(); // both input sets are empty, so we don't interpolate
    if (!aCommands.length && !bCommands.length) {
      return function nullInterpolator() {
        return [];
      };
    } // do we add Z during interpolation? yes if both have it. (we'd expect both to have it or not)
    var addZ = (aCommands.length === 0 || aCommands[aCommands.length - 1].type === 'Z') && (bCommands.length === 0 || bCommands[bCommands.length - 1].type === 'Z'); // we temporarily remove Z
    if (aCommands.length > 0 && aCommands[aCommands.length - 1].type === 'Z') {
      aCommands.pop();
    }
    if (bCommands.length > 0 && bCommands[bCommands.length - 1].type === 'Z') {
      bCommands.pop();
    } // if A is empty, treat it as if it used to contain just the first point
    // of B. This makes it so the line extends out of from that first point.
    if (!aCommands.length) {
      aCommands.push(bCommands[0]); // otherwise if B is empty, treat it as if it contains the first point
      // of A. This makes it so the line retracts into the first point.
    } else if (!bCommands.length) {
      bCommands.push(aCommands[0]);
    } // extend to match equal size
    var numPointsToExtend = Math.abs(bCommands.length - aCommands.length);
    if (numPointsToExtend !== 0) {
      // B has more points than A, so add points to A before interpolating
      if (bCommands.length > aCommands.length) {
        aCommands = extend(aCommands, bCommands, excludeSegment); // else if A has more points than B, add more points to B
      } else if (bCommands.length < aCommands.length) {
        bCommands = extend(bCommands, aCommands, excludeSegment);
      }
    } // commands have same length now.
    // convert commands in A to the same type as those in B
    aCommands = aCommands.map(function (aCommand, i) {
      return convertToSameType(aCommand, bCommands[i]);
    }); // create mutable interpolated command objects
    var interpolatedCommands = aCommands.map(function (aCommand) {
      return _objectSpread2({}, aCommand);
    });
    if (addZ) {
      interpolatedCommands.push({
        type: 'Z'
      });
      aCommands.push({
        type: 'Z'
      }); // required for when returning at t == 0
    }
    return function pathCommandInterpolator(t) {
      // at 1 return the final value without the extensions used during interpolation
      if (t === 1) {
        return bCommandsInput == null ? [] : bCommandsInput;
      } // work with aCommands directly since interpolatedCommands are mutated
      if (t === 0) {
        return aCommands;
      } // interpolate the commands using the mutable interpolated command objs
      for (var i = 0; i < interpolatedCommands.length; ++i) {
        // if (interpolatedCommands[i].type === 'Z') continue;
        var aCommand = aCommands[i];
        var bCommand = bCommands[i];
        var interpolatedCommand = interpolatedCommands[i];
        var _iterator = _createForOfIteratorHelper(typeMap[interpolatedCommand.type]),
            _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var arg = _step.value;
            interpolatedCommand[arg] = (1 - t) * aCommand[arg] + t * bCommand[arg]; // do not use floats for flags (#27), round to integer
            if (arg === 'largeArcFlag' || arg === 'sweepFlag') {
              interpolatedCommand[arg] = Math.round(interpolatedCommand[arg]);
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
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
      // at 1 return the final value without the extensions used during interpolation
      if (t === 1) {
        return b == null ? '' : b;
      }
      var interpolatedCommands = commandInterpolator(t); // convert to a string (fastest concat: https://jsperf.com/join-concat/150)
      var interpolatedString = '';
      var _iterator2 = _createForOfIteratorHelper(interpolatedCommands),
          _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
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
  function fill(d) {
    var key = d.primary == undefined ? d.key : d.primary;
    var index = glb.sourceKeys.indexOf(key);
    if (index == -1) return '#000000';
    index = index % glb.fillColors.length; //wrap around
    return glb.fillColors[index];
  }
  function _update(bars) {
    var noDelay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var _ref = noDelay == true ? getTransitions(0, 'update') : getTransitions(glb.graph.duration(), 'update'),
        _ref2 = _slicedToArray(_ref, 3),
        t = _ref2[0],
        t1 = _ref2[1],
        t2 = _ref2[2];
    var subBars = d3.select('#biPartite-subBar').selectAll('.biPartite-subBar').data(bars.subBars);
    subBars.enter().append('g').attr('class', 'biPartite-subBar').attr('transform', function (d) {
      return "translate(".concat(d.x, ", ").concat(d.y, ")");
    }).append('rect').style('fill', function (d) {
      return fill(d);
    }).style('shape-rendering', 'crispEdges').transition(t).attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    subBars.exit().transition(t).on('start', function (d, i, nodes) {
      d3.select(nodes[i]).remove();
    });
    subBars.transition(t).attr('transform', function (d) {
      return "translate(".concat(d.x, ", ").concat(d.y, ")");
    }).select('rect').style('fill', function (d) {
      return fill(d);
    }).attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    var edges = d3.select('#biPartite-edge').selectAll('.biPartite-edge').data(bars.edges);
    edges.enter().append('path') // .merge(edges)
    .attr('class', 'biPartite-edge').style('fill', function (d) {
      return fill(d);
    }).style('fill-opacity', glb.graph.edgeOpacity()).attr('d', function (d) {
      return collapsePath(d.path);
    }).transition(t) // .attrTween('d', function (d) {
    //     return interpolatePath(d3.select(this).attr('d'), d.path);                
    // });
    .attrTween('d', function (d, i, nodes) {
      return interpolatePath(d3.select(nodes[i]).attr('d'), d.path);
    });
    edges.exit().transition(t).on('start', function (d, i, nodes) {
      d3.select(nodes[i]).remove();
    });
    edges.transition(t).style('fill', function (d) {
      return fill(d);
    }).attrTween('d', function (d, i, nodes) {
      return interpolatePath(d3.select(nodes[i]).attr('d'), d.path);
    });
    var mainBars = d3.select('#biPartite-mainBar').selectAll('.biPartite-mainBar').data(bars.mainBars);
    var mainBarsEnter = mainBars.enter().append('g').attr('transform', function (d) {
      return "translate(".concat(d.x, ", ").concat(d.y, ")");
    }).attr('class', 'biPartite-mainBar').on(glb.eventTypeOver, glb.eventListenerOver).on(glb.eventTypeOut, glb.eventListenerOut);
    mainBarsEnter.append('rect').attr('id', function (d, i) {
      return "mainBar".concat(i);
    }).attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh).style('fill-opacity', 0);
    mainBarsEnter.append('text').attr('class', 'biPartite-label').attr('x', function (d) {
      return d.part == 'primary' ? -glb.LabelOffset : glb.LabelOffset;
    }).attr('dy', '0.35em').style('opacity', 0).text(function (d) {
      return d.key;
    }).attr('text-anchor', function (d) {
      return d.part == 'primary' ? 'end' : 'start';
    }).attr('transform', function (d) {
      return glb.graph.orient() == 'vertical' ? 'rotate(0)' : 'rotate(90)';
    }).transition(t).style('opacity', 1);
    mainBarsEnter.append('text').attr('class', 'biPartite-percentage white').attr('dy', '0.35em').style('font', getFont('biPartite-percentage')).style('opacity', 0).style('pointer-events', 'none').style('clip-path', function (d, i) {
      return "url(#clip".concat(i, ")");
    }).text(function (d) {
      return formatPercent(d.percent);
    }).attr('transform', function (d) {
      return glb.graph.orient() == 'vertical' ? 'rotate(0)' : 'rotate(90)';
    }).transition(t).style('opacity', 1);
    mainBars.attr('transform', function (d) {
      return "translate(".concat(d.x, ", ").concat(d.y, ")");
    }).select('rect').attr('x', fx).attr('y', fy).attr('width', fw).attr('height', fh);
    mainBars.select('.biPartite-label').transition(t1).style('opacity', 0).transition(t2).attr('x', function (d) {
      return d.part == 'primary' ? -glb.LabelOffset : glb.LabelOffset;
    }).attr('text-anchor', function (d) {
      return d.part == 'primary' ? 'end' : 'start';
    }).text(function (d) {
      return d.key;
    }).style('opacity', 1);
    mainBars.select('.biPartite-percentage.white').text(function (d) {
      return formatPercent(d.percent);
    });
    mainBars.exit().transition(t).on('start', function (d, i, nodes) {
      d3.select(nodes[i]).remove();
    });
  }
  function init() {
    var svg = d3.select(glb.graph.container()).append('svg').attr('id', 'svg').attr('width', '100%').attr('height', '100%');
    var svgG = svg.append('g').attr('class', 'biPartite').attr('id', 'svgG');
    svgG.append('g').attr('id', 'biPartite-subBar');
    svgG.append('g').attr('id', 'biPartite-edge');
    svgG.append('g').attr('id', 'biPartite-mainBar');
    return svgG;
  }
  var start;
  var active = false;
  var width;
  var height;
  function startListener() {
    active = true;
    window.requestAnimationFrame(containerListener);
  }
  function containerListener(timeStamp) {
    start = start == undefined ? timeStamp : start;
    var threshold = 60;
    var elapsed = timeStamp - start;
    if (elapsed > threshold) {
      start = timeStamp;
      var newWidth = glb.graph.container().getBoundingClientRect().width;
      var newHeight = glb.graph.container().getBoundingClientRect().height;
      width = width == undefined ? newWidth : width;
      height = height == undefined ? newHeight : height;
      if (width != newWidth || height != newHeight) {
        width = newWidth;
        height = newHeight;
        glb.refresh = true;
        glb.graph.update(true);
      }
    }
    if (active == true) requestAnimationFrame(containerListener);
  }
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
        glb.sourceKeys = _toConsumableArray(new Set(data.reduce(function (a, b) {
          return a.concat(keyPrimary(b));
        }, [])));
        glb.targetKeys = _toConsumableArray(new Set(data.reduce(function (a, b) {
          return a.concat(keySecondary(b));
        }, [])));
    }
  }
  function sortAlpha(data) {
    var _getKeys = getKeys(data),
        sourceKeys = _getKeys.sourceKeys,
        targetKeys = _getKeys.targetKeys;
    glb.sourceKeys = sourceKeys.sort();
    glb.targetKeys = targetKeys.sort();
  }
  function sortBaryCentric(data) {
    var _getKeys2 = getKeys(data),
        sourceKeys = _getKeys2.sourceKeys,
        targetKeys = _getKeys2.targetKeys;
    var matrix = [];
    sourceKeys.forEach(function (sourceKey, row) {
      var tmp = [];
      targetKeys.forEach(function (targetKey, column) {
        var value = data.filter(function (d) {
          return d[0] == sourceKey && d[1] == targetKey;
        }).length;
        tmp.push(value);
      });
      var count = tmp.reduce(function (a, b) {
        return b == 1 ? a + b : a;
      }, 0);
      var rowCenter = tmp.reduce(function (a, b, i) {
        return b == 1 ? a + i : a;
      }, 0) / count;
      tmp.push(rowCenter);
      matrix.push(tmp);
    });
    var lastRow = targetKeys.length;
    var rowOrderedMatrix = [];
    var orderedSourceKeys = [];
    while (matrix.length > 0) {
      var lowIndex = matrix.reduce(function (a, b, i) {
        return b[lastRow] < a[1] ? [i, b[lastRow]] : a;
      }, [0, 1e10])[0];
      rowOrderedMatrix.push(matrix.splice(lowIndex, 1)[0].slice(0, -1)); // don't need the row barycenters anymore
      orderedSourceKeys.push(sourceKeys.splice(lowIndex, 1)[0]);
    }
    var columnSums = initArray(targetKeys.length);
    var columnIndexSums = initArray(targetKeys.length);
    rowOrderedMatrix.forEach(function (row, rowIndex) {
      row.forEach(function (item, column) {
        columnSums[column] += item;
        columnIndexSums[column] += item == 1 ? rowIndex + 1 : 0;
      });
    });
    var columnCenters = columnIndexSums.map(function (d, i) {
      return d / columnSums[i] - 1;
    });
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
      // min and max included 
      var ret = new Array(2);
      var sequence = Array.apply(null, {
        length: max + 1 - min
      }).map(function (d, i) {
        return i + min;
      });
      var index = randBetween(min, max);
      ret[0] = sequence.splice(index, 1)[0];
      max--;
      index = randBetween(min, max);
      ret[1] = sequence[index];
      return ret;
    }
    function resortData(keys, index, data) {
      var ret = [];
      keys.forEach(function (key) {
        data.forEach(function (row) {
          if (row[index] == key) ret.push(row);
        });
      });
      return ret;
    }
    var alpha = Math.pow(data.length, 2); //1350;
    var beta = data.length; //65;
    var dataCopy = data.slice();
    var _adjacencyGraph = adjacencyGraph(dataCopy),
        _adjacencyGraph2 = _slicedToArray(_adjacencyGraph, 3),
        graph = _adjacencyGraph2[0],
        sourceKeys = _adjacencyGraph2[1],
        targetKeys = _adjacencyGraph2[2];
    var density = data.length / (sourceKeys.length + targetKeys.length);
    var stoppingCount = alpha * density / (beta + density);
    var currentCount = 0;
    var _graphPairs = graphPairs(graph, sourceKeys, targetKeys),
        _graphPairs2 = _slicedToArray(_graphPairs, 2),
        pairs = _graphPairs2[0];
        _graphPairs2[1];
    var crossings = edgeCrossings(pairs);
    while (currentCount < stoppingCount && crossings > 0) {
      var tmpData = void 0;
      var leftKeys = sourceKeys.slice();
      var rightKeys = targetKeys.slice();
      var side = randBetween(0, 1);
      var _ref3 = side == 0 ? randPairs(0, leftKeys.length - 1) : randPairs(0, rightKeys.length - 1),
          _ref4 = _slicedToArray(_ref3, 2),
          index1 = _ref4[0],
          index2 = _ref4[1];
      if (side == 0) {
        var _ref5 = [leftKeys[index2], leftKeys[index1]];
        leftKeys[index1] = _ref5[0];
        leftKeys[index2] = _ref5[1];
        tmpData = resortData(leftKeys, 0, dataCopy);
      } else {
        var _ref6 = [rightKeys[index2], rightKeys[index1]];
        rightKeys[index1] = _ref6[0];
        rightKeys[index2] = _ref6[1];
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
    glb.targetKeys = targetKeys; // console.log ('sh crossings:', crossings);
  }
  function adjacencyGraph(data) {
    //convert data to an adjacency graph
    var _getKeys3 = getKeys(data),
        sourceKeys = _getKeys3.sourceKeys,
        targetKeys = _getKeys3.targetKeys;
    var graph = [];
    sourceKeys.forEach(function (sourceKey, row) {
      var tmp = [];
      targetKeys.forEach(function (targetKey, column) {
        var value = data.filter(function (d) {
          return d[0] == sourceKey && d[1] == targetKey;
        }).length;
        tmp.push(value);
      });
      graph.push(tmp);
    });
    return [graph, sourceKeys, targetKeys];
  }
  function graphPairs(graph, sourceKeys, targetKeys) {
    var pairs = [];
    var keyPairs = [];
    graph.forEach(function (vector, row) {
      vector.forEach(function (item, column) {
        if (item == 1) {
          pairs.push([row, column]);
          keyPairs.push([sourceKeys[row], targetKeys[column]]);
        }
      });
    });
    return [pairs, keyPairs];
  }
  function edgeCrossings(pairs) {
    var crossings = 0;
    pairs.forEach(function (pair, row) {
      for (var i = row + 1; i < pairs.length; i++) {
        if (pair[0] < pairs[i][0] && pair[1] > pairs[i][1]) crossings += 1;
      }
    });
    return crossings;
  }
  var _dataLoaded = /*#__PURE__*/new WeakMap();
  var _containerDefined = /*#__PURE__*/new WeakMap();
  var biPartite = /*#__PURE__*/function () {
    function biPartite(data, container) {
      _classCallCheck(this, biPartite);
      _classPrivateFieldInitSpec(this, _dataLoaded, {
        writable: true,
        value: false
      });
      _classPrivateFieldInitSpec(this, _containerDefined, {
        writable: true,
        value: false
      });
      switch (arguments.length) {
        case 0:
          break;
        case 1:
          this.data(data);
          break;
        case 2:
          this.data(data);
          this.container(container);
      }
      glb.graph = this;
    }
    _createClass(biPartite, [{
      key: "data",
      value: function data(_data) {
        if (_data == undefined) return glb.data;
        if (typeof _data != 'Array' || _data[0].length != 3 || typeof _data[0][0] != 'string' || typeof _data[0][1] != 'string' || typeof _data[0][3] != 'number') {
          console.error('The data is not properly specified. It must be a two-dimensional array with tuples of [string, string, number] in each row.');
        } else {
          glb.data = _data;
          glb.refresh = true;
          _classPrivateFieldSet(this, _dataLoaded, true);
        }
        return this;
      }
    }, {
      key: "container",
      value: function container(_container) {
        if (_container == undefined) return glb.container;
        glb.container = _container;
        glb.refresh = true;
        _classPrivateFieldSet(this, _containerDefined, true);
        startListener();
        return this;
      }
    }, {
      key: "show",
      value: function show() {
        if (_classPrivateFieldGet(this, _containerDefined) && _classPrivateFieldGet(this, _dataLoaded)) {
          init();
          this.update();
        } else {
          console.error('Both the data must be loaded and the container be set before the graph can be shown');
        }
        return this;
      }
    }, {
      key: "update",
      value: function update() {
        var noDelay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        if (_classPrivateFieldGet(this, _containerDefined) && _classPrivateFieldGet(this, _dataLoaded)) {
          if (glb.refresh == false) return;
          var _graphSize = graphSize();
          var _graphSize2 = _slicedToArray(_graphSize, 5);
          glb.width = _graphSize2[0];
          glb.height = _graphSize2[1];
          glb.minWidth = _graphSize2[2];
          glb.minHeight = _graphSize2[3];
          glb.LabelOffset = _graphSize2[4];
          sortKeys(this.data());
          _update(bars(), noDelay);
          glb.refresh = false;
        } else {
          console.error('Both the data must be loaded and the container be set before the graph can be updated');
        }
        return this;
      }
    }, {
      key: "orient",
      value: function orient(_orient) {
        if (_orient == undefined) return glb.orient;
        if (['horizontal', 'vertical'].indexOf(_orient) == -1) {
          console.error("The orient parameter should be one of ['horizontal' | 'vertical']");
        } else {
          glb.orient = _orient;
          glb.refresh = true;
        }
        return this;
      }
    }, {
      key: "event",
      value: function event(_event) {
        if (_event == undefined) return glb.event;
        if (['hover', 'click', 'doubleClick'].indexOf(_event) == -1) {
          console.error("The event, ".concat(_event, " is not valid. Event must be one of ['hover' | 'click' | 'doubleClick']"));
        } else {
          glb.event = _event;
          switch (_event) {
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
        }
        return this;
      }
    }, {
      key: "sort",
      value: function sort(_sort) {
        if (_sort == undefined) return glb.sort;
        if (['alpha', 'barycentric', 'sh', 'none'].indexOf(_sort) == -1) {
          console.error("The sort, ".concat(_sort, " is not valid. Event must be one of ['alpha' | 'barycentric' | 'sh' | 'none']"));
        } else {
          glb.sort = _sort;
          glb.refresh = true;
        }
        return this;
      }
    }, {
      key: "edgeMode",
      value: function edgeMode(_edgeMode) {
        if (_edgeMode == undefined) return glb.edgeMode;
        if (['straight', 'curved'].indexOf(_edgeMode) == -1) {
          console.error("The edge model, ".concat(_edgeMode, " is not valid. The edge mode must be one of ['straight' | 'curved']"));
        } else {
          glb.edgeMode = _edgeMode;
          glb.refresh = true;
        }
        return this;
      }
    }, {
      key: "edgeOpacity",
      value: function edgeOpacity(_edgeOpacity) {
        if (_edgeOpacity == undefined) return glb.edgeOpacity;
        if (typeof _edgeOpacity != 'number' || _edgeOpacity < 0 || _edgeOpacity > 1) {
          console.error("The edge opacity, ".concat(_edgeOpacity, " is not valid. The edge opacity must be a number between 0 and 1 inclusive"));
        } else {
          glb.edgeOpacity = _edgeOpacity;
          glb.refresh = true;
        }
        return this;
      }
    }, {
      key: "fillColors",
      value: function fillColors(_fillColors) {
        if (_fillColors == undefined) return glb.fillColors;
        if (typeof _fillColors != 'Array') {
          console.error("The fillColors, ".concat(_fillColors, " are not valid. They must be an array of valid CSS colors"));
        } else {
          glb.fillColors = _fillColors;
          glb.refresh = true;
        }
        return this;
      }
    }, {
      key: "pad",
      value: function pad(_pad) {
        if (_pad == undefined) return glb.pad;
        if (typeof _pad != 'number') {
          console.error("The pad argument, ".concat(_pad, " is not valid. It must be a number of pixels"));
        } else {
          glb.pad = _pad;
          glb.refresh = true;
        }
        return this;
      }
    }, {
      key: "duration",
      value: function duration(_duration) {
        if (_duration == undefined) return glb.duration;
        if (typeof _duration != 'number') {
          console.error("The duration argument, ".concat(_duration, " is not valid. It must be a number in milliseconds"));
        } else {
          glb.duration = _duration;
          glb.refresh = true;
        }
        return this;
      }
    }]);
    return biPartite;
  }();
  exports.biPartite = biPartite;
  Object.defineProperty(exports, '__esModule', { value: true });
  return exports;
})({});
