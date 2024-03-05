"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeColorRepository = void 0;
const repositories_1 = require("../../application/repositories");
const DBColor_1 = __importDefault(require("../database/sequelize/models/DBColor"));
class SequelizeColorRepository extends repositories_1.IColorRepository {
    model;
    constructor(model = DBColor_1.default) {
        super();
        this.model = model;
    }
    async findAll() {
        return this.model.findAll();
    }
}
exports.SequelizeColorRepository = SequelizeColorRepository;
