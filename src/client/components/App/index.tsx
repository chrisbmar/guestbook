/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

import { Switch, Route, Redirect, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Home } from "../Home/index";
import { About } from "../About/index";
import useStyles from "./styles";

export const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button component={Link} to="/" color="inherit">
            Home
          </Button>
          <Button component={Link} to="/about" color="inherit">
            About
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="sm">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </div>
  );
};
