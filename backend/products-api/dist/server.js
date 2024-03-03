"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
const PORT = process.env.API_PORT;
app.get('/', (_req, res) => {
    res.status(200).send('Products API: Hello World!');
});
app.listen(PORT, () => console.log(`Running on port ${PORT}`));
