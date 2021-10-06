import { useHistory } from "react-router";
import ListBeers from "../../components/ListBeers/ListBeers";

import { useCartWedding } from "./../../providers/wedding/wedding";

export const Wedding = () => {
  const { cartWedding } = useCartWedding();
  const history = useHistory();

  const handlerClickHome = () => {
    history.push("/");
  };

  return (
    <>
      <h1>Casamento</h1>
      <ListBeers listDrinks={cartWedding} isEvent={true} name={"wedding"} />
      <button onClick={handlerClickHome}>Ir para Home</button>
    </>
  );
};

export default Wedding;
