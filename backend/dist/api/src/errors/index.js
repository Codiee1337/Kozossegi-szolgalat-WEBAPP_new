"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAdmin = exports.NotLoggedIn = exports.Unauthorized = exports.AlreadyLoggedIn = exports.InvalidEmail = exports.BadRequest = void 0;
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
class InvalidEmail extends HttpError {
    constructor(message = 'Invalid email') {
        super(message);
        this.status = 500.1;
    }
}
exports.InvalidEmail = InvalidEmail;
class AlreadyLoggedIn extends HttpError {
    constructor(message = 'You are already logged in!') {
        super(message);
        this.status = 500.2;
    }
}
exports.AlreadyLoggedIn = AlreadyLoggedIn;
class Unauthorized extends HttpError {
    constructor(message = 'Incorrect email or password!') {
        super(message);
        this.status = 500.3;
    }
}
exports.Unauthorized = Unauthorized;
class NotLoggedIn extends HttpError {
    constructor(message = 'You must be logged in!') {
        super(message);
        this.status = 500.4;
    }
}
exports.NotLoggedIn = NotLoggedIn;
class NotAdmin extends HttpError {
    constructor(message = 'You are not an admin!') {
        super(message);
        this.status = 500.5;
    }
}
exports.NotAdmin = NotAdmin;
//# sourceMappingURL=index.js.map