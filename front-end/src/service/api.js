import instance from './instance';

export const loginUser = async (
  { email, password },
) => instance.post('/login', { email, password }).catch((err) => err.response.data);

export const registerUser = async (
  { name, email, password },
) => instance.post('/register', { name, email, password }).catch(
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
