"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorController = void 0;
class ColorController {
    service;
    constructor(service) {
        this.service = service;
    }
    async findAll(_req, res) {
        try {
            const colors = await this.service.findAll();
            res.status(200).json(colors);
        }
        catch (error) {
            res
                .status(500)
                .json({ error: error.message || 'Internal server error' });
        }
    }
}
exports.ColorController = ColorController;
