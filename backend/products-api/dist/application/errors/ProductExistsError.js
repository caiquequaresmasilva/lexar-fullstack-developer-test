"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductExistsError = void 0;
const CustomError_1 = require("./CustomError");
class ProductExistsError extends CustomError_1.CustomError {
    constructor(message = 'Product already created') {
        super(message, 400);
    }
}
exports.ProductExistsError = ProductExistsError;
