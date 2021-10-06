import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import GlobalStyle from "./styles/global";
import App from "./App";
import Providers from "./providers";

ReactDOM.render(
  <React.StrictMode>
    <Providers>
      <BrowserRouter>
        <GlobalStyle />
        <App />
      </BrowserRouter>
    </Providers>
  </React.StrictMode>,
  document.getElementById("root")
);
