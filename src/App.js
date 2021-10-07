import Routes from "./routes";
import { Container } from "./style";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <Container>
      <ToastContainer />
      <Routes />
    </Container>
  );
}

export default App;
