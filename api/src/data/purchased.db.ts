import { Product } from "../types";

class Purchased {
  purchased: Product[] = [];

  all(): Product[] {
    return this.purchased;
  }

  buy(newProduct: Product) {
    this.purchased = [...this.purchased, newProduct];
  }
}

export default new Purchased();
