var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/tslib/tslib.es6.mjs
var tslib_es6_exports = {};
__export(tslib_es6_exports, {
  __addDisposableResource: () => __addDisposableResource,
  __assign: () => __assign,
  __asyncDelegator: () => __asyncDelegator,
  __asyncGenerator: () => __asyncGenerator,
  __asyncValues: () => __asyncValues,
  __await: () => __await,
  __awaiter: () => __awaiter,
  __classPrivateFieldGet: () => __classPrivateFieldGet,
  __classPrivateFieldIn: () => __classPrivateFieldIn,
  __classPrivateFieldSet: () => __classPrivateFieldSet,
  __createBinding: () => __createBinding,
  __decorate: () => __decorate,
  __disposeResources: () => __disposeResources,
  __esDecorate: () => __esDecorate,
  __exportStar: () => __exportStar,
  __extends: () => __extends,
  __generator: () => __generator,
  __importDefault: () => __importDefault,
  __importStar: () => __importStar,
  __makeTemplateObject: () => __makeTemplateObject,
  __metadata: () => __metadata,
  __param: () => __param,
  __propKey: () => __propKey,
  __read: () => __read,
  __rest: () => __rest,
  __rewriteRelativeImportExtension: () => __rewriteRelativeImportExtension,
  __runInitializers: () => __runInitializers,
  __setFunctionName: () => __setFunctionName,
  __spread: () => __spread,
  __spreadArray: () => __spreadArray,
  __spreadArrays: () => __spreadArrays,
  __values: () => __values,
  default: () => tslib_es6_default
});
function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
    throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() {
    this.constructor = d;
  }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
    t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
      if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
        t[p[i]] = s[p[i]];
    }
  return t;
}
function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
  return function(target, key) {
    decorator(target, key, paramIndex);
  };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) {
    if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
    return f;
  }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
    var context = {};
    for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
    for (var p in contextIn.access) context.access[p] = contextIn.access[p];
    context.addInitializer = function(f) {
      if (done) throw new TypeError("Cannot add initializers after decoration has completed");
      extraInitializers.push(accept(f || null));
    };
    var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
    if (kind === "accessor") {
      if (result === void 0) continue;
      if (result === null || typeof result !== "object") throw new TypeError("Object expected");
      if (_ = accept(result.get)) descriptor.get = _;
      if (_ = accept(result.set)) descriptor.set = _;
      if (_ = accept(result.init)) initializers.unshift(_);
    } else if (_ = accept(result)) {
      if (kind === "field") initializers.unshift(_);
      else descriptor[key] = _;
    }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
}
function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
    value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
}
function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
}
function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
}
function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function(resolve) {
      resolve(value);
    });
  }
  return new (P || (P = Promise))(function(resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }
    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }
    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}
function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() {
    if (t[0] & 1) throw t[1];
    return t[1];
  }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
    return this;
  }), g;
  function verb(n) {
    return function(v) {
      return step([n, v]);
    };
  }
  function step(op) {
    if (f) throw new TypeError("Generator is already executing.");
    while (g && (g = 0, op[0] && (_ = 0)), _) try {
      if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
      if (y = 0, t) op = [op[0] & 2, t.value];
      switch (op[0]) {
        case 0:
        case 1:
          t = op;
          break;
        case 4:
          _.label++;
          return { value: op[1], done: false };
        case 5:
          _.label++;
          y = op[1];
          op = [0];
          continue;
        case 7:
          op = _.ops.pop();
          _.trys.pop();
          continue;
        default:
          if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
            _ = 0;
            continue;
          }
          if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
            _.label = op[1];
            break;
          }
          if (op[0] === 6 && _.label < t[1]) {
            _.label = t[1];
            t = op;
            break;
          }
          if (t && _.label < t[2]) {
            _.label = t[2];
            _.ops.push(op);
            break;
          }
          if (t[2]) _.ops.pop();
          _.trys.pop();
          continue;
      }
      op = body.call(thisArg, _);
    } catch (e) {
      op = [6, e];
      y = 0;
    } finally {
      f = t = 0;
    }
    if (op[0] & 5) throw op[1];
    return { value: op[0] ? op[1] : void 0, done: true };
  }
}
function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function() {
      if (o && i >= o.length) o = void 0;
      return { value: o && o[i++], done: !o };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = { error };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }
  return ar;
}
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
    ar = ar.concat(__read(arguments[i]));
  return ar;
}
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
      r[k] = a[j];
  return r;
}
function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
    if (ar || !(i in from)) {
      if (!ar) ar = Array.prototype.slice.call(from, 0, i);
      ar[i] = from[i];
    }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
    return this;
  }, i;
  function awaitReturn(f) {
    return function(v) {
      return Promise.resolve(v).then(f, reject);
    };
  }
  function verb(n, f) {
    if (g[n]) {
      i[n] = function(v) {
        return new Promise(function(a, b) {
          q.push([n, v, a, b]) > 1 || resume(n, v);
        });
      };
      if (f) i[n] = f(i[n]);
    }
  }
  function resume(n, v) {
    try {
      step(g[n](v));
    } catch (e) {
      settle(q[0][3], e);
    }
  }
  function step(r) {
    r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
  }
  function fulfill(value) {
    resume("next", value);
  }
  function reject(value) {
    resume("throw", value);
  }
  function settle(f, v) {
    if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
  }
}
function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function(e) {
    throw e;
  }), verb("return"), i[Symbol.iterator] = function() {
    return this;
  }, i;
  function verb(n, f) {
    i[n] = o[n] ? function(v) {
      return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v;
    } : f;
  }
}
function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
    return this;
  }, i);
  function verb(n) {
    i[n] = o[n] && function(v) {
      return new Promise(function(resolve, reject) {
        v = o[n](v), settle(resolve, reject, v.done, v.value);
      });
    };
  }
  function settle(resolve, reject, d, v) {
    Promise.resolve(v).then(function(v2) {
      resolve({ value: v2, done: d });
    }, reject);
  }
}
function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) {
    Object.defineProperty(cooked, "raw", { value: raw });
  } else {
    cooked.raw = raw;
  }
  return cooked;
}
function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) {
    for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
  }
  __setModuleDefault(result, mod);
  return result;
}
function __importDefault(mod) {
  return mod && mod.__esModule ? mod : { default: mod };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() {
      try {
        inner.call(this);
      } catch (e) {
        return Promise.reject(e);
      }
    };
    env.stack.push({ value, dispose, async });
  } else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}
function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
            fail(e);
            return next();
          });
        } else s |= 1;
      } catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
    return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
      return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
    });
  }
  return path;
}
var extendStatics, __assign, __createBinding, __setModuleDefault, ownKeys, _SuppressedError, tslib_es6_default;
var init_tslib_es6 = __esm({
  "node_modules/tslib/tslib.es6.mjs"() {
    extendStatics = function(d, b) {
      extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
        d2.__proto__ = b2;
      } || function(d2, b2) {
        for (var p in b2) if (Object.prototype.hasOwnProperty.call(b2, p)) d2[p] = b2[p];
      };
      return extendStatics(d, b);
    };
    __assign = function() {
      __assign = Object.assign || function __assign2(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
      return __assign.apply(this, arguments);
    };
    __createBinding = Object.create ? function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0) k2 = k;
      o[k2] = m[k];
    };
    __setModuleDefault = Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    };
    ownKeys = function(o) {
      ownKeys = Object.getOwnPropertyNames || function(o2) {
        var ar = [];
        for (var k in o2) if (Object.prototype.hasOwnProperty.call(o2, k)) ar[ar.length] = k;
        return ar;
      };
      return ownKeys(o);
    };
    _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
      var e = new Error(message);
      return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
    };
    tslib_es6_default = {
      __extends,
      __assign,
      __rest,
      __decorate,
      __param,
      __esDecorate,
      __runInitializers,
      __propKey,
      __setFunctionName,
      __metadata,
      __awaiter,
      __generator,
      __createBinding,
      __exportStar,
      __values,
      __read,
      __spread,
      __spreadArrays,
      __spreadArray,
      __await,
      __asyncGenerator,
      __asyncDelegator,
      __asyncValues,
      __makeTemplateObject,
      __importStar,
      __importDefault,
      __classPrivateFieldGet,
      __classPrivateFieldSet,
      __classPrivateFieldIn,
      __addDisposableResource,
      __disposeResources,
      __rewriteRelativeImportExtension
    };
  }
});

// node_modules/zephyr-edge-contract/dist/lib/api-contract-negotiation/get-api-contract.js
var require_get_api_contract = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/api-contract-negotiation/get-api-contract.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ze_api_gateway = exports2.ZE_IS_PREVIEW = exports2.ZE_API_ENDPOINT_HOST = exports2.ZE_API_ENDPOINT = exports2.ZEPHYR_API_ENDPOINT = void 0;
    var ZEPHYR_API_ENDPOINT = () => {
      var _a;
      return (_a = process.env["ZE_API"]) !== null && _a !== void 0 ? _a : "https://api.zephyr-cloud.io";
    };
    exports2.ZEPHYR_API_ENDPOINT = ZEPHYR_API_ENDPOINT;
    var ZE_API_ENDPOINT = () => {
      var _a;
      return (_a = process.env["ZE_API_GATE"]) !== null && _a !== void 0 ? _a : "https://zeapi.zephyrcloud.app";
    };
    exports2.ZE_API_ENDPOINT = ZE_API_ENDPOINT;
    var ZE_API_ENDPOINT_HOST = () => new URL((0, exports2.ZE_API_ENDPOINT)()).host;
    exports2.ZE_API_ENDPOINT_HOST = ZE_API_ENDPOINT_HOST;
    var ZE_IS_PREVIEW = () => process.env["ZE_IS_PREVIEW"] === "true";
    exports2.ZE_IS_PREVIEW = ZE_IS_PREVIEW;
    exports2.ze_api_gateway = {
      logs: "/logs",
      build_stats: "/build-stats",
      auth_link: "/auth-link",
      resolve: "/resolve",
      application_config: "/application-config"
    };
  }
});

