import { useHistory } from "react-router";
import ListBeers from "../../components/ListBeers/ListBeers";
import { useCartConfraternization } from "./../../providers/confraternization/confraternization";

export const Confraternization = () => {
  const { cartConfraternization } = useCartConfraternization();
  const history = useHistory();

  const handlerClickHome = () => {
    history.push("/");
  };
  return (
    <>
      <h1>Confraternização</h1>
      <ListBeers
        listDrinks={cartConfraternization}
        isEvent={true}
        name={"confraternization"}
      />
      <button onClick={handlerClickHome}>Ir para Home</button>
    </>
  );
};

export default Confraternization;
