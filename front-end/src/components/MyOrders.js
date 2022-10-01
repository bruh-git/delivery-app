import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { getLocalStorage } from '../utils/localStorage';

export default function MyOrders(props) {
  const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = props;
  const [role, setRole] = useState();

  useEffect(() => {
    const user = getLocalStorage('user');
    if (user) setRole(user.role);
  }, []);

  return (
    <section
      style={ { backgroundColor: 'green', display: 'flex' } }
      data-testid={ `${role}_products__element-order-date-${id}` }
    >
      <div className="id-order">
        <p data-testid={ `${role}_orders__element-order-id-${id}` }>
          Pedido
        </p>
        <p>{ id }</p>
      </div>
      <div className="order-info">
        <div className="status">
          <p data-testid={ `${role}_orders__element-delivery-status-${id}` }>
            { status }
          </p>
        </div>
        <div className="details">
          <div className="date">
            <p data-testid={ `${role}_orders__element-order-date-${id}` }>
              { moment(saleDate).format('L') }
            </p>
          </div>
          <div className="price">
            <p data-testid={ `${role}_orders__element-card-price-${id}` }>
              R$
              {' '}
              { totalPrice.replace('.', ',') }
            </p>
          </div>
        </div>
        { role === 'seller'
          && (
            <p>
              `$
              { deliveryAddress }
              , $
              { deliveryNumber }
              `
            </p>
          )}
      </div>
    </section>
  );
}

MyOrders.propTypes = {
  id: PropTypes.number,
  status: PropTypes.string,
  saleDate: PropTypes.string,
  totalPrice: PropTypes.string,
}.isRequired;
