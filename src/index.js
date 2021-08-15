import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import GlobalStyles from "utils/styles/GlobalStyles";
import App from "App";
import store from "store";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
