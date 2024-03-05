"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class DBColor extends sequelize_1.Model {
}
DBColor.init({
    id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: sequelize_1.INTEGER,
    },
    name: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
}, {
    sequelize: _1.default,
    modelName: 'color',
    timestamps: false,
});
exports.default = DBColor;
