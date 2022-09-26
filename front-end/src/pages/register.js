import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { RegisterContext } from '../context/register';
import { registerUser } from '../service/api';
import { setLocalStorage } from '../utils/localStorage';

function Register(props) {
  const [invalidUserMessage, setInvalidUserMessage] = useState(false);
  const { name, email, password,
    setEmail, setPassword, setName,
    disableButton, setDisablebutton } = useContext(RegisterContext);

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await registerUser({ name, email, password });

    if (response.message === 'Conflict') {
      setInvalidUserMessage(true);
      setDisablebutton(true);
    } else {
      setLocalStorage('token', response.data.user.token);
      setDisablebutton(false);
      const { history } = props;
      history.push('/customer/products');
      console.log(response, 'retorno registro');
    }
  };
  return (
    <div className="RegisterPage">
      <form className="RegisterForm">
        <h3>Nome</h3>
        <input
          name="name"
          type="text"
          placeholder="Seu Nome"
          data-testid="common_register__input-name"
          onChange={ ({ target }) => setName(target.value) }
        />
        <h3>Email</h3>
        <input
          name="email"
          type="email"
          placeholder="seu-email@site.com.br"
          data-testid="common_register__input-email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <h3>Senha</h3>
        <input
          name="password"
          type="password"
          placeholder="*********"
          data-testid="common_register__input-password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="button"
          data-testid="common_register__button-register"
          disabled={ disableButton }
          onClick={ handleRegister }
        >
          Cadastrar
        </button>
      </form>
      {
        invalidUserMessage ? (
          <h4
            data-testid="common_register__element-invalid_register"
          >
            Usuário já existe!
          </h4>) : ''
      }
    </div>
  );
}

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Register;
