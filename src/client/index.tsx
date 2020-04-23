import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import ReactDOM from "react-dom";

import { App } from "./components/App/index";
import "./index.scss";

const root = document.getElementById("root");

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  root
);
