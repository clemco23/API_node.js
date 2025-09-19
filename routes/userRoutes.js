const express = require('express');
const router = express.Router(); 
const userController = require('../controllers/userController');
const verifyToken = require('../middlewares/verifyToken');


//routes Publiques
router.post('/', userController.createUser);
router.post('/login', userController.loginUser);

//routes Privées
router.get('/', verifyToken, userController.getAllUsers);
router.get('/:id', verifyToken, userController.getUserById);
router.patch('/:id', verifyToken, userController.updateUser);
router.delete('/:id', verifyToken, userController.deleteUser);


module.exports = router;