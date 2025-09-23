const favoris = require('../models/Favoris');
const jwt = require('jsonwebtoken');

exports.getAllFavoris = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const favorisList = await favoris.find({ user: req.user.userId }).populate('film');
        res.status(200).json(favorisList);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }   
};

exports.addFavori = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const { filmId } = req.body;
    if (!filmId) {
        return res.status(400).json({ message: 'Film ID is required' });
    }
    try {
        const existingFavori = await favoris.findOne({ film: filmId, user: req.user.userId });
        if (existingFavori) {
            return res.status(400).json({ message: 'Film is already in favorites' });
        }
        const newFavori = new favoris({ film: filmId, user: req.user.userId });
        await newFavori.save();
        res.status(201).json(newFavori);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};