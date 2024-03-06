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
const DBColor_1 = __importDefault(require("../database/sequelize/models/DBColor"));
const DBBrand_1 = __importDefault(require("../database/sequelize/models/DBBrand"));
class SequelizeProductRepository extends repositories_1.IProductRepository {
    model;
    colorModel;
    brandModel;
    constructor(model = DBProduct_1.default, colorModel = DBColor_1.default, brandModel = DBBrand_1.default) {
        super();
        this.model = model;
        this.colorModel = colorModel;
        this.brandModel = brandModel;
    }
    SEQUELIZE_PARAMS = {
        include: [
            { model: DBColor_1.default, as: 'color', attributes: { exclude: ['id'] } },
            { model: DBBrand_1.default, as: 'brand', attributes: { exclude: ['id'] } },
        ],
        attributes: { exclude: ['colorId', 'brandId'] },
    };
    async _mapToDB({ id, name, brand, price, color, model }, colorsMap, brandsMap) {
        return {
            id,
            name,
            brandId: brandsMap[brand],
            model,
            price,
            colorId: colorsMap[color],
        };
    }
    async _mapToDomain({ id, name, brand, color, price, model, }) {
        return new domain_1.Product({ name, brand: brand.name, model, color: color.name, price }, id);
    }
    _mapToProps({ id, name, brand, color, model, price }) {
        return {
            id,
            name,
            brand: brand.name,
            model,
            price,
            color: color.name,
        };
    }
    _setParams({ brand, color, minPrice, maxPrice, name }) {
        let params = {};
        const priceRange = [];
        if (brand) {
            params = { ...params, '$brand.name$': brand };
        }
        if (color) {
            params = { ...params, '$color.name$': color };
        }
        if (name) {
            params = {
                ...params,
                name: {
                    [sequelize_1.Op.iRegexp]: name,
                },
            };
        }
        if (minPrice) {
            priceRange.push({ [sequelize_1.Op.gte]: minPrice });
        }
        if (maxPrice) {
            priceRange.push({ [sequelize_1.Op.lte]: maxPrice });
        }
        params = { ...params, price: { [sequelize_1.Op.and]: priceRange } };
        return params;
    }
    async _makeMap(model) {
        const data = await model.findAll();
        return data.reduce((acc, curr) => {
            return { ...acc, [curr.name]: curr.id };
        }, {});
    }
    async create(data) {
        const colorsMap = await this._makeMap(this.colorModel);
        const brandsMap = await this._makeMap(this.brandModel);
        const toDB = await Promise.all(data.map(prod => this._mapToDB(prod, colorsMap, brandsMap)));
        await this.model.bulkCreate(toDB);
    }
    async update(data) {
        const colorsMap = await this._makeMap(this.colorModel);
        const brandsMap = await this._makeMap(this.brandModel);
        const { id, name, colorId, brandId, price, model } = await this._mapToDB(data, colorsMap, brandsMap);
        await this.model.update({
            name,
            brandId,
            model,
            colorId,
            price,
        }, { where: { id } });
    }
    async delete(id) {
        await this.model.destroy({ where: { id } });
    }
    async findById(id) {
        const product = await this.model.findByPk(id, this.SEQUELIZE_PARAMS);
        return product ? this._mapToDomain(product) : null;
    }
    async filter(params) {
        const filterParams = this._setParams(params);
        const products = await this.model.findAll({
            where: filterParams,
            ...this.SEQUELIZE_PARAMS,
        });
        return products.map(this._mapToProps);
    }
    async findAll() {
        const products = await this.model.findAll(this.SEQUELIZE_PARAMS);
        return products.map(this._mapToProps);
    }
    async exists({ name, brand, model, price, color, }) {
        const product = await this.model.findOne({
            where: {
                name,
                '$brand.name$': brand,
                model,
                '$color.name$': color,
                price,
            },
            ...this.SEQUELIZE_PARAMS,
        });
        return Boolean(product);
    }
}
exports.SequelizeProductRepository = SequelizeProductRepository;
