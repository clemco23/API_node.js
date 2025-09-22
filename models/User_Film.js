const mongoose = require('mongoose');
const User_FilmSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    film: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Film',
        required: true
    },
    watched: {
        type: Boolean,
        default: false
    },  
    favorite: {
        type: Boolean,
        default: false
    }
}, { timestamps: true });