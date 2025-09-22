const express = require('express');
const router = express.Router(); 
const filmController = require('../controllers/filmController');
const verifyToken = require('../middlewares/verifyToken');

//routes Privées
router.get('/', verifyToken, filmController.getAllFilms);

// router.get('/', filmController.getAllFilms);

module.exports = router;