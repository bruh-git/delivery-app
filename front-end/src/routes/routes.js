import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Login from '../pages/login';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route component={ Login } path="/login" exact />
    </Switch>
  );
}

export default Routes;
