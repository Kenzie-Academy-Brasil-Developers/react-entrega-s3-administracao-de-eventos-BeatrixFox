import { useHistory } from "react-router";
import ListBeers from "../../components/ListBeers/ListBeers";
import { Container, Content } from "./style";
import { useCartConfraternization } from "./../../providers/confraternization/confraternization";

export const Confraternization = () => {
  const { cartConfraternization } = useCartConfraternization();
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
        <h1>Confraternização</h1>
        <section>
          <button onClick={handlerClickHome}>Ir para Home</button>
          <button onClick={handlerClickDrinks}>Ir para Catalogo</button>
        </section>
      </Content>
      <div>
        <ListBeers
          listDrinks={cartConfraternization}
          isEvent={true}
          name={"confraternization"}
        />
      </div>
    </Container>
  );
};

export default Confraternization;
