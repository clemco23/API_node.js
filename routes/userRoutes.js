const express = require('express');
const router = express.Router(); 
const userController = require('../controllers/userController');

// Define routes for user operations
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.post('/', userController.createUser);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;