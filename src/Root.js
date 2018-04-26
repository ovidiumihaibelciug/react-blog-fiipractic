import React from "react";
import { Router, Route } from "react-router-dom";

import createBrowserHistory from "history/createBrowserHistory";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { routes } from "../src/routes";

import { Provider } from "mobx-react";
import RootStore from "../src/stores/index";

const history = createBrowserHistory();

const Root = () => (
  <Provider rootStore={new RootStore()}>
    <Router history={history}>
      <MuiThemeProvider>
        <React.Fragment>
          {routes.map(route => (
            <Route exact path={route.path} component={route.component} />
          ))}
        </React.Fragment>
      </MuiThemeProvider>
    </Router>
  </Provider>
);

export default Root;
