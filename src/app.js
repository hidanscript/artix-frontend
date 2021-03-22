import React from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store';
import Landing from "./screens/Landing";
import Login from "./screens/Login";
import Picture from "./screens/Picture";

export default function app() {
  return (
    <Provider store={store}>
      <main className="app">
        <Route
          render={({ location }) => (
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/post/:id" component={Picture} />
            </Switch>
          )}
        />
      </main>
    </Provider>
  );
}
