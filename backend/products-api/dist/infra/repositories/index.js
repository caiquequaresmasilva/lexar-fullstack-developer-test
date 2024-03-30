"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
__exportStar(require("./SequelizeBrandRepository"), exports);
__exportStar(require("./SequelizeColorRepository"), exports);
__exportStar(require("./SequelizeProductRepository"), exports);
