import React, { useContext, useEffect } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import ButtonTotal from '../components/totalButton';
import { ProductContext } from '../context/products';
import { getProducts } from '../service/api';
import { getLocalStorage } from '../utils/localStorage';

function CustumerProducts() {
  const { setProducts, products } = useContext(ProductContext);
  console.log(products, 'PAGINAaa');

  useEffect(() => {
    const { token } = getLocalStorage('user');
    const fetchData = async () => {
      const dataProducts = await getProducts({ token });
      setProducts(dataProducts.data);
    };
    fetchData();
  }, [setProducts]);

  return (
    <>
      <Header />
      {' '}
      {
        !products ? <p>Carregando...</p> : (
          Object.assign(products).map((product, index) => (
            <ProductCard key={ index } data={ product } />
          ))
        )
      }
      <ButtonTotal />
    </>
  );
}

export default CustumerProducts;
