import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth';
/* import { getLocalStorage } from '../utils/localStorage'; */

function Header() {
  const { name } = useContext(AuthContext);
  /* const user = getLocalStorage('user'); */

  return (
    <div>
      <div>
        <li data-testid="customer_products__element-navbar-link-products">
          PRODUTOS
        </li>
        <li data-testid="customer_products__element-navbar-link-orders">
          MEUS PEDIDOS
        </li>
        <li data-testid="customer_products__element-navbar-user-full-name">
          { name }
        </li>
        <li data-testid="customer_products__element-navbar-link-logout">
          <Link to="/login">SAIR</Link>
        </li>
      </div>
    </div>
  );
}

export default Header;
