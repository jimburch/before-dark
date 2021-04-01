const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/before-dark', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', () => { console.log('Mongoose connection error'); });
db.once('open', () => { console.log('Mongoose connected!'); });

module.exports = db;