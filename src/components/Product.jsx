import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
import { handleCartSubmit } from "../utils/handleCartSubmit";
import { formatPrice } from "../utils";
import { FaRegHeart, FaHeart } from "react-icons/fa6";
import { useEffect, useState } from "react";

function Product({ prod }) {
  const { dispatch, products, likedProducts } = useGlobalContext();
  const [alreadyLiked, setAlreadyLiked] = useState(false);

  const addLiked = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAlreadyLiked(true);
    dispatch({ type: "ADD_LIKED", payload: prod });
  };

  const removeLiked = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setAlreadyLiked(false);
    dispatch({ type: "REMOVE_LIKED", payload: prod.id });
  };

  useEffect(() => {
    const item = likedProducts.find((p) => p.id === prod.id);
    setAlreadyLiked(!!item);
  }, [likedProducts, prod.id]);

  return (
    <Link to={`/singleProduct/${prod.id}`}>
      <div className="shadow-lg grid w-60">
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
            <span className="line-through">
              {formatPrice((Number(prod.price) || 0) + 1)}
            </span>
            <span className="text-green-600 font-400">
              {formatPrice(Number(prod.price) || 0)}
            </span>
          </div>
          <h2 className="flex gap-2">
            ⭐{prod.rating} ({(Number(prod.stock) || 0) + 20} sold)
            {alreadyLiked ? (
              <button onClick={removeLiked} className="cursor-pointer text-xl">
                <FaHeart />
              </button>
            ) : (
              <button onClick={addLiked} className="cursor-pointer text-xl">
                <FaRegHeart />
              </button>
            )}
          </h2>
          <button
            onClick={(e) => handleCartSubmit(e, prod, products, dispatch)}
            className="btn btn-primary ml-auto mr-auto w-full h-8 rounded-lg transition-normal hover:bg-blue-700 hover:border-b-blue-700"
          >
            Buy Now
          </button>
        </ul>
      </div>
    </Link>
  );
}

export default Product;
