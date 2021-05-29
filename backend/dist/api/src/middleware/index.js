"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Unauthorized = exports.BadRequest = void 0;
__exportStar(require("./auth"), exports);
__exportStar(require("./errors"), exports);
class HttpError extends Error {
    status;
}
class BadRequest extends HttpError {
    constructor(message = 'Bad Request') {
        super(message);
        this.status = 400;
    }
}
exports.BadRequest = BadRequest;
class Unauthorized extends HttpError {
    constructor(message = 'Unauthorized') {
        super(message);
        this.status = 401;
    }
}
exports.Unauthorized = Unauthorized;
//# sourceMappingURL=index.js.map