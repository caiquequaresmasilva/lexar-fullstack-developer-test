"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeUserRepository = void 0;
const domain_1 = require("../../domain");
const DBUser_1 = __importDefault(require("../database/sequelize/models/DBUser"));
class SequelizeUserRepository {
    model;
    constructor(model = DBUser_1.default) {
        this.model = model;
    }
    _mapToDomain(dbUser) {
        return new domain_1.User({
            name: dbUser.name,
            email: dbUser.email,
            password: dbUser.password,
        }, dbUser.id);
    }
    async create({ id, name, email, password }) {
        await this.model.create({
            id,
            name,
            email,
            password,
        });
    }
    async findByEmail(email) {
        const dbUser = await this.model.findOne({
            where: {
                email,
            },
        });
        return dbUser ? this._mapToDomain(dbUser) : null;
    }
}
exports.SequelizeUserRepository = SequelizeUserRepository;
