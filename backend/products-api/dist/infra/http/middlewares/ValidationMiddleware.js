"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = void 0;
const joi_1 = require("joi");
const schemas_1 = require("../../schemas");
async function validationMiddleware(req, res, next) {
    const productRequest = req.body;
    try {
        await Promise.all(productRequest.map(prod => schemas_1.productSchema.validateAsync(prod)));
        next();
    }
    catch (e) {
        if (e instanceof joi_1.ValidationError) {
            res.status(400).json({ error: e.message });
        }
        else {
            res
                .status(500)
                .json({ error: e.message || 'Internal server error' });
        }
    }
}
exports.validationMiddleware = validationMiddleware;
