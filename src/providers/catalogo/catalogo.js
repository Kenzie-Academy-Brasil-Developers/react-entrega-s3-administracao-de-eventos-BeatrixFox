import axios from "axios";
import api from "./../../services/api";
import { createContext, useEffect, useState } from "react";

export const CartCatalogoContext = createContext([]);

export const CartCatalogoProvider = ({ children }) => {
  const [catalogo, setCatalogo] = useState([]);

  useEffect(() => {
    axios
      .get(api)
      .then((response) => setCatalogo(response))
      .catch((err) => console.log(err));
  });

  return (
    <CartCatalogoContext.Provider value={{ catalogo }}>
      {children}
    </CartCatalogoContext.Provider>
  );
};
