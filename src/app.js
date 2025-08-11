// src/app.js
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const { poolConnect } = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

const app = express();
app.use(cors());
app.use(express.json());

// Rutas principales
app.use('/users', userRoutes);
app.use('/auth',authRoutes);

// Probar conexión a la DB
app.get('/conexionsql', async (req, res) => {
  try {
    await poolConnect;
    res.status(200).send('Base de datos Conectada');
  } catch (error) {
    console.error('Error de conexión en la bd', error);
    res.status(500).send("Conexión a la base de datos fallida");
  }
});

module.exports = app;
