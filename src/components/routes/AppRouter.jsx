import React from "react";
import Router, { Route, IndexRoute } from "react-router";
import Home from "components/pages/Home";

export default (
  <Route path="/">
    <Route path="about" component={Home} />
    <IndexRoute component={Home} />
  </Route>
);
