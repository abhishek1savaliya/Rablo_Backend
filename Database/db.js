const mongoose = require('mongoose');
require('dotenv').config()

const connectDb = () => {
    mongoose.connect(process.env.MONGODB_URL);
    console.log("Connected Successfully")
}

module.exports = connectDb;