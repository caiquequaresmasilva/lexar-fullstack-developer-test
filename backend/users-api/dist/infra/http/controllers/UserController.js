"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const errors_1 = require("../../../application/errors");
class UserController {
    service;
    constructor(service) {
        this.service = service;
    }
    async create(req, res) {
        const { name, email, password } = req.body;
        try {
            const token = await this.service.create({ name, email, password });
            res.status(201).json(token);
        }
        catch (error) {
            if (error instanceof errors_1.CustomError) {
                res.status(error.status).json({ error: error.message });
            }
            else {
                res
                    .status(500)
                    .json({ error: error.message || 'Internal server error' });
            }
        }
    }
    async signIn(req, res) {
        const { email, password } = req.body;
        try {
            const token = await this.service.signIn({ email, password });
            res.status(200).json(token);
        }
        catch (error) {
            if (error instanceof errors_1.CustomError) {
                res.status(error.status).json({ error: error.message });
            }
            else {
                res
                    .status(500)
                    .json({ error: error.message || 'Internal server error' });
            }
        }
    }
}
exports.UserController = UserController;
