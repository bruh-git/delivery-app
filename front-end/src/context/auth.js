import PropTypes from 'prop-types';
import React, { createContext, useEffect, useMemo, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [disableButton, setDisablebutton] = useState(true);

  const contextValues = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
    disableButton,
  }), [email, password, disableButton]);

  useEffect(() => {
    setDisablebutton(true);
  }, []);

  useEffect(() => {
    const numberMin = 5;
    const verifyPassword = password === undefined ? false : password.length > numberMin;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const verifyEmail = emailRegex.test(email);

    if (verifyPassword && verifyEmail) {
      setDisablebutton(false);
    } else {
      setDisablebutton(true);
    }
  }, [email, password]);

  return (
    <AuthContext.Provider value={ contextValues }>
      { children }
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
