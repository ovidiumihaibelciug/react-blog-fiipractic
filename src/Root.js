import React from "react";
import { Router, Route } from "react-router-dom";

import createBrowserHistory from "history/createBrowserHistory";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

const history = createBrowserHistory();

const Login = () => {
  return <div>Hello</div>;
};

const routes = [
  {
    path: "/",
    component: Login
  }
];

const Root = () => (
  <Router history={history}>
    <React.Fragment>
      {routes.map(route => (
        <Route exact path={route.path} component={route.component} />
      ))}
    </React.Fragment>
  </Router>
);

export default Root;
