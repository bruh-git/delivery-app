import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';

function Header() {
  const { email } = useContext(AuthContext);

  return (
    <div>
      <div>
        <li>
          PRODUTOS
        </li>
        <li>
          MEUS PEDIDOS
        </li>
        <li>
          {email}
        </li>
        <li>
          <Link to="/">SAIR</Link>
        </li>
      </div>
    </div>
  );
}

export default Header;
