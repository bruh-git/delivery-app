import PropTypes from 'prop-types';
import React, { createContext, useEffect, useMemo, useState } from 'react';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [userEmail, setEmail] = useState();
  const [name, setName] = useState();
  const [role, setRole] = useState();
  const [password, setPassword] = useState();
  const [disableButton, setDisablebutton] = useState(true);

  const contextValues = useMemo(() => ({
    name,
    setName,
    role,
    setRole,
    userEmail,
    setEmail,
    password,
    setPassword,
    disableButton,
  }), [userEmail, name, role, password, disableButton]);

  useEffect(() => {
    setDisablebutton(true);
  }, []);

  useEffect(() => {
    const numberMin = 5;
    const verifyPassword = password === undefined ? false : password.length > numberMin;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const verifyEmail = emailRegex.test(userEmail);

    if (verifyPassword && verifyEmail) {
      setDisablebutton(false);
    } else {
      setDisablebutton(true);
    }
  }, [userEmail, password]);

  return (
    <AuthContext.Provider value={ contextValues }>
      { children }
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
