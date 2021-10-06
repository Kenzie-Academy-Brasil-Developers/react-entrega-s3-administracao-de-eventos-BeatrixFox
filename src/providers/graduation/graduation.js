import { createContext, useState } from "react";

export const CartGraduationContext = createContext([]);

export const CartGraduationProvider = ({ children }) => {
  const [cartGraduation, setCartGraduation] = useState([]);

  const addToCartGraduation = (item) => {
    setCartGraduation([...cartGraduation, item]);
  };

  const removeToCartGraduation = (item) => {
    const newCart = cartGraduation.filter(
      (itemOnCart) => itemOnCart.name !== item.name
    );
    setCartGraduation(newCart);
  };

  return (
    <CartGraduationContext.Provider
      value={{ cartGraduation, addToCartGraduation, removeToCartGraduation }}
    >
      {children}
    </CartGraduationContext.Provider>
  );
};
