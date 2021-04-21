const express = require('express');
const cors = require('cors');
const database = require('../database/index.js');
const getSunset = require('./controllers/sunset.js')
const storeLeaveStats = require('../database/controllers/leave.js');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`)
});

// ROUTERS

app.get('/sunset/:zip', getSunset);
app.post('/leave', storeLeaveStats);