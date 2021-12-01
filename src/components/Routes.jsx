import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Bill from "../pages/Bill";
const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/bill" exact component={Bill} />
    </Switch>
  );
};
export default Routes;
