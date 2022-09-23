import PropTypes from 'prop-types';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/auth';
import rockGlass from '../images/rockGlass.svg';
import { loginUser } from '../service/api';

function Login(props) {
  const [invalidUserMessage, setInvalidUserMessage] = useState(false);
  const {
    email, setEmail, password, setPassword, disableButton } = useContext(AuthContext);

  const handleClick = async (event) => {
    event.preventDefault();
    const response = await loginUser({ email, password });
    console.log(response, 'testando');

    // console.log(invalidUserMessage);
    /*     if ('message' in response) {
      // alert(response.message);
    } */

    // TESTE USUÁRIO FUNCIONANDO -> adm@deliveryapp.com PW: --adm2@21!!--
    if (response.message === 'Not found'
    || response.message === 'Email or password incorrect') {
      setInvalidUserMessage(true);
    } else {
      console.log('entrou!');
      const { history } = props;
      history.push('/costumer/products');
    }
  };
  const handleClickRegister = () => {
    const { history } = props;
    history.push('/register');
  };

  return (
    <div className="LoginPage">
      <img src={ rockGlass } alt="logo" />
      <form className="loginForm">
        <h1>Login</h1>
        <input
          name="Login"
          type="email"
          value={ email }
          placeholder="email@trybeer.com.br"
          data-testid="common_login__input-email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <input
          name="Senha"
          type="password"
          value={ password }
          placeholder="*******"
          data-testid="common_login__input-password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <button
          type="button"
          data-testid="common_login__button-login"
          onClick={ handleClick }
          disabled={ disableButton }
        >
          LOGIN
        </button>
        <button
          type="button"
          data-testid="common_login__button-register"
          onClick={ handleClickRegister }
        >
          Ainda não tenho conta
        </button>
      </form>
      {
        invalidUserMessage ? (
          <h4
            data-testid="common_login__element-invalid-email"
          >
            Usuário e senha não encontrados!
          </h4>) : ''
      }
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
