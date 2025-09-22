const mongoose = require('mongoose');
const filmSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    director: {
        type: String,
        required: true
    
    },
    releaseYear: {
        type: Number,   
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,   
        ref: 'User',
        required: true
    },
    categorie: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Categorie',
        required: true
    },
    rating: {
        type: Number,
        min: 0,
        max: 10
    }
}, { timestamps: true });