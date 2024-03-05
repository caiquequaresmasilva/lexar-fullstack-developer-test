"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
const DBColor_1 = __importDefault(require("./DBColor"));
const DBBrand_1 = __importDefault(require("./DBBrand"));
class DBProduct extends sequelize_1.Model {
}
DBProduct.init({
    id: {
        primaryKey: true,
        allowNull: false,
        type: sequelize_1.STRING,
    },
    name: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    model: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    price: {
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
}, {
    sequelize: _1.default,
    modelName: 'product',
    timestamps: false,
});
// Associação dos produtos com as cores
DBColor_1.default.hasMany(DBProduct, {
    foreignKey: 'colorId',
    onUpdate: 'CASCADE',
    onDelete: 'NO ACTION',
});
DBProduct.belongsTo(DBColor_1.default, { foreignKey: 'colorId', as: 'color' });
// Associação dos produtos com as marcas
DBBrand_1.default.hasMany(DBProduct, {
    foreignKey: 'brandId',
    onUpdate: 'CASCADE',
    onDelete: 'NO ACTION',
});
DBProduct.belongsTo(DBBrand_1.default, { foreignKey: 'brandId', as: 'brand' });
exports.default = DBProduct;
