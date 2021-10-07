import { useHistory } from "react-router";
import { BtnSection, BtnCatalogo, Container, BtnEvents } from "./style";

export const Home = () => {
  const history = useHistory();

  const handlerClickPagOne = () => {
    history.push("/SelectionBeersPg");
  };

  const handlerClickPagTwo = () => {
    history.push("/WeddingPg");
  };

  const handlerClickPagThree = () => {
    history.push("/GraduationPg");
  };

  const handlerClickPagFour = () => {
    history.push("/ConfraternizationPg");
  };

  return (
    <Container>
      <h1>ADM events</h1>
      <h4>Escolha um evento ou Catalogo de bebidas</h4>
      <BtnSection>
        <BtnCatalogo onClick={handlerClickPagOne}>
          Catalogo de Bebidas
        </BtnCatalogo>
        <BtnEvents onClick={handlerClickPagTwo}>Evento de Casamento</BtnEvents>
        <BtnEvents onClick={handlerClickPagThree}>
          Evento de Formatura
        </BtnEvents>
        <BtnEvents onClick={handlerClickPagFour}>
          Evento de Confraternização
        </BtnEvents>
      </BtnSection>
    </Container>
  );
};

export default Home;
