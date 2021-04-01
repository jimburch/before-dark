const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('../database/index.js');
const getSunset = require('./controllers/sunset.js')
const storeLeaveStats = require('../database/controllers/leave.js');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`)
});

// ROUTERS

app.get('/sunset/:zip', getSunset);
app.post('/leave', storeLeaveStats);