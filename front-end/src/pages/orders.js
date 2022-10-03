import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import MyOrders from '../components/MyOrders';
import { getOrdersByUser } from '../service/api';
import { getLocalStorage } from '../utils/localStorage';

function Orders() {
  const [orders, setOrders] = useState([]);
  const { role } = getLocalStorage('user');

  useEffect(
    () => {
      const fetchOrders = async () => {
        const result = await getOrdersByUser();
        setOrders(result);
      };
      fetchOrders();
    },
    [],
  );

  return (
    <>
      <Header />
      {' '}
      {
        orders
        && orders.map((item, index) => (
          <Link to={ `/${role}/orders/${item.id}` } key={ item.id }>
            <MyOrders
              key={ index }
              id={ item.id }
              status={ item.status }
              saleDate={ item.saleDate }
              totalPrice={ item.totalPrice }
              deliveryAddress={ item.deliveryAddress }
              deliveryNumber={ item.deliveryNumber }
            />
          </Link>
        ))
      }
    </>
  );
}

export default Orders;
