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

export const getSellers = async ({ token }) => instance.get(
  '/orders/sellers',
  { headers: {
    authorization: token,
  } },
).catch(
  (err) => err.response.data,
);

/* export const postOrders = async () => instance.post(
  '/orders',
  { headers: {
    authorization: JSON.parse(localStorage.getItem('user')).token,
  } },
).catch(
  (err) => err.response.data,
); */
// const api = axios.create({
//   baseURL: 'http://localhost:3001',
// });

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

export const getOrdersByUser = async () => {
  const { id, token } = JSON.parse(localStorage.getItem('user'));
  const response = await instance({
    method: 'get',
    url: `/orders/user/${id}`,
    headers: {
      authorization: token,
    },
  });

  return response.data;
};
