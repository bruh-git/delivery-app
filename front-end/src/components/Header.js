import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { RegisterContext } from '../context/register';

function Header() {
  const { name } = useContext(RegisterContext);

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
          {name}
        </li>
        <li>
          <Link to="/">SAIR</Link>
        </li>
      </div>
    </div>
  );
}

export default Header;