// node_modules/zephyr-edge-contract/dist/lib/errors/codes.js
var require_codes = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/errors/codes.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.isZeErrorEqual = exports2.ZeErrors = exports2.ZeErrorCategories = void 0;
    exports2.ZeErrorCategories = {
      /** Error we have yet catched and known */
      unknown: "00",
      /** Stage 0 build error */
      build: "10",
      /** Stage 1 Deployment error */
      deploy: "20",
      /** Browser error */
      browser: "30",
      /** Module Federation/Config related error */
      config: "40"
    };
    exports2.ZeErrors = {
      ERR_UNKNOWN: {
        id: "000",
        message: `
Unknown error: {{ message }}

`,
        kind: "unknown"
      },
      /** Package.json not found error */
      // TODO: this error is less likely to happen
      ERR_PACKAGE_JSON_NOT_FOUND: {
        id: "010",
        message: "package.json not found",
        kind: "build"
      },
      /** Package.json is not in a valid json format */
      ERR_PACKAGE_JSON_NOT_VALID: {
        id: "011",
        message: "Package.json is not in a valid json format.",
        kind: "build"
      },
      /** Webpack config error */
      ERR_WEBPACK_CONFIG: {
        id: "012",
        message: "Webpack config error.",
        kind: "build"
      },
      ERR_PACKAGE_JSON_MUST_HAVE_NAME_VERSION: {
        id: "013",
        message: "Zephyr need package.json to have name and version field to map your application configuration in deployment. Please ensure these fields exists in your package.json.",
        kind: "build"
      },
      ERR_GIT_REMOTE_ORIGIN: {
        id: "014",
        message: `
Git remote origin is not configured properly. git remote origin is not configured properly
- please set valid 'git remote origin' by using commands below
- git init && git remote add origin <url>
`,
        kind: "build"
      },
      /** Git username or email is not configured. */
      ERR_NO_GIT_USERNAME_EMAIL: {
        id: "015",
        message: `
Git username or email is not configured:
- please set valid 'git config user.name' and 'git config user.email'
- or provide ZE_USER_TOKEN as environment variable
`,
        kind: "build"
      },
      /** Could not get git info */
      ERR_NO_GIT_INFO: {
        id: "016",
        message: `Could not get git info.
Can you confirm this directory has initialized as a git repository?`,
        kind: "build"
      },
      /** Build error application_uid missing. */
      ERR_MISSING_APPLICATION_UID: {
        id: "017",
        message: "`application_uid` missing.",
        kind: "build"
      },
      /** Auth error */
      ERR_AUTH_ERROR: {
        id: "018",
        message: `
Failed to authenticate with Zephyr.

Please make sure you have a valid Zephyr account and you are logged in.

{{ message }}
`,
        kind: "build"
      },
      ERR_GET_BUILD_ID: {
        id: "019",
        message: `
Could not generate Build ID. Ensure you meet the following requirements:

1. Your Zephyr Account ({{ username }}) has write access to {{ application_uid }}
2. You own the repository or is a collaborator with write access.
3. This repository has commit history and has a proper git remote origin url.

When trying out public examples, make sure to fork the repository to your account so you can have write access.

`,
        kind: "build"
      },
      /** Could not initialize Zephyr Agent. */
      ERR_INITIALIZE_ZEPHYR_AGENT: {
        id: "020",
        message: "Could not initialize Zephyr Agent.",
        kind: "build"
      },
      /** Cloudflare specific error */
      ERR_UNABLE_CREATE_DIST_FOLDER: {
        id: "021",
        message: "Error creating dist folder.",
        kind: "build"
      },
      /** Deployment error, assets not found */
      ERR_ASSETS_NOT_FOUND: {
        id: "010",
        message: "Assets not found.",
        kind: "deploy"
      },
      /** Assets not found in snapshot */
      ERR_ASSETS_NOT_FOUND_IN_SNAPSHOT: {
        id: "011",
        message: "Assets not found in snapshot.",
        kind: "deploy"
      },
      /** Application_uid missing */
      ERR_DEPLOY_MISSING_APPLICATION_UID: {
        id: "012",
        message: "`application_uid` is required.",
        kind: "deploy"
      },
      ERR_MISSING_FILE_HASH: {
        id: "013",
        message: "Missing file hash.",
        kind: "deploy"
      },
      /** Failed to load application configuration. */
      ERR_LOAD_APP_CONFIG: {
        id: "014",
        message: `

Failed to load Application Configuration for {{ application_uid }}.

Try to remove ~/.zephyr folder and try again.

    `,
        kind: "deploy"
      },
      /** Did not receive envs from build stats upload */
      ERR_NOT_RECEIVE_ENVS_FROM_BUILD_STATS: {
        id: "016",
        message: "Did not receive envs from build stats upload.",
        kind: "deploy"
      },
      /** Failed to upload assets. */
      ERR_FAILED_UPLOAD: {
        id: "017",
        message: `

Could not upload {{ type }} to your Edge Provider. This error will affect your tags and environments and it might fail deployments to custom domains.

Please check your network connection and try again.

    `,
        kind: "deploy"
      },
      /** Snapshot uploads gave no results. */
      ERR_SNAPSHOT_UPLOADS_NO_RESULTS: {
        id: "019",
        message: "Snapshot uploads gave no results.",
        kind: "deploy"
      },
      /** Failed to get application hash list */
      ERR_GET_APPLICATION_HASH_LIST: {
        id: "020",
        message: "Failed to get application hash list.",
        kind: "deploy"
      },
      ERR_SNAPSHOT_ID_NOT_FOUND: {
        id: "022",
        message: "`snapshot_id` not found.",
        kind: "deploy"
      },
      ERR_SNAPSHOT_NOT_FOUND: {
        id: "023",
        message: "Snapshot not found.",
        kind: "deploy"
      },
      ERR_DEPLOY_LOCAL_BUILD: {
        id: "024",
        message: "Failed to deploy local build.",
        kind: "deploy"
      },
      /** Cloudflare specific error */
      ERR_WRANGLER_DEPENDENCY: {
        id: "025",
        message: "Wrangler dependency is needed for Cloudflare deployment. Please install dependencies without --no-optional flag.",
        kind: "deploy"
      },
      ERR_CONVERT_GRAPH_TO_DASHBOARD: {
        id: "026",
        message: `
Failed to convert federation configuration to needed information. We are reading your Module Federation configuration to understand your shared dependencies:

- host application's name
- remote application's name
- shared dependencies.

Please refer to the official Module Federation guide https://module-federation.io/configure/index.html to make sure your have required inputs.
`,
        kind: "browser"
      },
      ERR_UPLOAD_TO_CLOUDFLARE_PAGES: {
        id: "027",
        message: "Error upload to Cloudflare pages.",
        kind: "deploy"
      },
      ERR_USER_IDENTITY: {
        id: "036",
        message: `
Git username or email is not configured
  - please set valid 'git config user.name' and 'git config user.email'
  - or provide ZE_USER_TOKEN as environment variable
`,
        kind: "deploy"
      },
      ERR_TLS_CERT_ALTNAME_INVALID: {
        id: "034",
        message: "You domain's TLS Certificate is invalid. Have you updated your domain settings with your Registrar?",
        kind: "deploy"
      },
      ERR_HTTP_ERROR: {
        id: "035",
        message: `

HTTP request for {{ method }} {{ url }} failed with status code {{ status }}.

Please check your network connection and try again.

{{ content }}

`,
        kind: "config"
      },
      ERR_NO_WRANGLER: {
        id: "028",
        message: `Wrangler is not installed. It's needed for Cloudflare deployment. Please install dependencies without --no-optional flag.`,
        kind: "build"
      },
      ERR_CREATE_DIST_FOLDER: {
        id: "029",
        message: `Error on creating dist folder. Zephyr is unable to create dist folder for your application's configuration.`,
        kind: "build"
      },
      /**
       * This case needs to be specific without a message as the server respond with 40*, so we will need to prioritize the server status code
       * and prints out the status
       *
       * @example
       *   {
       *     "statusCode": 401,
       *     "timestamp": "2024-08-23T02:21:48.873Z",
       *     "path": "/v2/builder-packages-api/application-config?application-uid=home-spa.federated_apps.zmzlois"
       *   }
       */
      ERR_NO_RESPONSE_FOR_APP_CONFIG: {
        id: "030",
        message: "Failed to load application configuration.",
        kind: "build"
      },
      ERR_NO_JWT: {
        id: "031",
        message: `You don't have valid JWT token. Try to log out from the dashboard and log in again. https://app.zephyr-cloud.io`,
        kind: "build"
      },
      ERR_JWT_INVALID: {
        id: "032",
        message: "Your JWT token is invalid. Try to log out from the dashboard and log in again. https://app.zephyr-cloud.io",
        kind: "build"
      },
      ERR_WEBSOCKET_CONNECTION: {
        id: "034",
        message: "Websocket connection error during login.",
        kind: "build"
      },
      ERR_GET_APP_CONFIG: {
        id: "035",
        message: "Error when getting application configuration from API. Could not find application configuration. Please try again after removing ~/.zephyr folder.",
        kind: "build"
      },
      ERR_GIT_COMMIT_HASH: {
        id: "036",
        message: "Failed to get git commit hash. Can you make sure this git repository has commit history?",
        kind: "build"
      },
      ERR_RESOLVE_REMOTES: {
        id: "001",
        message: `
Please build {{ appUid }} with Zephyr first or add as Unmanaged applications.

Note: you can read application uid as follows:
- {{ appName }} - project.json 'name' field of remote application
- {{ projectName }} - git repository name
- {{ orgName }} - git organization name

`,
        kind: "config"
      },
      ERR_CANNOT_RESOLVE_APP_NAME_WITH_VERSION: {
        id: "003",
        message: `
Is the remote application being built? We are not able to find your remote application based on application_uid and remote name in configuration.
Note that we typically map your remote based on below values

- git username
- git repository name
- name in package.json
- name in micro-frontend configuration.

We have a complete checklist for Micro-Frontend application configuration here: https://docs.zephyr-cloud.io/how-to/mf-guide
      `,
        kind: "config"
      }
    };
    function isZeErrorEqual(a, b) {
      return a.id === b.id && a.kind === b.kind;
    }
    exports2.isZeErrorEqual = isZeErrorEqual;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/utils/debug-enabled.js
var require_debug_enabled = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/utils/debug-enabled.js"(exports2) {
    "use strict";
    var _a;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.is_debug_enabled = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var process2 = tslib_1.__importStar(require("node:process"));
    var _zephyr_debug = (_a = process2.env["DEBUG"]) === null || _a === void 0 ? void 0 : _a.indexOf("zephyr");
    exports2.is_debug_enabled = typeof _zephyr_debug === "number" && _zephyr_debug !== -1;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/utils/picocolor.js
var require_picocolor = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/utils/picocolor.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.bgWhiteBright = exports2.bgCyanBright = exports2.bgMagentaBright = exports2.bgBlueBright = exports2.bgYellowBright = exports2.bgGreenBright = exports2.bgRedBright = exports2.bgBlackBright = exports2.whiteBright = exports2.cyanBright = exports2.magentaBright = exports2.blueBright = exports2.yellowBright = exports2.greenBright = exports2.redBright = exports2.blackBright = exports2.bgWhite = exports2.bgCyan = exports2.bgMagenta = exports2.bgBlue = exports2.bgYellow = exports2.bgGreen = exports2.bgRed = exports2.bgBlack = exports2.gray = exports2.white = exports2.cyan = exports2.purple = exports2.magenta = exports2.blue = exports2.yellow = exports2.green = exports2.red = exports2.black = exports2.strikethrough = exports2.hidden = exports2.inverse = exports2.underline = exports2.italic = exports2.dim = exports2.bold = exports2.reset = exports2.isTTY = void 0;
    var debug_enabled_1 = require_debug_enabled();
    var node_tty_1 = require("node:tty");
    exports2.isTTY = !debug_enabled_1.is_debug_enabled && !process.env["NO_COLOR"] && process.env["FORCE_COLOR"] || (0, node_tty_1.isatty)(process.stdout.fd) && !process.env["CI"] && process.env["TERM"] !== "dumb";
    var replaceClose = (str, close, replace, index) => {
      const start = str.substring(0, index) + replace;
      const end = str.substring(index + close.length);
      const nextIndex = end.indexOf(close);
      return ~nextIndex ? start + replaceClose(end, close, replace, nextIndex) : start + end;
    };
    var formatter = (open, close, replace = open) => {
      if (!exports2.isTTY)
        return String;
      return (input) => {
        const string = "" + input;
        const index = string.indexOf(close, open.length);
        return ~index ? open + replaceClose(string, close, replace, index) + close : open + string + close;
      };
    };
    exports2.reset = exports2.isTTY ? (s) => `\x1B[0m${s}\x1B[0m` : String;
    exports2.bold = formatter("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m");
    exports2.dim = formatter("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m");
    exports2.italic = formatter("\x1B[3m", "\x1B[23m");
    exports2.underline = formatter("\x1B[4m", "\x1B[24m");
    exports2.inverse = formatter("\x1B[7m", "\x1B[27m");
    exports2.hidden = formatter("\x1B[8m", "\x1B[28m");
    exports2.strikethrough = formatter("\x1B[9m", "\x1B[29m");
    exports2.black = formatter("\x1B[30m", "\x1B[39m");
    exports2.red = formatter("\x1B[31m", "\x1B[39m");
    exports2.green = formatter("\x1B[32m", "\x1B[39m");
    exports2.yellow = formatter("\x1B[33m", "\x1B[39m");
    exports2.blue = formatter("\x1B[34m", "\x1B[39m");
    exports2.magenta = formatter("\x1B[35m", "\x1B[39m");
    exports2.purple = formatter("\x1B[38;2;173;127;168m", "\x1B[39m");
    exports2.cyan = formatter("\x1B[36m", "\x1B[39m");
    exports2.white = formatter("\x1B[37m", "\x1B[39m");
    exports2.gray = formatter("\x1B[90m", "\x1B[39m");
    exports2.bgBlack = formatter("\x1B[40m", "\x1B[49m");
    exports2.bgRed = formatter("\x1B[41m", "\x1B[49m");
    exports2.bgGreen = formatter("\x1B[42m", "\x1B[49m");
    exports2.bgYellow = formatter("\x1B[43m", "\x1B[49m");
    exports2.bgBlue = formatter("\x1B[44m", "\x1B[49m");
    exports2.bgMagenta = formatter("\x1B[45m", "\x1B[49m");
    exports2.bgCyan = formatter("\x1B[46m", "\x1B[49m");
    exports2.bgWhite = formatter("\x1B[47m", "\x1B[49m");
    exports2.blackBright = formatter("\x1B[90m", "\x1B[39m");
    exports2.redBright = formatter("\x1B[91m", "\x1B[39m");
    exports2.greenBright = formatter("\x1B[92m", "\x1B[39m");
    exports2.yellowBright = formatter("\x1B[93m", "\x1B[39m");
    exports2.blueBright = formatter("\x1B[94m", "\x1B[39m");
    exports2.magentaBright = formatter("\x1B[95m", "\x1B[39m");
    exports2.cyanBright = formatter("\x1B[96m", "\x1B[39m");
    exports2.whiteBright = formatter("\x1B[97m", "\x1B[39m");
    exports2.bgBlackBright = formatter("\x1B[100m", "\x1B[49m");
    exports2.bgRedBright = formatter("\x1B[101m", "\x1B[49m");
    exports2.bgGreenBright = formatter("\x1B[102m", "\x1B[49m");
    exports2.bgYellowBright = formatter("\x1B[103m", "\x1B[49m");
    exports2.bgBlueBright = formatter("\x1B[104m", "\x1B[49m");
    exports2.bgMagentaBright = formatter("\x1B[105m", "\x1B[49m");
    exports2.bgCyanBright = formatter("\x1B[106m", "\x1B[49m");
    exports2.bgWhiteBright = formatter("\x1B[107m", "\x1B[49m");
  }
});

