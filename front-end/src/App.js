/* eslint-disable react/jsx-max-depth */
import React from 'react';
/* import { AddressContext } from './context/address'; */
import AuthProvider from './context/auth';
import CartProvider from './context/cart';
import ProductProvider from './context/products';
import RegisterProvider from './context/register';
import Routes from './routes/routes';

function App() {
  return (
    <AuthProvider>
      <RegisterProvider>
        <CartProvider>
          <ProductProvider>
            <Routes />
          </ProductProvider>
        </CartProvider>
      </RegisterProvider>
    </AuthProvider>
  );
}

export default App;
