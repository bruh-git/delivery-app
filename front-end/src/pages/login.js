import React, { useContext } from 'react';
import { AuthContext } from '../context/auth';
import rockGlass from '../images/rockGlass.svg';

function Login() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn, user } = useContext(AuthContext);

  function handleSubmit() {
    signIn(email, password);
    setLocalStorage('user', { email });
  }

  console.log(user);

  return (
    <div className="LoginPage">
      <img src={ rockGlass } alt="logo" />
      <form onSubmit={ handleSubmit }>
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
