import { useGlobalContext } from "../hooks/useGlobalContext";
import CartItem from "./CartItem";
import { formatPrice } from "../utils";
import { ShoppingCart } from "lucide-react";

function Cart() {
  const { products, totalPrice, dispatch } = useGlobalContext();
  if (products.length == 0) {
    return (
      <div className="text-center mt-20 flex flex-col items-center gap-4">
        <ShoppingCart size={64} className="text-gray-400" />
        <h2 className="text-2xl text-gray-600 font-semibold">
          Savatda mahsulot yo‘q
        </h2>
        <p className="text-gray-500">Iltimos, mahsulot qo‘shing</p>
      </div>
    );
  }
  return (
    <div>
      <div className=" items-center justify-between flex m-10">
        <h2 className="text-3xl font-semibold">Cart List:</h2>
        <div className="flex gap-4 text-2xl font-semibold items-center">
          <h3 className="text-amber-800">
            Total Price:{" "}
            <span className="text-amber-500">{formatPrice(totalPrice)}</span>
          </h3>
          <button
            onClick={() => {
              dispatch({ type: "CLEAR" });
            }}
            className="btn btn-secondary rounded-lg text-2xl"
          >
            Clear
          </button>
        </div>
      </div>
      {products.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Cart;
