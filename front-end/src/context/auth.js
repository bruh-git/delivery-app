/* import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  function signIn(email, password) {
    if (email !== '' && password !== '') {
      setUser({
        email,
        password,
      });

      return (
        <AuthContext.Provider value={ { signIn, user } }>
          {children}
        </AuthContext.Provider>
      );
    }
  }
}

export default AuthProvider;

 */
