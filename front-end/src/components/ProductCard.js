import PropTypes from 'prop-types';
import React from 'react';

export default function ProductCard(props) {
  const {
    data: { id, name, urlImage, price },
  } = props;

  return (
    <div data-testid="customer_products__element-navbar-link-products">
      <h2 data-testid={ `customer_products__element-card-price-${id}` }>{price}</h2>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        source={ urlImage }
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
      <p data-testid={ `customer_products__input-card-quantity-${id}` }>0</p>
      <button
        type="button"
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
