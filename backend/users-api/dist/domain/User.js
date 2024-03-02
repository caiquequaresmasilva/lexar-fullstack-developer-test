"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const helpers_1 = require("../helpers");
const BaseEntity_1 = require("./BaseEntity");
class User extends BaseEntity_1.BaseEntity {
    constructor(props, id) {
        super(props, id);
        if (!id) {
            this.props.password = this._hashPassword(this.props.password);
        }
    }
    _hashPassword(password) {
        return (0, helpers_1.generateHash)(password);
    }
    comparePassword(password) {
        return this._hashPassword(password) === this.props.password;
    }
    get name() {
        return this.props.name;
    }
    get email() {
        return this.props.email;
    }
    get password() {
        return this.props.password;
    }
}
exports.User = User;
