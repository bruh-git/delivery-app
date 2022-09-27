import React, { useContext } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../context/products';

function CustumerProducts() {
  const { products } = useContext(ProductContext);
  console.log(products, 'PAGINAaa');

  return (
    <>
      <Header />
      {' '}

      {
        Object.assign(products).map((product, index) => (
          <ProductCard key={ index } data={ product } />
        ))
      }
    </>
  );
}

export default CustumerProducts;
