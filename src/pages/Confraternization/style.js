import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 250px auto 120px;
  position: relative;
  div {
    margin: 0 auto 25px;
    padding: 18px 5px;
  }
`;

export const Content = styled.div`
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
    font-size: 8vw;
  }
  section {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    button {
      background-color: var(--green-blue-crayola);
      color: var(--xiketic);
      height: 40px;
      width: 170px;
      font-size: 18px;
      font-weight: bold;
      margin: 5px auto;
      border-radius: 20px;
    }
    button:hover {
      background-color: var(--prussian-blue);
      color: var(--cultured);
    }
  }
  @media (min-width: 560px) {
    h1 {
      font-size: 5vw;
    }
  }
  @media (min-width: 768px) {
    h1 {
      font-size: 35px;
    }
    section {
      flex-direction: row;
      width: 600px;
      justify-content: space-around;
    }
  }
`;
