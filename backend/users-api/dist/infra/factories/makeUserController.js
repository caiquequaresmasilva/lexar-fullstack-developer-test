"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeUserController = void 0;
const services_1 = require("../../application/services");
const adapters_1 = require("../adapters");
const controllers_1 = require("../http/controllers");
const repositories_1 = require("../repositories");
function makeUserController() {
    const service = new services_1.UserService(new repositories_1.SequelizeUserRepository(), new adapters_1.JwtAdapter());
    return new controllers_1.UserController(service);
}
exports.makeUserController = makeUserController;
