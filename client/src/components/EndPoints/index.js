import React from "react";
import { Route, Switch } from "react-router-dom";

import Universities from "./Universities";

const EndPoint = ({ path }) => (
  <Switch>
    <Route exact path={`${path}`} component={Universities} />
  </Switch>
);

export default EndPoint;
