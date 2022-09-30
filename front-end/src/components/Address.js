import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CartContext } from '../context/cart';
import { getSellers, postOrders } from '../service/api';
import { getLocalStorage } from '../utils/localStorage';

function Address() {
  const history = useHistory();
  const [address, setAddress] = useState({ deliveryAddress: '',
    deliveryNumber: '',
    seller: 0 });
  const { fullPrice } = useContext(CartContext);
  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const { token } = getLocalStorage('user');
    const fetchSellers = async () => {
      const result = await getSellers({ token });
      setSellers(result.data);
    };
    fetchSellers();
  }, []);

  const handleClickOrders = async () => {
    const { id } = getLocalStorage('user');
    const products = getLocalStorage('cartList')
      .map((elem) => ({ id: elem.id, quantity: elem.quantity }));
    const saleData = {
      sale: {
        userId: Number(id),
        sellerId: Number(address.seller),
        totalPrice: Number(fullPrice.replace(',', '.')),
        deliveryAddress: address.deliveryAddress,
        deliveryNumber: address.deliveryNumber,
      },
      products,
    };
    const sale = await postOrders(saleData);
    history.push(`/customer/orders/${sale.saleId}`);
  };

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setAddress({ ...address, [name]: value });
  };

  return (
    <div>
      <div>
        <label
          htmlFor="seller"
        >
          P. Vendedora Responsável:
          <select
            data-testid="customer_checkout__select-seller"
            id="seller"
            name="seller"
            value={ address.seller }
            onChange={ (({ target: { value } }) => (
              setAddress({ ...address, seller: value })
            )) }
          >
            <option value="default">Selecione</option>
            {
              sellers.length > 0
              && sellers.map((elem) => (
                <option key={ elem.id } value={ elem.id }>{ elem.name }</option>
              ))
            }

          </select>
        </label>
        <label htmlFor="address">
          Endereço
          <input
            name="deliveryAddress"
            value={ address.deliveryAddress }
            data-testid="customer_checkout__input-address"
            placeholder="Coloque seu endereço aqui!"
            id="address"
            onChange={ (e) => handleChange(e) }
          />
        </label>
        <label htmlFor="number">
          Número
          <input
            name="deliveryNumber"
            value={ address.deliveryNumber }
            data-testid="customer_checkout__input-address-number"
            placeholder="Coloque seu número aqui!"
            id="number"
            onChange={ (e) => handleChange(e) }
          />
        </label>
      </div>
      <div>
        <button
          type="button"
          data-testid="customer_checkout__button-submit-order"
          onClick={ handleClickOrders }
        >
          FINALIZAR PEDIDO
        </button>
      </div>
    </div>
  );
}

export default Address;
