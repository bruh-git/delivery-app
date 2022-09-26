import React from 'react';
import AuthProvider from './context/auth';
import ProductProvider from './context/products';
import RegisterProvider from './context/register';
import Routes from './routes/routes';

function App() {
  return (
    <AuthProvider>
      <RegisterProvider>
        <ProductProvider>
          <Routes />
        </ProductProvider>
      </RegisterProvider>
    </AuthProvider>
  );
}

export default App;
