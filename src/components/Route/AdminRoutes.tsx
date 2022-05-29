import React from 'react'
import { Switch, Route } from 'react-router-dom'
import OrderList from '../adminDashboard/orderList'
import Products from '../adminDashboard/products'

const AdminRoutes = () => {
  return (
    <Switch>
      <Route exact path='/admin/orders' component={OrderList} />
      <Route exact path='/admin/products' component={Products} />
  </Switch>
  )
}

export default AdminRoutes