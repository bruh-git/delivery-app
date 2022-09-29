import React, { useContext, useEffect } from 'react';
import { CartContext } from '../context/cart';
import { getLocalStorage, setLocalStorage } from '../utils/localStorage';
import ButtonTotal from './totalButton';

export default function CartItem() {
  const cartProducts = getLocalStorage('cartList');
  console.log('log', cartProducts);
  const { setCartProducts } = useContext(CartContext);

  const removeItem = (id) => {
    const newCart = cartProducts.filter((product) => product.id !== id);
    setCartProducts(newCart);
    setLocalStorage('cartList', newCart);
  };

  useEffect(() => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartProducts]);
  console.log(cartProducts, 'cartProducts');
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            <th>Remover item</th>
          </tr>
        </thead>
        <tbody>
          {
            cartProducts
              .filter((item) => item.quantity > 0)
              .map((product, index) => (
                <tr key={ index }>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-item-number-${index}`
                    }
                  >
                    {index + 1}
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-name-${index}`
                    }
                  >
                    {product.name}
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-quantity-${index}`
                    }
                  >
                    {product.quantity}
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-unit-price-${index}`
                    }
                  >
                    { product.price.replace('.', ',') }
                  </td>
                  <td
                    data-testid={
                      `customer_checkout__element-order-table-sub-total-${index}`
                    }
                  >
                    { (product.price * product.quantity)
                      .toFixed(2).replace('.', ',') }
                  </td>
                  <td>
                    <button
                      data-testid={
                        `customer_checkout__element-order-table-remove-${index}`
                      }
                      type="button"
                      onClick={ () => removeItem(product.id) }
                    >
                      Remover
                    </button>
                  </td>
                </tr>
              ))
          }
        </tbody>
      </table>
      <div>
        <h3 data-testid="customer_checkout__element-order-total-price">
          <ButtonTotal />
        </h3>
      </div>
    </div>
  );
}
