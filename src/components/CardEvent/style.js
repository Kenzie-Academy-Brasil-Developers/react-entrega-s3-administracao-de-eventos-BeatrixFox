import styled from "styled-components";

export const Container = styled.div`
  background: var(--rosewood);
  border-radius: 20px;
  margin: 30px !important;
  text-align: center;
  border: 4px solid var(--light-cornflower-blue);
  display: flex;
  padding: 0 20px;
  flex-direction: column;
  width: 95%;
  color: var(--light-cornflower-blue);
  font-size: 18px;
  font-weight: bold;
  h4 {
    color: var(--cultured);
    font-size: 20px;
  }
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
  p {
    width: 80%;
    margin: 0 auto;
  }

  @media (min-width: 600px) {
    font-size: 20px;
    width: 210px;
  }
`;
