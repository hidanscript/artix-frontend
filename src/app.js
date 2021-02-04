import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./screens/Landing";
import Login from "./screens/Login";

export default function app() {
  return (
    <div className="app">
      <Route
        render={({ location }) => (
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login} />
          </Switch>
        )}
      />
    </div>
  );
}
