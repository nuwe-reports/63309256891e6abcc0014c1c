import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import FavoritesWrapper from "./context/favorites.context";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./styles/theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <ChakraProvider theme={theme}>
        <FavoritesWrapper>
          <App />
        </FavoritesWrapper>
      </ChakraProvider>
    </Router>
  </React.StrictMode>
);