// node_modules/zephyr-edge-contract/dist/lib/utils/string.js
var require_string = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/utils/string.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.formatString = void 0;
    function formatString(str, params) {
      return str.replace(/{{\s*([^}\s]+)\s*(?:=\s*(.+?)\s*)?}}/g, (_, key, def) => {
        return params[key] || def || key;
      });
    }
    exports2.formatString = formatString;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/utils/strip-ansi.js
var require_strip_ansi = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/utils/strip-ansi.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.stripAnsi = void 0;
    var ANSI_REGEX = new RegExp([
      "[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)",
      "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
    ].join("|"), "g");
    function stripAnsi(string) {
      return string.replace(ANSI_REGEX, "");
    }
    exports2.stripAnsi = stripAnsi;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/errors/zephyr.js
var require_zephyr = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/errors/zephyr.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ZephyrError = exports2.discordUrl = exports2.docsUrl = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var fs = tslib_1.__importStar(require("node:fs"));
    var os = tslib_1.__importStar(require("node:os"));
    var path = tslib_1.__importStar(require("node:path"));
    var util = tslib_1.__importStar(require("node:util"));
    var picocolor_1 = require_picocolor();
    var string_1 = require_string();
    var strip_ansi_1 = require_strip_ansi();
    var codes_1 = require_codes();
    exports2.docsUrl = "https://docs.zephyr-cloud.io/errors";
    exports2.discordUrl = "https://zephyr-cloud.io/discord";
    var ZephyrError = class _ZephyrError extends Error {
      /** Returns {@linkcode cause} if it's a `ZephyrError`, otherwise creates a new `ZephyrError` for the provided type. */
      constructor(type, opts) {
        if (_ZephyrError.is(opts === null || opts === void 0 ? void 0 : opts.cause)) {
          if ((0, codes_1.isZeErrorEqual)(type, codes_1.ZeErrors.ERR_UNKNOWN)) {
            return opts.cause;
          }
          if (!opts.data && opts.cause.data) {
            opts.data = opts.cause.data;
            opts.cause.data = void 0;
          }
        }
        let message = type.message;
        if (opts) {
          message = (0, string_1.formatString)(type.message, opts);
        }
        super(message.trim());
        this.code = _ZephyrError.toZeCode(type);
        if (opts) {
          const { cause, data } = opts, template = tslib_1.__rest(opts, ["cause", "data"]);
          this.template = template;
          this.data = opts.data;
          this.cause = opts.cause;
        }
        if (process.env["VITE"]) {
          this._stack = this.stack;
        }
      }
      /** Checks if the given error is a ZephyrError and optionally matches the given code. */
      static is(err, codeOrType) {
        if (!(err instanceof _ZephyrError)) {
          return false;
        }
        if (!codeOrType) {
          return true;
        }
        return _ZephyrError.toZeCode(codeOrType) === err.code;
      }
      /** Formats a Zephyr error code. */
      static toZeCode({ id, kind }) {
        const prefix = codes_1.ZeErrorCategories[kind];
        const paddedId = id.toString().padStart(3, "0");
        const paddedPrefix = prefix.toString().padStart(2, "0");
        return `ZE${paddedPrefix}${paddedId}`;
      }
      /**
       * Parses a Zephyr error code into a ZeErrorType.
       *
       * Returns {@linkcode ZeErrors.ERR_UNKNOWN} if the code could not be resolved.
       */
      static fromZeCode(code) {
        const prefix = code.slice(2, 4);
        const id = code.slice(4);
        let category;
        for (const errorCategory of Object.keys(codes_1.ZeErrorCategories)) {
          if (codes_1.ZeErrorCategories[errorCategory] === prefix) {
            category = errorCategory;
            break;
          }
        }
        if (!category) {
          return codes_1.ZeErrors.ERR_UNKNOWN;
        }
        for (const error of Object.values(codes_1.ZeErrors)) {
          if (+error.id === +id && error.kind === category) {
            return error;
          }
        }
        return codes_1.ZeErrors.ERR_UNKNOWN;
      }
      static format(error) {
        const zeError = _ZephyrError.is(error) ? error : new _ZephyrError(codes_1.ZeErrors.ERR_UNKNOWN, { message: (error === null || error === void 0 ? void 0 : error.message) || String(error), cause: error });
        const tmpFile = write_error_file(zeError);
        const inspected = typeof zeError.data === "object" ? util.inspect(zeError.data, false, 5, true) : zeError.data;
        const messages = [
          `${(0, picocolor_1.bold)((0, picocolor_1.underline)(zeError.code))}: ${zeError.message}`,
          `

Visit ${(0, picocolor_1.cyanBright)(`${exports2.docsUrl}/${zeError.code}`)} for more information
Or join our ${(0, picocolor_1.blue)("Discord")} server at ${(0, picocolor_1.cyanBright)(exports2.discordUrl)}

`.trim(),
          inspected !== "{}" && inspected,
          tmpFile && (0, picocolor_1.blackBright)(`Complete error details available at ${(0, picocolor_1.whiteBright)(tmpFile)}`)
        ];
        return messages.filter((x) => !!x).map((x) => x.trim()).join("\n\n");
      }
    };
    exports2.ZephyrError = ZephyrError;
    function write_error_file(zeError) {
      try {
        const tempPath = path.join(os.tmpdir(), `ze${Math.round(Math.random() * 1e10)}.json`);
        fs.writeFileSync(tempPath, JSON.stringify(format_error(zeError)), "utf8");
        return tempPath;
      } catch (_a) {
        return void 0;
      }
    }
    function format_error(error) {
      if (!error) {
        return void 0;
      }
      return Object.assign(Object.assign(Object.assign(Object.assign({}, error), { template: void 0 }), error === null || error === void 0 ? void 0 : error.template), { data: error === null || error === void 0 ? void 0 : error.data, message: error === null || error === void 0 ? void 0 : error.message, stack: split_stack(error.stack, error.message), cause: format_error(error.cause) });
    }
    function split_stack(stack, message) {
      if (!stack) {
        return void 0;
      }
      if (message) {
        stack = stack.slice(`Error: ${message}
`.length);
      }
      return stack.split("\n").map((line) => (0, strip_ansi_1.stripAnsi)(line.trim()));
    }
  }
});

// node_modules/zephyr-edge-contract/dist/lib/errors/index.js
var require_errors = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/errors/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    tslib_1.__exportStar(require_codes(), exports2);
    tslib_1.__exportStar(require_zephyr(), exports2);
  }
});

// node_modules/node-persist/package.json
var require_package = __commonJS({
  "node_modules/node-persist/package.json"(exports2, module2) {
    module2.exports = {
      name: "node-persist",
      version: "4.0.3",
      description: "Super-easy (and fast) persistent data structures in Node.js, modeled after HTML5 localStorage",
      main: "./src/node-persist.js",
      directories: {
        example: "examples"
      },
      scripts: {
        test: "./node_modules/.bin/mocha tests/"
      },
      repository: {
        type: "git",
        url: "https://github.com/simonlast/node-persist"
      },
      keywords: [
        "node",
        "persist",
        "storage"
      ],
      engines: {
        node: ">=10.12.0"
      },
      contributors: [
        {
          name: "Simon Last",
          email: "hello@simonlast.org",
          url: "http://simonlast.org/"
        },
        {
          name: "Ben Monro",
          url: "https://github.com/benmonro"
        },
        {
          name: "Aziz Khoury",
          url: "https://github.com/akhoury"
        }
      ],
      license: "MIT",
      readmeFilename: "README.md",
      devDependencies: {
        chai: "^4.1.2",
        mocha: "^10.2.0",
        rimraf: "^2.4.3"
      }
    };
  }
});

