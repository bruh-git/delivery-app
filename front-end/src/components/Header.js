import React from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage } from '../utils/localStorage';

export default function Header() {
  const history = useHistory();
  const user = getLocalStorage('name');
  console.log(user);

  const handleLogOut = async (event) => {
    event.preventDefault();
    history.push('/login');
    localStorage.clear();
  };

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
          { user }
        </li>
        <li data-testid="customer_products__element-navbar-link-logout">
          <button
            type="button"
            onClick={ handleLogOut }
          >
            Sair

          </button>
        </li>
      </div>
    </div>
  );
}
