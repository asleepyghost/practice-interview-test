import { useMemo } from "react";
import { calculateBasketTotal } from "./logic/logic";

export default function Basket(props) {
    const { productsInBasket, buyProducts } = props;

    const basketTotal = useMemo(() => calculateBasketTotal(productsInBasket), [productsInBasket])

    return (
        <div className="basket">
            {productsInBasket.map(product => <p key={product.id}>{product.name}</p>)}
            <p>Total Price: {`£${basketTotal}`}</p>
            <button onClick={buyProducts}>Checkout</button>
        </div>
    )
}