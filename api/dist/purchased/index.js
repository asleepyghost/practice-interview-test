"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPurchased = exports.buyProduct = void 0;
const purchased_db_1 = __importDefault(require("../data/purchased.db"));
function buyProduct(product) {
    purchased_db_1.default.buy(product);
    return true;
}
exports.buyProduct = buyProduct;
function getPurchased() {
    return purchased_db_1.default.all();
}
exports.getPurchased = getPurchased;
//# sourceMappingURL=index.js.map