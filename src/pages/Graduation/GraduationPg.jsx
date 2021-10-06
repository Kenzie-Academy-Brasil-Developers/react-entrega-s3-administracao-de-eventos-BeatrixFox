import { useHistory } from "react-router";
import ListBeers from "../../components/ListBeers/ListBeers";
import { useCartGraduation } from "./../../providers/graduation/graduation";

export const Graduation = () => {
  const { cartGraduation } = useCartGraduation();
  const history = useHistory();

  const handlerClickHome = () => {
    history.push("/");
  };

  return (
    <>
      <h1>Graduação</h1>
      <ListBeers
        listDrinks={cartGraduation}
        isEvent={true}
        name={"graduation"}
      />
      <button onClick={handlerClickHome}>Ir para Home</button>
    </>
  );
};

export default Graduation;
