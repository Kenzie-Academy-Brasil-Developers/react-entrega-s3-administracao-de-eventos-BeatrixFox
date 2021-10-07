import { Container } from "./style";
import Selection from "./../Selection/Selection";

export const CardList = ({ drink }) => {
  return (
    <Container>
      <section>
        <h4>{drink.name}</h4>
        <img src={drink.image_url} alt={drink.name} />
        <details>
          <summary>Descrição da bebida</summary>
          <p>{drink.description}</p>
        </details>
        <p>
          <span>Fab.: {drink.first_brewed} </span>{" "}
          <span> Qnt.: {drink.boil_volume.value} L</span>
        </p>
      </section>
      <Selection drink={drink} />
    </Container>
  );
};

export default CardList;
