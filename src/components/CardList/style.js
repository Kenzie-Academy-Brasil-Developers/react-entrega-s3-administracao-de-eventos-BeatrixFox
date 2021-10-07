import styled from "styled-components";

export const Container = styled.div`
  background: var(--rosewood);
  border-radius: 20px;
  border: 4px solid var(--light-cornflower-blue);
  display: flex;
  padding: 0 20px;
  flex-direction: row;
  justify-content: center;
  width: 80%;
  color: var(--light-cornflower-blue);
  font-size: 18px;
  font-weight: bold;
  h4 {
    color: var(--cultured);
  }
  section {
    margin: 0 auto;
    width: 250px;
    padding: 0 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-right: 3px solid var(--green-blue-crayola);
    img {
      margin: 10px auto;
      width: 50px;
      height: 160px;
    }
    details {
      margin: 10px auto;
      p {
        background-color: var(--prussian-blue);
        color: var(--dark-salmon);
      }
    }
  }

  @media (min-width: 600px) {
    font-size: 20px;
    width: 450px;
  }
`;
