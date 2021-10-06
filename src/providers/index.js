import { CartCatalogoProvider } from "./catalogo/catalogo";
import { CartConfraternizationProvider } from "./confraternization/confraternization";
import { CartGraduationProvider } from "./graduation/graduation";
import { CartWeddingProvider } from "./wedding/wedding";

const Providers = ({ children }) => {
  return (
    <CartCatalogoProvider>
      <CartGraduationProvider>
        <CartConfraternizationProvider>
          <CartWeddingProvider>{children}</CartWeddingProvider>
        </CartConfraternizationProvider>
      </CartGraduationProvider>
    </CartCatalogoProvider>
  );
};

export default Providers;
