import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { getProducts } from "./products";
import { buyProduct, getPurchased } from "./purchased";
const app = express();
const port = 3003;

app.use(bodyParser.json());
app.use(cors());

app.get("/products", (req, res) => {
  const products = getProducts();

  return res.send(JSON.stringify(products)).status(200);
});

app.get("/purchased", (req, res) => {
  const purchased = getPurchased();

  return res.send(JSON.stringify(purchased)).status(200);
});

app.post("/buy", (req, res) => {
  const { id } = req.query;

  console.log(req.query);

  const correspondingProduct = getProducts().find(
    (product) => product.id.toString() === id
  );

  if (!correspondingProduct) {
    return res.send({ error: "Product not found." }).status(404);
  }

  buyProduct(correspondingProduct);

  return res.send({ message: "Product successfully bought." }).status(200);
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
