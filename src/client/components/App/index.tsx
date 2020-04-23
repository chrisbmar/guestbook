/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";

import { Switch, Route, Redirect, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import useStyles from "./styles";

export const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit">MENU</Button>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <div>
        <Link to="/">Home Page</Link>
        <span> | </span>
        <Link to="/about">About Page</Link>
      </div>
      <Switch>
        <Route exact path="/">
          <h1>Home Page</h1>
        </Route>
        <Route exact path="/about">
          <h1>About Page</h1>
        </Route>
        <Redirect to="/" />
      </Switch>
    </div>
  );
};
