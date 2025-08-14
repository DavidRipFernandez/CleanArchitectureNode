const userService = require('../services/userService');
const { sendResponse } = require('../utils/responseUtils');
/*
// GET ALL USERS
const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    return sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Usuarios obtenidos exitosamente.",
      technicalMessage: "Usuarios registrados en la base de datos.",
      data: users
    });
  } catch (error) {
    return sendResponse(res, {
      statusCode: 500,
      success: false,
      message: "No se logró obtener los usuarios.",
      technicalMessage: error.message,
      data: null
    });
  }
};

// CREATE USER
const createUser = async (req, res) => {
  try {
    const { name, email, type, password } = req.body;
    const user = await userService.createUser({ name, email, type, password });
    return sendResponse(res, {
      statusCode: 201,
      success: true,
      message: "Usuario creado exitosamente.",
      technicalMessage: "Usuario registrado correctamente.",
      data: user
    });
  } catch (error) {
    if (error.status === 400) {
      return sendResponse(res, {
        statusCode: 400,
        success: false,
        message: "El email ya está en uso.",
        technicalMessage: error.message,
        data: null
      });
    }
    return sendResponse(res, {
      statusCode: 500,
      success: false,
      message: "No se logró crear el usuario.",
      technicalMessage: error.message,
      data: null
    });
  }
};

// UPDATE USER
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email, type, password } = req.body;
  try {
    const user = await userService.updateUser(id, { name, email, type, password });
    if (!user) {
      return sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Usuario no encontrado.",
        technicalMessage: `No existe usuario con id ${id}.`,
        data: null
      });
    }
    return sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Usuario actualizado exitosamente.",
      technicalMessage: "Usuario actualizado correctamente.",
      data: user
    });
  } catch (error) {
    if (error.status === 400) {
      return sendResponse(res, {
        statusCode: 400,
        success: false,
        message: "El email ya está en uso.",
        technicalMessage: error.message,
        data: null
      });
    }
    return sendResponse(res, {
      statusCode: 500,
      success: false,
      message: "No se pudo actualizar el usuario.",
      technicalMessage: error.message,
      data: null
    });
  }
};

// DELETE USER
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await userService.deleteUser(id);
    if (!deleted) {
      return sendResponse(res, {
        statusCode: 404,
        success: false,
        message: "Usuario no encontrado.",
        technicalMessage: `No existe usuario con id ${id}.`,
        data: null
      });
    }
    return sendResponse(res, {
      statusCode: 200,
      success: true,
      message: "Usuario eliminado correctamente.",
      technicalMessage: "Usuario eliminado de la base de datos.",
      data: null
    });
  } catch (error) {
    return sendResponse(res, {
      statusCode: 500,
      success: false,
      message: "No se pudo eliminar el usuario.",
      technicalMessage: error.message,
      data: null
    });
  }
};
*/

const getAllUsers = async () => {
  const users = await userService.getAllUsers();
  return {
    message: "Usuarios obtenidos exitosamente.",
    technicalMessage: "Usuarios registrados en la base de datos.",
    data: users
  };
};

const createUser = async (req) => {
  const { name, email, type, password } = req.body;
  const user = await userService.createUser({ name, email, type, password });
  return {
    statusCode: 201,
    message: "Usuario creado exitosamente.",
    technicalMessage: "Usuario registrado correctamente.",
    data: user
  };
};

const updateUser = async (req) => {
  const { id } = req.params;
  const { name, email, type, password } = req.body;
  const user = await userService.updateUser(id, { name, email, type, password });
  if (!user) {
    const error = new Error('Usuario no encontrado.');
    error.status = 404;
    throw error;
  }
  return {
    message: "Usuario actualizado correctamente.",
    technicalMessage: "Usuario actualizado en la base de datos.",
    data: user
  };
};

const deleteUser = async (req) => {
  const { id } = req.params;
  const deleted = await userService.deleteUser(id);
  if (!deleted) {
    const error = new Error('Usuario no encontrado.');
    error.status = 404;
    throw error;
  }
  return {
    message: "Usuario eliminado correctamente.",
    technicalMessage: "Usuario eliminado de la base de datos.",
    data: null
  };
};


module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  deleteUser,
};
