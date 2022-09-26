import PropTypes from 'prop-types';
import React, { createContext, useEffect, useMemo, useState } from 'react';

export const RegisterContext = createContext();

export default function RegisterProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [disableButton, setDisablebutton] = useState(true);

  const contextValues = useMemo(() => ({
    email,
    setEmail,
    password,
    setPassword,
    setName,
    name,
    disableButton,
    setDisablebutton,
  }), [email, password, disableButton, name]);

  useEffect(() => {
    setDisablebutton(true);
  }, []);

  useEffect(() => {
    const numberMin = 5;
    const minName = 12;
    const verifyPassword = password === undefined ? false : password.length > numberMin;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const verifyEmail = emailRegex.test(email);
    const verifyName = name.length >= minName;

    if (verifyPassword && verifyEmail && verifyName) {
      setDisablebutton(false);
    } else {
      setDisablebutton(true);
    }
  }, [email, password, name]);

  return (
    <RegisterContext.Provider value={ contextValues }>
      { children }
    </RegisterContext.Provider>
  );
}

RegisterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
