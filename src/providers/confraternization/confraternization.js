import { createContext, useState, useEffect, useContext } from "react";

export const CartConfraternizationContext = createContext([]);

export const CartConfraternizationProvider = ({ children }) => {
  const [cartConfraternization, setCartConfraternization] = useState(
    localStorage.getItem("{cartConfraternization}") || []
  );

  useEffect(() => {
    localStorage.setItem(
      "cartConfraternization",
      JSON.stringify(cartConfraternization)
    );
  }, [cartConfraternization]);

  const addToCartConfraternization = (item) => {
    cartConfraternization.some((product) => item.id === product.id)
      ? console.log("item já consta na lista")
      : setCartConfraternization([...cartConfraternization, item]);
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

export const useCartConfraternization = () =>
  useContext(CartConfraternizationContext);
