const mongoose = require('mongoose');
const config = require('../config.js');

mongoose.connect(`mongodb+srv://jim:${config.MONGO}@before-dark.ygq6e.mongodb.net/before-dark`, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', () => { console.log('Mongoose connection error'); });
db.once('open', () => { console.log('Mongoose connected!'); });

module.exports = db;