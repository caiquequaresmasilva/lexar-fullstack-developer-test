"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeBrandRepository = void 0;
const repositories_1 = require("../../application/repositories");
const DBBrand_1 = __importDefault(require("../database/sequelize/models/DBBrand"));
class SequelizeBrandRepository extends repositories_1.IBrandRepository {
    model;
    constructor(model = DBBrand_1.default) {
        super();
        this.model = model;
    }
    async findAll() {
        return this.model.findAll();
    }
}
exports.SequelizeBrandRepository = SequelizeBrandRepository;
