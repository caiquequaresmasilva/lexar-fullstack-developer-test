"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeBrandController = void 0;
const services_1 = require("../../application/services");
const controllers_1 = require("../http/controllers");
const repositories_1 = require("../repositories");
function makeBrandController() {
    const service = new services_1.BrandService(new repositories_1.PrismaBrandRepository());
    return new controllers_1.BrandController(service);
}
exports.makeBrandController = makeBrandController;
