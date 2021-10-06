import { useContext } from "react";
import { CartCatalogoContext } from "../../providers/catalogo/catalogo";

export const Home = () => {
  const { catalogo } = useContext(CartCatalogoContext);

  console.log(catalogo);

  return (
    <>
      <h1>Home</h1>
    </>
  );
};

export default Home;
