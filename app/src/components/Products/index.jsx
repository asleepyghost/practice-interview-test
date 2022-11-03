import "./styles.css"

export default function Products(props) {
    const { products, addToBasket } = props;

    return (
        <div>
            <h2>Products</h2>
            <div className="productsRow">
                {products.map(product => (
                    <div onClick={() => addToBasket(product)} key={product.id} className="productCard">
                        <h3>{product.name}</h3>
                        <p>{`£${product.price}`}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}