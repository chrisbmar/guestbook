import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { StoreProvider } from "easy-peasy";

import { App } from "./components/App/index";
import store from "./store/index";
import "./index.scss";

const app = (
  <Router>
    <StoreProvider store={store}>
      <App />
    </StoreProvider>
  </Router>
);

const root = document.getElementById("root");

ReactDOM.render(app, root);
