import { createContext, useState, useEffect, useContext } from "react";

export const CartWeddingContext = createContext([]);

export const CartWeddingProvider = ({ children }) => {
  const [cartWedding, setCartWedding] = useState(
    localStorage.getItem("{cartWedding}") || []
  );

  useEffect(() => {
    localStorage.setItem("cartWedding", JSON.stringify(cartWedding));
  }, [cartWedding]);

  const addToCartWedding = (item) => {
    cartWedding.some((product) => item.id === product.id)
      ? console.log("item já consta na lista")
      : setCartWedding([...cartWedding, item]);
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

export const useCartWedding = () => useContext(CartWeddingContext);
