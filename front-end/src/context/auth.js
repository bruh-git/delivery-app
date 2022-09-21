import PropTypes from 'prop-types';
import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
  const [user, setUser] = useState({});

  function signIn(email, password) {
    if (email !== '' && password !== '') {
      setUser({
        email,
        password,
      });
    }
  }

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const contextValue = {
    signIn,
    user,
  };

  return (
    <AuthContext.Provider value={ contextValue }>
      { children }
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
