import React from 'react';
import Header from '../components/Header';
import Orders from '../components/Orders';

function ordersDetails(props) {
  return (
    <>
      <Header />
      <Orders data={ props } />
    </>
  );
}

export default ordersDetails;
