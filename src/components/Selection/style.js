import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 100%;

  button {
    width: 55%;
    height: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    border: 2px solid var(--xiketic);
    border-radius: 5px;
    padding: 2px;
    background: var(--venetian-red);
    color: var(--cultured);
    font-size: 15px;
    font-weight: bold;
    &:hover {
      background: var(--prussian-blue);
    }
  }
`;
