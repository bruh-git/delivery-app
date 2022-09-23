import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import costumerProducts from '../pages/costumersProducts';

import Login from '../pages/login';
import Register from '../pages/register';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route component={ Login } path="/login" exact />
      <Route exact path="/register" component={ Register } />
      <Route exact patch="/customer/products" component={ costumerProducts } />
    </Switch>
  );
}

export default Routes;
