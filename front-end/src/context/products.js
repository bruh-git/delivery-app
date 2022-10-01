import PropTypes from 'prop-types';
import React, { createContext, useMemo, useState } from 'react';
// import { getProducts } from '../service/api';
// import { getLocalStorage } from '../utils/localStorage';

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState();

  const contextValues = useMemo(() => ({
    products,
    setProducts,
  }), [products]);

  return (
    <ProductContext.Provider value={ contextValues }>
      { children }
    </ProductContext.Provider>
  );
}

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
