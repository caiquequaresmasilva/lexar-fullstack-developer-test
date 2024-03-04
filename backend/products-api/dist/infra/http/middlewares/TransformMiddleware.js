"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformMiddleware = void 0;
class TransformMiddleware {
    service;
    constructor(service) {
        this.service = service;
    }
    async handle(req, res, next) {
        const rawProduct = req.body;
        try {
            req.body = await this.service.transform(rawProduct);
            next();
        }
        catch (error) {
            res
                .status(500)
                .json({ error: error.message || 'Internal server error' });
        }
    }
}
exports.TransformMiddleware = TransformMiddleware;
