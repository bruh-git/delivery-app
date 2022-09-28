import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../context/cart';
// import { getLocalStorage } from '../utils/localStorage';

export default function ButtonTotal() {
  const history = useHistory();
  // const cartList = getLocalStorage('cartList');
  const { fullPrice, setFullPrice, cartProducts } = useContext(CartContext);

  const handleClickCart = () => {
    history.push('/customer/checkout');
  };

  useEffect(() => {
    const totalPrice = cartProducts.reduce((total, product) => (
      total + (product.quantity * product.price)
    ), (0)).toFixed(2).replace('.', ',');
    setFullPrice(totalPrice);
  }, [setFullPrice, cartProducts]);

  return (
    <div>
      <button
        data-testid="customer_products__button-cart"
        type="button"
        onClick={ handleClickCart }
        disabled={ fullPrice === '0,00' }
      >
        <span data-testid="customer_products__checkout-bottom-value">{ fullPrice }</span>
      </button>
    </div>
  );
}
