const Film = require('../models/Film');
const jwt = require('jsonwebtoken');

exports.getAllFilms = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const films = await Film.find();
        res.status(200).json({films, message: 'Films retrieved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};