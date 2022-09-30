import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import CustumerProducts from '../pages/custumersProducts';
import Login from '../pages/login';
import Register from '../pages/register';
import Checkout from '../pages/checkout';
import Orders from '../pages/orders';

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
      <Route exact path="/customer/orders" component={ Orders } />
    </Switch>
  );
}

export default Routes;
