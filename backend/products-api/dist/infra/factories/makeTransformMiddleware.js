"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeTransformMiddleware = void 0;
const services_1 = require("../../application/services");
const middlewares_1 = require("../http/middlewares");
function makeTransformMiddleware() {
    const service = new services_1.TransformService();
    return new middlewares_1.TransformMiddleware(service);
}
exports.makeTransformMiddleware = makeTransformMiddleware;
