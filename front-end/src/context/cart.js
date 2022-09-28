import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';
// import { getProducts } from '../service/api';
// import { getLocalStorage } from '../utils/localStorage';

export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cartProducts, setCartProducts] = useState([]);
  // const [productsQtd, setProductsQtd] = useState([]);

  /*   userEffect(() => {
    const products = getLocalStorage('productsQtd, cartProducts');
  }, []); */

  const contextValues = useMemo(() => ({
    cartProducts,
    setCartProducts,
    // productsQtd,
    // setProductsQtd,
  }), [cartProducts]);

  return (
    <CartContext.Provider value={ contextValues }>
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
