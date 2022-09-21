import React from 'react';
import rockGlass from '../images/rockGlass.svg';

function Login() {
  return (
    <div className="LoginPage">
      <img src={ rockGlass } alt="logo" />
      <form>
        <h1>Login</h1>
        <input
          name="Login"
          type="email"
          placeholder="email@trybeer.com.br"
          data-testid="common_login__input-email"
        />
        <input
          name="Senha"
          type="password"
          placeholder="*******"
          data-testid="common_login__input-password"
        />
        <button type="submit" data-testid="common_login__button-login">
          LOGIN
        </button>
        <button type="submit" data-testid="common_login__button-register">
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}
export default Login;
