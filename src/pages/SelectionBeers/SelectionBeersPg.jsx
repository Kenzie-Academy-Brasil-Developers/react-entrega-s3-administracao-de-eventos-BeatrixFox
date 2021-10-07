import { useContext } from "react";
import { useHistory } from "react-router";
import { Container, Section } from "./style";
import ListBeers from "../../components/ListBeers/ListBeers";
import { CartCatalogoContext } from "../../providers/catalogo/catalogo";
import { useCartConfraternization } from "../../providers/confraternization/confraternization";
import { useCartGraduation } from "../../providers/graduation/graduation";
import { useCartWedding } from "../../providers/wedding/wedding";

export const SelectionBeers = () => {
  const { catalogo } = useContext(CartCatalogoContext);

  const { cartConfraternization } = useCartConfraternization();
  const { cartGraduation } = useCartGraduation();
  const { cartWedding } = useCartWedding();

  const history = useHistory();

  const handlerClick = () => {
    history.push("/");
  };

  return (
    <Container>
      <Section>
        <h1>Catalogo de bebidas</h1>
        <p>Quantidade de bebidas adicionada em cada evento</p>
        <ul>
          <li>{cartWedding.length} para Casamento</li>
          <li>{cartGraduation.length} para Formatura</li>
          <li>{cartConfraternization.length} para Confraternização</li>
        </ul>
        <button onClick={handlerClick}>Ir para Home</button>
      </Section>
      <div>
        <ListBeers listDrinks={catalogo} isEvent={false} />
      </div>
    </Container>
  );
};

export default SelectionBeers;
