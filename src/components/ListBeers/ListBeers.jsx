import CardEvent from "../CardEvent/CardEvent";
import CardList from "../CardList/CardList";
import { Container } from "./style";

export const ListBeers = ({ listDrinks, isEvent, name }) => {
  return (
    <Container>
      {isEvent === true
        ? listDrinks.map((itemProduct) => (
            <CardEvent
              key={itemProduct.id}
              event={name}
              drink={itemProduct}
            ></CardEvent>
          ))
        : listDrinks.map((itemProduct) => (
            <CardList key={itemProduct.id} drink={itemProduct}></CardList>
          ))}
    </Container>
  );
};

export default ListBeers;
