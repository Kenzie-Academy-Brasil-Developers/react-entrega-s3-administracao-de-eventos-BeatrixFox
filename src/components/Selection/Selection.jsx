import { useContext } from "react";
import { Container } from "./style";
import { CartWeddingContext } from "../../providers/wedding/wedding";
import { CartGraduationContext } from "../../providers/graduation/graduation";
import { CartConfraternizationContext } from "../../providers/confraternization/confraternization";

export const Selection = ({ drink }) => {
  const {
    cartConfraternization,
    addToCartConfraternization,
    removeToCartConfraternization,
  } = useContext(CartConfraternizationContext);

  const { CartWedding, addToCartWedding, removeToCartWedding } =
    useContext(CartWeddingContext);
  const { CartGraduation, addToCartGraduation, removeToCartGraduation } =
    useContext(CartGraduationContext);

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
      <button onClick={() => handlerClickGraduation(drink)}></button>
      <button onClick={() => handlerClickConfraternization(drink)}></button>
      <button onClick={() => handlerClickWedding(drink)}></button>
    </Container>
  );
};

export default Selection;
