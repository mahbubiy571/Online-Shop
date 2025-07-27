import Product from "./Product";

function ProductList({ products }) {
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5 m-10 ">
      {products.map((prod) => {
        return <Product key={prod.id} prod={prod} />
      })}
    </div>
  );
}

export default ProductList;
