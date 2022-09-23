import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';

function Register() {
  const {
    setEmail, setPassword, disableButton, setName } = useContext(AuthContext);
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
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Register;
