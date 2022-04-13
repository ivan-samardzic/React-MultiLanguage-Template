import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import { BrowserRouter } from "react-router-dom";
import i18n from "./i18n";
import App from "./App";

ReactDOM.render(
  <BrowserRouter>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
