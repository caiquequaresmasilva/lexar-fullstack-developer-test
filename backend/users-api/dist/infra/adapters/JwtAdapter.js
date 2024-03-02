"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAdapter = void 0;
const adapters_1 = require("../../application/adapters");
const jsonwebtoken_1 = require("jsonwebtoken");
class JwtAdapter extends adapters_1.ITokenAdapter {
    generate(payload) {
        return (0, jsonwebtoken_1.sign)(payload, process.env.TOKEN_SECRET, {
            algorithm: 'HS256',
            expiresIn: '1d',
        });
    }
}
exports.JwtAdapter = JwtAdapter;
