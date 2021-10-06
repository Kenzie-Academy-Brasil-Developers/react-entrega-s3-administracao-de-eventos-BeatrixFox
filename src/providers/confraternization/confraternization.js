import { createContext, useState } from "react";

export const CartConfraternizationContext = createContext([]);

export const CartConfraternizationProvider = ({ children }) => {
  const [cartConfraternization, setCartConfraternization] = useState([]);

  const addToCartConfraternization = (item) => {
    setCartConfraternization([...cartConfraternization, item]);
  };

  const removeToCartConfraternization = (item) => {
    const newCart = cartConfraternization.filter(
      (itemOnCart) => itemOnCart.name !== item.name
    );
    setCartConfraternization(newCart);
  };

  return (
    <CartConfraternizationContext.Provider
      value={{
        cartConfraternization,
        addToCartConfraternization,
        removeToCartConfraternization,
      }}
    >
      {children}
    </CartConfraternizationContext.Provider>
  );
};
