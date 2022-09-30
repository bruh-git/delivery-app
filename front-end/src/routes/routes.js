import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Checkout from '../pages/checkout';
import CustumerProducts from '../pages/custumersProducts';
import Login from '../pages/login';
import Orders from '../pages/orders';
import ordersDetails from '../pages/ordersDetails';
import Register from '../pages/register';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route component={ Login } path="/login" exact />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ CustumerProducts } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders/:id" component={ ordersDetails } />
      <Route exact path="/customer/orders" component={ Orders } />
      <Route exact path="/seller/orders" component={ Orders } />
      <Route exact path="/seller/orders/:id" component={ ordersDetails } />
    </Switch>
  );
}

export default Routes;
