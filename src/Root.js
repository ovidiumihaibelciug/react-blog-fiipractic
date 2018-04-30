import React from "react";

// router
import { Router, Route, Switch } from "react-router-dom";
import { routes } from "../src/routes";
import createBrowserHistory from "history/createBrowserHistory";

// material
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

//mobx
import { Provider } from "mobx-react";
import RootStore from "../src/stores/index";

//apolo
import { ApolloProvider } from "react-apollo";

// import { client } from "./apollo";

import ApolloClient from "apollo-boost";

import { client } from "./apollo";

const history = createBrowserHistory();

const Root = () => (
  <ApolloProvider client={client}>
    <Provider rootStore={new RootStore()}>
      <MuiThemeProvider>
        <Router history={history}>
          <Switch>
            <React.Fragment>
              {routes.map(route => (
                <Route exact path={route.path} component={route.component} />
              ))}
            </React.Fragment>
          </Switch>
        </Router>
      </MuiThemeProvider>
    </Provider>
  </ApolloProvider>
);

export default Root;
