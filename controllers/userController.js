const User = require('../models/User');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.status(200).json({users, message: 'Users retrieved successfully' });
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};