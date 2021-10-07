import { useHistory } from "react-router";
import ListBeers from "../../components/ListBeers/ListBeers";
import { Container, Section } from "./style";

import { useCartWedding } from "./../../providers/wedding/wedding";

export const Wedding = () => {
  const { cartWedding } = useCartWedding();
  const history = useHistory();

  const handlerClickHome = () => {
    history.push("/");
  };

  const handlerClickDrinks = () => {
    history.push("/SelectionBeersPg");
  };

  return (
    <Container>
      <Section>
        <h1>Casamento</h1>
        <section>
          <button onClick={handlerClickHome}>Ir para Home</button>
          <button onClick={handlerClickDrinks}>Ir para Catalogo</button>
        </section>
      </Section>
      <ListBeers listDrinks={cartWedding} isEvent={true} name={"wedding"} />
    </Container>
  );
};

export default Wedding;
