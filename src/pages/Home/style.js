import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  font-size: 2rem;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: var(--cultured);
  }
  h4 {
    color: var(--light-cornflower-blue);
    margin-bottom: 20px;
  }
`;

export const BtnSection = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media (min-width: 768px) {
    width: 700px;
    flex-flow: row wrap;
    justify-content: space-between;
  }
`;

export const BtnEvents = styled.button`
  background-color: var(--green-blue-crayola);
  color: var(--xiketic);
  height: 60px;
  width: 300px;
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
  border-radius: 20px;
  &:hover {
    background-color: var(--prussian-blue);
    color: var(--cultured);
  }
`;

export const BtnCatalogo = styled.button`
  background-color: var(--xiketic);
  color: var(--cultured);
  height: 60px;
  width: 300px;
  font-size: 18px;
  font-weight: bold;
  margin: 10px;
  border-radius: 20px;
  &:hover {
    background-color: var(--rosewood);
  }
`;
