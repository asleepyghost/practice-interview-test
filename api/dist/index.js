"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const products_1 = require("./products");
const purchased_1 = require("./purchased");
const app = (0, express_1.default)();
const port = 3003;
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
app.get("/products", (req, res) => {
    const products = (0, products_1.getProducts)();
    return res.send(JSON.stringify(products)).status(200);
});
app.get("/purchased", (req, res) => {
    const purchased = (0, purchased_1.getPurchased)();
    return res.send(JSON.stringify(purchased)).status(200);
});
app.post("/buy", (req, res) => {
    const { id } = req.query;
    console.log(req.query);
    const correspondingProduct = (0, products_1.getProducts)().find((product) => product.id.toString() === id);
    if (!correspondingProduct) {
        return res.send({ error: "Product not found." }).status(404);
    }
    (0, purchased_1.buyProduct)(correspondingProduct);
    return res.send({ message: "Product successfully bought." }).status(200);
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map