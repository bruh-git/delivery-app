import PropTypes from 'prop-types';
import React, { useContext } from 'react';
import { RegisterContext } from '../context/register';
import { registerUser } from '../service/api';

function Register(props) {
  const { name, email, password,
    setEmail, setPassword, setName, disableButton } = useContext(RegisterContext);

  const handleRegister = async (event) => {
    event.preventDefault();
    const response = await registerUser({ name, email, password });

    if (response.message === 'Conflict') {
      return alert(response.message);
    }
    const { history } = props;
    history.push('/login');
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
          type="text"
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
    </div>
  );
}

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Register;
