import PropTypes from 'prop-types';
import React, { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/cart';

export default function ProductCard(props) {
  const {
    data: { id, name, urlImage, price },
  } = props;

  const { cartProducts, setCartProducts } = useContext(CartContext);
  const [quantity, setQuantity] = useState(0);

  const handleClick = (target) => {
    const { value, name: btnName } = target;
    console.log(value);
    if (btnName === 'plusButton') {
      setQuantity((prevQnt) => prevQnt + 1);
    } else {
      setQuantity((prevQnt) => {
        if (prevQnt <= 1) {
          return 0;
        }
        return prevQnt - 1;
      });
    }
  };

  // componentDidUpdate com base em 'quantity' e atualiza o CartContext
  useEffect(() => {
    const handleCartContext = () => {
      if (quantity === 0) {
        return setCartProducts(
          cartProducts.filter((el) => el.id !== id),
        );
      }
      if (cartProducts.find((el) => el.id === id)) {
        return setCartProducts(cartProducts
          .map((el) => {
            if (el.id === id) return { ...el, quantity };
            return el;
          }));
      } setCartProducts(cartProducts.concat({ id, name, urlImage, price, quantity }));
      console.log(cartProducts, 'carProducts');
    };

    handleCartContext();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [quantity]);

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
        name="minusButton"
        type="button"
        // value={ [id, name, urlImage, price] }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ ({ target }) => handleClick(target) }
      >
        -
      </button>
      <input
        value={ quantity }
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
      <button
        name="plusButton"
        type="button"
        // value={ [id, name, urlImage, price] }
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ ({ target }) => handleClick(target) }
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
