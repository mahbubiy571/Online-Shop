import ProductList from "../components/ProductList";
import { useFetch } from "../hooks/useFetch";

function Home() {
  const {
    data: products,
    isPending,
    error,
  } = useFetch("https://dummyjson.com/products?skip=93&limit=20");

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
        <div className="flex items-center justify-center min-h-screen bg-red-50">
          <div className="bg-white border border-red-400 text-red-700 px-6 py-4 rounded shadow-md max-w-xl text-center">
            <h2 className="text-2xl font-bold mb-2">
              ❗ Ma'lumotni olishda xatolik
            </h2>
            <p className="text-lg">{error}</p>
          </div>
        </div>
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
