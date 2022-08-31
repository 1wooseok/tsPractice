import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/global.css";
import { TodoContextProvider } from "./context/TodoContext";
import { AuthContextProvider } from "./context/AuthContext";

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
