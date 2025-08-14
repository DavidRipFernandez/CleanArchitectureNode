const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController'); 
const { controllerHandler } = require('../utils/controllerHandler');

const {authenticateToken} = require('../middlewares/authMiddleware');

router.use(authenticateToken);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         
 */
router.get('/', controllerHandler(userController.getAllUsers));

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Crear usuario
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, type, password]
 *             properties:
 *               name: { type: string }
 *               email: { type: string }
 *               type: { type: string }
 *               password: { type: string }
 *     responses:
 *       201:
 *         description: Usuario creado
 */
router.post('/', controllerHandler(userController.createUser));

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Actualizar usuario
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required: [name, email, type, password]
 *             properties:
 *               name: { type: string }
 *               email: { type: string }
 *               type: { type: string }
 *               password: { type: string }
 *     responses:
 *       200:
 *         description: Usuario actualizado
 */
router.put('/:id', controllerHandler(userController.updateUser));

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Eliminar usuario
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema: { type: integer }
 *     responses:
 *       200:
 *         description: Usuario eliminado
 */
router.delete('/:id', controllerHandler(userController.deleteUser));

module.exports = router;