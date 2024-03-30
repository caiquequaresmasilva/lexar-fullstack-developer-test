"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeColorController = void 0;
const services_1 = require("../../application/services");
const controllers_1 = require("../http/controllers");
const repositories_1 = require("../repositories");
function makeColorController() {
    const service = new services_1.ColorService(new repositories_1.PrismaColorRepository());
    return new controllers_1.ColorController(service);
}
exports.makeColorController = makeColorController;
