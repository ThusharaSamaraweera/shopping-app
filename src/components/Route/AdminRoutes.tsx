import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AddProduct from '../adminDashboard/addProduct'
import AdminDashboard from '../adminDashboard/dashboard'
import OrderList from '../adminDashboard/orderList'
import Order from '../adminDashboard/orderList/order'
import Products from '../adminDashboard/products'

const AdminRoutes = () => {
  return (
    <Switch>
      <Route exact path='/admin' component={AdminDashboard} />
      <Route exact path='/admin/orders' component={OrderList} />
      <Route exact path='/admin/orders/:orderCode' component={Order} />
      <Route exact path='/admin/products' component={Products} />
      <Route exact path='/admin/create-product' component={AddProduct} />
  </Switch>
  )
}

export default AdminRoutes