"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
const errors_1 = require("../../../application/errors");
class ProductController {
    service;
    constructor(service) {
        this.service = service;
    }
    async create(req, res) {
        const productRequest = req.body;
        try {
            await this.service.create(productRequest);
            res.status(201);
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
    async update(req, res) {
        const productRequest = req.body;
        const { id } = req.params;
        try {
            await this.service.update(id, productRequest);
            res.status(200);
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
    async delete(req, res) {
        const { id } = req.params;
        try {
            await this.service.delete(id);
            res.status(200);
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
    async search(req, res) {
        const { name } = req.query;
        try {
            const products = await this.service.search(name);
            res.status(200).json(products);
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
    async filter(req, res) {
        const { brand, color, price } = req.query;
        try {
            const products = await this.service.filter({
                brand,
                color,
                price,
            });
            res.status(200).json(products);
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
    async findAll(_req, res) {
        try {
            const products = await this.service.findAll();
            res.status(200).json(products);
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
    async findById(req, res) {
        const { id } = req.params;
        try {
            const product = await this.service.findById(id);
            res.status(200).json(product);
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
exports.ProductController = ProductController;
