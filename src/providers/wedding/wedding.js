import { createContext, useState } from "react";

export const CartWeddingContext = createContext([]);

export const CartWeddingProvider = ({ children }) => {
  const [cartWedding, setCartWedding] = useState([]);

  const addToCartWedding = (item) => {
    setCartWedding([...cartWedding, item]);
  };

  const removeToCartWedding = (item) => {
    const newCart = cartWedding.filter(
      (itemOnCart) => itemOnCart.name !== item.name
    );
    setCartWedding(newCart);
  };

  return (
    <CartWeddingContext.Provider
      value={{ cartWedding, addToCartWedding, removeToCartWedding }}
    >
      {children}
    </CartWeddingContext.Provider>
  );
};
