"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const middlewares_1 = require("../middlewares");
const factories_1 = require("../../factories");
const controller = (0, factories_1.makeProductController)();
const auth = (0, factories_1.makeAuthMiddleware)();
const transform = (0, factories_1.makeTransformMiddleware)();
const productRoutes = (0, express_1.Router)();
//Middleware de autenticação
productRoutes.use((req, res, next) => auth.handle(req, res, next));
productRoutes.get('/', (req, res) => controller.findAll(req, res));
productRoutes.get('/filter', (req, res) => controller.filter(req, res));
productRoutes.get('/:id', (req, res) => controller.findById(req, res));
productRoutes.delete('/:id', (req, res) => controller.delete(req, res));
//Middlewares de transformação e validação
productRoutes.use((req, res, next) => transform.handle(req, res, next));
productRoutes.use(middlewares_1.validationMiddleware);
productRoutes.post('/', (req, res) => controller.create(req, res));
productRoutes.put('/:id', (req, res) => controller.update(req, res));
exports.default = productRoutes;
