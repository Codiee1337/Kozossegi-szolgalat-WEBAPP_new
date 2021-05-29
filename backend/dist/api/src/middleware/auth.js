"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = exports.guest = void 0;
const auth_1 = require("../auth");
const errors_1 = require("../errors");
const guest = (req, res, next) => {
    if (auth_1.isLoggedIn(req)) {
        return next(new errors_1.AlreadyLoggedIn());
    }
    next();
};
exports.guest = guest;
const auth = (req, res, next) => {
    if (!auth_1.isLoggedIn(req)) {
        return next(new errors_1.NotLoggedIn());
    }
    next();
};
exports.auth = auth;
//# sourceMappingURL=auth.js.map