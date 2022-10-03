import PropTypes from 'prop-types';
import React, { createContext, useEffect, useMemo, useState } from 'react';

export const RegisterContext = createContext();

export default function RegisterProvider({ children }) {
  const [userName, setName] = useState('');
  const [userEmail, setEmail] = useState();
  const [password, setPassword] = useState();
  const [roleRegis, setRoleRegis] = useState('');
  const [disableButton, setDisablebutton] = useState(true);

  const contextValues = useMemo(() => ({
    userEmail,
    setEmail,
    password,
    setPassword,
    roleRegis,
    setRoleRegis,
    setName,
    userName,
    disableButton,
    setDisablebutton,
  }), [userEmail, password, disableButton, userName, roleRegis]);

  useEffect(() => {
    setDisablebutton(true);
  }, []);

  useEffect(() => {
    const numberMin = 5;
    const minName = 12;
    const verifyPassword = password === undefined ? false : password.length > numberMin;
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    const verifyEmail = emailRegex.test(userEmail);
    const verifyName = userName.length >= minName;

    if (verifyPassword && verifyEmail && verifyName) {
      setDisablebutton(false);
    } else {
      setDisablebutton(true);
    }
  }, [userEmail, password, userName]);

  return (
    <RegisterContext.Provider value={ contextValues }>
      { children }
    </RegisterContext.Provider>
  );
}

RegisterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