// node_modules/node-persist/src/local-storage.js
var require_local_storage = __commonJS({
  "node_modules/node-persist/src/local-storage.js"(exports2, module2) {
    var fs = require("fs");
    var path = require("path");
    var crypto = require("crypto");
    var pkg = require_package();
    var { nextTick } = require("process");
    var defaults = {
      ttl: false,
      logging: false,
      encoding: "utf8",
      parse: JSON.parse,
      stringify: JSON.stringify,
      forgiveParseErrors: false,
      expiredInterval: 2 * 60 * 1e3,
      /* every 2 minutes */
      dir: "." + pkg.name + "/storage",
      writeQueue: true,
      writeQueueIntervalMs: 1e3,
      writeQueueWriteOnlyLast: true
    };
    var defaultTTL = 24 * 60 * 60 * 1e3;
    var isFunction = function(fn) {
      return typeof fn === "function";
    };
    var isNumber = function(n) {
      return !isNaN(parseFloat(n)) && isFinite(n);
    };
    var isDate = function(d) {
      return Object.prototype.toString.call(d) === "[object Date]";
    };
    var isValidDate = function(d) {
      return isDate(d) && !isNaN(d);
    };
    var isFutureDate = function(d) {
      return isValidDate(d) && d.getTime() > +/* @__PURE__ */ new Date();
    };
    var sha256 = function(key) {
      return crypto.createHash("sha256").update(key).digest("hex");
    };
    var isValidStorageFileContent = function(content) {
      return content && content.key;
    };
    var isExpired = function(datum) {
      return datum && datum.ttl && datum.ttl < (/* @__PURE__ */ new Date()).getTime();
    };
    var isNotExpired = function(datum) {
      return !isExpired(datum);
    };
    var resolveDir = function(dir) {
      dir = path.normalize(dir);
      if (path.isAbsolute(dir)) {
        return dir;
      }
      return path.join(process.cwd(), dir);
    };
    var LocalStorage = function(options) {
      if (!(this instanceof LocalStorage)) {
        return new LocalStorage(options);
      }
      this.setOptions(options);
    };
    LocalStorage.prototype = {
      init: async function(options) {
        if (options) {
          this.setOptions(options);
        }
        await this.ensureDirectory(this.options.dir);
        if (this.options.expiredInterval) {
          this.startExpiredKeysInterval();
        }
        this.q = {};
        this.startWriteQueueInterval();
        return this.options;
      },
      initSync: function(options) {
        if (options) {
          this.setOptions(options);
        }
        this.ensureDirectorySync(this.options.dir);
        if (this.options.expiredInterval) {
          this.startExpiredKeysInterval();
        }
        this.q = {};
        this.startWriteQueueInterval();
        return this.options;
      },
      setOptions: function(userOptions) {
        let options = {};
        if (!userOptions) {
          options = defaults;
        } else {
          for (let key in defaults) {
            if (userOptions.hasOwnProperty(key)) {
              options[key] = userOptions[key];
            } else {
              options[key] = this.options && this.options[key] != null ? this.options[key] : defaults[key];
            }
          }
          options.dir = resolveDir(options.dir);
          options.ttl = options.ttl ? isNumber(options.ttl) && options.ttl > 0 ? options.ttl : defaultTTL : false;
        }
        if (isFunction(options.logging)) {
          this.log = options.logging;
          options.logging = true;
        }
        this.options = options;
      },
      data: function() {
        return this.readDirectory(this.options.dir);
      },
      keys: async function(filter) {
        let data = await this.data();
        if (filter) {
          data = data.filter(filter);
        }
        return data.map((datum) => datum.key);
      },
      values: async function(filter) {
        let data = await this.data();
        if (filter) {
          data = data.filter(filter);
        }
        return data.map((datum) => datum.value);
      },
      length: async function(filter) {
        let data = await this.data();
        if (filter) {
          data = data.filter(filter);
        }
        return data.length;
      },
      forEach: async function(callback) {
        let data = await this.data();
        for (let d of data) {
          await callback(d);
        }
      },
      valuesWithKeyMatch: function(match) {
        match = match || /.*/;
        let filter = match instanceof RegExp ? (datum) => match.test(datum.key) : (datum) => datum.key.indexOf(match) !== -1;
        return this.values(filter);
      },
      set: function(key, value, options = {}) {
        return this.setItem(key, value, options);
      },
      setItem: function(key, datumValue, options = {}) {
        let value = this.copy(datumValue);
        let ttl = this.calcTTL(options.ttl);
        this.log(`set ('${key}': '${this.stringify(value)}')`);
        let datum = { key, value, ttl };
        return this.queueWriteFile(this.getDatumPath(key), datum);
      },
      update: function(key, value, options = {}) {
        return this.updateItem(key, value, options);
      },
      updateItem: async function(key, datumValue, options = {}) {
        let previousDatum = await this.getDatum(key);
        if (previousDatum && isNotExpired(previousDatum)) {
          let newDatumValue = this.copy(datumValue);
          let ttl;
          if (options.ttl) {
            ttl = this.calcTTL(options.ttl);
          } else {
            ttl = previousDatum.ttl;
          }
          this.log(`update ('${key}': '${this.stringify(newDatumValue)}')`);
          let datum = { key, value: newDatumValue, ttl };
          return this.queueWriteFile(this.getDatumPath(key), datum);
        } else {
          return this.setItem(key, datumValue, options);
        }
      },
      get: function(key) {
        return this.getItem(key);
      },
      getItem: async function(key) {
        let datum = await this.getDatum(key);
        if (isExpired(datum)) {
          this.log(`${key} has expired`);
          await this.removeItem(key);
        } else {
          return datum.value;
        }
      },
      getDatum: function(key) {
        return this.readFile(this.getDatumPath(key));
      },
      getRawDatum: function(key) {
        return this.readFile(this.getDatumPath(key), { raw: true });
      },
      getDatumValue: async function(key) {
        let datum = await this.getDatum(key);
        return datum && datum.value;
      },
      getDatumPath: function(key) {
        return path.join(this.options.dir, sha256(key));
      },
      del: function(key) {
        return this.removeItem(key);
      },
      rm: function(key) {
        return this.removeItem(key);
      },
      removeItem: function(key) {
        return this.deleteFile(this.getDatumPath(key));
      },
      removeExpiredItems: async function() {
        let keys = await this.keys(isExpired);
        for (let key of keys) {
          await this.removeItem(key);
        }
      },
      clear: async function() {
        let data = await this.data();
        for (let d of data) {
          await this.removeItem(d.key);
        }
      },
      ensureDirectory: function(dir) {
        return new Promise((resolve, reject) => {
          let result = { dir };
          fs.access(dir, (accessErr) => {
            if (!accessErr) {
              return resolve(result);
            } else {
              fs.mkdir(dir, { recursive: true }, (err) => {
                if (err) {
                  return reject(err);
                }
                this.log("created " + dir);
                resolve(result);
              });
            }
          });
        });
      },
      ensureDirectorySync: function(dir) {
        let result = { dir };
        try {
          fs.accessSync(dir);
          return result;
        } catch (e) {
          fs.mkdirSync(dir, { recursive: true });
          this.log("created " + dir);
          return result;
        }
      },
      readDirectory: function(dir) {
        return new Promise((resolve, reject) => {
          fs.access(dir, (accessErr) => {
            if (!accessErr) {
              fs.readdir(dir, async (err, arr) => {
                if (err) {
                  return reject(err);
                }
                let data = [];
                try {
                  for (let currentFile of arr) {
                    if (currentFile[0] !== ".") {
                      data.push(await this.readFile(path.join(this.options.dir, currentFile)));
                    }
                  }
                } catch (err2) {
                  reject(err2);
                }
                resolve(data);
              });
            } else {
              reject(new Error(`[node-persist][readDirectory] ${dir} does not exists!`));
            }
          });
        });
      },
      readFile: function(file, options = {}) {
        return new Promise((resolve, reject) => {
          fs.readFile(file, this.options.encoding, (err, text) => {
            if (err) {
              if (err.code === "ENOENT") {
                this.log(`${file} does not exist, returning undefined value`);
                resolve(options.raw ? "{}" : {});
              } else {
                return reject(err);
              }
            }
            let input = options.raw ? text : this.parse(text);
            if (!options.raw && !isValidStorageFileContent(input)) {
              return this.options.forgiveParseErrors ? resolve(options.raw ? "{}" : {}) : reject(new Error(`[node-persist][readFile] ${file} does not look like a valid storage file!`));
            }
            resolve(input);
          });
        });
      },
      queueWriteFile: async function(file, content) {
        if (this.options.writeQueue === false) {
          return this.writeFile(file, content);
        }
        this.q[file] = this.q[file] || [];
        nextTick(() => {
          this.startWriteQueueInterval();
        });
        return new Promise((resolve, reject) => {
          this.q[file].push({ content, resolve, reject });
        });
      },
      processWriteQueue: async function() {
        if (this.processingWriteQueue) {
          this.log("Still processing write queue, waiting...");
          return;
        }
        this.processingWriteQueue = true;
        const promises = Object.keys(this.q).map(async (file) => {
          let writeItem;
          if (this.options.writeQueueWriteOnlyLast) {
            writeItem = this.q[file].pop();
          } else {
            writeItem = this.q[file].shift();
          }
          try {
            const ret = await this.writeFile(file, writeItem.content);
            if (this.options.writeQueueWriteOnlyLast) {
              while (this.q[file].length) {
                const writeItem0 = this.q[file].shift();
                writeItem0.resolve(ret);
              }
            }
            writeItem.resolve(ret);
          } catch (e) {
            while (this.q[file].length) {
              const writeItem0 = this.q[file].shift();
              writeItem0.reject(e);
            }
            writeItem.reject(e);
          }
          if (!this.q[file] || !this.q[file].length) {
            delete this.q[file];
          }
        });
        try {
          await Promise.all(promises);
        } finally {
          this.processingWriteQueue = false;
        }
      },
      startWriteQueueInterval: function() {
        this.processWriteQueue();
        if (!this._writeQueueInterval) {
          this._writeQueueInterval = setInterval(() => this.processWriteQueue(), this.options.writeQueueIntervalMs || 1e3);
          this._writeQueueInterval.unref && this._writeQueueInterval.unref();
        }
      },
      stopWriteQueueInterval: function() {
        clearInterval(this._writeQueueInterval);
      },
      writeFile: async function(file, content) {
        return new Promise((resolve, reject) => {
          fs.writeFile(file, this.stringify(content), this.options.encoding, async (err) => {
            if (err) {
              return reject(err);
            }
            resolve({ file, content });
            this.log("wrote: " + file);
          });
        });
      },
      deleteFile: function(file) {
        return new Promise((resolve, reject) => {
          fs.access(file, (accessErr) => {
            if (!accessErr) {
              this.log(`Removing file:${file}`);
              fs.unlink(file, (err) => {
                if (err && err.code !== "ENOENT") {
                  return reject(err);
                }
                let result = { file, removed: !err, existed: !accessErr };
                err && this.log(`Failed to remove file:${file} because it doesn't exist anymore.`);
                resolve(result);
              });
            } else {
              this.log(`Not removing file:${file} because it doesn't exist`);
              let result = { file, removed: false, existed: false };
              resolve(result);
            }
          });
        });
      },
      stringify: function(obj) {
        return this.options.stringify(obj);
      },
      parse: function(str) {
        if (str == null) {
          return void 0;
        }
        try {
          return this.options.parse(str);
        } catch (e) {
          this.log("parse error: ", this.stringify(e), "for:", str);
          return void 0;
        }
      },
      copy: function(value) {
        if (typeof value !== "object") {
          return value;
        }
        return this.parse(this.stringify(value));
      },
      startExpiredKeysInterval: function() {
        this.stopExpiredKeysInterval();
        this._expiredKeysInterval = setInterval(this.removeExpiredItems.bind(this), this.options.expiredInterval);
        this._expiredKeysInterval.unref && this._expiredKeysInterval.unref();
      },
      stopExpiredKeysInterval: function() {
        clearInterval(this._expiredKeysInterval);
      },
      log: function() {
        this.options && this.options.logging && console.log.apply(console, arguments);
      },
      calcTTL: function(ttl) {
        let now = /* @__PURE__ */ new Date();
        let nowts = now.getTime();
        if (typeof ttl === "undefined") {
          ttl = this.options.ttl;
        }
        if (ttl) {
          if (isDate(ttl)) {
            if (!isFutureDate(ttl)) {
              ttl = defaultTTL;
            }
            ttl = ttl.getTime ? ttl.getTime() : ttl;
          } else {
            ttl = ttl ? isNumber(ttl) && ttl > 0 ? nowts + ttl : defaultTTL : void 0;
          }
          return ttl;
        } else {
          return void 0;
        }
      }
    };
    module2.exports = LocalStorage;
  }
});

// node_modules/node-persist/src/node-persist.js
var require_node_persist = __commonJS({
  "node_modules/node-persist/src/node-persist.js"(exports2, module2) {
    var LocalStorage = require_local_storage();
    (function(nodePersist) {
      nodePersist.create = function(userOptions) {
        return LocalStorage(userOptions);
      };
      nodePersist.init = async function(userOptions) {
        const localStorage2 = nodePersist.defaultInstance = nodePersist.create(userOptions);
        let ret = await localStorage2.init(userOptions);
        mixin(nodePersist, localStorage2, { skip: ["init", "initSync", "create"] });
        return ret;
      };
      nodePersist.initSync = function(userOptions) {
        const localStorage2 = nodePersist.defaultInstance = nodePersist.create(userOptions);
        let ret = localStorage2.initSync(userOptions);
        mixin(nodePersist, localStorage2, { skip: ["init", "initSync", "create"] });
        return ret;
      };
      function mixin(target, source, options) {
        options = options || {};
        options.skip = options.skip || [];
        for (let key in source) {
          if (typeof source[key] === "function" && key.indexOf("_") !== 0 && options.skip.indexOf(key) === -1) {
            target[key] = source[key].bind(source);
          }
        }
      }
    })(module2.exports);
  }
});

// node_modules/zephyr-edge-contract/dist/lib/node-persist/storage-keys.js
var require_storage_keys = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/node-persist/storage-keys.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ZE_PATH = void 0;
    exports2.ZE_PATH = `.zephyr`;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/node-persist/app-deploy-result-cache.js
var require_app_deploy_result_cache = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/node-persist/app-deploy-result-cache.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.removeAppDeployResult = exports2.getAppDeployResult = exports2.setAppDeployResult = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var node_persist_1 = require_node_persist();
    var node_path_1 = require("node:path");
    var node_os_1 = require("node:os");
    var storage_keys_1 = require_storage_keys();
    var storage = (0, node_persist_1.init)({
      dir: (0, node_path_1.join)((0, node_os_1.homedir)(), storage_keys_1.ZE_PATH)
    });
    function setAppDeployResult(application_uid2, value) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        void (yield (0, node_persist_1.setItem)(`${"ze-app-deploy-result"}:${application_uid2}`, value, { ttl: 1e3 * 60 * 60 * 24 }));
      });
    }
    exports2.setAppDeployResult = setAppDeployResult;
    function getAppDeployResult(application_uid2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        return (0, node_persist_1.getItem)(`${"ze-app-deploy-result"}:${application_uid2}`);
      });
    }
    exports2.getAppDeployResult = getAppDeployResult;
    function removeAppDeployResult(application_uid2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        yield (0, node_persist_1.removeItem)(`${"ze-app-deploy-result"}:${application_uid2}`);
      });
    }
    exports2.removeAppDeployResult = removeAppDeployResult;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/node-persist/application-configuration.js
