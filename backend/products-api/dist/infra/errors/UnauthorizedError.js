"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnauthorizedError = void 0;
const errors_1 = require("../../application/errors");
class UnauthorizedError extends errors_1.CustomError {
    constructor(message = 'Invalid authentication token') {
        super(message, 401);
    }
}
exports.UnauthorizedError = UnauthorizedError;
