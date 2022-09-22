import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router } from "react-router-dom";
import theme from "./styles/theme";
import { AuthProviderWrapper } from "./context/auth.context";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <ChakraProvider theme={theme}>
          <App />
        </ChakraProvider>
      </AuthProviderWrapper>
    </Router>
  </React.StrictMode>
);