var require_application_configuration = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/node-persist/application-configuration.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.remoteAppConfig = exports2.getAppConfig = exports2.saveAppConfig = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var node_persist_1 = require_node_persist();
    var node_os_1 = require("node:os");
    var node_path_1 = require("node:path");
    var storage_keys_1 = require_storage_keys();
    var storage = (0, node_persist_1.init)({
      dir: (0, node_path_1.join)((0, node_os_1.homedir)(), storage_keys_1.ZE_PATH)
    });
    function get_key(application_uid2) {
      return ["ze-application-configuration", application_uid2].join(".");
    }
    function saveAppConfig(application_uid2, json) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        void (yield (0, node_persist_1.setItem)(get_key(application_uid2), json, { ttl: 5 * 60 * 1e3 }));
      });
    }
    exports2.saveAppConfig = saveAppConfig;
    function getAppConfig(application_uid2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        return (0, node_persist_1.getItem)(get_key(application_uid2));
      });
    }
    exports2.getAppConfig = getAppConfig;
    function remoteAppConfig(application_uid2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        yield (0, node_persist_1.removeItem)(get_key(application_uid2));
      });
    }
    exports2.remoteAppConfig = remoteAppConfig;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/node-persist/fs-cache.js
var require_fs_cache = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/node-persist/fs-cache.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.removeCache = exports2.getCache = exports2.saveCache = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var node_persist_1 = require_node_persist();
    var node_path_1 = require("node:path");
    var node_os_1 = require("node:os");
    var storage_keys_1 = require_storage_keys();
    var storage = (0, node_persist_1.init)({
      dir: (0, node_path_1.join)((0, node_os_1.homedir)(), storage_keys_1.ZE_PATH)
    });
    function saveCache(key, value) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        void (yield (0, node_persist_1.setItem)(`${"ze-fs-cache"}:${key}`, value));
      });
    }
    exports2.saveCache = saveCache;
    function getCache(key) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        return (0, node_persist_1.getItem)(`${"ze-fs-cache"}:${key}`);
      });
    }
    exports2.getCache = getCache;
    function removeCache(key) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        yield (0, node_persist_1.removeItem)(`${"ze-fs-cache"}:${key}`);
      });
    }
    exports2.removeCache = removeCache;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/node-persist/hash-cache.js
var require_hash_cache = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/node-persist/hash-cache.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.removeAppHashCache = exports2.getAppHashCache = exports2.setAppHashCache = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var node_persist_1 = require_node_persist();
    var node_path_1 = require("node:path");
    var node_os_1 = require("node:os");
    var storage_keys_1 = require_storage_keys();
    var storage = (0, node_persist_1.init)({
      dir: (0, node_path_1.join)((0, node_os_1.homedir)(), storage_keys_1.ZE_PATH)
    });
    function setAppHashCache(application_uid2, value) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        void (yield (0, node_persist_1.setItem)(`${"ze-hash-cache"}:${application_uid2}`, value, { ttl: 1e3 * 60 * 60 * 24 }));
      });
    }
    exports2.setAppHashCache = setAppHashCache;
    function getAppHashCache(application_uid2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        return (0, node_persist_1.getItem)(`${"ze-hash-cache"}:${application_uid2}`);
      });
    }
    exports2.getAppHashCache = getAppHashCache;
    function removeAppHashCache(application_uid2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        yield (0, node_persist_1.removeItem)(`${"ze-hash-cache"}:${application_uid2}`);
      });
    }
    exports2.removeAppHashCache = removeAppHashCache;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/node-persist/partial-assets-map.js
var require_partial_assets_map = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/node-persist/partial-assets-map.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.removePartialAssetMap = exports2.getPartialAssetMap = exports2.savePartialAssetMap = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var node_persist_1 = require_node_persist();
    var node_os_1 = require("node:os");
    var node_path_1 = require("node:path");
    var storage_keys_1 = require_storage_keys();
    var storage = (0, node_persist_1.init)({
      dir: (0, node_path_1.join)((0, node_os_1.homedir)(), storage_keys_1.ZE_PATH)
    });
    function get_key(application_uid2) {
      return ["ze_app_partial_asset_map", application_uid2].join(".");
    }
    function savePartialAssetMap(application_uid2, partial_key, assetMap) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        const key = get_key(application_uid2);
        const partial_asset_map = yield (0, node_persist_1.getItem)(key);
        void (yield (0, node_persist_1.setItem)(key, Object.assign({}, partial_asset_map || {}, { [partial_key]: assetMap })));
      });
    }
    exports2.savePartialAssetMap = savePartialAssetMap;
    function getPartialAssetMap(application_uid2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        return (0, node_persist_1.getItem)(get_key(application_uid2));
      });
    }
    exports2.getPartialAssetMap = getPartialAssetMap;
    function removePartialAssetMap(application_uid2) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        yield (0, node_persist_1.removeItem)(get_key(application_uid2));
      });
    }
    exports2.removePartialAssetMap = removePartialAssetMap;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/node-persist/secret-token.js
var require_secret_token = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/node-persist/secret-token.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.hasSecretToken = exports2.getSecretToken = void 0;
    function getSecretToken() {
      return process.env[
        "ZE_SECRET_TOKEN"
        /* StorageKeys.ze_secret_token */
      ];
    }
    exports2.getSecretToken = getSecretToken;
    function hasSecretToken() {
      return !!getSecretToken();
    }
    exports2.hasSecretToken = hasSecretToken;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/node-persist/token.js
var require_token = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/node-persist/token.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.cleanTokens = exports2.removeToken = exports2.getToken = exports2.saveToken = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var node_persist_1 = require_node_persist();
    var node_os_1 = require("node:os");
    var node_path_1 = require("node:path");
    var storage_keys_1 = require_storage_keys();
    var secret_token_1 = require_secret_token();
    var storage = (0, node_persist_1.init)({
      dir: (0, node_path_1.join)((0, node_os_1.homedir)(), storage_keys_1.ZE_PATH)
    });
    function saveToken(token) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        yield (0, node_persist_1.setItem)("ze-auth-token", token);
      });
    }
    exports2.saveToken = saveToken;
    function getToken() {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const tokenFromEnv = (0, secret_token_1.getSecretToken)();
        if (tokenFromEnv) {
          return tokenFromEnv;
        }
        yield storage;
        return (0, node_persist_1.getItem)(
          "ze-auth-token"
          /* StorageKeys.ze_auth_token */
        );
      });
    }
    exports2.getToken = getToken;
    function removeToken() {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        yield (0, node_persist_1.removeItem)(
          "ze-auth-token"
          /* StorageKeys.ze_auth_token */
        );
      });
    }
    exports2.removeToken = removeToken;
    function cleanTokens() {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield storage;
        yield (0, node_persist_1.clear)();
      });
    }
    exports2.cleanTokens = cleanTokens;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/node-persist/upload-provider-options.js
var require_upload_provider_options = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/node-persist/upload-provider-options.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.UploadProviderType = void 0;
    var UploadProviderType;
    (function(UploadProviderType2) {
      UploadProviderType2["CLOUDFLARE"] = "cloudflare";
      UploadProviderType2["AWS"] = "aws";
      UploadProviderType2["NETLIFY"] = "netlify";
      UploadProviderType2["AZURE"] = "azure";
      UploadProviderType2["GCP"] = "gcp";
    })(UploadProviderType || (exports2.UploadProviderType = UploadProviderType = {}));
  }
});

// node_modules/zephyr-edge-contract/dist/lib/utils/create-application-u-i-d.js
var require_create_application_u_i_d = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/utils/create-application-u-i-d.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createApplicationUID = void 0;
    function replacer(str) {
      return str.replace(/[^a-zA-Z0-9-_]/gi, "_");
    }
    function createApplicationUID(options) {
      const git_org = replacer(options.org);
      const git_repo = replacer(options.project);
      const app_name = replacer(options.name);
      return [app_name, git_repo, git_org].join(".").toLowerCase();
    }
    exports2.createApplicationUID = createApplicationUID;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/utils/create-snapshot-id.js
var require_create_snapshot_id = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/utils/create-snapshot-id.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.createSnapshotId = void 0;
    var create_application_u_i_d_1 = require_create_application_u_i_d();
    function createSnapshotId(options) {
      const build_id = [options.zeConfig.user, options.zeConfig.buildId].join("_");
      return [build_id, (0, create_application_u_i_d_1.createApplicationUID)(options.app)].join(".");
    }
    exports2.createSnapshotId = createSnapshotId;
  }
});

