import { useContext } from "react";
import { useHistory } from "react-router";
import { Container, Content, ListLinks } from "./style";
import ListBeers from "../../components/ListBeers/ListBeers";
import { CartCatalogoContext } from "../../providers/catalogo/catalogo";
import { useCartConfraternization } from "../../providers/confraternization/confraternization";
import { useCartGraduation } from "../../providers/graduation/graduation";
import { useCartWedding } from "../../providers/wedding/wedding";
import { Link } from "react-router-dom";
import { useState } from "react/cjs/react.development";

export const SelectionBeers = () => {
  const { catalogo } = useContext(CartCatalogoContext);

  const { cartConfraternization } = useCartConfraternization();
  const { cartGraduation } = useCartGraduation();
  const { cartWedding } = useCartWedding();
  const [isShowList, setIsShowList] = useState(false);

  const handlerClickShow = () => {
    setIsShowList(!isShowList);
  };

  return (
    <Container>
      <Content>
        <h1>Catalogo de bebidas</h1>
        <section>
          <p>Quantidade de bebidas adicionada em cada evento</p>
          <ul>
            <li>{cartWedding.length} para Casamento</li>
            <li>{cartGraduation.length} para Formatura</li>
            <li>{cartConfraternization.length} para Confraternização</li>
          </ul>
        </section>

        <ListLinks>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/WeddingPg">Casamento</Link>
            </li>
            <li>
              <Link to="/GraduationPg">Formatura</Link>
            </li>
            <li>
              <Link to="/ConfraternizationPg">Confraternização</Link>
            </li>
          </ul>
        </ListLinks>
      </Content>
      <div>
        <ListBeers listDrinks={catalogo} isEvent={false} />
      </div>
    </Container>
  );
};

export default SelectionBeers;
