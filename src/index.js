import React from "react";
import App from "App";
import ReactDOM from "react-dom";
import store from "store";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "utils/styles/GlobalStyles";
import { Provider } from "react-redux";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
      <GlobalStyles />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
