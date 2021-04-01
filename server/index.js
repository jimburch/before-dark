const express = require('express');
const path = require('path');
// const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.js');
const getSunset = require('./controllers/sunset.js')
const storeLeaveStats = require('../database/controllers/leave.js');

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'client', 'dist')));
app.use(express.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`)
});

// ROUTERS

// app.get('/', )

app.get('/sunset/:zip', getSunset);
app.post('/leave', storeLeaveStats);