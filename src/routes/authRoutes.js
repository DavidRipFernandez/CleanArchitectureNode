const express = require('express');
const router = express.Router();
const { controllerHandler } = require('../utils/controllerHandler');
const authController = require('../controllers/authController');

router.post('/login', controllerHandler(authController.login));

module.exports = router;