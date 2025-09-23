const express = require ('express');
const router = express.Router();
const favoriController = require('../controllers/favoriController');
const verifyToken = require('../middlewares/verifyToken');

//routes Privées
router.get('/', verifyToken, favoriController.getAllFavoris);
router.post('/', verifyToken, favoriController.addFavori);

module.exports = router;