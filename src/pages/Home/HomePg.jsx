import { useHistory } from "react-router";

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
    <>
      <h1>Home</h1>
      <button onClick={handlerClickPagOne}>Catalogo de Bebidas</button>
      <button onClick={handlerClickPagTwo}>Evento de Casamento</button>
      <button onClick={handlerClickPagThree}>Evento de Formatura</button>
      <button onClick={handlerClickPagFour}>Evento de Confraternização</button>
    </>
  );
};

export default Home;
