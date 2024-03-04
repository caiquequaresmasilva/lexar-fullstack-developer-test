"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
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
    brand: {
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
    color: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
}, {
    sequelize: _1.default,
    modelName: 'products',
    timestamps: false,
});
exports.default = DBProduct;
