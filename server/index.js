require('dotenv').config();
const express = require('express');
const cors = require('cors');
const getSunset = require('./controllers/sunset.controller.js');

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server listening on PORT:${PORT}`);
});

// ROUTERS
app.get('/sunset/:zip', getSunset);
