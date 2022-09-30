import instance from './instance';

export const loginUser = async (
  { userEmail, password },
) => instance.post('/login', {
  email: userEmail, password }).catch((err) => err.response.data);

export const registerUser = async (
  { userName, userEmail, password },
) => instance.post('/register', { name: userName, email: userEmail, password }).catch(
  (err) => err.response.data,
);

export const getProducts = async ({ token }) => instance.get(
  '/products',
  { headers: {
    authorization: token,
  } },
).catch(
  (err) => err.response.data,
);

export const getOrders = async (id) => instance.get(
  '/orders/:id',
  { id },
).catch(
  (err) => err.response.data,
);

export const getSellers = async () => instance.get(
  '/orders/sellers',
  { headers: {
    authorization: JSON.parse(localStorage.getItem('user')).token,
  } },
).catch(
  (err) => err.response.data,
);

export const postOrders = async (saleData) => {
  const response = await instance({
    method: 'post',
    headers: {
      authorization: JSON.parse(localStorage.getItem('user')).token,
    },
    url: '/orders',
    data: saleData,
  });

  return response.data;
};

export const getOrdersId = async (id) => {
  const response = await instance({
    method: 'get',
    headers: {
      authorization: JSON.parse(localStorage.getItem('user')).token,
    },
    url: `/orders/${id}`,
  });

  return response.data;
};
