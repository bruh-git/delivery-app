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

export const updateStatus = async ({ id, status }) => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  console.log(id);
  await instance({
    method: 'patch',
    url: '/orders',
    headers: {
      authorization: token,
    },
    data: { id, status },
  });
};

export const adminRegister = async (data, token) => {
  try {
    const response = await instance({
      method: 'post',
      url: '/admin',
      headers: {
        authorization: token,
      },
      data: { ...data },
    });

    return response.data;
  } catch (err) {
    return err.response.data;
  }
};

export const deleteUser = async (id) => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  await instance({
    method: 'delete',
    url: `/admin/${id}`,
    headers: {
      authorization: token,
    },
  });
};

export const getAllUsers = async () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  const response = await instance({
    method: 'get',
    url: '/admin',
    headers: {
      authorization: token,
    },
  });

  return response.data;
};
