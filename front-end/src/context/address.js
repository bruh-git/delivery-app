import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';
// import { getProducts } from '../service/api';

export const AddressContext = createContext();

export default function AddressProvider({ children }) {
  const [Roles, setRoles] = useState([]);
  const [Employee, setEmployee] = useState([]);

  // tem que pegar a rota que retorna os funcionarios

  const contextValues = useMemo(() => ({
    Roles,
    setRoles,
    Employee,
    setEmployee,
  }), [Roles, Employee]);

  return (
    <AddressContext.Provider value={ contextValues }>
      { children }
    </AddressContext.Provider>
  );
}

AddressProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
