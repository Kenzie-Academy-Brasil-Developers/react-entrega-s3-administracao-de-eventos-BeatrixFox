import { Container } from "./style";
import BtnRemove from "./../BtnRemove/BtnRemove";

export const CardEvent = ({ event, drink }) => {
  return (
    <Container>
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
      <BtnRemove text={"Remove"} event={event} drink={drink} />
    </Container>
  );
};

export default CardEvent;
