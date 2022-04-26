import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { extendTheme } from "@chakra-ui/react"

// Set Theme Values
const theme = extendTheme({
  Colors: {
      primary: {
        moderate_cyan: "hsl(176, 50%, 47%)",
        dark_cyan: "hsl(176, 72%, 28%)",
      },
      Neutral: {
       dark_gray: "hsl(0, 0%, 48%)"
      }
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

