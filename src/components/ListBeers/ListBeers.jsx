import CardEvent from "../CardEvent/CardEvent";
import CardList from "../CardList/CardList";
import Container from "./style";

export const ListBeers = ({ listDrinks, isEvent }) => {
  return (
    <Container>
      {isEvent === true
        ? listDrinks.map((itemProduct) => <CardEvent key={itemProduct.id} />)
        : listDrinks.map((itemProduct) => <CardList key={itemProduct.id} />)}
    </Container>
  );
};
