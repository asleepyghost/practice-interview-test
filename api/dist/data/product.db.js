"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products = [
    {
        id: 1,
        name: "Ps5",
        price: 500.0,
    },
    {
        id: 2,
        name: "Jacket",
        price: 20.0,
    },
    {
        id: 3,
        name: "Shoes",
        price: 50.0,
    },
    {
        id: 4,
        name: "Toy Dinosaur",
        price: 12.5,
    },
    {
        id: 5,
        name: "Plushie",
        price: 30.0,
    },
    {
        id: 6,
        name: "10ft Monstrous Pikachu",
        price: 1000.0,
    },
    {
        id: 7,
        name: "Super Soaker 3000",
        price: 22.5,
    },
];
class Products {
    getAll() {
        return products;
    }
}
exports.default = new Products();
//# sourceMappingURL=product.db.js.map