const mongoose = require('mongoose');
const categorieFilmSchema = new mongoose .Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true });   

module.exports = mongoose.model('CategorieFilm', categorieFilmSchema );



