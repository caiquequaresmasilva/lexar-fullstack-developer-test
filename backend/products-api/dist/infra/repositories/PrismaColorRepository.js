"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../database/prisma/prismaClient");
class PrismaColorRepository {
    prisma;
    constructor(prisma = prismaClient_1.prismaClient) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.phoneColor.findMany();
    }
}
exports.default = PrismaColorRepository;
