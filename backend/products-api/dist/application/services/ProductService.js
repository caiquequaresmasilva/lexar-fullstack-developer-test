"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const domain_1 = require("../../domain");
const errors_1 = require("../errors");
class ProductService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async create(data) {
        const exists = await Promise.all(data.map(prod => this.repo.exists(prod)));
        if (exists.some(flag => flag)) {
            throw new errors_1.ProductExistsError();
        }
        const products = data.map(prod => new domain_1.Product(prod));
        await this.repo.create(products);
    }
    async update(id, data) {
        const product = await this.repo.findById(id);
        if (!product) {
            throw new errors_1.ProductNotFoundError();
        }
        product.update(data[0]);
        await this.repo.update(product);
    }
    async delete(id) {
        const product = await this.repo.findById(id);
        if (!product) {
            throw new errors_1.ProductNotFoundError();
        }
        await this.repo.delete(id);
    }
    async search(name) {
        return this.repo.searchByName(name);
    }
    async filter(params) {
        return this.repo.filter(params);
    }
    async findAll() {
        return this.repo.findAll();
    }
    async findById(id) {
        const product = await this.repo.findById(id);
        if (!product) {
            throw new errors_1.ProductNotFoundError();
        }
        return {
            name: product.name,
            brand: product.brand,
            model: product.model,
            price: product.price,
            color: product.color,
        };
    }
}
exports.ProductService = ProductService;
