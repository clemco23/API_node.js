const express = require('express');
const router = express.Router(); 
const filmController = require('../controllers/filmController');
const verifyToken = require('../middlewares/verifyToken');

//routes Privées
router.get('/', verifyToken, filmController.getAllFilms);
router.get('/:id', verifyToken, filmController.getFilmById);
router.post('/', verifyToken, filmController.createFilm);
router.patch('/:id', verifyToken, filmController.updateFilm);
router.delete('/:id', verifyToken, filmController.deleteFilm);


module.exports = router;