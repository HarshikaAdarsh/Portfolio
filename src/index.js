import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
<<<<<<< HEAD


ReactDOM.render(
  <React.StrictMode>
   
      <App />
    
=======
import { ThemeProvider } from "./context";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
>>>>>>> parent of 9a4abd81 (delete everything)
  </React.StrictMode>,
  document.getElementById("root")
);