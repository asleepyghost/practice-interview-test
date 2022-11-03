"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Purchased {
    constructor() {
        this.purchased = [];
    }
    all() {
        return this.purchased;
    }
    buy(newProduct) {
        this.purchased = [...this.purchased, newProduct];
    }
}
exports.default = new Purchased();
//# sourceMappingURL=purchased.db.js.map