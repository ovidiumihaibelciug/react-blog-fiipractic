import React from "react";

// router
import { Router, Route } from "react-router-dom";
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
  </ApolloProvider>
);

export default Root;
