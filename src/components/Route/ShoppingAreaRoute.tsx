import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Account from "../MyAccount/Account";
import ShoppingApp from "../../views/ShoppingApp";
import Register from "../auth/Register";
import Login from "../auth/Login/Login";
import Checkout from "../checkout/Checkout";

const ShoppingAreaRoute = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ShoppingApp} />
        <Route path="/account" component={Account} />
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/checkout' component={Checkout} />
      </Switch>
    </BrowserRouter>
  )
}

export default ShoppingAreaRoute;