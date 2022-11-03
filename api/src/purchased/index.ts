import purchasedDb from "../data/purchased.db";
import { Product } from "../types";

export function buyProduct(product: Product): boolean {
  purchasedDb.buy(product);

  return true;
}

export function getPurchased(): Product[] {
  return purchasedDb.all();
}
