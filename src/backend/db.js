const mongoose = require('mongoose');
require('dotenv').config()

const server = process.env.DB
const db = mongoose.connect(server)
    .then('Connected to database successfully!!!')
    .catch( err => console.log(`Couldn't connect to database: ${err}`));

module.exports.db = db;