"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandController = void 0;
class BrandController {
    service;
    constructor(service) {
        this.service = service;
    }
    async findAll(_req, res) {
        try {
            const brands = await this.service.findAll();
            res.status(200).json(brands);
        }
        catch (error) {
            res
                .status(500)
                .json({ error: error.message || 'Internal server error' });
        }
    }
}
exports.BrandController = BrandController;
