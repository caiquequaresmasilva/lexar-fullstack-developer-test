"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtTokenAdapter = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const ITokenAdapter_1 = require("./ITokenAdapter");
const errors_1 = require("../errors");
class JwtTokenAdapter extends ITokenAdapter_1.ITokenAdapter {
    validate(token) {
        if (!token) {
            throw new errors_1.UnauthorizedError();
        }
        try {
            (0, jsonwebtoken_1.verify)(token, process.env.TOKEN_SECRET);
            return true;
        }
        catch (error) {
            throw new errors_1.UnauthorizedError();
        }
    }
}
exports.JwtTokenAdapter = JwtTokenAdapter;
