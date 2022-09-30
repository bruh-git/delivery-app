import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getOrdersId, getSellers } from '../service/api';

export default function Orders(props) {
  const { data: { match } } = props;
  const { params } = match;
  const [order, setOrder] = useState();
  const [fullPrice, setFullPrice] = useState();
  const [seller, setSeller] = useState('');

  const idName = 'customer_order_details__element-order-details-label-seller-name';
  const idStatus = 'customer_order_details__element-order-details-label-delivery-status';
  const idButton = 'customer_order_details__button-delivery-check';

  useEffect(() => {
    const fetchData = async () => {
      const result = await getOrdersId(Number(params.id));
      setOrder(result);
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (order) {
      const totalPrice = order.products.reduce((total, product) => (
        total + (product.quantity * product.price)
      ), (0)).toFixed(2).replace('.', ',');
      setFullPrice(totalPrice);
    }
    console.log(order, 'produtoID');
  }, [order]);

  useEffect(() => {
    const fetchSeller = async () => {
      const resultSeller = await getSellers();
      if (order) {
        const sellerFind = resultSeller.data.find((elem) => elem.id === order.sellerId);
        setSeller(sellerFind.name);
        console.log(sellerFind, 'FOI');
      }
    };
    fetchSeller();
  }, [order]);

  return (
    <div>
      {
        !order ? <p>Carregando...</p> : (
          <div>
            <h3>Detalhes do pedido</h3>
            <h4
              data-testid="customer_order_details__element-order-details-label-order-id"
            >
              { order.id }
            </h4>
            <h4
              data-testid={ idName }
            >
              P. Vend:
              { seller }
            </h4>
            <h4
              data-testid="customer_order_details__element-order-details-label-order-date"
            >
              { moment(order.saleDate).format('DD/MM/YYYY') }
            </h4>
            <h4
              data-testid={ idStatus }
            >
              { order.status }
            </h4>
            <button
              type="button"
              data-testid={ idButton }
              disabled={ order.status }
            >
              MARCAR COMO ENTREGUE
            </button>
          </div>
        )
      }
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
          </tr>
        </thead>
        <tbody>

          {
            order
        && order.products.map((elem, index) => (
          <tr key={ index }>
            <td
              data-testid={
                `customer_order_details__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-name-${index}`
              }
            >
              {elem.name}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-quantity-${index}`
              }
            >
              {elem.quantity}
            </td>
            <td
              data-testid={
                `customer_order_details__element-order-table-unit-price-${index}`
              }
            >
              { elem.price.replace('.', ',') }
            </td>
            <td
              data-testid={
                `customer_checkout__element-order-table-sub-total-${index}`
              }
            >
              { (elem.price * elem.quantity)
                .toFixed(2).replace('.', ',') }
            </td>
          </tr>
        ))
          }
        </tbody>
      </table>
      <button
        type="button"
        data-testid="customer_order_details__element-order-total-price"
      >
        {fullPrice}

      </button>
    </div>
  );
}

Orders.propTypes = {
  data: PropTypes.shape({
    match: PropTypes.shape({
      params: PropTypes.shape({
        id: PropTypes.string,
      }),
    }),
  }).isRequired,
};
