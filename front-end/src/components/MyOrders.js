import PropTypes from 'prop-types';
import moment from 'moment';

export default function MyOrders(props) {
  const { id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber } = props;
  const { role } = localStorage.getItem('user');

  return (
    <section data-testid={ `customer_products__element-order-date-${id}` }>
      <div className="id-order">
        <p>Pedido</p>
        <p>{ id }</p>
      </div>
      <div className="order-info">
        <div className="status">
          <p>{ status }</p>
        </div>
        <div className="details">
          <div className="date">
            <p>{ moment(saleDate).format('L') }</p>
          </div>
          <div className="price">
            <p>
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
