"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const express_1 = __importDefault(require("express"));
const express_session_1 = __importDefault(require("express-session"));
const config_1 = require("./config");
const routes_1 = require("./routes");
const middleware_1 = require("./middleware");
const createApp = (store) => {
    const app = express_1.default();
    app.use(express_1.default.json());
    app.use(express_session_1.default({
        ...config_1.SESSION_OPTIONS,
        store
    }));
    app.use(function (req, res, next) {
        res.header("Access-Control-Allow-Origin", "http://79.122.2.40:3000");
        res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
        res.header("Access-Control-Allow-Credentials", "true");
        next();
    });
    app.use(routes_1.users);
    app.use(routes_1.register);
    app.use(routes_1.teszt);
    app.use(routes_1.login);
    app.use(middleware_1.notFound);
    app.use(middleware_1.serverError);
    return app;
};
exports.createApp = createApp;
//# sourceMappingURL=app.js.map