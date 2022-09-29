import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage } from '../utils/localStorage';
import { CartContext } from '../context/cart';

export default function Header() {
  const history = useHistory();
  const user = getLocalStorage('user');
  const { setCartProducts } = useContext(CartContext);

  console.log(user, 'header');

  const resetContext = () => {
    setCartProducts([]);
  };

  const handleLogOut = () => {
    localStorage.clear();
    resetContext();
    history.push('/login');
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
          {user.name}
        </li>
        <li>
          <button
            data-testid="customer_products__element-navbar-link-logout"
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