// node_modules/ms/index.js
var require_ms = __commonJS({
  "node_modules/ms/index.js"(exports2, module2) {
    var s = 1e3;
    var m = s * 60;
    var h = m * 60;
    var d = h * 24;
    var w = d * 7;
    var y = d * 365.25;
    module2.exports = function(val, options) {
      options = options || {};
      var type = typeof val;
      if (type === "string" && val.length > 0) {
        return parse(val);
      } else if (type === "number" && isFinite(val)) {
        return options.long ? fmtLong(val) : fmtShort(val);
      }
      throw new Error(
        "val is not a non-empty string or a valid number. val=" + JSON.stringify(val)
      );
    };
    function parse(str) {
      str = String(str);
      if (str.length > 100) {
        return;
      }
      var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        str
      );
      if (!match) {
        return;
      }
      var n = parseFloat(match[1]);
      var type = (match[2] || "ms").toLowerCase();
      switch (type) {
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
          return n * y;
        case "weeks":
        case "week":
        case "w":
          return n * w;
        case "days":
        case "day":
        case "d":
          return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
          return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
          return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
          return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
          return n;
        default:
          return void 0;
      }
    }
    function fmtShort(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return Math.round(ms / d) + "d";
      }
      if (msAbs >= h) {
        return Math.round(ms / h) + "h";
      }
      if (msAbs >= m) {
        return Math.round(ms / m) + "m";
      }
      if (msAbs >= s) {
        return Math.round(ms / s) + "s";
      }
      return ms + "ms";
    }
    function fmtLong(ms) {
      var msAbs = Math.abs(ms);
      if (msAbs >= d) {
        return plural(ms, msAbs, d, "day");
      }
      if (msAbs >= h) {
        return plural(ms, msAbs, h, "hour");
      }
      if (msAbs >= m) {
        return plural(ms, msAbs, m, "minute");
      }
      if (msAbs >= s) {
        return plural(ms, msAbs, s, "second");
      }
      return ms + " ms";
    }
    function plural(ms, msAbs, n, name) {
      var isPlural = msAbs >= n * 1.5;
      return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
    }
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS({
  "node_modules/debug/src/common.js"(exports2, module2) {
    function setup(env) {
      createDebug.debug = createDebug;
      createDebug.default = createDebug;
      createDebug.coerce = coerce;
      createDebug.disable = disable;
      createDebug.enable = enable;
      createDebug.enabled = enabled;
      createDebug.humanize = require_ms();
      createDebug.destroy = destroy;
      Object.keys(env).forEach((key) => {
        createDebug[key] = env[key];
      });
      createDebug.names = [];
      createDebug.skips = [];
      createDebug.formatters = {};
      function selectColor(namespace) {
        let hash = 0;
        for (let i = 0; i < namespace.length; i++) {
          hash = (hash << 5) - hash + namespace.charCodeAt(i);
          hash |= 0;
        }
        return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
      }
      createDebug.selectColor = selectColor;
      function createDebug(namespace) {
        let prevTime;
        let enableOverride = null;
        let namespacesCache;
        let enabledCache;
        function debug(...args) {
          if (!debug.enabled) {
            return;
          }
          const self = debug;
          const curr = Number(/* @__PURE__ */ new Date());
          const ms = curr - (prevTime || curr);
          self.diff = ms;
          self.prev = prevTime;
          self.curr = curr;
          prevTime = curr;
          args[0] = createDebug.coerce(args[0]);
          if (typeof args[0] !== "string") {
            args.unshift("%O");
          }
          let index = 0;
          args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
            if (match === "%%") {
              return "%";
            }
            index++;
            const formatter = createDebug.formatters[format];
            if (typeof formatter === "function") {
              const val = args[index];
              match = formatter.call(self, val);
              args.splice(index, 1);
              index--;
            }
            return match;
          });
          createDebug.formatArgs.call(self, args);
          const logFn = self.log || createDebug.log;
          logFn.apply(self, args);
        }
        debug.namespace = namespace;
        debug.useColors = createDebug.useColors();
        debug.color = createDebug.selectColor(namespace);
        debug.extend = extend;
        debug.destroy = createDebug.destroy;
        Object.defineProperty(debug, "enabled", {
          enumerable: true,
          configurable: false,
          get: () => {
            if (enableOverride !== null) {
              return enableOverride;
            }
            if (namespacesCache !== createDebug.namespaces) {
              namespacesCache = createDebug.namespaces;
              enabledCache = createDebug.enabled(namespace);
            }
            return enabledCache;
          },
          set: (v) => {
            enableOverride = v;
          }
        });
        if (typeof createDebug.init === "function") {
          createDebug.init(debug);
        }
        return debug;
      }
      function extend(namespace, delimiter) {
        const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
        newDebug.log = this.log;
        return newDebug;
      }
      function enable(namespaces) {
        createDebug.save(namespaces);
        createDebug.namespaces = namespaces;
        createDebug.names = [];
        createDebug.skips = [];
        let i;
        const split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
        const len = split.length;
        for (i = 0; i < len; i++) {
          if (!split[i]) {
            continue;
          }
          namespaces = split[i].replace(/\*/g, ".*?");
          if (namespaces[0] === "-") {
            createDebug.skips.push(new RegExp("^" + namespaces.slice(1) + "$"));
          } else {
            createDebug.names.push(new RegExp("^" + namespaces + "$"));
          }
        }
      }
      function disable() {
        const namespaces = [
          ...createDebug.names.map(toNamespace),
          ...createDebug.skips.map(toNamespace).map((namespace) => "-" + namespace)
        ].join(",");
        createDebug.enable("");
        return namespaces;
      }
      function enabled(name) {
        if (name[name.length - 1] === "*") {
          return true;
        }
        let i;
        let len;
        for (i = 0, len = createDebug.skips.length; i < len; i++) {
          if (createDebug.skips[i].test(name)) {
            return false;
          }
        }
        for (i = 0, len = createDebug.names.length; i < len; i++) {
          if (createDebug.names[i].test(name)) {
            return true;
          }
        }
        return false;
      }
      function toNamespace(regexp) {
        return regexp.toString().substring(2, regexp.toString().length - 2).replace(/\.\*\?$/, "*");
      }
      function coerce(val) {
        if (val instanceof Error) {
          return val.stack || val.message;
        }
        return val;
      }
      function destroy() {
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
      createDebug.enable(createDebug.load());
      return createDebug;
    }
    module2.exports = setup;
  }
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS({
  "node_modules/debug/src/browser.js"(exports2, module2) {
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.storage = localstorage();
    exports2.destroy = /* @__PURE__ */ (() => {
      let warned = false;
      return () => {
        if (!warned) {
          warned = true;
          console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
        }
      };
    })();
    exports2.colors = [
      "#0000CC",
      "#0000FF",
      "#0033CC",
      "#0033FF",
      "#0066CC",
      "#0066FF",
      "#0099CC",
      "#0099FF",
      "#00CC00",
      "#00CC33",
      "#00CC66",
      "#00CC99",
      "#00CCCC",
      "#00CCFF",
      "#3300CC",
      "#3300FF",
      "#3333CC",
      "#3333FF",
      "#3366CC",
      "#3366FF",
      "#3399CC",
      "#3399FF",
      "#33CC00",
      "#33CC33",
      "#33CC66",
      "#33CC99",
      "#33CCCC",
      "#33CCFF",
      "#6600CC",
      "#6600FF",
      "#6633CC",
      "#6633FF",
      "#66CC00",
      "#66CC33",
      "#9900CC",
      "#9900FF",
      "#9933CC",
      "#9933FF",
      "#99CC00",
      "#99CC33",
      "#CC0000",
      "#CC0033",
      "#CC0066",
      "#CC0099",
      "#CC00CC",
      "#CC00FF",
      "#CC3300",
      "#CC3333",
      "#CC3366",
      "#CC3399",
      "#CC33CC",
      "#CC33FF",
      "#CC6600",
      "#CC6633",
      "#CC9900",
      "#CC9933",
      "#CCCC00",
      "#CCCC33",
      "#FF0000",
      "#FF0033",
      "#FF0066",
      "#FF0099",
      "#FF00CC",
      "#FF00FF",
      "#FF3300",
      "#FF3333",
      "#FF3366",
      "#FF3399",
      "#FF33CC",
      "#FF33FF",
      "#FF6600",
      "#FF6633",
      "#FF9900",
      "#FF9933",
      "#FFCC00",
      "#FFCC33"
    ];
    function useColors() {
      if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
        return true;
      }
      if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
        return false;
      }
      let m;
      return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
      typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
      // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
      typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
      typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
    }
    function formatArgs(args) {
      args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module2.exports.humanize(this.diff);
      if (!this.useColors) {
        return;
      }
      const c = "color: " + this.color;
      args.splice(1, 0, c, "color: inherit");
      let index = 0;
      let lastC = 0;
      args[0].replace(/%[a-zA-Z%]/g, (match) => {
        if (match === "%%") {
          return;
        }
        index++;
        if (match === "%c") {
          lastC = index;
        }
      });
      args.splice(lastC, 0, c);
    }
    exports2.log = console.debug || console.log || (() => {
    });
    function save(namespaces) {
      try {
        if (namespaces) {
          exports2.storage.setItem("debug", namespaces);
        } else {
          exports2.storage.removeItem("debug");
        }
      } catch (error) {
      }
    }
    function load() {
      let r;
      try {
        r = exports2.storage.getItem("debug");
      } catch (error) {
      }
      if (!r && typeof process !== "undefined" && "env" in process) {
        r = process.env.DEBUG;
      }
      return r;
    }
    function localstorage() {
      try {
        return localStorage;
      } catch (error) {
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.j = function(v) {
      try {
        return JSON.stringify(v);
      } catch (error) {
        return "[UnexpectedJSONParseError]: " + error.message;
      }
    };
  }
});

// node_modules/debug/src/node.js
var require_node = __commonJS({
  "node_modules/debug/src/node.js"(exports2, module2) {
    var tty = require("tty");
    var util = require("util");
    exports2.init = init;
    exports2.log = log;
    exports2.formatArgs = formatArgs;
    exports2.save = save;
    exports2.load = load;
    exports2.useColors = useColors;
    exports2.destroy = util.deprecate(
      () => {
      },
      "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."
    );
    exports2.colors = [6, 2, 3, 4, 5, 1];
    try {
      const supportsColor = require("supports-color");
      if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
        exports2.colors = [
          20,
          21,
          26,
          27,
          32,
          33,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          56,
          57,
          62,
          63,
          68,
          69,
          74,
          75,
          76,
          77,
          78,
          79,
          80,
          81,
          92,
          93,
          98,
          99,
          112,
          113,
          128,
          129,
          134,
          135,
          148,
          149,
          160,
          161,
          162,
          163,
          164,
          165,
          166,
          167,
          168,
          169,
          170,
          171,
          172,
          173,
          178,
          179,
          184,
          185,
          196,
          197,
          198,
          199,
          200,
          201,
          202,
          203,
          204,
          205,
          206,
          207,
          208,
          209,
          214,
          215,
          220,
          221
        ];
      }
    } catch (error) {
    }
    exports2.inspectOpts = Object.keys(process.env).filter((key) => {
      return /^debug_/i.test(key);
    }).reduce((obj, key) => {
      const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
        return k.toUpperCase();
      });
      let val = process.env[key];
      if (/^(yes|on|true|enabled)$/i.test(val)) {
        val = true;
      } else if (/^(no|off|false|disabled)$/i.test(val)) {
        val = false;
      } else if (val === "null") {
        val = null;
      } else {
        val = Number(val);
      }
      obj[prop] = val;
      return obj;
    }, {});
    function useColors() {
      return "colors" in exports2.inspectOpts ? Boolean(exports2.inspectOpts.colors) : tty.isatty(process.stderr.fd);
    }
    function formatArgs(args) {
      const { namespace: name, useColors: useColors2 } = this;
      if (useColors2) {
        const c = this.color;
        const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
        const prefix = `  ${colorCode};1m${name} \x1B[0m`;
        args[0] = prefix + args[0].split("\n").join("\n" + prefix);
        args.push(colorCode + "m+" + module2.exports.humanize(this.diff) + "\x1B[0m");
      } else {
        args[0] = getDate() + name + " " + args[0];
      }
    }
    function getDate() {
      if (exports2.inspectOpts.hideDate) {
        return "";
      }
      return (/* @__PURE__ */ new Date()).toISOString() + " ";
    }
    function log(...args) {
      return process.stderr.write(util.formatWithOptions(exports2.inspectOpts, ...args) + "\n");
    }
    function save(namespaces) {
      if (namespaces) {
        process.env.DEBUG = namespaces;
      } else {
        delete process.env.DEBUG;
      }
    }
    function load() {
      return process.env.DEBUG;
    }
    function init(debug) {
      debug.inspectOpts = {};
      const keys = Object.keys(exports2.inspectOpts);
      for (let i = 0; i < keys.length; i++) {
        debug.inspectOpts[keys[i]] = exports2.inspectOpts[keys[i]];
      }
    }
    module2.exports = require_common()(exports2);
    var { formatters } = module2.exports;
    formatters.o = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts).split("\n").map((str) => str.trim()).join(" ");
    };
    formatters.O = function(v) {
      this.inspectOpts.colors = this.useColors;
      return util.inspect(v, this.inspectOpts);
    };
  }
});

// node_modules/debug/src/index.js
var require_src = __commonJS({
  "node_modules/debug/src/index.js"(exports2, module2) {
    if (typeof process === "undefined" || process.type === "renderer" || process.browser === true || process.__nwjs) {
      module2.exports = require_browser();
    } else {
      module2.exports = require_node();
    }
  }
});

