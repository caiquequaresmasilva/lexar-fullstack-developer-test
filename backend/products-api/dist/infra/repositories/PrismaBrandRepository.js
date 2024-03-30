"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prismaClient_1 = require("../database/prisma/prismaClient");
class PrismaBrandRepository {
    prisma;
    constructor(prisma = prismaClient_1.prismaClient) {
        this.prisma = prisma;
    }
    async findAll() {
        return this.prisma.phoneBrand.findMany();
    }
}
exports.default = PrismaBrandRepository;
