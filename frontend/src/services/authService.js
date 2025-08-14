import api from './api';


export const login = async (credentials) => {
  const { data } = await api.post('/auth/login', credentials);
  return data.data.token;
};

export const getUsers = async () => {
  const { data } = await api.get('/users');
  return data;
};

export const createUser = async (userData) => {
  await api.post('/users', userData);
};

export const updateUser = async (id, userData) => {
  await api.put(`/users/${id}`, userData);
};

export const deleteUser = async (id) => {
  await api.delete(`/users/${id}`);
};