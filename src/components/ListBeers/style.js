import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;
  width: 95%;
  margin: 15px -15px;
  @media (min-width: 400px) {
    margin: 10px auto;
  }
  @media (min-width: 768px) {
    flex-flow: row wrap;
    width: 100%;
    justify-content: space-around;
    align-items: center;
  }
`;
