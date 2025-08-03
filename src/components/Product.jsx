import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";

function Product({ prod }) {
  const { dispatch, products } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const item = products.find((product) => product.id == prod.id);

    if (item) {
      dispatch({ type: "INCREASE_AMOUNT", payload: prod.id });
    } else {
      dispatch({ type: "ADD_PRODUCT", payload: { ...prod, amount: 1 } });
    }
  };

  return (
    <Link to={`/singleProduct/${prod.id}`}>
      <div className="shadow-sm grid w-60">
        <figure>
          <img
            className="max-w-60 bg-cover ml-auto mr-auto"
            src={prod.thumbnail}
            alt={prod.title}
          />
        </figure>
        <ul className="card-body shadow hover:shadow-2xl">
          <li className="card-title line-clamp-1">{prod.title}</li>
          <li className="text-neutral-600 line-clamp-2">{prod.description}</li>
          <div className="flex gap-2 text-[18px]">
            <span className="line-through text-gray-500">
              ${prod.price + 1}
            </span>
            <span className="text-green-600 font-400">${prod.price}</span>
          </div>
          <h2 className="text-gray-500">
            ⭐{prod.rating} ({prod.stock + 20} sold)
          </h2>
          <button className="btn btn-primary  ml-auto mr-auto w-full h-8 rounded-lg transition-normal hover:bg-blue-700 hover:border-b-blue-700">
            Buy Now
          </button>
          <button className="btn btn-block" onClick={handleSubmit}>
            Add To Cart
          </button>
        </ul>
      </div>
    </Link>
  );
}

export default Product;
