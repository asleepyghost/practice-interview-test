import productDb from "../data/product.db";
import { Product } from "../types";

export function getProducts(): Product[] {
  return productDb.getAll();
}
