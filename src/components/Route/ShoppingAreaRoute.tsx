import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Account from "../MyAccount/Account";
import ShoppingApp from "../../views/ShoppingApp";
import Register from "../auth/Register";
import Login from "../auth/Login/Login";
import Checkout from "../checkout/Checkout";
import GuestRoute from "./GuestRoute";
import AdminDashboard from "../adminDashboard";

const ShoppingAreaRoute = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={ShoppingApp} />
        <Route path='/checkout' component={Checkout} />
        <Route path="/account" component={Account} />
        <Route path='/admin' component={AdminDashboard} />
        <GuestRoute>
          <Route path='/login' component={Login} />
          <Route path='/register' component={Register} />
        </GuestRoute>


      </Switch>
    </BrowserRouter>
  )
}

export default ShoppingAreaRoute;