
const { pool } = require('../config/database');
const User = require('../models/User');

const getAllUsers = async () => {
  try {
    const request = pool.request();
    const result = await request.query('SELECT id, name, email, type, password FROM Users');
    return result.recordset.map(row => new User(row));
  } catch (error) {
    throw error;
  }
};

const createUser = async ({ name, email, type, password }) => {
  try {
    const request = pool.request();
    request.input('name', name);
    request.input('email', email);
    request.input('type', type);
    request.input('password', password);
    const result = await request.query(
      `INSERT INTO Users (name, email, type, password)
       OUTPUT INSERTED.id
       VALUES (@name, @email, @type, @password)`
    );
    const id = result.recordset[0].id;
    return new User({ id, name, email, type, password });
  } catch (error) {
    throw error;
  }
}

const getUserByEmail = async (email) => {
  const request = pool.request();
  request.input('email', email);
  const result = await request.query('SELECT * FROM Users WHERE email = @email');
  return result.recordset[0] || null;
};

const getUserByEmailExceptId = async (email, id) => {
  try {
    const request = pool.request();
    request.input('email', email);
    request.input('id', id);
    const result = await request.query(
      'SELECT * FROM Users WHERE email = @email AND id <> @id'
    );
    return result.recordset[0] || null;
  } catch (error) {
    throw error;
  }
};

const updateUser = async (id, userData) => {
  try {
    const request = pool.request();
    request.input('id', id);
    request.input('name', userData.name);
    request.input('email', userData.email);
    request.input('type', userData.type);
    request.input('password', userData.password);

    const result = await request.query(
      `UPDATE Users
       SET name = @name, email = @email, type = @type, password = @password
       WHERE id = @id`
    );

    if (result.rowsAffected[0] === 0) {
      return null; // No se encontró el usuario
    }

    return new User({ id, ...userData });
  } catch (error) {
    throw error;
  }
};


const findByEmail = async (email) => {
  try {
    const request = pool.request();
    const result = await request
      .input('email', email)
      .query('SELECT id, name, email, type, password FROM Users WHERE email = @email');
    if (result.recordset.length === 0) return null;
    return new User(result.recordset[0]);
  } catch (error) {
    throw error;
  }
};

const deleteUser = async (id) => {
  try{
    const request = pool.request();
    request.input('id',id);
    const result = await request.query('DELETE FROM Users WHERE id = @id');
    return result.rowsAffected[0] > 0;
  }catch(error){
    throw error;
  }
}


module.exports = {
  getAllUsers,
  createUser,
  findByEmail,
  getUserByEmail,
  getUserByEmailExceptId,
  updateUser,
  deleteUser
};
