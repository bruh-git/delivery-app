import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import { loginUser } from '../service/api';
import rockGlass from '../images/rockGlass.svg';

function Login() {
  const {
    email, setEmail, password, setPassword, disableButton } = useContext(AuthContext);

  const handleClick = async (event) => {
    event.preventDefault();
    const response = await loginUser(Login);

    if ('message' in response) {
      alert(response.message);
      console.log(response.message);
    }
    if (response.message === 'Not Found') {
      alert('Usuário não encontrado');
    }
<<<<<<< HEAD
  }
=======
  };

  const handleClickRegister = () => {
    const { history } = props;
    history.push('/register');
  };
>>>>>>> a04d71ce4aed34d63d97b9c8fdd0f3de45650c6a

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
          // onClick={ handleClickRegister }
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}

export default Login;
