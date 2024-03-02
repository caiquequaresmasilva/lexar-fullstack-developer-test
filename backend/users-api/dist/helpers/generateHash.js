"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateHash = void 0;
const node_crypto_1 = require("node:crypto");
function generateHash(string) {
    return (0, node_crypto_1.createHash)('md5').update(string).digest('hex');
}
exports.generateHash = generateHash;
