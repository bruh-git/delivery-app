import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
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
        { user.role === 'customer'
          && (
            <div>
              <Link to="/customer/products">
                <li data-testid="customer_products__element-navbar-link-products">
                  PRODUTOS
                </li>
              </Link>
              <Link to="/customer/orders">
                <li data-testid="customer_products__element-navbar-link-orders">
                  MEUS PEDIDOS
                </li>
              </Link>
            </div>)}
        { user.role === 'seller'
        && (
          <li data-testid="customer_products__element-navbar-link-orders">
            PEDIDOS
          </li>)}
        { user.role === 'administrator'
      && (
        <li data-testid="customer_products__element-navbar-link-orders">
          GERENCIAR USUÁRIOS
        </li>)}
        <li data-testid="customer_products__element-navbar-user-full-name">
          {user.name}
        </li>
        <li>
          <button
            data-testid="customer_products__element-navbar-link-logout"
            type="button"
            onClick={ handleLogOut }
            style={ { margin: '50px', padding: '15px' } }
          >
            Sair

          </button>
        </li>
      </div>
    </div>
  );
}
