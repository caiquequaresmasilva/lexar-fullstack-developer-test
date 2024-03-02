"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAlreadyExistsError = void 0;
const CustomError_1 = require("./CustomError");
class UserAlreadyExistsError extends CustomError_1.CustomError {
    constructor(message = 'User already exists') {
        super(message, 400);
    }
}
exports.UserAlreadyExistsError = UserAlreadyExistsError;
