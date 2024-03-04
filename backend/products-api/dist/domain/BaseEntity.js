"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
const crypto_1 = require("crypto");
class BaseEntity {
    _id;
    props;
    constructor(props, id) {
        this._id = id ?? (0, crypto_1.randomUUID)();
        this.props = { ...props };
    }
    get id() {
        return this._id;
    }
}
exports.BaseEntity = BaseEntity;
