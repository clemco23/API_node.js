const mongoose = require('mongoose');
const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,

    },
    director: {
        type: String,
        required: true
    
    },
    releaseYear: {
        type: Number,   
        required: true
    },
    pictures: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: false
    },
    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie',
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10,
        required: false
    },
    watched: {
        type: Boolean,
        default: false
    },
     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
}, { timestamps: true });

module.exports = mongoose.model('Film', filmSchema);