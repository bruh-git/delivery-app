import React from 'react';
import AuthProvider from './context/auth';
import Routes from './routes/routes';

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
