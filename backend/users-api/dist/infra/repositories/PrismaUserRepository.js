"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRepository = void 0;
const domain_1 = require("../../domain");
const prismaClient_1 = require("../database/prisma/prismaClient");
class PrismaUserRepository {
    prisma;
    constructor(prisma = prismaClient_1.prismaClient) {
        this.prisma = prisma;
    }
    async create({ id, name, email, password }) {
        await this.prisma.phoneUser.create({
            data: {
                id,
                name,
                email,
                password,
            },
        });
    }
    async findByEmail(email) {
        const user = await this.prisma.phoneUser.findUnique({
            where: {
                email,
            },
        });
        if (!user) {
            return null;
        }
        return new domain_1.User({
            name: user.name,
            email: user.email,
            password: user.password,
        }, user.id);
    }
}
exports.PrismaUserRepository = PrismaUserRepository;
