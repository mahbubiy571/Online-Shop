import ProductList from "../components/ProductList";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/product");

  if (isPending) {
    return (
      <>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <div className="w-7.5 h-7.5 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
          <h1 className="text-xl mt-4 text-gray-600">⏳ Loading...</h1>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <>
        <h1 className="text-4xl">{error}</h1>
      </>
    );
  }

  return (
    <section>
      {products && <ProductList products={products.products} />}
    </section>
  );
}

export default Home;
