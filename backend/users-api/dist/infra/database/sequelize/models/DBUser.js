"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const _1 = __importDefault(require("."));
class DBUser extends sequelize_1.Model {
}
DBUser.init({
    id: {
        primaryKey: true,
        allowNull: false,
        type: sequelize_1.STRING,
    },
    name: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    email: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
    password: {
        allowNull: false,
        type: sequelize_1.STRING,
    },
}, {
    sequelize: _1.default,
    modelName: 'users',
    timestamps: false,
});
exports.default = DBUser;
