const express = require('express');
const router = express.Router(); 
const userController = require('../controllers/userController');


//routes Publiques
router.post('/', userController.createUser);
router.post('/login', userController.loginUser);

//routes Privées
router.get('/', userController.getAllUsers);
router.get('/:id', userController.getUserById);
router.patch('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;