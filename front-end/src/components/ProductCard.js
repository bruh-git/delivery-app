import PropTypes from 'prop-types';
import React from 'react';

export default function ProductCard(props) {
  const {
    data: { id, name, urlImage, price },
  } = props;

  return (
    <div data-testid="customer_products__element-navbar-link-products">
      <h2 data-testid={ `customer_products__element-card-price-${id}` }>
        {price.toString().replace('.', ',')}
      </h2>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <h2
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        {name}

      </h2>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </button>
      <input
        type="number"
        value="0"
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        +
      </button>
    </div>
  );
}
ProductCard.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  price: PropTypes.string,
  urlImage: PropTypes.string,
}.isRequired;
