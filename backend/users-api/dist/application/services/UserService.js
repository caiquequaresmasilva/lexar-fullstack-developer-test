"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const domain_1 = require("../../domain");
const errors_1 = require("../errors");
class UserService {
    repo;
    token;
    constructor(repo, token) {
        this.repo = repo;
        this.token = token;
    }
    _makeResponse(name, email) {
        return {
            token: this.token.generate({ name, email }),
            name,
        };
    }
    async create({ name, email, password }) {
        let user = await this.repo.findByEmail(email);
        if (user) {
            throw new errors_1.UserAlreadyExistsError();
        }
        const toCreate = new domain_1.User({
            name,
            email,
            password,
        });
        await this.repo.create(toCreate);
        return this._makeResponse(name, email);
    }
    async signIn({ email, password }) {
        const user = await this.repo.findByEmail(email);
        if (!user || !user.comparePassword(password)) {
            throw new errors_1.PasswordEmailError();
        }
        return this._makeResponse(user.name, email);
    }
}
exports.UserService = UserService;
