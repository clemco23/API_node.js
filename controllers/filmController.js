const Film = require('../models/Film');
const jwt = require('jsonwebtoken');

exports.getAllFilms = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const films = await Film.find({ user: req.user.userId });
        res.status(200).json({films, message: 'Films retrieved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getFilmById = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const film = await Film.findById(req.params.id);
        if (!film) {
            return res.status(404).json({ message: 'Film not found' });
        }
        res.status(200).json({ film, message: 'Film retrieved successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.createFilm = async (req, res) => {
    if (!req.user) {
        return res.status(403).json({ message: 'Forbidden' });
    }
    try {
        const { title, director, releaseYear, pictures, description, rating, categorie } = req.body;
        const newFilm = new Film({ title, director, releaseYear, pictures, description, rating, categorie, user: req.user.userId });
        await newFilm.save();
        res.status(201).json(newFilm, { message: 'Film created successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateFilm = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const film = await Film.findById(req.params.id);
        if (!film) {
            return res.status(404).json({ message: 'Film not found' });
        }
        if (film.user.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Forbidden' });
        }   
        const { title, director, releaseYear, pictures, description, rating, categorie } = req.body;
        film.title = title || film.title;
        film.director = director || film.director;
        film.releaseYear = releaseYear || film.releaseYear;
        film.pictures = pictures || film.pictures;
        film.description = description || film.description;
        film.rating = rating || film.rating;
        film.categorie = categorie || film.categorie;
        await film.save();
        res.status(200).json({ film, message: 'Film updated successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteFilm = async (req, res) => {
    if (!req.user) {
        return res.status(401).json({ message: 'Unauthorized' });
    }   
    try {
        const film = await Film.findById(req.params.id);
        if (!film) {
            return res.status(404).json({ message: 'Film not found' });
        }
        if (film.user.toString() !== req.user.userId) {
            return res.status(403).json({ message: 'Forbidden' });
        }
        await film.deleteOne();
        res.status(200).json({ message: 'Film deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};