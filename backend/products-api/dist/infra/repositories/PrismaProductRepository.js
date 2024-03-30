"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const domain_1 = require("../../domain");
const prismaClient_1 = require("../database/prisma/prismaClient");
class PrismaProductRepository {
    prisma;
    _colorsMap;
    _brandsMap;
    _mapsFlag = false;
    constructor(prisma = prismaClient_1.prismaClient) {
        this.prisma = prisma;
    }
    async _setMaps() {
        if (!this._mapsFlag) {
            const colors = await this.prisma.phoneColor.findMany();
            const brands = await this.prisma.phoneBrand.findMany();
            this._colorsMap = colors.reduce((acc, curr) => {
                return { ...acc, [curr.name]: curr.id };
            }, {});
            this._brandsMap = brands.reduce((acc, curr) => {
                return { ...acc, [curr.name]: curr.id };
            }, {});
            this._mapsFlag = true;
        }
    }
    async _mapToDB({ id, name, brand, price, color, model }) {
        return {
            id,
            name,
            brandId: this._brandsMap[brand],
            model,
            price,
            colorId: this._colorsMap[color],
        };
    }
    _mapToProps({ id, name, brand, color, model, price }) {
        return {
            id,
            name,
            brand: brand.name,
            model,
            price,
            color: color.name,
        };
    }
    async create(data) {
        await this._setMaps();
        const toDB = await Promise.all(data.map(prod => this._mapToDB(prod)));
        await this.prisma.phoneProduct.createMany({
            data: toDB,
        });
    }
    async update(data) {
        await this._setMaps();
        const { id, name, colorId, brandId, price, model } = await this._mapToDB(data);
        await this.prisma.phoneProduct.update({
            where: {
                id,
            },
            data: {
                name,
                model,
                colorId,
                brandId,
                price,
            },
        });
    }
    async delete(id) {
        await this.prisma.phoneProduct.delete({
            where: {
                id,
            },
        });
    }
    async findById(id) {
        const product = await this.prisma.phoneProduct.findUnique({
            where: {
                id,
            },
            include: {
                brand: {
                    select: {
                        name: true,
                    },
                },
                color: {
                    select: {
                        name: true,
                    },
                },
            },
        });
        if (!product) {
            return null;
        }
        return new domain_1.Product({
            name: product.name,
            brand: product.brand.name,
            model: product.model,
            color: product.color.name,
            price: product.price,
        }, product.id);
    }
    async filter({ brand, color, maxPrice, minPrice, name, }) {
        const products = await this.prisma.phoneProduct.findMany({
            where: {
                color: {
                    is: {
                        name: color,
                    },
                },
                brand: {
                    is: {
                        name: brand,
                    },
                },
                price: {
                    lte: maxPrice,
                    gte: minPrice,
                },
                name: {
                    contains: name,
                    mode: 'insensitive',
                },
            },
            include: {
                brand: true,
                color: true,
            },
        });
        return products.map(this._mapToProps);
    }
    async findAll() {
        const products = await this.prisma.phoneProduct.findMany({
            include: {
                brand: true,
                color: true,
            },
        });
        return products.map(this._mapToProps);
    }
    async exists({ brand, color, model, name, price, }) {
        const product = await this.prisma.phoneProduct.findFirst({
            where: {
                brand: {
                    is: {
                        name: brand,
                    },
                },
                color: {
                    is: {
                        name: color,
                    },
                },
                name,
                model,
                price,
            },
        });
        return Boolean(product);
    }
}
exports.default = PrismaProductRepository;
