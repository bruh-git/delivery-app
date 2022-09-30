import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import MyOrders from '../components/MyOrders';
import { getOrdersByUser } from '../service/api';

function Orders() {
  const [orders, setOrders] = useState([]);

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
        orders.map((item, index) => (
          <MyOrders
            key={ index }
            id={ item.id }
            status={ item.status }
            saleDate={ item.saleDate }
            totalPrice={ item.totalPrice }
            deliveryAddress={ item.deliveryAddress }
            deliveryNumber={ item.deliveryNumber }
          />
        ))
      }
    </>
  );
}

export default Orders;
