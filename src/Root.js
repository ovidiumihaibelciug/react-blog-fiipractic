import React from "react";
import { Router, Route } from "react-router-dom";

import createBrowserHistory from "history/createBrowserHistory";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Login from "./views/Login";

const history = createBrowserHistory();

const routes = [
  {
    path: "/",
    component: Login
  }
];

const Root = () => (
  <Router history={history}>
    <MuiThemeProvider>
      <React.Fragment>
        {routes.map(route => (
          <Route exact path={route.path} component={route.component} />
        ))}
      </React.Fragment>
    </MuiThemeProvider>
  </Router>
);

export default Root;
