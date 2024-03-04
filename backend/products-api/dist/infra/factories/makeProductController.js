"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeProductController = void 0;
const services_1 = require("../../application/services");
const controllers_1 = require("../http/controllers");
const repositories_1 = require("../repositories");
function makeProductController() {
    const service = new services_1.ProductService(new repositories_1.SequelizeProductRepository());
    return new controllers_1.ProductController(service);
}
exports.makeProductController = makeProductController;
