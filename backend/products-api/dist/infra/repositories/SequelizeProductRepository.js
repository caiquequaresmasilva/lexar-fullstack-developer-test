"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeProductRepository = void 0;
const sequelize_1 = require("sequelize");
const repositories_1 = require("../../application/repositories");
const domain_1 = require("../../domain");
const DBProduct_1 = __importDefault(require("../database/sequelize/models/DBProduct"));
class SequelizeProductRepository extends repositories_1.IProductRepository {
    model;
    constructor(model = DBProduct_1.default) {
        super();
        this.model = model;
    }
    async _mapToDB({ id, name, brand, price, color, model }) {
        return {
            id,
            name,
            brand,
            model,
            price,
            color,
        };
    }
    async _mapToDomain({ id, name, brand, color, price, model, }) {
        return new domain_1.Product({ name, brand, model, color, price }, id);
    }
    _mapToProps({ id, name, brand, color, model, price }) {
        return {
            id,
            name,
            brand,
            model,
            price,
            color,
        };
    }
    _setParams({ brand, color, price }) {
        let params = {};
        if (brand) {
            params = { ...params, brand };
        }
        if (color) {
            params = { ...params, color };
        }
        if (price) {
            const priceParam = {
                [sequelize_1.Op.between]: price,
            };
            params = { ...params, price: priceParam };
        }
        return params;
    }
    async create(data) {
        const toDB = await Promise.all(data.map(this._mapToDB));
        await this.model.bulkCreate(toDB);
    }
    async update(data) {
        const { id, name, color, brand, price } = await this._mapToDB(data);
        await this.model.update({
            name,
            brand,
            color,
            price,
        }, { where: { id } });
    }
    async delete(id) {
        await this.model.destroy({ where: { id } });
    }
    async findById(id) {
        const product = await this.model.findByPk(id);
        return product ? this._mapToDomain(product) : null;
    }
    async searchByName(name) {
        const products = await this.model.findAll({
            where: {
                name: {
                    [sequelize_1.Op.iRegexp]: name,
                },
            },
        });
        return products.map(this._mapToProps);
    }
    async filter(params) {
        const filterParams = this._setParams(params);
        const products = await this.model.findAll({
            where: filterParams,
        });
        return products.map(this._mapToProps);
    }
    async findAll() {
        const products = await this.model.findAll();
        return products.map(this._mapToProps);
    }
    async exists({ name, brand, model, price, color, }) {
        const product = await this.model.findOne({
            where: {
                name,
                brand,
                model,
                color,
                price,
            },
        });
        return Boolean(product);
    }
}
exports.SequelizeProductRepository = SequelizeProductRepository;
