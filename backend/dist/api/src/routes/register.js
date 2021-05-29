"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_1 = require("../auth");
const errors_1 = require("../errors");
const middleware_1 = require("../middleware");
const models_1 = require("../models");
const validation_1 = require("../validation");
const router = express_1.Router();
router.post('/register', middleware_1.guest, middleware_1.catchAsync(async (req, res) => {
    await validation_1.validate(validation_1.registerSchema, req.body);
    const { email, name, password } = req.body;
    const found = await models_1.User.exists({ email });
    if (found) {
        throw new errors_1.InvalidEmail();
    }
    const user = await models_1.User.create({
        email, name, password
    });
    auth_1.logIn(req, user.id, user.role);
    res.json({ message: 'OK!' });
}));
exports.default = router;
//# sourceMappingURL=register.js.map