"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationHandler = void 0;
const schemas_1 = require("../../schemas");
async function validationHandler(req, res, next) {
    const { name, email, password } = req.body;
    const { error, value } = schemas_1.userSchema.validate({ name, email, password });
    if (error) {
        res.status(400).json({ error: error.message });
    }
    else {
        next();
    }
}
exports.validationHandler = validationHandler;
