import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 250px auto 120px;
  position: relative;
  div {
    margin: 20px auto;
  }
`;

export const Section = styled.section`
  background-color: var(--xiketic);
  color: var(--cultured);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
  text-align: center;
  h1 {
    margin: 20px auto;
  }

  button {
    background-color: var(--green-blue-crayola);
    color: var(--xiketic);
    height: 50px;
    width: 200px;
    font-size: 18px;
    font-weight: bold;
    margin: 5px auto;
    border-radius: 20px;
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 35px;
    }
  }
`;
