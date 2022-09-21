import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/login';

function Routes() {
  return (
    <BrowserRouter>
      <Route component={ Login } path="/" exact />
    </BrowserRouter>
  );
}

export default Routes;
