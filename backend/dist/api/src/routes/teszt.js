"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
router.get('/teszt', (req, res) => {
    res.json({ message: 'TESZT, OK!' });
});
exports.default = router;
//# sourceMappingURL=teszt.js.map