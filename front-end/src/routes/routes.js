import React from 'react';
import { Route } from 'react-router-dom';

import Login from '../pages/login';

function Routes() {
  return <Route component={ Login } path="/" exact />;
}

export default Routes;
