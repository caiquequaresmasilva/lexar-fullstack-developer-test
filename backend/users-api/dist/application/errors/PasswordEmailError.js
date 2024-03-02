"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PasswordEmailError = void 0;
const CustomError_1 = require("./CustomError");
class PasswordEmailError extends CustomError_1.CustomError {
    constructor(message = 'Password or email incorrect') {
        super(message, 400);
    }
}
exports.PasswordEmailError = PasswordEmailError;
