"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const factories_1 = require("../../factories");
const colorRoutes = (0, express_1.Router)();
const controller = (0, factories_1.makeColorController)();
const auth = (0, factories_1.makeAuthMiddleware)();
colorRoutes.use((req, res, next) => auth.handle(req, res, next));
colorRoutes.get('/', (req, res) => controller.findAll(req, res));
exports.default = colorRoutes;
