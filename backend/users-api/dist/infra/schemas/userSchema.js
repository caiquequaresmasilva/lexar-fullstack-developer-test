"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSchema = void 0;
const joi_1 = __importDefault(require("joi"));
const EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
// Senha: deve conter maiúsculas, minúsculas e números. No mínimo 8 caracteres.
const PASSWORD_PATTERN = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
exports.userSchema = joi_1.default.object({
    name: joi_1.default.string().min(3).required().messages({
        'string.min': '"Name" length must be at least 3 characters long',
        'string.base': '"Name" should be a string',
        'any.required': '"Name" is required'
    }),
    email: joi_1.default.string().regex(EMAIL_PATTERN).required().messages({
        'string.base': '"Email" should be a string',
        'any.required': '"Email" is required',
        'string.pattern.base': '"Email" must be a valid email',
    }),
    password: joi_1.default.string().regex(PASSWORD_PATTERN).required().messages({
        'string.base': '"Password" should be a string',
        'any.required': '"Password" is required',
        'string.pattern.base': '"Password" must be a valid password'
    })
});
