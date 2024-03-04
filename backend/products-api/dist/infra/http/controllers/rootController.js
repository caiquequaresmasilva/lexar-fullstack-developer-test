"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootController = void 0;
async function rootController(_req, res) {
    res.status(200).send('Product API running!');
}
exports.rootController = rootController;
