import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { handleCartSubmit } from "../utils/handleCartSubmit";
import { formatPrice } from "../utils";

function Product({ prod }) {
  const { dispatch, products } = useGlobalContext();

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
          <li className="line-clamp-2">{prod.description}</li>
          <div className="flex gap-3 text-[18px]">
            <span className="line-through">{formatPrice(prod.price + 1)}</span>
            <span className="text-green-600 font-400">
              {formatPrice(prod.price)}
            </span>
          </div>
          <h2>
            ⭐{prod.rating} ({prod.stock + 20} sold)
          </h2>
          <button
            onClick={(e) => handleCartSubmit(e, prod, products, dispatch)}
            className="btn btn-primary  ml-auto mr-auto w-full h-8 rounded-lg transition-normal hover:bg-blue-700 hover:border-b-blue-700"
          >
            Buy Now
          </button>
        </ul>
      </div>
    </Link>
  );
}

export default Product;
