const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController'); 
const { controllerHandler } = require('../utils/controllerHandler');

const {authenticateToken} = require('../middlewares/authMiddleware');

router.use(authenticateToken);

router.get('/', controllerHandler(userController.getAllUsers));
router.post('/', controllerHandler(userController.createUser));
router.put('/:id', controllerHandler(userController.updateUser));
router.delete('/:id', controllerHandler(userController.deleteUser));

module.exports = router;