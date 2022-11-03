import { useState, useEffect } from "react";
import { getProducts, buyProduct, getAllPurchased } from "./api/product";
import Products from "./components/Products";

import styles from "./App.css";
import Basket from "./components/Basket";
import Purchased from "./components/Purchased";

function App() {
  const [basketProducts, setBasketProducts] = useState([]);
  const [products, setProducts] = useState([]);
  const [purchased, setPurchased] = useState([]);

  const fetchPurchased = async () => {
    const purchasedProducts = await getAllPurchased();

    console.log(purchasedProducts);

    setPurchased(purchasedProducts);
  };

  useEffect(() => {
    getProducts().then(setProducts);
    getAllPurchased().then(setPurchased);
  }, []);

  const addToBasket = (product) => {
    const newBasket = [...basketProducts, product];

    setBasketProducts(newBasket);
  };

  const buyProducts = async () => {
    // This is not optimal. It should be a post body with a list of products to be bought. I messed up here.
    for (const productToPurchase of basketProducts) {
      await buyProduct(productToPurchase.id);
    }

    await fetchPurchased();
  };

  return (
    <div>
      <div>
        <Purchased purchasedProducts={purchased} />
      </div>
      <div>
        <Basket productsInBasket={basketProducts} buyProducts={buyProducts} />
      </div>
      <div className="products">
        <Products products={products} addToBasket={addToBasket} />
      </div>
    </div>
  );
}

export default App;
