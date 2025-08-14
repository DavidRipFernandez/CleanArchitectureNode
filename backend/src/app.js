// src/app.js
require('dotenv').config();
const express = require("express");
const cors = require("cors");
const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
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

// Swagger Options
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Proyecto NUR',
      version: '1.0.0',
      description: 'Documentación de las API de NUR',
    },
    servers: [
      {
        url: `http://localhost:3000`,
        description: 'Servidor local',
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: { 
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        }
      }
    },
  },
  apis: ['./src/routes/*.js'], 
};

const swaggerSpec = swaggerJsDoc(swaggerOptions);
app.use('/swagger', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

module.exports = app;
