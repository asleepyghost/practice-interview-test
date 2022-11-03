export default function Purchased(props) {
  const { purchasedProducts } = props;

  return (
    <div>
      <h2>You have purchased the following products: </h2>
      {purchasedProducts.map((product) => (
        <p>{product.name}</p>
      ))}
      <hr />
    </div>
  );
}
