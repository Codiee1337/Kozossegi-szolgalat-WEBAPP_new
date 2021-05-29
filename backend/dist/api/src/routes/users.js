"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middleware_1 = require("../middleware");
const models_1 = require("../models");
const errors_1 = require("../errors");
const validation_1 = require("../validation");
const router = express_1.Router();
router.get('/users/getUserList', middleware_1.auth, middleware_1.catchAsync(async (req, res, next) => {
    if (req.session.role != 'Admin') {
        throw new errors_1.NotAdmin();
    }
    const users = await models_1.User.find({});
    res.json({ users });
}));
router.post('/users/getUser', middleware_1.catchAsync(async (req, res, next) => {
    await validation_1.validate(validation_1.idSchema, req.body);
    const user = await models_1.User.findOne({ _id: req.body.id });
    res.json({ user });
}));
exports.default = router;
//# sourceMappingURL=users.js.map