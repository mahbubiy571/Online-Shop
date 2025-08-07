import { useReducer, createContext, useEffect } from "react";

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
      return {
        ...state,
        products: [...state.products, { ...payload, amount: 1 }],
      };
    case "INCREASE_AMOUNT":
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === payload
            ? { ...product, amount: product.amount + 1 }
            : product
        ),
      };
    case "DECREASE_AMOUNT":
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
      return {
        ...state,
        products: state.products.filter((p) => {
          return p.id !== payload;
        }),
      };
    case "CLEAR":
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