// node_modules/zephyr-edge-contract/dist/lib/utils/error-codes-messages.js
var require_error_codes_messages = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/utils/error-codes-messages.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.Errors = exports2.ErrorCategories = void 0;
    exports2.ErrorCategories = {
      unknown: "00",
      build: "10",
      deploy: "20",
      browser: "30"
    };
    exports2.Errors = {
      ERR_UNKNOWN: {
        id: "000",
        message: "Unknown error. Tell us about it in Discord https://zephyr-cloud.io/discord if you see this error",
        kind: "unknown"
      },
      /** Package.json not found error */
      ERR_PACKAGE_JSON_NOT_FOUND: {
        id: "010",
        message: "Package.json not found",
        kind: "build"
      },
      /** Package.json is not in a valid json format */
      ERR_PACKAGE_JSON_NOT_VALID: {
        id: "011",
        message: "Package.json is not in a valid json format.",
        kind: "build"
      },
      /** Webpack config error */
      ERR_WEBPACK_CONFIG: {
        id: "012",
        message: "Webpack config error.",
        kind: "build"
      },
      // TODO: we don't detect this error yet, will we be able to separate them?
      /** Package.json must have a name and version field. */
      ERR_PACKAGE_JSON_MUST_HAVE_NAME_VERSION: {
        id: "013",
        message: "Package.json must have a name and version field.",
        kind: "build"
      },
      /** Git remote origin is not configured properly. */
      ERR_GIT_REMOTE_ORIGIN: {
        id: "014",
        message: "Git remote origin is not configured properly.",
        kind: "build"
      },
      /** Git username or email is not configured. */
      ERR_NO_GIT_USERNAME_EMAIL: {
        id: "015",
        message: "Git username or email is not configured.",
        kind: "build"
      },
      /** Could not get git info */
      ERR_NO_GIT_INFO: {
        id: "016",
        message: "Could not get git info.",
        kind: "build"
      },
      /** Build error application_uid missing. */
      ERR_MISSING_APPLICATION_UID: {
        id: "017",
        message: "`application_uid` missing.",
        kind: "build"
      },
      /** Auth error */
      ERR_AUTH_ERROR: {
        id: "018",
        message: "Auth error.",
        kind: "build"
      },
      /** Could not get build id. */
      ERR_GET_BUILD_ID: {
        id: "019",
        message: "Could not get build id.",
        kind: "build"
      },
      /** Could not initialize Zephyr Agent. */
      ERR_INITIALIZE_ZEPHYR_AGENT: {
        id: "020",
        message: "Could not initialize Zephyr Agent.",
        kind: "build"
      },
      /** Cloudflare specific error */
      ERR_UNABLE_CREATE_DIST_FOLDER: {
        id: "021",
        message: "Error creating dist folder.",
        kind: "build"
      },
      /** Deployment error, assets not found */
      ERR_ASSETS_NOT_FOUND: {
        id: "010",
        message: "Assets not found.",
        kind: "deploy"
      },
      /** Assets not found in snapshot */
      ERR_ASSETS_NOT_FOUND_IN_SNAPSHOT: {
        id: "011",
        message: "Assets not found in snapshot.",
        kind: "deploy"
      },
      /** Application_uid missing */
      ERR_DEPLOY_MISSING_APPLICATION_UID: {
        id: "012",
        message: "`application_uid` is required.",
        kind: "deploy"
      },
      ERR_MISSING_FILE_HASH: {
        id: "013",
        message: "Missing file hash.",
        kind: "deploy"
      },
      /** Failed to load application configuration. */
      ERR_LOAD_APP_CONFIG: {
        id: "014",
        message: "Failed to load application configuration.",
        kind: "deploy"
      },
      /** Failed to upload build stats. */
      ERR_FAILED_UPLOAD_BUILD_STATS: {
        id: "015",
        message: "Failed to upload build stats.",
        kind: "deploy"
      },
      /** Did not receive envs from build stats upload */
      ERR_NOT_RECEIVE_ENVS_FROM_BUILD_STATS: {
        id: "016",
        message: "Did not receive envs from build stats upload.",
        kind: "deploy"
      },
      /** Failed to upload assets. */
      ERR_FAILED_UPLOAD_ASSETS: {
        id: "017",
        message: "Failed to upload assets.",
        kind: "deploy"
      },
      /** Failed to upload snapshots. */
      ERR_FAILED_UPLOAD_SNAPSHOTS: {
        id: "018",
        message: "Failed to upload snapshots.",
        kind: "deploy"
      },
      /** Snapshot uploads gave no results. */
      ERR_SNAPSHOT_UPLOADS_NO_RESULTS: {
        id: "019",
        message: "Snapshot uploads gave no results.",
        kind: "deploy"
      },
      /** Failed to get application hash list */
      ERR_GET_APPLICATION_HASH_LIST: {
        id: "020",
        message: "Failed to get application hash list.",
        kind: "deploy"
      },
      /** Could not resolve ${name} with verson ${version} */
      ERR_NOT_RESOLVE_APP_NAME_WITH_VERSION: {
        id: "021",
        message: "Could not resolve application name with version.",
        kind: "deploy"
      },
      ERR_SNAPSHOT_ID_NOT_FOUND: {
        id: "022",
        message: "`snapshot_id` not found.",
        kind: "deploy"
      },
      ERR_SNAPSHOT_NOT_FOUND: {
        id: "023",
        message: "Snapshot not found.",
        kind: "deploy"
      },
      ERR_DEPLOY_LOCAL_BUILD: {
        id: "024",
        message: "Failed to deploy local build.",
        kind: "deploy"
      },
      /** Cloudflare specific error */
      ERR_WRANGLER_DEPENDENCY: {
        id: "025",
        message: "Wrangler dependency is needed for Cloudflare deployment. Please install dependencies without --no-optional flag.",
        kind: "deploy"
      },
      ERR_CONVERT_GRAPH_TO_DASHBOARD: {
        id: "026",
        message: "Failed to convert graph to dashboard data.",
        kind: "browser"
      },
      ERR_UPLOAD_TO_CLOUDFLARE_PAGES: {
        id: "027",
        message: "Error upload to cloudflare pages.",
        kind: "deploy"
      },
      ERR_NO_WRANGLER: {
        id: "028",
        message: "Wrangler dependency is needed for Cloudflare deployment. Please install dependencies without --no-optional flag.",
        kind: "build"
      },
      ERR_CREATE_DIST_FOLDER: {
        id: "029",
        message: "Error creating dist folder.",
        kind: "build"
      }
    };
  }
});

// node_modules/zephyr-edge-contract/dist/lib/utils/error-formatted-message.js
var require_error_formatted_message = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/utils/error-formatted-message.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.err = exports2.errMsg = exports2.errCode = exports2.docsPrefix = void 0;
    var picocolor_1 = require_picocolor();
    var error_codes_messages_1 = require_error_codes_messages();
    exports2.docsPrefix = "https://docs.zephyr-cloud.io/errors";
    function errCode(err2) {
      const id = error_codes_messages_1.Errors[err2].id;
      const prefix = error_codes_messages_1.ErrorCategories[error_codes_messages_1.Errors[err2].kind];
      const paddedId = id.toString().padStart(3, "0");
      const paddedPrefix = prefix.toString().padStart(2, "0");
      return `ZE${paddedPrefix}${paddedId}`;
    }
    exports2.errCode = errCode;
    function errMsg(err2) {
      return error_codes_messages_1.Errors[err2].message;
    }
    exports2.errMsg = errMsg;
    function err(err2) {
      const id = error_codes_messages_1.Errors[err2].id;
      const prefix = error_codes_messages_1.ErrorCategories[error_codes_messages_1.Errors[err2].kind];
      const paddedId = id.toString().padStart(3, "0");
      const paddedPrefix = prefix.toString().padStart(2, "0");
      const errorCode = `ZE${paddedPrefix}${paddedId}`;
      const errorMsg = error_codes_messages_1.Errors[err2].message;
      const errorDoc = `See potential workaround and how to debug this error in our documentation ${exports2.docsPrefix}/${errorCode.toLowerCase()}`;
      const fullMsg = (0, picocolor_1.redBright)(`Error code: ${errorCode}. ${errorMsg} 
 ${errorDoc}`);
      return fullMsg;
    }
    exports2.err = err;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/utils/debug.js
var require_debug = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/utils/debug.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ze_error = exports2.ze_log = exports2.brightRedBgName = exports2.brightGreenBgName = exports2.brightYellowBgName = exports2.brightBlueBgName = exports2.dimmedName = void 0;
    var debug_1 = require_src();
    var picocolor_1 = require_picocolor();
    var debug_enabled_1 = require_debug_enabled();
    var error_formatted_message_1 = require_error_formatted_message();
    var name = " ZEPHYR ";
    exports2.dimmedName = (0, picocolor_1.dim)(name);
    exports2.brightBlueBgName = (0, picocolor_1.bold)((0, picocolor_1.bgCyanBright)((0, picocolor_1.black)(name)));
    exports2.brightYellowBgName = (0, picocolor_1.bold)((0, picocolor_1.bgYellowBright)((0, picocolor_1.black)(name)));
    exports2.brightGreenBgName = (0, picocolor_1.bold)((0, picocolor_1.bgGreenBright)((0, picocolor_1.black)(name)));
    exports2.brightRedBgName = (0, picocolor_1.bold)((0, picocolor_1.bgRedBright)((0, picocolor_1.black)(name)));
    function print_error_with_docs(errMsg, ...args) {
      errMsg ? console.log(`${exports2.brightRedBgName} ${(0, error_formatted_message_1.err)(errMsg)} ${args} 
`) : console.log(exports2.brightRedBgName, (0, picocolor_1.redBright)("Unknown error"), args);
    }
    exports2.ze_log = (0, debug_1.debug)("zephyr:log");
    exports2.ze_error = debug_enabled_1.is_debug_enabled ? (0, debug_1.debug)("zephyr:error") : print_error_with_docs;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/utils/promise.js
var require_promise = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/utils/promise.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.PromiseTuple = exports2.PromiseWithResolvers = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    function PromiseWithResolvers() {
      let resolve;
      let reject;
      const promise = new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      });
      return { promise, resolve, reject };
    }
    exports2.PromiseWithResolvers = PromiseWithResolvers;
    function PromiseTuple(maybePromise) {
      return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
          return [true, null, yield maybePromise];
        } catch (err) {
          return [false, err];
        }
      });
    }
    exports2.PromiseTuple = PromiseTuple;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/utils/safe-json-parse.js
var require_safe_json_parse = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/utils/safe-json-parse.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.safe_json_parse = void 0;
    function safe_json_parse(str) {
      try {
        return JSON.parse(str);
      } catch (_a) {
        return;
      }
    }
    exports2.safe_json_parse = safe_json_parse;
  }
});

