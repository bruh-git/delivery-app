import instance from './instance';

export const loginUser = async (
  { email, password },
) => instance.post('/login', { email, password }).catch((err) => err.response.data);

export const register = async () => instance.post('/register');
