import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 280px auto 120px;
  position: relative;
  width: 100%;
  div {
    margin: 25px auto;
    padding: 18px 5px;
  }
  @media (min-width: 700px) {
    margin: 200px auto 120px;
  }
`;

export const Content = styled.section`
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
    font-size: 2.5rem;
  }
  section {
    ul {
      margin: 15px 60px;
      li {
        list-style: square;
        text-align: left;
        margin: 5px;
      }
    }
  }

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
  @media (min-width: 768px) {
    flex-flow: row wrap;
    h1 {
      font-size: 40px;
    }
    section {
      ul {
        margin: 15px 100px;
      }
    }
    button {
      align-self: flex-end;
    }
  }
`;
