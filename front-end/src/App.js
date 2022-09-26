import React from 'react';
import AuthProvider from './context/auth';
import RegisterProvider from './context/register';
import Routes from './routes/routes';

function App() {
  return (
    <AuthProvider>
      <RegisterProvider>
        <Routes />
      </RegisterProvider>
    </AuthProvider>
  );
}

export default App;
