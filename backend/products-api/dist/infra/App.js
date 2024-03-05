"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./http/routes");
class App {
    app;
    constructor() {
        this.app = (0, express_1.default)();
        this._config();
        this.setRoutes();
    }
    _config() {
        const accessControl = (_req, res, next) => {
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT');
            res.header('Access-Control-Allow-Headers', '*');
            next();
        };
        this.app.use(accessControl);
        this.app.use((0, cors_1.default)());
        this.app.use(express_1.default.json());
    }
    setRoutes() {
        this.app.use('/', routes_1.rootRoutes);
        this.app.use('/product', routes_1.productRoutes);
        this.app.use('/color', routes_1.colorRoutes);
        this.app.use('/brand', routes_1.brandRoutes);
    }
    start(PORT) {
        this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
    }
}
exports.default = App;
