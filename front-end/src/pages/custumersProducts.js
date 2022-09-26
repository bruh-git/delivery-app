import React from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import { ProductContext } from '../context/products';

function CustumerProducts() {
  const { products } = React.useContext(ProductContext);
  return (
    <>
      <Header />
      {' '}
      {products.map((element) => (
        <ProductCard
          key={ element.id }
          products={ element }
        />)) }

    </>
  );
}

export default CustumerProducts;

// console.log('customer', products);
