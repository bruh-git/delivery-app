import moment from 'moment';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { getOrdersId, getSellers, updateStatus } from '../service/api';
import { getLocalStorage } from '../utils/localStorage';

export default function Orders(props) {
  const { data: { match } } = props;
  const { params } = match;
  const [order, setOrder] = useState();
  const [fullPrice, setFullPrice] = useState();
  const [seller, setSeller] = useState('');
  const [role, setRole] = useState();

  const idSellerName = 'customer_order_details__element-order-details-label-seller-name';
  const idOrder = `${role}_order_details__element-order-details-label-order-id`;
  const idStatus = `${role}_order_details__element-order-details-label-delivery-status`;
  const idCheckBtn = 'customer_order_details__button-delivery-check';
  const idPrepareBtn = 'seller_order_details__button-preparing-check';
  const idDispatchBtn = 'seller_order_details__button-dispatch-check';
  const idDate = `${role}_order_details__element-order-details-label-order-date`;

  useEffect(() => {
    const fetchData = async () => {
      const result = await getOrdersId(Number(params.id));
      setOrder(result);

      const user = getLocalStorage('user');
      if (user) setRole(user.role);
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
              data-testid={ idOrder }
            >
              { order.id }
            </h4>
            {
              role === 'customer' && (
                <h4
                  data-testid={ idSellerName }
                >
                  P. Vend:
                  { seller }
                </h4>
              )
            }
            <h4
              data-testid={ idDate }
            >
              { moment(order.saleDate).format('DD/MM/YYYY') }
            </h4>
            <h4
              data-testid={ idStatus }
            >
              { order.status }
            </h4>
            {
              role === 'customer'
               && (
                 <button
                   type="button"
                   data-testid={ idCheckBtn }
                   disabled={ order.status !== 'Em Trânsito' }
                   onClick={
                     async () => updateStatus({ id: order.id, status: 'Entregue' })
                   }
                 >
                   MARCAR COMO ENTREGUE
                 </button>
               )
            }
            {
              role === 'seller'
               && (
                 <div>
                   <button
                     type="button"
                     data-testid={ idPrepareBtn }
                     disabled={ order.status !== 'Pendente' }
                     onClick={
                       async () => updateStatus({ id: order.id, status: 'Preparando' })
                     }
                   >
                     PREPARAR PEDIDO
                   </button>
                   <button
                     type="button"
                     data-testid={ idDispatchBtn }
                     disabled={ order.status !== 'Preparando' }
                     onClick={
                       async () => updateStatus({ id: order.id, status: 'Em Trânsito' })
                     }
                   >
                     SAIU PARA ENTREGA
                   </button>
                 </div>
               )
            }
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
                `${role}_order_details__element-order-table-item-number-${index}`
              }
            >
              {index + 1}
            </td>
            <td
              data-testid={
                `${role}_order_details__element-order-table-name-${index}`
              }
            >
              {elem.name}
            </td>
            <td
              data-testid={
                `${role}_order_details__element-order-table-quantity-${index}`
              }
            >
              {elem.quantity}
            </td>
            <td
              data-testid={
                `${role}_order_details__element-order-table-unit-price-${index}`
              }
            >
              { elem.price.replace('.', ',') }
            </td>
            <td
              data-testid={
                `${role}_checkout__element-order-table-sub-total-${index}`
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
        data-testid={ `${role}_order_details__element-order-total-price` }
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
