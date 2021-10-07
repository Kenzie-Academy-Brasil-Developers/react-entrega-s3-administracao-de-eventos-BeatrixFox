import Routes from "./routes";
import { Container } from "./style";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <ToastContainer />
      <Container>
        <Routes />
      </Container>
    </>
  );
}

export default App;
