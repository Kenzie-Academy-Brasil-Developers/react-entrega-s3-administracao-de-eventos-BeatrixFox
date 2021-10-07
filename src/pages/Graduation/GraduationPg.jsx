import { useHistory } from "react-router";
import ListBeers from "../../components/ListBeers/ListBeers";
import { Container, Section } from "../Wedding/style";
import { useCartGraduation } from "./../../providers/graduation/graduation";

export const Graduation = () => {
  const { cartGraduation } = useCartGraduation();
  const history = useHistory();

  const handlerClickHome = () => {
    history.push("/");
  };

  return (
    <Container>
      <Section>
        <h1>Graduação</h1>
        <button onClick={handlerClickHome}>Ir para Home</button>
      </Section>
      <ListBeers
        listDrinks={cartGraduation}
        isEvent={true}
        name={"graduation"}
      />
    </Container>
  );
};

export default Graduation;
