import PropTypes from 'prop-types';
import React, { useEffect, useContext, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { AuthContext } from '../context/auth';
import rockGlass from '../images/rockGlass.svg';
import { loginUser } from '../service/api';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';

function Login(props) {
  const [invalidUserMessage, setInvalidUserMessage] = useState(false);
  const [loggedUser, setLoggedUser] = useState(false);
  const {
    userEmail, setEmail, password, setPassword, disableButton } = useContext(AuthContext);
  const flow = { customer: '/customer/products',
    seller: '/seller/orders',
    administrator: 'admin/manage' };

  useEffect(() => {
    const user = getLocalStorage('user') || false;
    if (user) setLoggedUser({ role: user.role });
  }, []);

  const handleClick = async (event) => {
    event.preventDefault();
    const response = await loginUser({ userEmail, password });

    // TESTE USUÁRIO FUNCIONANDO -> adm@deliveryapp.com PW: --adm2@21!!--
    if (response.message === 'Not found'
    || response.message === 'Email or password incorrect') {
      setInvalidUserMessage(true);
    } else {
      // console.log(response.data, 'login');
      const { name, role, email, token, id } = response.data;
      setLocalStorage('user', {
        id,
        name,
        email,
        role,
        token,
      });

      const { history } = props;
      history.push(flow[role]);
    }
  };
  const handleClickRegister = () => {
    const { history } = props;
    history.push('/register');
  };

  return (
    <div>
      {
        loggedUser
          ? <Redirect to={ flow[loggedUser.role] } />
          : (
            <div className="LoginPage">
              <img src={ rockGlass } alt="logo" />
              <form className="loginForm">
                <h1>Login</h1>
                <input
                  name="Login"
                  type="email"
                  value={ userEmail }
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
          )
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
