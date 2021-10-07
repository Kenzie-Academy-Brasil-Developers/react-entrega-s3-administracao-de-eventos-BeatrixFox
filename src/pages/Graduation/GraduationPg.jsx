import { useHistory } from "react-router";
import ListBeers from "../../components/ListBeers/ListBeers";
import { Container, Content } from "./style";
import { useCartGraduation } from "./../../providers/graduation/graduation";

export const Graduation = () => {
  const { cartGraduation } = useCartGraduation();
  const history = useHistory();

  const handlerClickHome = () => {
    history.push("/");
  };

  const handlerClickDrinks = () => {
    history.push("/SelectionBeersPg");
  };

  return (
    <Container>
      <Content>
        <h1>Formatura</h1>
        <section>
          <button onClick={handlerClickHome}>Ir para Home</button>
          <button onClick={handlerClickDrinks}>Ir para Catalogo</button>
        </section>
      </Content>
      <div>
        <ListBeers
          listDrinks={cartGraduation}
          isEvent={true}
          name={"graduation"}
        />
      </div>
    </Container>
  );
};

export default Graduation;
