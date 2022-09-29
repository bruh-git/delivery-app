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
