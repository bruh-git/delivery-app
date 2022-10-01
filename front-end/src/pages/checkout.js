import React from 'react';
import Header from '../components/Header';
import CartItem from '../components/CartItens';
import Address from '../components/Address';

function Checkout() {
  return (
    <>
      <Header />
      {' '}
      <CartItem />
      <Address />
    </>
  );
}

export default Checkout;
