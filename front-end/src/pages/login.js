import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../context/auth';
import { loginUser } from '../service/api';
import rockGlass from '../images/rockGlass.svg';

function Login(props) {
  const {
    email,
    setEmail,
    password,
    setPassword,
    disableButton,
  } = useContext(AuthContext);

  const handleClick = async (event) => {
    event.preventDefault();
    const response = await loginUser(Login);
    if ('message' in response) {
      window.alert(response.message);
      return null;
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
    </div>
  );
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Login;
