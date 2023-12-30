const jwt = require('jsonwebtoken');
require('dotenv').config()

exports.generateToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET);
};

exports.verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {
        return null;
    }
};