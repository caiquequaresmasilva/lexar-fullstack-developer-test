"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const BaseEntity_1 = require("./BaseEntity");
class Product extends BaseEntity_1.BaseEntity {
    update(data) {
        this.props = { ...data };
    }
    get name() {
        return this.props.name;
    }
    get brand() {
        return this.props.brand;
    }
    get model() {
        return this.props.model;
    }
    get price() {
        return this.props.price;
    }
    get color() {
        return this.props.color;
    }
}
exports.Product = Product;
