"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthMiddleware = void 0;
const errors_1 = require("../../../application/errors");
class AuthMiddleware {
    tokenManager;
    constructor(tokenManager) {
        this.tokenManager = tokenManager;
    }
    async handle(req, res, next) {
        const bearerToken = req.headers.authorization || '';
        const token = bearerToken.split(' ')[1] || '';
        try {
            this.tokenManager.validate(token);
            next();
        }
        catch (error) {
            if (error instanceof errors_1.CustomError) {
                res.status(error.status).json({ error: error.message });
            }
            else {
                res
                    .status(500)
                    .json({ error: error.message || 'Internal server error' });
            }
        }
    }
}
exports.AuthMiddleware = AuthMiddleware;
