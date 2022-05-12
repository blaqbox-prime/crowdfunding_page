import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

// Set Theme Values
const theme = extendTheme({
  Colors: {
    brand: {
      moderate_cyan: "hsl(176, 50%, 47%)",
    dark_cyan: "hsl(176, 72%, 28%)",
    dark_gray: "hsl(0, 0%, 48%)",
    }
  },
  fonts: {
    body: "Commissioner, sans-serif",
    heading: "Commissioner, serif",
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
