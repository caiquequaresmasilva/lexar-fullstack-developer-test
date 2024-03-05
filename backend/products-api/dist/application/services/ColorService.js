"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorService = void 0;
class ColorService {
    repo;
    constructor(repo) {
        this.repo = repo;
    }
    async findAll() {
        return this.repo.findAll();
    }
}
exports.ColorService = ColorService;
