import React, { useEffect } from "react";

import { Switch, Route, Redirect, Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Home } from "../Home/index";
import { About } from "../About/index";
import { useStoreState, useStoreActions } from "../../hooks/index";
import useStyles from "./styles";

export const App: React.FC = () => {
  const classes = useStyles();

  const entries = useStoreState((state) => state.guestbook.reverseEntries);
  const getEntries = useStoreActions((state) => state.guestbook.getEntries);
  const createEntry = useStoreActions((state) => state.guestbook.createEntry);

  useEffect(() => {
    getEntries();
  }, []);

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
          <Route
            exact
            path="/"
            render={(): JSX.Element => (
              <Home entries={entries} createEntry={createEntry} />
            )}
          />
          <Route exact path="/about" component={About} />
          <Redirect to="/" />
        </Switch>
      </Container>
    </div>
  );
};
