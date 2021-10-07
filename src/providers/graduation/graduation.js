import { createContext, useState, useEffect, useContext } from "react";
import { toast } from "react-toastify";

export const CartGraduationContext = createContext([]);

export const CartGraduationProvider = ({ children }) => {
  const [cartGraduation, setCartGraduation] = useState(
    localStorage.getItem("{cartGraduation}") || []
  );

  useEffect(() => {
    localStorage.setItem("cartGraduation", JSON.stringify(cartGraduation));
  }, [cartGraduation]);

  const addToCartGraduation = (item) => {
    cartGraduation.some((product) => item.id === product.id)
      ? toast.error("item já consta na lista")
      : setCartGraduation([...cartGraduation, item]);
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

export const useCartGraduation = () => useContext(CartGraduationContext);
