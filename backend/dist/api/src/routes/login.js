"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const validation_1 = require("../validation");
const models_1 = require("../models");
const errors_1 = require("../errors");
const auth_1 = require("../auth");
const router = express_1.Router();
router.post('/login', middleware_1.guest, middleware_1.catchAsync(async (req, res) => {
    console.log(req);
    await validation_1.validate(validation_1.loginSchema, req.body);
    const { email, password } = req.body;
    const user = await models_1.User.findOne({ email });
    if (!user || !(await user.matchesPassword(password))) {
        throw new errors_1.Unauthorized();
    }
    auth_1.logIn(req, user.id, user.role);
    res.json(user);
}));
router.post('/logout', middleware_1.auth, middleware_1.catchAsync(async (req, res) => {
    await auth_1.logOut(req, res);
    res.status(200).json({ message: 'Successfully logged out!' });
}));
exports.default = router;
//# sourceMappingURL=login.js.map