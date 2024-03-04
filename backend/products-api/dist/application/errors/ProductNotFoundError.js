"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductNotFoundError = void 0;
const CustomError_1 = require("./CustomError");
class ProductNotFoundError extends CustomError_1.CustomError {
    constructor(message = 'Product not found') {
        super(message, 404);
    }
}
exports.ProductNotFoundError = ProductNotFoundError;
