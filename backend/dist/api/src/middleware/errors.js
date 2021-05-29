"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serverError = exports.notFound = exports.catchAsync = void 0;
const catchAsync = (handler) => (...args) => {
    return Promise
        .resolve(handler(...args))
        .catch(args[2]);
};
exports.catchAsync = catchAsync;
const notFound = (req, res, next) => res.status(404).json({ message: 'Not Found' });
exports.notFound = notFound;
const serverError = (err, req, res, next) => {
    if (!err.status) {
        console.error(err.stack);
    }
    res.status(err.status || 500)
        .json({ status: err.status, message: err.message || 'Internal Server Error' });
};
exports.serverError = serverError;
//# sourceMappingURL=errors.js.map