import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { RegisterContext } from '../context/register';
import { adminRegister, registerUser } from '../service/api';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import UserList from './UserList';

export default function RegisterForm(props) {
  const [invalidUserMessage, setInvalidUserMessage] = useState(false);
  const [role, setRole] = useState('customer');
  const { userName, userEmail, password,
    setEmail, setPassword, setName,
    disableButton, setDisablebutton,
    roleRegis, setRoleRegis } = useContext(RegisterContext);
  const current = { customer: 'common_register', administrator: 'admin_manage' };

  const handleAdminRegis = async () => {
    const { token } = getLocalStorage('user');
    const response = await adminRegister({
      name: userName,
      email: userEmail,
      password,
      role: roleRegis,
    }, token);

    if (response.message === 'Conflict') {
      setInvalidUserMessage(true);
      setDisablebutton(true);
    }
  };

  const handleRegister = async () => {
    const response = await registerUser({ userName, userEmail, password });

    if (response.message === 'Conflict') {
      setInvalidUserMessage(true);
      setDisablebutton(true);
    } else {
      const { id, name, email, token } = response.data.user;
      setLocalStorage('user', {
        id,
        name,
        email,
        role: response.data.user.role,
        token,
      });

      const { history } = props;
      history.push('/customer/products');
    }
  };

  useEffect(() => {
    const { role: userRole } = getLocalStorage('user');
    setRole(userRole);
  }, []);

  return (
    <div className="RegisterPage">
      <form className="RegisterForm">
        <h3>Nome</h3>
        <input
          name="name"
          type="text"
          placeholder="Seu Nome"
          data-testid={ `${current[role]}__input-name` }
          onChange={ ({ target }) => setName(target.value) }
        />
        <h3>Email</h3>
        <input
          name="email"
          type="email"
          placeholder="seu-email@site.com.br"
          data-testid={ `${current[role]}__input-email` }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <h3>Senha</h3>
        <input
          name="password"
          type="password"
          placeholder="*********"
          data-testid={ `${current[role]}__input-password` }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        {role === 'administrator' && (
          <select
            data-testid="admin_manage__select-role"
            onChange={ ({ target: { value } }) => setRoleRegis(value) }
            required
          >
            <option value="default">Selecione</option>
            {
              ['customer', 'seller'].map((elem, index) => (
                <option key={ index } value={ elem }>{elem}</option>
              ))
            }
          </select>
        ) }
        <button
          type="button"
          data-testid={ `${current[role]}__button-register` }
          disabled={ disableButton }
          onClick={ role === 'administrator' ? handleAdminRegis : handleRegister }
        >
          Cadastrar
        </button>
      </form>
      {
        invalidUserMessage ? (
          <h4
            data-testid={ `${current[role]}__element-invalid-register` }
          >
            Usuário já existe!
          </h4>) : ''
      }
      {
        role === 'administrator' && <UserList />
      }
    </div>
  );
}

RegisterForm.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
