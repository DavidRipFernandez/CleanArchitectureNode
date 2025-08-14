
const userService = require('../services/userService');

const jwt = require('jsonwebtoken');


const SECRET = process.env.secretKeyJwt

const login = async (req) => {
  const { email, password } = req.body;
  const user = await userService.getUserByEmail(email);

  if (!user || user.password !== password) {
    const error = new Error("Email o contraseña incorrectos");
    error.status = 401;
    throw error;
  }


  const payload = { id: user.id, email: user.email, type: user.type };
  const token = jwt.sign(payload, SECRET, { expiresIn: '2h' });

  return {
    message: "Login exitoso",
    technicalMessage: "Token generado",
    data: { token }
  };
};

module.exports = { login };

