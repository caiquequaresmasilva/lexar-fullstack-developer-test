"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productSchema = void 0;
const joi_1 = __importDefault(require("joi"));
exports.productSchema = joi_1.default.object({
    name: joi_1.default.string().min(1).required().messages({
        'string.min': '"Name" length must be at least 1 characters long',
        'string.base': '"Name" should be a string',
        'any.required': '"Name" is required',
    }),
    brand: joi_1.default.string().min(1).required().messages({
        'string.min': '"Brand" length must be at least 1 characters long',
        'string.base': '"Brand" should be a string',
        'any.required': '"Brand" is required',
    }),
    model: joi_1.default.string().min(1).required().messages({
        'string.min': '"Model" length must be at least 1 characters long',
        'string.base': '"Model" should be a string',
        'any.required': '"Model" is required',
    }),
    price: joi_1.default.number().min(100).required().messages({
        'number.min': '"Price" must be at least 100',
        'number.base': '"Price" should be a number',
        'any.required': '"Price" is required',
    }),
    color: joi_1.default.string().min(3).required().messages({
        'string.min': '"Color" length must be at least 3 characters long',
        'string.base': '"Color" should be a string',
        'any.required': '"Color" is required',
    }),
});
