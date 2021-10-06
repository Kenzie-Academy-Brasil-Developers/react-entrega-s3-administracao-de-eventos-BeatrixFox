import Routes from "./routes";
import Providers from "./providers";
import { Container } from "./style";

function App() {
  return (
    <Container>
      <Providers>
        <Routes />
      </Providers>
    </Container>
  );
}

export default App;
