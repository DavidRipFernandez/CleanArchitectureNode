const userRepository = require('../repositories/userRepository');

const getAllUsers = async () => {
  return await userRepository.getAllUsers();
};

const createUser = async ({ name, email, type, password }) => {
  const existingUser = await userRepository.getUserByEmail(email);
  if (existingUser) {
    const error = new Error('El email ya está en uso.');
    error.status = 400;
    throw error;
  }
  return await userRepository.createUser({ name, email, type, password });
};

const updateUser = async (id, { name, email, type, password }) => {
  const existingUser = await userRepository.getUserByEmail(email);

  if (existingUser && existingUser.id !== parseInt(id, 10)) {
    const error = new Error('El email ya está en uso.');
    error.status = 400;
    throw error;
  }

  return await userRepository.updateUser(id, { name, email, type, password });
};

const deleteUser = async (id) => {
  const deleted = await userRepository.deleteUser(id);
  if (!deleted) {
    const error = new Error('Usuario no encontrado.');
    error.status = 404;
    throw error;
  }
  return true;
};

const getUserByEmail = async (email) => {
  return await userRepository.getUserByEmail(email);
}



module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail
};