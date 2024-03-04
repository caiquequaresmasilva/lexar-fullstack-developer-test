"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("../controllers");
const rootRoutes = (0, express_1.Router)();
rootRoutes.get('/', controllers_1.rootController);
exports.default = rootRoutes;
