import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Account from "../MyAccount/Account";
import ShoppingApp from "../../views/ShoppingApp";
import Register from "../Register/Register";

const ShoppingAreaRoute = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ShoppingApp} />
        <Route path="/account" component={Account} />
        <Route path='/register' component={Register} />
      </Switch>
    </BrowserRouter>
  )
}

export default ShoppingAreaRoute;