import axios from "axios";
import { useEffect, useState } from "react";
import ProductList from "../components/ProductList";

function Home() {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios("https://dummyjson.com/products?limit=20&skip=90")
      .then(({ data }) => setProducts(data.products))
      .catch((error) => console.log(error.message));
  }, []);

  return <section>{products && <ProductList products={products} />}</section>;
}

export default Home;
