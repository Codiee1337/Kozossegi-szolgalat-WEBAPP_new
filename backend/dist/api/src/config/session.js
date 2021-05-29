"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SESSION_OPTIONS = exports.SESSION_IDLE_TIMEOUT = exports.SESSION_NAME = exports.SESSION_SECRET = void 0;
const app_1 = require("./app");
const HALF_HOUR = 1000 * 60 * 30;
_a = process.env, _b = _a.SESSION_SECRET, exports.SESSION_SECRET = _b === void 0 ? 'secret' : _b, _c = _a.SESSION_NAME, exports.SESSION_NAME = _c === void 0 ? 'sid' : _c, _d = _a.SESSION_IDLE_TIMEOUT, exports.SESSION_IDLE_TIMEOUT = _d === void 0 ? HALF_HOUR : _d;
exports.SESSION_OPTIONS = {
    secret: exports.SESSION_SECRET,
    name: exports.SESSION_NAME,
    cookie: {
        maxAge: +exports.SESSION_IDLE_TIMEOUT,
        secure: app_1.IN_PROD,
        sameSite: true
    },
    rolling: true,
    resave: false,
    saveUninitialized: false,
};
//# sourceMappingURL=session.js.map