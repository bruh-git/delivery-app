import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
/* import addressContext from '../context/address'; */

function Address() {
/*   const { Role, Employee, setEmployee } = useContext(addressContext); */

  useEffect(() => {
    // tem que pegar os vendedores na rota, se tiver
  }, []);

  const handleClickOrders = async (event) => {
    event.preventDefault();
    /* const response = await getOrders(id); */

    const { history } = props;
    history.push('/customer/orders');
  };

  /*   const handleChange = (event) => {
    setEmployee(event.target.value);
  }; */

  return (
    <div>
      <div>
        <select
          data-testid="customer_checkout__select-seller"
          /*  onChange={ handleChange } */
        >
          <option value="{ Employee }">P. Vendedora Responsável:</option>
          <option value="{ Role.name }">
            name
          </option>
        </select>
        <input data-testid="customer_checkout__input-address" />
        <input data-testid="customer_checkout__input-address-number" />
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
Address.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default Address;
