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
  }
`;

export const ListLinks = styled.nav`
  width: 100%;
  height: 40px;
  overflow: scroll;

  ul {
    display: inline;
    text-align: justify;
    width: 80%;

    li {
      background-color: var(--venetian-red);
      padding: 5px;
      margin: 0 20px;
      border-bottom: 3px solid var(--rosewood);
      display: block;
      a {
        text-decoration: none;
        font-size: 18px;
        color: var(--cultured);
        transition: 0.5s;
        &:hover {
          color: var(--prussian-blue);
          font-weight: bold;
        }
      }
    }
  }
  @media (min-width: 680px) {
    background-color: var(--venetian-red);
    overflow: visible;
    ul {
      display: flex;
      align-items: center;
      justify-content: space-between;
      li {
        border: none;
        width: 20%;
        text-align: center;
      }
    }
  }
`;
