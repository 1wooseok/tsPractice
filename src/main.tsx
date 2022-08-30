import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/global.css";
import { TodoContextProvider } from "./context/TodoContext";

ReactDOM.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
