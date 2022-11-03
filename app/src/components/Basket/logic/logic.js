export function calculateBasketTotal(products) {
  return products.reduce((total, nextProduct) => total + nextProduct.price, 0);
}
