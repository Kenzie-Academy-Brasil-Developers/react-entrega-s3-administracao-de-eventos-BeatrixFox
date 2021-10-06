import { useContext } from "react";
import { Container } from "./style";
import { CartWeddingContext } from "../../providers/wedding/wedding";
import { CartGraduationContext } from "../../providers/graduation/graduation";
import { CartConfraternizationContext } from "../../providers/confraternization/confraternization";

export const BtnRemove = ({ text, event, drink }) => {
  const { removeToCartConfraternization } = useContext(
    CartConfraternizationContext
  );
  const { removeToCartWedding } = useContext(CartWeddingContext);
  const { removeToCartGraduation } = useContext(CartGraduationContext);

  const handlerClick = (event, drink) => {
    event === "confraternization"
      ? removeToCartConfraternization(drink)
      : event === "graduation"
      ? removeToCartGraduation(drink)
      : removeToCartWedding(drink);
  };

  return (
    <Container>
      <button onClick={() => handlerClick(event, drink)}>{text}</button>
    </Container>
  );
};

export default BtnRemove;
