import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Account from "../MyAccount/Account";
import ShoppingApp from "../../views/ShoppingApp";

const ShoppingAreaRoute = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ShoppingApp} />
        <Route path="/account" component={Account} />
      </Switch>
    </BrowserRouter>
  )
}

export default ShoppingAreaRoute;