import { useHistory } from "react-router";
import ListBeers from "../../components/ListBeers/ListBeers";
import { Container, Section } from "../Wedding/style";
import { useCartConfraternization } from "./../../providers/confraternization/confraternization";

export const Confraternization = () => {
  const { cartConfraternization } = useCartConfraternization();
  const history = useHistory();

  const handlerClickHome = () => {
    history.push("/");
  };

  const handlerClickDrinks = () => {
    history.push("/SelectionBeers");
  };

  return (
    <Container>
      <Section>
        <h1>Confraternização</h1>
        <section>
          <button onClick={handlerClickHome}>Ir para Home</button>
          <button onCLick={handlerClickDrinks}>Ir para Catalogo</button>
        </section>
      </Section>

      <ListBeers
        listDrinks={cartConfraternization}
        isEvent={true}
        name={"confraternization"}
      />
    </Container>
  );
};

export default Confraternization;
