"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaProductRepository = exports.PrismaColorRepository = exports.PrismaBrandRepository = void 0;
var PrismaBrandRepository_1 = require("./PrismaBrandRepository");
Object.defineProperty(exports, "PrismaBrandRepository", { enumerable: true, get: function () { return __importDefault(PrismaBrandRepository_1).default; } });
var PrismaColorRepository_1 = require("./PrismaColorRepository");
Object.defineProperty(exports, "PrismaColorRepository", { enumerable: true, get: function () { return __importDefault(PrismaColorRepository_1).default; } });
var PrismaProductRepository_1 = require("./PrismaProductRepository");
Object.defineProperty(exports, "PrismaProductRepository", { enumerable: true, get: function () { return __importDefault(PrismaProductRepository_1).default; } });
