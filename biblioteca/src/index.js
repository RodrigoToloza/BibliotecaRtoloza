import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import BooksProvider from "./context/BooksContext";
ReactDOM.render(
  <BooksProvider>
    <App />
  </BooksProvider>,
  document.getElementById("root")
);

reportWebVitals();
