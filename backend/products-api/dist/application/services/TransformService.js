"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformService = void 0;
class TransformService {
    _transformType3(rawProduct) {
        const products = [];
        for (const prod of rawProduct) {
            if (prod.data) {
                prod.data.forEach(({ price, color }) => products.push({
                    name: prod.name,
                    brand: prod.brand,
                    model: prod.model,
                    price,
                    color,
                }));
            }
            else {
                products.push({
                    name: prod.name,
                    brand: prod.brand,
                    model: prod.model,
                });
            }
        }
        return products;
    }
    _transformType2({ name, details, price, }) {
        return [
            {
                name,
                brand: details?.brand,
                model: details?.model,
                color: details?.color,
                price,
            },
        ];
    }
    async transform(rawProduct) {
        if (Array.isArray(rawProduct)) {
            return this._transformType3(rawProduct);
        }
        if (rawProduct.details) {
            return this._transformType2(rawProduct);
        }
        return [rawProduct];
    }
}
exports.TransformService = TransformService;
