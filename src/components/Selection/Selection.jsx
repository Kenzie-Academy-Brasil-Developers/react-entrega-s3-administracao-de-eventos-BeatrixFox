import { useContext } from "react";
import { Container } from "./style";
import { CartWeddingContext } from "../../providers/wedding/wedding";
import { CartGraduationContext } from "../../providers/graduation/graduation";
import { CartConfraternizationContext } from "../../providers/confraternization/confraternization";

export const Selection = ({ drink }) => {
  const { addToCartConfraternization } = useContext(
    CartConfraternizationContext
  );
  const { addToCartWedding } = useContext(CartWeddingContext);
  const { addToCartGraduation } = useContext(CartGraduationContext);

  const handlerClickGraduation = (drink) => {
    addToCartGraduation(drink);
  };

  const handlerClickConfraternization = (drink) => {
    addToCartConfraternization(drink);
  };

  const handlerClickWedding = () => {
    addToCartWedding(drink);
  };

  return (
    <Container>
      <button onClick={() => handlerClickGraduation(drink)}>Formatura</button>
      <button onClick={() => handlerClickConfraternization(drink)}>
        Confraternização
      </button>
      <button onClick={() => handlerClickWedding(drink)}>Casamento</button>
    </Container>
  );
};

export default Selection;
