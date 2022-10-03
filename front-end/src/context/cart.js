import PropTypes from 'prop-types';
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { setLocalStorage } from '../utils/localStorage';
// import { getProducts } from '../service/api';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  const [fullPrice, setFullPrice] = useState(0);

  useEffect(() => {
    setLocalStorage('cartList', cartProducts);
  }, [cartProducts]);

  const contextValues = useMemo(() => ({
    cartProducts,
    setCartProducts,
    setFullPrice,
    fullPrice,
  }), [cartProducts, fullPrice]);

  return (
    <CartContext.Provider value={ contextValues }>
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
