"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const factories_1 = require("../../factories");
const middlewares_1 = require("../middlewares");
const userRoutes = (0, express_1.Router)();
const userController = (0, factories_1.makeUserController)();
userRoutes.post('/', (req, res, next) => (0, middlewares_1.validationHandler)(req, res, next), (req, res) => userController.create(req, res));
userRoutes.post('/login', (req, res) => userController.signIn(req, res));
exports.default = userRoutes;
