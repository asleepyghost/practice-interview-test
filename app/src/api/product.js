import config from "../config";

export async function getProducts() {
  const response = await fetch(`${config.API_URL}/products`);
  const products = await response.json();

  return products;
}

export async function buyProduct(productId) {
  await fetch(`${config.API_URL}/buy?id=${productId}`, { method: "POST" });
}

export async function getAllPurchased() {
  const response = await fetch(`${config.API_URL}/purchased`);
  const products = await response.json();

  return products;
}