// node_modules/zephyr-edge-contract/dist/lib/utils/ze-http-request.js
var require_ze_http_request = __commonJS({
  "node_modules/zephyr-edge-contract/dist/lib/utils/ze-http-request.js"(exports2) {
    "use strict";
    var _ZeHttpRequest_instances;
    var _ZeHttpRequest_start;
    var _ZeHttpRequest_url;
    var _ZeHttpRequest_options;
    var _ZeHttpRequest_data;
    var _ZeHttpRequest_promise;
    var _ZeHttpRequest_reject;
    var _ZeHttpRequest_resolve;
    var _ZeHttpRequest_request;
    var _ZeHttpRequest_onRequestError;
    var _ZeHttpRequest_onResponse;
    var _ZeHttpRequest_handleUnknownError;
    var _ZeHttpRequest_onResponseAsync;
    var _ZeHttpRequest_redact;
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ZeHttpRequest = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var http = tslib_1.__importStar(require("node:http"));
    var https = tslib_1.__importStar(require("node:https"));
    var consumers_1 = require("node:stream/consumers");
    var get_api_contract_1 = require_get_api_contract();
    var errors_1 = require_errors();
    var token_1 = require_token();
    var debug_1 = require_debug();
    var promise_1 = require_promise();
    var safe_json_parse_1 = require_safe_json_parse();
    var ZeHttpRequest = class _ZeHttpRequest {
      constructor() {
        _ZeHttpRequest_instances.add(this);
        _ZeHttpRequest_start.set(this, Date.now());
        _ZeHttpRequest_url.set(this, void 0);
        _ZeHttpRequest_options.set(this, void 0);
        _ZeHttpRequest_data.set(this, void 0);
        _ZeHttpRequest_promise.set(this, (0, promise_1.PromiseWithResolvers)());
        this.then = tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_promise, "f").promise.then.bind(tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_promise, "f").promise);
        _ZeHttpRequest_onRequestError.set(this, (cause) => {
          var _a, _b;
          if ("ERR_TLS_CERT_ALTNAME_INVALID" in cause) {
            tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_instances, "m", _ZeHttpRequest_reject).call(this, new errors_1.ZephyrError(errors_1.ZeErrors.ERR_TLS_CERT_ALTNAME_INVALID, {
              cause
            }));
            return;
          }
          tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_instances, "m", _ZeHttpRequest_reject).call(this, new errors_1.ZephyrError(errors_1.ZeErrors.ERR_HTTP_ERROR, {
            url: tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_url, "f").toString(),
            method: (_b = (_a = tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_options, "f").method) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : "GET",
            content: "Could not send request",
            status: "-1",
            cause
          }));
        });
        _ZeHttpRequest_onResponse.set(this, (res) => {
          tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_onResponseAsync, "f").call(this, res).catch(tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_handleUnknownError, "f"));
        });
        _ZeHttpRequest_handleUnknownError.set(this, (cause) => {
          tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_instances, "m", _ZeHttpRequest_reject).call(this, new errors_1.ZephyrError(errors_1.ZeErrors.ERR_UNKNOWN, { message: "Could not process provided http.IncomingMessage", cause }));
        });
        _ZeHttpRequest_onResponseAsync.set(this, (res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
          var _a, _b, _c, _d, _e;
          if (res.statusCode === 401 || res.statusCode === 403) {
            yield (0, token_1.cleanTokens)();
            throw new errors_1.ZephyrError(errors_1.ZeErrors.ERR_AUTH_ERROR, { message: "Unauthorized request" });
          }
          const [resOk, resErr, resText] = yield (0, promise_1.PromiseTuple)((0, consumers_1.text)(res));
          if (!resOk) {
            return tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_onRequestError, "f").call(this, resErr);
          }
          const message = tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_instances, "m", _ZeHttpRequest_redact).call(this, resText);
          if (message === "Not Implemented") {
            throw new errors_1.ZephyrError(errors_1.ZeErrors.ERR_UNKNOWN, {
              message: "Not implemented yet. Please get in contact with our support."
            });
          }
          if (res.statusCode === void 0) {
            throw new errors_1.ZephyrError(errors_1.ZeErrors.ERR_HTTP_ERROR, {
              content: "No status code found",
              method: (_b = (_a = tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_options, "f").method) === null || _a === void 0 ? void 0 : _a.toUpperCase()) !== null && _b !== void 0 ? _b : "GET",
              url: tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_url, "f").toString(),
              status: -1
            });
          }
          if (!tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_url, "f").pathname.includes("application/logs")) {
            (0, debug_1.ze_log)(message);
          }
          const resData = (_c = (0, safe_json_parse_1.safe_json_parse)(resText)) !== null && _c !== void 0 ? _c : resText;
          if (res.statusCode >= 300) {
            throw new errors_1.ZephyrError(errors_1.ZeErrors.ERR_HTTP_ERROR, {
              status: res.statusCode,
              url: tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_url, "f").toString(),
              content: resData,
              method: (_e = (_d = tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_options, "f").method) === null || _d === void 0 ? void 0 : _d.toUpperCase()) !== null && _e !== void 0 ? _e : "GET"
            });
          }
          tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_instances, "m", _ZeHttpRequest_resolve).call(this, resData);
        }));
      }
      /** Creates a new http request. */
      static from(urlStr, options = {}, data) {
        const req = new _ZeHttpRequest();
        tslib_1.__classPrivateFieldSet(req, _ZeHttpRequest_data, data, "f");
        tslib_1.__classPrivateFieldSet(req, _ZeHttpRequest_options, options, "f");
        if (typeof urlStr === "string") {
          tslib_1.__classPrivateFieldSet(req, _ZeHttpRequest_url, new URL(urlStr), "f");
        } else if (urlStr instanceof URL) {
          tslib_1.__classPrivateFieldSet(req, _ZeHttpRequest_url, urlStr, "f");
        } else {
          tslib_1.__classPrivateFieldSet(req, _ZeHttpRequest_url, new URL(urlStr.path, urlStr.base), "f");
          for (const [key, value] of Object.entries(urlStr.query)) {
            tslib_1.__classPrivateFieldGet(req, _ZeHttpRequest_url, "f").searchParams.append(key, String(value));
          }
        }
        const is_preview = (0, get_api_contract_1.ZE_IS_PREVIEW)();
        const ze_api_endpoint_host = (0, get_api_contract_1.ZE_API_ENDPOINT_HOST)();
        const zephyr_api_endpoint = (0, get_api_contract_1.ZEPHYR_API_ENDPOINT)();
        if (is_preview && tslib_1.__classPrivateFieldGet(req, _ZeHttpRequest_url, "f").host === ze_api_endpoint_host) {
          tslib_1.__classPrivateFieldGet(req, _ZeHttpRequest_url, "f").searchParams.set("api_host", zephyr_api_endpoint);
        }
        tslib_1.__classPrivateFieldGet(req, _ZeHttpRequest_instances, "m", _ZeHttpRequest_request).call(req);
        return req;
      }
      /** Transforms `Promise<HttpResponse<T>>` into `Promise<T>` */
      unwrap() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
          const [ok, error, data] = yield this;
          if (!ok) {
            throw error;
          }
          return data;
        });
      }
    };
    exports2.ZeHttpRequest = ZeHttpRequest;
    _ZeHttpRequest_start = /* @__PURE__ */ new WeakMap(), _ZeHttpRequest_url = /* @__PURE__ */ new WeakMap(), _ZeHttpRequest_options = /* @__PURE__ */ new WeakMap(), _ZeHttpRequest_data = /* @__PURE__ */ new WeakMap(), _ZeHttpRequest_promise = /* @__PURE__ */ new WeakMap(), _ZeHttpRequest_onRequestError = /* @__PURE__ */ new WeakMap(), _ZeHttpRequest_onResponse = /* @__PURE__ */ new WeakMap(), _ZeHttpRequest_handleUnknownError = /* @__PURE__ */ new WeakMap(), _ZeHttpRequest_onResponseAsync = /* @__PURE__ */ new WeakMap(), _ZeHttpRequest_instances = /* @__PURE__ */ new WeakSet(), _ZeHttpRequest_reject = function _ZeHttpRequest_reject2(error) {
      tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_promise, "f").resolve([false, error]);
    }, _ZeHttpRequest_resolve = function _ZeHttpRequest_resolve2(data) {
      tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_promise, "f").resolve([true, null, data]);
    }, _ZeHttpRequest_request = function _ZeHttpRequest_request2() {
      var _a;
      const requester = tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_url, "f").protocol === "https:" ? https : http;
      const req = requester.request(tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_url, "f"), (_a = tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_options, "f")) !== null && _a !== void 0 ? _a : {}, tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_onResponse, "f"));
      req.on("error", tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_onRequestError, "f"));
      req.end(tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_data, "f"));
    }, _ZeHttpRequest_redact = function _ZeHttpRequest_redact2(response) {
      var _a, _b;
      const str = [
        `[${tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_options, "f").method || "GET"}][${tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_url, "f")}]: ${Date.now() - tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_start, "f")}ms`,
        ((_a = tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_data, "f")) === null || _a === void 0 ? void 0 : _a.length) ? ` - ${(((_b = tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_data, "f").length) !== null && _b !== void 0 ? _b : 0) / 1024).toFixed(2)}kb` : "",
        response ? `Response: ${response}` : "",
        tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_options, "f") ? `Options: ${JSON.stringify(tslib_1.__classPrivateFieldGet(this, _ZeHttpRequest_options, "f"))}` : ""
      ].join("\n");
      return str.replace(/Bearer ([^"|']+)/gi, "Bearer [REDACTED]").replace(/"?jwt"?:["|\W']{0,2}([^"|']+)(["|'])/gi, "jwt: [REDACTED]");
    };
  }
});

// node_modules/zephyr-edge-contract/dist/index.js
var require_dist = __commonJS({
  "node_modules/zephyr-edge-contract/dist/index.js"(exports2) {
    "use strict";
    Object.defineProperty(exports2, "__esModule", { value: true });
    exports2.ZeHttpRequest = exports2.safe_json_parse = exports2.ZeUtils = exports2.color = exports2.ze_log = exports2.ze_error = exports2.dimmedName = exports2.brightYellowBgName = exports2.brightRedBgName = exports2.brightGreenBgName = exports2.brightBlueBgName = exports2.createSnapshotId = exports2.createApplicationUID = exports2.saveToken = exports2.removeToken = exports2.getToken = exports2.cleanTokens = exports2.hasSecretToken = exports2.getSecretToken = exports2.savePartialAssetMap = exports2.removePartialAssetMap = exports2.getPartialAssetMap = exports2._hash_cache = exports2._fs_cache = exports2.saveAppConfig = exports2.remoteAppConfig = exports2.getAppConfig = exports2.appDeployResultCache = exports2.ZephyrError = exports2.ZeErrors = exports2.ZeErrorCategories = exports2.ze_api_gateway = exports2.ZE_API_ENDPOINT = exports2.ZEPHYR_API_ENDPOINT = void 0;
    var tslib_1 = (init_tslib_es6(), __toCommonJS(tslib_es6_exports));
    var get_api_contract_1 = require_get_api_contract();
    Object.defineProperty(exports2, "ZEPHYR_API_ENDPOINT", { enumerable: true, get: function() {
      return get_api_contract_1.ZEPHYR_API_ENDPOINT;
    } });
    Object.defineProperty(exports2, "ZE_API_ENDPOINT", { enumerable: true, get: function() {
      return get_api_contract_1.ZE_API_ENDPOINT;
    } });
    Object.defineProperty(exports2, "ze_api_gateway", { enumerable: true, get: function() {
      return get_api_contract_1.ze_api_gateway;
    } });
    var errors_1 = require_errors();
    Object.defineProperty(exports2, "ZeErrorCategories", { enumerable: true, get: function() {
      return errors_1.ZeErrorCategories;
    } });
    Object.defineProperty(exports2, "ZeErrors", { enumerable: true, get: function() {
      return errors_1.ZeErrors;
    } });
    Object.defineProperty(exports2, "ZephyrError", { enumerable: true, get: function() {
      return errors_1.ZephyrError;
    } });
    exports2.appDeployResultCache = tslib_1.__importStar(require_app_deploy_result_cache());
    var application_configuration_1 = require_application_configuration();
    Object.defineProperty(exports2, "getAppConfig", { enumerable: true, get: function() {
      return application_configuration_1.getAppConfig;
    } });
    Object.defineProperty(exports2, "remoteAppConfig", { enumerable: true, get: function() {
      return application_configuration_1.remoteAppConfig;
    } });
    Object.defineProperty(exports2, "saveAppConfig", { enumerable: true, get: function() {
      return application_configuration_1.saveAppConfig;
    } });
    exports2._fs_cache = tslib_1.__importStar(require_fs_cache());
    exports2._hash_cache = tslib_1.__importStar(require_hash_cache());
    var partial_assets_map_1 = require_partial_assets_map();
    Object.defineProperty(exports2, "getPartialAssetMap", { enumerable: true, get: function() {
      return partial_assets_map_1.getPartialAssetMap;
    } });
    Object.defineProperty(exports2, "removePartialAssetMap", { enumerable: true, get: function() {
      return partial_assets_map_1.removePartialAssetMap;
    } });
    Object.defineProperty(exports2, "savePartialAssetMap", { enumerable: true, get: function() {
      return partial_assets_map_1.savePartialAssetMap;
    } });
    var secret_token_1 = require_secret_token();
    Object.defineProperty(exports2, "getSecretToken", { enumerable: true, get: function() {
      return secret_token_1.getSecretToken;
    } });
    Object.defineProperty(exports2, "hasSecretToken", { enumerable: true, get: function() {
      return secret_token_1.hasSecretToken;
    } });
    var token_1 = require_token();
    Object.defineProperty(exports2, "cleanTokens", { enumerable: true, get: function() {
      return token_1.cleanTokens;
    } });
    Object.defineProperty(exports2, "getToken", { enumerable: true, get: function() {
      return token_1.getToken;
    } });
    Object.defineProperty(exports2, "removeToken", { enumerable: true, get: function() {
      return token_1.removeToken;
    } });
    Object.defineProperty(exports2, "saveToken", { enumerable: true, get: function() {
      return token_1.saveToken;
    } });
    tslib_1.__exportStar(require_upload_provider_options(), exports2);
    var create_application_u_i_d_1 = require_create_application_u_i_d();
    Object.defineProperty(exports2, "createApplicationUID", { enumerable: true, get: function() {
      return create_application_u_i_d_1.createApplicationUID;
    } });
    var create_snapshot_id_1 = require_create_snapshot_id();
    Object.defineProperty(exports2, "createSnapshotId", { enumerable: true, get: function() {
      return create_snapshot_id_1.createSnapshotId;
    } });
    var debug_1 = require_debug();
    Object.defineProperty(exports2, "brightBlueBgName", { enumerable: true, get: function() {
      return debug_1.brightBlueBgName;
    } });
    Object.defineProperty(exports2, "brightGreenBgName", { enumerable: true, get: function() {
      return debug_1.brightGreenBgName;
    } });
    Object.defineProperty(exports2, "brightRedBgName", { enumerable: true, get: function() {
      return debug_1.brightRedBgName;
    } });
    Object.defineProperty(exports2, "brightYellowBgName", { enumerable: true, get: function() {
      return debug_1.brightYellowBgName;
    } });
    Object.defineProperty(exports2, "dimmedName", { enumerable: true, get: function() {
      return debug_1.dimmedName;
    } });
    Object.defineProperty(exports2, "ze_error", { enumerable: true, get: function() {
      return debug_1.ze_error;
    } });
    Object.defineProperty(exports2, "ze_log", { enumerable: true, get: function() {
      return debug_1.ze_log;
    } });
    tslib_1.__exportStar(require_debug_enabled(), exports2);
    tslib_1.__exportStar(require_picocolor(), exports2);
    exports2.color = tslib_1.__importStar(require_picocolor());
    exports2.ZeUtils = tslib_1.__importStar(require_promise());
    var safe_json_parse_1 = require_safe_json_parse();
    Object.defineProperty(exports2, "safe_json_parse", { enumerable: true, get: function() {
      return safe_json_parse_1.safe_json_parse;
    } });
    var ze_http_request_1 = require_ze_http_request();
    Object.defineProperty(exports2, "ZeHttpRequest", { enumerable: true, get: function() {
      return ze_http_request_1.ZeHttpRequest;
    } });
  }
});

// src/get-deploy-version-url.ts
var import_zephyr_edge_contract = __toESM(require_dist());
var getDeployVersionUrl = async (application_uid2) => {
  const result = await import_zephyr_edge_contract.appDeployResultCache.getAppDeployResult(application_uid2);
  return result?.urls[0];
};

// tests/show-deploy-result.ts
var application_uid = "create-mf-app-rspack-host.zephyr-ci.opavlovskyi";
(async () => {
  const version_url = await getDeployVersionUrl(application_uid);
  console.log(`Version URL: ${version_url}`);
})();
