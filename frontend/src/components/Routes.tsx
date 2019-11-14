import React from "react";
import { Switch, Route } from "react-router";
import { ComputerPage } from "./Computerpage";
import { Startpage } from "./Startpage";

interface Props {}

export const Routes: React.FC<Props> = () => (
  <Switch>
    <Route path="/computers">
      <ComputerPage />
    </Route>
    <Route path="/">
      <Startpage />
    </Route>
  </Switch>
);
