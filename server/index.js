const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(cors());

app.listen(PORT, () => {
  console.log(`Server listening on PORT:${PORT}`)
});