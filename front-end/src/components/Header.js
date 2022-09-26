import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  // const { email } = useContext(AuthContext);

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
          qualquer nome
        </li>
        <li data-testid="customer_products__element-navbar-link-logout">
          <Link to="/">SAIR</Link>
        </li>
      </div>
    </div>
  );
}

export default Header;
