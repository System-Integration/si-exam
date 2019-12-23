import React from "react";
import { Switch, Route } from "react-router";
import { Startpage } from "./components/Startpage";
import Cart from "./components/cart/Cart";
import Shop from "./components/Shop";

interface Props {}

export const Routes: React.FC<Props> = () => (
  <Switch>
    <Route path="/cart">
      <Cart />
    </Route>
    <Route path="/">
      <Shop />
    </Route>
  </Switch>
);
