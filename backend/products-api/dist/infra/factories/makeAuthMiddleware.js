"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAuthMiddleware = void 0;
const adapters_1 = require("../adapters");
const middlewares_1 = require("../http/middlewares");
function makeAuthMiddleware() {
    const tokenManager = new adapters_1.JwtTokenAdapter();
    return new middlewares_1.AuthMiddleware(tokenManager);
}
exports.makeAuthMiddleware = makeAuthMiddleware;
