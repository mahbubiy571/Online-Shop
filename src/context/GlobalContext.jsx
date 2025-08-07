import { useReducer, createContext, useEffect } from "react";
import { toast } from "react-toastify";

export const GlobalContext = createContext();

const globalStateFromLocal = () => {
  return localStorage.getItem("globalState")
    ? JSON.parse(localStorage.getItem("globalState"))
    : {
        user: true,
        products: [],
        totalAmount: 0,
        totalPrice: 0,
      };
};

const changeState = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case "ADD_PRODUCT":
      toast.success("🛒 Mahsulot savatchaga qo‘shildi");
      return {
        ...state,
        products: [...state.products, { ...payload, amount: 1 }],
      };
    case "INCREASE_AMOUNT":
      toast.success("✅ Mahsulot miqdori oshirildi");
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    case "DECREASE_AMOUNT":
      toast.warning("⚠️ Mahsulot miqdori kamaytirildi");
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload
            ? { ...product, amount: product.amount - 1 }
            : product
        ),
      };
    case "CHANGE_AMOUNT_PRICE":
      return {
        ...state,
        totalAmount: payload.amount,
        totalPrice: payload.price,
      };
    case "DELETE_ITEM":
      if (!confirm("Rostan ham ushbu mahsulotni o'chirmoqchimisiz?")) {
        toast.warning("❌ Mahsulot o‘chirish bekor qilindi");
        return state;
      }

      toast.error("🗑️ Mahsulot o‘chirildi");

      return {
        ...state,
        products: state.products.filter((p) => p.id !== payload),
      };
    case "CLEAR":
      if (!confirm("Rostdan ham savatchani tozalamoqchimisiz?")) return state;
      toast.info("🧹 Savatcha tozalandi");
      return {
        ...state,
        products: [],
        totalAmount: 0,
        totalPrice: 0,
      };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, globalStateFromLocal());

  useEffect(() => {
    let price = 0;
    let amount = 0;

    state.products.forEach((product) => {
      price += product.amount * product.price;
      amount += product.amount;
    });

    dispatch({ type: "CHANGE_AMOUNT_PRICE", payload: { price, amount } });
  }, [state.products]);

  useEffect(() => {
    localStorage.setItem("globalState", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider
      value={{
        ...state,
        dispatch,
        totalAmount: state.totalAmount,
        totalPrice: state.totalPrice,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
