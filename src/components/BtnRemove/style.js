import styled from "styled-components";

export const Container = styled.div`
  button {
    border-radius: 15px;
    border: 3px solid var(--prussian-blue);
    background: var(--tomato);
    color: var(--xiketic);
    font-size: 18px;
    font-weight: bold;
    width: 150px;
    height: 40px;
    &:hover {
      background: var(--venetian-red);
    }
  }
`;
